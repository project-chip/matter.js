/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformationCluster } from "#clusters/basic-information";
import { AttributeResponse, Read, ReadResult } from "#protocol";
import { ClusterId, EndpointNumber } from "#types";
import { MockServerNode } from "./mock-server-node.js";

describe("AttributeReaderRequest", () => {
    it("reads concrete attribute", async () => {
        const response = await read(
            Read.Attribute({
                cluster: BasicInformationCluster,
                attributes: "vendorName",
            }),
        );

        expect(response).deep.equals([
            [
                {
                    kind: "attr-value",
                    path: {
                        attributeId: 1,
                        clusterId: 40,
                        endpointId: 0,
                    },
                    value: "Matter.js Test Vendor",
                },
            ],
        ]);
    });

    it("reads wildcard endpoint & attributes", async () => {
        const response = await read(
            Read.Attribute({
                cluster: BasicInformationCluster,
            }),
        );

        expect(countAttrs(response)).deep.equals({
            0: {
                40: 28,
            },
        });
    });

    it("reads full wildcard", async () => {
        const response = await read(Read.Attribute());
        expect(countAttrs(response)).deep.equals({
            0: {
                29: 9,
                31: 8,
                40: 28,
                48: 10,
                51: 14,
                60: 8,
                62: 10,
                63: 9,
            },
        });
    });

    // TODO - more tests
});

async function read(...args: Parameters<typeof Read>) {
    const request = Read(...args);
    if (!Read.isAttribute(request)) {
        throw new Error("Expected an attribute request");
    }

    const node = await MockServerNode.createOnline();

    const results = node.online({}, ({ context }) => {
        return [...new AttributeResponse(node.protocol, context, request)];
    });

    return results;
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
