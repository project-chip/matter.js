/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Resource } from "#behavior/state/index.js";
import type { EndpointServer } from "#endpoint/EndpointServer.js";
import { camelize, Diagnostic, ImplementationError, InternalError, isObject, Logger, MaybePromise } from "#general";
import { CommandModel, ElementTag } from "#model";
import {
    AttributeServer,
    ClusterDatasource,
    ClusterServer,
    CommandServer,
    createAttributeServer as ConstructAttributeServer,
    EventHandler,
    EventServer,
    FabricManager,
    Message,
    SecureSession,
} from "#protocol";
import { Attribute, Command, Event, TlvNoResponse } from "#types";
import { AccessControl } from "../AccessControl.js";
import { Behavior } from "../Behavior.js";
import type { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { ClusterEvents } from "../cluster/ClusterEvents.js";
import { ValidatedElements } from "../cluster/ValidatedElements.js";
import { Contextual } from "../context/Contextual.js";
import { Val } from "../state/Val.js";
import { StructManager } from "../state/managed/values/StructManager.js";
import { Status } from "../state/transaction/Status.js";
import { ServerBehaviorBacking } from "./ServerBehaviorBacking.js";

const logger = Logger.get("Behavior");

/**
 * Backing for cluster behaviors on servers.
 *
 * TODO - refactor element server management after we remove the old API
 */
export class ClusterServerBacking extends ServerBehaviorBacking {
    #server: EndpointServer;
    #clusterServer?: ClusterServer;

    get clusterServer() {
        return this.#clusterServer;
    }

    get runtime() {
        return this.#server.endpoint.env.runtime;
    }

    get server() {
        return this.#server;
    }

    override get type() {
        return super.type as ClusterBehavior.Type;
    }

    constructor(server: EndpointServer, type: ClusterBehavior.Type) {
        super(server.endpoint, type);
        this.#server = server;
    }

    protected override invokeInitializer(behavior: Behavior, options?: Behavior.Options) {
        const { id, name, attributes, commands, events } = this.type.cluster;

        if (!options) {
            options = {};
        }

        const clusterServer = (this.#clusterServer = {
            id,
            name,
            datasource: this.#createClusterDatasource(),
            attributes: {},
            commands: {},
            events: {},
        });

        const result = super.invokeInitializer(behavior, options);

        const createClusterServer = () => {
            // Validate elements and determine which are applicable
            const elements = new ValidatedElements(this.type, behavior);
            elements.report();

            // Attribute servers.  Include global attributes as well as cluster attributes
            this.#configureServers(
                elements.attributes,
                attributes,
                clusterServer.attributes,
                behavior,
                ["attributeList"],
                createAttributeServer,
            );

            // Command servers
            this.#configureServers(
                elements.commands,
                commands,
                clusterServer.commands,
                behavior,
                ["acceptedCommandList", "generatedCommandList"],
                createCommandServer,
            );

            // Event servers
            this.#configureServers(
                elements.events,
                events,
                clusterServer.events,
                behavior,
                undefined,
                createEventServer,
            );

            // Install the cluster server into the EndpointServer
            this.#server.addClusterServer(clusterServer);
        };

        if (MaybePromise.is(result)) {
            return result.then(createClusterServer);
        }

        createClusterServer();
    }

    protected override get datasourceOptions() {
        return {
            ...super.datasourceOptions,
            cluster: this.type.cluster.id,
        };
    }

    /**
     * Create the {@link ClusterDatasource} that adapts the Behavior API to the AttributeServer API.
     */
    #createClusterDatasource(): ClusterDatasource {
        const datasource = this.datasource;
        const env = this.endpoint.env;

        return {
            get version() {
                return datasource.version;
            },

            get eventHandler() {
                return env.get(EventHandler);
            },

            get fabrics() {
                return env.get(FabricManager).fabrics;
            },

            // We handle change management ourselves
            changed() {},

            // We handle version management ourselves
            increaseVersion() {
                return datasource.version;
            },
        };
    }

    /**
     * Configure the servers for a set of elements (attributes, commands or events).
     */
    #configureServers<T, S>(
        names: Iterable<string>,
        definitions: Record<string, T>,
        servers: Record<string, S>,
        behavior: Behavior,
        attributeNames: ["attributeList"] | ["acceptedCommandList", "generatedCommandList"] | undefined,
        addServer: (
            name: string,
            definition: T,
            backing: ClusterServerBacking,
            behavior: Behavior,
        ) => { ids: number[]; server: S },
    ) {
        const collectedIds = Array<Set<number>>();
        if (attributeNames !== undefined) {
            attributeNames.forEach(() => collectedIds.push(new Set()));
        }

        // Create a server for each supported element and record the ID
        for (const name of names) {
            const definition = definitions[name];
            const { ids, server } = addServer(name, definition, this, behavior);
            if (attributeNames !== undefined) {
                ids.forEach((id, index) => collectedIds[index].add(id));
            }
            servers[name] = server;
        }

        if (attributeNames !== undefined) {
            // Set the global attribute detailing supported elements
            attributeNames.forEach((attributeName, index) => {
                (behavior.state as Record<string, number[]>)[attributeName] = [...collectedIds[index].values()];
            });
        }
    }
}

function createAttributeServer(
    name: string,
    definition: Attribute<any, any>,
    backing: ClusterServerBacking,
    behavior: Behavior,
) {
    function getter(_session: any, _endpoint: any, _isFabricFiltered: any, message?: Message) {
        if (!message) {
            // If there is no message this is getLocal
            return (backing.datasource.view as Val.Struct)[name];
        }

        const behavior = behaviorFor(backing, message);

        behavior.context.activity?.frame(`read ${name}`);

        const trace = behavior.context.trace;
        if (trace) {
            trace.path = backing.path.at(name);
        }

        logger.debug("Read", Diagnostic.strong(`${backing}.state.${name}`), "via", behavior.context.transaction.via);

        const state = behavior.state as Val.Struct;

        StructManager.assertDirectReadAuthorized(state, name);

        if (trace) {
            trace.output = state[name];
        }

        return state[name];
    }

    function setter(value: any, _session: any, _endpoint: any, message?: Message) {
        const behavior = behaviorFor(backing, message);

        behavior.context.activity?.frame(`write ${name}`);

        logger.info("Write", Diagnostic.strong(`${backing}.state.${name}`), "via", behavior.context.transaction.via);

        const trace = behavior.context.trace;
        if (trace) {
            trace.path = backing.path.at(name);
            trace.input = value;
        }

        const state = behavior.state as Val.Struct;

        state[name] = value;

        // If the transaction is a write transaction, report that
        // the attribute is updated
        return behavior.context.transaction?.status === Status.Exclusive;
    }

    const server = ConstructAttributeServer(
        backing.type.cluster,
        definition,
        name,
        (behavior.state as Val.Struct)[name],
        backing.clusterServer!.datasource!,
        getter,
        setter,
    );

    // Wire events (FixedAttributeServer is not an AttributeServer so we skip that)
    if (server instanceof AttributeServer) {
        const observable = (backing.events as any)[`${name}$Changed`] as ClusterEvents.AttributeObservable | undefined;
        observable?.on((_value, _oldValue, context) => {
            const session = context.session;
            if (session instanceof SecureSession) {
                server.updated(session);
            } else {
                server.updatedLocal();
            }
        });
    }

    server.assignToEndpoint(backing.server);

    return {
        ids: [definition.id],
        server,
    };
}

function createCommandServer(name: string, definition: Command<any, any, any>, backing: ClusterServerBacking) {
    // TODO: Introduce nicer ways to get command incl caching and such, aka "make api suck less"
    const schema = backing.type.schema?.member(camelize(name, true), [ElementTag.Command]) as CommandModel;
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

        const behavior = behaviorFor(backing, message);

        const path = backing.path.at(name);

        const trace = behavior.context.trace;
        if (trace) {
            trace.path = backing.path.at(name);
            trace.input = request;
        }

        logger.info("Invoke", Diagnostic.strong(path.toString()), behavior.context.transaction.via, requestDiagnostic);

        access.authorizeInvoke(behavior.context, {
            path,
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
                if (Resource.isLocked(behavior)) {
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

    const ids = [definition.requestId];
    if (definition.responseSchema !== TlvNoResponse) {
        ids.push(definition.responseId);
    }
    return {
        ids,
        server,
    };
}

function createEventServer(name: string, definition: Event<any, any>, backing: ClusterServerBacking) {
    const observable = (backing.events as any)[name] as ClusterEvents.EventObservable;

    const server = new EventServer(
        definition.id,
        backing.type.cluster.id,
        name,
        definition.schema,
        definition.priority,
        definition.readAcl,
    );

    observable?.on((payload, _context) => {
        const maybePromise = server.triggerEvent(payload);
        if (MaybePromise.is(maybePromise)) {
            backing.runtime.add(maybePromise);
        }
    });

    server.assignToEndpoint(backing.server);
    const promise = server.bindToEventHandler(backing.endpoint.env.get(EventHandler));
    if (MaybePromise.is(promise)) {
        // Current code structure means this should never happen.  Refactor after removal of old API will resolve this
        throw new InternalError("Event handler binding returned a promise");
    }

    return {
        ids: [definition.id],
        server,
    };
}

function behaviorFor(backing: ClusterServerBacking, message: Message | undefined) {
    const context = Contextual.contextOf(message);
    if (!context) {
        throw new InternalError("Message context not installed");
    }

    const agent = context.agentFor(backing.endpoint);

    return agent.get(backing.type);
}
