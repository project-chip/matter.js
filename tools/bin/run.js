#!/usr/bin/env node

import "../src/util/bootstrap.mjs";

// Run.  Import dynamically because we may have just built
const main = (await import("../dist/esm/running/cli.js")).main;
await main();
