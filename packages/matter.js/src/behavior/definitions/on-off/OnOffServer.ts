/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnOff } from "../../../cluster/definitions/OnOffCluster.js";
import { Time, Timer } from "../../../time/Time.js";
import { OnOffBehavior } from "./OnOffBehavior.js";
import { OnWithTimedOffRequest } from "./OnOffInterface.js";

const Base = OnOffBehavior.for({ ...OnOff.Complete, supportedFeatures: { levelControlForLighting: true } });

/**
 * This is the default server implementation of OnOffBehavior.
 *
 * This implementation includes all features of OnOff.Cluster. You should use {@link OnOffServer.with} to specialize
 * the class for the features your implementation supports.
 */
export class OnOffServer extends Base {
    protected declare internal: OnOffServer.InternalState;

    override on() {
        this.state.onOff = true;
    }

    override off() {
        this.state.onOff = false;
    }

    override toggle() {
        if (this.state.onOff) {
            this.off();
        } else {
            this.on();
        }
    }

    override onWithTimedOff(request: OnWithTimedOffRequest) {
        if (request.onOffControl.acceptOnlyWhenOn && !this.state.onOff) {
            return;
        }

        if (this.delayedOffTimer.isRunning && !this.state.onOff) {
            // We are already in "delayed off state".  This means offWaitTime > 0 and the device is off now
            this.state.offWaitTime = Math.min(request.offWaitTime ?? 0, this.state.offWaitTime ?? 0);
            this.delayedOffTimer.start();
            this.timedOnTimer.stop();
        } else {
            this.state.onTime = Math.max(request.onTime ?? 0, this.state.onTime ?? 0);
            this.state.offWaitTime = request.offWaitTime;
            this.timedOnTimer.start();
            this.delayedOffTimer.stop();
        }
    }

    protected get timedOnTimer() {
        let timer = this.internal.timedOnTimer;
        if (timer === undefined) {
            timer = this.internal.timedOnTimer = Time.getPeriodicTimer(100, () => {
                let time = this.state.onTime ?? -0.1;
                if (time <= 0) {
                    time = 0;
                    timer?.stop();
                    this.state.onOff = false; // Timed on state end by turning off
                }
                this.state.onTime = time;
            });
        }
        return timer;
    }

    protected get delayedOffTimer() {
        let timer = this.internal.delayedOffTimer;
        if (timer === undefined) {
            timer = this.internal.delayedOffTimer = Time.getTimer(100, () => {
                let time = this.state.offWaitTime ?? -0.1;
                if (time <= 0) {
                    time = 0;
                    timer?.stop(); // Delayed off
                }
                this.state.offWaitTime = time;
            });
        }
        return timer;
    }
}

export namespace OnOffServer {
    export class InternalState {
        timedOnTimer?: Timer;
        delayedOffTimer?: Timer;
    }
}
