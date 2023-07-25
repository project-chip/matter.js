/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Attribute, Cluster } from "./Cluster.js";
import * as Clusters from "./definitions/index.js";

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
const clusterAttributeCache = new Map<number, Map<number, CachedAttributeInfo>>();

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
