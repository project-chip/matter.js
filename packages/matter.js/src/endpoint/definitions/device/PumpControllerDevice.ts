/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { BindingBehavior as BaseBindingBehavior } from "../../../behavior/definitions/binding/BindingBehavior.js";
import { OnOffBehavior as BaseOnOffBehavior } from "../../../behavior/definitions/on-off/OnOffBehavior.js";
import {
    PumpConfigurationAndControlBehavior as BasePumpConfigurationAndControlBehavior
} from "../../../behavior/definitions/pump-configuration-and-control/PumpConfigurationAndControlBehavior.js";
import { IdentifyBehavior as BaseIdentifyBehavior } from "../../../behavior/definitions/identify/IdentifyBehavior.js";
import { GroupsBehavior as BaseGroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { ScenesBehavior as BaseScenesBehavior } from "../../../behavior/definitions/scenes/ScenesBehavior.js";
import {
    LevelControlBehavior as BaseLevelControlBehavior
} from "../../../behavior/definitions/level-control/LevelControlBehavior.js";
import {
    TemperatureMeasurementBehavior as BaseTemperatureMeasurementBehavior
} from "../../../behavior/definitions/temperature-measurement/TemperatureMeasurementBehavior.js";
import {
    PressureMeasurementBehavior as BasePressureMeasurementBehavior
} from "../../../behavior/definitions/pressure-measurement/PressureMeasurementBehavior.js";
import {
    FlowMeasurementBehavior as BaseFlowMeasurementBehavior
} from "../../../behavior/definitions/flow-measurement/FlowMeasurementBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * A Pump Controller device is capable of configuring and controlling a Pump device.
 *
 * @see {@link MatterSpecification.v11.Device} § 6.5
 */
export interface PumpControllerDevice extends Identity<typeof PumpControllerDeviceDefinition> {}

export namespace PumpControllerRequirements {
    /**
     * The Identify cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link IdentifyServer} for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The Binding cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link BindingBehavior} for convenience.
     */
    export const BindingBehavior = BaseBindingBehavior;

    /**
     * The OnOff cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link OnOffBehavior} for convenience.
     */
    export const OnOffBehavior = BaseOnOffBehavior;

    /**
     * The PumpConfigurationAndControl cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link PumpConfigurationAndControlBehavior} for convenience.
     */
    export const PumpConfigurationAndControlBehavior = BasePumpConfigurationAndControlBehavior;

    /**
     * The Identify cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link IdentifyBehavior} for convenience.
     */
    export const IdentifyBehavior = BaseIdentifyBehavior;

    /**
     * The Groups cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link GroupsBehavior} for convenience.
     */
    export const GroupsBehavior = BaseGroupsBehavior;

    /**
     * The Scenes cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link ScenesBehavior} for convenience.
     */
    export const ScenesBehavior = BaseScenesBehavior;

    /**
     * The LevelControl cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link LevelControlBehavior} for convenience.
     */
    export const LevelControlBehavior = BaseLevelControlBehavior;

    /**
     * The TemperatureMeasurement cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link TemperatureMeasurementBehavior} for convenience.
     */
    export const TemperatureMeasurementBehavior = BaseTemperatureMeasurementBehavior;

    /**
     * The PressureMeasurement cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link PressureMeasurementBehavior} for convenience.
     */
    export const PressureMeasurementBehavior = BasePressureMeasurementBehavior;

    /**
     * The FlowMeasurement cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link FlowMeasurementBehavior} for convenience.
     */
    export const FlowMeasurementBehavior = BaseFlowMeasurementBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { mandatory: { Identify: IdentifyServer } };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = {
        mandatory: {
            Binding: BindingBehavior,
            OnOff: OnOffBehavior,
            PumpConfigurationAndControl: PumpConfigurationAndControlBehavior
        },

        optional: {
            Identify: IdentifyBehavior,
            Groups: GroupsBehavior,
            Scenes: ScenesBehavior,
            LevelControl: LevelControlBehavior,
            TemperatureMeasurement: TemperatureMeasurementBehavior,
            PressureMeasurement: PressureMeasurementBehavior,
            FlowMeasurement: FlowMeasurementBehavior
        }
    };
}

export const PumpControllerDeviceDefinition = MutableEndpoint({
    name: "PumpController",
    deviceType: 0x304,
    deviceRevision: 2,
    requirements: PumpControllerRequirements,
    behaviors: SupportedBehaviors(PumpControllerRequirements.server.mandatory.Identify)
});

export const PumpControllerDevice: PumpControllerDevice = PumpControllerDeviceDefinition;
