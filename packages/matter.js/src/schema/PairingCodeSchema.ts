/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BitField, BitFieldEnum, BitFlag, BitmapSchema, ByteArrayBitmapSchema, TypeFromBitmapSchema
} from "./BitmapSchema.js";
import { Schema } from "./Schema.js";
import { Base38 } from "./Base38Schema.js";
import { Verhoeff } from "../math/Verhoeff.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

/** See {@link MatterCoreSpecificationV1_0} § 5.1.3.1 Table 35 */
export enum CommissionningFlowType {
    /** When uncommissioned, the device always enters commissioning mode upon power-up. */
    Standard = 0,

    /** User action required to enter commissioning mode. */
    UserIntent = 1,

    /** Interaction with a vendor-specified means is needed before commissioning. */
    Custom = 2,
}

/** See {@link MatterCoreSpecificationV1_0} § 5.1.3.1 Table 36 */
export const DiscoveryCapabilitiesSchema = BitmapSchema({
    /** Device supports hosting a Soft-AP when not commissioned. */
    softAccessPoint: BitFlag(0),

    /** Device supports BLE for discovery when not commissioned. */
    ble: BitFlag(1),

    /** Device is already on the IP network. */
    onIpNetwork: BitFlag(2),
});

/** See {@link MatterCoreSpecificationV1_0} § 5.1.3.1 Table 35 */
const QrCodeDataSchema = ByteArrayBitmapSchema({
    version: BitField(0, 3),
    vendorId: BitField(3, 16),
    productId: BitField(19, 16),
    flowType: BitFieldEnum<CommissionningFlowType>(35, 2),
    discoveryCapabilities: BitField(37, 8),
    discriminator: BitField(45, 12),
    passcode: BitField(57, 27),
});
export type QrCodeData = TypeFromBitmapSchema<typeof QrCodeDataSchema>;

const PREFIX = "MT:";

class QrPairingCodeSchema extends Schema<QrCodeData, string> {
    protected encodeInternal(payloadData: QrCodeData): string {
        return PREFIX + Base38.encode(QrCodeDataSchema.encode(payloadData));
    }

    protected decodeInternal(encoded: string): QrCodeData {
        if (!encoded.startsWith(PREFIX)) throw new Error("The pairing code should start with MT:");
        return QrCodeDataSchema.decode(Base38.decode(encoded.slice(PREFIX.length)));
    }
}

export const QrPairingCodeCodec = new QrPairingCodeSchema();

export type ManualPairingData = {
    discriminator: number,
    passcode: number,
    vendorId?: number,
    productId?: number,
};

/** See {@link MatterCoreSpecificationV1_0} § 5.1.4.1 Table 39/40 */
class ManualPairingCodeSchema extends Schema<ManualPairingData, string> {
    protected encodeInternal({ discriminator, passcode, vendorId, productId }: ManualPairingData): string {
        let result = "";
        const hasVendorProductIds = (vendorId !== undefined) && (productId !== undefined);
        result += ((discriminator >> 10) | (hasVendorProductIds ? (1 << 2) : 0));
        result += (((discriminator & 0x300) << 6) | (passcode & 0x3FFF)).toString().padStart(5, "0");
        result += (passcode >> 14).toString().padStart(4, "0");
        if (hasVendorProductIds) {
            result += vendorId.toString().padStart(5, "0");
            result += productId.toString().padStart(5, "0");
        }
        result += new Verhoeff().computeChecksum(result);
        return result;
    }

    protected decodeInternal(_encoded: string): ManualPairingData {
        throw new Error("Not implemented");
    }
}

export const ManualPairingCodeCodec = new ManualPairingCodeSchema();
