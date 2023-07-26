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
    [Clusters.AccountLoginCluster.id]: Clusters.AccountLoginCluster,
    [Clusters.ActionsCluster.id]: Clusters.ActionsCluster,
    [Clusters.AdministratorCommissioningCluster.id]: Clusters.AdministratorCommissioning.Complete,
    [Clusters.ApplicationBasicCluster.id]: Clusters.ApplicationBasicCluster,
    [Clusters.ApplicationLauncherCluster.id]: Clusters.ApplicationLauncher.Complete,
    [Clusters.AudioOutputCluster.id]: Clusters.AudioOutput.Complete,
    [Clusters.BallastConfigurationCluster.id]: Clusters.BallastConfigurationCluster,
    [Clusters.BarrierControlCluster.id]: Clusters.BarrierControlCluster,
    [Clusters.BasicInformationCluster.id]: Clusters.BasicInformationCluster,
    [Clusters.BinaryInputBasicCluster.id]: Clusters.BinaryInputBasicCluster,
    [Clusters.BindingCluster.id]: Clusters.BindingCluster,
    [Clusters.BooleanStateCluster.id]: Clusters.BooleanStateCluster,
    [Clusters.BridgedDeviceBasicInformationCluster.id]: Clusters.BridgedDeviceBasicInformationCluster,
    [Clusters.ChannelCluster.id]: Clusters.Channel.Complete,
    [Clusters.ClientMonitoringCluster.id]: Clusters.ClientMonitoringCluster,
    [Clusters.ColorControlCluster.id]: Clusters.ColorControl.Complete,
    [Clusters.ContentLauncherCluster.id]: Clusters.ContentLauncher.Complete,
    [Clusters.DescriptorCluster.id]: Clusters.DescriptorCluster,
    [Clusters.DiagnosticLogsCluster.id]: Clusters.DiagnosticLogsCluster,
    [Clusters.DoorLockCluster.id]: Clusters.DoorLock.Complete,
    [Clusters.ElectricalMeasurementCluster.id]: Clusters.ElectricalMeasurementCluster,
    [Clusters.EthernetNetworkDiagnosticsCluster.id]: Clusters.EthernetNetworkDiagnostics.Complete,
    [Clusters.FanControlCluster.id]: Clusters.FanControl.Complete,
    [Clusters.FaultInjectionCluster.id]: Clusters.FaultInjectionCluster,
    [Clusters.FixedLabelCluster.id]: Clusters.FixedLabelCluster,
    [Clusters.FlowMeasurementCluster.id]: Clusters.FlowMeasurementCluster,
    [Clusters.GeneralCommissioningCluster.id]: Clusters.GeneralCommissioningCluster,
    [Clusters.GeneralDiagnosticsCluster.id]: Clusters.GeneralDiagnosticsCluster,
    [Clusters.GroupKeyManagementCluster.id]: Clusters.GroupKeyManagementCluster,
    [Clusters.GroupsCluster.id]: Clusters.GroupsCluster,
    [Clusters.IdentifyCluster.id]: Clusters.Identify.Complete,
    [Clusters.IlluminanceMeasurementCluster.id]: Clusters.IlluminanceMeasurementCluster,
    [Clusters.KeypadInputCluster.id]: Clusters.KeypadInputCluster,
    [Clusters.LeafWetnessMeasurementCluster.id]: Clusters.LeafWetnessMeasurementCluster,
    [Clusters.LevelControlCluster.id]: Clusters.LevelControl.Complete,
    [Clusters.LocalizationConfigurationCluster.id]: Clusters.LocalizationConfigurationCluster,
    [Clusters.LowPowerCluster.id]: Clusters.LowPowerCluster,
    [Clusters.MediaInputCluster.id]: Clusters.MediaInput.Complete,
    [Clusters.MediaPlaybackCluster.id]: Clusters.MediaPlayback.Complete,
    [Clusters.ModeSelectCluster.id]: Clusters.ModeSelect.Complete,
    [Clusters.NetworkCommissioningCluster.id]: Clusters.NetworkCommissioning.Complete,
    [Clusters.OccupancySensingCluster.id]: Clusters.OccupancySensingCluster,
    [Clusters.OnOffCluster.id]: Clusters.OnOff.Complete,
    [Clusters.OnOffSwitchConfigurationCluster.id]: Clusters.OnOffSwitchConfigurationCluster,
    [Clusters.OperationalCredentialsCluster.id]: Clusters.OperationalCredentialsCluster,
    [Clusters.OtaSoftwareUpdateProviderCluster.id]: Clusters.OtaSoftwareUpdateProviderCluster,
    [Clusters.OtaSoftwareUpdateRequestorCluster.id]: Clusters.OtaSoftwareUpdateRequestorCluster,
    [Clusters.PowerSourceCluster.id]: Clusters.PowerSource.Complete,
    [Clusters.PowerSourceConfigurationCluster.id]: Clusters.PowerSourceConfigurationCluster,
    [Clusters.PressureMeasurementCluster.id]: Clusters.PressureMeasurement.Complete,
    [Clusters.ProxyConfigurationCluster.id]: Clusters.ProxyConfigurationCluster,
    [Clusters.ProxyDiscoveryCluster.id]: Clusters.ProxyDiscoveryCluster,
    [Clusters.PulseWidthModulationCluster.id]: Clusters.PulseWidthModulation.Complete,
    [Clusters.PumpConfigurationAndControlCluster.id]: Clusters.PumpConfigurationAndControl.Complete,
    [Clusters.RelativeHumidityMeasurementCluster.id]: Clusters.RelativeHumidityMeasurementCluster,
    [Clusters.ScenesCluster.id]: Clusters.ScenesCluster,
    [Clusters.SoftwareDiagnosticsCluster.id]: Clusters.SoftwareDiagnostics.Complete,
    [Clusters.SoilMoistureMeasurementCluster.id]: Clusters.SoilMoistureMeasurementCluster,
    [Clusters.SwitchCluster.id]: Clusters.Switch.Complete,
    [Clusters.TargetNavigatorCluster.id]: Clusters.TargetNavigatorCluster,
    [Clusters.TemperatureMeasurementCluster.id]: Clusters.TemperatureMeasurementCluster,
    [Clusters.ThermostatCluster.id]: Clusters.Thermostat.Complete,
    [Clusters.ThermostatUserInterfaceConfigurationCluster.id]: Clusters.ThermostatUserInterfaceConfigurationCluster,
    [Clusters.ThreadNetworkDiagnosticsCluster.id]: Clusters.ThreadNetworkDiagnostics.Complete,
    [Clusters.TimeFormatLocalizationCluster.id]: Clusters.TimeFormatLocalization.Complete,
    [Clusters.TimeSyncCluster.id]: Clusters.TimeSync.Complete,
    [Clusters.UnitLocalizationCluster.id]: Clusters.UnitLocalization.Complete,
    [Clusters.UserLabelCluster.id]: Clusters.UserLabelCluster,
    [Clusters.ValidProxiesCluster.id]: Clusters.ValidProxiesCluster,
    [Clusters.WakeOnLanCluster.id]: Clusters.WakeOnLanCluster,
    [Clusters.WiFiNetworkDiagnosticsCluster.id]: Clusters.WiFiNetworkDiagnostics.Complete,
    [Clusters.WindowCoveringCluster.id]: Clusters.WindowCovering.Complete,
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
