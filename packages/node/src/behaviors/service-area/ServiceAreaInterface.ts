/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "#general";
import { ServiceArea } from "#clusters/service-area";

export namespace ServiceAreaInterface {
    export interface Base {
        /**
         * This command is used to select a set of device areas, where the device is to operate.
         *
         * On receipt of this command the device shall respond with a SelectAreasResponse command.
         *
         * @see {@link MatterSpecification.v14.Cluster} § 1.17.7.1
         */
        selectAreas(request: ServiceArea.SelectAreasRequest): MaybePromise<ServiceArea.SelectAreasResponse>;

        /**
         * This command is used to skip the given area, and to attempt operating at other areas on the SupportedAreas
         * attribute list.
         *
         * This command shall NOT be implemented if the CurrentArea attribute and the Progress attribute are both not
         * implemented. Else, this command shall be optionally implemented.
         *
         * On receipt of this command the device shall respond with a SkipAreaResponse command.
         *
         * @see {@link MatterSpecification.v14.Cluster} § 1.17.7.3
         */
        skipArea(request: ServiceArea.SkipAreaRequest): MaybePromise<ServiceArea.SkipAreaResponse>;
    }
}

export type ServiceAreaInterface = { components: [{ flags: {}, methods: ServiceAreaInterface.Base }] };
