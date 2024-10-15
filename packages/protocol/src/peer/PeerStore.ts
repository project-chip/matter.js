/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
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
export abstract class PeerStore {
    abstract loadPeers(): MaybePromise<Iterable<OperationalPeer>>;
    abstract updatePeer(peer: OperationalPeer): MaybePromise<void>;
    abstract deletePeer(address: PeerAddress): MaybePromise<void>;
    abstract createNodeStore(address: PeerAddress): Promise<PeerNodeStore>;
}

export abstract class PeerNodeStore {
    abstract construction: Construction<PeerNodeStore>;

    abstract maxEventNumber: EventNumber;
    abstract updateLastEventNumber(eventNumber: EventNumber): MaybePromise<void>;

    abstract retrieveAttribute(
        endpointId: EndpointNumber,
        clusterId: ClusterId,
        attributeId: AttributeId,
    ): DecodedAttributeReportValue<any> | undefined;
    abstract retrieveAttributes(endpointId: EndpointNumber, clusterId: ClusterId): DecodedAttributeReportValue<any>[];
    abstract persistAttributes(attributes: DecodedAttributeReportValue<any>[]): MaybePromise<void>;
    abstract getClusterDataVersion(endpointId: EndpointNumber, clusterId: ClusterId): number | undefined;
    abstract getClusterDataVersions(
        filterEndpointId?: EndpointNumber,
        filterClusterId?: ClusterId,
    ): { endpointId: EndpointNumber; clusterId: ClusterId; dataVersion: number }[];
}
