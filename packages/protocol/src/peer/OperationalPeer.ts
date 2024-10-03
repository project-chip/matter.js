/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DiscoveryData } from "#common/Scanner.js";
import { ServerAddressIp } from "#general";
import { PeerAddress } from "./PeerAddress.js";

/**
 * Operational information for a single peer.
 *
 * For our purposes a "peer" is another node commissioned to a fabric to which we have access.
 */
export interface OperationalPeer {
    /**
     * The logical address of the peer.
     */
    address: PeerAddress;

    /**
     * A physical address the peer may be accessed at, if known.
     */
    operationalAddress?: ServerAddressIp;

    /**
     * Additional information collected while locating the peer.
     */
    discoveryData?: DiscoveryData;
}
