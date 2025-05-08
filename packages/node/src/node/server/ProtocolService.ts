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
import { AccessControl, FabricManager, SupportedElements } from "#protocol";
import type { AttributeId, ClusterId, DeviceTypeId, EndpointNumber, FabricIndex, TlvSchema } from "#types";
import { WildcardPathFlags as WildcardPathFlagsType } from "#types";
import { camelize } from "@matter/general";
import { EventTypeProtocol, OccurrenceManager } from "@matter/protocol";
import { AttributePath, EventId, EventPath } from "@matter/types";
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
    readonly #state: NodeState;

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
    skipRootNode: 1 << WildcardPathFlagsType.wildcardSkipRootNode.offset,
    skipGlobalAttributes: 1 << WildcardPathFlagsType.wildcardSkipGlobalAttributes.offset,
    skipAttributeList: 1 << WildcardPathFlagsType.wildcardSkipAttributeList.offset,
    skipCommandLists: 1 << WildcardPathFlagsType.wildcardSkipCommandLists.offset,
    skipCustomElements: 1 << WildcardPathFlagsType.wildcardSkipCustomElements.offset,
    skipFixedAttributes: 1 << WildcardPathFlagsType.wildcardSkipFixedAttributes.offset,
    skipChangesOmittedAttributes: 1 << WildcardPathFlagsType.wildcardSkipChangesOmittedAttributes.offset,
    skipDiagnosticsClusters: 1 << WildcardPathFlagsType.wildcardSkipDiagnosticsClusters.offset,
};

class NodeState {
    readonly protocol: NodeProtocol;
    readonly #endpoints = new Set<EndpointProtocol>();
    readonly #endpointStates = {} as Record<EndpointNumber, EndpointState>;

    constructor(node: Node) {
        let fabrics: FabricManager | undefined;
        let eventHandler: OccurrenceManager | undefined;

        this.protocol = {
            matter: Matter,

            nodeIdFor(index: FabricIndex) {
                if (!fabrics) {
                    fabrics = node.env.get(FabricManager);
                }
                return fabrics.findByIndex(index)?.nodeId;
            },

            get eventHandler() {
                if (eventHandler === undefined) {
                    eventHandler = node.env.get(OccurrenceManager);
                }
                return eventHandler;
            },

            [Symbol.iterator]: this.#endpoints[Symbol.iterator].bind(this.#endpoints),

            toString() {
                return `node-proto#${node.id}`;
            },

            inspect() {
                return this.toString();
            },

            inspectAttributePath(path: AttributePath) {
                return resolveAttributePathForNode(this, path);
            },

            inspectEventPath(path: EventPath) {
                return resolveEventPathForNode(this, path);
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
    readonly protocol: EndpointProtocol;
    readonly #node: NodeState;
    readonly #activeClusters = new Set<ClusterId>();
    readonly #clusters = new Set<ClusterProtocol>();

    constructor(node: NodeState, endpoint: Endpoint) {
        this.#node = node;

        this.protocol = {
            id: endpoint.number,
            wildcardPathFlags: endpoint.number === 0 ? WildcardPathFlags.skipRootNode : 0,
            path: endpoint.path,
            name: endpoint.type.name,
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

        const cluster = new ClusterState(type, backing);

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
    readonly type: ClusterTypeProtocol;
    readonly #datasource: Datasource;
    readonly #endpoint: Endpoint;
    readonly #backingType: Behavior.Type;
    #supportedElements?: SupportedElements;

    get version() {
        return this.#datasource.version;
    }

    get location() {
        return this.#datasource.location;
    }

    get supportedElements() {
        if (this.#supportedElements === undefined) {
            this.#supportedElements = this.#endpoint.behaviors.elementsOf(this.#backingType);
        }
        return this.#supportedElements;
    }

    open(session: AccessControl.Session) {
        if (!("transaction" in session)) {
            throw new ImplementationError("Cluster protocol must be opened with a supervisor session");
        }
        return this.#datasource.reference(session as ValueSupervisor.Session);
    }

    toString() {
        return `cluster-proto#${this.#endpoint.number}:${this.type.id}`;
    }

    inspect() {
        return this.toString();
    }

    constructor(type: ClusterTypeProtocol, backing: BehaviorBacking) {
        this.type = type;
        this.#datasource = backing.datasource;
        this.#endpoint = backing.endpoint;
        this.#backingType = backing.type;
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

    // Collect Attribute Metadata
    const attrTlvs = {} as Record<number, TlvSchema<unknown>>;
    for (const attr of Object.values(cluster.attributes)) {
        attrTlvs[attr.id] = attr.schema;
    }
    let wildcardPathFlags = schema.effectiveQuality.diagnostics ? WildcardPathFlags.skipDiagnosticsClusters : 0;
    if (schema.id & 0xffff0000) {
        wildcardPathFlags |= WildcardPathFlags.skipCustomElements;
    }
    const attrList = Array<AttributeTypeProtocol>();
    const attributes: CollectionProtocol<AttributeTypeProtocol> = {
        [Symbol.iterator]: attrList[Symbol.iterator].bind(attrList),
    };

    // Collect Event Metadata
    const eventTlvs = {} as Record<number, TlvSchema<unknown>>;
    for (const ev of Object.values(cluster.events)) {
        eventTlvs[ev.id] = ev.schema;
    }
    const eventList = Array<EventTypeProtocol>();
    const events: CollectionProtocol<EventTypeProtocol> = {
        [Symbol.iterator]: eventList[Symbol.iterator].bind(eventList),
    };

    // Collect all attributes and events from model and generate type protocol
    // TODO: Potentially combine the two searches again once the issue os fixed when selecting attributes and events
    for (const member of behavior.supervisor.membersOf(schema, { tags: [ElementTag.Attribute, ElementTag.Event] })) {
        const { id, tag, effectiveQuality: quality } = member;

        if (id === undefined) {
            continue;
        }

        switch (tag) {
            case "attribute": {
                const tlv = attrTlvs[id];
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
                        wildcardPathFlags =
                            WildcardPathFlags.skipGlobalAttributes | WildcardPathFlags.skipAttributeList;
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

                const attr = { id: id as AttributeId, tlv, wildcardPathFlags, limits, name: camelize(member.name) };
                attrList.push(attr);
                attributes[id] = attr;
                break;
            }
            case "event": {
                const tlv = eventTlvs[id];
                if (tlv === undefined) {
                    continue;
                }

                const {
                    access: { limits },
                } = behavior.supervisor.get(member);

                const event = { id: id as EventId, tlv, limits, name: camelize(member.name) };
                eventList.push(event);
                events[id] = event;
                break;
            }
        }
    }

    const descriptor: ClusterTypeProtocol = {
        id: schema.id as ClusterId,
        name: schema.name,
        attributes,
        events,
        wildcardPathFlags,
    };
    behaviorCache.set(behavior, descriptor);

    return descriptor;
}

function toWildcardOrHex(value: number | bigint | undefined) {
    return value === undefined ? "*" : `0x${value.toString(16)}`;
}

function resolveAttributePathForNode(node: NodeProtocol, path: AttributePath) {
    const { endpointId, clusterId, attributeId } = path;
    if (endpointId === undefined) {
        return `*/${toWildcardOrHex(clusterId)}/${toWildcardOrHex(attributeId)}`;
    }

    const endpoint = node[endpointId];
    if (endpoint === undefined) {
        return `unknown(${toWildcardOrHex(endpointId)})/${toWildcardOrHex(clusterId)}/${toWildcardOrHex(attributeId)}`;
    }
    const endpointName = `${endpoint.name}(${toWildcardOrHex(endpointId)})`;

    if (clusterId === undefined) {
        return `${endpointName}/*/${toWildcardOrHex(attributeId)}`;
    }

    const cluster = endpoint[clusterId];
    if (cluster === undefined) {
        return `${endpointName}/unknown(${toWildcardOrHex(clusterId)})/${toWildcardOrHex(attributeId)}`;
    }
    const clusterName = `${cluster.type.name}(${toWildcardOrHex(clusterId)})`;

    if (attributeId === undefined) {
        return `${endpointName}/${clusterName}/*`;
    }

    const attribute = cluster.type.attributes[attributeId];
    return `${endpointName}/${clusterName}/${attribute?.name ?? "unknown"}(${toWildcardOrHex(attributeId)})`;
}

function resolveEventPathForNode(node: NodeProtocol, path: EventPath) {
    const { endpointId, clusterId, eventId, isUrgent } = path;
    const isUrgentString = isUrgent ? "!" : "";
    if (endpointId === undefined) {
        return `*/${toWildcardOrHex(clusterId)}/${toWildcardOrHex(eventId)}${isUrgentString}`;
    }

    const endpoint = node[endpointId];
    if (endpoint === undefined) {
        return `unknown(${toWildcardOrHex(endpointId)})/${toWildcardOrHex(clusterId)}/${toWildcardOrHex(eventId)}${isUrgentString}`;
    }
    const endpointName = `${endpoint.name}(${toWildcardOrHex(endpointId)})`;

    if (clusterId === undefined) {
        return `${endpointName}/*/${toWildcardOrHex(eventId)}${isUrgentString}`;
    }

    const cluster = endpoint[clusterId];
    if (cluster === undefined) {
        return `${endpointName}/unknown(${toWildcardOrHex(clusterId)})/${toWildcardOrHex(eventId)}${isUrgentString}`;
    }
    const clusterName = `${cluster.type.name}(${toWildcardOrHex(clusterId)})`;

    if (eventId === undefined) {
        return `${endpointName}/${clusterName}/*`;
    }

    const event = cluster.type.events[eventId];
    return `${endpointName}/${clusterName}/${event?.name ?? "unknown"}(${toWildcardOrHex(eventId)})${isUrgentString}`;
}
