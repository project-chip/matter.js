/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Behavior } from "#behavior/Behavior.js";
import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import { QuietEvent } from "#behavior/Events.js";
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
import { WildcardPathFlags as WildcardPathFlagsType } from "#types";
import { camelize, Observable, ObserverGroup } from "@matter/general";
import { EventTypeProtocol, OccurrenceManager } from "@matter/protocol";
import { AttributePath, EventId, EventPath } from "@matter/types";
import { DescriptorBehavior } from "../../behaviors/descriptor/DescriptorBehavior.js";

interface DisposableClusterProtocol extends ClusterProtocol {
    [Symbol.dispose]: () => void;
}

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
    readonly #endpointStateObservers = new Map<
        EndpointNumber,
        (clusterId: ClusterId, changes: AttributeId[], version: number) => void
    >();

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

            stateChanged: new Observable<
                [endpointId: EndpointNumber, clusterId: ClusterId, changes: AttributeId[], version: number]
            >(),

            toString() {
                return `node-proto#${node.id}`;
            },

            inspect() {
                return this.toString();
            },

            inspectPath(path: AttributePath | EventPath) {
                return resolvePathForNode(this, path);
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
        const observer = (clusterId: ClusterId, changes: AttributeId[], version: number) => {
            this.protocol.stateChanged.emit(number, clusterId, changes, version);
        };
        state.stateChanged.on(observer);
        this.#endpointStateObservers.set(number, observer);

        return state;
    }

    hasEndpoint(endpoint: Endpoint) {
        return endpoint.number in this.#endpointStates;
    }

    deleteEndpoint(endpoint: EndpointProtocol) {
        const observer = this.#endpointStateObservers.get(endpoint.id);
        if (observer) {
            this.#endpointStates[endpoint.id].stateChanged.off(observer);
            this.#endpointStateObservers.delete(endpoint.id);
        }
        delete this.protocol[endpoint.id];
        this.#endpoints.delete(endpoint);
        delete this.#endpointStates[endpoint.id];
    }
}

class EndpointState {
    readonly protocol: EndpointProtocol;
    readonly #node: NodeState;
    readonly #activeClusters = new Set<ClusterId>();
    readonly #clusters = new Set<DisposableClusterProtocol>();
    readonly #clusterStateObservers = new Map<ClusterId, (changes: AttributeId[], version: number) => void>();
    readonly stateChanged = new Observable<[clusterId: ClusterId, changes: AttributeId[], version: number]>();

    constructor(node: NodeState, endpoint: Endpoint) {
        this.#node = node;
        const number = endpoint.number;
        this.protocol = {
            id: number,
            wildcardPathFlags: number === 0 ? WildcardPathFlags.skipRootNode : 0,
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
        const type = clusterTypeProtocolOf(backing);
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

        const stateObserver = (changes: AttributeId[], version: number) =>
            this.stateChanged.emit(cluster.type.id, changes, version);
        cluster.stateChanged.on(stateObserver);
        this.#clusterStateObservers.set(cluster.type.id, stateObserver);

        // Cluster added, emit all attributes as changed
        const attrs = [...cluster.type.attributes]
            .filter(attr => attr.limits.readable && !attr.changesOmitted && !attr.quieter)
            .map(attr => attr.id);
        if (attrs.length) {
            this.stateChanged.emit(cluster.type.id, attrs, cluster.version);
        }
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

        const stateObserver = this.#clusterStateObservers.get(id as ClusterId);
        const protocol = this.protocol[id] as DisposableClusterProtocol;
        if (protocol) {
            if (stateObserver) {
                protocol.stateChanged.off(stateObserver);
            }
            protocol[Symbol.dispose]();
            this.#clusters.delete(protocol);
            delete this.protocol[id];
        }
        this.#clusterStateObservers.delete(id as ClusterId);

        this.#activeClusters.delete(id as ClusterId);

        if (!this.#activeClusters.size) {
            this.#node.deleteEndpoint(this.protocol);
        }
    }

    #updateDeviceTypes(deviceTypeList: Readonly<{ deviceType: DeviceTypeId }[]>) {
        this.protocol.deviceTypes = deviceTypeList.map(dt => dt.deviceType);
    }
}

class ClusterState implements DisposableClusterProtocol {
    readonly type: ClusterTypeProtocol;
    readonly #datasource: Datasource;
    readonly #endpointId: EndpointNumber;
    readonly #stateChanged = new Observable<[changes: AttributeId[], version: number]>();
    readonly #quieterObservers = new ObserverGroup();

    constructor(type: ClusterTypeProtocol, backing: BehaviorBacking) {
        this.type = type;
        this.#datasource = backing.datasource;
        this.#endpointId = backing.endpoint.number;

        const attributeNameToIdMap = backing.type.supervisor.attributeNamesToIds;
        // For quieter attributes, we need to use the online events to get real state changes
        for (const attr of type.attributes) {
            attributeNameToIdMap.set(attr.name, attr.id);
            if (attr.quieter) {
                this.#quieterObservers.on(
                    (this.#datasource.events[`${attr.name}$Changed`] as unknown as QuietEvent).online,
                    () => this.stateChanged.emit([attr.id], this.version),
                );
            }
        }

        // Emit all attributes as changed that are not omitted or quieter
        this.#quieterObservers.on(this.#datasource.stateChanged, (changes: string[], version: number) => {
            const data = changes
                .map(name => attributeNameToIdMap.get(name))
                .filter(
                    (id): id is AttributeId =>
                        id !== undefined && !type.attributes[id]?.changesOmitted && !type.attributes[id]?.quieter,
                );
            if (data.length) {
                this.stateChanged.emit(data, version);
            }
        });
    }

    get version() {
        return this.#datasource.version;
    }

    get location() {
        return this.#datasource.location;
    }

    get stateChanged() {
        return this.#stateChanged;
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

    [Symbol.dispose]() {
        this.#quieterObservers.close();
    }
}

const behaviorCache = new WeakMap<Behavior.Type, Map<string, ClusterTypeProtocol | undefined>>();

function clusterTypeProtocolOf(backing: BehaviorBacking): ClusterTypeProtocol | undefined {
    const behavior = backing.type;

    const { cluster, schema } = behavior as ClusterBehavior.Type;
    if (cluster === undefined || schema?.id === undefined) {
        return;
    }

    const supportedElements = backing.endpoint.behaviors.elementsOf(behavior);
    const nonMandatorySupportedAttributes = new Set<AttributeId>();
    const nonMandatorySupportedEvents = new Set<EventId>();

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

        const name = camelize(member.name);
        switch (tag) {
            case "attribute": {
                if (!member.effectiveConformance.isMandatory && !supportedElements.attributes.has(name)) {
                    continue;
                }

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
                const {
                    changesOmitted,
                    effectiveQuality: { quieter },
                } = member;

                const attr: AttributeTypeProtocol = {
                    id: id as AttributeId,
                    tlv,
                    wildcardPathFlags,
                    limits,
                    name,
                };
                if (changesOmitted) {
                    attr.changesOmitted = true;
                }
                if (quieter) {
                    attr.quieter = true;
                }
                attrList.push(attr);
                attributes[id] = attr;
                if (!member.effectiveConformance.isMandatory) {
                    nonMandatorySupportedAttributes.add(id as AttributeId);
                }
                break;
            }
            case "event": {
                if (!member.effectiveConformance.isMandatory && !supportedElements.events.has(name)) {
                    continue;
                }

                const tlv = eventTlvs[id];
                if (tlv === undefined) {
                    continue;
                }

                const {
                    access: { limits },
                } = behavior.supervisor.get(member);

                const event = { id: id as EventId, tlv, limits, name };
                eventList.push(event);
                events[id] = event;
                if (!member.effectiveConformance.isMandatory) {
                    nonMandatorySupportedEvents.add(id as EventId);
                }
                break;
            }
        }
    }

    const elementsCacheKey = `a:${[...nonMandatorySupportedAttributes.values()].sort().join(",")},e:${[...nonMandatorySupportedEvents.values()].sort().join(",")}`;
    const existingCache = behaviorCache.get(behavior)?.get(elementsCacheKey);
    if (existingCache) {
        return existingCache;
    }

    const descriptor: ClusterTypeProtocol = {
        id: schema.id as ClusterId,
        name: schema.name,
        attributes,
        events,
        wildcardPathFlags,
    };
    const elementCache = behaviorCache.get(behavior) ?? new Map();
    elementCache.set(elementsCacheKey, descriptor);
    behaviorCache.set(behavior, elementCache);

    return descriptor;
}

function toWildcardOrHex(value: number | bigint | undefined) {
    return value === undefined ? "*" : `0x${value.toString(16)}`;
}

function resolvePathForNode(node: NodeProtocol, path: AttributePath | EventPath) {
    const { endpointId, clusterId } = path;
    const isUrgentString = "isUrgent" in path && path.isUrgent ? "!" : "";

    const elementId = "attributeId" in path ? path.attributeId : "eventId" in path ? path.eventId : undefined;

    if (endpointId === undefined) {
        return `*/${toWildcardOrHex(clusterId)}/${toWildcardOrHex(elementId)}${isUrgentString}`;
    }

    const endpoint = node[endpointId];
    if (endpoint === undefined) {
        return `unknown(${toWildcardOrHex(endpointId)})/${toWildcardOrHex(clusterId)}/${toWildcardOrHex(elementId)}${isUrgentString}`;
    }
    const endpointName = `${endpoint.name}(${toWildcardOrHex(endpointId)})`;

    if (clusterId === undefined) {
        return `${endpointName}/*/${toWildcardOrHex(elementId)}${isUrgentString}`;
    }

    const cluster = endpoint[clusterId];
    if (cluster === undefined) {
        return `${endpointName}/unknown(${toWildcardOrHex(clusterId)})/${toWildcardOrHex(elementId)}${isUrgentString}`;
    }
    const clusterName = `${cluster.type.name}(${toWildcardOrHex(clusterId)})`;

    if ("eventId" in path && elementId !== undefined) {
        const event = cluster.type.events[elementId];
        return `${endpointName}/${clusterName}/${event?.name ?? "unknown"}(${toWildcardOrHex(elementId)})${isUrgentString}`;
    } else if ("attributeId" in path && elementId !== undefined) {
        const attribute = cluster.type.attributes[elementId];
        return `${endpointName}/${clusterName}/${attribute?.name ?? "unknown"}(${toWildcardOrHex(elementId)})${isUrgentString}`;
    } else {
        return `${endpointName}/${clusterName}/*${isUrgentString}`;
    }
}
