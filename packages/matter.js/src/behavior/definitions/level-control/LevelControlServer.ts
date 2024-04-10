/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LevelControl } from "../../../cluster/definitions/LevelControlCluster.js";
import { Logger } from "../../../log/Logger.js";
import { StatusCode, StatusResponseError } from "../../../protocol/interaction/StatusCode.js";
import { TypeFromPartialBitSchema } from "../../../schema/BitmapSchema.js";
import { Time, Timer } from "../../../time/Time.js";
import { MaybePromise } from "../../../util/Promises.js";
import { OnOffServer } from "../on-off/OnOffServer.js";
import { LevelControlBehavior } from "./LevelControlBehavior.js";
import {
    MoveRequest,
    MoveToLevelRequest,
    MoveToLevelWithOnOffRequest,
    MoveWithOnOffRequest,
    StepRequest,
    StepWithOnOffRequest,
    StopRequest,
} from "./LevelControlInterface.js";

const logger = Logger.get("LevelControlServer");

const LevelControlLogicBase = LevelControlBehavior.with(LevelControl.Feature.OnOff, LevelControl.Feature.Lighting);
/**
 * This is the default server implementation of {@link LevelControlBehavior}.
 *
 * This implementation includes all features of {@link LevelControl.Cluster} and implements all mandatory commands. The
 * On-Off Feature is automatically turned on as defined by the matter specification.
 * You should use {@link LevelControlServer.with} to specialize the class for the features your implementation supports.
 *
 * This default implementation also handles the OmOff cluster dependency as defined by the Matter specification
 * automatically.
 *
 * This implementation ignores by default all transition times and sets the level immediately. Alternatively, you can
 * set the `simulateTransitionTimeHandling` state attribute to true to simulate transition times by changing the level
 * value step wise every second. This might be an intermediate solution if you develop independently of defined
 * hardware.
 *
 * If you develop for a specific hardware you should extend the {@link LevelControlServerLogic} class and implement the
 * following methods to natively use device features to correctly support the transition times. For this the default
 * implementation uses special protected methods which are used by the real commands and are only responsible for the
 * actual value change logic. The benefit of this structure is that basic data validations and options checks are
 * already done and you can focus on the actual hardware interaction:
 * * {@link LevelControlServerLogic.moveToLevelLogic} Logic to move the value to a defined level with a transition time
 * * {@link LevelControlServerLogic.moveLogic} Logic to move the value up or down with a defined rate
 * * {@link LevelControlServerLogic.stepLogic} Logic to step the value up or down with a defined step size and transition
 * * {@link LevelControlServerLogic.stopLogic} Logic to stop any currently running transitions
 *
 * If you add own implementation you can use:
 * * {@link LevelControlServerLogic.setLevel} to set the level attribute including automatic handling of the onoff dependency
 * * {@link LevelControlServerLogic.setRemainingTime} to set the remaining time attribute when Lighting feature is enabled
 */
export class LevelControlServerLogic extends LevelControlLogicBase {
    protected declare internal: LevelControlServerLogic.Internal;
    declare state: LevelControlServerLogic.State;

    get minLevel() {
        return this.state.minLevel ?? (this.features.lighting ? 1 : 0);
    }

    get maxLevel() {
        return this.state.maxLevel ?? 0xfe;
    }

    override initialize() {
        if (this.features.lighting) {
            if (this.state.currentLevel === 0) {
                logger.warn(
                    `The currentLevel value of ${this.state.currentLevel} is invalid according to Matter specification. The value must not be 0.`,
                );
            }
            if (this.minLevel !== 1) {
                logger.warn(
                    `The minLevel value of ${this.minLevel} is invalid according to Matter specification. The value should be 1.`,
                );
            }
            if (this.maxLevel !== 0xfe) {
                logger.warn(
                    `The maxLevel value of ${this.maxLevel} is invalid according to Matter specification. The value should be 254.`,
                );
            }

            // TODO Only do this if it was not a "OTA upgrade reboot" case, no way right now to distinguish
            const startUpLevelValue = this.state.startUpCurrentLevel ?? null;
            const currentLevelValue = this.state.currentLevel;
            let targetLevelValue: number | null;
            switch (startUpLevelValue) {
                case 0:
                    targetLevelValue = this.minLevel;
                    break;
                case null:
                    targetLevelValue = currentLevelValue;
                    break;
                default:
                    targetLevelValue = startUpLevelValue;
                    break;
            }
            if (targetLevelValue !== currentLevelValue) {
                this.state.currentLevel = targetLevelValue;
            }
        }

        if (this.features.onOff && this.agent.has(OnOffServer)) {
            this.reactTo(this.agent.get(OnOffServer).events.onOff$Change, this.handleOnOffChange, { offline: true });
        }
    }

    /**
     * Default implementation notes:
     * This method ignores the transition time provided by the command or settings and just sets the level to the
     * requested value. After the options and value checks it uses the {@link moveToLevelLogic} method to set the level.
     * If you want to implement own logic just override {@link moveToLevelLogic} with is also used for {@link moveToLevelWithOnOff}.
     */
    override moveToLevel({ level, transitionTime, optionsMask, optionsOverride }: MoveToLevelRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }

        this.#assertLevelValue(level);

        return this.moveToLevelLogic(level, transitionTime, false);
    }

    /**
     * Default implementation notes:
     * This method ignores the transition time provided by the command or settings and just sets the level to the
     * requested value. After the options and value checks it uses the {@link moveToLevelLogic} method to set the level.
     * If you want to implement own logic just override {@link moveToLevelLogic} with is also used for {@link moveToLevel}.
     */
    override moveToLevelWithOnOff({ level, transitionTime }: MoveToLevelWithOnOffRequest) {
        this.#assertLevelValue(level);

        return this.moveToLevelLogic(level, transitionTime, true);
    }

    /**
     * Default implementation of the moveToLevel logic. When a transition time is specified the implementation uses the
     * {@link stepLogic} to simulate the move. It also checks if the level is within the min and max level range and sets
     * the level accordingly. The method uses {@link setLevel} to set the level and handle the on/off state if the method
     * is called by a *WithOnOff command.
     *
     * @param level Level to set
     * @param transitionTime Transition time, ignored in this default implementation
     * @param withOnOff true if the method is called by a *WithOnOff command
     * @protected
     */
    protected moveToLevelLogic(level: number, transitionTime: number | null, withOnOff: boolean) {
        // Determine effective transition time
        const transitionTimeValue = transitionTime ?? this.state.onOffTransitionTime ?? null;

        // If we should move to the new level as fast as possible ...
        if (!this.state.simulateTransitionTimeHandling || transitionTimeValue === null || transitionTimeValue === 0) {
            this.setRemainingTime(0);
            return this.setLevel(level, withOnOff);
        }
        // Else calculate a rate by second and simulate the transition
        const effectiveRate = Math.floor(
            ((level - (this.state.currentLevel ?? this.minLevel)) / transitionTimeValue) * 10,
        );
        return this.#initiateTransitionSimulation(
            Math.abs(effectiveRate),
            effectiveRate < 0 ? LevelControl.StepMode.Down : LevelControl.StepMode.Up,
            withOnOff,
            level,
        );
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link moveLogic} method to set the level.
     * If you want to implement own logic just override {@link moveLogic} with is also used for {@link moveWithOnOff}.
     * The logic is implemented as follows: When no move rate is provided and also no default move rate is set, the
     * server will move as fast as possible, so we set to min/max directly. Else the step logic is applied and the
     * level is increased or decreased by the step size every second.
     */
    override move({ moveMode, rate, optionsMask, optionsOverride }: MoveRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }

        return this.moveLogic(moveMode, rate, false);
    }

    /**
     * Default implementation notes:
     * This implementation uses the {@link moveLogic} method to set the level.
     * If you want to implement own logic just override {@link moveLogic} with is also used for {@link move}.
     * The logic is implemented as follows: When no move rate is provided and also no default move rate is set, the
     * server will move as fast as possible, so we set to min/max directly. Else the step logic is applied and the
     * level is increased or decreased by the step size every second.
     */
    override moveWithOnOff({ moveMode, rate }: MoveWithOnOffRequest) {
        return this.moveLogic(moveMode, rate, true);
    }

    /**
     * Default implementation of the move logic. When no move rate is provided and also no default move rate is set, the
     * server will move as fast as possible, so it is set to min/max directly. Else the step logic is applied and the
     * level is increased or decreased by the step size every second. The method uses {@link setLevel} to set the level
     * and handle the on/off state if the method is called by a *WithOnOff command.
     *
     * @param moveMode Mode (Up/Down) of the move action
     * @param rate Rate of the move action, null if no rate is provided and the default should be used
     * @param withOnOff true if the method is called by a *WithOnOff command
     * @protected
     */
    protected moveLogic(moveMode: LevelControl.MoveMode, rate: number | null, withOnOff: boolean) {
        const effectiveRate = rate ?? this.state.defaultMoveRate ?? null;
        if (!this.state.simulateTransitionTimeHandling || effectiveRate === null) {
            // If no rate is requested and also no default rate is set, we should move as fast as possible, so we set
            // to min/max value directly
            const level = moveMode === LevelControl.MoveMode.Up ? this.maxLevel : this.minLevel;
            this.setRemainingTime(0);
            return this.setLevel(level, withOnOff);
        }
        return this.#initiateTransitionSimulation(
            effectiveRate,
            moveMode as unknown as LevelControl.StepMode,
            withOnOff,
        );
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link stepLogic} method to set the level.
     * If you want to implement own logic just override {@link stepLogic} with is also used for {@link stepWithOnOff}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set to min/max directly. Else the step logic is applied and the level is increased or decreased
     * by the step size every transition time interval.
     */
    override step({ stepMode, stepSize, transitionTime, optionsMask, optionsOverride }: StepRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return this.stepLogic(stepMode, stepSize, transitionTime, false);
    }

    /**
     * Default implementation notes:
     * This implementation uses the {@link stepLogic} method to set the level.
     * If you want to implement own logic just override {@link stepLogic} with is also used for {@link step}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set to min/max directly. Else the step logic is applied and the level is increased or decreased
     * by the step size every transition time interval.
     */
    override stepWithOnOff({ stepMode, stepSize, transitionTime }: StepWithOnOffRequest) {
        return this.stepLogic(stepMode, stepSize, transitionTime, true);
    }

    /**
     * Default implementation of the step logic. When no transition time is provided, the server will move as fast as
     * possible, so it is set to min/max directly. Else the level is increased or decreased by the step size every
     * second. The method uses {@link setLevel} to set the level and handle the on/off state if the method is called
     * by a *WithOnOff command. The remaining time is updated with every step.
     *
     * @param stepMode Mode (Up/Down) of the step action
     * @param stepSize Size of the step action
     * @param transitionTime Time of the step action in 10th of a second
     * @param withOnOff true if the method is called by a *WithOnOff command
     * @protected
     */
    protected stepLogic(
        stepMode: LevelControl.StepMode,
        stepSize: number,
        transitionTime: number | null,
        withOnOff: boolean,
    ) {
        if (!this.state.simulateTransitionTimeHandling || transitionTime === null || transitionTime === 0) {
            // If no transitionTime is requested we should move as fast as possible, so we set to min/max value directly
            this.setRemainingTime(0);
            return this.setLevel(stepMode === LevelControl.StepMode.Up ? this.maxLevel : this.minLevel, withOnOff);
        }
        const effectiveRate = Math.floor((stepSize / transitionTime) * 10);
        const currentLevel = this.state.currentLevel ?? this.minLevel;
        let targetLevel = stepMode === LevelControl.StepMode.Up ? currentLevel + stepSize : currentLevel - stepSize;
        if (targetLevel < this.minLevel) {
            targetLevel = this.minLevel;
        } else if (targetLevel > this.maxLevel) {
            targetLevel = this.maxLevel;
        }
        return this.#initiateTransitionSimulation(effectiveRate, stepMode, withOnOff, targetLevel);
    }

    override stop({ optionsMask, optionsOverride }: StopRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }

        return this.stopLogic();
    }

    override stopWithOnOff() {
        return this.stopLogic();
    }

    /**
     * Default implementation of the stop logic. This stops any level transitions currently appening and sets the
     * remaining time to 0.
     *
     * @protected
     */
    protected stopLogic(): MaybePromise<void> {
        if (this.internal.transitionIntervalTimer?.isRunning) {
            this.internal.transitionIntervalTimer.stop();
        }
        this.setRemainingTime(0);
    }

    /**
     * Method to set the remaining time attribute when Lighting feature is enabled.
     *
     * @param remainingTime Remaining time in 1/10th of a second
     * @protected
     */
    protected setRemainingTime(remainingTime: number) {
        if (!this.features.lighting) {
            return;
        }
        this.state.remainingTime = remainingTime;
    }

    /**
     * Default implementation of the logic to set the level including the handing of the on/off state when one of the
     * *WithOnOff commands is called. This implementation checks if the level is at the minLevel and the device is on,
     * it will turn off the device. If the level is above the minLevel and the device is off, it will turn on the device.
     *
     * @param level Level which is set by the command
     * @param withOnOff true if the method is called by a *WithOnOff command
     * @protected
     */
    protected setLevel(level: number, withOnOff: boolean) {
        const onOffServer =
            this.features.onOff && withOnOff && this.agent.has(OnOffServer) ? this.agent.get(OnOffServer) : undefined;

        if (onOffServer !== undefined && level === this.minLevel && onOffServer.state.onOff) {
            const offPromise = onOffServer.off();
            return MaybePromise.then(offPromise, () => {
                this.state.currentLevel = level;
            });
        }

        this.state.currentLevel = level;

        if (onOffServer !== undefined && level > this.minLevel && !onOffServer.state.onOff) {
            return onOffServer.on();
        }
    }

    #calculateEffectiveOptions(
        optionsMask: TypeFromPartialBitSchema<typeof LevelControl.Options>,
        optionsOverride: TypeFromPartialBitSchema<typeof LevelControl.Options>,
    ): TypeFromPartialBitSchema<typeof LevelControl.Options> {
        const options = this.state.options ?? {};
        return {
            executeIfOff: optionsMask.executeIfOff ? optionsOverride.executeIfOff : options.executeIfOff,
            coupleColorTempToLevel: optionsMask.coupleColorTempToLevel
                ? optionsOverride.coupleColorTempToLevel
                : options.coupleColorTempToLevel,
        };
    }

    #optionsAllowExecution(
        optionsMask: TypeFromPartialBitSchema<typeof LevelControl.Options>,
        optionsOverride: TypeFromPartialBitSchema<typeof LevelControl.Options>,
    ) {
        const options = this.#calculateEffectiveOptions(optionsMask, optionsOverride);
        return (
            options.executeIfOff ||
            !this.features.onOff ||
            !this.agent.has(OnOffServer) ||
            this.agent.get(OnOffServer).state.onOff
        );
    }

    #assertLevelValue(level: number) {
        if (level < this.minLevel) {
            throw new StatusResponseError(
                `The level value of ${level} is invalid. It must be greater or equal to ${this.minLevel}.`,
                StatusCode.ConstraintError,
            );
        }
        if (level > this.maxLevel) {
            throw new StatusResponseError(
                `The level value of ${level} is invalid. It must be less or equal to ${this.maxLevel}.`,
                StatusCode.ConstraintError,
            );
        }
    }

    /**
     * This is the default implementation of the required interaction with the OnOff cluster on the same endpoint when
     * the onOff feature is used.
     * This implementation just sets the current level to the onLevel value when the device is turned on. Other fading
     * up/down logic required by the {@link MatterSpecification.v12.Cluster} 1.6.4.1.1 needs to be implemented in a
     * specialized class if needed.
     *
     * @param onOff The new onOff state
     * @protected
     */
    protected handleOnOffChange(onOff: boolean) {
        if (!onOff || this.state.onLevel === null) {
            return;
        }
        this.state.currentLevel = this.state.onLevel;
    }

    #initiateTransitionSimulation(
        stepSize: number,
        stepMode: LevelControl.StepMode,
        withOnOff: boolean,
        targetLevel?: number,
    ) {
        if (this.internal.transitionIntervalTimer?.isRunning) {
            this.internal.transitionIntervalTimer.stop();
        }

        this.internal.currentTransitionData = {
            changeRate: stepSize * (stepMode === LevelControl.StepMode.Up ? 1 : -1),
            withOnOff,
            targetLevel,
        };
        logger.debug(`Starting transition interval with stepSize: ${stepSize}, stepMode: ${stepMode}.`);
        this.internal.transitionIntervalTimer = Time.getPeriodicTimer(
            "LevelControl.step/move",
            1000,
            this.callback(this.#stepIntervalTick),
        ).start();
        // Re-Set the current level as start level for the step interval to handle OnOff state changes
        return this.setLevel(this.state.currentLevel ?? this.minLevel, withOnOff);
    }

    async #stepIntervalTick() {
        if (!this.internal.currentTransitionData) {
            this.internal.transitionIntervalTimer?.stop();
            return;
        }
        const { changeRate, withOnOff, targetLevel } = this.internal.currentTransitionData;
        const newLevel = (this.state.currentLevel ?? this.minLevel) + changeRate;
        if (newLevel <= this.minLevel) {
            logger.debug(`Stopping transition interval at minLevel: ${this.minLevel}.`);
            await this.setLevel(this.minLevel, withOnOff);
            this.internal.transitionIntervalTimer?.stop();
            this.setRemainingTime(0);
        } else if (newLevel >= this.maxLevel) {
            logger.debug(`Stopping transition interval at maxLevel: ${this.maxLevel}.`);
            await this.setLevel(this.maxLevel, withOnOff);
            this.internal.transitionIntervalTimer?.stop();
            this.setRemainingTime(0);
        } else {
            // Check if we reached the targetLevel if there is one
            if (targetLevel !== undefined) {
                if (changeRate > 0 && newLevel >= targetLevel) {
                    logger.debug(`Stopping transition interval at targetLevel: ${targetLevel}.`);
                    await this.setLevel(targetLevel, withOnOff);
                    this.internal.transitionIntervalTimer?.stop();
                    this.setRemainingTime(0);
                    return;
                } else if (changeRate < 0 && newLevel <= targetLevel) {
                    logger.debug(`Stopping transition interval at targetLevel: ${targetLevel}.`);
                    await this.setLevel(targetLevel, withOnOff);
                    this.internal.transitionIntervalTimer?.stop();
                    this.setRemainingTime(0);
                    return;
                }
            }
            logger.debug(`Setting new level in transition interval: ${newLevel}.`);
            await this.setLevel(newLevel, withOnOff);

            // There is no definition on how often the remaining time should be updated, so we update it with every step
            if (this.internal.currentTransitionData.changeRate > 0) {
                this.setRemainingTime(Math.floor(Math.ceil((this.maxLevel - newLevel) / changeRate) * 10));
            } else {
                this.setRemainingTime(Math.floor(Math.ceil((newLevel - this.minLevel) / changeRate) * 10));
            }
        }
    }

    override async [Symbol.asyncDispose]() {
        if (this.internal.transitionIntervalTimer?.isRunning) {
            this.internal.transitionIntervalTimer.stop();
        }
        await super[Symbol.asyncDispose]?.();
    }
}

export namespace LevelControlServerLogic {
    export class Internal {
        /** Timer for the transition simulation. */
        transitionIntervalTimer?: Timer;

        /** Structure to store the data of the current transition simulation. */
        currentTransitionData?: {
            changeRate: number;
            withOnOff: boolean;
            targetLevel?: number;
        };
    }

    export class State extends LevelControlLogicBase.State {
        /**
         * The default implementation always set the target level immediately and so ignores all transition times
         * requested or configured.
         * Set this to true to simulate transition times by changing the level value step wise every second. This is in
         * most cases not the best way because hardware supporting levels usually have ways to specify the change rate
         * or target value and transition time.
         */
        simulateTransitionTimeHandling = false;
    }
}

// We had turned on some more features to provide da default implementation, but export the cluster with default
// Features again.
export class LevelControlServer extends LevelControlServerLogic.with(LevelControl.Feature.OnOff) {}
