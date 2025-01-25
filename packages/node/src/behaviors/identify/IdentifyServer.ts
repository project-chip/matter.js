/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Identify } from "#clusters/identify";
import { Observable, Time, Timer } from "#general";
import { IdentifyBehavior } from "./IdentifyBehavior.js";

/**
 * This is the default server implementation of {@link IdentifyBehavior}.
 *
 * This implementation includes all features of {@link Identify.Cluster} and implements all mandatory commands. You should use
 * {@link IdentifyServer.with} to specialize the class for the features your implementation supports. Alternatively
 * you can extend this class and override the methods you need to change or add mandatory commands.
 *
 * Beside the standard state values the following additional state values are available:
 * * `isIdentifying` - Indicates if the device is currently identifying.
 *
 * Beside the standard events the following additional events are available:
 * * `startIdentifying` - Emitted when the device starts identifying. Use it e.g to start your own identifying logic.
 * * `stopIdentifying` - Emitted when the device stops identifying.
 */
export class IdentifyServer extends IdentifyBehavior {
    declare protected internal: IdentifyServer.Internal;
    declare state: IdentifyServer.State;
    declare events: IdentifyServer.Events;

    override initialize() {
        if (this.state.identifyType === undefined) {
            this.state.identifyType = Identify.IdentifyType.None;
        }

        this.internal.identifyTimer = Time.getPeriodicTimer(
            "Identify time update",
            1000,
            this.callback(this.#identifyTick, { lock: true }),
        );

        // So whenever the attribute OR the identify command was invoked we react to it.
        this.reactTo(this.events.identifyTime$Changed, this.#identifyTimeChangedHandler);
    }

    #startIdentifying() {
        if (!this.internal.identifyTimer?.isRunning) {
            this.internal.identifyTimer?.start();
            this.state.isIdentifying = true;
            this.events.startIdentifying.emit();
        }
    }

    #stopIdentifying() {
        if (this.internal.identifyTimer?.isRunning) {
            this.internal.identifyTimer?.stop();
            this.state.isIdentifying = false;
            this.events.stopIdentifying.emit();
        }
    }

    #identifyTimeChangedHandler() {
        if (this.state.identifyTime === 0) {
            this.#stopIdentifying();
        } else {
            this.#startIdentifying();
        }
    }

    override async [Symbol.asyncDispose]() {
        this.#stopIdentifying();
        await super[Symbol.asyncDispose]?.();
    }

    #identifyTick() {
        let time = (this.state.identifyTime ?? 0) - 1;
        if (time <= 0) {
            time = 0;
        }
        this.state.identifyTime = time;
    }

    override identify({ identifyTime }: Identify.IdentifyRequest) {
        this.state.identifyTime = identifyTime;
    }
}

export namespace IdentifyServer {
    export class Internal {
        identifyTimer?: Timer;
    }

    export class State extends IdentifyBehavior.State {
        isIdentifying: boolean = false;
    }

    export class Events extends IdentifyBehavior.Events {
        startIdentifying = Observable();
        stopIdentifying = Observable();
    }
}
