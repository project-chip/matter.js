/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnOffLightDevice } from "../../src/endpoint/definitions/device/OnOffLightDevice.js";
import { MockServerNode } from "./mock-server-node.js";

describe("ServerNode", () => {
    it("starts and stops", async () => {
        const node = new MockServerNode();

        let disposal: Promise<void> | undefined;

        node.lifecycle.ready.on(() => {
            disposal = node[Symbol.asyncDispose]();
        });

        node.add(OnOffLightDevice);

        await node.run();

        expect(disposal).not.undefined;

        await disposal;
    });

    it("commissions", async () => {
        const node = new MockServerNode();

        node.add(OnOffLightDevice);

        await node.construction;

        /*
        node.online({}, agent => {
            agent.generalCommissioning.armFailSafe({ expiryLengthSeconds: 60, breadcrumb: 4 });
        });

        node.online({}, agent => {
            agent.generalCommissioning.setRegulatoryConfig({ newRegulatoryConfig: 2, countryCode: "XX", breadcrumb: 5 });
        });

        node.online({}, agent => {
            agent.operationalCredentials.certificateChainRequest({ certificateType: 2 });
        });

        node.online({}, agent => {
            agent.operationalCredentials.certificateChainRequest({ certificateType: 1 });
        });
        */
    });

    it("decommissions", () => {
        // TODO
    });

    it("advertises correctly", () => {
        // TODO
    });
});
