/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isIPv4 } from "../../util/Ip.js";
import { Network, NetworkInterface, NetworkInterfaceDetails } from "../Network.js";
import { UdpChannel, UdpChannelOptions } from "../UdpChannel.js";
import { FAKE_INTERFACE_NAME } from "./SimulatedNetwork.js";
import { UdpChannelFake } from "./UdpChannelFake.js";

export class NetworkFake extends Network {
    private readonly ipV4: string[];
    private readonly ipV6: string[];

    constructor(
        private readonly mac: string,
        ips: string[],
    ) {
        super();
        this.ipV4 = ips.filter(ip => isIPv4(ip));
        this.ipV6 = ips.filter(ip => !isIPv4(ip));
    }

    getNetInterfaces(): NetworkInterface[] {
        return [{ name: FAKE_INTERFACE_NAME }];
    }

    getIpMac(_netInterface: string): NetworkInterfaceDetails {
        return { mac: this.mac, ipV4: this.ipV4, ipV6: this.ipV6 };
    }

    override createUdpChannel(options: UdpChannelOptions): Promise<UdpChannel> {
        return UdpChannelFake.create(this, options);
    }
}
