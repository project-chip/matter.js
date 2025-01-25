/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { edit } from "@matter/testing";

describe("OPCREDS", () => {
    // Tests incorrectly requires MISSING_CSR instead of CONSTRAINT_ERROR for certain UpdateNOC steps; fix this
    before(() =>
        chip
            .testFor("OPCREDS/3.4")
            .edit(
                edit.lines(
                    updateNocEdit(6, "noc_original", "icac_original"),
                    updateNocEdit(20, "noc_update_new_root", "icac_update_new_root"),
                ),
            ),
    );

    chip("OPCREDS/*");
});

/**
 * Replace UpdateNOC steps that require incorrect UpdateNOC behavior.
 *
 * Unfortunately the test asserts a NocResponse which is successful at the protocol level vs. CONSTRAINT_ERROR which is
 * a failure response.  So this gets a bit ugly as we need to inject an exception handler.
 */
function updateNocEdit(step: number, noc: string, icac: string) {
    return {
        after: `        self.step(${step})`,
        before: "",
        replacement:
            // These lines must be indented 8 spaces because Python
            `
        cmd = opcreds.Commands.UpdateNOC(NOCValue=${noc}, ICACValue=${icac})
        try:
            resp = await self.send_single_cmd(dev_ctrl=self.default_controller, node_id=self.dut_node_id, cmd=cmd)
            asserts.fail("UpdateNOC success when CONSTRAINT_ERROR expected")
        except InteractionModelError as e:
            asserts.assert_equal(e.status, Status.ConstraintError, "UpdateNOC CONSTRAINT_ERROR")
`,
    };
}
