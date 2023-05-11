/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { IdentifyCluster, IdentifyType } from "../src/cluster/IdentifyCluster.js";
import { createDefaultIdentifyClusterServer } from "../src/cluster/server/IdentifyServer.js";
import { ClusterServerHandlers } from "../src/cluster/server/ClusterServer.js";
import { ClusterServer } from "../src/protocol/interaction/InteractionServer.js";
import { DeviceTypes } from "../src/device/DeviceTypes.js";
import { Endpoint } from "../src/device/Endpoint.js";
import { GroupsCluster } from "../src/cluster/GroupsCluster.js";
import { GroupsClusterHandler } from "../src/cluster/server/GroupsServer.js";

describe('Typing issue Test', () => {

    it("typing issue test", async () => {
        const identifyServer = createDefaultIdentifyClusterServer({
            identify: async ({ request: { identifyTime } }) => { console.log(identifyTime); /* */ },
            triggerEffect: async () => { console.log("triggerEffect"); /* */ },
        })

        /* Issue 1: */
        /* the as ClusterServerHandlers<typeof IdentifyCluster> is needed ... in fact ok-ish */
        const identifyServer2 =
            ClusterServer(
                IdentifyCluster,
                { identifyTime: 100, identifyType: IdentifyType.None },
                { identify: async ({ request: { identifyTime } }) => { console.log(identifyTime); } } as ClusterServerHandlers<typeof IdentifyCluster>
            );

        const groupsServer = ClusterServer(GroupsCluster, { nameSupport: { groupNames: true } }, GroupsClusterHandler());

        /* Issue 2: */
        // adding the cluster in the array do not work - uncomment it to see it ... seems to be something that get weird because of the optional command which is not implemented
        // a cluster without Optionalcommands works ...
        // as soon as there is an option command (irrelevant if defined or not) it has issues
        const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], [groupsServer, /*identifyServer, identifyServer2*/], 1);

        // But it works that way ...
        // Difference: above it is an array with ClusterServerObj<any, any>
        endpoint.addClusterServer(identifyServer);
        endpoint.addClusterServer(identifyServer2);

        assert.ok(identifyServer);
        assert.ok(identifyServer2);
        assert.ok(endpoint);
    });

});
