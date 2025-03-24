/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    ChannelType,
    Diagnostic,
    isIPv4,
    isIPv6,
    Logger,
    MAX_UDP_MESSAGE_SIZE,
    NetworkError,
    NoAddressAvailableError,
    repackErrorAs,
    UdpChannel,
    UdpChannelOptions,
} from "#general";
import { RetransmissionLimitReachedError } from "#protocol";
import * as dgram from "node:dgram";
import { NodeJsNetwork } from "./NodeJsNetwork.js";

const logger = Logger.get("NodejsChannel");

function createDgramSocket(host: string | undefined, port: number | undefined, options: dgram.SocketOptions) {
    const socket = dgram.createSocket(options);
    return new Promise<dgram.Socket>((resolve, reject) => {
        const handleBindError = (error: Error) => {
            try {
                socket.close();
            } catch (error) {
                logger.debug("Error closing socket", error);
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

export class NodeJsUdpChannel implements UdpChannel {
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
            netInterfaceZone = NodeJsNetwork.getNetInterfaceZoneIpv6(netInterface);
            let multicastInterface: string | undefined;
            if (type === "udp4") {
                multicastInterface = NodeJsNetwork.getMulticastInterfaceIpv4(netInterface);
                if (multicastInterface === undefined) {
                    throw new NoAddressAvailableError(`No IPv4 addresses on interface "${netInterface}"`);
                }
            } else {
                if (netInterfaceZone === undefined) {
                    throw new NoAddressAvailableError(`No IPv6 addresses on interface "${netInterface}"`);
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
            const multicastInterfaces = NodeJsNetwork.getMembershipMulticastInterfaces(netInterface, type === "udp4");
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
        return new NodeJsUdpChannel(type, socket, netInterfaceZone);
    }

    readonly maxPayloadSize = MAX_UDP_MESSAGE_SIZE;

    constructor(
        private readonly type: "udp4" | "udp6",
        private readonly socket: dgram.Socket,
        private readonly netInterface?: string,
    ) {}

    onData(listener: (netInterface: string, peerAddress: string, peerPort: number, data: Uint8Array) => void) {
        const messageListener = (data: Uint8Array, { address, port }: dgram.RemoteInfo) => {
            const netInterface = this.netInterface ?? NodeJsNetwork.getNetInterfaceForIp(address);
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

    async send(host: string, port: number, data: Uint8Array) {
        return new Promise<void>((resolve, reject) => {
            try {
                this.socket.send(data, port, host, error => {
                    if (error !== null) {
                        const netError =
                            "code" in error && error.code === "EHOSTUNREACH"
                                ? repackErrorAs(
                                      error,
                                      // TODO - this is a routing error; current error indicates timeout and is defined
                                      // in higher-level module (MessageExchange)
                                      RetransmissionLimitReachedError,
                                  )
                                : repackErrorAs(error, NetworkError);
                        reject(netError);
                        return;
                    }
                    resolve();
                });
            } catch (error) {
                reject(repackErrorAs(error, NetworkError));
            }
        });
    }

    async close() {
        try {
            this.socket.close();
        } catch (error) {
            if (!(error instanceof Error) || error.message !== "Not running") {
                logger.debug("Error on closing socket", error);
            }
        }
    }

    get port() {
        return this.socket.address().port;
    }

    supports(type: ChannelType, address?: string) {
        if (type !== ChannelType.UDP) {
            return false;
        }

        if (address === undefined) {
            return true;
        }

        // TODO - we currently only discriminate based on protocol type.  We should also determine whether the address subnet is correct

        if (this.type === "udp4") {
            return isIPv4(address);
        }

        return isIPv6(address);
    }
}
