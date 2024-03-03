/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BindingServer as BaseBindingServer } from "../../../behavior/definitions/binding/BindingServer.js";
import { FixedLabelServer as BaseFixedLabelServer } from "../../../behavior/definitions/fixed-label/FixedLabelServer.js";
import { UserLabelServer as BaseUserLabelServer } from "../../../behavior/definitions/user-label/UserLabelServer.js";

export namespace BaseRequirements {
    /**
     * The {@link Binding} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const BindingServer = BaseBindingServer;

    /**
     * The {@link FixedLabel} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const FixedLabelServer = BaseFixedLabelServer;

    /**
     * The {@link UserLabel} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const UserLabelServer = BaseUserLabelServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        optional: { Binding: BindingServer, FixedLabel: FixedLabelServer, UserLabel: UserLabelServer },
        mandatory: {}
    };
}

export namespace BaseEndpoint {
    export const requirements = BaseRequirements;
}
