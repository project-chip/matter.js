/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Observable } from "./Observable.js";
import { MaybePromise } from "./Type.js";

/**
 * Base interface standardizing destruction.
 */
export interface Destructable {
    destroy(): void;
    [Symbol.dispose](): void;
}

/**
 * Base interface standardizing async destruction.
 */
export interface AsyncDestructable {
    destroy(): MaybePromise;
    [Symbol.asyncDispose](): MaybePromise<void>;
}

/**
 * Base class for full async lifecycle management.
 */
export class Usable implements Usable.Interface {
    #destroyed?: Observable<[instance: this]>;
    #initialized?: Observable<[instance: this]>;

    /**
     * Perform post-construction initialization.
     */
    initialize(): void | Promise<void> {
        if (this.#initialized) {
            this.#initialized.emit(this);
        }
    }

    /**
     * Release resources.
     */
    destroy(): void | Promise<void> {
        if (this.#destroyed) {
            this.#destroyed.emit(this);
        }
        this.#initialized = undefined;
        this.#destroyed = undefined;
    }

    /**
     * Observe initialization.
     */
    get initialized() {
        if (!this.#initialized) {
            this.#initialized = Observable();
        }
        return this.#initialized;
    }

    /**
     * Observe destruction.
     */
    get destroyed() {
        if (!this.#destroyed) {
            this.#destroyed = Observable();
        }
        return this.#destroyed;
    }

    /**
     * Supports ES "using".
     */
    async [Symbol.asyncDispose]() {
        await this.destroy();
    }

    /**
     * Initialize one or more usables.
     */
    static initialize(...usables: Usable[]): MaybePromise {
        return jointInvoke(usables, "initialize");
    }

    /**
     * Destroy one or more usables.
     */
    static destroy(...usables: Usable[]): MaybePromise {
        return jointInvoke(usables, "destroy");
    }
}

function jointInvoke(usables: Usable[], method: "destroy" | "initialize") {
    let promises: undefined | Promise<void>[];

    for (const usable of usables) {
        const promise = usable[method]();
        if (promise) {
            if (promises) {
                promises.push(promise);
            } else {
                promises = [];
            }
            promises.push(promise);
        }
    }

    if (promises) {
        return Promise.all(promises) as unknown as Promise<void>;
    }
}

export namespace Usable {
    /**
     * Standard interface for implementations supporting lifecycle management.
     */
    export interface Interface {
        /**
         * Asynchronous initialization support.
         */
        initialize(): MaybePromise;

        /**
         * Destruction support.
         */
        destroy(): MaybePromise;

        /**
         * Support async "using".
         */
        [Symbol.asyncDispose](): Promise<void>;
    }
}
