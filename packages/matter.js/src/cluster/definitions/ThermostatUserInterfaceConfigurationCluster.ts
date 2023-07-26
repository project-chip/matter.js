/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    Cluster as CreateCluster,
    WritableAttribute,
    AccessLevel,
    OptionalWritableAttribute
} from "../../cluster/Cluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";

export namespace ThermostatUserInterfaceConfiguration {
    /**
     * The value of the ThermostatUserInterfaceConfiguration temperatureDisplayMode attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5.5.1
     */
    export const enum TemperatureDisplayMode {
        /**
         * Temperature displayed in °C
         */
        Celsius = 0,

        /**
         * Temperature displayed in °F
         */
        Fahrenheit = 1
    }

    /**
     * The value of the ThermostatUserInterfaceConfiguration keypadLockout attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5.5.2
     */
    export const enum KeypadLockout {
        /**
         * All functionality available to the user
         */
        NoLockout = 0,

        /**
         * Level 1 reduced functionality
         */
        Lockout1 = 1,

        /**
         * Level 2 reduced functionality
         */
        Lockout2 = 2,

        /**
         * Level 3 reduced functionality
         */
        Lockout3 = 3,

        /**
         * Level 4 reduced functionality
         */
        Lockout4 = 4,

        /**
         * Least functionality available to the user
         */
        Lockout5 = 5
    }

    /**
     * The value of the ThermostatUserInterfaceConfiguration scheduleProgrammingVisibility attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5.5.3
     */
    export const enum ScheduleProgrammingVisibility {
        /**
         * Local schedule programming functionality is enabled at the thermostat
         */
        ScheduleProgrammingPermitted = 0,

        /**
         * Local schedule programming functionality is disabled at the thermostat
         */
        ScheduleProgrammingDenied = 1
    }

    /**
     * Thermostat User Interface Configuration
     *
     * This cluster provides an interface to allow configuration of the user interface for a thermostat, or a
     * thermostat controller device, that supports a keypad and LCD screen.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5
     */
    export const Cluster = CreateCluster({
        id: 0x204,
        name: "ThermostatUserInterfaceConfiguration",
        revision: 2,

        attributes: {
            /**
             * The TemperatureDisplayMode attribute specifies the units of the temperature displayed on the thermostat
             * screen.
             *
             * Table 92. DisplayMode Attribute Values
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5.5.1
             */
            temperatureDisplayMode: WritableAttribute(
                0x0,
                TlvEnum<TemperatureDisplayMode>(),
                { default: TemperatureDisplayMode.Celsius }
            ),

            /**
             * The KeypadLockout attribute specifies the level of functionality that is available to the user via the
             * keypad.
             *
             * Table 93. KeypadLockout Attribute Values
             *
             * The interpretation of the various levels is device-dependent.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5.5.2
             */
            keypadLockout: WritableAttribute(
                0x1,
                TlvEnum<KeypadLockout>(),
                { default: KeypadLockout.NoLockout, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The ScheduleProgrammingVisibility attribute is used to hide the weekly schedule programming
             * functionality or menu on a thermostat from a user to prevent local user programming of the weekly
             * schedule. The schedule programming may still be performed via a remote interface, and the thermostat may
             * operate in schedule programming mode.
             *
             * This attribute is designed to prevent local tampering with or disabling of schedules that may have been
             * programmed by users or service providers via a more capable remote interface. The programming schedule
             * shall continue to run even though it is not visible to the user locally at the thermostat.
             *
             * Table 94. ScheduleProgrammingVisibility Attribute Values
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5.5.3
             */
            scheduleProgrammingVisibility: OptionalWritableAttribute(
                0x2,
                TlvEnum<ScheduleProgrammingVisibility>(),
                { default: ScheduleProgrammingVisibility.ScheduleProgrammingPermitted, writeAcl: AccessLevel.Manage }
            )
        }
    });
}

export type ThermostatUserInterfaceConfigurationCluster = typeof ThermostatUserInterfaceConfiguration.Cluster;
export const ThermostatUserInterfaceConfigurationCluster = ThermostatUserInterfaceConfiguration.Cluster;
