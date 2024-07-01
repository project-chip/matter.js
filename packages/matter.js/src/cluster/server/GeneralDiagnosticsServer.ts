/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotImplementedError } from "../../common/MatterError.js";
import { WrapCommandHandler } from "../../device/Device.js";
import { Network, NetworkInterfaceDetailed } from "../../net/Network.js";
import { Time } from "../../time/Time.js";
import { ByteArray } from "../../util/ByteArray.js";
import { iPv4ToByteArray, iPv6ToByteArray } from "../../util/Ip.js";
import { NamedHandler } from "../../util/NamedHandler.js";
import { GeneralDiagnostics, GeneralDiagnosticsCluster } from "../definitions/GeneralDiagnosticsCluster.js";
import { AttributeServer } from "./AttributeServer.js";
import { ClusterServer } from "./ClusterServer.js";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";

export const GeneralDiagnosticsClusterHandler: () => Promise<
    ClusterServerHandlers<typeof GeneralDiagnosticsCluster>
> = async () => {
    let bootUpTime = 0;

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

    const network = Network.get();
    const interfaces = await network.getNetInterfaces();
    const interfaceDetails = new Array<NetworkInterfaceDetailed>();
    for (const { name, type } of interfaces) {
        const details = await network.getIpMac(name);
        if (details !== undefined) {
            interfaceDetails.push({ name, type, ...details });
        }
    }

    return {
        initializeClusterServer: ({ attributes: { totalOperationalHours, networkInterfaces } }) => {
            bootUpTime = Time.nowMs();
            if (totalOperationalHours?.getLocal() !== undefined) {
                totalOperationalHoursAttribute = totalOperationalHours;
                totalOperationalHoursUpdateTimer.start();
            }

            // Filter all unassigned MACs out, sort operational on top, limit to 8 entries and map to the required format.
            networkInterfaces.setLocal(
                interfaceDetails
                    .filter(({ mac }) => mac !== "00:00:00:00:00:00")
                    .slice(0, 8)
                    .map(({ name, mac, ipV4, ipV6, type }) => ({
                        name,
                        isOperational: true,
                        offPremiseServicesReachableIPv4: null, // null means unknown or not supported
                        offPremiseServicesReachableIPv6: null, // null means unknown or not supported
                        hardwareAddress: ByteArray.fromHex(mac.replace(/[^\da-fA-F]/g, "")),
                        iPv4Addresses: ipV4.slice(0, 4).map(ip => iPv4ToByteArray(ip)),
                        iPv6Addresses: ipV6.slice(0, 8).map(ip => iPv6ToByteArray(ip)),
                        type: type ?? GeneralDiagnostics.InterfaceType.Ethernet,
                    })),
            );
        },

        destroyClusterServer: () => {
            totalOperationalHoursUpdateTimer.stop();
        },

        upTimeAttributeGetter: () => {
            return Math.round((Time.nowMs() - bootUpTime) / 1000);
        },

        testEventTrigger: () => {},
        timeSnapshot: () => {
            throw new NotImplementedError();
        },
    };
};

export const createDefaultGeneralDiagnosticsClusterServer = async (commandHandler: NamedHandler<any>) =>
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
        WrapCommandHandler(await GeneralDiagnosticsClusterHandler(), commandHandler),
        {
            bootReason: true,
        },
    );
