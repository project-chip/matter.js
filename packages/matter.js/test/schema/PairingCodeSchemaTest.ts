/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    CommissionningFlowType,
    DiscoveryCapabilitiesSchema,
    ManualPairingCodeCodec,
    ManualPairingData,
    QrCodeData,
    QrPairingCodeCodec,
} from "../../src/schema/PairingCodeSchema.js";

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
    data: ManualPairingData;
    code: string;
};

const MANUAL_PAIRING_DATA_CODES: Array<MANUAL_PAIRING_DATA_CODE> = [
    {
        data: {
            discriminator: 2976,
            shortDiscriminator: 11,
            passcode: 34567890,
        },
        code: "26318621095",
    },
    {
        data: {
            discriminator: 10,
            shortDiscriminator: 0,
            passcode: 12345678,
        },
        code: "00852607537",
    },
    {
        data: {
            discriminator: 2001,
            shortDiscriminator: 7,
            passcode: 23456789,
        },
        code: "16043714310",
    },
];

describe("QrPairingCodeCodec", () => {
    describe("encode", () => {
        it("encodes the data", () => {
            const result = QrPairingCodeCodec.encode(QR_CODE_DATA);

            expect(result).toBe(QR_CODE);
        });
    });

    describe("decode", () => {
        it("decodes the data", () => {
            const result = QrPairingCodeCodec.decode(QR_CODE);

            expect(result).toEqual(QR_CODE_DATA);
        });
    });
});

describe("ManualPairingCodeCodec", () => {
    describe("encode", () => {
        it("encodes the data", () => {
            for (const pairingCode of MANUAL_PAIRING_DATA_CODES) {
                const result = ManualPairingCodeCodec.encode(pairingCode.data);

                expect(result).toBe(pairingCode.code);
            }
        });

        it("decode the data", () => {
            for (const dataCode of MANUAL_PAIRING_DATA_CODES) {
                const result = ManualPairingCodeCodec.decode(dataCode.code);

                expect(result.shortDiscriminator).toBe(dataCode.data.shortDiscriminator);
                expect(result.passcode).toBe(dataCode.data.passcode);
            }
        });
    });
});
