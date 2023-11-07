/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { TlvNoResponse } from "../../cluster/Cluster.js";
import {
    AnyAttributeServer,
    AttributeServer,
    FabricScopedAttributeServer,
} from "../../cluster/server/AttributeServer.js";
import { asClusterServerInternal } from "../../cluster/server/ClusterServerTypes.js";
import { CommandServer } from "../../cluster/server/CommandServer.js";
import { EventServer } from "../../cluster/server/EventServer.js";
import { Message, SessionType } from "../../codec/MessageCodec.js";
import { InternalError } from "../../common/MatterError.js";
import { tryCatch, tryCatchAsync } from "../../common/TryCatchHandler.js";
import { Crypto } from "../../crypto/Crypto.js";
import { AttributeId } from "../../datatype/AttributeId.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { CommandId } from "../../datatype/CommandId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { EventId } from "../../datatype/EventId.js";
import { Endpoint } from "../../device/Endpoint.js";
import { Logger } from "../../log/Logger.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import { ProtocolHandler } from "../../protocol/ProtocolHandler.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { SecureSession, assertSecureSession } from "../../session/SecureSession.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { toHexString } from "../../util/Number.js";
import { decodeAttributeValueWithSchema, normalizeAttributeData } from "./AttributeDataDecoder.js";
import { AttributeReportPayload, DataReportPayload, EventReportPayload } from "./AttributeDataEncoder.js";
import { InteractionEndpointStructure } from "./InteractionEndpointStructure.js";
import {
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
    TlvClusterPath,
    TlvCommandPath,
    TlvEventPath,
    TlvInvokeResponseData,
    TlvSubscribeResponse,
} from "./InteractionProtocol.js";
import { SubscriptionHandler } from "./SubscriptionHandler.js";

export const INTERACTION_PROTOCOL_ID = 0x0001;
export const INTERACTION_MODEL_REVISION = 11;

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
    attribute: AnyAttributeServer<any>;
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
    }

    async onNewExchange(exchange: MessageExchange<MatterDevice>) {
        if (this.isClosing) return; // We are closing, ignore anything newly incoming
        await new InteractionServerMessenger(exchange).handleRequest(
            readRequest => this.handleReadRequest(exchange, readRequest),
            (writeRequest, message) => this.handleWriteRequest(exchange, writeRequest, message),
            (subscribeRequest, messenger) => this.handleSubscribeRequest(exchange, subscribeRequest, messenger),
            (invokeRequest, message) => this.handleInvokeRequest(exchange, invokeRequest, message),
            timedRequest => this.handleTimedRequest(exchange, timedRequest),
        );
    }

    handleReadRequest(
        exchange: MessageExchange<MatterDevice>,
        {
            attributeRequests,
            dataVersionFilters,
            eventRequests,
            eventFilters,
            isFabricFiltered,
            interactionModelRevision,
        }: ReadRequest,
    ): DataReportPayload {
        logger.debug(
            `Received read request from ${exchange.channel.name}: attributes:${
                attributeRequests?.map(path => this.endpointStructure.resolveAttributeName(path)).join(", ") ?? "none"
            }, events:${
                eventRequests?.map(path => this.endpointStructure.resolveEventName(path)).join(", ") ?? "none"
            } isFabricFiltered=${isFabricFiltered}`,
        );

        if (interactionModelRevision > INTERACTION_MODEL_REVISION) {
            logger.debug(
                `Interaction model revision of sender ${interactionModelRevision} is higher than supported ${INTERACTION_MODEL_REVISION}.`,
            );
        }
        if (attributeRequests === undefined && eventRequests === undefined) {
            throw new StatusResponseError(
                "Only Read requests with attributeRequests or eventRequests are supported right now",
                StatusCode.UnsupportedRead,
            );
        }

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

        const attributeReportsPayload = attributeRequests?.flatMap(
            (path: TypeFromSchema<typeof TlvAttributePath>): AttributeReportPayload[] => {
                const attributes = this.endpointStructure.getAttributes([path]);
                if (attributes.length === 0) {
                    // TODO Add checks for nodeId -> UnknownNode
                    const { endpointId, clusterId, attributeId } = path;
                    if (endpointId === undefined || clusterId === undefined || attributeId === undefined) {
                        // Wildcard path: Just leave out values
                        logger.debug(
                            `Read attribute from ${
                                exchange.channel.name
                            }: ${this.endpointStructure.resolveAttributeName(path)}: ignore non-existing attribute`,
                        );
                    } else {
                        // was a concrete path
                        return tryCatch(
                            () => {
                                this.endpointStructure.validateConcreteAttributePath(
                                    endpointId,
                                    clusterId,
                                    attributeId,
                                );
                                throw new InternalError(
                                    "validateConcreteAttributePath should throw StatusResponseError but did not.",
                                );
                            },
                            StatusResponseError,
                            error => {
                                logger.debug(
                                    `Read attribute from ${
                                        exchange.channel.name
                                    }: ${this.endpointStructure.resolveAttributeName(path)}: unsupported path: Status=${
                                        error.code
                                    }`,
                                );
                                return [{ attributeStatus: { path, status: { status: error.code } } }];
                            },
                        );
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

                    const { schema } = attribute;
                    return [{ attributeData: { path, dataVersion: version, payload: value, schema } }];
                });
            },
        );

        const eventReportsPayload = eventRequests?.flatMap(
            (path: TypeFromSchema<typeof TlvEventPath>): EventReportPayload[] => {
                const events = this.endpointStructure.getEvents([path]);
                // Requested event path not found in any cluster server on any endpoint
                if (events.length === 0) {
                    // TODO Add checks for nodeId
                    const { endpointId, clusterId, eventId } = path;
                    if (endpointId === undefined || clusterId === undefined || eventId === undefined) {
                        // Wildcard path: Just leave out values
                        logger.debug(
                            `Read event from ${exchange.channel.name}: ${this.endpointStructure.resolveEventName(
                                path,
                            )}: ignore non-existing event`,
                        );
                    } else {
                        return tryCatch(
                            () => {
                                this.endpointStructure.validateConcreteEventPath(endpointId, clusterId, eventId);
                                throw new InternalError(
                                    "validateConcreteEventPath should throw StatusResponseError but did not.",
                                );
                            },
                            StatusResponseError,
                            error => {
                                if (interactionModelRevision <= 10) {
                                    return [{ eventStatus: { path, status: { status: StatusCode.UnsupportedEvent } } }];
                                }

                                logger.debug(
                                    `Read event from ${
                                        exchange.channel.name
                                    }: ${this.endpointStructure.resolveEventName(path)}: unsupported path: Status=${
                                        error.code
                                    }`,
                                );
                                return [{ eventStatus: { path, status: { status: error.code } } }];
                            },
                        );
                    }
                }

                return events
                    .flatMap(({ path, event }) => {
                        const matchingEvents = this.eventHandler.getEvents(path, eventFilters);
                        logger.debug(
                            `Read event from ${exchange.channel.name}:  ${this.endpointStructure.resolveEventName(
                                path,
                            )}=${Logger.toJSON(matchingEvents)}`,
                        );
                        const { schema } = event;
                        return matchingEvents.map(({ eventNumber, priority, epochTimestamp, data }) => ({
                            eventData: {
                                path,
                                eventNumber,
                                priority,
                                epochTimestamp,
                                payload: data,
                                schema,
                            },
                        }));
                    })
                    .sort((a, b) => a.eventData.eventNumber - b.eventData.eventNumber);
            },
        );

        // TODO support suppressResponse for responses
        return {
            interactionModelRevision: INTERACTION_MODEL_REVISION,
            suppressResponse: false,
            attributeReportsPayload, // TODO Return compressed response once https://github.com/project-chip/connectedhomeip/issues/29359 is solved
            eventReportsPayload,
        };
    }

    handleWriteRequest(
        exchange: MessageExchange<MatterDevice>,
        { suppressResponse, timedRequest, writeRequests, interactionModelRevision }: WriteRequest,
        { packetHeader: { sessionType } }: Message,
    ): WriteResponse {
        logger.debug(
            `Received write request from ${exchange.channel.name}: ${writeRequests
                .map(req => this.endpointStructure.resolveAttributeName(req.path))
                .join(", ")}, suppressResponse=${suppressResponse}`,
        );

        if (interactionModelRevision > INTERACTION_MODEL_REVISION) {
            logger.debug(
                `Interaction model revision of sender ${interactionModelRevision} is higher than supported ${INTERACTION_MODEL_REVISION}.`,
            );
        }

        const receivedWithinTimedInteraction = exchange.hasActiveTimedInteraction();
        if (exchange.hasExpiredTimedInteraction()) {
            exchange.clearTimedInteraction(); // ??
            throw new StatusResponseError(`Timed request window expired. Decline write request.`, StatusCode.Timeout);
        }

        if (timedRequest !== exchange.hasTimedInteraction()) {
            throw new StatusResponseError(
                `timedRequest flag of write interaction (${timedRequest}) mismatch with expected timed interaction (${receivedWithinTimedInteraction}).`,
                StatusCode.TimedRequestMismatch,
            );
        }

        if (receivedWithinTimedInteraction) {
            logger.debug(`Write request from ${exchange.channel.name} received while timed interaction is running.`);
            exchange.clearTimedInteraction();
            if (sessionType !== SessionType.Unicast) {
                throw new StatusResponseError(
                    "Write requests are only allowed on unicast sessions when a timed interaction is running.",
                    StatusCode.InvalidAction,
                ); // ???
            }
        }

        if (sessionType === SessionType.Group && !suppressResponse) {
            throw new StatusResponseError(
                "Write requests are only allowed as group casts when suppressResponse=true.",
                StatusCode.InvalidAction,
            ); // ???
        }

        const writeData = normalizeAttributeData(writeRequests, true);

        const writeResults = writeData.flatMap(
            (
                values,
            ): {
                path: TypeFromSchema<typeof TlvAttributePath>;
                statusCode: StatusCode;
                clusterStatusCode?: number;
            }[] => {
                const { path, dataVersion } = values[0];
                const attributes = this.endpointStructure.getAttributes([path], true);
                const { endpointId, clusterId, attributeId } = path;

                if (attributes.length === 0) {
                    // No existing attribute matches the given path and is writable
                    // No attribute found
                    // TODO: Also check nodeId
                    if (endpointId === undefined || clusterId === undefined || attributeId === undefined) {
                        // Wildcard path: Just ignore
                        logger.debug(
                            `Write from ${exchange.channel.name}: ${this.endpointStructure.resolveAttributeName(
                                path,
                            )}: ignore non-existing (wildcard) attribute`,
                        );
                    } else {
                        // was a concrete path
                        return tryCatch(
                            () => {
                                if (
                                    this.endpointStructure.validateConcreteAttributePath(
                                        endpointId,
                                        clusterId,
                                        attributeId,
                                    )
                                ) {
                                    throw new StatusResponseError(
                                        `Attribute ${attributeId} is not writable.`,
                                        StatusCode.UnsupportedWrite,
                                    );
                                }
                                throw new InternalError(
                                    "validateConcreteAttributePath check should throw StatusResponseError but did not.",
                                );
                            },
                            StatusResponseError,
                            error => {
                                logger.debug(
                                    `Write from ${exchange.channel.name}: ${this.endpointStructure.resolveAttributeName(
                                        path,
                                    )} not allowed: Status=${error.code}`,
                                );
                                return [{ path, statusCode: error.code }];
                            },
                        );
                    }
                } else if (
                    attributes.length === 1 &&
                    endpointId !== undefined &&
                    clusterId !== undefined &&
                    attributeId !== undefined
                ) {
                    const { attribute } = attributes[0];
                    // Concrete path

                    // TODO Check ACL here

                    if (attribute.requiresTimedInteraction && !receivedWithinTimedInteraction) {
                        logger.debug(`This write requires a timed interaction which is not initialized.`);
                        return [{ path, statusCode: StatusCode.NeedsTimedInteraction }];
                    }

                    if (
                        attribute instanceof FabricScopedAttributeServer &&
                        (!exchange.session.isSecure() || !(exchange.session as SecureSession<MatterDevice>).getFabric())
                    ) {
                        logger.debug(`This write requires a secure session with a fabric assigned which is missing.`);
                        return [{ path, statusCode: StatusCode.UnsupportedAccess }];
                    }

                    if (dataVersion !== undefined) {
                        const cluster = this.endpointStructure.getClusterServer(endpointId, clusterId);
                        if (cluster !== undefined && dataVersion !== cluster.clusterDataVersion) {
                            logger.debug(
                                `This write requires a specific data version (${dataVersion}) which do not match the current cluster data version (${cluster.clusterDataVersion}).`,
                            );
                            return [{ path, statusCode: StatusCode.DataVersionMismatch }];
                        }
                    }
                }

                return attributes.map(({ path, attribute }) => {
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

                        // TODO: ACL check here

                        if (attribute.requiresTimedInteraction && !receivedWithinTimedInteraction) {
                            logger.debug(`This write requires a timed interaction which is not initialized.`);
                            throw new StatusResponseError(
                                "This write requires a timed interaction which is not initialized.",
                                StatusCode.NeedsTimedInteraction,
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
                                return { path, statusCode: error.code, clusterStatusCode: error.clusterCode };
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
            interactionModelRevision: INTERACTION_MODEL_REVISION,
            writeResponses: writeResults.map(({ path, statusCode, clusterStatusCode }) => ({
                path,
                status: { status: statusCode, clusterStatus: clusterStatusCode },
            })),
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
            interactionModelRevision,
        }: SubscribeRequest,
        messenger: InteractionServerMessenger,
    ): Promise<void> {
        logger.debug(
            `Received subscribe request from ${exchange.channel.name} (keepSubscriptions=${keepSubscriptions}, isFabricFiltered=${isFabricFiltered})`,
        );

        if (interactionModelRevision > INTERACTION_MODEL_REVISION) {
            logger.debug(
                `Interaction model revision of sender ${interactionModelRevision} is higher than supported ${INTERACTION_MODEL_REVISION}.`,
            );
        }

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
                `Subscription ${subscriptionId} for Session ${session.getId()}: Error while sending initial data reports`,
                error,
            );
            await subscriptionHandler.cancel(); // Cleanup
            if (error instanceof StatusResponseError) {
                logger.info(`Sending status response ${error.code} for interaction error: ${error.message}`);
                await messenger.sendStatus(error.code);
            }
            await messenger.close();
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
            TlvSubscribeResponse.encode({
                subscriptionId,
                maxInterval,
                interactionModelRevision: INTERACTION_MODEL_REVISION,
            }),
        );

        this.subscriptionMap.set(subscriptionId, subscriptionHandler);
        session.addSubscription(subscriptionHandler);
        subscriptionHandler.activateSendingUpdates();
    }

    async handleInvokeRequest(
        exchange: MessageExchange<MatterDevice>,
        { invokeRequests, timedRequest, suppressResponse, interactionModelRevision }: InvokeRequest,
        message: Message,
    ): Promise<InvokeResponse> {
        logger.debug(
            `Received invoke request from ${exchange.channel.name}: ${invokeRequests
                .map(({ commandPath: { endpointId, clusterId, commandId } }) =>
                    this.endpointStructure.resolveCommandName({ endpointId, clusterId, commandId }),
                )
                .join(", ")}, suppressResponse=${suppressResponse}`,
        );

        if (interactionModelRevision > INTERACTION_MODEL_REVISION) {
            logger.debug(
                `Interaction model revision of sender ${interactionModelRevision} is higher than supported ${INTERACTION_MODEL_REVISION}.`,
            );
        }

        const {
            packetHeader: { sessionType },
        } = message;
        const receivedWithinTimedInteraction = exchange.hasActiveTimedInteraction();
        if (exchange.hasExpiredTimedInteraction()) {
            exchange.clearTimedInteraction(); // ??
            throw new StatusResponseError(`Timed request window expired. Decline invoke request.`, StatusCode.Timeout);
        }

        if (timedRequest !== exchange.hasTimedInteraction()) {
            throw new StatusResponseError(
                `timedRequest flag of invoke interaction (${timedRequest}) mismatch with expected timed interaction (${receivedWithinTimedInteraction}).`,
                StatusCode.TimedRequestMismatch,
            );
        }

        if (receivedWithinTimedInteraction) {
            logger.debug(`Invoke request from ${exchange.channel.name} received while timed interaction is running.`);
            exchange.clearTimedInteraction();
            if (sessionType !== SessionType.Unicast) {
                throw new StatusResponseError(
                    "Invoke requests are only allowed on unicast sessions when a timed interaction is running.",
                    StatusCode.InvalidAction,
                ); // ???
            }
        }

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
                        invokeResponses.push(
                            tryCatch(
                                () => {
                                    this.endpointStructure.validateConcreteCommandPath(
                                        endpointId,
                                        clusterId,
                                        commandId,
                                    );
                                    throw new InternalError(
                                        "validateConcreteCommandPath should throw StatusResponseError but did not.",
                                    );
                                },
                                StatusResponseError,
                                error => {
                                    logger.debug(
                                        `Invoke from ${
                                            exchange.channel.name
                                        }: ${this.endpointStructure.resolveCommandName(
                                            commandPath,
                                        )} unsupported path: Status=${error.code}`,
                                    );
                                    return { status: { commandPath, status: { status: error.code } } };
                                },
                            ),
                        );
                    }
                    return;
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
                    if (command.requiresTimedInteraction && !receivedWithinTimedInteraction) {
                        logger.debug(`This invoke requires a timed interaction which is not initialized.`);
                        invokeResponses.push({
                            status: { commandPath: path, status: { status: StatusCode.NeedsTimedInteraction } },
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
                        async error => {
                            logger.info(
                                `Error ${toHexString(error.code)}${
                                    error.clusterCode !== undefined ? `/${toHexString(error.clusterCode)}` : ""
                                } while invoking command: ${error.message}`,
                            );
                            return {
                                code: error.code,
                                clusterCode: error.clusterCode,
                                responseId: command.responseId,
                                response: TlvNoResponse.encodeTlv(),
                            };
                        },
                    );
                    const { code, clusterCode, responseId, response } = result;
                    if (response.length === 0) {
                        invokeResponses.push({
                            status: { commandPath: path, status: { status: code, clusterStatus: clusterCode } },
                        });
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

        // TODO support suppressResponse for responses
        return {
            suppressResponse: false,
            interactionModelRevision: INTERACTION_MODEL_REVISION,
            invokeResponses,
        };
    }

    handleTimedRequest(exchange: MessageExchange<MatterDevice>, { timeout, interactionModelRevision }: TimedRequest) {
        logger.debug(`Received timed request (${timeout}ms) from ${exchange.channel.name}`);

        if (interactionModelRevision > INTERACTION_MODEL_REVISION) {
            logger.debug(
                `Interaction model revision of sender ${interactionModelRevision} is higher than supported ${INTERACTION_MODEL_REVISION}.`,
            );
        }

        exchange.startTimedInteraction(timeout);
    }

    async close() {
        this.isClosing = true;
        this.endpointStructure.destroy();
        for (const subscription of this.subscriptionMap.values()) {
            await subscription.cancel(true);
        }
    }
}
