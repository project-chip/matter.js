/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnOff } from "../../../cluster/definitions/OnOffCluster.js";
import { Time, Timer } from "../../../time/Time.js";
import { OnOffBehavior } from "./OnOffBehavior.js";
import { OnWithTimedOffRequest } from "./OnOffInterface.js";

const Base = OnOffBehavior.with(OnOff.Feature.LevelControlForLighting);

/**
 * This is the default server implementation of OnOffBehavior.
 *
 * This implementation includes all features of OnOff.Cluster. You should use {@link OnOffServer.with} to specialize
 * the class for the features your implementation supports.
 */
export class OnOffServer extends Base {
    protected declare internal: OnOffServer.Internal;

    override initialize() {
        const startUpOnOffValue = this.state.startUpOnOff ?? null;
        const currentOnOffStatus = this.state.onOff;
        if (startUpOnOffValue !== null) {
            const targetOnOffValue =
                startUpOnOffValue === OnOff.StartUpOnOff.Toggle
                    ? !currentOnOffStatus
                    : startUpOnOffValue === OnOff.StartUpOnOff.On;
            if (targetOnOffValue !== currentOnOffStatus) {
                this.state.onOff = targetOnOffValue;
            }
        }
    }

    override async [Symbol.asyncDispose]() {
        this.internal.timedOnTimer?.stop();
        this.internal.delayedOffTimer?.stop();
        await super[Symbol.asyncDispose]?.();
    }

    override on() {
        this.state.onOff = true;
        if (this.features.levelControlForLighting) {
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
        if (this.features.levelControlForLighting) {
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
            return this.off();
        } else {
            return this.on();
        }
    }

    override offWithEffect() {
        if (this.state.globalSceneControl) {
            // TODO Store state in global scene
            this.state.globalSceneControl = false;
        }
        return this.off();
    }

    override onWithRecallGlobalScene() {
        if (this.state.globalSceneControl) {
            return;
        }
        // TODO Recall global scene to set onOff accordingly
        this.state.globalSceneControl = true;
        if (this.state.onTime === 0) {
            this.state.offWaitTime = 0;
        }
    }

    /**
     * This method in the default implementation is implemented to use the on/off methods when timed actions should
     * occur. This means that it is enough to override on() and off() with custom control logic.
     */
    override onWithTimedOff(request: OnWithTimedOffRequest) {
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
        return this.on();
    }

    protected get timedOnTimer() {
        let timer = this.internal.timedOnTimer;
        if (timer === undefined) {
            timer = this.internal.timedOnTimer = Time.getPeriodicTimer(
                "Timed on",
                100,
                this.callback(this.#timedOnTick),
            );
        }
        return timer;
    }

    #timedOnTick() {
        let time = (this.state.onTime ?? 0) - 1;
        if (time <= 0) {
            time = 0;
            this.internal.timedOnTimer?.stop();
            this.state.offWaitTime = 0;
            this.off();
        }
        this.state.onTime = time;
    }

    protected get delayedOffTimer() {
        let timer = this.internal.delayedOffTimer;
        if (timer === undefined) {
            timer = this.internal.delayedOffTimer = Time.getTimer(
                "Delayed off",
                100,
                this.callback(this.#delayedOffTick),
            );
        }
        return timer;
    }

    #delayedOffTick() {
        let time = (this.state.offWaitTime ?? 0) - 1;
        if (time <= 0) {
            time = 0;
            this.internal.delayedOffTimer?.stop(); // Delayed off ended
        }
        this.state.offWaitTime = time;
    }
}

export namespace OnOffServer {
    export class Internal {
        timedOnTimer?: Timer;
        delayedOffTimer?: Timer;
    }
}
