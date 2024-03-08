#!/usr/bin/env matter-run

// Use dynamic imports so we can initialize wtfnode before anything else
await (await import("../dist/esm/util/wtf.js")).wtf.initialize();
await (await import("../dist/esm/testing/cli.js")).main();
