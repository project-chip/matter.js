/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cluster, WritableAttribute } from "./Cluster.js";
import { TlvObject, TlvOptionalField } from "../tlv/TlvObject.js";
import { TlvNodeId } from "../datatype/NodeId.js";
import { TlvGroupId } from "../datatype/GroupId.js";
import { TlvEndpointNumber } from "../datatype/EndpointNumber.js";
import { TlvClusterId } from "../datatype/ClusterId.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * Provides information about endpoint conformance to a release of a device type definition.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.5.5.1
 */
const TlvTarget = TlvObject({ /* fabricScoped: true */
    /**  Contains the remote target node ID. If the Endpoint field is present, this field SHALL be present. */
    node: TlvOptionalField(1, TlvNodeId),

    /** Contains the target group ID that represents remote endpoints. If the Endpoint field is present, this field SHALL NOT be present. */
    group: TlvOptionalField(2, TlvGroupId),

    /** Contains the remote endpoint that the local endpoint is bound to. If the Group field is present, this field SHALL NOT be present. */
    endpoint: TlvOptionalField(3, TlvEndpointNumber),

    /**
     * Contains the cluster ID (client & server) on the local and target endpoint(s). If this field is present, the
     * client cluster SHALL also exist on this endpoint (with this Binding cluster). If this field is present, the
     * target SHALL be this cluster on the target endpoint(s).
     */
    cluster: TlvOptionalField(4, TlvClusterId),
});

/**
 * A binding represents a persistent relationship between an endpoint and one or more other local or
 * remote endpoints. A binding does not require that the relationship exists. It is up to the node
 * application to set up the relationship.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.6
 */
export const BindingCluster = Cluster({
    id: 0x1e,
    name: "Binding",
    revision: 1,

    /** @see {@link MatterCoreSpecificationV1_0} § 9.6.5 */
    attributes: {
        /** List of device types and corresponding revisions declaring endpoint conformance. */
        bindingList: WritableAttribute(0, TlvArray(TlvTarget), { persistent: true, default: [] }),
    },
});
