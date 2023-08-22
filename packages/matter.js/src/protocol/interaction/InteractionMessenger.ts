/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "../../codec/MessageCodec.js";
import { MatterError, MatterFlowError, NotImplementedError, UnexpectedDataError } from "../../common/MatterError.js";
import { tryCatchAsync } from "../../common/TryCatchHandler.js";
import { Logger } from "../../log/Logger.js";
import { MatterController } from "../../MatterController.js";
import { MatterDevice } from "../../MatterDevice.js";
import { ExchangeProvider } from "../../protocol/ExchangeManager.js";
import {
    MessageExchange,
    RetransmissionLimitReachedError,
    UnexpectedMessageError,
} from "../../protocol/MessageExchange.js";
import { TlvSchema, TypeFromSchema } from "../../tlv/TlvSchema.js";
import { ByteArray } from "../../util/ByteArray.js";
import {
    StatusCode,
    TlvAttributeReport,
    TlvDataReport,
    TlvInvokeRequest,
    TlvInvokeResponse,
    TlvReadRequest,
    TlvStatusResponse,
    TlvSubscribeRequest,
    TlvSubscribeResponse,
    TlvTimedRequest,
    TlvWriteRequest,
    TlvWriteResponse,
} from "./InteractionProtocol.js";

export const enum MessageType {
    StatusResponse = 0x01,
    ReadRequest = 0x02,
    SubscribeRequest = 0x03,
    SubscribeResponse = 0x04,
    ReportData = 0x05,
    WriteRequest = 0x06,
    WriteResponse = 0x07,
    InvokeCommandRequest = 0x08,
    InvokeCommandResponse = 0x09,
    TimedRequest = 0x0a,
}

export type ReadRequest = TypeFromSchema<typeof TlvReadRequest>;
export type DataReport = TypeFromSchema<typeof TlvDataReport>;
export type SubscribeRequest = TypeFromSchema<typeof TlvSubscribeRequest>;
export type SubscribeResponse = TypeFromSchema<typeof TlvSubscribeResponse>;
export type InvokeRequest = TypeFromSchema<typeof TlvInvokeRequest>;
export type InvokeResponse = TypeFromSchema<typeof TlvInvokeResponse>;
export type TimedRequest = TypeFromSchema<typeof TlvTimedRequest>;
export type WriteRequest = TypeFromSchema<typeof TlvWriteRequest>;
export type WriteResponse = TypeFromSchema<typeof TlvWriteResponse>;

/** Error base Class for all errors related to the status response messages. */
export class StatusResponseError extends MatterError {
    public constructor(
        message: string,
        public readonly code: StatusCode,
    ) {
        super();

        this.message = `(${code}) ${message}`;
    }
}

const MAX_SPDU_LENGTH = 1024;

const logger = Logger.get("InteractionMessenger");

class InteractionMessenger<ContextT> {
    constructor(protected exchange: MessageExchange<ContextT>) {}

    async send(messageType: number, payload: ByteArray) {
        return this.exchange.send(messageType, payload);
    }

    sendStatus(status: StatusCode) {
        return this.send(MessageType.StatusResponse, TlvStatusResponse.encode({ status, interactionModelRevision: 1 }));
    }

    async waitForSuccess() {
        // If the status is not Success, this would throw an Error.
        await this.nextMessage(MessageType.StatusResponse);
    }

    async nextMessage(expectedMessageType?: number) {
        const message = await this.exchange.nextMessage();
        const messageType = message.payloadHeader.messageType;
        this.throwIfErrorStatusMessage(message);
        if (expectedMessageType !== undefined && messageType !== expectedMessageType) {
            throw new UnexpectedDataError(
                `Received unexpected message type: ${messageType}, expected: ${expectedMessageType}`,
            );
        }
        return message;
    }

    async close() {
        await this.exchange.close();
    }

    protected throwIfErrorStatusMessage(message: Message) {
        const {
            payloadHeader: { messageType },
            payload,
        } = message;

        if (messageType !== MessageType.StatusResponse) return;
        const { status } = TlvStatusResponse.decode(payload);
        if (status !== StatusCode.Success) throw new StatusResponseError(`Received error status: ${status}`, status);
    }

    getExchangeChannelName() {
        return this.exchange.channel.name;
    }
}

export class InteractionServerMessenger extends InteractionMessenger<MatterDevice> {
    async handleRequest(
        handleReadRequest: (request: ReadRequest) => DataReport,
        handleWriteRequest: (request: WriteRequest) => WriteResponse,
        handleSubscribeRequest: (request: SubscribeRequest, messenger: InteractionServerMessenger) => Promise<void>,
        handleInvokeRequest: (request: InvokeRequest, message: Message) => Promise<InvokeResponse>,
        handleTimedRequest: (request: TimedRequest) => void,
    ) {
        let continueExchange = true;
        try {
            while (continueExchange) {
                const message = await this.exchange.nextMessage();
                continueExchange = false;
                switch (message.payloadHeader.messageType) {
                    case MessageType.ReadRequest: {
                        const readRequest = TlvReadRequest.decode(message.payload);
                        await this.sendDataReport(handleReadRequest(readRequest));
                        break;
                    }
                    case MessageType.WriteRequest: {
                        const writeRequest = TlvWriteRequest.decode(message.payload);
                        const writeResponse = handleWriteRequest(writeRequest);
                        await this.send(MessageType.WriteResponse, TlvWriteResponse.encode(writeResponse));
                        break;
                    }
                    case MessageType.SubscribeRequest: {
                        const subscribeRequest = TlvSubscribeRequest.decode(message.payload);
                        await handleSubscribeRequest(subscribeRequest, this);
                        // response is sent by handler
                        break;
                    }
                    case MessageType.InvokeCommandRequest: {
                        const invokeRequest = TlvInvokeRequest.decode(message.payload);
                        const invokeResponse = await handleInvokeRequest(invokeRequest, message);
                        await this.send(MessageType.InvokeCommandResponse, TlvInvokeResponse.encode(invokeResponse));
                        break;
                    }
                    case MessageType.TimedRequest: {
                        const timedRequest = TlvTimedRequest.decode(message.payload);
                        handleTimedRequest(timedRequest);
                        await this.sendStatus(StatusCode.Success);
                        continueExchange = true;
                        break;
                    }
                    default:
                        throw new NotImplementedError(`Unsupported message type ${message.payloadHeader.messageType}`);
                }
            }
        } catch (error: any) {
            if (error instanceof StatusResponseError) {
                logger.info(`Sending status response ${error.code} for interaction error: ${error}`);
                await this.sendStatus(error.code);
            } else {
                logger.error(error);
                await this.sendStatus(StatusCode.Failure);
            }
        } finally {
            await this.exchange.close();
        }
    }

    async sendDataReport(dataReport: DataReport) {
        const messageBytes = TlvDataReport.encode(dataReport);
        if (
            (dataReport.attributeReports !== undefined || dataReport.eventReports !== undefined) &&
            messageBytes.length > MAX_SPDU_LENGTH
        ) {
            // DataReport is too long, it needs to be sent in chunks
            const attributeReportsToSend = [...(dataReport.attributeReports ?? [])];
            const eventReportsToSend = [...(dataReport.eventReports ?? [])];
            dataReport.attributeReports = undefined;
            dataReport.eventReports = undefined;
            dataReport.moreChunkedMessages = true;

            const emptyDataReportBytes = TlvDataReport.encode(dataReport);

            // TODO reduce code duplication in below blocks
            let messageSize = emptyDataReportBytes.length;
            while (true) {
                if (attributeReportsToSend.length > 0) {
                    const attributeReport = attributeReportsToSend.shift();
                    if (attributeReport !== undefined) {
                        const attributeReportBytes = TlvAttributeReport.encode(attributeReport).length;
                        if (messageSize + attributeReportBytes > MAX_SPDU_LENGTH) {
                            if (messageSize === emptyDataReportBytes.length) {
                                throw new NotImplementedError(
                                    `Attribute report is too long to fit in a single chunk, Array chunking not yet supported.`,
                                );
                            }
                            // Report doesn't fit, sending this chunk
                            logger.debug(
                                `Sending DataReport chunk with ${dataReport.attributeReports?.length} attributes: ${messageSize} bytes`,
                            );
                            await this.send(MessageType.ReportData, TlvDataReport.encode(dataReport));
                            await this.waitForSuccess();
                            dataReport.attributeReports = undefined;
                            messageSize = emptyDataReportBytes.length;
                        }
                        messageSize += attributeReportBytes;
                        if (dataReport.attributeReports === undefined) dataReport.attributeReports = [];
                        dataReport.attributeReports.push(attributeReport);
                    }
                } else if (eventReportsToSend.length > 0) {
                    const eventReport = eventReportsToSend.shift();
                    if (eventReport === undefined) {
                        // No more chunks to send
                        dataReport.moreChunkedMessages = undefined;
                        break;
                    }
                    const eventReportBytes = TlvAttributeReport.encode(eventReport).length;
                    if (messageSize + eventReportBytes > MAX_SPDU_LENGTH) {
                        if (messageSize === emptyDataReportBytes.length) {
                            throw new NotImplementedError(
                                `Event report is too long to fit in a single chunk, Array chunking not yet supported.`,
                            );
                        }
                        // Report doesn't fit, sending this chunk
                        logger.debug(
                            `Sending DataReport chunk with ${dataReport.attributeReports?.length} attributes and ${dataReport.eventReports?.length} events: ${messageSize} bytes`,
                        );
                        await this.send(MessageType.ReportData, TlvDataReport.encode(dataReport));
                        await this.waitForSuccess();
                        dataReport.attributeReports = undefined;
                        dataReport.eventReports = undefined;
                        messageSize = emptyDataReportBytes.length;
                    }
                    messageSize += eventReportBytes;
                    if (dataReport.eventReports === undefined) dataReport.eventReports = [];
                    dataReport.eventReports.push(eventReport);
                } else {
                    // No more chunks to send
                    dataReport.moreChunkedMessages = undefined;
                    break;
                }
            }
        }

        if (dataReport.suppressResponse) {
            // We do not expect a response other than a Standalone Ack, so if we receive anything else, we throw an error
            await tryCatchAsync(
                async () => await this.exchange.send(MessageType.ReportData, TlvDataReport.encode(dataReport), true),
                UnexpectedMessageError,
                async error => {
                    const { receivedMessage } = error;
                    this.throwIfErrorStatusMessage(receivedMessage);
                },
            );
        } else {
            logger.debug(
                `Sending (final) data report with ${dataReport.attributeReports?.length} attributes and ${dataReport.eventReports?.length} events`,
            );
            await this.exchange.send(MessageType.ReportData, TlvDataReport.encode(dataReport));
            await this.waitForSuccess();
        }
    }
}

export class IncomingInteractionClientMessenger extends InteractionMessenger<MatterController> {
    async readDataReport(): Promise<DataReport> {
        let subscriptionId: number | undefined;
        const values: TypeFromSchema<typeof TlvAttributeReport>[] = [];

        while (true) {
            const dataReportMessage = await this.exchange.waitFor(MessageType.ReportData);
            const report = TlvDataReport.decode(dataReportMessage.payload);
            if (subscriptionId === undefined && report.subscriptionId !== undefined) {
                subscriptionId = report.subscriptionId;
            } else if (
                (subscriptionId !== undefined || report.subscriptionId !== undefined) &&
                report.subscriptionId !== subscriptionId
            ) {
                throw new UnexpectedDataError(`Invalid subscription ID ${report.subscriptionId} received`);
            }

            if (Array.isArray(report.attributeReports) && report.attributeReports.length > 0) {
                values.push(...report.attributeReports);
            }
            if (!report.moreChunkedMessages) {
                report.attributeReports = values;
                return report;
            }

            await this.sendStatus(StatusCode.Success);
        }
    }
}

export class InteractionClientMessenger extends IncomingInteractionClientMessenger {
    constructor(private readonly exchangeProvider: ExchangeProvider) {
        super(exchangeProvider.initiateExchange());
    }

    /** Implements a send method with an automatic reconnection mechanism */
    override async send(messageType: number, payload: ByteArray, expectAckOnly = false) {
        try {
            return await this.exchange.send(messageType, payload, expectAckOnly);
        } catch (error) {
            // When retransmission failed (most likely due to a lost connection or invalid session),
            // try to reconnect if possible and resend the message once
            if (error instanceof RetransmissionLimitReachedError) {
                await this.exchange.close();
                if (await this.exchangeProvider.reconnectChannel()) {
                    this.exchange = this.exchangeProvider.initiateExchange();
                    return await this.exchange.send(messageType, payload);
                }
            }
            throw error;
        }
    }

    sendReadRequest(readRequest: ReadRequest) {
        return this.request(
            MessageType.ReadRequest,
            TlvReadRequest,
            MessageType.ReportData,
            TlvDataReport,
            readRequest,
        );
    }

    async sendSubscribeRequest(subscribeRequest: SubscribeRequest) {
        await this.send(MessageType.SubscribeRequest, TlvSubscribeRequest.encode(subscribeRequest));

        const report = await this.readDataReport();
        const { subscriptionId } = report;

        if (subscriptionId === undefined) {
            throw new UnexpectedDataError(`Subscription ID not provided in report`);
        }

        await this.sendStatus(StatusCode.Success);

        const subscribeResponseMessage = await this.nextMessage(MessageType.SubscribeResponse);
        const subscribeResponse = TlvSubscribeResponse.decode(subscribeResponseMessage.payload);

        if (subscribeResponse.subscriptionId !== subscriptionId) {
            throw new MatterFlowError(
                `Received subscription ID ${subscribeResponse.subscriptionId} instead of ${subscriptionId}`,
            );
        }

        return {
            subscribeResponse,
            report,
        };
    }

    async sendInvokeCommand(invokeRequest: InvokeRequest) {
        if (invokeRequest.suppressResponse) {
            await this.requestWithSuppressedResponse(MessageType.InvokeCommandRequest, TlvInvokeRequest, invokeRequest);
        } else {
            return await this.request(
                MessageType.InvokeCommandRequest,
                TlvInvokeRequest,
                MessageType.InvokeCommandResponse,
                TlvInvokeResponse,
                invokeRequest,
            );
        }
    }

    async sendWriteCommand(writeRequest: WriteRequest) {
        if (writeRequest.suppressResponse) {
            await this.requestWithSuppressedResponse(MessageType.WriteRequest, TlvWriteRequest, writeRequest);
        } else {
            return await this.request(
                MessageType.WriteRequest,
                TlvWriteRequest,
                MessageType.WriteResponse,
                TlvWriteResponse,
                writeRequest,
            );
        }
    }

    sendTimedRequest(timeoutSeconds: number) {
        return this.request(MessageType.TimedRequest, TlvTimedRequest, MessageType.StatusResponse, TlvStatusResponse, {
            timeout: timeoutSeconds,
            interactionModelRevision: 1,
        });
    }

    private async requestWithSuppressedResponse<RequestT>(
        requestMessageType: number,
        requestSchema: TlvSchema<RequestT>,
        request: RequestT,
    ): Promise<void> {
        await this.send(requestMessageType, requestSchema.encode(request), true);
    }

    private async request<RequestT, ResponseT>(
        requestMessageType: number,
        requestSchema: TlvSchema<RequestT>,
        responseMessageType: number,
        responseSchema: TlvSchema<ResponseT>,
        request: RequestT,
    ): Promise<ResponseT> {
        await this.send(requestMessageType, requestSchema.encode(request));
        const responseMessage = await this.nextMessage(responseMessageType);
        return responseSchema.decode(responseMessage.payload);
    }
}
