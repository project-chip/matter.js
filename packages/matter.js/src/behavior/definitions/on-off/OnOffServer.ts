/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnOff } from "../../../cluster/definitions/OnOffCluster.js";
import { Time, Timer } from "../../../time/Time.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { OnOffBehavior } from "./OnOffBehavior.js";
import { OnWithTimedOffRequest } from "./OnOffInterface.js";

const Base = OnOffBehavior.for(OnOff.Complete);

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
        if ((this.constructor as unknown as ClusterBehavior).cluster.supportedFeatures.levelControlForLighting) {
            if (!this.timedOnTimer.isRunning) {
                if (this.delayedOffTimer.isRunning) {
                    this.delayedOffTimer.stop();
                }
                this.state.offWaitTime = 0;
            }
        }
    }

    override off() {
        this.state.onOff = false;
        if ((this.constructor as unknown as ClusterBehavior).cluster.supportedFeatures.levelControlForLighting) {
            if (this.timedOnTimer.isRunning) {
                this.timedOnTimer.stop();
                if ((this.state.offWaitTime ?? 0) > 0) {
                    this.delayedOffTimer.start();
                }
            }
            this.state.onTime = 0;
        }
    }

    /**
     * This method in the default implementation is implemented to use the on/off methods when timed actions should
     * occur. This means that it is enough to override on() and off() with custom control logic.
     */
    override toggle() {
        if (this.state.onOff) {
            this.off();
        } else {
            this.on();
        }
    }

    // TODO: Change back to a method override once issue is fixed
    offWithEffect = () => {
        if (this.state.globalSceneControl) {
            // TODO Store state in global scene
            this.state.globalSceneControl = false;
        }
        this.off();
    };

    // TODO: Change back to a method override once issue is fixed
    onWithRecallGlobalScene = () => {
        if (this.state.globalSceneControl) {
            return;
        }
        // TODO Recall global scene to set onOff accordingly
        this.state.globalSceneControl = true;
        if (this.state.onTime === 0) {
            this.state.offWaitTime = 0;
        }
    };

    /**
     * This method in the default implementation is implemented to use the on/off methods when timed actions should
     * occur. This means that it is enough to override on() and off() with custom control logic.
     */
    // TODO: Change back to a method override once issue is fixed
    onWithTimedOff = (request: OnWithTimedOffRequest) => {
        if (request.onOffControl.acceptOnlyWhenOn && !this.state.onOff) {
            return;
        }

        if (this.delayedOffTimer.isRunning && !this.state.onOff) {
            // We are already in "delayed off state".  This means offWaitTime > 0 and the device is off now
            this.state.offWaitTime = Math.min(request.offWaitTime ?? 0, this.state.offWaitTime ?? 0);
            return;
        }

        this.state.onTime = Math.max(request.onTime ?? 0, this.state.onTime ?? 0);
        this.state.offWaitTime = request.offWaitTime;
        if (this.state.onTime !== 0 && this.state.offWaitTime !== 0) {
            // Specs talk about 0xffff aka "uint16 overflow", we set to 0 if negative
            this.timedOnTimer.start();
        }
        this.on();
    };

    protected get timedOnTimer() {
        let timer = this.internal.timedOnTimer;
        if (timer === undefined) {
            timer = this.internal.timedOnTimer = Time.getPeriodicTimer(100, () => {
                let time = (this.state.onTime ?? 0) - 1;
                if (time <= 0) {
                    time = 0;
                    timer?.stop();
                    this.state.offWaitTime = 0;
                    this.off();
                } else {
                    this.state.onTime = time;
                }
            });
        }
        return timer;
    }

    protected get delayedOffTimer() {
        let timer = this.internal.delayedOffTimer;
        if (timer === undefined) {
            timer = this.internal.delayedOffTimer = Time.getTimer(100, () => {
                let time = (this.state.offWaitTime ?? 0) - 1;
                if (time <= 0) {
                    time = 0;
                    timer?.stop(); // Delayed off ended
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
