/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AccessControlCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type Acl = TypeFromSchema<typeof AccessControlCluster.attributes.acl.schema>;

type Extension = TypeFromSchema<typeof AccessControlCluster.attributes.extension.schema>;

type AccessControlEntryChangedEvent = TypeFromSchema<typeof AccessControlCluster.events.accessControlEntryChanged.schema>;

type AccessControlExtensionChangedEvent = TypeFromSchema<typeof AccessControlCluster.events.accessControlExtensionChanged.schema>;

export interface AccessControlInterface {
    acl: Acl[];
    setAcl(value: Acl[]): Promise<void>;
    addAclListener(listener: (newValue: Acl[], oldValue: Acl[]) => void): void;
    removeAclListener(listener: (newValue: Acl[], oldValue: Acl[]) => void): void;

    extension?: Extension[];
    setExtension(value: Extension[]): Promise<void>;
    addExtensionListener(listener: (newValue: Extension[], oldValue: Extension[]) => void): void;
    removeExtensionListener(listener: (newValue: Extension[], oldValue: Extension[]) => void): void;

    subjectsPerAccessControlEntry: number;
    addSubjectsPerAccessControlEntryListener(listener: (newValue: number, oldValue: number) => void): void;
    removeSubjectsPerAccessControlEntryListener(listener: (newValue: number, oldValue: number) => void): void;

    targetsPerAccessControlEntry: number;
    addTargetsPerAccessControlEntryListener(listener: (newValue: number, oldValue: number) => void): void;
    removeTargetsPerAccessControlEntryListener(listener: (newValue: number, oldValue: number) => void): void;

    accessControlEntriesPerFabric: number;
    addAccessControlEntriesPerFabricListener(listener: (newValue: number, oldValue: number) => void): void;
    removeAccessControlEntriesPerFabricListener(listener: (newValue: number, oldValue: number) => void): void;

    addAccessControlEntryChangedListener(listener: (event: AccessControlEntryChangedEvent) => void): void;
    removeAccessControlEntryChangedListener(listener: (event: AccessControlEntryChangedEvent) => void): void;

    addAccessControlExtensionChangedListener(listener: (event: AccessControlExtensionChangedEvent) => void): void;
    removeAccessControlExtensionChangedListener(listener: (event: AccessControlExtensionChangedEvent) => void): void;
}

export const AccessControl:
    ClusterInterface<AccessControlInterface> =
{
    definition: AccessControlCluster
};
