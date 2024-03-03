/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnOffServer } from "../../../src/behavior/definitions/on-off/OnOffServer.js";
import { Endpoint } from "../../../src/endpoint/Endpoint.js";
import { OnOffLightDevice } from "../../../src/endpoint/definitions/device/OnOffLightDevice.js";

describe("Behaviors", () => {
    it("accepts different base class for cluster requirements", () => {
        class MyOnOffServer extends OnOffServer {}

        const light = new Endpoint(OnOffLightDevice.with(MyOnOffServer));

        light.behaviors.validateRequirements();
    });
});
