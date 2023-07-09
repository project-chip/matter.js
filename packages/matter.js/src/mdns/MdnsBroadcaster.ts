/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AAAARecord, ARecord, PtrRecord, SrvRecord, TxtRecord, Record } from "../codec/DnsCodec.js";
import { Crypto } from "../crypto/Crypto.js";
import { Broadcaster } from "../common/Broadcaster.js";
import {
    getDeviceMatterQname, getFabricQname, MATTER_COMMISSION_SERVICE_QNAME, MATTER_COMMISSIONER_SERVICE_QNAME,
    MATTER_SERVICE_QNAME, SERVICE_DISCOVERY_QNAME
} from "./MdnsConsts.js";
import { MdnsServer } from "./MdnsServer.js";
import { VendorId } from "../datatype/VendorId.js";
import { Network } from "../net/Network.js";
import { isIPv4 } from "../util/Ip.js";
import { Logger } from "../log/Logger.js";
import { Fabric } from "../fabric/Fabric.js";

const logger = Logger.get("MdnsBroadcaster");

export class MdnsBroadcaster implements Broadcaster {
    static async create(multicastInterface?: string) {
        return new MdnsBroadcaster(await MdnsServer.create(multicastInterface));
    }

    private readonly network = Network.get();

    constructor(
        private readonly mdnsServer: MdnsServer,
    ) { }

    /**
     * Set the Broadcaster data to announce a device ready for commissioning in a special mode
     *
     * @param mode
     * @param deviceName
     * @param deviceType
     * @param vendorId
     * @param productId
     * @param discriminator
     * @param announcedNetPort
     */
    setCommissionMode(mode: number, deviceName: string, deviceType: number, vendorId: VendorId, productId: number, discriminator: number, announcedNetPort: number) {
        logger.debug(`announce commissioning mode ${mode} ${deviceName} ${deviceType} ${vendorId.id} ${productId} ${discriminator}`);

        const shortDiscriminator = (discriminator >> 8) & 0x0F;
        const instanceId = Crypto.getRandomData(8).toHex().toUpperCase();
        const vendorQname = `_V${vendorId.id}._sub.${MATTER_COMMISSION_SERVICE_QNAME}`;
        const deviceTypeQname = `_T${deviceType}._sub.${MATTER_COMMISSION_SERVICE_QNAME}`;
        const shortDiscriminatorQname = `_S${shortDiscriminator}._sub.${MATTER_COMMISSION_SERVICE_QNAME}`;
        const longDiscriminatorQname = `_L${discriminator}._sub.${MATTER_COMMISSION_SERVICE_QNAME}`;
        const commissionModeQname = `_CM._sub.${MATTER_COMMISSION_SERVICE_QNAME}`;
        const deviceQname = `${instanceId}.${MATTER_COMMISSION_SERVICE_QNAME}`;

        this.mdnsServer.setRecordsGenerator(netInterface => {
            const ipMac = this.network.getIpMac(netInterface);
            if (ipMac === undefined) return [];
            const { mac, ips } = ipMac;
            const hostname = mac.replace(/:/g, "").toUpperCase() + "0000.local";
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
                    `VP=${vendorId.id}+${productId}`,  /* Vendor / Product */
                    `DT=${deviceType}`,             /* Device Type */
                    `DN=${deviceName}`,             /* Device Name */
                    "SII=5000",                     /* Sleepy Idle Interval */
                    "SAI=300",                      /* Sleepy Active Interval */
                    "T=0",                          /* TCP not supported */
                    `D=${discriminator}`,           /* Discriminator */
                    `CM=${mode}`,                   /* Commission Mode */
                    "PH=33",                        /* Pairing Hint */
                    "PI=",                          /* Pairing Instruction */
                ]),
            ];
            ips.forEach(ip => {
                if (isIPv4(ip)) {
                    records.push(ARecord(hostname, ip));
                } else {
                    records.push(AAAARecord(hostname, ip));
                }
            });
            return records;
        });
    }

    /**
     * Set the Broadcaster Data to announce an device for operative discovery (aka "already paired")
     *
     * @param fabrics
     * @param announcedNetPort
     */
    setFabrics(fabrics: Fabric[], announcedNetPort: number) {
        this.mdnsServer.setRecordsGenerator(netInterface => {
            const records: Record<any>[] = [
                PtrRecord(SERVICE_DISCOVERY_QNAME, MATTER_SERVICE_QNAME),
            ];
            fabrics.forEach(fabric => {
                const { operationalId, nodeId } = fabric;
                const operationalIdString = operationalId.toHex().toUpperCase();
                const fabricQname = getFabricQname(operationalIdString);
                const deviceMatterQname = getDeviceMatterQname(operationalIdString, nodeId.toString());

                logger.debug("Set fabric for announcement", Logger.dict({
                    id: `${operationalId.toHex()}/${nodeId.id}`,
                    qname: deviceMatterQname,
                    interface: netInterface
                }));
                const ipMac = this.network.getIpMac(netInterface);
                if (ipMac === undefined) return [];
                const { mac, ips } = ipMac;
                const hostname = mac.replace(/:/g, "").toUpperCase() + "0000.local";
                const fabricRecords = [
                    PtrRecord(SERVICE_DISCOVERY_QNAME, fabricQname),
                    PtrRecord(MATTER_SERVICE_QNAME, deviceMatterQname),
                    PtrRecord(fabricQname, deviceMatterQname),
                    // TODO: the Matter port should not be hardcoded here
                    SrvRecord(deviceMatterQname, { priority: 0, weight: 0, port: announcedNetPort, target: hostname }),
                    TxtRecord(deviceMatterQname, ["SII=5000", "SAI=300", "T=1"]),
                ];
                ips.forEach(ip => {
                    if (isIPv4(ip)) {
                        fabricRecords.push(ARecord(hostname, ip));
                    } else {
                        fabricRecords.push(AAAARecord(hostname, ip));
                    }
                });
                records.push(...fabricRecords);
            });
            return records;
        });
    }

    /**
     * Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery)
     *
     * @param deviceName
     * @param vendorId
     * @param productId
     * @param announcedNetPort
     * @param deviceType
     */
    setCommissionerInfo(deviceName: string, vendorId: VendorId, productId: number, announcedNetPort: number, deviceType?: number) {
        logger.debug(`announce commissioner ${announcedNetPort} ${deviceType}`);

        const instanceId = Crypto.getRandomData(8).toHex().toUpperCase();
        const deviceTypeQname = `_T${deviceType}._sub.${MATTER_COMMISSIONER_SERVICE_QNAME}`;
        const vendorQname = `_V${vendorId.id}._sub.${MATTER_COMMISSION_SERVICE_QNAME}`;
        const deviceQname = `${instanceId}.${MATTER_COMMISSION_SERVICE_QNAME}`;

        this.mdnsServer.setRecordsGenerator(netInterface => {
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
                    `VP=${vendorId.id}+${productId}`,  /* Vendor / Product */
                    `DT=${deviceType}`,             /* Device Type */
                    `DN=${deviceName}`,             /* Device Name */
                    "SII=5000",                     /* Sleepy Idle Interval */
                    "SAI=300",                      /* Sleepy Active Interval */
                    "T=0",                          /* TCP not supported */
                ]),
            ];
            if (deviceType !== undefined) {
                records.push(PtrRecord(SERVICE_DISCOVERY_QNAME, deviceTypeQname));
                records.push(PtrRecord(deviceTypeQname, deviceQname));
            }

            ips.forEach(ip => {
                if (isIPv4(ip)) {
                    records.push(ARecord(hostname, ip));
                } else {
                    records.push(AAAARecord(hostname, ip));
                }
            });
            return records;
        });
    }

    announce() {
        this.mdnsServer.announce()
            .catch(error => logger.error(error));
    }

    close() {
        this.mdnsServer.close();
    }
}
