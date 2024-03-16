/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { Attributes, Events } from "../../cluster/Cluster.js";
import { AttributeServer } from "../../cluster/server/AttributeServer.js";
import { ClusterServer } from "../../cluster/server/ClusterServer.js";
import {
    ClusterServerObj,
    ClusterServerObjInternal,
    asClusterServerInternal,
    type CommandHandler,
    type SupportedEventsList,
} from "../../cluster/server/ClusterServerTypes.js";
import { Message } from "../../codec/MessageCodec.js";
import { ImplementationError, InternalError } from "../../common/MatterError.js";
import type { EndpointServer } from "../../endpoint/EndpointServer.js";
import { Diagnostic } from "../../log/Diagnostic.js";
import { Logger } from "../../log/Logger.js";
import { CommandModel } from "../../model/index.js";
import { SecureSession } from "../../session/SecureSession.js";
import { Session } from "../../session/Session.js";
import { MaybePromise } from "../../util/Promises.js";
import { camelize } from "../../util/String.js";
import { AccessControl } from "../AccessControl.js";
import { Behavior } from "../Behavior.js";
import type { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { ClusterEvents } from "../cluster/ClusterEvents.js";
import { ValidatedElements } from "../cluster/ValidatedElements.js";
import { Contextual } from "../context/Contextual.js";
import { Val } from "../state/Val.js";
import { StructManager } from "../state/managed/values/StructManager.js";
import { Status } from "../state/transaction/Status.js";
import { ServerBehaviorBacking } from "./ServerBacking.js";

const logger = Logger.get("Behavior");

/**
 * Backing for cluster behaviors on servers.
 */
export class ClusterServerBehaviorBacking extends ServerBehaviorBacking {
    #server: EndpointServer;
    #clusterServer?: ClusterServerObj<Attributes, Events>;

    get clusterServer() {
        return this.#clusterServer;
    }

    override get type() {
        return super.type as ClusterBehavior.Type;
    }

    constructor(server: EndpointServer, type: ClusterBehavior.Type) {
        super(server.endpoint, type);
        this.#server = server;
    }

    protected override invokeInitializer(behavior: Behavior, options?: Behavior.Options) {
        const result = super.invokeInitializer(behavior, options);

        if (MaybePromise.is(result)) {
            const createClusterServer = () => this.#createClusterServer(behavior);
            return result.then(createClusterServer);
        }

        this.#createClusterServer(behavior);
    }

    protected override get datasourceOptions() {
        return {
            ...super.datasourceOptions,
            cluster: this.type.cluster.id,
        };
    }

    #createClusterServer(behavior: Behavior) {
        const elements = new ValidatedElements(this.type);
        elements.report();

        // Install command handlers that map to implementation methods
        const handlers = {} as Record<string, any>;
        for (const name of elements.commands) {
            handlers[name] = createCommandHandler(this, name);
        }

        // Install attribute accessors
        for (const name of elements.attributes) {
            const { get, set } = createAttributeAccessors(this, name);
            handlers[`${name}AttributeGetter`] = get;
            handlers[`${name}AttributeSetter`] = set;
        }

        // Flag supported events
        const supportedEvents = {} as SupportedEventsList<any>;
        for (const name of elements.events) {
            supportedEvents[name] = true;
        }

        // TODO - We don't need the ClusterServer to deal with our state but its API requires valid initial values. This
        // can be cleaned up as we factor out legacy code but for now just pass our validated state and use
        // ClusterServer's TLV validation as backup
        const initialValues = behavior.state;

        // Create the cluster server
        const clusterServer = ClusterServer(this.type.cluster, initialValues, handlers, supportedEvents);

        // Assign the cluster server to the PartServer
        asClusterServerInternal(clusterServer)._assignToEndpoint(this.#server);

        // This must occur after cluster server is assigned to endpoint
        const eventHandler = this.eventHandler;
        const datasource = this.datasource;
        clusterServer.datasource = {
            get version() {
                return datasource.version;
            },

            get eventHandler() {
                return eventHandler;
            },

            // We handle change management ourselves
            changed() {},

            // We handle version management ourselves
            increaseVersion() {
                return datasource.version;
            },
        };

        this.#clusterServer = clusterServer;

        // Monitor change events so we can notify the cluster server of data changes
        for (const name of elements.attributes) {
            createChangeHandler(this, name);
        }

        for (const name of elements.events) {
            createEventHandler(this, name);
        }

        // Disable redundant command logging
        const commandServers = (clusterServer as ClusterServerObjInternal<any, any, any>)._commands;
        for (const name in commandServers) {
            const server = commandServers[name];
            if (server) {
                server.debug = () => {};
            }
        }

        this.#server.addClusterServer(clusterServer);
    }
}

function behaviorFor(backing: ClusterServerBehaviorBacking, message: Message | undefined) {
    const context = Contextual.contextOf(message);
    if (!context) {
        throw new InternalError("Message context not installed");
    }

    const agent = context.agentFor(backing.endpoint);

    return agent.get(backing.type);
}

function createCommandHandler(backing: ClusterServerBehaviorBacking, name: string) {
    const schema = backing.type.schema?.get(CommandModel, camelize(name, true));
    if (schema === undefined) {
        throw new ImplementationError(`There is no metadata for command ${name}`);
    }
    const access = AccessControl(schema);

    const handleCommand: CommandHandler<any, any, any> = ({ request, message }) => {
        let requestDiagnostic: unknown;
        if (request && typeof request === "object") {
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

        let result = (behavior as unknown as Record<string, (arg: any) => any>)[name](request);

        if (trace) {
            result = MaybePromise.then(
                result,

                output => {
                    trace.output = result;
                    return output;
                },
            );
        }

        return result;
    };

    return handleCommand;
}

function createAttributeAccessors(
    backing: ClusterServerBehaviorBacking,
    name: string,
): {
    get: (params: { session?: Session<MatterDevice>; isFabricFiltered?: boolean; message?: Message }) => any;
    set: (value: any, params: { session?: Session<MatterDevice>; message?: Message }) => boolean;
} {
    return {
        get({ message }) {
            if (!message) {
                // If there is no message this is getLocal
                return (backing.datasource.view as unknown as Val.Struct)[name];
            }

            const behavior = behaviorFor(backing, message);

            const trace = behavior.context.trace;
            if (trace) {
                trace.path = backing.path.at(name);
            }

            logger.debug(
                "Read",
                Diagnostic.strong(`${backing}.state.${name}`),
                "via",
                behavior.context.transaction.via,
            );

            const state = behavior.state as Val.Struct;

            StructManager.assertDirectReadAuthorized(state, name);

            if (trace) {
                trace.output = state[name];
            }

            return state[name];
        },

        set(value, { message }) {
            const behavior = behaviorFor(backing, message);

            logger.info(
                "Write",
                Diagnostic.strong(`${backing}.state.${name}`),
                "via",
                behavior.context.transaction.via,
            );

            const trace = behavior.context.trace;
            if (trace) {
                trace.path = backing.path.at(name);
                trace.input = value;
            }

            const state = behavior.state as Record<string, any>;

            state[name] = value;

            // If the transaction is a write transaction, report that
            // the attribute is updated
            return behavior.context.transaction?.status === Status.Exclusive;
        },
    };
}

function createChangeHandler(backing: ClusterServerBehaviorBacking, name: string) {
    // Change handler requires an event source
    const observable = (backing.events as any)[`${name}$Change`] as ClusterEvents.AttributeObservable;
    if (observable === undefined) {
        return;
    }

    // Also requires an attribute server
    const attributeServer = backing.clusterServer?.attributes[name];
    if (!attributeServer) {
        return;
    }

    // Ignore FixedAttributeServer (which is not an AttributeServer)
    if (!(attributeServer instanceof AttributeServer)) {
        return;
    }

    observable.on((_value, _oldValue, context) => {
        const session = context.session;
        if (session instanceof SecureSession) {
            attributeServer.updated(session);
        } else {
            attributeServer.updatedLocal();
        }
    });
}

function createEventHandler(backing: ClusterServerBehaviorBacking, name: string) {
    // Change handler requires an event source
    const observable = (backing.events as any)[name] as ClusterEvents.EventObservable;
    if (observable === undefined) {
        return;
    }

    if (backing.clusterServer === undefined) {
        return;
    }

    // Also requires an attribute server
    const eventServer = asClusterServerInternal(backing.clusterServer)._events[name];
    if (!eventServer) {
        return;
    }

    observable.on((payload, _context) => {
        eventServer.triggerEvent(payload);
    });
}
