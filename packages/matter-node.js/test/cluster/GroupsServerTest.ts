/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoNode } from "../../src/crypto/CryptoNode";

Crypto.get = () => new CryptoNode();

import { Time, TimeFake } from "@project-chip/matter.js/time";

Time.get = () => new TimeFake(0);

import {
    ClusterServer,
    ClusterServerObjForCluster,
    GroupsCluster,
    GroupsClusterHandler,
    Identify,
} from "@project-chip/matter.js/cluster";
import { Message, SessionType } from "@project-chip/matter.js/codec";
import { EndpointNumber, GroupId } from "@project-chip/matter.js/datatype";
import { DeviceTypes, Endpoint } from "@project-chip/matter.js/device";
import { Fabric, FabricJsonObject } from "@project-chip/matter.js/fabric";
import { StatusCode } from "@project-chip/matter.js/interaction";
import { SecureSession } from "@project-chip/matter.js/session";
import { getPromiseResolver } from "@project-chip/matter.js/util";
import * as assert from "assert";
import { callCommandOnClusterServer, createTestSessionWithFabric } from "./ClusterServerTestingUtil";

describe("Groups Server test", () => {
    let groupsServer: ClusterServerObjForCluster<typeof GroupsCluster> | undefined;
    let testFabric: Fabric | undefined;
    let testSession: SecureSession<any> | undefined;
    let endpoint: Endpoint | undefined;
    let endpoint2: Endpoint | undefined;

    // TODO make that nicer and maybe  move to a "testing support library"
    async function initializeTestEnv() {
        groupsServer = ClusterServer(GroupsCluster, { nameSupport: { nameSupport: true } }, GroupsClusterHandler());
        const identifyServer = ClusterServer(
            Identify.Cluster,
            {
                identifyTime: 100,
                identifyType: Identify.IdentifyType.None,
            },
            {
                identify: async ({ request: { identifyTime } }) => {
                    console.log(identifyTime); /* */
                },
            },
        );

        testSession = await createTestSessionWithFabric();
        testFabric = testSession.getFabric();

        endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
        endpoint.addClusterServer(groupsServer);
        endpoint.addClusterServer(identifyServer);

        endpoint2 = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(2) });
    }

    describe("Basic groups actions", () => {
        beforeAll(async () => {
            await initializeTestEnv();
        });

        it("add new group and verify storage", async () => {
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                groupsServer!,
                "addGroup",
                { groupId: GroupId(1), groupName: "Group 1" },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            const persistedData = await firstPromise;

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 0,
                response: { status: StatusCode.Success, groupId: GroupId(1) },
            });
            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const groupData = persistedData.scopedClusterData.get(GroupsCluster.id);
            assert.ok(groupData);
            assert.deepEqual(groupData, new Map([["1", new Map([["1", "Group 1"]])]]));
        });

        it("add another new group and verify storage", async () => {
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                groupsServer!,
                "addGroup",
                { groupId: GroupId(2), groupName: "Group 2" },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            const persistedData = await firstPromise;

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 0,
                response: { status: StatusCode.Success, groupId: GroupId(2) },
            });
            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const groupData = persistedData.scopedClusterData.get(GroupsCluster.id);
            assert.ok(groupData);
            assert.deepEqual(
                groupData,
                new Map([
                    [
                        "1",
                        new Map([
                            ["1", "Group 1"],
                            ["2", "Group 2"],
                        ]),
                    ],
                ]),
            );
        });

        it("add another new group on other endpoint and verify storage", async () => {
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                groupsServer!,
                "addGroup",
                { groupId: GroupId(5), groupName: "Group 5" },
                endpoint2!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            const persistedData = await firstPromise;

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 0,
                response: { status: StatusCode.Success, groupId: GroupId(5) },
            });
            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const groupData = persistedData.scopedClusterData.get(GroupsCluster.id);
            assert.ok(groupData);
            assert.deepEqual(
                groupData,
                new Map([
                    [
                        "1",
                        new Map([
                            ["1", "Group 1"],
                            ["2", "Group 2"],
                        ]),
                    ],
                    ["2", new Map([["5", "Group 5"]])],
                ]),
            );
        });

        it("get group name", async () => {
            const result = await callCommandOnClusterServer(
                groupsServer!,
                "viewGroup",
                { groupId: GroupId(1) },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 1,
                response: { status: StatusCode.Success, groupId: GroupId(1), groupName: "Group 1" },
            });
        });

        it("get group membership for no id", async () => {
            const result = await callCommandOnClusterServer(
                groupsServer!,
                "getGroupMembership",
                { groupList: [] },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 2,
                response: { capacity: 252, groupList: [GroupId(1), GroupId(2)] },
            });
        });

        it("get group membership of a defined group", async () => {
            const result = await callCommandOnClusterServer(
                groupsServer!,
                "getGroupMembership",
                { groupList: [GroupId(1)] },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 2,
                response: { capacity: 252, groupList: [GroupId(1)] },
            });
        });

        it("get group membership of two defined groups", async () => {
            const result = await callCommandOnClusterServer(
                groupsServer!,
                "getGroupMembership",
                { groupList: [GroupId(1), GroupId(2)] },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 2,
                response: { capacity: 252, groupList: [GroupId(1), GroupId(2)] },
            });
        });

        it("get group membership of a unknown group", async () => {
            const result = await callCommandOnClusterServer(
                groupsServer!,
                "getGroupMembership",
                { groupList: [GroupId(3)] },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 2,
                response: { capacity: 252, groupList: [] },
            });
        });

        it("delete group and verify storage", async () => {
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                groupsServer!,
                "removeGroup",
                { groupId: GroupId(1) },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            const persistedData = await firstPromise;

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 3,
                response: { status: StatusCode.Success, groupId: GroupId(1) },
            });
            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const groupData = persistedData.scopedClusterData.get(GroupsCluster.id);
            assert.ok(groupData);
            assert.deepEqual(
                groupData,
                new Map([
                    ["1", new Map([["2", "Group 2"]])],
                    ["2", new Map([["5", "Group 5"]])],
                ]),
            );
        });

        it("delete all groups and verify storage", async () => {
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                groupsServer!,
                "removeAllGroups",
                undefined,
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            const persistedData = await firstPromise;

            assert.deepEqual(result, { code: StatusCode.Success, responseId: 4, response: undefined });
            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const groupData = persistedData.scopedClusterData.get(GroupsCluster.id);
            assert.ok(groupData);
            assert.deepEqual(groupData, new Map([["2", new Map([["5", "Group 5"]])]]));
        });
    });

    describe("General error cases", () => {
        beforeAll(async () => {
            await initializeTestEnv();
        });

        it("error on read non existing group", async () => {
            const result = await callCommandOnClusterServer(
                groupsServer!,
                "viewGroup",
                { groupId: GroupId(1) },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.ok(result);
            assert.equal(result.code, StatusCode.Success);
            assert.equal(result.response.status, StatusCode.NotFound);
            assert.deepEqual(result.response.groupId, GroupId(1));
        });

        it("error on delete non existing group", async () => {
            const result = await callCommandOnClusterServer(
                groupsServer!,
                "removeGroup",
                { groupId: GroupId(1) },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.ok(result);
            assert.equal(result.code, StatusCode.Success);
            assert.equal(result.response.status, StatusCode.NotFound);
            assert.deepEqual(result.response.groupId, GroupId(1));
        });

        it("error on adding group with too long name", async () => {
            const result = await callCommandOnClusterServer(
                groupsServer!,
                "addGroup",
                { groupId: GroupId(1), groupName: "12345678901234567" },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.ok(result);
            assert.equal(result.code, StatusCode.Success);
            assert.equal(result.response.status, StatusCode.ConstraintError);
            assert.deepEqual(result.response.groupId, GroupId(1));
        });

        it("error on Groupcast message", async () => {
            await assert.rejects(
                async () =>
                    await callCommandOnClusterServer(
                        groupsServer!,
                        "viewGroup",
                        { groupId: GroupId(1) },
                        endpoint!,
                        testSession,
                        { packetHeader: { sessionType: SessionType.Group } } as Message,
                    ),
                {
                    message: "Groupcast not supported",
                },
            );
        });
    });

    describe("Add group while identifying success test", () => {
        beforeAll(async () => {
            await initializeTestEnv();
        });

        it("add group while identifying", async () => {
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                groupsServer!,
                "addGroupIfIdentifying",
                { groupId: GroupId(3), groupName: "Group 3" },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            const persistedData = await firstPromise;

            assert.deepEqual(result, { code: StatusCode.Success, responseId: 5, response: undefined });
            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const groupData = persistedData.scopedClusterData.get(GroupsCluster.id);
            assert.ok(groupData);
            assert.deepEqual(groupData, new Map([["1", new Map([["3", "Group 3"]])]]));
        });
    });

    describe("Add group while identifying without identifying test", () => {
        beforeAll(async () => {
            await initializeTestEnv();
            const identifyCluster = endpoint?.getClusterServer(Identify.Cluster);
            assert.ok(identifyCluster);
            identifyCluster.attributes.identifyTime.setLocal(0); // Change to not identifying
        });

        it("nothing is added because we are not identifying", async () => {
            const result = await callCommandOnClusterServer(
                groupsServer!,
                "addGroupIfIdentifying",
                { groupId: GroupId(3), groupName: "Group 3" },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, { code: StatusCode.Success, responseId: 5, response: undefined });

            const resultRead = await callCommandOnClusterServer(
                groupsServer!,
                "viewGroup",
                { groupId: GroupId(3) },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.ok(resultRead);
            assert.equal(resultRead.code, StatusCode.Success);
            assert.equal(resultRead.response.status, StatusCode.NotFound);
            assert.deepEqual(resultRead.response.groupId, GroupId(3));
        });
    });
});
