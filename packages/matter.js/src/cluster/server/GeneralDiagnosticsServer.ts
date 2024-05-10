/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { WrapCommandHandler } from "../../device/Device.js";
import { Network } from "../../net/Network.js";
import { Time } from "../../time/Time.js";
import { ByteArray } from "../../util/ByteArray.js";
import { iPv4ToByteArray, iPv6ToByteArray, isIPv4, isIPv6 } from "../../util/Ip.js";
import { NamedHandler } from "../../util/NamedHandler.js";
import { GeneralDiagnostics, GeneralDiagnosticsCluster } from "../definitions/GeneralDiagnosticsCluster.js";
import { AttributeServer } from "./AttributeServer.js";
import { ClusterServer } from "./ClusterServer.js";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";

type NetworkInterfaceDetails = {
    [key: string]: {
        mac: string;
        ips: string[];
    };
};

export const GeneralDiagnosticsClusterHandler: () => ClusterServerHandlers<typeof GeneralDiagnosticsCluster> = () => {
    const bootUpTime = Time.nowMs();

    // We update the totalOperationalHours attribute every hour
    let totalOperationalHoursAttribute: AttributeServer<number> | undefined = undefined;
    const totalOperationalHoursUpdateTimer = Time.getPeriodicTimer(
        "GeneralDiagnosticsCluster.totalOperationalHoursUpdate",
        60 * 60_1000,
        () => {
            if (totalOperationalHoursAttribute === undefined) return;
            totalOperationalHoursAttribute.setLocal(totalOperationalHoursAttribute.getLocal() + 1);
        },
    );

    return {
        initializeClusterServer: ({ attributes: { totalOperationalHours, networkInterfaces } }) => {
            if (totalOperationalHours?.getLocal() !== undefined) {
                totalOperationalHoursAttribute = totalOperationalHours;
                totalOperationalHoursUpdateTimer.start();
            }

            const network = Network.get();
            const interfaces = network.getNetInterfaces();
            const systemNetworkInterfaces: NetworkInterfaceDetails = {};
            interfaces.forEach(name => {
                const details = network.getIpMac(name);
                if (details !== undefined) {
                    systemNetworkInterfaces[name] = details;
                }
            });

            let networkType = GeneralDiagnostics.InterfaceType.Ethernet;

            // Filter all unassigned MACs out, sort operational on top, limit to 8 entries and map to the required format.
            networkInterfaces.setLocal(
                Object.entries(systemNetworkInterfaces)
                    .filter(([_, { mac }]) => mac !== "00:00:00:00:00:00")
                    .slice(0, 8)
                    .map(([name, { mac, ips }]) => ({
                        name,
                        isOperational: true,
                        offPremiseServicesReachableIPv4: null, // null means unknown or not supported
                        offPremiseServicesReachableIPv6: null, // null means unknown or not supported
                        hardwareAddress: ByteArray.fromHex(mac.replace(/[^\da-fA-F]/g, "")),
                        iPv4Addresses: ips
                            .filter(ip => isIPv4(ip))
                            .slice(0, 4)
                            .map(ip => iPv4ToByteArray(ip)),
                        iPv6Addresses: ips
                            .filter(ip => isIPv6(ip))
                            .slice(0, 8)
                            .map(ip => iPv6ToByteArray(ip)),
                        type: networkType,
                    })),
            );
        },

        destroyClusterServer: () => {
            totalOperationalHoursUpdateTimer.stop();
        },

        upTimeAttributeGetter: () => Math.round((Time.nowMs() - bootUpTime) / 1000),

        testEventTrigger: () => {},
    };
};

export const createDefaultGeneralDiagnosticsClusterServer = (commandHandler: NamedHandler<any>) =>
    ClusterServer(
        GeneralDiagnosticsCluster,
        {
            networkInterfaces: [],
            rebootCount: 0,
            upTime: 0,
            totalOperationalHours: 0,
            bootReason: GeneralDiagnostics.BootReason.Unspecified,
            activeHardwareFaults: [],
            activeRadioFaults: [],
            activeNetworkFaults: [],
            testEventTriggersEnabled: false,
        },
        WrapCommandHandler(GeneralDiagnosticsClusterHandler(), commandHandler),
        {
            bootReason: true,
        },
    );
