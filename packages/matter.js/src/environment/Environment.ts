/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UnsupportedDependencyError } from "../common/Lifecycle.js";
import { DiagnosticSource } from "../log/DiagnosticSource.js";
import { Logger } from "../log/Logger.js";
import { Time } from "../time/Time.js";
import { Observable } from "../util/Observable.js";
import { Environmental } from "./Environmental.js";
import { RuntimeService } from "./RuntimeService.js";
import { VariableService } from "./VariableService.js";

const logger = Logger.get("Environment");

/**
 * Access to general platform-dependent features.
 *
 * The following variables are defined by this class:
 * * `log.level` - Log level to use {@link Logger.LEVEL}
 * * `log.format` - Log format to use {@link Logger.FORMAT}
 * * `log.stack.limit` - Stack trace limit, see https://nodejs.org/api/errors.html#errorstacktracelimit
 * * `mdns.networkInterface` - Network interface to use for MDNS broadcasts and scanning, default are all available interfaces
 * * `mdns.ipv4` - Also announce/scan on IPv4 interfaces
 *
 * TODO - could remove global singletons by moving here
 */
export class Environment {
    #services?: Map<abstract new (...args: any[]) => any, Environmental.Service>;
    #name: string;
    #parent?: Environment;
    #added = new Observable<[type: abstract new (...args: any[]) => {}, instance: {}]>();
    #deleted = new Observable<[type: abstract new (...args: any[]) => {}, instance: {}]>();
    #serviceEvents = new Map<abstract new (...args: any[]) => any, Environmental.ServiceEvents<any>>();

    constructor(name: string, parent?: Environment) {
        this.#name = name;
        this.#parent = parent;
    }

    /**
     * Determine if an environmental service is available.
     */
    has(type: abstract new (...args: any[]) => any): boolean {
        return this.#services?.get(type) !== undefined || (this.#parent?.has(type) ?? false);
    }

    /**
     * Access an environmental service.
     */
    get<T extends object>(type: abstract new (...args: any[]) => T): T {
        let instance = this.#services?.get(type) ?? this.#parent?.get(type);

        if (instance) {
            return instance as T;
        }

        if ((type as Environmental.Factory<T>)[Environmental.create]) {
            this.set(type, (instance = (type as any)[Environmental.create](this)));
            return instance as T;
        }

        throw new UnsupportedDependencyError(`Required dependency ${type.name}`, "is not available");
    }

    /**
     * Remove an environmental service.
     *
     * @param type the class of the service to remove
     * @param instance optional instance expected, if existing instance does not match it is not deleted
     */
    delete(type: abstract new (...args: any[]) => any, instance?: any) {
        if (instance !== undefined && this.#services?.get(type) !== instance) {
            return;
        }
        this.#services?.delete(type);
        this.#parent?.delete(type);

        this.#deleted.emit(type, instance);

        const serviceEvents = this.#serviceEvents.get(type);
        if (serviceEvents) {
            serviceEvents.deleted.emit(instance);
        }
    }

    /**
     * Access an environmental service, waiting for any async initialization to complete.
     */
    async load<T extends Environmental.Service>(type: Environmental.Factory<T>) {
        const instance = this.get(type);
        await instance.construction;
        return instance;
    }

    /**
     * Install a preinitialized version of an environmental service.
     */
    set<T extends {}>(type: abstract new (...args: any[]) => T, instance: T) {
        if (!this.#services) {
            this.#services = new Map();
        }
        this.#services.set(type, instance as Environmental.Service);
        this.#added.emit(type, instance);
        const serviceEvents = this.#serviceEvents.get(type);
        if (serviceEvents) {
            serviceEvents.added.emit(instance);
        }
    }

    /**
     * Name of the environment.
     */
    get name() {
        return this.#name;
    }

    /**
     * Emits on service add.
     *
     * Currently only emits for services owned directly by this environment.
     */
    get added() {
        return this.#added;
    }

    /**
     * Emits on service delete.
     *
     * Currently only emits for services owned directly by this environment.
     */
    get deleted() {
        return this.#deleted;
    }

    /**
     * Obtain an object with events that trigger when a specific service is added or deleted.
     *
     * This is a more convenient way to observe a specific service than {@link added} and {@link deleted}.
     */
    eventsFor<T extends Environmental.Factory<any>>(type: T) {
        let events = this.#serviceEvents.get(type);
        if (events === undefined) {
            events = {
                added: new Observable(),
                deleted: new Observable(),
            };
            this.#serviceEvents.set(type, events);
        }
        return events as Environmental.ServiceEvents<T>;
    }

    /**
     * The default environment.
     *
     * Currently only emits for services owned directly by this environment.
     */
    static get default() {
        return global;
    }

    /**
     * Set the default environment.
     */
    static set default(env: Environment) {
        global = env;

        Logger.level = env.vars.get("log.level", Logger.level);
        Logger.format = env.vars.get("log.format", Logger.format);

        const stackLimit = global.vars.number("log.stack.limit");
        if (stackLimit !== undefined) {
            Error.stackTraceLimit = stackLimit;
        }
    }

    /**
     * Shortcut for accessing {@link VariableService.vars}.
     */
    get vars() {
        return this.get(VariableService);
    }

    /**
     * Shortcut for accessing {@link RuntimeService}.
     */
    get runtime() {
        return this.get(RuntimeService);
    }

    /**
     * Display tasks that supply diagnostics.
     */
    diagnose() {
        Time.getTimer("Diagnostics", 0, () => {
            try {
                logger.notice("Diagnostics follow", DiagnosticSource);
            } catch (e) {
                logger.error(`Unhandled error gathering diagnostics:`, e);
            }
        }).start();
    }

    protected loadVariables(): Record<string, any> {
        return {};
    }
}

let global: Environment = new Environment("default");
