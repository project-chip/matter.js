/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Export Specs types
export * from "./spec/Specifications.js";

// Export Legacy API
export { MatterController } from "./MatterController.js";
export { MatterDevice } from "./MatterDevice.js";

// Export new High Level API basic classes
export * from "./CommissionableMatterNode.js";
export * from "./PairableMatterNode.js";
export * from "./MatterNode.js";
export * from "./Matter.js";
