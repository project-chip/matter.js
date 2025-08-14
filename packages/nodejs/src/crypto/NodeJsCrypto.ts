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
    CryptoDecryptError,
    CryptoDsaEncoding,
    CryptoVerifyError,
    PrivateKey,
    PublicKey,
    asError,
} from "#general";
import * as crypto from "node:crypto";

export class NodeJsCrypto extends Crypto {
    implementationName = "Node.js";

    encrypt(key: BufferSource, data: BufferSource, nonce: BufferSource, aad?: BufferSource): BufferSource {
        const cipher = crypto.createCipheriv(CRYPTO_ENCRYPT_ALGORITHM, Bytes.of(key), Bytes.of(nonce), {
            authTagLength: CRYPTO_AUTH_TAG_LENGTH,
        });
        if (aad !== undefined) {
            cipher.setAAD(Bytes.of(aad), { plaintextLength: data.byteLength });
        }
        const encrypted = cipher.update(Bytes.of(data));
        cipher.final();
        return Bytes.concat(Bytes.of(encrypted), Bytes.of(cipher.getAuthTag()));
    }

    decrypt(key: BufferSource, encrypted: BufferSource, nonce: BufferSource, aad?: BufferSource): BufferSource {
        const cipher = crypto.createDecipheriv(CRYPTO_ENCRYPT_ALGORITHM, Bytes.of(key), Bytes.of(nonce), {
            authTagLength: CRYPTO_AUTH_TAG_LENGTH,
        });
        const data = Bytes.of(encrypted);
        const plaintextLength = data.length - CRYPTO_AUTH_TAG_LENGTH;
        if (aad !== undefined) {
            cipher.setAAD(Bytes.of(aad), { plaintextLength });
        }
        cipher.setAuthTag(data.slice(plaintextLength));
        const result = cipher.update(data.slice(0, plaintextLength));
        try {
            cipher.final();
        } catch (e) {
            throw new CryptoDecryptError(`${CRYPTO_ENCRYPT_ALGORITHM} decryption failed: ${asError(e).message}`);
        }
        return new Uint8Array(result);
    }

    randomBytes(length: number): BufferSource {
        return new Uint8Array(crypto.randomBytes(length));
    }

    ecdhGeneratePublicKey(): { publicKey: BufferSource; ecdh: any } {
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.generateKeys();
        return { publicKey: new Uint8Array(ecdh.getPublicKey()), ecdh: ecdh };
    }

    ecdhGeneratePublicKeyAndSecret(peerPublicKey: BufferSource): {
        publicKey: BufferSource;
        sharedSecret: BufferSource;
    } {
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.generateKeys();
        return {
            publicKey: new Uint8Array(ecdh.getPublicKey()),
            sharedSecret: new Uint8Array(ecdh.computeSecret(Bytes.of(peerPublicKey))),
        };
    }

    computeSha256(data: BufferSource | BufferSource[]): BufferSource {
        const hasher = crypto.createHash(CRYPTO_HASH_ALGORITHM);
        if (Array.isArray(data)) {
            data.forEach(chunk => hasher.update(Bytes.of(chunk)));
        } else {
            hasher.update(Bytes.of(data));
        }
        return new Uint8Array(hasher.digest());
    }

    createPbkdf2Key(
        secret: BufferSource,
        salt: BufferSource,
        iteration: number,
        keyLength: number,
    ): Promise<BufferSource> {
        return new Promise<BufferSource>((resolver, rejecter) => {
            crypto.pbkdf2(
                Bytes.of(secret),
                Bytes.of(salt),
                iteration,
                keyLength,
                CRYPTO_HASH_ALGORITHM,
                (error, key) => {
                    if (error !== null) rejecter(error);
                    resolver(new Uint8Array(key));
                },
            );
        });
    }

    createHkdfKey(
        secret: BufferSource,
        salt: BufferSource,
        info: BufferSource,
        length: number = CRYPTO_SYMMETRIC_KEY_LENGTH,
    ): Promise<BufferSource> {
        return new Promise<BufferSource>((resolver, rejecter) => {
            crypto.hkdf(
                CRYPTO_HASH_ALGORITHM,
                Bytes.of(secret),
                Bytes.of(salt),
                Bytes.of(info),
                length,
                (error, key) => {
                    if (error !== null) rejecter(error);
                    resolver(new Uint8Array(key));
                },
            );
        });
    }

    signHmac(key: BufferSource, data: BufferSource): BufferSource {
        const hmac = crypto.createHmac(CRYPTO_HASH_ALGORITHM, Bytes.of(key));
        hmac.update(Bytes.of(data));
        return new Uint8Array(hmac.digest());
    }

    signEcdsa(
        privateKey: JsonWebKey,
        data: BufferSource | BufferSource[],
        dsaEncoding: CryptoDsaEncoding = "ieee-p1363",
    ): BufferSource {
        const signer = crypto.createSign(CRYPTO_HASH_ALGORITHM);
        if (Array.isArray(data)) {
            data.forEach(chunk => signer.update(Bytes.of(chunk)));
        } else {
            signer.update(Bytes.of(data));
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

    verifyEcdsa(
        publicKey: JsonWebKey,
        data: BufferSource,
        signature: BufferSource,
        dsaEncoding: CryptoDsaEncoding = "ieee-p1363",
    ) {
        const verifier = crypto.createVerify(CRYPTO_HASH_ALGORITHM);
        verifier.update(Bytes.of(data));
        const success = verifier.verify(
            {
                key: publicKey as any,
                format: "jwk",
                type: "spki",
                dsaEncoding,
            },
            Bytes.of(signature),
        );
        if (!success) throw new CryptoVerifyError("Signature verification failed");
    }

    createKeyPair() {
        // Note that we this key may be used for DH or DSA but we use an ECDH to generate
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.generateKeys();

        // The key exported from Node doesn't include most-significant bytes that are 0.  This doesn't affect how we
        // currently use keys but it's a little weird so 0 pad to avoid future confusion
        const privateKey = new Uint8Array(CRYPTO_EC_KEY_BYTES);
        const nodePrivateKey = ecdh.getPrivateKey();
        privateKey.set(nodePrivateKey, CRYPTO_EC_KEY_BYTES - nodePrivateKey.length);

        return PrivateKey(privateKey, { publicKey: Bytes.of(ecdh.getPublicKey()) });
    }

    generateDhSecret(key: PrivateKey, peerKey: PublicKey): BufferSource {
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.setPrivateKey(Bytes.of(key.privateBits));

        return Bytes.of(ecdh.computeSecret(Bytes.of(peerKey.publicBits)));
    }
}
