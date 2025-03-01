/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Agent } from "#endpoint/Agent.js";
import type { Endpoint } from "#endpoint/Endpoint.js";
import type { EndpointType } from "#endpoint/type/EndpointType.js";
import type { AccessLevel } from "#model";
import type { Message, SecureSession } from "#protocol";
import { MessageExchange } from "#protocol";
import { Priority } from "#types";
import type { ValueSupervisor } from "../supervision/ValueSupervisor.js";
import { NodeActivity } from "./NodeActivity.js";
import type { OfflineContext } from "./server/OfflineContext.js";
import type { OnlineContext } from "./server/OnlineContext.js";

/**
 * Provides contextual information for Matter actions such as accessing attributes or invoking commands.
 *
 * Matter.js provides an "online" ActionContext for you when responding to network requests.  You can also use
 * "offline" agents to invoke cluster APIs {@link Endpoint} without an active user session.
 *
 * See {@link OnlineContext} and {@link OfflineContext} for details of these two types of interaction.
 *
 * Context includes:
 *
 *   - Authorization details such as {@link AccessLevel}, {@link subject} and accessing {@link fabric}
 *
 *   - The {@link transaction} required to make state changes
 *
 *   - Factory functions for {@link Agent} instances you can use to interact with {@link Endpoint}s
 *
 *   - When responding to network requests, low-level contextual information such as the wire {@link message}
 *
 * For the formal definition of an "action" see {@link MatterSpecification.v12.Core} § 8.2.4
 */
export interface ActionContext extends ValueSupervisor.Session {
    /**
     * The Matter session in which an interaction occurs.
     */
    session?: SecureSession;

    /**
     * The Matter exchange in which an interaction occurs.
     */
    exchange?: MessageExchange;

    /**
     * The wire message that initiated invocation.
     */
    message?: Message;

    /**
     * Activity tracking information.  If present, activity frames are inserted at key points for diagnostic
     * purposes.
     */
    activity?: NodeActivity.Activity;

    /**
     * The priority of actions in this context.
     */
    priority?: Priority;

    /**
     * Obtain an agent for interacting with an endpoint in this context.
     */
    agentFor<const T extends EndpointType>(endpoint: Endpoint<T>): Agent.Instance<T>;
}
