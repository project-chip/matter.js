/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneralDiagnosticsBehavior } from "#behaviors/general-diagnostics";
import { OnOffServer } from "#behaviors/on-off";
import { ColorControl } from "#clusters/color-control";
import { GeneralDiagnostics } from "#clusters/general-diagnostics";
import { RootEndpoint } from "#endpoints/root";
import { addValueWithOverflow, cropValueRange, ImplementationError, Logger, MaybePromise, Time, Timer } from "#general";
import { ClusterType, StatusCode, StatusResponseError, TypeFromPartialBitSchema } from "#types";
import { ColorControlBehavior } from "./ColorControlBehavior.js";
import {
    hsvToMireds,
    hsvToXy,
    kelvinToMireds,
    miredsToHsv,
    miredsToKelvin,
    miredsToXy,
    xyToMireds,
} from "./ColorConversionUtils.js";

const logger = Logger.get("ColorControlServer");

const ColorControlServerBase = ColorControlBehavior.with(
    ColorControl.Feature.HueSaturation,
    ColorControl.Feature.EnhancedHue,
    ColorControl.Feature.ColorLoop,
    ColorControl.Feature.Xy,
    ColorControl.Feature.ColorTemperature,
);

type ManagedTransitionType = "hue" | "enhancedHue" | "saturation" | "colorTemperature" | "x" | "y";

const MIN_CIE_XY_VALUE = 0;
const MAX_CIE_XY_VALUE = 0xfeff; // this value comes directly from the ZCL specification table 5.3

const MIN_TEMPERATURE_VALUE = 0;
const MAX_TEMPERATURE_VALUE = 0xfeff;

const MIN_HUE_VALUE = 0;
const MAX_HUE_VALUE = 0xfe;
const MAX_ENHANCED_HUE_VALUE = 0xffff;

const MIN_SATURATION_VALUE = 0;
const MAX_SATURATION_VALUE = 0xfe;

const MIN_CURRENT_LEVEL = 0x01;
const MAX_CURRENT_LEVEL = 0xfe;

/**
 * This is the default server implementation of {@link ColorControlBehavior}.
 *
 * This implementation includes all features of {@link ColorControl.Cluster} and implements all mandatory commands. You
 * should use {@link ColorControlServer.with} to specialize the class for the features your implementation supports.
 *
 * This default implementation also handles together with the LevelControl cluster the currentLevel dependency as
 * defined by the Matter specification automatically.
 *
 * This implementation ignores by default all transition times and sets the new color immediately. Alternatively, you
 * can set the `managedTransitionTimeHandling` state attribute to true to have matter.js manage transition times by
 * changing the level value step-wise every second. This might be an intermediate solution if you develop independently
 * of defined hardware.
 *
 * If you develop for a specific hardware you should extend the {@link ColorControlServer} class and implement the
 * following methods to natively use device features to correctly support the transition times. For this the default
 * implementation uses special protected methods which are used by the real commands and are only responsible for the
 * actual value change logic. The benefit of this structure is that basic data validations and options checks are
 * already done and you can focus on the actual hardware interaction:
 *
 * * {@link ColorControlServerLogic.moveToHueLogic} Logic to move the hue to a defined value in a defined time
 * * {@link ColorControlServerLogic.moveHueLogic} Logic to move the hue by a defined rate/second
 * * {@link ColorControlServerLogic.stepHueLogic} Logic to move the hue one defined step in a defined time
 * * {@link ColorControlServerLogic.moveToSaturationLogic} Logic to move the saturation to a defined value in a defined
 *   time
 * * {@link ColorControlServerLogic.moveSaturationLogic} Logic to move the saturation by a defined rate/second
 * * {@link ColorControlServerLogic.stepSaturationLogic} Logic to move the saturation one defined step in a defined time
 * * {@link ColorControlServerLogic.moveToHueAndSaturationLogic} Logic to move the hue and saturation to a defined value
 *   in a defined time
 * * {@link ColorControlServerLogic.moveToColorLogic} Logic to move the x/y color to a defined value in a defined time
 * * {@link ColorControlServerLogic.moveColorLogic} Logic to move the x/y color by a defined rate/second
 * * {@link ColorControlServerLogic.stepColorLogic} Logic to move the x/y color one defined step in a defined time
 * * {@link ColorControlServerLogic.moveToColorTemperatureLogic} Logic to move the color temperature to a defined value
 *   in a defined time
 * * {@link ColorControlServerLogic.moveToEnhancedHueAndSaturationLogic} Logic to move the enhanced hue and saturation
 *   to a defined value in a defined time
 * * {@link ColorControlServerLogic.moveColorTemperatureLogic} Logic to move the color temperature by a defined
 *   rate/second
 * * {@link ColorControlServerLogic.stepColorTemperatureLogic} Logic to move the color temperature one defined step in a
 *   defined time
 * * {@link ColorControlServerLogic.stopHueAndSaturationMovement} Logic to stop any hue and saturation movements
 * * {@link ColorControlServerLogic.stopAllColorMovement} Logic to stop any color movements
 * * {@link ColorControlServerLogic.startColorLoopLogic} Logic to start the color loop (looping enhanced hue endlessly)
 * * {@link ColorControlServerLogic.stopColorLoopLogic} Logic to stop the color loop
 * * {@link ColorControlServerLogic.stopMoveStepLogic} Logic to stop all movements beside color loops
 * * {@link ColorControlServerLogic.switchColorMode} Logic to switch the color mode and to set the current attributes of
 *   the new mode
 *
 * All overridable methods can be implemented sync or async by returning a Promise.
 *
 * For own implementations you can use:
 *
 * * {@link ColorControlServerLogic#setColorMode} to set the color mode
 * * {@link ColorControlServerLogic#setEnhancedColorMode} to set the enhanced color mode
 *
 * The default implementation of {@link ColorControlServerLogic.switchColorMode} tries to convert the color values
 * between the different modi. When switching from color temperature mode to any other mode the value can be converted
 * when the color temperature was between 1000K and 20.000K. For other values no conversion takes place.
 *
 * The method {@link ColorControlServerLogic.syncColorTemperatureWithLevelLogic} is handling the sync between the
 * LevelControl and ColorControl cluster when the color temperature is used.
 *
 * Additionally there are some convenience properties to access the current attribute values for all relevant color
 * attributes (x,y, hue, saturation, mireds/kelvin, colorTemperatur, ...) in their CIE value format instead the matter
 * data ranges.
 */
export class ColorControlServerLogic extends ColorControlServerBase {
    declare protected internal: ColorControlServerLogic.Internal;
    declare state: ColorControlServerLogic.State;

    /*
     * The following block contains some convenience methods to allow to easily work with the CIE color space values
     * as usual and hide the matter specific data model.
     */

    /** Returns the current X value as decimal number according to CIE in the range 0..1. */
    get x() {
        return this.#returnAsXyValue(this.state.currentX);
    }

    /**
     * Sets the current X value as decimal number according to CIE in the range 0..1 and converts into Matter number
     * range.
     */
    set x(value: number) {
        this.#setFromXyValue("currentX", value);
    }

    /** Returns the current Y value as decimal number according to CIE in the range 0..1. */
    get y() {
        return this.#returnAsXyValue(this.state.currentY);
    }

    /**
     * Sets the current Y value as decimal number according to CIE in the range 0..1 and converts into Matter number
     * range.
     */
    set y(value: number) {
        this.#setFromXyValue("currentY", value);
    }

    /**
     * Returns the current hue value as decimal number in the range 0..360.
     */
    get hue() {
        return (this.state.currentHue * 360) / 254;
    }

    /**
     * Sets the current hue value as decimal number in the range 0..360 and converts into Matter number range.
     */
    set hue(value: number) {
        this.state.currentHue = cropValueRange(Math.round((value * 254) / 360), MIN_HUE_VALUE, MAX_HUE_VALUE);
    }

    /** Returns the current enhanced hue value as decimal number in the range 0..0xFFFF. */
    get enhancedHue() {
        return this.state.enhancedCurrentHue;
    }

    /**
     * Sets the current enhanced hue value as decimal number in the range 0..0xFFFF and converts into Matter number range.
     */
    set enhancedHue(value: number) {
        this.state.enhancedCurrentHue = cropValueRange(value, MIN_HUE_VALUE, MAX_ENHANCED_HUE_VALUE);
    }

    /** Returns the current saturation value as decimal number in the range 0..1. */
    get saturation() {
        return this.state.currentSaturation / 254;
    }

    /**
     * Sets the current saturation value as decimal number in the range 0..1 and converts into Matter number range.
     */
    set saturation(value: number) {
        this.state.currentSaturation = cropValueRange(
            Math.round(value * 254),
            MIN_SATURATION_VALUE,
            MAX_SATURATION_VALUE,
        );
    }

    /** Returns the current color temperature value in Mireds (0..0xFFFF). */
    get mireds() {
        return this.state.colorTemperatureMireds;
    }

    /**
     * Sets the current color temperature value in Mireds (0..0xFFFF) and converts into Matter number range.
     */
    set mireds(value: number) {
        this.state.colorTemperatureMireds = cropValueRange(
            value,
            this.minimumColorTemperatureMireds,
            this.maximumColorTemperatureMireds,
        );
    }

    /** Returns the current color temperature value in Kelvin (from internal Mireds). */
    get kelvin() {
        return miredsToKelvin(this.mireds);
    }

    /** Sets the current color temperature value in Kelvin and updates the internal mireds value. */
    set kelvin(value: number) {
        this.mireds = kelvinToMireds(value);
    }

    /**
     * Returns the minimum color temperature value in Mireds (0..0xFFFF). This automatically handled the case that no
     * physical minimum value is defined.
     */
    get minimumColorTemperatureMireds() {
        return this.state.colorTempPhysicalMinMireds === 0
            ? MIN_TEMPERATURE_VALUE
            : this.state.colorTempPhysicalMinMireds;
    }

    /**
     * Returns the maximum color temperature value in Mireds (0..0xFFFF). This automatically handled the case that no
     * physical maximum value is defined.
     */
    get maximumColorTemperatureMireds() {
        return this.state.colorTempPhysicalMaxMireds === 0
            ? MAX_TEMPERATURE_VALUE
            : this.state.colorTempPhysicalMaxMireds;
    }

    /** Returns the current whitePoint X value as decimal number according to CIE in the range 0..1. */
    get whitePointX() {
        return this.#returnAsOptionalXyValue(this.state.whitePointX);
    }

    /**
     * Sets the current whitePoint X value as decimal number according to CIE in the range 0..1 and converts into Matter
     * number range.
     */
    set whitePointX(value: number | undefined) {
        this.#setFromXyValue("whitePointX", value);
    }

    /** Returns the current whitePoint Y value as decimal number according to CIE in the range 0..1. */
    get whitePointY() {
        return this.#returnAsOptionalXyValue(this.state.whitePointY);
    }

    /**
     * Sets the current whitePoint Y value as decimal number according to CIE in the range 0..1 and converts into Matter
     * number range.
     */
    set whitePointY(value: number | undefined) {
        this.#setFromXyValue("whitePointY", value);
    }

    /** Returns the current colorPoint Rx value as decimal number according to CIE in the range 0..1. */
    get colorPointRx() {
        return this.#returnAsOptionalXyValue(this.state.colorPointRx);
    }

    /**
     * Sets the current colorPoint Rx value as decimal number according to CIE in the range 0..1 and converts into Matter
     * number range.
     */
    set colorPointRx(value: number | undefined) {
        this.#setFromXyValue("colorPointRx", value);
    }

    /** Returns the current colorPoint Ry value as decimal number according to CIE in the range 0..1. */
    get colorPointRy() {
        return this.#returnAsOptionalXyValue(this.state.colorPointRy);
    }

    /**
     * Sets the current colorPoint Ry value as decimal number according to CIE in the range 0..1 and converts into Matter
     * number range.
     */
    set colorPointRy(value: number | undefined) {
        this.#setFromXyValue("colorPointRy", value);
    }

    /** Returns the current colorPoint Gx value as decimal number according to CIE in the range 0..1. */
    get colorPointGx() {
        return this.#returnAsOptionalXyValue(this.state.colorPointGx);
    }

    /**
     * Sets the current colorPoint Gx value as decimal number according to CIE in the range 0..1 and converts into Matter
     * number range.
     */
    set colorPointGx(value: number | undefined) {
        this.#setFromXyValue("colorPointGx", value);
    }

    /** Returns the current colorPoint Gy value as decimal number according to CIE in the range 0..1. */
    get colorPointGy() {
        return this.#returnAsOptionalXyValue(this.state.colorPointGy);
    }

    /**
     * Sets the current colorPoint Gy value as decimal number according to CIE in the range 0..1 and converts into Matter
     * number range.
     */
    set colorPointGy(value: number | undefined) {
        this.#setFromXyValue("colorPointGy", value);
    }

    /** Returns the current colorPoint Bx value as decimal number according to CIE in the range 0..1. */
    get colorPointBx() {
        return this.#returnAsOptionalXyValue(this.state.colorPointBx);
    }

    /**
     * Sets the current colorPoint Bx value as decimal number according to CIE in the range 0..1 and converts into Matter
     * number range.
     */
    set colorPointBx(value: number | undefined) {
        this.#setFromXyValue("colorPointBx", value);
    }

    override initialize() {
        this.#initializeManagedTransitionTimers();

        // Sync the colorCapabilities with the features for convenience
        this.state.colorCapabilities = this.features;

        // Handle startup color Temperature when the color Temperature feature is supported
        if (
            this.features.colorTemperature &&
            this.#getBootReason() !== GeneralDiagnostics.BootReason.SoftwareUpdateCompleted
        ) {
            const startUpMiredsValue = this.state.startUpColorTemperatureMireds ?? null;
            const currentMiredsValue = this.state.colorTemperatureMireds;
            let targetMiredsValue: number | null;
            switch (startUpMiredsValue) {
                case null:
                    targetMiredsValue = currentMiredsValue;
                    break;
                default:
                    targetMiredsValue = startUpMiredsValue;
                    break;
            }
            if (targetMiredsValue !== currentMiredsValue) {
                this.state.colorMode = ColorControl.ColorMode.ColorTemperatureMireds;
                this.state.enhancedColorMode = ColorControl.EnhancedColorMode.ColorTemperatureMireds;
                this.state.colorTemperatureMireds = targetMiredsValue;
            }
        }
    }

    /**
     * Default implementation notes:
     * This method ignores the transition time provided by the command and just sets the hue value to the
     * requested value. After the options and value checks and the potential color mode switch it uses the
     * {@link moveToHueLogic} method to set the hue. If you want to implement own logic just override
     * {@link moveToHueLogic} with is also used for {@link enhancedMoveToHue}, {@link moveToHueAndSaturation} and
     * {@link enhancedMoveToHueAndSaturation}.
     */
    override moveToHue({
        optionsMask,
        optionsOverride,
        hue,
        direction,
        transitionTime,
    }: ColorControl.MoveToHueRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(this.setColorMode(ColorControl.ColorMode.CurrentHueAndCurrentSaturation), () =>
            this.moveToHueLogic(hue, direction, transitionTime),
        );
    }

    /**
     * Default implementation of the moveToHue logic. When a transition time is specified the implementation uses a
     * step based to manage the move. The method handled hue and enhanced-Hue changes depending on the last parameter.
     *
     * @param targetHue The target hue value to move to (in range of the matter hue or enhanced hue ranges)
     * @param direction The direction to move to the target hue
     * @param transitionTime The time in seconds to move to the target hue. 0 means "as fast as possible"
     * @param isEnhancedHue If true the enhanced hue is handled, otherwise the normal hue
     * @protected
     */
    protected moveToHueLogic(
        targetHue: number,
        direction: ColorControl.Direction,
        transitionTime: number,
        isEnhancedHue = false,
    ): MaybePromise {
        if (!this.state.managedTransitionTimeHandling || transitionTime === 0) {
            this.internal.stopHueTransition();
            if (isEnhancedHue) {
                this.state.enhancedCurrentHue = targetHue;
            } else {
                this.state.currentHue = targetHue;
            }
            this.state.remainingTime = 0;
            return;
        }

        const currentHue = isEnhancedHue ? this.state.enhancedCurrentHue : this.state.currentHue;
        const maxHue = isEnhancedHue ? MAX_ENHANCED_HUE_VALUE : MAX_HUE_VALUE;

        const effectiveRate = Math.ceil(
            (this.#getHueDistanceByDirection(currentHue, targetHue, direction, maxHue) / transitionTime) * 10,
        );
        this.#initiateTransition(
            isEnhancedHue ? "enhancedHue" : "hue",
            effectiveRate,
            MIN_HUE_VALUE,
            maxHue,
            targetHue,
        );
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link moveHueLogic} method to set the hue.
     * If you want to implement own logic just override {@link moveHueLogic} with is also used for {@link enhancedMoveHue}.
     * If a currently running movement should be stopped {@link stopHueAndSaturationMovement} is used which can also be
     * overridden.
     * The logic is implemented as follows: Depending on the provided rate the server will move as fast as possible, but
     * increase only one rate directly if the managed transition is not used. Else the step logic is applied and the
     * level is increased or decreased by the step size every second.
     */
    override moveHue({ optionsMask, optionsOverride, moveMode, rate }: ColorControl.MoveHueRequest) {
        this.#assertRate(moveMode, rate);
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(this.setColorMode(ColorControl.ColorMode.CurrentHueAndCurrentSaturation), () => {
            if (moveMode === ColorControl.MoveMode.Stop) {
                return this.stopHueAndSaturationMovement();
            }

            return this.moveHueLogic(moveMode, rate);
        });
    }

    /**
     * Default implementation of the moveHue logic. The method handled hue and enhanced-Hue changes depending on the
     * last parameter.
     * If the managed transition time handling is disabled the method directly increases the hue value by one rate step.
     * So without managed transition not too much happens.
     * Otherwise the method initiates a transition with the given rate.
     *
     * @param moveMode Move Mode to move the hue up or down (Stop should not be provided in here because already handled)
     * @param rate The rate to move the hue up or down. 0 should never be provided her because handled here.
     * @param isEnhancedHue If true the enhanced hue is handled, otherwise the normal hue
     * @protected
     */
    protected moveHueLogic(moveMode: ColorControl.MoveMode, rate: number, isEnhancedHue = false): MaybePromise {
        const maxHue = isEnhancedHue ? MAX_ENHANCED_HUE_VALUE : MAX_HUE_VALUE;

        if (!this.state.managedTransitionTimeHandling) {
            this.internal.stopHueTransition();
            if (isEnhancedHue) {
                this.state.enhancedCurrentHue = addValueWithOverflow(
                    this.state.enhancedCurrentHue,
                    rate,
                    MIN_HUE_VALUE,
                    maxHue,
                );
            } else {
                this.state.currentHue = addValueWithOverflow(this.state.currentHue, rate, MIN_HUE_VALUE, maxHue);
            }
            this.state.remainingTime = 0;
            return;
        }

        this.#initiateTransition(
            isEnhancedHue ? "enhancedHue" : "hue",
            rate * (moveMode === ColorControl.MoveMode.Up ? 1 : -1),
            MIN_HUE_VALUE,
            maxHue,
        );
    }

    /**
     * Default implementation notes:
     * This method is called to stop any hue, enhanced hue and/or saturation movements potentially in progress. Override
     * this method with hardware specific logic to implement this functionality.
     * @protected
     */
    protected stopHueAndSaturationMovement(): MaybePromise {
        this.internal.stopHueTransition();
        this.internal.stopSaturationTransition();
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link stepHueLogic} method to set the hue.
     * If you want to implement own logic just override {@link stepHueLogic} with is also used for {@link enhancedStepHue}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set to min/max directly. Else the step logic is applied and the hue is increased or decreased
     * by the step size every transition time interval.
     */
    override stepHue({
        optionsMask,
        optionsOverride,
        stepMode,
        stepSize,
        transitionTime,
    }: ColorControl.StepHueRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(this.setColorMode(ColorControl.ColorMode.CurrentHueAndCurrentSaturation), () =>
            this.stepHueLogic(stepMode, stepSize, transitionTime),
        );
    }

    /**
     * Default implementation of the stepHue logic. The method handled hue and enhanced-Hue changes depending on the
     * last parameter.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set to current Hue +/- stepSize directly. Else the step logic is applied and the hue is increased
     * or decreased by the step size every transition time interval.
     * @param stepMode The step mode to move the hue up or down
     * @param stepSize The step size to move the hue up or down
     * @param transitionTime The time in seconds to move the hue. 0 means "as fast as possible"
     * @param isEnhancedHue If true the enhanced hue is handled, otherwise the normal hue
     * @protected
     */
    protected stepHueLogic(
        stepMode: ColorControl.StepMode,
        stepSize: number,
        transitionTime: number,
        isEnhancedHue = false,
    ): MaybePromise {
        const currentHue = isEnhancedHue ? this.state.enhancedCurrentHue : this.state.currentHue;
        const maxHue = isEnhancedHue ? MAX_ENHANCED_HUE_VALUE : MAX_HUE_VALUE;

        const targetValue = addValueWithOverflow(
            currentHue,
            stepMode === ColorControl.StepMode.Up ? stepSize : -stepSize,
            MIN_HUE_VALUE,
            maxHue,
        );
        if (!this.state.managedTransitionTimeHandling || transitionTime === 0) {
            this.internal.stopHueTransition();
            if (isEnhancedHue) {
                this.state.enhancedCurrentHue = targetValue;
            } else {
                this.state.currentHue = targetValue;
            }
            this.state.remainingTime = 0;
            return;
        }

        const effectiveRate =
            Math.ceil((stepSize / transitionTime) * 10) * (stepMode === ColorControl.StepMode.Up ? 1 : -1);
        this.#initiateTransition(
            isEnhancedHue ? "enhancedHue" : "hue",
            effectiveRate,
            MIN_HUE_VALUE,
            maxHue,
            targetValue,
        );
    }

    /**
     * Default implementation notes:
     * After the options checks and potentially switching the color mode it uses the {@link moveToSaturationLogic}
     * method to set the hue.
     * If you want to implement own logic just override {@link moveToSaturationLogic} with is also used for
     * {@link moveToHueAndSaturation}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set the target value directly. Else the step logic is applied and the saturation is increased or
     * decreased by the step size every transition time interval.
     */
    override moveToSaturation({
        optionsMask,
        optionsOverride,
        saturation,
        transitionTime,
    }: ColorControl.MoveToSaturationRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(this.setColorMode(ColorControl.ColorMode.CurrentHueAndCurrentSaturation), () =>
            this.moveToSaturationLogic(saturation, transitionTime),
        );
    }

    /**
     * Default implementation of the moveToSaturation logic.
     * If the managed transition time handling is disabled the method directly sets the new saturation value.
     * Otherwise the method initiates a transition with the given rate.
     *
     * @param targetSaturation The target saturation value to move to
     * @param transitionTime The time in seconds to move to the target saturation. 0 means "as fast as possible"
     * @protected
     */
    protected moveToSaturationLogic(targetSaturation: number, transitionTime: number): MaybePromise {
        if (!this.state.managedTransitionTimeHandling || transitionTime === 0) {
            this.internal.stopSaturationTransition();
            this.state.currentSaturation = targetSaturation;
            this.state.remainingTime = 0;
            return;
        }

        // Else calculate a rate by second and manage the transition
        const effectiveRate = Math.ceil(((targetSaturation - this.state.currentSaturation) / transitionTime) * 10);
        this.#initiateTransition(
            "saturation",
            effectiveRate,
            MIN_SATURATION_VALUE,
            MAX_SATURATION_VALUE,
            targetSaturation,
        );
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link moveSaturationLogic} method to set the hue.
     * If you want to implement own logic just override {@link moveSaturationLogic}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set to min/max directly. Else the step logic is applied and the saturation is increased or
     * decreased by the step size every transition time interval.
     */
    override moveSaturation({ optionsMask, optionsOverride, moveMode, rate }: ColorControl.MoveSaturationRequest) {
        this.#assertRate(moveMode, rate);
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(this.setColorMode(ColorControl.ColorMode.CurrentHueAndCurrentSaturation), () => {
            if (moveMode === ColorControl.MoveMode.Stop) {
                return this.stopHueAndSaturationMovement();
            }

            return this.moveSaturationLogic(moveMode, rate);
        });
    }

    /**
     * Default implementation of the moveSaturation logic.
     * If the managed transition time handling is disabled the method directly sets the new saturation value.
     * Otherwise the method initiates a transition with the given rate.
     *
     * @param moveMode Move Mode to move the saturation up or down
     * @param rate The rate to move the saturation up or down
     * @protected
     */
    protected moveSaturationLogic(moveMode: ColorControl.MoveMode, rate: number): MaybePromise {
        if (!this.state.managedTransitionTimeHandling) {
            this.internal.stopSaturationTransition();
            this.state.currentSaturation =
                moveMode === ColorControl.MoveMode.Up ? MAX_SATURATION_VALUE : MIN_SATURATION_VALUE;
            this.state.remainingTime = 0;
            return;
        }

        this.#initiateTransition(
            "saturation",
            rate * (moveMode === ColorControl.MoveMode.Up ? 1 : -1),
            MIN_SATURATION_VALUE,
            MAX_SATURATION_VALUE,
        );
    }

    /**
     * Default implementation notes:
     * After the options checks and potentially switching the color mode it uses the {@link stepSaturationLogic}
     * method to set the hue.
     * If you want to implement own logic just override {@link stepSaturationLogic}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set the target values directly. Else the step logic is applied and the hue and saturation are
     * increased or decreased by the step size every transition time interval.
     */
    override stepSaturation({
        optionsMask,
        optionsOverride,
        stepMode,
        stepSize,
        transitionTime,
    }: ColorControl.StepSaturationRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(this.setColorMode(ColorControl.ColorMode.CurrentHueAndCurrentSaturation), () =>
            this.stepSaturationLogic(stepMode, stepSize, transitionTime),
        );
    }

    /**
     * Default implementation of the stepSaturation logic.
     * If the managed transition time handling is disabled the method directly sets the new saturation value.
     * Otherwise the method initiates a transition with the given rate.
     *
     * @param stepMode The step mode to move the saturation up or down
     * @param stepSize The step size to move the saturation up or down
     * @param transitionTime The time in seconds to move the saturation. 0 means "as fast as possible"
     * @protected
     */
    protected stepSaturationLogic(
        stepMode: ColorControl.StepMode,
        stepSize: number,
        transitionTime: number,
    ): MaybePromise {
        const effectiveRate =
            Math.ceil((stepSize / transitionTime) * 10) * (stepMode === ColorControl.StepMode.Up ? 1 : -1);
        const targetValue = cropValueRange(
            stepMode === ColorControl.StepMode.Up
                ? this.state.currentSaturation + stepSize
                : this.state.currentSaturation - stepSize,
            MIN_SATURATION_VALUE,
            MAX_SATURATION_VALUE,
        );

        if (
            !this.state.managedTransitionTimeHandling ||
            transitionTime === 0 ||
            this.state.currentSaturation === targetValue
        ) {
            this.internal.stopSaturationTransition();
            this.state.currentSaturation = targetValue;
            this.state.remainingTime = 0;
            return;
        }

        this.#initiateTransition("saturation", effectiveRate, MIN_SATURATION_VALUE, MAX_SATURATION_VALUE, targetValue);
    }

    /**
     * Default implementation notes:
     * After the options checks and potentially switching the color mode it uses the {@link moveToHueAndSaturationLogic}
     * method to set the hue.
     * If you want to implement own logic just override {@link moveToHueAndSaturationLogic}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set the target values directly. Else the step logic is applied and the hue and saturation is
     * increased or decreased by the step size every transition time interval.
     */
    override moveToHueAndSaturation({
        optionsOverride,
        optionsMask,
        saturation,
        hue,
        transitionTime,
    }: ColorControl.MoveToHueAndSaturationRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(this.setColorMode(ColorControl.ColorMode.CurrentHueAndCurrentSaturation), () =>
            this.moveToHueAndSaturationLogic(hue, saturation, transitionTime),
        );
    }

    /**
     * Default implementation of the moveToHueAndSaturation logic.
     * If the managed transition time handling is disabled the method directly sets the new hue and saturation values.
     * Otherwise the method initiates a transition with the given rate.
     * This method internally uses {@link moveToHueLogic} and {@link moveToSaturationLogic} to handle the hue and
     * saturation changes, so if you have implemented them already you might not need to override this method.
     *
     * @param targetHue The target hue value to move to
     * @param targetSaturation The target saturation value to move to
     * @param transitionTime The time in seconds to move to the target hue and saturation. 0 means "as fast as possible"
     * @protected
     */
    protected moveToHueAndSaturationLogic(
        targetHue: number,
        targetSaturation: number,
        transitionTime: number,
    ): MaybePromise {
        return MaybePromise.then(
            this.moveToHueLogic(targetHue, ColorControl.Direction.Shortest, transitionTime, false),
            () => this.moveToSaturationLogic(targetSaturation, transitionTime),
        );
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link moveToColorLogic} method to set the x and y value.
     * If you want to implement own logic just override {@link moveToColorLogic}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set the target values directly. Else the step logic is applied and the x and y is
     * increased or decreased by the step size every transition time interval.
     */
    override moveToColor({
        optionsMask,
        optionsOverride,
        colorX,
        colorY,
        transitionTime,
    }: ColorControl.MoveToColorRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(this.setColorMode(ColorControl.ColorMode.CurrentXAndCurrentY), () =>
            this.moveToColorLogic(colorX, colorY, transitionTime),
        );
    }

    /**
     * Default implementation of the moveToColor logic.
     * If the managed transition time handling is disabled the method directly sets the new x and y values.
     * Otherwise the method initiates a transition with the given rate.
     * This method internally uses {@link moveToColorLogic} to handle the x and y changes, so if you have implemented it
     * already you might not need to override this method.
     *
     * @param targetX The target x value to move to
     * @param targetY The target y value to move to
     * @param transitionTime The time in seconds to move to the target x and y. 0 means "as fast as possible"
     * @protected
     */
    protected moveToColorLogic(targetX: number, targetY: number, transitionTime: number): MaybePromise {
        if (!this.state.managedTransitionTimeHandling || transitionTime === 0) {
            this.internal.stopXTransition();
            this.internal.stopYTransition();
            this.state.currentX = cropValueRange(targetX, MIN_CIE_XY_VALUE, MAX_CIE_XY_VALUE);
            this.state.currentY = cropValueRange(targetY, MIN_CIE_XY_VALUE, MAX_CIE_XY_VALUE);
            this.state.remainingTime = 0;
            return;
        }

        // Else calculate a rate by second and manage the transition
        const effectiveRateX = Math.floor(((targetX - this.state.currentX) / transitionTime) * 10);
        const effectiveRateY = Math.floor(((targetY - this.state.currentY) / transitionTime) * 10);

        this.#initiateTransition("x", effectiveRateX, MIN_CIE_XY_VALUE, MAX_CIE_XY_VALUE, targetX);
        this.#initiateTransition("y", effectiveRateY, MIN_CIE_XY_VALUE, MAX_CIE_XY_VALUE, targetY);
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link moveColorLogic} method to set the x and y value.
     * If you want to implement own logic just override {@link moveColorLogic}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set the target values directly. Else the step logic is applied and the x and y is
     * increased or decreased by the step size every transition time interval.
     */
    override moveColor({ optionsOverride, optionsMask, rateX, rateY }: ColorControl.MoveColorRequest): MaybePromise {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }

        if (rateX === 0 && rateY === 0) {
            return this.stopAllColorMovement();
        }

        return MaybePromise.then(this.setColorMode(ColorControl.ColorMode.CurrentXAndCurrentY), () =>
            this.moveColorLogic(rateX, rateY),
        );
    }

    /**
     * Default implementation notes:
     * This method is called to stop any color movements potentially in progress, including any x/y, hue, saturation and
     * color temperature transitions. Override this method with hardware specific logic to implement this functionality.
     * @protected
     */
    protected stopAllColorMovement(): MaybePromise {
        this.internal.stopXTransition();
        this.internal.stopYTransition();
        this.internal.stopHueTransition();
        this.internal.stopSaturationTransition();
        this.internal.stopColorTemperatureTransition();
        this.state.remainingTime = 0;
    }

    /**
     * Default implementation of the moveColor logic.
     * If the managed transition time handling is disabled the method directly sets the new x and y values.
     * Otherwise the method initiates a transition with the given rate.
     *
     * @param rateX The rate to move the x value up or down (positive values mean up, negative down)
     * @param rateY The rate to move the y value up or down (positive values mean up, negative down)
     * @protected
     */
    protected moveColorLogic(rateX: number, rateY: number): MaybePromise {
        if (!this.state.managedTransitionTimeHandling) {
            this.internal.stopXTransition();
            this.internal.stopYTransition();
            if (rateX !== 0) {
                this.state.currentX = MAX_CIE_XY_VALUE;
            }
            if (rateY !== 0) {
                this.state.currentY = MAX_CIE_XY_VALUE;
            }
            this.state.remainingTime = 0;
            return;
        }

        if (rateX !== 0) {
            this.#initiateTransition("x", rateX, MIN_CIE_XY_VALUE, MAX_CIE_XY_VALUE);
        }
        if (rateY !== 0) {
            this.#initiateTransition("y", rateY, MIN_CIE_XY_VALUE, MAX_CIE_XY_VALUE);
        }
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link stepColorLogic} method to set the x and y value.
     * If you want to implement own logic just override {@link stepColorLogic}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set the target values directly. Else the step logic is applied and the x and y is
     * increased or decreased by the step size every transition time interval.
     */
    override stepColor({
        optionsOverride,
        optionsMask,
        stepX,
        stepY,
        transitionTime,
    }: ColorControl.StepColorRequest): MaybePromise {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(this.setColorMode(ColorControl.ColorMode.CurrentXAndCurrentY), () =>
            this.stepColorLogic(stepX, stepY, transitionTime),
        );
    }

    /**
     * Default implementation of the stepColor logic.
     * If the managed transition time handling is disabled the method directly sets the new x and y values.
     * Otherwise the method initiates a transition with the given rate.
     *
     * @param stepX The step size to move the x value up or down
     * @param stepY The step size to move the y value up or down
     * @param transitionTime The time in seconds to move the x and y. 0 means "as fast as possible"
     * @protected
     */
    protected stepColorLogic(stepX: number, stepY: number, transitionTime: number): MaybePromise {
        const targetValueX = cropValueRange(this.state.currentX + stepX, MIN_CIE_XY_VALUE, MAX_CIE_XY_VALUE);
        const targetValueY = cropValueRange(this.state.currentY + stepY, MIN_CIE_XY_VALUE, MAX_CIE_XY_VALUE);
        if (!this.state.managedTransitionTimeHandling || transitionTime === 0) {
            this.internal.stopXTransition();
            this.internal.stopYTransition();
            this.state.currentX = targetValueX;
            this.state.currentY = targetValueY;
            this.state.remainingTime = 0;
            return;
        }

        // Else calculate a rate by second and manage the transition
        if (stepX !== 0) {
            const effectiveRateX = Math.floor((stepX / transitionTime) * 10);
            this.#initiateTransition("x", effectiveRateX, MIN_CIE_XY_VALUE, MAX_CIE_XY_VALUE, targetValueX);
        }
        if (stepY !== 0) {
            const effectiveRateY = Math.floor((stepY / transitionTime) * 10);
            this.#initiateTransition("y", effectiveRateY, MIN_CIE_XY_VALUE, MAX_CIE_XY_VALUE, targetValueY);
        }
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link moveToColorTemperatureLogic} method to set the color temperature.
     * If you want to implement own logic just override {@link moveToColorTemperatureLogic}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set the target value directly. Else the step logic is applied and the color temperature is
     * increased or decreased by the step size every transition time interval.
     */
    override moveToColorTemperature({
        optionsOverride,
        optionsMask,
        colorTemperatureMireds,
        transitionTime,
    }: ColorControl.MoveToColorTemperatureRequest): MaybePromise {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(this.setColorMode(ColorControl.ColorMode.ColorTemperatureMireds), () =>
            this.moveToColorTemperatureLogic(colorTemperatureMireds, transitionTime),
        );
    }

    /**
     * Default implementation of the moveToColorTemperature logic.
     * If the managed transition time handling is disabled the method directly sets the new color temperature value.
     * Otherwise the method initiates a transition with the given rate.
     *
     * @param targetMireds The target color temperature value to move to
     * @param transitionTime The time in seconds to move to the target color temperature. 0 means "as fast as possible"
     * @protected
     */
    protected moveToColorTemperatureLogic(targetMireds: number, transitionTime: number): MaybePromise {
        if (!this.state.managedTransitionTimeHandling || transitionTime === 0) {
            this.internal.stopColorTemperatureTransition();
            this.state.colorTemperatureMireds = targetMireds;
            this.state.remainingTime = 0;
            return;
        }

        // Else calculate a rate by second and manage the transition
        const effectiveRate = Math.ceil(((targetMireds - this.state.colorTemperatureMireds) / transitionTime) * 10);
        this.#initiateTransition(
            "colorTemperature",
            effectiveRate,
            this.minimumColorTemperatureMireds,
            this.maximumColorTemperatureMireds,
            targetMireds,
        );
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link moveToHueLogic} method to set the enhanced hue.
     * If you want to implement own logic just override {@link moveToHueLogic} which is used together with
     * {@link moveToHue}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set the target value directly. Else the step logic is applied and the color temperature is
     * increased or decreased by the step size every transition time interval.
     */
    override enhancedMoveToHue({
        optionsMask,
        optionsOverride,
        enhancedHue,
        direction,
        transitionTime,
    }: ColorControl.EnhancedMoveToHueRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(
            this.setEnhancedColorMode(ColorControl.EnhancedColorMode.EnhancedCurrentHueAndCurrentSaturation),
            () => this.moveToHueLogic(enhancedHue, direction, transitionTime, true),
        );
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link moveHueLogic} method to set the enhanced hue.
     * If you want to implement own logic just override {@link moveHueLogic} which is used together with
     * {@link moveHue}.
     * The logic is implemented as follows: Depending on the provided rate the server will move as fast as possible, but
     * increase only one rate directly if the managed transition is not used. Else the step logic is applied and the
     * level is increased or decreased by the step size every second.
     */
    override enhancedMoveHue({ optionsMask, optionsOverride, moveMode, rate }: ColorControl.EnhancedMoveHueRequest) {
        this.#assertRate(moveMode, rate);
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(
            this.setEnhancedColorMode(ColorControl.EnhancedColorMode.EnhancedCurrentHueAndCurrentSaturation),
            () => {
                if (moveMode === ColorControl.MoveMode.Stop) {
                    return this.stopHueAndSaturationMovement();
                }

                return this.moveHueLogic(moveMode, rate, true);
            },
        );
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link stepHueLogic} method to set the enhanced hue.
     * If you want to implement own logic just override {@link stepHueLogic} which is used together with
     * {@link stepHue}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set the target value directly. Else the step logic is applied and the hue is increased or
     * decreased by the step size every transition time interval.
     */
    override enhancedStepHue({
        optionsMask,
        optionsOverride,
        stepMode,
        stepSize,
        transitionTime,
    }: ColorControl.EnhancedStepHueRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(
            this.setEnhancedColorMode(ColorControl.EnhancedColorMode.EnhancedCurrentHueAndCurrentSaturation),
            () => this.stepHueLogic(stepMode, stepSize, transitionTime, true),
        );
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link moveToEnhancedHueAndSaturationLogic} method to set the enhanced hue
     * and saturation.
     * If you want to implement own logic just override {@link moveToEnhancedHueAndSaturationLogic}.
     * The logic is implemented as follows: Depending on the provided rate the server will move as fast as possible, so
     * we set to min/max directly if the managed transition is not used. Else the step logic is applied and the
     * level is increased or decreased by the step size every second.
     */
    override enhancedMoveToHueAndSaturation({
        optionsOverride,
        optionsMask,
        enhancedHue,
        saturation,
        transitionTime,
    }: ColorControl.EnhancedMoveToHueAndSaturationRequest): MaybePromise {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(
            this.setEnhancedColorMode(ColorControl.EnhancedColorMode.EnhancedCurrentHueAndCurrentSaturation),
            () => this.moveToEnhancedHueAndSaturationLogic(enhancedHue, saturation, transitionTime),
        );
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link moveToHueLogic} and {@link moveToSaturationLogic} methods to set the
     * hue and saturation.
     * Both methods are also used for other commands, so it maybe is not needed to override this method.
     * The logic is implemented as follows: Depending on the provided rate the server will move as fast as possible, so
     * we set to min/max directly if the managed transition is not used. Else the step logic is applied and the
     * level is increased or decreased by the step size every second.
     */
    protected moveToEnhancedHueAndSaturationLogic(
        targetEnhancedHue: number,
        targetSaturation: number,
        transitionTime: number,
    ): MaybePromise {
        return MaybePromise.then(
            this.moveToHueLogic(targetEnhancedHue, ColorControl.Direction.Shortest, transitionTime, true),
            () => this.moveToSaturationLogic(targetSaturation, transitionTime),
        );
    }

    /**
     * Default implementation notes:
     * After the options checks and potentially switching the color mode it uses the {@link stopColorLoopLogic}
     * method to stop color loops or {@link startColorLoopLogic} to start a color loop at a defined enhanced hue value.
     * If you want to implement own logic just override these methods.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set the target value directly. Else the step logic is applied and the color temperature is
     * increased or decreased by the step size every transition time interval.
     */
    override colorLoopSet({
        optionsMask,
        optionsOverride,
        updateFlags,
        action,
        direction,
        time,
        startHue,
    }: ColorControl.ColorLoopSetRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }

        if (updateFlags.updateDirection) {
            this.state.colorLoopDirection = direction as unknown as ColorControl.ColorLoopDirection;
        }
        if (updateFlags.updateTime) {
            this.state.colorLoopTime = time;
        }
        if (updateFlags.updateStartHue) {
            this.state.colorLoopStartEnhancedHue = startHue;
        }
        if (updateFlags.updateAction) {
            if (action === ColorControl.ColorLoopAction.Deactivate) {
                return this.#stopColorLoop();
            } else {
                return MaybePromise.then(
                    this.setEnhancedColorMode(ColorControl.EnhancedColorMode.EnhancedCurrentHueAndCurrentSaturation),
                    () => {
                        this.state.colorLoopStoredEnhancedHue = this.state.enhancedCurrentHue;
                        this.state.colorLoopActive = ColorControl.ColorLoopActive.Active;
                        if (action === ColorControl.ColorLoopAction.ActivateFromColorLoopStartEnhancedHue) {
                            return this.startColorLoopLogic(this.state.colorLoopStartEnhancedHue);
                        } else if (action === ColorControl.ColorLoopAction.ActivateFromEnhancedCurrentHue) {
                            return this.startColorLoopLogic(this.state.enhancedCurrentHue);
                        }
                    },
                );
            }
        }
    }

    /**
     * Internal method to step the color loop and sync the internal ColorLoopActive state and restore the stored
     * enhanced hue. It uses {@link stopColorLoopLogic} to execute the stop.
     */
    #stopColorLoop() {
        return MaybePromise.then(this.stopColorLoopLogic(), () => {
            if (this.state.colorLoopActive === ColorControl.ColorLoopActive.Active) {
                this.state.colorLoopActive = ColorControl.ColorLoopActive.Inactive;
                this.state.enhancedCurrentHue = this.state.colorLoopStoredEnhancedHue;
            }
        });
    }

    /**
     * Default implementation notes:
     * Implement stopping the color loop here if any special hardware specific logic is needed.
     * @protected
     */
    protected stopColorLoopLogic(): MaybePromise {
        this.internal.stopHueTransition();
    }

    /**
     * Default implementation notes:
     * This method uses {@link moveHueLogic} to start a enhanced color loop and sets the required start hue beforehand.
     * If this is sufficient for your implementation you might not need to override this method.
     *
     * @param startHue The hue to start the color loop at
     * @protected
     */
    protected startColorLoopLogic(startHue: number): MaybePromise {
        this.state.enhancedCurrentHue = startHue;

        return this.moveHueLogic(
            this.state.colorLoopDirection === ColorControl.ColorLoopDirection.Decrement
                ? ColorControl.MoveMode.Down
                : ColorControl.MoveMode.Up,
            Math.floor(MAX_ENHANCED_HUE_VALUE / this.state.colorLoopTime),
            true,
        );
    }

    /**
     * Default implementation notes:
     * After the options checks it uses the {@link stopMoveStepLogic} method to stop any ongoing color movement.
     * If you want to implement own logic just override {@link stopMoveStepLogic}.
     */
    override stopMoveStep({ optionsOverride, optionsMask }: ColorControl.StopMoveStepRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return this.stopMoveStepLogic();
    }

    /**
     * Default implementation notes:
     * Implement stopping any ongoing color movement here if any special hardware specific logic is needed. In fact this
     * needs to stop any ongoing saturation, color temperature, x or y movement. Hue transitions should only be stopped
     * when they do not belong to a color loop.
     * @protected
     */
    protected stopMoveStepLogic(): MaybePromise {
        if (this.state.colorLoopActive === ColorControl.ColorLoopActive.Inactive) {
            this.internal.stopHueTransition();
        }
        this.internal.stopSaturationTransition();
        this.internal.stopColorTemperatureTransition();
        this.internal.stopXTransition();
        this.internal.stopYTransition();
    }

    /**
     * Default implementation notes:
     * After the options checks and potentially changing the color mode it uses the {@link moveColorTemperatureLogic}
     * method to set the color temperature.
     * If the current movement should be stopped {@link stopHueAndSaturationMovement} is used.
     * If you want to implement own logic just override {@link moveColorTemperatureLogic}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set the target value directly. Else the step logic is applied and the color temperature is
     * increased or decreased by the step size every transition time interval.
     */
    override moveColorTemperature({
        optionsOverride,
        optionsMask,
        moveMode,
        colorTemperatureMinimumMireds,
        colorTemperatureMaximumMireds,
        rate,
    }: ColorControl.MoveColorTemperatureRequest): MaybePromise {
        this.#assertRate(moveMode, rate);
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(this.setColorMode(ColorControl.ColorMode.ColorTemperatureMireds), () => {
            if (moveMode === ColorControl.MoveMode.Stop) {
                return this.stopHueAndSaturationMovement();
            }

            // If no min/max values are provided, use the device limits
            if (colorTemperatureMinimumMireds === 0) {
                colorTemperatureMinimumMireds = this.minimumColorTemperatureMireds;
            }
            if (colorTemperatureMaximumMireds === 0) {
                colorTemperatureMaximumMireds = this.maximumColorTemperatureMireds;
            }
            colorTemperatureMinimumMireds = cropValueRange(
                colorTemperatureMinimumMireds,
                this.minimumColorTemperatureMireds,
                this.maximumColorTemperatureMireds,
            );
            colorTemperatureMaximumMireds = cropValueRange(
                colorTemperatureMaximumMireds,
                this.minimumColorTemperatureMireds,
                this.maximumColorTemperatureMireds,
            );

            return this.moveColorTemperatureLogic(
                moveMode,
                rate,
                colorTemperatureMinimumMireds,
                colorTemperatureMaximumMireds,
            );
        });
    }

    /**
     * Default implementation of the moveColorTemperature logic.
     * If the managed transition time handling is disabled the method directly sets the min or max color temperature value.
     * Otherwise the method initiates a transition with the given rate.
     *
     * @param moveMode
     * @param rate
     * @param colorTemperatureMinimumMireds
     * @param colorTemperatureMaximumMireds
     * @protected
     */
    protected moveColorTemperatureLogic(
        moveMode: ColorControl.MoveMode,
        rate: number,
        colorTemperatureMinimumMireds: number,
        colorTemperatureMaximumMireds: number,
    ): MaybePromise {
        if (!this.state.managedTransitionTimeHandling) {
            this.internal.stopColorTemperatureTransition();
            this.state.colorTemperatureMireds =
                moveMode === ColorControl.MoveMode.Up ? colorTemperatureMaximumMireds : colorTemperatureMinimumMireds;
            this.state.remainingTime = 0;
            return;
        }

        const effectiveRate = rate * (moveMode === ColorControl.MoveMode.Up ? 1 : -1);
        this.#initiateTransition(
            "colorTemperature",
            effectiveRate,
            colorTemperatureMinimumMireds,
            colorTemperatureMaximumMireds,
        );
    }

    /**
     * Default implementation notes:
     * After the options checks and potentially switching the color mode it uses the {@link stepColorTemperatureLogic}
     * method to set the color temperature.
     * If you want to implement own logic just override {@link stepColorTemperatureLogic}.
     * The logic is implemented as follows: When no transition time is provided, the server will move as fast as
     * possible, so we set the target value directly. Else the step logic is applied and the color temperature is
     * increased or decreased by the step size every transition time interval.
     */
    override stepColorTemperature({
        optionsOverride,
        optionsMask,
        stepMode,
        stepSize,
        transitionTime,
        colorTemperatureMinimumMireds,
        colorTemperatureMaximumMireds,
    }: ColorControl.StepColorTemperatureRequest) {
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        return MaybePromise.then(this.setColorMode(ColorControl.ColorMode.ColorTemperatureMireds), () => {
            // If no min/max values are provided, use the device limits
            if (colorTemperatureMinimumMireds === 0) {
                colorTemperatureMinimumMireds = this.minimumColorTemperatureMireds;
            }
            if (colorTemperatureMaximumMireds === 0) {
                colorTemperatureMaximumMireds = this.maximumColorTemperatureMireds;
            }
            colorTemperatureMinimumMireds = cropValueRange(
                colorTemperatureMinimumMireds,
                this.minimumColorTemperatureMireds,
                this.maximumColorTemperatureMireds,
            );
            colorTemperatureMaximumMireds = cropValueRange(
                colorTemperatureMaximumMireds,
                this.minimumColorTemperatureMireds,
                this.maximumColorTemperatureMireds,
            );

            return this.stepColorTemperatureLogic(
                stepMode,
                stepSize,
                transitionTime,
                colorTemperatureMinimumMireds,
                colorTemperatureMaximumMireds,
            );
        });
    }

    /**
     * Default implementation of the stepColorTemperature logic.
     * If the managed transition time handling is disabled the method directly sets the new color temperature value.
     * Otherwise the method initiates a transition with the given rate.
     *
     * @param stepMode Step Mode to move the color temperature up or down
     * @param stepSize Step size to move the color temperature up or down
     * @param transitionTime Time in seconds to move the color temperature. 0 means "as fast as possible"
     * @param colorTemperatureMinimumMireds Minimum allowed color temperature value
     * @param colorTemperatureMaximumMireds Maximum allowed color temperature value
     * @protected
     */
    protected stepColorTemperatureLogic(
        stepMode: ColorControl.StepMode,
        stepSize: number,
        transitionTime: number,
        colorTemperatureMinimumMireds: number,
        colorTemperatureMaximumMireds: number,
    ): MaybePromise {
        const targetValue = cropValueRange(
            this.state.colorTemperatureMireds + (stepMode === ColorControl.StepMode.Up ? stepSize : -stepSize),
            colorTemperatureMinimumMireds,
            colorTemperatureMaximumMireds,
        );
        if (!this.state.managedTransitionTimeHandling || transitionTime === 0) {
            this.internal.stopColorTemperatureTransition();
            this.state.colorTemperatureMireds = targetValue;
            this.state.remainingTime = 0;
            return;
        }

        const effectiveRate =
            Math.ceil((stepSize / transitionTime) * 10) * (stepMode === ColorControl.StepMode.Up ? 1 : -1);
        this.#initiateTransition(
            "colorTemperature",
            effectiveRate,
            colorTemperatureMinimumMireds,
            colorTemperatureMaximumMireds,
        );
    }

    /**
     * Convenient method to change the color mode of the device. It uses {@link switchColorMode} to
     * convert the current color attributes to the new mode. Override this method for device specific behavior.
     * @private
     */
    protected setColorMode(mode: ColorControl.ColorMode): MaybePromise {
        if (this.state.colorMode === mode) {
            return;
        }

        return MaybePromise.then(this.switchColorMode(this.state.colorMode, mode), () => {
            this.state.colorMode = mode;
            this.state.enhancedColorMode = mode as unknown as ColorControl.EnhancedColorMode; // Enhanced just has additional values
        });
    }

    /**
     * Convenient method to change the enhanced color mode of the device. it uses {@link switchColorMode} to
     * convert the current color attributes to the new mode. Override this method for device specific behavior.
     * @private
     */
    protected setEnhancedColorMode(mode: ColorControl.EnhancedColorMode): MaybePromise {
        if (this.state.enhancedColorMode === mode) {
            return;
        }

        let colorModeSet;
        if (mode === ColorControl.EnhancedColorMode.EnhancedCurrentHueAndCurrentSaturation) {
            colorModeSet = this.setColorMode(ColorControl.ColorMode.CurrentHueAndCurrentSaturation);
        } else {
            colorModeSet = this.setColorMode(mode as unknown as ColorControl.ColorMode);
        }
        return MaybePromise.then(colorModeSet, () => {
            this.state.enhancedColorMode = mode;
        });
    }

    /**
     * Default implementation notes:
     * This method is used to switch the device color mode. It converts the current color attributes to the new mode on
     * a best effort "as close as possible" basis. If the device hardware can do this better this method should be
     * overridden to implement this switch logic and to update all state attributes for the new mode. The color mode
     * attribute update itself is handled by the calling method, so is not needed to be done here.
     *
     * @param oldMode Old color Mode
     * @param newMode New color Mode
     * @protected
     */
    protected switchColorMode(oldMode: ColorControl.ColorMode, newMode: ColorControl.ColorMode): MaybePromise {
        if (oldMode === newMode) {
            return;
        }
        MaybePromise.then(this.stopAllColorMovement(), () => {
            switch (oldMode) {
                case ColorControl.ColorMode.CurrentHueAndCurrentSaturation:
                    if (this.state.currentHue === undefined || this.state.currentSaturation === undefined) {
                        logger.warn("Could not convert from hue/saturation because one of them is undefined");
                        break;
                    }
                    switch (newMode) {
                        case ColorControl.ColorMode.CurrentXAndCurrentY:
                            // Convert hue/saturation to xy
                            const [x, y] = hsvToXy(this.hue, this.saturation);
                            this.x = x;
                            this.y = y;
                            break;
                        case ColorControl.ColorMode.ColorTemperatureMireds:
                            // Convert hue/saturation to color temperature
                            const mireds = hsvToMireds(this.hue, this.saturation);
                            if (mireds === undefined) {
                                logger.warn(
                                    `Could not convert hue/saturation (${this.hue}/${this.saturation}) to color temperature`,
                                );
                            } else {
                                this.mireds = mireds;
                            }
                            break;
                    }
                    break;
                case ColorControl.ColorMode.CurrentXAndCurrentY:
                    if (this.state.currentX === undefined || this.state.currentY === undefined) {
                        logger.warn("Could not convert from xy because one of them is undefined");
                        break;
                    }
                    switch (newMode) {
                        case ColorControl.ColorMode.CurrentHueAndCurrentSaturation:
                            // Convert xy to hue/saturation
                            const [hue, saturation] = hsvToXy(this.x, this.y);
                            this.hue = hue;
                            this.saturation = saturation;
                            break;
                        case ColorControl.ColorMode.ColorTemperatureMireds:
                            // Convert xy to color temperature
                            const mireds = xyToMireds(this.x, this.y);
                            if (mireds === undefined) {
                                logger.warn(`Could not convert xy ${this.x / this.y} to color temperature`);
                            } else {
                                this.mireds = mireds;
                            }
                            break;
                    }
                    break;
                case ColorControl.ColorMode.ColorTemperatureMireds:
                    if (this.state.colorTemperatureMireds === undefined) {
                        logger.warn("Could not convert from color temperature because it is undefined");
                        break;
                    }
                    switch (newMode) {
                        case ColorControl.ColorMode.CurrentHueAndCurrentSaturation:
                            // Convert color temperature to hue/saturation
                            const hsvResult = miredsToHsv(this.mireds);
                            if (hsvResult === undefined) {
                                logger.warn(`Could not convert color temperature ${this.mireds} to hue/saturation`);
                            } else {
                                const [hue, saturation] = hsvResult;
                                this.hue = hue;
                                this.saturation = saturation;
                            }
                            break;
                        case ColorControl.ColorMode.CurrentXAndCurrentY:
                            // Convert color temperature to xy
                            const xyResult = miredsToXy(this.mireds);
                            if (xyResult === undefined) {
                                logger.warn("Could not convert color temperature to xy");
                            } else {
                                const [x, y] = xyResult;
                                this.x = x;
                                this.y = y;
                            }
                            break;
                    }
                    break;
            }
        });
    }

    /**
     * This method is used to set the remaining Time by checking the current transition timers depending on the color mode.
     */
    #setRemainingTime() {
        let remaining = 0;
        switch (this.state.colorMode) {
            case ColorControl.ColorMode.CurrentHueAndCurrentSaturation:
                if (this.internal.hueTransitionIntervalTimer?.isRunning) {
                    remaining = this.internal.currentHueTransitionData?.remainingTime ?? 0;
                }
                if (this.internal.saturationTransitionIntervalTimer?.isRunning) {
                    remaining = Math.max(remaining, this.internal.currentSaturationTransitionData?.remainingTime ?? 0);
                }
                break;
            case ColorControl.ColorMode.CurrentXAndCurrentY:
                if (this.internal.xTransitionIntervalTimer?.isRunning) {
                    remaining = this.internal.currentXTransitionData?.remainingTime ?? 0;
                }
                if (this.internal.yTransitionIntervalTimer?.isRunning) {
                    remaining = Math.max(remaining, this.internal.currentYTransitionData?.remainingTime ?? 0);
                }
                break;
            case ColorControl.ColorMode.ColorTemperatureMireds:
                if (this.internal.colorTemperatureTransitionIntervalTimer?.isRunning) {
                    remaining = this.internal.currentColorTemperatureTransitionData?.remainingTime ?? 0;
                }
                break;
        }
        this.state.remainingTime = remaining;
    }

    /**
     * This method is used internally to potentially handle the dependency between the ColorControl and LevelControl
     * cluster.
     * Do not override this method! Please use the {@link syncColorTemperatureWithLevelLogic} method instead which is
     * called by this method if a sync is needed.
     */
    syncColorTemperatureWithLevel(level: number): MaybePromise {
        if (
            this.state.colorMode === ColorControl.ColorMode.ColorTemperatureMireds ||
            this.state.enhancedColorMode === ColorControl.EnhancedColorMode.ColorTemperatureMireds
        ) {
            return this.syncColorTemperatureWithLevelLogic(level);
        }
    }

    /**
     * This method is used internally to potentially handle the dependency between the ColorControl and LevelControl
     * clusters as defined by the Matter specification. It uses {@link moveToColorTemperatureLogic} with a transition
     * time of 0 (as fast as possible) to set the determined color temperature. Unless you have special requirements
     * you do not need to override it.
     *
     * @param level The current level value from the LevelControl cluster
     * @protected
     */
    protected syncColorTemperatureWithLevelLogic(level: number): MaybePromise {
        if (
            this.state.colorMode !== ColorControl.ColorMode.ColorTemperatureMireds &&
            this.state.enhancedColorMode !== ColorControl.EnhancedColorMode.ColorTemperatureMireds
        ) {
            return;
        }
        // The CoupleColorTempToLevelMinMireds attribute specifies a lower bound on the value of the ColorTemperatureMireds
        // attribute for the purposes of coupling the ColorTemperatureMireds attribute to the CurrentLevel attribute when
        // the CoupleColorTempToLevel bit of the Options attribute of the Level Control cluster is equal to 1. When coupling
        // the ColorTemperatureMireds attribute to the CurrentLevel attribute, this value SHALL correspond to a
        // CurrentLevel value of 0xFE (100%).
        // Note that since this attribute is stored as a micro reciprocal degree (mired) value (i.e. color temperature in
        // kelvins = 1,000,000 / CoupleColorTempToLevelMinMireds), the CoupleColorTempToLevelMinMireds attribute
        // corresponds to an upper bound on the value of the color temperature in kelvins supported by the device.

        const tempCoupleMin = this.state.coupleColorTempToLevelMinMireds ?? this.minimumColorTemperatureMireds;
        const tempPhysMax = this.maximumColorTemperatureMireds;

        // Scale color temp setting between the coupling min and the physical max.
        // Note that mireds varies inversely with level: low level -> high mireds.
        // Peg min/MAX level to MAX/min mireds, otherwise interpolate.
        let newColorTemp;
        if (level <= MIN_CURRENT_LEVEL) {
            newColorTemp = tempPhysMax;
        } else if (level >= MAX_CURRENT_LEVEL) {
            newColorTemp = tempCoupleMin;
        } else {
            const tempDelta = Math.floor(
                ((tempPhysMax - tempCoupleMin) * level) / (MAX_CURRENT_LEVEL - MIN_CURRENT_LEVEL + 1),
            );
            newColorTemp = tempPhysMax - tempDelta;
        }

        logger.debug(`Synced color temperature with level: ${level}, new color temperature: ${newColorTemp}`);

        return this.moveToColorTemperatureLogic(newColorTemp, 0);
    }

    #assertRate(mode: ColorControl.MoveMode, rate: number) {
        if ((mode === ColorControl.MoveMode.Up || mode === ColorControl.MoveMode.Down) && rate === 0) {
            throw new StatusResponseError("Rate must not be 0 when moving Up or Down", StatusCode.InvalidCommand);
        }
    }

    /** Calculate the hue distance depending on the direction and the current and target hue. */
    #getHueDistanceByDirection(currentHue: number, targetHue: number, direction: ColorControl.Direction, max: number) {
        const distance = (targetHue > currentHue ? targetHue : max + targetHue) - currentHue;
        logger.info(
            `Distance: ${distance}, direction: ${direction}, max/2: ${max / 2}, max-distance: ${max - distance}`,
        );
        if (distance === 0) {
            return 0;
        }
        if (direction === ColorControl.Direction.Up) {
            return distance;
        } else if (direction === ColorControl.Direction.Down) {
            return -(max - distance);
        }
        if (direction === ColorControl.Direction.Shortest) {
            if (Math.abs(distance) > max / 2) {
                return -(max - distance);
            }
            return distance;
        }
        if (direction === ColorControl.Direction.Longest) {
            if (Math.abs(distance) > max / 2) {
                return distance;
            }
            return -(max - distance);
        }
        throw new ImplementationError(`Unknown direction: ${direction}`);
    }

    /** Initialize the managed transition timers.. */
    #initializeManagedTransitionTimers() {
        if (!this.state.managedTransitionTimeHandling) {
            return;
        }
        this.internal.hueTransitionIntervalTimer = Time.getPeriodicTimer(
            "ColorControl.hue.transition",
            1000,
            this.callback(this.#hueStepIntervalTick, { lock: true }),
        );
        this.internal.saturationTransitionIntervalTimer = Time.getPeriodicTimer(
            "ColorControl.saturation.transition",
            1000,
            this.callback(this.#saturationStepIntervalTick, { lock: true }),
        );
        this.internal.colorTemperatureTransitionIntervalTimer = Time.getPeriodicTimer(
            "ColorControl.colorTemperature.transition",
            1000,
            this.callback(this.#colorTemperatureStepIntervalTick, { lock: true }),
        );
        this.internal.xTransitionIntervalTimer = Time.getPeriodicTimer(
            "ColorControl.x.transition",
            1000,
            this.callback(this.#xStepIntervalTick, { lock: true }),
        );
        this.internal.yTransitionIntervalTimer = Time.getPeriodicTimer(
            "ColorControl.y.transition",
            1000,
            this.callback(this.#yStepIntervalTick, { lock: true }),
        );
    }

    #getBootReason() {
        const rootEndpoint = this.endpoint.ownerOfType(RootEndpoint);
        if (rootEndpoint !== undefined && rootEndpoint.behaviors.has(GeneralDiagnosticsBehavior)) {
            return rootEndpoint.stateOf(GeneralDiagnosticsBehavior).bootReason;
        }
    }

    #calculateEffectiveOptions(
        optionsMask: TypeFromPartialBitSchema<typeof ColorControl.Options>,
        optionsOverride: TypeFromPartialBitSchema<typeof ColorControl.Options>,
    ): TypeFromPartialBitSchema<typeof ColorControl.Options> {
        const options = this.state.options ?? {};
        return {
            executeIfOff: optionsMask.executeIfOff ? optionsOverride.executeIfOff : options.executeIfOff,
        };
    }

    #optionsAllowExecution(
        optionsMask: TypeFromPartialBitSchema<typeof ColorControl.Options>,
        optionsOverride: TypeFromPartialBitSchema<typeof ColorControl.Options>,
    ) {
        const options = this.#calculateEffectiveOptions(optionsMask, optionsOverride);
        return options.executeIfOff || !this.agent.has(OnOffServer) || this.agent.get(OnOffServer).state.onOff;
    }

    #initiateTransition(
        transitionType: ManagedTransitionType,
        changeRate: number,
        minValue: number,
        maxValue: number,
        targetValue?: number,
    ) {
        if (changeRate === 0) {
            logger.warn(`Change rate for ${transitionType} is 0, nothing to do.`);
        }
        let currentValue: number;
        switch (transitionType) {
            case "hue":
                currentValue = this.state.currentHue;
                break;
            case "enhancedHue":
                currentValue = this.state.enhancedCurrentHue;
                break;
            case "saturation":
                currentValue = this.state.currentSaturation;
                break;
            case "colorTemperature":
                currentValue = this.state.colorTemperatureMireds;
                break;
            case "x":
                currentValue = this.state.currentX;
                break;
            case "y":
                currentValue = this.state.currentY;
                break;
        }

        let hueDistanceLeft: number | undefined = undefined;
        let remainingTime = 0xffff; // Assume a looping for now, we adjust later
        if (transitionType === "enhancedHue" || transitionType === "hue") {
            if (targetValue !== undefined) {
                const direction = changeRate > 0 ? ColorControl.Direction.Up : ColorControl.Direction.Down;
                hueDistanceLeft = this.#getHueDistanceByDirection(currentValue, targetValue, direction, maxValue);
                remainingTime = Math.floor(Math.ceil(hueDistanceLeft / changeRate) * 10);
            }
        } else {
            if (changeRate > 0) {
                remainingTime = Math.floor(Math.ceil((maxValue - currentValue) / changeRate) * 10);
            } else {
                remainingTime = Math.floor(Math.ceil((currentValue - minValue) / -changeRate) * 10);
            }
        }

        const transitionData: TransitionData = {
            changeRate,
            targetValue,
            minValue,
            maxValue,
            remainingTime,
        };

        logger.debug(`Starting ${transitionType} transition interval with stepSize: ${changeRate}.`);
        switch (transitionType) {
            case "hue":
                this.internal.hueTransitionIntervalTimer?.stop();
                this.internal.currentHueTransitionData = {
                    ...transitionData,
                    isEnhancedHue: false,
                    distanceLeft: hueDistanceLeft !== undefined ? Math.abs(hueDistanceLeft) : undefined,
                };
                this.internal.hueTransitionIntervalTimer?.start();
                break;
            case "enhancedHue":
                this.internal.hueTransitionIntervalTimer?.stop();
                this.internal.currentHueTransitionData = {
                    ...transitionData,
                    isEnhancedHue: true,
                    distanceLeft: hueDistanceLeft !== undefined ? Math.abs(hueDistanceLeft) : undefined,
                };
                this.internal.hueTransitionIntervalTimer?.start();
                break;
            case "saturation":
                this.internal.saturationTransitionIntervalTimer?.stop();
                this.internal.currentSaturationTransitionData = transitionData;
                this.internal.saturationTransitionIntervalTimer?.start();
                break;
            case "colorTemperature":
                this.internal.colorTemperatureTransitionIntervalTimer?.stop();
                this.internal.currentColorTemperatureTransitionData = transitionData;
                this.internal.colorTemperatureTransitionIntervalTimer?.start();
                break;
            case "x":
                this.internal.xTransitionIntervalTimer?.stop();
                this.internal.currentXTransitionData = transitionData;
                this.internal.xTransitionIntervalTimer?.start();
                break;
            case "y":
                this.internal.yTransitionIntervalTimer?.stop();
                this.internal.currentYTransitionData = transitionData;
                this.internal.yTransitionIntervalTimer?.start();
                break;
        }
    }

    #hueStepIntervalTick() {
        const transitionData = this.internal.currentHueTransitionData;
        this.#stepIntervalTick(
            transitionData?.isEnhancedHue ? "enhancedHue" : "hue",
            this.internal.hueTransitionIntervalTimer,
            transitionData,
            transitionData?.isEnhancedHue ? this.state.enhancedCurrentHue : this.state.currentHue,
        );
    }

    #saturationStepIntervalTick() {
        this.#stepIntervalTick(
            "saturation",
            this.internal.saturationTransitionIntervalTimer,
            this.internal.currentSaturationTransitionData,
            this.state.currentSaturation,
        );
    }

    #colorTemperatureStepIntervalTick() {
        this.#stepIntervalTick(
            "colorTemperature",
            this.internal.colorTemperatureTransitionIntervalTimer,
            this.internal.currentColorTemperatureTransitionData,
            this.state.colorTemperatureMireds,
        );
    }

    #xStepIntervalTick() {
        this.#stepIntervalTick(
            "x",
            this.internal.xTransitionIntervalTimer,
            this.internal.currentXTransitionData,
            this.state.currentX,
        );
    }

    #yStepIntervalTick() {
        this.#stepIntervalTick(
            "y",
            this.internal.yTransitionIntervalTimer,
            this.internal.currentYTransitionData,
            this.state.currentY,
        );
    }

    #stepIntervalTick(
        transitionType: ManagedTransitionType,
        transitionTimer: Timer | undefined,
        transitionData: TransitionData | undefined,
        currentValue: number,
    ) {
        // Do some sanity checks to make sure we have a valid state
        if (transitionData === undefined) {
            transitionTimer?.stop();
            return;
        }
        if (transitionTimer === undefined) {
            transitionData.remainingTime = 0;
            return;
        }
        if ("isEnhancedHue" in transitionData && transitionData.isEnhancedHue && transitionType !== "enhancedHue") {
            throw new ImplementationError(
                "Transition data is for enhanced hue, but transition type is not enhanced hue",
            );
        }

        const { changeRate, targetValue, minValue, maxValue } = transitionData;

        let newValue: number;
        switch (transitionType) {
            case "hue":
            case "enhancedHue":
                const maxHueRange = transitionType === "hue" ? MAX_HUE_VALUE : MAX_ENHANCED_HUE_VALUE;
                // Hue is a circle, so we need to handle the wrap around
                newValue = addValueWithOverflow(
                    currentValue,
                    changeRate,
                    minValue ?? MIN_HUE_VALUE,
                    maxValue ?? maxHueRange,
                );
                break;
            case "saturation":
                newValue = cropValueRange(
                    currentValue + changeRate,
                    minValue ?? MIN_SATURATION_VALUE,
                    maxValue ?? MAX_SATURATION_VALUE,
                );
                break;
            case "colorTemperature":
                newValue = cropValueRange(
                    currentValue + changeRate,
                    minValue ?? this.minimumColorTemperatureMireds,
                    maxValue ?? this.maximumColorTemperatureMireds,
                );
                break;
            case "x":
            case "y":
                newValue = cropValueRange(
                    currentValue + changeRate,
                    minValue ?? MIN_CIE_XY_VALUE,
                    maxValue ?? MAX_CIE_XY_VALUE,
                );
                break;
            default:
                throw new ImplementationError(`Unknown transition type: ${transitionType}`);
        }

        const isHueTransition = transitionType === "hue" || transitionType === "enhancedHue"; // min/max irrelevant here
        if (isHueTransition) {
            logger.info(
                `Setting new value in ${transitionType} transition interval: ${newValue}, target: ${targetValue}, changeRate: ${changeRate}`,
            );
            let distanceLeft = (transitionData as HueTransitionData).distanceLeft;
            if (targetValue !== undefined && distanceLeft !== undefined) {
                distanceLeft -= Math.abs(changeRate);
                if (distanceLeft <= 0) {
                    logger.debug(`Stopping ${transitionType} transition interval at targetLevel: ${targetValue}.`);
                    transitionTimer?.stop();
                    transitionData.remainingTime = 0;
                    newValue = targetValue;
                } else {
                    (transitionData as HueTransitionData).distanceLeft = distanceLeft;
                }
            }
            if (transitionTimer.isRunning) {
                logger.debug(
                    `Setting new value in ${transitionType} transition interval: ${newValue} (distance left ${distanceLeft})`,
                );

                // There is no definition on how often the remaining time should be updated, so we update it with every step
                if (distanceLeft === undefined) {
                    // We loop on hue
                    transitionData.remainingTime = 0xffff;
                } else {
                    transitionData.remainingTime = Math.floor(Math.ceil(distanceLeft / Math.abs(changeRate)) * 10);
                }
            }
        } else {
            if (minValue !== undefined && newValue === minValue) {
                logger.debug(`Stopping ${transitionType} transition interval at minValue: ${minValue}.`);
                transitionTimer?.stop();
                transitionData.remainingTime = 0;
            } else if (maxValue !== undefined && newValue === maxValue) {
                logger.debug(`Stopping ${transitionType} transition interval at maxLevel: ${maxValue}.`);
                transitionTimer?.stop();
                transitionData.remainingTime = 0;
            } else {
                logger.info(
                    `Setting new value in ${transitionType} transition interval: ${newValue}, target: ${targetValue}, changeRate: ${changeRate}`,
                );

                // Check if we reached the targetLevel if there is one
                if (targetValue !== undefined) {
                    if (changeRate > 0 && newValue >= targetValue) {
                        logger.debug(`Stopping ${transitionType} transition interval at targetLevel: ${targetValue}.`);
                        transitionTimer?.stop();
                        transitionData.remainingTime = 0;
                        newValue = targetValue;
                    } else if (changeRate < 0 && newValue <= targetValue) {
                        logger.debug(`Stopping ${transitionType} transition interval at targetLevel: ${targetValue}.`);
                        transitionTimer?.stop();
                        transitionData.remainingTime = 0;
                        newValue = targetValue;
                    }
                }
                if (transitionTimer.isRunning) {
                    logger.debug(`Setting new value in ${transitionType} transition interval: ${newValue}`);

                    // There is no definition on how often the remaining time should be updated, so we update it with every step
                    if (targetValue === undefined) {
                        // We loop on hue
                        transitionData.remainingTime = 0xffff;
                    } else if (changeRate > 0) {
                        transitionData.remainingTime = Math.floor(
                            Math.ceil(((targetValue ?? maxValue) - newValue) / changeRate) * 10,
                        );
                    } else {
                        transitionData.remainingTime = Math.floor(
                            Math.ceil((newValue - (targetValue ?? minValue)) / -changeRate) * 10,
                        );
                    }
                }
            }
        }

        switch (transitionType) {
            case "hue":
                this.state.currentHue = newValue;
                break;
            case "enhancedHue":
                this.state.enhancedCurrentHue = newValue;
                break;
            case "saturation":
                this.state.currentSaturation = newValue;
                break;
            case "colorTemperature":
                this.state.colorTemperatureMireds = newValue;
                break;
            case "x":
                this.state.currentX = newValue;
                break;
            case "y":
                this.state.currentY = newValue;
                break;
        }
        this.#setRemainingTime();
    }

    #returnAsXyValue(value: number) {
        return value / 65536;
    }

    #returnAsOptionalXyValue(value: number | undefined) {
        if (value === undefined) {
            return undefined;
        }
        return this.#returnAsXyValue(value);
    }

    #setFromXyValue(fieldName: string, value: number | undefined) {
        if (value === undefined) {
            if ((this.state as any)[fieldName] === undefined) {
                return;
            } else {
                throw new ImplementationError(`${fieldName} cannot be set to undefined while being enabled.`);
            }
        }
        (this.state as any)[fieldName] = cropValueRange(Math.round(value * 65536), MIN_CIE_XY_VALUE, MAX_CIE_XY_VALUE);
    }

    override async [Symbol.asyncDispose]() {
        this.internal.stopHueTransition();
        this.internal.stopSaturationTransition();
        this.internal.stopColorTemperatureTransition();
        this.internal.stopXTransition();
        this.internal.stopYTransition();
        await super[Symbol.asyncDispose]?.();
    }
}

type TransitionData = {
    changeRate: number;
    targetValue?: number;
    minValue: number;
    maxValue: number;
    remainingTime?: number;
};

type HueTransitionData = TransitionData & {
    isEnhancedHue: boolean;
    distanceLeft?: number;
};

export namespace ColorControlServerLogic {
    export class Internal {
        /** Timer for the managed hue transition */
        hueTransitionIntervalTimer?: Timer;

        /** Timer for the managed saturation transition */
        saturationTransitionIntervalTimer?: Timer;

        /** Timer for the managed colorTemperature transition */
        colorTemperatureTransitionIntervalTimer?: Timer;

        /** Timer for the managed x transition */
        xTransitionIntervalTimer?: Timer;

        /** Timer for the managed y transition */
        yTransitionIntervalTimer?: Timer;

        /** Structure to store the data of the current managed hue transition */
        currentHueTransitionData?: HueTransitionData;

        /** Structure to store the data of the current managed saturation transition */
        currentSaturationTransitionData?: TransitionData;

        /** Structure to store the data of the current managed color Temperature transition */
        currentColorTemperatureTransitionData?: TransitionData;

        /** Structure to store the data of the current managed x transition */
        currentXTransitionData?: TransitionData;

        /** Structure to store the data of the current managed y transition */
        currentYTransitionData?: TransitionData;

        stopHueTransition() {
            this.hueTransitionIntervalTimer?.stop();
            if (this.currentHueTransitionData !== undefined) {
                this.currentHueTransitionData.remainingTime = 0;
            }
        }

        stopSaturationTransition() {
            this.saturationTransitionIntervalTimer?.stop();
            if (this.currentSaturationTransitionData !== undefined) {
                this.currentSaturationTransitionData.remainingTime = 0;
            }
        }

        stopColorTemperatureTransition() {
            this.colorTemperatureTransitionIntervalTimer?.stop();
            if (this.currentColorTemperatureTransitionData !== undefined) {
                this.currentColorTemperatureTransitionData.remainingTime = 0;
            }
        }

        stopXTransition() {
            this.xTransitionIntervalTimer?.stop();
            if (this.currentXTransitionData !== undefined) {
                this.currentXTransitionData.remainingTime = 0;
            }
        }

        stopYTransition() {
            this.yTransitionIntervalTimer?.stop();
            if (this.currentYTransitionData !== undefined) {
                this.currentYTransitionData.remainingTime = 0;
            }
        }
    }

    export class State extends ColorControlServerBase.State {
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
        moveToHueLogic(
            targetHue: number,
            direction: ColorControl.Direction,
            transitionTime: number,
            isEnhancedHue: boolean,
        ): MaybePromise;
        moveHueLogic(moveMode: ColorControl.MoveMode, rate: number, isEnhancedHue: boolean): MaybePromise;
        stopHueAndSaturationMovement(): MaybePromise;
        stepHueLogic(
            stepMode: ColorControl.StepMode,
            stepSize: number,
            transitionTime: number,
            isEnhancedHue: boolean,
        ): MaybePromise;
        moveToSaturationLogic(targetSaturation: number, transitionTime: number): MaybePromise;
        moveSaturationLogic(moveMode: ColorControl.MoveMode, rate: number): MaybePromise;
        stepSaturationLogic(stepMode: ColorControl.StepMode, stepSize: number, transitionTime: number): MaybePromise;
        moveToHueAndSaturationLogic(targetHue: number, targetSaturation: number, transitionTime: number): MaybePromise;
        moveToColorLogic(targetX: number, targetY: number, transitionTime: number): MaybePromise;
        stopAllColorMovement(): MaybePromise;
        moveColorLogic(rateX: number, rateY: number): MaybePromise;
        stepColorLogic(stepX: number, stepY: number, transitionTime: number): MaybePromise;
        moveToColorTemperatureLogic(targetMireds: number, transitionTime: number): MaybePromise;
        moveToEnhancedHueAndSaturationLogic(
            targetEnhancedHue: number,
            targetSaturation: number,
            transitionTime: number,
        ): MaybePromise;
        stopColorLoopLogic(): MaybePromise;
        startColorLoopLogic(startHue: number): MaybePromise;
        stopMoveStepLogic(): MaybePromise;
        moveColorTemperatureLogic(
            moveMode: ColorControl.MoveMode,
            rate: number,
            colorTemperatureMinimumMireds: number,
            colorTemperatureMaximumMireds: number,
        ): MaybePromise;
        stepColorTemperatureLogic(
            stepMode: ColorControl.StepMode,
            stepSize: number,
            transitionTime: number,
            colorTemperatureMinimumMireds: number,
            colorTemperatureMaximumMireds: number,
        ): MaybePromise;
        switchColorMode(oldMode: ColorControl.ColorMode, newMode: ColorControl.ColorMode): MaybePromise;
        setColorMode(mode: ColorControl.ColorMode): MaybePromise;
        setEnhancedColorMode(mode: ColorControl.EnhancedColorMode): MaybePromise;
        syncColorTemperatureWithLevelLogic(level: number): MaybePromise;
    };
}

// We had turned on some more features to provide a default implementation, but export the cluster with default
// Features again.
export class ColorControlServer extends ColorControlServerLogic.for(ClusterType(ColorControl.Base)) {}
