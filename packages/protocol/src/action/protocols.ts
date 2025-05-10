/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OccurrenceManager } from "#events/OccurrenceManager.js";
import { DataModelPath, MatterModel } from "#model";
import type { AttributeId, ClusterId, DeviceTypeId, EndpointNumber, FabricIndex, NodeId, TlvSchema } from "#types";
import { AttributePath, EventId, EventPath } from "#types";
import { MaybePromise, Observable } from "@matter/general";
import { AccessControl } from "./server/AccessControl.js";
import { Val } from "./Val.js";

export interface AvailableElementIds {
    attributes: Set<AttributeId>;
    events: Set<EventId>;
}

/**
 * Optimized Matter protocol<->JS object interface
 *
 * This is the root contract between a Matter protocol implementation and a higher-level Matter data model.
 *
 * Note that the term "protocol" here has dual meaning.  The client of this interface is a Matter Protocol
 * implementation.  The implementation adheres to a JS protocol in the "interface" sense used by JS specifications.
 *
 * The goal is for this abstraction to be as inexpensive as possible.  Element access is via iteration or direct
 * property access using protocol-level numeric IDs.
 *
 * We limit metadata to parent->child, authorization and marshalling.  We limit function calls to a few places where the
 * return value depends on session state.
 *
 * To optimize performance, underlying implementations should align their native structures as closely as possible to
 * those defined by these contracts.  When adaptation is necessary you can generate objects to perform adaptation,
 * possibly with getters and/or setters where caching is infeasible or unnecessary.
 */
export interface NodeProtocol extends CollectionProtocol<EndpointProtocol> {
    /**
     * The active Matter data model.
     *
     * A protocol implementation may fall back to this model in some cases when element paths do not resolve.
     */
    matter: MatterModel;

    /**
     * Obtain the ID of this node in the context of a specific fabric.
     */
    nodeIdFor(fabric: FabricIndex): NodeId | undefined;

    /**
     * The Event Handler for this node.
     */
    eventHandler: OccurrenceManager;

    /**
     * Event when data on the node changes.
     */
    stateChanged: Observable<[endpointId: EndpointNumber, clusterId: ClusterId, changes: AttributeId[]], MaybePromise>;

    /**
     * Inspects an Attribute- or Event path and log in human-readable form if possible
     */
    inspectPath(path: AttributePath | EventPath): string;
}

/**
 * Protocol contract for a specific endpoint.
 */
export interface EndpointProtocol
    extends CollectionProtocol<ClusterProtocol>,
        AddressableElementProtocol<EndpointNumber> {
    /**
     * Path to the endpoint within the data model.
     */
    path: DataModelPath;

    /**
     * List of device types associated with the endpoint.
     */
    deviceTypes: DeviceTypeId[];
}

/**
 * Protocol contract for a specific cluster on a specific endpoint.
 */
export interface ClusterProtocol {
    type: ClusterTypeProtocol;

    /**
     * Current version of cluster data.
     */
    version: number;

    /**
     * The location of the cluster within the data model.
     */
    location: AccessControl.Location;

    /**
     * The cluster datasource state change event
     */
    stateChanged: Observable<[changes: string[], version: number], MaybePromise>;

    /**
     * Access a record of attribute values, keyed by attribute ID.
     *
     * Note that current protocol implementations do not filter data within this responsibility based on the
     * session.  So doing is the responsibility of the node implementation.
     */
    open(session: AccessControl.Session): Val.ProtocolStruct;
}

/**
 * Protocol contract for a specific type of cluster (including feature variants).
 *
 * TODO - commands and events
 */
export interface ClusterTypeProtocol extends AddressableElementProtocol<ClusterId> {
    /**
     * Attribute metadata.
     */
    attributes: CollectionProtocol<AttributeTypeProtocol>;

    /**
     * Map of attribute names to IDs.
     */
    attributeNameToId: Map<string, AttributeId>;

    /**
     * Event metadata.
     */
    events: CollectionProtocol<EventTypeProtocol>;
}

/**
 * Descriptor for a specific property type.
 */
export interface AttributeTypeProtocol extends AddressableElementProtocol<AttributeId> {
    /**
     * The TLV schema for this property.
     */
    tlv: TlvSchema<unknown>;

    /**
     * Access control information for the attribute.
     */
    limits: AccessControl.Limits;

    /**
     * Changes of this attribute are omitted from subscriptions
     */
    changesOmitted: boolean;
}

/**
 * Descriptor for a specific property type.
 */
export interface EventTypeProtocol extends Omit<AddressableElementProtocol<EventId>, "wildcardPathFlags"> {
    /**
     * The TLV schema for this property.
     */
    tlv: TlvSchema<unknown>;

    /**
     * Access control information for the attribute.
     */
    limits: AccessControl.Limits;
}

/**
 * Protocol contract for addressable elements.
 */
export interface AddressableElementProtocol<N extends number> {
    /**
     * The numeric ID of the element defined by the Matter specification.
     */
    id: N;

    /**
     * Human readable name of the element.
     */
    name: string;

    /**
     * Bitmap with each wildcard path flag bit set where this value should be skipped.
     */
    wildcardPathFlags: number;
}

/**
 * A collection of elements that supports lookup by numeric ID and iteration.
 */
export interface CollectionProtocol<T> {
    [id: number]: T | undefined;
    [Symbol.iterator](): Iterator<T, void, void>;
}
