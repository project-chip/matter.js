/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
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
