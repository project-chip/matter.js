/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { UnitLocalizationBehavior } from "./UnitLocalizationBehavior.js";
import { UnitLocalization } from "../../../cluster/definitions/UnitLocalizationCluster.js";

const Base = UnitLocalizationBehavior.for(UnitLocalization.Complete);

/**
 * This is the default server implementation of UnitLocalizationBehavior.
 *
 * This implementation includes all features of UnitLocalization.Cluster. You should use UnitLocalizationServer.with to
 * specialize the class for the features your implementation supports.
 */
export class UnitLocalizationServer extends Base {
}
