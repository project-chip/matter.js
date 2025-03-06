/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

//import { OperationalCredentialsBehavior } from "@matter/main/behaviors";
import { OperationalCredentialsBehavior } from "@matter/main/behaviors/operational-credentials";
import { NodeTestInstance } from "../../src/NodeTestInstance.js";
//import { NodeTestInstance } from "../../src/NodeTestInstance.js";

describe("CADMIN", () => {
    // When CADMIN 1.19 attempts to overflow the fabric table it installs a new TrustedRootCert for each iteration.
    // matter.js correctly constrains this list to max supportedFabrics, so the test fails earlier than test
    // implementation expects.
    //
    // Then, they expect general error code 0xb when the proper response is NodeOperationalCertStatus.TableFull
    //
    // For now we just patch the test to convert 0xb (whatever that is) to 0x587, which appears to be an internal
    // encoding for ConstraintError (which is just 0x87, so presumably 0x500 is a bit prefix)
    // TODO RE-ADD next line once error is fixed
    //before(() => chip.testFor("CADMIN/1.19").edit(edit.sed("s/0x0000000B/0x00000587/")));

    // TODO - temporarily disabled other tests while working out 1.19 issues
    chip("CADMIN/*").exclude("CADMIN/1.19");

    // TODO - need to resolve issues w/ 1.19
    chip("CADMIN/1.19").beforeTest(subject => {
        const node = NodeTestInstance.nodeOf(subject);

        // CHIP has a hard-coded limit via CHIP_CONFIG_MAX_FABRICS macro which defaults to 16.  TC_ADMIN_1_19 fails
        // when we exhaust this space with our default fabric limit of 254.  Including a bug which lets the test
        // fail if limit is not 16, so set to 16 to be ok for now.
        return node.setStateOf(OperationalCredentialsBehavior, { supportedFabrics: 16 });
    });
});
