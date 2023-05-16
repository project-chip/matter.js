/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GeneralCommissioningCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type BasicCommissioningInfo = TypeFromSchema<typeof GeneralCommissioningCluster.attributes.basicCommissioningInfo.schema>;

type ArmFailSafeRequest = TypeFromSchema<typeof GeneralCommissioningCluster.commands.armFailSafe.requestSchema>;

type ArmFailSafeResponse = TypeFromSchema<typeof GeneralCommissioningCluster.commands.armFailSafe.responseSchema>;

type SetRegulatoryConfigRequest = TypeFromSchema<typeof GeneralCommissioningCluster.commands.setRegulatoryConfig.requestSchema>;

type SetRegulatoryConfigResponse = TypeFromSchema<typeof GeneralCommissioningCluster.commands.setRegulatoryConfig.responseSchema>;

type CommissioningCompleteResponse = TypeFromSchema<typeof GeneralCommissioningCluster.commands.commissioningComplete.responseSchema>;

export interface GeneralCommissioningInterface {
    breadcrumb: any;
    setBreadcrumb(value: any): Promise<void>;
    addBreadcrumbListener(listener: (newValue: any, oldValue: any) => void): void;
    removeBreadcrumbListener(listener: (newValue: any, oldValue: any) => void): void;

    basicCommissioningInfo: BasicCommissioningInfo;
    addBasicCommissioningInfoListener(listener: (newValue: BasicCommissioningInfo, oldValue: BasicCommissioningInfo) => void): void;
    removeBasicCommissioningInfoListener(listener: (newValue: BasicCommissioningInfo, oldValue: BasicCommissioningInfo) => void): void;

    regulatoryConfig: number;
    addRegulatoryConfigListener(listener: (newValue: number, oldValue: number) => void): void;
    removeRegulatoryConfigListener(listener: (newValue: number, oldValue: number) => void): void;

    locationCapability: number;
    addLocationCapabilityListener(listener: (newValue: number, oldValue: number) => void): void;
    removeLocationCapabilityListener(listener: (newValue: number, oldValue: number) => void): void;

    supportsConcurrentConnections: boolean;
    addSupportsConcurrentConnectionsListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeSupportsConcurrentConnectionsListener(listener: (newValue: boolean, oldValue: boolean) => void): void;

    sendArmFailSafe(request: ArmFailSafeRequest): Promise<ArmFailSafeResponse>;
    sendSetRegulatoryConfig(request: SetRegulatoryConfigRequest): Promise<SetRegulatoryConfigResponse>;
    sendCommissioningComplete(request: any): Promise<CommissioningCompleteResponse>;
}

export const GeneralCommissioning:
    ClusterInterface<GeneralCommissioningInterface> =
{
    definition: GeneralCommissioningCluster
};
