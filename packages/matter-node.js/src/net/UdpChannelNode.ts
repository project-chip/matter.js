/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic, Logger } from "@project-chip/matter.js/log";
import { NetworkError, UdpChannel, UdpChannelOptions } from "@project-chip/matter.js/net";
import { ByteArray } from "@project-chip/matter.js/util";
import * as dgram from "dgram";
import { NetworkNode } from "./NetworkNode.js";

const logger = Logger.get("UdpChannelNode");

function createDgramSocket(host: string | undefined, port: number | undefined, options: dgram.SocketOptions) {
    const socket = dgram.createSocket(options);
    return new Promise<dgram.Socket>((resolve, reject) => {
        const handleBindError = (error: Error) => {
            try {
                socket.close();
            } catch (error) {
                logger.debug("Error on closing socket", error);
            }
            reject(error);
        };
        socket.on("error", handleBindError);
        socket.bind(port, host, () => {
            const { address: localHost, port: localPort } = socket.address();
            logger.debug(
                "Socket created and bound ",
                Diagnostic.dict({
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
    static async create({
        listeningPort,
        type,
        listeningAddress,
        netInterface,
        membershipAddresses,
    }: UdpChannelOptions) {
        const socketOptions: dgram.SocketOptions = { type, reuseAddr: true };
        if (type === "udp6") {
            socketOptions.ipv6Only = true;
        }
        const socket = await createDgramSocket(listeningAddress, listeningPort, socketOptions);
        socket.setBroadcast(true);
        let netInterfaceZone: string | undefined;
        if (netInterface !== undefined) {
            netInterfaceZone = NetworkNode.getNetInterfaceZoneIpv6(netInterface);
            let multicastInterface: string | undefined;
            if (type === "udp4") {
                multicastInterface = NetworkNode.getMulticastInterfaceIpv4(netInterface);
                if (multicastInterface === undefined) {
                    throw new NetworkError(`No IPv4 addresses on interface: ${netInterface}`);
                }
            } else {
                if (netInterfaceZone === undefined) {
                    throw new NetworkError(`No IPv6 addresses on interface: ${netInterface}`);
                }
                multicastInterface = `::%${netInterfaceZone}`;
            }
            logger.debug(
                "Initialize multicast",
                Diagnostic.dict({
                    address: `${multicastInterface}:${listeningPort}`,
                    interface: netInterface,
                    type: type,
                }),
            );
            socket.setMulticastInterface(multicastInterface);
        }
        if (membershipAddresses !== undefined) {
            const multicastInterfaces = NetworkNode.getMembershipMulticastInterfaces(netInterface, type === "udp4");
            for (const address of membershipAddresses) {
                for (const multicastInterface of multicastInterfaces) {
                    try {
                        socket.addMembership(address, multicastInterface);
                    } catch (error) {
                        logger.warn(
                            `Error adding membership for address ${address}${
                                multicastInterface ? ` with interface ${multicastInterface}` : ""
                            }: ${error}`,
                        );
                    }
                }
            }
        }
        return new UdpChannelNode(socket, netInterfaceZone);
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
                    const netError = new NetworkError(error.message);
                    netError.stack = error.stack;
                    reject(netError);
                    return;
                }
                resolve();
            });
        });
    }

    async close() {
        try {
            this.socket.close();
        } catch (error) {
            logger.debug("Error on closing socket", error);
        }
    }

    get port() {
        return this.socket.address().port;
    }
}
