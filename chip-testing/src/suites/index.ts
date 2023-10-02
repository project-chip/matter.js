/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export { TestArmFailSafe } from "./TestArmFailSafe.js";
export { TestBasicInformation } from "./TestBasicInformation";
export { TestCASERecovery } from "./TestCASERecovery.js";
export { TestCommissioningWindow } from "./TestCommissioningWindow.js";
export { TestDiscovery } from "./TestDiscovery.js";
export { TestFabricRemovalWhileSubscribed } from "./TestFabricRemovalWhileSubscribed.js";
export { TestGeneralCommissioning } from "./TestGeneralCommissioning.js";
export { TestMultiAdmin } from "./TestMultiAdmin.js";
export { TestOperationalCredentialsCluster } from "./TestOperationalCredentialsCluster.js";
export { TestSelfFabricRemoval } from "./TestSelfFabricRemoval.js";
export { TestSubscribe_AdministratorCommissioning } from "./TestSubscribe_AdministratorCommissioning.js";
export { TestSubscribe_OnOff } from "./TestSubscribe_OnOff.js";
export { TestUserLabelCluster } from "./TestUserLabelCluster.js";
export { TestUserLabelClusterConstraints } from "./TestUserLabelClusterConstraints.js";
export { Test_TC_BINFO_1_1 } from "./Test_TC_BINFO_1_1.js";
export { Test_TC_BINFO_2_1 } from "./Test_TC_BINFO_2_1.js";
export { Test_TC_BINFO_2_2 } from "./Test_TC_BINFO_2_2.js";
export { Test_TC_BRBINFO_1_1 } from "./Test_TC_BRBINFO_1_1.js";
export { Test_TC_BRBINFO_2_1 } from "./Test_TC_BRBINFO_2_1.js";
export { Test_TC_CGEN_1_1 } from "./Test_TC_CGEN_1_1.js";
export { Test_TC_CGEN_2_1 } from "./Test_TC_CGEN_2_1.js";
export { Test_TC_CNET_1_3_F02 } from "./Test_TC_CNET_1_3.js";
export { Test_TC_DESC_1_1 } from "./Test_TC_DESC_1_1.js";
export { Test_TC_FLABEL_1_1 } from "./Test_TC_FLABEL_1_1.js";
export { Test_TC_FLABEL_2_1 } from "./Test_TC_FLABEL_2_1.js";
export { Test_TC_OO_1_1 } from "./Test_TC_OO_1_1.js";
export { Test_TC_OO_2_1 } from "./Test_TC_OO_2_1.js";
export { Test_TC_OO_2_2 } from "./Test_TC_OO_2_2.js";
export { Test_TC_OPCREDS_1_2 } from "./Test_TC_OPCREDS_1_2.js";
export { Test_TC_ULABEL_1_1 } from "./Test_TC_ULABEL_1_1.js";
export { Test_TC_ULABEL_2_1 } from "./Test_TC_ULABEL_2_1.js";
export { Test_TC_ULABEL_2_2 } from "./Test_TC_ULABEL_2_2.js";
export { Test_TC_ULABEL_2_3 } from "./Test_TC_ULABEL_2_3.js";
export { Test_TC_ULABEL_2_4 } from "./Test_TC_ULABEL_2_4.js";

// Test broken because of https://github.com/project-chip/connectedhomeip/issues/29375
//export { Test_TC_CADMIN_1_16 } from "./Test_TC_CADMIN_1_16.js";

// Not possible to execute because not in compiled chip-tool tests, Only in yaml ones
//export { Test_AddNewFabricFromExistingFabric } from "./Test_AddNewFabricFromExistingFabric.js";
//export { Test_TC_OPCREDS_3_7 } from "./Test_TC_OPCREDS_3_7.js";
//export { TestCommandsById } from "./TestCommandsById.js"; -> Still to be verified, but should work
