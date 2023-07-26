/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Attribute, Cluster } from "./Cluster.js";
import * as Clusters from "./definitions/index.js";
import { NodeId } from "../datatype/NodeId.js";
import { TlvAttributePath, TlvCommandPath, TlvEventPath } from "../protocol/interaction/InteractionProtocol.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";

export const AllClustersMap: { [key: Cluster<any, any, any, any, any>["id"]]: Cluster<any, any, any, any, any> } = {
    [Clusters.AccessControlCluster.id]: Clusters.AccessControlCluster,
    [Clusters.IdentifyCluster.id]: Clusters.IdentifyCluster,
    [Clusters.GroupsCluster.id]: Clusters.GroupsCluster,
    [Clusters.ScenesCluster.id]: Clusters.ScenesCluster,
    [Clusters.OnOffCluster.id]: Clusters.OnOffCluster,
    [Clusters.LevelControlCluster.id]: Clusters.LevelControlCluster,
    [Clusters.PulseWidthModulationCluster.id]: Clusters.PulseWidthModulationCluster,
    [Clusters.BooleanStateCluster.id]: Clusters.BooleanStateCluster,
    [Clusters.ModeSelectCluster.id]: Clusters.ModeSelectCluster,
    [Clusters.LowPowerCluster.id]: Clusters.LowPowerCluster,
    [Clusters.WakeOnLanCluster.id]: Clusters.WakeOnLanCluster,
    [Clusters.SwitchCluster.id]: Clusters.SwitchCluster,
    [Clusters.IlluminanceMeasurementCluster.id]: Clusters.IlluminanceMeasurementCluster,
    [Clusters.TemperatureMeasurementCluster.id]: Clusters.TemperatureMeasurementCluster,
    [Clusters.PressureMeasurementCluster.id]: Clusters.PressureMeasurementCluster,
    [Clusters.FlowMeasurementCluster.id]: Clusters.FlowMeasurementCluster,
    [Clusters.RelativeHumidityMeasurementCluster.id]: Clusters.RelativeHumidityMeasurementCluster,
    [Clusters.LeafWetnessMeasurementCluster.id]: Clusters.LeafWetnessMeasurementCluster,
    [Clusters.SoilMoistureMeasurementCluster.id]: Clusters.SoilMoistureMeasurementCluster,
    [Clusters.OccupancySensingCluster.id]: Clusters.OccupancySensingCluster,
    [Clusters.ColorControlCluster.id]: Clusters.ColorControlCluster,
    [Clusters.BallastConfigurationCluster.id]: Clusters.BallastConfigurationCluster,
    [Clusters.PumpConfigurationAndControlCluster.id]: Clusters.PumpConfigurationAndControlCluster,
    [Clusters.ThermostatCluster.id]: Clusters.ThermostatCluster,
    [Clusters.FanControlCluster.id]: Clusters.FanControlCluster,
    [Clusters.ThermostatUserInterfaceConfigurationCluster.id]: Clusters.ThermostatUserInterfaceConfigurationCluster,
    [Clusters.DoorLockCluster.id]: Clusters.DoorLockCluster,
    [Clusters.WindowCoveringCluster.id]: Clusters.WindowCoveringCluster,
    [Clusters.AccountLoginCluster.id]: Clusters.AccountLoginCluster,
    [Clusters.ApplicationBasicCluster.id]: Clusters.ApplicationBasicCluster,
    [Clusters.ApplicationLauncherCluster.id]: Clusters.ApplicationLauncherCluster,
    [Clusters.AudioOutputCluster.id]: Clusters.AudioOutputCluster,
    [Clusters.ChannelCluster.id]: Clusters.ChannelCluster,
    [Clusters.ContentLauncherCluster.id]: Clusters.ContentLauncherCluster,
    [Clusters.KeypadInputCluster.id]: Clusters.KeypadInputCluster,
    [Clusters.MediaInputCluster.id]: Clusters.MediaInputCluster,
    [Clusters.MediaPlaybackCluster.id]: Clusters.MediaPlaybackCluster,
    [Clusters.TargetNavigatorCluster.id]: Clusters.TargetNavigatorCluster,
    [Clusters.DescriptorCluster.id]: Clusters.DescriptorCluster,
    [Clusters.BindingCluster.id]: Clusters.BindingCluster,
    [Clusters.FixedLabelCluster.id]: Clusters.FixedLabelCluster,
    [Clusters.UserLabelCluster.id]: Clusters.UserLabelCluster,
    [Clusters.AccessControlCluster.id]: Clusters.AccessControlCluster,
    [Clusters.BridgedDeviceBasicInformationCluster.id]: Clusters.BridgedDeviceBasicInformationCluster,
    [Clusters.ActionsCluster.id]: Clusters.ActionsCluster,
    [Clusters.ProxyDiscoveryCluster.id]: Clusters.ProxyDiscoveryCluster,
    [Clusters.ProxyConfigurationCluster.id]: Clusters.ProxyConfigurationCluster,
    [Clusters.ValidProxiesCluster.id]: Clusters.ValidProxiesCluster,
    [Clusters.BasicInformationCluster.id]: Clusters.BasicInformationCluster,
    [Clusters.GroupKeyManagementCluster.id]: Clusters.GroupKeyManagementCluster,
    [Clusters.LocalizationConfigurationCluster.id]: Clusters.LocalizationConfigurationCluster,
    [Clusters.TimeFormatLocalizationCluster.id]: Clusters.TimeFormatLocalizationCluster,
    [Clusters.UnitLocalizationCluster.id]: Clusters.UnitLocalizationCluster,
    [Clusters.PowerSourceConfigurationCluster.id]: Clusters.PowerSourceConfigurationCluster,
    [Clusters.PowerSourceCluster.id]: Clusters.PowerSourceCluster,
    [Clusters.NetworkCommissioningCluster.id]: Clusters.NetworkCommissioningCluster,
    [Clusters.GeneralCommissioningCluster.id]: Clusters.GeneralCommissioningCluster,
    [Clusters.DiagnosticLogsCluster.id]: Clusters.DiagnosticLogsCluster,
    [Clusters.GeneralDiagnosticsCluster.id]: Clusters.GeneralDiagnosticsCluster,
    [Clusters.SoftwareDiagnosticsCluster.id]: Clusters.SoftwareDiagnosticsCluster,
    [Clusters.ThreadNetworkDiagnosticsCluster.id]: Clusters.ThreadNetworkDiagnosticsCluster,
    [Clusters.WiFiNetworkDiagnosticsCluster.id]: Clusters.WiFiNetworkDiagnosticsCluster,
    [Clusters.EthernetNetworkDiagnosticsCluster.id]: Clusters.EthernetNetworkDiagnosticsCluster,
    [Clusters.TimeSyncCluster.id]: Clusters.TimeSyncCluster,
    [Clusters.OperationalCredentialsCluster.id]: Clusters.OperationalCredentialsCluster,
    [Clusters.AdministratorCommissioningCluster.id]: Clusters.AdministratorCommissioningCluster,
    [Clusters.OtaSoftwareUpdateProviderCluster.id]: Clusters.OtaSoftwareUpdateProviderCluster,
    [Clusters.OtaSoftwareUpdateRequestorCluster.id]: Clusters.OtaSoftwareUpdateRequestorCluster,
    [Clusters.ClientMonitoringCluster.id]: Clusters.ClientMonitoringCluster,
    [Clusters.FaultInjectionCluster.id]: Clusters.FaultInjectionCluster,
    [Clusters.BarrierControlCluster.id]: Clusters.BarrierControlCluster,
    [Clusters.ElectricalMeasurementCluster.id]: Clusters.ElectricalMeasurementCluster,
    [Clusters.BinaryInputBasicCluster.id]: Clusters.BinaryInputBasicCluster,
    [Clusters.OnOffSwitchConfigurationCluster.id]: Clusters.OnOffSwitchConfigurationCluster,
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
