/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError, UnexpectedDataError } from "#general";
import {
    GeneralStatusCode,
    ProtocolStatusCode,
    SECURE_CHANNEL_PROTOCOL_ID,
    SecureMessageType,
    TlvSchema,
} from "#types";
import { Message } from "../codec/MessageCodec.js";
import { ExchangeSendOptions, MessageExchange } from "../protocol/MessageExchange.js";
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

/** This value is used by chip SDK when performance wise heavy crypto operations are expected. */
export const EXPECTED_CRYPTO_PROCESSING_TIME_MS = 30_000;

/** This value is used by chip SDK when normal processing time is expected. */
export const DEFAULT_NORMAL_PROCESSING_TIME_MS = 2_000;

export class SecureChannelMessenger {
    #defaultExpectedProcessingTimeMs: number;

    constructor(
        protected readonly exchange: MessageExchange,
        defaultExpectedProcessingTimeMs = EXPECTED_CRYPTO_PROCESSING_TIME_MS,
    ) {
        this.#defaultExpectedProcessingTimeMs = defaultExpectedProcessingTimeMs;
    }

    /**
     * Waits for the next message and returns it.
     * When no expectedProcessingTimeMs is provided, the default value of EXPECTED_CRYPTO_PROCESSING_TIME_MS is used.
     */
    async nextMessage(
        expectedMessageInfo: string,
        expectedMessageType?: number,
        expectedProcessingTimeMs = this.#defaultExpectedProcessingTimeMs,
    ) {
        const message = await this.exchange.nextMessage(expectedProcessingTimeMs);
        const messageType = message.payloadHeader.messageType;
        this.throwIfErrorStatusReport(message, expectedMessageInfo);
        if (expectedMessageType !== undefined && messageType !== expectedMessageType)
            throw new UnexpectedDataError(
                `Received unexpected message type: ${messageType}, expected: ${expectedMessageType} (${expectedMessageInfo})`,
            );
        return message;
    }

    /**
     * Waits for the next message and decodes it.
     * When no expectedProcessingTimeMs is provided, the default value of EXPECTED_CRYPTO_PROCESSING_TIME_MS is used.
     */
    async nextMessageDecoded<T>(
        expectedMessageType: number,
        schema: TlvSchema<T>,
        expectedMessageInfo: string,
        expectedProcessingTimeMs = this.#defaultExpectedProcessingTimeMs,
    ) {
        return schema.decode(
            (await this.nextMessage(expectedMessageInfo, expectedMessageType, expectedProcessingTimeMs)).payload,
        );
    }

    /**
     * Waits for the next message and returns it.
     * When no expectedProcessingTimeMs is provided, the default value of EXPECTED_CRYPTO_PROCESSING_TIME_MS is used.
     */
    async waitForSuccess(
        expectedMessageInfo: string,
        expectedProcessingTimeMs = this.#defaultExpectedProcessingTimeMs,
    ) {
        // If the status is not Success, this would throw an Error.
        await this.nextMessage(expectedMessageInfo, SecureMessageType.StatusReport, expectedProcessingTimeMs);
    }

    /**
     * Sends a message of the given type with the given payload.
     * If no ExchangeSendOptions are provided, the expectedProcessingTimeMs will be set to
     * EXPECTED_CRYPTO_PROCESSING_TIME_MS.
     */
    async send<T>(message: T, type: number, schema: TlvSchema<T>, options?: ExchangeSendOptions) {
        options = {
            ...options,
            expectedProcessingTimeMs: options?.expectedProcessingTimeMs ?? this.#defaultExpectedProcessingTimeMs,
        };
        const payload = schema.encode(message);
        await this.exchange.send(type, payload, options);
        return payload;
    }

    sendError(code: ProtocolStatusCode) {
        return this.sendStatusReport(GeneralStatusCode.Failure, code);
    }

    sendSuccess() {
        return this.sendStatusReport(GeneralStatusCode.Success, ProtocolStatusCode.Success);
    }

    sendCloseSession() {
        return this.sendStatusReport(GeneralStatusCode.Success, ProtocolStatusCode.CloseSession, false);
    }

    getChannelName() {
        return this.exchange.channel.channel.name;
    }

    async close() {
        await this.exchange.close();
    }

    private async sendStatusReport(
        generalStatus: GeneralStatusCode,
        protocolStatus: ProtocolStatusCode,
        requiresAck?: boolean,
    ) {
        await this.exchange.send(
            SecureMessageType.StatusReport,
            TlvSecureChannelStatusMessage.encode({
                generalStatus,
                protocolId: SECURE_CHANNEL_PROTOCOL_ID,
                protocolStatus,
            }),
            { requiresAck },
        );
    }

    protected throwIfErrorStatusReport(message: Message, logHint?: string) {
        const {
            payloadHeader: { messageType },
            payload,
        } = message;
        if (messageType !== SecureMessageType.StatusReport) return;

        const { generalStatus, protocolId, protocolStatus } = TlvSecureChannelStatusMessage.decode(payload);
        if (generalStatus !== GeneralStatusCode.Success) {
            throw new ChannelStatusResponseError(
                `Received general error status for protocol ${protocolId}${logHint ? ` (${logHint})` : ""}`,
                generalStatus,
                protocolStatus,
            );
        }
        if (protocolStatus !== ProtocolStatusCode.Success) {
            throw new ChannelStatusResponseError(
                `Received general success status, but protocol status is not Success${logHint ? ` (${logHint})` : ""}`,
                generalStatus,
                protocolStatus,
            );
        }
    }
}
