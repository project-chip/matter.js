/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Chai from "chai";
import ChaiAsPromised from "chai-as-promised";
import { browserSetup } from "./mocha.js";

Chai.use(ChaiAsPromised);

Object.assign(globalThis as any, {
    expect: Chai.expect,
    MatterLoggerSink: undefined
});

if (typeof window === "object" && globalThis === window) {
    browserSetup(mocha);
}
