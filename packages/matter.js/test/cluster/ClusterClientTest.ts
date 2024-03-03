/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    AttributeClient,
    SupportedAttributeClient,
    UnknownSupportedAttributeClient,
} from "../../src/cluster/client/AttributeClient.js";
import { ClusterClient } from "../../src/cluster/client/ClusterClient.js";
import { EventClient, SupportedEventClient } from "../../src/cluster/client/EventClient.js";
import { BasicInformationCluster } from "../../src/cluster/definitions/BasicInformationCluster.js";
import { Identify, IdentifyCluster } from "../../src/cluster/definitions/IdentifyCluster.js";
import { AttributeId } from "../../src/datatype/AttributeId.js";
import { EndpointNumber } from "../../src/datatype/EndpointNumber.js";
import { InteractionClient } from "../../src/protocol/interaction/InteractionClient.js";

describe("ClusterClient structure", () => {
    it("correct attribute clients are used and exposed", () => {
        const basicClusterClient = ClusterClient(BasicInformationCluster, EndpointNumber(0), {} as InteractionClient, {
            attributeList: [
                BasicInformationCluster.attributes.vendorName.id,
                BasicInformationCluster.attributes.productName.id,
                BasicInformationCluster.attributes.nodeLabel.id,
                BasicInformationCluster.attributes.reachable.id,
                AttributeId(0x1000),
            ],
        });

        expect(basicClusterClient.isAttributeSupported(BasicInformationCluster.attributes.vendorName.id)).equal(true);
        expect(basicClusterClient.isAttributeSupportedByName("vendorName")).equal(true);
        expect(basicClusterClient.attributes.vendorName instanceof SupportedAttributeClient).equal(true);

        expect(basicClusterClient.isAttributeSupported(BasicInformationCluster.attributes.productName.id)).equal(true);
        expect(basicClusterClient.isAttributeSupportedByName("productName")).equal(true);
        expect(basicClusterClient.attributes.productName instanceof SupportedAttributeClient).equal(true);

        expect(basicClusterClient.isAttributeSupported(BasicInformationCluster.attributes.nodeLabel.id)).equal(true);
        expect(basicClusterClient.isAttributeSupportedByName("nodeLabel")).equal(true);
        expect(basicClusterClient.attributes.nodeLabel instanceof SupportedAttributeClient).equal(true);

        expect(basicClusterClient.isAttributeSupported(BasicInformationCluster.attributes.reachable.id)).equal(true);
        expect(basicClusterClient.isAttributeSupportedByName("reachable")).equal(true);
        expect(basicClusterClient.attributes.reachable instanceof SupportedAttributeClient).equal(true);

        expect(basicClusterClient.isAttributeSupported(BasicInformationCluster.attributes.serialNumber.id)).equal(
            false,
        );
        expect(basicClusterClient.isAttributeSupportedByName("serialNumber")).equal(false);
        expect(basicClusterClient.attributes.serialNumber instanceof SupportedAttributeClient).equal(false);
        expect(basicClusterClient.attributes.serialNumber instanceof AttributeClient).equal(true);

        expect(basicClusterClient.isAttributeSupported(AttributeId(0x1000))).equal(true);
        expect(basicClusterClient.isAttributeSupportedByName("unknownAttribute_0x1000")).equal(true);
        expect(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            basicClusterClient.attributes["unknownAttribute_0x1000"] instanceof UnknownSupportedAttributeClient,
        ).equal(true);
    });

    it("correct event clients are used and exposed", () => {
        const basicClusterClient = ClusterClient(BasicInformationCluster, EndpointNumber(0), {} as InteractionClient, {
            eventList: [BasicInformationCluster.events.reachableChanged.id],
        });

        expect(basicClusterClient.isEventSupported(BasicInformationCluster.events.reachableChanged.id)).equal(true);
        expect(basicClusterClient.isEventSupportedByName("reachableChanged")).equal(true);
        expect(basicClusterClient.events.reachableChanged instanceof SupportedEventClient).equal(true);

        expect(basicClusterClient.isEventSupported(BasicInformationCluster.events.shutDown.id)).equal(false);
        expect(basicClusterClient.isEventSupportedByName("shutDown")).equal(false);
        expect(basicClusterClient.events.shutDown instanceof SupportedEventClient).equal(false);
        expect(basicClusterClient.events.shutDown instanceof EventClient).equal(true);
    });

    it("correct command clients are used and exposed", () => {
        const identifyClient = ClusterClient(IdentifyCluster, EndpointNumber(0), {} as InteractionClient, {
            acceptedCommandList: [IdentifyCluster.commands.identify.requestId],
        });

        expect(identifyClient.isCommandSupported(IdentifyCluster.commands.identify.requestId)).equal(true);
        expect(identifyClient.isCommandSupportedByName("identify")).equal(true);
        expect(typeof identifyClient.commands.identify).equal("function");

        expect(identifyClient.isCommandSupported(Identify.Complete.commands.identifyQuery.requestId)).equal(false);
        expect(identifyClient.isCommandSupportedByName("identifyQuery")).equal(false);
    });
});
