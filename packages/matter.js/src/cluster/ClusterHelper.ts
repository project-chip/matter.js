/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { AttributeId } from "../datatype/AttributeId.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { CommandId } from "../datatype/CommandId.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { EventId } from "../datatype/EventId.js";
import { NodeId } from "../datatype/NodeId.js";
import { Logger } from "../log/Logger.js";
import { TlvAttributePath, TlvCommandPath, TlvEventPath } from "../protocol/interaction/InteractionProtocol.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { toHexString } from "../util/Number.js";
import { Attribute, Cluster, Command, Event } from "./Cluster.js";
import * as Clusters from "./definitions/index.js";

const logger = Logger.get("ClusterHelper");

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
    event: Event<any, any>;
    name: string;
}
interface CachedCommandInfo {
    command: Command<any, any, any>;
    name: string;
}
const clusterAttributeCache = new Map<ClusterId, Map<AttributeId, CachedAttributeInfo>>();
const clusterEventCache = new Map<ClusterId, Map<EventId, CachedEventInfo>>();
const clusterCommandCache = new Map<ClusterId, Map<CommandId, CachedCommandInfo>>();

export const UnknownCluster = (clusterId: ClusterId) =>
    Cluster({
        id: clusterId,
        name: `Unknown cluster ${toHex(clusterId)}`,
        revision: 0,
        unknown: true,
    });

export function getClusterNameById(clusterId: ClusterId): string {
    return AllClustersMap[clusterId]?.name ?? `Unknown cluster ${toHexString(clusterId)}`;
}

export function getClusterById(clusterId: ClusterId): Cluster<any, any, any, any, any> {
    if (AllClustersMap[clusterId] === undefined) {
        logger.info(`Unknown cluster ${toHex(clusterId)} requested: UnknownCluster instance added.`);
        AllClustersMap[clusterId] = UnknownCluster(clusterId);
    }
    return AllClustersMap[clusterId];
}

export function getClusterAttributeById(
    clusterDef: Cluster<any, any, any, any, any>,
    attributeId: AttributeId,
): CachedAttributeInfo | undefined {
    if (!clusterAttributeCache.has(clusterDef.id)) {
        const attributeMap = new Map<AttributeId, CachedAttributeInfo>();

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

export function getClusterEventById(
    clusterDef: Cluster<any, any, any, any, any>,
    eventId: EventId,
): CachedEventInfo | undefined {
    if (!clusterEventCache.has(clusterDef.id)) {
        const eventMap = new Map<EventId, CachedEventInfo>();

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

export function getClusterCommandById(
    clusterDef: Cluster<any, any, any, any, any>,
    commandId: CommandId,
): CachedCommandInfo | undefined {
    if (!clusterCommandCache.has(clusterDef.id)) {
        const commandMap = new Map<CommandId, CachedCommandInfo>();

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

function resolveEndpointClusterName(
    nodeId: NodeId | undefined,
    endpointId: EndpointNumber | undefined,
    clusterId: ClusterId | undefined,
) {
    let elementName = nodeId === undefined ? "" : `${toHex(nodeId)}/`;
    if (endpointId === undefined) {
        elementName += "*";
    } else {
        elementName += `${toHex(endpointId)}`;
    }

    if (clusterId === undefined) {
        return `${elementName}/*`;
    }
    const cluster = getClusterById(clusterId);
    if (cluster.unknown) {
        return `${elementName}/unknown(${toHex(clusterId)})`;
    }
    return `${elementName}/${cluster.name}(${toHex(clusterId)})`;
}

export function resolveAttributeName({
    nodeId,
    endpointId,
    clusterId,
    attributeId,
}: TypeFromSchema<typeof TlvAttributePath>) {
    const endpointClusterName = resolveEndpointClusterName(nodeId, endpointId, clusterId);
    if (endpointId === undefined || clusterId === undefined || attributeId === undefined) {
        return `${endpointClusterName}/${toHex(attributeId)}`;
    }
    const cluster = getClusterById(clusterId);
    const attribute = getClusterAttributeById(cluster, attributeId);
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
