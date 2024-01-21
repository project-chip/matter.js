/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../../MatterDevice.js";
import type { Message } from "../../../codec/MessageCodec.js";
import { SecureSession } from "../../../session/SecureSession.js";
import { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import type { MatterCoreSpecificationV1_2 } from "../../../spec/Specifications.js";
import { Part } from "../../../endpoint/Part.js";
import { EndpointType } from "../../../endpoint/type/EndpointType.js";
import { Agent } from "../../../endpoint/Agent.js";
import type { AccessLevel } from "../../../cluster/Cluster.js";
import type { OnlineContext } from "./OnlineContext.js";
import type { OfflineContext } from "./OfflineContext.js";

/**
 * Provides contextual information for Matter actions such as accessing attributes or invoking commands.
 * 
 * Matter.js provides an "online" ActionContext for you when responding to network requests.  You can also use
 * "offline" agents to invoke cluster APIs {@link Part} without an active user session.
 * 
 * See {@link OnlineContext} and {@link OfflineContext} for details of these two types of interaction.
 * 
 * Context includes:
 * 
 *   - Authorization details such as {@link AccessLevel}, {@link subject} and accessing {@link fabric}
 * 
 *   - The {@link transaction} required to make state changes
 * 
 *   - Factory functions for {@link Agent} instances you can use to interact with {@link Part}s
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
     * Obtain an agent for interacting with a part in this context.
     */
    agentFor<const T extends EndpointType>(part: Part<T>): Agent.Instance<T>;
}
