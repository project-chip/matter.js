/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Type.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { ElectricalMeasurement } from "../../../cluster/definitions/ElectricalMeasurementCluster.js";

export type GetMeasurementProfileCommandRequest = TypeFromSchema<typeof ElectricalMeasurement.TlvGetMeasurementProfileCommandRequest>;

export namespace ElectricalMeasurementInterface {
    export interface Base {
        getProfileInfoCommand(): MaybePromise<void>;
        getMeasurementProfileCommand(request: GetMeasurementProfileCommandRequest): MaybePromise<void>;
    }
}

export type ElectricalMeasurementInterface = { components: [{ flags: {}, methods: ElectricalMeasurementInterface.Base }] };
