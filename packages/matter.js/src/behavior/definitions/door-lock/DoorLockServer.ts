/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { DoorLockBehavior } from "./DoorLockBehavior.js";

const Base = DoorLockBehavior.with(
    "PinCredential",
    "RfidCredential",
    "FingerCredentials",
    "Logging",
    "WeekDayAccessSchedules",
    "DoorPositionSensor",
    "FaceCredentials",
    "CredentialOverTheAirAccess",
    "User",
    "Notification",
    "YearDayAccessSchedules",
    "HolidaySchedules"
);

/**
 * This is the default server implementation of DoorLockBehavior.
 *
 * This implementation includes all features of DoorLock.Cluster. You should use DoorLockServer.with to specialize the
 * class for the features your implementation supports.
 */
export class DoorLockServer extends Base {
}
