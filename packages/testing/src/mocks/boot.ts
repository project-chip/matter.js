/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

const initializers = Array<() => void>();

export interface Boot {
    init(fn: () => void): void;
    reboot(): void;
}

export const Boot: Boot = {
    init(fn) {
        fn();
        initializers.push(fn);
    },

    reboot() {
        for (const initializer of initializers) {
            initializer();
        }
    },
};

export function bootSetup(theBoot: Boot) {
    theBoot.init(() => {
        Boot.reboot();
    });
}
