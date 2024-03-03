/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterController } from "../../MatterController.js";
import { MatterDevice } from "../../MatterDevice.js";
import { Message, SessionType } from "../../codec/MessageCodec.js";
import {
    ImplementationError,
    MatterFlowError,
    NotImplementedError,
    UnexpectedDataError,
} from "../../common/MatterError.js";
import { tryCatchAsync } from "../../common/TryCatchHandler.js";
import { Logger } from "../../log/Logger.js";
import { ExchangeProvider } from "../../protocol/ExchangeManager.js";
import {
    ExchangeSendOptions,
    MessageExchange,
    RetransmissionLimitReachedError,
    UnexpectedMessageError,
} from "../../protocol/MessageExchange.js";
import { TlvAny } from "../../tlv/TlvAny.js";
import { TlvSchema, TypeFromSchema } from "../../tlv/TlvSchema.js";
import { ByteArray } from "../../util/ByteArray.js";
import {
    DataReportPayload,
    canAttributePayloadBeChunked,
    chunkAttributePayload,
    encodeAttributePayload,
    encodeEventPayload,
} from "./AttributeDataEncoder.js";
import {
    TlvAttributeReport,
    TlvDataReport,
    TlvDataReportForSend,
    TlvEventReport,
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
import { INTERACTION_MODEL_REVISION } from "./InteractionServer.js";
import { StatusCode, StatusResponseError } from "./StatusCode.js";

export enum MessageType {
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

const MAX_SPDU_LENGTH = 1024;

const logger = Logger.get("InteractionMessenger");

class InteractionMessenger<ContextT> {
    constructor(protected exchange: MessageExchange<ContextT>) {}

    async send(messageType: number, payload: ByteArray, options?: ExchangeSendOptions) {
        return this.exchange.send(messageType, payload, options);
    }

    sendStatus(status: StatusCode) {
        return this.send(
            MessageType.StatusResponse,
            TlvStatusResponse.encode({ status, interactionModelRevision: INTERACTION_MODEL_REVISION }),
        );
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
        handleReadRequest: (request: ReadRequest, message: Message) => Promise<DataReport>,
        handleWriteRequest: (request: WriteRequest, message: Message) => Promise<WriteResponse>,
        handleSubscribeRequest: (
            request: SubscribeRequest,
            messenger: InteractionServerMessenger,
            message: Message,
        ) => Promise<void>,
        handleInvokeRequest: (request: InvokeRequest, message: Message) => Promise<InvokeResponse>,
        handleTimedRequest: (request: TimedRequest, message: Message) => void,
    ) {
        let continueExchange = true; // are more messages expected in this "transaction"?
        try {
            while (continueExchange) {
                const message = await this.exchange.nextMessage();
                const isGroupSession = message.packetHeader.sessionType === SessionType.Group;
                continueExchange = false;
                switch (message.payloadHeader.messageType) {
                    case MessageType.ReadRequest: {
                        const readRequest = TlvReadRequest.decode(message.payload);
                        await this.sendDataReport(await handleReadRequest(readRequest, message));
                        break;
                    }
                    case MessageType.WriteRequest: {
                        const writeRequest = TlvWriteRequest.decode(message.payload);
                        const { suppressResponse } = writeRequest;
                        const writeResponse = await handleWriteRequest(writeRequest, message);
                        if (!suppressResponse && !isGroupSession) {
                            await this.send(MessageType.WriteResponse, TlvWriteResponse.encode(writeResponse));
                        }
                        break;
                    }
                    case MessageType.SubscribeRequest: {
                        const subscribeRequest = TlvSubscribeRequest.decode(message.payload);
                        await handleSubscribeRequest(subscribeRequest, this, message);
                        // response is sent by handler
                        break;
                    }
                    case MessageType.InvokeCommandRequest: {
                        const invokeRequest = TlvInvokeRequest.decode(message.payload);
                        const { suppressResponse } = invokeRequest;
                        const invokeResponse = await handleInvokeRequest(invokeRequest, message);
                        if (!suppressResponse && !isGroupSession) {
                            await this.send(
                                MessageType.InvokeCommandResponse,
                                TlvInvokeResponse.encode(invokeResponse),
                            );
                        }
                        // TODO Also invoke could need continueExchange depending on requirements
                        break;
                    }
                    case MessageType.TimedRequest: {
                        const timedRequest = TlvTimedRequest.decode(message.payload);
                        handleTimedRequest(timedRequest, message);
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
                logger.info(`Sending status response ${error.code} for interaction error: ${error.message}`);
                await this.sendStatus(error.code);
            } else {
                logger.error(error);
                await this.sendStatus(StatusCode.Failure);
            }
        } finally {
            await this.exchange.close();
        }
    }

    /**
     * Handle DataReportPayload with the content of a DataReport to send, split them into multiple DataReport
     * messages and send them out based on the size.
     */
    async sendDataReport(dataReportPayload: DataReportPayload) {
        const {
            subscriptionId,
            attributeReportsPayload,
            eventReportsPayload,
            suppressResponse,
            interactionModelRevision,
        } = dataReportPayload;
        const dataReport: TypeFromSchema<typeof TlvDataReportForSend> = {
            subscriptionId,
            suppressResponse,
            interactionModelRevision,
            attributeReports: undefined,
            eventReports: undefined,
        };

        if (attributeReportsPayload !== undefined || eventReportsPayload !== undefined) {
            const attributeReportsToSend = [...(attributeReportsPayload ?? [])];
            const eventReportsToSend = [...(eventReportsPayload ?? [])];

            dataReport.moreChunkedMessages = true; // Assume we have multiple chunks, also for size calculation
            const emptyDataReportBytes = TlvDataReportForSend.encode(dataReport);

            let firstAttributeAddedToReportMessage = false;
            let firstEventAddedToReportMessage = false;
            const sendAndResetReport = async () => {
                await this.sendDataReportMessage(dataReport);
                dataReport.attributeReports = undefined;
                dataReport.eventReports = undefined;
                messageSize = emptyDataReportBytes.length;
                firstAttributeAddedToReportMessage = false;
                firstEventAddedToReportMessage = false;
            };

            let messageSize = emptyDataReportBytes.length;
            while (true) {
                if (attributeReportsToSend.length > 0) {
                    const attributeReport = attributeReportsToSend.shift();
                    if (attributeReport !== undefined) {
                        if (!firstAttributeAddedToReportMessage) {
                            firstAttributeAddedToReportMessage = true;
                            messageSize += 3; // Array element is added now which needs 3 bytes
                        }
                        const encodedAttribute = encodeAttributePayload(attributeReport);
                        const attributeReportBytes = TlvAny.getEncodedByteLength(encodedAttribute);
                        if (messageSize + attributeReportBytes > MAX_SPDU_LENGTH) {
                            if (canAttributePayloadBeChunked(attributeReport)) {
                                // Attribute is a non-empty array: chunk it and add the chunks to the beginning of the queue
                                attributeReportsToSend.unshift(...chunkAttributePayload(attributeReport));
                                continue;
                            }
                            await sendAndResetReport();
                        }
                        messageSize += attributeReportBytes;
                        if (dataReport.attributeReports === undefined) dataReport.attributeReports = [];
                        dataReport.attributeReports.push(encodedAttribute);
                    }
                } else if (eventReportsToSend.length > 0) {
                    const eventReport = eventReportsToSend.shift();
                    if (eventReport === undefined) {
                        // No more chunks to send
                        dataReport.moreChunkedMessages = undefined;
                        break;
                    }
                    if (!firstEventAddedToReportMessage) {
                        firstEventAddedToReportMessage = true;
                        messageSize += 3; // Array element is added now which needs 3 bytes
                    }
                    const encodedEvent = encodeEventPayload(eventReport);
                    const eventReportBytes = TlvAny.getEncodedByteLength(encodedEvent);
                    if (messageSize + eventReportBytes > MAX_SPDU_LENGTH) {
                        await sendAndResetReport();
                    }
                    messageSize += eventReportBytes;
                    if (dataReport.eventReports === undefined) dataReport.eventReports = [];
                    dataReport.eventReports.push(encodedEvent);
                } else {
                    // No more chunks to send
                    dataReport.moreChunkedMessages = undefined;
                    break;
                }
            }
        }

        await this.sendDataReportMessage(dataReport);
    }

    async sendDataReportMessage(dataReport: TypeFromSchema<typeof TlvDataReportForSend>) {
        const encodedMessage = TlvDataReportForSend.encode(dataReport);
        if (encodedMessage.length > MAX_SPDU_LENGTH) {
            throw new MatterFlowError(
                `DataReport is too long to fit in a single chunk, This should not happen! Data: ${Logger.toJSON(
                    dataReport,
                )}`,
            );
        }
        logger.debug(
            `Sending DataReport chunk with ${dataReport.attributeReports?.length ?? 0} attributes and ${
                dataReport.eventReports?.length ?? 0
            } events: ${encodedMessage.length} bytes`,
        );

        if (dataReport.suppressResponse) {
            // We do not expect a response other than a Standalone Ack, so if we receive anything else, we throw an error
            await tryCatchAsync(
                async () =>
                    await this.exchange.send(MessageType.ReportData, encodedMessage, {
                        expectAckOnly: true,
                    }),
                UnexpectedMessageError,
                async error => {
                    const { receivedMessage } = error;
                    this.throwIfErrorStatusMessage(receivedMessage);
                },
            );
        } else {
            await this.exchange.send(MessageType.ReportData, encodedMessage);
            await this.waitForSuccess();
        }
    }
}

export class IncomingInteractionClientMessenger extends InteractionMessenger<MatterController> {
    async readDataReport(): Promise<DataReport> {
        let subscriptionId: number | undefined;
        const attributeValues: TypeFromSchema<typeof TlvAttributeReport>[] = [];
        const eventValues: TypeFromSchema<typeof TlvEventReport>[] = [];

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
                attributeValues.push(...report.attributeReports);
            }
            if (Array.isArray(report.eventReports) && report.eventReports.length > 0) {
                eventValues.push(...report.eventReports);
            }
            if (!report.moreChunkedMessages) {
                report.attributeReports = attributeValues;
                report.eventReports = eventValues;
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
    override async send(messageType: number, payload: ByteArray, options?: ExchangeSendOptions) {
        if (this.exchange.channel.closed) {
            throw new ImplementationError("The exchange channel is closed. Please connect the device first.");
        }
        try {
            return await this.exchange.send(messageType, payload, options);
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

    async sendInvokeCommand(invokeRequest: InvokeRequest, minimumResponseTimeoutMs?: number) {
        if (invokeRequest.suppressResponse) {
            await this.requestWithSuppressedResponse(
                MessageType.InvokeCommandRequest,
                TlvInvokeRequest,
                invokeRequest,
                minimumResponseTimeoutMs,
            );
        } else {
            return await this.request(
                MessageType.InvokeCommandRequest,
                TlvInvokeRequest,
                MessageType.InvokeCommandResponse,
                TlvInvokeResponse,
                invokeRequest,
                minimumResponseTimeoutMs,
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
            interactionModelRevision: INTERACTION_MODEL_REVISION,
        });
    }

    private async requestWithSuppressedResponse<RequestT>(
        requestMessageType: number,
        requestSchema: TlvSchema<RequestT>,
        request: RequestT,
        minimumResponseTimeoutMs?: number,
    ): Promise<void> {
        await this.send(requestMessageType, requestSchema.encode(request), {
            expectAckOnly: true,
            minimumResponseTimeoutMs,
        });
    }

    private async request<RequestT, ResponseT>(
        requestMessageType: number,
        requestSchema: TlvSchema<RequestT>,
        responseMessageType: number,
        responseSchema: TlvSchema<ResponseT>,
        request: RequestT,
        minimumResponseTimeoutMs?: number,
    ): Promise<ResponseT> {
        await this.send(requestMessageType, requestSchema.encode(request), {
            expectAckOnly: false,
            minimumResponseTimeoutMs,
        });
        const responseMessage = await this.nextMessage(responseMessageType);
        return responseSchema.decode(responseMessage.payload);
    }
}
