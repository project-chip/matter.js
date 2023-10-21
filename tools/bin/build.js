#!/usr/bin/env node

import "../src/util/bootstrap.mjs";

// We do not use run script to avoid the performance hit so source maps are
// not enabled for the build script itself

// Run.  Import dynamically because we may have just built
const main = (await import("../dist/esm/building/cli.js")).main;
await main();
