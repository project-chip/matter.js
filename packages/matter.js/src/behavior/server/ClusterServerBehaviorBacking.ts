/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { AccessLevel, Attributes, Events } from "../../cluster/Cluster.js";
import { AttributeServer, FabricScopedAttributeServer } from "../../cluster/server/AttributeServer.js";
import { ClusterServer } from "../../cluster/server/ClusterServer.js";
import {
    ClusterServerObj,
    asClusterServerInternal,
    type CommandHandler,
    type SupportedEventsList,
} from "../../cluster/server/ClusterServerTypes.js";
import { Message } from "../../codec/MessageCodec.js";
import { ImplementationError } from "../../common/MatterError.js";
import type { PartServer } from "../../endpoint/PartServer.js";
import { Diagnostic } from "../../log/Diagnostic.js";
import { Logger } from "../../log/Logger.js";
import { CommandModel } from "../../model/index.js";
import { SecureSession } from "../../session/SecureSession.js";
import { Session } from "../../session/Session.js";
import { MaybePromise } from "../../util/Promises.js";
import { camelize } from "../../util/String.js";
import { AccessControl } from "../AccessControl.js";
import { ActionContext } from "../ActionContext.js";
import { Behavior } from "../Behavior.js";
import type { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { ClusterEvents } from "../cluster/ClusterEvents.js";
import { ValidatedElements } from "../cluster/ValidatedElements.js";
import { Val } from "../state/managed/Val.js";
import { StructManager } from "../state/managed/values/StructManager.js";
import { Status } from "../state/transaction/Status.js";
import { ServerActionContext } from "./ServerActionContext.js";
import { ServerBehaviorBacking } from "./ServerBehaviorBacking.js";

const logger = Logger.get("Behavior");

/**
 * Backing for cluster behaviors on servers.
 */
export class ClusterServerBehaviorBacking extends ServerBehaviorBacking {
    #server: PartServer;
    #clusterServer?: ClusterServerObj<Attributes, Events>;

    get clusterServer() {
        return this.#clusterServer;
    }

    constructor(server: PartServer, type: ClusterBehavior.Type) {
        super(server.part, type);
        this.#server = server;
    }

    protected override invokeInitializer(behavior: Behavior, options?: Behavior.Options) {
        return MaybePromise.then(
            () => super.invokeInitializer(behavior, options),

            () => this.#createClusterServer(),
        );
    }

    #createClusterServer() {
        const type = this.type as ClusterBehavior.Type;

        const elements = new ValidatedElements(type);
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
        const datasource = this.datasource;
        const initialValues = datasource.reference({
            accessLevel: AccessLevel.View,
            offline: true,
        });

        // Create the cluster server
        const clusterServer = ClusterServer(type.cluster, initialValues, handlers, supportedEvents);

        // Assign the cluster server to the PartServer
        asClusterServerInternal(clusterServer)._assignToEndpoint(this.#server);

        // This must occur after cluster server is assigned to endpoint
        const eventHandler = this.eventHandler;
        clusterServer.datasource = {
            get version() {
                return datasource.version
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
        }

        this.#clusterServer = clusterServer;

        // Monitor change events so we can notify the cluster server of data
        // changes
        for (const name of elements.attributes) {
            createChangeHandler(this, name);
        }

        this.#server.addClusterServer(clusterServer);
    }
}

function withBehavior<T>(
    backing: ClusterServerBehaviorBacking,
    session: Session<MatterDevice> | undefined,
    contextFields: Partial<ActionContext>,
    invoke: boolean,
    fn: (behavior: Behavior) => T,
): T {
    const context = ServerActionContext(contextFields, invoke, session);

    let agent = backing.part.getAgent(context);

    try {
        return fn(agent.get(backing.type));
    } catch (e) {
        backing.injectErrorSource(e);
        throw e;
    }
}

function createCommandHandler(backing: ClusterServerBehaviorBacking, name: string): CommandHandler<any, any, any> {
    const schema = backing.type.schema?.get(CommandModel, camelize(name, true));
    if (schema === undefined) {
        throw new ImplementationError(`There is no metadata for command ${name}`)
    }
    const access = AccessControl(schema);

    return ({ request, session, message }) => {
        let requestDiagnostic;
        if (request && typeof request === "object") {
            requestDiagnostic = Diagnostic.dict(request);
        } else if (request !== undefined) {
            requestDiagnostic = request;
        } else {
            requestDiagnostic = Diagnostic.weak("(no payload)");
        }

        logger.info(
            "Invoke",
            Diagnostic.strong(`${backing}.${name}`),
            ActionContext.via({ message }),
            requestDiagnostic,
        );

        return withBehavior(backing, session, { message }, true, behavior => {
            access.authorizeInvoke(behavior.context);

            return (behavior as unknown as Record<string, (arg: any) => any>)[name](request);
        });
    };
}

function createAttributeAccessors(
    backing: ClusterServerBehaviorBacking,
    name: string,
): {
    get: (params: { session?: Session<MatterDevice>, isFabricFiltered?: boolean, message?: Message }) => any;
    set: (value: any, params: { session?: Session<MatterDevice>, message?: Message }) => boolean;
} {
    return {
        get({ session, isFabricFiltered, message }) {
            logger.debug(
                "Read",
                Diagnostic.strong(`${backing}.state.${name}`),
                ActionContext.via({ message })
            );

            return withBehavior(backing, session, { message, fabricFiltered: isFabricFiltered }, false, behavior => {
                const state = behavior.state as Val.Struct;

                StructManager.assertDirectReadAuthorized(state, name);

                return state[name];
            });
        },

        set(value, { session, message }) {
            logger.info(
                "Write",
                Diagnostic.strong(`${backing}.state.${name}`),
                ActionContext.via({ message }),
            )

            return withBehavior(backing, session, { message }, false, behavior => {
                const state = behavior.state as Record<string, any>;

                state[name] = value;

                // If the transaction is a write transaction, report that
                // the attribute is updated
                return behavior.context.transaction?.status === Status.Exclusive;
            });
        },
    };
}

function createChangeHandler(backing: ClusterServerBehaviorBacking, name: string) {
    // Change handler requires an event source
    const observable = (backing.events as any)[`${name}$Change`] as ClusterEvents.AttributeObservable;
    if (!observable) {
        return;
    }

    // Also requires an attribute server
    const attributeServer = backing.clusterServer?.attributes[name];
    if (!attributeServer) {
        return;
    }

    if (attributeServer instanceof FabricScopedAttributeServer) {
        observable.on((_value, _oldValue, context) => {
            const session = context.session;
            if (session instanceof SecureSession) {
                attributeServer.updated(session);
            } else {
                // Can't notify if we don't know the fabric
            }
        });
    } else if (attributeServer instanceof AttributeServer) {
        observable.on((_value, _oldValue, context) => {
            const session = context.session;
            if (session instanceof SecureSession) {
                attributeServer.updated(session);
            } else {
                attributeServer.updatedLocal();
            }
        });
    }
}
