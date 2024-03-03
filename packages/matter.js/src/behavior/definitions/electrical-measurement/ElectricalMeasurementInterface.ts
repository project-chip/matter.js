/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { ElectricalMeasurement } from "../../../cluster/definitions/ElectricalMeasurementCluster.js";

export type GetMeasurementProfileCommandRequest = TypeFromSchema<typeof ElectricalMeasurement.TlvGetMeasurementProfileCommandRequest>;

export namespace ElectricalMeasurementInterface {
    export interface Base {
        getProfileInfoCommand(): MaybePromise;
        getMeasurementProfileCommand(request: GetMeasurementProfileCommandRequest): MaybePromise;
    }
}

export type ElectricalMeasurementInterface = { components: [{ flags: {}, methods: ElectricalMeasurementInterface.Base }] };
