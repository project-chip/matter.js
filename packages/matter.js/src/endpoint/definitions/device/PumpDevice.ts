/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffServer as BaseOnOffServer } from "../../../behavior/definitions/on-off/OnOffServer.js";
import {
    PumpConfigurationAndControlServer as BasePumpConfigurationAndControlServer
} from "../../../behavior/definitions/pump-configuration-and-control/PumpConfigurationAndControlServer.js";
import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import {
    LevelControlServer as BaseLevelControlServer
} from "../../../behavior/definitions/level-control/LevelControlServer.js";
import { ScenesServer as BaseScenesServer } from "../../../behavior/definitions/scenes/ScenesServer.js";
import { GroupsServer as BaseGroupsServer } from "../../../behavior/definitions/groups/GroupsServer.js";
import {
    TemperatureMeasurementServer as BaseTemperatureMeasurementServer
} from "../../../behavior/definitions/temperature-measurement/TemperatureMeasurementServer.js";
import {
    PressureMeasurementServer as BasePressureMeasurementServer
} from "../../../behavior/definitions/pressure-measurement/PressureMeasurementServer.js";
import {
    FlowMeasurementServer as BaseFlowMeasurementServer
} from "../../../behavior/definitions/flow-measurement/FlowMeasurementServer.js";
import {
    TemperatureMeasurementBehavior as BaseTemperatureMeasurementBehavior
} from "../../../behavior/definitions/temperature-measurement/TemperatureMeasurementBehavior.js";
import {
    PressureMeasurementBehavior as BasePressureMeasurementBehavior
} from "../../../behavior/definitions/pressure-measurement/PressureMeasurementBehavior.js";
import {
    FlowMeasurementBehavior as BaseFlowMeasurementBehavior
} from "../../../behavior/definitions/flow-measurement/FlowMeasurementBehavior.js";
import {
    OccupancySensingBehavior as BaseOccupancySensingBehavior
} from "../../../behavior/definitions/occupancy-sensing/OccupancySensingBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * A Pump device is a pump that may have variable speed. It may have optional built-in sensors and a regulation
 * mechanism. It is typically used for pumping fluids like water.
 *
 * PumpDevice requires PumpConfigurationAndControl cluster but PumpConfigurationAndControl is not added by default
 * because you must select the features your device supports. You can add manually using PumpDevice.with().
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 5.3
 */
export interface PumpDevice extends Identity<typeof PumpDeviceDefinition> {}

export namespace PumpRequirements {
    /**
     * The {@link OnOff} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const OnOffServer = BaseOnOffServer;

    /**
     * The {@link PumpConfigurationAndControl} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const PumpConfigurationAndControlServer = BasePumpConfigurationAndControlServer;

    /**
     * The {@link Identify} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The {@link LevelControl} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const LevelControlServer = BaseLevelControlServer;

    /**
     * The {@link Scenes} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ScenesServer = BaseScenesServer;

    /**
     * The {@link Groups} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const GroupsServer = BaseGroupsServer;

    /**
     * The {@link TemperatureMeasurement} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const TemperatureMeasurementServer = BaseTemperatureMeasurementServer;

    /**
     * The {@link PressureMeasurement} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const PressureMeasurementServer = BasePressureMeasurementServer;

    /**
     * The {@link FlowMeasurement} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const FlowMeasurementServer = BaseFlowMeasurementServer;

    /**
     * The {@link TemperatureMeasurement} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const TemperatureMeasurementBehavior = BaseTemperatureMeasurementBehavior;

    /**
     * The {@link PressureMeasurement} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const PressureMeasurementBehavior = BasePressureMeasurementBehavior;

    /**
     * The {@link FlowMeasurement} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const FlowMeasurementBehavior = BaseFlowMeasurementBehavior;

    /**
     * The {@link OccupancySensing} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const OccupancySensingBehavior = BaseOccupancySensingBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: {
            OnOff: OnOffServer,
            PumpConfigurationAndControl: PumpConfigurationAndControlServer,
            Identify: IdentifyServer
        },

        optional: {
            LevelControl: LevelControlServer,
            Scenes: ScenesServer,
            Groups: GroupsServer,
            TemperatureMeasurement: TemperatureMeasurementServer,
            PressureMeasurement: PressureMeasurementServer,
            FlowMeasurement: FlowMeasurementServer
        }
    };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = {
        optional: {
            TemperatureMeasurement: TemperatureMeasurementBehavior,
            PressureMeasurement: PressureMeasurementBehavior,
            FlowMeasurement: FlowMeasurementBehavior,
            OccupancySensing: OccupancySensingBehavior
        },

        mandatory: {}
    };
}

export const PumpDeviceDefinition = MutableEndpoint({
    name: "Pump",
    deviceType: 0x303,
    deviceRevision: 2,
    requirements: PumpRequirements,
    behaviors: SupportedBehaviors(PumpRequirements.server.mandatory.OnOff, PumpRequirements.server.mandatory.Identify)
});

export const PumpDevice: PumpDevice = PumpDeviceDefinition;
