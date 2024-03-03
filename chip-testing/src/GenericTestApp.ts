#!/usr/bin/env node
/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { getIntParameter, getParameter, hasParameter } from "@project-chip/matter-node.js/util";
import { Environment } from "@project-chip/matter.js/environment";
import { ClassExtends } from "@project-chip/matter.js/util";
import { StorageBackendSyncJsonFile } from "./storage/StorageBackendSyncJsonFile.js";

export interface TestInstance {
    setup: () => Promise<void>;
    start: () => Promise<void>;
    stop: () => Promise<void>;
}

export async function startTestApp(appName: string, testInstanceClass: ClassExtends<TestInstance>) {
    const storageName = `/tmp/chip_${getParameter("KVS") ?? "kvs"}`;

    const storage = new StorageBackendSyncJsonFile(storageName);
    if (hasParameter("factoryreset")) {
        storage.clear();
    }

    const testInstance = new testInstanceClass(storage, {
        appName,
        discriminator: getIntParameter("discriminator"),
        passcode: getIntParameter("passcode"),
    });

    await testInstance.setup();
    await testInstance.start();

    console.log(`======> Waiting for tests`);

    function exitHandler(signal: string) {
        console.log(`======> Closing test instance because of ${signal} ...`);
        testInstance
            .stop()
            .then(() => {
                const runtime = Environment.default.runtime;
                runtime.cancel();
                runtime.inactive
                    .then(() => {
                        storage
                            .close()
                            .then(() => {
                                console.log(`======> Test instance successfully closed.`);
                                process.exit(0);
                            })
                            .catch(error => {
                                console.log(error.stack);
                                process.exit(1);
                            });
                    })
                    .catch(error => {
                        console.log(error.stack);
                        process.exit(1);
                    });
            })
            .catch(error => {
                console.log(error.stack);
                process.exit(1);
            });
    }

    process.on("SIGTERM", () => exitHandler("SIGTERM"));
    process.on("SIGINT", () => exitHandler("SIGINT"));

    process.on("exit", code => console.log(`======> Exit Test instance with code ${code}`));
}
