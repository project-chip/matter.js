/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AAAARecord, ARecord, DnsRecord, PtrRecord, SrvRecord, TxtRecord } from "../codec/DnsCodec.js";
import {
    CommissionerInstanceData,
    CommissioningModeInstanceData,
    OperationalInstanceData,
    PairingHintBitmap,
    PairingHintBitmapSchema,
} from "../common/InstanceBroadcaster.js";
import { ImplementationError } from "../common/MatterError.js";
import { Crypto } from "../crypto/Crypto.js";
import { FabricIndex } from "../datatype/FabricIndex.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { Logger } from "../log/Logger.js";
import { Network } from "../net/Network.js";
import { TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";
import { isIPv4, isIPv6 } from "../util/Ip.js";
import {
    MATTER_COMMISSIONER_SERVICE_QNAME,
    MATTER_COMMISSION_SERVICE_QNAME,
    MATTER_SERVICE_QNAME,
    SERVICE_DISCOVERY_QNAME,
    getCommissioningModeQname,
    getDeviceInstanceQname,
    getDeviceMatterQname,
    getDeviceTypeQname,
    getFabricQname,
    getLongDiscriminatorQname,
    getShortDiscriminatorQname,
    getVendorQname,
} from "./MdnsConsts.js";
import { AnnouncementType, MdnsServer } from "./MdnsServer.js";

const logger = Logger.get("MdnsBroadcaster");

const DEFAULT_SLEEP_IDLE_INTERVAL = 5000;
const DEFAULT_SLEEP_ACTIVE_INTERVAL = 300;
const TCP_SUPPORTED = 0;
const DEFAULT_PAIRING_HINT = {
    powerCycle: true,
    deviceManual: true,
};

/**
 * This class is handing MDNS Announcements for multiple instances/devices
 */
export class MdnsBroadcaster {
    static async create(options?: { enableIpv4?: boolean; multicastInterface?: string }) {
        const { enableIpv4, multicastInterface } = options ?? {};
        return new MdnsBroadcaster(
            await MdnsServer.create({ enableIpv4, netInterface: multicastInterface }),
            enableIpv4,
        );
    }

    private readonly network = Network.get();
    private readonly activeCommissioningAnnouncements = new Set<number>();
    private readonly activeOperationalAnnouncements = new Map<number, FabricIndex[]>();

    constructor(
        private readonly mdnsServer: MdnsServer,
        private readonly enableIpv4?: boolean,
    ) {}

    validatePairingInstructions(
        pairingHint: TypeFromPartialBitSchema<typeof PairingHintBitmap>,
        pairingInstructions: string,
    ) {
        const needsInstructions = [
            "customInstruction",
            "pressRestButtonForNumberOfSeconds",
            "pressResetButtonUntilLightBlinks",
            "pressResetButtonForNumberOfSecondsWithApplicationOfPower",
            "pressResetButtonUntilLightBlinksWithApplicationOfPower",
            "pressResetButtonNumberOfTimes",
            "pressSetupButtonForNumberOfSeconds",
            "pressSetupButtonUntilLightBlinks",
            "pressSetupButtonForNumberOfSecondsWithApplicationOfPower",
            "pressSetupButtonUntilLightBlinksWithApplicationOfPower",
            "pressSetupButtonNumberOfTimes",
        ].find(hint => (pairingHint as any)[hint] === true);
        if (needsInstructions && pairingInstructions.length === 0) {
            throw new ImplementationError(
                `Pairing instructions required for Pairing Hint of type "${needsInstructions}"`,
            );
        }
    }

    private getIpRecords(hostname: string, ips: string[]) {
        const records = new Array<DnsRecord<any>>();
        ips.forEach(ip => {
            if (isIPv6(ip)) {
                records.push(AAAARecord(hostname, ip));
            } else if (isIPv4(ip)) {
                if (this.enableIpv4) {
                    records.push(ARecord(hostname, ip));
                }
            } else {
                logger.warn(`Unknown IP address type: ${ip}`);
            }
        });
        return records;
    }

    /** Set the Broadcaster data to announce a device ready for commissioning in a special mode */
    async setCommissionMode(
        announcedNetPort: number,
        mode: number,
        {
            name: deviceName,
            deviceType,
            vendorId,
            productId,
            discriminator,
            sleepIdleInterval = DEFAULT_SLEEP_IDLE_INTERVAL,
            sleepActiveInterval = DEFAULT_SLEEP_ACTIVE_INTERVAL,
            pairingHint = DEFAULT_PAIRING_HINT,
            pairingInstructions = "",
        }: CommissioningModeInstanceData,
    ) {
        // When doing a commission announcement, we need to expire any previous commissioning announcements
        await this.expireCommissioningAnnouncement(announcedNetPort);

        logger.debug(
            `Announce commissioning mode ${mode} ${deviceName} ${deviceType} ${vendorId} ${productId} ${discriminator} ${announcedNetPort}`,
        );
        this.activeCommissioningAnnouncements.add(announcedNetPort);

        const shortDiscriminator = (discriminator >> 8) & 0x0f;
        const instanceId = Crypto.getRandomData(8).toHex().toUpperCase();
        const vendorQname = getVendorQname(vendorId);
        const deviceTypeQname = getDeviceTypeQname(deviceType);
        const shortDiscriminatorQname = getShortDiscriminatorQname(shortDiscriminator);
        const longDiscriminatorQname = getLongDiscriminatorQname(discriminator);
        const commissionModeQname = getCommissioningModeQname();
        const deviceQname = getDeviceInstanceQname(instanceId);

        this.validatePairingInstructions(pairingHint, pairingInstructions); // Throws error if invalid!

        await this.mdnsServer.setRecordsGenerator(announcedNetPort, AnnouncementType.Commissionable, netInterface => {
            const ipMac = this.network.getIpMac(netInterface);
            if (ipMac === undefined) return [];
            const { mac, ips } = ipMac;
            const hostname = mac.replace(/:/g, "").toUpperCase() + "0000.local";

            logger.debug(
                "Announcement Generator: Commission mode ",
                Logger.dict({
                    mode,
                    qname: deviceQname,
                    port: announcedNetPort,
                    interface: netInterface,
                }),
            );

            const records = [
                PtrRecord(SERVICE_DISCOVERY_QNAME, MATTER_COMMISSION_SERVICE_QNAME),
                PtrRecord(SERVICE_DISCOVERY_QNAME, vendorQname),
                PtrRecord(SERVICE_DISCOVERY_QNAME, deviceTypeQname),
                PtrRecord(SERVICE_DISCOVERY_QNAME, shortDiscriminatorQname),
                PtrRecord(SERVICE_DISCOVERY_QNAME, longDiscriminatorQname),
                PtrRecord(SERVICE_DISCOVERY_QNAME, commissionModeQname),
                PtrRecord(MATTER_COMMISSION_SERVICE_QNAME, deviceQname),
                PtrRecord(vendorQname, deviceQname),
                PtrRecord(deviceTypeQname, deviceQname),
                PtrRecord(shortDiscriminatorQname, deviceQname),
                PtrRecord(longDiscriminatorQname, deviceQname),
                PtrRecord(commissionModeQname, deviceQname),
                SrvRecord(deviceQname, { priority: 0, weight: 0, port: announcedNetPort, target: hostname }),
                TxtRecord(deviceQname, [
                    `VP=${vendorId}+${productId}` /* Vendor / Product */,
                    `DT=${deviceType}` /* Device Type */,
                    `DN=${deviceName}` /* Device Name */,
                    `SII=${sleepIdleInterval}` /* Sleepy Idle Interval */,
                    `SAI=${sleepActiveInterval}` /* Sleepy Active Interval */,
                    `T=${TCP_SUPPORTED}` /* TCP not supported */,
                    `D=${discriminator}` /* Discriminator */,
                    `CM=${mode}` /* Commission Mode */,
                    `PH=${PairingHintBitmapSchema.encode(pairingHint)}` /* Pairing Hint */,
                    `PI=${pairingInstructions}` /* Pairing Instruction */,
                ]),
            ];
            records.push(...this.getIpRecords(hostname, ips));
            return records;
        });
    }

    /** Set the Broadcaster Data to announce a device for operative discovery (aka "already paired") */
    async setFabrics(
        announcedNetPort: number,
        fabrics: Fabric[],
        {
            sleepIdleInterval = DEFAULT_SLEEP_IDLE_INTERVAL,
            sleepActiveInterval = DEFAULT_SLEEP_ACTIVE_INTERVAL,
        }: OperationalInstanceData = {},
    ) {
        const currentOperationalFabrics = this.activeOperationalAnnouncements.get(announcedNetPort);
        if (currentOperationalFabrics !== undefined) {
            const fabricIndexesSet = new Set(fabrics.map(f => f.fabricIndex));

            // Expire Fabric announcements if any entry got removed
            if (!currentOperationalFabrics.every(fabricIndex => fabricIndexesSet.has(fabricIndex))) {
                await this.expireFabricAnnouncement(announcedNetPort);
            }
        }

        this.activeOperationalAnnouncements.set(
            announcedNetPort,
            fabrics.map(f => f.fabricIndex),
        );

        await this.mdnsServer.setRecordsGenerator(announcedNetPort, AnnouncementType.Operative, netInterface => {
            const ipMac = this.network.getIpMac(netInterface);
            if (ipMac === undefined) return [];
            const { mac, ips } = ipMac;
            const hostname = mac.replace(/:/g, "").toUpperCase() + "0000.local";

            const records: DnsRecord<any>[] = [PtrRecord(SERVICE_DISCOVERY_QNAME, MATTER_SERVICE_QNAME)];
            fabrics.forEach(fabric => {
                const { operationalId, nodeId } = fabric;
                const operationalIdString = operationalId.toHex().toUpperCase();
                const fabricQname = getFabricQname(operationalIdString);
                const deviceMatterQname = getDeviceMatterQname(operationalIdString, NodeId.toHexString(nodeId));

                logger.debug(
                    "Announcement Generator: Fabric",
                    Logger.dict({
                        id: `${operationalId.toHex()}/${nodeId}`,
                        qname: deviceMatterQname,
                        port: announcedNetPort,
                        interface: netInterface,
                    }),
                );
                const fabricRecords = [
                    PtrRecord(SERVICE_DISCOVERY_QNAME, fabricQname),
                    PtrRecord(MATTER_SERVICE_QNAME, deviceMatterQname),
                    PtrRecord(fabricQname, deviceMatterQname),
                    SrvRecord(deviceMatterQname, { priority: 0, weight: 0, port: announcedNetPort, target: hostname }),
                    TxtRecord(deviceMatterQname, [
                        `SII=${sleepIdleInterval}` /* Sleepy Idle Interval */,
                        `SAI=${sleepActiveInterval}` /* Sleepy Active Interval */,
                        `T=${TCP_SUPPORTED}` /* TCP not supported */,
                    ]),
                ];
                records.push(...fabricRecords);
            });
            records.push(...this.getIpRecords(hostname, ips));
            return records;
        });
    }

    /** Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery) */
    async setCommissionerInfo(
        announcedNetPort: number,
        {
            deviceName,
            deviceType,
            vendorId,
            productId,
            sleepIdleInterval = DEFAULT_SLEEP_IDLE_INTERVAL,
            sleepActiveInterval = DEFAULT_SLEEP_ACTIVE_INTERVAL,
        }: CommissionerInstanceData,
    ) {
        logger.debug(
            "Announcement: Commissioner",
            Logger.dict({
                port: announcedNetPort,
                deviceType,
            }),
        );

        const instanceId = Crypto.getRandomData(8).toHex().toUpperCase();
        const deviceTypeQname = `_T${deviceType}._sub.${MATTER_COMMISSIONER_SERVICE_QNAME}`;
        const vendorQname = `_V${vendorId}._sub.${MATTER_COMMISSIONER_SERVICE_QNAME}`;
        const deviceQname = `${instanceId}.${MATTER_COMMISSIONER_SERVICE_QNAME}`;

        this.activeCommissioningAnnouncements.add(announcedNetPort);

        await this.mdnsServer.setRecordsGenerator(announcedNetPort, AnnouncementType.Commissionable, netInterface => {
            const ipMac = this.network.getIpMac(netInterface);
            if (ipMac === undefined) return [];
            const { mac, ips } = ipMac;
            const hostname = mac.replace(/:/g, "").toUpperCase() + "0000.local";
            const records = [
                PtrRecord(SERVICE_DISCOVERY_QNAME, MATTER_COMMISSIONER_SERVICE_QNAME),
                PtrRecord(MATTER_COMMISSIONER_SERVICE_QNAME, vendorQname),
                PtrRecord(vendorQname, deviceQname),
                SrvRecord(deviceQname, { priority: 0, weight: 0, port: announcedNetPort, target: hostname }),
                TxtRecord(deviceQname, [
                    `VP=${vendorId}+${productId}` /* Vendor / Product */,
                    `DT=${deviceType}` /* Device Type */,
                    `DN=${deviceName}` /* Device Name */,
                    `SII=${sleepIdleInterval}` /* Sleepy Idle Interval */,
                    `SAI=${sleepActiveInterval}` /* Sleepy Active Interval */,
                    `T=${TCP_SUPPORTED}` /* TCP not supported */,
                ]),
            ];
            if (deviceType !== undefined) {
                records.push(PtrRecord(SERVICE_DISCOVERY_QNAME, deviceTypeQname));
                records.push(PtrRecord(deviceTypeQname, deviceQname));
            }

            records.push(...this.getIpRecords(hostname, ips));
            return records;
        });
    }

    async announce(announcementPort: number) {
        this.mdnsServer.announce(announcementPort).catch(error => logger.error(error));
    }

    async expireFabricAnnouncement(announcementPort: number) {
        if (this.activeOperationalAnnouncements.has(announcementPort)) {
            await this.mdnsServer.expireAnnouncements(announcementPort, AnnouncementType.Operative);
            this.activeOperationalAnnouncements.delete(announcementPort);
        }
    }

    async expireCommissioningAnnouncement(announcementPort: number) {
        if (this.activeCommissioningAnnouncements.has(announcementPort)) {
            await this.mdnsServer.expireAnnouncements(announcementPort, AnnouncementType.Commissionable);
            this.activeCommissioningAnnouncements.delete(announcementPort);
        }
    }

    async expireAllAnnouncements(announcementPort: number) {
        if (
            !this.activeCommissioningAnnouncements.has(announcementPort) &&
            !this.activeOperationalAnnouncements.has(announcementPort)
        )
            return;
        await this.mdnsServer.expireAnnouncements(announcementPort);
        this.activeCommissioningAnnouncements.delete(announcementPort);
        this.activeOperationalAnnouncements.delete(announcementPort);
    }

    async close() {
        await this.mdnsServer.expireAnnouncements();
        this.activeCommissioningAnnouncements.clear();
        this.activeOperationalAnnouncements.clear();
        await this.mdnsServer.close();
    }
}
