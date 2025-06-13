/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../MatterError.js";
import { Bytes, Endian } from "../util/Bytes.js";
import { DataWriter } from "../util/DataWriter.js";
import { Crypto, ec } from "./Crypto.js";
import { CRYPTO_GROUP_SIZE_BYTES } from "./CryptoConstants.js";

const {
    p256: { ProjectivePoint, CURVE: P256_CURVE },
    numberToBytesBE,
    bytesToNumberBE,
    mod,
} = ec;

// M and N constants from https://datatracker.ietf.org/doc/html/draft-bar-cfrg-spake2plus-01
const M = ProjectivePoint.fromHex("02886e2f97ace46e55ba9dd7242579f2993b64e16ef3dcab95afd497333d8fa12f");
const N = ProjectivePoint.fromHex("03d8bbd6c639c62937b04d997f38c3770719c629d7014d49a24b4f98baa1292b49");

const CRYPTO_W_SIZE_BYTES = CRYPTO_GROUP_SIZE_BYTES + 8;

export interface PbkdfParameters {
    iterations: number;
    salt: Uint8Array;
}

export class Spake2p {
    readonly #crypto: Crypto;
    readonly #context: Uint8Array;
    readonly #random: bigint;
    readonly #w0: bigint;

    static async computeW0W1(crypto: Crypto, { iterations, salt }: PbkdfParameters, pin: number) {
        const pinWriter = new DataWriter(Endian.Little);
        pinWriter.writeUInt32(pin);
        const ws = await crypto.createPbkdf2Key(pinWriter.toByteArray(), salt, iterations, CRYPTO_W_SIZE_BYTES * 2);
        const w0 = mod(bytesToNumberBE(ws.slice(0, 40)), P256_CURVE.n);
        const w1 = mod(bytesToNumberBE(ws.slice(40, 80)), P256_CURVE.n);
        return { w0, w1 };
    }

    static async computeW0L(crypto: Crypto, pbkdfParameters: PbkdfParameters, pin: number) {
        const { w0, w1 } = await this.computeW0W1(crypto, pbkdfParameters, pin);
        const L = ProjectivePoint.BASE.multiply(w1).toRawBytes(false);
        return { w0, L };
    }

    static create(crypto: Crypto, context: Uint8Array, w0: bigint) {
        const random = crypto.randomBigInt(32, P256_CURVE.Fp.ORDER);
        return new Spake2p(crypto, context, random, w0);
    }

    constructor(crypto: Crypto, context: Uint8Array, random: bigint, w0: bigint) {
        this.#crypto = crypto;
        this.#context = context;
        this.#random = random;
        this.#w0 = w0;
    }

    computeX(): Uint8Array {
        const X = ProjectivePoint.BASE.multiply(this.#random).add(M.multiply(this.#w0));
        return X.toRawBytes(false);
    }

    computeY(): Uint8Array {
        const Y = ProjectivePoint.BASE.multiply(this.#random).add(N.multiply(this.#w0));
        return Y.toRawBytes(false);
    }

    async computeSecretAndVerifiersFromY(w1: bigint, X: Uint8Array, Y: Uint8Array) {
        const YPoint = ProjectivePoint.fromHex(Y);
        try {
            YPoint.assertValidity();
        } catch (error) {
            throw new InternalError(`Y is not on the curve: ${(error as any).message}`);
        }
        const yNwo = YPoint.add(N.multiply(this.#w0).negate());
        const Z = yNwo.multiply(this.#random);
        const V = yNwo.multiply(w1);
        return this.computeSecretAndVerifiers(X, Y, Z.toRawBytes(false), V.toRawBytes(false));
    }

    async computeSecretAndVerifiersFromX(L: Uint8Array, X: Uint8Array, Y: Uint8Array) {
        const XPoint = ProjectivePoint.fromHex(X);
        const LPoint = ProjectivePoint.fromHex(L);
        try {
            XPoint.assertValidity();
        } catch (error) {
            throw new InternalError(`X is not on the curve: ${(error as any).message}`);
        }
        const Z = XPoint.add(M.multiply(this.#w0).negate()).multiply(this.#random);
        const V = LPoint.multiply(this.#random);
        return this.computeSecretAndVerifiers(X, Y, Z.toRawBytes(false), V.toRawBytes(false));
    }

    private async computeSecretAndVerifiers(X: Uint8Array, Y: Uint8Array, Z: Uint8Array, V: Uint8Array) {
        const TT_HASH = await this.computeTranscriptHash(X, Y, Z, V);
        const Ka = TT_HASH.slice(0, 16);
        const Ke = TT_HASH.slice(16, 32);

        const KcAB = await this.#crypto.createHkdfKey(Ka, new Uint8Array(0), Bytes.fromString("ConfirmationKeys"), 32);
        const KcA = KcAB.slice(0, 16);
        const KcB = KcAB.slice(16, 32);

        const hAY = await this.#crypto.signHmac(KcA, Y);
        const hBX = await this.#crypto.signHmac(KcB, X);

        return { Ke, hAY, hBX };
    }

    private computeTranscriptHash(X: Uint8Array, Y: Uint8Array, Z: Uint8Array, V: Uint8Array) {
        const TTwriter = new DataWriter(Endian.Little);
        this.addToContext(TTwriter, this.#context);
        this.addToContext(TTwriter, Bytes.fromString(""));
        this.addToContext(TTwriter, Bytes.fromString(""));
        this.addToContext(TTwriter, M.toRawBytes(false));
        this.addToContext(TTwriter, N.toRawBytes(false));
        this.addToContext(TTwriter, X);
        this.addToContext(TTwriter, Y);
        this.addToContext(TTwriter, Z);
        this.addToContext(TTwriter, V);
        this.addToContext(TTwriter, numberToBytesBE(this.#w0, 32));
        return this.#crypto.computeSha256(TTwriter.toByteArray());
    }

    private addToContext(TTwriter: DataWriter<Endian.Little>, data: Uint8Array) {
        TTwriter.writeUInt64(data.length);
        TTwriter.writeByteArray(data);
    }
}
