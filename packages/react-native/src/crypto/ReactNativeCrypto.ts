/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import QuickCrypto from "react-native-quick-crypto";

import {
    Bytes,
    Crypto,
    CRYPTO_HASH_LEN_BYTES,
    CRYPTO_SYMMETRIC_KEY_LENGTH,
    Environment,
    PrivateKey,
    PublicKey,
    StandardCrypto,
} from "#general";

/**
 * Crypto implementation for React Native.
 */
export class ReactNativeCrypto extends StandardCrypto {
    override implementationName = "ReactNativeCrypto";

    static override provider() {
        return new ReactNativeCrypto();
    }

    /**
     * Quick Crypto doesn't currently support {@link SubtleCrypto#deriveBits}.
     *
     * TODO - @luxni please confirm above is reason for this implementation
     *
     * TODO - @luxni it would be good to get attribution for this code
     */
    override async createHkdfKey(
        secret: Uint8Array,
        salt: Uint8Array,
        info: Uint8Array,
        length: number = CRYPTO_SYMMETRIC_KEY_LENGTH,
    ) {
        const prk = crypto
            // @ts-expect-error No types but all fine
            .createHmac("sha256", salt.byteLength ? salt : new Uint8Array(CRYPTO_HASH_LEN_BYTES))
            .update(secret)
            .digest();

        // T(0) = empty
        // T(1) = HMAC(PRK, T(0) | info | 0x01)
        // T(2) = HMAC(PRK, T(1) | info | 0x02)
        // T(3) = HMAC(PRK, T(2) | info | 0x03)
        // ...
        // T(N) = HMAC(PRK, T(N-1) | info | N)

        const N = Math.ceil(length / CRYPTO_HASH_LEN_BYTES);

        // Single T buffer to accomodate T = T(1) | T(2) | T(3) | ... | T(N)
        // with a little extra for info | N during T(N)
        const T = new Uint8Array(CRYPTO_HASH_LEN_BYTES * N + info.byteLength + 1);
        let prev = 0;
        let start = 0;
        for (let c = 1; c <= N; c++) {
            T.set(info, start);
            T[start + info.byteLength] = c;

            T.set(
                crypto
                    // @ts-expect-error No types but all fine
                    .createHmac(digest, prk)
                    .update(T.subarray(prev, start + info.byteLength + 1))
                    .digest(),
                start,
            );

            prev = start;
            start += CRYPTO_HASH_LEN_BYTES;
        }

        // OKM, releasing T
        return T.slice(0, length);
    }

    /**
     * Quick Crypto apparently appends a "." to the base64 encoded properties.  I'm not aware of a legitimate reason for
     * this, seems likely just a bug.  Regardless it trips us off so strip off.
     */
    override async createKeyPair() {
        const key = await super.createKeyPair();

        for (const prop of ["d", "x", "y"] as const) {
            if (key[prop]?.endsWith(".")) {
                key[prop] = key[prop].slice(0, key[prop].length - 1);
            }
        }

        return key;
    }

    /**
     * See comment on {@link createHkdfKey}.
     */
    override async generateDhSecret(key: PrivateKey, peerKey: PublicKey) {
        return key.sharedSecretFor(peerKey);
    }

    /**
     * Quick Crypto doesn't support import of raw keys so convert to JWK prior to import.
     *
     * TODO - @luxni please confirm this is the case
     */
    protected override importKey(
        format: KeyFormat,
        keyData: JsonWebKey | BufferSource,
        algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm,
        extractable: boolean,
        keyUsages: ReadonlyArray<KeyUsage>,
    ) {
        if (format === "raw") {
            format = "jwk";
            keyData = PrivateKey(Bytes.of(keyData as BufferSource));
        }
        return super.importKey(format, keyData, algorithm, extractable, keyUsages);
    }
}

Environment.default.set(Crypto, new ReactNativeCrypto(QuickCrypto.default.subtle as unknown as SubtleCrypto));
