/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time, Timer } from "../../../time/Time.js";
import { IdentifyBehavior } from "./IdentifyBehavior.js";
import { IdentifyQueryResponse, IdentifyRequest } from "./IdentifyInterface.js";

/**
 * This is the default server implementation of IdentifyBehavior.
 *
 * This implementation includes all features of Identify.Cluster. You should use IdentifyServer.with to specialize the
 * class for the features your implementation supports.
 */
export class IdentifyServer extends IdentifyBehavior {
    protected declare internal: IdentifyServer.Internal;

    override initialize() {
        this.internal.identifyTimer = Time.getPeriodicTimer(
            "Identify time update",
            1000,
            this.callback(this.#identifyTick),
        );

        // So whenever the attribute OR the identify command was invoked we react to it.
        this.reactTo(this.events.identifyTime$Change, this.#identifyTimeChangedHandler);
    }

    #identifyTimeChangedHandler() {
        if (this.state.identifyTime === 0) {
            if (this.internal.identifyTimer?.isRunning) {
                this.internal.identifyTimer?.stop();
            }
        } else {
            this.internal.identifyTimer?.start();
        }
    }

    override async [Symbol.asyncDispose]() {
        this.internal.identifyTimer?.stop();
        await super[Symbol.asyncDispose]?.();
    }

    #identifyTick() {
        let time = (this.state.identifyTime ?? 0) - 1;
        if (time <= 0) {
            time = 0;
        }
        this.state.identifyTime = time;
    }

    override identify(request: IdentifyRequest) {
        const { identifyTime } = request;
        this.state.identifyTime = identifyTime;
    }

    // TODO - don't think we need this as it's Zigbee only (and dumb - just returns attribute value)
    identifyQuery(): IdentifyQueryResponse {
        return { timeout: this.state.identifyTime };
    }
}

export namespace IdentifyServer {
    export class Internal {
        identifyTimer?: Timer;
    }
}
