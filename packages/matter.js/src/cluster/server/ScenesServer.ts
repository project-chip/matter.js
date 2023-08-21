/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SessionType } from "../../codec/MessageCodec.js";
import { NotImplementedError } from "../../common/MatterError.js";
import { GroupId } from "../../datatype/GroupId.js";
import { Fabric } from "../../fabric/Fabric.js";
import { StatusResponseError } from "../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../protocol/interaction/InteractionProtocol.js";
import { assertSecureSession } from "../../session/SecureSession.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { Scenes, ScenesCluster } from "../definitions/ScenesCluster.js";
import { ClusterServer } from "./ClusterServer.js";
import { asClusterServerInternal, ClusterServerHandlers } from "./ClusterServerTypes.js";
import { GroupsManager } from "./GroupsServer.js";

interface scenesTableEntry {
    /** The group identifier for which this scene applies, or 0 if the scene is not associated with a group. */
    scenesGroupId: number;

    /** The identifier, unique within this group, which is used to identify this scene. */
    sceneId: number;

    /** The name of the scene (optional) */
    sceneName?: string;

    /** The amount of time, in seconds, it will take for a cluster to change from its current state to the requested state. */
    sceneTransitionTime: number;

    /**
     * See the Scene Table Extensions subsections of individual clusters. A Scene Table Extension SHALL only use attributes
     * marked with "S" in the Quality column of the cluster definition. Each extension field set holds a set of values of
     * these attributes for a cluster implemented on the same endpoint. The sum of all such sets defines a scene.
     */
    extensionFieldSets: TypeFromSchema<typeof Scenes.TlvExtensionFieldSet>[];

    /** Together with the SceneTransitionTime field, this field allows the transition time to be specified in tenths of a second. */
    transitionTime100ms: number;
}

export class ScenesManager {
    static getEndpointScenes(
        fabric: Fabric,
        endpointId: number,
    ): Map<number, Map<number, scenesTableEntry>> | undefined {
        return fabric.getScopedClusterDataValue<Map<number, Map<number, scenesTableEntry>>>(
            ScenesCluster,
            endpointId.toString(),
        );
    }

    static setEndpointScenes(
        fabric: Fabric,
        endpointId: number,
        endpointScenes: Map<number, Map<number, scenesTableEntry>>,
    ) {
        fabric.setScopedClusterDataValue(ScenesCluster, endpointId.toString(), endpointScenes);
    }

    static setScenes(fabric: Fabric, endpointId: number, sceneEntries: scenesTableEntry[]) {
        let endpointScenes = ScenesManager.getEndpointScenes(fabric, endpointId);
        if (endpointScenes === undefined) {
            endpointScenes = new Map<number, Map<number, scenesTableEntry>>();
        }

        for (const sceneEntry of sceneEntries) {
            const { scenesGroupId, sceneId } = sceneEntry;
            let scenesGroupIdMap = endpointScenes.get(scenesGroupId);
            if (scenesGroupIdMap === undefined) {
                scenesGroupIdMap = new Map<number, scenesTableEntry>();
                endpointScenes.set(scenesGroupId, scenesGroupIdMap);
            }

            scenesGroupIdMap.set(sceneId, sceneEntry);
        }

        ScenesManager.setEndpointScenes(fabric, endpointId, endpointScenes);
    }

    static getSceneEntry(
        fabric: Fabric,
        endpointId: number,
        groupId: GroupId,
        sceneId: number,
    ): scenesTableEntry | undefined {
        return ScenesManager.getEndpointScenes(fabric, endpointId)?.get(groupId)?.get(sceneId);
    }

    static getAllScenes(fabric: Fabric, endpointId: number, groupId: GroupId): scenesTableEntry[] {
        const endpointScenes = ScenesManager.getEndpointScenes(fabric, endpointId);
        if (endpointScenes === undefined) return [];
        return Array.from(endpointScenes.get(groupId)?.values() ?? []);
    }

    static removeScene(fabric: Fabric, endpointId: number, groupId: GroupId, sceneId: number): boolean {
        const endpointScenes = ScenesManager.getEndpointScenes(fabric, endpointId);
        if (endpointScenes !== undefined) {
            const groupScenes = endpointScenes.get(groupId);
            if (groupScenes !== undefined) {
                if (groupScenes.delete(sceneId)) {
                    fabric.persist(); // persist scoped cluster data changes
                    return true;
                }
            }
        }
        return false;
    }

    static removeAllScenesForGroup(fabric: Fabric, endpointId: number, groupId: number) {
        const endpointScenes = ScenesManager.getEndpointScenes(fabric, endpointId);
        if (endpointScenes !== undefined) {
            if (endpointScenes.delete(groupId)) {
                fabric.persist(); // persist scoped cluster data changes
            }
        }
    }

    static removeAllNonGlobalScenesForEndpoint(fabric: Fabric, endpointId: number) {
        const endpointScenes = ScenesManager.getEndpointScenes(fabric, endpointId);
        if (endpointScenes !== undefined) {
            endpointScenes.forEach((_groupScenes, groupId) => {
                if (groupId !== 0) {
                    endpointScenes.delete(groupId);
                }
            });
            fabric.persist(); // persist scoped cluster data changes
        }
    }
}

export const ScenesClusterHandler: () => ClusterServerHandlers<typeof ScenesCluster> = () => {
    const addSceneLogic = (
        endpointId: number,
        groupId: GroupId,
        sceneId: number,
        sceneTransitionTime: number,
        sceneName: string,
        extensionFieldSets: any,
        transitionTime100ms: number,
        fabric: Fabric,
    ) => {
        if (groupId !== 0 && !GroupsManager.hasGroup(fabric, endpointId, groupId)) {
            return { status: StatusCode.InvalidCommand, groupId, sceneId };
        }

        if (groupId < 1 || sceneId < 1) {
            return { status: StatusCode.ConstraintError, groupId, sceneId };
        }
        if (groupId > 0xfff7) {
            return { status: StatusCode.ConstraintError, groupId, sceneId };
        }
        if (sceneName.length > 16) {
            return { status: StatusCode.ConstraintError, groupId, sceneId };
        }

        ScenesManager.setScenes(fabric, endpointId, [
            {
                scenesGroupId: groupId,
                sceneId,
                sceneName,
                sceneTransitionTime,
                extensionFieldSets,
                transitionTime100ms,
            },
        ]);

        return { status: StatusCode.Success, groupId, sceneId };
    };

    return {
        addScene: async ({
            request: { groupId, sceneId, transitionTime, sceneName, extensionFieldSets },
            attributes: { sceneCount },
            session,
            message: {
                packetHeader: { sessionType },
            },
            endpoint,
        }) => {
            if (sessionType !== SessionType.Unicast) {
                throw new NotImplementedError("Groupcast not supported");
                // TODO: When Unicast we generate a response, else not
            }

            assertSecureSession(session);
            const result = addSceneLogic(
                endpoint.getId(),
                groupId,
                sceneId,
                transitionTime,
                sceneName,
                extensionFieldSets,
                0,
                session.getAssociatedFabric(),
            );
            if (result.status === StatusCode.Success) {
                sceneCount.updated(session);
            }
            return result;
        },

        viewScene: async ({
            request: { groupId, sceneId },
            session,
            message: {
                packetHeader: { sessionType },
            },
            endpoint,
        }) => {
            if (sessionType !== SessionType.Unicast) {
                throw new NotImplementedError("Groupcast not supported");
                // TODO: When Unicast we generate a response, else not
            }

            assertSecureSession(session);
            const fabric = session.getAssociatedFabric();

            if (groupId !== 0 && !GroupsManager.hasGroup(fabric, endpoint.getId(), groupId)) {
                return { status: StatusCode.InvalidCommand, groupId, sceneId };
            }

            const sceneEntry = ScenesManager.getSceneEntry(fabric, endpoint.getId(), groupId, sceneId);
            if (sceneEntry === undefined) {
                return { status: StatusCode.NotFound, groupId, sceneId };
            }
            const { sceneName, sceneTransitionTime, extensionFieldSets } = sceneEntry;

            return {
                status: StatusCode.Success,
                groupId,
                sceneId,
                sceneName,
                transitionTime: sceneTransitionTime,
                extensionFieldSets,
            };
        },

        removeScene: async ({
            request: { groupId, sceneId },
            attributes: { sceneCount },
            session,
            message: {
                packetHeader: { sessionType },
            },
            endpoint,
        }) => {
            if (sessionType !== SessionType.Unicast) {
                throw new NotImplementedError("Groupcast not supported");
                // TODO: When Unicast we generate a response, else not
            }

            assertSecureSession(session);
            const fabric = session.getAssociatedFabric();

            if (groupId !== 0 && !GroupsManager.hasGroup(fabric, endpoint.getId(), groupId)) {
                return { status: StatusCode.InvalidCommand, groupId, sceneId };
            }

            if (ScenesManager.removeScene(fabric, endpoint.getId(), groupId, sceneId)) {
                sceneCount.updated(session);
                return { status: StatusCode.Success, groupId, sceneId };
            }
            return { status: StatusCode.NotFound, groupId, sceneId };
        },

        removeAllScenes: async ({
            request: { groupId },
            session,
            message: {
                packetHeader: { sessionType },
            },
            endpoint,
        }) => {
            if (sessionType !== SessionType.Unicast) {
                throw new NotImplementedError("Groupcast not supported");
                // TODO: When Unicast we generate a response, else not
            }

            assertSecureSession(session);
            const fabric = session.getAssociatedFabric();

            if (groupId !== 0 && !GroupsManager.hasGroup(fabric, endpoint.getId(), groupId)) {
                return { status: StatusCode.InvalidCommand, groupId };
            }

            ScenesManager.removeAllScenesForGroup(fabric, endpoint.getId(), groupId);

            return { status: StatusCode.Success, groupId };
        },

        storeScene: async ({
            request: { groupId, sceneId },
            session,
            attributes: { currentScene, currentGroup, sceneValid },
            message: {
                packetHeader: { sessionType },
            },
            endpoint,
        }) => {
            if (sessionType !== SessionType.Unicast) {
                throw new NotImplementedError("Groupcast not supported");
                // TODO: When Unicast we generate a response, else not
            }

            assertSecureSession(session);
            const fabric = session.getAssociatedFabric();

            if (groupId !== 0 && !GroupsManager.hasGroup(fabric, endpoint.getId(), groupId)) {
                return { status: StatusCode.InvalidCommand, groupId, sceneId };
            }

            const extensionFieldSets = new Array<TypeFromSchema<typeof Scenes.TlvExtensionFieldSet>>();
            endpoint.getAllClusterServers().forEach(cluster => {
                const attributeValueList = asClusterServerInternal(cluster)._getSceneExtensionFieldSets();
                if (attributeValueList.length) {
                    extensionFieldSets.push({ clusterId: cluster.id, attributeValueList });
                }
            });

            const newSceneEntry = {
                scenesGroupId: groupId,
                sceneId,
                sceneName: "",
                sceneTransitionTime: 0,
                extensionFieldSets: extensionFieldSets,
                transitionTime100ms: 0,
            };

            const existingSceneEntry = ScenesManager.getSceneEntry(fabric, endpoint.getId(), groupId, sceneId);
            if (existingSceneEntry !== undefined) {
                newSceneEntry.sceneName = existingSceneEntry.sceneName ?? "";
                newSceneEntry.sceneTransitionTime = existingSceneEntry.sceneTransitionTime ?? 0;
            }

            ScenesManager.setScenes(fabric, endpoint.getId(), [newSceneEntry]);

            currentScene.setLocal(sceneId);
            currentGroup.setLocal(groupId);
            sceneValid.updated(session);

            return { status: StatusCode.Success, groupId, sceneId };
        },

        recallScene: async ({
            request: { groupId, sceneId, transitionTime },
            attributes: { currentScene, currentGroup, sceneValid },
            session,
            endpoint,
        }) => {
            assertSecureSession(session);
            const fabric = session.getAssociatedFabric();

            if (groupId !== 0 && !GroupsManager.hasGroup(fabric, endpoint.getId(), groupId)) {
                throw new StatusResponseError(
                    `Group ${groupId} does not exist on this endpoint`,
                    StatusCode.InvalidCommand,
                );
            }

            const existingSceneEntry = ScenesManager.getSceneEntry(fabric, endpoint.getId(), groupId, sceneId);
            if (existingSceneEntry === undefined) {
                throw new StatusResponseError(
                    `Scene ${sceneId} does not exist for group ${groupId}`,
                    StatusCode.NotFound,
                );
            }

            const usedTransitionTime =
                transitionTime ?? existingSceneEntry.sceneTransitionTime + existingSceneEntry.transitionTime100ms / 10;

            existingSceneEntry.extensionFieldSets.forEach(clusterData => {
                const { clusterId, attributeValueList } = clusterData;
                const cluster = endpoint.getClusterServerById(clusterId);
                if (cluster !== undefined) {
                    asClusterServerInternal(cluster)._setSceneExtensionFieldSets(
                        attributeValueList,
                        usedTransitionTime,
                    );
                }
            });
            currentScene.setLocal(sceneId);
            currentGroup.setLocal(groupId);
            sceneValid.updated(session);
        },

        getSceneMembership: async ({
            request: { groupId },
            session,
            message: {
                packetHeader: { sessionType },
            },
            endpoint,
        }) => {
            if (sessionType !== SessionType.Unicast) {
                throw new NotImplementedError("Groupcast not supported");
                // TODO: When Unicast we generate a response, else not
            }

            assertSecureSession(session);
            const fabric = session.getAssociatedFabric();

            const endpointScenes = ScenesManager.getAllScenes(fabric, endpoint.getId(), groupId);
            const capacity = endpointScenes.length < 0xff ? 0xfe - endpointScenes.length : 0;

            if (groupId !== 0 && !GroupsManager.hasGroup(fabric, endpoint.getId(), groupId)) {
                return { status: StatusCode.InvalidCommand, groupId, capacity };
            }

            const sceneList = endpointScenes.map(({ sceneId }) => sceneId);
            return { status: StatusCode.Success, groupId, capacity, sceneList };
        },

        enhancedAddScene: async ({
            request: { groupId, sceneId, transitionTime, sceneName, extensionFieldSets },
            attributes: { sceneCount },
            session,
            message: {
                packetHeader: { sessionType },
            },
            endpoint,
        }) => {
            if (sessionType !== SessionType.Unicast) {
                throw new NotImplementedError("Groupcast not supported");
                // TODO: When Unicast we generate a response, else not
            }

            assertSecureSession(session);
            const result = addSceneLogic(
                endpoint.getId(),
                groupId,
                sceneId,
                Math.floor(transitionTime / 10),
                sceneName,
                extensionFieldSets,
                transitionTime % 10,
                session.getAssociatedFabric(),
            );
            if (result.status === StatusCode.Success) {
                sceneCount.updated(session);
            }
            return result;
        },

        enhancedViewScene: async ({
            request: { groupId, sceneId },
            session,
            message: {
                packetHeader: { sessionType },
            },
            endpoint,
        }) => {
            if (sessionType !== SessionType.Unicast) {
                throw new NotImplementedError("Groupcast not supported");
                // TODO: When Unicast we generate a response, else not
            }

            assertSecureSession(session);
            const fabric = session.getAssociatedFabric();

            if (groupId !== 0 && !GroupsManager.hasGroup(fabric, endpoint.getId(), groupId)) {
                return { status: StatusCode.InvalidCommand, groupId, sceneId };
            }

            const sceneEntry = ScenesManager.getSceneEntry(fabric, endpoint.getId(), groupId, sceneId);
            if (sceneEntry === undefined) {
                return { status: StatusCode.NotFound, groupId, sceneId };
            }
            const { sceneName, sceneTransitionTime, transitionTime100ms, extensionFieldSets } = sceneEntry;
            return {
                status: StatusCode.Success,
                groupId,
                sceneId,
                sceneName,
                transitionTime: sceneTransitionTime * 10 + transitionTime100ms,
                extensionFieldSets,
            };
        },

        copyScene: async ({
            request: { mode, groupIdentifierFrom, sceneIdentifierFrom, groupIdentifierTo, sceneIdentifierTo },
            attributes: { sceneCount },
            session,
            message: {
                packetHeader: { sessionType },
            },
            endpoint,
        }) => {
            if (sessionType !== SessionType.Unicast) {
                throw new NotImplementedError("Groupcast not supported");
                // TODO: When Unicast we generate a response, else not
            }

            assertSecureSession(session);
            const fabric = session.getAssociatedFabric();

            if (groupIdentifierFrom !== 0 && !GroupsManager.hasGroup(fabric, endpoint.getId(), groupIdentifierFrom)) {
                return { status: StatusCode.InvalidCommand, groupIdentifierFrom, sceneIdentifierFrom };
            }
            if (groupIdentifierTo !== 0 && !GroupsManager.hasGroup(fabric, endpoint.getId(), groupIdentifierTo)) {
                return { status: StatusCode.InvalidCommand, groupIdentifierFrom, sceneIdentifierFrom };
            }

            if (mode.copyAllScenes) {
                // All scenes of group are copied. Ignore sceneIdFrom and sceneIdTo
                const sceneEntries = ScenesManager.getAllScenes(fabric, endpoint.getId(), groupIdentifierFrom);
                const newSceneEntries = sceneEntries.map(
                    ({ sceneId, sceneName, sceneTransitionTime, extensionFieldSets, transitionTime100ms }) => ({
                        scenesGroupId: groupIdentifierTo,
                        sceneId,
                        sceneName,
                        sceneTransitionTime,
                        extensionFieldSets,
                        transitionTime100ms,
                    }),
                );
                ScenesManager.setScenes(fabric, endpoint.getId(), newSceneEntries);
            } else {
                const sceneEntryFrom = ScenesManager.getSceneEntry(
                    fabric,
                    endpoint.getId(),
                    groupIdentifierFrom,
                    sceneIdentifierFrom,
                );
                if (sceneEntryFrom === undefined) {
                    return { status: StatusCode.NotFound, groupIdentifierFrom, sceneIdentifierFrom };
                }
                const { sceneName, sceneTransitionTime, transitionTime100ms, extensionFieldSets } = sceneEntryFrom;
                ScenesManager.setScenes(fabric, endpoint.getId(), [
                    {
                        scenesGroupId: groupIdentifierTo,
                        sceneId: sceneIdentifierTo,
                        sceneName,
                        sceneTransitionTime,
                        extensionFieldSets,
                        transitionTime100ms,
                    },
                ]);
            }

            sceneCount.updated(session);

            return { status: StatusCode.Success, groupIdentifierFrom, sceneIdentifierFrom };
        },

        sceneValidAttributeGetter: ({ session, attributes: { currentScene, currentGroup }, endpoint }) => {
            if (session === undefined || endpoint === undefined) {
                return false;
            }
            assertSecureSession(session);
            const fabric = session.getAssociatedFabric();

            const existingSceneEntry = ScenesManager.getSceneEntry(
                fabric,
                endpoint.getId(),
                currentGroup.getLocal(),
                currentScene.getLocal(),
            );
            if (existingSceneEntry === undefined) {
                return false;
            }

            for (const clusterData of existingSceneEntry.extensionFieldSets) {
                const { clusterId, attributeValueList } = clusterData;
                const cluster = endpoint.getClusterServerById(clusterId);
                if (cluster !== undefined) {
                    if (!asClusterServerInternal(cluster)._verifySceneExtensionFieldSets(attributeValueList)) {
                        return false;
                    }
                }
            }
            return true;
        },

        sceneCountAttributeGetter: ({ session, endpoint }) => {
            if (session === undefined || endpoint === undefined) {
                throw new NotImplementedError("getSceneCount: session or endpoint undefined");
            }

            assertSecureSession(session);
            const fabric = session.getAssociatedFabric();
            const endpointScenes = ScenesManager.getEndpointScenes(fabric, endpoint.getId());
            if (endpointScenes === undefined) return 0;
            let sceneCount = 0;
            for (const scenes of endpointScenes.values()) {
                sceneCount += scenes.size;
            }
            return sceneCount;
        },
    };
};

export const createDefaultScenesClusterServer = () =>
    ClusterServer(
        ScenesCluster,
        {
            sceneCount: 0,
            currentScene: 0,
            currentGroup: GroupId(0),
            sceneValid: false,
            nameSupport: {
                nameSupport: true,
            },
            lastConfiguredBy: null,
        },
        ScenesClusterHandler(),
    );
