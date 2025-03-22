/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import { ClusterEvents } from "#behavior/cluster/ClusterEvents.js";
import { Contextual } from "#behavior/context/Contextual.js";
import { StructManager } from "#behavior/state/managed/values/StructManager.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import {
    camelize,
    Diagnostic,
    ImplementationError,
    InternalError,
    isObject,
    Logger,
    MaybePromise,
    Observable,
    ObserverGroup,
    Transaction,
} from "#general";
import { CommandModel, ElementTag } from "#model";
import {
    AccessControl,
    AttributeServer,
    ClusterDatasource,
    ClusterServer,
    CommandServer,
    createAttributeServer as ConstructAttributeServer,
    EventServer,
    FabricManager,
    Message,
    OccurrenceManager,
    SecureSession,
    Val,
} from "#protocol";
import { Attribute, Command, Event } from "#types";
import type { EndpointServer } from "./EndpointServer.js";

const logger = Logger.get("BehaviorServer");

export interface BehaviorServer extends ClusterServer {
    close(): void;
}

/**
 * Create a {@link ClusterServer} for a {@link ClusterBehavior}.
 *
 * Note that we only create servers for cluster behaviors.  Other {@link Behavior} implementations do not have proper
 * metadata to go online.
 *
 * TODO - refactor element server management after we remove the old API
 */
export function BehaviorServer(endpointServer: EndpointServer, type: ClusterBehavior.Type): BehaviorServer {
    const { id, name, attributes, commands, events } = type.cluster;

    const { endpoint } = endpointServer;
    const datasource = createClusterDatasource(endpoint, type);
    const observers = new ObserverGroup();

    const clusterServer: BehaviorServer = {
        id,
        name,
        datasource,
        attributes: {},
        commands: {},
        events: {},
        close() {
            observers.close();
        },
    };

    // Extract read-only state and observables for setup purposes
    const stateView = endpoint.stateOf(type) as Val.Struct;
    const observables = endpoint.eventsOf(type) as unknown as Record<string, Observable>;
    const elements = endpointServer.endpoint.behaviors.elementsOf(type);

    // Add attribute servers.  Include global attributes as well as cluster attributes
    for (const name of elements.attributes) {
        const attribute = attributes[name];

        const server = createAttributeServer(
            name,
            attribute,
            endpoint,
            type,
            datasource,
            stateView,
            observables,
            observers,
        );

        clusterServer.attributes[name] = server;
        server.assignToEndpoint(endpointServer);
    }

    // Add command servers
    for (const name of elements.commands) {
        const command = commands[name];

        clusterServer.commands[name] = createCommandServer(name, command, endpoint, type);
    }

    // Event servers
    for (const name of elements.events) {
        const server = createEventServer(name, events[name], endpoint, type, observables, observers);

        clusterServer.events[name] = server;
        server.assignToEndpoint(endpointServer);
    }

    return clusterServer;
}

/**
 * Create the {@link ClusterDatasource} that adapts the Behavior API to the AttributeServer API.
 */
function createClusterDatasource(endpoint: Endpoint, type: Behavior.Type): ClusterDatasource {
    const env = endpoint.env;

    return {
        get version() {
            return endpoint.behaviors.versionOf(type);
        },

        get eventHandler() {
            return env.get(OccurrenceManager);
        },

        get fabrics() {
            return env.get(FabricManager).fabrics;
        },

        // We handle change management ourselves
        changed() {},

        // We handle version management ourselves
        increaseVersion() {
            return this.version;
        },
    };
}

function createAttributeServer(
    name: string,
    definition: Attribute<any, any>,
    endpoint: Endpoint,
    type: ClusterBehavior.Type,
    datasource: ClusterDatasource,
    stateView: Val.Struct,
    observables: Record<string, Observable>,
    observers: ObserverGroup,
) {
    function getter(_session: any, _endpoint: any, _isFabricFiltered: any, message?: Message) {
        if (!message) {
            // If there is no message this is getLocal
            return stateView[name];
        }

        const behavior = behaviorFor(endpoint, type, message);

        behavior.context.activity?.frame(`read ${name}`);

        const trace = behavior.context.trace;
        if (trace) {
            trace.path = endpoint.path.at(name);
        }

        //logger.debug("Read", Diagnostic.strong(`${endpoint}.state.${name}`), "via", behavior.context.transaction.via);

        const state = behavior.state as Val.Struct;

        StructManager.assertDirectReadAuthorized(state, definition.id);

        if (trace) {
            trace.output = state[name];
        }

        return state[name];
    }

    function setter(value: any, _session: any, _endpoint: any, message?: Message) {
        const behavior = behaviorFor(endpoint, type, message);

        behavior.context.activity?.frame(`write ${name}`);

        logger.info("Write", Diagnostic.strong(`${endpoint}.state.${name}`), "via", behavior.context.transaction.via);

        const trace = behavior.context.trace;
        if (trace) {
            trace.path = endpoint.path.at(name);
            trace.input = value;
        }

        const state = behavior.state as Val.Struct;

        state[name] = value;

        // If the transaction is a write transaction, report that the attribute is updated
        return behavior.context.transaction?.status === Transaction.Status.Exclusive;
    }

    const server = ConstructAttributeServer(
        type.cluster,
        definition,
        name,
        stateView[name],
        datasource,
        getter,
        setter,
    );

    // Wire events (FixedAttributeServer is not an AttributeServer so we skip that)
    if (server instanceof AttributeServer) {
        const observable = (observables[`${name}$Changed`] as ClusterEvents.ChangedObservable | undefined)?.online;
        if (observable !== undefined) {
            observers.on(observable, (_value, _oldValue, context) => {
                const session = context.session;
                if (session instanceof SecureSession) {
                    server.updated(session);
                } else {
                    server.updatedLocal();
                }
            });
        }
    }

    return server;
}

function createCommandServer(
    name: string,
    definition: Command<any, any, any>,
    endpoint: Endpoint,
    type: ClusterBehavior.Type,
) {
    // TODO: Introduce nicer ways to get command incl caching and such, aka "make api suck less"
    const schema = type.schema?.member(camelize(name, true), [ElementTag.Command]) as CommandModel;
    if (schema === undefined) {
        throw new ImplementationError(`There is no metadata for command ${name}`);
    }
    const access = AccessControl(schema);

    const handler = (request: unknown, _session: unknown, message: Message) => {
        let requestDiagnostic: unknown;
        if (isObject(request)) {
            requestDiagnostic = Diagnostic.dict(request);
        } else if (request !== undefined) {
            requestDiagnostic = request;
        } else {
            requestDiagnostic = Diagnostic.weak("(no payload)");
        }

        const behavior = behaviorFor(endpoint, type, message);

        const path = endpoint.path.at(name);

        const trace = behavior.context.trace;
        if (trace) {
            trace.path = endpoint.path.at(name);
            trace.input = request;
        }

        logger.info("Invoke", Diagnostic.strong(path.toString()), behavior.context.transaction.via, requestDiagnostic);

        access.authorizeInvoke(behavior.context, {
            path,
            endpoint: endpoint.number,
            cluster: behavior.cluster.id,
        });

        let isAsync = false;
        let activity: undefined | Disposable;
        let result: unknown;
        try {
            activity = behavior.context?.activity?.frame(`invoke ${name}`);

            const invoke = (behavior as unknown as Record<string, (arg: unknown) => unknown>)[name].bind(behavior);

            // Lock if necessary, then invoke
            if ((behavior.constructor as ClusterBehavior.Type).lockOnInvoke) {
                const tx = behavior.context.transaction;
                if (Transaction.Resource.isLocked(behavior)) {
                    // Automatic locking with locked resource; requires async lock acquisition
                    result = (async function invokeAsync() {
                        await tx.addResources(behavior);
                        await tx.begin();
                        return invoke(request);
                    })();
                } else {
                    // Automatic locking on unlocked resource; may proceed synchronously
                    tx.addResourcesSync(behavior);
                    tx.beginSync();
                    result = invoke(request);
                }
            } else {
                // Automatic locking disabled
                result = invoke(request);
            }

            if (MaybePromise.is(result)) {
                isAsync = true;
                result = Promise.resolve(result)
                    .then(result => {
                        if (trace) {
                            trace.output = result;
                        }
                        return result;
                    })
                    .finally(() => activity?.[Symbol.dispose]());
            } else if (trace) {
                trace.output = result;
            }
        } finally {
            if (!isAsync) {
                activity?.[Symbol.dispose]();
            }
        }

        return result;
    };

    const server = new CommandServer(
        definition.requestId,
        definition.responseId,
        name,
        definition.requestSchema,
        definition.responseSchema,
        definition.timed,
        definition.invokeAcl,
        handler,
    );

    // Eliminate redundant diagnostic messages
    server.debug = () => {};

    return server;
}

function createEventServer(
    name: string,
    definition: Event<any, any>,
    endpoint: Endpoint,
    type: ClusterBehavior.Type,
    observables: Record<string, Observable>,
    observers: ObserverGroup,
) {
    const observable = observables[name] as ClusterEvents.EventObservable;

    const server = new EventServer(
        definition.id,
        type.cluster.id,
        name,
        definition.schema,
        definition.priority,
        definition.readAcl,
    );

    if (observable !== undefined) {
        observers.on(observable.online, (payload, _context) => {
            const maybePromise = server.triggerEvent(payload);
            if (MaybePromise.is(maybePromise)) {
                endpoint.env.runtime.add(maybePromise);
            }
        });
    }

    const promise = server.bindToEventHandler(endpoint.env.get(OccurrenceManager));
    if (MaybePromise.is(promise)) {
        // Current code structure means this should never happen.  Refactor after removal of old API will resolve this
        throw new InternalError("Event handler binding returned a promise");
    }

    return server;
}

function behaviorFor(endpoint: Endpoint, type: ClusterBehavior.Type, message: Message | undefined) {
    const context = Contextual.contextOf(message);
    if (!context) {
        throw new InternalError("Message context not installed");
    }

    const agent = context.agentFor(endpoint);

    return agent.get(type);
}
