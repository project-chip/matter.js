/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "#behavior/context/ActionContext.js";
import { ActionTracer } from "#behavior/context/ActionTracer.js";
import { NodeActivity } from "#behavior/context/NodeActivity.js";
import { OfflineContext } from "#behavior/context/server/OfflineContext.js";
import { OnlineContext } from "#behavior/context/server/OnlineContext.js";
import { AccessControlServer } from "#behaviors/access-control";
import { AccessControlCluster } from "#clusters/access-control";
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointLifecycle } from "#endpoint/properties/EndpointLifecycle.js";
import { EndpointServer } from "#endpoint/server/EndpointServer.js";
import {
    Crypto,
    Diagnostic,
    InternalError,
    Logger,
    MatterError,
    MaybePromise,
    Observable,
    ServerAddressIp,
} from "#general";
import { ClusterModel, CommandModel, GLOBAL_IDS, MatterModel, Specification } from "#model";
import {
    AccessControl,
    AccessDeniedError,
    AnyAttributeServer,
    AnyEventServer,
    assertSecureSession,
    AttributePath,
    attributePathToId,
    AttributeServer,
    clusterPathToId,
    CommandPath,
    commandPathToId,
    CommandServer,
    DataReport,
    DataReportPayloadIterator,
    decodeAttributeValueWithSchema,
    decodeListAttributeValueWithSchema,
    EndpointInterface,
    EventPath,
    EventReportPayload,
    ExchangeManager,
    expandPathsInAttributeData,
    FabricScopedAttributeServer,
    InteractionEndpointStructure,
    InteractionRecipient,
    InteractionServerMessenger,
    InvokeRequest,
    Message,
    MessageExchange,
    MessageType,
    PeerAddress,
    ProtocolHandler,
    ReadRequest,
    SecureSession,
    ServerSubscription,
    ServerSubscriptionConfig,
    ServerSubscriptionContext,
    SessionManager,
    SessionType,
    SubscribeRequest,
    TimedRequest,
    WriteRequest,
    WriteResponse,
} from "#protocol";
import {
    ArraySchema,
    ClusterId,
    CommandId,
    DEFAULT_MAX_PATHS_PER_INVOKE,
    EventNumber,
    INTERACTION_PROTOCOL_ID,
    ReceivedStatusResponseError,
    StatusCode,
    StatusResponseError,
    TlvAny,
    TlvAttributePath,
    TlvCommandPath,
    TlvEventFilter,
    TlvEventPath,
    TlvInvokeResponseData,
    TlvInvokeResponseForSend,
    TlvNoArguments,
    TlvNoResponse,
    TlvSubscribeResponse,
    TypeFromSchema,
    ValidationError,
} from "#types";
import { ImplementationError, MatterFlowError } from "@matter/general";
import { AttributeModel } from "@matter/model";
import { NoAssociatedFabricError } from "@matter/protocol";
import { AttributeId } from "@matter/types";
import { ServerNode } from "../ServerNode.js";

const logger = Logger.get("InteractionServer");

const activityKey = Symbol("activity");

interface WithActivity {
    [activityKey]?: NodeActivity.Activity;
}

const AclClusterId = AccessControlCluster.id;
const AclAttributeId = AccessControlCluster.attributes.acl.id;

export interface PeerSubscription {
    subscriptionId: number;
    peerAddress: PeerAddress;
    minIntervalFloorSeconds: number;
    maxIntervalCeilingSeconds: number;
    attributeRequests?: TypeFromSchema<typeof TlvAttributePath>[];
    eventRequests?: TypeFromSchema<typeof TlvEventPath>[];
    isFabricFiltered: boolean;
    maxInterval: number;
    sendInterval: number;
    operationalAddress?: ServerAddressIp;
}

function isConcreteAttributePath(
    path: TypeFromSchema<typeof TlvAttributePath>,
): path is TypeFromSchema<typeof TlvAttributePath> & AttributePath {
    const { endpointId, clusterId, attributeId } = path;
    return endpointId !== undefined && clusterId !== undefined && attributeId !== undefined;
}

function validateReadAttributesPath(path: TypeFromSchema<typeof TlvAttributePath>, isGroupSession = false) {
    if (isGroupSession) {
        throw new StatusResponseError("Illegal read request with group session", StatusCode.InvalidAction);
    }
    const { clusterId, attributeId } = path;
    if (clusterId === undefined && attributeId !== undefined) {
        if (!GLOBAL_IDS.has(attributeId)) {
            throw new StatusResponseError(
                `Illegal read request for wildcard cluster and non global attribute ${attributeId}`,
                StatusCode.InvalidAction,
            );
        }
    }
}

function validateWriteAttributesPath(path: TypeFromSchema<typeof TlvAttributePath>, isGroupSession = false) {
    const { endpointId, clusterId, attributeId } = path;
    if (clusterId === undefined || attributeId === undefined) {
        throw new StatusResponseError(
            "Illegal write request with wildcard cluster or attribute ID",
            StatusCode.InvalidAction,
        );
    }
    if (isGroupSession && endpointId !== undefined) {
        throw new StatusResponseError("Illegal write request with group ID and endpoint ID", StatusCode.InvalidAction);
    }
}

function isConcreteEventPath(
    path: TypeFromSchema<typeof TlvEventPath>,
): path is TypeFromSchema<typeof TlvEventPath> & EventPath {
    const { endpointId, clusterId, eventId } = path;
    return endpointId !== undefined && clusterId !== undefined && eventId !== undefined;
}

function validateReadEventPath(path: TypeFromSchema<typeof TlvEventPath>, isGroupSession = false) {
    const { clusterId, eventId } = path;
    if (clusterId === undefined && eventId !== undefined) {
        throw new StatusResponseError("Illegal read request with wildcard cluster ID", StatusCode.InvalidAction);
    }
    if (isGroupSession) {
        throw new StatusResponseError("Illegal read request with group session", StatusCode.InvalidAction);
    }
}

function isConcreteCommandPath(
    path: TypeFromSchema<typeof TlvCommandPath>,
): path is TypeFromSchema<typeof TlvCommandPath> & CommandPath {
    const { endpointId, clusterId, commandId } = path;
    return endpointId !== undefined && clusterId !== undefined && commandId !== undefined;
}

function validateCommandPath(path: TypeFromSchema<typeof TlvCommandPath>, isGroupSession = false) {
    const { endpointId, clusterId, commandId } = path;
    if (clusterId === undefined || commandId === undefined) {
        throw new StatusResponseError(
            "Illegal write request with wildcard cluster or attribute ID",
            StatusCode.InvalidAction,
        );
    }
    if (isGroupSession && endpointId !== undefined) {
        throw new StatusResponseError("Illegal write request with group ID and endpoint ID", StatusCode.InvalidAction);
    }
}

function getMatterModelCluster(clusterId: ClusterId) {
    return MatterModel.standard.get(ClusterModel, clusterId);
}

function getMatterModelClusterAttribute(clusterId: ClusterId, attributeId: AttributeId) {
    return getMatterModelCluster(clusterId)?.get(AttributeModel, attributeId);
}

function getMatterModelClusterCommand(clusterId: ClusterId, commandId: CommandId) {
    return getMatterModelCluster(clusterId)?.get(CommandModel, commandId);
}

/**
 * Interfaces {@link InteractionServer} with other components.
 */
export interface InteractionContext {
    readonly sessions: SessionManager;
    readonly exchangeManager: ExchangeManager;
    readonly structure: InteractionEndpointStructure; // Remove later
}

/**
 * Translates interactions from the Matter protocol to matter.js APIs.
 */
export class InteractionServer implements ProtocolHandler, InteractionRecipient {
    readonly id = INTERACTION_PROTOCOL_ID;
    readonly requiresSecureSession = true;
    #context: InteractionContext;
    #nextSubscriptionId = Crypto.getRandomUInt32();
    #isClosing = false;
    #clientHandler?: ProtocolHandler;
    readonly #subscriptionConfig: ServerSubscriptionConfig;
    readonly #maxPathsPerInvoke;
    readonly #subscriptionEstablishmentStarted = Observable<[peerAddress: PeerAddress]>();
    #changeListener: (type: EndpointLifecycle.Change, endpoint: Endpoint) => void;
    #node: ServerNode;
    #activity: NodeActivity;
    #newActivityBlocked = false;
    #aclServer?: AccessControlServer;
    #aclUpdateIsDelayedInExchange = new Set<MessageExchange>();
    //#serverInteraction: ServerInteraction;

    constructor(node: ServerNode, sessions: SessionManager) {
        this.#context = {
            sessions,
            exchangeManager: node.env.get(ExchangeManager),
            structure: new InteractionEndpointStructure(),
        };

        this.#subscriptionConfig = ServerSubscriptionConfig.of(node.state.network.subscriptionOptions);
        this.#maxPathsPerInvoke = node.state.basicInformation.maxPathsPerInvoke ?? DEFAULT_MAX_PATHS_PER_INVOKE;

        this.#context.structure.change.on(async () => {
            this.#context.sessions.updateAllSubscriptions();
        });

        this.#activity = node.env.get(NodeActivity);

        this.#node = node;

        // ServerInteraction is the "new way" and will replace most logic here over time and especially
        // the InteractionEndpointStructure, which is currently a duplication of the node protocol
        //this.#serverInteraction = new ServerInteraction(node.protocol);

        // TODO - rewrite element lookup so we don't need to build the secondary endpoint structure cache
        this.#updateStructure();
        this.#changeListener = (type, endpoint) => {
            switch (type) {
                case EndpointLifecycle.Change.ServersChanged:
                    EndpointServer.forEndpoint(endpoint).updateServers();
                    this.#updateStructure();
                    break;

                case EndpointLifecycle.Change.PartsReady:
                case EndpointLifecycle.Change.ClientsChanged:
                case EndpointLifecycle.Change.Destroyed:
                    this.#updateStructure();
                    break;
            }
        };

        node.lifecycle.changed.on(this.#changeListener);
    }

    async [Symbol.asyncDispose]() {
        this.#node.lifecycle.changed.off(this.#changeListener);
        await this.close();
        this.#context.structure.close();
        await EndpointServer.forEndpoint(this.#node)[Symbol.asyncDispose]();
    }

    blockNewActivity() {
        this.#newActivityBlocked = true;
    }

    protected get isClosing() {
        return this.#isClosing;
    }

    get maxPathsPerInvoke() {
        return this.#maxPathsPerInvoke;
    }

    get subscriptionEstablishmentStarted() {
        return this.#subscriptionEstablishmentStarted;
    }

    async onNewExchange(exchange: MessageExchange, message: Message) {
        // When closing, ignore anything newly incoming
        if (this.#newActivityBlocked || this.isClosing) {
            return;
        }

        // An incoming data report as the first message is not a valid server operation.  We instead delegate to a
        // client implementation if available
        if (message.payloadHeader.messageType === MessageType.ReportData && this.clientHandler) {
            return this.clientHandler.onNewExchange(exchange, message);
        }

        // Activity tracking.  This provides diagnostic information and prevents the server from shutting down whilst
        // the exchange is active
        using activity = this.#activity.begin(`session#${exchange.session.id.toString(16)}`);
        (exchange as WithActivity)[activityKey] = activity;

        // Delegate to InteractionServerMessenger
        return new InteractionServerMessenger(exchange)
            .handleRequest(this)
            .finally(() => delete (exchange as WithActivity)[activityKey]);
    }

    get aclServer() {
        if (this.#aclServer !== undefined) {
            return this.#aclServer;
        }
        const aclServer = this.#node.act(agent => agent.get(AccessControlServer));
        if (MaybePromise.is(aclServer)) {
            throw new InternalError("AccessControlServer should already be initialized.");
        }
        return (this.#aclServer = aclServer);
    }

    get clientHandler(): ProtocolHandler | undefined {
        return this.#clientHandler;
    }

    set clientHandler(clientHandler: ProtocolHandler) {
        this.#clientHandler = clientHandler;
    }

    async #collectEventDataForRead(
        { eventRequests, eventFilters, isFabricFiltered }: ReadRequest,
        exchange: MessageExchange,
        message: Message,
    ) {
        let eventReportsPayload: undefined | EventReportPayload[];
        if (eventRequests) {
            eventReportsPayload = [];
            for (const requestPath of eventRequests) {
                validateReadEventPath(requestPath);

                const events = this.#context.structure.getEvents([requestPath]);

                // Requested event path not found in any cluster server on any endpoint
                if (events.length === 0) {
                    if (isConcreteEventPath(requestPath)) {
                        const { endpointId, clusterId, eventId } = requestPath;
                        try {
                            this.#context.structure.validateConcreteEventPath(endpointId, clusterId, eventId);
                            throw new InternalError(
                                "validateConcreteEventPath should throw StatusResponseError but did not.",
                            );
                        } catch (e) {
                            StatusResponseError.accept(e);

                            logger.debug(
                                `Read event from ${
                                    exchange.channel.name
                                }: ${this.#context.structure.resolveEventName(requestPath)}: unsupported path: Status=${
                                    e.code
                                }`,
                            );
                            eventReportsPayload?.push({
                                hasFabricSensitiveData: false,
                                eventStatus: { path: requestPath, status: { status: e.code } },
                            });
                        }
                    }
                    // Wildcard path: Just leave out values
                    logger.debug(
                        `Read event from ${exchange.channel.name}: ${this.#context.structure.resolveEventName(
                            requestPath,
                        )}: ignore non-existing event`,
                    );
                    continue;
                }

                const reportsForPath = new Array<EventReportPayload>();
                for (const { path, event } of events) {
                    try {
                        const matchingEvents = await this.readEvent(
                            path,
                            eventFilters,
                            event,
                            exchange,
                            isFabricFiltered,
                            message,
                        );
                        logger.debug(
                            `Read event from ${exchange.channel.name}: ${this.#context.structure.resolveEventName(
                                path,
                            )}=${Diagnostic.json(matchingEvents)}`,
                        );
                        const { schema } = event;
                        reportsForPath.push(
                            ...matchingEvents.map(({ number, priority, epochTimestamp, payload }) => ({
                                hasFabricSensitiveData: event.hasFabricSensitiveData,
                                eventData: {
                                    path,
                                    eventNumber: number,
                                    priority,
                                    epochTimestamp,
                                    payload,
                                    schema,
                                },
                            })),
                        );
                    } catch (error) {
                        logger.error(
                            `Error while reading event from ${
                                exchange.channel.name
                            } to ${this.#context.structure.resolveEventName(path)}:`,
                            error,
                        );

                        StatusResponseError.accept(error);

                        // Add StatusResponseErrors, but only when the initial path was concrete, else error are ignored
                        if (isConcreteEventPath(requestPath)) {
                            eventReportsPayload?.push({
                                hasFabricSensitiveData: false,
                                eventStatus: { path, status: { status: error.code } },
                            });
                        }
                    }
                }
                eventReportsPayload.push(
                    ...reportsForPath.sort((a, b) => {
                        const eventNumberA = a.eventData?.eventNumber ?? EventNumber(0);
                        const eventNumberB = b.eventData?.eventNumber ?? EventNumber(0);
                        if (eventNumberA > eventNumberB) {
                            return 1;
                        } else if (eventNumberA < eventNumberB) {
                            return -1;
                        } else {
                            return 0;
                        }
                    }),
                );
            }
        }
        return eventReportsPayload;
    }

    /**
     * Returns an iterator that yields the data reports and events data for the given read request.
     */
    *#iterateReadAttributesPaths(
        readRequest: ReadRequest,
        eventReportsPayload: EventReportPayload[] | undefined,
        exchange: MessageExchange,
        message: Message,
    ) {
        const { attributeRequests, dataVersionFilters, isFabricFiltered } = readRequest;
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

        for (const requestPath of attributeRequests ?? []) {
            validateReadAttributesPath(requestPath);

            const attributes = this.#context.structure.getAttributes([requestPath]);

            // Requested attribute path not found in any cluster server on any endpoint
            if (attributes.length === 0) {
                // TODO Add checks for nodeId -> UnknownNode
                if (isConcreteAttributePath(requestPath)) {
                    const { endpointId, clusterId, attributeId } = requestPath;
                    // Concrete path, but still unknown for us, so generate the right error status
                    try {
                        this.#context.structure.validateConcreteAttributePath(endpointId, clusterId, attributeId);
                        throw new InternalError(
                            "validateConcreteAttributePath should throw StatusResponseError but did not.",
                        );
                    } catch (e) {
                        StatusResponseError.accept(e);
                        logger.debug(
                            `Error reading attribute from ${
                                exchange.channel.name
                            }: ${this.#context.structure.resolveAttributeName(requestPath)}: unsupported path: Status=${
                                e.code
                            }`,
                        );
                        yield {
                            hasFabricSensitiveData: false,
                            attributeStatus: { path: requestPath, status: { status: e.code } },
                        };
                    }
                }

                // Wildcard path and we do not know any of the attributes: Ignore the error
                logger.debug(
                    `Read from ${exchange.channel.name}: ${this.#context.structure.resolveAttributeName(
                        requestPath,
                    )}: ${this.#context.structure.resolveAttributeName(requestPath)}: ignore non-existing attribute`,
                );
                continue;
            }

            // Process all known attributes for the given path
            for (const { path, attribute } of attributes) {
                const { nodeId, endpointId, clusterId } = path;

                try {
                    // We accept attributes not in the model ans readable, because existence is checked already
                    if (getMatterModelClusterAttribute(clusterId, attribute.id)?.readable === false) {
                        throw new StatusResponseError(
                            `Attribute ${attribute.id} is not readable.`,
                            StatusCode.UnsupportedRead,
                        );
                    }

                    let value, version;
                    try {
                        // TODO Optimize read later here too to optimize context usage
                        ({ value, version } = this.readAttribute(path, attribute, exchange, isFabricFiltered, message));
                    } catch (e) {
                        NoAssociatedFabricError.accept(e);

                        // TODO: Remove when we remove legacy API
                        //  This is not fully correct but should be sufficient for now
                        //  This is fixed in the new API already, so this error should never throw
                        //  Fabric scoped attributes are access errors, fabric sensitive attributes are just filtered
                        //  Assume for now that in this place we only need to handle fabric sensitive case
                        if (endpointId === undefined || clusterId === undefined) {
                            throw new MatterFlowError("Should never happen");
                        }
                        const cluster = this.#context.structure.getClusterServer(endpointId, clusterId);
                        if (cluster === undefined || cluster.datasource == undefined) {
                            throw new MatterFlowError("Should never happen");
                        }
                        version = cluster.datasource.version;
                        value = [];
                    }

                    const versionFilterValue =
                        endpointId !== undefined && clusterId !== undefined
                            ? dataVersionFilterMap.get(clusterPathToId({ nodeId, endpointId, clusterId }))
                            : undefined;
                    if (versionFilterValue !== undefined && versionFilterValue === version) {
                        logger.debug(
                            `Read attribute from ${exchange.channel.name}: ${this.#context.structure.resolveAttributeName(
                                path,
                            )}=${Diagnostic.json(value)} (version=${version}) ignored because of dataVersionFilter`,
                        );
                        continue;
                    }

                    logger.debug(
                        `Read attribute from ${exchange.channel.name}: ${this.#context.structure.resolveAttributeName(
                            path,
                        )}=${Diagnostic.json(value)} (version=${version})`,
                    );

                    const { schema } = attribute;
                    yield {
                        hasFabricSensitiveData: attribute.hasFabricSensitiveData,
                        attributeData: { path, dataVersion: version, payload: value, schema },
                    };
                } catch (error) {
                    const what = `reading ${this.#context.structure.resolveAttributeName(path)} from ${exchange.channel.name}`;

                    if (!(error instanceof StatusResponseError)) {
                        const wrappedError = new ImplementationError(`Unhandled error ${what}`);
                        wrappedError.cause = error;
                        throw wrappedError;
                    }

                    logger.error(`Error ${what}:`, error.message);

                    // Add StatusResponseErrors, but only when the initial path was concrete, else error are ignored
                    if (isConcreteAttributePath(requestPath)) {
                        yield {
                            hasFabricSensitiveData: false,
                            attributeStatus: { path, status: { status: error.code } },
                        };
                    }
                }
            }
        }

        if (eventReportsPayload !== undefined) {
            for (const eventReport of eventReportsPayload) {
                yield eventReport;
            }
        }
    }

    async handleReadRequest(
        exchange: MessageExchange,
        readRequest: ReadRequest,
        message: Message,
    ): Promise<{ dataReport: DataReport; payload?: DataReportPayloadIterator }> {
        const { attributeRequests, eventRequests, isFabricFiltered, interactionModelRevision } = readRequest;
        logger.debug(
            `Received read request from ${exchange.channel.name}: attributes:${
                attributeRequests?.map(path => this.#context.structure.resolveAttributeName(path)).join(", ") ?? "none"
            }, events:${
                eventRequests?.map(path => this.#context.structure.resolveEventName(path)).join(", ") ?? "none"
            } isFabricFiltered=${isFabricFiltered}`,
        );

        if (interactionModelRevision > Specification.INTERACTION_MODEL_REVISION) {
            logger.debug(
                `Interaction model revision of sender ${interactionModelRevision} is higher than supported ${Specification.INTERACTION_MODEL_REVISION}.`,
            );
        }
        if (attributeRequests === undefined && eventRequests === undefined) {
            return {
                dataReport: {
                    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                    suppressResponse: true,
                },
            };
        }

        if (message.packetHeader.sessionType !== SessionType.Unicast) {
            throw new StatusResponseError(
                "Subscriptions are only allowed on unicast sessions",
                StatusCode.InvalidAction,
            );
        }

        return {
            dataReport: {
                interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                suppressResponse: true,
            },
            payload: this.#iterateReadAttributesPaths(
                readRequest,
                await this.#collectEventDataForRead(readRequest, exchange, message),
                exchange,
                message,
            ),
        };
    }

    protected readAttribute(
        path: AttributePath,
        attribute: AnyAttributeServer<any>,
        exchange: MessageExchange,
        fabricFiltered: boolean,
        message: Message,
        offline = false,
    ) {
        const readAttribute = () =>
            attribute.getWithVersion(exchange.session, fabricFiltered, offline ? undefined : message);

        const endpoint = this.#context.structure.getEndpoint(path.endpointId);
        if (!endpoint) {
            throw new InternalError("Endpoint not found for ACL check. This should never happen.");
        }

        const result = offline
            ? OfflineContext.act("offline-read", this.#activity, readAttribute)
            : OnlineContext({
                  activity: (exchange as WithActivity)[activityKey],
                  fabricFiltered,
                  message,
                  exchange,
                  tracer: this.#tracer,
                  actionType: ActionTracer.ActionType.Read,
                  node: this.#node,
              }).act(readAttribute);

        if (MaybePromise.is(result)) {
            throw new InternalError("Reads should not return a promise.");
        }
        return result;
    }

    /**
     * Reads the attributes for the given endpoint.
     * This can currently only be used for subscriptions because errors are ignored!
     */
    protected readEndpointAttributesForSubscription(
        attributes: { path: AttributePath; attribute: AnyAttributeServer<any> }[],
        exchange: MessageExchange,
        fabricFiltered: boolean,
        message: Message,
        offline = false,
    ) {
        const readAttributes = () => {
            const result = new Array<{
                path: AttributePath;
                attribute: AnyAttributeServer<unknown>;
                value: any;
                version: number;
            }>();
            for (const { path, attribute } of attributes) {
                try {
                    const value = attribute.getWithVersion(
                        exchange.session,
                        fabricFiltered,
                        offline ? undefined : message,
                    );
                    result.push({ path, attribute, value: value.value, version: value.version });
                } catch (error) {
                    if (StatusResponseError.is(error, StatusCode.UnsupportedAccess)) {
                        logger.warn(
                            `Permission denied reading attribute ${this.#context.structure.resolveAttributeName(path)}`,
                        );
                    } else {
                        logger.warn(
                            `Error reading attribute ${this.#context.structure.resolveAttributeName(path)}:`,
                            error,
                        );
                    }
                }
            }
            return result;
        };

        const result = offline
            ? OfflineContext.act("offline-read", this.#activity, readAttributes)
            : OnlineContext({
                  activity: (exchange as WithActivity)[activityKey],
                  fabricFiltered,
                  message,
                  exchange,
                  tracer: this.#tracer,
                  actionType: ActionTracer.ActionType.Read,
                  node: this.#node,
              }).act(readAttributes);
        if (MaybePromise.is(result)) {
            throw new InternalError("Online read should not return a promise.");
        }
        return result;
    }

    protected async readEvent(
        path: EventPath,
        eventFilters: TypeFromSchema<typeof TlvEventFilter>[] | undefined,
        event: AnyEventServer<any, any>,
        exchange: MessageExchange,
        fabricFiltered: boolean,
        message: Message,
    ) {
        const readEvent = (context: ActionContext) => {
            if (
                context.authorityAt(event.readAcl, {
                    endpoint: path.endpointId,
                    cluster: path.clusterId,
                } as AccessControl.Location) !== AccessControl.Authority.Granted
            ) {
                throw new AccessDeniedError(
                    `Access to ${path.endpointId}/${Diagnostic.hex(path.clusterId)} denied on ${exchange.session.name}.`,
                );
            }
            return event.get(exchange.session, fabricFiltered, message, eventFilters);
        };

        return OnlineContext({
            activity: (exchange as WithActivity)[activityKey],
            fabricFiltered,
            message,
            exchange,
            tracer: this.#tracer,
            actionType: ActionTracer.ActionType.Read,
            node: this.#node,
        }).act(readEvent);
    }

    async handleWriteRequest(
        exchange: MessageExchange,
        writeRequest: WriteRequest,
        message: Message,
    ): Promise<WriteResponse> {
        let result: WriteResponse;
        try {
            result = await this.#handleWriteRequestLogic(exchange, writeRequest, message);
        } catch (error) {
            if (this.#aclUpdateIsDelayedInExchange.has(exchange)) {
                // Unlikely to get there at all, but make sure we handle it best we can for now
                this.#aclUpdateIsDelayedInExchange.delete(exchange);

                if (this.#aclUpdateIsDelayedInExchange.size === 0) {
                    // only that one ACl change in flight, so we can reset the delayed ACL
                    this.aclServer.resetDelayedAccessControlList();
                } else {
                    // TODO: we should restore the delayed data just for this errored fabric?
                    logger.error("One of multiple concurrent ACL writes failed, unhandled case for now.");
                }
            }
            throw error;
        }
        // We delayed the ACL update during this write transaction, so we need to update it now that anything is written
        if (this.#aclUpdateIsDelayedInExchange.has(exchange)) {
            this.#aclUpdateIsDelayedInExchange.delete(exchange);

            if (this.#aclUpdateIsDelayedInExchange.size === 0) {
                //  Committing the ACL changes in case of an unhandled exception might be dangerous, but we do it anyway
                this.aclServer.aclUpdateDelayed = false;
            } else {
                logger.info("Multiple concurrent ACL writes, waiting for all to finish.");
            }
        }

        return result;
    }

    async #handleWriteRequestLogic(
        exchange: MessageExchange,
        { suppressResponse, timedRequest, writeRequests, interactionModelRevision, moreChunkedMessages }: WriteRequest,
        message: Message,
    ): Promise<WriteResponse> {
        const sessionType = message.packetHeader.sessionType;
        logger.debug(
            `Received write request from ${exchange.channel.name}: ${writeRequests
                .map(req => this.#context.structure.resolveAttributeName(req.path))
                .join(", ")}, suppressResponse=${suppressResponse}, moreChunkedMessages=${moreChunkedMessages}`,
        );

        if (moreChunkedMessages && suppressResponse) {
            throw new StatusResponseError(
                "MoreChunkedMessages and SuppressResponse cannot be used together in write messages",
                StatusCode.InvalidAction,
            );
        }

        if (interactionModelRevision > Specification.INTERACTION_MODEL_REVISION) {
            logger.debug(
                `Interaction model revision of sender ${interactionModelRevision} is higher than supported ${Specification.INTERACTION_MODEL_REVISION}.`,
            );
        }

        const receivedWithinTimedInteraction = exchange.hasActiveTimedInteraction();

        if (receivedWithinTimedInteraction && moreChunkedMessages) {
            throw new StatusResponseError(
                "Write Request action that is part of a Timed Write Interaction SHALL NOT be chunked.",
                StatusCode.InvalidAction,
            );
        }

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
            logger.debug(
                `Write request from ${exchange.channel.name} successfully received while timed interaction is running.`,
            );
            exchange.clearTimedInteraction();
            if (sessionType !== SessionType.Unicast) {
                throw new StatusResponseError(
                    "Write requests are only allowed on unicast sessions when a timed interaction is running.",
                    StatusCode.InvalidAction,
                );
            }
        }

        if (sessionType === SessionType.Group && !suppressResponse) {
            throw new StatusResponseError(
                "Write requests are only allowed as group casts when suppressResponse=true.",
                StatusCode.InvalidAction,
            );
        }

        const writeData = expandPathsInAttributeData(writeRequests, true);

        const writeResults = new Array<{
            path: TypeFromSchema<typeof TlvAttributePath>;
            statusCode: StatusCode;
            clusterStatusCode?: number;
        }>();
        const attributeListWrites = new Set<AttributeServer<any>>();
        const clusterDataVersionInfo = new Map<string, number>();
        const inaccessiblePaths = new Set<string>();

        // TODO Add handling for moreChunkedMessages here when adopting for Matter 1.4

        for (const writeRequest of writeData) {
            const { path: writePath, dataVersion } = writeRequest;

            validateWriteAttributesPath(writePath);

            const attributes = this.#context.structure.getAttributes([writePath], true);

            // No existing attribute matches the given path and is writable
            if (attributes.length === 0) {
                if (isConcreteAttributePath(writePath)) {
                    const { endpointId, clusterId, attributeId } = writePath;

                    // was a concrete path
                    try {
                        this.#context.structure.validateConcreteAttributePath(endpointId, clusterId, attributeId);

                        // Ok it is a valid  concrete path, so it is not writable
                        throw new StatusResponseError(
                            `Attribute ${attributeId} is not writable.`,
                            StatusCode.UnsupportedWrite,
                        );
                    } catch (e) {
                        StatusResponseError.accept(e);

                        logger.debug(
                            `Write from ${exchange.channel.name}: ${this.#context.structure.resolveAttributeName(
                                writePath,
                            )} not allowed: Status=${e.code}`,
                        );
                        writeResults.push({ path: writePath, statusCode: e.code });
                    }
                } else {
                    // Wildcard path: Just ignore
                    logger.debug(
                        `Write from ${exchange.channel.name}: ${this.#context.structure.resolveAttributeName(
                            writePath,
                        )}: ignore non-existing (wildcard) attribute`,
                    );
                }
                continue;
            }

            // Concrete path and found and writable
            if (attributes.length === 1 && isConcreteAttributePath(writePath)) {
                const { endpointId, clusterId } = writePath;
                const { attribute } = attributes[0];

                if (attribute.requiresTimedInteraction && !receivedWithinTimedInteraction) {
                    logger.debug(`This write requires a timed interaction which is not initialized.`);
                    writeResults.push({ path: writePath, statusCode: StatusCode.NeedsTimedInteraction });
                    continue;
                }

                if (
                    attribute instanceof FabricScopedAttributeServer &&
                    (!exchange.session.isSecure || !(exchange.session as SecureSession).fabric)
                ) {
                    logger.debug(`This write requires a secure session with a fabric assigned which is missing.`);
                    writeResults.push({ path: writePath, statusCode: StatusCode.UnsupportedAccess });
                    continue;
                }

                // Check the provided dataVersion with the dataVersion of the cluster
                // And remember this initial dataVersion for all checks inside this write transaction to allow proper
                // processing of chunked lists
                if (dataVersion !== undefined) {
                    const datasource = this.#context.structure.getClusterServer(endpointId, clusterId)?.datasource;
                    const { nodeId } = writePath;
                    const clusterKey = clusterPathToId({ nodeId, endpointId, clusterId });
                    const currentDataVersion = clusterDataVersionInfo.get(clusterKey) ?? datasource?.version;

                    if (currentDataVersion !== undefined) {
                        if (dataVersion !== currentDataVersion) {
                            logger.debug(
                                `This write requires a specific data version (${dataVersion}) which do not match the current cluster data version (${currentDataVersion}).`,
                            );
                            writeResults.push({ path: writePath, statusCode: StatusCode.DataVersionMismatch });
                            continue;
                        }
                        clusterDataVersionInfo.set(clusterKey, currentDataVersion);
                    }
                }
            }

            for (const { path, attribute } of attributes) {
                const { schema, defaultValue } = attribute;
                const pathId = attributePathToId(path);

                try {
                    if (
                        !(attribute instanceof AttributeServer) &&
                        !(attribute instanceof FabricScopedAttributeServer)
                    ) {
                        throw new StatusResponseError(
                            "Fixed attributes cannot be written",
                            StatusCode.UnsupportedWrite,
                        );
                    }

                    if (inaccessiblePaths.has(pathId)) {
                        logger.debug(`This write is not allowed due to previous access denied.`);
                        continue;
                    }

                    const { endpointId } = path;
                    const { listIndex } = writePath;
                    const value =
                        listIndex === undefined
                            ? decodeAttributeValueWithSchema(schema, [writeRequest], defaultValue)
                            : decodeListAttributeValueWithSchema(
                                  schema as ArraySchema<any>,
                                  [writeRequest],
                                  this.readAttribute(path, attribute, exchange, true, message).value ?? defaultValue,
                              );
                    logger.debug(
                        `Handle write request from ${
                            exchange.channel.name
                        } resolved to: ${this.#context.structure.resolveAttributeName(path)}=${Diagnostic.json(
                            value,
                        )} (listIndex=${listIndex}, for-version=${dataVersion})`,
                    );

                    if (attribute.requiresTimedInteraction && !receivedWithinTimedInteraction) {
                        logger.debug(`This write requires a timed interaction which is not initialized.`);
                        throw new StatusResponseError(
                            "This write requires a timed interaction which is not initialized.",
                            StatusCode.NeedsTimedInteraction,
                        );
                    }

                    await this.writeAttribute(
                        path,
                        attribute,
                        value,
                        exchange,
                        message,
                        this.#context.structure.getEndpoint(endpointId)!,
                        receivedWithinTimedInteraction,
                        schema instanceof ArraySchema,
                    );
                    if (schema instanceof ArraySchema && !attributeListWrites.has(attribute)) {
                        attributeListWrites.add(attribute);
                    }
                } catch (error: any) {
                    if (StatusResponseError.is(error, StatusCode.UnsupportedAccess)) {
                        inaccessiblePaths.add(pathId);
                    }
                    if (attributes.length === 1 && isConcreteAttributePath(writePath)) {
                        // For Multi-Attribute-Writes we ignore errors
                        logger.error(
                            `Error while handling write request from ${
                                exchange.channel.name
                            } to ${this.#context.structure.resolveAttributeName(path)}:`,
                            error instanceof StatusResponseError ? error.message : error,
                        );
                        if (error instanceof StatusResponseError) {
                            writeResults.push({ path, statusCode: error.code, clusterStatusCode: error.clusterCode });
                            continue;
                        }
                        writeResults.push({ path, statusCode: StatusCode.ConstraintError });
                        continue;
                    } else {
                        logger.debug(
                            `While handling write request from ${
                                exchange.channel.name
                            } to ${this.#context.structure.resolveAttributeName(path)} ignored: ${error.message}`,
                        );

                        // TODO - This behavior may be wrong.
                        //
                        // If a wildcard write fails we should either:
                        //
                        //   1. Ignore entirely (add nothing to write results), or
                        //   2. Add an error response for the concrete attribute that failed.
                        //
                        // Spec is a little ambiguous.  After request path expansion, in core 1.2 8.7.3.2 it states:
                        //
                        //   "If the path indicates attribute data that is not writable, then the path SHALL be
                        //    discarded"
                        //
                        // So is this "not writable" -- so it should be #1 -- or is this "writable" but with invalid
                        // data?  The latter is error case #2 but spec doesn't make clear what the status code would
                        // be...  We could fall back to CONSTRAINT_ERROR like we do above though
                        //
                        // Currently what we do is add a success response for every concrete path that fails.
                    }
                }
                writeResults.push({ path, statusCode: StatusCode.Success });
            }
            //.filter(({ statusCode }) => statusCode !== StatusCode.Success); // see https://github.com/project-chip/connectedhomeip/issues/26198
        }

        const errorResults = writeResults.filter(({ statusCode }) => statusCode !== StatusCode.Success);
        logger.debug(
            `Write request from ${exchange.channel.name} done ${
                errorResults.length
                    ? `with following errors: ${errorResults
                          .map(
                              ({ path, statusCode }) =>
                                  `${this.#context.structure.resolveAttributeName(path)}=${Diagnostic.json(statusCode)}`,
                          )
                          .join(", ")}`
                    : "without errors"
            }`,
        );

        const response = {
            interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
            writeResponses: writeResults.map(({ path, statusCode, clusterStatusCode }) => ({
                path,
                status: { status: statusCode, clusterStatus: clusterStatusCode },
            })),
        };

        // Trigger attribute events for delayed list writes
        for (const attribute of attributeListWrites.values()) {
            try {
                attribute.triggerDelayedChangeEvents();
            } catch (error) {
                logger.error(
                    `Ignored Error while writing attribute from ${exchange.channel.name} to ${attribute.name}:`,
                    error,
                );
            }
        }

        return response;
    }

    protected async writeAttribute(
        path: AttributePath,
        attribute: AttributeServer<any>,
        value: any,
        exchange: MessageExchange,
        message: Message,
        _endpoint: EndpointInterface,
        timed?: boolean,
        isListWrite = false,
    ) {
        const writeAttribute = () => attribute.set(value, exchange.session, message, isListWrite);

        if (path.endpointId === 0 && path.clusterId === AclClusterId && path.attributeId === AclAttributeId) {
            // This is a hack to prevent the ACL from updating while we are in the middle of a write transaction
            // and is needed because Acl should not become effective during writing of the ACL itself.
            this.aclServer.aclUpdateDelayed = true;
            this.#aclUpdateIsDelayedInExchange.add(exchange);
        } else {
            // Ok it seems that acl was written, but we now write another path, so we can update Acl attribute now
            if (this.#aclUpdateIsDelayedInExchange.has(exchange)) {
                this.#aclUpdateIsDelayedInExchange.delete(exchange);

                if (this.#aclUpdateIsDelayedInExchange.size === 0) {
                    this.aclServer.aclUpdateDelayed = false;
                } else {
                    logger.info("Multiple concurrent ACL writes, waiting for all to finish.");
                }
            }
        }

        return OnlineContext({
            activity: (exchange as WithActivity)[activityKey],
            timed,
            message,
            exchange,
            fabricFiltered: true,
            tracer: this.#tracer,
            actionType: ActionTracer.ActionType.Write,
            node: this.#node,
        }).act(writeAttribute);
    }

    async handleSubscribeRequest(
        exchange: MessageExchange,
        request: SubscribeRequest,
        messenger: InteractionServerMessenger,
        message: Message,
    ): Promise<void> {
        const {
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            attributeRequests,
            dataVersionFilters,
            eventRequests,
            eventFilters,
            keepSubscriptions,
            isFabricFiltered,
            interactionModelRevision,
        } = request;
        logger.debug(
            `Received subscribe request from ${exchange.channel.name} (keepSubscriptions=${keepSubscriptions}, isFabricFiltered=${isFabricFiltered})`,
        );

        if (interactionModelRevision > Specification.INTERACTION_MODEL_REVISION) {
            logger.debug(
                `Interaction model revision of sender ${interactionModelRevision} is higher than supported ${Specification.INTERACTION_MODEL_REVISION}.`,
            );
        }

        if (message.packetHeader.sessionType !== SessionType.Unicast) {
            throw new StatusResponseError(
                "Subscriptions are only allowed on unicast sessions",
                StatusCode.InvalidAction,
            );
        }

        assertSecureSession(exchange.session, "Subscriptions are only implemented on secure sessions");
        const session = exchange.session;
        const fabric = session.fabric;
        if (fabric === undefined)
            throw new StatusResponseError(
                "Subscriptions are only implemented after a fabric has been assigned",
                StatusCode.InvalidAction,
            );

        if (!keepSubscriptions) {
            const clearedCount = await this.#context.sessions.clearSubscriptionsForNode(
                fabric.addressOf(session.peerNodeId),
                true,
            );
            if (clearedCount > 0) {
                logger.debug(
                    `Cleared ${clearedCount} subscriptions for Subscriber node ${session.peerNodeId} because keepSubscriptions=false`,
                );
            }
        }

        if (
            (!Array.isArray(attributeRequests) || attributeRequests.length === 0) &&
            (!Array.isArray(eventRequests) || eventRequests.length === 0)
        ) {
            throw new StatusResponseError("No attributes or events requested", StatusCode.InvalidAction);
        }

        logger.debug(
            `Subscribe to attributes:${
                attributeRequests?.map(path => this.#context.structure.resolveAttributeName(path)).join(", ") ?? "none"
            }, events:${
                eventRequests?.map(path => this.#context.structure.resolveEventName(path)).join(", ") ?? "none"
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

        // Validate of the paths before proceeding
        attributeRequests?.forEach(path => validateReadAttributesPath(path));
        eventRequests?.forEach(path => validateReadEventPath(path));

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

        if (this.#nextSubscriptionId === 0xffffffff) this.#nextSubscriptionId = 0;
        const subscriptionId = this.#nextSubscriptionId++;

        this.#subscriptionEstablishmentStarted.emit(session.peerAddress);
        let subscription: ServerSubscription;
        try {
            subscription = await this.#establishSubscription(
                subscriptionId,
                request,
                messenger,
                session,
                exchange,
                message,
            );
        } catch (error) {
            logger.error(
                `Subscription ${subscriptionId} for Session ${session.id}: Error while sending initial data reports`,
                error instanceof MatterError ? error.message : error,
            );
            if (error instanceof StatusResponseError && !(error instanceof ReceivedStatusResponseError)) {
                logger.info(`Sending status response ${error.code} for interaction error: ${error.message}`);
                await messenger.sendStatus(error.code, {
                    logContext: {
                        for: "I/SubscriptionSeed-Status",
                    },
                });
            }
            await messenger.close();
            return; // Make sure to not bubble up the exception
        }

        const maxInterval = subscription.maxInterval;
        // Then send the subscription response
        await messenger.send(
            MessageType.SubscribeResponse,
            TlvSubscribeResponse.encode({
                subscriptionId,
                maxInterval,
                interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
            }),
            {
                logContext: {
                    subId: subscriptionId,
                    maxInterval,
                },
            },
        );

        // When an error occurs while sending the response, the subscription is not yet active and will be cleaned up by GC
        subscription.activate();
    }

    async #establishSubscription(
        id: number,
        {
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            attributeRequests,
            dataVersionFilters,
            eventRequests,
            eventFilters,
            isFabricFiltered,
        }: SubscribeRequest,
        messenger: InteractionServerMessenger,
        session: SecureSession,
        exchange: MessageExchange,
        message: Message,
    ) {
        const context: ServerSubscriptionContext = {
            session,
            structure: this.#context.structure,

            readAttribute: (path, attribute, offline) =>
                this.readAttribute(path, attribute, exchange, isFabricFiltered, message, offline),

            readEndpointAttributesForSubscription: attributes =>
                this.readEndpointAttributesForSubscription(attributes, exchange, isFabricFiltered, message),

            readEvent: (path, event, eventFilters) =>
                this.readEvent(path, eventFilters, event, exchange, isFabricFiltered, message),

            initiateExchange: (address: PeerAddress, protocolId) =>
                this.#context.exchangeManager.initiateExchange(address, protocolId),
        };

        const subscription = new ServerSubscription({
            id,
            context,
            criteria: {
                attributeRequests,
                dataVersionFilters,
                eventRequests,
                eventFilters,
                isFabricFiltered,
            },
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            subscriptionOptions: this.#subscriptionConfig,
        });

        try {
            // Send initial data report to prime the subscription with initial data
            await subscription.sendInitialReport(messenger);
        } catch (error) {
            await subscription.close(); // Cleanup
            throw error;
        }

        logger.info(
            `Successfully created subscription ${id} for Session ${
                session.id
            } to ${session.peerAddress}. Updates: ${minIntervalFloorSeconds} - ${maxIntervalCeilingSeconds} => ${subscription.maxInterval} seconds (sendInterval = ${subscription.sendInterval} seconds)`,
        );
        return subscription;
    }

    async establishFormerSubscription(
        {
            subscriptionId,
            attributeRequests,
            eventRequests,
            isFabricFiltered,
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            maxInterval,
            sendInterval,
        }: PeerSubscription,
        session: SecureSession,
    ) {
        const exchange = this.#context.exchangeManager.initiateExchange(session.peerAddress, INTERACTION_PROTOCOL_ID);
        const message = {} as Message;
        logger.debug(
            `Send DataReports to re-establish subscription ${subscriptionId} to `,
            Diagnostic.dict({ isFabricFiltered, maxInterval, sendInterval }),
        );
        const context: ServerSubscriptionContext = {
            session,
            structure: this.#context.structure,

            readAttribute: (path, attribute, offline) =>
                this.readAttribute(path, attribute, exchange, isFabricFiltered, message, offline),

            readEndpointAttributesForSubscription: attributes =>
                this.readEndpointAttributesForSubscription(attributes, exchange, isFabricFiltered, message),

            readEvent: (path, event, eventFilters) =>
                this.readEvent(path, eventFilters, event, exchange, isFabricFiltered, message),

            initiateExchange: (address: PeerAddress, protocolId) =>
                this.#context.exchangeManager.initiateExchange(address, protocolId),
        };

        const subscription = new ServerSubscription({
            id: subscriptionId,
            context,
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            criteria: {
                attributeRequests,
                eventRequests,
                isFabricFiltered,
            },
            subscriptionOptions: this.#subscriptionConfig,
            useAsMaxInterval: maxInterval,
            useAsSendInterval: sendInterval,
        });

        try {
            // Send initial data report to prime the subscription with initial data
            await subscription.sendInitialReport(new InteractionServerMessenger(exchange));
            subscription.activate();
            logger.info(
                `Successfully re-established subscription ${subscriptionId} for Session ${
                    session.id
                } to ${session.peerAddress}. Updates: ${minIntervalFloorSeconds} - ${maxIntervalCeilingSeconds} => ${subscription.maxInterval} seconds (sendInterval = ${subscription.sendInterval} seconds)`,
            );
        } catch (error) {
            await subscription.close(); // Cleanup
            throw error;
        }
        return subscription;
    }

    async handleInvokeRequest(
        exchange: MessageExchange,
        { invokeRequests, timedRequest, suppressResponse, interactionModelRevision }: InvokeRequest,
        messenger: InteractionServerMessenger,
        message: Message,
    ): Promise<void> {
        logger.debug(
            `Received invoke request from ${exchange.channel.name}${invokeRequests.length > 0 ? ` with ${invokeRequests.length} commands` : ""}: ${invokeRequests
                .map(({ commandPath: { endpointId, clusterId, commandId } }) =>
                    this.#context.structure.resolveCommandName({ endpointId, clusterId, commandId }),
                )
                .join(", ")}, suppressResponse=${suppressResponse}`,
        );

        if (interactionModelRevision > Specification.INTERACTION_MODEL_REVISION) {
            logger.debug(
                `Interaction model revision of sender ${interactionModelRevision} is higher than supported ${Specification.INTERACTION_MODEL_REVISION}.`,
            );
        }

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
            if (message.packetHeader.sessionType !== SessionType.Unicast) {
                throw new StatusResponseError(
                    "Invoke requests are only allowed on unicast sessions when a timed interaction is running.",
                    StatusCode.InvalidAction,
                );
            }
        }

        if (invokeRequests.length > this.#maxPathsPerInvoke) {
            throw new StatusResponseError(
                `Only ${this.#maxPathsPerInvoke} invoke requests are supported in one message. This message contains ${invokeRequests.length}`,
                StatusCode.InvalidAction,
            );
        }

        // Validate all commandPaths before proceeding to make sure not to have executed partial commands
        invokeRequests.forEach(({ commandPath }) => validateCommandPath(commandPath));

        // Perform additional cross-command validation required for batch invoke
        if (invokeRequests.length > 1) {
            const pathsUsed = new Set<string>();
            const commandRefsUsed = new Set<number>();
            invokeRequests.forEach(({ commandPath, commandRef }) => {
                if (!isConcreteCommandPath(commandPath)) {
                    throw new StatusResponseError("Illegal wildcard path in batch invoke", StatusCode.InvalidAction);
                }

                const commandPathId = commandPathToId(commandPath);
                if (pathsUsed.has(commandPathId)) {
                    throw new StatusResponseError(
                        `Duplicate command path (${commandPathId}) in batch invoke`,
                        StatusCode.InvalidAction,
                    );
                }

                if (commandRef === undefined) {
                    throw new StatusResponseError(
                        `Command reference missing in batch invoke of ${commandPathId}`,
                        StatusCode.InvalidAction,
                    );
                }

                if (commandRefsUsed.has(commandRef)) {
                    throw new StatusResponseError(
                        `Duplicate command reference ${commandRef} in invoke of ${commandPathId}`,
                        StatusCode.InvalidAction,
                    );
                }

                pathsUsed.add(commandPathId);
                commandRefsUsed.add(commandRef);
            });
        }

        const isGroupSession = message.packetHeader.sessionType === SessionType.Group;
        const invokeResponseMessage: TypeFromSchema<typeof TlvInvokeResponseForSend> = {
            suppressResponse: false, // Deprecated but must be present
            interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
            invokeResponses: [],
            moreChunkedMessages: invokeRequests.length > 1, // Assume for now we have multiple responses when having multiple invokes
        };
        const emptyInvokeResponseBytes = TlvInvokeResponseForSend.encode(invokeResponseMessage);
        let messageSize = emptyInvokeResponseBytes.length;
        let invokeResultsProcessed = 0;

        // To lower potential latency when we would process all invoke messages and just send responses at the end we
        // assemble response on the fly locally here and send when message becomes too big
        const processResponseResult = async (
            invokeResponse: TypeFromSchema<typeof TlvInvokeResponseData>,
        ): Promise<void> => {
            invokeResultsProcessed++;

            if (isGroupSession) {
                // We send no responses at all for group sessions
                return;
            }
            const encodedInvokeResponse = TlvInvokeResponseData.encodeTlv(invokeResponse);
            const invokeResponseBytes = TlvAny.getEncodedByteLength(encodedInvokeResponse);

            if (
                messageSize + invokeResponseBytes > exchange.maxPayloadSize ||
                invokeResultsProcessed === invokeRequests.length
            ) {
                let lastMessageProcessed = false;
                if (messageSize + invokeResponseBytes <= exchange.maxPayloadSize) {
                    // last invoke response and matches in the message
                    invokeResponseMessage.invokeResponses.push(encodedInvokeResponse);
                    lastMessageProcessed = true;
                }
                // Send the response when the message is full or when all responses are processed
                if (invokeResponseMessage.invokeResponses.length > 0) {
                    if (invokeRequests.length > 1) {
                        logger.debug(
                            `Send ${lastMessageProcessed ? "final " : ""}invoke response for ${invokeResponseMessage.invokeResponses} commands`,
                        );
                    }
                    const moreChunkedMessages = lastMessageProcessed ? undefined : true;
                    await messenger.send(
                        MessageType.InvokeResponse,
                        TlvInvokeResponseForSend.encode({
                            ...invokeResponseMessage,
                            moreChunkedMessages,
                        }),
                        {
                            logContext: {
                                invokeMsgFlags: Diagnostic.asFlags({
                                    suppressResponse,
                                    moreChunkedMessages,
                                }),
                            },
                        },
                    );
                    invokeResponseMessage.invokeResponses = [];
                    messageSize = emptyInvokeResponseBytes.length;
                }
                if (!lastMessageProcessed) {
                    invokeResultsProcessed--; // Correct counter again because we recall the method
                    return processResponseResult(invokeResponse);
                }
            } else {
                invokeResponseMessage.invokeResponses.push(encodedInvokeResponse);
                messageSize += invokeResponseBytes;
            }
        };

        // We could do more fancy parallel command processing, but it makes no sense for now, so lets simply process
        // invoked commands one by one sequentially
        for (const { commandPath, commandFields, commandRef } of invokeRequests) {
            const commands = this.#context.structure.getCommands([commandPath]);

            if (commands.length === 0) {
                if (isConcreteCommandPath(commandPath)) {
                    const { endpointId, clusterId, commandId } = commandPath;

                    let result;

                    try {
                        this.#context.structure.validateConcreteCommandPath(endpointId, clusterId, commandId);
                        throw new InternalError(
                            "validateConcreteCommandPath should throw StatusResponseError but did not.",
                        );
                    } catch (e) {
                        StatusResponseError.accept(e);

                        logger.debug(
                            `Invoke from ${exchange.channel.name}: ${this.#context.structure.resolveCommandName(
                                commandPath,
                            )} unsupported path: Status=${e.code}`,
                        );
                        result = { status: { commandPath, status: { status: e.code }, commandRef } };
                    }

                    await processResponseResult(result);
                } else {
                    // Wildcard path: Just ignore
                    logger.debug(
                        `Invoke from ${exchange.channel.name}: ${this.#context.structure.resolveCommandName(
                            commandPath,
                        )} ignore non-existing command`,
                    );
                }
                continue;
            }

            const isConcretePath = isConcreteCommandPath(commandPath);
            for (const { command, path } of commands) {
                const { endpointId, clusterId, commandId } = path;
                if (endpointId === undefined) {
                    // Should never happen
                    logger.error(
                        `Invoke from ${exchange.channel.name}: ${this.#context.structure.resolveCommandName(
                            path,
                        )} invalid path because empty endpoint!`,
                    );
                    if (isConcretePath) {
                        await processResponseResult({
                            status: {
                                commandPath: path,
                                status: { status: StatusCode.UnsupportedEndpoint },
                                commandRef,
                            },
                        });
                    }
                    continue;
                }
                const endpoint = this.#context.structure.getEndpoint(endpointId);
                if (endpoint === undefined) {
                    // Should never happen
                    logger.error(
                        `Invoke from ${exchange.channel.name}: ${this.#context.structure.resolveCommandName(
                            path,
                        )} invalid path because endpoint not found!`,
                    );
                    if (isConcretePath) {
                        await processResponseResult({
                            status: {
                                commandPath: path,
                                status: { status: StatusCode.UnsupportedEndpoint },
                                commandRef,
                            },
                        });
                    }
                    continue;
                }
                if (command.requiresTimedInteraction && !receivedWithinTimedInteraction) {
                    logger.debug(`This invoke requires a timed interaction which is not initialized.`);
                    if (isConcretePath) {
                        await processResponseResult({
                            status: {
                                commandPath: path,
                                status: { status: StatusCode.NeedsTimedInteraction },
                                commandRef,
                            },
                        });
                    }
                    continue;
                }
                if (
                    getMatterModelClusterCommand(clusterId, commandId)?.fabricScoped &&
                    (!exchange.session.isSecure || !(exchange.session as SecureSession).fabric)
                ) {
                    logger.debug(`This invoke requires a secure session with a fabric assigned which is missing.`);
                    if (isConcretePath) {
                        await processResponseResult({
                            status: { commandPath: path, status: { status: StatusCode.UnsupportedAccess }, commandRef },
                        });
                    }
                    continue;
                }

                let result;
                try {
                    result = await this.invokeCommand(
                        path,
                        command,
                        exchange,
                        commandFields ?? TlvNoArguments.encodeTlv(commandFields),
                        message,
                        endpoint,
                        receivedWithinTimedInteraction,
                    );
                } catch (e) {
                    StatusResponseError.accept(e);

                    let errorCode = e.code;
                    const errorLogText = `Error ${Diagnostic.hex(errorCode)}${
                        e.clusterCode !== undefined ? `/${Diagnostic.hex(e.clusterCode)}` : ""
                    } while invoking command: ${e.message}`;

                    if (e instanceof ValidationError) {
                        logger.info(
                            `Validation-${errorLogText}${e.fieldName !== undefined ? ` in field ${e.fieldName}` : ""}`,
                        );
                        if (errorCode === StatusCode.InvalidAction) {
                            errorCode = StatusCode.InvalidCommand;
                        }
                    } else {
                        logger.info(errorLogText);
                    }

                    result = {
                        code: errorCode,
                        clusterCode: e.clusterCode,
                        responseId: command.responseId,
                        response: TlvNoResponse.encodeTlv(),
                    };
                }
                const { code, clusterCode, responseId, response } = result;
                if (response.length === 0) {
                    await processResponseResult({
                        status: { commandPath: path, status: { status: code, clusterStatus: clusterCode }, commandRef },
                    });
                } else {
                    await processResponseResult({
                        command: {
                            commandPath: { ...path, commandId: responseId },
                            commandFields: response,
                            commandRef,
                        },
                    });
                }
            }
        }
    }

    protected async invokeCommand(
        path: CommandPath,
        command: CommandServer<any, any>,
        exchange: MessageExchange,
        commandFields: any,
        message: Message,
        endpoint: EndpointInterface,
        timed = false,
    ) {
        const invokeCommand = (context: ActionContext) => {
            if (
                context.authorityAt(command.invokeAcl, {
                    endpoint: endpoint.number,
                    cluster: path.clusterId,
                } as AccessControl.Location) !== AccessControl.Authority.Granted
            ) {
                throw new AccessDeniedError(
                    `Access to ${endpoint.number}/${Diagnostic.hex(path.clusterId)} denied on ${exchange.session.name}.`,
                );
            }
            return command.invoke(exchange.session, commandFields, message, endpoint);
        };

        return OnlineContext({
            activity: (exchange as WithActivity)[activityKey],
            command: true,
            timed,
            message,
            exchange,
            tracer: this.#tracer,
            actionType: ActionTracer.ActionType.Invoke,
            node: this.#node,
        }).act(invokeCommand);
    }

    handleTimedRequest(exchange: MessageExchange, { timeout, interactionModelRevision }: TimedRequest) {
        logger.debug(`Received timed request (${timeout}ms) from ${exchange.channel.name}`);

        if (interactionModelRevision > Specification.INTERACTION_MODEL_REVISION) {
            logger.debug(
                `Interaction model revision of sender ${interactionModelRevision} is higher than supported ${Specification.INTERACTION_MODEL_REVISION}.`,
            );
        }

        exchange.startTimedInteraction(timeout);
    }

    async close() {
        this.#isClosing = true;
    }

    get #tracer() {
        if (this.#node.env.has(ActionTracer)) {
            return this.#node.env.get(ActionTracer);
        }
    }

    #updateStructure() {
        if (this.#node.lifecycle.isPartsReady) {
            const server = EndpointServer.forEndpoint(this.#node);
            this.#context.structure.initializeFromEndpoint(server);
        }
    }
}
