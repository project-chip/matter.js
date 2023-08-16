/**
 * Cache computed values or resources for a specified duration to improve performances.
 *
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time, Timer } from "../time/Time.js";

export class Cache<T> {
    private readonly values = new Map<string, T>();
    private readonly timestamps = new Map<string, number>();
    private readonly periodicTimer: Timer;

    constructor(
        private readonly generator: (...params: any[]) => T,
        private readonly expirationMs: number,
        private readonly expireCallback?: (key: string, value: T) => Promise<void>,
    ) {
        this.periodicTimer = Time.getPeriodicTimer(expirationMs, () => this.expire()).start();
    }

    get(...params: any[]) {
        const key = params.join(",");
        let value = this.values.get(key);
        if (value === undefined) {
            value = this.generator(...params);
            this.values.set(key, value);
        }
        this.timestamps.set(key, Time.nowMs());
        return value;
    }

    private async deleteEntry(key: string) {
        const value = this.values.get(key);
        if (this.expireCallback !== undefined && value !== undefined) {
            await this.expireCallback(key, value);
        }
        this.values.delete(key);
        this.timestamps.delete(key);
    }

    async clear() {
        for (const key of this.values.keys()) {
            await this.deleteEntry(key);
        }
        this.values.clear();
        this.timestamps.clear();
    }

    async close() {
        await this.clear();
        this.periodicTimer.stop();
    }

    private async expire() {
        const now = Time.nowMs();
        for (const [key, timestamp] of this.timestamps.entries()) {
            if (now - timestamp < this.expirationMs) continue;
            await this.deleteEntry(key);
        }
    }
}
