#!/bin/bash
cd /home/z/my-project

# Install dependencies
bun install

# Push database schema
bun run db:push

# Start dev server with auto-restart
while true; do
    echo "[$(date)] Starting Next.js dev server..."
    bun run dev &
    DEV_PID=$!
    
    # Wait for server to be ready
    for i in $(seq 1 30); do
        if curl -s -o /dev/null http://localhost:3000/ 2>/dev/null; then
            echo "[$(date)] Dev server is ready (PID: $DEV_PID)"
            break
        fi
        sleep 2
    done
    
    # Keep server alive by pinging it
    while kill -0 $DEV_PID 2>/dev/null; do
        sleep 20
        curl -s -o /dev/null http://localhost:3000/ 2>/dev/null
    done
    
    echo "[$(date)] Dev server died, restarting in 3s..."
    sleep 3
done
