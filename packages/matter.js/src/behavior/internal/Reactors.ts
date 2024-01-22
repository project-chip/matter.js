/**
 * @license
 * Copyright 2022-2024 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../log/Logger.js";
import type { Observable } from "../../util/Observable.js";
import { MaybePromise } from "../../util/Promises.js";
import { Reactor } from "../Reactor.js";
import { ActionContext } from "../server/context/ActionContext.js";
import { Contextual } from "../server/context/Contextual.js";
import { OfflineContext } from "../server/context/OfflineContext.js";
import type { BehaviorBacking } from "./BehaviorBacking.js";

const logger = Logger.get("Reactors");

/**
 * Used by BehaviorBacking to manage reactors and reactions.
 */
export class Reactors {
    #backing: BehaviorBacking;
    backings = new Set<ReactorBacking<any, any>>();

    constructor(backing: BehaviorBacking) {
        this.#backing = backing;
    }

    [Symbol.asyncDispose]() {
        let waitFor: undefined | PromiseLike<any>[];

        for (const reactor of this.backings) {
            const disposal = reactor.destroy();

            if (MaybePromise.is(disposal)) {
                if (waitFor) {
                    waitFor.push(disposal);
                } else {
                    waitFor = [ disposal ];
                }
            }
        }

        if (waitFor) {
            return Promise.allSettled(waitFor)
                .then(settlements => {
                    for (const s of settlements) {
                        if (s.status === "rejected") {
                            logger.error("Error during reactor disposal:", s.reason);
                        }
                    }
                });
        }
    }

    add<T extends any[], R>(
        observable: Observable<T, R>,
        reactor: Reactor<T, R>,
        options?: Reactor.Options
    ) {
        // Deduplication reactors
        for (const backing of this.backings) {
            if (backing.is(observable, reactor, this.#backing)) {
                return;
            }
        }

        // Install
        this.backings.add(new ReactorBacking(this.#backing, observable, reactor, options ?? {}));
    }
}

/**
 * Implementation of a single reactor.
 */
class ReactorBacking<T extends any[], R> {
    #handler: Reactor<T, R>;
    #reactor: Reactor<T, R>;
    #observable: Observable<T, R>;
    #reaction?: Promise<unknown>; // This is R if R is a promise
    #offline?: boolean;
    #backing: BehaviorBacking;

    constructor(
        backing: BehaviorBacking,
        observable: Observable<T, R>,
        reactor: Reactor,
        { offline }: Reactor.Options,
    ) {
        this.#observable = observable;
        this.#offline = offline;
        this.#reactor = reactor;
        this.#backing = backing;
        this.#handler = (...args: T) => {
            const result = MaybePromise.finally(
                this.#reaction,
                () => this.#react(args)
            )
            if (MaybePromise.is(result)) {
                this.#reaction = result as Promise<unknown>;
            }

            return result as R;
        }

        observable.on(this.#handler);
    }

    is(observable: Observable<unknown[], unknown>, reactor: Reactor, backing: BehaviorBacking) {
        return this.#observable === observable && this.#reactor === reactor && this.#backing === backing;
    }

    destroy() {
        return MaybePromise.then(
            this.#reaction,
            () => {
                this.#observable.off(this.#handler);
                (this as any).#handler = undefined;
                (this as any).#observable = undefined;
            }
        )
    }

    #react(args: T) {
        let context: undefined | ActionContext;
        let swallowErrors: boolean;
        if (this.#offline) {
            swallowErrors = true;
        } else {
            swallowErrors = false;
            context = Contextual.contextOf(args[args.length - 1]);
        }

        let fn;
        if (context) {
            fn = () => this.#reactWithContext(context as ActionContext, this.#backing, args);
        } else {
            fn = () => OfflineContext.act(
                context => this.#reactWithContext(context as ActionContext, this.#backing, args)
            );
        }

        return MaybePromise.then(
            fn,
            undefined,
            error => {
                if (!(error instanceof Error)) {
                    error = new Error(error.toString);
                }

                const reactorName = this.#reactor.name ? ` ${this.#reactor.name}` : "";
                error.message = `Error in ${this.#backing} reactor${reactorName}: ${error.message}`

                if (swallowErrors) {
                    logger.error(
                        `Error in ${this.#backing} reactor${reactorName}:`,
                        error
                    );
                } else {
                    throw error;
                }
            }
        )
    }

    #reactWithContext(context: ActionContext, backing: BehaviorBacking, args: T) {
        const agent = (context as ActionContext).agentFor(backing.part);
        const behavior = backing.createBehavior(agent, backing.type);
        return this.#reactor.apply(behavior, args);
    }
}
