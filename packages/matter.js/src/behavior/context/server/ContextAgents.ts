/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Agent } from "../../../endpoint/Agent.js";
import { Part } from "../../../endpoint/Part.js";
import { EndpointType } from "../../../endpoint/type/EndpointType.js";
import { ActionContext } from "../ActionContext.js";

/**
 * Internal helper for managing agents associated with a session.
 */
export interface ContextAgents extends ReturnType<typeof ContextAgents> {}

export function ContextAgents(context: ActionContext) {
    const agents = new Map<Part, Agent>();

    return {
        agentFor<const T extends EndpointType>(part: Part<T>): Agent.Instance<T> {
            let agent = agents.get(part) as undefined | Agent.Instance<T>;
            if (agent === undefined) {
                agents.set(part, (agent = new part.agentType(part, context)));
            }
            return agent;
        },
    };
}
