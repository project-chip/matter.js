/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformationCluster } from "#clusters/basic-information";
import { OnOffLightDevice } from "#devices/on-off-light";
import { Endpoint } from "#endpoint/index.js";
import { AttributeReadResponse, Read, ReadResult } from "#protocol";
import { ClusterId, EndpointNumber, StatusCode } from "#types";
import { Specification } from "@matter/model";
import { AttributeId } from "@matter/types";
import { MockServerNode } from "./mock-server-node.js";
import INTERACTION_MODEL_REVISION = Specification.INTERACTION_MODEL_REVISION;

const ROOT_ENDPOINT_FULL_CLUSTER_LIST = {
    29: 9,
    31: 8,
    40: 21,
    48: 10,
    51: 10,
    60: 8,
    62: 10,
    63: 9,
};
const ROOT_ENDPOINT_FULL_CLUSTER_LIST_COUNT = Object.values(ROOT_ENDPOINT_FULL_CLUSTER_LIST).reduce(
    (acc, count) => acc + count,
    0,
);

describe("AttributeReaderRequest", () => {
    it("reads concrete attribute", async () => {
        const response = await read(
            await MockServerNode.createOnline(),
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

    it("reads concrete attribute with version filter", async () => {
        const response = await readRaw(await MockServerNode.createOnline(), {
            attributeRequests: [
                {
                    clusterId: ClusterId(40),
                    attributeId: AttributeId(1),
                },
            ],
            dataVersionFilters: [
                {
                    path: { endpointId: EndpointNumber(0), clusterId: ClusterId(40) },
                    dataVersion: 1,
                },
            ],
        });

        expect(response.data).deep.equals([]);
        expect(response.counts).deep.equals({ status: 0, value: 0, existent: 1 });
    });

    it("reads non-existent concrete endpoint", async () => {
        const response = await read(
            await MockServerNode.createOnline(),
            Read.Attribute({
                endpoint: new Endpoint(OnOffLightDevice, { id: "test", number: 1 }),
                cluster: BasicInformationCluster,
                attributes: "vendorName",
            }),
        );

        expect(response.data).deep.equals([
            [
                {
                    kind: "attr-status",
                    path: {
                        attributeId: 1,
                        clusterId: 40,
                        endpointId: 1,
                    },
                    status: StatusCode.UnsupportedEndpoint,
                },
            ],
        ]);
        expect(response.counts).deep.equals({ status: 1, value: 0, existent: 0 });
    });

    it("reads non-existent concrete attribute", async () => {
        const node = await MockServerNode.createOnline();
        const response = await read(
            node,
            Read.Attribute({
                endpoint: node,
                cluster: BasicInformationCluster,
                attributes: "serialNumber",
            }),
        );

        expect(response.data).deep.equals([
            [
                {
                    kind: "attr-status",
                    path: {
                        attributeId: 15,
                        clusterId: 40,
                        endpointId: 0,
                    },
                    status: StatusCode.UnsupportedAttribute,
                },
            ],
        ]);
        expect(response.counts).deep.equals({ status: 1, value: 0, existent: 0 });
    });

    it("reads wildcard endpoint & attributes", async () => {
        const response = await read(
            await MockServerNode.createOnline(),
            Read.Attribute({
                cluster: BasicInformationCluster,
            }),
        );

        expect(countAttrs(response.data)).deep.equals({
            0: {
                40: 21,
            },
        });
        expect(response.counts).deep.equals({ status: 0, value: 21, existent: 21 });
    });

    it("reads full wildcard", async () => {
        const response = await read(await MockServerNode.createOnline(), Read.Attribute());
        expect(countAttrs(response.data)).deep.equals({
            0: ROOT_ENDPOINT_FULL_CLUSTER_LIST,
        });
    });

    it("reads full wildcard with adding and removing endpoint", async () => {
        const node = await MockServerNode.createOnline();

        const endpoint = await node.add(OnOffLightDevice);

        const responseWithLight = await read(node, Read.Attribute());
        expect(countAttrs(responseWithLight.data)).deep.equals({
            0: ROOT_ENDPOINT_FULL_CLUSTER_LIST,
            1: {
                3: 7,
                4: 6,
                6: 10,
                29: 9,
            },
        });
        expect(responseWithLight.counts).deep.equals({
            status: 0,
            value: ROOT_ENDPOINT_FULL_CLUSTER_LIST_COUNT + 32,
            existent: ROOT_ENDPOINT_FULL_CLUSTER_LIST_COUNT + 32,
        });
        await endpoint.close();

        const responseAfterRemove = await read(node, Read.Attribute());
        expect(countAttrs(responseAfterRemove.data)).deep.equals({
            0: ROOT_ENDPOINT_FULL_CLUSTER_LIST,
        });
        expect(responseAfterRemove.counts).deep.equals({
            status: 0,
            value: ROOT_ENDPOINT_FULL_CLUSTER_LIST_COUNT,
            existent: ROOT_ENDPOINT_FULL_CLUSTER_LIST_COUNT,
        });
    });

    it("reads attributeList global Attribute full wildcard", async () => {
        const response = await read(
            await MockServerNode.createOnline(),
            Read.Attribute({
                attributes: "attributeList",
            }),
        );
        expect(countAttrs(response.data)).deep.equals({
            0: {
                29: 1,
                31: 1,
                40: 1,
                48: 1,
                51: 1,
                60: 1,
                62: 1,
                63: 1,
            },
        });
        expect(response.counts).deep.equals({
            status: 0,
            value: Object.keys(ROOT_ENDPOINT_FULL_CLUSTER_LIST).length,
            existent: Object.keys(ROOT_ENDPOINT_FULL_CLUSTER_LIST).length,
        });
    });

    it("reads attributeList global Attribute full wildcard excluding attributerList via WildcardPath Filter", async () => {
        const response = await readRaw(await MockServerNode.createOnline(), {
            attributeRequests: [
                {
                    attributeId: AttributeId(0xfffb),
                    wildcardPathFlags: {
                        skipAttributeList: true,
                    },
                },
            ],
        });

        expect(response.data).deep.equals([]);
        expect(response.counts).deep.equals({
            status: 0,
            value: 0,
            existent: 0,
        });
    });

    // TODO - more tests and Migrate some from InteractionProtocolTest
});

function read(node: MockServerNode, ...args: Parameters<typeof Read>) {
    const request = Read(...args);

    if (!Read.containsAttribute(request)) {
        throw new Error("Expected an attribute request");
    }
    return readRaw(node, request);
}

async function readRaw(node: MockServerNode, data: Partial<Read.Attributes>) {
    const request = {
        isFabricFiltered: false,
        interactionModelRevision: INTERACTION_MODEL_REVISION,
        ...data,
    } as Read.Attributes;
    if (!Read.containsAttribute(request)) {
        throw new Error("Expected an attribute request");
    }
    return node.online({}, ({ context }) => {
        const response = new AttributeReadResponse(node.protocol, context);
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
