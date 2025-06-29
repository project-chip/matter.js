/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic, MatterError, UnexpectedDataError } from "#general";
import { GeneralStatusCode, SecureChannelStatusCode, SecureMessageType, TlvSchema } from "#types";
import { Message } from "../codec/MessageCodec.js";
import { ExchangeSendOptions, MessageExchange } from "../protocol/MessageExchange.js";
import { TlvSecureChannelStatusMessage } from "./SecureChannelStatusMessageSchema.js";

/** Error base Class for all errors related to the status response messages. */
export class ChannelStatusResponseError extends MatterError {
    public constructor(
        message: string,
        public readonly generalStatusCode: GeneralStatusCode,
        public readonly protocolStatusCode: SecureChannelStatusCode,
    ) {
        super(
            `(${GeneralStatusCode[generalStatusCode]} (${generalStatusCode}) / ${SecureChannelStatusCode[protocolStatusCode]} (${protocolStatusCode})) ${message}`,
        );
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

    get channel() {
        return this.exchange.channel;
    }

    async nextMessage(
        expectedMessageType: number,
        expectedProcessingTimeMs = this.#defaultExpectedProcessingTimeMs,
        expectedMessageInfo?: string,
    ) {
        return this.#nextMessage(expectedMessageType, expectedProcessingTimeMs, expectedMessageInfo);
    }

    async anyNextMessage(
        expectedMessageInfo: string,
        expectedProcessingTimeMs = this.#defaultExpectedProcessingTimeMs,
    ) {
        return this.#nextMessage(undefined, expectedProcessingTimeMs, expectedMessageInfo);
    }

    /**
     * Waits for the next message and returns it.
     *
     * When no expectedProcessingTimeMs is provided, the default value of EXPECTED_CRYPTO_PROCESSING_TIME_MS is used.
     */
    async #nextMessage(
        expectedMessageType?: number,
        expectedProcessingTimeMs = this.#defaultExpectedProcessingTimeMs,
        expectedMessageInfo?: string,
    ) {
        const message = await this.exchange.nextMessage({ expectedProcessingTimeMs });
        const messageType = message.payloadHeader.messageType;
        if (expectedMessageType !== undefined && expectedMessageInfo === undefined) {
            expectedMessageInfo = SecureMessageType[expectedMessageType];
        }
        this.throwIfErrorStatusReport(message, expectedMessageInfo);
        if (expectedMessageType !== undefined && messageType !== expectedMessageType)
            throw new UnexpectedDataError(
                `Received unexpected message type: ${messageType}, expected: ${expectedMessageType} (${expectedMessageInfo})`,
            );
        return message;
    }

    /**
     * Waits for the next message and decodes it.
     *
     * When no expectedProcessingTimeMs is provided, the default value of EXPECTED_CRYPTO_PROCESSING_TIME_MS is used.
     */
    async nextMessageDecoded<T>(
        expectedMessageType: number,
        schema: TlvSchema<T>,
        expectedProcessingTimeMs = this.#defaultExpectedProcessingTimeMs,
    ) {
        return schema.decode((await this.nextMessage(expectedMessageType, expectedProcessingTimeMs)).payload);
    }

    /**
     * Waits for the next message and returns it.
     *
     * When no expectedProcessingTimeMs is provided, the default value of EXPECTED_CRYPTO_PROCESSING_TIME_MS is used.
     */
    async waitForSuccess(
        expectedMessageInfo: string,
        expectedProcessingTimeMs = this.#defaultExpectedProcessingTimeMs,
    ) {
        // If the status is not Success, this would throw an Error.
        await this.nextMessage(SecureMessageType.StatusReport, expectedProcessingTimeMs, expectedMessageInfo);
    }

    /**
     * Sends a message of the given type with the given payload.
     *
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

    sendError(code: SecureChannelStatusCode) {
        return this.#sendStatusReport(GeneralStatusCode.Failure, code);
    }

    sendSuccess() {
        return this.#sendStatusReport(GeneralStatusCode.Success, SecureChannelStatusCode.Success);
    }

    sendCloseSession() {
        return this.#sendStatusReport(GeneralStatusCode.Success, SecureChannelStatusCode.CloseSession, false);
    }

    getChannelName() {
        return this.exchange.channel.channel.name;
    }

    async close() {
        await this.exchange.close();
    }

    async #sendStatusReport(
        generalStatus: GeneralStatusCode,
        protocolStatus: SecureChannelStatusCode,
        requiresAck?: boolean,
    ) {
        await this.exchange.send(
            SecureMessageType.StatusReport,
            TlvSecureChannelStatusMessage.encode({
                generalStatus,
                protocolStatus,
            }),
            {
                requiresAck,
                logContext: {
                    generalStatus: GeneralStatusCode[generalStatus] ?? Diagnostic.hex(generalStatus),
                    protocolStatus: SecureChannelStatusCode[protocolStatus] ?? Diagnostic.hex(protocolStatus),
                },
            },
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
        if (protocolStatus !== SecureChannelStatusCode.Success) {
            throw new ChannelStatusResponseError(
                `Received general success status, but protocol status is not Success${logHint ? ` (${logHint})` : ""}`,
                generalStatus,
                protocolStatus,
            );
        }
    }
}
