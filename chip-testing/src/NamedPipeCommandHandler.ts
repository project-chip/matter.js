/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isObject } from "@matter/general";
import { SwitchServer } from "@matter/main/behaviors";
import { Endpoint, ServerNode } from "@matter/node";
import { execSync } from "child_process";
import { constants } from "node:fs";
import { FileHandle, open, unlink } from "node:fs/promises";
import { Socket } from "node:net";
import { NamedPipeCommand } from "./NamedPipeCommands.js";
import { SwitchSimulator } from "./simulators/SwitchSimulator.js";

export class NamedPipeCommandHandler {
    #namedPipeName: string;
    #namedPipe?: FileHandle;
    #namedPipeSocket?: Socket;
    #serverNode: ServerNode;
    #stopping = false;

    constructor(namedPipeName: string, serverNode: ServerNode) {
        this.#namedPipeName = namedPipeName;
        this.#serverNode = serverNode;
    }

    async #openSocket() {
        if (this.#stopping) {
            return;
        }
        if (this.#namedPipe !== undefined) {
            try {
                await this.#namedPipe.close();
            } catch (error: any) {
                // EBADF can happen if the pipe is already closed from outside, so ignore that case
                if (error.code !== "EBADF") {
                    console.log("Error closing named pipe:", error);
                }
            }
        }

        this.#namedPipe = await open(this.#namedPipeName, constants.O_RDONLY | constants.O_NONBLOCK);
        this.#namedPipeSocket = new Socket({ fd: this.#namedPipe.fd });
        console.log(`Named pipe opened: ${this.#namedPipeName}`);

        this.#namedPipeSocket.on("data", dataBuf => {
            let data: Record<string, unknown>;
            try {
                data = JSON.parse(dataBuf.toString());
            } catch (error) {
                console.log("Error parsing named pipe data:", error);
                return;
            }
            console.log("Named pipe data:", data);

            if (!isObject(data) || !("Name" in data)) {
                console.log("Invalid named pipe data:", data);
                return;
            }

            this.#handleNamedPipeData(data as NamedPipeCommand).catch(error =>
                console.error("Error handling named pipe data:", error),
            );
        });

        this.#namedPipeSocket.on("error", err => {
            console.log("Named pipe error:", err);
        });

        this.#namedPipeSocket.on("close", () => {
            console.log("Named pipe closed");
            this.#openSocket().catch(error => console.log("Error on reopening named pipe", error)); // Open new Socket for next command
        });
    }

    async listen() {
        execSync(`mkfifo ${this.#namedPipeName}`);
        console.log(`Named pipe created: ${this.#namedPipeName}`);

        await this.#openSocket();
    }

    async close() {
        this.#stopping = true;
        try {
            await this.#namedPipe?.close();
        } catch (error) {
            console.log("Error closing named pipe:", error);
        }
        this.#namedPipe = undefined;
        this.#namedPipeSocket = undefined;
        await unlink(this.#namedPipeName);
    }

    async #handleNamedPipeData(data: NamedPipeCommand) {
        const name = data.Name;

        const endpointId = data.EndpointId;
        let endpoint: Endpoint | undefined;
        if (endpointId !== undefined) {
            // Find the endpoint instance if an EndpointId is set
            this.#serverNode.visit(visitedEndpoint => {
                if (visitedEndpoint.number === endpointId) {
                    if (endpoint !== undefined) {
                        throw new Error("Duplicate endpoint number? Should never happen");
                    }
                    endpoint = visitedEndpoint;
                }
            });
        }

        switch (name) {
            case "SimulateLongPress":
                if (endpoint === undefined) {
                    throw new Error(`Endpoint ${endpointId} not existing`);
                }
                await SwitchSimulator.simulateLongPress(endpoint, data);
                break;
            case "SimulateMultiPress":
                if (endpoint === undefined) {
                    throw new Error(`Endpoint ${endpointId} not existing`);
                }
                await SwitchSimulator.simulateMultiPress(endpoint, data);
                break;
            case "SimulateLatchPosition":
                if (endpoint === undefined) {
                    throw new Error(`Endpoint ${endpointId} not existing`);
                }
                await endpoint.setStateOf(SwitchServer, { currentPosition: data.PositionId });
                break;
            default:
                console.log(`Unknown named pipe command: ${name}`);
        }
    }
}
