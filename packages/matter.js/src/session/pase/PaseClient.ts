/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UnexpectedDataError } from "../../common/MatterError.js";
import { Crypto } from "../../crypto/Crypto.js";
import { Spake2p } from "../../crypto/Spake2p.js";
import { Logger } from "../../log/Logger.js";
import { MatterController } from "../../MatterController.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import { ByteArray } from "../../util/ByteArray.js";
import { UNDEFINED_NODE_ID } from "../SessionManager.js";
import { DEFAULT_PASSCODE_ID, PaseClientMessenger, SPAKE_CONTEXT } from "./PaseMessenger.js";

const logger = Logger.get("PaseClient");

export class PaseClient {
    async pair(client: MatterController, exchange: MessageExchange<MatterController>, setupPin: number) {
        const messenger = new PaseClientMessenger(exchange);
        const random = Crypto.getRandom();
        const sessionId = client.getNextAvailableSessionId();

        // Send pbkdRequest and Read pbkdResponse
        const requestPayload = await messenger.sendPbkdfParamRequest({
            random,
            sessionId,
            passcodeId: DEFAULT_PASSCODE_ID,
            hasPbkdfParameters: false,
        });
        const {
            responsePayload,
            response: { pbkdfParameters, sessionId: peerSessionId },
        } = await messenger.readPbkdfParamResponse();
        if (pbkdfParameters === undefined)
            throw new UnexpectedDataError("Missing requested PbkdfParameters in the response");

        // Compute pake1 and read pake2
        const { w0, w1 } = await Spake2p.computeW0W1(pbkdfParameters, setupPin);
        const spake2p = Spake2p.create(Crypto.hash([SPAKE_CONTEXT, requestPayload, responsePayload]), w0);
        const X = spake2p.computeX();
        await messenger.sendPasePake1({ x: X });

        // Process pack2 and send pake3
        const { y: Y, verifier } = await messenger.readPasePake2();
        const { Ke, hAY, hBX } = await spake2p.computeSecretAndVerifiersFromY(w1, X, Y);
        if (!verifier.equals(hBX))
            throw new UnexpectedDataError("Received incorrect key confirmation from the receiver");
        await messenger.sendPasePake3({ verifier: hAY });

        // All good! Creating the secure session
        await messenger.waitForSuccess();
        const secureSession = await client.createSecureSession(
            sessionId,
            undefined,
            UNDEFINED_NODE_ID,
            peerSessionId,
            Ke,
            new ByteArray(0),
            true,
            false,
        );
        await messenger.close();
        logger.info(`Pase client: Paired successfully with ${messenger.getChannelName()}`);

        return secureSession;
    }
}
