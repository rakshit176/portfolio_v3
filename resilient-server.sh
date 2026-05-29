#!/bin/bash
# Resilient server that auto-restarts
PORT=3000
cd /home/z/my-project

while true; do
    echo "[$(date)] Starting Next.js server on port $PORT..."
    NODE_OPTIONS='--max-old-space-size=128' node .next/standalone/server.js -p $PORT
    EXIT_CODE=$?
    echo "[$(date)] Server exited with code $EXIT_CODE, restarting in 2s..."
    sleep 2
done
