/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UnexpectedDataError } from "../common/MatterError.js";
import { Verhoeff } from "../math/Verhoeff.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { Base38 } from "./Base38Schema.js";
import {
    BitField,
    BitFieldEnum,
    BitFlag,
    BitmapSchema,
    ByteArrayBitmapSchema,
    TypeFromBitmapSchema,
} from "./BitmapSchema.js";
import { Schema } from "./Schema.js";

/** See {@link MatterCoreSpecificationV1_0} § 5.1.3.1 Table 35 */
export enum CommissionningFlowType {
    /** When not commissioned, the device always enters commissioning mode upon power-up. */
    Standard = 0,

    /** User action required to enter commissioning mode. */
    UserIntent = 1,

    /** Interaction with a vendor-specified means is needed before commissioning. */
    Custom = 2,
}

/** See {@link MatterCoreSpecificationV1_0} § 5.1.3.1 Table 36 */
export const DiscoveryCapabilitiesBitmap = {
    /** Device supports hosting a Soft-AP when not commissioned. */
    softAccessPoint: BitFlag(0),

    /** Device supports BLE for discovery when not commissioned. */
    ble: BitFlag(1),

    /** Device is already on the IP network. */
    onIpNetwork: BitFlag(2),
};
export const DiscoveryCapabilitiesSchema = BitmapSchema(DiscoveryCapabilitiesBitmap);

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
        if (!encoded.startsWith(PREFIX)) throw new UnexpectedDataError("The pairing code should start with MT:");
        return QrCodeDataSchema.decode(Base38.decode(encoded.slice(PREFIX.length)));
    }
}

export const QrPairingCodeCodec = new QrPairingCodeSchema();

export type ManualPairingData = {
    discriminator?: number;
    shortDiscriminator?: number;
    passcode: number;
    vendorId?: number;
    productId?: number;
};

/** See {@link MatterCoreSpecificationV1_0} § 5.1.4.1 Table 38/39/40 */
class ManualPairingCodeSchema extends Schema<ManualPairingData, string> {
    protected encodeInternal({ discriminator, passcode, vendorId, productId }: ManualPairingData): string {
        if (discriminator === undefined) throw new UnexpectedDataError("discriminator is required");
        if (discriminator > 4095) throw new UnexpectedDataError("discriminator value must be less than 4096");
        let result = "";
        const hasVendorProductIds = vendorId !== undefined && productId !== undefined;
        result += (discriminator >> 10) | (hasVendorProductIds ? 1 << 2 : 0);
        result += (((discriminator & 0x300) << 6) | (passcode & 0x3fff)).toString().padStart(5, "0");
        result += (passcode >> 14).toString().padStart(4, "0");
        if (hasVendorProductIds) {
            result += vendorId.toString().padStart(5, "0");
            result += productId.toString().padStart(5, "0");
        }
        result += new Verhoeff().computeChecksum(result);
        return result;
    }

    protected decodeInternal(encoded: string): ManualPairingData {
        if (encoded.length !== 11 && encoded.length != 21) {
            throw new UnexpectedDataError("Invalid pairing code");
        }
        if (new Verhoeff().computeChecksum(encoded.slice(0, -1)) !== parseInt(encoded.slice(-1))) {
            throw new UnexpectedDataError("Invalid checksum");
        }
        const hasVendorProductIds = !!(parseInt(encoded[0]) & (1 << 2));
        const shortDiscriminator = ((parseInt(encoded[0]) & 0x03) << 2) | ((parseInt(encoded.slice(1, 6)) >> 14) & 0x3);
        const passcode = (parseInt(encoded.slice(1, 6)) & 0x3fff) | (parseInt(encoded.slice(6, 10)) << 14);
        let vendorId: number | undefined;
        let productId: number | undefined;
        if (hasVendorProductIds) {
            vendorId = parseInt(encoded.slice(10, 15));
            productId = parseInt(encoded.slice(15, 20));
        }
        return { shortDiscriminator, passcode, vendorId, productId };
    }
}

export const ManualPairingCodeCodec = new ManualPairingCodeSchema();
