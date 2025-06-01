/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Boot } from "./boot.js";

/**
 * An arbitrary fill byte for mock random data.  At some point a pseudo-random function may make sense but for now this
 * suffices.  Do not choose 0 or 0xff because that will interfere with logic that disallows 0 or -1.
 */
const FILL_BYTE = 0x80;

interface CryptoInstance {
    getRandomData(length: number): Uint8Array;
}

interface CryptoNamespace {
    get(): CryptoInstance;
}

let RealCrypto: undefined | CryptoNamespace;

let restoreRandomness: undefined | (() => void);

export const MockCrypto: MockCrypto = {
    set random(value: boolean) {
        if (RealCrypto === undefined) {
            return;
        }

        if (value === this.random) {
            return;
        }

        restoreRandomness?.();
        if (!value) {
            const instance = RealCrypto.get();

            const realGetRandomData = instance.getRandomData;
            instance.getRandomData = length => {
                const result = new Uint8Array(length);
                result.fill(FILL_BYTE);
                return result;
            };

            restoreRandomness = () => {
                instance.getRandomData = realGetRandomData;
                restoreRandomness = undefined;
            };
        }
    },

    get random() {
        return !restoreRandomness;
    },

    withRandom<T>(value: boolean, actor: () => T): T {
        const revertTo = !!restoreRandomness;
        let isAsync = false;
        try {
            MockCrypto.random = value;
            const result = actor();
            if (typeof (result as any)?.then === "function") {
                isAsync = true;
                return Promise.resolve(result).finally(() => {
                    MockCrypto.random = revertTo;
                }) as T;
            }
            return result;
        } finally {
            if (!isAsync) {
                MockCrypto.random = revertTo;
            }
        }
    },

    enable() {
        MockCrypto.random = false;
    },

    init() {
        if (MockCrypto.random) {
            MockCrypto.enable();
        }
    },
};

export function cryptoSetup(Crypto: CryptoNamespace) {
    RealCrypto = Crypto;
}

Boot.init(() => (MockCrypto.random = true));

export interface MockCrypto {
    /**
     * If false, crypto functions return all zeros instead of random data.  Resets to true for each test file.
     */
    random: boolean;

    /**
     * Set {@link random} to false.
     */
    enable(): void;

    /**
     * Enabled if not already enabled.
     */
    init(): void;

    /**
     * Perform an operation with altered {@link random} then revert.
     */
    withRandom<T>(value: boolean, actor: () => T): T;
}
