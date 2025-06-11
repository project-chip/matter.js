/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "#log/Diagnostic.js";
import { Logger } from "#log/Logger.js";
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

const logger = Logger.get("Crypto");

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
     * The name used in log messages.
     */
    implementationName: string;

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

let logImplementationName = true;
let defaultInstance: undefined | Crypto;
let defaultProvider: undefined | (() => Crypto);

/**
 * Crypto support functions.
 */
export const Crypto = {
    /**
     * The default crypto implementation.
     */
    get default() {
        if (defaultInstance) {
            return defaultInstance;
        }

        if (defaultProvider === undefined) {
            throw new NoProviderError("There is no cryptography implementation installed");
        }

        defaultInstance = defaultProvider();

        if (logImplementationName) {
            logger.debug("Using", Diagnostic.strong(defaultInstance.implementationName), "cryptography implementation");
        }

        return defaultInstance;
    },

    get provider(): undefined | (() => Crypto) {
        return defaultProvider;
    },

    /**
     * Set the default crypto provider.
     */
    set provider(provider: () => Crypto) {
        if (defaultProvider === provider) {
            return;
        }
        defaultProvider = undefined;
        defaultProvider = provider;
    },

    get implementationName() {
        return Crypto.default.implementationName;
    },

    encrypt(key: Uint8Array, data: Uint8Array, nonce: Uint8Array, aad?: Uint8Array) {
        return Crypto.default.encrypt(key, data, nonce, aad);
    },

    decrypt(key: Uint8Array, data: Uint8Array, nonce: Uint8Array, aad?: Uint8Array) {
        return Crypto.default.decrypt(key, data, nonce, aad);
    },

    getRandomData(length: number) {
        return Crypto.default.getRandomData(length);
    },

    getRandom() {
        return Crypto.default.getRandomData(CRYPTO_RANDOM_LENGTH);
    },

    getRandomUInt16() {
        return new DataReader(Crypto.default.getRandomData(2), Endian.Little).readUInt16();
    },

    getRandomUInt32() {
        return new DataReader(Crypto.default.getRandomData(4), Endian.Little).readUInt32();
    },

    getRandomBigUInt64() {
        return new DataReader(Crypto.default.getRandomData(8), Endian.Little).readUInt64();
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
        return Crypto.default.computeSha256(data);
    },

    createPbkdf2Key(secret: Uint8Array, salt: Uint8Array, iteration: number, keyLength: number) {
        return Crypto.default.createPbkdf2Key(secret, salt, iteration, keyLength);
    },

    createHkdfKey(secret: Uint8Array, salt: Uint8Array, info: Uint8Array, length?: number) {
        return Crypto.default.createHkdfKey(secret, salt, info, length);
    },

    signHmac(key: Uint8Array, data: Uint8Array) {
        return Crypto.default.signHmac(key, data);
    },

    signEcdsa(privateKey: JsonWebKey, data: Uint8Array | Uint8Array[], dsaEncoding?: CryptoDsaEncoding) {
        return Crypto.default.signEcdsa(privateKey, data, dsaEncoding);
    },

    verifyEcdsa(publicKey: JsonWebKey, data: Uint8Array, signature: Uint8Array, dsaEncoding?: CryptoDsaEncoding) {
        return Crypto.default.verifyEcdsa(publicKey, data, signature, dsaEncoding);
    },

    createKeyPair() {
        return Crypto.default.createKeyPair();
    },

    generateDhSecret(key: PrivateKey, peerKey: PublicKey) {
        return Crypto.default.generateDhSecret(key, peerKey);
    },
};

Crypto satisfies Crypto;

Boot.init(() => {
    logImplementationName = true;
    defaultInstance = undefined;
    defaultProvider = undefined;

    // Testing framework configuration
    if (typeof MatterHooks !== "undefined") {
        // Crypto access occurs before log messages are intercepted so do not log implementation in test environment
        logImplementationName = true;

        // Configure mocking
        MatterHooks.cryptoSetup?.(Crypto);
    }
});
