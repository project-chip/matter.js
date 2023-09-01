/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Chai from "chai";
import {
    captureLog as captureLogFn,
    captureLogs as captureLogsFn,
    disableLogBuffering as disableLogBufferingFn
} from "./logging.js";

declare global {
    const expect: typeof Chai.expect;
    const captureLog: typeof captureLogFn;
    const captureLogs: typeof captureLogsFn;
    const disableLogBuffering: typeof disableLogBufferingFn;
}
