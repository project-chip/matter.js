/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DoorLock } from "#clusters/door-lock";
import { ImplementationError, MaybePromise } from "#general";
import { DoorLockBehavior } from "./DoorLockBehavior.js";
import LockState = DoorLock.LockState;

/**
 * This is the default server implementation of {@link DoorLockBehavior}.
 */
export class DoorLockServer extends DoorLockBehavior {
    override initialize(): MaybePromise {
        if (this.state.supportedOperatingModes.alwaysSet !== 2047) {
            throw new ImplementationError(
                `DoorLockServer: The "alwaysSet" bit-range in supportedOperatingModes must be set. Please check the specification about the meaning of this field because bits are inverted here!`,
            );
        }
    }

    override lockDoor(): MaybePromise {
        this.state.lockState = LockState.Locked;
    }

    override unlockDoor(): MaybePromise {
        this.state.lockState = LockState.Unlocked;
    }
}
