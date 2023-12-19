/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BehaviorBacking } from "../BehaviorBacking.js";
import { InvocationContext } from "../InvocationContext.js";
import { Val } from "../state/managed/Val.js";
import { ClientState } from "./ClientState.js";

export class ClientBehaviorBacking extends BehaviorBacking {
    referenceState(_context: InvocationContext) {
        // TODO - probably "ClientState" should be a ManagedStruct mirroring
        // server state
        return new ClientState(this) as unknown as Val.Struct;
    }
}
