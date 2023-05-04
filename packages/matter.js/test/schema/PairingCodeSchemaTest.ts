/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { CommissionningFlowType, DiscoveryCapabilitiesSchema, QrCodeData, QrPairingCodeCodec, ManualPairingCodeCodec, ManualPairingData } from "../../src/schema/PairingCodeSchema.js";

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

type MANUAL_PAIRING_DATA_CODE = {
    data: ManualPairingData,
    code: string
}

const MANUAL_PAIRING_DATA_CODES: Array<MANUAL_PAIRING_DATA_CODE> = [
    {
        data: {
            discriminator: 2976,
            shortDiscriminator: 11,
            passcode: 34567890,
        },
        code: "26318621095"
    },
    {
        data: {
            discriminator: 10,
            shortDiscriminator: 0,
            passcode: 12345678,
        },
        code: "00852607537"
    },
    {
        data: {
            discriminator: 2001,
            shortDiscriminator: 7,
            passcode: 23456789,
        },
        code: "16043714310"
    }
];

describe("QrPairingCodeCodec", () => {
    describe("encode", () => {
        it("encodes the data", () => {
            const result = QrPairingCodeCodec.encode(QR_CODE_DATA);

            assert.equal(result, QR_CODE);
        });
    });

    describe("decode", () => {
        it("decodes the data", () => {
            const result = QrPairingCodeCodec.decode(QR_CODE);

            assert.deepEqual(result, QR_CODE_DATA);
        });
    });
});


describe("ManualPairingCodeCodec", () => {
    describe("encode", () => {
        it("encodes the data", () => {
            for (const pairingCode of MANUAL_PAIRING_DATA_CODES) {
                const result = ManualPairingCodeCodec.encode(pairingCode.data);

                assert.equal(result, pairingCode.code);
            }
        });

        it("decode the data", () => {
            for (const dataCode of MANUAL_PAIRING_DATA_CODES) {
                const result = ManualPairingCodeCodec.decode(dataCode.code);

                assert.equal(result.shortDiscriminator, dataCode.data.shortDiscriminator);
                assert.equal(result.passcode, dataCode.data.passcode);
            }
        });
    });
});
