/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MaybePromise } from "@matter/general";
import { OperationalPeer } from "./OperationalPeer.js";
import { PeerAddress } from "./PeerAddress.js";
import type { PeerSet } from "./PeerSet.js";

/**
 * The interface {@link PeerSet} uses for persisting operational information.
 */
export abstract class PeerStore {
    abstract loadPeers(): MaybePromise<Iterable<OperationalPeer>>;
    abstract updatePeer(peer: OperationalPeer): MaybePromise<void>;
    abstract deletePeer(address: PeerAddress): MaybePromise<void>;
    abstract createNodeStore(address: PeerAddress): Promise<PeerNodeStore>;
}
