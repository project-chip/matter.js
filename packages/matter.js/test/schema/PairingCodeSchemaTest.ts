/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    CommissioningFlowType,
    DiscoveryCapabilitiesSchema,
    ManualPairingCodeCodec,
    ManualPairingData,
    QrCodeData,
    QrPairingCodeCodec,
} from "../../src/schema/PairingCodeSchema.js";
import { ByteArray } from "../../src/util/ByteArray.js";

const QR_CODE = "MT:YNJV7VSC00CMVH7SR00";
const QR_CODE_DATA: QrCodeData = {
    version: 0,
    vendorId: 9050,
    productId: 65279,
    flowType: CommissioningFlowType.Standard,
    discoveryCapabilities: DiscoveryCapabilitiesSchema.encode({
        onIpNetwork: false,
        ble: true,
    }),
    discriminator: 2976,
    passcode: 34567890,
    tlvData: undefined,
};

const QR_CODE_TLV = "MT:YNJV7VSC00CMVH7E4810AK00";
const QR_CODE_DATA_TLV: QrCodeData = {
    ...QR_CODE_DATA,
    tlvData: ByteArray.fromHex("010203"),
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

            expect(result).equal(QR_CODE);
        });

        it("encodes the data with TLV Data", () => {
            const result = QrPairingCodeCodec.encode(QR_CODE_DATA_TLV);

            expect(result).equal(QR_CODE_TLV);
        });
    });

    describe("decode", () => {
        it("decodes the data", () => {
            const result = QrPairingCodeCodec.decode(QR_CODE);

            expect(result).deep.equal(QR_CODE_DATA);
        });

        it("decodes the data with TLV Data", () => {
            const result = QrPairingCodeCodec.decode(QR_CODE_TLV);

            expect(result).deep.equal(QR_CODE_DATA_TLV);
        });
    });
});

describe("ManualPairingCodeCodec", () => {
    describe("encode", () => {
        it("encodes the data", () => {
            for (const pairingCode of MANUAL_PAIRING_DATA_CODES) {
                const result = ManualPairingCodeCodec.encode(pairingCode.data);

                expect(result).equal(pairingCode.code);
            }
        });

        it("decode the data", () => {
            for (const dataCode of MANUAL_PAIRING_DATA_CODES) {
                const result = ManualPairingCodeCodec.decode(dataCode.code);

                expect(result.shortDiscriminator).equal(dataCode.data.shortDiscriminator);
                expect(result.passcode).equal(dataCode.data.passcode);
            }
        });
    });
});
