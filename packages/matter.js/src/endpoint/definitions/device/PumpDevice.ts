/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffServer } from "../../../behavior/definitions/on-off/OnOffServer.js";
import {
    PumpConfigurationAndControlServer
} from "../../../behavior/definitions/pump-configuration-and-control/PumpConfigurationAndControlServer.js";
import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { LevelControlServer } from "../../../behavior/definitions/level-control/LevelControlServer.js";
import { ScenesServer } from "../../../behavior/definitions/scenes/ScenesServer.js";
import { GroupsServer } from "../../../behavior/definitions/groups/GroupsServer.js";
import {
    TemperatureMeasurementBehavior
} from "../../../behavior/definitions/temperature-measurement/TemperatureMeasurementBehavior.js";
import {
    PressureMeasurementBehavior
} from "../../../behavior/definitions/pressure-measurement/PressureMeasurementBehavior.js";
import { FlowMeasurementBehavior } from "../../../behavior/definitions/flow-measurement/FlowMeasurementBehavior.js";
import { OccupancySensingBehavior } from "../../../behavior/definitions/occupancy-sensing/OccupancySensingBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const PumpRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: {
            OnOff: OnOffServer,
            PumpConfigurationAndControl: PumpConfigurationAndControlServer,
            Identify: IdentifyServer
        },
        optional: { LevelControl: LevelControlServer, Scenes: ScenesServer, Groups: GroupsServer }
    },

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
        optional: {
            TemperatureMeasurement: TemperatureMeasurementBehavior,
            PressureMeasurement: PressureMeasurementBehavior,
            FlowMeasurement: FlowMeasurementBehavior,
            OccupancySensing: OccupancySensingBehavior
        }
    }
};

export const PumpDeviceDefinition = MutableEndpoint({
    name: "Pump",
    deviceType: 0x303,
    deviceRevision: 2,
    requirements: PumpRequirements,
    behaviors: SupportedBehaviors(PumpRequirements.server.mandatory.OnOff, PumpRequirements.server.mandatory.Identify)
});

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

export const PumpDevice: PumpDevice = PumpDeviceDefinition;
