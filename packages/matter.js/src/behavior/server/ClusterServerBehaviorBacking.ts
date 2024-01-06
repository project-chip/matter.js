/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { AccessLevel, Attributes, Events } from "../../cluster/Cluster.js";
import { AttributeServer, FabricScopedAttributeServer } from "../../cluster/server/AttributeServer.js";
import { ClusterServer } from "../../cluster/server/ClusterServer.js";
import type { ClusterServerObj, CommandHandler, SupportedEventsList } from "../../cluster/server/ClusterServerTypes.js";
import type { Part } from "../../endpoint/Part.js";
import { Logger } from "../../log/Logger.js";
import { TransactionalInteractionServer } from "../../node/server/TransactionalInteractionServer.js";
import { SecureSession } from "../../session/SecureSession.js";
import { Session } from "../../session/Session.js";
import { MaybePromise } from "../../util/Promises.js";
import { Behavior } from "../Behavior.js";
import { InvocationContext } from "../InvocationContext.js";
import type { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { ClusterEvents } from "../cluster/ClusterEvents.js";
import { ValidatedElements } from "../cluster/ValidatedElements.js";
import { Val } from "../state/managed/Val.js";
import { StructManager } from "../state/managed/values/StructManager.js";
import { Status } from "../state/transaction/Status.js";
import { ServerBehaviorBacking } from "./ServerBehaviorBacking.js";

const logger = Logger.get("Behavior");

/**
 * Backing for cluster behaviors on servers.
 */
export class ClusterServerBehaviorBacking extends ServerBehaviorBacking {
    #clusterServer: ClusterServerObj<Attributes, Events>;

    constructor(part: Part, type: ClusterBehavior.Type) {
        super(part, type);

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

        // Create the cluster server
        this.#clusterServer = ClusterServer(type.cluster, type.defaults, handlers, supportedEvents);

        // Monitor change events so we can notify the cluster server of data
        // changes
        for (const name in elements.attributes) {
            createChangeHandler(this, name);
        }
    }

    get clusterServer() {
        return this.#clusterServer;
    }

    protected override invokeInitializer(behavior: Behavior, options?: Behavior.Options) {
        MaybePromise.then(
            super.invokeInitializer(behavior, options),

            () => {
                // After initialization our datasource is available so we may configure the
                // cluster server's datasource
                const datasource = this.datasource;
                const eventHandler = this.eventHandler;
                this.#clusterServer.datasource = {
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
            }
        );
    }
}

function withBehavior<T>(
    backing: ClusterServerBehaviorBacking,
    session: Session<MatterDevice> | undefined,
    contextFields: Partial<InvocationContext>,
    fn: (behavior: Behavior) => T,
): T {
    let agent;

    // TODO -ideally there'd be something more explicit here to indicate we're
    // operating without ACL enforcement but currently lower levels just omit
    // the session
    if (!session) {
        agent = backing.part.agent;
    } else {
        const fabric = session.isSecure() ? session.getAssociatedFabric() : undefined;
        const transaction = TransactionalInteractionServer.transactionFor(session);

        const context: InvocationContext = {
            ...contextFields,
            associatedFabric: fabric?.fabricIndex,
            session,
            transaction,

            // TODO - this effectively disables access level enforcement because we
            // don't have privilege management implemented yet
            accessLevel: AccessLevel.Administer,
        };

        agent = backing.part.getAgent(context);
    }

    return fn(agent.get(backing.type));
}

function createCommandHandler(backing: ClusterServerBehaviorBacking, name: string): CommandHandler<any, any, any> {
    return ({ request, session, message }) => {
        logger.debug(
            `Invoke <part ${backing.part.id}>.${backing.type.id}.${name}`,
            typeof request === "object" ? Logger.dict(request as object) : request
        );
        return withBehavior(backing, session, { message }, behavior =>
            (behavior as unknown as Record<string, (arg: any) => any>)[name](request),
        );
    };
}

function createAttributeAccessors(
    backing: ClusterServerBehaviorBacking,
    name: string,
): {
    get: (params: { session?: Session<MatterDevice>, isFabricFiltered?: boolean }) => any;
    set: (value: any, params: { session?: Session<MatterDevice> }) => boolean;
} {
    return {
        get({ session, isFabricFiltered }) {
            return withBehavior(backing, session, { fabricFiltered: isFabricFiltered }, behavior => {
                const state = behavior.state as Val.Struct;

                StructManager.assertDirectReadAuthorized(state, name);

                return state[name];
            });
        },

        set(value, { session }) {
            return withBehavior(backing, session, {}, behavior => {
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
    const observable = (backing.events as any)[`${name}$Change`] as ClusterEvents.AttributeObservable;
    if (!observable) {
        return;
    }

    const attributeServer = backing.clusterServer.attributes[name];
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
