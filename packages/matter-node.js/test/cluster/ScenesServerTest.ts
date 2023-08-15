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
    OnOffCluster,
    OnOffClusterDefaultHandler,
    ScenesCluster,
    ScenesClusterHandler,
} from "@project-chip/matter.js/cluster";
import { Message, SessionType } from "@project-chip/matter.js/codec";
import { AttributeId, ClusterId, EndpointNumber, GroupId } from "@project-chip/matter.js/datatype";
import { DeviceTypes, Endpoint } from "@project-chip/matter.js/device";
import { Fabric, FabricJsonObject } from "@project-chip/matter.js/fabric";
import { StatusCode } from "@project-chip/matter.js/interaction";
import { SecureSession } from "@project-chip/matter.js/session";
import { TlvBoolean } from "@project-chip/matter.js/tlv";
import { getPromiseResolver } from "@project-chip/matter.js/util";
import * as assert from "assert";
import { callCommandOnClusterServer, createTestSessionWithFabric } from "./ClusterServerTestingUtil";

describe("Scenes Server test", () => {
    let groupsServer: ClusterServerObjForCluster<typeof GroupsCluster> | undefined;
    let scenesServer: ClusterServerObjForCluster<typeof ScenesCluster> | undefined;
    let onOffServer: ClusterServerObjForCluster<typeof OnOffCluster> | undefined;
    let testFabric: Fabric | undefined;
    let testSession: SecureSession<any> | undefined;
    let endpoint: Endpoint | undefined;

    // TODO make that nicer and maybe  move to a "testing support library"
    async function initializeTestEnv() {
        groupsServer = ClusterServer(GroupsCluster, { nameSupport: { nameSupport: true } }, GroupsClusterHandler());
        scenesServer = ClusterServer(
            ScenesCluster,
            {
                sceneCount: 0,
                currentScene: 0,
                currentGroup: GroupId(0),
                sceneValid: false,
                nameSupport: { nameSupport: true },
                lastConfiguredBy: null,
            },
            ScenesClusterHandler(),
        );
        onOffServer = ClusterServer(OnOffCluster, { onOff: true }, OnOffClusterDefaultHandler());
        testSession = await createTestSessionWithFabric();
        testFabric = testSession.getFabric();

        endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
        endpoint.addClusterServer(groupsServer);
        endpoint.addClusterServer(scenesServer);
        endpoint.addClusterServer(onOffServer);
    }

    describe("Basic scenes logic", () => {
        beforeAll(async () => {
            await initializeTestEnv();
        });

        it("add new group and scene and verify storage", async () => {
            const groupResult = await callCommandOnClusterServer(
                groupsServer!,
                "addGroup",
                { groupId: GroupId(1), groupName: "Group 1" },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );
            assert.ok(groupResult);

            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                scenesServer!,
                "addScene",
                {
                    groupId: GroupId(1),
                    sceneId: 1,
                    sceneName: "Scene 1",
                    transitionTime: 10,
                    extensionFieldSets: [
                        {
                            clusterId: ClusterId(OnOffCluster.id),
                            attributeValueList: [
                                { attributeId: AttributeId(0), attributeValue: TlvBoolean.encodeTlv(true) },
                            ],
                        },
                    ],
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            const persistedData = await firstPromise;

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 0,
                response: { status: StatusCode.Success, groupId: GroupId(1), sceneId: 1 },
            });
            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const scenesData = persistedData.scopedClusterData.get(ScenesCluster.id);
            assert.ok(scenesData);
            assert.deepEqual(
                scenesData,
                new Map([
                    [
                        "1",
                        new Map([
                            [
                                1,
                                new Map([
                                    [
                                        1,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                    value: undefined,
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 1,
                                            sceneName: "Scene 1",
                                            sceneTransitionTime: 10,
                                            scenesGroupId: 1,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                        ]),
                    ],
                ]),
            );

            assert.equal(scenesServer!.attributes.sceneCount.get(testSession!, false), 1);
        });

        it("add another scene on group 1 and verify storage", async () => {
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                scenesServer!,
                "addScene",
                {
                    groupId: GroupId(1),
                    sceneId: 2,
                    sceneName: "Scene 2",
                    transitionTime: 10,
                    extensionFieldSets: [
                        {
                            clusterId: ClusterId(OnOffCluster.id),
                            attributeValueList: [
                                { attributeId: AttributeId(0), attributeValue: TlvBoolean.encodeTlv(false) },
                            ],
                        },
                    ],
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            const persistedData = await firstPromise;

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 0,
                response: { status: StatusCode.Success, groupId: GroupId(1), sceneId: 2 },
            });
            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const scenesData = persistedData.scopedClusterData.get(ScenesCluster.id);
            assert.ok(scenesData);
            assert.deepEqual(
                scenesData,
                new Map([
                    [
                        "1",
                        new Map([
                            [
                                1,
                                new Map([
                                    [
                                        1,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                    value: undefined,
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 1,
                                            sceneName: "Scene 1",
                                            sceneTransitionTime: 10,
                                            scenesGroupId: 1,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                    [
                                        2,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: false },
                                                                    value: undefined,
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 2,
                                            sceneName: "Scene 2",
                                            sceneTransitionTime: 10,
                                            scenesGroupId: 1,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                        ]),
                    ],
                ]),
            );
            assert.equal(scenesServer!.attributes.sceneCount.get(testSession!, false), 2);
        });

        it("add another new group and scene and verify storage", async () => {
            const groupResult = await callCommandOnClusterServer(
                groupsServer!,
                "addGroup",
                { groupId: GroupId(2), groupName: "Group 2" },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );
            assert.ok(groupResult);

            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                scenesServer!,
                "addScene",
                {
                    groupId: GroupId(2),
                    sceneId: 3,
                    sceneName: "Scene 3",
                    transitionTime: 10,
                    extensionFieldSets: [
                        {
                            clusterId: ClusterId(OnOffCluster.id),
                            attributeValueList: [
                                { attributeId: AttributeId(0), attributeValue: TlvBoolean.encodeTlv(true) },
                            ],
                        },
                    ],
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            const persistedData = await firstPromise;

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 0,
                response: { status: StatusCode.Success, groupId: GroupId(2), sceneId: 3 },
            });
            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const scenesData = persistedData.scopedClusterData.get(ScenesCluster.id);
            assert.ok(scenesData);
            assert.deepEqual(
                scenesData,
                new Map([
                    [
                        "1",
                        new Map([
                            [
                                1,
                                new Map([
                                    [
                                        1,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                    value: undefined,
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 1,
                                            sceneName: "Scene 1",
                                            sceneTransitionTime: 10,
                                            scenesGroupId: 1,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                    [
                                        2,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: false },
                                                                    value: undefined,
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 2,
                                            sceneName: "Scene 2",
                                            sceneTransitionTime: 10,
                                            scenesGroupId: 1,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                            [
                                2,
                                new Map([
                                    [
                                        3,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                    value: undefined,
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 3,
                                            sceneName: "Scene 3",
                                            sceneTransitionTime: 10,
                                            scenesGroupId: 2,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                        ]),
                    ],
                ]),
            );
            assert.equal(scenesServer!.attributes.sceneCount.get(testSession!, false), 3);
        });

        it("get scene data", async () => {
            const result = await callCommandOnClusterServer(
                scenesServer!,
                "viewScene",
                { groupId: GroupId(1), sceneId: 1 },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: StatusCode.Success,
                response: {
                    extensionFieldSets: [
                        {
                            attributeValueList: [
                                {
                                    attributeId: 0,
                                    attributeValue: [
                                        { tag: undefined, typeLength: { type: 8, value: true }, value: undefined },
                                    ],
                                },
                            ],
                            clusterId: 6,
                        },
                    ],
                    groupId: 1,
                    sceneId: 1,
                    sceneName: "Scene 1",
                    status: 0,
                    transitionTime: 10,
                },
                responseId: 1,
            });
        });

        it("get scene membership", async () => {
            const result = await callCommandOnClusterServer(
                scenesServer!,
                "getSceneMembership",
                { groupId: GroupId(1) },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 6,
                response: { status: StatusCode.Success, capacity: 252, groupId: GroupId(1), sceneList: [1, 2] },
            });
        });

        it("delete scene and verify storage", async () => {
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                scenesServer!,
                "removeScene",
                { groupId: GroupId(1), sceneId: 2 },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            const persistedData = await firstPromise;

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 2,
                response: { status: StatusCode.Success, groupId: GroupId(1), sceneId: 2 },
            });
            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const scenesData = persistedData.scopedClusterData.get(ScenesCluster.id);
            assert.ok(scenesData);
            assert.deepEqual(
                scenesData,
                new Map([
                    [
                        "1",
                        new Map([
                            [
                                1,
                                new Map([
                                    [
                                        1,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                    value: undefined,
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 1,
                                            sceneName: "Scene 1",
                                            sceneTransitionTime: 10,
                                            scenesGroupId: 1,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                            [
                                2,
                                new Map([
                                    [
                                        3,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                    value: undefined,
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 3,
                                            sceneName: "Scene 3",
                                            sceneTransitionTime: 10,
                                            scenesGroupId: 2,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                        ]),
                    ],
                ]),
            );
            assert.equal(scenesServer!.attributes.sceneCount.get(testSession!, false), 2);
        });

        it("delete all scenes on one group and verify storage", async () => {
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                scenesServer!,
                "removeAllScenes",
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
            const scenesData = persistedData.scopedClusterData.get(ScenesCluster.id);
            assert.ok(scenesData);
            assert.deepEqual(
                scenesData,
                new Map([
                    [
                        "1",
                        new Map([
                            [
                                2,
                                new Map([
                                    [
                                        3,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                    value: undefined,
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 3,
                                            sceneName: "Scene 3",
                                            sceneTransitionTime: 10,
                                            scenesGroupId: 2,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                        ]),
                    ],
                ]),
            );
            assert.equal(scenesServer!.attributes.sceneCount.get(testSession!, false), 1);
        });

        it("delete one group and verify storage", async () => {
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                groupsServer!,
                "removeGroup",
                { groupId: GroupId(2) },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            const persistedData = await firstPromise;

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 3,
                response: { status: StatusCode.Success, groupId: GroupId(2) },
            });
            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const scenesData = persistedData.scopedClusterData.get(ScenesCluster.id);
            assert.ok(scenesData);
            assert.deepEqual(scenesData, new Map([["1", new Map([])]]));
            assert.equal(scenesServer!.attributes.sceneCount.get(testSession!, false), 0);
        });
    });

    describe("General error cases", () => {
        beforeAll(async () => {
            await initializeTestEnv();
        });

        it("error on read scene on non existence group", async () => {
            const result = await callCommandOnClusterServer(
                scenesServer!,
                "viewScene",
                { groupId: GroupId(1), sceneId: 1 },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.ok(result);
            assert.equal(result.code, StatusCode.Success);
            assert.equal(result.response.status, StatusCode.InvalidCommand);
            assert.deepEqual(result.response.groupId, GroupId(1));
            assert.deepEqual(result.response.sceneId, 1);
        });

        it("error on read non existent scene", async () => {
            const resultGroup = await callCommandOnClusterServer(
                groupsServer!,
                "addGroup",
                { groupId: GroupId(1), groupName: "Group 1" },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );
            assert.ok(resultGroup);

            const result = await callCommandOnClusterServer(
                scenesServer!,
                "viewScene",
                { groupId: GroupId(1), sceneId: 1 },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.ok(result);
            assert.equal(result.code, StatusCode.Success);
            assert.equal(result.response.status, StatusCode.NotFound);
            assert.deepEqual(result.response.groupId, GroupId(1));
            assert.deepEqual(result.response.sceneId, 1);
        });

        it("error on delete non existing scene", async () => {
            const result = await callCommandOnClusterServer(
                scenesServer!,
                "removeScene",
                { groupId: GroupId(1), sceneId: 1 },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.ok(result);
            assert.equal(result.code, StatusCode.Success);
            assert.equal(result.response.status, StatusCode.NotFound);
            assert.deepEqual(result.response.groupId, GroupId(1));
            assert.deepEqual(result.response.sceneId, 1);
        });

        it("error on adding scene with too long name", async () => {
            const result = await callCommandOnClusterServer(
                scenesServer!,
                "addScene",
                {
                    groupId: GroupId(1),
                    sceneId: 1,
                    sceneName: "12345678901234567",
                    transitionTime: 2,
                    extensionFieldSets: [],
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.ok(result);
            assert.equal(result.code, StatusCode.Success);
            assert.equal(result.response.status, StatusCode.ConstraintError);
            assert.deepEqual(result.response.groupId, GroupId(1));
            assert.deepEqual(result.response.sceneId, 1);
        });

        it("error on Groupcast message", async () => {
            await assert.rejects(
                async () =>
                    await callCommandOnClusterServer(
                        scenesServer!,
                        "viewScene",
                        { groupId: GroupId(1), sceneId: 1 },
                        endpoint!,
                        testSession,
                        { packetHeader: { sessionType: SessionType.Group } } as Message,
                    ),
                {
                    message: "Groupcast not supported",
                },
            );
        });

        it("recallScene on not existing group id", async () => {
            await assert.rejects(
                async () =>
                    await callCommandOnClusterServer(
                        scenesServer!,
                        "recallScene",
                        {
                            groupId: GroupId(5),
                            sceneId: 1,
                        },
                        endpoint!,
                        testSession,
                        { packetHeader: { sessionType: SessionType.Unicast } } as Message,
                    ),
                {
                    message: "(133) Group 5 does not exist on this endpoint",
                    code: StatusCode.InvalidCommand,
                },
            );
        });

        it("recallScene on not existing scene id", async () => {
            await assert.rejects(
                async () =>
                    await callCommandOnClusterServer(
                        scenesServer!,
                        "recallScene",
                        {
                            groupId: GroupId(1),
                            sceneId: 10,
                        },
                        endpoint!,
                        testSession,
                        { packetHeader: { sessionType: SessionType.Unicast } } as Message,
                    ),
                {
                    message: "(139) Scene 10 does not exist for group 1",
                    code: StatusCode.NotFound,
                },
            );
        });
    });

    describe("Scene Logic tests", () => {
        beforeAll(async () => {
            await initializeTestEnv();
        });

        it("storeScene", async () => {
            assert.equal(scenesServer?.attributes.currentScene.getLocal(), 0);
            assert.deepEqual(scenesServer?.attributes.currentGroup.getLocal(), GroupId(0));

            const groupResult = await callCommandOnClusterServer(
                groupsServer!,
                "addGroup",
                { groupId: GroupId(1), groupName: "Group 1" },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );
            assert.ok(groupResult);

            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                scenesServer!,
                "storeScene",
                {
                    groupId: GroupId(1),
                    sceneId: 1,
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            const persistedData = await firstPromise;

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 4,
                response: { status: StatusCode.Success, groupId: GroupId(1), sceneId: 1 },
            });
            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const scenesData = persistedData.scopedClusterData.get(ScenesCluster.id);
            assert.ok(scenesData);
            assert.deepEqual(
                scenesData,
                new Map([
                    [
                        "1",
                        new Map([
                            [
                                1,
                                new Map([
                                    [
                                        1,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 1,
                                            sceneName: "",
                                            sceneTransitionTime: 0,
                                            scenesGroupId: 1,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                        ]),
                    ],
                ]),
            );

            assert.equal(scenesServer?.attributes.sceneValid.get(testSession!, false), true);
            assert.equal(scenesServer?.attributes.currentScene.getLocal(), 1);
            assert.deepEqual(scenesServer?.attributes.currentGroup.getLocal(), GroupId(1));
        });

        it("copy one Scene error to group does not exist", async () => {
            const result = await callCommandOnClusterServer(
                scenesServer!,
                "copyScene",
                {
                    mode: 0,
                    groupIdentifierFrom: GroupId(5),
                    sceneIdentifierFrom: 1,
                    groupIdentifierTo: GroupId(1),
                    sceneIdentifierTo: 2,
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 66,
                response: {
                    status: StatusCode.InvalidCommand,
                    groupIdentifierFrom: GroupId(5),
                    sceneIdentifierFrom: 1,
                },
            });
        });

        it("copy one Scene same group", async () => {
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                scenesServer!,
                "copyScene",
                {
                    mode: 0,
                    groupIdentifierFrom: GroupId(1),
                    sceneIdentifierFrom: 1,
                    groupIdentifierTo: GroupId(1),
                    sceneIdentifierTo: 2,
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 66,
                response: { status: StatusCode.Success, groupIdentifierFrom: GroupId(1), sceneIdentifierFrom: 1 },
            });

            const persistedData = await firstPromise;

            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const scenesData = persistedData.scopedClusterData.get(ScenesCluster.id);
            assert.ok(scenesData);
            assert.deepEqual(
                scenesData,
                new Map([
                    [
                        "1",
                        new Map([
                            [
                                1,
                                new Map([
                                    [
                                        1,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 1,
                                            sceneName: "",
                                            sceneTransitionTime: 0,
                                            scenesGroupId: 1,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                    [
                                        2,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 2,
                                            sceneName: "",
                                            sceneTransitionTime: 0,
                                            scenesGroupId: 1,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                        ]),
                    ],
                ]),
            );
        });

        it("copy one Scene other group", async () => {
            const groupResult = await callCommandOnClusterServer(
                groupsServer!,
                "addGroup",
                { groupId: GroupId(2), groupName: "Group 2" },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );
            assert.ok(groupResult);

            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                scenesServer!,
                "copyScene",
                {
                    mode: 0,
                    groupIdentifierFrom: GroupId(1),
                    sceneIdentifierFrom: 1,
                    groupIdentifierTo: GroupId(2),
                    sceneIdentifierTo: 3,
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 66,
                response: { status: StatusCode.Success, groupIdentifierFrom: GroupId(1), sceneIdentifierFrom: 1 },
            });

            const persistedData = await firstPromise;

            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const scenesData = persistedData.scopedClusterData.get(ScenesCluster.id);
            assert.ok(scenesData);
            assert.deepEqual(
                scenesData,
                new Map([
                    [
                        "1",
                        new Map([
                            [
                                1,
                                new Map([
                                    [
                                        1,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 1,
                                            sceneName: "",
                                            sceneTransitionTime: 0,
                                            scenesGroupId: 1,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                    [
                                        2,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 2,
                                            sceneName: "",
                                            sceneTransitionTime: 0,
                                            scenesGroupId: 1,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                            [
                                2,
                                new Map([
                                    [
                                        3,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 3,
                                            sceneName: "",
                                            sceneTransitionTime: 0,
                                            scenesGroupId: 2,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                        ]),
                    ],
                ]),
            );
        });

        it("copy all Scenes to other group", async () => {
            const groupResult = await callCommandOnClusterServer(
                groupsServer!,
                "addGroup",
                { groupId: GroupId(3), groupName: "Group 3" },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );
            assert.ok(groupResult);

            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<FabricJsonObject>();
            testFabric?.setPersistCallback(() => firstResolver(testFabric!.toStorageObject()));

            const result = await callCommandOnClusterServer(
                scenesServer!,
                "copyScene",
                {
                    mode: { copyAllScenes: true },
                    groupIdentifierFrom: GroupId(1),
                    sceneIdentifierFrom: 0,
                    groupIdentifierTo: GroupId(3),
                    sceneIdentifierTo: 0,
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: StatusCode.Success,
                responseId: 66,
                response: { status: StatusCode.Success, groupIdentifierFrom: GroupId(1), sceneIdentifierFrom: 0 },
            });

            const persistedData = await firstPromise;

            assert.ok(persistedData);
            assert.ok(persistedData.scopedClusterData);
            const scenesData = persistedData.scopedClusterData.get(ScenesCluster.id);
            assert.ok(scenesData);
            assert.deepEqual(
                scenesData,
                new Map([
                    [
                        "1",
                        new Map([
                            [
                                1,
                                new Map([
                                    [
                                        1,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 1,
                                            sceneName: "",
                                            sceneTransitionTime: 0,
                                            scenesGroupId: 1,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                    [
                                        2,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 2,
                                            sceneName: "",
                                            sceneTransitionTime: 0,
                                            scenesGroupId: 1,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                            [
                                2,
                                new Map([
                                    [
                                        3,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 3,
                                            sceneName: "",
                                            sceneTransitionTime: 0,
                                            scenesGroupId: 2,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                            [
                                3,
                                new Map([
                                    [
                                        1,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 1,
                                            sceneName: "",
                                            sceneTransitionTime: 0,
                                            scenesGroupId: 3,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                    [
                                        2,
                                        {
                                            extensionFieldSets: [
                                                {
                                                    attributeValueList: [
                                                        {
                                                            attributeId: 0,
                                                            attributeValue: [
                                                                {
                                                                    tag: undefined,
                                                                    typeLength: { type: 8, value: true },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    clusterId: 6,
                                                },
                                            ],
                                            sceneId: 2,
                                            sceneName: "",
                                            sceneTransitionTime: 0,
                                            scenesGroupId: 3,
                                            transitionTime100ms: 0,
                                        },
                                    ],
                                ]),
                            ],
                        ]),
                    ],
                ]),
            );
        });

        it("recallScene", async () => {
            onOffServer?.attributes.onOff.setLocal(false);
            assert.equal(onOffServer?.attributes.onOff.getLocal(), false);
            assert.deepEqual(scenesServer?.attributes.currentGroup.getLocal(), GroupId(1));
            assert.equal(scenesServer?.attributes.currentScene.getLocal(), 1);

            assert.equal(scenesServer?.attributes.sceneValid.get(testSession!, false), false);

            const result = await callCommandOnClusterServer(
                scenesServer!,
                "recallScene",
                {
                    groupId: GroupId(3),
                    sceneId: 2,
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, { code: StatusCode.Success, responseId: 5, response: undefined });
            assert.equal(onOffServer?.attributes.onOff.getLocal(), true);
            assert.deepEqual(scenesServer?.attributes.currentGroup.getLocal(), GroupId(3));
            assert.equal(scenesServer?.attributes.currentScene.getLocal(), 2);
            assert.equal(scenesServer?.attributes.sceneValid.get(testSession!, false), true);
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
            const scenesData = persistedData.scopedClusterData.get(ScenesCluster.id);
            assert.ok(scenesData);
            assert.deepEqual(scenesData, new Map([["1", new Map([])]]));
        });
    });
});
