/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Chai from "chai";
import { captureLog, captureLogs, disableLogBuffering } from "./logging.js";

Object.assign(globalThis, {
    expect: Chai.expect,
    captureLog,
    captureLogs,
    disableLogBuffering,
});
