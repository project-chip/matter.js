/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * An extremely minimal Crypto mock.
 */
const TheCrypto = {
    getRandomData: (length: number) => {
        // Make random data deterministic
        return new Uint8Array(length);
    },
};

export function cryptoSetup(Crypto: any) {
    Crypto.get = () => TheCrypto;
}
