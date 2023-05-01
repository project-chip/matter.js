/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { CryptoNode } from "../../src/crypto/CryptoNode";
import * as crypto from "crypto";
import { ByteArray } from "@project-chip/matter.js/util";

const KEY = ByteArray.fromHex("abf227feffea8c38e688ddcbffc459f1");
const ENCRYPTED_DATA = ByteArray.fromHex("c4527bd6965518e8382edbbd28f27f42492d0766124f9961a772");
const PLAIN_DATA = ByteArray.fromHex("03104f3c0000e98ceb00");
const NONCE = ByteArray.fromHex("000ce399000000000000000000");
const ADDITIONAL_AUTH_DATA = ByteArray.fromHex("00456a000ce39900");


const KEY_2 = ByteArray.fromHex("4e4c1353a133397f7a7557c1fbd9ca38");
const ENCRYPTED_DATA_2 = ByteArray.fromHex("cb50871ccd35d430b9d9f9f2a50c07f6b0e68ac78f671de670bc6622c3538b10184ac58e70475301edae3d45dd169bfad3a4367cb8eb821676b162");
const PLAIN_DATA_2 = ByteArray.fromHex("0609523c01000fe399001528003601153501370024000024013e24020b1835012400001818181824ff0118");
const NONCE_2 = ByteArray.fromHex("00ec8ceb000000000000000000");
const ADDITIONAL_AUTH_DATA_2 = ByteArray.fromHex("00c7a200ec8ceb00");

const PRIVATE_KEY = ByteArray.fromHex("727F1005CBA47ED7822A9D930943621617CFD3B79D9AF528B801ECF9F1992204");
const PUBLIC_KEY = ByteArray.fromHex("0462e2b6e1baff8d74a6fd8216c4cb67a3363a31e691492792e61aee610261481396725ef95e142686ba98f339b0ff65bc338bec7b9e8be0bdf3b2774982476220");

const SEC1_KEY = ByteArray.fromHex("30770201010420aef3484116e9481ec57be0472df41bf499064e5024ad869eca5e889802d48075a00a06082a8648ce3d030107a144034200043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba");

const cryptoNode = new CryptoNode();

describe("Crypto", () => {

    describe("encrypt", () => {
        it("encrypts data", () => {
            const result = cryptoNode.encrypt(KEY_2, PLAIN_DATA_2, NONCE_2, ADDITIONAL_AUTH_DATA_2);

            assert.equal(result.toHex(), ENCRYPTED_DATA_2.toHex());
        });
    });

    describe("decrypt", () => {
        it("decrypts data", () => {
            const result = cryptoNode.decrypt(KEY, ENCRYPTED_DATA, NONCE, ADDITIONAL_AUTH_DATA);

            assert.equal(result.toHex(), PLAIN_DATA.toHex());
        });
    });

    describe("signPkcs8 / verifySpki", () => {
        it("signs data with known private key", () => {
            const result = cryptoNode.signPkcs8(PRIVATE_KEY, ENCRYPTED_DATA);

            cryptoNode.verifySpki(PUBLIC_KEY, ENCRYPTED_DATA, result);
        });

        it("signs data with generated private key", () => {
            const ecdh = crypto.createECDH("prime256v1");
            ecdh.generateKeys();
            const result = cryptoNode.signPkcs8(ecdh.getPrivateKey(), ENCRYPTED_DATA);

            cryptoNode.verifySpki(ecdh.getPublicKey(), ENCRYPTED_DATA, result);
        });
    });

    describe("signSec1 / verifySpki", () => {
        it("signs data with known sec1 key", () => {
            const result = cryptoNode.signSec1(SEC1_KEY, ENCRYPTED_DATA, "der");

            const privateKeyObject = crypto.createPrivateKey({
                key: Buffer.from(SEC1_KEY),
                format: "der",
                type: "sec1",
            });
            const publicKey = crypto.createPublicKey(privateKeyObject).export({ format: "der", type: "spki" });

            cryptoNode.verifySpkiEc(publicKey, ENCRYPTED_DATA, result, "der");
        });
    });

    describe("createKeyPair", () => {
        it("generates a working key pair", () => {
            const { privateKey, publicKey } = cryptoNode.createKeyPair();

            cryptoNode.verifySpki(publicKey, ENCRYPTED_DATA, cryptoNode.signPkcs8(privateKey, ENCRYPTED_DATA));
        });
    });
});
