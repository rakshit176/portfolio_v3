import { spawn } from 'child_process';
import http from 'http';

const PORT = 3000;
let serverProcess = null;
let restartCount = 0;

function startServer() {
    console.log(`[${new Date().toISOString()}] Starting server (restart #${restartCount})...`);
    
    serverProcess = spawn('node', ['.next/standalone/server.js', '-p', PORT], {
        env: { ...process.env, NODE_ENV: 'production' },
        stdio: ['pipe', 'pipe', 'pipe']
    });
    
    serverProcess.stdout.on('data', (data) => {
        process.stdout.write(data);
    });
    
    serverProcess.stderr.on('data', (data) => {
        process.stderr.write(data);
    });
    
    serverProcess.on('exit', (code, signal) => {
        console.log(`[${new Date().toISOString()}] Server exited (code=${code}, signal=${signal})`);
        restartCount++;
        setTimeout(startServer, 2000);
    });
    
    // Keep stdin open to prevent orphan detection
    serverProcess.stdin.write('\n');
}

function pingServer() {
    const req = http.get(`http://localhost:${PORT}/`, (res) => {
        console.log(`[${new Date().toISOString()}] Ping OK (${res.statusCode})`);
    });
    req.on('error', () => {
        console.log(`[${new Date().toISOString()}] Ping failed`);
    });
}

startServer();

// Ping every 15 seconds to keep alive
setInterval(pingServer, 15000);

// Keep process alive
setInterval(() => {
    if (serverProcess && !serverProcess.killed) {
        serverProcess.stdin.write('\n');
    }
}, 10000);
