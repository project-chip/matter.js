/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ColorControlServer } from "#behaviors/color-control";
import { GeneralDiagnosticsBehavior } from "#behaviors/general-diagnostics";
import { OnOffServer } from "#behaviors/on-off";
import { GeneralDiagnostics } from "#clusters/general-diagnostics";
import { LevelControl } from "#clusters/level-control";
import { RootEndpoint } from "#endpoints/root";
import { cropValueRange, Logger, MaybePromise, Time, Timer } from "#general";
import { StatusCode, StatusResponseError, TypeFromPartialBitSchema } from "#types";
import { LevelControlBehavior } from "./LevelControlBehavior.js";

const logger = Logger.get("LevelControlServer");

const LevelControlLogicBase = LevelControlBehavior.with(LevelControl.Feature.OnOff, LevelControl.Feature.Lighting);

/**
 * This is the default server implementation of {@link LevelControlBehavior}.
 *
 * This implementation includes all features of {@link LevelControl.Cluster} and implements all mandatory commands. The
 * On-Off Feature is automatically turned on as defined by the matter specification.
 * You should use {@link LevelControlServer.with} to specialize the class for the features your implementation supports.
 *
 * This default implementation also handles the OnOff cluster dependency and the ColorControl dependency as defined by
 * the Matter specification automatically.
 *
 * This implementation ignores by default all transition times and sets the level immediately. Alternatively, you can
 * set the `managedTransitionTimeHandling` state attribute to true to have matter.js manage transition times by
 * changing the level value step-wise every second. This might be an intermediate solution if you develop
 * independently of defined hardware.
 *
 * If you develop for a specific hardware you should extend the {@link LevelControlServer} class and implement the
 * following methods to natively use device features to correctly support the transition times. For this the default
 * implementation uses special protected methods which are used by the real commands and are only responsible for the
 * actual value change logic. The benefit of this structure is that basic data validations and options checks are
 * already done, and you can focus on the actual hardware interaction:
 * * {@link LevelControlServerLogic.moveToLevelLogic} Logic to move the value to a defined level with a transition time
 * * {@link LevelControlServerLogic.moveLogic} Logic to move the value up or down with a defined rate
 * * {@link LevelControlServerLogic.stepLogic} Logic to step the value up or down with a defined step size and transition
 * * {@link LevelControlServerLogic.stopLogic} Logic to stop any currently running transitions
 * * {@link LevelControlServerLogic.handleOnOffChange} Logic to handle dimming to onLevel when device got turned on by connected OnOff cluster
 *
 * If you add own implementation you can use:
 * * {@link LevelControlServerLogic.setLevel} to set the level attribute including automatic handling of the onoff dependency
 * * {@link LevelControlServerLogic.setRemainingTime} to set the remaining time attribute when Lighting feature is enabled
 *
 * All overridable methods except setRemainingTime can be implemented sync or async by returning a Promise.
 */
export class LevelControlServerLogic extends LevelControlLogicBase {
    declare protected internal: LevelControlServerLogic.Internal;
    declare state: LevelControlServerLogic.State;

    /** Returns the minimum level, including feature specific fallback value handling. */
    get minLevel() {
        return this.state.minLevel ?? (this.features.lighting ? 1 : 0);
    }

    /** Returns the maximum level, including feature specific fallback value handling. */
    get maxLevel() {
        return this.state.maxLevel ?? 0xfe;
    }

    /**
     * The current level value as number.
     * Throws an StatusResponse Error when null!
     */
    get currentLevel(): number {
        if (this.state.currentLevel === null) {
            throw new StatusResponseError(
                "The currentLevel value is null, so we cannot operate on it.",
                StatusCode.Failure,
            );
        }
        return this.state.currentLevel;
    }

    override initialize() {
        if (this.state.managedTransitionTimeHandling) {
            this.internal.transitionIntervalTimer = Time.getPeriodicTimer(
                "LevelControl.step/move",
                1000,
                this.callback(this.#stepIntervalTick, { lock: true }),
            );
        }

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

            if (this.#getBootReason() !== GeneralDiagnostics.BootReason.SoftwareUpdateCompleted) {
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
        }

        if (this.features.onOff && this.agent.has(OnOffServer)) {
            this.reactTo(this.agent.get(OnOffServer).events.onOff$Changed, this.handleOnOffChange);
        }
    }

    /**
     * Default implementation notes:
     * This method ignores the transition time provided by the command or settings and just sets the level to the
     * requested value. After the options and value checks it uses the {@link moveToLevelLogic} method to set the level.
     * If you want to implement own logic just override {@link moveToLevelLogic} with is also used for {@link moveToLevelWithOnOff}.
     */
    override moveToLevel({ level, transitionTime, optionsMask, optionsOverride }: LevelControl.MoveToLevelRequest) {
        const effectiveOptions = this.#calculateEffectiveOptions(optionsMask, optionsOverride);
        if (!this.#optionsAllowExecution(effectiveOptions)) {
            return;
        }

        this.#assertLevelValue(level);

        return this.moveToLevelLogic(level, transitionTime, false, effectiveOptions);
    }

    /**
     * Default implementation notes:
     * This method ignores the transition time provided by the command or settings and just sets the level to the
     * requested value. After the options and value checks it uses the {@link moveToLevelLogic} method to set the level.
     * If you want to implement own logic just override {@link moveToLevelLogic} with is also used for {@link moveToLevel}.
     */
    override moveToLevelWithOnOff({ level, transitionTime }: LevelControl.MoveToLevelRequest) {
        this.#assertLevelValue(level);

        return this.moveToLevelLogic(level, transitionTime, true);
    }

    /**
     * Default implementation of the moveToLevel logic. When a transition time is specified the implementation uses a
     * step based logic to manage the move. It also checks if the level is within the min and max level range and sets
     * the level accordingly. The method uses {@link setLevel} to set the level and handle the on/off state if the method
     * is called by a *WithOnOff command.
     *
     * @param level Level to set
     * @param transitionTime Transition time, ignored in this default implementation
     * @param withOnOff true if the method is called by a *WithOnOff command
     * @param options Options for the command
     * @protected
     */
    protected moveToLevelLogic(
        level: number,
        transitionTime: number | null,
        withOnOff: boolean,
        options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {},
    ) {
        // Determine effective transition time
        const transitionTimeValue = transitionTime ?? this.state.onOffTransitionTime ?? null;

        // Adjust target level
        level = cropValueRange(level, this.minLevel, this.maxLevel);

        // If we should move to the new level as fast as possible ...
        if (
            !this.state.managedTransitionTimeHandling ||
            transitionTimeValue === null ||
            transitionTimeValue === 0 ||
            this.currentLevel === level
        ) {
            this.setRemainingTime(0);
            return this.setLevel(level, withOnOff, options);
        }

        // Else calculate a rate by second and manage the transition
        const effectiveRate = Math.ceil(((level - this.currentLevel) / transitionTimeValue) * 10);
        return this.#initiateTransition(effectiveRate, withOnOff, level, options);
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link moveLogic} method to set the level.
     * If you want to implement own logic just override {@link moveLogic} with is also used for {@link moveWithOnOff}.
     * The logic is implemented as follows: When no move rate is provided and also no default move rate is set, the
     * server will move as fast as possible, so we set to min/max directly. Else the step logic is applied and the
     * level is increased or decreased by the step size every second.
     */
    override move({ moveMode, rate, optionsMask, optionsOverride }: LevelControl.MoveRequest) {
        const effectiveOptions = this.#calculateEffectiveOptions(optionsMask, optionsOverride);
        if (!this.#optionsAllowExecution(effectiveOptions)) {
            return;
        }

        return this.moveLogic(moveMode, rate, false, effectiveOptions);
    }

    /**
     * Default implementation notes:
     * This implementation uses the {@link moveLogic} method to set the level.
     * If you want to implement own logic just override {@link moveLogic} with is also used for {@link move}.
     * The logic is implemented as follows: When no move rate is provided and also no default move rate is set, the
     * server will move as fast as possible, so we set to min/max directly. Else the step logic is applied and the
     * level is increased or decreased by the step size every second.
     */
    override moveWithOnOff({ moveMode, rate }: LevelControl.MoveRequest) {
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
     * @param options Options for the command
     * @protected
     */
    protected moveLogic(
        moveMode: LevelControl.MoveMode,
        rate: number | null,
        withOnOff: boolean,
        options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {},
    ) {
        if (rate === 0) {
            throw new StatusResponseError(`Illegal move rate of 0`, StatusCode.InvalidCommand);
        }

        const effectiveRate = rate ?? this.state.defaultMoveRate ?? null;
        if (!this.state.managedTransitionTimeHandling || effectiveRate === null || effectiveRate === 0) {
            // If null rate is requested and also no default rate is set, we should move as fast as possible, so we set
            // to min/max value directly. If effectiveRate is 0 then defaultMoveRate is and we just ignore the command.
            const level =
                effectiveRate === 0
                    ? this.currentLevel
                    : moveMode === LevelControl.MoveMode.Up
                      ? this.maxLevel
                      : this.minLevel;
            this.setRemainingTime(0);
            return this.setLevel(level, withOnOff, options);
        }
        return this.#initiateTransition(
            effectiveRate * (moveMode === LevelControl.MoveMode.Up ? 1 : -1),
            withOnOff,
            undefined,
            options,
        );
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link stepLogic} method to set the level.
     * If you want to implement own logic just override {@link stepLogic} with is also used for {@link stepWithOnOff}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set to currentlevel +/- stepSize directly. Else the step logic is applied and the level is
     * increased or decreased by the step size every transition time interval.
     */
    override step({ stepMode, stepSize, transitionTime, optionsMask, optionsOverride }: LevelControl.StepRequest) {
        const effectiveOptions = this.#calculateEffectiveOptions(optionsMask, optionsOverride);
        if (!this.#optionsAllowExecution(effectiveOptions)) {
            return;
        }
        return this.stepLogic(stepMode, stepSize, transitionTime, false, effectiveOptions);
    }

    /**
     * Default implementation notes:
     * This implementation uses the {@link stepLogic} method to set the level.
     * If you want to implement own logic just override {@link stepLogic} with is also used for {@link step}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set to min/max directly. Else the step logic is applied and the level is increased or decreased
     * by the step size every transition time interval.
     */
    override stepWithOnOff({ stepMode, stepSize, transitionTime }: LevelControl.StepRequest) {
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
     * @param options Options for the command
     * @protected
     */
    protected stepLogic(
        stepMode: LevelControl.StepMode,
        stepSize: number,
        transitionTime: number | null,
        withOnOff: boolean,
        options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {},
    ) {
        const targetLevel = cropValueRange(
            stepMode === LevelControl.StepMode.Up ? this.currentLevel + stepSize : this.currentLevel - stepSize,
            this.minLevel,
            this.maxLevel,
        );

        if (!this.state.managedTransitionTimeHandling || transitionTime === null || transitionTime === 0) {
            // If null/0 transitionTime is requested we should move as fast as possible, so we set to min/max value directly
            this.setRemainingTime(0);
            return this.setLevel(targetLevel, withOnOff, options);
        }

        const effectiveRate =
            Math.ceil((stepSize / transitionTime) * 10) * (stepMode === LevelControl.StepMode.Up ? 1 : -1);

        return this.#initiateTransition(effectiveRate, withOnOff, targetLevel, options);
    }

    override stop({ optionsMask, optionsOverride }: LevelControl.StopRequest) {
        const effectiveOptions = this.#calculateEffectiveOptions(optionsMask, optionsOverride);
        if (!this.#optionsAllowExecution(effectiveOptions)) {
            return;
        }

        return this.stopLogic(effectiveOptions);
    }

    override stopWithOnOff(request: LevelControl.StopRequest) {
        return this.stop(request);
    }

    /**
     * Default implementation of the stop logic. This stops any level transitions currently appening and sets the
     * remaining time to 0.
     *
     * @protected
     */
    protected stopLogic(_options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {}): MaybePromise<void> {
        this.internal.transitionIntervalTimer?.stop();
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
     * @param options Options for the command
     * @protected
     */
    protected setLevel(
        level: number,
        withOnOff: boolean,
        options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {},
    ): MaybePromise<void> {
        const onOffServer =
            this.features.onOff && withOnOff && this.agent.has(OnOffServer) ? this.agent.get(OnOffServer) : undefined;

        if (onOffServer !== undefined && level === this.minLevel && onOffServer.state.onOff) {
            const offPromise = onOffServer.off();
            return MaybePromise.then(offPromise, () => {
                this.state.currentLevel = level;
            });
        }

        this.state.currentLevel = level;

        let colorSyncResult;
        // Sync color temperature with level if the feature is enabled and the option is set
        if (this.features.lighting && options.coupleColorTempToLevel && this.agent.has(ColorControlServer)) {
            colorSyncResult = this.agent.get(ColorControlServer).syncColorTemperatureWithLevel(level);
        }

        if (onOffServer !== undefined && level > this.minLevel && !onOffServer.state.onOff) {
            return MaybePromise.then(colorSyncResult, () => onOffServer.on());
        } else {
            return colorSyncResult;
        }
    }

    #calculateEffectiveOptions(
        optionsMask: TypeFromPartialBitSchema<typeof LevelControl.Options>,
        optionsOverride: TypeFromPartialBitSchema<typeof LevelControl.Options>,
    ): TypeFromPartialBitSchema<typeof LevelControl.Options> {
        const options = this.state.options ?? {};
        return {
            executeIfOff: optionsMask.executeIfOff ? optionsOverride.executeIfOff : options.executeIfOff,
            coupleColorTempToLevel: this.features.lighting
                ? optionsMask.coupleColorTempToLevel
                    ? optionsOverride.coupleColorTempToLevel
                    : options.coupleColorTempToLevel
                : false,
        };
    }

    #optionsAllowExecution(options: TypeFromPartialBitSchema<typeof LevelControl.Options>) {
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
     * up/down logic required by the {@link MatterSpecification.v12.Cluster} §1.6.4.1.1 needs to be implemented in a
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

    #initiateTransition(
        stepSize: number,
        withOnOff: boolean,
        targetLevel?: number,
        options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {},
    ) {
        this.internal.transitionIntervalTimer?.stop();

        this.internal.currentTransitionData = {
            changeRate: stepSize,
            withOnOff,
            targetLevel,
            options,
        };
        logger.debug(`Starting transition interval with changeRate: ${this.internal.currentTransitionData.changeRate}`);
        this.internal.transitionIntervalTimer?.start();
        // Re-Set the current level as start level for the step interval to handle OnOff state changes
        return this.setLevel(this.currentLevel, withOnOff, options);
    }

    async #stepIntervalTick() {
        if (this.internal.currentTransitionData === undefined || this.state.currentLevel === null) {
            this.internal.transitionIntervalTimer?.stop();
            return;
        }
        const { changeRate, withOnOff, targetLevel, options } = this.internal.currentTransitionData;
        const newLevel = this.state.currentLevel + changeRate;
        if (newLevel <= this.minLevel) {
            logger.debug(`Stopping transition interval at minLevel: ${this.minLevel}.`);
            await this.setLevel(this.minLevel, withOnOff, options);
            this.internal.transitionIntervalTimer?.stop();
            this.setRemainingTime(0);
        } else if (newLevel >= this.maxLevel) {
            logger.debug(`Stopping transition interval at maxLevel: ${this.maxLevel}.`);
            await this.setLevel(this.maxLevel, withOnOff, options);
            this.internal.transitionIntervalTimer?.stop();
            this.setRemainingTime(0);
        } else {
            // Check if we reached the targetLevel if there is one
            if (targetLevel !== undefined) {
                if (changeRate > 0 && newLevel >= targetLevel) {
                    logger.debug(`Stopping transition interval at targetLevel: ${targetLevel}.`);
                    await this.setLevel(targetLevel, withOnOff, options);
                    this.internal.transitionIntervalTimer?.stop();
                    this.setRemainingTime(0);
                    return;
                } else if (changeRate < 0 && newLevel <= targetLevel) {
                    logger.debug(`Stopping transition interval at targetLevel: ${targetLevel}.`);
                    await this.setLevel(targetLevel, withOnOff, options);
                    this.internal.transitionIntervalTimer?.stop();
                    this.setRemainingTime(0);
                    return;
                }
            }
            logger.debug(`Setting new level in transition interval: ${newLevel}.`);
            await this.setLevel(newLevel, withOnOff, options);

            // There is no definition on how often the remaining time should be updated, so we update it with every step
            if (changeRate > 0) {
                this.setRemainingTime(
                    Math.floor(Math.ceil(((targetLevel ?? this.maxLevel) - newLevel) / changeRate) * 10),
                );
            } else {
                this.setRemainingTime(
                    Math.floor(Math.ceil((newLevel - (targetLevel ?? this.minLevel)) / -changeRate) * 10),
                );
            }
        }
    }

    #getBootReason() {
        const rootEndpoint = this.endpoint.ownerOfType(RootEndpoint);
        if (rootEndpoint !== undefined && rootEndpoint.behaviors.has(GeneralDiagnosticsBehavior)) {
            return rootEndpoint.stateOf(GeneralDiagnosticsBehavior).bootReason;
        }
    }

    override async [Symbol.asyncDispose]() {
        this.internal.transitionIntervalTimer?.stop();
        await super[Symbol.asyncDispose]?.();
    }
}

export namespace LevelControlServerLogic {
    export class Internal {
        /** Timer for the managed transition */
        transitionIntervalTimer?: Timer;

        /** Structure to store the data of the current managed transition */
        currentTransitionData?: {
            changeRate: number;
            withOnOff: boolean;
            targetLevel?: number;
            options?: TypeFromPartialBitSchema<typeof LevelControl.Options>;
        };
    }

    export class State extends LevelControlLogicBase.State {
        /**
         * The default implementation always set the target level immediately and so ignores all transition times
         * requested or configured.
         * Set this to true to manage transition times by changing the level value step wise every second. This is in
         * most cases not the best way because hardware supporting levels usually have ways to specify the change rate
         * or target value and transition time.
         */
        managedTransitionTimeHandling = false;
    }

    export declare const ExtensionInterface: {
        moveToLevelLogic(
            level: number,
            transitionTime: number | null,
            withOnOff: boolean,
            options: TypeFromPartialBitSchema<typeof LevelControl.Options>,
        ): MaybePromise<void>;
        moveLogic(
            moveMode: LevelControl.MoveMode,
            rate: number | null,
            withOnOff: boolean,
            options: TypeFromPartialBitSchema<typeof LevelControl.Options>,
        ): MaybePromise<void>;
        stepLogic(
            stepMode: LevelControl.StepMode,
            stepSize: number,
            transitionTime: number | null,
            withOnOff: boolean,
            options: TypeFromPartialBitSchema<typeof LevelControl.Options>,
        ): MaybePromise<void>;
        stopLogic(options: TypeFromPartialBitSchema<typeof LevelControl.Options>): MaybePromise<void>;
        setLevel(
            level: number,
            withOnOff: boolean,
            options: TypeFromPartialBitSchema<typeof LevelControl.Options>,
        ): MaybePromise<void>;
        setRemainingTime(remainingTime: number): void;
        handleOnOffChange(onOff: boolean): void;
    };
}

// We had turned on some more features to provide da default implementation, but export the cluster with default
// Features again.
export class LevelControlServer extends LevelControlServerLogic.with(LevelControl.Feature.OnOff) {}
