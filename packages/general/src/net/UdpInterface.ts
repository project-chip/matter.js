/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel, ChannelType, IpNetworkChannel } from "./Channel.js";
import { NetInterface } from "./NetInterface.js";
import { Network, NetworkError } from "./Network.js";
import { ServerAddress, ServerAddressIp } from "./ServerAddress.js";
import { TransportInterface } from "./TransportInterface.js";
import { UdpChannel } from "./UdpChannel.js";

export class UdpInterface implements NetInterface {
    static async create(network: Network, type: "udp4" | "udp6", port?: number, host?: string, netInterface?: string) {
        return new UdpInterface(
            await network.createUdpChannel({ listeningPort: port, type, netInterface, listeningAddress: host }),
        );
    }

    constructor(private readonly server: UdpChannel) {}

    supports(type: ChannelType, address: string) {
        return this.server.supports(type, address);
    }

    async openChannel(address: ServerAddress) {
        if (address.type !== "udp") {
            throw new NetworkError(`Unsupported address type ${address.type}`);
        }
        const { ip, port } = address;
        return Promise.resolve(new UdpConnection(this.server, ip, port));
    }

    onData(listener: (channel: Channel<Uint8Array>, messageBytes: Uint8Array) => void): TransportInterface.Listener {
        return this.server.onData((_netInterface, peerHost, peerPort, data) =>
            listener(new UdpConnection(this.server, peerHost, peerPort), data),
        );
    }

    get port() {
        return this.server.port;
    }

    close() {
        return this.server.close();
    }
}

class UdpConnection implements IpNetworkChannel<Uint8Array> {
    readonly isReliable = false;
    readonly type = ChannelType.UDP;

    constructor(
        private readonly server: UdpChannel,
        private readonly peerAddress: string,
        private readonly peerPort: number,
    ) {}

    get maxPayloadSize() {
        return this.server.maxPayloadSize;
    }

    send(data: Uint8Array) {
        return this.server.send(this.peerAddress, this.peerPort, data);
    }

    get name() {
        return `${this.type}://[${this.peerAddress}]:${this.peerPort}`;
    }

    get networkAddress(): ServerAddressIp {
        return { type: "udp", ip: this.peerAddress, port: this.peerPort };
    }

    async close() {
        // UDP is connectionless, so nothing to do here
    }
}
