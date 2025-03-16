/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger, LogLevel, NotImplementedError } from "@matter/general";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { Readable, Writable } from "node:stream";
import { Data, WebSocket } from "ws";
import { MatterNode } from "./MatterNode.js";
import { Shell } from "./shell/Shell";

// Store active WebSocket
let client: WebSocket;
const socketLogger = "websocket";

export function initializeWebPlumbing(
    theNode: MatterNode,
    nodeNum: number,
    webSocketPort: number,
    webServer: boolean,
    webPort: number,
): void {
    if (webServer) {
        // barebones web server to serve an index.html file that can connect to the WebSocket
        createServer(async (_, res) => {
            try {
                const content = await readFile(`${__dirname}/index.html`);
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(content);
            } catch {
                res.writeHead(404);
                res.end("Not Found");
            }
        }).listen(webPort, () => console.info(`Server running at http://localhost:${webPort}`));
    }

    const wss = new WebSocket.Server({ port: webSocketPort });
    console.info(`WebSocket server running on ws://localhost:${webSocketPort}`);

    console.log =
        console.info =
        console.warn =
        console.error =
            (...args: any[]) => {
                if (client && client.readyState === WebSocket.OPEN) {
                    client.send(args.map(arg => (typeof arg === "object" ? JSON.stringify(arg) : arg)).join(" "));
                } else
                    process.stdout.write(
                        args.map(arg => (typeof arg === "object" ? JSON.stringify(arg) : arg)).join(" ") + "\n",
                    );
            };

    wss.on("connection", (ws: WebSocket) => {
        if (client && client.readyState === WebSocket.OPEN) {
            ws.send("ERROR: Shell in use by another client");
            ws.close();
            return;
        }

        client = ws; // Track the client

        createWebSocketLogger(ws)
            .then(logger => {
                Logger.removeLogger("Shell");
                Logger.addLogger(socketLogger, logger);
            })
            .catch(err => {
                if (!(err instanceof NotImplementedError)) {
                    console.error("Failed to add WebSocket logger: " + err);
                }
            });

        const shell = new Shell(theNode, nodeNum, "", createReadableStream(ws), createWritableStream(ws));
        shell.start(theNode.storageLocation);

        ws.on("close", () => {
            process.stdout.write("Client disconnected\n");
            try {
                if (Logger.getLoggerforIdentifier(socketLogger) !== undefined) {
                    Logger.removeLogger(socketLogger);
                }
            } catch (err) {}

            client = ws;
        });
        ws.on("error", err => {
            process.stderr.write("WebSocket error: " + err + "\n");
            try {
                if (Logger.getLoggerforIdentifier(socketLogger) !== undefined) {
                    Logger.removeLogger(socketLogger);
                }
            } catch (err) {}
        });
    });

    async function createWebSocketLogger(socket: WebSocket): Promise<(level: LogLevel, formattedLog: string) => void> {
        if (socket.readyState === WebSocket.CONNECTING) {
            await new Promise<void>((resolve, reject) => {
                socket.onopen = () => resolve();
                socket.onerror = err => reject(err);
            });
        }

        return (__level: LogLevel, formattedLog: string) => {
            if (socket.readyState === WebSocket.OPEN) {
                socket.send(formattedLog);
            } else {
                process.stderr.write("WebSocket logger not open, log dropped: " + formattedLog + "\n");
            }
        };
    }
}
function createReadableStream(ws: WebSocket): Readable {
    const readable = new Readable({ read() {} });

    ws.on("message", (data: Data) => {
        const chunk = Buffer.isBuffer(data) ? data : Buffer.from(data.toString());

        // add the data to our readable stream that the readLine instance is reading from
        readable.push(chunk);
    });

    ws.on("close", () => {
        readable.push(null);
    });
    ws.on("error", err => {
        readable.emit("error", err);
        readable.push(null);
    });

    return readable;
}
function createWritableStream(ws: WebSocket): Writable {
    const writable = new Writable({
        write(chunk: Buffer, _encoding: string, callback: (error?: Error | null) => void) {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(chunk, callback);
            } else {
                callback(new Error("WebSocket is not open"));
            }
        },
        final(callback: (error?: Error | null) => void) {
            if (ws.readyState === WebSocket.OPEN) {
                ws.close();
            }
            callback();
        },
    });

    ws.on("error", err => writable.emit("WebSocket Write Error: ", err));
    return writable;
}
