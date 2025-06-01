/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Boot } from "#util/Boot.js";
import { MaybePromise } from "#util/Promises.js";
import * as mod from "@noble/curves/abstract/modular";
import * as utils from "@noble/curves/abstract/utils";
import { p256 } from "@noble/curves/p256";
import { NoProviderError } from "../MatterError.js";
import { Endian } from "../util/Bytes.js";
import { DataReader } from "../util/DataReader.js";
import { PrivateKey, PublicKey } from "./Key.js";

export const ec = {
    p256,
    ...utils,
    ...mod,
};

export const CRYPTO_RANDOM_LENGTH = 32;
export const CRYPTO_ENCRYPT_ALGORITHM = "aes-128-ccm";
export const CRYPTO_HASH_ALGORITHM = "sha256";
export const CRYPTO_EC_CURVE = "prime256v1";
export const CRYPTO_EC_KEY_BYTES = 32;
export const CRYPTO_AUTH_TAG_LENGTH = 16;
export const CRYPTO_SYMMETRIC_KEY_LENGTH = 16;
export type CryptoDsaEncoding = "ieee-p1363" | "der";

/**
 * These are the cryptographic primitives required to implement the Matter protocol.
 *
 * We provide a platform-independent implementation that uses Web Crypto via {@link crypto.subtle} and a JS-based
 * AES-CCM implementation.
 *
 * If your platform does not fully implement Web Crypto, or offers a native implementation of AES-CCM, you can replace
 * {@link Crypto.get} to expose a different implementation.
 *
 * WARNING: The standard implementation is unaudited.  See relevant warnings in StandardCrypto.ts.
 */
export interface Crypto {
    /**
     * Encrypt using AES-CCM with constants limited to those required by Matter.
     */
    encrypt(key: Uint8Array, data: Uint8Array, nonce: Uint8Array, aad?: Uint8Array): Uint8Array;

    /**
     * Decrypt using AES-CCM with constants limited to those required by Matter.
     */
    decrypt(key: Uint8Array, data: Uint8Array, nonce: Uint8Array, aad?: Uint8Array): Uint8Array;

    /**
     * Obtain random bytes from the most cryptographically-appropriate source available.
     */
    getRandomData(length: number): Uint8Array;

    /**
     * Compute the SHA-256 hash of a buffer.
     */
    computeSha256(data: Uint8Array | Uint8Array[]): MaybePromise<Uint8Array>;

    /**
     * Create a key from a secret using PBKDF2.
     */
    createPbkdf2Key(
        secret: Uint8Array,
        salt: Uint8Array,
        iteration: number,
        keyLength: number,
    ): MaybePromise<Uint8Array>;

    /**
     * Create a key from a secret using HKDF.
     */
    createHkdfKey(secret: Uint8Array, salt: Uint8Array, info: Uint8Array, length?: number): MaybePromise<Uint8Array>;

    /**
     * Create an HMAC signature.
     */
    signHmac(key: Uint8Array, data: Uint8Array): MaybePromise<Uint8Array>;

    /**
     * Create an ECDSA signature.
     */
    signEcdsa(
        privateKey: JsonWebKey,
        data: Uint8Array | Uint8Array[],
        dsaEncoding?: CryptoDsaEncoding,
    ): MaybePromise<Uint8Array>;

    /**
     * Authenticate an ECDSA signature.
     */
    verifyEcdsa(
        publicKey: JsonWebKey,
        data: Uint8Array,
        signature: Uint8Array,
        dsaEncoding?: CryptoDsaEncoding,
    ): MaybePromise<void>;

    /**
     * Create a general-purpose EC key.
     */
    createKeyPair(): MaybePromise<PrivateKey>;

    /**
     * Compute the shared secret for a Diffie-Hellman exchange.
     */
    generateDhSecret(key: PrivateKey, peerKey: PublicKey): MaybePromise<Uint8Array>;
}

/**
 * Crypto support functions.
 */
export const Crypto = {
    get(): Crypto {
        throw new NoProviderError("No provider configured");
    },

    encrypt(key: Uint8Array, data: Uint8Array, nonce: Uint8Array, aad?: Uint8Array) {
        return Crypto.get().encrypt(key, data, nonce, aad);
    },

    decrypt(key: Uint8Array, data: Uint8Array, nonce: Uint8Array, aad?: Uint8Array) {
        return Crypto.get().decrypt(key, data, nonce, aad);
    },

    getRandomData(length: number) {
        return Crypto.get().getRandomData(length);
    },

    getRandom() {
        return Crypto.get().getRandomData(CRYPTO_RANDOM_LENGTH);
    },

    getRandomUInt16() {
        return new DataReader(Crypto.get().getRandomData(2), Endian.Little).readUInt16();
    },

    getRandomUInt32() {
        return new DataReader(Crypto.get().getRandomData(4), Endian.Little).readUInt32();
    },

    getRandomBigUInt64() {
        return new DataReader(Crypto.get().getRandomData(8), Endian.Little).readUInt64();
    },

    getRandomBigInt(size: number, maxValue?: bigint) {
        const { bytesToNumberBE } = ec;
        if (maxValue === undefined) {
            return bytesToNumberBE(Crypto.getRandomData(size));
        }
        while (true) {
            const random = bytesToNumberBE(Crypto.getRandomData(size));
            if (random < maxValue) return random;
        }
    },

    computeSha256(data: Uint8Array | Uint8Array[]) {
        return Crypto.get().computeSha256(data);
    },

    createPbkdf2Key(secret: Uint8Array, salt: Uint8Array, iteration: number, keyLength: number) {
        return Crypto.get().createPbkdf2Key(secret, salt, iteration, keyLength);
    },

    createHkdfKey(secret: Uint8Array, salt: Uint8Array, info: Uint8Array, length?: number) {
        return Crypto.get().createHkdfKey(secret, salt, info, length);
    },

    signHmac(key: Uint8Array, data: Uint8Array) {
        return Crypto.get().signHmac(key, data);
    },

    signEcdsa(privateKey: JsonWebKey, data: Uint8Array | Uint8Array[], dsaEncoding?: CryptoDsaEncoding) {
        return Crypto.get().signEcdsa(privateKey, data, dsaEncoding);
    },

    verifyEcdsa(publicKey: JsonWebKey, data: Uint8Array, signature: Uint8Array, dsaEncoding?: CryptoDsaEncoding) {
        return Crypto.get().verifyEcdsa(publicKey, data, signature, dsaEncoding);
    },

    createKeyPair() {
        return Crypto.get().createKeyPair();
    },

    generateDhSecret(key: PrivateKey, peerKey: PublicKey) {
        return Crypto.get().generateDhSecret(key, peerKey);
    },
};

Crypto satisfies Crypto;

Boot.init(() => {
    Crypto.get = () => {
        throw new NoProviderError("No provider configured");
    };

    // Hook for testing frameworks
    if (typeof MatterHooks !== "undefined") {
        MatterHooks.cryptoSetup?.(Crypto);
    }
});
