/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import {
    Attribute,
    OptionalWritableAttribute,
    AccessLevel,
    Event,
    EventPriority,
    FixedAttribute,
    WritableAttribute,
    Command,
    TlvNoResponse,
    OptionalCommand,
    OptionalAttribute
} from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt32, TlvUInt16, TlvUInt8, TlvBitmap, TlvEpochS } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BitFlag, BitsFromPartial } from "../../schema/BitmapSchema.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvFabricIndex } from "../../datatype/FabricIndex.js";
import { TlvNodeId } from "../../datatype/NodeId.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace DoorLock {
    /**
     * The DoorState enumeration shall indicate the current door state. The data type of the DoorState
     *
     * enum field is derived from enum8.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.7
     */
    export enum DoorState {
        /**
         * Door state is open
         */
        DoorOpen = 0,

        /**
         * Door state is closed
         */
        DoorClosed = 1,

        /**
         * Door state is jammed
         */
        DoorJammed = 2,

        /**
         * Door state is currently forced open
         */
        DoorForcedOpen = 3,

        /**
         * Door state is invalid for unspecified reason
         */
        DoorUnspecifiedError = 4,

        /**
         * Door state is ajar
         */
        DoorAjar = 5
    }

    /**
     * Body of the DoorLock doorStateChange event
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.2
     */
    export const TlvDoorStateChangeEvent = TlvObject({
        /**
         * The new door state for this door event.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.2.1
         */
        doorState: TlvField(0, TlvEnum<DoorState>())
    });

    /**
     * Body of the DoorLock doorStateChange event
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.2
     */
    export interface DoorStateChangeEvent extends TypeFromSchema<typeof TlvDoorStateChangeEvent> {}

    /**
     * The value of the DoorLock credentialRulesSupport attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.19
     */
    export const CredentialRulesSupport = { single: BitFlag(0), dual: BitFlag(1), tri: BitFlag(2) };

    /**
     * The DataOperationType enum shall indicate the data operation performed.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.5
     */
    export enum DataOperationType {
        /**
         * Data is being added or was added
         */
        Add = 0,

        /**
         * Data is being cleared or was cleared
         */
        Clear = 1,

        /**
         * Data is being modified or was modified
         */
        Modify = 2
    }

    /**
     * The UserStatus enum used in various commands shall indicate what the status is for a specific user ID.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.15
     */
    export enum UserStatus {
        Available = 0,
        OccupiedEnabled = 1,
        OccupiedDisabled = 3
    }

    /**
     * The UserType enum used in various commands shall indicate what the type is for a specific user ID.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.16
     */
    export enum UserType {
        /**
         * User has access 24/7 provided proper PIN or RFID is supplied (e.g., owner).
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.16.1
         */
        UnrestrictedUser = 0,

        /**
         * User has ability to open lock within a specific time period (e.g., guest).
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.16.2
         */
        YearDayScheduleUser = 1,

        /**
         * User has ability to open lock based on specific time period within a reoccurring weekly schedule (e.g.,
         * cleaning worker).
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.16.3
         */
        WeekDayScheduleUser = 2,

        /**
         * User has ability to both program and operate the door lock. This user can manage the users and user
         * schedules. In all other respects this user matches the unrestricted (default) user. ProgrammingUser is the
         * only user that can disable the user interface (keypad, remote, etc…).
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.16.4
         */
        ProgrammingUser = 3,

        /**
         * User is recognized by the lock but does not have the ability to open the lock. This user will only cause the
         * lock to generate the appropriate event notification to any bound devices.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.16.5
         */
        NonAccessUser = 4,

        /**
         * User has ability to open lock but a ForcedUser LockOperationType and ForcedUser silent alarm will be emitted
         * to allow a notified Node to alert emergency services or contacts on the user account when used.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.16.6
         */
        ForcedUser = 5,

        /**
         * User has ability to open lock once after which the lock shall change the corresponding user record
         * UserStatus value to OccupiedDisabled automatically.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.16.7
         */
        DisposableUser = 6,

        /**
         * User has ability to open lock for ExpiringUserTimeout attribute minutes after the first use of the PIN code,
         * RFID code, Fingerprint, or other credential. After ExpiringUserTimeout minutes the corresponding user record
         * UserStatus value shall be set to OccupiedDisabled automatically by the lock. The lock shall persist the
         * timeout across reboots such that the ExpiringUserTimeout is honored.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.16.8
         */
        ExpiringUser = 7,

        /**
         * User access is restricted by Week Day and/or Year Day schedule.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.16.9
         */
        ScheduleRestrictedUser = 8,

        /**
         * User access and PIN code is restricted to remote lock/unlock commands only. This type of user might be
         * useful for regular delivery services or voice assistant unlocking operations to prevent a PIN code
         * credential created for them from being used at the keypad. The PIN code credential would only be provided
         * over-the-air for the lock/unlock commands.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.16.10
         */
        RemoteOnlyUser = 9
    }

    /**
     * The CredentialRule enum used in various commands shall indicate the credential rule that can be applied to a
     * particular user.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.2
     */
    export enum CredentialRule {
        Single = 0,
        Dual = 1,
        Tri = 2
    }

    /**
     * Input to the DoorLock setUser command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvSetUserRequest = TlvObject({
        operationType: TlvField(0, TlvEnum<DataOperationType>()),
        userIndex: TlvField(1, TlvUInt16),
        userName: TlvField(2, TlvNullable(TlvString)),
        userUniqueId: TlvField(3, TlvNullable(TlvUInt32)),
        userStatus: TlvField(4, TlvNullable(TlvEnum<UserStatus>())),
        userType: TlvField(5, TlvNullable(TlvEnum<UserType>())),
        credentialRule: TlvField(6, TlvNullable(TlvEnum<CredentialRule>()))
    });

    /**
     * Input to the DoorLock setUser command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface SetUserRequest extends TypeFromSchema<typeof TlvSetUserRequest> {}

    /**
     * Input to the DoorLock getUser command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvGetUserRequest = TlvObject({ userIndex: TlvField(0, TlvUInt16) });

    /**
     * Input to the DoorLock getUser command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface GetUserRequest extends TypeFromSchema<typeof TlvGetUserRequest> {}

    /**
     * The Credential Type enum shall indicate the credential type.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.4
     */
    export enum CredentialType {
        ProgrammingPin = 0,
        Pin = 1,
        Rfid = 2,
        Fingerprint = 3,
        FingerVein = 4,
        Face = 5
    }

    /**
     * The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
     * credential types and their corresponding indices (if any) for the event or user record.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.3
     */
    export const TlvCredentialStruct = TlvObject({
        /**
         * The credential type used to authorize the lock operation.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.3.1
         */
        credentialType: TlvField(0, TlvEnum<CredentialType>()),

        /**
         * This is the index of the specific credential used to authorize the lock operation in the list of credentials
         * identified by CredentialType (e.g. schedule, PIN, RFID, etc.). This shall be set to 0 if CredentialType is
         * ProgrammingPIN or does not correspond to a list that can be indexed into.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.3.2
         */
        credentialIndex: TlvField(1, TlvUInt16)
    });

    /**
     * The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
     * credential types and their corresponding indices (if any) for the event or user record.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.3
     */
    export interface CredentialStruct extends TypeFromSchema<typeof TlvCredentialStruct> {}

    /**
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvGetUserResponse = TlvObject({
        userIndex: TlvField(0, TlvUInt16),
        userName: TlvField(1, TlvNullable(TlvString)),
        userUniqueId: TlvField(2, TlvNullable(TlvUInt32)),
        userStatus: TlvField(3, TlvNullable(TlvEnum<UserStatus>())),
        userType: TlvField(4, TlvNullable(TlvEnum<UserType>())),
        credentialRule: TlvField(5, TlvNullable(TlvEnum<CredentialRule>())),
        credentials: TlvField(6, TlvNullable(TlvArray(TlvCredentialStruct))),
        creatorFabricIndex: TlvField(7, TlvNullable(TlvFabricIndex)),
        lastModifiedFabricIndex: TlvField(8, TlvNullable(TlvFabricIndex)),
        nextUserIndex: TlvField(9, TlvNullable(TlvUInt16))
    });

    /**
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface GetUserResponse extends TypeFromSchema<typeof TlvGetUserResponse> {}

    /**
     * Input to the DoorLock clearUser command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvClearUserRequest = TlvObject({ userIndex: TlvField(0, TlvUInt16) });

    /**
     * Input to the DoorLock clearUser command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface ClearUserRequest extends TypeFromSchema<typeof TlvClearUserRequest> {}

    /**
     * Input to the DoorLock setCredential command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvSetCredentialRequest = TlvObject({
        operationType: TlvField(0, TlvEnum<DataOperationType>()),
        credential: TlvField(1, TlvCredentialStruct),
        credentialData: TlvField(2, TlvByteString),
        userIndex: TlvField(3, TlvNullable(TlvUInt16)),
        userStatus: TlvField(4, TlvNullable(TlvEnum<UserStatus>())),
        userType: TlvField(5, TlvNullable(TlvEnum<UserType>()))
    });

    /**
     * Input to the DoorLock setCredential command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface SetCredentialRequest extends TypeFromSchema<typeof TlvSetCredentialRequest> {}

    export enum DlStatus {
        Success = 0,
        Failure = 1,
        Duplicate = 2,
        Occupied = 3,
        InvalidField = 133,
        ResourceExhausted = 137,
        NotFound = 139
    }

    /**
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvSetCredentialResponse = TlvObject({
        status: TlvField(0, TlvEnum<DlStatus>()),
        userIndex: TlvField(1, TlvNullable(TlvUInt16)),
        nextCredentialIndex: TlvField(2, TlvNullable(TlvUInt16))
    });

    /**
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface SetCredentialResponse extends TypeFromSchema<typeof TlvSetCredentialResponse> {}

    /**
     * Input to the DoorLock getCredentialStatus command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvGetCredentialStatusRequest = TlvObject({ credential: TlvField(0, TlvCredentialStruct) });

    /**
     * Input to the DoorLock getCredentialStatus command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface GetCredentialStatusRequest extends TypeFromSchema<typeof TlvGetCredentialStatusRequest> {}

    /**
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvGetCredentialStatusResponse = TlvObject({
        credentialExists: TlvField(0, TlvBoolean),
        userIndex: TlvField(1, TlvNullable(TlvUInt16)),
        creatorFabricIndex: TlvField(2, TlvNullable(TlvFabricIndex)),
        lastModifiedFabricIndex: TlvField(3, TlvNullable(TlvFabricIndex)),
        nextCredentialIndex: TlvField(4, TlvNullable(TlvUInt16))
    });

    /**
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface GetCredentialStatusResponse extends TypeFromSchema<typeof TlvGetCredentialStatusResponse> {}

    /**
     * Input to the DoorLock clearCredential command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvClearCredentialRequest = TlvObject({ credential: TlvField(0, TlvNullable(TlvCredentialStruct)) });

    /**
     * Input to the DoorLock clearCredential command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface ClearCredentialRequest extends TypeFromSchema<typeof TlvClearCredentialRequest> {}

    /**
     * The LockDataType enum shall indicate the data type that is being or has changed.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.9
     */
    export enum LockDataType {
        /**
         * Unspecified or manufacturer specific lock user data added, cleared, or modified.
         */
        Unspecified = 0,

        /**
         * Lock programming PIN code was added, cleared, or modified.
         */
        ProgrammingCode = 1,

        /**
         * Lock user index was added, cleared, or modified.
         */
        UserIndex = 2,

        /**
         * Lock user week day schedule was added, cleared, or modified.
         */
        WeekDaySchedule = 3,

        /**
         * Lock user year day schedule was added, cleared, or modified.
         */
        YearDaySchedule = 4,

        /**
         * Lock holiday schedule was added, cleared, or modified.
         */
        HolidaySchedule = 5,

        /**
         * Lock user PIN code was added, cleared, or modified.
         */
        Pin = 6,

        /**
         * Lock user RFID code was added, cleared, or modified.
         */
        Rfid = 7,

        /**
         * Lock user fingerprint was added, cleared, or modified.
         */
        Fingerprint = 8,

        /**
         * Lock user finger-vein information was added, cleared, or modified.
         */
        FingerVein = 9,

        /**
         * Lock user face information was added, cleared, or modified.
         */
        Face = 10
    }

    /**
     * The OperationSource enumeration shall indicate the source of the Lock/Unlock operation performed.
     *
     * 5.2.6.14. PIN/RFID Code Format
     *
     * The PIN/RFID codes defined in this specification are all octet strings.
     *
     * All value in the PIN/RFID code shall be ASCII encoded regardless if the PIN/RFID codes are number or characters.
     * For example, code of “1, 2, 3, 4” shall be represented as 0x31, 0x32, 0x33, 0x34.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.13
     */
    export enum OperationSource {
        Unspecified = 0,
        Manual = 1,
        ProprietaryRemote = 2,
        Keypad = 3,
        Auto = 4,
        Button = 5,
        Schedule = 6,
        Remote = 7,
        Rfid = 8,
        Biometric = 9
    }

    /**
     * Body of the DoorLock lockUserChange event
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.5
     */
    export const TlvLockUserChangeEvent = TlvObject({
        /**
         * The lock data type that was changed.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.5.1
         */
        lockDataType: TlvField(0, TlvEnum<LockDataType>()),

        /**
         * The data operation performed on the lock data type changed.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.5.2
         */
        dataOperationType: TlvField(1, TlvEnum<DataOperationType>()),

        /**
         * The source of the user data change.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.5.3
         */
        operationSource: TlvField(2, TlvEnum<OperationSource>()),

        /**
         * The lock UserIndex associated with the change (if any). This shall be null if there is no specific user
         * associated with the data operation. This shall be 0xFFFE if all users are affected (e.g. Clear Users).
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.5.4
         */
        userIndex: TlvField(3, TlvNullable(TlvUInt16)),

        /**
         * The fabric index of the fabric that performed the change (if any). This shall be null if there is no fabric
         * that can be determined to have caused the change. This shall NOT be null if the operation source is "Remote".
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.5.5
         */
        fabricIndex: TlvField(4, TlvNullable(TlvFabricIndex)),

        /**
         * The Node ID that that performed the change (if any). The Node ID of the node that performed the change. This
         * shall be null if there was no Node involved in the change. This shall NOT be null if the operation source is
         * "Remote".
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.5.6
         */
        sourceNode: TlvField(5, TlvNullable(TlvNodeId)),

        /**
         * This is the index of the specific item that was changed (e.g. schedule, PIN, RFID, etc.) in the list of
         * items identified by LockDataType. This shall be null if the LockDataType does not correspond to a list that
         * can be indexed into (e.g. ProgrammingUser). This shall be 0xFFFE if all indices are affected (e.g. Clear PIN
         * Code, Clear RFID Code, Clear Week Day Schedule, Clear Year Day Schedule, etc.).
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.5.7
         */
        dataIndex: TlvField(6, TlvNullable(TlvUInt16))
    });

    /**
     * Body of the DoorLock lockUserChange event
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.5
     */
    export interface LockUserChangeEvent extends TypeFromSchema<typeof TlvLockUserChangeEvent> {}

    /**
     * The DaysMask field used in various commands and shall indicate the days of the week the Week Day schedule
     * applies for.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.6
     */
    export const DaysMaskMap = {
        sunday: BitFlag(0),
        monday: BitFlag(1),
        tuesday: BitFlag(2),
        wednesday: BitFlag(3),
        thursday: BitFlag(4),
        friday: BitFlag(5),
        saturday: BitFlag(6)
    };

    /**
     * Input to the DoorLock setWeekDaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvSetWeekDayScheduleRequest = TlvObject({
        weekDayIndex: TlvField(0, TlvUInt8),
        userIndex: TlvField(1, TlvUInt16),
        daysMask: TlvField(2, TlvBitmap(TlvUInt8, DaysMaskMap)),
        startHour: TlvField(3, TlvUInt8),
        startMinute: TlvField(4, TlvUInt8),
        endHour: TlvField(5, TlvUInt8),
        endMinute: TlvField(6, TlvUInt8)
    });

    /**
     * Input to the DoorLock setWeekDaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface SetWeekDayScheduleRequest extends TypeFromSchema<typeof TlvSetWeekDayScheduleRequest> {}

    /**
     * Input to the DoorLock getWeekDaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvGetWeekDayScheduleRequest = TlvObject({
        weekDayIndex: TlvField(0, TlvUInt8),
        userIndex: TlvField(1, TlvUInt16)
    });

    /**
     * Input to the DoorLock getWeekDaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface GetWeekDayScheduleRequest extends TypeFromSchema<typeof TlvGetWeekDayScheduleRequest> {}

    /**
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvGetWeekDayScheduleResponse = TlvObject({
        weekDayIndex: TlvField(0, TlvUInt8),
        userIndex: TlvField(1, TlvUInt16),
        status: TlvField(2, TlvEnum<DlStatus>()),
        daysMask: TlvOptionalField(3, TlvBitmap(TlvUInt8, DaysMaskMap)),
        startHour: TlvOptionalField(4, TlvUInt8),
        startMinute: TlvOptionalField(5, TlvUInt8),
        endHour: TlvOptionalField(6, TlvUInt8),
        endMinute: TlvOptionalField(7, TlvUInt8)
    });

    /**
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface GetWeekDayScheduleResponse extends TypeFromSchema<typeof TlvGetWeekDayScheduleResponse> {}

    /**
     * Input to the DoorLock clearWeekDaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvClearWeekDayScheduleRequest = TlvObject({
        weekDayIndex: TlvField(0, TlvUInt8),
        userIndex: TlvField(1, TlvUInt16)
    });

    /**
     * Input to the DoorLock clearWeekDaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface ClearWeekDayScheduleRequest extends TypeFromSchema<typeof TlvClearWeekDayScheduleRequest> {}

    /**
     * Input to the DoorLock setYearDaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvSetYearDayScheduleRequest = TlvObject({
        yearDayIndex: TlvField(0, TlvUInt8),
        userIndex: TlvField(1, TlvUInt16),
        localStartTime: TlvField(2, TlvEpochS),
        localEndTime: TlvField(3, TlvEpochS)
    });

    /**
     * Input to the DoorLock setYearDaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface SetYearDayScheduleRequest extends TypeFromSchema<typeof TlvSetYearDayScheduleRequest> {}

    /**
     * Input to the DoorLock getYearDaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvGetYearDayScheduleRequest = TlvObject({
        yearDayIndex: TlvField(0, TlvUInt8),
        userIndex: TlvField(1, TlvUInt16)
    });

    /**
     * Input to the DoorLock getYearDaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface GetYearDayScheduleRequest extends TypeFromSchema<typeof TlvGetYearDayScheduleRequest> {}

    /**
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvGetYearDayScheduleResponse = TlvObject({
        yearDayIndex: TlvField(0, TlvUInt8),
        userIndex: TlvField(1, TlvUInt16),
        status: TlvField(2, TlvEnum<DlStatus>()),
        localStartTime: TlvOptionalField(3, TlvEpochS),
        localEndTime: TlvOptionalField(4, TlvEpochS)
    });

    /**
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface GetYearDayScheduleResponse extends TypeFromSchema<typeof TlvGetYearDayScheduleResponse> {}

    /**
     * Input to the DoorLock clearYearDaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvClearYearDayScheduleRequest = TlvObject({
        yearDayIndex: TlvField(0, TlvUInt8),
        userIndex: TlvField(1, TlvUInt16)
    });

    /**
     * Input to the DoorLock clearYearDaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface ClearYearDayScheduleRequest extends TypeFromSchema<typeof TlvClearYearDayScheduleRequest> {}

    /**
     * The OperatingMode enumeration shall indicate the lock operating mode.
     *
     * The table below shows the operating mode and which interfaces are enabled, if supported, for each mode.
     *
     * Note: For modes that disable the remote interface, the door lock shall respond to Lock, Unlock, Toggle, and
     * Unlock with Timeout commands with a response status Failure and not take the action requested by those commands.
     * The door lock shall NOT disable the radio or otherwise unbind or leave the network. It shall still respond to
     * all other commands and requests.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.12
     */
    export enum OperatingMode {
        /**
         * The lock operates normally. All interfaces are enabled.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.12.1
         */
        Normal = 0,

        /**
         * Only remote interaction is enabled. The keypad shall only be operable by the master user.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.12.2
         */
        Vacation = 1,

        /**
         * This mode is only possible if the door is locked. Manual unlocking changes the mode to Normal operating
         * mode. All external interaction with the door lock is disabled. This mode is intended to be used so that
         * users, presumably inside the property, will have control over the entrance.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.12.3
         */
        Privacy = 2,

        /**
         * This mode only disables remote interaction with the lock. This does not apply to any remote proprietary
         * means of communication. It specifically applies to the Lock, Unlock, Toggle, and Unlock with Timeout
         * Commands.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.12.4
         */
        NoRemoteLockUnlock = 3,

        /**
         * The lock is open or can be opened or closed at will without the use of a Keypad or other means of user
         * validation (e.g. a lock for a business during work hours).
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.12.5
         */
        Passage = 4
    }

    /**
     * Input to the DoorLock setHolidaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvSetHolidayScheduleRequest = TlvObject({
        holidayIndex: TlvField(0, TlvUInt8),
        localStartTime: TlvField(1, TlvEpochS),
        localEndTime: TlvField(2, TlvEpochS),
        operatingMode: TlvField(3, TlvEnum<OperatingMode>())
    });

    /**
     * Input to the DoorLock setHolidaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface SetHolidayScheduleRequest extends TypeFromSchema<typeof TlvSetHolidayScheduleRequest> {}

    /**
     * Input to the DoorLock getHolidaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvGetHolidayScheduleRequest = TlvObject({ holidayIndex: TlvField(0, TlvUInt8) });

    /**
     * Input to the DoorLock getHolidaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface GetHolidayScheduleRequest extends TypeFromSchema<typeof TlvGetHolidayScheduleRequest> {}

    /**
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvGetHolidayScheduleResponse = TlvObject({
        holidayIndex: TlvField(0, TlvUInt8),
        status: TlvField(1, TlvEnum<DlStatus>()),
        localStartTime: TlvOptionalField(2, TlvEpochS),
        localEndTime: TlvOptionalField(3, TlvEpochS),
        operatingMode: TlvOptionalField(4, TlvEnum<OperatingMode>())
    });

    /**
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface GetHolidayScheduleResponse extends TypeFromSchema<typeof TlvGetHolidayScheduleResponse> {}

    /**
     * Input to the DoorLock clearHolidaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvClearHolidayScheduleRequest = TlvObject({ holidayIndex: TlvField(0, TlvUInt8) });

    /**
     * Input to the DoorLock clearHolidaySchedule command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface ClearHolidayScheduleRequest extends TypeFromSchema<typeof TlvClearHolidayScheduleRequest> {}

    /**
     * The value of the DoorLock keypadOperationEventMask attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.40
     */
    export const KeypadOperationEventMask = {
        unknownOrManufacturerSpecificKeypadOperationEvent: BitFlag(0),
        lockSourceKeypad: BitFlag(1),
        unlockSourceKeypad: BitFlag(2),
        lockSourceKeypadErrorInvalidPin: BitFlag(3),
        lockSourceKeypadErrorInvalidSchedule: BitFlag(4),
        unlockSourceKeypadErrorInvalidCode: BitFlag(5),
        unlockSourceKeypadErrorInvalidSchedule: BitFlag(6),
        nonAccessUserOperationEventSourceKeypad: BitFlag(15)
    };

    /**
     * The value of the DoorLock keypadProgrammingEventMask attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.44
     */
    export const KeypadProgrammingEventMask = {
        unknown: BitFlag(0),
        pinCodeChanged: BitFlag(1),
        pinAdded: BitFlag(2),
        pinCleared: BitFlag(3),
        pinChanged: BitFlag(4)
    };

    /**
     * The value of the DoorLock remoteOperationEventMask attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.41
     */
    export const RemoteOperationEventMask = {
        unknownOrManufacturerSpecificRemoteOperationEvent: BitFlag(0),
        lockSourceRemote: BitFlag(1),
        unlockSourceRemote: BitFlag(2),
        lockSourceRemoteErrorInvalidCode: BitFlag(3),
        lockSourceRemoteErrorInvalidSchedule: BitFlag(4),
        unlockSourceRemoteErrorInvalidCode: BitFlag(5),
        unlockSourceRemoteErrorInvalidSchedule: BitFlag(6)
    };

    /**
     * The value of the DoorLock manualOperationEventMask attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.42
     */
    export const ManualOperationEventMask = {
        unknownOrManufacturerSpecificManualOperationEvent: BitFlag(0),
        thumbturnLock: BitFlag(1),
        thumbturnUnlock: BitFlag(2),
        oneTouchLock: BitFlag(7),
        keyLock: BitFlag(8),
        keyUnlock: BitFlag(9),
        autoLock: BitFlag(10),
        scheduleLock: BitFlag(11),
        scheduleUnlock: BitFlag(12),
        manualLock: BitFlag(13),
        manualUnlock: BitFlag(14)
    };

    /**
     * The value of the DoorLock remoteProgrammingEventMask attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.45
     */
    export const RemoteProgrammingEventMask = {
        unknown: BitFlag(0),
        pinAdded: BitFlag(2),
        pinCleared: BitFlag(3),
        pinChanged: BitFlag(4),
        rfidCodeAdded: BitFlag(5),
        rfidCodeCleared: BitFlag(6)
    };

    /**
     * The value of the DoorLock rfidOperationEventMask attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.43
     */
    export const RfidOperationEventMask = {
        unknownOrManufacturerSpecificKeypadOperationEvent: BitFlag(0),
        lockSourceRfid: BitFlag(1),
        unlockSourceRfid: BitFlag(2),
        lockSourceRfidErrorInvalidRfidId: BitFlag(3),
        lockSourceRfidErrorInvalidSchedule: BitFlag(4),
        unlockSourceRfidErrorInvalidRfidId: BitFlag(5),
        unlockSourceRfidErrorInvalidSchedule: BitFlag(6)
    };

    /**
     * The value of the DoorLock rfidProgrammingEventMask attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.46
     */
    export const RfidProgrammingEventMask = { unknown: BitFlag(0), idAdded: BitFlag(5), idCleared: BitFlag(6) };

    /**
     * The value of the DoorLock lockState attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.1
     */
    export enum LockState {
        /**
         * Lock state is not fully locked
         */
        NotFullyLocked = 0,

        /**
         * Lock state is fully locked
         */
        Locked = 1,

        /**
         * Lock state is fully unlocked
         */
        Unlocked = 2
    }

    /**
     * The value of the DoorLock lockType attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.2
     */
    export enum LockType {
        /**
         * Physical lock type is dead bolt
         */
        Deadbolt = 0,

        /**
         * Physical lock type is magnetic
         */
        Magnetic = 1,

        /**
         * Physical lock type is other
         */
        Other = 2,

        /**
         * Physical lock type is mortise
         */
        Mortise = 3,

        /**
         * Physical lock type is rim
         */
        Rim = 4,

        /**
         * Physical lock type is latch bolt
         */
        LatchBolt = 5,

        /**
         * Physical lock type is cylindrical lock
         */
        CylindricalLock = 6,

        /**
         * Physical lock type is tubular lock
         */
        TubularLock = 7,

        /**
         * Physical lock type is interconnected lock
         */
        InterconnectedLock = 8,

        /**
         * Physical lock type is dead latch
         */
        DeadLatch = 9,

        /**
         * Physical lock type is door furniture
         */
        DoorFurniture = 10
    }

    /**
     * The value of the DoorLock supportedOperatingModes attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.24
     */
    export const SupportedOperatingModes = {
        normal: BitFlag(0),
        vacation: BitFlag(1),
        privacy: BitFlag(2),
        noRemoteLockUnlock: BitFlag(3),
        passage: BitFlag(4)
    };

    /**
     * The value of the DoorLock defaultConfigurationRegister attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.28
     */
    export const DefaultConfigurationRegister = {
        enableLocalProgrammingEnabled: BitFlag(0),
        keypadInterfaceDefaultAccessEnabled: BitFlag(1),
        remoteInterfaceDefaultAccessIsEnabled: BitFlag(2),
        soundEnabled: BitFlag(5),
        autoRelockTimeSet: BitFlag(6),
        ledSettingsSet: BitFlag(7)
    };

    /**
     * The value of the DoorLock localProgrammingFeatures attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.33
     */
    export const LocalProgrammingFeatures = {
        addUsersCredentialsSchedulesLocally: BitFlag(0),
        modifyUsersCredentialsSchedulesLocally: BitFlag(1),
        clearUsersCredentialsSchedulesLocally: BitFlag(2),
        adjustLockSettingsLocally: BitFlag(3)
    };

    /**
     * The value of the DoorLock alarmMask attribute
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.39
     */
    export const AlarmMask = {
        lockingMechanismJammed: BitFlag(0),
        lockResetToFactoryDefaults: BitFlag(1),
        reserved: BitFlag(2),
        rfModulePowerCycled: BitFlag(3),
        tamperAlarmWrongCodeEntryLimit: BitFlag(4),
        tamperAlarmFrontEscutcheonRemovedFromMain: BitFlag(5),
        forcedDoorOpenUnderDoorLockedCondition: BitFlag(6)
    };

    /**
     * Input to the DoorLock lockDoor command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvLockDoorRequest = TlvObject({ pinCode: TlvOptionalField(0, TlvByteString) });

    /**
     * Input to the DoorLock lockDoor command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface LockDoorRequest extends TypeFromSchema<typeof TlvLockDoorRequest> {}

    /**
     * Input to the DoorLock unlockDoor command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvUnlockDoorRequest = TlvObject({ pinCode: TlvOptionalField(0, TlvByteString) });

    /**
     * Input to the DoorLock unlockDoor command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface UnlockDoorRequest extends TypeFromSchema<typeof TlvUnlockDoorRequest> {}

    /**
     * Input to the DoorLock unlockWithTimeout command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export const TlvUnlockWithTimeoutRequest = TlvObject({
        timeout: TlvField(0, TlvUInt16),
        pinCode: TlvOptionalField(1, TlvByteString)
    });

    /**
     * Input to the DoorLock unlockWithTimeout command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
     */
    export interface UnlockWithTimeoutRequest extends TypeFromSchema<typeof TlvUnlockWithTimeoutRequest> {}

    /**
     * The Alarm Code enum shall indicate the alarm type.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.1
     */
    export enum AlarmCode {
        /**
         * Locking Mechanism Jammed
         */
        LockJammed = 0,

        /**
         * Lock Reset to Factory Defaults
         */
        LockFactoryReset = 1,

        /**
         * Lock Radio Power Cycled
         */
        LockRadioPowerCycled = 3,

        /**
         * Tamper Alarm - wrong code entry limit
         */
        WrongCodeEntryLimit = 4,

        /**
         * Tamper Alarm - front escutcheon removed from main
         */
        FrontEsceutcheonRemoved = 5,

        /**
         * Forced Door Open under Door Locked Condition
         */
        DoorForcedOpen = 6,

        /**
         * Door ajar
         */
        DoorAjar = 7,

        /**
         * Force User SOS alarm
         */
        ForcedUser = 8
    }

    /**
     * Body of the DoorLock doorLockAlarm event
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.1
     */
    export const TlvDoorLockAlarmEvent = TlvObject({
        /**
         * The alarm code of the event that has happened.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.1.1
         */
        alarmCode: TlvField(0, TlvEnum<AlarmCode>())
    });

    /**
     * Body of the DoorLock doorLockAlarm event
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.1
     */
    export interface DoorLockAlarmEvent extends TypeFromSchema<typeof TlvDoorLockAlarmEvent> {}

    /**
     * The LockOperationType enumeration shall indicate the type of Lock operation performed.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.10
     */
    export enum LockOperationType {
        Lock = 0,
        Unlock = 1,
        NonAccessUserEvent = 2,
        ForcedUserEvent = 3
    }

    /**
     * Body of the DoorLock lockOperation event
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.3
     */
    export const TlvLockOperationEvent = TlvObject({
        /**
         * The type of the lock operation that was performed.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.3.1
         */
        lockOperationType: TlvField(0, TlvEnum<LockOperationType>()),

        /**
         * The source of the lock operation that was performed.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.3.2
         */
        operationSource: TlvField(1, TlvEnum<OperationSource>()),

        /**
         * The lock UserIndex who performed the lock operation. This shall be null if there is no user index that can
         * be determined for the given operation source. This shall NOT be null if a user index can be determined. In
         * particular, this shall NOT be null if the operation was associated with a valid credential.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.3.3
         */
        userIndex: TlvField(2, TlvNullable(TlvUInt16)),

        /**
         * The fabric index of the fabric that performed the lock operation. This shall be null if there is no fabric
         * that can be determined for the given operation source. This shall NOT be null if the operation source is
         * "Remote".
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.3.4
         */
        fabricIndex: TlvField(3, TlvNullable(TlvFabricIndex)),

        /**
         * The Node ID of the node that performed the lock operation. This shall be null if there is no Node associated
         * with the given operation source. This shall NOT be null if the operation source is "Remote".
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.3.5
         */
        sourceNode: TlvField(4, TlvNullable(TlvNodeId)),

        /**
         * The list of credentials used in performing the lock operation. This shall be null if no credentials were
         * involved.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.3.6
         */
        credentials: TlvOptionalField(5, TlvNullable(TlvArray(TlvCredentialStruct, { minLength: 1 })))
    });

    /**
     * Body of the DoorLock lockOperation event
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.3
     */
    export interface LockOperationEvent extends TypeFromSchema<typeof TlvLockOperationEvent> {}

    /**
     * The OperationError enumeration shall indicate the error cause of the Lock/Unlock operation performed.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.6.11
     */
    export enum OperationError {
        Unspecified = 0,
        InvalidCredential = 1,
        DisabledUserDenied = 2,
        Restricted = 3,
        InsufficientBattery = 4
    }

    /**
     * Body of the DoorLock lockOperationError event
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.4
     */
    export const TlvLockOperationErrorEvent = TlvObject({
        /**
         * The type of the lock operation that was performed.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.4.1
         */
        lockOperationType: TlvField(0, TlvEnum<LockOperationType>()),

        /**
         * The source of the lock operation that was performed.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.4.2
         */
        operationSource: TlvField(1, TlvEnum<OperationSource>()),

        /**
         * The lock operation error triggered when the operation was performed.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.4.3
         */
        operationError: TlvField(2, TlvEnum<OperationError>()),

        /**
         * The lock UserIndex who performed the lock operation. This shall be null if there is no user id that can be
         * determined for the given operation source.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.4.4
         */
        userIndex: TlvField(3, TlvNullable(TlvUInt16)),

        /**
         * The fabric index of the fabric that performed the lock operation. This shall be null if there is no fabric
         * that can be determined for the given operation source. This shall NOT be null if the operation source is
         * "Remote".
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.4.5
         */
        fabricIndex: TlvField(4, TlvNullable(TlvFabricIndex)),

        /**
         * The Node ID of the node that performed the lock operation. This shall be null if there is no Node associated
         * with the given operation source. This shall NOT be null if the operation source is
         *
         * "Remote".
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.4.6
         */
        sourceNode: TlvField(5, TlvNullable(TlvNodeId)),

        /**
         * The list of credentials used in performing the lock operation. This shall be null if no credentials were
         * involved.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.4.7
         */
        credentials: TlvOptionalField(6, TlvNullable(TlvArray(TlvCredentialStruct, { minLength: 1 })))
    });

    /**
     * Body of the DoorLock lockOperationError event
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.4
     */
    export interface LockOperationErrorEvent extends TypeFromSchema<typeof TlvLockOperationErrorEvent> {}

    /**
     * A DoorLockCluster supports these elements if it supports feature DoorPositionSensor.
     */
    export const DoorPositionSensorComponent = MutableCluster.Component({
        attributes: {
            /**
             * The current door state as defined in DoorStateEnum.
             *
             * This attribute shall be null only if an internal error prevents the retrieval of the current door state.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.4
             */
            doorState: Attribute(0x3, TlvNullable(TlvEnum<DoorState>())),

            /**
             * This attribute holds the number of door open events that have occurred since it was last zeroed.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.5
             */
            doorOpenEvents: OptionalWritableAttribute(0x4, TlvUInt32, { writeAcl: AccessLevel.Manage }),

            /**
             * This attribute holds the number of door closed events that have occurred since it was last zeroed.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.6
             */
            doorClosedEvents: OptionalWritableAttribute(0x5, TlvUInt32, { writeAcl: AccessLevel.Manage }),

            /**
             * This attribute holds the number of minutes the door has been open since the last time it transitioned
             * from closed to open.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.7
             */
            openPeriod: OptionalWritableAttribute(0x6, TlvUInt16, { writeAcl: AccessLevel.Manage })
        },

        events: {
            /**
             * The door lock server sends out a DoorStateChange event when the door lock door state changes.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.2
             */
            doorStateChange: Event(0x1, EventPriority.Critical, TlvDoorStateChangeEvent)
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports feature Logging.
     */
    export const LoggingComponent = MutableCluster.Component({
        attributes: {
            /**
             * The number of available log records.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.8
             */
            numberOfLogRecordsSupported: FixedAttribute(0x10, TlvUInt16, { default: 0 }),

            /**
             * Enable/disable event logging. When event logging is enabled, all event messages are stored on the lock
             * for retrieval. Logging events can be but not limited to Tamper Alarm, Lock, Unlock, AutoRelock, User
             * Code Added, User Code Cleared, Schedule Added, and Schedule Cleared. For a full detail of all the
             * possible alarms and events, please refer to the full list in the Alarm and Event Masks Attribute Set.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.21
             */
            enableLogging: WritableAttribute(0x20, TlvBoolean, { default: true, writeAcl: AccessLevel.Administer })
        },

        commands: {
            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            getLogRecord: Command(0x4, TlvNoArguments, 0x4, TlvNoArguments, { invokeAcl: AccessLevel.Manage })
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports feature User.
     */
    export const UserComponent = MutableCluster.Component({
        attributes: {
            /**
             * Number of total users supported by the lock.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.9
             */
            numberOfTotalUsersSupported: FixedAttribute(0x11, TlvUInt16, { default: 0 }),

            /**
             * This bitmap contains a bit for every value of CredentialRuleEnum supported on this device.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.19
             */
            credentialRulesSupport: FixedAttribute(
                0x1b,
                TlvBitmap(TlvUInt8, CredentialRulesSupport),
                { default: BitsFromPartial(CredentialRulesSupport, { single: true }) }
            ),

            /**
             * The number of credentials that could be assigned for each user.
             *
             * Depending on the value of NumberOfRFIDUsersSupported and NumberOfPINUsersSupported it may not be
             * possible to assign that number of credentials for a user.
             *
             * For example, if the device supports only PIN and RFID credential types,
             * NumberOfCredentialsSupportedPerUser is set to 10, NumberOfPINUsersSupported is set to 5 and
             * NumberOfRFIDUsersSupported is set to 3, it will not be possible to actually assign 10 credentials for a
             * user because maximum number of credentials in the database is 8.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.20
             */
            numberOfCredentialsSupportedPerUser: FixedAttribute(0x1c, TlvUInt8, { default: 0 }),

            /**
             * Number of minutes a PIN, RFID, Fingerprint, or other credential associated with a user of type
             * ExpiringUser shall remain valid after its first use before expiring. When the credential expires the
             * UserStatus for the corresponding user record shall be set to OccupiedDisabled.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.38
             */
            expiringUserTimeout: OptionalWritableAttribute(
                0x35,
                TlvUInt16.bound({ min: 1, max: 2880 }),
                { writeAcl: AccessLevel.Administer }
            )
        },

        commands: {
            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            setUser: Command(
                0x1a,
                TlvSetUserRequest,
                0x1a,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            getUser: Command(0x1b, TlvGetUserRequest, 0x1c, TlvGetUserResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            clearUser: Command(
                0x1d,
                TlvClearUserRequest,
                0x1d,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            setCredential: Command(
                0x22,
                TlvSetCredentialRequest,
                0x23,
                TlvSetCredentialResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            getCredentialStatus: Command(
                0x24,
                TlvGetCredentialStatusRequest,
                0x25,
                TlvGetCredentialStatusResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            clearCredential: Command(
                0x26,
                TlvClearCredentialRequest,
                0x26,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            )
        },

        events: {
            /**
             * The door lock server sends out a LockUserChange event when a lock user, schedule, or credential change
             * has occurred.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.5
             */
            lockUserChange: Event(0x4, EventPriority.Info, TlvLockUserChangeEvent)
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports feature PinCredential.
     */
    export const PinCredentialComponent = MutableCluster.Component({
        attributes: {
            /**
             * The number of PIN users supported.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.10
             */
            numberOfPinUsersSupported: FixedAttribute(0x12, TlvUInt16, { default: 0 }),

            /**
             * An 8 bit value indicates the maximum length in bytes of a PIN Code on this device.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.15
             */
            maxPinCodeLength: FixedAttribute(0x17, TlvUInt8),

            /**
             * An 8 bit value indicates the minimum length in bytes of a PIN Code on this device.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.16
             */
            minPinCodeLength: FixedAttribute(0x18, TlvUInt8),

            /**
             * Boolean set to True if it is ok for the door lock server to send PINs over the air. This attribute
             * determines the behavior of the server’s TX operation. If it is false, then it is not ok for the device
             * to send PIN in any messages over the air.
             *
             * The PIN field within any door lock cluster message shall keep the first octet unchanged and masks the
             * actual code by replacing with 0xFF. For example (PIN "1234" ): If the attribute value is True, 0x04 0x31
             * 0x32 0x33 0x34 shall be used in the PIN field in any door lock cluster message payload. If the attribute
             * value is False, 0x04 0xFF 0xFF 0xFF 0xFF shall be used.
             *
             * If the USR feature is supported by the device then this attribute shall NOT be supported.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.36
             */
            sendPinOverTheAir: OptionalWritableAttribute(
                0x32,
                TlvBoolean,
                { default: true, writeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports feature RfidCredential.
     */
    export const RfidCredentialComponent = MutableCluster.Component({
        attributes: {
            /**
             * The number of RFID users supported.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.11
             */
            numberOfRfidUsersSupported: FixedAttribute(0x13, TlvUInt16, { default: 0 }),

            /**
             * An 8 bit value indicates the maximum length in bytes of a RFID Code on this device. The value depends on
             * the RFID code range specified by the manufacturer, if media anti-collision identifiers (UID) are used as
             * RFID code, a value of 20 (equals 10 Byte ISO 14443A UID) is recommended.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.17
             */
            maxRfidCodeLength: FixedAttribute(0x19, TlvUInt8),

            /**
             * An 8 bit value indicates the minimum length in bytes of a RFID Code on this device. The value depends on
             * the RFID code range specified by the manufacturer, if media anti-collision identifiers (UID) are used as
             * RFID code, a value of 8 (equals 4 Byte ISO 14443A UID) is recommended.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.18
             */
            minRfidCodeLength: FixedAttribute(0x1a, TlvUInt8)
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports feature WeekDayAccessSchedules.
     */
    export const WeekDayAccessSchedulesComponent = MutableCluster.Component({
        attributes: {
            /**
             * The number of configurable week day schedule supported per user.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.12
             */
            numberOfWeekDaySchedulesSupportedPerUser: FixedAttribute(0x14, TlvUInt8, { default: 0 })
        },

        commands: {
            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            setWeekDaySchedule: Command(
                0xb,
                TlvSetWeekDayScheduleRequest,
                0xb,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            getWeekDaySchedule: Command(
                0xc,
                TlvGetWeekDayScheduleRequest,
                0xc,
                TlvGetWeekDayScheduleResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            clearWeekDaySchedule: Command(
                0xd,
                TlvClearWeekDayScheduleRequest,
                0xd,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports feature YearDayAccessSchedules.
     */
    export const YearDayAccessSchedulesComponent = MutableCluster.Component({
        attributes: {
            /**
             * The number of configurable year day schedule supported per user.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.13
             */
            numberOfYearDaySchedulesSupportedPerUser: FixedAttribute(0x15, TlvUInt8, { default: 0 })
        },

        commands: {
            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            setYearDaySchedule: Command(
                0xe,
                TlvSetYearDayScheduleRequest,
                0xe,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            getYearDaySchedule: Command(
                0xf,
                TlvGetYearDayScheduleRequest,
                0xf,
                TlvGetYearDayScheduleResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            clearYearDaySchedule: Command(
                0x10,
                TlvClearYearDayScheduleRequest,
                0x10,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports feature HolidaySchedules.
     */
    export const HolidaySchedulesComponent = MutableCluster.Component({
        attributes: {
            /**
             * The number of holiday schedules supported for the entire door lock device.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.14
             */
            numberOfHolidaySchedulesSupported: FixedAttribute(0x16, TlvUInt8, { default: 0 })
        },

        commands: {
            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            setHolidaySchedule: Command(
                0x11,
                TlvSetHolidayScheduleRequest,
                0x11,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            getHolidaySchedule: Command(
                0x12,
                TlvGetHolidayScheduleRequest,
                0x12,
                TlvGetHolidayScheduleResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            clearHolidaySchedule: Command(
                0x13,
                TlvClearHolidayScheduleRequest,
                0x13,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports features PinCredential or RfidCredential.
     */
    export const PinCredentialOrRfidCredentialComponent = MutableCluster.Component({
        attributes: {
            /**
             * The number of incorrect Pin codes or RFID presentment attempts a user is allowed to enter before the
             * lock will enter a lockout state. The value of this attribute is compared to all failing forms of
             * credential presentation, including Pin codes used in an Unlock Command when RequirePINforRemoteOperation
             * is set to true. Valid range is 1-255 incorrect attempts. The lockout state will be for the duration of
             * UserCodeTemporaryDisableTime. If the attribute accepts writes and an attempt to write the value 0 is
             * made, the device shall respond with CONSTRAINT_ERROR.
             *
             * The lock may reset the counter used to track incorrect credential presentations as required by internal
             * logic, environmental events, or other reasons. The lock shall reset the counter if a valid credential is
             * presented.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.34
             */
            wrongCodeEntryLimit: WritableAttribute(
                0x30,
                TlvUInt8.bound({ min: 1 }),
                { writeAcl: AccessLevel.Administer }
            ),

            /**
             * The number of seconds that the lock shuts down following wrong code entry. Valid range is 1-255 seconds.
             * Device can shut down to lock user out for specified amount of time. (Makes it difficult to try and guess
             * a PIN for the device.) If the attribute accepts writes and an attempt to write the attribute to 0 is
             * made, the device shall respond with CONSTRAINT_ERROR.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.35
             */
            userCodeTemporaryDisableTime: WritableAttribute(
                0x31,
                TlvUInt8.bound({ min: 1 }),
                { writeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports features CredentialOverTheAirAccess and PinCredential.
     */
    export const CredentialOverTheAirAccessAndPinCredentialComponent = MutableCluster.Component({
        attributes: {
            /**
             * Boolean set to True if the door lock server requires that an optional PINs be included in the payload of
             * remote lock operation events like Lock, Unlock, Unlock with Timeout and Toggle in order to function.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.37
             */
            requirePinForRemoteOperation: WritableAttribute(
                0x33,
                TlvBoolean,
                { default: true, writeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports features Notification and PinCredential.
     */
    export const NotificationAndPinCredentialComponent = MutableCluster.Component({
        attributes: {
            /**
             * Event mask used to turn on and off the transmission of keypad operation events. This mask DOES NOT apply
             * to the storing of events in the event log. This mask only applies to the Operation Event Notification
             * Command.
             *
             * This mask DOES NOT apply to the Events mechanism of this cluster.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.40
             */
            keypadOperationEventMask: OptionalWritableAttribute(
                0x41,
                TlvBitmap(TlvUInt16, KeypadOperationEventMask),
                {
                    default: BitsFromPartial(KeypadOperationEventMask, { unknownOrManufacturerSpecificKeypadOperationEvent: true, lockSourceKeypad: true, unlockSourceKeypad: true, lockSourceKeypadErrorInvalidPin: true, lockSourceKeypadErrorInvalidSchedule: true, unlockSourceKeypadErrorInvalidCode: true, unlockSourceKeypadErrorInvalidSchedule: true, nonAccessUserOperationEventSourceKeypad: true }),
                    writeAcl: AccessLevel.Administer
                }
            ),

            /**
             * Event mask used to turn on and off keypad programming events. This mask DOES NOT apply to the storing of
             * events in the event log. This mask only applies to the Programming Event Notification Command.
             *
             * This mask DOES NOT apply to the Events mechanism of this cluster.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.44
             */
            keypadProgrammingEventMask: OptionalWritableAttribute(
                0x45,
                TlvBitmap(TlvUInt16, KeypadProgrammingEventMask),
                {
                    default: BitsFromPartial(KeypadProgrammingEventMask, { unknown: true, pinCodeChanged: true, pinAdded: true, pinCleared: true, pinChanged: true }),
                    writeAcl: AccessLevel.Administer
                }
            )
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports feature Notification.
     */
    export const NotificationComponent = MutableCluster.Component({
        attributes: {
            /**
             * Event mask used to turn on and off the transmission of remote operation events. This mask DOES NOT apply
             * to the storing of events in the event log. This mask only applies to the Operation Event
             *
             * Notification Command.
             *
             * This mask DOES NOT apply to the Events mechanism of this cluster.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.41
             */
            remoteOperationEventMask: OptionalWritableAttribute(
                0x42,
                TlvBitmap(TlvUInt16, RemoteOperationEventMask),
                {
                    default: BitsFromPartial(RemoteOperationEventMask, { unknownOrManufacturerSpecificRemoteOperationEvent: true, lockSourceRemote: true, unlockSourceRemote: true, lockSourceRemoteErrorInvalidCode: true, lockSourceRemoteErrorInvalidSchedule: true, unlockSourceRemoteErrorInvalidCode: true, unlockSourceRemoteErrorInvalidSchedule: true }),
                    writeAcl: AccessLevel.Administer
                }
            ),

            /**
             * Event mask used to turn on and off manual operation events. This mask DOES NOT apply to the storing of
             * events in the event log. This mask only applies to the Operation Event Notification Command.
             *
             * This mask DOES NOT apply to the Events mechanism of this cluster.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.42
             */
            manualOperationEventMask: OptionalWritableAttribute(
                0x43,
                TlvBitmap(TlvUInt16, ManualOperationEventMask),
                {
                    default: BitsFromPartial(ManualOperationEventMask, { unknownOrManufacturerSpecificManualOperationEvent: true, thumbturnLock: true, thumbturnUnlock: true, oneTouchLock: true, keyLock: true, keyUnlock: true, autoLock: true, scheduleLock: true, scheduleUnlock: true, manualLock: true, manualUnlock: true }),
                    writeAcl: AccessLevel.Administer
                }
            ),

            /**
             * Event mask used to turn on and off remote programming events. This mask DOES NOT apply to the storing of
             * events in the event log. This mask only applies to the Programming Event Notification Command.
             *
             * This mask DOES NOT apply to the Events mechanism of this cluster.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.45
             */
            remoteProgrammingEventMask: OptionalWritableAttribute(
                0x46,
                TlvBitmap(TlvUInt16, RemoteProgrammingEventMask),
                {
                    default: BitsFromPartial(RemoteProgrammingEventMask, { unknown: true, pinAdded: true, pinCleared: true, pinChanged: true, rfidCodeAdded: true, rfidCodeCleared: true }),
                    writeAcl: AccessLevel.Administer
                }
            )
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports features Notification and RfidCredential.
     */
    export const NotificationAndRfidCredentialComponent = MutableCluster.Component({
        attributes: {
            /**
             * Event mask used to turn on and off RFID operation events. This mask DOES NOT apply to the storing of
             * events in the event log. This mask only applies to the Operation Event Notification Command.
             *
             * This mask DOES NOT apply to the Events mechanism of this cluster.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.43
             */
            rfidOperationEventMask: OptionalWritableAttribute(
                0x44,
                TlvBitmap(TlvUInt16, RfidOperationEventMask),
                {
                    default: BitsFromPartial(RfidOperationEventMask, { unknownOrManufacturerSpecificKeypadOperationEvent: true, lockSourceRfid: true, unlockSourceRfid: true, lockSourceRfidErrorInvalidRfidId: true, lockSourceRfidErrorInvalidSchedule: true, unlockSourceRfidErrorInvalidRfidId: true, unlockSourceRfidErrorInvalidSchedule: true }),
                    writeAcl: AccessLevel.Administer
                }
            ),

            /**
             * Event mask used to turn on and off RFID programming events. This mask DOES NOT apply to the storing of
             * events in the event log. This mask only applies to the Programming Event Notification Command.
             *
             * This mask DOES NOT apply to the Events mechanism of this cluster.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.46
             */
            rfidProgrammingEventMask: OptionalWritableAttribute(
                0x47,
                TlvBitmap(TlvUInt16, RfidProgrammingEventMask),
                {
                    default: BitsFromPartial(RfidProgrammingEventMask, { unknown: true, idAdded: true, idCleared: true }),
                    writeAcl: AccessLevel.Administer
                }
            )
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports feature PinCredential and it doesn't support feature
     * USR.
     */
    export const PinCredentialNotUserComponent = MutableCluster.Component({
        commands: {
            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            setPinCode: Command(
                0x5,
                TlvNoArguments,
                0x5,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            getPinCode: Command(0x6, TlvNoArguments, 0x6, TlvNoArguments, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            clearPinCode: Command(
                0x7,
                TlvNoArguments,
                0x7,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            clearAllPinCodes: Command(
                0x8,
                TlvNoArguments,
                0x8,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            )
        }
    });

    /**
     * A DoorLockCluster supports these elements if it supports features PinCredential, RfidCredential and
     * FingerCredentials and it doesn't support feature USR.
     */
    export const PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent = MutableCluster.Component({
        commands: {
            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            setUserStatus: OptionalCommand(
                0x9,
                TlvNoArguments,
                0x9,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            getUserStatus: OptionalCommand(
                0xa,
                TlvNoArguments,
                0xa,
                TlvNoArguments,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            setUserType: OptionalCommand(
                0x14,
                TlvNoArguments,
                0x14,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            getUserType: OptionalCommand(
                0x15,
                TlvNoArguments,
                0x15,
                TlvNoArguments,
                { invokeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * A DoorLockCluster supports these elements if doesn't support feature USR.
     */
    export const NotUserComponent = MutableCluster.Component({});

    /**
     * A DoorLockCluster supports these elements if it supports feature RfidCredential and it doesn't support feature
     * USR.
     */
    export const RfidCredentialNotUserComponent = MutableCluster.Component({
        commands: {
            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            setRfidCode: Command(
                0x16,
                TlvNoArguments,
                0x16,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            getRfidCode: Command(0x17, TlvNoArguments, 0x17, TlvNoArguments, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            clearRfidCode: Command(
                0x18,
                TlvNoArguments,
                0x18,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            ),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            clearAllRfidCodes: Command(
                0x19,
                TlvNoArguments,
                0x19,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            )
        }
    });

    /**
     * These are optional features supported by DoorLockCluster.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2.2
     */
    export enum Feature {
        /**
         * PinCredential
         *
         * Lock supports PIN credentials (via keypad, or over- the-air)
         */
        PinCredential = "PinCredential",

        /**
         * RfidCredential
         *
         * Lock supports RFID credentials
         */
        RfidCredential = "RfidCredential",

        /**
         * FingerCredentials
         *
         * Lock supports finger related credentials (fingerprint, finger vein)
         */
        FingerCredentials = "FingerCredentials",

        /**
         * Logging
         *
         * Lock supports local/on-lock logging when Events are not supported
         */
        Logging = "Logging",

        /**
         * WeekDayAccessSchedules
         *
         * Lock supports week day user access schedules
         */
        WeekDayAccessSchedules = "WeekDayAccessSchedules",

        /**
         * DoorPositionSensor
         *
         * Lock supports a door position sensor that indicates door’s state
         */
        DoorPositionSensor = "DoorPositionSensor",

        /**
         * FaceCredentials
         *
         * Lock supports face related credentials (face, iris, retina)
         */
        FaceCredentials = "FaceCredentials",

        /**
         * CredentialOverTheAirAccess
         *
         * PIN codes over- the-air supported for lock/unlock operations
         */
        CredentialOverTheAirAccess = "CredentialOverTheAirAccess",

        /**
         * User
         *
         * Lock supports the user commands and database
         */
        User = "User",

        /**
         * Notification
         *
         * Operation and Programming Notifications
         */
        Notification = "Notification",

        /**
         * YearDayAccessSchedules
         *
         * Lock supports year day user access schedules
         */
        YearDayAccessSchedules = "YearDayAccessSchedules",

        /**
         * HolidaySchedules
         *
         * Lock supports holiday schedules
         */
        HolidaySchedules = "HolidaySchedules"
    }

    /**
     * These elements and properties are present in all DoorLock clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x101,
        name: "DoorLock",
        revision: 6,

        features: {
            /**
             * PinCredential
             *
             * Lock supports PIN credentials (via keypad, or over- the-air)
             */
            pinCredential: BitFlag(0),

            /**
             * RfidCredential
             *
             * Lock supports RFID credentials
             */
            rfidCredential: BitFlag(1),

            /**
             * FingerCredentials
             *
             * Lock supports finger related credentials (fingerprint, finger vein)
             */
            fingerCredentials: BitFlag(2),

            /**
             * Logging
             *
             * Lock supports local/on-lock logging when Events are not supported
             */
            logging: BitFlag(3),

            /**
             * WeekDayAccessSchedules
             *
             * Lock supports week day user access schedules
             */
            weekDayAccessSchedules: BitFlag(4),

            /**
             * DoorPositionSensor
             *
             * Lock supports a door position sensor that indicates door’s state
             */
            doorPositionSensor: BitFlag(5),

            /**
             * FaceCredentials
             *
             * Lock supports face related credentials (face, iris, retina)
             */
            faceCredentials: BitFlag(6),

            /**
             * CredentialOverTheAirAccess
             *
             * PIN codes over- the-air supported for lock/unlock operations
             */
            credentialOverTheAirAccess: BitFlag(7),

            /**
             * User
             *
             * Lock supports the user commands and database
             */
            user: BitFlag(8),

            /**
             * Notification
             *
             * Operation and Programming Notifications
             */
            notification: BitFlag(9),

            /**
             * YearDayAccessSchedules
             *
             * Lock supports year day user access schedules
             */
            yearDayAccessSchedules: BitFlag(10),

            /**
             * HolidaySchedules
             *
             * Lock supports holiday schedules
             */
            holidaySchedules: BitFlag(11)
        },

        attributes: {
            /**
             * The LockState Attribute may be NULL if the lock hardware does not currently know the status of the
             * locking mechanism. For example, a lock may not know the LockState status after a power cycle until the
             * first lock actuation is completed.
             *
             * The Not Fully Locked value is used by a lock to indicate that the state of the lock is somewhere between
             * Locked and Unlocked so it is only partially secured. For example, a deadbolt could be partially extended
             * and not in a dead latched state.
             *
             * If the Scenes server cluster is implemented on the same endpoint, the following extension field shall be
             * added to the Scene Table:
             *
             *   • LockState
             *
             * When the LockState attribute is part of a Scene table, the attribute is treated as a writable command;
             * that is, setting the LockState to lock will command the lock to lock, and setting the LockState to
             * unlock will command the lock to unlock. Setting the LockState attribute to “not fully locked” is not
             * supported. The Transition Time field in the Scene table will be treated as a delay before setting the
             * LockState attribute; that is, it is possible to activate a scene with the lock actuation some seconds
             * later.
             *
             * Locks that do not have an actuation mechanism SHOULD not support the Scene table extension.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.1
             */
            lockState: Attribute(0x0, TlvNullable(TlvEnum<LockState>()), { scene: true }),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.2
             */
            lockType: Attribute(0x1, TlvEnum<LockType>()),

            /**
             * The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to
             * (Disabled) process remote Lock, Unlock, or Unlock with Timeout commands.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.3
             */
            actuatorEnabled: Attribute(0x2, TlvBoolean),

            /**
             * Modifies the language for the on-screen or audible user interface using a 2-byte language code from
             * ISO-639-1.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.22
             */
            language: OptionalWritableAttribute(
                0x21,
                TlvString.bound({ maxLength: 3 }),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * The settings for the LED support three different modes
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.25
             */
            ledSettings: OptionalWritableAttribute(
                0x22,
                TlvUInt8.bound({ max: 2 }),
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. If
             * set, unlock operations from any source will be timed. For one time unlock with timeout use the specific
             * command.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.26
             */
            autoRelockTime: OptionalWritableAttribute(0x23, TlvUInt32, { writeAcl: AccessLevel.Manage }),

            /**
             * The sound volume on a door lock has four possible settings: silent, low, high and medium volumes
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.27
             */
            soundVolume: OptionalWritableAttribute(
                0x24,
                TlvUInt8.bound({ max: 3 }),
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The current operating mode of the lock (see OperatingModeEnum).
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.23
             */
            operatingMode: WritableAttribute(
                0x25,
                TlvEnum<OperatingMode>(),
                { default: OperatingMode.Normal, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All
             * operating modes NOT supported by a lock shall be set to one. The value of the OperatingMode enumeration
             * defines the related bit to be set, as
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.24
             */
            supportedOperatingModes: FixedAttribute(
                0x26,
                TlvBitmap(TlvUInt16, SupportedOperatingModes),
                { default: BitsFromPartial(SupportedOperatingModes, { vacation: true, privacy: true, passage: true }) }
            ),

            /**
             * This attribute represents the default configurations as they are physically set on the device (example:
             * hardware dip switch setting, etc…) and represents the default setting for some of the attributes within
             * this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode attributes).
             *
             * This is a read-only attribute and is intended to allow clients to determine what changes may need to be
             * made without having to query all the included attributes. It may be beneficial for the clients to know
             * what the device’s original settings were in the event that the device needs to be restored to factory
             * default settings.
             *
             * If the Client device would like to query and modify the door lock server’s operating settings, it SHOULD
             * send read and write attribute requests to the specific attributes.
             *
             * For example, the Sound Volume attribute default value is Silent Mode. However, it is possible that the
             * current Sound Volume is High Volume. Therefore, if the client wants to query/modify the current Sound
             * Volume setting on the server, the client SHOULD read/write to the Sound Volume attribute.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.28
             */
            defaultConfigurationRegister: OptionalAttribute(0x27, TlvBitmap(TlvUInt16, DefaultConfigurationRegister)),

            /**
             * Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures
             * attribute). If this value is set to TRUE then local programming is enabled on the door lock for all
             * features. If it is set to FALSE then local programming is disabled on the door lock for those features
             * whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming shall be enabled by
             * default.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.29
             */
            enableLocalProgramming: OptionalWritableAttribute(
                0x28,
                TlvBoolean,
                { default: true, writeAcl: AccessLevel.Administer }
            ),

            /**
             * Enable/disable the ability to lock the door lock with a single touch on the door lock.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.30
             */
            enableOneTouchLocking: OptionalWritableAttribute(
                0x29,
                TlvBoolean,
                { default: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Enable/disable an inside LED that allows the user to see at a glance if the door is locked.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.31
             */
            enableInsideStatusLed: OptionalWritableAttribute(
                0x2a,
                TlvBoolean,
                { default: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Enable/disable a button inside the door that is used to put the lock into privacy mode. When the lock is
             * in privacy mode it cannot be manipulated from the outside.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.32
             */
            enablePrivacyModeButton: OptionalWritableAttribute(
                0x2b,
                TlvBoolean,
                { default: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The local programming features that will be disabled when EnableLocalProgramming attribute is set to
             * False. If a door lock doesn’t support disabling one aspect of local programming it shall return
             * CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming attribute is
             * set to True then all local programming features shall be enabled regardless of the bits set to 0 in this
             * attribute.
             *
             * The features that can be disabled from local programming are defined in the following bitmap.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.33
             */
            localProgrammingFeatures: OptionalWritableAttribute(
                0x2c,
                TlvBitmap(TlvUInt8, LocalProgrammingFeatures),
                { writeAcl: AccessLevel.Administer }
            ),

            /**
             * This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is used
             * to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the associated
             * alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be turned on or
             * off by setting or clearing the associated bit in the alarm mask.
             *
             * This mask DOES NOT apply to the Events mechanism of this cluster.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.3.39
             */
            alarmMask: OptionalWritableAttribute(
                0x40,
                TlvBitmap(TlvUInt16, AlarmMask),
                {
                    default: BitsFromPartial(AlarmMask, { lockingMechanismJammed: true, lockResetToFactoryDefaults: true, reserved: true, rfModulePowerCycled: true, tamperAlarmWrongCodeEntryLimit: true, tamperAlarmFrontEscutcheonRemovedFromMain: true, forcedDoorOpenUnderDoorLockedCondition: true }),
                    writeAcl: AccessLevel.Administer
                }
            )
        },

        commands: {
            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            lockDoor: Command(0x0, TlvLockDoorRequest, 0x0, TlvNoResponse, { timed: true }),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            unlockDoor: Command(0x1, TlvUnlockDoorRequest, 0x1, TlvNoResponse, { timed: true }),

            /**
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.4
             */
            unlockWithTimeout: OptionalCommand(0x3, TlvUnlockWithTimeoutRequest, 0x3, TlvNoResponse, { timed: true })
        },

        events: {
            /**
             * The door lock cluster provides several alarms which can be sent when there is a critical state on the
             * door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum section below.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.1
             */
            doorLockAlarm: Event(0x0, EventPriority.Critical, TlvDoorLockAlarmEvent),

            /**
             * The door lock server sends out a LockOperation event when the event is triggered by the various lock
             * operation sources.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.3
             */
            lockOperation: Event(0x2, EventPriority.Critical, TlvLockOperationEvent),

            /**
             * The door lock server sends out a LockOperationError event when a lock operation fails for various
             * reasons.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 5.2.5.4
             */
            lockOperationError: Event(0x3, EventPriority.Critical, TlvLockOperationErrorEvent)
        },

        /**
         * This metadata controls which DoorLockCluster elements matter.js activates for specific feature combinations.
         */
        extensions: MutableCluster.Extensions(
            { flags: { doorPositionSensor: true }, component: DoorPositionSensorComponent },
            { flags: { logging: true }, component: LoggingComponent },
            { flags: { user: true }, component: UserComponent },
            { flags: { pinCredential: true }, component: PinCredentialComponent },
            { flags: { rfidCredential: true }, component: RfidCredentialComponent },
            { flags: { weekDayAccessSchedules: true }, component: WeekDayAccessSchedulesComponent },
            { flags: { yearDayAccessSchedules: true }, component: YearDayAccessSchedulesComponent },
            { flags: { holidaySchedules: true }, component: HolidaySchedulesComponent },
            { flags: { pinCredential: true }, component: PinCredentialOrRfidCredentialComponent },
            { flags: { rfidCredential: true }, component: PinCredentialOrRfidCredentialComponent },
            {
                flags: { credentialOverTheAirAccess: true, pinCredential: true },
                component: CredentialOverTheAirAccessAndPinCredentialComponent
            },
            { flags: { notification: true, pinCredential: true }, component: NotificationAndPinCredentialComponent },
            { flags: { notification: true }, component: NotificationComponent },
            { flags: { notification: true, rfidCredential: true }, component: NotificationAndRfidCredentialComponent },
            { flags: { pinCredential: true, user: false }, component: PinCredentialNotUserComponent },
            {
                flags: { pinCredential: true, rfidCredential: true, fingerCredentials: true, user: false },
                component: PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent
            },
            { flags: { user: false }, component: NotUserComponent },
            { flags: { rfidCredential: true, user: false }, component: RfidCredentialNotUserComponent },

            {
                flags: {
                    user: true,
                    pinCredential: false,
                    rfidCredential: false,
                    fingerCredentials: false,
                    faceCredentials: false
                },

                component: false
            }
        )
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({ ...Base });

    /**
     * Door Lock
     *
     * An interface to a generic way to secure a door
     *
     * DoorLockCluster supports optional features that you can enable with the DoorLockCluster.with() factory method.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 5.2
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    const DPS = { doorPositionSensor: true };
    const LOG = { logging: true };
    const USR = { user: true };
    const PIN = { pinCredential: true };
    const RID = { rfidCredential: true };
    const WDSCH = { weekDayAccessSchedules: true };
    const YDSCH = { yearDayAccessSchedules: true };
    const HDSCH = { holidaySchedules: true };
    const COTA_PIN = { credentialOverTheAirAccess: true, pinCredential: true };
    const NOT_PIN = { notification: true, pinCredential: true };
    const NOT = { notification: true };
    const NOT_RID = { notification: true, rfidCredential: true };
    const PIN_NOT_USR = { pinCredential: true, user: false };
    const PIN_RID_FGP_NOT_USR = { pinCredential: true, rfidCredential: true, fingerCredentials: true, user: false };
    const RID_NOT_USR = { rfidCredential: true, user: false };

    /**
     * @see {@link Complete}
     */
    export const CompleteInstance = MutableCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,

        attributes: {
            ...Cluster.attributes,
            doorState: MutableCluster.AsConditional(
                DoorPositionSensorComponent.attributes.doorState,
                { mandatoryIf: [DPS] }
            ),
            doorOpenEvents: MutableCluster.AsConditional(
                DoorPositionSensorComponent.attributes.doorOpenEvents,
                { optionalIf: [DPS] }
            ),
            doorClosedEvents: MutableCluster.AsConditional(
                DoorPositionSensorComponent.attributes.doorClosedEvents,
                { optionalIf: [DPS] }
            ),
            openPeriod: MutableCluster.AsConditional(
                DoorPositionSensorComponent.attributes.openPeriod,
                { optionalIf: [DPS] }
            ),
            numberOfLogRecordsSupported: MutableCluster.AsConditional(
                LoggingComponent.attributes.numberOfLogRecordsSupported,
                { mandatoryIf: [LOG] }
            ),
            numberOfTotalUsersSupported: MutableCluster.AsConditional(
                UserComponent.attributes.numberOfTotalUsersSupported,
                { mandatoryIf: [USR] }
            ),
            numberOfPinUsersSupported: MutableCluster.AsConditional(
                PinCredentialComponent.attributes.numberOfPinUsersSupported,
                { mandatoryIf: [PIN] }
            ),
            numberOfRfidUsersSupported: MutableCluster.AsConditional(
                RfidCredentialComponent.attributes.numberOfRfidUsersSupported,
                { mandatoryIf: [RID] }
            ),
            numberOfWeekDaySchedulesSupportedPerUser: MutableCluster.AsConditional(
                WeekDayAccessSchedulesComponent.attributes.numberOfWeekDaySchedulesSupportedPerUser,
                { mandatoryIf: [WDSCH] }
            ),
            numberOfYearDaySchedulesSupportedPerUser: MutableCluster.AsConditional(
                YearDayAccessSchedulesComponent.attributes.numberOfYearDaySchedulesSupportedPerUser,
                { mandatoryIf: [YDSCH] }
            ),
            numberOfHolidaySchedulesSupported: MutableCluster.AsConditional(
                HolidaySchedulesComponent.attributes.numberOfHolidaySchedulesSupported,
                { mandatoryIf: [HDSCH] }
            ),
            maxPinCodeLength: MutableCluster.AsConditional(
                PinCredentialComponent.attributes.maxPinCodeLength,
                { mandatoryIf: [PIN] }
            ),
            minPinCodeLength: MutableCluster.AsConditional(
                PinCredentialComponent.attributes.minPinCodeLength,
                { mandatoryIf: [PIN] }
            ),
            maxRfidCodeLength: MutableCluster.AsConditional(
                RfidCredentialComponent.attributes.maxRfidCodeLength,
                { mandatoryIf: [RID] }
            ),
            minRfidCodeLength: MutableCluster.AsConditional(
                RfidCredentialComponent.attributes.minRfidCodeLength,
                { mandatoryIf: [RID] }
            ),
            credentialRulesSupport: MutableCluster.AsConditional(
                UserComponent.attributes.credentialRulesSupport,
                { mandatoryIf: [USR] }
            ),
            numberOfCredentialsSupportedPerUser: MutableCluster.AsConditional(
                UserComponent.attributes.numberOfCredentialsSupportedPerUser,
                { mandatoryIf: [USR] }
            ),
            enableLogging: MutableCluster.AsConditional(
                LoggingComponent.attributes.enableLogging,
                { mandatoryIf: [LOG] }
            ),
            wrongCodeEntryLimit: MutableCluster.AsConditional(
                PinCredentialOrRfidCredentialComponent.attributes.wrongCodeEntryLimit,
                { mandatoryIf: [PIN, RID] }
            ),
            userCodeTemporaryDisableTime: MutableCluster.AsConditional(
                PinCredentialOrRfidCredentialComponent.attributes.userCodeTemporaryDisableTime,
                { mandatoryIf: [PIN, RID] }
            ),
            sendPinOverTheAir: MutableCluster.AsConditional(
                PinCredentialComponent.attributes.sendPinOverTheAir,
                { optionalIf: [PIN] }
            ),
            requirePinForRemoteOperation: MutableCluster.AsConditional(
                CredentialOverTheAirAccessAndPinCredentialComponent.attributes.requirePinForRemoteOperation,
                { mandatoryIf: [COTA_PIN] }
            ),
            expiringUserTimeout: MutableCluster.AsConditional(
                UserComponent.attributes.expiringUserTimeout,
                { optionalIf: [USR] }
            ),
            keypadOperationEventMask: MutableCluster.AsConditional(
                NotificationAndPinCredentialComponent.attributes.keypadOperationEventMask,
                { optionalIf: [NOT_PIN] }
            ),
            remoteOperationEventMask: MutableCluster.AsConditional(
                NotificationComponent.attributes.remoteOperationEventMask,
                { optionalIf: [NOT] }
            ),
            manualOperationEventMask: MutableCluster.AsConditional(
                NotificationComponent.attributes.manualOperationEventMask,
                { optionalIf: [NOT] }
            ),
            rfidOperationEventMask: MutableCluster.AsConditional(
                NotificationAndRfidCredentialComponent.attributes.rfidOperationEventMask,
                { optionalIf: [NOT_RID] }
            ),
            keypadProgrammingEventMask: MutableCluster.AsConditional(
                NotificationAndPinCredentialComponent.attributes.keypadProgrammingEventMask,
                { optionalIf: [NOT_PIN] }
            ),
            remoteProgrammingEventMask: MutableCluster.AsConditional(
                NotificationComponent.attributes.remoteProgrammingEventMask,
                { optionalIf: [NOT] }
            ),
            rfidProgrammingEventMask: MutableCluster.AsConditional(
                NotificationAndRfidCredentialComponent.attributes.rfidProgrammingEventMask,
                { optionalIf: [NOT_RID] }
            )
        },

        commands: {
            ...Cluster.commands,
            getLogRecord: MutableCluster.AsConditional(LoggingComponent.commands.getLogRecord, { mandatoryIf: [LOG] }),
            setPinCode: MutableCluster.AsConditional(
                PinCredentialNotUserComponent.commands.setPinCode,
                { mandatoryIf: [PIN_NOT_USR] }
            ),
            getPinCode: MutableCluster.AsConditional(
                PinCredentialNotUserComponent.commands.getPinCode,
                { mandatoryIf: [PIN_NOT_USR] }
            ),
            clearPinCode: MutableCluster.AsConditional(
                PinCredentialNotUserComponent.commands.clearPinCode,
                { mandatoryIf: [PIN_NOT_USR] }
            ),
            clearAllPinCodes: MutableCluster.AsConditional(
                PinCredentialNotUserComponent.commands.clearAllPinCodes,
                { mandatoryIf: [PIN_NOT_USR] }
            ),
            setUserStatus: MutableCluster.AsConditional(
                PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent.commands.setUserStatus,
                { optionalIf: [PIN_RID_FGP_NOT_USR] }
            ),
            getUserStatus: MutableCluster.AsConditional(
                PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent.commands.getUserStatus,
                { optionalIf: [PIN_RID_FGP_NOT_USR] }
            ),
            setWeekDaySchedule: MutableCluster.AsConditional(
                WeekDayAccessSchedulesComponent.commands.setWeekDaySchedule,
                { mandatoryIf: [WDSCH] }
            ),
            getWeekDaySchedule: MutableCluster.AsConditional(
                WeekDayAccessSchedulesComponent.commands.getWeekDaySchedule,
                { mandatoryIf: [WDSCH] }
            ),
            clearWeekDaySchedule: MutableCluster.AsConditional(
                WeekDayAccessSchedulesComponent.commands.clearWeekDaySchedule,
                { mandatoryIf: [WDSCH] }
            ),
            setYearDaySchedule: MutableCluster.AsConditional(
                YearDayAccessSchedulesComponent.commands.setYearDaySchedule,
                { mandatoryIf: [YDSCH] }
            ),
            getYearDaySchedule: MutableCluster.AsConditional(
                YearDayAccessSchedulesComponent.commands.getYearDaySchedule,
                { mandatoryIf: [YDSCH] }
            ),
            clearYearDaySchedule: MutableCluster.AsConditional(
                YearDayAccessSchedulesComponent.commands.clearYearDaySchedule,
                { mandatoryIf: [YDSCH] }
            ),
            setHolidaySchedule: MutableCluster.AsConditional(
                HolidaySchedulesComponent.commands.setHolidaySchedule,
                { mandatoryIf: [HDSCH] }
            ),
            getHolidaySchedule: MutableCluster.AsConditional(
                HolidaySchedulesComponent.commands.getHolidaySchedule,
                { mandatoryIf: [HDSCH] }
            ),
            clearHolidaySchedule: MutableCluster.AsConditional(
                HolidaySchedulesComponent.commands.clearHolidaySchedule,
                { mandatoryIf: [HDSCH] }
            ),
            setUserType: MutableCluster.AsConditional(
                PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent.commands.setUserType,
                { optionalIf: [PIN_RID_FGP_NOT_USR] }
            ),
            getUserType: MutableCluster.AsConditional(
                PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent.commands.getUserType,
                { optionalIf: [PIN_RID_FGP_NOT_USR] }
            ),
            setRfidCode: MutableCluster.AsConditional(
                RfidCredentialNotUserComponent.commands.setRfidCode,
                { mandatoryIf: [RID_NOT_USR] }
            ),
            getRfidCode: MutableCluster.AsConditional(
                RfidCredentialNotUserComponent.commands.getRfidCode,
                { mandatoryIf: [RID_NOT_USR] }
            ),
            clearRfidCode: MutableCluster.AsConditional(
                RfidCredentialNotUserComponent.commands.clearRfidCode,
                { mandatoryIf: [RID_NOT_USR] }
            ),
            clearAllRfidCodes: MutableCluster.AsConditional(
                RfidCredentialNotUserComponent.commands.clearAllRfidCodes,
                { mandatoryIf: [RID_NOT_USR] }
            ),
            setUser: MutableCluster.AsConditional(UserComponent.commands.setUser, { mandatoryIf: [USR] }),
            getUser: MutableCluster.AsConditional(UserComponent.commands.getUser, { mandatoryIf: [USR] }),
            clearUser: MutableCluster.AsConditional(UserComponent.commands.clearUser, { mandatoryIf: [USR] }),
            setCredential: MutableCluster.AsConditional(UserComponent.commands.setCredential, { mandatoryIf: [USR] }),
            getCredentialStatus: MutableCluster.AsConditional(
                UserComponent.commands.getCredentialStatus,
                { mandatoryIf: [USR] }
            ),
            clearCredential: MutableCluster.AsConditional(
                UserComponent.commands.clearCredential,
                { mandatoryIf: [USR] }
            )
        },

        events: {
            ...Cluster.events,
            doorStateChange: MutableCluster.AsConditional(
                DoorPositionSensorComponent.events.doorStateChange,
                { mandatoryIf: [DPS] }
            ),
            lockUserChange: MutableCluster.AsConditional(UserComponent.events.lockUserChange, { mandatoryIf: [USR] })
        }
    });

    /**
     * This cluster supports all DoorLock features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export interface Complete extends Identity<typeof CompleteInstance> {}

    export const Complete: Complete = CompleteInstance;
}

export type DoorLockCluster = DoorLock.Cluster;
export const DoorLockCluster = DoorLock.Cluster;
ClusterRegistry.register(DoorLock.Complete);
