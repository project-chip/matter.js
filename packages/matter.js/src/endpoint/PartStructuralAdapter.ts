/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../behavior/Behavior.js";
import { ActionContext } from "../behavior/context/ActionContext.js";
import { Cluster } from "../cluster/Cluster.js";
import {
    ClusterStructuralAdapter as BehaviorStructuralAdapter,
    EndpointStructuralAdapter,
} from "../endpoint/StructuralAdapter.js";
import { Observable } from "../util/Observable.js";
import { camelize } from "../util/String.js";
import { Agent } from "./Agent.js";
import { Part } from "./Part.js";

/**
 * Create a {@link StructuralAdapter} for an {@link Endpoint}.
 */
export function PartStructuralAdapter(part: Part, context: ActionContext): EndpointStructuralAdapter {
    const agent = context.agentFor(part);

    return {
        number: part.number,

        get children() {
            return [...part.parts].map(e => PartStructuralAdapter(e, context));
        },

        getCluster<C extends Cluster<any, any, any, any, any>>(cluster: C) {
            return BehaviorStructuralAdapter(agent, cluster.name);
        },
    };
}

function BehaviorStructuralAdapter<C extends Cluster<any, any, any, any, any>>(
    agent: Agent,
    cluster: string,
): undefined | BehaviorStructuralAdapter<C> {
    const behavior = (agent as unknown as Record<string, Behavior>)[camelize(cluster)];
    if (!behavior) {
        return;
    }

    return {
        trigger(event, payload) {
            (behavior.events as unknown as Record<any, Observable>)[event]?.emit(payload);
        },

        async set(attribute, value) {
            (behavior.state as Record<any, any>)[attribute] = value;
        },

        get(attribute) {
            return (behavior.state as Record<any, any>)[attribute];
        },

        refresh() {
            // Behaviors refresh automatically
        },
    };
}
