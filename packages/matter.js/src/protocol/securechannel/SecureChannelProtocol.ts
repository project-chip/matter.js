/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "../../codec/MessageCodec.js";
import { MatterFlowError } from "../../common/MatterError.js";
import { MatterDevice } from "../../MatterDevice.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import { ProtocolHandler } from "../../protocol/ProtocolHandler.js";
import { CaseServer } from "../../session/case/CaseServer.js";
import { PaseServer } from "../../session/pase/PaseServer.js";
import { MessageType, SECURE_CHANNEL_PROTOCOL_ID } from "./SecureChannelMessages.js";

export class SecureChannelProtocol implements ProtocolHandler<MatterDevice> {
    constructor(
        private paseCommissioner: PaseServer,
        private readonly caseCommissioner: CaseServer,
    ) {}

    getId(): number {
        return SECURE_CHANNEL_PROTOCOL_ID;
    }

    updatePaseCommissioner(paseServer: PaseServer) {
        this.paseCommissioner = paseServer;
    }

    async onNewExchange(exchange: MessageExchange<MatterDevice>, message: Message) {
        const messageType = message.payloadHeader.messageType;

        switch (messageType) {
            case MessageType.PbkdfParamRequest:
                await this.paseCommissioner.onNewExchange(exchange);
                break;
            case MessageType.Sigma1:
                await this.caseCommissioner.onNewExchange(exchange);
                break;
            default:
                throw new MatterFlowError(
                    `Unexpected initial message on secure channel protocol: ${messageType.toString(16)}`,
                );
        }
    }

    static isStandaloneAck(protocolId: number, messageType: number) {
        return protocolId === SECURE_CHANNEL_PROTOCOL_ID && messageType === MessageType.StandaloneAck;
    }
}
