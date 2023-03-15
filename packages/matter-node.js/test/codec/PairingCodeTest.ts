/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { CommissionningFlowType, DiscoveryCapabilitiesSchema, QrCodeData, QrPairingCodeCodec, ManualPairingCodeCodec, ManualPairingData } from "../../src/codec/PairingCode";

const QR_CODE = "MT:YNJV7VSC00CMVH7SR00";
const QR_CODE_DATA: QrCodeData = {
    version: 0,
    vendorId: 9050,
    productId: 65279,
    flowType: CommissionningFlowType.Standard,
    discoveryCapabilities: DiscoveryCapabilitiesSchema.encode({
        onIpNetwork: false,
        ble: true,
        softAccessPoint: false,
    }),
    discriminator: 2976,
    passcode: 34567890,
};

const MANUAL_PAIRING_CODE_DATA: ManualPairingData = {
    discriminator: 2976,
    passcode: 34567890,
};
const MANUAL_PAIRING_CODE = "26318621095";

describe("QrPairingCodeCodec", () => {
    context("encode", () => {
        it("encodes the data", () => {
            const result = QrPairingCodeCodec.encode(QR_CODE_DATA);

            assert.equal(result, QR_CODE);
        });
    });

    context("decode", () => {
        it("decodes the data", () => {
            const result = QrPairingCodeCodec.decode(QR_CODE);

            assert.deepEqual(result, QR_CODE_DATA);
        });
    });
});
 

describe("ManualPairingCodeCodec", () => {
    context("encode", () => {
        it("encodes the data", () => {
            const result = ManualPairingCodeCodec.encode(MANUAL_PAIRING_CODE_DATA);

            assert.equal(result, MANUAL_PAIRING_CODE);
        });
    });
});
