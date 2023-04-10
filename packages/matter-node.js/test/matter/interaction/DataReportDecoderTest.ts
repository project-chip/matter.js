/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeId, ByteArray, ClusterId, EventId, VendorId } from "@project-chip/matter.js";
import { TlvDataReport } from "../../../src/matter/interaction/InteractionMessages";
import { normalizeReadAttributeReport } from "../../../src/matter/interaction/DataReportDecoder";
import * as assert from "assert";

describe("DatsReportDecoder", () => {

    it("decode chunked array", () => {
        // Data taken from chiptool lighting device
        const tlvData = ByteArray.fromHex("1536011535012600605bd045370124020024031d2404011836021818181535012600605bd045370124020024031d24040134051824020418181535012600605bd045370124020024031d24040134051824021d18181535012600605bd045370124020024031d24040134051824021f18181535012600605bd045370124020024031d24040134051824022818181535012600605bd045370124020024031d24040134051824022a18181535012600605bd045370124020024031d24040134051824022b18181535012600605bd045370124020024031d24040134051824022c18181535012600605bd045370124020024031d24040134051824023018181535012600605bd045370124020024031d24040134051824023118181535012600605bd045370124020024031d24040134051824023218181535012600605bd045370124020024031d24040134051824023318181535012600605bd045370124020024031d24040134051824023418181535012600605bd045370124020024031d24040134051824023518181535012600605bd045370124020024031d24040134051824023618181535012600605bd045370124020024031d24040134051824023718181535012600605bd045370124020024031d24040134051824023b18181535012600605bd045370124020024031d24040134051824023c18181535012600605bd045370124020024031d24040134051824023e18181535012600605bd045370124020024031d24040134051824023f18181535012600605bd045370124020024031d24040134051824024018181535012600605bd045370124020024031d240401340518240241181818290424ff0118");
        const decodedData = TlvDataReport.decode(tlvData);

        assert.ok(decodedData);
        assert.ok(Array.isArray(decodedData.values));

        const normalizedData = normalizeReadAttributeReport(decodedData.values);

        assert.equal(normalizedData.length, 1);
        assert.deepEqual(normalizedData[0].path, { attributeId: 1, attributeName: "serverList", clusterId: 29, endpointId: 0, nodeId: undefined });
        assert.deepEqual(normalizedData[0].value, [
            new ClusterId(4), new ClusterId(29), new ClusterId(31), new ClusterId(40), new ClusterId(42),
            new ClusterId(43), new ClusterId(44), new ClusterId(48), new ClusterId(49), new ClusterId(50),
            new ClusterId(51), new ClusterId(52), new ClusterId(53), new ClusterId(54), new ClusterId(55),
            new ClusterId(59), new ClusterId(60), new ClusterId(62), new ClusterId(63), new ClusterId(64),
            new ClusterId(65)
        ]);

    });

    it("decode number attribute", () => {
        // Data taken from chiptool lighting device
        const tlvData = ByteArray.fromHex("153601153501260055156878370124020024032824040918240201181818290424ff0118");
        const decodedData = TlvDataReport.decode(tlvData);

        assert.ok(decodedData);
        assert.ok(Array.isArray(decodedData.values));

        const normalizedData = normalizeReadAttributeReport(decodedData.values);

        assert.equal(normalizedData.length, 1);
        assert.deepEqual(normalizedData[0].path, { attributeId: 9, attributeName: "softwareVersion", clusterId: 40, endpointId: 0, nodeId: undefined });
        assert.deepEqual(normalizedData[0].value, 1);
    });


    it("decode whole cluster response", () => {
        // Data taken from chiptool lighting device
        const tlvData = ByteArray.fromHex("15360115350126005515687837012402002403282404001824020118181535012600551568783701240200240328240401182c020b544553545f56454e444f5218181535012600551568783701240200240328240402182502f1ff18181535012600551568783701240200240328240403182c020c544553545f50524f4455435418181535012600551568783701240200240328240404182502018018181535012600551568783701240200240328240405182c020018181535012600551568783701240200240328240406182c02025553181815350126005515687837012402002403282404071824020018181535012600551568783701240200240328240408182c020c544553545f56455253494f4e18181535012600551568783701240200240328240409182402011818153501260055156878370124020024032824040a182c0203312e301818153501260055156878370124020024032824040b182c020832303230303130311818153501260055156878370124020024032824040c182c02001818153501260055156878370124020024032824040d182c02001818153501260055156878370124020024032824040e182c02001818153501260055156878370124020024032824040f182c0207544553545f534e181815350126005515687837012402002403282404101828021818153501260055156878370124020024032824041118290218181535012600551568783701240200240328240412182c021032354536333242424137354642453943181815350126005515687837012402002403282404131835022400032501ffff18181815350126005515687837012402002403282504fcff18240200181815350126005515687837012402002403282504fdff18240201181815350126005515687837012402002403282504f8ff18360218181815350126005515687837012402002403282504f9ff18360218181815350126005515687837012402002403282504faff18360218181815350126005515687837012402002403282504faff340518240200181815350126005515687837012402002403282504faff340518240201181815350126005515687837012402002403282504faff340518240202181815350126005515687837012402002403282504fbff18360218181815350126005515687837012402002403282504fbff340518240200181815350126005515687837012402002403282504fbff340518240201181815350126005515687837012402002403282504fbff340518240202181815350126005515687837012402002403282504fbff340518240203181815350126005515687837012402002403282504fbff340518240204181818290324ff0118");
        const decodedData = TlvDataReport.decode(tlvData);

        assert.ok(decodedData);
        assert.ok(Array.isArray(decodedData.values));

        const normalizedData = normalizeReadAttributeReport(decodedData.values);

        assert.deepEqual(normalizedData, [
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 0,
                    "attributeName": "dataModelRevision",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": 1
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 1,
                    "attributeName": "vendorName",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": "TEST_VENDOR"
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 2,
                    "attributeName": "vendorId",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": new VendorId(65521)
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 3,
                    "attributeName": "productName",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": "TEST_PRODUCT"
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 4,
                    "attributeName": "productId",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": 32769
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 5,
                    "attributeName": "nodeLabel",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": ""
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 6,
                    "attributeName": "location",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": "US"
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 7,
                    "attributeName": "hardwareVersion",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": 0
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 8,
                    "attributeName": "hardwareVersionString",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": "TEST_VERSION"
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 9,
                    "attributeName": "softwareVersion",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": 1
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 10,
                    "attributeName": "softwareVersionString",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": "1.0"
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 11,
                    "attributeName": "manufacturingDate",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": "20200101"
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 12,
                    "attributeName": "partNumber",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": ""
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 13,
                    "attributeName": "productURL",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": ""
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 14,
                    "attributeName": "productLabel",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": ""
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 15,
                    "attributeName": "serialNumber",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": "TEST_SN"
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 16,
                    "attributeName": "localConfigDisabled",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": false
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 17,
                    "attributeName": "reachable",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": true
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 18,
                    "attributeName": "uniqueId",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": "25E632BBA75FBE9C"
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 19,
                    "attributeName": "capabilityMinima",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": {
                    "caseSessionsPerFabric": 3,
                    "subscriptionsPerFabric": 65535
                }
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 65532,
                    "attributeName": "featureMap",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": {}
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 65533,
                    "attributeName": "clusterRevision",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": 1
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 65528,
                    "attributeName": "generatedCommandList",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": []
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 65529,
                    "attributeName": "acceptedCommandList",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": []
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 65530,
                    "attributeName": "eventList",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": [new EventId(0), new EventId(1), new EventId(2)]
            },
            {
                "path": {
                    "endpointId": 0,
                    "clusterId": 40,
                    "attributeId": 65531,
                    "attributeName": "attributeList",
                    "nodeId": undefined
                },
                "version": 2020087125,
                "value": [new AttributeId(0), new AttributeId(1), new AttributeId(2), new AttributeId(3), new AttributeId(4)]
            }
        ]);
    });

    // TODO: Add tests for Tag Compression
});
