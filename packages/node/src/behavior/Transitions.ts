/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Agent } from "#endpoint/Agent.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { Diagnostic, Logger, MaybePromise, ObserverGroup, Time, Timer } from "#general";
import { Behavior } from "./Behavior.js";
import { ClusterEvents } from "./cluster/ClusterEvents.js";
import { OfflineContext } from "./context/index.js";
import { BehaviorBacking } from "./internal/BehaviorBacking.js";

const logger = Logger.get("Transition");

/**
 * Attribute transition management.
 *
 * This utility supports updates of one or more attributes of a single behavior when the change occurs gradually over
 * time.
 *
 * The nuances of integrating Matter transition semantics with a device can be complicated.  Matter specifies the
 * frequency of updates for levels and "remaining time" attributes.  These semantics may not map well to your device.
 *
 * This class attempts to offer implementors significant flexibility.  To that end, we offer several integration
 * approaches:
 *
 * 1. If you instantiate with {@link Transitions.Configuration.manageTransitions} as false, no transition occurs and
 *    device state updates instantly.
 *
 * 2. If you enable transition management but provide no other options, matter.js will perform transitions for you,
 *    updating values using a timer.  You probably do not want to use this option if your device supports transitions
 *    natively.
 *
 * 3. If you implement transitions in hardware or a bridged device, you can still use matter.js to track ongoing
 *    transitions and report remaining time.  To do this, extend this class and implement {@link transitionImmediately}
 *    and {@link transitionGradually}.  matter.js will report changes as you update local state and report transition
 *    completion when all attributes reach their target value or when you invoke {@link finish}.
 *
 * 4. You can also allow matter.js to operate a transition timer but apply value updates directly to hardware by
 *    overriding {@link applyUpdates} or {@link step}.  This is useful if your device does not support transitions
 *    natively but you want to ensure that matter.js does not report values that do not reflect hardware state.
 *
 * Whichever approach you take, matter.js attempts to implement the Matter protocol as accurately as possible with the
 * information available.
 */
export class Transitions<B extends Behavior> {
    #endpoint: Endpoint;
    #timer?: Timer;
    #config: Transitions.Configuration<B>;
    #outstandingTick?: MaybePromise<void>;
    #outstandingRemainingTimeUpdate?: MaybePromise<void>;
    #staticRemainingTime = 0;
    #propertyStates = {} as Record<string, Transitions.PropertyState<B>>;
    #observers?: ObserverGroup;
    #instrumentedProperties?: Set<string>;

    constructor(endpoint: Endpoint, config: Transitions.Configuration<B>) {
        this.#config = config;
        this.#endpoint = endpoint;
    }

    /**
     * Iterate over all active transitions.
     */
    [Symbol.iterator]() {
        return Object.values(this.#propertyStates)[Symbol.iterator]();
    }

    /**
     * Get iteration state for a specific property.
     */
    stateOf(name: Transitions.PropertyOf<B>): Transitions.PropertyState<B> | undefined {
        return this.#propertyStates[name];
    }

    /**
     * Initiate transition of an attribute.
     */
    start(transition: Transitions.Transition<B>) {
        const { name, owner, changePerS } = transition;
        let { targetValue } = transition;

        this.stop(name);

        const currentValue = (owner.state as Record<string, number>)[name];

        if (currentValue === targetValue) {
            return;
        }

        // Handle immediate transition
        if (!this.#config.manageTransitions || !changePerS) {
            if (targetValue === undefined || targetValue === null) {
                return;
            }

            const { min, max } = this.#config.properties[name] ?? {};
            if (min !== undefined && targetValue < min) {
                targetValue = min;
            } else if (max !== undefined && targetValue > max) {
                targetValue = max;
            }

            logger.info(this.#logPrefix, "Set", Diagnostic.strong(name), "to", Diagnostic.strong(targetValue));

            this.transitionImmediately(owner, name, targetValue);
            return;
        }

        const remainingTimeBeforeStart = this.remainingTime;

        this.#instrumentProperty(name);

        const attr: Transitions.PropertyState<B> = {
            name,
            configuration: transition,
            currentValue,
            changePerMs: changePerS / 1000,
            prevStepAt: Time.nowMs() - (this.#config.stepIntervalMs ?? Transitions.DEFAULT_STEP_INTERVAL_MS),
        };

        this.#propertyStates[name] = attr;

        logger.info(
            this.#logPrefix,
            "Transitioning",
            Diagnostic.strong(name),
            Diagnostic.dict({
                from: currentValue,
                to: targetValue,
                rate: `${changePerS.toPrecision(3)}/s`,
            }),
        );

        this.transitionGradually(attr);

        const { remainingTimeEvent } = this.#config;
        if (!remainingTimeEvent) {
            return;
        }

        if (this.#outstandingRemainingTimeUpdate || this.remainingTime - remainingTimeBeforeStart < 1) {
            return;
        }

        this.#outstandingRemainingTimeUpdate = this.#endpoint.act("remaining-time-update", agent => {
            remainingTimeEvent.emit(this.remainingTime, -1, agent.context);
        });
    }

    /**
     * Immediately change to a target value.
     *
     * The default implementation updates the local state value.
     */
    protected transitionImmediately(owner: B, name: Transitions.PropertyOf<B>, targetValue: number) {
        (owner.state as Record<string, number>)[name] = targetValue;
    }

    /**
     * Initiate gradual transition to a target value.
     *
     * The default implementation starts a timer to drive transitions over time.
     */
    protected transitionGradually(_attr: Transitions.PropertyState<B>) {
        if (this.#timer === undefined) {
            this.#timer = Time.getPeriodicTimer(
                `transition-${this.#endpoint}-${this.#config.type.name}`,
                this.#config.stepIntervalMs ?? Transitions.DEFAULT_STEP_INTERVAL_MS,
                this.#step.bind(this),
            );

            this.#timer.start();

            // Perform first step immediately
            this.#step();
        }
    }

    /**
     * Stop transition of one or all attributes.
     */
    stop(name?: Transitions.PropertyOf<B>) {
        if (name === undefined) {
            this.#propertyStates = {} as Record<any, any>;
        } else {
            if (!(name in this.#propertyStates)) {
                return;
            }

            delete this.#propertyStates[name];

            if (Object.keys(this.#propertyStates).length) {
                // Other transitions are ongoing
                return;
            }
        }

        // We only get here if all transitions have stopped
        if (this.#timer) {
            this.#timer.stop();
            this.#timer = undefined;
        }
    }

    /**
     * Stop a transition of one or more attributes that has completed successfully.
     */
    finish(name?: Transitions.PropertyOf<B>): void {
        const finishOne = (state: Transitions.PropertyState<B>) => {
            logger.debug(this.#logPrefix, "Transition of", Diagnostic.strong(state.name), "finished");

            this.stop(state.name);

            const event = (
                this.#endpoint.eventsOf(this.#config.type) as unknown as Record<
                    string,
                    ClusterEvents.ChangedObservable<any>
                >
            )[`${name}$Changed`];

            // Per specification, quieter events always emit at end of transition.  This will need an option in the
            // property configuration if this is ever not the case
            if (event?.isQuieter) {
                event.quiet.emitNow();
            }
        };

        if (typeof name === "string") {
            const state = this.#propertyStates[name];
            if (state === undefined) {
                return;
            }

            finishOne(state);
        } else {
            for (const state of this) {
                finishOne(state);
            }
        }

        // When all transitions are finished, emit remaining time of zero per specification
        if (!Object.keys(this.#propertyStates).length) {
            this.#config.remainingTimeEvent?.emit(0, -1, OfflineContext.ReadOnly);
        }
    }

    /**
     * Free resources.
     */
    async close() {
        this.stop();

        if (this.#outstandingTick) {
            await this.#outstandingTick;
        }
        if (this.#outstandingRemainingTimeUpdate) {
            await this.#outstandingRemainingTimeUpdate;
        }
        if (this.#observers) {
            this.#observers.close();
            this.#observers = undefined;
        }
        this.#instrumentedProperties = undefined;
    }

    /**
     * Set the static version of remaining time used when transition management is disabled.
     */
    set remainingTime(value: number) {
        this.#staticRemainingTime = this.#internalTimeOf(value);
    }

    /**
     * Determine time remaining in transition in (possibly fractional) seconds.
     *
     * This is computed dynamically based on the longest running individual attribute transition.
     */
    get remainingTime() {
        if (this.#config.manageTransitions === false) {
            if (this.#config.transitionEndTimeMs !== undefined) {
                const remaining = this.#config.transitionEndTimeMs - Time.nowMs();
                if (remaining < 0) {
                    return 0;
                }
                return this.#externalTimeOf(remaining);
            }

            return this.#externalTimeOf(this.#staticRemainingTime);
        }

        let remainingTime = 0;

        for (const name in this.#propertyStates) {
            const attrState = this.#propertyStates[name];
            const { targetValue } = this.#determineTargetValue(attrState);
            if (targetValue === undefined) {
                continue;
            }

            const attrRemainingTime = Math.abs((attrState.currentValue - targetValue) / attrState.changePerMs);
            if (attrRemainingTime > remainingTime) {
                remainingTime = attrRemainingTime;
            }
        }

        return this.#externalTimeOf(remainingTime);
    }

    /**
     * Update transitioning attributes for a behavior.
     *
     * You may override this method if you want matter.js to run a timer but you want to handle value updates yourself.
     */
    protected async step(behavior: B) {
        const now = Time.nowMs();

        // Compute updated values for all transitioning attributes
        for (const prop of this) {
            const { currentValue } = prop;
            if (typeof currentValue !== "number") {
                this.#stepError(prop.name, "value is not numeric");
                continue;
            }

            // Determine the unclamped next value
            const msSinceLastStep = now - prop.prevStepAt;
            let nextValue = currentValue + prop.changePerMs * msSinceLastStep;

            const { targetValue, targetDescription } = this.#determineTargetValue(prop);

            // Clamp nextValue to valid range
            if (prop.changePerMs < 0) {
                if (targetValue !== undefined && Math.round(nextValue) < targetValue) {
                    nextValue = targetValue;
                }
            } else if (prop.changePerMs > 0) {
                if (targetValue !== undefined && Math.round(nextValue) > targetValue) {
                    nextValue = targetValue;
                }
            } else {
                // This shouldn't happen
                this.#stepError(prop.name, "rate is zero");
                continue;
            }

            // If there is no target value and no min/max value it is a configuration error and we do not step as this
            // would be inifinite
            if (targetValue === undefined) {
                this.#stepError(prop.name, `there is no target value or ${targetDescription}`);
                continue;
            }

            prop.currentValue = nextValue;

            // Invoke step callback, if any
            const callbackPromise = prop.configuration.onStep?.call(behavior, nextValue);
            if (callbackPromise !== undefined) {
                await callbackPromise;
            }

            prop.prevStepAt = now;
        }

        const applyPromise = this.applyUpdates(behavior);
        if (applyPromise) {
            await applyPromise;
        }
    }

    protected applyUpdates(behavior: B): MaybePromise<void> {
        const state = behavior.state as Record<string, number>;

        for (const prop of this) {
            state[prop.name] = Math.round(prop.currentValue);
        }
    }

    #step() {
        // Skip steps when callbacks overrun the tick interval
        if (this.#outstandingTick) {
            return;
        }

        const executeStep = async (agent: Agent) => {
            const behavior = agent.get(this.#config.type);

            // Obtain exclusive lock
            agent.context.transaction.addResourcesSync(behavior);
            await agent.context.transaction.begin();

            await this.step(behavior);
        };

        // Create a behavior to perform actual stepping
        const promise = (this.#outstandingTick = Promise.resolve(this.#endpoint.act("transition", executeStep))
            .catch(error => {
                logger.error(
                    this.#logPrefix,
                    "Aborting transition due to unhandled error during step management:",
                    error,
                );
                this.stop();
            })
            .finally(() => {
                if (this.#outstandingTick === promise) {
                    this.#outstandingTick = undefined;
                }
            }));
    }

    #stepError(name: string, message: string) {
        logger.warn(this.#logPrefix, "Not transitioning", Diagnostic.strong(name), "because", message);
        this.stop(name as Transitions.PropertyOf<B>);
    }

    #determineTargetValue(state: Transitions.PropertyState<B>) {
        const { name } = state.configuration;
        let { targetValue } = state.configuration;
        let targetDescription = "target value";

        // Determine the actual target value and clamp nextValue to valid range
        if (state.changePerMs < 0) {
            const minValue = this.#config.properties[name]?.min;

            if (targetValue === undefined || (minValue !== undefined && targetValue < minValue)) {
                targetDescription = "min value";
                targetValue = minValue;
            }
        } else if (state.changePerMs > 0) {
            const maxValue = this.#config.properties[name]?.max;

            if (targetValue === undefined || (maxValue !== undefined && targetValue > maxValue)) {
                targetDescription = "min value";
                targetValue = maxValue;
            }
        }

        return {
            targetDescription,
            targetValue,
        };
    }

    get #logPrefix() {
        return Diagnostic.squash(Diagnostic.strong(`${this.#endpoint}#${this.#config.type.name}`), `:`);
    }

    #externalTimeOf(ms: number) {
        return Math.round(ms / (this.#config.externalTimeUnitMs ?? Transitions.DEFAULT_EXTERNAL_TIME_UNIT_MS));
    }

    #internalTimeOf(externalUnits: number) {
        return externalUnits * (this.#config.externalTimeUnitMs ?? Transitions.DEFAULT_EXTERNAL_TIME_UNIT_MS);
    }

    /**
     * We add event handlers for any property we transition.  If the property reaches the target value we end the
     * transition.
     *
     * This allows us to detect "end of transition" independent of the means of transition.
     */
    #instrumentProperty(name: Transitions.PropertyOf<B>) {
        if (this.#instrumentedProperties === undefined) {
            this.#instrumentedProperties = new Set();
        }

        if (this.#instrumentedProperties.has(name)) {
            return;
        }

        this.#instrumentedProperties.add(name);

        const event = (
            this.#endpoint.eventsOf(this.#config.type) as unknown as Record<
                string,
                ClusterEvents.ChangedObservable<any> | undefined
            >
        )[`${name}$Changed`];
        if (!event) {
            return;
        }

        if (!this.#observers) {
            this.#observers = new ObserverGroup();
        }

        this.#observers.on(event, newValue => {
            const state = this.#propertyStates[name];
            if (state === undefined) {
                return;
            }

            const { targetValue } = this.#determineTargetValue(state);

            if (newValue === targetValue) {
                return this.finish(name);
            }
        });
    }
}

export namespace Transitions {
    export const DEFAULT_STEP_INTERVAL_MS = 100;
    export const DEFAULT_EXTERNAL_TIME_UNIT_MS = 100;

    /**
     * A valid transitionable attribute name for the specified type.
     */
    export type AttrOf<T extends Behavior.Type> = keyof {
        [K in keyof InstanceType<T>["state"]]: T[K] extends number | undefined | null ? true : never;
    };

    /**
     * Transition configuration.
     *
     * The {@link Transitions} accesses this configuration on-demand so values that change after initial construction
     * will affect ongoing behavior.
     */
    export interface Configuration<B extends Behavior> {
        /**
         * The behavior type this configuration applies to.
         */
        readonly type: Behavior.Type & { new (agent: Agent, backing: BehaviorBacking): B };

        /**
         * If this is false we do not manage transitions and "remaining time" behaves like a normal static value.
         *
         * Default is true.
         */
        readonly manageTransitions?: boolean;

        /**
         * Milliseconds-per external time unit.  Defaults to 100 which is appropriate for CC & LVL "remaining time"
         * attribute that is defined as 10ths of a second.
         */
        readonly externalTimeUnitMs?: number;

        /**
         * The internal tick rate for transitions.
         *
         * This is the smallest time increment between value adjustments.
         *
         * Defaults to {@link DEFAULT_STEP_INTERVAL_MS}.
         */
        readonly stepIntervalMs?: number;

        /**
         * The end time for a transition if transition management is disabled.
         */
        readonly transitionEndTimeMs?: number;

        /**
         * An observable associated with the "remaining time" value.
         *
         * If present, the {@link Transitions} forces an emit under conditions defined in spec for the "RemainingTime"
         * attribute of Level Control & Color Control clusters.
         *
         * This should also support Valve Configuration & Control cluster's "RemainingDuration" attribute with
         * additional options to support small variations in logic.
         */
        readonly remainingTimeEvent?: ClusterEvents.ChangedObservable;

        /**
         * The state properties that support transition.
         */
        readonly properties: Partial<Record<PropertyOf<B>, PropertyConfiguration>>;
    }

    /**
     * Configures a state property to support transitions.  This is typically an attribute but we support transition of
     * any numeric property.
     */
    export interface PropertyConfiguration {
        /**
         * A lower bound on the transition value.
         */
        readonly min?: number | undefined;

        /**
         * An upper bound on the transition value.
         */
        readonly max?: number | undefined;
    }

    export type PropertyOf<B extends Behavior> = keyof {
        [N in string & keyof B["state"]]: B[N] extends number | null | undefined ? true : never;
    };

    /**
     * Configuration for transition of a specific attribute.
     */
    export interface Transition<B extends Behavior> {
        /**
         * The attribute to transition.
         */
        readonly name: PropertyOf<B>;

        /**
         * The behavior instance requesting transition.
         */
        readonly owner: B;

        /**
         * The amount to change the attribute per second.
         */
        readonly changePerS?: number | null;

        /**
         * The target value for the transition.  If undefined, transitions to the min/max value.  If no min or max is
         * defined and no target value is supplied the transition will not run.
         */
        readonly targetValue?: number;

        /**
         * Invoked every time the transitioning value changes before committing the mutating transaction.
         */
        onStep?: (this: B, value: number) => MaybePromise<void>;
    }

    /**
     * Internal state related to actively transitioning attributes.
     */
    export interface PropertyState<B extends Behavior> {
        /**
         * The property name.
         */
        name: PropertyOf<B>;

        /**
         * Configuration for any active transition.
         */
        configuration: Transition<B>;

        /**
         * The current value for the transition.
         *
         * We track separately from canonical value because we transition using floats but values are typically
         * integers.  This allows us to avoid rounding errors.
         */
        currentValue: number;

        /**
         * The change in value per millisecond.
         */
        changePerMs: number;

        /**
         * The time of the last step.
         */
        prevStepAt: number;
    }
}
