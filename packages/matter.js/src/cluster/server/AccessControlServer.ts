/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControl, AccessControlCluster } from "#clusters";
import { InternalError, isDeepEqual, Logger, SyncStorage } from "#general";
import { MatterDevice } from "#MatterDevice.js";
import {
    AclExtensionEntry,
    assertSecureSession,
    FabricSensitiveEventServer,
    genericFabricScopedAttributeGetter,
    genericFabricScopedAttributeGetterFromFabric,
    genericFabricScopedAttributeSetterForFabric,
} from "#protocol";
import {
    CaseAuthenticatedTag,
    ClusterId,
    DeviceTypeId,
    EndpointNumber,
    GroupId,
    NodeId,
    StatusCode,
    StatusResponseError,
    TlvTaggedList,
    TlvType,
    TypeFromBitmapSchema,
} from "#types";
import { ClusterServer } from "./ClusterServer.js";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";

const logger = Logger.get("AccessControlClusterServer");

export const AccessControlClusterHandler: () => ClusterServerHandlers<typeof AccessControlCluster> = () => {
    let accessControlEntryChangedEvent:
        | FabricSensitiveEventServer<AccessControl.AccessControlEntryChangedEvent, SyncStorage>
        | undefined = undefined;
    let accessControlExtensionChangedEvent:
        | FabricSensitiveEventServer<AccessControl.AccessControlExtensionChangedEvent, SyncStorage>
        | undefined = undefined;

    return {
        initializeClusterServer: ({ events: { accessControlEntryChanged, accessControlExtensionChanged } }) => {
            if (accessControlEntryChanged !== undefined) {
                accessControlEntryChangedEvent = accessControlEntryChanged;
            }
            if (accessControlExtensionChanged !== undefined) {
                accessControlExtensionChangedEvent = accessControlExtensionChanged;
            }
        },

        aclAttributeGetter: ({ session, isFabricFiltered }) => {
            return genericFabricScopedAttributeGetter(
                session,
                !!isFabricFiltered,
                AccessControlCluster,
                "acl",
                new Array<TypeFromBitmapSchema<typeof AccessControl.TlvAccessControlEntry>>(),
                MatterDevice.of(session).getFabrics(),
            );
        },

        aclAttributeValidator: (
            value,
            {
                attributes: {
                    accessControlEntriesPerFabric,
                    subjectsPerAccessControlEntry,
                    targetsPerAccessControlEntry,
                },
            },
        ) => {
            if (value.length > accessControlEntriesPerFabric.getLocal()) {
                throw new StatusResponseError("AccessControlEntriesPerFabric exceeded", StatusCode.ResourceExhausted);
            }

            for (const entry of value) {
                const { subjects, targets, privilege, authMode } = entry;
                if (privilege < 1 || privilege > 5) {
                    throw new StatusResponseError(
                        "Privilege must be a valid enum value between 1 and 5",
                        StatusCode.ConstraintError,
                    );
                }
                if (authMode < 1 || authMode > 3) {
                    throw new StatusResponseError(
                        "AuthMode must be a valid enum value between 1 and 3",
                        StatusCode.ConstraintError,
                    );
                }

                if (subjects !== null && subjects.length > subjectsPerAccessControlEntry.getLocal()) {
                    throw new StatusResponseError(
                        "SubjectsPerAccessControlEntry exceeded",
                        StatusCode.ResourceExhausted,
                    );
                }

                if (targets !== null && targets.length > targetsPerAccessControlEntry.getLocal()) {
                    throw new StatusResponseError(
                        "TargetsPerAccessControlEntry exceeded",
                        StatusCode.ResourceExhausted,
                    );
                }

                if (authMode === AccessControl.AccessControlEntryAuthMode.Pase) {
                    throw new StatusResponseError("AuthMode for ACL must not be PASE", StatusCode.ConstraintError);
                } else if (authMode === AccessControl.AccessControlEntryAuthMode.Case) {
                    if (subjects !== null) {
                        for (const subject of subjects) {
                            if (NodeId.isCaseAuthenticatedTag(subject)) {
                                const cat = NodeId.extractAsCaseAuthenticatedTag(subject);
                                if (CaseAuthenticatedTag.getVersion(cat) === 0) {
                                    throw new StatusResponseError(
                                        "CaseAuthenticatedTag version 0 is not allowed",
                                        StatusCode.ConstraintError,
                                    );
                                }
                            } else if (!NodeId.isOperationalNodeId(subject)) {
                                throw new StatusResponseError(
                                    "Subject must be a valid OperationalNodeId or CaseAuthenticatedTag",
                                    StatusCode.ConstraintError,
                                );
                            }
                        }
                    }
                } else if (authMode === AccessControl.AccessControlEntryAuthMode.Group) {
                    if (privilege === AccessControl.AccessControlEntryPrivilege.Administer) {
                        throw new StatusResponseError(
                            "Group ACLs must not have Administer privilege",
                            StatusCode.ConstraintError,
                        );
                    }

                    if (subjects !== null) {
                        for (const subject of subjects) {
                            if (GroupId(subject) === GroupId.UNSPECIFIED_GROUP_ID) {
                                throw new StatusResponseError(
                                    "Subject must be a valid GroupId for Group ACLs",
                                    StatusCode.ConstraintError,
                                );
                            }
                        }
                    }
                    // TODO For Group authentication, the Group ID identifies the required group, as defined in the Group Key Management Cluster.
                }

                if (targets !== null) {
                    for (const target of targets) {
                        const { deviceType, endpoint, cluster } = target;
                        if (deviceType !== null && endpoint !== null) {
                            throw new StatusResponseError(
                                "DeviceType and Endpoint are mutually exclusive",
                                StatusCode.ConstraintError,
                            );
                        }
                        if (cluster === null && endpoint === null && deviceType === null) {
                            throw new StatusResponseError(
                                "At least one field must be present",
                                StatusCode.ConstraintError,
                            );
                        }
                        if (cluster !== null && !ClusterId.isValid(cluster)) {
                            throw new StatusResponseError(
                                "Cluster must be a valid ClusterId",
                                StatusCode.ConstraintError,
                            );
                        }
                        if (endpoint !== null && !EndpointNumber.isValid(endpoint)) {
                            throw new StatusResponseError(
                                "Endpoint must be a valid OperationalNodeId",
                                StatusCode.ConstraintError,
                            );
                        }
                        if (deviceType !== null && !DeviceTypeId.isValid(deviceType)) {
                            throw new StatusResponseError(
                                "DeviceType must be a valid DeviceType",
                                StatusCode.ConstraintError,
                            );
                        }
                    }
                }
            }
        },

        aclAttributeSetter: (value, { session }) => {
            assertSecureSession(session);
            // it can happen internally that we set a value for another fabricIndex, so handle this here
            const fabric = MatterDevice.of(session).getFabricByIndex(
                value[0]?.fabricIndex ?? session.associatedFabric.fabricIndex,
            );
            if (fabric === undefined) {
                throw new InternalError("Fabric not found. SHould never happen");
            }
            const oldValue =
                genericFabricScopedAttributeGetterFromFabric(
                    fabric,
                    AccessControlCluster,
                    "acl",
                    new Array<TypeFromBitmapSchema<typeof AccessControl.TlvAccessControlEntry>>(),
                ) ?? [];

            const changed = genericFabricScopedAttributeSetterForFabric(fabric, AccessControlCluster, "acl", value, []);

            if (changed && accessControlEntryChangedEvent !== undefined) {
                const adminPasscodeId = session.isPase ? 0 : null;
                const adminNodeId = adminPasscodeId === null ? session.associatedFabric.rootNodeId : null;

                let i = 0;
                for (; i < value.length; i++) {
                    if (!isDeepEqual(value[i], oldValue[i])) {
                        const changeType =
                            oldValue[i] === undefined
                                ? AccessControl.ChangeType.Added
                                : value[i] === undefined
                                  ? AccessControl.ChangeType.Removed
                                  : AccessControl.ChangeType.Changed;
                        accessControlEntryChangedEvent.triggerEvent({
                            changeType,
                            adminNodeId,
                            adminPasscodeId,
                            latestValue:
                                (changeType === AccessControl.ChangeType.Removed ? oldValue[i] : value[i]) ?? null,
                            fabricIndex: session.associatedFabric.fabricIndex,
                        });
                    }
                }
                if (oldValue.length > i) {
                    for (let j = oldValue.length - 1; j >= i; j--) {
                        accessControlEntryChangedEvent.triggerEvent({
                            changeType: AccessControl.ChangeType.Removed,
                            adminNodeId,
                            adminPasscodeId,
                            latestValue: oldValue[j],
                            fabricIndex: session.associatedFabric.fabricIndex,
                        });
                    }
                }
            }
            return changed;
        },

        extensionAttributeGetter: ({ session }) => {
            return genericFabricScopedAttributeGetter(
                session,
                true,
                AccessControlCluster,
                "extension",
                new Array<AclExtensionEntry>(),
                MatterDevice.of(session).getFabrics(),
            );
        },

        extensionAttributeValidator: value => {
            if (value.length === 0) {
                return;
            }
            if (value.length > 1) {
                throw new StatusResponseError("Extension list must contain a single entry", StatusCode.ConstraintError);
            }

            // we have exactly one entry
            const { data } = value[0];
            if (data.length < 2 || data[0] !== TlvType.List || data[data.length - 1] !== TlvType.EndOfContainer) {
                // Easier to check that way that it is an Listen without any tags in general
                throw new StatusResponseError("Extension must be a valid TLV", StatusCode.ConstraintError);
            }
            try {
                const decoded = TlvTaggedList({}, true).decode(data);
                logger.info(`Extension TLV decoded:`, decoded);
            } catch (error) {
                logger.debug(`Extension TLV decoding failed:`, error);
                throw new StatusResponseError("Extension must be a valid TLV", StatusCode.ConstraintError);
            }
        },

        extensionAttributeSetter: (value, { session }) => {
            assertSecureSession(session);
            // it can happen internally that we set a value for another fabricIndex, so handle this here
            const fabric = MatterDevice.of(session).getFabricByIndex(
                value[0]?.fabricIndex ?? session.associatedFabric.fabricIndex,
            );
            if (fabric === undefined) {
                throw new InternalError("Fabric not found. Should never happen");
            }
            const oldValue =
                genericFabricScopedAttributeGetterFromFabric(
                    fabric,
                    AccessControlCluster,
                    "extension",
                    new Array<AclExtensionEntry>(),
                ) ?? [];

            const changed = genericFabricScopedAttributeSetterForFabric(
                fabric,
                AccessControlCluster,
                "extension",
                value,
                [],
            );

            if (changed && accessControlExtensionChangedEvent !== undefined) {
                const changeType =
                    value.length > oldValue.length
                        ? AccessControl.ChangeType.Added
                        : value.length < oldValue.length
                          ? AccessControl.ChangeType.Removed
                          : AccessControl.ChangeType.Changed;
                const adminPasscodeId = session.isPase ? 0 : null;
                const adminNodeId = adminPasscodeId === null ? session.associatedFabric.rootNodeId : null;
                accessControlExtensionChangedEvent.triggerEvent({
                    changeType,
                    adminNodeId,
                    adminPasscodeId,
                    latestValue: (changeType === AccessControl.ChangeType.Removed ? oldValue[0] : value[0]) ?? null,
                    fabricIndex: session.associatedFabric.fabricIndex,
                });
            }

            return changed;
        },
    };
};

export const createDefaultAccessControlClusterServer = () =>
    ClusterServer(
        AccessControlCluster,
        {
            acl: [],
            extension: [],
            subjectsPerAccessControlEntry: 4,
            targetsPerAccessControlEntry: 4,
            accessControlEntriesPerFabric: 4,
        },
        AccessControlClusterHandler(),
        {
            accessControlEntryChanged: true,
            accessControlExtensionChanged: true,
        },
    );
