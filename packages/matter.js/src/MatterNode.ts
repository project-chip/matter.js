/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdnsBroadcaster } from "./mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";

/**
 * Abstract base class that represents a node in the matter ecosystem.
 */
export interface MatterNode {
    close(): Promise<void>;

    initialize(ipv4Disabled: boolean): void;

    start(): Promise<void>;

    port: number | undefined;

    mdnsBroadcaster: MdnsBroadcaster;

    mdnsScanner: MdnsScanner;
}
