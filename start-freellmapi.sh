#!/bin/bash
# Start freeLLMAPI service for the portfolio AI chat
cd /home/z/my-project/freellmapi-service
node server/dist/index.js &
echo "freeLLMAPI started on port 3001"
