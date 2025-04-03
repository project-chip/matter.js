/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const DoorLock = Cluster(
    {
        name: "DoorLock", id: 0x101, classification: "application", pics: "DRLK",
        details: "The door lock cluster provides an interface to a generic way to secure a door. The physical object " +
            "that provides the locking functionality is abstracted from the cluster. The cluster has a small list " +
            "of mandatory attributes and functions and a list of optional features." +
            "\n" +
            "Figure 16. Typical Usage of the Door Lock Cluster",
        xref: { document: "cluster", section: "5.2" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 8 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "5.2.4" } },

        Field({
            name: "PIN", conformance: "O", constraint: "0", description: "PinCredential",

            details: "If the User Feature is also supported then any PIN Code stored in the lock shall be associated with " +
                "a User." +
                "\n" +
                "A lock may support multiple credential types so if the User feature is supported the UserType, " +
                "UserStatus and Schedules are all associated with a User index and not directly with a PIN index. A " +
                "User index may have several credentials associated with it.",

            xref: { document: "cluster", section: "5.2.4.1" }
        }),

        Field({
            name: "RID", conformance: "O", constraint: "1", description: "RfidCredential",

            details: "If the User Feature is also supported then any RFID credential stored in the lock shall be " +
                "associated with a User." +
                "\n" +
                "A lock may support multiple credential types so if the User feature is supported the UserType, " +
                "UserStatus and Schedules are all associated with a User index and not directly with a RFID index. A " +
                "User Index may have several credentials associated with it.",

            xref: { document: "cluster", section: "5.2.4.2" }
        }),

        Field({
            name: "FGP", conformance: "P, O", constraint: "2", description: "FingerCredentials",

            details: "Currently the cluster only defines the metadata format for notifications when a fingerprint/ finger " +
                "vein credential is used to access the lock and doesn’t describe how to create fingerprint/finger " +
                "vein credentials. If the Users feature is also supported then the User that a fingerprint/finger " +
                "vein is associated with can also have its UserType, UserStatus and Schedule modified." +
                "\n" +
                "A lock may support multiple credential types so if the User feature is supported the UserType, " +
                "UserStatus and Schedules are all associated with a User index and not directly with a Finger index. " +
                "A User Index may have several credentials associated with it.",

            xref: { document: "cluster", section: "5.2.4.3" }
        }),

        Field({
            name: "WDSCH", conformance: "O", constraint: "4", description: "WeekDayAccessSchedules",

            details: "If the User feature is supported then Week Day Schedules are applied to a User and not a credential." +
                "\n" +
                "Week Day Schedules are used to restrict access to a specified time window on certain days of the " +
                "week. The schedule is repeated each week." +
                "\n" +
                "The lock may automatically adjust the UserType when a schedule is created or cleared." +
                "\n" +
                "Support for WeekDayAccessSchedules requires that the lock has the capability of keeping track of " +
                "local time.",

            xref: { document: "cluster", section: "5.2.4.4" }
        }),

        Field({
            name: "DPS", conformance: "O", constraint: "5", description: "DoorPositionSensor",
            details: "If this feature is supported this indicates that the lock has the ability to determine the position " +
                "of the door which is separate from the state of the lock.",
            xref: { document: "cluster", section: "5.2.4.5" }
        }),

        Field({
            name: "FACE", conformance: "P, O", constraint: "6", description: "FaceCredentials",

            details: "Currently the cluster only defines the metadata format for notifications when a face recognition, " +
                "iris, or retina credential is used to access the lock and doesn’t describe how to create face " +
                "recognition, iris, or retina credentials. If the Users feature is also supported then the User that " +
                "a face recognition, iris, or retina credential is associated with can also have its UserType, " +
                "UserStatus and Schedule modified." +
                "\n" +
                "A lock may support multiple credential types so if the User feature is supported the UserType, " +
                "UserStatus and Schedules are all associated with a User and not directly with a credential.",

            xref: { document: "cluster", section: "5.2.4.6" }
        }),

        Field({
            name: "COTA", conformance: "O", constraint: "7", description: "CredentialOverTheAirAccess",
            details: "If this feature is supported then the lock supports the ability to verify a credential provided in a" +
                "\n" +
                "lock/unlock command. Currently the cluster only supports providing the PIN credential to the " +
                "lock/unlock commands. If this feature is supported then the PIN Credential feature shall also be " +
                "supported.",
            xref: { document: "cluster", section: "5.2.4.7" }
        }),

        Field({
            name: "USR", conformance: "ALIRO, [PIN | RID | FGP | FACE]", constraint: "8", description: "User",
            details: "If the User Feature is supported then a lock employs a User database. A User within the User " +
                "database is used to associate credentials and schedules to single user record within the lock. This " +
                "also means the UserType and UserStatus fields are associated with a User and not a credential.",
            xref: { document: "cluster", section: "5.2.4.8" }
        }),

        Field({
            name: "YDSCH", conformance: "O", constraint: "10", description: "YearDayAccessSchedules",

            details: "If the User feature is supported then Year Day Schedules are applied to a User and not a credential. " +
                "Year Day Schedules are used to restrict access to a specified date and time window." +
                "\n" +
                "The lock may automatically adjust the UserType when a schedule is created or cleared." +
                "\n" +
                "Support for YearDayAccessSchedules requires that the lock has the capability of keeping track of " +
                "local time.",

            xref: { document: "cluster", section: "5.2.4.9" }
        }),

        Field({
            name: "HDSCH", conformance: "O", constraint: "11", description: "HolidaySchedules",
            details: "This feature is used to setup Holiday Schedule in the lock device. A Holiday Schedule sets a start " +
                "and stop end date/time for the lock to use the specified operating mode set by the Holiday Schedule." +
                "\n" +
                "Support for HolidaySchedules requires that the lock has the capability of keeping track of local " +
                "time.",
            xref: { document: "cluster", section: "5.2.4.10" }
        }),

        Field({
            name: "UBOLT", conformance: "O", constraint: "12", description: "Unbolting",
            details: "Locks that support this feature differentiate between unbolting and unlocking. The Unbolt Door " +
                "command retracts the bolt without pulling the latch. The Unlock Door command fully unlocks the door " +
                "by retracting the bolt and briefly pulling the latch. While the latch is pulled, the lock state " +
                "changes to Unlatched. Locks without unbolting support don’t differentiate between unbolting and " +
                "unlocking and perform the same operation for both commands.",
            xref: { document: "cluster", section: "5.2.4.11" }
        }),

        Field({
            name: "ALIRO", conformance: "O", constraint: "13", description: "AliroProvisioning",
            details: "Locks that support this feature implement the Aliro specification as defined in [Aliro] and support " +
                "Matter as a method for provisioning Aliro credentials.",
            xref: { document: "cluster", section: "5.2.4.12" }
        }),

        Field({
            name: "ALBU", conformance: "[ALIRO]", constraint: "14", description: "AliroBleuwb",
            details: "Locks that support this feature implement the Bluetooth LE + UWB Access Control Flow as defined in " +
                "[Aliro].",
            xref: { document: "cluster", section: "5.2.4.13" }
        })
    ),

    Attribute({
        name: "LockState", id: 0x0, type: "LockStateEnum", access: "R V", conformance: "M",
        constraint: "desc", quality: "X P",

        details: "This attribute may be NULL if the lock hardware does not currently know the status of the locking " +
            "mechanism. For example, a lock may not know the LockState status after a power cycle until the first " +
            "lock actuation is completed." +
            "\n" +
            "The Not Fully Locked value is used by a lock to indicate that the state of the lock is somewhere " +
            "between Locked and Unlocked so it is only partially secured. For example, a deadbolt could be " +
            "partially extended and not in a dead latched state.",

        xref: { document: "cluster", section: "5.2.9.1" }
    }),

    Attribute({
        name: "LockType", id: 0x1, type: "LockTypeEnum", access: "R V", conformance: "M",
        constraint: "desc",
        details: "Indicates the type of door lock as defined in LockTypeEnum.",
        xref: { document: "cluster", section: "5.2.9.2" }
    }),

    Attribute({
        name: "ActuatorEnabled", id: 0x2, type: "bool", access: "R V", conformance: "M",
        details: "Indicates if the lock is currently able to (Enabled) or not able to (Disabled) process remote Lock, " +
            "Unlock, or Unlock with Timeout commands.",
        xref: { document: "cluster", section: "5.2.9.3" }
    }),

    Attribute({
        name: "DoorState", id: 0x3, type: "DoorStateEnum", access: "R V", conformance: "DPS",
        constraint: "desc", quality: "X P",
        details: "Indicates the current door state as defined in DoorStateEnum." +
            "\n" +
            "Null only if an internal error prevents the retrieval of the current door state.",
        xref: { document: "cluster", section: "5.2.9.4" }
    }),

    Attribute({
        name: "DoorOpenEvents", id: 0x4, type: "uint32", access: "RW VM", conformance: "[DPS]",
        details: "This attribute shall hold the number of door open events that have occurred since it was last " +
            "zeroed.",
        xref: { document: "cluster", section: "5.2.9.5" }
    }),

    Attribute({
        name: "DoorClosedEvents", id: 0x5, type: "uint32", access: "RW VM", conformance: "[DPS]",
        details: "This attribute shall hold the number of door closed events that have occurred since it was last " +
            "zeroed.",
        xref: { document: "cluster", section: "5.2.9.6" }
    }),

    Attribute({
        name: "OpenPeriod", id: 0x6, type: "uint16", access: "RW VM", conformance: "[DPS]",
        details: "This attribute shall hold the number of minutes the door has been open since the last time it " +
            "transitioned from closed to open.",
        xref: { document: "cluster", section: "5.2.9.7" }
    }),

    Attribute({
        name: "NumberOfTotalUsersSupported", id: 0x11, type: "uint16", access: "R V", conformance: "USR",
        default: 0, quality: "F",
        details: "Indicates the number of total users supported by the lock.",
        xref: { document: "cluster", section: "5.2.9.8" }
    }),

    Attribute({
        name: "NumberOfPinUsersSupported", id: 0x12, type: "uint16", access: "R V", conformance: "PIN",
        default: 0, quality: "F",
        details: "Indicates the number of PIN users supported.",
        xref: { document: "cluster", section: "5.2.9.9" }
    }),

    Attribute({
        name: "NumberOfRfidUsersSupported", id: 0x13, type: "uint16", access: "R V", conformance: "RID",
        default: 0, quality: "F",
        details: "Indicates the number of RFID users supported.",
        xref: { document: "cluster", section: "5.2.9.10" }
    }),

    Attribute({
        name: "NumberOfWeekDaySchedulesSupportedPerUser", id: 0x14, type: "uint8", access: "R V",
        conformance: "WDSCH", constraint: "max 253", default: 0, quality: "F",
        details: "Indicates the number of configurable week day schedule supported per user.",
        xref: { document: "cluster", section: "5.2.9.11" }
    }),

    Attribute({
        name: "NumberOfYearDaySchedulesSupportedPerUser", id: 0x15, type: "uint8", access: "R V",
        conformance: "YDSCH", constraint: "max 253", default: 0, quality: "F",
        details: "Indicates the number of configurable year day schedule supported per user.",
        xref: { document: "cluster", section: "5.2.9.12" }
    }),

    Attribute({
        name: "NumberOfHolidaySchedulesSupported", id: 0x16, type: "uint8", access: "R V",
        conformance: "HDSCH", constraint: "max 253", default: 0, quality: "F",
        details: "Indicates the number of holiday schedules supported for the entire door lock device.",
        xref: { document: "cluster", section: "5.2.9.13" }
    }),

    Attribute({
        name: "MaxPinCodeLength", id: 0x17, type: "uint8", access: "R V", conformance: "PIN", quality: "F",
        details: "Indicates the maximum length in bytes of a PIN Code on this device.",
        xref: { document: "cluster", section: "5.2.9.14" }
    }),
    Attribute({
        name: "MinPinCodeLength", id: 0x18, type: "uint8", access: "R V", conformance: "PIN", quality: "F",
        details: "Indicates the minimum length in bytes of a PIN Code on this device.",
        xref: { document: "cluster", section: "5.2.9.15" }
    }),

    Attribute({
        name: "MaxRfidCodeLength", id: 0x19, type: "uint8", access: "R V", conformance: "RID", quality: "F",
        details: "Indicates the maximum length in bytes of a RFID Code on this device. The value depends on the RFID " +
            "code range specified by the manufacturer, if media anti-collision identifiers (UID) are used as RFID " +
            "code, a value of 20 (equals 10 Byte ISO 14443A UID) is recommended.",
        xref: { document: "cluster", section: "5.2.9.16" }
    }),

    Attribute({
        name: "MinRfidCodeLength", id: 0x1a, type: "uint8", access: "R V", conformance: "RID", quality: "F",
        details: "Indicates the minimum length in bytes of a RFID Code on this device. The value depends on the RFID " +
            "code range specified by the manufacturer, if media anti-collision identifiers (UID) are used as RFID " +
            "code, a value of 8 (equals 4 Byte ISO 14443A UID) is recommended.",
        xref: { document: "cluster", section: "5.2.9.17" }
    }),

    Attribute({
        name: "CredentialRulesSupport", id: 0x1b, type: "CredentialRulesBitmap", access: "R V",
        conformance: "USR", default: 1, quality: "F",
        details: "This attribute shall contain a bitmap with the bits set for the values of CredentialRuleEnum " +
            "supported on this device.",
        xref: { document: "cluster", section: "5.2.9.18" }
    }),

    Attribute({
        name: "NumberOfCredentialsSupportedPerUser", id: 0x1c, type: "uint8", access: "R V",
        conformance: "USR", default: 0, quality: "F",

        details: "Indicates the number of credentials that could be assigned for each user." +
            "\n" +
            "Depending on the value of NumberOfRFIDUsersSupported and NumberOfPINUsersSupported it may not be " +
            "possible to assign that number of credentials for a user." +
            "\n" +
            "For example, if the device supports only PIN and RFID credential types, " +
            "NumberOfCredentialsSupportedPerUser is set to 10, NumberOfPINUsersSupported is set to 5 and " +
            "NumberOfRFIDUsersSupported is set to 3, it will not be possible to actually assign 10 credentials " +
            "for a user because maximum number of credentials in the database is 8.",

        xref: { document: "cluster", section: "5.2.9.19" }
    }),

    Attribute({
        name: "Language", id: 0x21, type: "string", access: "R[W] VM", conformance: "O",
        constraint: "max 3", quality: "P",
        details: "Indicates the language for the on-screen or audible user interface using a 2- byte language code " +
            "from ISO-639-1.",
        xref: { document: "cluster", section: "5.2.9.20" }
    }),

    Attribute({
        name: "LedSettings", id: 0x22, type: "LEDSettingEnum", access: "R[W] VM", conformance: "O",
        default: 0, quality: "P",
        details: "Indicates the settings for the LED support, as defined by LEDSettingEnum.",
        xref: { document: "cluster", section: "5.2.9.21" }
    }),

    Attribute({
        name: "AutoRelockTime", id: 0x23, type: "uint32", access: "R[W] VM", conformance: "O", quality: "P",
        details: "Indicates the number of seconds to wait after unlocking a lock before it automatically locks again. " +
            "0=disabled. If set, unlock operations from any source will be timed. For one time unlock with " +
            "timeout use the specific command.",
        xref: { document: "cluster", section: "5.2.9.22" }
    }),

    Attribute({
        name: "SoundVolume", id: 0x24, type: "SoundVolumeEnum", access: "R[W] VM", conformance: "O",
        default: 0, quality: "P",
        details: "Indicates the sound volume on a door lock as defined by SoundVolumeEnum.",
        xref: { document: "cluster", section: "5.2.9.23" }
    }),

    Attribute({
        name: "OperatingMode", id: 0x25, type: "OperatingModeEnum", access: "R[W] VM", conformance: "M",
        constraint: "desc", default: 0, quality: "P",
        details: "Indicates the current operating mode of the lock as defined in OperatingModeEnum.",
        xref: { document: "cluster", section: "5.2.9.24" }
    }),

    Attribute({
        name: "SupportedOperatingModes", id: 0x26, type: "OperatingModesBitmap", access: "R V",
        conformance: "M", default: 65526, quality: "F",
        details: "This attribute shall contain a bitmap with all operating bits of the OperatingMode attribute " +
            "supported by the lock. All operating modes NOT supported by a lock shall be set to one. The value of " +
            "the OperatingMode enumeration defines the related bit to be set.",
        xref: { document: "cluster", section: "5.2.9.25" }
    }),

    Attribute({
        name: "DefaultConfigurationRegister", id: 0x27, type: "ConfigurationRegisterBitmap", access: "R V",
        conformance: "O", default: 0, quality: "P",

        details: "Indicates the default configurations as they are physically set on the device (example: hardware dip " +
            "switch setting, etc…) and represents the default setting for some of the" +
            "\n" +
            "attributes within this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode " +
            "attributes)." +
            "\n" +
            "This is a read-only attribute and is intended to allow clients to determine what changes may need to " +
            "be made without having to query all the included attributes. It may be beneficial for the clients to " +
            "know what the device’s original settings were in the event that the device needs to be restored to " +
            "factory default settings." +
            "\n" +
            "If the Client device would like to query and modify the door lock server’s operating settings, it " +
            "SHOULD send read and write attribute requests to the specific attributes." +
            "\n" +
            "For example, the Sound Volume attribute default value is Silent Mode. However, it is possible that " +
            "the current Sound Volume is High Volume. Therefore, if the client wants to query/modify the current " +
            "Sound Volume setting on the server, the client SHOULD read/write to the Sound Volume attribute.",

        xref: { document: "cluster", section: "5.2.9.26" }
    }),

    Attribute({
        name: "EnableLocalProgramming", id: 0x28, type: "bool", access: "R[W] VA", conformance: "O",
        default: true, quality: "P",
        details: "This attribute shall enable/disable local programming on the door lock of certain features (see " +
            "LocalProgrammingFeatures attribute). If this value is set to TRUE then local programming is enabled " +
            "on the door lock for all features. If it is set to FALSE then local programming is disabled on the " +
            "door lock for those features whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local " +
            "programming shall be enabled by default.",
        xref: { document: "cluster", section: "5.2.9.27" }
    }),

    Attribute({
        name: "EnableOneTouchLocking", id: 0x29, type: "bool", access: "RW VM", conformance: "O",
        default: true, quality: "P",
        details: "This attribute shall enable/disable the ability to lock the door lock with a single touch on the " +
            "door lock.",
        xref: { document: "cluster", section: "5.2.9.28" }
    }),

    Attribute({
        name: "EnableInsideStatusLed", id: 0x2a, type: "bool", access: "RW VM", conformance: "O",
        default: true, quality: "P",
        details: "This attribute shall enable/disable an inside LED that allows the user to see at a glance if the " +
            "door is locked.",
        xref: { document: "cluster", section: "5.2.9.29" }
    }),

    Attribute({
        name: "EnablePrivacyModeButton", id: 0x2b, type: "bool", access: "RW VM", conformance: "O",
        default: true, quality: "P",
        details: "This attribute shall enable/disable a button inside the door that is used to put the lock into " +
            "privacy mode. When the lock is in privacy mode it cannot be manipulated from the outside.",
        xref: { document: "cluster", section: "5.2.9.30" }
    }),

    Attribute({
        name: "LocalProgrammingFeatures", id: 0x2c, type: "LocalProgrammingFeaturesBitmap",
        access: "R[W] VA", conformance: "O", default: 0, quality: "P",

        details: "Indicates the local programming features that will be disabled when EnableLocalProgramming attribute " +
            "is set to False. If a door lock doesn’t support disabling one aspect of local programming it shall " +
            "return CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming " +
            "attribute is set to True then all local programming features shall be enabled regardless of the bits " +
            "set to 0 in this attribute." +
            "\n" +
            "The features that can be disabled from local programming are defined in " +
            "LocalProgrammingFeaturesBitmap.",

        xref: { document: "cluster", section: "5.2.9.31" }
    }),

    Attribute({
        name: "WrongCodeEntryLimit", id: 0x30, type: "uint8", access: "R[W] VA", conformance: "PIN | RID",
        constraint: "1 to 255", quality: "P",

        details: "Indicates the number of incorrect Pin codes or RFID presentment attempts a user is allowed to enter " +
            "before the lock will enter a lockout state. The value of this attribute is compared to all failing " +
            "forms of credential presentation, including Pin codes used in an Unlock Command when " +
            "RequirePINforRemoteOperation is set to true. Valid range is 1-255 incorrect attempts. The lockout " +
            "state will be for the duration of UserCodeTemporaryDisableTime. If the attribute accepts writes and " +
            "an attempt to write the value 0 is made, the device shall respond with CONSTRAINT_ERROR." +
            "\n" +
            "The lock may reset the counter used to track incorrect credential presentations as required by " +
            "internal logic, environmental events, or other reasons. The lock shall reset the counter if a valid " +
            "credential is presented.",

        xref: { document: "cluster", section: "5.2.9.32" }
    }),

    Attribute({
        name: "UserCodeTemporaryDisableTime", id: 0x31, type: "uint8", access: "R[W] VA",
        conformance: "PIN | RID", constraint: "1 to 255", quality: "P",
        details: "Indicates the number of seconds that the lock shuts down following wrong code entry. Valid range is " +
            "1-255 seconds. Device can shut down to lock user out for specified amount of time. (Makes it " +
            "difficult to try and guess a PIN for the device.) If the attribute accepts writes and an attempt to " +
            "write the attribute to 0 is made, the device shall respond with CONSTRAINT_ERROR.",
        xref: { document: "cluster", section: "5.2.9.33" }
    }),

    Attribute({
        name: "SendPinOverTheAir", id: 0x32, type: "bool", access: "R[W] VA", conformance: "[!USR & PIN]",
        default: true, quality: "P",

        details: "Indicates the door locks ability to send PINs over the air. If the attribute is True it is ok for " +
            "the door lock server to send PINs over the air. This attribute determines the behavior of the " +
            "server’s TX operation. If it is false, then it is not ok for the device to send PIN in any messages " +
            "over the air." +
            "\n" +
            "The PIN field within any door lock cluster message shall keep the first octet unchanged and" +
            "\n" +
            "masks the actual code by replacing with 0xFF. For example (PIN \"1234\" ): If the attribute value is " +
            "True, 0x04 0x31 0x32 0x33 0x34 shall be used in the PIN field in any door lock cluster message " +
            "payload. If the attribute value is False, 0x04 0xFF 0xFF 0xFF 0xFF shall be used.",

        xref: { document: "cluster", section: "5.2.9.34" }
    }),

    Attribute({
        name: "RequirePinForRemoteOperation", id: 0x33, type: "bool", access: "R[W] VA",
        conformance: "COTA & PIN", default: true, quality: "P",
        details: "Indicates if the door lock requires an optional PIN. If this attribute is set to True, the door lock " +
            "server requires that an optional PINs be included in the payload of remote lock operation events " +
            "like Lock, Unlock, Unlock with Timeout and Toggle in order to function.",
        xref: { document: "cluster", section: "5.2.9.35" }
    }),

    Attribute({
        name: "SecurityLevel", id: 0x34, access: "R V", conformance: "D", default: "0",
        xref: { document: "cluster", section: "5.2.9" }
    }),

    Attribute({
        name: "ExpiringUserTimeout", id: 0x35, type: "uint16", access: "R[W] VA", conformance: "[USR]",
        constraint: "1 to 2880", quality: "P",
        details: "Indicates the number of minutes a PIN, RFID, Fingerprint, or other credential associated with a user " +
            "of type ExpiringUser shall remain valid after its first use before expiring. When the credential " +
            "expires the UserStatus for the corresponding user record shall be set to OccupiedDisabled.",
        xref: { document: "cluster", section: "5.2.9.36" }
    }),

    Attribute({
        name: "AlarmMask", id: 0x40, type: "AlarmMaskBitmap", access: "RW VA", conformance: "O",
        default: 65535, quality: "P",

        details: "This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is " +
            "used to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the " +
            "associated alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be " +
            "turned on or off by setting or clearing the associated bit in the alarm mask." +
            "\n" +
            "This mask DOES NOT apply to the Events mechanism of this cluster.",

        xref: { document: "cluster", section: "5.2.9.37" }
    }),

    Attribute({
        name: "AliroReaderVerificationKey", id: 0x80, type: "octstr", access: "R A", conformance: "ALIRO",
        constraint: "65", default: null, quality: "X",
        details: "Indicates the verification key component of the Reader’s key pair as defined in [Aliro]. The value, " +
            "if not null, shall be an uncompressed elliptic curve public key as defined in section 2.3.3 of SEC " +
            "1." +
            "\n" +
            "Null if no Reader key pair has been configured on the lock. See SetAliroReaderConfig.",
        xref: { document: "cluster", section: "5.2.9.38" }
    }),

    Attribute({
        name: "AliroReaderGroupIdentifier", id: 0x81, type: "octstr", access: "R A", conformance: "ALIRO",
        constraint: "16", default: null, quality: "X",
        details: "Indicates the reader_group_identifier as defined in [Aliro]." +
            "\n" +
            "Null if no reader_group_identifier has been configured on the lock. See SetAliroReaderConfig.",
        xref: { document: "cluster", section: "5.2.9.39" }
    }),

    Attribute({
        name: "AliroReaderGroupSubIdentifier", id: 0x82, type: "octstr", access: "R A",
        conformance: "ALIRO", constraint: "16", quality: "F",
        details: "Indicates the reader_group_sub_identifier as defined in [Aliro].",
        xref: { document: "cluster", section: "5.2.9.40" }
    }),

    Attribute(
        {
            name: "AliroExpeditedTransactionSupportedProtocolVersions", id: 0x83, type: "list", access: "R A",
            conformance: "ALIRO", constraint: "max 16[2]", default: [], quality: "F",
            details: "Indicates the list of protocol versions supported for expedited transactions as defined in [Aliro].",
            xref: { document: "cluster", section: "5.2.9.41" }
        },

        Field({ name: "entry", type: "octstr" })
    ),

    Attribute({
        name: "AliroGroupResolvingKey", id: 0x84, type: "octstr", access: "R A", conformance: "ALBU",
        constraint: "16", default: null, quality: "X",
        details: "Indicates the Group Resolving Key as defined in [Aliro]." +
            "\n" +
            "Null if no group resolving key has been configured on the lock. See SetAliroReaderConfig.",
        xref: { document: "cluster", section: "5.2.9.42" }
    }),

    Attribute(
        {
            name: "AliroSupportedBleuwbProtocolVersions", id: 0x85, type: "list", access: "R A",
            conformance: "ALBU", constraint: "max 16[2]", default: [], quality: "F",
            details: "Indicates the list of protocol versions supported for the Bluetooth LE + UWB Access Control Flow as " +
                "defined in [Aliro].",
            xref: { document: "cluster", section: "5.2.9.43" }
        },

        Field({ name: "entry", type: "octstr" })
    ),

    Attribute({
        name: "AliroBleAdvertisingVersion", id: 0x86, type: "uint8", access: "R A", conformance: "ALBU",
        default: 0, quality: "F",
        details: "Indicates the version of the Bluetooth LE advertisement as defined in [Aliro].",
        xref: { document: "cluster", section: "5.2.9.44" }
    }),

    Attribute({
        name: "NumberOfAliroCredentialIssuerKeysSupported", id: 0x87, type: "uint16", access: "R V",
        conformance: "ALIRO", default: 0, quality: "F",
        details: "Indicates the maximum number of AliroCredentialIssuerKey credentials that can be stored on the lock.",
        xref: { document: "cluster", section: "5.2.9.45" }
    }),

    Attribute({
        name: "NumberOfAliroEndpointKeysSupported", id: 0x88, type: "uint16", access: "R V",
        conformance: "ALIRO", default: 0, quality: "F",

        details: "Indicates the maximum number of endpoint key credentials that can be stored on the lock. This limit " +
            "applies to the sum of the number of AliroEvictableEndpointKey credentials and the number of " +
            "AliroNonEvictableEndpointKey credentials." +
            "\n" +
            "NOTE" +
            "\n" +
            "The credential indices used for these two credential types are independent of each other, similar to " +
            "all other credential types. As long as NumberOfAliroEndpointKeysSupported is at least 2 a client " +
            "could add a credential of type AliroEvictableEndpointKey at any index from 1 to " +
            "NumberOfAliroEndpointKeysSupported and also add a credential of type AliroNonEvictableEndpointKey at " +
            "the same index, and both credentials would exist on the server.",

        xref: { document: "cluster", section: "5.2.9.46" }
    }),

    Event(
        {
            name: "DoorLockAlarm", id: 0x0, access: "V", conformance: "M", priority: "critical",
            details: "The door lock server provides several alarms which can be sent when there is a critical state on the " +
                "door lock. The alarms available for the door lock server are listed in AlarmCodeEnum.",
            xref: { document: "cluster", section: "5.2.11.1" }
        },

        Field({
            name: "AlarmCode", id: 0x0, type: "AlarmCodeEnum", conformance: "M",
            details: "This field shall indicate the alarm code of the event that has happened.",
            xref: { document: "cluster", section: "5.2.11.1.1" }
        })
    ),

    Event(
        {
            name: "DoorStateChange", id: 0x1, access: "V", conformance: "DPS", priority: "critical",
            details: "The door lock server sends out a DoorStateChange event when the door lock door state changes.",
            xref: { document: "cluster", section: "5.2.11.2" }
        },
        Field({
            name: "DoorState", id: 0x0, type: "DoorStateEnum", conformance: "M",
            details: "This field shall indicate the new door state for this door event.",
            xref: { document: "cluster", section: "5.2.11.2.1" }
        })
    ),

    Event(
        {
            name: "LockOperation", id: 0x2, access: "V", conformance: "M", priority: "critical",

            details: "The door lock server sends out a LockOperation event when the event is triggered by the various lock " +
                "operation sources." +
                "\n" +
                "  • If the door lock server supports the Unbolt Door command, it shall generate a LockOperation " +
                "    event with LockOperationType set to Unlock after an Unbolt Door command succeeds." +
                "\n" +
                "  • If the door lock server supports the Unbolting feature and an Unlock Door command is performed, " +
                "    it shall generate a LockOperation event with LockOperationType set to Unlatch when the unlatched " +
                "    state is reached and a LockOperation event with LockOperationType set to Unlock when the lock " +
                "    successfully completes the unlock → hold latch → release latch and return to unlock state " +
                "    operation." +
                "\n" +
                "  • If the command fails during holding or releasing the latch but after passing the unlocked state, " +
                "    the door lock server shall generate a LockOperationError event with LockOperationType set to " +
                "    Unlatch and a LockOperation event with LockOperationType set to Unlock." +
                "\n" +
                "    ◦ If it fails before reaching the unlocked state, the door lock server shall generate only a " +
                "      LockOperationError event with LockOperationType set to Unlock." +
                "\n" +
                "  • Upon manual actuation, a door lock server that supports the Unbolting feature:" +
                "\n" +
                "    ◦ shall generate a LockOperation event of LockOperationType Unlatch when it is actuated from the " +
                "      outside." +
                "\n" +
                "    ◦ may generate a LockOperation event of LockOperationType Unlatch when it is actuated" +
                "\n" +
                "from the inside.",

            xref: { document: "cluster", section: "5.2.11.3" }
        },

        Field({
            name: "LockOperationType", id: 0x0, type: "LockOperationTypeEnum", conformance: "M",
            details: "This field shall indicate the type of the lock operation that was performed.",
            xref: { document: "cluster", section: "5.2.11.3.1" }
        }),
        Field({
            name: "OperationSource", id: 0x1, type: "OperationSourceEnum", conformance: "M",
            details: "This field shall indicate the source of the lock operation that was performed.",
            xref: { document: "cluster", section: "5.2.11.3.2" }
        }),

        Field({
            name: "UserIndex", id: 0x2, type: "uint16", conformance: "M", quality: "X",
            details: "This field shall indicate the UserIndex who performed the lock operation. This shall be null if " +
                "there is no user index that can be determined for the given operation source. This shall NOT be null " +
                "if a user index can be determined. In particular, this shall NOT be null if the operation was " +
                "associated with a valid credential.",
            xref: { document: "cluster", section: "5.2.11.3.3" }
        }),

        Field({
            name: "FabricIndex", id: 0x3, type: "fabric-idx", conformance: "M", quality: "X",
            details: "This field shall indicate the fabric index of the fabric that performed the lock operation. This " +
                "shall be null if there is no fabric that can be determined for the given operation source. This " +
                "shall NOT be null if the operation source is \"Remote\".",
            xref: { document: "cluster", section: "5.2.11.3.4" }
        }),

        Field({
            name: "SourceNode", id: 0x4, type: "node-id", conformance: "M", quality: "X",
            details: "This field shall indicate the Node ID of the node that performed the lock operation. This shall be " +
                "null if there is no Node associated with the given operation source. This shall NOT be null if the " +
                "operation source is \"Remote\".",
            xref: { document: "cluster", section: "5.2.11.3.5" }
        }),

        Field(
            {
                name: "Credentials", id: 0x5, type: "list", conformance: "[USR]",
                constraint: "1 to numberOfCredentialsSupportedPerUser", quality: "X",
                details: "This field shall indicate the list of credentials used in performing the lock operation. This shall " +
                    "be null if no credentials were involved.",
                xref: { document: "cluster", section: "5.2.11.3.6" }
            },

            Field({ name: "entry", type: "CredentialStruct" })
        )
    ),

    Event(
        {
            name: "LockOperationError", id: 0x3, access: "V", conformance: "M", priority: "critical",
            details: "The door lock server sends out a LockOperationError event when a lock operation fails for various " +
                "reasons.",
            xref: { document: "cluster", section: "5.2.11.4" }
        },

        Field({
            name: "LockOperationType", id: 0x0, type: "LockOperationTypeEnum", conformance: "M",
            details: "This field shall indicate the type of the lock operation that was performed.",
            xref: { document: "cluster", section: "5.2.11.4.1" }
        }),
        Field({
            name: "OperationSource", id: 0x1, type: "OperationSourceEnum", conformance: "M",
            details: "This field shall indicate the source of the lock operation that was performed.",
            xref: { document: "cluster", section: "5.2.11.4.2" }
        }),
        Field({
            name: "OperationError", id: 0x2, type: "OperationErrorEnum", conformance: "M",
            details: "This field shall indicate the lock operation error triggered when the operation was performed.",
            xref: { document: "cluster", section: "5.2.11.4.3" }
        }),

        Field({
            name: "UserIndex", id: 0x3, type: "uint16", conformance: "M", quality: "X",
            details: "This field shall indicate the lock UserIndex who performed the lock operation. This shall be null if " +
                "there is no user id that can be determined for the given operation source.",
            xref: { document: "cluster", section: "5.2.11.4.4" }
        }),

        Field({
            name: "FabricIndex", id: 0x4, type: "fabric-idx", conformance: "M", quality: "X",
            details: "This field shall indicate the fabric index of the fabric that performed the lock operation. This " +
                "shall be null if there is no fabric that can be determined for the given operation source. This " +
                "shall NOT be null if the operation source is \"Remote\".",
            xref: { document: "cluster", section: "5.2.11.4.5" }
        }),

        Field({
            name: "SourceNode", id: 0x5, type: "node-id", conformance: "M", quality: "X",
            details: "This field shall indicate the Node ID of the node that performed the lock operation. This shall be " +
                "null if there is no Node associated with the given operation source. This shall NOT be null if the " +
                "operation source is \"Remote\".",
            xref: { document: "cluster", section: "5.2.11.4.6" }
        }),

        Field(
            {
                name: "Credentials", id: 0x6, type: "list", conformance: "[USR]",
                constraint: "1 to numberOfCredentialsSupportedPerUser", quality: "X",
                details: "This field shall indicate the list of credentials used in performing the lock operation. This shall " +
                    "be null if no credentials were involved.",
                xref: { document: "cluster", section: "5.2.11.4.7" }
            },

            Field({ name: "entry", type: "CredentialStruct" })
        )
    ),

    Event(
        {
            name: "LockUserChange", id: 0x4, access: "V", conformance: "USR", priority: "info",
            details: "The door lock server sends out a LockUserChange event when a lock user, schedule, or credential " +
                "change has occurred.",
            xref: { document: "cluster", section: "5.2.11.5" }
        },

        Field({
            name: "LockDataType", id: 0x0, type: "LockDataTypeEnum", conformance: "M",
            details: "This field shall indicate the lock data type that was changed.",
            xref: { document: "cluster", section: "5.2.11.5.1" }
        }),
        Field({
            name: "DataOperationType", id: 0x1, type: "DataOperationTypeEnum", conformance: "M",
            details: "This field shall indicate the data operation performed on the lock data type changed.",
            xref: { document: "cluster", section: "5.2.11.5.2" }
        }),

        Field({
            name: "OperationSource", id: 0x2, type: "OperationSourceEnum", conformance: "M",
            constraint: "aliro, unspecified, keypad, remote",
            details: "This field shall indicate the source of the user data change.",
            xref: { document: "cluster", section: "5.2.11.5.3" }
        }),

        Field({
            name: "UserIndex", id: 0x3, type: "uint16", conformance: "M", quality: "X",
            details: "This field shall indicate the lock UserIndex associated with the change (if any). This shall be null " +
                "if there is no specific user associated with the data operation. This shall be 0xFFFE if all users " +
                "are affected (e.g. Clear Users).",
            xref: { document: "cluster", section: "5.2.11.5.4" }
        }),

        Field({
            name: "FabricIndex", id: 0x4, type: "fabric-idx", conformance: "M", quality: "X",
            details: "This field shall indicate the fabric index of the fabric that performed the change (if any). This " +
                "shall be null if there is no fabric that can be determined to have caused the change. This shall NOT " +
                "be null if the operation source is \"Remote\".",
            xref: { document: "cluster", section: "5.2.11.5.5" }
        }),

        Field({
            name: "SourceNode", id: 0x5, type: "node-id", conformance: "M", quality: "X",
            details: "This field shall indicate the Node ID that performed the change (if any). The Node ID of the node " +
                "that performed the change. This shall be null if there was no Node involved in the change. This " +
                "shall NOT be null if the operation source is \"Remote\".",
            xref: { document: "cluster", section: "5.2.11.5.6" }
        }),

        Field({
            name: "DataIndex", id: 0x6, type: "uint16", conformance: "M", quality: "X",
            details: "This field shall indicate the index of the specific item that was changed (e.g. schedule, PIN, RFID, " +
                "etc.) in the list of items identified by LockDataType. This shall be null if the LockDataType does " +
                "not correspond to a list that can be indexed into (e.g. ProgrammingUser). This shall be 0xFFFE if " +
                "all indices are affected (e.g. ClearPINCode, ClearRFIDCode, ClearWeekDaySchedule, " +
                "ClearYearDaySchedule, etc.).",
            xref: { document: "cluster", section: "5.2.11.5.7" }
        })
    ),

    Command(
        {
            name: "LockDoor", id: 0x0, access: "O T", conformance: "M", direction: "request",
            response: "status",
            details: "This command causes the lock device to lock the door. This command includes an optional code for the " +
                "lock. The door lock may require a PIN depending on the value of the RequirePINForRemoteOperation " +
                "attribute.",
            xref: { document: "cluster", section: "5.2.10.1" }
        },

        Field({
            name: "PinCode", id: 0x0, type: "octstr", conformance: "[COTA & PIN]",

            details: "If the RequirePINforRemoteOperation attribute is True then PINCode field shall be provided and the " +
                "door lock shall NOT grant access if it is not provided." +
                "\n" +
                "If the PINCode field is provided, the door lock shall verify PINCode before granting access " +
                "regardless of the value of RequirePINForRemoteOperation attribute." +
                "\n" +
                "When the PINCode field is provided an invalid PIN will count towards the WrongCodeEntryLimit and the " +
                "UserCodeTemporaryDisableTime will be triggered if the WrongCodeEntryLimit is exceeded. The lock " +
                "shall ignore any attempts to lock/unlock the door until the UserCodeTemporaryDisableTime expires.",

            xref: { document: "cluster", section: "5.2.10.1.1" }
        })
    ),

    Command(
        {
            name: "UnlockDoor", id: 0x1, access: "O T", conformance: "M", direction: "request",
            response: "status",

            details: "This command causes the lock device to unlock the door. This command includes an optional code for " +
                "the lock. The door lock may require a code depending on the value of the " +
                "RequirePINForRemoteOperation attribute." +
                "\n" +
                "NOTE" +
                "\n" +
                "If the attribute AutoRelockTime is supported the lock will transition to the locked state when the " +
                "auto relock time has expired.",

            xref: { document: "cluster", section: "5.2.10.2" }
        },

        Field({
            name: "PinCode", id: 0x0, type: "octstr", conformance: "[COTA & PIN]",
            details: "See PINCode field.",
            xref: { document: "cluster", section: "5.2.10.2.1" }
        })
    ),

    Command({
        name: "Toggle", id: 0x2, access: "O T", conformance: "X", direction: "request", response: "status",
        xref: { document: "cluster", section: "5.2.10" }
    }),

    Command(
        {
            name: "UnlockWithTimeout", id: 0x3, access: "O T", conformance: "O", direction: "request",
            response: "status",
            details: "This command causes the lock device to unlock the door with a timeout parameter. After the time in " +
                "seconds specified in the timeout field, the lock device will relock itself automatically. This " +
                "timeout parameter is only temporary for this message transition and overrides the default relock " +
                "time as specified in the AutoRelockTime attribute. If the door lock device is not capable of or does " +
                "not want to support temporary Relock Timeout, it SHOULD NOT support this optional command.",
            xref: { document: "cluster", section: "5.2.10.3" }
        },

        Field({
            name: "Timeout", id: 0x0, type: "uint16", conformance: "M",
            details: "This field shall indicate the timeout in seconds to wait before relocking the door lock. This value " +
                "is independent of the AutoRelockTime attribute value.",
            xref: { document: "cluster", section: "5.2.10.3.1" }
        }),

        Field({
            name: "PinCode", id: 0x1, type: "octstr", conformance: "[COTA & PIN]",
            details: "See PINCode field.",
            xref: { document: "cluster", section: "5.2.10.3.2" }
        })
    ),

    Command(
        {
            name: "SetPinCode", id: 0x5, access: "A T", conformance: "!USR & PIN", direction: "request",
            response: "status",
            details: "Set a PIN Code into the lock." +
                "\n" +
                "Return status is a global status code or a cluster-specific status code from the Status Codes table " +
                "and shall be one of the following values:",
            xref: { document: "cluster", section: "5.2.10.4" }
        },

        Field({
            name: "UserId", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",
            details: "This field shall indicate the user ID. The value of the UserID field shall be between 0 and the " +
                "value of the NumberOfPINUsersSupported attribute.",
            xref: { document: "cluster", section: "5.2.10.4.1" }
        }),

        Field({
            name: "UserStatus", id: 0x1, type: "UserStatusEnum", conformance: "M", constraint: "desc",
            default: 1, quality: "X",
            details: "This field shall indicate the user status. Only the values 1 (Occupied/Enabled) and 3 " +
                "(Occupied/Disabled) are allowed for UserStatus.",
            xref: { document: "cluster", section: "5.2.10.4.2" }
        }),

        Field({ name: "UserType", id: 0x2, type: "UserTypeEnum", conformance: "M", default: 0, quality: "X" }),
        Field({ name: "Pin", id: 0x3, type: "octstr", conformance: "M" })
    ),

    Command(
        {
            name: "GetPinCode", id: 0x6, access: "A", conformance: "!USR & PIN", direction: "request",
            response: "GetPinCodeResponse",
            details: "Retrieve a PIN Code.",
            xref: { document: "cluster", section: "5.2.10.5" }
        },

        Field({
            name: "UserId", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",
            details: "This field shall indicate the user ID. The value of the UserID field shall be between 0 and the " +
                "value of the NumberOfPINUsersSupported attribute.",
            xref: { document: "cluster", section: "5.2.10.5.1" }
        })
    ),

    Command(
        {
            name: "GetPinCodeResponse", id: 0x6, conformance: "!USR & PIN", direction: "response",

            details: "Returns the PIN for the specified user ID." +
                "\n" +
                "If the requested UserID is valid and the Code doesn’t exist, Get RFID Code Response shall have the " +
                "following format:" +
                "\n" +
                "UserID = requested User ID UserStatus = 0 (Available) UserType = Null (Not supported) PINCode = 0 " +
                "(zero length)" +
                "\n" +
                "If the requested UserID is invalid, send Default Response with an error status. The error status " +
                "shall be equal to CONSTRAINT_ERROR when User_ID is less than the max number of users supported, and " +
                "NOT_FOUND if greater than or equal to the max number of users supported.",

            xref: { document: "cluster", section: "5.2.10.6" }
        },

        Field({ name: "UserId", id: 0x0, type: "uint16", conformance: "M", constraint: "desc" }),
        Field({
            name: "UserStatus", id: 0x1, type: "UserStatusEnum", conformance: "M", constraint: "desc",
            default: 0, quality: "X"
        }),
        Field({ name: "UserType", id: 0x2, type: "UserTypeEnum", conformance: "M", constraint: "desc", quality: "X" }),
        Field({ name: "PinCode", id: 0x3, type: "octstr", conformance: "M", quality: "X" })
    ),

    Command(
        {
            name: "ClearPinCode", id: 0x7, access: "A T", conformance: "!USR & PIN", direction: "request",
            response: "status",
            details: "Clear a PIN code or all PIN codes." +
                "\n" +
                "For each PIN Code cleared whose user doesn’t have a RFID Code or other credential type, then " +
                "corresponding user record’s UserStatus value shall be set to Available, and UserType value shall be " +
                "set to UnrestrictedUser and all schedules shall be cleared.",
            xref: { document: "cluster", section: "5.2.10.7" }
        },

        Field({
            name: "PinSlotIndex", id: 0x0, type: "uint16", conformance: "M",
            constraint: "1 to numberOfPinUsersSupported, 65534",
            details: "This field shall specify a valid PIN code slot index or 0xFFFE to indicate all PIN code slots shall " +
                "be cleared.",
            xref: { document: "cluster", section: "5.2.10.7.1" }
        })
    ),

    Command({
        name: "ClearAllPinCodes", id: 0x8, access: "A T", conformance: "!USR & PIN", direction: "request",
        response: "status",

        details: "Clear out all PINs on the lock." +
            "\n" +
            "NOTE" +
            "\n" +
            "On the server, the clear all PIN codes command SHOULD have the same effect as the ClearPINCode " +
            "command with respect to the setting of user status, user type and schedules.",

        xref: { document: "cluster", section: "5.2.10.8" }
    }),

    Command(
        {
            name: "SetUserStatus", id: 0x9, access: "A", conformance: "!USR & (PIN | RID | FGP)",
            direction: "request", response: "status",
            details: "Set the status of a user ID.",
            xref: { document: "cluster", section: "5.2.10.9" }
        },

        Field({
            name: "UserId", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",
            details: "This field shall indicate the user ID. The value of the UserID field shall be between 0 and the " +
                "value of the NumberOfPINUsersSupported attribute.",
            xref: { document: "cluster", section: "5.2.10.9.1" }
        }),

        Field({
            name: "UserStatus", id: 0x1, type: "UserStatusEnum", conformance: "M", constraint: "desc",
            details: "UserStatus value of Available is not allowed. In order to clear a user id, the ClearUser Command " +
                "shall be used. For user status value please refer to UserStatusEnum.",
            xref: { document: "cluster", section: "5.2.10.9.2" }
        })
    ),

    Command(
        {
            name: "GetUserStatus", id: 0xa, access: "A", conformance: "!USR & (PIN | RID | FGP)",
            direction: "request", response: "GetUserStatusResponse",
            details: "Get the status of a user.",
            xref: { document: "cluster", section: "5.2.10.10" }
        },

        Field({
            name: "UserId", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",
            details: "This field shall indicate the user ID. The value of the UserID field shall be between 0 and the " +
                "value of the NumberOfPINUsersSupported attribute.",
            xref: { document: "cluster", section: "5.2.10.10.1" }
        })
    ),

    Command(
        {
            name: "GetUserStatusResponse", id: 0xa, conformance: "!USR", direction: "response",
            details: "Returns the user status for the specified user ID.",
            xref: { document: "cluster", section: "5.2.10.11" }
        },
        Field({
            name: "UserId", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",
            details: "This field shall indicate the user ID provided in the request.",
            xref: { document: "cluster", section: "5.2.10.11.1" }
        }),
        Field({
            name: "UserStatus", id: 0x1, type: "UserStatusEnum", conformance: "M",
            details: "This field shall indicate the current status of the requested user ID.",
            xref: { document: "cluster", section: "5.2.10.11.2" }
        })
    ),

    Command(
        {
            name: "SetWeekDaySchedule", id: 0xb, access: "A", conformance: "WDSCH", direction: "request",
            response: "status",

            details: "Set a weekly repeating schedule for a specified user." +
                "\n" +
                "The associated UserType may be changed to ScheduleRestrictedUser by the lock when a Week Day " +
                "schedule is set." +
                "\n" +
                "Return status shall be one of the following values:",

            xref: { document: "cluster", section: "5.2.10.12" }
        },

        Field({
            name: "WeekDayIndex", id: 0x0, type: "uint8", conformance: "M",
            constraint: "1 to numberOfWeekDaySchedulesSupportedPerUser",
            details: "This field shall indicate the index of the Week Day schedule.",
            xref: { document: "cluster", section: "5.2.10.12.1" }
        }),

        Field({
            name: "UserIndex", id: 0x1, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported",
            details: "This field shall indicate the user ID.",
            xref: { document: "cluster", section: "5.2.10.12.2" }
        }),

        Field({
            name: "DaysMask", id: 0x2, type: "DaysMaskBitmap", conformance: "M",
            details: "This field shall indicate which week days the schedule is active.",
            xref: { document: "cluster", section: "5.2.10.12.3" }
        }),
        Field({
            name: "StartHour", id: 0x3, type: "uint8", conformance: "M", constraint: "max 23",
            details: "This field shall indicate the starting hour for the Week Day schedule.",
            xref: { document: "cluster", section: "5.2.10.12.4" }
        }),
        Field({
            name: "StartMinute", id: 0x4, type: "uint8", conformance: "M", constraint: "max 59",
            details: "This field shall indicate the starting minute for the Week Day schedule.",
            xref: { document: "cluster", section: "5.2.10.12.5" }
        }),

        Field({
            name: "EndHour", id: 0x5, type: "uint8", conformance: "M", constraint: "max 23",
            details: "This field shall indicate the ending hour for the Week Day schedule. EndHour shall be equal to or " +
                "greater than StartHour.",
            xref: { document: "cluster", section: "5.2.10.12.6" }
        }),

        Field({
            name: "EndMinute", id: 0x6, type: "uint8", conformance: "M", constraint: "max 59",
            details: "This field shall indicate the ending minute for the Week Day schedule. If EndHour is equal to " +
                "StartHour then EndMinute shall be greater than StartMinute." +
                "\n" +
                "If the EndHour is equal to 23 and the EndMinute is equal to 59 the Lock shall grant access to the " +
                "user up until 23:59:59.",
            xref: { document: "cluster", section: "5.2.10.12.7" }
        })
    ),

    Command(
        {
            name: "GetWeekDaySchedule", id: 0xc, access: "A", conformance: "WDSCH", direction: "request",
            response: "GetWeekDayScheduleResponse",
            details: "Retrieve the specific weekly schedule for the specific user.",
            xref: { document: "cluster", section: "5.2.10.13" }
        },

        Field({
            name: "WeekDayIndex", id: 0x0, type: "uint8", conformance: "M",
            constraint: "1 to numberOfWeekDaySchedulesSupportedPerUser"
        }),
        Field({
            name: "UserIndex", id: 0x1, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported"
        })
    ),

    Command(
        {
            name: "GetWeekDayScheduleResponse", id: 0xc, conformance: "WDSCH", direction: "response",
            details: "Returns the weekly repeating schedule data for the specified schedule index.",
            xref: { document: "cluster", section: "5.2.10.14" }
        },

        Field({
            name: "WeekDayIndex", id: 0x0, type: "uint8", conformance: "M",
            constraint: "1 to numberOfWeekDaySchedulesSupportedPerUser",
            details: "This field shall indicate the index of the Week Day schedule.",
            xref: { document: "cluster", section: "5.2.10.14.1" }
        }),

        Field({
            name: "UserIndex", id: 0x1, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported",
            details: "This field shall indicate the user ID.",
            xref: { document: "cluster", section: "5.2.10.14.2" }
        }),

        Field({
            name: "Status", id: 0x2, type: "status", conformance: "M", constraint: "desc", default: 0,

            details: "Status shall be one of the following values:" +
                "\n" +
                "  • SUCCESS if both WeekDayIndex and UserIndex are valid and there is a corresponding schedule " +
                "    entry." +
                "\n" +
                "  • INVALID_COMMAND if either WeekDayIndex and/or UserIndex values are not within valid range" +
                "\n" +
                "  • NOT_FOUND if no corresponding schedule entry found for WeekDayIndex." +
                "\n" +
                "  • NOT_FOUND if no corresponding user entry found for UserIndex." +
                "\n" +
                "If this field is SUCCESS, the optional fields for this command shall be present. For other (error) " +
                "status values, only the fields up to the status field shall be present.",

            xref: { document: "cluster", section: "5.2.10.14.3" }
        }),

        Field({ name: "DaysMask", id: 0x3, type: "DaysMaskBitmap", conformance: "O" }),
        Field({
            name: "StartHour", id: 0x4, type: "uint8", conformance: "O", constraint: "max 23",
            details: "This field shall indicate the starting hour for the Week Day schedule.",
            xref: { document: "cluster", section: "5.2.10.14.4" }
        }),
        Field({
            name: "StartMinute", id: 0x5, type: "uint8", conformance: "O", constraint: "max 59",
            details: "This field shall indicate the starting minute for the Week Day schedule.",
            xref: { document: "cluster", section: "5.2.10.14.5" }
        }),

        Field({
            name: "EndHour", id: 0x6, type: "uint8", conformance: "O", constraint: "max 23",
            details: "This field shall indicate the ending hour for the Week Day schedule. EndHour shall be equal to or " +
                "greater than StartHour.",
            xref: { document: "cluster", section: "5.2.10.14.6" }
        }),

        Field({
            name: "EndMinute", id: 0x7, type: "uint8", conformance: "O", constraint: "max 59",
            details: "This field shall indicate the ending minute for the Week Day schedule. If EndHour is equal to " +
                "StartHour then EndMinute shall be greater than StartMinute.",
            xref: { document: "cluster", section: "5.2.10.14.7" }
        })
    ),

    Command(
        {
            name: "ClearWeekDaySchedule", id: 0xd, access: "A", conformance: "WDSCH", direction: "request",
            response: "status",
            details: "Clear the specific weekly schedule or all weekly schedules for the specific user." +
                "\n" +
                "Return status shall be one of the following values:",
            xref: { document: "cluster", section: "5.2.10.15" }
        },

        Field({
            name: "WeekDayIndex", id: 0x0, type: "uint8", conformance: "M",
            constraint: "1 to numberOfWeekDaySchedulesSupportedPerUser, 254",
            details: "This field shall indicate the Week Day schedule index to clear or 0xFE to clear all Week Day " +
                "schedules for the specified user.",
            xref: { document: "cluster", section: "5.2.10.15.1" }
        }),

        Field({
            name: "UserIndex", id: 0x1, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported",
            details: "This field shall indicate the user ID.",
            xref: { document: "cluster", section: "5.2.10.15.2" }
        })
    ),

    Command(
        {
            name: "SetYearDaySchedule", id: 0xe, access: "A", conformance: "YDSCH", direction: "request",
            response: "status",

            details: "Set a time-specific schedule ID for a specified user." +
                "\n" +
                "The associated UserType may be changed to ScheduleRestrictedUser by the lock when a Year Day " +
                "schedule is set." +
                "\n" +
                "Return status shall be one of the following values:",

            xref: { document: "cluster", section: "5.2.10.16" }
        },

        Field({
            name: "YearDayIndex", id: 0x0, type: "uint8", conformance: "M",
            constraint: "1 to numberOfYearDaySchedulesSupportedPerUser",
            details: "This field shall indicate the index of the Year Day schedule.",
            xref: { document: "cluster", section: "5.2.10.16.1" }
        }),

        Field({
            name: "UserIndex", id: 0x1, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported",
            details: "This field shall indicate the user ID.",
            xref: { document: "cluster", section: "5.2.10.16.2" }
        }),

        Field({
            name: "LocalStartTime", id: 0x2, type: "epoch-s", conformance: "M",
            details: "This field shall indicate the starting time for the Year Day schedule in Epoch Time in Seconds with " +
                "local time offset based on the local timezone and DST offset on the day represented by the value.",
            xref: { document: "cluster", section: "5.2.10.16.3" }
        }),

        Field({
            name: "LocalEndTime", id: 0x3, type: "epoch-s", conformance: "M",
            details: "This field shall indicate the ending time for the Year Day schedule in Epoch Time in Seconds with " +
                "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                "LocalEndTime shall be greater than LocalStartTime.",
            xref: { document: "cluster", section: "5.2.10.16.4" }
        })
    ),

    Command(
        {
            name: "GetYearDaySchedule", id: 0xf, access: "A", conformance: "YDSCH", direction: "request",
            response: "GetYearDayScheduleResponse",
            details: "Retrieve the specific year day schedule for the specific schedule and user indexes.",
            xref: { document: "cluster", section: "5.2.10.17" }
        },

        Field({
            name: "YearDayIndex", id: 0x0, type: "uint8", conformance: "M",
            constraint: "1 to numberOfYearDaySchedulesSupportedPerUser"
        }),
        Field({
            name: "UserIndex", id: 0x1, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported"
        })
    ),

    Command(
        {
            name: "GetYearDayScheduleResponse", id: 0xf, conformance: "YDSCH", direction: "response",
            details: "Returns the year day schedule data for the specified schedule and user indexes.",
            xref: { document: "cluster", section: "5.2.10.18" }
        },

        Field({
            name: "YearDayIndex", id: 0x0, type: "uint8", conformance: "M",
            constraint: "1 to numberOfYearDaySchedulesSupportedPerUser",
            details: "This field shall indicate the index of the Year Day schedule.",
            xref: { document: "cluster", section: "5.2.10.18.1" }
        }),

        Field({
            name: "UserIndex", id: 0x1, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported",
            details: "This field shall indicate the user ID.",
            xref: { document: "cluster", section: "5.2.10.18.2" }
        }),

        Field({
            name: "Status", id: 0x2, type: "status", conformance: "M", constraint: "desc", default: 0,

            details: "Status shall be one of the following values:" +
                "\n" +
                "  • SUCCESS if both YearDayIndex and UserIndex are valid and there is a corresponding schedule " +
                "    entry." +
                "\n" +
                "  • INVALID_COMMAND if either YearDayIndex and/or UserIndex values are not within valid range" +
                "\n" +
                "  • NOT_FOUND if no corresponding schedule entry found for YearDayIndex." +
                "\n" +
                "  • NOT_FOUND if no corresponding user entry found for UserIndex." +
                "\n" +
                "If this field is SUCCESS, the optional fields for this command shall be present. For other (error) " +
                "status values, only the fields up to the status field shall be present.",

            xref: { document: "cluster", section: "5.2.10.18.3" }
        }),

        Field({
            name: "LocalStartTime", id: 0x3, type: "epoch-s", conformance: "O",
            details: "This field shall indicate the starting time for the Year Day schedule in Epoch Time in Seconds with " +
                "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                "This shall be null if the schedule is not set for the YearDayIndex and UserIndex provided.",
            xref: { document: "cluster", section: "5.2.10.18.4" }
        }),

        Field({
            name: "LocalEndTime", id: 0x4, type: "epoch-s", conformance: "O",
            details: "This field shall indicate the ending time for the Year Day schedule in Epoch Time in Seconds with " +
                "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                "LocalEndTime shall be greater than LocalStartTime. This shall be null if the schedule is not set for " +
                "the YearDayIndex and UserIndex provided.",
            xref: { document: "cluster", section: "5.2.10.18.5" }
        })
    ),

    Command(
        {
            name: "ClearYearDaySchedule", id: 0x10, access: "A", conformance: "YDSCH", direction: "request",
            response: "status",
            details: "Clears the specific year day schedule or all year day schedules for the specific user." +
                "\n" +
                "Return status shall be one of the following values:",
            xref: { document: "cluster", section: "5.2.10.19" }
        },

        Field({
            name: "YearDayIndex", id: 0x0, type: "uint8", conformance: "M",
            constraint: "1 to numberOfYearDaySchedulesSupportedPerUser, 254",
            details: "This field shall indicate the Year Day schedule index to clear or 0xFE to clear all Year Day " +
                "schedules for the specified user.",
            xref: { document: "cluster", section: "5.2.10.19.1" }
        }),

        Field({
            name: "UserIndex", id: 0x1, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported",
            details: "This field shall indicate the user ID.",
            xref: { document: "cluster", section: "5.2.10.19.2" }
        })
    ),

    Command(
        {
            name: "SetHolidaySchedule", id: 0x11, access: "A", conformance: "HDSCH", direction: "request",
            response: "status",
            details: "Set the holiday Schedule by specifying local start time and local end time with respect to any Lock " +
                "Operating Mode." +
                "\n" +
                "Return status shall be one of the following values:",
            xref: { document: "cluster", section: "5.2.10.20" }
        },

        Field({
            name: "HolidayIndex", id: 0x0, type: "uint8", conformance: "M",
            constraint: "1 to numberOfHolidaySchedulesSupported",
            details: "This field shall indicate the index of the Holiday schedule.",
            xref: { document: "cluster", section: "5.2.10.20.1" }
        }),

        Field({
            name: "LocalStartTime", id: 0x1, type: "epoch-s", conformance: "M",
            details: "This field shall indicate the starting time for the Holiday Day schedule in Epoch Time in Seconds " +
                "with local time offset based on the local timezone and DST offset on the day represented by the " +
                "value.",
            xref: { document: "cluster", section: "5.2.10.20.2" }
        }),

        Field({
            name: "LocalEndTime", id: 0x2, type: "epoch-s", conformance: "M",
            details: "This field shall indicate the ending time for the Holiday Day schedule in Epoch Time in Seconds with " +
                "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                "LocalEndTime shall be greater than LocalStartTime.",
            xref: { document: "cluster", section: "5.2.10.20.3" }
        }),

        Field({
            name: "OperatingMode", id: 0x3, type: "OperatingModeEnum", conformance: "M",
            details: "This field shall indicate the operating mode to use during this Holiday schedule start/end time.",
            xref: { document: "cluster", section: "5.2.10.20.4" }
        })
    ),

    Command(
        {
            name: "GetHolidaySchedule", id: 0x12, access: "A", conformance: "HDSCH", direction: "request",
            response: "GetHolidayScheduleResponse",
            details: "Get the holiday schedule for the specified index.",
            xref: { document: "cluster", section: "5.2.10.21" }
        },

        Field({
            name: "HolidayIndex", id: 0x0, type: "uint8", conformance: "M",
            constraint: "1 to numberOfHolidaySchedulesSupported"
        })
    ),

    Command(
        {
            name: "GetHolidayScheduleResponse", id: 0x12, conformance: "HDSCH", direction: "response",
            details: "Returns the Holiday Schedule Entry for the specified Holiday ID.",
            xref: { document: "cluster", section: "5.2.10.22" }
        },

        Field({
            name: "HolidayIndex", id: 0x0, type: "uint8", conformance: "M",
            constraint: "1 to numberOfHolidaySchedulesSupported",
            details: "This field shall indicate the index of the Holiday schedule.",
            xref: { document: "cluster", section: "5.2.10.22.1" }
        }),

        Field({
            name: "Status", id: 0x1, type: "status", conformance: "M", constraint: "desc", default: 0,

            details: "Status shall be one of the following values:" +
                "\n" +
                "  • FAILURE if the attribute NumberOfHolidaySchedulesSupported is zero." +
                "\n" +
                "  • SUCCESS if the HolidayIndex is valid and there is a corresponding schedule entry." +
                "\n" +
                "  • INVALID_COMMAND if the HolidayIndex is not within valid range" +
                "\n" +
                "  • NOT_FOUND if the HolidayIndex is within the valid range, however, there is not corresponding " +
                "    schedule entry found." +
                "\n" +
                "If this field is SUCCESS, the optional fields for this command shall be present. For other (error) " +
                "status values, only the fields up to the status field shall be present.",

            xref: { document: "cluster", section: "5.2.10.22.2" }
        }),

        Field({
            name: "LocalStartTime", id: 0x2, type: "epoch-s", conformance: "O", quality: "X",
            details: "This field shall indicate the starting time for the Holiday schedule in Epoch Time in Seconds with " +
                "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                "This shall be null if the schedule is not set for the HolidayIndex provided.",
            xref: { document: "cluster", section: "5.2.10.22.3" }
        }),

        Field({
            name: "LocalEndTime", id: 0x3, type: "epoch-s", conformance: "O", quality: "X",
            details: "This field shall indicate the ending time for the Holiday schedule in Epoch Time in Seconds with " +
                "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                "LocalEndTime shall be greater than LocalStartTime. This shall be null if the schedule is not set for " +
                "the HolidayIndex provided.",
            xref: { document: "cluster", section: "5.2.10.22.4" }
        }),

        Field({
            name: "OperatingMode", id: 0x4, type: "OperatingModeEnum", conformance: "O", quality: "X",
            details: "This field shall indicate the operating mode to use during this Holiday schedule start/end time. " +
                "This shall be null if the schedule is not set for the HolidayIndex provided.",
            xref: { document: "cluster", section: "5.2.10.22.5" }
        })
    ),

    Command(
        {
            name: "ClearHolidaySchedule", id: 0x13, access: "A", conformance: "HDSCH", direction: "request",
            response: "status",
            details: "Clears the holiday schedule or all holiday schedules.",
            xref: { document: "cluster", section: "5.2.10.23" }
        },

        Field({
            name: "HolidayIndex", id: 0x0, type: "uint8", conformance: "M",
            constraint: "1 to numberOfHolidaySchedulesSupported, 254",
            details: "This field shall indicate the Holiday schedule index to clear or 0xFE to clear all Holiday " +
                "schedules.",
            xref: { document: "cluster", section: "5.2.10.23.1" }
        })
    ),

    Command(
        {
            name: "SetUserType", id: 0x14, access: "A", conformance: "!USR & (PIN | RID | FGP)",
            direction: "request", response: "status",
            details: "Set the user type for a specified user." +
                "\n" +
                "For user type value please refer to User Type Value." +
                "\n" +
                "Return status shall be one of the following values:",
            xref: { document: "cluster", section: "5.2.10.24" }
        },

        Field({
            name: "UserId", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",
            details: "This field shall indicate the user ID.",
            xref: { document: "cluster", section: "5.2.10.24.1" }
        }),
        Field({
            name: "UserType", id: 0x1, type: "UserTypeEnum", conformance: "M",
            details: "This field shall indicate the user type.",
            xref: { document: "cluster", section: "5.2.10.24.2" }
        })
    ),

    Command(
        {
            name: "GetUserType", id: 0x15, access: "A", conformance: "!USR & (PIN | RID | FGP)",
            direction: "request", response: "GetUserTypeResponse",
            details: "Retrieve the user type for a specific user.",
            xref: { document: "cluster", section: "5.2.10.25" }
        },

        Field({ name: "UserId", id: 0x0, type: "uint16", conformance: "M", constraint: "desc" })
    ),

    Command(
        {
            name: "GetUserTypeResponse", id: 0x15, conformance: "!USR", direction: "response",
            details: "Returns the user type for the specified user ID. If the requested User ID is invalid, send Default " +
                "Response with an error status equal to FAILURE.",
            xref: { document: "cluster", section: "5.2.10.26" }
        },

        Field({ name: "UserId", id: 0x0, type: "uint16", conformance: "M", constraint: "desc" }),
        Field({ name: "UserType", id: 0x1, type: "UserTypeEnum", conformance: "M" })
    ),

    Command(
        {
            name: "SetRfidCode", id: 0x16, access: "A T", conformance: "!USR & RID", direction: "request",
            response: "status",
            details: "Set an ID for RFID access into the lock." +
                "\n" +
                "Return status is a global status code or a cluster-specific status code from the Status Codes table " +
                "and shall be one of the following values:",
            xref: { document: "cluster", section: "5.2.10.27" }
        },

        Field({
            name: "UserId", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",
            details: "This field shall indicate the user ID." +
                "\n" +
                "The value of the UserID field shall be between 0 and the value of the NumberOfRFIDUsersSupported " +
                "attribute.",
            xref: { document: "cluster", section: "5.2.10.27.1" }
        }),

        Field({
            name: "UserStatus", id: 0x1, type: "UserStatusEnum", conformance: "M", constraint: "desc",
            default: 1, quality: "X",
            details: "This field shall indicate what the status is for a specific user ID. The values are according to " +
                "“Set PIN” while not all are supported." +
                "\n" +
                "Only the values 1 (Occupied/Enabled) and 3 (Occupied/Disabled) are allowed for UserStatus.",
            xref: { document: "cluster", section: "5.2.10.27.2" }
        }),

        Field({
            name: "UserType", id: 0x2, type: "UserTypeEnum", conformance: "M", constraint: "desc", default: 0,
            quality: "X",
            details: "The values are the same as used for SetPINCode command.",
            xref: { document: "cluster", section: "5.2.10.27.3" }
        }),

        Field({ name: "RfidCode", id: 0x3, type: "octstr", conformance: "M" })
    ),

    Command(
        {
            name: "GetRfidCode", id: 0x17, access: "A", conformance: "!USR & RID", direction: "request",
            response: "GetRfidCodeResponse",
            details: "Retrieve an RFID code.",
            xref: { document: "cluster", section: "5.2.10.28" }
        },

        Field({
            name: "UserId", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",
            details: "This field shall indicate the user ID." +
                "\n" +
                "The value of the UserID field shall be between 0 and the value of the NumberOfRFIDUsersSupported " +
                "attribute.",
            xref: { document: "cluster", section: "5.2.10.28.1" }
        })
    ),

    Command(
        {
            name: "GetRfidCodeResponse", id: 0x17, conformance: "!USR & RID", direction: "response",

            details: "Returns the RFID code for the specified user ID." +
                "\n" +
                "If the requested User ID is valid and the Code doesn’t exist, Get RFID Code Response shall have the " +
                "following format:" +
                "\n" +
                "User ID = requested User ID UserStatus = 0 (available) UserType = 0xFF (not supported) RFID Code = 0 " +
                "(zero length)" +
                "\n" +
                "If requested User ID is invalid, send Default Response with an error status. The error status shall " +
                "be equal to CONSTRAINT_ERROR when User_ID is less than the max number of users supported, and " +
                "NOT_FOUND if greater than or equal to the max number of users supported.",

            xref: { document: "cluster", section: "5.2.10.29" }
        },

        Field({ name: "UserId", id: 0x0, type: "uint16", conformance: "M", constraint: "desc" }),
        Field({
            name: "UserStatus", id: 0x1, type: "UserStatusEnum", conformance: "M", constraint: "desc",
            default: 0, quality: "X"
        }),
        Field({ name: "UserType", id: 0x2, type: "UserTypeEnum", conformance: "M", constraint: "desc", quality: "X" }),
        Field({ name: "RfidCode", id: 0x3, type: "octstr", conformance: "M", quality: "X" })
    ),

    Command(
        {
            name: "ClearRfidCode", id: 0x18, access: "A T", conformance: "!USR & RID", direction: "request",
            response: "status",
            details: "Clear an RFID code or all RFID codes." +
                "\n" +
                "For each RFID Code cleared whose user doesn’t have a PIN Code or other credential type, then the " +
                "corresponding user record’s UserStatus value shall be set to Available, and UserType value shall be " +
                "set to UnrestrictedUser and all schedules shall be cleared.",
            xref: { document: "cluster", section: "5.2.10.30" }
        },

        Field({
            name: "RfidSlotIndex", id: 0x0, type: "uint16", conformance: "M",
            constraint: "1 to numberOfRfidUsersSupported, 65534",
            details: "This field shall indicate a valid RFID code slot index or 0xFFFE to indicate all RFID code slots " +
                "shall be cleared.",
            xref: { document: "cluster", section: "5.2.10.30.1" }
        })
    ),

    Command({
        name: "ClearAllRfidCodes", id: 0x19, access: "A T", conformance: "!USR & RID", direction: "request",
        response: "status",
        details: "Clear out all RFIDs on the lock. If you clear all RFID codes and this user didn’t have a PIN code, " +
            "the user status has to be set to \"0 Available\", the user type has to be set to the default value, " +
            "and all schedules which are supported have to be set to the default values.",
        xref: { document: "cluster", section: "5.2.10.31" }
    }),

    Command(
        {
            name: "SetUser", id: 0x1a, access: "A T", conformance: "USR", direction: "request",
            response: "status",

            details: "Set user into the lock." +
                "\n" +
                "Fields used for different use cases:" +
                "\n" +
                "Return status is a global status code or a cluster-specific status code from the Status Codes table " +
                "and" +
                "\n" +
                "shall be one of the following values:" +
                "\n" +
                "  • SUCCESS, if setting User was successful." +
                "\n" +
                "  • FAILURE, if some unexpected internal error occurred setting User." +
                "\n" +
                "  • OCCUPIED, if OperationType is Add and UserIndex points to an occupied slot." +
                "\n" +
                "  • INVALID_COMMAND, if one or more fields violate constraints or are invalid or if OperationType is " +
                "    Modify and UserIndex points to an available slot.",

            xref: { document: "cluster", section: "5.2.10.32" }
        },

        Field({
            name: "OperationType", id: 0x0, type: "DataOperationTypeEnum", conformance: "M",
            constraint: "add, modify",
            details: "This field shall indicate the type of operation.",
            xref: { document: "cluster", section: "5.2.10.32.1" }
        }),

        Field({
            name: "UserIndex", id: 0x1, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported",
            details: "This field shall indicate the user ID.",
            xref: { document: "cluster", section: "5.2.10.32.2" }
        }),

        Field({
            name: "UserName", id: 0x2, type: "string", conformance: "M", constraint: "max 10", quality: "X",

            details: "This field shall contain a string to use as a human readable identifier for the user. If UserName is " +
                "null then:" +
                "\n" +
                "  • If the OperationType is Add, the UserName in the resulting user record shall be set to an empty " +
                "    string." +
                "\n" +
                "  • If the OperationType is Modify, the UserName in the user record shall NOT be changed from the " +
                "    current value." +
                "\n" +
                "If UserName is not null, the UserName in the user record shall be set to the provided value.",

            xref: { document: "cluster", section: "5.2.10.32.3" }
        }),

        Field({
            name: "UserUniqueId", id: 0x3, type: "uint32", conformance: "M", default: 4294967295, quality: "X",

            details: "This field shall indicate the fabric assigned number to use for connecting this user to other users " +
                "on other devices from the fabric’s perspective." +
                "\n" +
                "If UserUniqueID is null then:" +
                "\n" +
                "  • If the OperationType is Add, the UserUniqueID in the resulting user record shall be set to " +
                "    default value specified above." +
                "\n" +
                "  • If the OperationType is Modify, the UserUniqueID in the user record shall NOT be changed from " +
                "    the current value." +
                "\n" +
                "If UserUniqueID is not null, the UserUniqueID in the user record shall be set to the provided value.",

            xref: { document: "cluster", section: "5.2.10.32.4" }
        }),

        Field({
            name: "UserStatus", id: 0x4, type: "UserStatusEnum", conformance: "M",
            constraint: "occupiedEnabled, occupiedDisabled", default: 1, quality: "X",

            details: "This field shall indicate the UserStatus to assign to this user when created or modified. If " +
                "UserStatus is null then:" +
                "\n" +
                "  • If the OperationType is Add, the UserStatus in the resulting user record shall be set to default " +
                "    value specified above." +
                "\n" +
                "  • If the OperationType is Modify, the UserStatus in the user record shall NOT be changed from the " +
                "    current value." +
                "\n" +
                "If UserStatus is not null, the UserStatus in the user record shall be set to the provided value.",

            xref: { document: "cluster", section: "5.2.10.32.5" }
        }),

        Field({
            name: "UserType", id: 0x5, type: "UserTypeEnum", conformance: "M",
            constraint: "unrestrictedUser, nonAccessUser, forcedUser, disposableUser, expiringUser, scheduleRestrictedUser, remoteOnlyUser",
            default: 0, quality: "X",

            details: "This field shall indicate the UserType to assign to this user when created or modified. If UserType " +
                "is null then:" +
                "\n" +
                "  • If the OperationType is Add, the UserType in the resulting user record shall be set to default " +
                "    value specified above." +
                "\n" +
                "  • If the OperationType is Modify, the UserType in the user record shall NOT be changed from the " +
                "    current value." +
                "\n" +
                "If UserType is not null, the UserType in the user record shall be set to the provided value.",

            xref: { document: "cluster", section: "5.2.10.32.6" }
        }),

        Field({
            name: "CredentialRule", id: 0x6, type: "CredentialRuleEnum", conformance: "M", default: 0,
            quality: "X",

            details: "This field shall indicate the CredentialRule to use for this user." +
                "\n" +
                "The valid CredentialRule enumeration values depends on the bits in the CredentialRulesBitmap map. " +
                "Each bit in the map identifies a valid CredentialRule that can be used." +
                "\n" +
                "If CredentialRule is null then:" +
                "\n" +
                "  • If the OperationType is Add, the CredentialRule in the resulting user record shall be set to " +
                "    default value specified above." +
                "\n" +
                "  • If the OperationType is Modify, the CredentialRule in the user record shall NOT be changed from " +
                "    the current value." +
                "\n" +
                "If CredentialRule is not null, the CredentialRule in the user record shall be set to the provided " +
                "value.",

            xref: { document: "cluster", section: "5.2.10.32.7" }
        })
    ),

    Command(
        {
            name: "GetUser", id: 0x1b, access: "A", conformance: "USR", direction: "request",
            response: "GetUserResponse",

            details: "Retrieve user." +
                "\n" +
                "An InvokeResponse command shall be sent with an appropriate error" +
                "\n" +
                "COMMAND, etc.) as needed otherwise the GetUserResponse Command shall be sent implying a status of " +
                "SUCCESS.",

            xref: { document: "cluster", section: "5.2.10.33" }
        },

        Field({
            name: "UserIndex", id: 0x0, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported"
        })
    ),

    Command(
        {
            name: "GetUserResponse", id: 0x1c, conformance: "USR", direction: "response",
            details: "Returns the user for the specified UserIndex." +
                "\n" +
                "If the requested UserIndex is valid and the UserStatus is Available for the requested UserIndex then " +
                "UserName, UserUniqueID, UserStatus, UserType, CredentialRule, Credentials, CreatorFabricIndex, and " +
                "LastModifiedFabricIndex shall all be null in the response.",
            xref: { document: "cluster", section: "5.2.10.34" }
        },

        Field({
            name: "UserIndex", id: 0x0, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported",
            details: "This field shall indicate the user ID.",
            xref: { document: "cluster", section: "5.2.10.34.1" }
        }),

        Field({
            name: "UserName", id: 0x1, type: "string", conformance: "M", constraint: "max 10", quality: "X",
            details: "This field shall contain a string to use as a human readable identifier for the user.",
            xref: { document: "cluster", section: "5.2.10.34.2" }
        }),
        Field({
            name: "UserUniqueId", id: 0x2, type: "uint32", conformance: "M", default: 0, quality: "X",
            details: "See UserUniqueID field.",
            xref: { document: "cluster", section: "5.2.10.34.3" }
        }),
        Field({
            name: "UserStatus", id: 0x3, type: "UserStatusEnum", conformance: "M", default: 0, quality: "X",
            details: "This field shall indicate the UserStatus assigned to the user when created or modified.",
            xref: { document: "cluster", section: "5.2.10.34.4" }
        }),
        Field({
            name: "UserType", id: 0x4, type: "UserTypeEnum", conformance: "M", default: 0, quality: "X",
            details: "This field shall indicate the UserType assigned to this user when created or modified.",
            xref: { document: "cluster", section: "5.2.10.34.5" }
        }),

        Field({
            name: "CredentialRule", id: 0x5, type: "CredentialRuleEnum", conformance: "M", constraint: "desc",
            default: 0, quality: "X",
            details: "This field shall indicate the CredentialRule set for this user.",
            xref: { document: "cluster", section: "5.2.10.34.6" }
        }),

        Field(
            {
                name: "Credentials", id: 0x6, type: "list", conformance: "M",
                constraint: "0 to numberOfCredentialsSupportedPerUser", quality: "X",
                details: "This field shall contain a list of credentials for this user.",
                xref: { document: "cluster", section: "5.2.10.34.7" }
            },

            Field({ name: "entry", type: "CredentialStruct" })
        ),

        Field({
            name: "CreatorFabricIndex", id: 0x7, type: "fabric-idx", conformance: "M", quality: "X",
            details: "This field shall indicate the user’s creator fabric index. CreatorFabricIndex shall be null if " +
                "UserStatus is set to Available or when the creator fabric cannot be determined (for example, when " +
                "user was created outside the Interaction Model) and shall NOT be null otherwise. This value shall be " +
                "set to 0 if the original creator fabric was deleted.",
            xref: { document: "cluster", section: "5.2.10.34.8" }
        }),

        Field({
            name: "LastModifiedFabricIndex", id: 0x8, type: "fabric-idx", conformance: "M", quality: "X",
            details: "This field shall indicate the user’s last modifier fabric index. LastModifiedFabricIndex shall be " +
                "null if UserStatus is set to Available or when the modifier fabric cannot be determined (for " +
                "example, when user was modified outside the Interaction Model) and shall NOT be null otherwise. This " +
                "value shall be set to 0 if the last modifier fabric was deleted.",
            xref: { document: "cluster", section: "5.2.10.34.9" }
        }),

        Field({
            name: "NextUserIndex", id: 0x9, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported", quality: "X",
            details: "This field shall indicate the next occupied UserIndex in the database which is useful for quickly " +
                "identifying occupied user slots in the database. This shall NOT be null if there is at least one " +
                "occupied entry after the requested UserIndex in the User database and shall be null if there are no " +
                "more occupied entries.",
            xref: { document: "cluster", section: "5.2.10.34.10" }
        })
    ),

    Command(
        {
            name: "ClearUser", id: 0x1d, access: "A T", conformance: "USR", direction: "request",
            response: "status",

            details: "Clears a user or all Users." +
                "\n" +
                "For each user to clear, all associated credentials (e.g. PIN, RFID, fingerprint, etc.) shall be " +
                "cleared and the user entry values shall be reset to their default values (e.g. UserStatus shall be " +
                "Available, UserType shall be UnrestrictedUser) and all associated schedules shall be cleared." +
                "\n" +
                "A LockUserChange event with the provided UserIndex shall be generated after successfully clearing " +
                "users.",

            xref: { document: "cluster", section: "5.2.10.35" }
        },

        Field({
            name: "UserIndex", id: 0x0, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported, 65534",
            details: "This field shall specify a valid User index or 0xFFFE to indicate all user slots shall be cleared.",
            xref: { document: "cluster", section: "5.2.10.35.1" }
        })
    ),

    Command(
        {
            name: "SetCredential", id: 0x22, access: "A T", conformance: "USR", direction: "request",
            response: "SetCredentialResponse",
            details: "Set a credential (e.g. PIN, RFID, Fingerprint, etc.) into the lock for a new user, existing user, or " +
                "ProgrammingUser." +
                "\n" +
                "Fields used for different use cases:",
            xref: { document: "cluster", section: "5.2.10.36" }
        },

        Field({
            name: "OperationType", id: 0x0, type: "DataOperationTypeEnum", conformance: "M",
            constraint: "add, modify",
            details: "This field shall indicate the set credential operation type requested.",
            xref: { document: "cluster", section: "5.2.10.36.1" }
        }),

        Field({
            name: "Credential", id: 0x1, type: "CredentialStruct", conformance: "M",
            details: "This field shall contain a credential structure that contains the CredentialTypeEnum and the " +
                "credential index (if applicable or 0 if not) to set.",
            xref: { document: "cluster", section: "5.2.10.36.2" }
        }),

        Field({
            name: "CredentialData", id: 0x2, type: "octstr", conformance: "M", constraint: "desc",
            details: "This field shall indicate the credential data to set for the credential being added or modified. The " +
                "length of the credential data shall conform to the limits of the CredentialType specified in the " +
                "Credential structure otherwise an INVALID_COMMAND status shall be returned in the " +
                "SetCredentialResponse command.",
            xref: { document: "cluster", section: "5.2.10.36.3" }
        }),

        Field({
            name: "UserIndex", id: 0x3, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported", quality: "X",
            details: "This field shall indicate the user index to the user record that corresponds to the credential being " +
                "added or modified. This shall be null if OperationType is add and a new credential and user is being " +
                "added at the same time.",
            xref: { document: "cluster", section: "5.2.10.36.4" }
        }),

        Field({
            name: "UserStatus", id: 0x4, type: "UserStatusEnum", conformance: "M",
            constraint: "occupiedEnabled, occupiedDisabled", default: 1, quality: "X",
            details: "This field shall indicate the user status to use in the new user record if a new user is being " +
                "created. This shall be null if OperationType is Modify. This may be null when adding a new " +
                "credential and user.",
            xref: { document: "cluster", section: "5.2.10.36.5" }
        }),

        Field({
            name: "UserType", id: 0x5, type: "UserTypeEnum", conformance: "M",
            constraint: "unrestrictedUser, programmingUser, nonAccessUser, forcedUser, disposableUser, expiringUser, remoteOnlyUser",
            default: 0, quality: "X",
            details: "This field shall indicate the user type to use in the new user record if a new user is being " +
                "created. This shall be null if OperationType is Modify. This may be null when adding a new " +
                "credential and user.",
            xref: { document: "cluster", section: "5.2.10.36.6" }
        })
    ),

    Command(
        {
            name: "SetCredentialResponse", id: 0x23, conformance: "USR", direction: "response",
            details: "Returns the status for setting the specified credential.",
            xref: { document: "cluster", section: "5.2.10.37" }
        },

        Field({
            name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",

            details: "Status comes from the Status Codes table and shall be one of the following values:" +
                "\n" +
                "  • SUCCESS, if setting user credential was successful." +
                "\n" +
                "  • FAILURE, if some unexpected internal error occurred setting user credential." +
                "\n" +
                "  • OCCUPIED, if OperationType is Add and CredentialIndex in Credential structure points to an " +
                "    occupied slot." +
                "\n" +
                "  • OCCUPIED, if OperationType is Modify and CredentialIndex in Credential structure does not match " +
                "    the CredentialIndex that is already associated with the provided UserIndex." +
                "\n" +
                "  • DUPLICATE, if CredentialData provided is a duplicate of another credential with the same " +
                "    CredentialType (e.g. duplicate PIN code)." +
                "\n" +
                "  • RESOURCE_EXHAUSTED, if OperationType is Add and the new credential cannot be added due to " +
                "    resource constraints such as:" +
                "\n" +
                "    ◦ The user referred to by UserIndex already has NumberOfCredentialsSupportedPerUser credentials " +
                "      associated." +
                "\n" +
                "    ◦ The credential is of type AliroEvictableEndpointKey or AliroNonEvictableEndpointKey, and " +
                "      adding it would cause the total number of credentials of those two types to exceed " +
                "      NumberOfAliroEndpointKeysSupported." +
                "\n" +
                "  • INVALID_COMMAND, if one or more fields violate constraints or are invalid." +
                "\n" +
                "  • INVALID_COMMAND, if the CredentialIndex in the Credential provided exceeds the number of " +
                "    credentials of the provided CredentialType supported by the lock." +
                "\n" +
                "  • INVALID_COMMAND, if OperationType is Modify and UserIndex points to an available slot.",

            xref: { document: "cluster", section: "5.2.10.37.1" }
        }),

        Field({
            name: "UserIndex", id: 0x1, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported", default: 0, quality: "X",
            details: "This field shall indicate the user index that was created with the new credential. If the status " +
                "being returned is not success then this shall be null. This shall be null if OperationType was " +
                "Modify; if the OperationType was Add and a new User was created this shall NOT be null and shall " +
                "provide the UserIndex created. If the OperationType was Add and an existing User was associated with " +
                "the new credential then this shall be null.",
            xref: { document: "cluster", section: "5.2.10.37.2" }
        }),

        Field({
            name: "NextCredentialIndex", id: 0x2, type: "uint16", conformance: "O", constraint: "desc",
            quality: "X",

            details: "This field shall indicate the next available index in the database for the credential type set, " +
                "which is useful for quickly identifying available credential slots in the database. This shall NOT " +
                "be null if there is at least one available entry after the requested credential index in the " +
                "corresponding database and shall be null if there are no more available entries. The " +
                "NextCredentialIndex reported shall NOT exceed the maximum number of credentials for a particular " +
                "credential type.",

            xref: { document: "cluster", section: "5.2.10.37.3" }
        })
    ),

    Command(
        {
            name: "GetCredentialStatus", id: 0x24, access: "A", conformance: "USR", direction: "request",
            response: "GetCredentialStatusResponse",
            details: "Retrieve the status of a particular credential (e.g. PIN, RFID, Fingerprint, etc.) by index." +
                "\n" +
                "An InvokeResponse command shall be sent with an appropriate error (e.g. FAILURE, INVALID_COMMAND, " +
                "etc.) as needed otherwise the GetCredentialStatusResponse command shall be sent implying a status of " +
                "SUCCESS.",
            xref: { document: "cluster", section: "5.2.10.38" }
        },

        Field({
            name: "Credential", id: 0x0, type: "CredentialStruct", conformance: "M",
            details: "This field shall contain a credential structure that contains the CredentialTypeEnum and the " +
                "credential index (if applicable or 0 if not) to retrieve the status for.",
            xref: { document: "cluster", section: "5.2.10.38.1" }
        })
    ),

    Command(
        {
            name: "GetCredentialStatusResponse", id: 0x25, conformance: "USR", direction: "response",
            details: "Returns the status for the specified credential.",
            xref: { document: "cluster", section: "5.2.10.39" }
        },

        Field({
            name: "CredentialExists", id: 0x0, type: "bool", conformance: "M",
            details: "This field shall indicate if the requested credential type and index exists and is populated for the " +
                "requested user index.",
            xref: { document: "cluster", section: "5.2.10.39.1" }
        }),

        Field({
            name: "UserIndex", id: 0x1, type: "uint16", conformance: "M",
            constraint: "1 to numberOfTotalUsersSupported", quality: "X",
            details: "This field shall indicate the credential’s corresponding user index value if the credential exists. " +
                "If CredentialType requested was ProgrammingPIN then UserIndex shall be null; otherwise, UserIndex " +
                "shall be null if CredentialExists is set to False and shall NOT be null if CredentialExists is set " +
                "to True.",
            xref: { document: "cluster", section: "5.2.10.39.2" }
        }),

        Field({
            name: "CreatorFabricIndex", id: 0x2, type: "fabric-idx", conformance: "M", quality: "X",
            details: "This field shall indicate the credential’s creator fabric index. CreatorFabricIndex shall be null if " +
                "CredentialExists is set to False or when the creator fabric cannot be determined (for example, when " +
                "credential was created outside the Interaction Model) and shall NOT be null otherwise. This value " +
                "shall be set to 0 if the original creator fabric was deleted.",
            xref: { document: "cluster", section: "5.2.10.39.3" }
        }),

        Field({
            name: "LastModifiedFabricIndex", id: 0x3, type: "fabric-idx", conformance: "M", quality: "X",
            details: "This field shall indicate the credential’s last modifier fabric index. LastModifiedFabricIndex shall " +
                "be null if CredentialExists is set to False or when the modifier fabric cannot be determined (for " +
                "example, when credential was modified outside the Interaction Model) and shall NOT be null " +
                "otherwise. This value shall be set to 0 if the last modifier fabric was deleted.",
            xref: { document: "cluster", section: "5.2.10.39.4" }
        }),

        Field({
            name: "NextCredentialIndex", id: 0x4, type: "uint16", conformance: "O", constraint: "desc",
            quality: "X",

            details: "This field shall indicate the next occupied index in the database for the credential type requested, " +
                "which is useful for quickly identifying occupied credential slots in the database. This shall NOT be " +
                "null if there is at least one occupied entry after the requested credential index in the " +
                "corresponding" +
                "\n" +
                "database and shall be null if there are no more occupied entries. The NextCredentialIndex reported " +
                "shall NOT exceed the maximum number of credentials for a particular credential type.",

            xref: { document: "cluster", section: "5.2.10.39.5" }
        }),

        Field({
            name: "CredentialData", id: 0x5, type: "octstr", conformance: "[ALIRO]", constraint: "desc",
            quality: "X",

            details: "This field shall indicate the credential data for the requested user index." +
                "\n" +
                "If the CredentialType in the GetCredentialStatus command was not AliroCredentialIssuerKey, " +
                "AliroEvictableEndpointKey, or AliroNonEvictableEndpointKey, this field shall NOT be included." +
                "\n" +
                "Otherwise, if CredentialExists is false this field shall be null." +
                "\n" +
                "Otherwise, the value of this field shall be the value of the relevant credential, as a 65-byte " +
                "uncompressed elliptic curve public key as defined in section 2.3.3 of SEC 1." +
                "\n" +
                "NOTE" +
                "\n" +
                "Since the Aliro credentials are public keys, there is no security risk in allowing them to be read. " +
                "Possession of the credential octet string does not allow operating the lock.",

            xref: { document: "cluster", section: "5.2.10.39.6" }
        })
    ),

    Command(
        {
            name: "ClearCredential", id: 0x26, access: "A T", conformance: "USR", direction: "request",
            response: "status",

            details: "Clear one, one type, or all credentials except ProgrammingPIN credential." +
                "\n" +
                "Fields used for different use cases:" +
                "\n" +
                "For each credential cleared whose user doesn’t have another valid credential, the corresponding user " +
                "record shall be reset back to default values and its UserStatus value shall be set to Available and " +
                "UserType value shall be set to UnrestrictedUser and all schedules shall be cleared. In this case a " +
                "LockUserChange event shall be generated for the user being cleared." +
                "\n" +
                "Return status shall be one of the following values:",

            xref: { document: "cluster", section: "5.2.10.40" }
        },

        Field({
            name: "Credential", id: 0x0, type: "CredentialStruct", conformance: "M", constraint: "desc",
            quality: "X",
            details: "This field shall contain a credential structure that contains the CredentialTypeEnum and the " +
                "credential index (0xFFFE for all credentials or 0 if not applicable) to clear. This shall be null if " +
                "clearing all credential types otherwise it shall NOT be null.",
            xref: { document: "cluster", section: "5.2.10.40.1" }
        })
    ),

    Command(
        {
            name: "UnboltDoor", id: 0x27, access: "O T", conformance: "UBOLT", direction: "request",
            response: "status",

            details: "This command causes the lock device to unlock the door without pulling the latch. This command " +
                "includes an optional code for the lock. The door lock may require a code depending on the value of " +
                "the RequirePINForRemoteOperation attribute." +
                "\n" +
                "NOTE" +
                "\n" +
                "If the attribute AutoRelockTime is supported, the lock will transition to the locked state when the " +
                "auto relock time has expired.",

            xref: { document: "cluster", section: "5.2.10.41" }
        },

        Field({
            name: "PinCode", id: 0x0, type: "octstr", conformance: "[COTA & PIN]",
            details: "See PINCode field.",
            xref: { document: "cluster", section: "5.2.10.41.1" }
        })
    ),

    Command(
        {
            name: "SetAliroReaderConfig", id: 0x28, access: "A T", conformance: "ALIRO", direction: "request",
            response: "status",
            details: "This command allows communicating an Aliro Reader configuration, as defined in [Aliro], to the lock.",
            xref: { document: "cluster", section: "5.2.10.42" }
        },

        Field({
            name: "SigningKey", id: 0x0, type: "octstr", conformance: "M", constraint: "32",
            details: "This field shall indicate the signing key component of the Reader’s key pair.",
            xref: { document: "cluster", section: "5.2.10.42.1" }
        }),

        Field({
            name: "VerificationKey", id: 0x1, type: "octstr", conformance: "M", constraint: "65",
            details: "This field shall indicate the verification key component of the Reader’s key pair. This shall be an " +
                "uncompressed elliptic curve public key as defined in section 2.3.3 of SEC 1.",
            xref: { document: "cluster", section: "5.2.10.42.2" }
        }),

        Field({
            name: "GroupIdentifier", id: 0x2, type: "octstr", conformance: "M", constraint: "16",
            details: "This field shall indicate the reader group identifier for the lock.",
            xref: { document: "cluster", section: "5.2.10.42.3" }
        }),
        Field({
            name: "GroupResolvingKey", id: 0x3, type: "octstr", conformance: "ALBU", constraint: "16",
            details: "This field shall indicate the group resolving key for the lock.",
            xref: { document: "cluster", section: "5.2.10.42.4" }
        })
    ),

    Command({
        name: "ClearAliroReaderConfig", id: 0x29, access: "A T", conformance: "ALIRO", direction: "request",
        response: "status",

        details: "This command allows clearing an existing Aliro Reader configuration for the lock. Administrators " +
            "shall NOT clear an Aliro Reader configuration without explicit user permission." +
            "\n" +
            "NOTE" +
            "\n" +
            "Using this command will revoke the ability of all existing Aliro user devices that have the old " +
            "verification key to interact with the lock. This effect is not restricted to a single fabric or " +
            "otherwise scoped in any way.",

        xref: { document: "cluster", section: "5.2.10.43" }
    }),

    Datatype(
        {
            name: "DaysMaskBitmap", type: "map8",
            details: "This bitmap shall indicate the days of the week the Week Day schedule applies for.",
            xref: { document: "cluster", section: "5.2.6.1" }
        },
        Field({ name: "Sunday", constraint: "0", description: "Schedule is applied on Sunday" }),
        Field({ name: "Monday", constraint: "1", description: "Schedule is applied on Monday" }),
        Field({ name: "Tuesday", constraint: "2", description: "Schedule is applied on Tuesday" }),
        Field({ name: "Wednesday", constraint: "3", description: "Schedule is applied on Wednesday" }),
        Field({ name: "Thursday", constraint: "4", description: "Schedule is applied on Thursday" }),
        Field({ name: "Friday", constraint: "5", description: "Schedule is applied on Friday" }),
        Field({ name: "Saturday", constraint: "6", description: "Schedule is applied on Saturday" })
    ),

    Datatype(
        { name: "CredentialRulesBitmap", type: "map8", xref: { document: "cluster", section: "5.2.6.2" } },
        Field({ name: "Single", constraint: "0", description: "Only one credential is required for lock operation" }),
        Field({ name: "Dual", constraint: "1", description: "Any two credentials are required for lock operation" }),
        Field({ name: "Tri", constraint: "2", description: "Any three credentials are required for lock operation" })
    ),

    Datatype(
        {
            name: "OperatingModesBitmap", type: "map16",
            description: "For the OperatingModesBitmap, a bit SET indicates that the operating mode IS NOT supported. A bit CLEAR indicates that the operating mode IS supported. This is the inverse of most bitmaps in this specification, and it is RECOMMENDED that clients carefully take this into consideration.",
            xref: { document: "cluster", section: "5.2.6.3" }
        },
        Field({ name: "Normal", constraint: "0", description: "Normal operation mode is NOT supported" }),
        Field({ name: "Vacation", constraint: "1", description: "Vacation operation mode is NOT supported" }),
        Field({ name: "Privacy", constraint: "2", description: "Privacy operation mode is NOT supported" }),
        Field({
            name: "NoRemoteLockUnlock", constraint: "3",
            description: "No remote lock and unlock operation mode is NOT supported"
        }),
        Field({ name: "Passage", constraint: "4", description: "Passage operation mode is NOT supported" }),
        Field({
            name: "AlwaysSet", conformance: "M", constraint: "5 to 15",
            description: "This needs always be set because this bitmap is inverse.!"
        })
    ),

    Datatype(
        { name: "ConfigurationRegisterBitmap", type: "map16", xref: { document: "cluster", section: "5.2.6.4" } },

        Field(
            {
                name: "LocalProgramming", constraint: "0",
                description: "The state of local programming functionality",
                details: "This bit shall indicate the state related to local programming:" +
                    "\n" +
                    "  • 0 = Local programming is disabled" +
                    "\n" +
                    "  • 1 = Local programming is enabled",
                xref: { document: "cluster", section: "5.2.6.4.1" }
            }
        ),

        Field(
            {
                name: "KeypadInterface", constraint: "1", description: "The state of the keypad interface",
                details: "This bit shall indicate the state related to keypad interface:" +
                    "\n" +
                    "  • 0 = Keypad interface is disabled" +
                    "\n" +
                    "  • 1 = Keypad interface is enabled",
                xref: { document: "cluster", section: "5.2.6.4.2" }
            }
        ),

        Field(
            {
                name: "RemoteInterface", constraint: "2", description: "The state of the remote interface",
                details: "This bit shall indicate the state related to remote interface:" +
                    "\n" +
                    "  • 0 = Remote interface is disabled" +
                    "\n" +
                    "  • 1 = Remote interface is enabled",
                xref: { document: "cluster", section: "5.2.6.4.3" }
            }
        ),

        Field(
            {
                name: "SoundVolume", constraint: "5", description: "Sound volume is set to Silent value",
                details: "This bit shall indicate the state related to sound volume:" +
                    "\n" +
                    "  • 0 = Sound volume value is 0 (Silent)" +
                    "\n" +
                    "  • 1 = Sound volume value is equal to something other than 0",
                xref: { document: "cluster", section: "5.2.6.4.4" }
            }
        ),

        Field(
            {
                name: "AutoRelockTime", constraint: "6", description: "Auto relock time it set to 0",
                details: "This bit shall indicate the state related to auto relock time:" +
                    "\n" +
                    "  • 0 = Auto relock time value is 0" +
                    "\n" +
                    "  • 1 = Auto relock time value is equal to something other than 0",
                xref: { document: "cluster", section: "5.2.6.4.5" }
            }
        ),

        Field(
            {
                name: "LedSettings", constraint: "7", description: "LEDs is disabled",
                details: "This bit shall indicate the state related to LED settings:" +
                    "\n" +
                    "  • 0 = LED settings value is 0 (NoLEDSignal)" +
                    "\n" +
                    "  • 1 = LED settings value is equal to something other than 0",
                xref: { document: "cluster", section: "5.2.6.4.6" }
            }
        )
    ),

    Datatype(
        { name: "LocalProgrammingFeaturesBitmap", type: "map8", xref: { document: "cluster", section: "5.2.6.5" } },

        Field(
            {
                name: "AddUsersCredentialsSchedules", constraint: "0",
                description: "The state of the ability to add users, credentials or schedules on the device",
                details: "This bit shall indicate whether the door lock is able to add Users/Credentials/Schedules locally:" +
                    "\n" +
                    "  • 0 = This ability is disabled" +
                    "\n" +
                    "  • 1 = This ability is enabled",
                xref: { document: "cluster", section: "5.2.6.5.1" }
            }
        ),

        Field(
            {
                name: "ModifyUsersCredentialsSchedules", constraint: "1",
                description: "The state of the ability to modify users, credentials or schedules on the device",
                details: "This bit shall indicate whether the door lock is able to modify Users/Credentials/Schedules locally:" +
                    "\n" +
                    "  • 0 = This ability is disabled" +
                    "\n" +
                    "  • 1 = This ability is enabled",
                xref: { document: "cluster", section: "5.2.6.5.2" }
            }
        ),

        Field(
            {
                name: "ClearUsersCredentialsSchedules", constraint: "2",
                description: "The state of the ability to clear users, credentials or schedules on the device",
                details: "This bit shall indicate whether the door lock is able to clear Users/Credentials/Schedules locally:" +
                    "\n" +
                    "  • 0 = This ability is disabled" +
                    "\n" +
                    "  • 1 = This ability is enabled",
                xref: { document: "cluster", section: "5.2.6.5.3" }
            }
        ),

        Field(
            {
                name: "AdjustSettings", constraint: "3",
                description: "The state of the ability to adjust settings on the device",
                details: "This bit shall indicate whether the door lock is able to adjust lock settings locally:" +
                    "\n" +
                    "  • 0 = This ability is disabled" +
                    "\n" +
                    "  • 1 = This ability is enabled",
                xref: { document: "cluster", section: "5.2.6.5.4" }
            }
        )
    ),

    Datatype(
        { name: "AlarmMaskBitmap", type: "map16", xref: { document: "cluster", section: "5.2.6.6" } },
        Field({ name: "LockJammed", constraint: "0", description: "Locking Mechanism Jammed" }),
        Field({ name: "LockFactoryReset", constraint: "1", description: "Lock Reset to Factory Defaults" }),
        Field({ name: "LockRadioPowerCycled", constraint: "3", description: "RF Module Power Cycled" }),
        Field({ name: "WrongCodeEntryLimit", constraint: "4", description: "Tamper Alarm - wrong code entry limit" }),
        Field({
            name: "FrontEscutcheonRemoved", constraint: "5",
            description: "Tamper Alarm - front escutcheon removed from main"
        }),
        Field({ name: "DoorForcedOpen", constraint: "6", description: "Forced Door Open under Door Locked Condition" })
    ),

    Datatype(
        {
            name: "AlarmCodeEnum", type: "enum8",
            details: "This enumeration shall indicate the alarm type.",
            xref: { document: "cluster", section: "5.2.6.7" }
        },
        Field({ name: "LockJammed", id: 0x0, conformance: "M", description: "Locking Mechanism Jammed" }),
        Field({ name: "LockFactoryReset", id: 0x1, conformance: "O", description: "Lock Reset to Factory Defaults" }),
        Field({ name: "LockRadioPowerCycled", id: 0x3, conformance: "O", description: "Lock Radio Power Cycled" }),
        Field({
            name: "WrongCodeEntryLimit", id: 0x4, conformance: "[USR]",
            description: "Tamper Alarm - wrong code entry limit"
        }),
        Field({
            name: "FrontEsceutcheonRemoved", id: 0x5, conformance: "O",
            description: "Tamper Alarm - front escutcheon removed from main"
        }),
        Field({
            name: "DoorForcedOpen", id: 0x6, conformance: "[DPS]",
            description: "Forced Door Open under Door Locked Condition"
        }),
        Field({ name: "DoorAjar", id: 0x7, conformance: "[DPS]", description: "Door ajar" }),
        Field({ name: "ForcedUser", id: 0x8, conformance: "[USR]", description: "Force User SOS alarm" })
    ),

    Datatype(
        {
            name: "CredentialRuleEnum", type: "enum8",
            details: "This enumeration shall indicate the credential rule that can be applied to a particular user.",
            xref: { document: "cluster", section: "5.2.6.8" }
        },
        Field({
            name: "Single", id: 0x0, conformance: "USR",
            description: "Only one credential is required for lock operation"
        }),
        Field({
            name: "Dual", id: 0x1, conformance: "[USR]",
            description: "Any two credentials are required for lock operation"
        }),
        Field({
            name: "Tri", id: 0x2, conformance: "[USR]",
            description: "Any three credentials are required for lock operation"
        })
    ),

    Datatype(
        {
            name: "CredentialTypeEnum", type: "enum8",
            details: "This enumeration shall indicate the credential type.",
            xref: { document: "cluster", section: "5.2.6.9" }
        },
        Field({ name: "ProgrammingPin", id: 0x0, conformance: "O", description: "Programming PIN code credential type" }),
        Field({ name: "Pin", id: 0x1, conformance: "PIN", description: "PIN code credential type" }),
        Field({ name: "Rfid", id: 0x2, conformance: "RID", description: "RFID identifier credential type" }),
        Field({ name: "Fingerprint", id: 0x3, conformance: "FGP", description: "Fingerprint identifier credential type" }),
        Field({ name: "FingerVein", id: 0x4, conformance: "FGP", description: "Finger vein identifier credential type" }),
        Field({ name: "Face", id: 0x5, conformance: "FACE", description: "Face identifier credential type" }),

        Field({
            name: "AliroCredentialIssuerKey", id: 0x6, conformance: "ALIRO",
            description: "A Credential Issuer public key as defined in [Aliro]",

            details: "Credentials of this type shall be 65-byte uncompressed elliptic curve public keys as defined in " +
                "section 2.3.3 of SEC 1." +
                "\n" +
                "Credentials of this type shall NOT be used to allow operating the lock. They shall be used, as " +
                "defined in [Aliro], to create new credentials of type AliroEvictableEndpointKey via a step-up " +
                "transaction." +
                "\n" +
                "When performing the step-up transaction, the lock shall request the data element with identifier " +
                "\"matter1\", and shall attempt to create a new credential of type AliroEvictableEndpointKey if and " +
                "only if the data element is returned and the Access Credential can be validated using the " +
                "AliroCredentialIssuerKey." +
                "\n" +
                "When a new credential of type AliroEvictableEndpointKey is added in this manner, it shall be " +
                "associated with the same user record as the AliroCredentialIssuerKey credential that allowed the new " +
                "credential to be added." +
                "\n" +
                "If there are no available credential slots to add a new AliroEvictableEndpointKey credential (i.e. " +
                "either the NumberOfCredentialsSupportedPerUser or the NumberOfAliroEndpointKeysSupported limit has " +
                "been reached) but there exist credentials of type AliroEvictableEndpointKey associated with the user " +
                "record, the server shall remove one of those credentials using the same procedure it would follow " +
                "for the ClearCredential command before adding the new credential." +
                "\n" +
                "If there are no available credential slots to add a new AliroEvictableEndpointKey credential (i.e. " +
                "either the NumberOfCredentialsSupportedPerUser or the NumberOfAliroEndpointKeysSupported limit has " +
                "been reached) and there do not exist credentials of type AliroEvictableEndpointKey associated with " +
                "the user record, a new AliroEvictableEndpointKey credential shall NOT be created." +
                "\n" +
                "If the step-up process results in addition of new credentials, the corresponding LockUserChange " +
                "event shall have OperationSource set to Aliro." +
                "\n" +
                "If the step-up process results in the lock state changing (e.g. locking or unlocking), the " +
                "credential associated with those changes in the LockOperation events shall be the newly provisioned " +
                "AliroEvictableEndpointKey credential if one was created. If no new AliroEvictableEndpointKey " +
                "credential was created, the credential associated with the changes in the LockOperation events shall " +
                "be the AliroCredentialIssuerKey credential used for the step-up.",

            xref: { document: "cluster", section: "5.2.6.9.1" }
        }),

        Field({
            name: "AliroEvictableEndpointKey", id: 0x7, conformance: "ALIRO",
            description: "An Endpoint public key as defined in [Aliro] which can be evicted if space is needed for another endpoint key",
            details: "Credentials of this type shall be 65-byte uncompressed elliptic curve public keys as defined in " +
                "section 2.3.3 of SEC 1.",
            xref: { document: "cluster", section: "5.2.6.9.2" }
        }),

        Field({
            name: "AliroNonEvictableEndpointKey", id: 0x8, conformance: "ALIRO",
            description: "An Endpoint public key as defined in [Aliro] which cannot be evicted if space is needed for another endpoint key",
            details: "Credentials of this type shall be 65-byte uncompressed elliptic curve public keys as defined in " +
                "section 2.3.3 of SEC 1.",
            xref: { document: "cluster", section: "5.2.6.9.3" }
        })
    ),

    Datatype(
        {
            name: "DataOperationTypeEnum", type: "enum8",
            details: "This enumeration shall indicate the data operation performed.",
            xref: { document: "cluster", section: "5.2.6.10" }
        },
        Field({ name: "Add", id: 0x0, conformance: "M", description: "Data is being added or was added" }),
        Field({ name: "Clear", id: 0x1, conformance: "M", description: "Data is being cleared or was cleared" }),
        Field({ name: "Modify", id: 0x2, conformance: "M", description: "Data is being modified or was modified" })
    ),

    Datatype(
        {
            name: "DoorStateEnum", type: "enum8",
            details: "This enumeration shall indicate the current door state.",
            xref: { document: "cluster", section: "5.2.6.11" }
        },
        Field({ name: "DoorOpen", id: 0x0, conformance: "DPS", description: "Door state is open" }),
        Field({ name: "DoorClosed", id: 0x1, conformance: "DPS", description: "Door state is closed" }),
        Field({ name: "DoorJammed", id: 0x2, conformance: "[DPS]", description: "Door state is jammed" }),
        Field({ name: "DoorForcedOpen", id: 0x3, conformance: "[DPS]", description: "Door state is currently forced open" }),
        Field({
            name: "DoorUnspecifiedError", id: 0x4, conformance: "[DPS]",
            description: "Door state is invalid for unspecified reason"
        }),
        Field({ name: "DoorAjar", id: 0x5, conformance: "[DPS]", description: "Door state is ajar" })
    ),

    Datatype(
        {
            name: "LockDataTypeEnum", type: "enum8",
            details: "This enumeration shall indicate the data type that is being or has changed.",
            xref: { document: "cluster", section: "5.2.6.12" }
        },
        Field({
            name: "Unspecified", id: 0x0, conformance: "O",
            description: "Unspecified or manufacturer specific lock user data added, cleared, or modified."
        }),
        Field({
            name: "ProgrammingCode", id: 0x1, conformance: "O",
            description: "Lock programming PIN code was added, cleared, or modified."
        }),
        Field({
            name: "UserIndex", id: 0x2, conformance: "M",
            description: "Lock user index was added, cleared, or modified."
        }),
        Field({
            name: "WeekDaySchedule", id: 0x3, conformance: "WDSCH",
            description: "Lock user week day schedule was added, cleared, or modified."
        }),
        Field({
            name: "YearDaySchedule", id: 0x4, conformance: "YDSCH",
            description: "Lock user year day schedule was added, cleared, or modified."
        }),
        Field({
            name: "HolidaySchedule", id: 0x5, conformance: "HDSCH",
            description: "Lock holiday schedule was added, cleared, or modified."
        }),
        Field({
            name: "Pin", id: 0x6, conformance: "PIN",
            description: "Lock user PIN code was added, cleared, or modified."
        }),
        Field({
            name: "Rfid", id: 0x7, conformance: "RID",
            description: "Lock user RFID code was added, cleared, or modified."
        }),
        Field({
            name: "Fingerprint", id: 0x8, conformance: "FGP",
            description: "Lock user fingerprint was added, cleared, or modified."
        }),
        Field({
            name: "FingerVein", id: 0x9, conformance: "FGP",
            description: "Lock user finger-vein information was added, cleared, or modified."
        }),
        Field({
            name: "Face", id: 0xa, conformance: "FACE",
            description: "Lock user face information was added, cleared, or modified."
        }),
        Field({
            name: "AliroCredentialIssuerKey", id: 0xb, conformance: "ALIRO",
            description: "An Aliro credential issuer key credential was added, cleared, or modified."
        }),
        Field({
            name: "AliroEvictableEndpointKey", id: 0xc, conformance: "ALIRO",
            description: "An Aliro endpoint key credential which can be evicted credential was added, cleared, or modified."
        }),
        Field({
            name: "AliroNonEvictableEndpointKey", id: 0xd, conformance: "ALIRO",
            description: "An Aliro endpoint key credential which cannot be evicted was added, cleared, or modified."
        })
    ),

    Datatype(
        {
            name: "LockOperationTypeEnum", type: "enum8",
            details: "This enumeration shall indicate the type of Lock operation performed.",
            xref: { document: "cluster", section: "5.2.6.13" }
        },
        Field({ name: "Lock", id: 0x0, conformance: "M", description: "Lock operation" }),
        Field({ name: "Unlock", id: 0x1, conformance: "M", description: "Unlock operation" }),
        Field({
            name: "NonAccessUserEvent", id: 0x2, conformance: "O",
            description: "Triggered by keypad entry for user with User Type set to Non Access User"
        }),
        Field({
            name: "ForcedUserEvent", id: 0x3, conformance: "O",
            description: "Triggered by using a user with UserType set to Forced User"
        }),
        Field({ name: "Unlatch", id: 0x4, conformance: "M", description: "Unlatch operation" })
    ),

    Datatype(
        {
            name: "OperationErrorEnum", type: "enum8",
            details: "This enumeration shall indicate the error cause of the Lock/Unlock operation performed.",
            xref: { document: "cluster", section: "5.2.6.14" }
        },
        Field({
            name: "Unspecified", id: 0x0, conformance: "O",
            description: "Lock/unlock error caused by unknown or unspecified source"
        }),
        Field({
            name: "InvalidCredential", id: 0x1, conformance: "USR",
            description: "Lock/unlock error caused by invalid PIN, RFID, fingerprint or other credential"
        }),
        Field({
            name: "DisabledUserDenied", id: 0x2, conformance: "M",
            description: "Lock/unlock error caused by disabled USER or credential"
        }),
        Field({
            name: "Restricted", id: 0x3, conformance: "WDSCH | YDSCH",
            description: "Lock/unlock error caused by schedule restriction"
        }),
        Field({
            name: "InsufficientBattery", id: 0x4, conformance: "O",
            description: "Lock/unlock error caused by insufficient battery power left to safely actuate the lock"
        })
    ),

    Datatype(
        {
            name: "OperatingModeEnum", type: "enum8",

            details: "This enumeration shall indicate the lock operating mode." +
                "\n" +
                "The table below shows the operating mode and which interfaces are enabled, if supported, for each " +
                "mode." +
                "\n" +
                "* Interface Operational: Yes, No or N/A" +
                "\n" +
                "NOTE" +
                "\n" +
                "For modes that disable the remote interface, the door lock shall respond to Lock, Unlock, Toggle, " +
                "and Unlock with Timeout commands with a response status Failure and not take the action requested by " +
                "those commands. The door lock shall NOT disable the radio or otherwise unbind or leave the network. " +
                "It shall still respond to all other commands and requests.",

            xref: { document: "cluster", section: "5.2.6.15" }
        },

        Field({
            name: "Normal", id: 0x0, conformance: "M",
            details: "The lock operates normally. All interfaces are enabled.",
            xref: { document: "cluster", section: "5.2.6.15.1" }
        }),
        Field({
            name: "Vacation", id: 0x1, conformance: "O",
            details: "Only remote interaction is enabled. The keypad shall only be operable by the master user.",
            xref: { document: "cluster", section: "5.2.6.15.2" }
        }),

        Field({
            name: "Privacy", id: 0x2, conformance: "O",
            details: "This mode is only possible if the door is locked. Manual unlocking changes the mode to Normal " +
                "operating mode. All external interaction with the door lock is disabled. This mode is intended to be " +
                "used so that users, presumably inside the property, will have control over the entrance.",
            xref: { document: "cluster", section: "5.2.6.15.3" }
        }),

        Field({
            name: "NoRemoteLockUnlock", id: 0x3, conformance: "M",
            details: "This mode only disables remote interaction with the lock. This does not apply to any remote " +
                "proprietary means of communication. It specifically applies to the Lock, Unlock, Toggle, and Unlock " +
                "with Timeout Commands.",
            xref: { document: "cluster", section: "5.2.6.15.4" }
        }),

        Field({
            name: "Passage", id: 0x4, conformance: "O",
            details: "The lock is open or can be opened or closed at will without the use of a Keypad or other means of " +
                "user validation (e.g. a lock for a business during work hours).",
            xref: { document: "cluster", section: "5.2.6.15.5" }
        })
    ),

    Datatype(
        {
            name: "OperationSourceEnum", type: "enum8",
            details: "This enumeration shall indicate the source of the Lock/Unlock or user change operation performed.",
            xref: { document: "cluster", section: "5.2.6.16" }
        },
        Field({
            name: "Unspecified", id: 0x0, conformance: "O",
            description: "Lock/unlock operation came from unspecified source"
        }),
        Field({
            name: "Manual", id: 0x1, conformance: "O",
            description: "Lock/unlock operation came from manual operation (key, thumbturn, handle, etc)."
        }),
        Field({
            name: "ProprietaryRemote", id: 0x2, conformance: "O",
            description: "Lock/unlock operation came from proprietary remote source (e.g. vendor app/cloud)"
        }),
        Field({ name: "Keypad", id: 0x3, conformance: "O", description: "Lock/unlock operation came from keypad" }),
        Field({
            name: "Auto", id: 0x4, conformance: "O",
            description: "Lock/unlock operation came from lock automatically (e.g. relock timer)"
        }),
        Field({
            name: "Button", id: 0x5, conformance: "O",
            description: "Lock/unlock operation came from lock button (e.g. one touch or button)"
        }),
        Field({
            name: "Schedule", id: 0x6, conformance: "HDSCH",
            description: "Lock/unlock operation came from lock due to a schedule"
        }),
        Field({ name: "Remote", id: 0x7, conformance: "M", description: "Lock/unlock operation came from remote node" }),
        Field({ name: "Rfid", id: 0x8, conformance: "RID", description: "Lock/unlock operation came from RFID card" }),
        Field({
            name: "Biometric", id: 0x9, conformance: "[USR]",
            description: "Lock/unlock operation came from biometric source (e.g. face, fingerprint/fingervein)"
        }),
        Field({
            name: "Aliro", id: 0xa, conformance: "ALIRO",
            description: "Lock/unlock operation came from an interaction defined in [Aliro], or user change operation was a step-up credential provisioning as defined in [Aliro]"
        })
    ),

    Datatype(
        {
            name: "UserStatusEnum", type: "enum8",
            details: "This enumeration shall indicate what the status is for a specific user ID.",
            xref: { document: "cluster", section: "5.2.6.17" }
        },
        Field({ name: "Available", id: 0x0, conformance: "M", description: "The user ID is available" }),
        Field({ name: "OccupiedEnabled", id: 0x1, conformance: "M", description: "The user ID is occupied and enabled" }),
        Field({ name: "OccupiedDisabled", id: 0x3, conformance: "O", description: "The user ID is occupied and disabled" })
    ),

    Datatype(
        {
            name: "UserTypeEnum", type: "enum8",
            details: "This enumeration shall indicate what the type is for a specific user ID.",
            xref: { document: "cluster", section: "5.2.6.18" }
        },

        Field({
            name: "UnrestrictedUser", id: 0x0, conformance: "M",
            description: "The user ID type is unrestricted",
            details: "This value shall indicate the user has access 24/7 provided proper PIN or RFID is supplied (e.g., " +
                "owner).",
            xref: { document: "cluster", section: "5.2.6.18.1" }
        }),

        Field({
            name: "YearDayScheduleUser", id: 0x1, conformance: "O", description: "The user ID type is schedule",

            details: "This value shall indicate the user has the ability to open lock within a specific time period (e.g., " +
                "guest)." +
                "\n" +
                "When UserType is set to YearDayScheduleUser, user access shall be restricted as follows:" +
                "\n" +
                "  • If no YearDaySchedules are set for the user, then access shall be denied" +
                "\n" +
                "  • If one or more YearDaySchedules are set, user access shall be granted if and only if the current " +
                "    time falls within at least one of the YearDaySchedules. If current time is not known, user " +
                "    access shall NOT be granted.",

            xref: { document: "cluster", section: "5.2.6.18.2" }
        }),

        Field({
            name: "WeekDayScheduleUser", id: 0x2, conformance: "O", description: "The user ID type is schedule",

            details: "This value shall indicate the user has the ability to open lock based on specific time period within " +
                "a reoccurring weekly schedule (e.g., cleaning worker)." +
                "\n" +
                "When UserType is set to WeekDayScheduleUser, user access shall be restricted as follows:" +
                "\n" +
                "  • If no WeekDaySchedules are set for the user, then access shall be denied" +
                "\n" +
                "  • If one or more WeekDaySchedules are set, user access shall be granted if and only if the current " +
                "    time falls within at least one of the WeekDaySchedules. If current time is not known, user " +
                "    access shall NOT be granted.",

            xref: { document: "cluster", section: "5.2.6.18.3" }
        }),

        Field({
            name: "ProgrammingUser", id: 0x3, conformance: "O", description: "The user ID type is programming",
            details: "This value shall indicate the user has the ability to both program and operate the door lock. This " +
                "user can manage the users and user schedules. In all other respects this user matches the " +
                "unrestricted (default) user. ProgrammingUser is the only user that can disable the user interface " +
                "(keypad, remote, etc…).",
            xref: { document: "cluster", section: "5.2.6.18.4" }
        }),

        Field({
            name: "NonAccessUser", id: 0x4, conformance: "O", description: "The user ID type is non access",
            details: "This value shall indicate the user is recognized by the lock but does not have the ability to open " +
                "the lock. This user will only cause the lock to generate the appropriate event notification to any " +
                "bound devices.",
            xref: { document: "cluster", section: "5.2.6.18.5" }
        }),

        Field({
            name: "ForcedUser", id: 0x5, conformance: "[USR]", description: "The user ID type is forced",
            details: "This value shall indicate the user has the ability to open lock but a ForcedUser LockOperationType " +
                "and ForcedUser silent alarm will be emitted to allow a notified Node to alert emergency services or " +
                "contacts on the user account when used.",
            xref: { document: "cluster", section: "5.2.6.18.6" }
        }),

        Field({
            name: "DisposableUser", id: 0x6, conformance: "[USR]",
            description: "The user ID type is disposable",
            details: "This value shall indicate the user has the ability to open lock once after which the lock shall " +
                "change the corresponding user record UserStatus value to OccupiedDisabled automatically.",
            xref: { document: "cluster", section: "5.2.6.18.7" }
        }),

        Field({
            name: "ExpiringUser", id: 0x7, conformance: "[USR]", description: "The user ID type is expiring",
            details: "This value shall indicate the user has the ability to open lock for ExpiringUserTimeout attribute " +
                "minutes after the first use of the PIN code, RFID code, Fingerprint, or other credential. After " +
                "ExpiringUserTimeout minutes the corresponding user record UserStatus value shall be set to " +
                "OccupiedDisabled automatically by the lock. The lock shall persist the timeout across reboots such " +
                "that the ExpiringUserTimeout is honored.",
            xref: { document: "cluster", section: "5.2.6.18.8" }
        }),

        Field({
            name: "ScheduleRestrictedUser", id: 0x8, conformance: "WDSCH | YDSCH",
            description: "The user ID type is schedule restricted",

            details: "This value shall indicate the user access is restricted by Week Day and/or Year Day schedule. When " +
                "UserType is set to ScheduleRestrictedUser, user access shall be restricted as follows:" +
                "\n" +
                "  • If no WeekDaySchedules and no YearDaySchedules are set for the user, then access shall be denied" +
                "\n" +
                "  • If one or more WeekDaySchedules are set, but no YearDaySchedules are set for the user, then user " +
                "    access shall be equivalent to the WeekDayScheduleUser UserType" +
                "\n" +
                "  • If one or more YearDaySchedules are set, but no WeekDaySchedules are set for the user, then user " +
                "    access shall be equivalent to the YearDayScheduleUser UserType" +
                "\n" +
                "  • If one or WeekDaySchedules are set AND one or more YearDaySchedules are set, then user access " +
                "    shall be granted if and only if the current time falls within at least one of the " +
                "    WeekDaySchedules AND the current time falls within at least one of the YearDaySchedules.",

            xref: { document: "cluster", section: "5.2.6.18.9" }
        }),

        Field({
            name: "RemoteOnlyUser", id: 0x9, conformance: "USR & COTA & PIN",
            description: "The user ID type is remote only",
            details: "This value shall indicate the user access and PIN code is restricted to remote lock/unlock commands " +
                "only. This type of user might be useful for regular delivery services or voice assistant unlocking " +
                "operations to prevent a PIN code credential created for them from being used at the keypad. The PIN " +
                "code credential would only be provided over-the-air for the lock/unlock commands.",
            xref: { document: "cluster", section: "5.2.6.18.10" }
        })
    ),

    Datatype(
        { name: "LockStateEnum", type: "enum8", xref: { document: "cluster", section: "5.2.6.19" } },
        Field({ name: "NotFullyLocked", id: 0x0, conformance: "M", description: "Lock state is not fully locked" }),
        Field({ name: "Locked", id: 0x1, conformance: "M", description: "Lock state is fully locked" }),
        Field({ name: "Unlocked", id: 0x2, conformance: "M", description: "Lock state is fully unlocked" }),
        Field({
            name: "Unlatched", id: 0x3, conformance: "O",
            description: "Lock state is fully unlocked and the latch is pulled"
        })
    ),

    Datatype(
        { name: "LockTypeEnum", type: "enum8", xref: { document: "cluster", section: "5.2.6.20" } },
        Field({ name: "DeadBolt", id: 0x0, conformance: "M", description: "Physical lock type is dead bolt" }),
        Field({ name: "Magnetic", id: 0x1, conformance: "M", description: "Physical lock type is magnetic" }),
        Field({ name: "Other", id: 0x2, conformance: "M", description: "Physical lock type is other" }),
        Field({ name: "Mortise", id: 0x3, conformance: "M", description: "Physical lock type is mortise" }),
        Field({ name: "Rim", id: 0x4, conformance: "M", description: "Physical lock type is rim" }),
        Field({ name: "LatchBolt", id: 0x5, conformance: "M", description: "Physical lock type is latch bolt" }),
        Field({ name: "CylindricalLock", id: 0x6, conformance: "M", description: "Physical lock type is cylindrical lock" }),
        Field({ name: "TubularLock", id: 0x7, conformance: "M", description: "Physical lock type is tubular lock" }),
        Field({
            name: "InterconnectedLock", id: 0x8, conformance: "M",
            description: "Physical lock type is interconnected lock"
        }),
        Field({ name: "DeadLatch", id: 0x9, conformance: "M", description: "Physical lock type is dead latch" }),
        Field({ name: "DoorFurniture", id: 0xa, conformance: "M", description: "Physical lock type is door furniture" }),
        Field({ name: "Eurocylinder", id: 0xb, conformance: "M", description: "Physical lock type is euro cylinder" })
    ),

    Datatype(
        { name: "LEDSettingEnum", type: "enum8", xref: { document: "cluster", section: "5.2.6.21" } },
        Field({ name: "NoLedSignal", id: 0x0, conformance: "M", description: "Never use LED for signalization" }),
        Field({
            name: "NoLedSignalAccessAllowed", id: 0x1, conformance: "M",
            description: "Use LED signalization except for access allowed events"
        }),
        Field({ name: "LedSignalAll", id: 0x2, conformance: "M", description: "Use LED signalization for all events" })
    ),

    Datatype(
        { name: "SoundVolumeEnum", type: "enum8", xref: { document: "cluster", section: "5.2.6.22" } },
        Field({ name: "Silent", id: 0x0, conformance: "M", description: "Silent Mode" }),
        Field({ name: "Low", id: 0x1, conformance: "M", description: "Low Volume" }),
        Field({ name: "High", id: 0x2, conformance: "M", description: "High Volume" }),
        Field({ name: "Medium", id: 0x3, conformance: "M", description: "Medium Volume" })
    ),

    Datatype(
        { name: "EventTypeEnum", type: "enum8", xref: { document: "cluster", section: "5.2.6.23" } },
        Field({ name: "Operation", id: 0x0, conformance: "M", description: "Event type is operation" }),
        Field({ name: "Programming", id: 0x1, conformance: "M", description: "Event type is programming" }),
        Field({ name: "Alarm", id: 0x2, conformance: "M", description: "Event type is alarm" })
    ),

    Datatype(
        {
            name: "CredentialStruct", type: "struct",
            details: "This struct shall indicate the credential types and their corresponding indices (if any) for the " +
                "event or user record.",
            xref: { document: "cluster", section: "5.2.6.24" }
        },

        Field({
            name: "CredentialType", id: 0x0, type: "CredentialTypeEnum", conformance: "M",
            details: "This field shall indicate the credential field used to authorize the lock operation.",
            xref: { document: "cluster", section: "5.2.6.24.1" }
        }),

        Field({
            name: "CredentialIndex", id: 0x1, type: "uint16", conformance: "M", default: 0,
            details: "This field shall indicate the index of the specific credential used to authorize the lock operation " +
                "in the list of credentials identified by CredentialType (e.g. PIN, RFID, etc.). This field shall be " +
                "set to 0 if CredentialType is ProgrammingPIN or does not correspond to a list that can be indexed " +
                "into.",
            xref: { document: "cluster", section: "5.2.6.24.2" }
        })
    ),

    Datatype(
        { name: "StatusCodeEnum", type: "enum8", xref: { document: "cluster", section: "5.2.7.1" } },
        Field({ name: "Duplicate", id: 0x2, conformance: "M", description: "Entry would cause a duplicate credential/ID." }),
        Field({ name: "Occupied", id: 0x3, conformance: "M", description: "Entry would replace an occupied slot." })
    )
);

MatterDefinition.children.push(DoorLock);
