/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ByteArray } from "@project-chip/matter.js";
import * as BN from "bn.js";

export const CRYPTO_RANDOM_LENGTH = 32;
export const CRYPTO_ENCRYPT_ALGORITHM = "aes-128-ccm";
export const CRYPTO_HASH_ALGORITHM = "sha256";
export const CRYPTO_EC_CURVE = "prime256v1";
export const CRYPTO_AUTH_TAG_LENGTH = 16;
export const CRYPTO_SYMMETRIC_KEY_LENGTH = 16;
export type CryptoDsaEncoding = "ieee-p1363" | "der";

export type KeyPair = {
    publicKey: ByteArray,
    privateKey: ByteArray,
}

export interface CryptoInterface {
    encrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray;
    decrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray;
    getRandomData(length: number): ByteArray;
    getRandom(): ByteArray
    getRandomUInt16(): number;
    getRandomUInt32(): number;
    getRandomBigUInt64(): bigint;
    getRandomBN(size: number, maxValue: BN): BN;
    ecdhGeneratePublicKey(): { publicKey: ByteArray, ecdh: any };
    ecdhGeneratePublicKeyAndSecret(peerPublicKey: ByteArray): { publicKey: ByteArray, sharedSecret: ByteArray };
    ecdhGenerateSecret(peerPublicKey: ByteArray, ecdh: any): ByteArray;
    hash(data: ByteArray | ByteArray[]): ByteArray;
    pbkdf2(secret: ByteArray, salt: ByteArray, iteration: number, keyLength: number): Promise<ByteArray>;
    hkdf(secret: ByteArray, salt: ByteArray, info: ByteArray, length?: number): Promise<ByteArray>;
    hmac(key: ByteArray, data: ByteArray): ByteArray;
    signPkcs8(privateKey: ByteArray, data: ByteArray | ByteArray[], dsaEncoding?: CryptoDsaEncoding): ByteArray;
    signSec1(privateKey: ByteArray, data: ByteArray | ByteArray[], dsaEncoding?: CryptoDsaEncoding): ByteArray;
    verifySpkiEc(publicKey: ByteArray, data: ByteArray, signature: ByteArray, dsaEncoding?: CryptoDsaEncoding): void;
    verifySpki(publicKey: ByteArray, data: ByteArray, signature: ByteArray, dsaEncoding?: CryptoDsaEncoding): void;
    createKeyPair(): KeyPair
}

export abstract class CryptoBase implements CryptoInterface {
    abstract encrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray;

    abstract decrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray;

    abstract getRandomData(length: number): ByteArray;

    getRandom(): ByteArray {
        return this.getRandomData(CRYPTO_RANDOM_LENGTH);
    }

    getRandomUInt16() {
        return Buffer.from(this.getRandomData(2)).readUInt16LE();
    }

    getRandomUInt32() {
        return Buffer.from(this.getRandomData(4)).readUInt32LE();
    }

    getRandomBigUInt64() {
        return Buffer.from(this.getRandomData(4)).readBigUInt64LE();
    }

    getRandomBN(size: number, maxValue: BN) {
        while (true) {
            const random = new BN(this.getRandomData(size));
            if (random < maxValue) return random;
        }
    }

    abstract ecdhGeneratePublicKey(): { publicKey: ByteArray, ecdh: any };

    abstract ecdhGeneratePublicKeyAndSecret(peerPublicKey: ByteArray): { publicKey: ByteArray, sharedSecret: ByteArray };

    abstract ecdhGenerateSecret(peerPublicKey: ByteArray, ecdh: any): ByteArray;

    abstract hash(data: ByteArray | ByteArray[]): ByteArray;

    abstract pbkdf2(secret: ByteArray, salt: ByteArray, iteration: number, keyLength: number): Promise<ByteArray>;

    abstract hkdf(secret: ByteArray, salt: ByteArray, info: ByteArray, length?: number): Promise<ByteArray>;

    abstract hmac(key: ByteArray, data: ByteArray): ByteArray;

    abstract signPkcs8(privateKey: ByteArray, data: ByteArray | ByteArray[], dsaEncoding?: CryptoDsaEncoding): ByteArray;

    abstract signSec1(privateKey: ByteArray, data: ByteArray | ByteArray[], dsaEncoding?: CryptoDsaEncoding): ByteArray;

    abstract verifySpkiEc(publicKey: ByteArray, data: ByteArray, signature: ByteArray, dsaEncoding?: CryptoDsaEncoding): void;

    abstract verifySpki(publicKey: ByteArray, data: ByteArray, signature: ByteArray, dsaEncoding?: CryptoDsaEncoding): void;

    abstract createKeyPair(): KeyPair
}

export class Crypto {
    static get: () => CryptoInterface = () => { throw new Error("No provider configured"); };
}
