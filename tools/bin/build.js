#!/usr/bin/env node

// We do not use run script to avoid the performance hit so source maps are
// not enabled for the build script itself

import { main } from "../dist/esm/building/cli.js"
await main();
