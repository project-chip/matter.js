/**
 * @license
 * Copyright 2022-2024 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../log/Logger.js";
import type { Observable } from "../../util/Observable.js";
import { MaybePromise } from "../../util/Promises.js";
import { OfflineContext } from "../server/context/OfflineContext.js";
import type { BehaviorBacking } from "./BehaviorBacking.js";

const logger = Logger.get("Reactors");

/**
 * Used by BehaviorBacking to manage reactors and reactions.
 */
export class Reactors {
    #backing: BehaviorBacking;
    #reactors = new Set<Reactor<any, any>>();

    constructor(backing: BehaviorBacking) {
        this.#backing = backing;
    }

    [Symbol.asyncDispose]() {
        let waitFor: undefined | PromiseLike<any>[];

        for (const reactor of this.#reactors) {
            const disposal = reactor.dispose();

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
                            logger.error("Internal error disposing of reactor:", s.reason);
                        }
                    }
                });
        }
    }

    add<T extends any[], R>(observable: Observable<T, R>, reactor: (...args: T) => R) {
        this.#reactors.add(new Reactor(this.#backing, observable, reactor));
    }
}

/**
 * Handling for a single reactor.
 */
class Reactor<T extends any[], R> {
    #handler: (...args: T) => R;
    #observable: Observable<T, R>;
    #reaction?: Promise<R>;

    constructor(backing: BehaviorBacking, observable: Observable<T, R>, reactor: (...args: T) => R) {
        this.#observable = observable;
        this.#handler = (...args: T) => {
            const result = MaybePromise.finally(
                this.#reaction,
                () =>
                    MaybePromise.then(
                        () => OfflineContext.act(context => {
                            const agent = context.agentFor(backing.part);
                            const behavior = backing.createBehavior(agent, backing.type);
                            const result = reactor.apply(behavior, args);
                            return result;
                        }),
                        undefined,
                        error => {
                            const reactorName = reactor.name ? ` ${reactor.name}` : "";
                            logger.error(
                                `Error in ${backing} reactor${reactorName}:`,
                                error
                            );
                        }
                    )
            )
            if (MaybePromise.is(result)) {
                this.#reaction = result as Promise<R>;
            }

            // Must cast to R because TS knows R might be a promise but we only know at runtime if it actually is or
            // not
            return result as R;
        }

        observable.on(this.#handler);
    }

    dispose() {
        return MaybePromise.then(
            this.#reaction,
            () => {
                this.#observable.off(this.#handler);
                (this as any).#handler = undefined;
                (this as any).#observable = undefined;
            }
        )
    }
}
