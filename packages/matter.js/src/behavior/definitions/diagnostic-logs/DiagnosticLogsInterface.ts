/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { DiagnosticLogs } from "../../../cluster/definitions/DiagnosticLogsCluster.js";
import { MatterCoreSpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * Reception of this command starts the process of retrieving diagnostic logs from a Node.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.1
 */
export type RetrieveLogsRequest = TypeFromSchema<typeof DiagnosticLogs.TlvRetrieveLogsRequest>;

/**
 * This shall be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the
 * following.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.2
 */
export type RetrieveLogsResponse = TypeFromSchema<typeof DiagnosticLogs.TlvRetrieveLogsResponse>;

export namespace DiagnosticLogsInterface {
    export interface Base {
        /**
         * Reception of this command starts the process of retrieving diagnostic logs from a Node.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.1
         */
        retrieveLogsRequest(request: RetrieveLogsRequest): MaybePromise<RetrieveLogsResponse>;
    }
}

export type DiagnosticLogsInterface = { components: [{ flags: {}, methods: DiagnosticLogsInterface.Base }] };
