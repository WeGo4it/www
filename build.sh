#!/bin/bash
corepack enable
corepack prepare pnpm@latest --activate
pnpm install
pnpm run build
