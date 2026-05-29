#!/bin/bash
# Keep the Next.js server alive by pinging it periodically
while true; do
    curl -s -o /dev/null http://localhost:3000/ 2>/dev/null
    sleep 25
done
