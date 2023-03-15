/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AAAARecord, ARecord, PtrRecord, Record, SrvRecord, TxtRecord } from "../../codec/DnsCodec";
import { Crypto } from "../../crypto/Crypto";
import { Broadcaster } from "../common/Broadcaster";
import { getDeviceMatterQname, getFabricQname, MATTER_COMMISSION_SERVICE_QNAME, MATTER_SERVICE_QNAME, SERVICE_DISCOVERY_QNAME } from "./MdnsConsts";
import { MdnsServer } from "../../net/MdnsServer";
import { VendorId } from "../common/VendorId";
import { NodeId } from "../common/NodeId";
import { ByteArray } from "@project-chip/matter.js";
import { Network } from "../../net/Network";
import { isIPv4 } from "../../util/Ip";
import { Logger } from "../../log/Logger";

const logger = Logger.get("MdnsBroadcaster");

export class MdnsBroadcaster implements Broadcaster {
    static async create(multicastInterface?: string) {
        return new MdnsBroadcaster(await MdnsServer.create(multicastInterface));
    }

    private readonly network = Network.get();

    constructor(
        private readonly mdnsServer: MdnsServer,
    ) {}

    setCommissionMode(mode: number,deviceName: string, deviceType: number, vendorId: VendorId, productId: number, discriminator: number) {
        logger.debug(`announce commissioning mode ${mode} ${deviceName} ${deviceType} ${vendorId} ${productId} ${discriminator}`);

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
                // TODO: the Matter port should not be hardcoded here
                SrvRecord(deviceQname, {priority: 0, weight: 0, port: 5540, target: hostname }),
                TxtRecord(deviceQname, [
                    `VP=${vendorId.id}+${productId}`,  /* Vendor / Product */
                    `DT=${deviceType}`,             /* Device Type */
                    `DN=${deviceName}`,             /* Device Name */
                    "SII=5000",                     /* Sleepy Idle Interval */
                    "SAI=300",                      /* Sleepy Active Interval */
                    "T=1",                          /* TCP supported */
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

    setFabric(operationalId: ByteArray, nodeId: NodeId) {
        const operationalIdString = operationalId.toHex().toUpperCase();
        const fabricQname = getFabricQname(operationalIdString);
        const deviceMatterQname = getDeviceMatterQname(operationalIdString, nodeId.toString());

        logger.debug(`Set fabric ${operationalId.toHex()} ${nodeId.id}: ${deviceMatterQname} for announcement`);

        this.mdnsServer.setRecordsGenerator(netInterface => {
            const ipMac = this.network.getIpMac(netInterface);
            if (ipMac === undefined) return [];
            const { mac, ips } = ipMac;
            const hostname = mac.replace(/:/g, "").toUpperCase() + "0000.local";
            const records = [
                PtrRecord(SERVICE_DISCOVERY_QNAME, MATTER_SERVICE_QNAME),
                PtrRecord(SERVICE_DISCOVERY_QNAME, fabricQname),
                PtrRecord(MATTER_SERVICE_QNAME, deviceMatterQname),
                PtrRecord(fabricQname, deviceMatterQname),
                // TODO: the Matter port should not be hardcoded here
                SrvRecord(deviceMatterQname, {priority: 0, weight: 0, port: 5540, target: hostname }),
                TxtRecord(deviceMatterQname, ["SII=5000", "SAI=300", "T=1"]),
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

    announce() {
        this.mdnsServer.announce()
            .catch(error => logger.error(error));
    }

    close() {
        this.mdnsServer.close();
    }
}
