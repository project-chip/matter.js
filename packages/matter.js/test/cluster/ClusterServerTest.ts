/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { AdminCommissioningCluster } from "../../src/cluster/AdminCommissioningCluster.js";
import { GroupsCluster } from "../../src/cluster/GroupsCluster.js";
import { AttributeId } from "../../src/datatype/AttributeId.js";
import { CommandId } from "../../src/datatype/CommandId.js";
import { FabricIndex } from "../../src/datatype/FabricIndex.js";
import { ClusterServer } from "../../src/protocol/interaction/InteractionServer.js";
import { IdentifyCluster, IdentifyType } from "../../src/cluster/index.js";


describe("ClusterServer structure", () => {
    describe("check Server and global attributes", () => {
        it("AdminCommissioningCluster without optional commands", () => {
            const server = ClusterServer(
                AdminCommissioningCluster,
                {
                    windowStatus: 0,
                    adminFabricIndex: new FabricIndex(1),
                    adminVendorId: null
                },
                {
                    openCommissioningWindow: async () => { /* dummy */ },
                    revokeCommissioning: async () => { /* dummy */ },
                }
            );
            assert.ok(server);
            // as any is trick because these attributes are not officially exposed by typings
            assert.deepEqual((server.attributes as any).featureMap.get(), { basic: false });
            assert.deepEqual((server.attributes as any).attributeList.get(), [new AttributeId(0), new AttributeId(1), new AttributeId(2), new AttributeId(65533), new AttributeId(65532), new AttributeId(65531), new AttributeId(65529), new AttributeId(65528)]);
            assert.deepEqual((server.attributes as any).acceptedCommandList.get(), [new CommandId(0), new CommandId(2)]);
            assert.deepEqual((server.attributes as any).generatedCommandList.get(), []);
        });

        it("IdentifyCluster including optional commands", () => {
            const server = ClusterServer(
                IdentifyCluster,
                {
                    identifyTime: 100,
                    identifyType: IdentifyType.None
                },
                {
                    identify: async () => { /* dummy */ },
                    triggerEffect: async () => { /* dummy */ },
                }
            );
            assert.ok(server);
            // as any is trick because these attributes are not officially exposed by typings
            assert.deepEqual((server.attributes as any).featureMap.get(), {});
            assert.deepEqual((server.attributes as any).attributeList.get(), [new AttributeId(0), new AttributeId(1), new AttributeId(65533), new AttributeId(65532), new AttributeId(65531), new AttributeId(65529), new AttributeId(65528)]);
            assert.deepEqual((server.attributes as any).acceptedCommandList.get(), [new CommandId(0), new CommandId(0x40)]);
            assert.deepEqual((server.attributes as any).generatedCommandList.get(), []);
        });

        it("IdentifyCluster including optional commands", () => {
            const server = ClusterServer(
                IdentifyCluster,
                {
                    identifyTime: 100,
                    identifyType: IdentifyType.None
                },
                {
                    identify: async () => { /* dummy */ },
                    triggerEffect: async () => { /* dummy */ },
                }
            );
            assert.ok(server);
            // as any is trick because these attributes are not officially exposed by typings
            assert.deepEqual((server.attributes as any).featureMap.get(), {});
            assert.deepEqual((server.attributes as any).attributeList.get(), [new AttributeId(0), new AttributeId(1), new AttributeId(65533), new AttributeId(65532), new AttributeId(65531), new AttributeId(65529), new AttributeId(65528)]);
            assert.deepEqual((server.attributes as any).acceptedCommandList.get(), [new CommandId(0), new CommandId(0x40)]);
            assert.deepEqual((server.attributes as any).generatedCommandList.get(), []);
        });

        it("IdentifyCluster without optional commands", () => {
            const server = ClusterServer(
                IdentifyCluster,
                {
                    identifyTime: 100,
                    identifyType: IdentifyType.None
                },
                {
                    identify: async () => { /* dummy */ },
                }
            );
            assert.ok(server);
            // as any is trick because these attributes are not officially exposed by typings
            assert.deepEqual((server.attributes as any).featureMap.get(), {});
            assert.deepEqual((server.attributes as any).attributeList.get(), [new AttributeId(0), new AttributeId(1), new AttributeId(65533), new AttributeId(65532), new AttributeId(65531), new AttributeId(65529), new AttributeId(65528)]);
            assert.deepEqual((server.attributes as any).acceptedCommandList.get(), [new CommandId(0)]);
            assert.deepEqual((server.attributes as any).generatedCommandList.get(), []);
        });

        it("GroupsCluster", () => {
            const server = ClusterServer(
                GroupsCluster,
                {
                    nameSupport: { groupNames: true },
                },
                {
                    addGroup: async () => { throw new Error("not implemented"); },
                    addGroupIfIdentifying: async () => { /* dummy */ },
                    getGroupMembership: async () => { throw new Error("not implemented"); },
                    removeAllGroups: async () => { /* dummy */ },
                    removeGroup: async () => { throw new Error("not implemented"); },
                    viewGroup: async () => { throw new Error("not implemented"); },
                }
            );
            assert.ok(server);
            // as any is trick because these attributes are not officially exposed by typings
            assert.deepEqual((server.attributes as any).featureMap.get(), {});
            assert.deepEqual((server.attributes as any).attributeList.get(), [new AttributeId(0), new AttributeId(65533), new AttributeId(65532), new AttributeId(65531), new AttributeId(65529), new AttributeId(65528)]);
            assert.deepEqual((server.attributes as any).acceptedCommandList.get(), [new CommandId(0), new CommandId(1), new CommandId(2), new CommandId(3), new CommandId(4), new CommandId(5)]);
            assert.deepEqual((server.attributes as any).generatedCommandList.get(), [new CommandId(0), new CommandId(1), new CommandId(2), new CommandId(3)]);
        });
    });
});
