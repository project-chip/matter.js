/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { install } from "react-native-quick-crypto";

install(); // Install the react-native crypto module

import {
    CRYPTO_HASH_ALGORITHM,
    CryptoDsaEncoding,
    CryptoNode,
    CryptoVerifyError,
} from "@project-chip/matter-node.js/crypto";
import { DerCodec } from "@project-chip/matter.js/codec";
import { ByteArray } from "@project-chip/matter.js/util";
// @ts-expect-error No types but all fine
import jwt2pem from "jwk-to-pem";

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

export class CryptoReactNative extends CryptoNode {
    override sign(
        privateKey: JsonWebKey,
        data: ByteArray | ByteArray[],
        _dsaEncoding: CryptoDsaEncoding = "ieee-p1363",
    ): ByteArray {
        // @ts-expect-error No types but all fine
        const signer = crypto.createSign(CRYPTO_HASH_ALGORITHM);
        if (Array.isArray(data)) {
            data.forEach(chunk => signer.update(chunk));
        } else {
            signer.update(data);
        }
        const signatureDer = new ByteArray(
            signer.sign({
                key: jwt2pem(privateKey, { private: true }),
                format: "pem",
                type: "pkcs8",
                //dsaEncoding, ... will be DER for now because lib do not support it
            }),
        );

        // So lets build the ieee-p1363 signature version
        const decoded = DerCodec.decode(signatureDer);
        const signatureData = decoded._elements
            ?.filter(({ _tag }) => _tag === 2)
            .map(({ _bytes }) => {
                if (_bytes.length < 32) {
                    return ByteArray.concat(new ByteArray(32 - _bytes.length), _bytes);
                }
                if (_bytes.length > 32) {
                    while (_bytes.length > 32 && _bytes[0] === 0) {
                        _bytes = _bytes.slice(1);
                    }
                }
                if (_bytes.length !== 32) {
                    throw new CryptoVerifyError(`Signature element to long ${_bytes.toHex()}`);
                }
                return _bytes;
            });
        if (signatureData?.length !== 2) {
            throw new CryptoVerifyError(`Signature returned is too long: ${signatureData?.length}`);
        }
        return ByteArray.concat(...signatureData);
    }

    override verify(
        publicKey: JsonWebKey,
        data: ByteArray,
        signature: ByteArray,
        dsaEncoding: CryptoDsaEncoding = "ieee-p1363",
    ) {
        // @ts-expect-error No types but all fine
        const verifier = crypto.createVerify(CRYPTO_HASH_ALGORITHM);
        verifier.update(data);
        const success = verifier.verify(
            {
                key: jwt2pem(publicKey),
                format: "pem",
                type: "spki",
                dsaEncoding,
            },
            signature,
        );
        if (!success) throw new CryptoVerifyError("Signature verification failed");
    }
}
