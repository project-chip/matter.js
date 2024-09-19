/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Agent } from "#endpoint/Agent.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointType } from "#endpoint/type/EndpointType.js";
import { Diagnostic, ImplementationError, InternalError, MaybePromise } from "#general";
import { AccessLevel } from "#model";
import type { Message } from "#protocol";
import { assertSecureSession, EndpointInterface, MessageExchange } from "#protocol";
import { FabricIndex, NodeId, StatusResponseError, SubjectId } from "#types";
import { AccessControlServer } from "../../../behaviors/access-control/AccessControlServer.js";
import { RootEndpoint } from "../../../endpoints/root.js";
import { AccessControl } from "../../AccessControl.js";
import { Transaction } from "../../state/transaction/Transaction.js";
import { ActionContext } from "../ActionContext.js";
import { ActionTracer } from "../ActionTracer.js";
import { Contextual } from "../Contextual.js";
import { NodeActivity } from "../NodeActivity.js";
import { ContextAgents } from "./ContextAgents.js";

/**
 * Operate in online context.  Public Matter API interactions happen in online context.
 */
export function OnlineContext(options: OnlineContext.Options) {
    return {
        act<T>(actor: (context: ActionContext) => MaybePromise<T>): MaybePromise<T> {
            let agents: undefined | ContextAgents;

            let fabric: FabricIndex | undefined;
            let subject: SubjectId;

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

            let context: undefined | ActionContext;
            let trace: undefined | ActionTracer.Action;
            let activity: undefined | Disposable;

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

            const actOnline = (transaction: Transaction) => {
                context = {
                    ...options,
                    session,
                    exchange,
                    subject,
                    fabric,
                    transaction,
                    trace,

                    interactionComplete: exchange?.closed,

                    authorizedFor(desiredAccessLevel: AccessLevel, location?: AccessControl.Location) {
                        if (location === undefined) {
                            throw new InternalError("AccessControl.Location is required");
                        }

                        // We already checked access levels in this transaction, so reuse it
                        if (location.accessLevels !== undefined) {
                            return location.accessLevels.includes(desiredAccessLevel);
                        }

                        if (options.root === undefined) {
                            throw new InternalError("Root endpoint is required");
                        }

                        const accessControl = options.root.act(agent => agent.get(AccessControlServer));
                        if (MaybePromise.is(accessControl)) {
                            throw new InternalError("AccessControlServer should already be initialized.");
                        }
                        const accessLevels = accessControl.accessLevelsFor(
                            context as ActionContext,
                            location,
                            options.endpoint,
                        );
                        location.accessLevels = accessLevels;
                        return accessLevels.includes(desiredAccessLevel);
                    },

                    agentFor<T extends EndpointType>(endpoint: Endpoint<T>): Agent.Instance<T> {
                        if (!agents) {
                            agents = ContextAgents(context as ActionContext);
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

                return actor(context);
            };

            const traceError = (e: unknown) => {
                if (trace) {
                    const status = (e as StatusResponseError).code;
                    if (typeof status === "number") {
                        trace.status = status;
                    }
                }
                throw e;
            };

            let isAsync = false;
            try {
                activity = options.activity?.frame(via);
                const result = Transaction.act(via, actOnline);
                if (MaybePromise.is(result)) {
                    isAsync = true;
                    return Promise.resolve(result).catch(traceError).finally(close);
                }
                return result;
            } catch (e) {
                traceError(e);

                // traceError does this but TS isn't smart enough to notice.  This is never reached
                throw e;
            } finally {
                if (!isAsync && context) {
                    close();
                }
            }
        },

        [Symbol.toStringTag]: "OnlineContext",
    };
}

export namespace OnlineContext {
    export type Options = {
        activity?: NodeActivity.Activity;
        command?: boolean;
        timed?: boolean;
        fabricFiltered?: boolean;
        message?: Message;
        tracer?: ActionTracer;
        actionType?: ActionTracer.ActionType;
        endpoint?: EndpointInterface;
        root?: Endpoint<RootEndpoint>;
    } & (
        | { exchange: MessageExchange; fabric?: undefined; subject?: undefined }
        | { exchange?: undefined; fabric: FabricIndex; subject: SubjectId }
    );
}
