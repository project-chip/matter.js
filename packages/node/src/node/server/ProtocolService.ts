/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Behavior } from "#behavior/Behavior.js";
import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import type { BehaviorBacking } from "#behavior/internal/BehaviorBacking.js";
import { Datasource } from "#behavior/state/managed/Datasource.js";
import { ValueSupervisor } from "#behavior/supervision/ValueSupervisor.js";
import type { Endpoint } from "#endpoint/Endpoint.js";
import { ImplementationError } from "#general";
import { AcceptedCommandList, AttributeList, ElementTag, GeneratedCommandList, Matter } from "#model";
import type { Node } from "#node/Node.js";
import type {
    AttributeTypeProtocol,
    ClusterProtocol,
    ClusterTypeProtocol,
    CollectionProtocol,
    EndpointProtocol,
    NodeProtocol,
} from "#protocol";
import { AccessControl, FabricManager } from "#protocol";
import type { AttributeId, ClusterId, DeviceTypeId, EndpointNumber, FabricIndex, TlvSchema } from "#types";
import { DescriptorBehavior } from "../../behaviors/descriptor/DescriptorBehavior.js";

/**
 * Protocol view of a {@link Node}
 *
 * This service maintains an optimized {@link NodeProtocol} that maps to the state of a {@link Node}.
 *
 * The protocol view only contains endpoints and clusters with active backings.  {@link Behaviors} conveys backing
 * state via the public interface.
 */
export class ProtocolService {
    #state: NodeState;

    constructor(node: Node) {
        this.#state = new NodeState(node);
    }

    addCluster(backing: BehaviorBacking) {
        const { schema } = backing.type;
        if (schema?.tag !== ElementTag.Cluster || schema.id === undefined) {
            return;
        }

        this.#state.stateFor(backing.endpoint).addCluster(backing);
    }

    deleteCluster(backing: BehaviorBacking) {
        if (this.#state.hasEndpoint(backing.endpoint)) {
            this.#state.stateFor(backing.endpoint).deleteCluster(backing);
        }
    }

    get protocol() {
        return this.#state.protocol;
    }
}

const WildcardPathFlags = {
    skipRootNode: 1,
    skipGlobalAttributes: 1 << 1,
    skipAttributeList: 1 << 2,
    skipCommandLists: 1 << 3,
    skipCustomElements: 1 << 4,
    skipFixedAttributes: 1 << 5,
    skipChangesOmittedAttributes: 1 << 6,
    skipDiagnosticsClusters: 1 << 7,
};

class NodeState {
    protocol: NodeProtocol;
    #endpoints = new Set<EndpointProtocol>();
    #endpointStates = {} as Record<EndpointNumber, EndpointState>;

    constructor(node: Node) {
        let fabrics: FabricManager | undefined;

        this.protocol = {
            matter: Matter,

            nodeIdFor(index: FabricIndex) {
                if (!fabrics) {
                    fabrics = node.env.get(FabricManager);
                }
                return fabrics.findByIndex(index)?.nodeId;
            },

            [Symbol.iterator]: this.#endpoints[Symbol.iterator].bind(this.#endpoints),

            toString() {
                return `node-proto#${node.id}`;
            },

            inspect() {
                return this.toString();
            },
        } satisfies NodeProtocol & { toString(): string; inspect(): string } as NodeProtocol;
    }

    stateFor(endpoint: Endpoint) {
        const { number } = endpoint;
        let state = this.#endpointStates[number];
        if (state !== undefined) {
            return state;
        }

        state = new EndpointState(this, endpoint);
        this.protocol[number] = state.protocol;
        this.#endpoints.add(state.protocol);
        this.#endpointStates[number] = state;

        return state;
    }

    hasEndpoint(endpoint: Endpoint) {
        return endpoint.number in this.#endpointStates;
    }

    deleteEndpoint(endpoint: EndpointProtocol) {
        delete this.protocol[endpoint.id];
        this.#endpoints.delete(endpoint);
        delete this.#endpointStates[endpoint.id];
    }
}

class EndpointState {
    protocol: EndpointProtocol;
    #node: NodeState;
    #activeClusters = new Set<ClusterId>();
    #clusters = new Set<ClusterProtocol>();

    constructor(node: NodeState, endpoint: Endpoint) {
        this.#node = node;
        this.protocol = {
            id: endpoint.number,
            wildcardPathFlags: endpoint.number === 0 ? WildcardPathFlags.skipRootNode : 0,
            path: endpoint.path,
            deviceTypes: [],

            toString() {
                return `endpoint-proto#${this.id}`;
            },

            inspect() {
                return this.toString();
            },

            [Symbol.iterator]: this.#clusters[Symbol.iterator].bind(this.#clusters),
        } satisfies EndpointProtocol & { toString(): string; inspect(): string } as EndpointProtocol;
    }

    addCluster(backing: BehaviorBacking) {
        const type = clusterTypeProtocolOf(backing.type);
        if (!type) {
            return;
        }

        const cluster = new ClusterState(type, backing.datasource, this.protocol.id);

        // When descriptor behavior initializes, sync device types
        if (backing.type.id === DescriptorBehavior.id) {
            this.#updateDeviceTypes(backing.endpoint.state.descriptor.deviceTypeList);
            (backing.events as DescriptorBehavior["events"]).deviceTypeList$Changed.on(
                this.#updateDeviceTypes.bind(this),
            );
        }

        this.protocol[cluster.type.id] = cluster;
        this.#activeClusters.add(cluster.type.id);
        this.#clusters.add(cluster);
    }

    deleteCluster(backing: BehaviorBacking) {
        const { schema } = backing.type;
        if (schema === undefined) {
            return;
        }

        const { tag, id } = schema;
        if (tag !== ElementTag.Cluster || id === undefined) {
            return;
        }

        const protocol = this.protocol[id];
        if (protocol) {
            this.#clusters.delete(protocol);
            delete this.protocol[id];
        }

        this.#activeClusters.delete(id as ClusterId);

        if (!this.#activeClusters.size) {
            this.#node.deleteEndpoint(this.protocol);
        }
    }

    #updateDeviceTypes(deviceTypeList: Readonly<{ deviceType: DeviceTypeId }[]>) {
        this.protocol.deviceTypes = deviceTypeList.map(dt => dt.deviceType);
    }
}

class ClusterState implements ClusterProtocol {
    type: ClusterTypeProtocol;

    #datasource: Datasource;
    #endpointId: number;

    get version() {
        return this.#datasource.version;
    }

    get location() {
        return this.#datasource.location;
    }

    open(session: AccessControl.Session) {
        if (!("transaction" in session)) {
            throw new ImplementationError("Cluster protocol must be opened with a supervisor session");
        }
        return this.#datasource.reference(session as ValueSupervisor.Session);
    }

    toString() {
        return `cluster-proto#${this.#endpointId}:${this.type.id}`;
    }

    inspect() {
        return this.toString();
    }

    constructor(type: ClusterTypeProtocol, datasource: Datasource, endpointId: EndpointNumber) {
        this.type = type;
        this.#datasource = datasource;
        this.#endpointId = endpointId;
    }
}

const behaviorCache = new WeakMap<Behavior.Type, ClusterTypeProtocol | undefined>();

function clusterTypeProtocolOf(behavior: Behavior.Type): ClusterTypeProtocol | undefined {
    if (behaviorCache.has(behavior)) {
        return behaviorCache.get(behavior);
    }

    const { cluster, schema } = behavior as ClusterBehavior.Type;
    if (cluster === undefined || schema?.id === undefined) {
        return;
    }

    const tlvs = {} as Record<number, TlvSchema<unknown>>;
    for (const attr of Object.values(cluster.attributes)) {
        tlvs[attr.id] = attr.schema;
    }

    let wildcardPathFlags = schema.effectiveQuality.diagnostics ? WildcardPathFlags.skipDiagnosticsClusters : 0;
    if (schema.id & 0xffff0000) {
        wildcardPathFlags |= WildcardPathFlags.skipCustomElements;
    }

    const attrList = Array<AttributeTypeProtocol>();
    const attributes: CollectionProtocol<AttributeTypeProtocol> = {
        [Symbol.iterator]: attrList[Symbol.iterator].bind(attrList),
    };

    for (const member of behavior.supervisor.membersOf(schema)) {
        const { id, tag, effectiveQuality: quality } = member;

        if (tag !== "attribute" || id === undefined) {
            continue;
        }

        const tlv = tlvs[id];
        if (tlv === undefined) {
            continue;
        }

        let wildcardPathFlags;
        switch (id) {
            case GeneratedCommandList.id:
            case AcceptedCommandList.id:
                wildcardPathFlags = WildcardPathFlags.skipGlobalAttributes | WildcardPathFlags.skipCommandLists;
                break;

            case AttributeList.id:
                wildcardPathFlags = WildcardPathFlags.skipGlobalAttributes | WildcardPathFlags.skipAttributeList;
                break;

            default:
                wildcardPathFlags = 0;
                break;
        }

        if (id & 0xffff0000) {
            wildcardPathFlags |= WildcardPathFlags.skipGlobalAttributes;
        }
        if (quality.fixed) {
            wildcardPathFlags |= WildcardPathFlags.skipFixedAttributes;
        }
        if (quality.changesOmitted) {
            wildcardPathFlags |= WildcardPathFlags.skipChangesOmittedAttributes;
        }

        const {
            access: { limits },
        } = behavior.supervisor.get(member);

        const attr = { id: id as AttributeId, tlv, wildcardPathFlags, limits };
        attrList.push(attr);
        attributes[id] = attr;
    }

    const descriptor: ClusterTypeProtocol = {
        id: schema.id as ClusterId,
        attributes,
        wildcardPathFlags,
    };
    behaviorCache.set(behavior, descriptor);

    return descriptor;
}
