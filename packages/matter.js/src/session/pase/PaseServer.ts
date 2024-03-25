/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import BN from "bn.js";
import { MatterDevice } from "../../MatterDevice.js";
import { MatterFlowError, UnexpectedDataError } from "../../common/MatterError.js";
import { Crypto } from "../../crypto/Crypto.js";
import { PbkdfParameters, Spake2p } from "../../crypto/Spake2p.js";
import { NodeId } from "../../datatype/NodeId.js";
import { Logger } from "../../log/Logger.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import { ProtocolHandler } from "../../protocol/ProtocolHandler.js";
import { ProtocolStatusCode, SECURE_CHANNEL_PROTOCOL_ID } from "../../protocol/securechannel/SecureChannelMessages.js";
import { ChannelStatusResponseError } from "../../protocol/securechannel/SecureChannelMessenger.js";
import { Time, Timer } from "../../time/Time.js";
import { ByteArray } from "../../util/ByteArray.js";
import { DEFAULT_PASSCODE_ID, PaseServerMessenger, SPAKE_CONTEXT } from "./PaseMessenger.js";

const logger = Logger.get("PaseServer");

const PASE_PAIRING_TIMEOUT_MS = 60_000;
const PASE_COMMISSIONING_MAX_ERRORS = 20;

export class MaximumPasePairingErrorsReachedError extends MatterFlowError {}

export class PaseServer implements ProtocolHandler<MatterDevice> {
    private pairingTimer: Timer | undefined;
    private pairingErrors = 0;

    static async fromPin(setupPinCode: number, pbkdfParameters: PbkdfParameters) {
        const { w0, L } = await Spake2p.computeW0L(pbkdfParameters, setupPinCode);
        logger.info(
            `PASE server created from PIN ${setupPinCode} and params ${Logger.toJSON(pbkdfParameters)} with w0: ${w0.toString("hex")} and L: ${L.toHex()}.`,
        );
        return new PaseServer(w0, L, pbkdfParameters);
    }

    static fromVerificationValue(verificationValue: ByteArray, pbkdfParameters?: PbkdfParameters) {
        const w0 = new BN(verificationValue.slice(0, 32));
        const L = verificationValue.slice(32, 32 + 65);
        logger.info(
            `PASE server created from Verifier and params ${Logger.toJSON(pbkdfParameters)} with w0: ${w0.toString("hex")} and L: ${L.toHex()}.`,
        );
        return new PaseServer(w0, L, pbkdfParameters);
    }

    constructor(
        private readonly w0: BN,
        private readonly L: ByteArray,
        private readonly pbkdfParameters?: PbkdfParameters,
    ) {}

    getId(): number {
        return SECURE_CHANNEL_PROTOCOL_ID;
    }

    async onNewExchange(exchange: MessageExchange<MatterDevice>) {
        const messenger = new PaseServerMessenger(exchange);
        try {
            await this.handlePairingRequest(exchange.session.context, messenger);
        } catch (error) {
            this.pairingErrors++;
            logger.error("An error occurred during the PASE commissioning.", error);

            // If we received a ChannelStatusResponseError we do not need to send one back, so just cancel pairing
            const sendError = !(error instanceof ChannelStatusResponseError);
            await this.cancelPairing(messenger, sendError);

            if (this.pairingErrors >= PASE_COMMISSIONING_MAX_ERRORS) {
                throw new MaximumPasePairingErrorsReachedError(
                    `Pase server: Too many errors during PASE commissioning, aborting commissioning window`,
                );
            }
        } finally {
            // Destroy the unsecure session used to establish the secure Case session
            await exchange.session.destroy();
        }
    }

    private async handlePairingRequest(server: MatterDevice, messenger: PaseServerMessenger) {
        // When a Commissioner is either in the process of establishing a PASE session with the Commissionee or has
        // successfully established a session, the Commissionee SHALL NOT accept any more requests for new PASE
        // sessions until session establishment fails or the successfully established PASE session is terminated on
        // the commissioning channel.
        if (server.existsOpenPaseSession()) {
            throw new MatterFlowError(
                "Pase server: Pairing already in progress (PASE session exists), ignoring new exchange.",
            );
        }

        if (this.pairingTimer !== undefined && this.pairingTimer.isRunning) {
            throw new MatterFlowError(
                "Pase server: Pairing already in progress (PASE establishment Timer running), ignoring new exchange.",
            );
        }

        logger.info(`Received pairing request from ${messenger.getChannelName()}.`);

        this.pairingTimer = Time.getTimer("PASE pairing timeout", PASE_PAIRING_TIMEOUT_MS, () =>
            this.cancelPairing(messenger),
        ).start();

        // Read pbkdfRequest and send pbkdfResponse
        const {
            requestPayload,
            request: { random: peerRandom, sessionParams, passcodeId, hasPbkdfParameters, sessionId: peerSessionId },
        } = await messenger.readPbkdfParamRequest();
        if (passcodeId !== DEFAULT_PASSCODE_ID) {
            throw new UnexpectedDataError(`Unsupported passcode ID ${passcodeId}.`);
        }

        logger.info(
            `PbkdfParamRequest Data: requestPayload=${requestPayload.toHex()} sessionParams=${Logger.toJSON(sessionParams)} peerRandom=${peerRandom.toHex()} peerSessionid=${peerSessionId} hasPbkdfParameters=${hasPbkdfParameters}`,
        );

        const sessionId = await server.getNextAvailableSessionId(); // Responder Session Id
        const random = Crypto.getRandom();

        const responsePayload = await messenger.sendPbkdfParamResponse({
            peerRandom,
            random,
            sessionId,
            sessionParams,
            pbkdfParameters: hasPbkdfParameters ? undefined : this.pbkdfParameters,
        });
        logger.info(
            `PbkdfParamResponse Data: responsePayload=${responsePayload.toHex()} pbkdfParameters=${Logger.toJSON(hasPbkdfParameters ? undefined : this.pbkdfParameters)} sessionId=${sessionId} random=${random.toHex()} sessionParams=${Logger.toJSON(sessionParams)}`,
        );

        // Process pake1 and send pake2
        const spake2p = Spake2p.create(Crypto.hash([SPAKE_CONTEXT, requestPayload, responsePayload]), this.w0);
        const { x: X } = await messenger.readPasePake1();
        logger.info(`PasePake1 Data: X=${X.toHex()}`);
        const Y = spake2p.computeY();
        const { Ke, hAY, hBX } = await spake2p.computeSecretAndVerifiersFromX(this.L, X, Y);
        logger.info(`PasePake2 Data: Y=${Y.toHex()} Ke=${Ke.toHex()} hAY=${hAY.toHex()} hBX=verifier=${hBX.toHex()}`);
        await messenger.sendPasePake2({ y: Y, verifier: hBX });

        // Read and process pake3
        const { verifier } = await messenger.readPasePake3();
        logger.info(`PasePake3 Data: verifier=${verifier.toHex()} vs hAY=${hAY.toHex()}`);
        if (!verifier.equals(hAY)) {
            throw new UnexpectedDataError("Received incorrect key confirmation from the initiator.");
        }

        // All good! Creating the secure PASE session
        await server.sessionManager.createSecureSession({
            sessionId,
            fabric: undefined,
            peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
            peerSessionId,
            sharedSecret: Ke,
            salt: new ByteArray(0),
            isInitiator: false,
            isResumption: false,
            sessionParameters: sessionParams,
        });
        logger.info(`Session ${sessionId} created with ${messenger.getChannelName()}.`);

        await messenger.sendSuccess();
        await messenger.close();

        this.pairingTimer?.stop();
        this.pairingTimer = undefined;
    }

    async cancelPairing(messenger: PaseServerMessenger, sendError = true) {
        this.pairingTimer?.stop();
        this.pairingTimer = undefined;

        if (sendError) {
            await messenger.sendError(ProtocolStatusCode.InvalidParam);
        }
        await messenger.close();
    }

    async close() {
        // Nothing to do
    }
}
