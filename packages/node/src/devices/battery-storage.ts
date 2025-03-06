/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../behaviors/identify/IdentifyServer.js";
import { MutableEndpoint } from "../endpoint/type/MutableEndpoint.js";
import { SupportedBehaviors } from "../endpoint/properties/SupportedBehaviors.js";
import { Identity } from "#general";

/**
 * A Battery Storage device is a device that allows a DC battery, which can optionally be comprised of a set parallel
 * strings of battery packs and associated controller, and an AC inverter, to be monitored and controlled by an Energy
 * Management System in order to manage the peaks and troughs of supply and demand, and/or to optimize cost of the
 * energy consumed in premises. It is not intended to be used for a UPS directly supplying a set of appliances, nor for
 * portable battery storage devices.
 *
 * @see {@link MatterSpecification.v13.Device} § 14.4
 */
export interface BatteryStorageDevice extends Identity<typeof BatteryStorageDeviceDefinition> {}

export namespace BatteryStorageRequirements {
    /**
     * The Identify cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link IdentifyServer} for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { optional: { Identify: IdentifyServer }, mandatory: {} };
}

export const BatteryStorageDeviceDefinition = MutableEndpoint({
    name: "BatteryStorage",
    deviceType: 0x18,
    deviceRevision: 1,
    requirements: BatteryStorageRequirements,
    behaviors: SupportedBehaviors()
});

export const BatteryStorageDevice: BatteryStorageDevice = BatteryStorageDeviceDefinition;
