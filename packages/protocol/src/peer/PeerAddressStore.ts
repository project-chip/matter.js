/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DecodedAttributeReportValue } from "#interaction/index.js";
import { Construction, MaybePromise } from "@matter/general";
import { AttributeId, ClusterId, EndpointNumber, EventNumber } from "@matter/types";
import { OperationalPeer } from "./OperationalPeer.js";
import { PeerAddress } from "./PeerAddress.js";
import type { PeerSet } from "./PeerSet.js";

/**
 * The interface {@link PeerSet} uses for persisting operational information.
 */
export abstract class PeerAddressStore {
    abstract loadPeers(): MaybePromise<Iterable<OperationalPeer>>;
    abstract updatePeer(peer: OperationalPeer): MaybePromise<void>;
    abstract deletePeer(address: PeerAddress): MaybePromise<void>;
    abstract createNodeStore(address: PeerAddress): MaybePromise<PeerDataStore | undefined>;
}

export abstract class PeerDataStore {
    abstract construction: Construction<PeerDataStore>;

    abstract maxEventNumber: EventNumber;
    abstract updateLastEventNumber(eventNumber: EventNumber): MaybePromise<void>;

    abstract persistAttributes(attributes: DecodedAttributeReportValue<any>[]): MaybePromise<void>;

    // TODO: Find a maybe better way to achieve this without functions
    abstract retrieveAttribute(
        endpointId: EndpointNumber,
        clusterId: ClusterId,
        attributeId: AttributeId,
    ): DecodedAttributeReportValue<any> | undefined;
    abstract retrieveAttributes(endpointId: EndpointNumber, clusterId: ClusterId): DecodedAttributeReportValue<any>[];
    abstract getClusterDataVersion(endpointId: EndpointNumber, clusterId: ClusterId): number | undefined;
    abstract getClusterDataVersions(
        filterEndpointId?: EndpointNumber,
        filterClusterId?: ClusterId,
    ): { endpointId: EndpointNumber; clusterId: ClusterId; dataVersion: number }[];
}
