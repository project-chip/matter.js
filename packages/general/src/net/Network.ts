/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError, NoProviderError } from "../MatterError.js";
import { MaybePromise } from "../util/Promises.js";
import { UdpChannel, UdpChannelOptions } from "./UdpChannel.js";

export class NetworkError extends MatterError {}

export class NoAddressAvailableError extends NetworkError {}

/**
 * @see {@link MatterSpecification.v11.Core} § 11.11.4.4
 * Duplicated from the GeneralDiagnostics cluster to avoid circular dependencies.
 */
export enum InterfaceType {
    /**
     * Indicates an interface of an unspecified type.
     */
    Unspecified = 0,

    /**
     * Indicates a Wi-Fi interface.
     */
    WiFi = 1,

    /**
     * Indicates a Ethernet interface.
     */
    Ethernet = 2,

    /**
     * Indicates a Cellular interface.
     */
    Cellular = 3,

    /**
     * Indicates a Thread interface.
     */
    Thread = 4,
}

export type NetworkInterface = {
    name: string;
    type?: InterfaceType;
};

export type NetworkInterfaceDetails = {
    mac: string;
    ipV4: string[];
    ipV6: string[];
};

export type NetworkInterfaceDetailed = NetworkInterface & NetworkInterfaceDetails;

export abstract class Network {
    // TODO - remove this singleton
    static get: () => Network = () => {
        throw new NoProviderError("No provider configured");
    };

    abstract getNetInterfaces(configuration?: NetworkInterface[]): MaybePromise<NetworkInterface[]>;
    abstract getIpMac(netInterface: string): MaybePromise<NetworkInterfaceDetails | undefined>;
    abstract createUdpChannel(options: UdpChannelOptions): Promise<UdpChannel>;

    async close() {
        // Nothing to do
    }
}
