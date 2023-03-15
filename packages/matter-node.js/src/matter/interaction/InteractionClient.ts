/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageExchange } from "../common/MessageExchange";
import { MatterController } from "../MatterController";
import { capitalize } from "../../util/String";
import { Attribute, AttributeJsType, Attributes, Cluster, Command, Commands, TlvNoResponse, RequestType, ResponseType } from "../cluster/Cluster";
import { DataReport, InteractionClientMessenger } from "./InteractionMessenger";
import { ResultCode } from "../cluster/server/CommandServer";
import { ClusterClient } from "../cluster/client/ClusterClient";
import { ExchangeManager, MessageChannel } from "../common/ExchangeManager";
import { INTERACTION_PROTOCOL_ID } from "./InteractionServer";
import { ProtocolHandler } from "../common/ProtocolHandler";
import { StatusCode } from "./InteractionMessages";
import { TlvSchema, TlvStream } from "@project-chip/matter.js";

interface GetRawValueResponse { // TODO Remove when restructuring Responses
    endpointId: number;
    clusterId: number;
    attributeId: number;
    version: number;
    value: TlvStream;
}

export function ClusterClient<CommandT extends Commands, AttributeT extends Attributes>(interactionClient: InteractionClient, endpointId: number, clusterDef: Cluster<any, AttributeT, CommandT, any>): ClusterClient<CommandT, AttributeT> {
    const result: any = {};
    const { id: clusterId, commands, attributes } = clusterDef;

    // Add accessors
    for (const attributeName in attributes) {
        const attribute = attributes[attributeName];
        const capitalizedAttributeName = capitalize(attributeName);
        result[`get${capitalizedAttributeName}`] = async () => interactionClient.get(endpointId, clusterId, attribute);
        result[`set${capitalizedAttributeName}`] = async <T,>(value: T) => interactionClient.set<T>(endpointId, clusterId, attribute, value);
        result[`subscribe${capitalizedAttributeName}`] = async <T,>(listener: (value: T, version: number) => void, minIntervalS: number, maxIntervalS: number) => interactionClient.subscribe(endpointId, clusterId, attribute, listener, minIntervalS, maxIntervalS);
    }

    // Add command calls
    for (const commandName in commands) {
        const { requestId, requestSchema, responseId, responseSchema, optional } = commands[commandName];
        result[commandName] = async <RequestT, ResponseT>(request: RequestT) => interactionClient.invoke<Command<RequestT, ResponseT>>(endpointId, clusterId, request, requestId, requestSchema, responseId, responseSchema, optional);
    }

    return result as ClusterClient<CommandT, AttributeT>;
}

export class SubscriptionClient implements ProtocolHandler<MatterController> {

    constructor(
        private readonly subscriptionListeners: Map<number, (dataReport: DataReport) => void>,
    ) {}

    getId() {
        return INTERACTION_PROTOCOL_ID;
    }

    async onNewExchange(exchange: MessageExchange<MatterController>) {
        const messenger = new InteractionClientMessenger(exchange);
        let dataReport = await messenger.readDataReport();
        const subscriptionId = dataReport.subscriptionId;
        if (subscriptionId === undefined) {
            await messenger.sendStatus(StatusCode.InvalidSubscription);
            throw new Error("Invalid Datareport without Subscription ID");
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

    constructor(
        private readonly exchangeManager: ExchangeManager<MatterController>,
        private readonly channel: MessageChannel<MatterController>,
    ) {
        this.exchangeManager.addProtocolHandler(new SubscriptionClient(this.subscriptionListeners));
    }

    async getAllAttributes(): Promise<{}> {
        return this.withMessenger<GetRawValueResponse[]>(async messenger => {
            const response = await messenger.sendReadRequest({
                attributes: [ {} ],
                interactionModelRevision: 1,
                isFabricFiltered: true,
            });
            if (!Array.isArray(response.values)) {
                return []; // TODO handle Errors correctly
            }

            return response.values.flatMap(({ value: reportValue} ) => {
                if (reportValue === undefined) return [];
                const { path: { endpointId, clusterId, attributeId }, version, value } = reportValue;
                if (endpointId === undefined || clusterId === undefined || attributeId === undefined ) throw new Error("Invalid response");
                return { endpointId, clusterId, attributeId, version, value };
            });
        });
    }

    async get<A extends Attribute<any>>(endpointId: number, clusterId: number, { id, schema, optional, default: conformanceValue }: A): Promise<AttributeJsType<A>> {
        return this.withMessenger<AttributeJsType<A>>(async messenger => {
            const response = await messenger.sendReadRequest({
                attributes: [ {endpointId , clusterId, attributeId: id} ],
                interactionModelRevision: 1,
                isFabricFiltered: true,
            });

            let value;
            if (Array.isArray(response.values)) {
                value = response.values.map(({ value }) => value).find((value) => {
                    if (value === undefined) return false;
                    const { path } = value;
                    return endpointId === path.endpointId && clusterId === path.clusterId && id === path.attributeId;
                });
                // Todo add proper handling for returned attributeStatus information
            }

            if (value === undefined) {
                if (optional) return undefined;
                if (conformanceValue === undefined) throw new Error(`Attribute ${endpointId}/${clusterId}/${id} not found`);
                return conformanceValue;
            }
            return schema.decodeTlv(value.value);
        });
    }

    async set<T>(endpointId: number, clusterId: number, { id, schema, default: conformanceValue }: Attribute<T>, value: T): Promise<void> {
        throw new Error("not implemented");
    }

    async subscribe<A extends Attribute<any>>(
        endpointId: number,
        clusterId: number,
        { id, schema, default: conformanceValue }: A,
        listener: (value: AttributeJsType<A>, version: number) => void,
        minIntervalFloorSeconds: number,
        maxIntervalCeilingSeconds: number,
    ): Promise<void> {
        return this.withMessenger<void>(async messenger => {
            const { report, subscribeResponse: { subscriptionId } } = await messenger.sendSubscribeRequest({
                attributeRequests: [ {endpointId , clusterId, attributeId: id} ],
                keepSubscriptions: true,
                minIntervalFloorSeconds,
                maxIntervalCeilingSeconds,
                isFabricFiltered: true,
            }); // TODO: also initialize all values

            const subscriptionListener = (dataReport: DataReport) => {
                if (!Array.isArray(dataReport.values)) {
                    return;
                }
                const value = dataReport.values.map(({ value }) => value).find((value) => {
                    if (value === undefined) return false;
                    const { path } = value;
                    return endpointId === path.endpointId && clusterId === path.clusterId && id === path.attributeId;
                });
                if (value === undefined) return;
                listener(schema.decodeTlv(value.value), value.version);
            };
            this.subscriptionListeners.set(subscriptionId, subscriptionListener);
            subscriptionListener(report);
            return;
        });
    }

    async invoke<C extends Command<any, any>>(endpointId: number, clusterId: number, request: RequestType<C>, id: number, requestSchema: TlvSchema<RequestType<C>>, responseId: number, responseSchema: TlvSchema<ResponseType<C>>, optional: boolean): Promise<ResponseType<C>> {
        return this.withMessenger<ResponseType<C>>(async messenger => {
            const { responses } = await messenger.sendInvokeCommand({
                invokes: [
                    { path: { endpointId, clusterId, commandId: id }, args: requestSchema.encodeTlv(request) }
                ],
                timedRequest: false,
                suppressResponse: false,
                interactionModelRevision: 1,
            });
            if (responses.length === 0) throw new Error("No response received");
            const { response, result } = responses[0];
            if (result !== undefined) {
                const resultCode = result.result.code;
                if (resultCode !== ResultCode.Success) throw new Error(`Received non-success result: ${resultCode}`);
                if ((responseSchema as any) !== TlvNoResponse) throw new Error("A response was expected for this command");
                return undefined as unknown as ResponseType<C>; // ResponseType is void, force casting the empty result
            } if (response !== undefined) {
                return responseSchema.decodeTlv(response.response);
            } if (optional) {
                return undefined as ResponseType<C>; // ResponseType allows undefined for optional commands
            }
            throw new Error("Received invoke response with no result nor response");
        });
    }

    private async withMessenger<T>(invoke: (messenger: InteractionClientMessenger) => Promise<T>): Promise<T> {
        const messenger = new InteractionClientMessenger(this.exchangeManager.initiateExchangeWithChannel(this.channel, INTERACTION_PROTOCOL_ID));
        try {
            return await invoke(messenger);
        } finally {
            messenger.close();
        }
    }
}
