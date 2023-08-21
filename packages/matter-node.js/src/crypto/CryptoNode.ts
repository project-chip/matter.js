/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Crypto,
    CryptoDsaEncoding,
    CryptoError,
    CRYPTO_AUTH_TAG_LENGTH,
    CRYPTO_EC_CURVE,
    CRYPTO_EC_KEY_BYTES,
    CRYPTO_ENCRYPT_ALGORITHM,
    CRYPTO_HASH_ALGORITHM,
    CRYPTO_SYMMETRIC_KEY_LENGTH,
    PrivateKey,
} from "@project-chip/matter.js/crypto";
import { ByteArray } from "@project-chip/matter.js/util";
import * as crypto from "crypto";

export class CryptoNode extends Crypto {
    encrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray {
        const cipher = crypto.createCipheriv(CRYPTO_ENCRYPT_ALGORITHM, key, nonce, {
            authTagLength: CRYPTO_AUTH_TAG_LENGTH,
        });
        if (aad !== undefined) {
            cipher.setAAD(aad, { plaintextLength: data.length });
        }
        const encrypted = cipher.update(data);
        cipher.final();
        return ByteArray.concat(encrypted, cipher.getAuthTag());
    }

    decrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray {
        const cipher = crypto.createDecipheriv(CRYPTO_ENCRYPT_ALGORITHM, key, nonce, {
            authTagLength: CRYPTO_AUTH_TAG_LENGTH,
        });
        const plaintextLength = data.length - CRYPTO_AUTH_TAG_LENGTH;
        if (aad !== undefined) {
            cipher.setAAD(aad, { plaintextLength });
        }
        cipher.setAuthTag(data.slice(plaintextLength));
        const result = cipher.update(data.slice(0, plaintextLength));
        cipher.final();
        return new ByteArray(result);
    }

    getRandomData(length: number): ByteArray {
        return new ByteArray(crypto.randomBytes(length));
    }

    ecdhGeneratePublicKey(): { publicKey: ByteArray; ecdh: any } {
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.generateKeys();
        return { publicKey: new ByteArray(ecdh.getPublicKey()), ecdh: ecdh };
    }

    ecdhGeneratePublicKeyAndSecret(peerPublicKey: ByteArray): { publicKey: ByteArray; sharedSecret: ByteArray } {
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.generateKeys();
        return {
            publicKey: new ByteArray(ecdh.getPublicKey()),
            sharedSecret: new ByteArray(ecdh.computeSecret(peerPublicKey)),
        };
    }

    ecdhGenerateSecret(peerPublicKey: ByteArray, ecdh: crypto.ECDH): ByteArray {
        return new ByteArray(ecdh.computeSecret(peerPublicKey));
    }

    hash(data: ByteArray | ByteArray[]): ByteArray {
        const hasher = crypto.createHash(CRYPTO_HASH_ALGORITHM);
        if (Array.isArray(data)) {
            data.forEach(chunk => hasher.update(chunk));
        } else {
            hasher.update(data);
        }
        return new ByteArray(hasher.digest());
    }

    pbkdf2(secret: ByteArray, salt: ByteArray, iteration: number, keyLength: number): Promise<ByteArray> {
        return new Promise<ByteArray>((resolver, rejecter) => {
            crypto.pbkdf2(secret, salt, iteration, keyLength, CRYPTO_HASH_ALGORITHM, (error, key) => {
                if (error !== null) rejecter(error);
                resolver(new ByteArray(key));
            });
        });
    }

    hkdf(
        secret: ByteArray,
        salt: ByteArray,
        info: ByteArray,
        length: number = CRYPTO_SYMMETRIC_KEY_LENGTH,
    ): Promise<ByteArray> {
        return new Promise<ByteArray>((resolver, rejecter) => {
            crypto.hkdf(CRYPTO_HASH_ALGORITHM, secret, salt, info, length, (error, key) => {
                if (error !== null) rejecter(error);
                resolver(new ByteArray(key));
            });
        });
    }

    hmac(key: ByteArray, data: ByteArray): ByteArray {
        const hmac = crypto.createHmac(CRYPTO_HASH_ALGORITHM, key);
        hmac.update(data);
        return new ByteArray(hmac.digest());
    }

    sign(
        privateKey: JsonWebKey,
        data: ByteArray | ByteArray[],
        dsaEncoding: CryptoDsaEncoding = "ieee-p1363",
    ): ByteArray {
        const signer = crypto.createSign(CRYPTO_HASH_ALGORITHM);
        if (Array.isArray(data)) {
            data.forEach(chunk => signer.update(chunk));
        } else {
            signer.update(data);
        }
        return new ByteArray(
            signer.sign({
                key: privateKey as any,
                format: "jwk",
                type: "pkcs8",
                dsaEncoding,
            }),
        );
    }

    verify(
        publicKey: JsonWebKey,
        data: ByteArray,
        signature: ByteArray,
        dsaEncoding: CryptoDsaEncoding = "ieee-p1363",
    ) {
        const verifier = crypto.createVerify(CRYPTO_HASH_ALGORITHM);
        verifier.update(data);
        const success = verifier.verify(
            {
                key: publicKey as any,
                format: "jwk",
                type: "spki",
                dsaEncoding,
            },
            signature,
        );
        if (!success) throw new CryptoError("Signature verification failed");
    }

    createKeyPair() {
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.generateKeys();

        // The key exported from Node doesn't include most-significant bytes
        // that are 0.  This doesn't affect how we currently use keys but it's
        // a little weird so 0 pad to avoid future confusion
        const privateKey = new ByteArray(CRYPTO_EC_KEY_BYTES);
        const nodePrivateKey = ecdh.getPrivateKey();
        privateKey.set(nodePrivateKey, CRYPTO_EC_KEY_BYTES - nodePrivateKey.length);

        return PrivateKey(privateKey, { publicKey: ecdh.getPublicKey() });
    }
}
