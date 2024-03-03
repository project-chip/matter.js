/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError, NoProviderError } from "../common/MatterError.js";
import { UdpChannel, UdpChannelOptions } from "./UdpChannel.js";

export class NetworkError extends MatterError {}

export abstract class Network {
    // TODO - remove this singleton
    static get: () => Network = () => {
        throw new NoProviderError("No provider configured");
    };

    abstract getNetInterfaces(): string[];
    abstract getIpMac(netInterface: string): { mac: string; ips: string[] } | undefined;
    abstract createUdpChannel(options: UdpChannelOptions): Promise<UdpChannel>;

    async close() {
        // Nothing to do
    }
}
