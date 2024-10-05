/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError, Storage } from "@matter/main";
import { TestInstance } from "../src/GenericTestApp.js";
import { StorageBackendSyncJsonFile } from "../src/storage/StorageBackendSyncJsonFile.js";

export type AppImplementation = new (
    storage: Storage,
    options: {
        appName: string;
        discriminator?: number;
        passcode?: number;
    },
) => TestInstance;

export function App(implementation: AppImplementation): TestInstance {
    let app: undefined | TestInstance;

    return {
        async setup() {
            const storage = new StorageBackendSyncJsonFile("/tmp/chip_kvs");

            app = new implementation(storage, {
                appName: "TestApp",
                discriminator: 1234,
                passcode: 20202021,
            });

            await app.setup();
        },

        async start() {
            if (app === undefined) {
                throw new InternalError("App start before setup");
            }
            await app.start();
        },

        async stop() {
            if (app === undefined) {
                throw new InternalError("App stop before setup");
            }
            await app.stop();
        },
    };
}
