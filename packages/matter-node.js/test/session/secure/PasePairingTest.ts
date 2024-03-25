/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto, Spake2p } from "@project-chip/matter.js/crypto";
import {
    DEFAULT_PASSCODE_ID,
    SPAKE_CONTEXT,
    TlvPbkdfParamRequest,
    TlvPbkdfParamResponse,
} from "@project-chip/matter.js/session";
import { CryptoNode } from "../../../src/crypto/CryptoNode.js";

const cryptoNode = new CryptoNode();

describe("PasePairing", () => {
    describe("try reproduce #312", () => {
        it("do pase process 20000 times", async () => {
            for (let i = 0; i < 20_000; i++) {
                const serverPbkdfParameters = {
                    iterations: 1000,
                    salt: cryptoNode.getRandomData(32),
                };
                const { w0, L } = await Spake2p.computeW0L(serverPbkdfParameters, 20202021);

                const peerRandom = Crypto.getRandom();
                const peerSessionId = Crypto.getRandomUInt16();
                const passcodeId = DEFAULT_PASSCODE_ID;
                const hasPbkdfParameters = false;
                const sessionParams = undefined;
                const requestPayload = TlvPbkdfParamRequest.encode({
                    random: peerRandom,
                    sessionId: peerSessionId,
                    passcodeId,
                    hasPbkdfParameters,
                });

                const sessionId = Crypto.getRandomUInt16();
                const random = Crypto.getRandom();

                const responsePayload = TlvPbkdfParamResponse.encode({
                    peerRandom,
                    random,
                    sessionId,
                    sessionParams,
                    pbkdfParameters: serverPbkdfParameters,
                });

                // Process pake1 and send pake2
                const spake2p = Spake2p.create(Crypto.hash([SPAKE_CONTEXT, requestPayload, responsePayload]), w0);

                const { w0: clientw0 } = await Spake2p.computeW0W1(serverPbkdfParameters, 20202021);
                const clientSpake2p = Spake2p.create(
                    Crypto.hash([SPAKE_CONTEXT, requestPayload, responsePayload]),
                    clientw0,
                );
                const X = clientSpake2p.computeX();

                const Y = spake2p.computeY();
                try {
                    await spake2p.computeSecretAndVerifiersFromX(L, X, Y);
                } catch (error) {
                    console.log(error);
                    expect(true).equals(false);
                }
            }
        }).timeout(10_000_000);
    });
});
