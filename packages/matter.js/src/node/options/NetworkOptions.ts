/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Networking configuration for Matter.js nodes.
 */
export interface NetworkOptions {
    announceInterface?: string;
    discoverInterface?: string;
    port?: number;
    listeningAddressIpv4?: string;
    listeningAddressIpv6?: string;
    disableIpv4?: boolean;

    // TODO - change to something along the lines of:

    /**
     * Local network addresses the node will use.  This is used for any
     * of the following options that are not set.
     *
     * If this is not set the node will use all local addresses.
     */
    // addresses: Address | Address[];

    /**
     * Local network address used for running nodes.
     */
    // listen: Address | Address[];

    /**
     * Local network addresses to announce nodes on.
     */
    // announce: Address | Address[];

    /**
     * Local network addresses to listen for nodes on.
     */
    // discover: Address | Address[];
}

export namespace NetworkOptions {
    /**
     * Validate options and set defaults.
     *
     * @returns the resulting options
     */
    export function configurationFor(options?: NetworkOptions) {
        return {
            ...options,
            port: options?.port ?? 5540,
            disableIpV4: options?.disableIpv4 ?? false,
        };
    }

    export interface Configuration extends ReturnType<typeof configurationFor> {}
}
