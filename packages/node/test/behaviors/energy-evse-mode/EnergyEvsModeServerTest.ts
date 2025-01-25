/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EnergyEvseModeServer } from "#behaviors/energy-evse-mode";
import { EnergyEvseMode } from "#clusters/energy-evse-mode";
import { OnOffPlugInUnitDevice } from "#devices/on-off-plug-in-unit";
import { MockServerNode } from "../../node/mock-server-node.js";

describe("EnergyEvseModeServer", () => {
    it("accepts local mode tags", async () => {
        const node = await MockServerNode.create();
        const DeviceType = OnOffPlugInUnitDevice.with(EnergyEvseModeServer);
        await node.add(DeviceType, {
            energyEvseMode: {
                currentMode: 0,
                supportedModes: [
                    {
                        label: "Manual",
                        mode: 0,
                        modeTags: [
                            {
                                value: EnergyEvseMode.ModeTag.Manual,
                            },
                        ],
                    },
                    {
                        label: "Quick",
                        mode: 1,
                        modeTags: [
                            {
                                value: EnergyEvseMode.ModeTag.TimeOfUse,
                            },
                        ],
                    },
                ],
            },
        });
        await node.start();
        await node.close();
    });
});
