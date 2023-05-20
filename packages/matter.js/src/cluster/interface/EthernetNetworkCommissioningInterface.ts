/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EthernetNetworkCommissioningCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { ByteArray } from "../../util/index.js";

type Networks = TypeFromSchema<typeof EthernetNetworkCommissioningCluster.attributes.networks.schema>;

export module EthernetNetworkCommissioning {
    export type State = {
        maxNetworks: number;
        networks: Networks[];
        interfaceEnabled: boolean;
        lastNetworkingStatus: number | undefined;
        lastNetworkId: ByteArray | undefined;
        lastConnectErrorValue: number | undefined;
    }

    export interface Client {
    }

    export interface Server {
    }
}

export const EthernetNetworkCommissioning: ClusterInterface<EthernetNetworkCommissioning.State, EthernetNetworkCommissioning.Client, EthernetNetworkCommissioning.Server> = {
    definition: EthernetNetworkCommissioningCluster
}
