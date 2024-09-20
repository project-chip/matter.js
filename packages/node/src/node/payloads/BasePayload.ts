/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StatusCode } from "#types";

export namespace BasePayload {
    /**
     * Generates payload type for responses that return data.
     */
    export type Data<P, D = {}> = P &
        D & {
            data: any;
        };

    /**
     * Generates payload type when no data is present.
     *
     * @see {@link MatterSpecification.v11.Core} § 8.9.5.4
     */
    export type Status<P> = {
        path: P;
        code: StatusCode;
        clusterCode?: number;
    };

    /**
     * Generates payload type that may return data or status.
     */
    export type DataOrStatus<P, D = {}> = Data<P, D> | Status<P>;
}
