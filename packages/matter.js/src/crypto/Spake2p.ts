/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import BN from "bn.js";
import { ec } from "elliptic";
import { InternalError } from "../common/MatterError.js";
import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataWriter } from "../util/DataWriter.js";
import { Crypto } from "./Crypto.js";

const P256_CURVE = new ec("p256").curve;

// M and N constants from https://datatracker.ietf.org/doc/html/draft-bar-cfrg-spake2plus-01
const M = P256_CURVE.decodePoint("02886e2f97ace46e55ba9dd7242579f2993b64e16ef3dcab95afd497333d8fa12f", "hex");
const N = P256_CURVE.decodePoint("03d8bbd6c639c62937b04d997f38c3770719c629d7014d49a24b4f98baa1292b49", "hex");

export interface PbkdfParameters {
    iterations: number;
    salt: ByteArray;
}

export class Spake2p {
    static async computeW0W1({ iterations, salt }: PbkdfParameters, pin: number) {
        const pinWriter = new DataWriter(Endian.Little);
        pinWriter.writeUInt32(pin);
        const ws = await Crypto.pbkdf2(pinWriter.toByteArray(), salt, iterations, 80);
        const w0 = new BN(ws.slice(0, 40)).mod(P256_CURVE.n);
        const w1 = new BN(ws.slice(40, 80)).mod(P256_CURVE.n);
        return { w0, w1 };
    }

    static async computeW0L(pbkdfParameters: PbkdfParameters, pin: number) {
        const { w0, w1 } = await this.computeW0W1(pbkdfParameters, pin);
        const L = P256_CURVE.g.mul(w1).encode();
        return { w0, L };
    }

    static create(context: ByteArray, w0: BN) {
        const random = Crypto.getRandomBN(32, P256_CURVE.p);
        return new Spake2p(context, random, w0);
    }

    constructor(
        private readonly context: ByteArray,
        private readonly random: BN,
        private readonly w0: BN,
    ) {}

    computeX(): ByteArray {
        const X = P256_CURVE.g.mul(this.random).add(M.mul(this.w0));
        return ByteArray.from(X.encode());
    }

    computeY(): ByteArray {
        const Y = P256_CURVE.g.mul(this.random).add(N.mul(this.w0));
        return ByteArray.from(Y.encode());
    }

    async computeSecretAndVerifiersFromY(w1: BN, X: ByteArray, Y: ByteArray) {
        const YPoint = P256_CURVE.decodePoint(Y);
        if (!YPoint.validate()) throw new InternalError("Y is not on the curve");
        const yNwo = YPoint.add(N.mul(this.w0).neg());
        const Z = yNwo.mul(this.random);
        const V = yNwo.mul(w1);
        return this.computeSecretAndVerifiers(X, Y, ByteArray.from(Z.encode()), ByteArray.from(V.encode()));
    }

    async computeSecretAndVerifiersFromX(L: ByteArray, X: ByteArray, Y: ByteArray) {
        const XPoint = P256_CURVE.decodePoint(X);
        const LPoint = P256_CURVE.decodePoint(L);
        if (!XPoint.validate()) throw new InternalError("X is not on the curve");
        const Z = XPoint.add(M.mul(this.w0).neg()).mul(this.random);
        const V = LPoint.mul(this.random);
        return this.computeSecretAndVerifiers(X, Y, ByteArray.from(Z.encode()), ByteArray.from(V.encode()));
    }

    private async computeSecretAndVerifiers(X: ByteArray, Y: ByteArray, Z: ByteArray, V: ByteArray) {
        const TT_HASH = this.computeTranscriptHash(X, Y, Z, V);
        const Ka = TT_HASH.slice(0, 16);
        const Ke = TT_HASH.slice(16, 32);

        const KcAB = await Crypto.hkdf(Ka, new ByteArray(0), ByteArray.fromString("ConfirmationKeys"), 32);
        const KcA = KcAB.slice(0, 16);
        const KcB = KcAB.slice(16, 32);

        const hAY = Crypto.hmac(KcA, Y);
        const hBX = Crypto.hmac(KcB, X);

        return { Ke, hAY, hBX };
    }

    private computeTranscriptHash(X: ByteArray, Y: ByteArray, Z: ByteArray, V: ByteArray) {
        const TTwriter = new DataWriter(Endian.Little);
        this.addToContext(TTwriter, this.context);
        this.addToContext(TTwriter, ByteArray.fromString(""));
        this.addToContext(TTwriter, ByteArray.fromString(""));
        this.addToContext(TTwriter, ByteArray.from(M.encode()));
        this.addToContext(TTwriter, ByteArray.from(N.encode()));
        this.addToContext(TTwriter, X);
        this.addToContext(TTwriter, Y);
        this.addToContext(TTwriter, Z);
        this.addToContext(TTwriter, V);
        this.addToContext(TTwriter, ByteArray.from(this.w0.toArray()));
        return Crypto.hash(TTwriter.toByteArray());
    }

    private addToContext(TTwriter: DataWriter<Endian.Little>, data: ByteArray) {
        TTwriter.writeUInt64(data.length);
        TTwriter.writeByteArray(data);
    }
}
