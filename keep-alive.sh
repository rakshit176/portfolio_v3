#!/bin/bash
cd /home/z/my-project
while true; do
    NODE_ENV=production bun .next/standalone/server.js -p 3000 2>/tmp/server-err.log
    echo "[$(date)] Server died, restarting in 1s..." >> /tmp/keep-alive.log
    sleep 1
done
