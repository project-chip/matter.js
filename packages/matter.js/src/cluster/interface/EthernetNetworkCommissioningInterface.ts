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
        readonly maxNetworks: number;
        readonly networks: Networks[];
        readonly interfaceEnabled: boolean;
        readonly lastNetworkingStatus: number | undefined;
        readonly lastNetworkId: ByteArray | undefined;
        readonly lastConnectErrorValue: number | undefined;
    }

    export interface Common {
    }
}

export const EthernetNetworkCommissioning: ClusterInterface<EthernetNetworkCommissioning.State, EthernetNetworkCommissioning.Common, EthernetNetworkCommissioning.Common> = {
    definition: EthernetNetworkCommissioningCluster
}
