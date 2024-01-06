/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../MatterDevice.js";
import type { Message } from "../codec/MessageCodec.js";
import { Session } from "../session/Session.js";
import { ValueSupervisor } from "./supervision/ValueSupervisor.js";

/**
 * Provides contextual information when accessing state, invoking methods and
 * emitting events.
 */
export interface InvocationContext extends ValueSupervisor.Session {
    /**
     * The session in which invocation occurs.
     */
    session?: Session<MatterDevice>;

    /**
     * The wire message that initiated invocation.
     */
    message?: Message;
}
