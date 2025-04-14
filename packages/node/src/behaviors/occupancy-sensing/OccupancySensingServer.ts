/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OccupancySensing } from "#clusters/occupancy-sensing";
import { Logger, MaybePromise } from "#general";
import { OccupancySensingBehavior } from "./OccupancySensingBehavior.js";

const logger = Logger.get("OccupancySensingServer");

/**
 * This is the default server implementation of {@link OccupancySensingBehavior}.
 *
 * The Matter specification requires the OccupancySensing cluster to support features we do not enable by default. You
 * should use {@link OccupancySensingServer.with} to specialize the class for the features your implementation supports.
 */
export class OccupancySensingServer extends OccupancySensingBehavior {
    override initialize(): MaybePromise {
        if (!Object.values(this.features).some(feature => feature)) {
            logger.error(
                `OccupancySensingServer: Since revision 5 of the cluster features need to be set based on the detector type. Currently no features are enabled.`,
            );
        } else if (
            !Object.values(this.state.occupancySensorTypeBitmap).some(feature => feature) ||
            this.state.occupancySensorType === undefined
        ) {
            // Conveniently fill in existing occupancySensorTypeBitmap and occupancySensorType attributes based on the
            // features
            let adjusted = false;
            if (this.features.passiveInfrared) {
                this.state.occupancySensorTypeBitmap.pir = true;
                adjusted = true;
            }
            if (this.features.ultrasonic) {
                this.state.occupancySensorTypeBitmap.ultrasonic = true;
                adjusted = true;
            }
            if (this.features.physicalContact) {
                this.state.occupancySensorTypeBitmap.physicalContact = true;
                adjusted = true;
            }
            if (adjusted) {
                if (this.state.occupancySensorTypeBitmap.pir) {
                    if (this.state.occupancySensorTypeBitmap.ultrasonic) {
                        this.state.occupancySensorType = OccupancySensing.OccupancySensorType.PirAndUltrasonic;
                    } else {
                        this.state.occupancySensorType = OccupancySensing.OccupancySensorType.Pir;
                    }
                } else if (this.state.occupancySensorTypeBitmap.physicalContact) {
                    this.state.occupancySensorType = OccupancySensing.OccupancySensorType.PhysicalContact;
                }
                logger.debug(
                    "Sync occupancySensorType to",
                    OccupancySensing.OccupancySensorType[this.state.occupancySensorType],
                    "and occupancySensorTypeBitmap to",
                    this.state.occupancySensorTypeBitmap,
                    "from features",
                    this.features,
                );
            }
        }
    }
}
