/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterController } from "../../MatterController.js";
import { CommissioningOptions } from "../../behavior/system/commissioning/CommissioningOptions.js";
import { UnexpectedDataError } from "../../common/MatterError.js";
import { Crypto } from "../../crypto/Crypto.js";
import { PbkdfParameters, Spake2p } from "../../crypto/Spake2p.js";
import { NodeId } from "../../datatype/NodeId.js";
import { Logger } from "../../log/Logger.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import { ByteArray } from "../../util/ByteArray.js";
import { DEFAULT_PASSCODE_ID, PaseClientMessenger, SPAKE_CONTEXT } from "./PaseMessenger.js";

const logger = Logger.get("PaseClient");

export class PaseClient {
    static async generatePakePasscodeVerifier(setupPinCode: number, pbkdfParameters: PbkdfParameters) {
        const { w0, L } = await Spake2p.computeW0L(pbkdfParameters, setupPinCode);
        return ByteArray.concat(ByteArray.from(w0.toArray()), L);
    }

    static generateRandomPasscode() {
        let passcode: number;
        passcode = (Crypto.getRandomUInt32() % 99999998) + 1; // prevents 00000000 and 99999999
        if (CommissioningOptions.FORBIDDEN_PASSCODES.includes(passcode)) {
            passcode += 1; // With current forbidden passcode list can never collide
        }
        return passcode;
    }

    static generateRandomDiscriminator() {
        return Crypto.getRandomUInt16() % 4096;
    }

    async pair(client: MatterController, exchange: MessageExchange<MatterController>, setupPin: number) {
        const messenger = new PaseClientMessenger(exchange);
        const random = Crypto.getRandom();
        const sessionId = await client.getNextAvailableSessionId(); // Initiator Session Id

        // Send pbkdfRequest and Read pbkdfResponse
        const requestPayload = await messenger.sendPbkdfParamRequest({
            random,
            sessionId,
            passcodeId: DEFAULT_PASSCODE_ID,
            hasPbkdfParameters: false,
        });
        const {
            responsePayload,
            response: { pbkdfParameters, sessionId: peerSessionId, sessionParams: pbkdfSessionParams },
        } = await messenger.readPbkdfParamResponse();
        if (pbkdfParameters === undefined)
            throw new UnexpectedDataError("Missing requested PbkdfParameters in the response.");

        const sessionParameters = {
            ...exchange.session.getSessionParameters(),
            ...(pbkdfSessionParams ?? {}),
        };

        // Compute pake1 and read pake2
        const { w0, w1 } = await Spake2p.computeW0W1(pbkdfParameters, setupPin);
        const spake2p = Spake2p.create(Crypto.hash([SPAKE_CONTEXT, requestPayload, responsePayload]), w0);
        const X = spake2p.computeX();
        await messenger.sendPasePake1({ x: X });

        // Process pack2 and send pake3
        const { y: Y, verifier } = await messenger.readPasePake2();
        const { Ke, hAY, hBX } = await spake2p.computeSecretAndVerifiersFromY(w1, X, Y);
        if (!verifier.equals(hBX))
            throw new UnexpectedDataError("Received incorrect key confirmation from the receiver.");
        await messenger.sendPasePake3({ verifier: hAY });

        // All good! Creating the secure session
        await messenger.waitForSuccess();
        const secureSession = await client.sessionManager.createSecureSession({
            sessionId,
            fabric: undefined,
            peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
            peerSessionId,
            sharedSecret: Ke,
            salt: new ByteArray(0),
            isInitiator: true,
            isResumption: false,
            sessionParameters,
        });
        await messenger.close();
        logger.info(`Pase client: Paired successfully with ${messenger.getChannelName()}.`);

        return secureSession;
    }
}
