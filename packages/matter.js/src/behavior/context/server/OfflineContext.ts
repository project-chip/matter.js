import { AccessLevel } from "../../../cluster/Cluster.js";
import { Agent } from "../../../endpoint/Agent.js";
import { Part } from "../../../endpoint/Part.js";
import { EndpointType } from "../../../endpoint/type/EndpointType.js";
import { Diagnostic } from "../../../log/Diagnostic.js";
import { MaybePromise } from "../../../util/Promises.js";
import { Transaction } from "../../state/transaction/Transaction.js";
import { ReadOnlyTransaction } from "../../state/transaction/Tx.js";
import { ActionContext } from "../ActionContext.js";
import { ActionTracer } from "../ActionTracer.js";
import { Contextual } from "../Contextual.js";
import { ContextAgents } from "./ContextAgents.js";

export let nextInternalId = 1;

/**
 * {@link OfflineContext.act} gives you access to the {@link Agent} API outside of user interaction.
 *
 * You can also use {@link OfflineContext.ReadOnly} for read-only {@link Agent} access.
 */
export namespace OfflineContext {
    /**
     * Operate in offline context.  Interactions with private Matter.js APIs happen in an offline context.
     *
     * {@link act} provides an {@link ActionContext} you can use to access agents for a {@link Part}.
     * State changes and change events occur once {@link actor} returns.
     *
     * The {@link Transaction} is destroyed with {@link act} exits so you should not keep a reference to any agents
     * beyond the lifespan of {@link actor}.
     *
     * Offline context is very permissive.  You should use carefully.
     */
    export function act<T>(
        purpose: string,
        actor: (context: ActionContext) => MaybePromise<T>,
        options?: OfflineContext.Options,
    ): MaybePromise<T> {
        const id = nextInternalId;
        nextInternalId = (nextInternalId + 1) % 65535;
        const via = Diagnostic.via(`${purpose}#${id.toString(16)}`);

        return Transaction.act(via, transaction => {
            const context = createOfflineContext(transaction, options);

            return actor(context);
        });
    }
}

export namespace OfflineContext {
    /**
     * Normally you need to use {@link OfflineContext.act} to work with behaviors, and you can only interact with the
     * behaviors in the actor function.  This {@link ActionContext} allows you to create offline agents that remain
     * functional for the lifespan of the node.
     *
     * Write operations will throw an error with this context.
     */
    export const ReadOnly = createOfflineContext(ReadOnlyTransaction);

    /**
     * {@link OfflineContext} configuration options.
     */
    export interface Options {
        unversionedVolatiles?: boolean;
        trace?: ActionTracer.Action;
    }
}

function createOfflineContext(transaction: Transaction, options?: OfflineContext.Options) {
    let agents: undefined | ContextAgents;

    const context = Object.freeze({
        ...options,

        // Disable access level enforcement
        offline: true,

        transaction,

        accessLevelFor() {
            // Be as restrictive as possible.  The offline flag should make this irrelevant
            return AccessLevel.View;
        },

        agentFor<const T extends EndpointType>(part: Part<T>): Agent.Instance<T> {
            if (!agents) {
                agents = ContextAgents(context);
            }
            return agents?.agentFor(part);
        },

        get [Contextual.context]() {
            return this;
        },
    });

    return context;
}
