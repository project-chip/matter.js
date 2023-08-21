/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import BN from "bn.js";
import { MatterError, NoProviderError } from "../common/MatterError.js";
import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataReader } from "../util/DataReader.js";
import { PrivateKey } from "./Key.js";

export const CRYPTO_RANDOM_LENGTH = 32;
export const CRYPTO_ENCRYPT_ALGORITHM = "aes-128-ccm";
export const CRYPTO_HASH_ALGORITHM = "sha256";
export const CRYPTO_EC_CURVE = "prime256v1";
export const CRYPTO_EC_KEY_BYTES = 32;
export const CRYPTO_AUTH_TAG_LENGTH = 16;
export const CRYPTO_SYMMETRIC_KEY_LENGTH = 16;
export type CryptoDsaEncoding = "ieee-p1363" | "der";

export class CryptoError extends MatterError {}

export abstract class Crypto {
    static get: () => Crypto = () => {
        throw new NoProviderError("No provider configured");
    };

    abstract encrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray;
    static readonly encrypt = (key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray =>
        Crypto.get().encrypt(key, data, nonce, aad);

    abstract decrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray;
    static readonly decrypt = (key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray =>
        Crypto.get().decrypt(key, data, nonce, aad);

    abstract getRandomData(length: number): ByteArray;
    static readonly getRandomData = (length: number): ByteArray => Crypto.get().getRandomData(length);

    static readonly getRandom = (): ByteArray => Crypto.get().getRandomData(CRYPTO_RANDOM_LENGTH);

    static readonly getRandomUInt16 = (): number =>
        new DataReader(Crypto.get().getRandomData(2), Endian.Little).readUInt16();

    static readonly getRandomUInt32 = (): number =>
        new DataReader(Crypto.get().getRandomData(4), Endian.Little).readUInt32();

    static readonly getRandomBigUInt64 = (): bigint =>
        new DataReader(Crypto.get().getRandomData(8), Endian.Little).readUInt64();

    static readonly getRandomBN = (size: number, maxValue: BN): BN => {
        while (true) {
            const random = new BN(Crypto.getRandomData(size));
            if (random < maxValue) return random;
        }
    };

    abstract ecdhGeneratePublicKey(): { publicKey: ByteArray; ecdh: any };
    static readonly ecdhGeneratePublicKey = (): { publicKey: ByteArray; ecdh: any } =>
        Crypto.get().ecdhGeneratePublicKey();

    abstract ecdhGeneratePublicKeyAndSecret(peerPublicKey: ByteArray): {
        publicKey: ByteArray;
        sharedSecret: ByteArray;
    };
    static readonly ecdhGeneratePublicKeyAndSecret = (
        peerPublicKey: ByteArray,
    ): { publicKey: ByteArray; sharedSecret: ByteArray } => Crypto.get().ecdhGeneratePublicKeyAndSecret(peerPublicKey);

    abstract ecdhGenerateSecret(peerPublicKey: ByteArray, ecdh: any): ByteArray;
    static readonly ecdhGenerateSecret = (peerPublicKey: ByteArray, ecdh: any): ByteArray =>
        Crypto.get().ecdhGenerateSecret(peerPublicKey, ecdh);

    abstract hash(data: ByteArray | ByteArray[]): ByteArray;
    static readonly hash = (data: ByteArray | ByteArray[]): ByteArray => Crypto.get().hash(data);

    abstract pbkdf2(secret: ByteArray, salt: ByteArray, iteration: number, keyLength: number): Promise<ByteArray>;
    static readonly pbkdf2 = (
        secret: ByteArray,
        salt: ByteArray,
        iteration: number,
        keyLength: number,
    ): Promise<ByteArray> => Crypto.get().pbkdf2(secret, salt, iteration, keyLength);

    abstract hkdf(secret: ByteArray, salt: ByteArray, info: ByteArray, length?: number): Promise<ByteArray>;
    static readonly hkdf = (secret: ByteArray, salt: ByteArray, info: ByteArray, length?: number): Promise<ByteArray> =>
        Crypto.get().hkdf(secret, salt, info, length);

    abstract hmac(key: ByteArray, data: ByteArray): ByteArray;
    static readonly hmac = (key: ByteArray, data: ByteArray): ByteArray => Crypto.get().hmac(key, data);

    abstract sign(privateKey: JsonWebKey, data: ByteArray | ByteArray[], dsaEncoding?: CryptoDsaEncoding): ByteArray;
    static readonly sign = (
        privateKey: JsonWebKey,
        data: ByteArray | ByteArray[],
        dsaEncoding?: CryptoDsaEncoding,
    ): ByteArray => Crypto.get().sign(privateKey, data, dsaEncoding);

    abstract verify(
        publicKey: JsonWebKey,
        data: ByteArray,
        signature: ByteArray,
        dsaEncoding?: CryptoDsaEncoding,
    ): void;
    static readonly verify = (
        publicKey: JsonWebKey,
        data: ByteArray,
        signature: ByteArray,
        dsaEncoding?: CryptoDsaEncoding,
    ): void => Crypto.get().verify(publicKey, data, signature, dsaEncoding);

    abstract createKeyPair(): PrivateKey;
    static readonly createKeyPair = (): PrivateKey => Crypto.get().createKeyPair();
}
