/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "../../codec/MessageCodec.js";
import { MatterError, UnexpectedDataError } from "../../common/MatterError.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import { TlvSchema } from "../../tlv/TlvSchema.js";
import {
    GeneralStatusCode,
    MessageType,
    ProtocolStatusCode,
    SECURE_CHANNEL_PROTOCOL_ID,
} from "./SecureChannelMessages.js";
import { TlvSecureChannelStatusMessage } from "./SecureChannelStatusMessageSchema.js";

/** Error base Class for all errors related to the status response messages. */
export class ChannelStatusResponseError extends MatterError {
    public constructor(
        message: string,
        public readonly generalStatusCode: GeneralStatusCode,
        public readonly protocolStatusCode: ProtocolStatusCode,
    ) {
        super(`(${generalStatusCode}/${protocolStatusCode}) ${message}`);
    }
}

export class SecureChannelMessenger<ContextT> {
    constructor(protected readonly exchange: MessageExchange<ContextT>) {}

    async nextMessage(expectedMessageType?: number) {
        const message = await this.exchange.nextMessage();
        const messageType = message.payloadHeader.messageType;
        this.throwIfErrorStatusReport(message);
        if (expectedMessageType !== undefined && messageType !== expectedMessageType)
            throw new UnexpectedDataError(
                `Received unexpected message type: ${messageType}, expected: ${expectedMessageType}`,
            );
        return message;
    }

    async nextMessageDecoded<T>(expectedMessageType: number, schema: TlvSchema<T>) {
        return schema.decode((await this.nextMessage(expectedMessageType)).payload);
    }

    async waitForSuccess() {
        // If the status is not Success, this would throw an Error.
        await this.nextMessage(MessageType.StatusReport);
    }

    async send<T>(message: T, type: number, schema: TlvSchema<T>) {
        const payload = schema.encode(message);
        await this.exchange.send(type, payload);
        return payload;
    }

    sendError() {
        return this.sendStatusReport(GeneralStatusCode.Error, ProtocolStatusCode.InvalidParam);
    }

    sendSuccess() {
        return this.sendStatusReport(GeneralStatusCode.Success, ProtocolStatusCode.Success);
    }

    getChannelName() {
        return this.exchange.channel.channel.name;
    }

    async close() {
        await this.exchange.close();
    }

    private async sendStatusReport(generalStatus: GeneralStatusCode, protocolStatus: ProtocolStatusCode) {
        await this.exchange.send(
            MessageType.StatusReport,
            TlvSecureChannelStatusMessage.encode({
                generalStatus,
                protocolId: SECURE_CHANNEL_PROTOCOL_ID,
                protocolStatus,
            }),
        );
    }

    protected throwIfErrorStatusReport(message: Message) {
        const {
            payloadHeader: { messageType },
            payload,
        } = message;
        if (messageType !== MessageType.StatusReport) return;

        const { generalStatus, protocolId, protocolStatus } = TlvSecureChannelStatusMessage.decode(payload);
        if (generalStatus !== GeneralStatusCode.Success) {
            throw new ChannelStatusResponseError(
                `Received general error status (${protocolId})`,
                generalStatus,
                protocolStatus,
            );
        }
        if (protocolStatus !== ProtocolStatusCode.Success) {
            throw new ChannelStatusResponseError(
                `Received general success status, but protocol status is not Success`,
                generalStatus,
                protocolStatus,
            );
        }
    }
}
