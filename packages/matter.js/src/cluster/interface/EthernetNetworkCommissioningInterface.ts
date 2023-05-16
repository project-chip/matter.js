/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EthernetNetworkCommissioningCluster, ClusterInterface } from "../index.js";
import { ByteArray } from "../../util/index.js"

import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type Networks = TypeFromSchema<typeof EthernetNetworkCommissioningCluster.attributes.networks.schema>;

export interface EthernetNetworkCommissioningInterface {
    maxNetworks: number;
    addMaxNetworksListener(listener: (newValue: number, oldValue: number) => void): void;
    removeMaxNetworksListener(listener: (newValue: number, oldValue: number) => void): void;

    networks: Networks[];
    addNetworksListener(listener: (newValue: Networks[], oldValue: Networks[]) => void): void;
    removeNetworksListener(listener: (newValue: Networks[], oldValue: Networks[]) => void): void;

    interfaceEnabled: boolean;
    setInterfaceEnabled(value: boolean): Promise<void>;
    addInterfaceEnabledListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeInterfaceEnabledListener(listener: (newValue: boolean, oldValue: boolean) => void): void;

    lastNetworkingStatus: number | undefined;
    addLastNetworkingStatusListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeLastNetworkingStatusListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    lastNetworkId: ByteArray | undefined;
    addLastNetworkIdListener(listener: (newValue: ByteArray | undefined, oldValue: ByteArray | undefined) => void): void;
    removeLastNetworkIdListener(listener: (newValue: ByteArray | undefined, oldValue: ByteArray | undefined) => void): void;

    lastConnectErrorValue: number | undefined;
    addLastConnectErrorValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeLastConnectErrorValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
}

export const EthernetNetworkCommissioning:
    ClusterInterface<EthernetNetworkCommissioningInterface> =
{
    definition: EthernetNetworkCommissioningCluster
};
