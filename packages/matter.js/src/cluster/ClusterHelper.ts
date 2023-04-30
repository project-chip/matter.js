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
import { LevelControlCluster } from "./LevelControlCluster.js";
import { NetworkCommissioningCluster } from "./NetworkCommissioningCluster.js";
import { OccupancySensingCluster } from "./OccupancySensingCluster.js";
import { OnOffCluster } from "./OnOffCluster.js";
import { OperationalCredentialsCluster } from "./OperationalCredentialsCluster.js";
import { PowerSourceCluster } from "./PowerSourceCluster.js";
import { PowerSourceConfigurationCluster } from "./PowerSourceConfigurationCluster.js";
import { PressureMeasurementCluster } from "./PressureMeasurementCluster.js";
import { ScenesCluster } from "./ScenesCluster.js";
import { TemperatureMeasurementCluster } from "./TemperatureMeasurementCluster.js";
import { RelativeHumidityCluster, SoilMoistureMeasurementCluster, LeafWetnessMeasurementCluster } from "./WaterContentMeasurementCluster.js";
import { GeneralDiagnosticsCluster } from "./GeneralDiagnosticsCluster.js";
import { GroupKeyManagementCluster } from "./GroupKeyManagementCluster.js";

export const AllClustersMap: { [key: Cluster<any, any, any, any>["id"]]: Cluster<any, any, any, any> } = {
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
    [NetworkCommissioningCluster.id]: NetworkCommissioningCluster,
    [OccupancySensingCluster.id]: OccupancySensingCluster,
    [OnOffCluster.id]: OnOffCluster,
    [OperationalCredentialsCluster.id]: OperationalCredentialsCluster,
    [PowerSourceCluster.id]: PowerSourceCluster,
    [PowerSourceConfigurationCluster.id]: PowerSourceConfigurationCluster,
    [PressureMeasurementCluster.id]: PressureMeasurementCluster,
    [ScenesCluster.id]: ScenesCluster,
    [TemperatureMeasurementCluster.id]: TemperatureMeasurementCluster,
    [RelativeHumidityCluster.id]: RelativeHumidityCluster,
    [LeafWetnessMeasurementCluster.id]: LeafWetnessMeasurementCluster,
    [SoilMoistureMeasurementCluster.id]: SoilMoistureMeasurementCluster,
};

interface CachedAttributeInfo {
    attribute: Attribute<any>;
    name: string;
}
const clusterAttributeCache = new Map<number, Map<number, CachedAttributeInfo>>();

export function getClusterById(clusterId: number): Cluster<any, any, any, any> {
    return AllClustersMap[clusterId];
}

export function getClusterAttributeById(clusterDef: Cluster<any, any, any, any>, attributeId: number): CachedAttributeInfo | undefined {
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
