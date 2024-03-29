/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { MatterDevice } from "../../MatterDevice.js";
import type { AccessLevel } from "../../cluster/Cluster.js";
import type { Message } from "../../codec/MessageCodec.js";
import type { Agent } from "../../endpoint/Agent.js";
import type { Endpoint } from "../../endpoint/Endpoint.js";
import type { EndpointType } from "../../endpoint/type/EndpointType.js";
import type { SecureSession } from "../../session/SecureSession.js";
import type { MatterCoreSpecificationV1_2 } from "../../spec/Specifications.js";
import type { ValueSupervisor } from "../supervision/ValueSupervisor.js";
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
 * For the formal definition of an "action" see {@link MatterCoreSpecificationV1_2} § 8.2.4
 */
export interface ActionContext extends ValueSupervisor.Session {
    /**
     * The Matter session in which an interaction occurs.
     */
    session?: SecureSession<MatterDevice>;

    /**
     * The wire message that initiated invocation.
     */
    message?: Message;

    /**
     * Obtain an agent for interacting with an endpoint in this context.
     */
    agentFor<const T extends EndpointType>(endpoint: Endpoint<T>): Agent.Instance<T>;
}
