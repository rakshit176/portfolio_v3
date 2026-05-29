import subprocess
import time
import os
import signal
import sys
import http.client

def check_server():
    try:
        conn = http.client.HTTPConnection("localhost", 3000, timeout=3)
        conn.request("GET", "/")
        resp = conn.getresponse()
        conn.close()
        return resp.status == 200
    except:
        return False

def start_server():
    env = os.environ.copy()
    env['NODE_ENV'] = 'production'
    proc = subprocess.Popen(
        ['node', '/home/z/my-project/.next/standalone/server.js', '-p', '3000'],
        env=env,
        cwd='/home/z/my-project',
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )
    return proc

# Main loop
print(f"[{time.strftime('%H:%M:%S')}] Daemon starting...", flush=True)
server_proc = start_server()
time.sleep(3)

while True:
    # Check if server process is alive
    if server_proc.poll() is not None:
        print(f"[{time.strftime('%H:%M:%S')}] Server died (exit code: {server_proc.poll()}), restarting...", flush=True)
        server_proc = start_server()
        time.sleep(3)
        continue
    
    # Check if server responds
    if not check_server():
        print(f"[{time.strftime('%H:%M:%S')}] Server not responding, killing and restarting...", flush=True)
        server_proc.kill()
        server_proc.wait()
        server_proc = start_server()
        time.sleep(3)
        continue
    
    # Read any stdout from server (keeps pipes flowing)
    try:
        server_proc.stdin.write(b'\n')
        server_proc.stdin.flush()
    except:
        pass
    
    time.sleep(5)
