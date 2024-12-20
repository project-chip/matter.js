#!/usr/bin/env matter-run

// Use dynamic imports so we can load these modules before anything else.  Do not report errors if not yet built
try {
    await (await import("../dist/esm/util/wtf.js")).wtf.initialize();
} catch (e) {
    if (e?.code !== "ERROR_MODULE_NOT_FOUND") {
        throw e;
    }
}
try {
    await (await import("../dist/esm/util/trace-unhandled.js")).traceUnhandled.initialize();
} catch (e) {
    if (e?.code !== "ERROR_MODULE_NOT_FOUND") {
        throw e;
    }
}

// Ensure test suite is compiled.  This is redundant when run under matter-run but allows us to avoid the extra process
// during development (e.g. in launch.json)
await import("@matter/tools/bootstrap");
await (await import("@matter/tools")).ensureCompiled(import.meta.url);

await (await import("../dist/esm/cli.js")).main();
