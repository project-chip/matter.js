/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Listener } from "../../common/TransportInterface.js";
import { ByteArray } from "../../util/ByteArray.js";
import { isIPv4 } from "../../util/Ip.js";
import { NetworkError } from "../Network.js";
import { UdpChannel, UdpChannelOptions } from "../UdpChannel.js";
import { NetworkFake } from "./NetworkFake.js";
import { FAKE_INTERFACE_NAME, SimulatedNetwork } from "./SimulatedNetwork.js";

export class UdpChannelFake implements UdpChannel {
    static async create(
        network: NetworkFake,
        { listeningAddress, listeningPort, netInterface, type }: UdpChannelOptions,
    ) {
        const { ips } = network.getIpMac(netInterface ?? FAKE_INTERFACE_NAME);
        const ipv4 = type === "udp4";
        const localAddress = ips.filter(ip => isIPv4(ip) || !ipv4)[0];
        if (localAddress === undefined) throw new NetworkError("No matching IP on the specified interface");
        return new UdpChannelFake(localAddress, listeningAddress, listeningPort);
    }

    private readonly netListeners = new Array<Listener>();
    private readonly simulatedNetwork = SimulatedNetwork.get();
    private readonly listeningPort: number;

    constructor(
        private readonly localAddress: string,
        private readonly listeningAddress: string | undefined,
        listeningPort?: number,
    ) {
        this.listeningPort = listeningPort ?? 1024 + Math.floor(Math.random() * 64511); // Random port 1024-65535
    }

    onData(listener: (netInterface: string, peerAddress: string, peerPort: number, data: ByteArray) => void) {
        const netListener = this.simulatedNetwork.onUdpData(this.listeningAddress, this.listeningPort, listener);
        this.netListeners.push(netListener);
        return netListener;
    }

    async send(host: string, port: number, data: ByteArray) {
        this.simulatedNetwork.sendUdp(this.localAddress, this.listeningPort, host, port, data);
    }

    async close() {
        for (const netListener of this.netListeners) {
            await netListener.close();
        }
        this.netListeners.length = 0;
    }
}
