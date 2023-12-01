/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter.js/log";
import { NetworkError, UdpChannel, UdpChannelOptions } from "@project-chip/matter.js/net";
import { MatterCoreSpecificationV1_2 } from "@project-chip/matter.js/spec";
import { ByteArray } from "@project-chip/matter.js/util";
import * as dgram from "dgram";
import { NetworkNode } from "./NetworkNode.js";

/** @see {@link MatterCoreSpecificationV1_2} § 4.4.4 */
const MAX_UDP_PAYLOAD_SIZE = 1280;

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
                Logger.dict({
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
            if (data.length > MAX_UDP_PAYLOAD_SIZE) {
                logger.warn(
                    `Ignoring UDP message with size ${data.length} from ${address}:${port}, which is larger than the maximum allowed size of ${MAX_UDP_PAYLOAD_SIZE}.`,
                );
                return;
            }
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
            if (data.length > MAX_UDP_PAYLOAD_SIZE) {
                reject(
                    new NetworkError(
                        `Cannot send UDP message with size ${data.length}, which is larger than the maximum allowed size of ${MAX_UDP_PAYLOAD_SIZE}.`,
                    ),
                );
                return;
            }
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
