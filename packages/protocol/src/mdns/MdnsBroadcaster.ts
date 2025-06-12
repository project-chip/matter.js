/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    AAAARecord,
    ARecord,
    BasicSet,
    Bytes,
    Crypto,
    Diagnostic,
    DnsRecord,
    ImplementationError,
    Logger,
    MatterAggregateError,
    Network,
    PtrRecord,
    SrvRecord,
    TxtRecord,
    isIPv4,
    isIPv6,
} from "#general";
import { FabricIndex, NodeId, TypeFromPartialBitSchema } from "#types";
import {
    CommissionerInstanceData,
    CommissioningModeInstanceData,
    OperationalInstanceData,
    PairingHintBitmap,
    PairingHintBitmapSchema,
} from "../common/InstanceBroadcaster.js";
import { Fabric } from "../fabric/Fabric.js";
import {
    SESSION_ACTIVE_INTERVAL_MS,
    SESSION_ACTIVE_THRESHOLD_MS,
    SESSION_IDLE_INTERVAL_MS,
} from "../session/Session.js";
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
import { MdnsInstanceBroadcaster } from "./MdnsInstanceBroadcaster.js";
import { AnnouncementType, MdnsServer } from "./MdnsServer.js";

const logger = Logger.get("MdnsBroadcaster");

//const TCP_SUPPORTED = 0;
//const ICD_SUPPORTED = 0; // TODO: Implement ICD later
const DEFAULT_PAIRING_HINT = {
    powerCycle: true,
    deviceManual: true,
};

/**
 * This class is handing MDNS Announcements for multiple instances/devices
 */
export class MdnsBroadcaster {
    readonly #activeCommissioningAnnouncements = new Set<number>();
    readonly #activeOperationalAnnouncements = new Map<number, { fabricIndex: FabricIndex; forInstance: string }[]>();
    readonly #crypto: Crypto;
    readonly #network: Network;
    readonly #mdnsServer: MdnsServer;
    readonly #enableIpv4?: boolean;
    readonly #instances = new BasicSet<MdnsInstanceBroadcaster>();

    static async create(
        crypto: Crypto,
        network: Network,
        options?: { enableIpv4?: boolean; multicastInterface?: string },
    ) {
        const { enableIpv4, multicastInterface } = options ?? {};
        return new MdnsBroadcaster(
            crypto,
            network,
            await MdnsServer.create(network, { enableIpv4, netInterface: multicastInterface }),
            enableIpv4,
        );
    }

    constructor(crypto: Crypto, network: Network, mdnsServer: MdnsServer, enableIpv4?: boolean) {
        this.#crypto = crypto;
        this.#network = network;
        this.#mdnsServer = mdnsServer;
        this.#enableIpv4 = enableIpv4;
    }

    createInstanceBroadcaster(port: number) {
        const instance = new MdnsInstanceBroadcaster(port, this, () => {
            this.#instances.delete(instance);
        });
        this.#instances.add(instance);

        return instance;
    }

    #validateCommissioningData(data: CommissioningModeInstanceData) {
        const { sessionIdleInterval, sessionActiveInterval, sessionActiveThreshold } = data;

        if (sessionIdleInterval !== undefined && sessionIdleInterval > 3_600_000) {
            throw new ImplementationError("Session Idle Interval must be less than 1 hour");
        }
        if (sessionActiveInterval !== undefined && sessionActiveInterval > 3_600_000) {
            throw new ImplementationError("Session Active Interval must be less than 1 hour");
        }
        if (sessionActiveThreshold !== undefined && sessionActiveThreshold > 65_535) {
            throw new ImplementationError("Session Active Threshold must be less than 65535 seconds");
        }
    }

    #validatePairingInstructions(
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

    #getIpRecords(hostname: string, ips: string[]) {
        const records = new Array<DnsRecord<any>>();
        ips.forEach(ip => {
            if (isIPv6(ip)) {
                records.push(AAAARecord(hostname, ip));
            } else if (isIPv4(ip)) {
                if (this.#enableIpv4) {
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
        commissioningModeData: CommissioningModeInstanceData,
    ) {
        this.#validateCommissioningData(commissioningModeData); // Throws error if invalid!

        const {
            name: deviceName,
            deviceType,
            vendorId,
            productId,
            discriminator,
            sessionIdleInterval = SESSION_IDLE_INTERVAL_MS,
            sessionActiveInterval = SESSION_ACTIVE_INTERVAL_MS,
            sessionActiveThreshold = SESSION_ACTIVE_THRESHOLD_MS,
            pairingHint = DEFAULT_PAIRING_HINT,
            pairingInstructions = "",
        } = commissioningModeData;
        this.#validatePairingInstructions(pairingHint, pairingInstructions); // Throws error if invalid!

        // When doing a commission announcement, we need to expire any previous commissioning announcements
        await this.expireCommissioningAnnouncement(announcedNetPort);

        logger.debug(
            `Announce commissioning mode ${mode} ${deviceName} ${deviceType} ${vendorId} ${productId} ${discriminator} ${announcedNetPort}`,
        );
        this.#activeCommissioningAnnouncements.add(announcedNetPort);

        const shortDiscriminator = (discriminator >> 8) & 0x0f;
        const instanceId = Bytes.toHex(this.#crypto.randomBytes(8)).toUpperCase();
        const vendorQname = getVendorQname(vendorId);
        const deviceTypeQname = getDeviceTypeQname(deviceType);
        const shortDiscriminatorQname = getShortDiscriminatorQname(shortDiscriminator);
        const longDiscriminatorQname = getLongDiscriminatorQname(discriminator);
        const commissionModeQname = getCommissioningModeQname();
        const deviceQname = getDeviceInstanceQname(instanceId);

        await this.#mdnsServer.setRecordsGenerator(
            announcedNetPort,
            AnnouncementType.Commissionable,
            async netInterface => {
                const ipMac = await this.#network.getIpMac(netInterface);

                if (ipMac === undefined) return [];
                const { mac, ipV4, ipV6 } = ipMac;
                const hostname = mac.replace(/:/g, "").toUpperCase() + "0000.local";

                logger.debug(
                    "Announcement Generator: Commission mode ",
                    Diagnostic.dict({
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
                        `SII=${sessionIdleInterval}` /* Session Idle Interval */,
                        `SAI=${sessionActiveInterval}` /* Session Active Interval */,
                        `SAT=${sessionActiveThreshold}` /* Session Active Threshold */,
                        //`T=${TCP_SUPPORTED}` /* TODO TCP not supported */,
                        `D=${discriminator}` /* Discriminator */,
                        `CM=${mode}` /* Commission Mode */,
                        `PH=${PairingHintBitmapSchema.encode(pairingHint)}` /* Pairing Hint */,
                        `PI=${pairingInstructions}` /* Pairing Instruction */,
                        //`ICD=${ICD_SUPPORTED}` /* ICD not supported */,
                    ]),
                ];
                records.push(...this.#getIpRecords(hostname, [...ipV6, ...ipV4]));
                return records;
            },
        );
    }

    /** Set the Broadcaster Data to announce a device for operative discovery (aka "already paired") */
    async setFabrics(
        announcedNetPort: number,
        fabrics: Fabric[],
        {
            sessionIdleInterval = SESSION_IDLE_INTERVAL_MS,
            sessionActiveInterval = SESSION_ACTIVE_INTERVAL_MS,
            sessionActiveThreshold = SESSION_ACTIVE_THRESHOLD_MS,
        }: OperationalInstanceData = {},
    ) {
        const currentOperationalFabrics = this.#activeOperationalAnnouncements.get(announcedNetPort);

        this.#activeOperationalAnnouncements.set(
            announcedNetPort,
            fabrics.map(f => ({
                fabricIndex: f.fabricIndex,
                forInstance: getDeviceMatterQname(
                    Bytes.toHex(f.operationalId).toUpperCase(),
                    NodeId.toHexString(f.nodeId),
                ),
            })),
        );

        const expires = new Array<Promise<void>>();

        if (currentOperationalFabrics !== undefined) {
            const fabricIndexesSet = new Set(fabrics.map(f => f.fabricIndex));

            // Expire Fabric announcements for instances that got removed
            for (const { fabricIndex, forInstance } of currentOperationalFabrics) {
                if (!fabricIndexesSet.has(fabricIndex)) {
                    expires.push(
                        this.#mdnsServer.expireAnnouncements({
                            announcedNetPort,
                            type: AnnouncementType.Operative,
                            forInstance,
                        }),
                    );
                }
            }
        }

        await this.#mdnsServer.setRecordsGenerator(announcedNetPort, AnnouncementType.Operative, async netInterface => {
            const ipMac = await this.#network.getIpMac(netInterface);
            if (ipMac === undefined) return [];
            const { mac, ipV4, ipV6 } = ipMac;
            const hostname = mac.replace(/:/g, "").toUpperCase() + "0000.local";

            const records: DnsRecord<any>[] = [PtrRecord(SERVICE_DISCOVERY_QNAME, MATTER_SERVICE_QNAME)];
            fabrics.forEach(fabric => {
                const { operationalId, nodeId } = fabric;
                const operationalIdString = Bytes.toHex(operationalId).toUpperCase();
                const fabricQname = getFabricQname(operationalIdString);
                const deviceMatterQname = getDeviceMatterQname(operationalIdString, NodeId.toHexString(nodeId));

                logger.debug(
                    "Announcement Generator: Fabric",
                    Diagnostic.dict({
                        id: `${operationalIdString}-${NodeId.toHexString(nodeId)}`,
                        qname: deviceMatterQname,
                        port: announcedNetPort,
                        interface: netInterface,
                    }),
                );
                const fabricRecords = [
                    PtrRecord(SERVICE_DISCOVERY_QNAME, fabricQname, deviceMatterQname),
                    PtrRecord(MATTER_SERVICE_QNAME, deviceMatterQname, deviceMatterQname),
                    PtrRecord(fabricQname, deviceMatterQname, deviceMatterQname),
                    SrvRecord(
                        deviceMatterQname,
                        { priority: 0, weight: 0, port: announcedNetPort, target: hostname },
                        deviceMatterQname,
                    ),
                    TxtRecord(
                        deviceMatterQname,
                        [
                            `SII=${sessionIdleInterval}` /* Session Idle Interval */,
                            `SAI=${sessionActiveInterval}` /* Session Active Interval */,
                            `SAT=${sessionActiveThreshold}` /* Session Active Threshold */,
                            //`T=${TCP_SUPPORTED}` /* TODO TCP not supported */,
                            //`ICD=${ICD_SUPPORTED}` /* ICD not supported */,
                        ],
                        deviceMatterQname,
                    ),
                ];
                records.push(...fabricRecords);
            });
            records.push(...this.#getIpRecords(hostname, [...ipV6, ...ipV4]));
            return records;
        });

        await MatterAggregateError.allSettled(expires);
    }

    /** Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery) */
    async setCommissionerInfo(
        announcedNetPort: number,
        {
            deviceName,
            deviceType,
            vendorId,
            productId,
            sessionIdleInterval = SESSION_IDLE_INTERVAL_MS,
            sessionActiveInterval = SESSION_ACTIVE_INTERVAL_MS,
            sessionActiveThreshold = SESSION_ACTIVE_THRESHOLD_MS,
        }: CommissionerInstanceData,
    ) {
        logger.debug(
            "Announcement: Commissioner",
            Diagnostic.dict({
                port: announcedNetPort,
                deviceType,
            }),
        );

        const instanceId = Bytes.toHex(this.#crypto.randomBytes(8)).toUpperCase();
        const deviceTypeQname = `_T${deviceType}._sub.${MATTER_COMMISSIONER_SERVICE_QNAME}`;
        const vendorQname = `_V${vendorId}._sub.${MATTER_COMMISSIONER_SERVICE_QNAME}`;
        const deviceQname = `${instanceId}.${MATTER_COMMISSIONER_SERVICE_QNAME}`;

        this.#activeCommissioningAnnouncements.add(announcedNetPort);

        await this.#mdnsServer.setRecordsGenerator(
            announcedNetPort,
            AnnouncementType.Commissionable,
            async netInterface => {
                const ipMac = await this.#network.getIpMac(netInterface);
                if (ipMac === undefined) return [];
                const { mac, ipV4, ipV6 } = ipMac;
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
                        `SII=${sessionIdleInterval}` /* Session Idle Interval */,
                        `SAI=${sessionActiveInterval}` /* Session Active Interval */,
                        `SAT=${sessionActiveThreshold}` /* Session Active Threshold */,
                        //`T=${TCP_SUPPORTED}` /* TODO TCP not supported */,
                        //`ICD=${ICD_SUPPORTED}` /* ICD not supported */,
                    ]),
                ];
                if (deviceType !== undefined) {
                    records.push(PtrRecord(SERVICE_DISCOVERY_QNAME, deviceTypeQname));
                    records.push(PtrRecord(deviceTypeQname, deviceQname));
                }

                records.push(...this.#getIpRecords(hostname, [...ipV6, ...ipV4]));
                return records;
            },
        );
    }

    async announce(announcementPort: number) {
        this.#mdnsServer.announce(announcementPort).catch(error => logger.error(error));
    }

    async expireFabricAnnouncement(announcedNetPort: number) {
        if (this.#activeOperationalAnnouncements.has(announcedNetPort)) {
            await this.#mdnsServer.expireAnnouncements({ announcedNetPort, type: AnnouncementType.Operative });
            this.#activeOperationalAnnouncements.delete(announcedNetPort);
        }
    }

    async expireCommissioningAnnouncement(announcedNetPort: number) {
        if (this.#activeCommissioningAnnouncements.has(announcedNetPort)) {
            await this.#mdnsServer.expireAnnouncements({ announcedNetPort, type: AnnouncementType.Commissionable });
            this.#activeCommissioningAnnouncements.delete(announcedNetPort);
        }
    }

    async expireAllAnnouncements(announcedNetPort: number) {
        if (
            !this.#activeCommissioningAnnouncements.has(announcedNetPort) &&
            !this.#activeOperationalAnnouncements.has(announcedNetPort)
        )
            return;
        await this.#mdnsServer.expireAnnouncements({ announcedNetPort });
        this.#activeCommissioningAnnouncements.delete(announcedNetPort);
        this.#activeOperationalAnnouncements.delete(announcedNetPort);
    }

    async close() {
        while (this.#instances.size) {
            await this.#instances.deleted;
        }

        await this.#mdnsServer.expireAnnouncements();
        this.#activeCommissioningAnnouncements.clear();
        this.#activeOperationalAnnouncements.clear();
        await this.#mdnsServer.close();
    }
}
