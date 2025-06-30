/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionSession } from "#action/Interactable.js";
import { AttributeTypeProtocol, ClusterProtocol, EndpointProtocol, NodeProtocol } from "#action/protocols.js";
import { ReadResult } from "#action/response/ReadResult.js";
import { InternalError } from "#general";
import { AttributeId, AttributePath, ClusterId, EndpointNumber } from "#types";
import { AttributeReadResponse } from "./AttributeReadResponse.js";

type ClusterFilter = {
    [clusterId: ClusterId]: Set<AttributeId>;
};
export type AttributeResponseFilter = {
    [endpointId: EndpointNumber]: ClusterFilter;
};

/**
 * AttributeSubscriptionResponse is a specialized version of AttributeReadResponse that processes a read/subscribe request
 * with a filter applied to the attributes. Only the attributes that match the filter will be processed.
 */
export class AttributeSubscriptionResponse<
    SessionT extends InteractionSession = InteractionSession,
> extends AttributeReadResponse<SessionT> {
    #filter: AttributeResponseFilter;
    #currentEndpointFilter?: ClusterFilter;
    #currentClusterFilter?: Set<number>;

    constructor(node: NodeProtocol, session: SessionT, filter: AttributeResponseFilter) {
        super(node, session);
        this.#filter = filter;
    }

    get filter() {
        return this.#filter;
    }

    /** Guarded accessor for this.#currentEndpointFilter.  This should never be undefined */
    protected get currentEndpointFilter() {
        if (!this.#currentEndpointFilter) {
            throw new InternalError("currentEndpointFilter is not set. Should never happen");
        }
        return this.#currentEndpointFilter;
    }

    /** Guarded accessor for this.#currentCLusterFilter.  This should never be undefined */
    protected get currentClusterFilter() {
        if (!this.#currentClusterFilter) {
            throw new InternalError("currentClusterFilter is not set. Should never happen");
        }
        return this.#currentClusterFilter;
    }

    protected override addConcrete(path: ReadResult.ConcreteAttributePath) {
        const { endpointId, clusterId, attributeId } = path;
        if (this.#filter[endpointId]?.[clusterId]?.has(attributeId) === undefined) {
            return;
        }
        super.addConcrete(path);
    }

    protected override *readEndpointForWildcard(endpoint: EndpointProtocol, path: AttributePath) {
        this.#currentEndpointFilter = this.#filter[endpoint.id];
        if (this.#currentEndpointFilter === undefined) {
            return;
        }
        yield* super.readEndpointForWildcard(endpoint, path);
    }

    protected override readClusterForWildcard(cluster: ClusterProtocol, path: AttributePath) {
        this.#currentClusterFilter = this.currentEndpointFilter[cluster.type.id];
        if (this.#currentClusterFilter === undefined) {
            return;
        }
        super.readClusterForWildcard(cluster, path);
    }

    protected override readAttributeForWildcard(attribute: AttributeTypeProtocol, path: AttributePath) {
        if (!this.currentClusterFilter.has(attribute.id)) {
            return;
        }
        super.readAttributeForWildcard(attribute, path);
    }

    protected override addStatus() {
        // For Filtered responses we suppress all status reports
    }
}
