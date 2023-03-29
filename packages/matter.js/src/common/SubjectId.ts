/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { NodeId, TlvNodeId } from "./NodeId.js";

/**
 * The meaning of a "Subject" is primarily that of describing the source for an action, using a given
 * authentication method provided by the Secure Channel architecture.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 6.6.2.1
 */
export type SubjectId = NodeId; // Only NodeId is supported for now...

/** Tlv schema for a Subject Id */
export const TlvSubjectId = TlvNodeId;
