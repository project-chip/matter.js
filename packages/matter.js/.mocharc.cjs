/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This file configures mocha for "buildless" dev execution.  May be useful for
// running tests in IDE with Mocha support.

// Ideally we'd import build code but it's asynchronous so instead use
// spawnSync

const spawnSync = require("child_process").spawnSync;
const result = spawnSync("../../tools/bin/build.js", [ "cjs" ], { stdio: "inherit" });
if (result.error) {
    console.error(result.error);
    process.exit(-1);
}

module.exports = {
    inlineDiffs: true,
    file: [
        "../../tools/dist/cjs/testing/logging.js",
        "../../tools/dist/cjs/testing/global-definitions.js"
    ],
    spec: [ "build/cjs/test/**/*Test.js" ]
}
