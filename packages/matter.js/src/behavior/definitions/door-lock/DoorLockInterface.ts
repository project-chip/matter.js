/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { DoorLock } from "../../../cluster/definitions/DoorLockCluster.js";

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type LockDoorRequest = TypeFromSchema<typeof DoorLock.TlvLockDoorRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type UnlockDoorRequest = TypeFromSchema<typeof DoorLock.TlvUnlockDoorRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type UnlockWithTimeoutRequest = TypeFromSchema<typeof DoorLock.TlvUnlockWithTimeoutRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type SetUserRequest = TypeFromSchema<typeof DoorLock.TlvSetUserRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type GetUserRequest = TypeFromSchema<typeof DoorLock.TlvGetUserRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type GetUserResponse = TypeFromSchema<typeof DoorLock.TlvGetUserResponse>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type ClearUserRequest = TypeFromSchema<typeof DoorLock.TlvClearUserRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type SetCredentialRequest = TypeFromSchema<typeof DoorLock.TlvSetCredentialRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type SetCredentialResponse = TypeFromSchema<typeof DoorLock.TlvSetCredentialResponse>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type GetCredentialStatusRequest = TypeFromSchema<typeof DoorLock.TlvGetCredentialStatusRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type GetCredentialStatusResponse = TypeFromSchema<typeof DoorLock.TlvGetCredentialStatusResponse>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type ClearCredentialRequest = TypeFromSchema<typeof DoorLock.TlvClearCredentialRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type SetWeekDayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvSetWeekDayScheduleRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type GetWeekDayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvGetWeekDayScheduleRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type GetWeekDayScheduleResponse = TypeFromSchema<typeof DoorLock.TlvGetWeekDayScheduleResponse>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type ClearWeekDayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvClearWeekDayScheduleRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type SetYearDayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvSetYearDayScheduleRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type GetYearDayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvGetYearDayScheduleRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type GetYearDayScheduleResponse = TypeFromSchema<typeof DoorLock.TlvGetYearDayScheduleResponse>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type ClearYearDayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvClearYearDayScheduleRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type SetHolidayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvSetHolidayScheduleRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type GetHolidayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvGetHolidayScheduleRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type GetHolidayScheduleResponse = TypeFromSchema<typeof DoorLock.TlvGetHolidayScheduleResponse>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
 */
export type ClearHolidayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvClearHolidayScheduleRequest>;

export namespace DoorLockInterface {
    export interface Base {
        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        lockDoor(request: LockDoorRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        unlockDoor(request: UnlockDoorRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        unlockWithTimeout(request: UnlockWithTimeoutRequest): MaybePromise;
    }

    export interface Logging {
        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        getLogRecord(): MaybePromise;
    }

    export interface User {
        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        setUser(request: SetUserRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        getUser(request: GetUserRequest): MaybePromise<GetUserResponse>;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        clearUser(request: ClearUserRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        setCredential(request: SetCredentialRequest): MaybePromise<SetCredentialResponse>;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        getCredentialStatus(request: GetCredentialStatusRequest): MaybePromise<GetCredentialStatusResponse>;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        clearCredential(request: ClearCredentialRequest): MaybePromise;
    }

    export interface WeekDayAccessSchedules {
        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        setWeekDaySchedule(request: SetWeekDayScheduleRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        getWeekDaySchedule(request: GetWeekDayScheduleRequest): MaybePromise<GetWeekDayScheduleResponse>;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        clearWeekDaySchedule(request: ClearWeekDayScheduleRequest): MaybePromise;
    }

    export interface YearDayAccessSchedules {
        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        setYearDaySchedule(request: SetYearDayScheduleRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        getYearDaySchedule(request: GetYearDayScheduleRequest): MaybePromise<GetYearDayScheduleResponse>;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        clearYearDaySchedule(request: ClearYearDayScheduleRequest): MaybePromise;
    }

    export interface HolidaySchedules {
        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        setHolidaySchedule(request: SetHolidayScheduleRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        getHolidaySchedule(request: GetHolidayScheduleRequest): MaybePromise<GetHolidayScheduleResponse>;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        clearHolidaySchedule(request: ClearHolidayScheduleRequest): MaybePromise;
    }

    export interface PinCredentialNotUser {
        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        setPinCode(): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        getPinCode(): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        clearPinCode(): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        clearAllPinCodes(): MaybePromise;
    }

    export interface PinCredentialAndRfidCredentialAndFingerCredentialsNotUser {
        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        setUserStatus(): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        getUserStatus(): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        setUserType(): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        getUserType(): MaybePromise;
    }

    export interface RfidCredentialNotUser {
        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        setRfidCode(): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        getRfidCode(): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        clearRfidCode(): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
         */
        clearAllRfidCodes(): MaybePromise;
    }
}

export type DoorLockInterface = {
    components: [
        { flags: {}, methods: DoorLockInterface.Base },
        { flags: { logging: true }, methods: DoorLockInterface.Logging },
        { flags: { user: true }, methods: DoorLockInterface.User },
        { flags: { weekDayAccessSchedules: true }, methods: DoorLockInterface.WeekDayAccessSchedules },
        { flags: { yearDayAccessSchedules: true }, methods: DoorLockInterface.YearDayAccessSchedules },
        { flags: { holidaySchedules: true }, methods: DoorLockInterface.HolidaySchedules },
        { flags: { pinCredential: true, user: false }, methods: DoorLockInterface.PinCredentialNotUser },
        {
            flags: { pinCredential: true, rfidCredential: true, fingerCredentials: true, user: false },
            methods: DoorLockInterface.PinCredentialAndRfidCredentialAndFingerCredentialsNotUser
        },
        { flags: { rfidCredential: true, user: false }, methods: DoorLockInterface.RfidCredentialNotUser }
    ]
};
