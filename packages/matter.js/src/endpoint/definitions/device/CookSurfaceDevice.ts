/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    TemperatureControlServer as BaseTemperatureControlServer
} from "../../../behavior/definitions/temperature-control/TemperatureControlServer.js";
import {
    TemperatureMeasurementServer as BaseTemperatureMeasurementServer
} from "../../../behavior/definitions/temperature-measurement/TemperatureMeasurementServer.js";
import { OnOffServer as BaseOnOffServer } from "../../../behavior/definitions/on-off/OnOffServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * A Cook Surface device type represents a heating object on a cooktop or other similar device. It shall only be used
 * when composed as part of another device type.
 *
 * @see {@link MatterSpecification.v13.Device} § 13.7
 */
export interface CookSurfaceDevice extends Identity<typeof CookSurfaceDeviceDefinition> {}

export namespace CookSurfaceRequirements {
    /**
     * The TemperatureControl cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link TemperatureControlServer} for convenience.
     */
    export const TemperatureControlServer = BaseTemperatureControlServer;

    /**
     * The TemperatureMeasurement cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link TemperatureMeasurementServer} for convenience.
     */
    export const TemperatureMeasurementServer = BaseTemperatureMeasurementServer;

    /**
     * The OnOff cluster is optional per the Matter specification.
     *
     * This version of {@link OnOffServer} is specialized per the specification.
     */
    export const OnOffServer = BaseOnOffServer.with("OffOnly");

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        optional: {
            TemperatureControl: TemperatureControlServer,
            TemperatureMeasurement: TemperatureMeasurementServer,
            OnOff: OnOffServer
        },
        mandatory: {}
    };
}

export const CookSurfaceDeviceDefinition = MutableEndpoint({
    name: "CookSurface",
    deviceType: 0x77,
    deviceRevision: 1,
    requirements: CookSurfaceRequirements,
    behaviors: SupportedBehaviors()
});

export const CookSurfaceDevice: CookSurfaceDevice = CookSurfaceDeviceDefinition;
