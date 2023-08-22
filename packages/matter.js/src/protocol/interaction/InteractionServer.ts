/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvNoResponse } from "../../cluster/Cluster.js";
import {
    AttributeServer,
    FabricScopedAttributeServer,
    FixedAttributeServer,
} from "../../cluster/server/AttributeServer.js";
import { asClusterServerInternal } from "../../cluster/server/ClusterServerTypes.js";
import { CommandServer } from "../../cluster/server/CommandServer.js";
import { EventServer } from "../../cluster/server/EventServer.js";
import { Message } from "../../codec/MessageCodec.js";
import { tryCatchAsync } from "../../common/TryCatchHandler.js";
import { Crypto } from "../../crypto/Crypto.js";
import { AttributeId } from "../../datatype/AttributeId.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { CommandId } from "../../datatype/CommandId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { EventId } from "../../datatype/EventId.js";
import { Endpoint } from "../../device/Endpoint.js";
import { Logger } from "../../log/Logger.js";
import { MatterDevice } from "../../MatterDevice.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import { ProtocolHandler } from "../../protocol/ProtocolHandler.js";
import { assertSecureSession } from "../../session/SecureSession.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { decodeAttributeValueWithSchema, normalizeAttributeData } from "./AttributeDataDecoder.js";
import { InteractionEndpointStructure } from "./InteractionEndpointStructure.js";
import {
    DataReport,
    InteractionServerMessenger,
    InvokeRequest,
    InvokeResponse,
    MessageType,
    ReadRequest,
    StatusResponseError,
    SubscribeRequest,
    TimedRequest,
    WriteRequest,
    WriteResponse,
} from "./InteractionMessenger.js";
import {
    StatusCode,
    TlvAttributePath,
    TlvAttributeReport,
    TlvClusterPath,
    TlvCommandPath,
    TlvEventPath,
    TlvEventReport,
    TlvInvokeResponseData,
    TlvSubscribeResponse,
} from "./InteractionProtocol.js";
import { SubscriptionHandler } from "./SubscriptionHandler.js";

export const INTERACTION_PROTOCOL_ID = 0x0001;

const logger = Logger.get("InteractionServer");

export interface CommandPath {
    endpointId: EndpointNumber;
    clusterId: ClusterId;
    commandId: CommandId;
}

export interface AttributePath {
    endpointId: EndpointNumber;
    clusterId: ClusterId;
    attributeId: AttributeId;
}

export interface EventPath {
    endpointId: EndpointNumber;
    clusterId: ClusterId;
    eventId: EventId;
}

export interface AttributeWithPath {
    path: TypeFromSchema<typeof TlvAttributePath>;
    attribute: AttributeServer<any> | FabricScopedAttributeServer<any> | FixedAttributeServer<any>;
}

export interface EventWithPath {
    path: TypeFromSchema<typeof TlvEventPath>;
    event: EventServer<any>;
}

export interface CommandWithPath {
    path: TypeFromSchema<typeof TlvCommandPath>;
    command: CommandServer<any, any>;
}

export function genericElementPathToId(
    endpointId: EndpointNumber | undefined,
    clusterId: ClusterId | undefined,
    elementId: number | undefined,
) {
    return `${endpointId}/${clusterId}/${elementId}`;
}

export function commandPathToId({ endpointId, clusterId, commandId }: CommandPath) {
    return genericElementPathToId(endpointId, clusterId, commandId);
}

export function attributePathToId({ endpointId, clusterId, attributeId }: TypeFromSchema<typeof TlvAttributePath>) {
    return genericElementPathToId(endpointId, clusterId, attributeId);
}

export function eventPathToId({ endpointId, clusterId, eventId }: TypeFromSchema<typeof TlvEventPath>) {
    return genericElementPathToId(endpointId, clusterId, eventId);
}

export function clusterPathToId({ nodeId, endpointId, clusterId }: TypeFromSchema<typeof TlvClusterPath>) {
    return `${nodeId}/${endpointId}/${clusterId}`;
}

export type InteractionServerOptions = {
    subscriptionMaxIntervalSeconds?: number;
    subscriptionMinIntervalSeconds?: number;
    subscriptionRandomizationWindowSeconds?: number;
};

export class InteractionServer implements ProtocolHandler<MatterDevice> {
    private endpointStructure = new InteractionEndpointStructure();
    private nextSubscriptionId = Crypto.getRandomUInt32();
    private eventHandler = new EventHandler(this.storage);
    private readonly subscriptionMap = new Map<number, SubscriptionHandler>();
    private isClosing = false;

    constructor(
        private readonly storage: StorageContext,
        private readonly options?: InteractionServerOptions,
    ) {}

    getId() {
        return INTERACTION_PROTOCOL_ID;
    }

    setRootEndpoint(endpoint: Endpoint) {
        // Reset all data
        this.endpointStructure.initializeFromEndpoint(endpoint);

        for (const endpoint of this.endpointStructure.endpoints.values()) {
            for (const cluster of endpoint.getAllClusterServers()) {
                const clusterServer = asClusterServerInternal(cluster);
                clusterServer._setStorage(this.storage.createContext(`Cluster-${endpoint.id}-${cluster.id}`));
                clusterServer._registerEventHandler(this.eventHandler);
            }
        }

        for (const subscription of this.subscriptionMap.values()) {
            subscription.updateSubscription();
        }

        return;
    }

    async onNewExchange(exchange: MessageExchange<MatterDevice>) {
        if (this.isClosing) return; // We are closing, ignore anything newly incoming
        await new InteractionServerMessenger(exchange).handleRequest(
            readRequest => this.handleReadRequest(exchange, readRequest),
            writeRequest => this.handleWriteRequest(exchange, writeRequest),
            (subscribeRequest, messenger) => this.handleSubscribeRequest(exchange, subscribeRequest, messenger),
            (invokeRequest, message) => this.handleInvokeRequest(exchange, invokeRequest, message),
            timedRequest => this.handleTimedRequest(exchange, timedRequest),
        );
    }

    handleReadRequest(
        exchange: MessageExchange<MatterDevice>,
        { attributeRequests, dataVersionFilters, eventRequests, eventFilters, isFabricFiltered }: ReadRequest,
    ): DataReport {
        if (attributeRequests === undefined && eventRequests === undefined) {
            throw new StatusResponseError(
                "Only Read requests with attributeRequests or eventRequests are supported right now",
                StatusCode.UnsupportedRead,
            );
        }
        logger.debug(
            `Received read request from ${exchange.channel.name}: attributes:${
                attributeRequests?.map(path => this.endpointStructure.resolveAttributeName(path)).join(", ") ?? "none"
            }, events:${
                eventRequests?.map(path => this.endpointStructure.resolveEventName(path)).join(", ") ?? "none"
            } isFabricFiltered=${isFabricFiltered}`,
        );

        // TODO UnsupportedNode

        const dataVersionFilterMap = new Map<string, number>(
            dataVersionFilters?.map(({ path, dataVersion }) => [clusterPathToId(path), dataVersion]) ?? [],
        );
        if (dataVersionFilterMap.size > 0) {
            logger.debug(
                `DataVersionFilters: ${Array.from(dataVersionFilterMap.entries())
                    .map(([path, version]) => `${path}=${version}`)
                    .join(", ")}`,
            );
        }

        const attributeReports = attributeRequests?.flatMap(
            (path: TypeFromSchema<typeof TlvAttributePath>): TypeFromSchema<typeof TlvAttributeReport>[] => {
                const attributes = this.endpointStructure.getAttributes([path]);
                if (attributes.length === 0) {
                    const { endpointId, clusterId, attributeId } = path;
                    if (endpointId === undefined || clusterId === undefined || attributeId === undefined) {
                        // Wildcard path: Just leave out values
                        logger.debug(
                            `Read from ${exchange.channel.name}: ${this.endpointStructure.resolveAttributeName(
                                path,
                            )}: ignore non-existing attribute`,
                        );
                    } else {
                        // Else return correct status
                        let status = StatusCode.UnsupportedAttribute;
                        if (!this.endpointStructure.hasEndpoint(endpointId)) {
                            status = StatusCode.UnsupportedEndpoint;
                        } else if (!this.endpointStructure.hasClusterServer(endpointId, clusterId)) {
                            status = StatusCode.UnsupportedCluster;
                        }
                        logger.debug(
                            `Read attribute from ${
                                exchange.channel.name
                            }: ${this.endpointStructure.resolveAttributeName(
                                path,
                            )}: unsupported path: Status=${status}`,
                        );
                        return [{ attributeStatus: { path, status: { status } } }];
                    }
                }

                return attributes.flatMap(({ path, attribute }) => {
                    const { value, version } = attribute.getWithVersion(exchange.session, isFabricFiltered);
                    const { nodeId, endpointId, clusterId } = path;

                    const versionFilterValue =
                        endpointId !== undefined && clusterId !== undefined
                            ? dataVersionFilterMap.get(clusterPathToId({ nodeId, endpointId, clusterId }))
                            : undefined;
                    if (versionFilterValue !== undefined && versionFilterValue === version) {
                        logger.debug(
                            `Read attribute from ${
                                exchange.channel.name
                            }: ${this.endpointStructure.resolveAttributeName(path)}=${Logger.toJSON(
                                value,
                            )} (version=${version}) ignored because of dataVersionFilter`,
                        );
                        return [];
                    }

                    logger.debug(
                        `Read attribute from ${exchange.channel.name}: ${this.endpointStructure.resolveAttributeName(
                            path,
                        )}=${Logger.toJSON(value)} (version=${version})`,
                    );
                    return [{ attributeData: { path, data: attribute.schema.encodeTlv(value), dataVersion: version } }];
                });
            },
        );

        const eventReports = eventRequests?.flatMap(
            (path: TypeFromSchema<typeof TlvEventPath>): TypeFromSchema<typeof TlvEventReport>[] => {
                const events = this.endpointStructure.getEvents([path]);
                if (events.length === 0) {
                    logger.debug(
                        `Read event from ${exchange.channel.name}: ${this.endpointStructure.resolveEventName(
                            path,
                        )}: unsupported path`,
                    );
                    return [{ eventStatus: { path, status: { status: StatusCode.UnsupportedEvent } } }]; // TODO: Find correct status code
                }

                return events
                    .flatMap(({ path, event }) => {
                        const matchingEvents = this.eventHandler.getEvents(path, eventFilters);
                        logger.debug(
                            `Read event from ${exchange.channel.name}:  ${this.endpointStructure.resolveEventName(
                                path,
                            )}=${Logger.toJSON(matchingEvents)}`,
                        );
                        return matchingEvents.map(eventData => ({
                            eventData: {
                                path,
                                eventNumber: eventData.eventNumber,
                                priority: eventData.priority,
                                epochTimestamp: eventData.epochTimestamp,
                                data: event.schema.encodeTlv(eventData.data),
                            },
                        }));
                    })
                    .sort((a, b) => a.eventData.eventNumber - b.eventData.eventNumber);
            },
        );

        return {
            interactionModelRevision: 1,
            suppressResponse: false,
            attributeReports,
            eventReports,
        };
    }

    handleWriteRequest(
        exchange: MessageExchange<MatterDevice>,
        { suppressResponse, writeRequests }: WriteRequest,
    ): WriteResponse {
        logger.debug(
            `Received write request from ${exchange.channel.name}: ${writeRequests
                .map(req => this.endpointStructure.resolveAttributeName(req.path))
                .join(", ")}, suppressResponse=${suppressResponse}`,
        );

        // TODO consider TimedRequest constraints

        const writeData = normalizeAttributeData(writeRequests, true);

        const writeResults = writeData.flatMap(
            (values): { path: TypeFromSchema<typeof TlvAttributePath>; statusCode: StatusCode }[] => {
                const { path, dataVersion } = values[0];
                const attributes = this.endpointStructure.getAttributes([path], true);
                const { endpointId, clusterId, attributeId } = path;
                if (attributes.length === 0) {
                    // No attribute found
                    // TODO: Also check nodeId
                    if (endpointId === undefined || clusterId === undefined || attributeId === undefined) {
                        // Wildcard path: Just ignore
                        logger.debug(
                            `Write from ${exchange.channel.name}: ${this.endpointStructure.resolveAttributeName(
                                path,
                            )}: ignore non-existing attribute`,
                        );
                    } else {
                        // Else return correct status
                        let statusCode = StatusCode.UnsupportedAttribute;
                        if (this.endpointStructure.hasAttribute(endpointId, clusterId, attributeId)) {
                            // If attribute exists but was not returned above, it is not writeable
                            statusCode = StatusCode.UnsupportedWrite;
                        } else if (!this.endpointStructure.hasEndpoint(endpointId)) {
                            statusCode = StatusCode.UnsupportedEndpoint;
                        } else if (!this.endpointStructure.hasClusterServer(endpointId, clusterId)) {
                            statusCode = StatusCode.UnsupportedCluster;
                        } else {
                            // check if concrete path and just "not writable"
                            const allAttributes = this.endpointStructure.getAttributes([path]);
                            if (allAttributes.length > 0) {
                                statusCode = StatusCode.UnsupportedWrite;
                            }
                        }
                        logger.debug(
                            `Write from ${exchange.channel.name}: ${this.endpointStructure.resolveAttributeName(
                                path,
                            )} not allowed: Status=${statusCode}`,
                        );
                        return [{ path, statusCode }];
                    }
                } else if (
                    attributes.length === 1 &&
                    endpointId !== undefined &&
                    clusterId !== undefined &&
                    attributeId !== undefined
                ) {
                    // Concrete path
                    if (dataVersion !== undefined) {
                        const cluster = this.endpointStructure.getClusterServer(endpointId, clusterId);
                        if (cluster !== undefined && dataVersion !== cluster.clusterDataVersion) {
                            return [{ path, statusCode: StatusCode.DataVersionMismatch }];
                        }
                    }
                }

                return attributes.map(({ path, attribute }) => {
                    // TODO add checks for timed writes, fabric scoped writes
                    // TODO add ACL checks
                    const { schema, defaultValue } = attribute;

                    try {
                        const value = decodeAttributeValueWithSchema(schema, values, defaultValue);
                        logger.debug(
                            `Handle write request from ${
                                exchange.channel.name
                            } resolved to: ${this.endpointStructure.resolveAttributeName(path)}=${Logger.toJSON(
                                value,
                            )} (Version=${dataVersion})`,
                        );
                        if (
                            !(attribute instanceof AttributeServer) &&
                            !(attribute instanceof FabricScopedAttributeServer)
                        ) {
                            throw new StatusResponseError(
                                "Fixed attributes cannot be written",
                                StatusCode.UnsupportedWrite,
                            );
                        }
                        attribute.set(value, exchange.session);
                    } catch (error: any) {
                        if (attributes.length === 1) {
                            // For Multi-Attribute-Writes we ignore errors
                            logger.error(
                                `Error while handling write request from ${
                                    exchange.channel.name
                                } to ${this.endpointStructure.resolveAttributeName(path)}: ${error.message}`,
                            );
                            if (error instanceof StatusResponseError) {
                                return { path, statusCode: error.code };
                            }
                            return { path, statusCode: StatusCode.ConstraintError };
                        } else {
                            logger.debug(
                                `While handling write request from ${
                                    exchange.channel.name
                                } to ${this.endpointStructure.resolveAttributeName(path)} ignored: ${error.message}`,
                            );
                        }
                    }
                    return { path, statusCode: StatusCode.Success };
                });
                //.filter(({ statusCode }) => statusCode !== StatusCode.Success); // see https://github.com/project-chip/connectedhomeip/issues/26198
            },
        );

        // TODO respect suppressResponse, potentially also needs adjustment in InteractionMessenger class!
        const errorResults = writeResults.filter(({ statusCode }) => statusCode !== StatusCode.Success);
        logger.debug(
            `Write request from ${exchange.channel.name} done ${
                errorResults.length
                    ? `with following errors: ${errorResults
                          .map(
                              ({ path, statusCode }) =>
                                  `${this.endpointStructure.resolveAttributeName(path)}=${Logger.toJSON(statusCode)}`,
                          )
                          .join(", ")}`
                    : "without errors"
            }`,
        );

        return {
            interactionModelRevision: 1,
            writeResponses: writeResults.map(({ path, statusCode }) => ({ path, status: { status: statusCode } })),
        };
    }

    async handleSubscribeRequest(
        exchange: MessageExchange<MatterDevice>,
        {
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            attributeRequests,
            dataVersionFilters,
            eventRequests,
            eventFilters,
            keepSubscriptions,
            isFabricFiltered,
        }: SubscribeRequest,
        messenger: InteractionServerMessenger,
    ): Promise<void> {
        logger.debug(
            `Received subscribe request from ${exchange.channel.name} (keepSubscriptions=${keepSubscriptions}, isFabricFiltered=${isFabricFiltered})`,
        );

        // TODO dataversionFilters

        assertSecureSession(exchange.session, "Subscriptions are only implemented on secure sessions");
        const session = exchange.session;
        const fabric = session.getFabric();
        if (fabric === undefined)
            throw new StatusResponseError(
                "Subscriptions are only implemented after a fabric has been assigned",
                StatusCode.InvalidAction,
            );

        if (
            (!Array.isArray(attributeRequests) || attributeRequests.length === 0) &&
            (!Array.isArray(eventRequests) || eventRequests.length === 0)
        ) {
            throw new StatusResponseError("No attributes or events requested", StatusCode.InvalidAction);
        }

        logger.debug(
            `Subscribe to attributes:${
                attributeRequests?.map(path => this.endpointStructure.resolveAttributeName(path)).join(", ") ?? "none"
            }, events:${
                eventRequests?.map(path => this.endpointStructure.resolveEventName(path)).join(", ") ?? "none"
            }`,
        );

        if (dataVersionFilters !== undefined && dataVersionFilters.length > 0) {
            logger.debug(
                `DataVersionFilters: ${dataVersionFilters
                    .map(
                        ({ path: { nodeId, endpointId, clusterId }, dataVersion }) =>
                            `${clusterPathToId({ nodeId, endpointId, clusterId })}=${dataVersion}`,
                    )
                    .join(", ")}`,
            );
        }
        if (eventFilters !== undefined && eventFilters.length > 0)
            logger.debug(
                `Event filters: ${eventFilters.map(filter => `${filter.nodeId}/${filter.eventMin}`).join(", ")}`,
            );

        if (minIntervalFloorSeconds < 0) {
            throw new StatusResponseError(
                "minIntervalFloorSeconds should be greater or equal to 0",
                StatusCode.InvalidAction,
            );
        }
        if (maxIntervalCeilingSeconds < 0) {
            throw new StatusResponseError(
                "maxIntervalCeilingSeconds should be greater or equal to 1",
                StatusCode.InvalidAction,
            );
        }
        if (maxIntervalCeilingSeconds < minIntervalFloorSeconds) {
            throw new StatusResponseError(
                "maxIntervalCeilingSeconds should be greater or equal to minIntervalFloorSeconds",
                StatusCode.InvalidAction,
            );
        }

        // TODO: Interpret specs:
        // The publisher SHALL compute an appropriate value for the MaxInterval field in the action. This SHALL respect the following constraint: MinIntervalFloor ≤ MaxInterval ≤ MAX(SUBSCRIPTION_MAX_INTERVAL_PUBLISHER_LIMIT=60mn, MaxIntervalCeiling)

        if (this.nextSubscriptionId === 0xffffffff) this.nextSubscriptionId = 0;
        const subscriptionId = this.nextSubscriptionId++;
        const subscriptionHandler = new SubscriptionHandler(
            subscriptionId,
            session,
            this.endpointStructure,
            attributeRequests,
            dataVersionFilters,
            eventRequests,
            eventFilters,
            this.eventHandler,
            isFabricFiltered,
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            this.options?.subscriptionMaxIntervalSeconds,
            this.options?.subscriptionMinIntervalSeconds,
            this.options?.subscriptionRandomizationWindowSeconds,
            () => this.subscriptionMap.delete(subscriptionId),
        );

        try {
            // Send initial data report to prime the subscription with initial data
            await subscriptionHandler.sendInitialReport(messenger);
        } catch (error: any) {
            logger.error(
                `Subscription ${subscriptionId} for Session ${session.getId()}: Error while sending initial data reports: ${
                    error.message
                }`,
            );
            await subscriptionHandler.cancel(); // Cleanup
            if (error instanceof StatusResponseError) {
                logger.info(`Sending status response ${error.code} for interaction error: ${error}`);
                await messenger.sendStatus(error.code);
            }
            return; // Make sure to not bubble up the exception
        }

        if (!keepSubscriptions) {
            logger.debug(`Clear subscriptions for Session ${session.name} because keepSubscriptions=false`);
            await session.clearSubscriptions(true);
        }

        const maxInterval = subscriptionHandler.getMaxInterval();
        logger.info(
            `Successfully created subscription ${subscriptionId} for Session ${session.getId()}. Updates: ${minIntervalFloorSeconds} - ${maxIntervalCeilingSeconds} => ${maxInterval} seconds (sendInterval = ${subscriptionHandler.getSendInterval()} seconds)`,
        );
        // Then send the subscription response
        await messenger.send(
            MessageType.SubscribeResponse,
            TlvSubscribeResponse.encode({ subscriptionId, maxInterval, interactionModelRevision: 1 }),
        );

        this.subscriptionMap.set(subscriptionId, subscriptionHandler);
        session.addSubscription(subscriptionHandler);
        subscriptionHandler.activateSendingUpdates();
    }

    async handleInvokeRequest(
        exchange: MessageExchange<MatterDevice>,
        { invokeRequests }: InvokeRequest,
        message: Message,
    ): Promise<InvokeResponse> {
        logger.debug(
            `Received invoke request from ${exchange.channel.name}: ${invokeRequests
                .map(({ commandPath: { endpointId, clusterId, commandId } }) =>
                    this.endpointStructure.resolveCommandName({ endpointId, clusterId, commandId }),
                )
                .join(", ")}`,
        );

        const invokeResponses: TypeFromSchema<typeof TlvInvokeResponseData>[] = [];

        await Promise.all(
            invokeRequests.flatMap(async ({ commandPath, commandFields }) => {
                const commands = this.endpointStructure.getCommands([commandPath]);

                // TODO also check ACL and Timed, Fabric scoping constrains

                if (commands.length === 0) {
                    // TODO Also check nodeId
                    const { endpointId, clusterId, commandId } = commandPath;
                    if (endpointId === undefined || clusterId === undefined || commandId === undefined) {
                        // Wildcard path: Just ignore
                        logger.debug(
                            `Invoke from ${exchange.channel.name}: ${this.endpointStructure.resolveCommandName(
                                commandPath,
                            )} ignore non-existing attribute`,
                        );
                    } else {
                        // Else return correct status
                        let status = StatusCode.UnsupportedCommand;
                        if (!this.endpointStructure.hasEndpoint(endpointId)) {
                            status = StatusCode.UnsupportedEndpoint;
                        } else if (!this.endpointStructure.hasClusterServer(endpointId, clusterId)) {
                            status = StatusCode.UnsupportedCluster;
                        }
                        logger.debug(
                            `Invoke from ${exchange.channel.name}: ${this.endpointStructure.resolveCommandName(
                                commandPath,
                            )} unsupported path: Status=${status}`,
                        );
                        invokeResponses.push({ status: { commandPath, status: { status } } });
                        return;
                    }
                }

                for (const { command, path } of commands) {
                    const { endpointId } = path;
                    if (endpointId === undefined) {
                        // Should never happen
                        logger.error(
                            `Invoke from ${exchange.channel.name}: ${this.endpointStructure.resolveCommandName(
                                path,
                            )} invalid path because empty endpoint!`,
                        );
                        invokeResponses.push({
                            status: { commandPath: path, status: { status: StatusCode.UnsupportedEndpoint } },
                        });
                        continue;
                    }
                    const endpoint = this.endpointStructure.getEndpoint(endpointId);
                    if (endpoint === undefined) {
                        // Should never happen
                        logger.error(
                            `Invoke from ${exchange.channel.name}: ${this.endpointStructure.resolveCommandName(
                                path,
                            )} invalid path because endpoint not found!`,
                        );
                        invokeResponses.push({
                            status: { commandPath: path, status: { status: StatusCode.UnsupportedEndpoint } },
                        });
                        continue;
                    }
                    const result = await tryCatchAsync(
                        async () =>
                            await command.invoke(
                                exchange.session,
                                commandFields ?? TlvNoArguments.encodeTlv(commandFields),
                                message,
                                endpoint,
                            ),
                        StatusResponseError,
                        async error => ({
                            code: error.code,
                            responseId: command.responseId,
                            response: TlvNoResponse.encodeTlv(),
                        }),
                    );
                    const { code, responseId, response } = result;
                    if (response.length === 0) {
                        invokeResponses.push({ status: { commandPath: path, status: { status: code } } });
                    } else {
                        invokeResponses.push({
                            command: {
                                commandPath: { ...path, commandId: responseId },
                                commandFields: response,
                            },
                        });
                    }
                }
            }),
        );

        return {
            suppressResponse: false,
            interactionModelRevision: 1,
            invokeResponses,
        };
    }

    handleTimedRequest(exchange: MessageExchange<MatterDevice>, { timeout }: TimedRequest) {
        logger.debug(`Received timed request (${timeout}) from ${exchange.channel.name}`);
        // TODO: implement this
    }

    async close() {
        this.isClosing = true;
        for (const subscription of this.subscriptionMap.values()) {
            await subscription.cancel(true);
        }
    }
}
