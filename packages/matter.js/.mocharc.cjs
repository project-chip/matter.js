/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This file configures mocha for "buildless" dev execution.  May be useful for
// running tests in IDE with Mocha support.

// Build.  Ideally we'd import build code but it's asynchronous so instead use
// spawnSync
const spawnSync = require("child_process").spawnSync;
const result = spawnSync("../../tools/bin/build.js", [ "cjs" ], { stdio: "inherit" });
if (result.error) {
    console.error(result.error);
    process.exit(-1);
}

const cli = require("mocha/lib/cli/cli");

// Hook Mocha so we can futz with args
const main = cli.main;
cli.main = function(argv, args) {
    const spec = args._;

    // Remove wildcard test selection if there's an input file
    if (spec.length > 1 && spec[spec.length - 1] === "build/esm/test/**/*Test.js") {
        spec.length = spec.length - 1;
    }

    // Map input files to the compiled test
    for (let i = 0; i < spec.length; i++) {
        let path = spec[i];

        // Convenience - map src/ file to test equivalent
        path = path.replace(/src\/(.*)(\.[jt]s)/, "test/$1Test$2");

        // Map ts files to compiled equivalent
        path = path.replace(/test\/(.*)\.ts/, "build/esm/test/$1.js");

        spec[i] = path;
    }

    main.call(this, argv, args);
}

module.exports = {
    inlineDiffs: true,
    file: [
        "../../tools/dist/esm/testing/logging.js",
        "../../tools/dist/esm/testing/global-definitions.js"
    ],
    spec: [ "build/esm/test/**/*Test.js" ]
}
