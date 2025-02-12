/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControlServer } from "#behaviors/access-control";
import { Agent } from "#endpoint/Agent.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointType } from "#endpoint/type/EndpointType.js";
import { Diagnostic, ImplementationError, InternalError, MaybePromise, Transaction } from "#general";
import { AccessLevel } from "#model";
import { Node } from "#node/Node.js";
import type { Message, NodeProtocol, SecureSession } from "#protocol";
import { AccessControl, assertSecureSession, MessageExchange } from "#protocol";
import { FabricIndex, NodeId, StatusResponseError, SubjectId } from "#types";
import { ActionContext } from "../ActionContext.js";
import { ActionTracer } from "../ActionTracer.js";
import { Contextual } from "../Contextual.js";
import { NodeActivity } from "../NodeActivity.js";
import { ContextAgents } from "./ContextAgents.js";

/**
 * Operate in online context.  Public Matter API interactions happen in online context.
 */
export function OnlineContext(options: OnlineContext.Options) {
    let fabric: FabricIndex | undefined;
    let subject: SubjectId;
    let nodeProtocol: NodeProtocol | undefined;
    let accessLevelCache: Map<AccessControl.Location, number[]> | undefined;

    const { exchange } = options;
    const session = exchange?.session;

    if (session) {
        assertSecureSession(session);
        fabric = session.fabric?.fabricIndex;

        // TODO - group subject
        subject = session.peerNodeId;
    } else {
        fabric = options.fabric;
        subject = options.subject as NodeId;
    }

    if (subject === undefined) {
        throw new ImplementationError("OnlineContext requires an authorized subject");
    }

    const { message } = options;
    const via = Diagnostic.via(
        `online#${message?.packetHeader?.messageId?.toString(16) ?? "?"}@${subject.toString(16)}`,
    );

    return {
        /**
         * Run an actor with a read/write context.
         *
         * If the actor changes state, this may return a promise even if {@link actor} does not return a promise.
         */
        act<T>(actor: (context: ActionContext) => MaybePromise<T>): MaybePromise<T> {
            const { close, trace } = initialize();

            const traceError = (e: unknown): never => {
                if (trace) {
                    const status = (e as StatusResponseError).code;
                    if (typeof status === "number") {
                        trace.status = status;
                    }
                }
                throw e;
            };

            let context: undefined | ActionContext;
            const actOnline = (transaction: Transaction) => {
                context = createContext(transaction, trace);
                return actor(context);
            };

            let isAsync = false;
            try {
                const result = Transaction.act(via, actOnline);
                if (MaybePromise.is(result)) {
                    isAsync = true;
                    return Promise.resolve(result).catch(traceError).finally(close);
                }
                return result;
            } catch (e) {
                traceError(e);

                // TS should not require this because traceError returns never, but it complains without it.  This never
                // happens
                throw e;
            } finally {
                if (!isAsync && context) {
                    close();
                }
            }
        },

        /**
         * Begin an operation with a read-only context.  You must close the context after use to properly deregister
         * activity.
         */
        beginReadOnly() {
            const { close, trace } = initialize();

            const context = createContext(Transaction.ReadOnly, trace) as OnlineContext.ReadOnly;
            context[Symbol.dispose] = close;

            return context;
        },

        [Symbol.toStringTag]: "OnlineContext",
    };

    /**
     * Initialization stage one - initialize everything common to r/o and r/w contexts
     */
    function initialize() {
        let trace: undefined | ActionTracer.Action;
        const activity = options.activity?.frame(via);

        if (options.tracer && options.actionType) {
            trace = {
                type: options.actionType,
            };
        }

        const close = () => {
            if (trace) {
                options.tracer?.record(trace);
            }
            if (message) {
                Contextual.setContextOf(message, undefined);
            }
            if (activity) {
                activity[Symbol.dispose]();
            }
        };

        return {
            close,
            trace,
        };
    }

    /**
     * Initialization stage two - create context object after obtaining transaction
     */
    function createContext(transaction: Transaction, trace?: ActionTracer.Action) {
        let agents: undefined | ContextAgents;
        const context: ActionContext = {
            ...options,
            session: session as SecureSession | undefined,
            exchange,
            subject,
            fabric,
            transaction,
            trace,

            interactionComplete: exchange?.closed,

            // TODO - Matter 1.4 - add support for ARLs
            authorityAt(desiredAccessLevel: AccessLevel, location?: AccessControl.Location) {
                if (location === undefined) {
                    throw new InternalError("AccessControl.Location is required");
                }

                // We already checked access levels in this transaction, so reuse it
                const cachedAccessLevels = accessLevelCache?.get(location);
                if (cachedAccessLevels !== undefined) {
                    return cachedAccessLevels.includes(desiredAccessLevel)
                        ? AccessControl.Authority.Granted
                        : AccessControl.Authority.Unauthorized;
                }

                if (options.node === undefined) {
                    throw new InternalError("OnlineContext initialized without node");
                }

                const accessControl = options.node.act(agent => agent.get(AccessControlServer));
                if (MaybePromise.is(accessControl)) {
                    throw new InternalError("AccessControlServer should already be initialized.");
                }
                const accessLevels = accessControl.accessLevelsFor(context, location, aclEndpointContextFor(location));

                if (accessLevelCache === undefined) {
                    accessLevelCache = new Map();
                }
                accessLevelCache.set(location, accessLevels);

                return accessLevels.includes(desiredAccessLevel)
                    ? AccessControl.Authority.Granted
                    : AccessControl.Authority.Unauthorized;
            },

            agentFor<T extends EndpointType>(endpoint: Endpoint<T>): Agent.Instance<T> {
                if (!agents) {
                    agents = ContextAgents(context);
                }
                return agents.agentFor(endpoint);
            },

            get [Contextual.context](): ActionContext {
                return this;
            },
        };

        if (message) {
            Contextual.setContextOf(message, context);
        }

        return context;
    }

    /**
     * Access endpoint metadata required for access control.
     */
    function aclEndpointContextFor({ endpoint: number }: AccessControl.Location) {
        if (number === undefined) {
            throw new InternalError("Online location missing required endpoint number");
        }

        if (options.node === undefined) {
            throw new InternalError("Online context has no node defined");
        }

        if (nodeProtocol === undefined) {
            nodeProtocol = options.node.protocol;
        }

        const endpoint = nodeProtocol[number];
        if (endpoint === undefined) {
            throw new InternalError(`Unknown endpoint number ${number} in access control location`);
        }

        return endpoint;
    }
}

export namespace OnlineContext {
    export type Options = {
        node: Node;
        activity?: NodeActivity.Activity;
        command?: boolean;
        timed?: boolean;
        fabricFiltered?: boolean;
        message?: Message;
        tracer?: ActionTracer;
        actionType?: ActionTracer.ActionType;
    } & (
        | { exchange: MessageExchange; fabric?: undefined; subject?: undefined }
        | { exchange?: undefined; fabric: FabricIndex; subject: SubjectId }
    );

    export interface ReadOnly extends ActionContext {
        [Symbol.dispose](): void;
    }
}
