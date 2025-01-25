/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, InternalError, Observable } from "#general";
import {
    AcceptedCommandList,
    AttributeList,
    AttributeModel,
    ClusterModel,
    GeneratedCommandList,
    MatterModel,
} from "#model";
import {
    AttributeId,
    ClusterId,
    CommandId,
    EndpointNumber,
    EventId,
    Mei,
    NodeId,
    StatusCode,
    StatusResponseError,
    TlvAttributePath,
    TlvCommandPath,
    TlvEventPath,
    TypeFromPartialBitSchema,
    TypeFromSchema,
    WildcardPathFlagsBitmap,
} from "#types";
import { AnyAttributeServer } from "../cluster/server/AttributeServer.js";
import { ClusterServer } from "../cluster/server/ClusterServer.js";
import { CommandServer } from "../cluster/server/CommandServer.js";
import { AnyEventServer } from "../cluster/server/EventServer.js";
import { EndpointInterface } from "../endpoint/EndpointInterface.js";
import {
    AttributePath,
    AttributeWithPath,
    CommandPath,
    CommandWithPath,
    EventPath,
    EventWithPath,
    attributePathToId,
    commandPathToId,
    eventPathToId,
    genericElementPathToId,
} from "./InteractionServer.js";

/**
 * List of global attributes to skip when the WildcardSkipGlobalAttributes bit is set in an Wildcard Path Flags
 * @see {@link MatterSpecification.v13.Core} §8.2.1.7
 */
const GLOBAL_COMMANDLIST_IDS = [GeneratedCommandList.id, AcceptedCommandList.id];
const GLOBAL_ATTRIBUTES_LIST = [...GLOBAL_COMMANDLIST_IDS, AttributeList.id];

// Build a list of cluster IDs that are used for diagnostics to not always filter through model
// TODO Find a way to also incorporate custom clusters here
const DIAGNOSTICS_CLUSTER_IDS = MatterModel.standard.clusters
    .filter(cluster => cluster.diagnostics && cluster.id !== undefined)
    .map(cluster => cluster.id as ClusterId);

export class InteractionEndpointStructure {
    endpoints = new Map<EndpointNumber, EndpointInterface>();
    attributes = new Map<string, AnyAttributeServer<any>>();
    attributePaths = new Array<AttributePath>();
    events = new Map<string, AnyEventServer<any, any>>();
    eventPaths = new Array<EventPath>();
    commands = new Map<string, CommandServer<any, any>>();
    commandPaths = new Array<CommandPath>();
    change = Observable(); // TODO adjust to AsyncObservable when we remove legacy API

    public clear() {
        this.endpoints.clear();
        this.attributes.clear();
        this.attributePaths.length = 0;
        this.events.clear();
        this.eventPaths.length = 0;
        this.commands.clear();
        this.commandPaths.length = 0;
    }

    public close() {
        for (const endpoint of this.endpoints.values()) {
            endpoint.close();
        }
    }

    public initializeFromEndpoint(endpoint: EndpointInterface) {
        this.clear();

        this.verifyAndInitializeStructureElementsFromEndpoint(endpoint); // Initialize Data from Root Endpoint
        this.initializeStructureFromEndpoints(endpoint); // Initialize Data from Child Endpoints

        this.change.emit();
    }

    private initializeStructureFromEndpoints(endpoint: EndpointInterface) {
        const endpoints = endpoint.getChildEndpoints();
        for (let endpointIndex = 0; endpointIndex < endpoints.length; endpointIndex++) {
            this.verifyAndInitializeStructureElementsFromEndpoint(endpoints[endpointIndex]);
            this.initializeStructureFromEndpoints(endpoints[endpointIndex]);
        }
    }

    private verifyAndInitializeStructureElementsFromEndpoint(endpoint: EndpointInterface) {
        if (endpoint.number === undefined) {
            throw new InternalError(`Endpoint ID is undefined. It needs to be initialized first!`);
        }

        endpoint.verifyRequiredClusters();

        const endpointId = endpoint.number;
        if (this.endpoints.has(endpoint.number)) {
            throw new ImplementationError(`Endpoint ID ${endpoint.number} exists twice`);
        }

        for (const cluster of endpoint.getAllClusterServers()) {
            const {
                id: clusterId,
                attributes: clusterAttributes,
                events: clusterEvents,
                commands: clusterCommands,
            } = cluster;

            // Add attributes
            for (const name in clusterAttributes) {
                const attribute = clusterAttributes[name];
                const path = { endpointId, clusterId, attributeId: attribute.id };
                this.attributes.set(attributePathToId(path), attribute);
                this.attributePaths.push(path);
            }

            // Add events
            for (const name in clusterEvents) {
                const event = clusterEvents[name];
                const path = { endpointId, clusterId, eventId: event.id };
                this.events.set(eventPathToId(path), event);
                this.eventPaths.push(path);
            }

            // Add commands
            for (const name in clusterCommands) {
                const command = clusterCommands[name];
                const path = { endpointId, clusterId, commandId: command.invokeId };
                this.commands.set(commandPathToId(path), command);
                this.commandPaths.push(path);
            }
        }

        this.endpoints.set(endpointId, endpoint);
    }

    toHex(value: number | bigint | undefined) {
        return value === undefined ? "*" : `0x${value.toString(16)}`;
    }

    resolveGenericElementName(
        nodeId: NodeId | undefined,
        endpointId: EndpointNumber | undefined,
        clusterId: ClusterId | undefined,
        elementId: number | undefined,
        elementMap: Map<string, any>,
    ) {
        const nodeIdPrefix = nodeId === undefined ? "" : `${this.toHex(nodeId)}/`;
        if (endpointId === undefined) {
            return `${nodeIdPrefix}*/${this.toHex(clusterId)}/${this.toHex(elementId)}`;
        }
        const endpoint = this.endpoints.get(endpointId);
        if (endpoint === undefined) {
            return `${nodeIdPrefix}unknown(${this.toHex(endpointId)})/${this.toHex(clusterId)}/${this.toHex(
                elementId,
            )}`;
        }
        const endpointName = `${endpoint.name}(${this.toHex(endpointId)})`;

        if (clusterId === undefined) {
            return `${nodeIdPrefix}${endpointName}/*/${this.toHex(elementId)}`;
        }
        const cluster = endpoint.getClusterServerById(clusterId);
        if (cluster === undefined) {
            return `${nodeIdPrefix}${endpointName}/unknown(${this.toHex(clusterId)})/${this.toHex(elementId)}`;
        }
        const clusterName = `${cluster.name}(${this.toHex(clusterId)})`;

        if (elementId === undefined) {
            return `${nodeIdPrefix}${endpointName}/${clusterName}/*`;
        }
        const element = elementMap.get(genericElementPathToId(endpointId, clusterId, elementId));
        const elementName = `${element?.name ?? "unknown"}(${this.toHex(elementId)})`;
        return `${nodeIdPrefix}${endpointName}/${clusterName}/${elementName}`;
    }

    resolveAttributeName({ nodeId, endpointId, clusterId, attributeId }: TypeFromSchema<typeof TlvAttributePath>) {
        return this.resolveGenericElementName(nodeId, endpointId, clusterId, attributeId, this.attributes);
    }

    resolveEventName({ nodeId, endpointId, clusterId, eventId, isUrgent }: TypeFromSchema<typeof TlvEventPath>) {
        return `${isUrgent ? "!" : ""}${this.resolveGenericElementName(
            nodeId,
            endpointId,
            clusterId,
            eventId,
            this.events,
        )}`;
    }

    resolveCommandName({ endpointId, clusterId, commandId }: TypeFromSchema<typeof TlvCommandPath>) {
        return this.resolveGenericElementName(undefined, endpointId, clusterId, commandId, this.commands);
    }

    getEndpoint(endpointId: EndpointNumber): EndpointInterface | undefined {
        return this.endpoints.get(endpointId);
    }

    hasEndpoint(endpointId: EndpointNumber): boolean {
        return this.endpoints.has(endpointId);
    }

    getClusterServer(endpointId: EndpointNumber, clusterId: ClusterId): ClusterServer | undefined {
        return this.endpoints.get(endpointId)?.getClusterServerById(clusterId);
    }

    hasClusterServer(endpointId: EndpointNumber, clusterId: ClusterId): boolean {
        return !!this.getClusterServer(endpointId, clusterId);
    }

    getAttribute(
        endpointId: EndpointNumber,
        clusterId: ClusterId,
        attributeId: AttributeId,
    ): AnyAttributeServer<any> | undefined {
        return this.attributes.get(attributePathToId({ endpointId, clusterId, attributeId }));
    }

    hasAttribute(endpointId: EndpointNumber, clusterId: ClusterId, attributeId: AttributeId): boolean {
        return !!this.getAttribute(endpointId, clusterId, attributeId);
    }

    validateConcreteAttributePath(endpointId: EndpointNumber, clusterId: ClusterId, attributeId: AttributeId) {
        if (!this.hasEndpoint(endpointId)) {
            throw new StatusResponseError(`Endpoint ${endpointId} does not exist.`, StatusCode.UnsupportedEndpoint);
        }
        if (!this.hasClusterServer(endpointId, clusterId)) {
            throw new StatusResponseError(`Cluster ${clusterId} does not exist.`, StatusCode.UnsupportedCluster);
        }
        if (this.hasAttribute(endpointId, clusterId, attributeId)) return true;
        throw new StatusResponseError(`Attribute ${attributeId} does not exist`, StatusCode.UnsupportedAttribute);
    }

    getEvent(endpointId: EndpointNumber, clusterId: ClusterId, eventId: EventId): AnyEventServer<any, any> | undefined {
        return this.events.get(eventPathToId({ endpointId, clusterId, eventId }));
    }

    hasEvent(endpointId: EndpointNumber, clusterId: ClusterId, eventId: EventId): boolean {
        return !!this.getEvent(endpointId, clusterId, eventId);
    }

    validateConcreteEventPath(endpointId: EndpointNumber, clusterId: ClusterId, eventId: EventId) {
        if (!this.hasEndpoint(endpointId)) {
            throw new StatusResponseError(`Endpoint ${endpointId} does not exist.`, StatusCode.UnsupportedEndpoint);
        }
        if (!this.hasClusterServer(endpointId, clusterId)) {
            throw new StatusResponseError(`Cluster ${clusterId} does not exist.`, StatusCode.UnsupportedCluster);
        }
        if (this.hasEvent(endpointId, clusterId, eventId)) return true;
        throw new StatusResponseError(`Event ${eventId} does not exist`, StatusCode.UnsupportedEvent);
    }

    getCommand(
        endpointId: EndpointNumber,
        clusterId: ClusterId,
        commandId: CommandId,
    ): CommandServer<any, any> | undefined {
        return this.commands.get(commandPathToId({ endpointId, clusterId, commandId }));
    }

    hasCommand(endpointId: EndpointNumber, clusterId: ClusterId, commandId: CommandId): boolean {
        return !!this.getCommand(endpointId, clusterId, commandId);
    }

    validateConcreteCommandPath(endpointId: EndpointNumber, clusterId: ClusterId, commandId: CommandId) {
        if (!this.hasEndpoint(endpointId)) {
            throw new StatusResponseError(`Endpoint ${endpointId} does not exist.`, StatusCode.UnsupportedEndpoint);
        }
        if (!this.hasClusterServer(endpointId, clusterId)) {
            throw new StatusResponseError(`Cluster ${clusterId} does not exist.`, StatusCode.UnsupportedCluster);
        }
        if (this.hasCommand(endpointId, clusterId, commandId)) return true;
        throw new StatusResponseError(`Command ${commandId} does not exist`, StatusCode.UnsupportedCommand);
    }

    /** Checks if the given attribute matches the wildcard path flags */
    attributePathMatchesWildcardPathFlags(
        { endpointId, clusterId, attributeId }: AttributePath,
        wildcardPathFlags?: TypeFromPartialBitSchema<typeof WildcardPathFlagsBitmap>,
    ) {
        if (wildcardPathFlags === undefined) return false;
        if (wildcardPathFlags.skipRootNode && endpointId === 0) {
            return true;
        }

        // Only check if the attribute ID is a global attribute ID
        if (attributeId >= 0xfff8 && attributeId <= 0xfffb) {
            if (wildcardPathFlags.skipGlobalAttributes && GLOBAL_ATTRIBUTES_LIST.includes(attributeId)) {
                return true;
            }
            if (wildcardPathFlags.skipAttributeList && attributeId === AttributeList.id) {
                return true;
            }
            if (wildcardPathFlags.skipCommandLists && GLOBAL_COMMANDLIST_IDS.includes(attributeId)) {
                return true;
            }
        }

        if (
            wildcardPathFlags.skipCustomElements &&
            (Mei.hasCustomMeiPrefix(clusterId) || Mei.hasCustomMeiPrefix(attributeId))
        ) {
            return true;
        }

        const cluster = MatterModel.standard.get(ClusterModel, clusterId);
        if (cluster !== undefined) {
            const attribute = cluster.get(AttributeModel, attributeId);
            if (attribute !== undefined) {
                if (wildcardPathFlags.skipFixedAttributes && attribute.fixed) {
                    return true;
                }
                if (wildcardPathFlags.skipChangesOmittedAttributes && attribute.changesOmitted) {
                    return true;
                }
            }
            if (wildcardPathFlags.skipDiagnosticsClusters && DIAGNOSTICS_CLUSTER_IDS.includes(clusterId)) {
                return true;
            }
        }
        return false;
    }

    getAttributes(filters: TypeFromSchema<typeof TlvAttributePath>[], onlyWritable = false): AttributeWithPath[] {
        const result = new Array<AttributeWithPath>();

        filters.forEach(({ endpointId, clusterId, attributeId, wildcardPathFlags }) => {
            this.validateAnyPathDataTypes({ endpointId, clusterId, attributeId });
            if (endpointId !== undefined && clusterId !== undefined && attributeId !== undefined) {
                const path = { endpointId, clusterId, attributeId };
                const attribute = this.attributes.get(attributePathToId(path));
                if (attribute === undefined) return;
                if (onlyWritable && !attribute.isWritable) return;
                if (this.attributePathMatchesWildcardPathFlags(path)) return;
                result.push({ path, attribute });
            } else {
                this.attributePaths
                    .filter(
                        path =>
                            (endpointId === undefined || endpointId === path.endpointId) &&
                            (clusterId === undefined || clusterId === path.clusterId) &&
                            (attributeId === undefined || attributeId === path.attributeId),
                    )
                    .forEach(path => {
                        const attribute = this.attributes.get(attributePathToId(path));
                        if (attribute === undefined) return;
                        if (onlyWritable && !attribute.isWritable) return;
                        if (this.attributePathMatchesWildcardPathFlags(path, wildcardPathFlags)) return;
                        result.push({ path, attribute });
                    });
            }
        });

        return result;
    }

    getEvents(filters: TypeFromSchema<typeof TlvEventPath>[]): EventWithPath[] {
        const result = new Array<EventWithPath>();

        filters.forEach(({ endpointId, clusterId, eventId, isUrgent }) => {
            this.validateAnyPathDataTypes({ endpointId, clusterId, eventId });
            if (endpointId !== undefined && clusterId !== undefined && eventId !== undefined) {
                const path = { endpointId, clusterId, eventId, isUrgent };
                const event = this.events.get(eventPathToId(path));
                if (event === undefined) return;
                result.push({ path, event });
            } else {
                this.eventPaths
                    .filter(
                        path =>
                            (endpointId === undefined || endpointId === path.endpointId) &&
                            (clusterId === undefined || clusterId === path.clusterId) &&
                            (eventId === undefined || eventId === path.eventId),
                    )
                    .forEach(({ endpointId, clusterId, eventId }) => {
                        const path = { endpointId, clusterId, eventId, isUrgent };
                        const event = this.events.get(eventPathToId(path));
                        if (event === undefined) return;
                        result.push({ path, event });
                    });
            }
        });

        return result;
    }

    getCommands(filters: TypeFromSchema<typeof TlvCommandPath>[]): CommandWithPath[] {
        const result = new Array<CommandWithPath>();

        filters.forEach(({ endpointId, clusterId, commandId }) => {
            this.validateAnyPathDataTypes({ endpointId, clusterId, commandId });
            if (endpointId !== undefined && clusterId !== undefined && commandId !== undefined) {
                const path = { endpointId, clusterId, commandId };
                const command = this.commands.get(commandPathToId(path));
                if (command === undefined) return;
                result.push({ path, command });
            } else {
                this.commandPaths
                    .filter(
                        path =>
                            (endpointId === undefined || endpointId === path.endpointId) &&
                            (clusterId === undefined || clusterId === path.clusterId) &&
                            (commandId === undefined || commandId === path.commandId),
                    )
                    .forEach(path => {
                        const command = this.commands.get(commandPathToId(path));
                        if (command === undefined) return;
                        result.push({ path, command });
                    });
            }
        });

        return result;
    }

    // ValidationError will return ConstraintError ... we need to see if this is correct always
    validateAnyPathDataTypes(data: {
        endpointId?: EndpointNumber;
        clusterId?: ClusterId;
        attributeId?: AttributeId;
        eventId?: EventId;
        commandId?: CommandId;
    }) {
        const { endpointId, clusterId, attributeId, eventId, commandId } = data;

        if (endpointId !== undefined) {
            EndpointNumber(endpointId);
        }
        if (clusterId !== undefined) {
            ClusterId(clusterId);
        }
        if (attributeId !== undefined) {
            AttributeId(attributeId);
        }
        if (eventId !== undefined) {
            EventId(eventId);
        }
        if (commandId !== undefined) {
            CommandId(commandId);
        }
    }
}
