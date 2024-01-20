import { MatterDevice } from "../../../MatterDevice.js";
import type { Message } from "../../../codec/MessageCodec.js";
import { assertSecureSession } from "../../../session/SecureSession.js";
import { Session } from "../../../session/Session.js";
import { ActionContext } from "./ActionContext.js";
import { Transaction } from "../../state/transaction/Transaction.js";
import { ContextAgents } from "./ContextAgents.js";
import { Agent } from "../../../endpoint/Agent.js";
import { EndpointType } from "../../../endpoint/type/EndpointType.js";
import { Part } from "../../../endpoint/Part.js";
import { AccessControl } from "../../AccessControl.js";
import { AccessLevel } from "../../../cluster/Cluster.js";
import { ImplementationError, InternalError } from "../../../common/MatterError.js";
import { FabricIndex } from "../../../datatype/FabricIndex.js";
import { SubjectId } from "../../../datatype/SubjectId.js";

/**
 * Create an online {@link ActionContext}.  Public Matter API interactions happen in an online context.
 */
export function OnlineContext(options: OnlineContext.Options): ActionContext {
    let context = (options.message as InternalMessage)[CONTEXT];
    if (context) {
        return context;
    }

    let agents: undefined | ContextAgents;

    let fabric: FabricIndex;
    let subject: SubjectId;
    
    const session = options.session;
    if (session) {
        assertSecureSession(session);
        fabric = options.session.getAssociatedFabric().fabricIndex;

        // TODO - group subject
        subject = options.session.getPeerNodeId() as SubjectId;
    } else {
        fabric = options.fabric;
        subject = options.subject;
    }

    if (fabric === undefined) {
        throw new ImplementationError("OnlineContxt requires an authorized fabric");
    }
    if (subject === undefined) {
        throw new ImplementationError("OnlineContext requires an authorizied subject");
    }

    context = {
        ...options,
        session,
        subject,
        fabric,
        transaction: new Transaction(`online#${options.message?.packetHeader.messageId.toString(16) ?? "unknown"}`),

        accessLevelFor(_location?: AccessControl.Location) {
            // TODO - use AccessControlServer on the RootNodeEndpoint
            //const accessControl = accessContext.behavior.node.get(AccessControlServer);
            //return accessControl.accessLevelFor((context as ActionContext), accessContext);
            return AccessLevel.Administer;
        },

        agentFor<T extends EndpointType>(part: Part<T>): Agent.Instance<T> {
            if (!agents) {
                agents = ContextAgents(context as ActionContext);
            }
            return agents.agentFor(part);
        },
    };

    return context;
}

export namespace OnlineContext {
    export type Options =
        & {
            command?: boolean;
            fabricFiltered?: boolean;
            message?: Message;
        }
        & (
            | { session: Session<MatterDevice>, fabric?: undefined, subject?: undefined }
            | { session?: undefined, fabric: FabricIndex, subject: SubjectId }
        );

    export function retrieve(message: Message) {
        const context = (message as InternalMessage)[CONTEXT];
        if (context === undefined) {
            throw new InternalError("No ActionContext associated with message");
        }
        return context;
    }

    export function release(context: ActionContext) {
        delete (context.message as InternalMessage)[CONTEXT];
    }
}

export const CONTEXT = Symbol("context");

/**
 * We graft a transaction onto the message as it the contextual object that exists for the life of a request.
 * 
 * Perhaps instead makes sense to wire ActionContext into lower levels of the server but this works for now.
 */
export interface InternalMessage extends Message {
    [CONTEXT]?: ActionContext;
}

