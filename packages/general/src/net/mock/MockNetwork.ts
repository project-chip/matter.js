/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChannelType } from "#net/Channel.js";
import { isIPv4 } from "../../util/Ip.js";
import { Network, NetworkInterface, NetworkInterfaceDetails } from "../Network.js";
import { UdpChannelOptions } from "../UdpChannel.js";
import { MockUdpChannel } from "./MockUdpChannel.js";
import type { NetworkSimulator } from "./NetworkSimulator.js";

export class MockNetwork extends Network {
    readonly #simulator: NetworkSimulator;
    readonly #mac: string;
    readonly #ipV4: string[];
    readonly #ipV6: string[];

    constructor(simulator: NetworkSimulator, mac: string, ips: string[]) {
        super();
        this.#simulator = simulator;
        this.#mac = mac;
        this.#ipV4 = ips.filter(ip => isIPv4(ip));
        this.#ipV6 = ips.filter(ip => !isIPv4(ip));
    }

    get simulator() {
        return this.#simulator;
    }

    getNetInterfaces(): NetworkInterface[] {
        return [{ name: "fake0" }];
    }

    getIpMac(_netInterface: string): NetworkInterfaceDetails {
        return { mac: this.#mac, ipV4: this.#ipV4, ipV6: this.#ipV6 };
    }

    override createUdpChannel(options: UdpChannelOptions) {
        return Promise.resolve(new MockUdpChannel(this, options));
    }

    supports(type: ChannelType, _address: string) {
        return type === ChannelType.UDP;
    }
}
