/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "../log/Diagnostic.js";
import { Observable } from "../util/Observable.js";
import type { Environment } from "./Environment.js";

export namespace Environmental {
    export const create = Symbol("create");

    /**
     * An "environmental service" is an object available via {@link Environment.get}.
     *
     * Any object may be an environmental service.  The methods in this interface are optional.
     */
    export interface Service {
        /**
         * Asynchronous construction, respected by {@link Environment.load}.
         */
        construction?: Promise<any>;

        /**
         * Standard diagnostic presentation.
         */
        [Diagnostic.presentation]?: Diagnostic.Presentation;

        /**
         * Standard diagnostic value.
         */
        [Diagnostic.value]?: unknown;
    }

    /**
     * A factory for a {@link Service}.  Any constructor may be a service factory.
     */
    export interface Factory<T extends Service> {
        new (...args: any[]): T;

        /**
         * The environment will create the service automatically if the factory supports {@link create}.
         */
        [create]?: (environment: Environment) => T;
    }

    /**
     * Events related to service lifecycle.
     */
    export interface ServiceEvents<T extends abstract new (...args: any[]) => T> {
        added: Observable<[instance: InstanceType<T>]>;
        deleted: Observable<[instance: InstanceType<T>]>;
    }
}
