/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export class InternalBuildError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class BuildError extends Error {
    constructor(readonly diagnostics: string) {
        super();
    }
}
