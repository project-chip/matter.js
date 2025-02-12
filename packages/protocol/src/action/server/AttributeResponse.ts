/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeTypeProtocol, ClusterProtocol, EndpointProtocol, NodeProtocol } from "#action/protocols.js";
import { Read } from "#action/request/Read.js";
import { ReadResult } from "#action/response/ReadResult.js";
import { AccessControl } from "#action/server/AccessControl.js";
import { Val } from "#action/Val.js";
import { InternalError } from "#general";
import { AccessLevel, AttributeModel, ElementTag } from "#model";
import {
    AttributePath,
    BitmapSchema,
    ClusterId,
    EndpointNumber,
    GlobalAttributes,
    NodeId,
    Status,
    StatusResponseError,
    WildcardPathFlagsBitmap,
} from "#types";

export const GlobalAttrIds = new Set(Object.values(GlobalAttributes).map(attr => attr.id));
export const WildcardPathFlagsCodec = BitmapSchema(WildcardPathFlagsBitmap);
export const FallbackLimits: AccessControl.Limits = {
    fabricScoped: false,
    fabricSensitive: false,
    readable: true,
    readLevel: AccessLevel.View,
    timed: false,
    writable: true,
    writeLevel: AccessLevel.Administer,
};

/**
 * Implements read of attribute data for Matter "read" and "subscribe" interactions.
 *
 * TODO - profile; ensure nested functions are properly JITed and/or inlined
 */
export class AttributeResponse<SessionT extends AccessControl.Session = AccessControl.Session> {
    // Configuration
    #session: SessionT;
    #node: NodeProtocol;
    #versions?: Record<EndpointNumber, Record<ClusterId, number>> | undefined;

    // Each input AttributePathIB that does not have an error installs a producer.  Producers run after validation and
    // generate actual attribute data
    #dataProducers?: Array<(this: AttributeResponse) => Iterable<ReadResult.Chunk>>;

    // The initial "chunk" may be a list of errors.  As producers execute it is a set of records associated with the
    // most recently touched endpoint.  When the endpoint changes the previous chunk emits
    #chunk?: ReadResult.Report[];

    // The following state updates as data producers execute.  This serves both to convey state between functions and as
    // a cache between producers that touch the same endpoint and/or cluster
    #currentEndpoint?: EndpointProtocol;
    #currentCluster?: ClusterProtocol;
    #currentState?: Val.ProtocolStruct;
    #wildcardPathFlags = 0;

    // The node ID may be expensive to retrieve and is invariant so we cache it here
    #cachedNodeId?: NodeId;

    constructor(node: NodeProtocol, session: SessionT, { dataVersionFilters, attributeRequests }: Read.Attributes) {
        this.#node = node;
        this.#session = session;

        const nodeId = session.fabric === undefined ? NodeId.UNSPECIFIED_NODE_ID : this.#nodeId;

        // Index versions
        if (dataVersionFilters?.length) {
            this.#versions = {};
            for (const {
                path: { nodeId: filterNodeId, endpointId, clusterId },
                dataVersion,
            } of dataVersionFilters) {
                if (filterNodeId !== undefined && filterNodeId !== nodeId) {
                    continue;
                }
                if (typeof endpointId !== "number") {
                    // Grr github advanced security
                    continue;
                }
                (this.#versions[endpointId] ?? (this.#versions[endpointId] = {}))[clusterId] = dataVersion;
            }
        }

        // Register paths
        for (const path of attributeRequests) {
            if (path.endpointId === undefined || path.clusterId === undefined || path.attributeId === undefined) {
                this.#addWildcard(path);
            } else {
                this.#addConcrete(path as ReadResult.ConcreteAttributePath);
            }
        }
    }

    /**
     * Emits chunks produced by paths added via {@link #addWildcard} and {@link #addConcrete}.
     */
    *[Symbol.iterator](): Generator<ReadResult.Chunk, void, void> {
        if (this.#dataProducers) {
            for (const producer of this.#dataProducers) {
                yield* producer.apply(this);
            }
        }

        // We emit chunks lazily when the endpoint changes so there may be one remaining chunk.  There may also be a
        // chunk with errors even if there are no data producers
        if (this.#chunk !== undefined) {
            yield this.#chunk;
        }
    }

    /**
     * Validate a wildcard path and update internal state.
     */
    #addWildcard(path: AttributePath) {
        const { nodeId, endpointId, clusterId, attributeId, wildcardPathFlags } = path;

        if (nodeId !== undefined && nodeId !== this.#nodeId) {
            return;
        }

        const wpf = wildcardPathFlags ? WildcardPathFlagsCodec.encode(wildcardPathFlags) : 0;

        if (clusterId === undefined && attributeId !== undefined && !GlobalAttrIds.has(attributeId)) {
            throw new StatusResponseError(
                `Illegal read of wildcard cluster with non-global attribute #${attributeId}`,
                Status.InvalidAction,
            );
        }

        if (endpointId === undefined) {
            this.#addProducer(function* (this: AttributeResponse) {
                this.#wildcardPathFlags = wpf;
                for (const endpoint of this.#node) {
                    yield* this.#readEndpointForWildcard(endpoint, path);
                }
            });
            return;
        }

        const endpoint = this.#node[endpointId];
        if (endpoint) {
            this.#addProducer(function (this: AttributeResponse) {
                this.#wildcardPathFlags = wpf;
                return this.#readEndpointForWildcard(endpoint, path);
            });
        }
    }

    /**
     * Validate a concrete path and update internal state.
     */
    #addConcrete(path: ReadResult.ConcreteAttributePath) {
        const { nodeId, endpointId, clusterId, attributeId } = path;
        if (nodeId !== undefined && this.#nodeId !== nodeId) {
            this.#addStatus(path, Status.UnsupportedNode);
        }

        // Resolve path elements
        const endpoint = this.#node[endpointId];
        const cluster = endpoint?.[clusterId];
        const attribute = cluster?.type.attributes[attributeId];
        let limits;
        if (attribute === undefined) {
            // We still need to authorize the user for access even though this path doesn't resolve.  Spec is not
            // explicit on what privilege level we should require as normally that information comes from the resolved
            // attribute.  So attempt to resolve via the active model
            const modelAttr = this.#node.matter
                .member(path.clusterId, [ElementTag.Cluster])
                ?.member(path.attributeId, [ElementTag.Attribute]);

            if (modelAttr) {
                // OK cluster doesn't exist at that location, but we do understand semantically, so use limits from the
                // model
                limits = AccessControl(modelAttr as AttributeModel).limits;
            } else {
                // We've got no idea.  This effectively falls back to "view" privilege
                limits = FallbackLimits;
            }
        } else {
            limits = attribute.limits;
        }

        // Validate access.  Order here prescribed by 1.4 core spec 8.4.3.2
        switch (this.#session.authorityAt(limits.readLevel)) {
            case AccessControl.Authority.Granted:
                break;

            case AccessControl.Authority.Unauthorized:
                this.#addStatus(path, Status.UnsupportedAccess);
                return;

            case AccessControl.Authority.Restricted:
                this.#addStatus(path, Status.AccessRestricted);
                return;

            default:
                throw new InternalError(
                    `Unsupported authorization state ${this.#session.authorityAt(limits.readLevel)}`,
                );
        }
        if (endpoint === undefined) {
            this.#addStatus(path, Status.UnsupportedEndpoint);
            return;
        }
        if (cluster === undefined) {
            this.#addStatus(path, Status.UnsupportedCluster);
            return;
        }
        if (attribute === undefined) {
            this.#addStatus(path, Status.UnsupportedAttribute);
            return;
        }
        if (!limits.readable) {
            this.#addStatus(path, Status.UnsupportedRead);
            return;
        }

        // Skip if version is unchanged
        const skipVersion = this.#versions?.[path.endpointId]?.[path.clusterId];
        if (skipVersion !== undefined && skipVersion === cluster.version) {
            return;
        }

        // This path contributes an attribute value
        this.#addProducer(function* () {
            // Update internal state for target endpoint
            if (this.#currentEndpoint !== endpoint) {
                if (this.#chunk) {
                    yield this.#chunk;
                    this.#chunk = undefined;
                }
                this.#currentEndpoint = endpoint;
                this.#currentCluster = cluster;
                this.#currentState = cluster.open(this.#session);
            } else if (this.#currentCluster !== cluster) {
                this.#currentCluster = cluster;
                this.#currentState = cluster.open(this.#session);
            } else if (this.#currentState === undefined) {
                this.#currentState = cluster.open(this.#session);
            }

            // Perform actual read
            this.#addValue(path, this.#currentState);
        });
    }

    /**
     * Starts new chunk or adds to current chunk all values from {@link endpoint} selected by {@link path}.
     *
     * Emits previous chunk if it exists and was not for this endpoint.  This means that our chunk size is one endpoint
     * worth of data, except for the initial error chunk if there are path errors.
     *
     * {@link this.#wildcardPathFlags} to numeric bitmap must be set prior to invocation.
     *
     * TODO - skip endpoints for which subject is unauthorized
     */
    *#readEndpointForWildcard(endpoint: EndpointProtocol, path: AttributePath) {
        if (endpoint.wildcardPathFlags & this.#wildcardPathFlags) {
            return;
        }

        if (this.#currentEndpoint !== endpoint) {
            if (this.#chunk) {
                yield this.#chunk;
                this.#chunk = undefined;
            }
            this.#currentEndpoint = endpoint;
            this.#currentCluster = undefined;
        }

        const { clusterId } = path;
        if (clusterId === undefined) {
            for (const cluster of endpoint) {
                this.#readClusterForWildcard(cluster, path);
            }
        } else {
            const cluster = endpoint[clusterId];
            if (cluster !== undefined) {
                this.#readClusterForWildcard(cluster, path);
            }
        }
    }

    /**
     * Read values from a specific {@link cluster} for a wildcard path.
     *
     * Depends on state initialized by {@link #readEndpointForWildcard}.
     *
     * TODO - skip clusters for which subject is unauthorized
     */
    #readClusterForWildcard(cluster: ClusterProtocol, path: AttributePath) {
        if (cluster.type.wildcardPathFlags & this.#wildcardPathFlags) {
            return;
        }

        if (this.#currentCluster !== cluster) {
            this.#currentCluster = cluster;
            this.#currentState = undefined;
        }

        const skipVersion = this.#versions?.[this.#currentEndpoint!.id]?.[cluster.type.id];
        if (skipVersion !== undefined && skipVersion === cluster.version) {
            return;
        }

        const { attributeId } = path;
        if (attributeId === undefined) {
            for (const attribute of cluster.type.attributes) {
                this.#readAttributeForWildcard(attribute, path);
            }
        } else {
            const attribute = cluster.type.attributes[attributeId];
            if (attribute !== undefined) {
                this.#readAttributeForWildcard(attribute, path);
            }
        }
    }

    /**
     * Read values from a specific {@link attribute} for a wildcard path.
     *
     * Depends on state initialized by {@link #readClusterForWildcard}.
     */
    #readAttributeForWildcard(attribute: AttributeTypeProtocol, path: AttributePath) {
        if (attribute.wildcardPathFlags & this.#wildcardPathFlags) {
            return;
        }

        if (
            !attribute.limits.readable ||
            this.#session.authorityAt(attribute.limits.readLevel, this.#currentCluster!.location) !==
                AccessControl.Authority.Granted
        ) {
            return;
        }

        if (this.#currentState === undefined) {
            this.#currentState = this.#currentCluster!.open(this.#session);
        }
        this.#addValue(
            {
                ...path,
                endpointId: this.#currentEndpoint?.id as EndpointNumber,
                clusterId: this.#currentCluster?.type.id as ClusterId,
                attributeId: attribute.id,
            },
            this.#currentState[attribute.id],
        );
    }

    /**
     * Add a function that produces data.  These functions are run after validation of input paths.
     */
    #addProducer(producer: (this: AttributeResponse) => Iterable<ReadResult.Chunk>) {
        if (this.#dataProducers) {
            this.#dataProducers.push(producer);
        } else {
            this.#dataProducers = [producer];
        }
    }

    /**
     * Add a status value.
     */
    #addStatus(path: ReadResult.ConcreteAttributePath, status: Status) {
        const report: ReadResult.GlobalAttributeStatus = {
            kind: "attr-status",
            path,
            status,
        };

        if (this.#chunk) {
            this.#chunk.push(report);
        } else {
            this.#chunk = [report];
        }
    }

    /**
     * Add an attribute value.
     */
    #addValue(path: ReadResult.ConcreteAttributePath, value: unknown) {
        const report: ReadResult.AttributeValue = {
            kind: "attr-value",
            path,
            value,
        };

        if (this.#chunk) {
            this.#chunk.push(report);
        } else {
            this.#chunk = [report];
        }
    }

    /**
     * The node ID used to filter paths with node ID specified.  Unsure if this is ever actually used.
     */
    get #nodeId() {
        if (this.#cachedNodeId === undefined) {
            this.#cachedNodeId =
                (this.#session.fabric && this.#node.nodeIdFor(this.#session.fabric)) ?? NodeId.UNSPECIFIED_NODE_ID;
        }
        return this.#cachedNodeId;
    }
}
