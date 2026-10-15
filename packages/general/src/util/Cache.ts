/**
 * Cache computed values or resources for a specified duration to improve performances.
 *
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClosedError } from "#MatterError.js";
import { Duration } from "#time/Duration.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Time, Timer } from "../time/Time.js";
import { Lifetime } from "./Lifetime.js";

/** ASCII Unit Separator — unlikely to appear in the interface names, IPs, or booleans current callers pass. */
const KEY_SEPARATOR = "\x1F";

class GenericCache<T> {
    protected readonly knownKeys = new Set<string>();
    protected readonly values = new Map<string, T>();
    protected readonly timestamps = new Map<string, number>();
    private readonly periodicTimer: Timer;
    readonly #lifetime: Lifetime;

    constructor(
        name: string,
        private readonly expiration: Duration,
        private readonly expireCallback?: (key: string, value: T) => Promise<void>,
        lifetime: Lifetime.Owner = Lifetime.process,
    ) {
        this.#lifetime = lifetime.join(`${name} cache`);
        const lifetimeName = String(this.#lifetime.name);
        this.periodicTimer = Time.getPeriodicTimer(
            Diagnostic.upgrade(`${lifetimeName} expiration`, [Diagnostic.strong(lifetimeName), "expiration"]),
            expiration,
            () => this.expire(),
        ).start();
        this.periodicTimer.utility = true;
    }

    // Single-param keys must stay identical to the stringified raw value so `keys()` → `get()` round-trips.
    protected keyFor(params: unknown[]): string {
        return params.map(p => String(p)).join(KEY_SEPARATOR);
    }

    keys() {
        return Array.from(this.knownKeys.values());
    }

    async delete(key: string) {
        // Cached-undefined must still trigger expireCallback.
        if (this.expireCallback !== undefined && this.values.has(key)) {
            await this.expireCallback(key, this.values.get(key) as T);
        }
        this.values.delete(key);
        this.timestamps.delete(key);
    }

    /** Evict the entry addressed by the same params passed to {@link Cache.get}/{@link AsyncCache.get}. */
    async evict(...params: unknown[]) {
        await this.delete(this.keyFor(params));
    }

    async clear() {
        for (const key of this.values.keys()) {
            await this.delete(key);
        }
        this.values.clear();
        this.timestamps.clear();
    }

    /**
     * Expire all values and refuse further {@link Cache.get}/{@link AsyncCache.get} calls.  Creations already pending
     * finish and are expired like any other value.
     */
    async close() {
        using _closing = this.#lifetime.closing();
        this.periodicTimer.stop();
        await this.clear();
        this.knownKeys.clear();
    }

    /**
     * Set once this cache or any lifetime enclosing it begins closing, so an owner that closes before calling
     * {@link close} already stops new values.
     */
    protected get isClosed() {
        for (let lifetime: Lifetime | undefined = this.#lifetime; lifetime !== undefined; lifetime = lifetime.owner) {
            if (lifetime.isClosing) {
                return true;
            }
        }
        return false;
    }

    protected closedError() {
        return new ClosedError(`${String(this.#lifetime.name)} is closed`);
    }

    private async expire() {
        const now = Time.nowMs;
        for (const [key, timestamp] of this.timestamps.entries()) {
            if (now - timestamp < this.expiration) continue;
            await this.delete(key);
        }
    }
}

export class Cache<T> extends GenericCache<T> {
    constructor(
        name: string,
        private readonly generator: (...params: any[]) => T,
        expiration: Duration,
        expireCallback?: (key: string, value: T) => Promise<void>,
        lifetime?: Lifetime.Owner,
    ) {
        super(name, expiration, expireCallback, lifetime);
    }

    /**
     * @throws {ClosedError} if the cache is closed
     */
    get(...params: any[]) {
        if (this.isClosed) {
            throw this.closedError();
        }
        const key = this.keyFor(params);
        if (!this.values.has(key)) {
            this.values.set(key, this.generator(...params));
            this.knownKeys.add(key);
        }
        this.timestamps.set(key, Time.nowMs);
        return this.values.get(key) as T;
    }
}

export class AsyncCache<T> extends GenericCache<T> {
    readonly #inflight = new Map<string, Promise<T>>();

    constructor(
        name: string,
        private readonly generator: (...params: any[]) => Promise<T>,
        expiration: Duration,
        expireCallback?: (key: string, value: T) => Promise<void>,
        lifetime?: Lifetime.Owner,
    ) {
        super(name, expiration, expireCallback, lifetime);
    }

    /**
     * Rejects with {@link ClosedError} if the cache is closed.
     */
    get(...params: any[]): Promise<T> {
        if (this.isClosed) {
            return Promise.reject(this.closedError());
        }
        const key = this.keyFor(params);
        if (this.values.has(key)) {
            this.timestamps.set(key, Time.nowMs);
            return Promise.resolve(this.values.get(key) as T);
        }
        let pending = this.#inflight.get(key);
        if (pending === undefined) {
            pending = this.#fill(key, params);
            this.#inflight.set(key, pending);
            // Cleanup runs off the side — chaining it onto the caller's path would delay resolution by a microtask.
            const drop = () => this.#inflight.delete(key);
            pending.then(drop, drop);
        }
        return pending;
    }

    async #fill(key: string, params: any[]): Promise<T> {
        const value = await this.generator(...params);
        this.values.set(key, value);
        this.knownKeys.add(key);
        this.timestamps.set(key, Time.nowMs);
        return value;
    }

    // Sync point for `expireCallback` to see the settled value.
    override async delete(key: string) {
        const pending = this.#inflight.get(key);
        if (pending !== undefined) {
            try {
                await pending;
            } catch {
                // get() callers see the rejection on their own promise; don't surface it through delete().
            }
        }
        await super.delete(key);
    }

    override async clear() {
        await Promise.allSettled(this.#inflight.values());
        await super.clear();
    }
}
