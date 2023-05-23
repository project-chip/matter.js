/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { IdentifyCluster, IdentifyType } from "../src/cluster/IdentifyCluster.js";
import { ClusterServerHandlers } from "../src/cluster/server/ClusterServer.js";
import { ClusterServer } from "../src/protocol/interaction/InteractionServer.js";
import { DeviceTypes } from "../src/device/DeviceTypes.js";
import { Endpoint } from "../src/device/Endpoint.js";
import { GroupsCluster } from "../src/cluster/GroupsCluster.js";
import { BasicInformationCluster } from "../src/cluster/BasicInformationCluster.js";
import { VendorId } from "../src/datatype/VendorId.js";
import { ClusterServerFactory } from "../src/cluster/ClusterServerFactory.js";

describe('Typing issue Test', () => {

    it("typing issue test", async () => {
        const identifyServer = ClusterServerFactory.create(IdentifyCluster, undefined, {
            identify: async ({ request: { identifyTime } }) => { console.log(identifyTime); /* */ },
            triggerEffect: async () => { console.log("triggerEffect"); /* */ },
        } as ClusterServerHandlers<typeof IdentifyCluster>)

        /* Issue 1: */
        /* the as ClusterServerHandlers<typeof IdentifyCluster> is needed ... in fact ok-ish */
        const identifyServer2 =
            ClusterServer(
                IdentifyCluster,
                { identifyTime: 100, identifyType: IdentifyType.None },
                { identify: async ({ request: { identifyTime } }) => { console.log(identifyTime); } } as ClusterServerHandlers<typeof IdentifyCluster>
            );

        const groupsServer = ClusterServerFactory.create(GroupsCluster);

        /* Issue 2: */
        // adding the cluster in the array do not work - uncomment it to see it ... seems to be something that get weird because of the optional command which is not implemented
        // a cluster without Optionalcommands works ...
        // as soon as there is an option command (irrelevant if defined or not) it has issues
        // EDIT works after last change!
        const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], [groupsServer, identifyServer, identifyServer2], 1);

        // But it works that way ...
        // Difference: above it is an array with ClusterServerObj<any, any>
        endpoint.addClusterServer(identifyServer);
        endpoint.addClusterServer(identifyServer2);

        assert.ok(identifyServer);
        assert.ok(identifyServer2);
        assert.ok(endpoint);
    });

    it("second topic to optimize", async () => {
        const basic = ClusterServer(BasicInformationCluster,
            {
                dataModelRevision: 1,
                vendorName: "test",
                vendorId: new VendorId(0),
                productName: "test",
                productId: 1,
                nodeLabel: "",
                location: "DE",
                hardwareVersion: 1,
                hardwareVersionString: "1",
                softwareVersion: 1,
                softwareVersionString: "1",
                capabilityMinima: {
                    caseSessionsPerFabric: 3,
                    subscriptionsPerFabric: 3,
                },
                manufacturingDate: "12345678"
            }, {});

        // this is a typing issue because the "ClusterServer Obj" do not know the content of the "initialAttributeValues" used on creation
        // manufacturingData is provided and so it WILL BE there :-) but formally optional.
        // Could we somehow take the keys of attributeInitialValues provided here and make it "non optional"?

        assert.ok(basic.attributes.manufacturingDate);

        // remove the assert above and this below is marked as potential undefined ... can we get rid of that?
        basic.attributes.manufacturingDate.setLocal("23456789");
    })

});
