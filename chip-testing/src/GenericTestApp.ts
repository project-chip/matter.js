#!/usr/bin/env node
/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { getIntParameter, getParameter, hasParameter } from "@project-chip/matter-node.js/util";
import { ClassExtends } from "@project-chip/matter.js/util";
import { StorageBackendSyncJsonFile } from "./storage/StorageBackendSyncJsonFile.js";

export interface TestInstance {
    setup: () => Promise<void>;
    start: () => Promise<void>;
    stop: () => Promise<void>;
}

export async function startTestApp(testInstanceClass: ClassExtends<TestInstance>) {
    const storageName = `/tmp/chip_${getParameter("KVS") ?? "kvs"}`;

    const storage = new StorageBackendSyncJsonFile(storageName);
    if (hasParameter("factoryreset")) {
        storage.clear();
    }

    const testInstance = new testInstanceClass(storage, {
        discriminator: getIntParameter("discriminator"),
        passcode: getIntParameter("passcode"),
    });

    await testInstance.setup();
    await testInstance.start();

    console.log(`Wait for tests`);

    process.on("SIGTERM", () => {
        console.log(`Close test instance ...`);
        testInstance
            .stop()
            .then(() =>
                storage.close().then(() => {
                    console.log(`Test instance successfully closed.`);
                    process.exit(0);
                }),
            )
            .catch(error => {
                console.log(error.stack);
                process.exit(1);
            });
    });
}
