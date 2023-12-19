/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Type.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { FaultInjection } from "../../../cluster/definitions/FaultInjectionCluster.js";

export type FailAtFaultRequest = TypeFromSchema<typeof FaultInjection.TlvFailAtFaultRequest>;
export type FailRandomlyAtFaultRequest = TypeFromSchema<typeof FaultInjection.TlvFailRandomlyAtFaultRequest>;

export namespace FaultInjectionInterface {
    export interface Base {
        failAtFault(request: FailAtFaultRequest): MaybePromise<void>;
        failRandomlyAtFault(request: FailRandomlyAtFaultRequest): MaybePromise<void>;
    }
}

export type FaultInjectionInterface = { components: [{ flags: {}, methods: FaultInjectionInterface.Base }] };
