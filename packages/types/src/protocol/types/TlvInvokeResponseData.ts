/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvObject, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvCommandData } from "./TlvCommandData.js";
import { TlvCommandStatus } from "./TlvCommandStatus.js";

/** @see {@link MatterSpecification.v13.Core}, section 10.6.13 */

export const TlvInvokeResponseData = TlvObject({
    // InvokeResponseIB
    command: TlvOptionalField(0, TlvCommandData),
    status: TlvOptionalField(1, TlvCommandStatus),
});