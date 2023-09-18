/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Chai from "chai";
import ChaiAsPromised from "chai-as-promised";
import { browserSetup, generalSetup } from "./mocha.js";
import { cryptoSetup } from "./mocks/crypto.js";
import { loggerSetup } from "./mocks/logging.js";
import { TheMockTime, timeSetup } from "./mocks/time.js";

Chai.use(ChaiAsPromised);

Object.assign(globalThis as any, {
    expect: Chai.expect,
});

Object.assign(globalThis, {
    MatterHooks: {
        loggerSetup: loggerSetup,
        timeSetup: timeSetup,
        cryptoSetup: cryptoSetup,
    },

    MockTime: TheMockTime,
});

if (typeof window === "object" && globalThis === window) {
    generalSetup(Mocha);
    browserSetup(mocha);
}
