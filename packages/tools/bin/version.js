#!/usr/bin/env node

import "../src/util/bootstrap.mjs";

// Run.  Import dynamically because we may have just built
const main = (await import("../dist/esm/versioning/cli.js")).main;
await main();
