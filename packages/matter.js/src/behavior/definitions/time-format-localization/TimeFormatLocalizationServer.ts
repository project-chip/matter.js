/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { TimeFormatLocalizationBehavior } from "./TimeFormatLocalizationBehavior.js";
import { TimeFormatLocalization } from "../../../cluster/definitions/TimeFormatLocalizationCluster.js";

const Base = TimeFormatLocalizationBehavior.for(TimeFormatLocalization.Complete);

/**
 * This is the default server implementation of TimeFormatLocalizationBehavior.
 *
 * This implementation includes all features of TimeFormatLocalization.Cluster. You should use
 * TimeFormatLocalizationServer.with to specialize the class for the features your implementation supports.
 */
export class TimeFormatLocalizationServer extends Base {
}
