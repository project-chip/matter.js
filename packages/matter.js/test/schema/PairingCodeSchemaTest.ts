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
    QrCodeTlvDataDefaultFields,
    QrPairingCodeCodec,
} from "../../src/schema/PairingCodeSchema.js";
import { TlvField, TlvObject } from "../../src/tlv/TlvObject.js";
import { TlvString } from "../../src/tlv/TlvString.js";
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
        code: "0085 260 7537",
    },
    {
        data: {
            discriminator: 2001,
            shortDiscriminator: 7,
            passcode: 23456789,
        },
        code: "1604-371-4310",
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

    describe("Encode/Decode TlvData", () => {
        it("encodes and decodes just serialNumber as string", () => {
            const tlvData = ByteArray.fromHex("152C000A3132333435363738393018"); // from Specs

            const decoded = QrPairingCodeCodec.decodeTlvData(tlvData);

            expect(decoded).deep.equal({
                serialNumber: "1234567890",
            });

            const encoded = QrPairingCodeCodec.encodeTlvData(decoded);

            expect(encoded).deep.equal(tlvData);
        });

        it("encodes and decodes just serialNumber as string", () => {
            const data = {
                serialNumber: 1234567890,
            };

            const encoded = QrPairingCodeCodec.encodeTlvData(data);

            expect(encoded).deep.equal(ByteArray.fromHex("152600d202964918"));

            const decoded = QrPairingCodeCodec.decodeTlvData(encoded);

            expect(decoded).deep.equal(data);
        });

        it("encodes and decodes serial and vendor specific field with custom schema", () => {
            const tlvData = ByteArray.fromHex("152C810656656E646F722C000A3132333435363738393018"); // from Specs

            const customSchema = TlvObject({
                vendorTag01: TlvField(0x81, TlvString),
                ...QrCodeTlvDataDefaultFields,
            });

            const decoded = QrPairingCodeCodec.decodeTlvData(tlvData, customSchema);

            expect(decoded).deep.equal({
                vendorTag01: "Vendor",
                serialNumber: "1234567890",
            });

            const encoded = QrPairingCodeCodec.encodeTlvData(decoded, customSchema);

            expect(encoded).deep.equal(tlvData);
        });
    });
});

describe("ManualPairingCodeCodec", () => {
    describe("encode", () => {
        it("encodes the data", () => {
            for (const pairingCode of MANUAL_PAIRING_DATA_CODES) {
                const result = ManualPairingCodeCodec.encode(pairingCode.data);

                expect(result).equal(pairingCode.code.replace(/[^0-9]/g, ""));
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
