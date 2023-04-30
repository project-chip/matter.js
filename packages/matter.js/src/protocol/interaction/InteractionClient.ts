/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageExchange } from "../../protocol/MessageExchange.js";
import { ProtocolHandler } from "../../protocol/ProtocolHandler.js";
import { MatterController } from "../../MatterController.js";
import { capitalize } from "../../util/String.js";
import { Logger } from "../../log/Logger.js";
import { StatusCode, TlvAttributeReport } from "./InteractionProtocol.js";
import { TlvSchema, TypeFromSchema } from "../../tlv/TlvSchema.js";
import {
    DataReport, IncomingInteractionClientMessenger, InteractionClientMessenger, ReadRequest, StatusResponseError
} from "./InteractionMessenger.js";
import { attributePathToId, INTERACTION_PROTOCOL_ID } from "./InteractionServer.js";
import { DecodedAttributeReportValue, normalizeAndDecodeReadAttributeReport } from "./AttributeDataDecoder.js";
import { NodeId } from "../../datatype/NodeId.js";
import {
    Attribute, AttributeJsType, Attributes, Cluster, Command, Commands, RequestType, ResponseType, TlvNoResponse
} from "../../cluster/Cluster.js";
import { ExchangeProvider } from "../ExchangeManager.js";
import { AttributeClients, SignatureFromCommandSpec, ClusterClientInstance } from "../../cluster/client/ClusterClient.js";
import { AttributeClient } from "../../cluster/client/AttributeClient.js";

const logger = Logger.get("InteractionClient");

export interface AttributeStatus {
    path: {
        nodeId?: NodeId,
        endpointId?: number,
        clusterId?: number,
        attributeId?: number,
    },
    status: StatusCode,
}

export class ClusterClient<C extends Commands, A extends Attributes> {
    readonly id: number;
    readonly name: string;
    readonly attributes = <AttributeClients<A>>{};
    private readonly attributeToId = <{ [key: number]: string }>{};
    readonly commands = <{ [P in keyof C]: SignatureFromCommandSpec<C[P]> }>{};
    private interactionClient: InteractionClient | undefined;

    constructor(
        clusterDef: Cluster<any, A, C, any>,
        readonly endpointId: number,
        interactionClient?: InteractionClient,
    ) {
        const { id: clusterId, name, commands, attributes } = clusterDef;
        this.id = clusterId;
        this.name = name;

        // Add accessors
        for (const attributeName in attributes) {
            const attribute = attributes[attributeName];
            (this.attributes as any)[attributeName] = new AttributeClient(attribute, attributeName, endpointId, clusterId);
            this.attributeToId[attribute.id] = attributeName;
        }

        if (interactionClient !== undefined) {
            this.bindToInteractionClient(interactionClient);
        }

        // Add command calls
        for (const commandName in commands) {
            const { requestId, requestSchema, responseId, responseSchema, optional } = commands[commandName];

            (this.commands as any)[commandName] = async <RequestT, ResponseT>(request: RequestT) => {
                if (this.interactionClient === undefined) {
                    throw new Error("InteractionClient not set");
                }
                return this.interactionClient.invoke<Command<RequestT, ResponseT>>(endpointId, clusterId, request, requestId, requestSchema, responseId, responseSchema, optional);
            };
        }
    }

    bindToInteractionClient(interactionClient: InteractionClient) {
        this.interactionClient = interactionClient;
        for (const attributeName in this.attributes) {
            (this.attributes as any)[attributeName].bindToInteractionClient(this.interactionClient);
        }
    }

    subscribe(minIntervalFloorSeconds: number, maxIntervalCeilingSeconds: number) {
        if (this.interactionClient === undefined) {
            throw new Error("InteractionClient not set");
        }
        return this.interactionClient.subscribeMultipleAttributes([{ endpointId: this.endpointId, clusterId: this.id }], minIntervalFloorSeconds, maxIntervalCeilingSeconds, (data) => {
            const { path, value } = data;
            const attributeName = this.attributeToId[path.attributeId];
            if (attributeName === undefined) {
                logger.warn("Unknown attribute id", path.attributeId);
                return;
            }
            (this.attributes as any)[attributeName].update(value);
        });
    }
}

export function ClusterClientInstance<CommandT extends Commands, AttributeT extends Attributes>(interactionClient: InteractionClient, endpointId: number, clusterDef: Cluster<any, AttributeT, CommandT, any>): ClusterClientInstance<CommandT, AttributeT> {
    const result: any = {};
    const { id: clusterId, name, commands, attributes } = clusterDef;
    result.id = clusterId;
    result.name = name;
    result.endpointId = endpointId;
    result.attributes = attributes;
    result.commands = commands;

    // Add accessors
    for (const attributeName in attributes) {
        const attribute = attributes[attributeName];
        const capitalizedAttributeName = capitalize(attributeName);
        result[`get${capitalizedAttributeName}`] = async () => interactionClient.get(endpointId, clusterId, attribute);
        result[`set${capitalizedAttributeName}`] = async <T,>(value: T) => interactionClient.set<T>(endpointId, clusterId, attribute, value);
        result[`subscribe${capitalizedAttributeName}`] = async <T,>(listener: (value: T, version: number) => void, minIntervalS: number, maxIntervalS: number) => interactionClient.subscribe(endpointId, clusterId, attribute, minIntervalS, maxIntervalS, listener);
    }

    // Add command calls
    for (const commandName in commands) {
        const { requestId, requestSchema, responseId, responseSchema, optional } = commands[commandName];
        result[commandName] = async <RequestT, ResponseT>(request: RequestT) => interactionClient.invoke<Command<RequestT, ResponseT>>(endpointId, clusterId, request, requestId, requestSchema, responseId, responseSchema, optional);
    }

    return result as ClusterClientInstance<CommandT, AttributeT>;
}

export class SubscriptionClient implements ProtocolHandler<MatterController> {

    constructor(
        private readonly subscriptionListeners: Map<number, (dataReport: DataReport) => void>,
    ) { }

    getId() {
        return INTERACTION_PROTOCOL_ID;
    }

    async onNewExchange(exchange: MessageExchange<MatterController>) {
        const messenger = new IncomingInteractionClientMessenger(exchange);
        const dataReport = await messenger.readDataReport();
        const subscriptionId = dataReport.subscriptionId;
        if (subscriptionId === undefined) {
            await messenger.sendStatus(StatusCode.InvalidSubscription);
            throw new Error("Invalid Data report without Subscription ID");
        }
        const listener = this.subscriptionListeners.get(subscriptionId);
        if (listener === undefined) {
            await messenger.sendStatus(StatusCode.InvalidSubscription);
            throw new Error(`Unknown subscription ID ${subscriptionId}`);
        }
        await messenger.sendStatus(StatusCode.Success);

        listener(dataReport);
    }
}

export class InteractionClient {
    private readonly subscriptionListeners = new Map<number, (dataReport: DataReport) => void>();
    private readonly subscribedLocalValues = new Map<string, { value: any, version?: number }>();

    constructor(
        private readonly exchangeProvider: ExchangeProvider,
    ) {
        // TODO: Right now we potentially add multiple handlers for the same protocol, We need to fix this
        this.exchangeProvider.addProtocolHandler(new SubscriptionClient(this.subscriptionListeners));
    }

    async getAllAttributes(): Promise<DecodedAttributeReportValue[]> {
        return this.getMultipleAttributes([{ /* empty means *,*,* */ }]);
    }

    async getMultipleAttributes(attributeRequests: { endpointId?: number, clusterId?: number, attributeId?: number }[]): Promise<DecodedAttributeReportValue[]> {
        return this.withMessenger<DecodedAttributeReportValue[]>(async messenger => {
            return await this.processReadRequest(messenger, {
                attributeRequests,
                interactionModelRevision: 1,
                isFabricFiltered: true,
            });
        });
    }

    async get<A extends Attribute<any>>(endpointId: number, clusterId: number, attribute: A): Promise<AttributeJsType<A> | undefined> {
        const response = await this.getWithVersion(endpointId, clusterId, attribute);
        return response?.value;
    }

    async getWithVersion<A extends Attribute<any>>(endpointId: number, clusterId: number, attribute: A): Promise<{ value: AttributeJsType<A>, version: number } | undefined> {
        const { id: attributeId } = attribute;
        const localValue = this.subscribedLocalValues.get(attributePathToId({ endpointId, clusterId, attributeId }))
        if (localValue !== undefined) {
            return localValue.value;
        }

        const response = await this.getMultipleAttributes([{ endpointId, clusterId, attributeId }]);

        if (response.length === 0) {
            return undefined;
        }
        if (response.length > 1) {
            throw new Error("Unexpected response with more then one attribute");
        }
        return { value: response[0].value, version: response[0].version };
    }

    private async processReadRequest(messenger: InteractionClientMessenger, request: ReadRequest): Promise<DecodedAttributeReportValue[]> {
        // Send read request and combine all (potentially chunked) responses
        let response = await messenger.sendReadRequest(request);
        const result: TypeFromSchema<typeof TlvAttributeReport>[] = [];
        while (true) {
            if (response.attributeReports !== undefined) {
                result.push(...response.attributeReports);
            }
            if (!response.suppressResponse) {
                await messenger.sendStatus(StatusCode.Success);
            }
            if (!response.moreChunkedMessages) break;
            response = await messenger.readDataReport();
        }

        // Normalize and decode the response
        return normalizeAndDecodeReadAttributeReport(result);
    }

    async set<T>(endpointId: number, clusterId: number, attribute: Attribute<T>, value: T, dataVersion?: number): Promise<void> {
        const response = await this.setMultipleAttributes([{ endpointId, clusterId, attribute, value, dataVersion }]);

        // Response contains Status error if there was an error on write
        if (response.length) {
            const { path: { endpointId, clusterId, attributeId }, status } = response[0];
            if (status !== undefined && status !== StatusCode.Success) {
                throw new StatusResponseError(`Error setting attribute ${endpointId}/${clusterId}/${attributeId}`, status);
            }
        }
    }

    async setMultipleAttributes(attributes: { endpointId: number, clusterId: number, attribute: Attribute<any>, value: any, dataVersion?: number }[]): Promise<AttributeStatus[]> {
        return this.withMessenger<AttributeStatus[]>(async messenger => {
            const writeRequests = attributes.map((
                { endpointId, clusterId, attribute: { id, schema }, value, dataVersion }
            ) => ({
                path: { endpointId, clusterId, attributeId: id }, data: schema.encodeTlv(value), dataVersion
            }));
            const response = await messenger.sendWriteCommand({
                suppressResponse: false,
                timedRequest: false,
                writeRequests,
                moreChunkedMessages: false,
                interactionModelRevision: 1,
            });
            if (response === undefined) {
                throw new Error(`No response received`);
            }
            return response.writeResponses.flatMap(({ status: { status, clusterStatus }, path: { nodeId, endpointId, clusterId, attributeId } }) => {
                return { path: { nodeId, endpointId, clusterId, attributeId }, status: status ?? clusterStatus ?? StatusCode.Failure };
            }).filter(({ status }) => status !== StatusCode.Success);
        });
    }

    async subscribe<A extends Attribute<any>>(
        endpointId: number,
        clusterId: number,
        attribute: A,
        minIntervalFloorSeconds: number,
        maxIntervalCeilingSeconds: number,
        listener?: (value: AttributeJsType<A>, version: number) => void,
    ): Promise<void> {
        return this.withMessenger<void>(async messenger => {
            const { id: attributeId } = attribute;
            const { report, subscribeResponse: { subscriptionId } } = await messenger.sendSubscribeRequest({
                attributeRequests: [{ endpointId, clusterId, attributeId }],
                keepSubscriptions: true,
                minIntervalFloorSeconds,
                maxIntervalCeilingSeconds,
                isFabricFiltered: true,
            }); // TODO: also initialize all values

            const subscriptionListener = (dataReport: DataReport) => {
                if (!Array.isArray(dataReport.attributeReports) || !dataReport.attributeReports.length) {
                    logger.debug('Subscription result empty');
                    return;
                }

                const data = normalizeAndDecodeReadAttributeReport(dataReport.attributeReports);

                if (data.length === 0) {
                    throw new Error('Subscription result reporting undefined/no value not specified');
                }
                if (data.length > 1) {
                    throw new Error("Unexpected response with more then one attribute");
                }
                const { path: { endpointId, clusterId, attributeId }, value, version } = data[0];
                if (value === undefined) throw new Error('Subscription result reporting undefined value not specified');

                this.subscribedLocalValues.set(attributePathToId({ endpointId, clusterId, attributeId }), { value, version });
                listener?.(value, version);
            };
            this.subscriptionListeners.set(subscriptionId, subscriptionListener);
            subscriptionListener(report);
            return;
        });
    }

    async subscribeMultipleAttributes(attributeRequests: { endpointId?: number, clusterId?: number, attributeId?: number }[], minIntervalFloorSeconds: number, maxIntervalCeilingSeconds: number, listener?: (data: DecodedAttributeReportValue) => void): Promise<void> {
        return this.withMessenger<void>(async messenger => {
            const { report, subscribeResponse: { subscriptionId } } = await messenger.sendSubscribeRequest({
                attributeRequests,
                keepSubscriptions: true,
                minIntervalFloorSeconds,
                maxIntervalCeilingSeconds,
                isFabricFiltered: true,
            }); // TODO: also initialize all values

            const subscriptionListener = (dataReport: DataReport) => {
                if (!Array.isArray(dataReport.attributeReports) || !dataReport.attributeReports.length) {
                    logger.debug('Subscription result empty');
                    return;
                }
                const values = normalizeAndDecodeReadAttributeReport(dataReport.attributeReports);

                values.forEach(data => {
                    const { path: { endpointId, clusterId, attributeId }, value, version } = data;
                    if (value === undefined) throw new Error('Subscription result reporting undefined value not specified');
                    this.subscribedLocalValues.set(attributePathToId({ endpointId, clusterId, attributeId }), { value, version });
                    listener?.(data);
                });
            };
            this.subscriptionListeners.set(subscriptionId, subscriptionListener);
            subscriptionListener(report);
            return;
        });
    }

    async invoke<C extends Command<any, any>>(endpointId: number, clusterId: number, request: RequestType<C>, id: number, requestSchema: TlvSchema<RequestType<C>>, _responseId: number, responseSchema: TlvSchema<ResponseType<C>>, optional: boolean): Promise<ResponseType<C>> {
        return this.withMessenger<ResponseType<C>>(async messenger => {
            const commandFields = requestSchema.encodeTlv(request);

            const invokeResponse = await messenger.sendInvokeCommand({
                invokeRequests: [
                    { commandPath: { endpointId, clusterId, commandId: id }, commandFields }
                ],
                timedRequest: false,
                suppressResponse: false,
                interactionModelRevision: 1,
            });
            if (invokeResponse === undefined) throw new Error("No response received");
            const { invokeResponses } = invokeResponse;
            if (invokeResponses.length === 0) throw new Error("No response received");
            const { command, status } = invokeResponses[0];
            if (status !== undefined) {
                const resultCode = status.status.status;
                if (resultCode !== StatusCode.Success) throw new Error(`Received non-success result: ${resultCode}`);
                if ((responseSchema as any) !== TlvNoResponse) throw new Error("A response was expected for this command");
                return undefined as unknown as ResponseType<C>; // ResponseType is void, force casting the empty result
            } if (command !== undefined) {
                if (command.commandFields === undefined) {
                    if ((responseSchema as any) !== TlvNoResponse) throw new Error("A response was expected for this command");
                    return undefined as unknown as ResponseType<C>; // ResponseType is void, force casting the empty result
                }
                return responseSchema.decodeTlv(command.commandFields);
            } if (optional) {
                return undefined as ResponseType<C>; // ResponseType allows undefined for optional commands
            }
            throw new Error("Received invoke response with no result nor response");
        });
    }

    private async withMessenger<T>(invoke: (messenger: InteractionClientMessenger) => Promise<T>): Promise<T> {
        const messenger = new InteractionClientMessenger(this.exchangeProvider);
        try {
            return await invoke(messenger);
        } finally {
            messenger.close();
        }
    }
}
