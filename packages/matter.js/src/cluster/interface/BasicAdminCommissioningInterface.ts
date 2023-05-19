/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BasicAdminCommissioningCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type OpenCommissioningWindowRequest = TypeFromSchema<typeof BasicAdminCommissioningCluster.commands.openCommissioningWindow.requestSchema>;
type OpenBasicCommissioningWindowRequest = TypeFromSchema<typeof BasicAdminCommissioningCluster.commands.openBasicCommissioningWindow.requestSchema>;

export type State = {
    readonly windowStatus: number;
    readonly adminFabricIndex: number | undefined;
    readonly adminVendorId: number | undefined;
}

export interface Common {
    invokeOpenCommissioningWindow(request: OpenCommissioningWindowRequest): Promise<void>;
    invokeRevokeCommissioning(): Promise<void>;
    invokeOpenBasicCommissioningWindow(request: OpenBasicCommissioningWindowRequest): Promise<void>;
}

export const BasicAdminCommissioning: ClusterInterface<State, Common, Common> = {
    definition: BasicAdminCommissioningCluster
}
