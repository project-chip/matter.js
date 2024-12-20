/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BackchannelCommand } from "../device/backchannel.js";

const utf8 = new TextDecoder();

/**
 * Implements back-channel communication between CHIP and the local subject.
 *
 * Must be extended to implement actual communication.
 */
export abstract class CommandPipe {
    #filename: string;
    #subject: BackchannelCommand.Subject;

    constructor(subject: BackchannelCommand.Subject, appName: string) {
        this.#subject = subject;
        this.#filename = `/tmp/${appName}_fifo_1`;
    }

    get filename() {
        return this.#filename;
    }

    abstract initialize(): Promise<void>;
    abstract close(): Promise<void>;

    protected onData(dataBuf: Uint8Array) {
        let data: Record<string, unknown>;
        try {
            data = JSON.parse(utf8.decode(dataBuf));
        } catch (error) {
            console.error("Error parsing pipe command:", error);
            return;
        }

        if (typeof data !== "object" || data === null) {
            console.error("Pipe command is not an object:", data);
            return;
        }

        if (typeof data.Name !== "string") {
            console.error("Pipe command does not have a name:", data);
            return;
        }

        data.Name = data.Name.slice(0, 1).toLowerCase() + data.Name.slice(1);

        data = Object.fromEntries(
            Object.entries(data).map(([k, v]) => {
                k = k.slice(0, 1).toLowerCase() + k.slice(1);
                return [k, v];
            }),
        );

        try {
            const result = this.#subject.backchannel(data as BackchannelCommand);
            if (result) {
                result.catch(listenerError);
            }
        } catch (error) {
            listenerError(error);
        }

        function listenerError(error: unknown) {
            console.error("Unhandled error in pipe command listener:", error);
        }
    }
}
