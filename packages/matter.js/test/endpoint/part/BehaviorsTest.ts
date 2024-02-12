/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnOffServer } from "../../../src/behavior/definitions/on-off/OnOffServer.js";
import { Part } from "../../../src/endpoint/Part.js";
import { OnOffLightDevice } from "../../../src/endpoint/definitions/device/OnOffLightDevice.js";

describe("Behaviors", () => {
    it("accepts different base class for cluster requirements", () => {
        class MyOnOffServer extends OnOffServer {}

        const light = new Part(OnOffLightDevice.with(MyOnOffServer));

        light.behaviors.validateRequirements();
    });
});
