/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export type TestOptions = {
    profile?: boolean;
    grep?: string;
    fgrep?: string;
    invert?: boolean;
    allLogs?: boolean;
};
