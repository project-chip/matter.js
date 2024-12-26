/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BackchannelCommand } from "../device/backchannel.js";
import { Container } from "../docker/container.js";
import { Terminal } from "../docker/terminal.js";
import { CommandPipe } from "./command-pipe.js";

/**
 * A command pipe that reads commands from a Docker container.
 */
export class ContainerCommandPipe extends CommandPipe {
    #container: Container;
    #deactivate?: () => void;
    #stopped?: Promise<void>;

    constructor(container: Container, subject: BackchannelCommand.Subject, appName: string) {
        super(subject, appName);
        this.#container = container;
    }

    override async initialize() {
        await this.#container.createPipe(this.filename);

        this.#stopped = this.#processCommands();
    }

    override async close() {
        this.#deactivate?.();
        this.#deactivate = undefined;

        await this.#stopped;
        this.#stopped = undefined;
    }

    async #processCommands() {
        try {
            while (true) {
                let deactivator;
                const deactivated = new Promise<void>(resolve => {
                    deactivator = this.#deactivate = resolve;
                });

                const terminal = await this.#container.read(this.filename, Terminal.Raw);
                try {
                    const result = await Promise.race([deactivated, terminal.consume()]);
                    if (result === undefined) {
                        break;
                    }

                    this.onData(result);
                } finally {
                    if (this.#deactivate === deactivator) {
                        this.#deactivate = undefined;
                    }

                    try {
                        await terminal.close();
                    } catch (e) {
                        console.warn(`Error closing FIFO listener for ${this.filename}:`, e);
                    }
                }
            }
        } finally {
            try {
                await this.#container.delete(this.filename, { force: true });
            } catch (e) {
                console.warn(`Error deleting FIFO ${this.filename}:`, e);
            }
        }
    }
}
