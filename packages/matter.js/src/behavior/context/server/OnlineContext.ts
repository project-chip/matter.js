/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../../MatterDevice.js";
import { AccessLevel } from "../../../cluster/Cluster.js";
import type { Message } from "../../../codec/MessageCodec.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { FabricIndex } from "../../../datatype/FabricIndex.js";
import { SubjectId } from "../../../datatype/SubjectId.js";
import { Agent } from "../../../endpoint/Agent.js";
import { Endpoint } from "../../../endpoint/Endpoint.js";
import { EndpointType } from "../../../endpoint/type/EndpointType.js";
import { Diagnostic } from "../../../log/Diagnostic.js";
import { assertSecureSession } from "../../../session/SecureSession.js";
import { Session } from "../../../session/Session.js";
import { MaybePromise } from "../../../util/Promises.js";
import { AccessControl } from "../../AccessControl.js";
import { Transaction } from "../../state/transaction/Transaction.js";
import { ActionContext } from "../ActionContext.js";
import { ActionTracer } from "../ActionTracer.js";
import { Contextual } from "../Contextual.js";
import { ContextAgents } from "./ContextAgents.js";
import { NodeActivity } from "./NodeActivity.js";

/**
 * Operate in online context.  Public Matter API interactions happen in online context.
 */
export function OnlineContext(options: OnlineContext.Options) {
    return {
        act<T>(actor: (context: ActionContext) => MaybePromise<T>): MaybePromise<T> {
            let agents: undefined | ContextAgents;

            let fabric: FabricIndex | undefined;
            let subject: SubjectId;

            const session = options.session;

            if (session) {
                assertSecureSession(session);
                fabric = session.fabric?.fabricIndex;

                // TODO - group subject
                subject = session.peerNodeId;
            } else {
                fabric = options.fabric;
                subject = options.subject;
            }

            if (subject === undefined) {
                throw new ImplementationError("OnlineContext requires an authorized subject");
            }

            const message = options.message;
            const via = Diagnostic.via(
                `online#${message?.packetHeader?.messageId?.toString(16) ?? "?"}@${subject.toString(16)}`,
            );

            let context: undefined | ActionContext;

            const close = () => {
                if (message) {
                    Contextual.setContextOf(message, undefined);
                }
                if (context) {
                    options.activity.delete(via);
                }
            };

            const actOnline = (transaction: Transaction) => {
                context = {
                    ...options,
                    session,
                    subject,
                    fabric,
                    transaction,

                    accessLevelFor(_location?: AccessControl.Location) {
                        // TODO - use AccessControlServer on the RootNodeEndpoint
                        //const accessControl = accessContext.behavior.node.get(AccessControlServer);
                        //return accessControl.accessLevelFor((context as ActionContext), accessContext);
                        return AccessLevel.Administer;
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

            let isAsync = false;
            try {
                options.activity.add(via);
                const result = Transaction.act(via, actOnline);
                if (MaybePromise.is(result)) {
                    isAsync = true;
                    return Promise.resolve(result).finally(close);
                }
                return result;
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
        activity: NodeActivity;
        command?: boolean;
        timed?: boolean;
        fabricFiltered?: boolean;
        message?: Message;
        trace?: ActionTracer.Action;
    } & (
        | { session: Session<MatterDevice>; fabric?: undefined; subject?: undefined }
        | { session?: undefined; fabric: FabricIndex; subject: SubjectId }
    );
}
