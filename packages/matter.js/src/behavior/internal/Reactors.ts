/**
 * @license
 * Copyright 2022-2024 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { Logger } from "../../log/Logger.js";
import type { Observable, Observer } from "../../util/Observable.js";
import { MaybePromise } from "../../util/Promises.js";
import { Reactor } from "../Reactor.js";
import { ActionContext } from "../context/ActionContext.js";
import { Contextual } from "../context/Contextual.js";
import { OfflineContext } from "../context/server/OfflineContext.js";
import { Resource } from "../state/transaction/Resource.js";
import type { BehaviorBacking } from "./BehaviorBacking.js";

const logger = Logger.get("Reactors");

/**
 * Used by BehaviorBacking to manage reactors and reactions.
 */
export class Reactors {
    #backing: BehaviorBacking;
    #backings = new Set<ReactorBacking<any, any>>();
    #destructionComplete?: () => void;

    constructor(backing: BehaviorBacking) {
        this.#backing = backing;
    }

    get backing() {
        return this.#backing;
    }

    [Symbol.asyncDispose]() {
        for (const reactor of this.#backings) {
            reactor.destroy();
        }

        if (this.#backings.size) {
            return new Promise<void>(resolve => this.#destructionComplete = resolve);
        }
    }

    add<O extends Observable<any[], any>>(
        observable: O,
        reactor: Reactor<Parameters<O["emit"]>, ReturnType<O["emit"]>>,
        options?: Reactor.Options
    ) {
        // Deduplicate reactors
        for (const backing of this.#backings) {
            if (backing.is(observable, reactor)) {
                return;
            }
        }

        // Install
        this.#backings.add(new ReactorBacking(this, observable, reactor, options ?? {}));
    }

    remove(backing: ReactorBacking<any, any>) {
        this.#backings.delete(backing);
        if (!this.#backings.size) {
            this.#destructionComplete?.();
        }
    }

    get resource() {
        return this.#backing.datasource;
    }
}

/**
 * Implementation of a single reactor.
 */
class ReactorBacking<T extends any[], R> {
    #reactors: Reactors;
    #handler: Observer<T, R>;
    #reactor: Reactor<T, R>;
    #observable: Observable<T, R>;
    #reaction?: Promise<unknown>; // This is R if R is a promise
    #offline?: boolean;
    #destroying?: boolean;
    #lock?: Iterable<Resource>;

    constructor(
        reactors: Reactors,
        observable: Observable<T, R>,
        reactor: Reactor,
        { offline, once, lock }: Reactor.Options,
    ) {
        this.#reactors = reactors;
        this.#observable = observable;
        this.#offline = offline;
        this.#reactor = reactor;

        if (lock) {
            if (lock === true) {
                lock = [ reactors.resource ];
            } else if (!Array.isArray(lock)) {
                lock = [ lock ];
            }
            this.#lock = lock as Resource[];
        }

        this.#handler = ((...args: T) => {
            // If there is an ongoing reaction this will wait until it completes before initiating the next reaction
            const result = MaybePromise.finally(
                this.#reaction,

                () => {
                    // In "once" mode we destroy ourselves after the reaction is complete
                    if (once) {
                        this.#destroying = true;
                        return MaybePromise.finally(
                            () => this.#react(args),
                            () => this.destroy(),
                        );
                    }

                    // Normal mode -- just react
                    return this.#react(args);
                }
            )
            if (MaybePromise.is(result)) {
                this.#reaction = result as Promise<unknown>;
            }

            return result;
        }) as Observer<T, R>;

        observable.on(this.#handler);
    }

    is(observable: Observable<unknown[], unknown>, reactor: Reactor) {
        return this.#observable === observable && this.#reactor === reactor && !this.#destroying;
    }

    destroy() {
        if (this.#destroying) {
            return;
        }

        this.#destroying = true;
        return MaybePromise.finally(
            this.#reaction,
            () => {
                this.#observable.off(this.#handler);
                this.#reactors.remove(this);
            }
        )
    }

    #react(args: T) {
        let context: undefined | ActionContext;
        if (!this.#offline) {
            context = Contextual.contextOf(args[args.length - 1]);
        }

        // If the emitter's context is available, execute in that
        if (context) {
            return MaybePromise.catch(
                () => this.#reactWithContext(context as ActionContext, this.#reactors.backing, args),
                error => { throw this.#augmentError(error) },
            );
        }

        // Otherwise run in independent context and errors do not interfere with emitter
        return MaybePromise.catch(
            () => OfflineContext.act(this.toString(), context =>
                this.#reactWithContext(
                    context as ActionContext,
                    this.#reactors.backing,
                    args
                )
            ),

            error => {
                logger.error(this.#augmentError(error));
            },
        );
    }

    toString() {
        const reactorName = this.#reactor.name ? `.${this.#reactor.name}` : "";
        return `reactor<${this.#reactors.backing}${reactorName}>`;
    }

    #reactWithContext(context: ActionContext, backing: BehaviorBacking, args: T): MaybePromise<void> {
        if (this.#lock) {
            return this.#lockThenReact(context, backing, args);
        }

        return this.#reactWithLocks(context, backing, args);
    }

    async #lockThenReact(context: ActionContext, backing: BehaviorBacking, args: T) {
        if (!this.#lock) {
            throw new InternalError("No locks to acquire");
        }

        await context.transaction.addResources(...this.#lock);
        await context.transaction.begin();

        for (const resource of context.transaction.resources) {
            if (resource.lockedBy !== context.transaction) {
                throw new InternalError(`Lock of ${resource} should be held by ${this} but is not`);
            }
        }

        await this.#reactWithLocks(context, backing, args);
    }

    #reactWithLocks(context: ActionContext, backing: BehaviorBacking, args: T) {
        const agent = (context as ActionContext).agentFor(backing.part);
        const behavior = backing.createBehavior(agent, backing.type);
        return this.#reactor.apply(behavior, args) as MaybePromise<any>;
    }

    #augmentError(cause: any) {
        if (!(cause instanceof Error)) {
            cause = new Error(cause.toString());
        }

        cause.message = `Error in ${this}: ${cause.message}`;

        return cause;
    }
}
