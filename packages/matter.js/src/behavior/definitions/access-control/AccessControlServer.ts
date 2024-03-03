/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../cluster/Cluster.js";
import { ClusterId } from "../../../datatype/ClusterId.js";
import { DeviceTypeId } from "../../../datatype/DeviceTypeId.js";
import { AccessControl } from "../../AccessControl.js";
import { DescriptorBehavior } from "../descriptor/DescriptorBehavior.js";
import { AccessControlBehavior } from "./AccessControlBehavior.js";

/**
 * This is the default server implementation of AccessControlBehavior.
 */
export class AccessControlServer extends AccessControlBehavior {
    declare internal: AccessControlServer.Internal;

    accessLevelFor(location: AccessControl.Location) {
        if (location.cluster === undefined) {
            // Without a cluster, internal behaviors are only accessible internally so this is an irrelevant placeholder
            return AccessLevel.View;
        }

        return this.#lookupAccessLevel(location.cluster);
    }

    #lookupAccessLevel(cluster: ClusterId) {
        // TODO - between these we should have enough information to find applicable entries in this.state.acls.
        // Haven't implemented actual lookup yet.  Might want to build an index
        cluster;
        this.endpoint.number;
        this.#deviceTypes;

        // TODO - !!! temporarily fallback to all access !!!
        return AccessLevel.Administer;
    }

    get #deviceTypes() {
        // This should be static so just cache IDs without installing update listener
        let deviceTypes = this.internal.deviceTypes;
        if (!deviceTypes) {
            const descriptor = this.agent.get(DescriptorBehavior);
            deviceTypes = new Set(descriptor.state.deviceTypeList.map(dt => dt.deviceType));
            this.internal.deviceTypes = deviceTypes;
        }
        return deviceTypes;
    }
}

export namespace AccessControlServer {
    export class Internal {
        deviceTypes?: Set<DeviceTypeId>;
    }
}
