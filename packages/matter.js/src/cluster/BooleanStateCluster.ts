/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, OptionalEvent, EventPriority, Cluster } from "./Cluster";
import { TlvBoolean } from "../tlv/TlvBoolean";
import { TlvField } from "../tlv/TlvObject";
import { MatterApplicationClusterSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * Attributes and commands for Boolean State.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 1.7
 */
export const BooleanStateCluster = Cluster({
    id: 0x0045,
    name: "BooleanState",
    revision: 1,

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.7.4 */
    attributes: {
        /**
         * The semantics of this boolean state are defined by the device type using this cluster.
         * For example, in a Contact Sensor device type, FALSE=open or no contact, TRUE=closed or contact
         */
        stateValue: Attribute(0, TlvBoolean),
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0 1.7.5} */
    events: {
        /** generated when the StateValue attribute changes */
        stateChange: OptionalEvent(0, EventPriority.Info, { stateValue: TlvField(0, TlvBoolean) }),
    },
});
