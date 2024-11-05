/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BasicInformation,
    Descriptor,
    IcdManagement,
    NetworkCommissioning,
    PowerSource,
    ThreadNetworkDiagnostics,
} from "#clusters";
import { Logger, SupportedStorageTypes } from "@matter/general";
import { InteractionClient, SupportedAttributeClient } from "@matter/protocol";
import { EndpointNumber, GlobalAttributes, NodeId, TypeFromPartialBitSchema, TypeFromSchema } from "@matter/types";
import { Endpoint } from "./Endpoint.js";

const logger = Logger.get("DeviceInformation");

export type DeviceMetaInformation = {
    threadConnected: boolean;
    wifiConnected: boolean;
    ethernetConnected: boolean;
    rootEndpointServerList: number[];
    isBatteryPowered: boolean;
    isIntermittentlyConnected: boolean;
    isThreadSleepyEndDevice: boolean;
    dataRevision: number;
};

export type DeviceBasicInformation = Record<string, SupportedStorageTypes>;

export type DeviceInformationData = {
    basicInformation?: Record<string, SupportedStorageTypes>;
    deviceMeta?: DeviceMetaInformation;
};

export const DEVICE_DATA_REVISION = 1;

const DEFAULT_SUBSCRIPTION_FLOOR_DEFAULT_S = 1;
const DEFAULT_SUBSCRIPTION_FLOOR_ICD_S = 0;
const DEFAULT_SUBSCRIPTION_CEILING_WIFI_S = 60;
const DEFAULT_SUBSCRIPTION_CEILING_THREAD_S = 60;
const DEFAULT_SUBSCRIPTION_CEILING_THREAD_SLEEPY_S = 180;
const DEFAULT_SUBSCRIPTION_CEILING_BATTERY_POWERED_S = 600;

const GlobalAttributeKeys = Object.keys(GlobalAttributes({}));

export class DeviceInformation {
    #basicInformation?: DeviceBasicInformation;
    #deviceMeta?: DeviceMetaInformation;

    constructor(
        readonly nodeId: NodeId,
        data: DeviceInformationData,
    ) {
        this.#basicInformation = data.basicInformation;
        this.#deviceMeta = data.deviceMeta;
    }

    get meta() {
        return this.#deviceMeta;
    }

    get basicInformation() {
        return this.#basicInformation;
    }

    get valid() {
        return (
            this.#basicInformation !== undefined &&
            this.#deviceMeta !== undefined &&
            this.#deviceMeta?.dataRevision === DEVICE_DATA_REVISION
        );
    }

    async enhanceDeviceDetailsFromCache(rootEndpoint: Endpoint) {
        const basicInformationData = {} as Record<string, SupportedStorageTypes>;
        const deviceData: DeviceMetaInformation = {
            ethernetConnected: false,
            wifiConnected: false,
            threadConnected: false,
            rootEndpointServerList: [] as number[],
            isBatteryPowered: false,
            isIntermittentlyConnected: false,
            isThreadSleepyEndDevice: false,
            dataRevision: DEVICE_DATA_REVISION,
        };

        const basicInformationClient = rootEndpoint.getClusterClient(BasicInformation.Cluster);
        if (basicInformationClient !== undefined) {
            for (const attributeName of Object.keys(basicInformationClient.attributes)) {
                if (GlobalAttributeKeys.includes(attributeName)) {
                    continue;
                }
                const attribute = (basicInformationClient.attributes as any)[attributeName];
                if (attribute instanceof SupportedAttributeClient) {
                    try {
                        basicInformationData[attributeName] = await attribute.get();
                    } catch (error) {
                        logger.info(`Error while getting attribute ${attributeName} for node ${this.nodeId}: ${error}`);
                    }
                }
            }
        } else {
            logger.info(`No basic information cluster found for node ${this.nodeId}`);
        }

        const descriptorClient = rootEndpoint.getClusterClient(Descriptor.Cluster);
        if (descriptorClient !== undefined) {
            const serverList = await descriptorClient.getServerListAttribute();
            deviceData.rootEndpointServerList = serverList;
            if (serverList.includes(IcdManagement.Cluster.id)) {
                deviceData.isIntermittentlyConnected = true;
            }
        } else {
            logger.info(`No descriptor cluster found for node ${this.nodeId}`);
        }

        const threadNetworkDiagnosticClient = rootEndpoint.getClusterClient(ThreadNetworkDiagnostics.Cluster);
        if (threadNetworkDiagnosticClient !== undefined) {
            const routingRole = await threadNetworkDiagnosticClient.getRoutingRoleAttribute();
            if (routingRole === ThreadNetworkDiagnostics.RoutingRole.SleepyEndDevice) {
                deviceData.isThreadSleepyEndDevice = true;
            }
        }

        await this.#collectEndpointStates(rootEndpoint, deviceData);

        this.#basicInformation = basicInformationData;
        this.#deviceMeta = deviceData;
    }

    async #collectEndpointStates(endpoint: Endpoint, deviceData: DeviceMetaInformation) {
        const networkCluster = endpoint.getClusterClient(NetworkCommissioning.Complete);
        if (networkCluster !== undefined) {
            if (await networkCluster.getInterfaceEnabledAttribute()) {
                const networks = await networkCluster.getNetworksAttribute();
                if (networks) {
                    if (networks.some(network => network.connected)) {
                        const features = await networkCluster.getFeatureMapAttribute();
                        if (features) {
                            if (features.ethernetNetworkInterface) {
                                deviceData.ethernetConnected = true;
                            } else if (features.wiFiNetworkInterface) {
                                deviceData.wifiConnected = true;
                            } else if (features.threadNetworkInterface) {
                                deviceData.threadConnected = true;
                            }
                        }
                    }
                }
            }
        }

        const powerSourceCluster = endpoint.getClusterClient(PowerSource.Cluster);
        if (powerSourceCluster !== undefined) {
            if ((await powerSourceCluster.getStatusAttribute()) === PowerSource.PowerSourceStatus.Active) {
                const features = await powerSourceCluster.getFeatureMapAttribute();
                if (features?.battery) {
                    deviceData.isBatteryPowered = true;
                }
            }
        }
        for (const childEndpoint of endpoint.getChildEndpoints()) {
            await this.#collectEndpointStates(childEndpoint, deviceData);
        }
    }

    async enhanceDeviceDetailsFromRemote(interactionClient: InteractionClient) {
        const readData = await interactionClient.getMultipleAttributes({
            attributes: [
                { endpointId: EndpointNumber(0), clusterId: BasicInformation.Cluster.id },
                {
                    endpointId: EndpointNumber(0),
                    clusterId: Descriptor.Cluster.id,
                    attributeId: Descriptor.Cluster.attributes.serverList.id,
                },
                {
                    clusterId: NetworkCommissioning.Cluster.id,
                    attributeId: NetworkCommissioning.Complete.attributes.featureMap.id,
                },
                {
                    clusterId: NetworkCommissioning.Cluster.id,
                    attributeId: NetworkCommissioning.Complete.attributes.networks.id,
                },
                {
                    clusterId: NetworkCommissioning.Cluster.id,
                    attributeId: NetworkCommissioning.Complete.attributes.interfaceEnabled.id,
                },
                {
                    clusterId: PowerSource.Cluster.id,
                    attributeId: PowerSource.Cluster.attributes.featureMap.id,
                },
                {
                    clusterId: PowerSource.Cluster.id,
                    attributeId: PowerSource.Cluster.attributes.status.id,
                },
                {
                    endpointId: EndpointNumber(0),
                    clusterId: ThreadNetworkDiagnostics.Cluster.id,
                    attributeId: ThreadNetworkDiagnostics.Cluster.attributes.routingRole.id,
                },
            ],
        });
        const basicInformationData = {} as Record<string, SupportedStorageTypes>;
        const deviceData: DeviceMetaInformation = {
            ethernetConnected: false,
            wifiConnected: false,
            threadConnected: false,
            rootEndpointServerList: [] as number[],
            isBatteryPowered: false,
            isIntermittentlyConnected: false,
            isThreadSleepyEndDevice: false,
            dataRevision: DEVICE_DATA_REVISION,
        };
        const networkData = new Map<
            EndpointNumber,
            {
                type?: TypeFromPartialBitSchema<typeof NetworkCommissioning.Complete.features>;
                enabled?: boolean;
                connected?: boolean;
            }
        >();
        const powerSourceData = new Map<
            EndpointNumber,
            { features?: TypeFromPartialBitSchema<typeof PowerSource.Complete.features>; status?: number }
        >();
        for (const {
            path: { endpointId, clusterId, attributeId, attributeName },
            value,
        } of readData) {
            switch (clusterId) {
                case BasicInformation.Cluster.id:
                    if (!GlobalAttributeKeys.includes(attributeName)) {
                        basicInformationData[attributeName] = value;
                    }
                    break;
                case Descriptor.Cluster.id:
                    if (attributeId === Descriptor.Cluster.attributes.serverList.id) {
                        deviceData.rootEndpointServerList = value;
                        if (value.includes(IcdManagement.Cluster.id)) {
                            deviceData.isIntermittentlyConnected = true;
                        }
                    }
                    break;
                case NetworkCommissioning.Cluster.id:
                    const networkEntry = networkData.get(endpointId) ?? {};
                    if (attributeId === NetworkCommissioning.Complete.attributes.featureMap.id) {
                        networkEntry.type = value;
                    } else if (attributeId === NetworkCommissioning.Complete.attributes.interfaceEnabled.id) {
                        networkEntry.enabled = value;
                    } else if (attributeId === NetworkCommissioning.Complete.attributes.networks.id) {
                        networkEntry.connected = (
                            value as TypeFromSchema<typeof NetworkCommissioning.TlvNetworkInfo>[]
                        ).some(network => network.connected);
                    }
                    networkData.set(endpointId, networkEntry);
                    break;
                case PowerSource.Cluster.id:
                    const powerSourceEntry = powerSourceData.get(endpointId) ?? {};
                    if (attributeId === PowerSource.Cluster.attributes.featureMap.id) {
                        powerSourceEntry.features = value;
                    } else if (attributeId === PowerSource.Cluster.attributes.status.id) {
                        powerSourceEntry.status = value;
                    }
                    powerSourceData.set(endpointId, powerSourceEntry);
                    break;
                case ThreadNetworkDiagnostics.Cluster.id:
                    if (attributeId === ThreadNetworkDiagnostics.Cluster.attributes.routingRole.id) {
                        if (value === ThreadNetworkDiagnostics.RoutingRole.SleepyEndDevice) {
                            deviceData.isThreadSleepyEndDevice = true;
                        }
                    }
                    break;
            }
        }

        if (networkData.size === 0) {
            // No Network cluster, so Custom Network, assume ethernet for now
            deviceData.ethernetConnected = true;
        } else {
            for (const { type, enabled, connected } of networkData.values()) {
                if (!type || !enabled || !connected) continue;
                if (type.ethernetNetworkInterface) {
                    deviceData.ethernetConnected = true;
                } else if (type.wiFiNetworkInterface) {
                    deviceData.wifiConnected = true;
                } else if (type.threadNetworkInterface) {
                    deviceData.threadConnected = true;
                }
            }
        }
        for (const { features, status } of powerSourceData.values()) {
            if (features?.battery && status === PowerSource.PowerSourceStatus.Active) {
                deviceData.isBatteryPowered = true;
            }
        }
        this.#basicInformation = basicInformationData;
        this.#deviceMeta = deviceData;
    }

    determineSubscriptionParameters(options: {
        subscribeMinIntervalFloorSeconds?: number;
        subscribeMaxIntervalCeilingSeconds?: number;
    }) {
        let {
            subscribeMinIntervalFloorSeconds: minIntervalFloorSeconds,
            subscribeMaxIntervalCeilingSeconds: maxIntervalCeilingSeconds,
        } = options;

        const { isBatteryPowered, isIntermittentlyConnected, threadConnected, isThreadSleepyEndDevice } =
            this.#deviceMeta ?? {};

        if (isIntermittentlyConnected) {
            if (minIntervalFloorSeconds !== undefined && minIntervalFloorSeconds !== DEFAULT_SUBSCRIPTION_FLOOR_ICD_S) {
                logger.info(
                    `Node ${this.nodeId}: Overwriting minIntervalFloorSeconds for intermittently connected device to 0`,
                );
                minIntervalFloorSeconds = DEFAULT_SUBSCRIPTION_FLOOR_ICD_S;
            }
        }

        const defaultCeiling = isBatteryPowered
            ? DEFAULT_SUBSCRIPTION_CEILING_BATTERY_POWERED_S
            : isThreadSleepyEndDevice
              ? DEFAULT_SUBSCRIPTION_CEILING_THREAD_SLEEPY_S
              : threadConnected
                ? DEFAULT_SUBSCRIPTION_CEILING_THREAD_S
                : DEFAULT_SUBSCRIPTION_CEILING_WIFI_S;
        if (maxIntervalCeilingSeconds === undefined) {
            maxIntervalCeilingSeconds = defaultCeiling;
        }
        if (maxIntervalCeilingSeconds < defaultCeiling) {
            logger.debug(
                `Node ${this.nodeId}: maxIntervalCeilingSeconds should idealy be set to ${defaultCeiling}s instead of ${maxIntervalCeilingSeconds}s because of device type`,
            );
        }

        return {
            minIntervalFloorSeconds: minIntervalFloorSeconds ?? DEFAULT_SUBSCRIPTION_FLOOR_DEFAULT_S,
            maxIntervalCeilingSeconds,
        };
    }

    toStorageData(): DeviceInformationData {
        return {
            basicInformation: this.#basicInformation,
            deviceMeta: this.#deviceMeta,
        };
    }
}
