/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This file configures mocha for "buildless" dev execution.  It does not load
// any tests if there are command line arguments; this allows you to select one
// or more tests manually using the normal mocha command.  No arguments will
// result in all tests running

module.exports = {
    loader: "ts-node/esm",
    extensions: [ "ts" ],
    inlineDiffs: true,
    file: [
        "test/support/declare-globals.ts",
        "test/support/define-globals.ts",
        "test/support/logging.ts"
    ]
}

if (typeof process !== "undefined" && process?.argv?.length === 2) {
    module.exports.spec = [ "test/**/*Test.ts" ];
}
