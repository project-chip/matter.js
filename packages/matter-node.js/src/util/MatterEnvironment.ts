/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { requireMinNodeVersion } from "./Node";
requireMinNodeVersion(16);

import { singleton } from "@project-chip/matter.js/util";
import { Time } from "@project-chip/matter.js/time";
import { TimeNode } from "../time/TimeNode";
Time.get = singleton(() => new TimeNode());

import { Network } from "@project-chip/matter.js/net";
import { NetworkNode } from "../net/NetworkNode";
Network.get = singleton(() => new NetworkNode());

import { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoNode } from "../crypto/CryptoNode";
Crypto.get = singleton(() => new CryptoNode());

import { Logger, Format } from "@project-chip/matter.js/log";

import { StorageManager } from "@project-chip/matter.js/storage";
import { StorageBackendDisk } from "../storage";

const logger = Logger.get("MatterEnvironment");
let initialized = false;

let shutdownOK: (value: any) => void;
let shutdownError: (reason?: Error) => void;

async function interrupt() {
    await MatterEnvironment.shutdown();
}

function interruptHandler() {
    interrupt().catch((reason) => {
        console.error("Internal error handling interrupt:", reason);
    });
}

/**
 * Implements default configuration of matter.js and matter-node.js.
 */
export class MatterEnvironment {
    static session: Promise<void>;

    /**
     * Initialize the matter environment.
     * 
     * @param name default the name of the application
     */
    static async startup(name: string) {
        if (initialized) {
            throw new Error("Environment is already started");
        }

        logger.info(`Startup of ${name}`);
        await configureDefaultStorage(name);

        this.session = new Promise((resolve, reject) => {
            shutdownOK = resolve;
            shutdownError = reject;
        });

        initialized = true;

        process.on("SIGINT", interruptHandler);
    }

    /**
     * Return matter environment to uninitialized state.
     */
    static async shutdown(reason?: any) {
        if (!initialized) {
            throw new Error("Environment is not started");
        }

        try {
            await closeStorage();
            process.off("SIGINT", interruptHandler);
        } catch (e) {
            logger.error(e);
        }

        initialized = false;
        logger.info("Shutdown");

        if (reason) {
            shutdownError(reason);
        } else {
            shutdownOK(undefined);
        }
    }

    /**
     * Execute logic with automatic environment management.
     */
    static async run(name: string, fn: () => Promise<void>) {
        await this.startup(name);

        try {
            await fn();
        } catch (e) {
            await this.shutdown(e);
        }

        await this.session;
    }

    /**
     * Execute logic with automatic environment and process management.
     */
    static exec(name: string, fn: () => Promise<void>) {
        this.run(name, fn).then(() => {
            process.exit(0);
        }).catch((reason) => {
            logger.error(reason);
            process.exit(1);
        });
    }
}

requireMinNodeVersion(16);

// Make a best guess as to whether the environment supports ANSI escape codes
if (process.stdout.isTTY || process.env.TERM_PROGRAM == "vscode" || process.env.VSCODE_INSPECTOR_OPTIONS) {
    Logger.format = Format.ANSI;
}

let defaultStorageManager: StorageManager | undefined;

async function configureDefaultStorage(name: string) {
    if (defaultStorageManager) {
        await closeStorage();
    }

    const backend = new StorageBackendDisk(name);
    const manager = new StorageManager(backend);
    await manager.initialize();

    StorageManager.get = () => manager;
}

async function closeStorage() {
    if (defaultStorageManager) {
        await defaultStorageManager.close();
        defaultStorageManager = undefined;
    }
}
