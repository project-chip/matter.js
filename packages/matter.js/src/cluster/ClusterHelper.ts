/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Attribute, Cluster } from "./Cluster.js";
import { AccessControlCluster } from "./AccessControlCluster.js";
import { ActionsCluster } from "./ActionsCluster.js";
import { AdminCommissioningCluster } from "./AdminCommissioningCluster.js";
import { BasicInformationCluster } from "./BasicInformationCluster.js";
import { BindingCluster } from "./BindingCluster.js";
import { BooleanStateCluster } from "./BooleanStateCluster.js";
import { BridgedDeviceBasicInformationCluster } from "./BridgedDeviceBasicInformationCluster.js";
import { DescriptorCluster } from "./DescriptorCluster.js";
import { FlowMeasurementCluster } from "./FlowMeasurementCluster.js";
import { GeneralCommissioningCluster } from "./GeneralCommissioningCluster.js";
import { GroupsCluster } from "./GroupsCluster.js";
import { IdentifyCluster } from "./IdentifyCluster.js";
import { IlluminanceMeasurementCluster } from "./IlluminanceMeasurementCluster.js";
import { UserLabelCluster, FixedLabelCluster } from "./LabelCluster.js";
import { LevelControlCluster, PulseWidthModulationLevelControlCluster } from "./LevelControlCluster.js";
import { WifiAndEthernetAndThreadNetworkCommissioningCluster } from "./NetworkCommissioningCluster.js";
import { OccupancySensingCluster } from "./OccupancySensingCluster.js";
import { OnOffCluster } from "./OnOffCluster.js";
import { OperationalCredentialsCluster } from "./OperationalCredentialsCluster.js";
import { WiredPowerSourceCluster } from "./PowerSourceCluster.js";
import { PowerSourceConfigurationCluster } from "./PowerSourceConfigurationCluster.js";
import { PressureMeasurementCluster } from "./PressureMeasurementCluster.js";
import { ScenesCluster } from "./ScenesCluster.js";
import { TemperatureMeasurementCluster } from "./TemperatureMeasurementCluster.js";
import { RelativeHumidityCluster, SoilMoistureMeasurementCluster, LeafWetnessMeasurementCluster } from "./WaterContentMeasurementCluster.js";
import { GeneralDiagnosticsCluster } from "./GeneralDiagnosticsCluster.js";
import { GroupKeyManagementCluster } from "./GroupKeyManagementCluster.js";
import { NodeId } from "../datatype/NodeId.js";
import { TlvAttributePath, TlvCommandPath, TlvEventPath } from "../protocol/interaction/InteractionProtocol.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";

export const AllClustersMap: { [key: Cluster<any, any, any, any, any>["id"]]: Cluster<any, any, any, any, any> } = {
    [AccessControlCluster.id]: AccessControlCluster,
    [ActionsCluster.id]: ActionsCluster,
    [AdminCommissioningCluster.id]: AdminCommissioningCluster,
    [BasicInformationCluster.id]: BasicInformationCluster,
    [BindingCluster.id]: BindingCluster,
    [BooleanStateCluster.id]: BooleanStateCluster,
    [BridgedDeviceBasicInformationCluster.id]: BridgedDeviceBasicInformationCluster,
    [DescriptorCluster.id]: DescriptorCluster,
    [FlowMeasurementCluster.id]: FlowMeasurementCluster,
    [GeneralCommissioningCluster.id]: GeneralCommissioningCluster,
    [GeneralDiagnosticsCluster.id]: GeneralDiagnosticsCluster,
    [GroupKeyManagementCluster.id]: GroupKeyManagementCluster,
    [GroupsCluster.id]: GroupsCluster,
    [IdentifyCluster.id]: IdentifyCluster,
    [IlluminanceMeasurementCluster.id]: IlluminanceMeasurementCluster,
    [UserLabelCluster.id]: UserLabelCluster,
    [FixedLabelCluster.id]: FixedLabelCluster,
    [LevelControlCluster.id]: LevelControlCluster,
    [WifiAndEthernetAndThreadNetworkCommissioningCluster.id]: WifiAndEthernetAndThreadNetworkCommissioningCluster,
    [OccupancySensingCluster.id]: OccupancySensingCluster,
    [OnOffCluster.id]: OnOffCluster,
    [OperationalCredentialsCluster.id]: OperationalCredentialsCluster,
    [PulseWidthModulationLevelControlCluster.id]: PulseWidthModulationLevelControlCluster,
    [WiredPowerSourceCluster.id]: WiredPowerSourceCluster,
    [PowerSourceConfigurationCluster.id]: PowerSourceConfigurationCluster,
    [PressureMeasurementCluster.id]: PressureMeasurementCluster,
    [ScenesCluster.id]: ScenesCluster,
    [TemperatureMeasurementCluster.id]: TemperatureMeasurementCluster,
    [RelativeHumidityCluster.id]: RelativeHumidityCluster,
    [LeafWetnessMeasurementCluster.id]: LeafWetnessMeasurementCluster,
    [SoilMoistureMeasurementCluster.id]: SoilMoistureMeasurementCluster,
};

interface CachedAttributeInfo {
    attribute: Attribute<any, any>;
    name: string;
}
interface CachedEventInfo {
    event: Attribute<any, any>;
    name: string;
}
interface CachedCommandInfo {
    command: Attribute<any, any>;
    name: string;
}
const clusterAttributeCache = new Map<number, Map<number, CachedAttributeInfo>>();
const clusterEventCache = new Map<number, Map<number, CachedEventInfo>>();
const clusterCommandCache = new Map<number, Map<number, CachedCommandInfo>>();

export function getClusterById(clusterId: number): Cluster<any, any, any, any, any> {
    return AllClustersMap[clusterId];
}

export function getClusterAttributeById(clusterDef: Cluster<any, any, any, any, any>, attributeId: number): CachedAttributeInfo | undefined {
    if (!clusterAttributeCache.has(clusterDef.id)) {
        const attributeMap = new Map<number, CachedAttributeInfo>();

        const { attributes } = clusterDef;

        // Add accessors
        for (const attributeName in attributes) {
            const attribute = attributes[attributeName];
            attributeMap.set(attribute.id, { attribute, name: attributeName });
        }

        clusterAttributeCache.set(clusterDef.id, attributeMap);
        return attributeMap.get(attributeId);
    }
    const attributeMap = clusterAttributeCache.get(clusterDef.id);
    if (attributeMap === undefined) {
        return undefined;
    }
    return attributeMap.get(attributeId);
}

export function getClusterEventById(clusterDef: Cluster<any, any, any, any, any>, eventId: number): CachedEventInfo | undefined {
    if (!clusterEventCache.has(clusterDef.id)) {
        const eventMap = new Map<number, CachedEventInfo>();

        const { events } = clusterDef;

        // Add accessors
        for (const eventName in events) {
            const event = events[eventName];
            eventMap.set(event.id, { event, name: eventName });
        }

        clusterEventCache.set(clusterDef.id, eventMap);
        return eventMap.get(eventId);
    }
    const eventMap = clusterEventCache.get(clusterDef.id);
    if (eventMap === undefined) {
        return undefined;
    }
    return eventMap.get(eventId);
}

export function getClusterCommandById(clusterDef: Cluster<any, any, any, any, any>, commandId: number): CachedCommandInfo | undefined {
    if (!clusterCommandCache.has(clusterDef.id)) {
        const commandMap = new Map<number, CachedCommandInfo>();

        const { commands } = clusterDef;

        // Add accessors
        for (const commandName in commands) {
            const command = commands[commandName];
            commandMap.set(command.requestId, { command, name: commandName });
        }

        clusterCommandCache.set(clusterDef.id, commandMap);
        return commandMap.get(commandId);
    }
    const commandMap = clusterCommandCache.get(clusterDef.id);
    if (commandMap === undefined) {
        return undefined;
    }
    return commandMap.get(commandId);
}

function toHex(value: number | bigint | undefined) {
    return value === undefined ? "*" : `0x${value.toString(16)}`;
}

function resolveEndpointClusterName(nodeId: NodeId | undefined, endpointId: number | undefined, clusterId: number | undefined) {
    let elementName = nodeId === undefined ? "" : `${toHex(nodeId.id)}/`;
    if (endpointId === undefined) {
        elementName += "*";
    } else {
        elementName += `${toHex(endpointId)}`;
    }

    if (clusterId === undefined) {
        return `${elementName}/*`;
    }
    const cluster = getClusterById(clusterId);
    if (cluster === undefined) {
        return `${elementName}/unknown(${toHex(clusterId)})`;
    }
    return `${elementName}/${cluster.name}(${toHex(clusterId)})`;
}

export function resolveAttributeName({ nodeId, endpointId, clusterId, attributeId }: TypeFromSchema<typeof TlvAttributePath>) {
    const endpointClusterName = resolveEndpointClusterName(nodeId, endpointId, clusterId);
    if (endpointId === undefined || clusterId === undefined || attributeId === undefined) {
        return `${endpointClusterName}/${toHex(attributeId)}`;
    }
    const attribute = getClusterAttributeById(getClusterById(clusterId), attributeId);
    if (attribute === undefined) {
        return `${endpointClusterName}/unknown(${toHex(attributeId)})`;
    }
    return `${endpointClusterName}/${attribute.name}(${toHex(attributeId)})`;
}

export function resolveEventName({ nodeId, endpointId, clusterId, eventId }: TypeFromSchema<typeof TlvEventPath>) {
    const endpointClusterName = resolveEndpointClusterName(nodeId, endpointId, clusterId);
    if (endpointId === undefined || clusterId === undefined || eventId === undefined) {
        return `${endpointClusterName}/${toHex(eventId)}`;
    }
    const event = getClusterEventById(getClusterById(clusterId), eventId);
    if (event === undefined) {
        return `${endpointClusterName}/unknown(${toHex(eventId)})`;
    }
    return `${endpointClusterName}/${event.name}(${toHex(eventId)})`;
}

export function resolveCommandName({ endpointId, clusterId, commandId }: TypeFromSchema<typeof TlvCommandPath>) {
    const endpointClusterName = resolveEndpointClusterName(undefined, endpointId, clusterId);
    if (endpointId === undefined || clusterId === undefined || commandId === undefined) {
        return `${endpointClusterName}/${toHex(commandId)}`;
    }
    const command = getClusterCommandById(getClusterById(clusterId), commandId);
    if (command === undefined) {
        return `${endpointClusterName}/unknown(${toHex(commandId)})`;
    }
    return `${endpointClusterName}/${command.name}(${toHex(commandId)})`;
}
