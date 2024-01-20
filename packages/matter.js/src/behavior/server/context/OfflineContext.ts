import { Diagnostic } from "../../../log/Diagnostic.js";
import { AccessLevel } from "../../../cluster/Cluster.js";
import { Transaction } from "../../state/transaction/Transaction.js";
import { ActionContext } from "./ActionContext.js";
import { Part } from "../../../endpoint/Part.js";
import { Agent } from "../../../endpoint/Agent.js";
import { EndpointType } from "../../../endpoint/type/EndpointType.js";
import { ContextAgents } from "./ContextAgents.js";

export let nextInternalId = 1;

/**
 * Create an offline {@link ActionContext}.  Interactions with private matter.js APIs happen in an offline context.
 */

export function OfflineContext(): ActionContext {
    const id = nextInternalId;
    nextInternalId = (nextInternalId + 1) % 65535;
    const via = Diagnostic.via(`offline#${id.toString(16)}`);

    let agents: undefined | ContextAgents;

    const context = Object.freeze({
        // Disable access level enforcement
        offline: true,

        // Transacting via offline identifier generated above
        transaction: new Transaction(via),

        accessLevelFor() {
            // Be as restrictive as possible.  The offline flag should make this irrelevant
            return AccessLevel.View;
        },

        agentFor<const T extends EndpointType>(part: Part<T>): Agent.Instance<T> {
            if (!agents) {
                agents = ContextAgents(context);
            }
            return agents?.agentFor(part);
        }
    });

    return context;
}
