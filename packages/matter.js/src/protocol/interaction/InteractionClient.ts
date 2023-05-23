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
    DataReport, IncomingInteractionClientMessenger, InteractionClientMessenger, ReadRequest
} from "./InteractionMessenger.js";
import { StatusResponseError } from "./StatusResponseError.js";
import { attributePathToId, INTERACTION_PROTOCOL_ID } from "./InteractionServer.js";
import { DecodedAttributeReportValue, normalizeAndDecodeReadAttributeReport } from "./AttributeDataDecoder.js";
import { NodeId } from "../../datatype/NodeId.js";
import {
    Attribute, AttributeJsType, Attributes, Cluster, Command, Commands, RequestType, ResponseType, TlvNoResponse
} from "../../cluster/Cluster.js";
import { ExchangeProvider } from "../ExchangeManager.js";
import { AttributeClients, SignatureFromCommandSpec, ClusterClientObj } from "../../cluster/client/ClusterClient.js";
import { AttributeClient } from "../../cluster/client/AttributeClient.js";
import { tryCatchAsync } from "../../common/TryCatchHandler.js";

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

export function ClusterClient<A extends Attributes, C extends Commands>(
    clusterDef: Cluster<any, any, A, C, any>,
    endpointId: number,
    interactionClient: InteractionClient
): ClusterClientObj<A, C> {
    const { id: clusterId, name, commands: commandDef, attributes: attributeDef } = clusterDef;
    const attributes = <AttributeClients<A>>{};

    const result: any = {
        id: clusterId,
        name,
        _type: "ClusterClient",
        endpointId,
        attributes,
        commands: <{ [P in keyof C]: SignatureFromCommandSpec<C[P]> }>{},
        subscribeAllAttributes: async (minIntervalFloorSeconds: number, maxIntervalCeilingSeconds: number) => {
            if (interactionClient === undefined) {
                throw new Error("InteractionClient not set");
            }
            return await interactionClient.subscribeMultipleAttributes([{ endpointId: endpointId, clusterId: clusterId }], minIntervalFloorSeconds, maxIntervalCeilingSeconds, (data) => {
                const { path, value } = data;
                const attributeName = attributeToId[path.attributeId];
                if (attributeName === undefined) {
                    logger.warn("Unknown attribute id", path.attributeId);
                    return;
                }
                (attributes as any)[attributeName].update(value);
            });
        },
        /**
         * Clones the cluster client, optionally with a new interaction client.
         * When the clusterClient is the same then also AttributeClients will be reused.
         *
         * @param newInteractionClient Optionally a new interactionClient to bind to
         */
        _clone(newInteractionClient?: InteractionClient) {
            const clonedClusterClient = ClusterClient(clusterDef, endpointId, newInteractionClient ?? interactionClient);
            if (newInteractionClient === undefined) {
                // When we keep the InteractionClient we also reuse the AttributeServers bound to it
                clonedClusterClient.attributes = attributes;
            }
            return clonedClusterClient;
        }
    };
    const attributeToId = <{ [key: number]: string }>{};

    // Add accessors
    for (const attributeName in attributeDef) {
        const attribute = attributeDef[attributeName];
        (attributes as any)[attributeName] = new AttributeClient(attribute, attributeName, endpointId, clusterId, async () => interactionClient);
        attributeToId[attribute.id] = attributeName;
        const capitalizedAttributeName = capitalize(attributeName);
        result[`get${capitalizedAttributeName}Attribute`] = async (alwaysRequestFromRemote = false) => {
            return await tryCatchAsync(async () => {
                return await (attributes as any)[attributeName].get(alwaysRequestFromRemote);
            }, StatusResponseError, (e) => {
                const { code } = e;
                if (code === StatusCode.UnsupportedAttribute) {
                    return undefined;
                }
                throw e;
            });
        }
        result[`set${capitalizedAttributeName}Attribute`] = async <T,>(value: T) => (attributes as any)[attributeName].set(value);
        result[`subscribe${capitalizedAttributeName}Attribute`] = async <T,>(listener: (value: T) => void, minIntervalS: number, maxIntervalS: number) => {
            (attributes as any)[attributeName].addListener(listener);
            (attributes as any)[attributeName].subscribe(minIntervalS, maxIntervalS);
        }
    }

    // Add command calls
    for (const commandName in commandDef) {
        const { requestId, requestSchema, responseId, responseSchema, optional } = commandDef[commandName];

        result.commands[commandName] = async <RequestT, ResponseT>(request: RequestT) => {
            if (interactionClient === undefined) {
                throw new Error("InteractionClient not set");
            }
            return interactionClient.invoke<Command<RequestT, ResponseT>>(endpointId, clusterId, request, requestId, requestSchema, responseId, responseSchema, optional);
        };
        result[commandName] = result.commands[commandName];
    }

    return result as ClusterClientObj<A, C>;
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

    async get<A extends Attribute<any>>(endpointId: number, clusterId: number, attribute: A, alwaysRequestFromRemote = false): Promise<AttributeJsType<A> | undefined> {
        const response = await this.getWithVersion(endpointId, clusterId, attribute, alwaysRequestFromRemote);
        return response?.value;
    }

    async getWithVersion<A extends Attribute<any>>(endpointId: number, clusterId: number, attribute: A, alwaysRequestFromRemote = false): Promise<{ value: AttributeJsType<A>, version: number } | undefined> {
        const { id: attributeId } = attribute;
        if (!alwaysRequestFromRemote) {
            const localValue = this.subscribedLocalValues.get(attributePathToId({ endpointId, clusterId, attributeId }))
            if (localValue !== undefined) {
                return localValue as { value: AttributeJsType<A>, version: number };
            }
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
            });

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

    async subscribeAllAttributes(minIntervalFloorSeconds: number, maxIntervalCeilingSeconds: number, listener?: (data: DecodedAttributeReportValue) => void): Promise<void> {
        return this.subscribeMultipleAttributes([{}], minIntervalFloorSeconds, maxIntervalCeilingSeconds, listener);
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
