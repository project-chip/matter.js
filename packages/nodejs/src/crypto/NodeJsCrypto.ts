/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Bytes,
    CRYPTO_AUTH_TAG_LENGTH,
    CRYPTO_EC_CURVE,
    CRYPTO_EC_KEY_BYTES,
    CRYPTO_ENCRYPT_ALGORITHM,
    CRYPTO_HASH_ALGORITHM,
    CRYPTO_SYMMETRIC_KEY_LENGTH,
    Crypto,
    CryptoDsaEncoding,
    CryptoVerifyError,
    PrivateKey,
} from "#general";
import * as crypto from "node:crypto";

export class NodeJsCrypto extends Crypto {
    encrypt(key: Uint8Array, data: Uint8Array, nonce: Uint8Array, aad?: Uint8Array): Uint8Array {
        const cipher = crypto.createCipheriv(CRYPTO_ENCRYPT_ALGORITHM, key, nonce, {
            authTagLength: CRYPTO_AUTH_TAG_LENGTH,
        });
        if (aad !== undefined) {
            cipher.setAAD(aad, { plaintextLength: data.length });
        }
        const encrypted = cipher.update(data);
        cipher.final();
        return Bytes.concat(encrypted, cipher.getAuthTag());
    }

    decrypt(key: Uint8Array, data: Uint8Array, nonce: Uint8Array, aad?: Uint8Array): Uint8Array {
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
        return new Uint8Array(result);
    }

    getRandomData(length: number): Uint8Array {
        return new Uint8Array(crypto.randomBytes(length));
    }

    ecdhGeneratePublicKey(): { publicKey: Uint8Array; ecdh: any } {
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.generateKeys();
        return { publicKey: new Uint8Array(ecdh.getPublicKey()), ecdh: ecdh };
    }

    ecdhGeneratePublicKeyAndSecret(peerPublicKey: Uint8Array): { publicKey: Uint8Array; sharedSecret: Uint8Array } {
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.generateKeys();
        return {
            publicKey: new Uint8Array(ecdh.getPublicKey()),
            sharedSecret: new Uint8Array(ecdh.computeSecret(peerPublicKey)),
        };
    }

    ecdhGenerateSecret(peerPublicKey: Uint8Array, ecdh: crypto.ECDH): Uint8Array {
        return new Uint8Array(ecdh.computeSecret(peerPublicKey));
    }

    hash(data: Uint8Array | Uint8Array[]): Uint8Array {
        const hasher = crypto.createHash(CRYPTO_HASH_ALGORITHM);
        if (Array.isArray(data)) {
            data.forEach(chunk => hasher.update(chunk));
        } else {
            hasher.update(data);
        }
        return new Uint8Array(hasher.digest());
    }

    pbkdf2(secret: Uint8Array, salt: Uint8Array, iteration: number, keyLength: number): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolver, rejecter) => {
            crypto.pbkdf2(secret, salt, iteration, keyLength, CRYPTO_HASH_ALGORITHM, (error, key) => {
                if (error !== null) rejecter(error);
                resolver(new Uint8Array(key));
            });
        });
    }

    hkdf(
        secret: Uint8Array,
        salt: Uint8Array,
        info: Uint8Array,
        length: number = CRYPTO_SYMMETRIC_KEY_LENGTH,
    ): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolver, rejecter) => {
            crypto.hkdf(CRYPTO_HASH_ALGORITHM, secret, salt, info, length, (error, key) => {
                if (error !== null) rejecter(error);
                resolver(new Uint8Array(key));
            });
        });
    }

    hmac(key: Uint8Array, data: Uint8Array): Uint8Array {
        const hmac = crypto.createHmac(CRYPTO_HASH_ALGORITHM, key);
        hmac.update(data);
        return new Uint8Array(hmac.digest());
    }

    sign(
        privateKey: JsonWebKey,
        data: Uint8Array | Uint8Array[],
        dsaEncoding: CryptoDsaEncoding = "ieee-p1363",
    ): Uint8Array {
        const signer = crypto.createSign(CRYPTO_HASH_ALGORITHM);
        if (Array.isArray(data)) {
            data.forEach(chunk => signer.update(chunk));
        } else {
            signer.update(data);
        }
        return new Uint8Array(
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
        data: Uint8Array,
        signature: Uint8Array,
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
        if (!success) throw new CryptoVerifyError("Signature verification failed");
    }

    createKeyPair() {
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.generateKeys();

        // The key exported from Node doesn't include most-significant bytes that are 0.  This doesn't affect how we
        // currently use keys but it's a little weird so 0 pad to avoid future confusion
        const privateKey = new Uint8Array(CRYPTO_EC_KEY_BYTES);
        const nodePrivateKey = ecdh.getPrivateKey();
        privateKey.set(nodePrivateKey, CRYPTO_EC_KEY_BYTES - nodePrivateKey.length);

        return PrivateKey(privateKey, { publicKey: ecdh.getPublicKey() });
    }
}
