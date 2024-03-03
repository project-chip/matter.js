/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

const subtle = globalThis.crypto.subtle;

/**
 * An extremely minimal Crypto mock.
 *
 * Only supports those subsets of crypto required to complete matter.js tests.
 */
const TheCrypto = {
    getRandomData: (length: number) => {
        // Make random data deterministic
        const bytes = new Uint8Array(length);

        return bytes;
    },

    async pbkdf2(secret: Uint8Array, salt: Uint8Array, iteration: number, keyLength: number) {
        const key = await subtle.importKey("raw", secret, "PBKDF2", false, ["deriveBits"]);
        const bits = await subtle.deriveBits(
            {
                name: "PBKDF2",
                hash: "SHA-256",
                salt: salt,
                iterations: iteration,
            },
            key,
            keyLength * 8,
        );
        return new Uint8Array(bits);
    },

    async hkdf(secret: Uint8Array, salt: Uint8Array, info: Uint8Array, length: number = 16) {
        const key = await subtle.importKey("raw", secret, "HKDF", false, ["deriveBits"]);
        return new Uint8Array(
            await subtle.deriveBits(
                {
                    name: "HKDF",
                    hash: "SHA-256",
                    salt: salt,
                    info: info,
                },
                key,
                length,
            ),
        );
    },
};

export function cryptoSetup(Crypto: any) {
    Crypto.get = () => TheCrypto;
}
