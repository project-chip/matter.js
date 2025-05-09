/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformationCluster } from "#clusters/basic-information";
import { Specification } from "#model";
import { AttributeResponseFilter, FilteredAttributeResponse, Read, ReadResult } from "#protocol";
import { AttributeId, ClusterId, EndpointNumber } from "#types";
import { MockServerNode } from "./mock-server-node.js";
import INTERACTION_MODEL_REVISION = Specification.INTERACTION_MODEL_REVISION;

describe("FilteredAttributeReaderRequest", () => {
    it("reads concrete attribute when in filter", async () => {
        const response = await read(
            await MockServerNode.createOnline(),
            { [EndpointNumber(0)]: { [ClusterId(40)]: new Set([AttributeId(1)]) } },
            Read.Attribute({
                cluster: BasicInformationCluster,
                attributes: "vendorName",
            }),
        );

        expect(response.data).deep.equals([
            [
                {
                    kind: "attr-value",
                    path: {
                        attributeId: 1,
                        clusterId: 40,
                        endpointId: 0,
                    },
                    tlv: {},
                    value: "Matter.js Test Vendor",
                    version: 1,
                },
            ],
        ]);
        expect(response.counts).deep.equals({ status: 0, value: 1, existent: 1 });
    });

    it("reads no concrete attribute when not in filter", async () => {
        const response = await read(
            await MockServerNode.createOnline(),
            { [EndpointNumber(0)]: { [ClusterId(40)]: new Set([AttributeId(2)]) } },
            Read.Attribute({
                cluster: BasicInformationCluster,
                attributes: "vendorName",
            }),
        );

        expect(response.data).deep.equals([]);
        expect(response.counts).deep.equals({ status: 0, value: 0, existent: 0 });
    });

    it("reads wildcard endpoint & attributes with 5 in Filter", async () => {
        const response = await read(
            await MockServerNode.createOnline(),
            {
                [EndpointNumber(0)]: {
                    [ClusterId(40)]: new Set([
                        AttributeId(1),
                        AttributeId(2),
                        AttributeId(3),
                        AttributeId(4),
                        AttributeId(5),
                    ]),
                },
            },
            Read.Attribute({
                cluster: BasicInformationCluster,
            }),
        );

        expect(countAttrs(response.data)).deep.equals({
            0: {
                40: 5,
            },
        });
        expect(response.counts).deep.equals({ status: 0, value: 5, existent: 5 });
    });
});

function read(node: MockServerNode, filter: AttributeResponseFilter, ...args: Parameters<typeof Read>) {
    const request = Read(...args);

    if (!Read.containsAttribute(request)) {
        throw new Error("Expected an attribute request");
    }
    return readRaw(node, filter, request);
}

async function readRaw(node: MockServerNode, filter: AttributeResponseFilter, data: Partial<Read.Attributes>) {
    const request = {
        isFabricFiltered: false,
        interactionModelRevision: INTERACTION_MODEL_REVISION,
        ...data,
    } as Read.Attributes;
    if (!Read.containsAttribute(request)) {
        throw new Error("Expected an attribute request");
    }
    return node.online({}, ({ context }) => {
        const response = new FilteredAttributeResponse(node.protocol, context, filter);
        const data = [...response.process(request)];
        data.forEach(chunks => {
            if (Array.isArray(chunks)) {
                chunks.forEach(chunk => {
                    if ("tlv" in chunk) {
                        chunk.tlv = {};
                    }
                });
            }
        });
        return { data, counts: response.counts };
    });
}

function countAttrs(chunks: ReadResult.Chunk[]) {
    const counts = {} as Record<EndpointNumber, Record<ClusterId, number>>;
    for (const chunk of chunks) {
        for (const report of chunk) {
            if (report.kind !== "attr-value") {
                throw new Error("Only attribute values expected");
            }
            const endpointCounts = (counts[report.path.endpointId] ??= {});
            endpointCounts[report.path.clusterId] ??= 0;
            endpointCounts[report.path.clusterId]++;
        }
    }
    return counts;
}
