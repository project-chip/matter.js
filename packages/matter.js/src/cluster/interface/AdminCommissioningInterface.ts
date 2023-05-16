/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { AdminCommissioningCluster } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type OpenCommissioningWindowRequest = TypeFromSchema<typeof AdminCommissioningCluster.commands.openCommissioningWindow.requestSchema>;

export interface AdminCommissioningInterface {
    windowStatus: number;
    addWindowStatusListener(listener: (newValue: number, oldValue: number) => void): void;
    removeWindowStatusListener(listener: (newValue: number, oldValue: number) => void): void;

    adminFabricIndex: number | undefined;
    addAdminFabricIndexListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeAdminFabricIndexListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    adminVendorId: number | undefined;
    addAdminVendorIdListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeAdminVendorIdListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    sendOpenCommissioningWindow(request: OpenCommissioningWindowRequest): Promise<void>;
    sendRevokeCommissioning(request: any): Promise<void>;
}

export const AdminCommissioningClientImpl = ClientIfaceImpl<AdminCommissioningInterface>(AdminCommissioningCluster);
export const AdminCommissioningServerImpl = ServerIfaceImpl<AdminCommissioningInterface>(AdminCommissioningCluster);
