/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { install } from "react-native-quick-crypto";

install(); // Install the react-native crypto module

import { CRYPTO_HASH_ALGORITHM, CryptoDsaEncoding, CryptoVerifyError } from "#general";
import { NodeJsCrypto } from "#nodejs";
import jwk2pem from "jwk-to-pem";

// @ts-expect-error No types but all fine
crypto.hkdf = (
    digest: "sha1" | "sha256" | "sha384" | "sha512",
    ikm: Uint8Array,
    salt: Uint8Array,
    info: Uint8Array,
    keylen: number,
) => {
    const hashlen = parseInt(digest.substr(3), 10) >> 3 || 20;
    const prk = crypto
        // @ts-expect-error No types but all fine
        .createHmac(digest, salt.byteLength ? salt : new Uint8Array(hashlen))
        .update(ikm)
        .digest();

    // T(0) = empty
    // T(1) = HMAC(PRK, T(0) | info | 0x01)
    // T(2) = HMAC(PRK, T(1) | info | 0x02)
    // T(3) = HMAC(PRK, T(2) | info | 0x03)
    // ...
    // T(N) = HMAC(PRK, T(N-1) | info | N)

    const N = Math.ceil(keylen / hashlen);

    // Single T buffer to accomodate T = T(1) | T(2) | T(3) | ... | T(N)
    // with a little extra for info | N during T(N)
    const T = new Uint8Array(hashlen * N + info.byteLength + 1);
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
        start += hashlen;
    }

    // OKM, releasing T
    return T.slice(0, keylen);
};

export class CryptoReactNative extends NodeJsCrypto {
    override sign(
        privateKey: JsonWebKey,
        data: Uint8Array | Uint8Array[],
        dsaEncoding: CryptoDsaEncoding = "ieee-p1363",
    ): Uint8Array {
        // @ts-expect-error No types but all fine
        const signer = crypto.createSign(CRYPTO_HASH_ALGORITHM);
        if (Array.isArray(data)) {
            data.forEach(chunk => signer.update(chunk));
        } else {
            signer.update(data);
        }
        return new Uint8Array(
            signer.sign({
                key: jwk2pem(privateKey as jwk2pem.JWK, { private: true }),
                format: "pem",
                type: "pkcs8",
                dsaEncoding,
            }),
        );
    }

    override verify(
        publicKey: JsonWebKey,
        data: Uint8Array,
        signature: Uint8Array,
        dsaEncoding: CryptoDsaEncoding = "ieee-p1363",
    ) {
        // @ts-expect-error No types but all fine
        const verifier = crypto.createVerify(CRYPTO_HASH_ALGORITHM);
        verifier.update(data);
        const success = verifier.verify(
            {
                key: jwk2pem(publicKey as jwk2pem.JWK),
                format: "pem",
                type: "spki",
                dsaEncoding,
            },
            signature,
        );
        if (!success) throw new CryptoVerifyError("Signature verification failed");
    }
}
