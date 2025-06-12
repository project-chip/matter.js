/**
 * @license
 *
 * Portions copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DerBigUint, DerCodec, DerError } from "#codec/DerCodec.js";
import { Environment } from "#environment/Environment.js";
import { Bytes } from "#util/Bytes.js";
import { Ccm } from "./aes/Ccm.js";
import { Crypto, CRYPTO_SYMMETRIC_KEY_LENGTH, CryptoDsaEncoding } from "./Crypto.js";
import { CryptoVerifyError, KeyInputError } from "./CryptoError.js";
import { CurveType, Key, KeyType, PrivateKey, PublicKey } from "./Key.js";

const subtle = globalThis.crypto.subtle;

const SIGNATURE_ALGORITHM = <EcdsaParams>{
    name: "ECDSA",
    namedCurve: "P-256",
    hash: { name: "SHA-256" },
};

/**
 * A {@link Crypto} implementation based on standard "crypto.subtle" with missing portions implemented using JS.
 *
 * WARNING: This code is unaudited.  Use a trusted native alternative where available.
 *
 * This module is mostly based on  {@link crypto.subtle}.  This should be a reliable native implementation.  However,
 * Web Crypto doesn't support AES-CCM required by Matter so fall back to a JS implementation for that.  See relevant
 * warnings in the "aes" subdirectory.
 */
export class StandardCrypto extends Crypto {
    implementationName = "JS";

    static provider() {
        return new StandardCrypto();
    }

    randomBytes(length: number): Uint8Array {
        const result = new Uint8Array(length);
        crypto.getRandomValues(result);
        return result;
    }

    encrypt(key: Uint8Array, data: Uint8Array, nonce: Uint8Array, associatedData?: Uint8Array) {
        const ccm = Ccm(key);
        return ccm.encrypt({ pt: data, nonce, adata: associatedData });
    }

    decrypt(key: Uint8Array, data: Uint8Array, nonce: Uint8Array, associatedData?: Uint8Array) {
        const ccm = Ccm(key);
        return ccm.decrypt({ ct: data, nonce, adata: associatedData });
    }

    async computeSha256(buffer: Uint8Array | Uint8Array[]) {
        if (Array.isArray(buffer)) {
            buffer = Bytes.concat(...buffer);
        }
        return new Uint8Array(await subtle.digest("SHA-256", buffer));
    }

    async createPbkdf2Key(secret: Uint8Array, salt: Uint8Array, iteration: number, keyLength: number) {
        const key = await importKey("raw", secret, "PBKDF2", false, ["deriveBits"]);
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
    }

    async createHkdfKey(
        secret: Uint8Array,
        salt: Uint8Array,
        info: Uint8Array,
        length: number = CRYPTO_SYMMETRIC_KEY_LENGTH,
    ) {
        const key = await importKey("raw", secret, "HKDF", false, ["deriveBits"]);
        const bits = await subtle.deriveBits(
            {
                name: "HKDF",
                hash: "SHA-256",
                salt: salt,
                info: info,
            },
            key,
            8 * length,
        );
        return new Uint8Array(bits);
    }

    async signHmac(secret: Uint8Array, data: Uint8Array) {
        const key = await importKey("raw", secret, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
        return new Uint8Array(await subtle.sign("HMAC", key, data));
    }

    async signEcdsa(key: JsonWebKey, data: Uint8Array | Uint8Array[], dsaEncoding?: CryptoDsaEncoding) {
        if (Array.isArray(data)) {
            data = Bytes.concat(...data);
        }

        const { crv, kty, d, x, y } = key;

        key = {
            kty,
            crv,
            d,
            x,
            y,
            ext: true, // Required by some subtle implementations to sign
            key_ops: ["sign"],
        };

        const subtleKey = await importKey("jwk", key, SIGNATURE_ALGORITHM, false, ["sign"]);

        const ieeeP1363 = await subtle.sign(SIGNATURE_ALGORITHM, subtleKey, data);

        if (dsaEncoding !== "der") return new Uint8Array(ieeeP1363);

        const bytesPerComponent = ieeeP1363.byteLength / 2;

        return DerCodec.encode({
            r: DerBigUint(ieeeP1363.slice(0, bytesPerComponent)),
            s: DerBigUint(ieeeP1363.slice(bytesPerComponent)),
        });
    }

    async verifyEcdsa(key: JsonWebKey, data: Uint8Array, signature: Uint8Array, dsaEncoding?: CryptoDsaEncoding) {
        const { crv, kty, x, y } = key;
        key = { crv, kty, x, y };
        const subtleKey = await importKey("jwk", key, SIGNATURE_ALGORITHM, false, ["verify"]);

        if (dsaEncoding === "der") {
            try {
                const decoded = DerCodec.decode(signature);

                const r = DerCodec.decodeBigUint(decoded?._elements?.[0], 32);
                const s = DerCodec.decodeBigUint(decoded?._elements?.[1], 32);

                signature = Bytes.concat(r, s);
            } catch (cause) {
                DerError.accept(cause);

                throw new CryptoVerifyError("Invalid DER signature", { cause });
            }
        }

        const verified = await subtle.verify(SIGNATURE_ALGORITHM, subtleKey, signature, data);

        if (!verified) {
            throw new CryptoVerifyError("Signature verification failed");
        }
    }

    async createKeyPair() {
        const subtleKey = await subtle.generateKey(
            {
                // We must specify either ECDH or ECDSA to get an EC key but we may use the key for either (but not for
                // both)
                name: "ECDH",
                namedCurve: "P-256",
            },
            true,

            // We must also specify usage but will drop this on export
            ["deriveKey"],
        );

        // Do not export as JWK because we do not want to inherit the algorithm and key_ops
        const key = await subtle.exportKey("jwk", subtleKey.privateKey);

        // Extract only private and public fields; we do not want key_ops
        return Key({
            kty: KeyType.EC,
            crv: CurveType.p256,
            d: key.d,
            x: key.x,
            y: key.y,
        }) as PrivateKey;
    }

    async generateDhSecret(key: PrivateKey, peerKey: PublicKey) {
        const subtleKey = await importKey(
            "jwk",
            key,
            {
                name: "ECDH",
                namedCurve: "P-256",
            },
            false,
            ["deriveBits"],
        );

        const subtlePeerKey = await importKey(
            "jwk",
            peerKey,
            {
                name: "ECDH",
                namedCurve: "P-256",
            },
            false,
            [],
        );

        const secret = await subtle.deriveBits(
            {
                name: "ECDH",
                public: subtlePeerKey,
            },
            subtleKey,
            256,
        );

        return new Uint8Array(secret);
    }
}

function importKey(
    format: "jwk",
    keyData: JsonWebKey,
    algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm,
    extractable: boolean,
    keyUsages: ReadonlyArray<KeyUsage>,
): Promise<CryptoKey>;
function importKey(
    format: Exclude<KeyFormat, "jwk">,
    keyData: BufferSource,
    algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm,
    extractable: boolean,
    keyUsages: KeyUsage[],
): Promise<CryptoKey>;

async function importKey(...params: unknown[]) {
    try {
        return await crypto.subtle.importKey(...(params as Parameters<SubtleCrypto["importKey"]>));
    } catch (cause) {
        throw new KeyInputError("Invalid key", { cause });
    }
}

Environment.default.set(Crypto, new StandardCrypto());
