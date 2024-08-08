#!/usr/bin/env matter-run

// Use dynamic imports so we can thse modules before anything else
await(await import("../dist/esm/util/wtf.js")).wtf.initialize();
await(await import("../dist/esm/util/trace-unhandled.js")).traceUnhandled.initialize();

await (await import("../dist/esm/testing/cli.js")).main();
