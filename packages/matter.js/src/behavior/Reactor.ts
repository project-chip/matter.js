/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Observable } from "../util/Observable.js";
import type { Behavior } from "./Behavior.js";

/**
 * A reactor is an {@link Observable} observer managed by a {@link Behavior}.  You install reactors using
 * {@link Behavior.reactTo} on the behavior that receives the event.
 *
 * A reactor is similar to a normal handler installed with {@link Observable.on}.  It provides several benefits over
 * installing an observer directly:
 *
 *   - The behavior uninstalls {@link reactor} on destruction
 *
 *   - If {@link reactor} is asynchronous, the behavior tracks the resulting promise.  It provides error handling and
 *     ensures the promise completes before Part destruction
 *
 *   - The behavior ensures reactors run serially even if they are asynchronous
 *
 *   - Matter.js manages the context in which the reactor runs automatically, either joining the emitter's context or
 *     creating a dedicated offline context
 * 
 *   - Matter.js ensures that {@link reactor} only registers with {@link Observable} once for a given {@link Part}
 *
 * You should not use arrow functions for reactors as this will prevent you from accessing the Behavior in the correct
 * context.
 *
 * If {@link observable} is a high-volume emitter, it would be better to implement synchronous or very fast asynchronous
 * reactors to avoid accumulating too many deferred reactions.
 */
export type Reactor<T extends any[] = any[], R = any> = (...args: T) => R;

export namespace Reactor {
    /**
     * Configurable settings for {@link Behavior.reactTo}.
     */
    export interface Options {
        /**
         * This option controls the context in which reaction Matter.js invokes a reactor.
         *
         *   - If false (the default), the reactor runs in the same context as the emitter, or a dedicated offline
         *     context if the emitter's context is unavailable.  Errors thrown by the reactor interrupt the emitter.
         *
         *   - If true, the reactor runs in a dedicated, offline context.  Errors thrown by the reactor will be logged
         *     and won't affect the emitter
         */
        offline?: boolean;
    }
}
