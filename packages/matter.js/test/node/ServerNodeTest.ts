/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnOffLightDevice } from "../../src/endpoint/definitions/device/OnOffLightDevice.js";
import { MockServerNode } from "./mock-server-node.js";

describe("ServerNode", () => {
    it("starts and stops", async () => {
        const server = new MockServerNode();

        let disposal: Promise<void> | undefined;

        server.lifecycle.ready.on(() => {
            disposal = server[Symbol.asyncDispose]();
        });

        server.add(OnOffLightDevice);

        await server.run();

        expect(disposal).not.undefined;

        await disposal;
    });

    it("commissions", async () => {
        const server = new MockServerNode();

        server.add(OnOffLightDevice);

        await server.construction;

        // TODO
    });

    it("decommissions", () => {
        // TODO
    });

    it("advertises correctly", () => {
        // TODO
    });
});
