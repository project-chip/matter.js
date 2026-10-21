/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matter } from "@matter/model";
import { certTest } from "@matter/testing";
import { commissionThStep } from "./tc-dd-support.js";
import { CommissionedRefs, invokeCommand, recordAll } from "./tc-support.js";

const LOW_POWER = Matter.clusters.require("LowPower");

/** chip's all-clusters app puts LowPower on endpoint 1. */
const ENDPOINT = 1;

const commissioned = new CommissionedRefs();

certTest("TC-LOWPOWER-2.2", {
    plan: "media.adoc",
    pics: ["LOWPOWER.C"],
    app: "all-clusters",

    // matter.js's all-clusters test device has no LowPower cluster; only its TV device does, and that device is not a
    // cert subject.
    flavors: ["chip-local", "chip-docker"],
})
    .step("0", "Preconditions: the DUT commissions the TH.", commissionThStep(commissioned), {
        expected: "The TH is commissioned onto the DUT's fabric, so the step below runs over CASE.",
    })
    .step(
        1,
        "DUT sends Sleep command to TH",
        commissioned.withRef("dut", async (cx, ref) => {
            const { checks } = await invokeCommand(cx, ref, {
                cluster: LOW_POWER,
                endpoint: ENDPOINT,
                command: "sleep",
                args: {},
                fields: [],
            });
            await recordAll(cx, checks);
        }),
        { pics: "LOWPOWER.C.C00.Tx", expected: "Verify command is successfully received by TH" },
    )
    .finalize(cx => commissioned.decommissionAll(cx));
