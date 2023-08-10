/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter.js/log";
import { UdpChannel, UdpChannelOptions } from "@project-chip/matter.js/net";
import { ByteArray } from "@project-chip/matter.js/util";

import * as dgram from "dgram";
import { NetworkNode } from "./NetworkNode";

const logger = Logger.get("UdpChannelNode");

function createDgramSocket(host: string | undefined, port: number | undefined, options: dgram.SocketOptions) {
    const socket = dgram.createSocket(options);
    return new Promise<dgram.Socket>((resolve, reject) => {
        const handleBindError = (error: Error) => {
            socket.close();
            reject(error);
        };
        socket.on("error", handleBindError);
        socket.bind(port, host, () => {
            const { address: localHost, port: localPort } = socket.address();
            logger.debug(
                "Socket created and bound ",
                Logger.dict({
                    remoteAddress: `${host}:${port}`,
                    localAddress: `${localHost}:${localPort}`,
                }),
            );
            socket.removeListener("error", handleBindError);
            socket.on("error", error => logger.error(error));
            resolve(socket);
        });
    });
}

export class UdpChannelNode implements UdpChannel {
    static async create({ listeningPort, type, listeningAddress, netInterface }: UdpChannelOptions) {
        const socketOptions: dgram.SocketOptions = { type, reuseAddr: true };
        if (type === "udp6") {
            socketOptions.ipv6Only = true;
        }
        const socket = await createDgramSocket(listeningAddress, listeningPort, socketOptions);
        socket.setBroadcast(true);
        if (netInterface !== undefined) {
            const multicastInterface = NetworkNode.getMulticastInterface(netInterface, type === "udp4");
            logger.debug(
                "Initialize multicast",
                Logger.dict({
                    address: `${multicastInterface}:${listeningPort}`,
                    interface: netInterface,
                    type: type,
                }),
            );
            socket.setMulticastInterface(multicastInterface);
        }
        return new UdpChannelNode(socket, netInterface);
    }

    constructor(
        private readonly socket: dgram.Socket,
        private readonly netInterface?: string,
    ) {}

    onData(listener: (netInterface: string, peerAddress: string, peerPort: number, data: ByteArray) => void) {
        const messageListener = (data: ByteArray, { address, port }: dgram.RemoteInfo) => {
            const netInterface = this.netInterface ?? NetworkNode.getNetInterfaceForIp(address);
            if (netInterface === undefined) return;
            listener(netInterface, address, port, data);
        };

        this.socket.on("message", messageListener);
        return {
            close: async () => {
                this.socket.removeListener("message", messageListener);
            },
        };
    }

    async send(host: string, port: number, data: ByteArray) {
        return new Promise<void>((resolve, reject) => {
            this.socket.send(data, port, host, error => {
                if (error !== null) {
                    reject(error);
                    return;
                }
                resolve();
            });
        });
    }

    async close() {
        this.socket.close();
    }
}
