#!/usr/bin/env bash
# Build and start the site (detached). Works with Compose v2 or v1.
set -euo pipefail
cd "$(dirname "$0")"

if docker compose version >/dev/null 2>&1; then
  DC="docker compose"
elif command -v docker-compose >/dev/null 2>&1; then
  DC="docker-compose"
else
  echo "Error: neither 'docker compose' nor 'docker-compose' is installed." >&2
  exit 1
fi

echo "Using: $DC"
$DC up -d --build "$@"
$DC ps
