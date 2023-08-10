/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

//import ExpectDefault from "expect";

import { captureLog, captureLogs } from "./logging.js";

Object.assign(globalThis, {
    //expect: ExpectDefault.expect
    captureLog,
    captureLogs,
});
