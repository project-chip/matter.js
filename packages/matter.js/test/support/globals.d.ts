/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { captureLog as captureLogFn, captureLogs as captureLogsFn } from "./logging.js";

declare global {
    // Our globals
    const captureLog: typeof captureLogFn;
    const captureLogs: typeof captureLogsFn;
}
