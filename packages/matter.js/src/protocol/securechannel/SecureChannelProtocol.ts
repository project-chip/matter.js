/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "../../codec/MessageCodec.js";
import { MatterFlowError } from "../../common/MatterError.js";
import { Logger } from "../../log/Logger.js";
import { MatterDevice } from "../../MatterDevice.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import { ProtocolHandler } from "../../protocol/ProtocolHandler.js";
import { CaseServer } from "../../session/case/CaseServer.js";
import { MaximumPasePairingErrorsReachedError, PaseServer } from "../../session/pase/PaseServer.js";
import { assertSecureSession } from "../../session/SecureSession.js";
import {
    GeneralStatusCode,
    MessageType,
    ProtocolStatusCode,
    SECURE_CHANNEL_PROTOCOL_ID,
} from "./SecureChannelMessages.js";
import { ChannelStatusResponseError, SecureChannelMessenger } from "./SecureChannelMessenger.js";
import { TlvSecureChannelStatusMessage } from "./SecureChannelStatusMessageSchema.js";

const logger = Logger.get("SecureChannelProtocol");

export class SecureChannelProtocol implements ProtocolHandler<MatterDevice> {
    private paseCommissioner: PaseServer | undefined;
    private readonly caseCommissioner = new CaseServer();

    constructor(private commissioningCancelledCallback: () => Promise<void>) {}

    getId(): number {
        return SECURE_CHANNEL_PROTOCOL_ID;
    }

    setPaseCommissioner(paseServer: PaseServer) {
        this.paseCommissioner = paseServer;
    }

    removePaseCommissioner() {
        this.paseCommissioner = undefined;
    }

    async onNewExchange(exchange: MessageExchange<MatterDevice>, message: Message) {
        const messageType = message.payloadHeader.messageType;

        switch (messageType) {
            case MessageType.PbkdfParamRequest:
                if (this.paseCommissioner === undefined) {
                    // Cleaner to return an error (ok for chip-tool as it seems)?
                    // Formally we should not respond at all which leads to retries and such
                    const messenger = new SecureChannelMessenger(exchange);
                    await messenger.sendError(ProtocolStatusCode.InvalidParam);
                    await messenger.close(); // also closes exchange
                    return;
                }
                try {
                    await this.paseCommissioner.onNewExchange(exchange);
                } catch (error) {
                    if (error instanceof MaximumPasePairingErrorsReachedError) {
                        logger.info("Maximum number of PASE pairing errors reached, cancelling commissioning.");
                        await this.commissioningCancelledCallback();
                    } else {
                        throw error;
                    }
                }
                break;
            case MessageType.Sigma1:
                await this.caseCommissioner.onNewExchange(exchange);
                break;
            case MessageType.StatusReport:
                await this.handleInitialStatusReport(exchange, message);
                break;
            default:
                throw new MatterFlowError(
                    `Unexpected initial message on secure channel protocol: ${messageType.toString(16)}`,
                );
        }
    }

    async handleInitialStatusReport(exchange: MessageExchange<MatterDevice>, message: Message) {
        const {
            payloadHeader: { messageType },
            payload,
        } = message;
        if (messageType !== MessageType.StatusReport) {
            throw new MatterFlowError(
                `Unexpected message type on secure channel protocol, expected StatusReport: ${messageType.toString(
                    16,
                )}`,
            );
        }

        const { generalStatus, protocolId, protocolStatus } = TlvSecureChannelStatusMessage.decode(payload);
        if (generalStatus !== GeneralStatusCode.Success) {
            throw new ChannelStatusResponseError(
                `Received general error status (${protocolId})`,
                generalStatus,
                protocolStatus,
            );
        }
        if (protocolStatus !== ProtocolStatusCode.CloseSession) {
            throw new ChannelStatusResponseError(
                `Received general success status, but protocol status is not CloseSession`,
                generalStatus,
                protocolStatus,
            );
        }

        const { session } = exchange;
        assertSecureSession(session);
        logger.debug(`Peer requested to close session ${session.name}. Remove session now.`);
        // TODO: and do more - see Core Specs 5.5
        await session.destroy(true);
    }

    static isStandaloneAck(protocolId: number, messageType: number) {
        return protocolId === SECURE_CHANNEL_PROTOCOL_ID && messageType === MessageType.StandaloneAck;
    }

    async close() {
        // Nothing to do
    }
}
