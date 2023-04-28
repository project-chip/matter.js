/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UdpChannel, UdpChannelOptions } from "./UdpChannel.js";

export abstract class Network {
    static get: () => Network = () => { throw new Error("No provider configured"); };

    abstract getNetInterfaces(): string[];
    abstract getIpMac(netInterface: string): { mac: string, ips: string[] } | undefined;
    abstract createUdpChannel(options: UdpChannelOptions): Promise<UdpChannel>;
}
