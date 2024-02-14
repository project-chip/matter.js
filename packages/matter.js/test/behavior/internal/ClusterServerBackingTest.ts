/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MockServerNode } from "../../node/mock-server-node.js";

describe("ClusterServerBacking", () => {
    it("respects fabric filtered reads", async () => {
        const node = await MockServerNode.createOnline();

        // TODO
        node;
    });
});
