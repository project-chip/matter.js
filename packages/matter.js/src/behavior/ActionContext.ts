/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../MatterDevice.js";
import type { Message } from "../codec/MessageCodec.js";
import { SecureSession } from "../session/SecureSession.js";
import { ValueSupervisor } from "./supervision/ValueSupervisor.js";
import type { MatterCoreSpecificationV1_2 } from "../spec/Specifications.js";

/**
 * Provides contextual information for Matter actions such as accessing attributes or invoking commands.
 * 
 * Context includes:
 * 
 *   - The {@link accessLevel} unless this is an {@link offline} "superuser" context
 * 
 *   - If applicable, fabric information including the {@link associatedFabric}
 * 
 *   - The {@link transaction} if state access is transactional
 * 
 *   - Where applicable, lower-level contextual information including the wire {@link message}
 * 
 * For the formal definition of an "action" see {@link MatterCoreSpecificationV1_2} § 8.2.4
 */
export interface ActionContext extends ValueSupervisor.Session {
    /**
     * The session in which an interaction occurs.
     */
    session?: SecureSession<MatterDevice>;

    /**
     * The wire message that initiated invocation.
     */
    message?: Message;
}
