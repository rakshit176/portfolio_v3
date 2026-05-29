import subprocess
import time
import urllib.request
import os
import signal
import sys

def start_server():
    """Start the Next.js standalone server"""
    os.chdir('/home/z/my-project')
    env = os.environ.copy()
    env['NODE_ENV'] = 'production'
    env['NODE_OPTIONS'] = '--max-old-space-size=192'
    proc = subprocess.Popen(
        ['node', '.next/standalone/server.js', '-p', '3000'],
        env=env,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    return proc

def check_server():
    """Check if server responds"""
    try:
        req = urllib.request.urlopen('http://localhost:3000/', timeout=5)
        return req.status == 200
    except:
        return False

def ping_server():
    """Ping the server to keep it alive"""
    try:
        urllib.request.urlopen('http://localhost:3000/', timeout=5)
    except:
        pass

if __name__ == '__main__':
    print(f"[{time.strftime('%H:%M:%S')}] Starting keep-alive daemon...")
    sys.stdout.flush()
    
    server_proc = None
    
    while True:
        # Check if server is alive
        if server_proc is None or server_proc.poll() is not None:
            print(f"[{time.strftime('%H:%M:%S')}] Starting server...")
            sys.stdout.flush()
            server_proc = start_server()
            time.sleep(3)
        
        if not check_server():
            print(f"[{time.strftime('%H:%M:%S')}] Server not responding, restarting...")
            sys.stdout.flush()
            if server_proc and server_proc.poll() is None:
                server_proc.terminate()
                time.sleep(1)
            server_proc = start_server()
            time.sleep(3)
        else:
            # Ping to keep alive
            ping_server()
        
        time.sleep(15)
