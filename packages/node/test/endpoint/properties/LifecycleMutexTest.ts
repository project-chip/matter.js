/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LifecycleMutex } from "#endpoint/properties/LifecycleMutex.js";
import { LogDestination, Logger, LogFormat, LogLevel, MutexClosedError, Seconds } from "@matter/general";

describe("LifecycleMutex", () => {
    before(() => MockTime.init());

    it("does not warn after a hold is refused because the mutex is closed", async () => {
        const warnings = new Array<string>();
        Logger.destinations.capture = LogDestination({
            format: LogFormat.formats.plain,
            write(text, message) {
                if (message.level === LogLevel.WARN && message.facility === "LifecycleMutex") {
                    warnings.push(text);
                }
            },
        });
        try {
            const mutex = new LifecycleMutex("test");
            await mutex.close();

            await expect(mutex.hold("starting test", async () => {})).rejectedWith(MutexClosedError);
            await MockTime.advance(Seconds(10));

            expect(warnings).deep.equals([]);
        } finally {
            delete Logger.destinations.capture;
        }
    });
});
