/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "DoorLock", id: 0x101, classification: "application", description: "Door Lock",
    details: "An interface to a generic way to secure a door",
    xref: { document: "cluster", section: "5.2" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 6 }),

        Attribute({
            name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "5.2.2" },

            children: [
                Field({
                    name: "PIN", conformance: "O", constraint: "0", description: "PinCredential",
                    details: "Lock supports PIN credentials (via keypad, or over- the-air)"
                }),
                Field({
                    name: "RID", conformance: "O", constraint: "1", description: "RfidCredential",
                    details: "Lock supports RFID credentials"
                }),
                Field({
                    name: "FGP", conformance: "P, O", constraint: "2", description: "FingerCredentials",
                    details: "Lock supports finger related credentials (fingerprint, finger vein)"
                }),
                Field({
                    name: "LOG", conformance: "O", constraint: "3", description: "Logging",
                    details: "Lock supports local/on-lock logging when Events are not supported"
                }),
                Field({
                    name: "WDSCH", conformance: "O", constraint: "4", description: "WeekDayAccessSchedules",
                    details: "Lock supports week day user access schedules"
                }),
                Field({
                    name: "DPS", conformance: "O", constraint: "5", description: "DoorPositionSensor",
                    details: "Lock supports a door position sensor that indicates door’s state"
                }),
                Field({
                    name: "FACE", conformance: "P, O", constraint: "6", description: "FaceCredentials",
                    details: "Lock supports face related credentials (face, iris, retina)"
                }),
                Field({
                    name: "COTA", conformance: "O", constraint: "7", description: "CredentialOverTheAirAccess",
                    details: "PIN codes over- the-air supported for lock/unlock operations"
                }),
                Field({
                    name: "USR", conformance: "[PIN | RID | FGP | FACE]", constraint: "8", description: "User",
                    details: "Lock supports the user commands and database"
                }),
                Field({
                    name: "NOT", conformance: "O", constraint: "9", description: "Notification",
                    details: "Operation and Programming Notifications"
                }),
                Field({
                    name: "YDSCH", conformance: "O", constraint: "10", description: "YearDayAccessSchedules",
                    details: "Lock supports year day user access schedules"
                }),
                Field({
                    name: "HDSCH", conformance: "O", constraint: "11", description: "HolidaySchedules",
                    details: "Lock supports holiday schedules"
                })
            ]
        }),

        Attribute({
            name: "LockState", id: 0x0, type: "enum8", access: "R V", conformance: "M", constraint: "desc",
            quality: "X S P",

            details: "The LockState Attribute may be NULL if the lock hardware does not currently know the status of the " +
                "locking mechanism. For example, a lock may not know the LockState status after a power cycle until " +
                "the first lock actuation is completed." +
                "\n" +
                "The Not Fully Locked value is used by a lock to indicate that the state of the lock is somewhere " +
                "between Locked and Unlocked so it is only partially secured. For example, a deadbolt could be " +
                "partially extended and not in a dead latched state." +
                "\n" +
                "If the Scenes server cluster is implemented on the same endpoint, the following extension field " +
                "shall be added to the Scene Table:" +
                "\n" +
                "  • LockState" +
                "\n" +
                "When the LockState attribute is part of a Scene table, the attribute is treated as a writable " +
                "command; that is, setting the LockState to lock will command the lock to lock, and setting the " +
                "LockState to unlock will command the lock to unlock. Setting the LockState attribute to “not fully " +
                "locked” is not supported. The Transition Time field in the Scene table will be treated as a delay " +
                "before setting the LockState attribute; that is, it is possible to activate a scene with the lock " +
                "actuation some seconds later." +
                "\n" +
                "Locks that do not have an actuation mechanism SHOULD not support the Scene table extension.",

            xref: { document: "cluster", section: "5.2.3.1" },
            children: [
                Field({ name: "NotFullyLocked", id: 0x0, conformance: "M", description: "Lock state is not fully locked" }),
                Field({ name: "Locked", id: 0x1, conformance: "M", description: "Lock state is fully locked" }),
                Field({ name: "Unlocked", id: 0x2, conformance: "M", description: "Lock state is fully unlocked" })
            ]
        }),

        Attribute({
            name: "LockType", id: 0x1, type: "enum8", access: "R V", conformance: "M", constraint: "desc",
            xref: { document: "cluster", section: "5.2.3.2" },

            children: [
                Field({ name: "Deadbolt", id: 0x0, conformance: "M", description: "Physical lock type is dead bolt" }),
                Field({ name: "Magnetic", id: 0x1, conformance: "M", description: "Physical lock type is magnetic" }),
                Field({ name: "Other", id: 0x2, conformance: "M", description: "Physical lock type is other" }),
                Field({ name: "Mortise", id: 0x3, conformance: "M", description: "Physical lock type is mortise" }),
                Field({ name: "Rim", id: 0x4, conformance: "M", description: "Physical lock type is rim" }),
                Field({ name: "LatchBolt", id: 0x5, conformance: "M", description: "Physical lock type is latch bolt" }),
                Field({
                    name: "CylindricalLock", id: 0x6, conformance: "M",
                    description: "Physical lock type is cylindrical lock"
                }),
                Field({
                    name: "TubularLock", id: 0x7, conformance: "M", description: "Physical lock type is tubular lock"
                }),
                Field({
                    name: "InterconnectedLock", id: 0x8, conformance: "M",
                    description: "Physical lock type is interconnected lock"
                }),
                Field({ name: "DeadLatch", id: 0x9, conformance: "M", description: "Physical lock type is dead latch" }),
                Field({
                    name: "DoorFurniture", id: 0xa, conformance: "M",
                    description: "Physical lock type is door furniture"
                })
            ]
        }),

        Attribute({
            name: "ActuatorEnabled", id: 0x2, type: "bool", access: "R V", conformance: "M",
            details: "The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to " +
                "(Disabled) process remote Lock, Unlock, or Unlock with Timeout commands.",
            xref: { document: "cluster", section: "5.2.3.3" }
        }),

        Attribute({
            name: "DoorState", id: 0x3, type: "DoorStateEnum", access: "R V", conformance: "DPS",
            constraint: "desc", quality: "X P",
            details: "The current door state as defined in DoorStateEnum." +
                "\n" +
                "This attribute shall be null only if an internal error prevents the retrieval of the current door " +
                "state.",
            xref: { document: "cluster", section: "5.2.3.4" }
        }),

        Attribute({
            name: "DoorOpenEvents", id: 0x4, type: "uint32", access: "RW VM", conformance: "[DPS]",
            details: "This attribute holds the number of door open events that have occurred since it was last zeroed.",
            xref: { document: "cluster", section: "5.2.3.5" }
        }),
        Attribute({
            name: "DoorClosedEvents", id: 0x5, type: "uint32", access: "RW VM", conformance: "[DPS]",
            details: "This attribute holds the number of door closed events that have occurred since it was last zeroed.",
            xref: { document: "cluster", section: "5.2.3.6" }
        }),

        Attribute({
            name: "OpenPeriod", id: 0x6, type: "uint16", access: "RW VM", conformance: "[DPS]",
            details: "This attribute holds the number of minutes the door has been open since the last time it " +
                "transitioned from closed to open.",
            xref: { document: "cluster", section: "5.2.3.7" }
        }),

        Attribute({
            name: "NumberOfLogRecordsSupported", id: 0x10, type: "uint16", access: "R V", conformance: "LOG",
            default: 0, quality: "F",
            details: "The number of available log records.",
            xref: { document: "cluster", section: "5.2.3.8" }
        }),

        Attribute({
            name: "NumberOfTotalUsersSupported", id: 0x11, type: "uint16", access: "R V", conformance: "USR",
            default: 0, quality: "F",
            details: "Number of total users supported by the lock.",
            xref: { document: "cluster", section: "5.2.3.9" }
        }),

        Attribute({
            name: "NumberOfPinUsersSupported", id: 0x12, type: "uint16", access: "R V", conformance: "PIN",
            default: 0, quality: "F",
            details: "The number of PIN users supported.",
            xref: { document: "cluster", section: "5.2.3.10" }
        }),

        Attribute({
            name: "NumberOfRfidUsersSupported", id: 0x13, type: "uint16", access: "R V", conformance: "RID",
            default: 0, quality: "F",
            details: "The number of RFID users supported.",
            xref: { document: "cluster", section: "5.2.3.11" }
        }),

        Attribute({
            name: "NumberOfWeekDaySchedulesSupportedPerUser", id: 0x14, type: "uint8", access: "R V",
            conformance: "WDSCH", default: 0, quality: "F",
            details: "The number of configurable week day schedule supported per user.",
            xref: { document: "cluster", section: "5.2.3.12" }
        }),

        Attribute({
            name: "NumberOfYearDaySchedulesSupportedPerUser", id: 0x15, type: "uint8", access: "R V",
            conformance: "YDSCH", default: 0, quality: "F",
            details: "The number of configurable year day schedule supported per user.",
            xref: { document: "cluster", section: "5.2.3.13" }
        }),

        Attribute({
            name: "NumberOfHolidaySchedulesSupported", id: 0x16, type: "uint8", access: "R V",
            conformance: "HDSCH", default: 0, quality: "F",
            details: "The number of holiday schedules supported for the entire door lock device.",
            xref: { document: "cluster", section: "5.2.3.14" }
        }),

        Attribute({
            name: "MaxPinCodeLength", id: 0x17, type: "uint8", access: "R V", conformance: "PIN", quality: "F",
            details: "An 8 bit value indicates the maximum length in bytes of a PIN Code on this device.",
            xref: { document: "cluster", section: "5.2.3.15" }
        }),
        Attribute({
            name: "MinPinCodeLength", id: 0x18, type: "uint8", access: "R V", conformance: "PIN", quality: "F",
            details: "An 8 bit value indicates the minimum length in bytes of a PIN Code on this device.",
            xref: { document: "cluster", section: "5.2.3.16" }
        }),

        Attribute({
            name: "MaxRfidCodeLength", id: 0x19, type: "uint8", access: "R V", conformance: "RID", quality: "F",
            details: "An 8 bit value indicates the maximum length in bytes of a RFID Code on this device. The value " +
                "depends on the RFID code range specified by the manufacturer, if media anti-collision identifiers " +
                "(UID) are used as RFID code, a value of 20 (equals 10 Byte ISO 14443A UID) is recommended.",
            xref: { document: "cluster", section: "5.2.3.17" }
        }),

        Attribute({
            name: "MinRfidCodeLength", id: 0x1a, type: "uint8", access: "R V", conformance: "RID", quality: "F",
            details: "An 8 bit value indicates the minimum length in bytes of a RFID Code on this device. The value " +
                "depends on the RFID code range specified by the manufacturer, if media anti-collision identifiers " +
                "(UID) are used as RFID code, a value of 8 (equals 4 Byte ISO 14443A UID) is recommended.",
            xref: { document: "cluster", section: "5.2.3.18" }
        }),

        Attribute({
            name: "CredentialRulesSupport", id: 0x1b, type: "map8", access: "R V", conformance: "USR",
            default: 1, quality: "F",
            details: "This bitmap contains a bit for every value of CredentialRuleEnum supported on this device.",
            xref: { document: "cluster", section: "5.2.3.19" },
            children: [
                Field({ name: "Single", constraint: "0" }),
                Field({ name: "Dual", constraint: "1" }),
                Field({ name: "Tri", constraint: "2" })
            ]
        }),

        Attribute({
            name: "NumberOfCredentialsSupportedPerUser", id: 0x1c, type: "uint8", access: "R V",
            conformance: "USR", default: 0, quality: "F",

            details: "The number of credentials that could be assigned for each user." +
                "\n" +
                "Depending on the value of NumberOfRFIDUsersSupported and NumberOfPINUsersSupported it may not be " +
                "possible to assign that number of credentials for a user." +
                "\n" +
                "For example, if the device supports only PIN and RFID credential types, " +
                "NumberOfCredentialsSupportedPerUser is set to 10, NumberOfPINUsersSupported is set to 5 and " +
                "NumberOfRFIDUsersSupported is set to 3, it will not be possible to actually assign 10 credentials " +
                "for a user because maximum number of credentials in the database is 8.",

            xref: { document: "cluster", section: "5.2.3.20" }
        }),

        Attribute({
            name: "EnableLogging", id: 0x20, type: "bool", access: "R[W] VA", conformance: "LOG", default: true,
            quality: "P",
            details: "Enable/disable event logging. When event logging is enabled, all event messages are stored on the " +
                "lock for retrieval. Logging events can be but not limited to Tamper Alarm, Lock, Unlock, " +
                "AutoRelock, User Code Added, User Code Cleared, Schedule Added, and Schedule Cleared. For a full " +
                "detail of all the possible alarms and events, please refer to the full list in the Alarm and Event " +
                "Masks Attribute Set.",
            xref: { document: "cluster", section: "5.2.3.21" }
        }),

        Attribute({
            name: "Language", id: 0x21, type: "string", access: "R[W] VM", conformance: "O",
            constraint: "max 3", quality: "P",
            details: "Modifies the language for the on-screen or audible user interface using a 2-byte language code from " +
                "ISO-639-1.",
            xref: { document: "cluster", section: "5.2.3.22" }
        }),

        Attribute({
            name: "LedSettings", id: 0x22, type: "uint8", access: "R[W] VM", conformance: "O",
            constraint: "max 2", default: 0, quality: "P",
            details: "The settings for the LED support three different modes",
            xref: { document: "cluster", section: "5.2.3.25" }
        }),

        Attribute({
            name: "AutoRelockTime", id: 0x23, type: "uint32", access: "R[W] VM", conformance: "O", quality: "P",
            details: "The number of seconds to wait after unlocking a lock before it automatically locks again. " +
                "0=disabled. If set, unlock operations from any source will be timed. For one time unlock with " +
                "timeout use the specific command.",
            xref: { document: "cluster", section: "5.2.3.26" }
        }),

        Attribute({
            name: "SoundVolume", id: 0x24, type: "uint8", access: "R[W] VM", conformance: "O",
            constraint: "max 3", default: 0, quality: "P",
            details: "The sound volume on a door lock has four possible settings: silent, low, high and medium volumes",
            xref: { document: "cluster", section: "5.2.3.27" }
        }),

        Attribute({
            name: "OperatingMode", id: 0x25, type: "OperatingModeEnum", access: "R[W] VM", conformance: "M",
            constraint: "desc", default: 0, quality: "P",
            details: "The current operating mode of the lock (see OperatingModeEnum).",
            xref: { document: "cluster", section: "5.2.3.23" }
        }),

        Attribute({
            name: "SupportedOperatingModes", id: 0x26, type: "map16", access: "R V", conformance: "M",
            default: 65526, quality: "F",
            details: "This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All " +
                "operating modes NOT supported by a lock shall be set to one. The value of the OperatingMode " +
                "enumeration defines the related bit to be set, as",
            xref: { document: "cluster", section: "5.2.3.24" },

            children: [
                Field({ name: "Normal", constraint: "0" }),
                Field({ name: "Vacation", constraint: "1" }),
                Field({ name: "Privacy", constraint: "2" }),
                Field({ name: "NoRemoteLockUnlock", constraint: "3" }),
                Field({ name: "Passage", constraint: "4" })
            ]
        }),

        Attribute({
            name: "DefaultConfigurationRegister", id: 0x27, type: "map16", access: "R V", conformance: "O",
            default: 0, quality: "P",

            details: "This attribute represents the default configurations as they are physically set on the device " +
                "(example: hardware dip switch setting, etc…) and represents the default setting for some of the " +
                "attributes within this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode " +
                "attributes)." +
                "\n" +
                "This is a read-only attribute and is intended to allow clients to determine what changes may need " +
                "to be made without having to query all the included attributes. It may be beneficial for the " +
                "clients to know what the device’s original settings were in the event that the device needs to be " +
                "restored to factory default settings." +
                "\n" +
                "If the Client device would like to query and modify the door lock server’s operating settings, it " +
                "SHOULD send read and write attribute requests to the specific attributes." +
                "\n" +
                "For example, the Sound Volume attribute default value is Silent Mode. However, it is possible that " +
                "the current Sound Volume is High Volume. Therefore, if the client wants to query/modify the current " +
                "Sound Volume setting on the server, the client SHOULD read/write to the Sound Volume attribute.",

            xref: { document: "cluster", section: "5.2.3.28" },

            children: [
                Field({ name: "EnableLocalProgrammingEnabled", constraint: "0" }),
                Field({ name: "KeypadInterfaceDefaultAccessEnabled", constraint: "1" }),
                Field({ name: "RemoteInterfaceDefaultAccessIsEnabled", constraint: "2" }),
                Field({ name: "SoundEnabled", constraint: "5" }),
                Field({ name: "AutoRelockTimeSet", constraint: "6" }),
                Field({ name: "LEDSettingsSet", constraint: "7" })
            ]
        }),

        Attribute({
            name: "EnableLocalProgramming", id: 0x28, type: "bool", access: "R[W] VA", conformance: "O",
            default: true, quality: "P",
            details: "Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures " +
                "attribute). If this value is set to TRUE then local programming is enabled on the door lock for all " +
                "features. If it is set to FALSE then local programming is disabled on the door lock for those " +
                "features whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming shall " +
                "be enabled by default.",
            xref: { document: "cluster", section: "5.2.3.29" }
        }),

        Attribute({
            name: "EnableOneTouchLocking", id: 0x29, type: "bool", access: "RW VM", conformance: "O",
            default: true, quality: "P",
            details: "Enable/disable the ability to lock the door lock with a single touch on the door lock.",
            xref: { document: "cluster", section: "5.2.3.30" }
        }),

        Attribute({
            name: "EnableInsideStatusLed", id: 0x2a, type: "bool", access: "RW VM", conformance: "O",
            default: true, quality: "P",
            details: "Enable/disable an inside LED that allows the user to see at a glance if the door is locked.",
            xref: { document: "cluster", section: "5.2.3.31" }
        }),

        Attribute({
            name: "EnablePrivacyModeButton", id: 0x2b, type: "bool", access: "RW VM", conformance: "O",
            default: true, quality: "P",
            details: "Enable/disable a button inside the door that is used to put the lock into privacy mode. When the " +
                "lock is in privacy mode it cannot be manipulated from the outside.",
            xref: { document: "cluster", section: "5.2.3.32" }
        }),

        Attribute({
            name: "LocalProgrammingFeatures", id: 0x2c, type: "map8", access: "R[W] VA", conformance: "O",
            default: 0, quality: "P",

            details: "The local programming features that will be disabled when EnableLocalProgramming attribute is set " +
                "to False. If a door lock doesn’t support disabling one aspect of local programming it shall return " +
                "CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming " +
                "attribute is set to True then all local programming features shall be enabled regardless of the " +
                "bits set to 0 in this attribute." +
                "\n" +
                "The features that can be disabled from local programming are defined in the following bitmap.",

            xref: { document: "cluster", section: "5.2.3.33" },

            children: [
                Field({ name: "AddUsersCredentialsSchedulesLocally", constraint: "0" }),
                Field({ name: "ModifyUsersCredentialsSchedulesLocally", constraint: "1" }),
                Field({ name: "ClearUsersCredentialsSchedulesLocally", constraint: "2" }),
                Field({ name: "AdjustLockSettingsLocally", constraint: "3" })
            ]
        }),

        Attribute({
            name: "WrongCodeEntryLimit", id: 0x30, type: "uint8", access: "R[W] VA", conformance: "PIN | RID",
            constraint: "1 to 255", quality: "P",

            details: "The number of incorrect Pin codes or RFID presentment attempts a user is allowed to enter before " +
                "the lock will enter a lockout state. The value of this attribute is compared to all failing forms " +
                "of credential presentation, including Pin codes used in an Unlock Command when " +
                "RequirePINforRemoteOperation is set to true. Valid range is 1-255 incorrect attempts. The lockout " +
                "state will be for the duration of UserCodeTemporaryDisableTime. If the attribute accepts writes and " +
                "an attempt to write the value 0 is made, the device shall respond with CONSTRAINT_ERROR." +
                "\n" +
                "The lock may reset the counter used to track incorrect credential presentations as required by " +
                "internal logic, environmental events, or other reasons. The lock shall reset the counter if a valid " +
                "credential is presented.",

            xref: { document: "cluster", section: "5.2.3.34" }
        }),

        Attribute({
            name: "UserCodeTemporaryDisableTime", id: 0x31, type: "uint8", access: "R[W] VA",
            conformance: "PIN | RID", constraint: "1 to 255", quality: "P",
            details: "The number of seconds that the lock shuts down following wrong code entry. Valid range is 1-255 " +
                "seconds. Device can shut down to lock user out for specified amount of time. (Makes it difficult to " +
                "try and guess a PIN for the device.) If the attribute accepts writes and an attempt to write the " +
                "attribute to 0 is made, the device shall respond with CONSTRAINT_ERROR.",
            xref: { document: "cluster", section: "5.2.3.35" }
        }),

        Attribute({
            name: "SendPinOverTheAir", id: 0x32, type: "bool", access: "R[W] VA", conformance: "[PIN]",
            default: true, quality: "P",

            details: "Boolean set to True if it is ok for the door lock server to send PINs over the air. This attribute " +
                "determines the behavior of the server’s TX operation. If it is false, then it is not ok for the " +
                "device to send PIN in any messages over the air." +
                "\n" +
                "The PIN field within any door lock cluster message shall keep the first octet unchanged and masks " +
                "the actual code by replacing with 0xFF. For example (PIN \"1234\" ): If the attribute value is True, " +
                "0x04 0x31 0x32 0x33 0x34 shall be used in the PIN field in any door lock cluster message payload. " +
                "If the attribute value is False, 0x04 0xFF 0xFF 0xFF 0xFF shall be used." +
                "\n" +
                "If the USR feature is supported by the device then this attribute shall NOT be supported.",

            xref: { document: "cluster", section: "5.2.3.36" }
        }),

        Attribute({
            name: "RequirePinForRemoteOperation", id: 0x33, type: "bool", access: "R[W] VA",
            conformance: "COTA & PIN", default: true, quality: "P",
            details: "Boolean set to True if the door lock server requires that an optional PINs be included in the " +
                "payload of remote lock operation events like Lock, Unlock, Unlock with Timeout and Toggle in order " +
                "to function.",
            xref: { document: "cluster", section: "5.2.3.37" }
        }),

        Attribute({
            name: "SecurityLevel", id: 0x34, conformance: "D", default: "0",
            xref: { document: "cluster", section: "5.2.3" }
        }),

        Attribute({
            name: "ExpiringUserTimeout", id: 0x35, type: "uint16", access: "R[W] VA", conformance: "[USR]",
            constraint: "1 to 2880", quality: "P",
            details: "Number of minutes a PIN, RFID, Fingerprint, or other credential associated with a user of type " +
                "ExpiringUser shall remain valid after its first use before expiring. When the credential expires " +
                "the UserStatus for the corresponding user record shall be set to OccupiedDisabled.",
            xref: { document: "cluster", section: "5.2.3.38" }
        }),

        Attribute({
            name: "AlarmMask", id: 0x40, type: "map16", access: "RW VA", conformance: "O", default: 65535,
            quality: "P",

            details: "This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is " +
                "used to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the " +
                "associated alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be " +
                "turned on or off by setting or clearing the associated bit in the alarm mask." +
                "\n" +
                "This mask DOES NOT apply to the Events mechanism of this cluster.",

            xref: { document: "cluster", section: "5.2.3.39" },

            children: [
                Field({ name: "LockingMechanismJammed", constraint: "0" }),
                Field({ name: "LockResetToFactoryDefaults", constraint: "1" }),
                Field({ name: "Reserved", constraint: "2" }),
                Field({ name: "RfModulePowerCycled", constraint: "3" }),
                Field({ name: "TamperAlarmWrongCodeEntryLimit", constraint: "4" }),
                Field({ name: "TamperAlarmFrontEscutcheonRemovedFromMain", constraint: "5" }),
                Field({ name: "ForcedDoorOpenUnderDoorLockedCondition", constraint: "6" })
            ]
        }),

        Attribute({
            name: "KeypadOperationEventMask", id: 0x41, type: "map16", access: "RW VA",
            conformance: "[NOT & PIN]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off the transmission of keypad operation events. This mask DOES NOT " +
                "apply to the storing of events in the event log. This mask only applies to the Operation Event " +
                "Notification Command." +
                "\n" +
                "This mask DOES NOT apply to the Events mechanism of this cluster.",
            xref: { document: "cluster", section: "5.2.3.40" },

            children: [
                Field({ name: "UnknownOrManufacturerSpecificKeypadOperationEvent", constraint: "0" }),
                Field({ name: "LockSourceKeypad", constraint: "1" }),
                Field({ name: "UnlockSourceKeypad", constraint: "2" }),
                Field({ name: "LockSourceKeypadErrorInvalidPin", constraint: "3" }),
                Field({ name: "LockSourceKeypadErrorInvalidSchedule", constraint: "4" }),
                Field({ name: "UnlockSourceKeypadErrorInvalidCode", constraint: "5" }),
                Field({ name: "UnlockSourceKeypadErrorInvalidSchedule", constraint: "6" }),
                Field({ name: "NonAccessUserOperationEventSourceKeypad", constraint: "15" })
            ]
        }),

        Attribute({
            name: "RemoteOperationEventMask", id: 0x42, type: "map16", access: "RW VA", conformance: "[NOT]",
            default: 65535, quality: "P",

            details: "Event mask used to turn on and off the transmission of remote operation events. This mask DOES NOT " +
                "apply to the storing of events in the event log. This mask only applies to the Operation Event" +
                "\n" +
                "Notification Command." +
                "\n" +
                "This mask DOES NOT apply to the Events mechanism of this cluster.",

            xref: { document: "cluster", section: "5.2.3.41" },

            children: [
                Field({ name: "UnknownOrManufacturerSpecificRemoteOperationEvent", constraint: "0" }),
                Field({ name: "LockSourceRemote", constraint: "1" }),
                Field({ name: "UnlockSourceRemote", constraint: "2" }),
                Field({ name: "LockSourceRemoteErrorInvalidCode", constraint: "3" }),
                Field({ name: "LockSourceRemoteErrorInvalidSchedule", constraint: "4" }),
                Field({ name: "UnlockSourceRemoteErrorInvalidCode", constraint: "5" }),
                Field({ name: "UnlockSourceRemoteErrorInvalidSchedule", constraint: "6" })
            ]
        }),

        Attribute({
            name: "ManualOperationEventMask", id: 0x43, type: "map16", access: "RW VA", conformance: "[NOT]",
            default: 65535, quality: "P",
            details: "Event mask used to turn on and off manual operation events. This mask DOES NOT apply to the storing " +
                "of events in the event log. This mask only applies to the Operation Event Notification Command." +
                "\n" +
                "This mask DOES NOT apply to the Events mechanism of this cluster.",
            xref: { document: "cluster", section: "5.2.3.42" },

            children: [
                Field({ name: "UnknownOrManufacturerSpecificManualOperationEvent", constraint: "0" }),
                Field({ name: "ThumbturnLock", constraint: "1" }),
                Field({ name: "ThumbturnUnlock", constraint: "2" }),
                Field({ name: "OneTouchLock", constraint: "7" }),
                Field({ name: "KeyLock", constraint: "8" }),
                Field({ name: "KeyUnlock", constraint: "9" }),
                Field({ name: "AutoLock", constraint: "10" }),
                Field({ name: "ScheduleLock", constraint: "11" }),
                Field({ name: "ScheduleUnlock", constraint: "12" }),
                Field({ name: "ManualLock", constraint: "13" }),
                Field({ name: "ManualUnlock", constraint: "14" })
            ]
        }),

        Attribute({
            name: "RfidOperationEventMask", id: 0x44, type: "map16", access: "RW VA",
            conformance: "[NOT & RID]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off RFID operation events. This mask DOES NOT apply to the storing " +
                "of events in the event log. This mask only applies to the Operation Event Notification Command." +
                "\n" +
                "This mask DOES NOT apply to the Events mechanism of this cluster.",
            xref: { document: "cluster", section: "5.2.3.43" },

            children: [
                Field({ name: "UnknownOrManufacturerSpecificKeypadOperationEvent", constraint: "0" }),
                Field({ name: "LockSourceRfid", constraint: "1" }),
                Field({ name: "UnlockSourceRfid", constraint: "2" }),
                Field({ name: "LockSourceRfidErrorInvalidRfidId", constraint: "3" }),
                Field({ name: "LockSourceRfidErrorInvalidSchedule", constraint: "4" }),
                Field({ name: "UnlockSourceRfidErrorInvalidRfidId", constraint: "5" }),
                Field({ name: "UnlockSourceRfidErrorInvalidSchedule", constraint: "6" })
            ]
        }),

        Attribute({
            name: "KeypadProgrammingEventMask", id: 0x45, type: "map16", access: "RW VA",
            conformance: "[NOT & PIN]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off keypad programming events. This mask DOES NOT apply to the " +
                "storing of events in the event log. This mask only applies to the Programming Event Notification " +
                "Command." +
                "\n" +
                "This mask DOES NOT apply to the Events mechanism of this cluster.",
            xref: { document: "cluster", section: "5.2.3.44" },

            children: [
                Field({ name: "Unknown", constraint: "0" }),
                Field({ name: "PinCodeChanged", constraint: "1" }),
                Field({ name: "PinAdded", constraint: "2" }),
                Field({ name: "PinCleared", constraint: "3" }),
                Field({ name: "PinChanged", constraint: "4" })
            ]
        }),

        Attribute({
            name: "RemoteProgrammingEventMask", id: 0x46, type: "map16", access: "RW VA", conformance: "[NOT]",
            default: 65535, quality: "P",
            details: "Event mask used to turn on and off remote programming events. This mask DOES NOT apply to the " +
                "storing of events in the event log. This mask only applies to the Programming Event Notification " +
                "Command." +
                "\n" +
                "This mask DOES NOT apply to the Events mechanism of this cluster.",
            xref: { document: "cluster", section: "5.2.3.45" },

            children: [
                Field({ name: "Unknown", constraint: "0" }),
                Field({ name: "PinAdded", constraint: "2" }),
                Field({ name: "PinCleared", constraint: "3" }),
                Field({ name: "PinChanged", constraint: "4" }),
                Field({ name: "RfidCodeAdded", constraint: "5" }),
                Field({ name: "RfidCodeCleared", constraint: "6" })
            ]
        }),

        Attribute({
            name: "RfidProgrammingEventMask", id: 0x47, type: "map16", access: "RW VA",
            conformance: "[NOT & RID]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off RFID programming events. This mask DOES NOT apply to the storing " +
                "of events in the event log. This mask only applies to the Programming Event Notification Command." +
                "\n" +
                "This mask DOES NOT apply to the Events mechanism of this cluster.",
            xref: { document: "cluster", section: "5.2.3.46" },
            children: [
                Field({ name: "Unknown", constraint: "0" }),
                Field({ name: "IdAdded", constraint: "5" }),
                Field({ name: "IdCleared", constraint: "6" })
            ]
        }),

        Event({
            name: "DoorLockAlarm", id: 0x0, access: "V", conformance: "M", priority: "critical",
            details: "The door lock cluster provides several alarms which can be sent when there is a critical state on " +
                "the door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum " +
                "section below.",
            xref: { document: "cluster", section: "5.2.5.1" },
            children: [Field({
                name: "AlarmCode", id: 0x0, type: "AlarmCodeEnum", conformance: "M",
                details: "The alarm code of the event that has happened.",
                xref: { document: "cluster", section: "5.2.5.1.1" }
            })]
        }),

        Event({
            name: "DoorStateChange", id: 0x1, access: "V", conformance: "DPS", priority: "critical",
            details: "The door lock server sends out a DoorStateChange event when the door lock door state changes.",
            xref: { document: "cluster", section: "5.2.5.2" },
            children: [Field({
                name: "DoorState", id: 0x0, type: "DoorStateEnum", conformance: "M",
                details: "The new door state for this door event.",
                xref: { document: "cluster", section: "5.2.5.2.1" }
            })]
        }),

        Event({
            name: "LockOperation", id: 0x2, access: "V", conformance: "M", priority: "critical",
            details: "The door lock server sends out a LockOperation event when the event is triggered by the various " +
                "lock operation sources.",
            xref: { document: "cluster", section: "5.2.5.3" },

            children: [
                Field({
                    name: "LockOperationType", id: 0x0, type: "LockOperationTypeEnum", conformance: "M",
                    details: "The type of the lock operation that was performed.",
                    xref: { document: "cluster", section: "5.2.5.3.1" }
                }),
                Field({
                    name: "OperationSource", id: 0x1, type: "OperationSourceEnum", conformance: "M",
                    details: "The source of the lock operation that was performed.",
                    xref: { document: "cluster", section: "5.2.5.3.2" }
                }),

                Field({
                    name: "UserIndex", id: 0x2, type: "uint16", conformance: "M", quality: "X",
                    details: "The lock UserIndex who performed the lock operation. This shall be null if there is no user index " +
                        "that can be determined for the given operation source. This shall NOT be null if a user index can " +
                        "be determined. In particular, this shall NOT be null if the operation was associated with a valid " +
                        "credential.",
                    xref: { document: "cluster", section: "5.2.5.3.3" }
                }),

                Field({
                    name: "FabricIndex", id: 0x3, type: "fabric-idx", conformance: "M", quality: "X",
                    details: "The fabric index of the fabric that performed the lock operation. This shall be null if there is no " +
                        "fabric that can be determined for the given operation source. This shall NOT be null if the " +
                        "operation source is \"Remote\".",
                    xref: { document: "cluster", section: "5.2.5.3.4" }
                }),

                Field({
                    name: "SourceNode", id: 0x4, type: "node-id", conformance: "M", quality: "X",
                    details: "The Node ID of the node that performed the lock operation. This shall be null if there is no Node " +
                        "associated with the given operation source. This shall NOT be null if the operation source is " +
                        "\"Remote\".",
                    xref: { document: "cluster", section: "5.2.5.3.5" }
                }),

                Field({
                    name: "Credentials", id: 0x5, type: "list", conformance: "[USR]",
                    constraint: "1 to numberOfCredentialsSupportedPerUser", quality: "X",
                    details: "The list of credentials used in performing the lock operation. This shall be null if no credentials " +
                        "were involved.",
                    xref: { document: "cluster", section: "5.2.5.3.6" },
                    children: [Field({ name: "entry", type: "CredentialStruct" })]
                })
            ]
        }),

        Event({
            name: "LockOperationError", id: 0x3, access: "V", conformance: "M", priority: "critical",
            details: "The door lock server sends out a LockOperationError event when a lock operation fails for various " +
                "reasons.",
            xref: { document: "cluster", section: "5.2.5.4" },

            children: [
                Field({
                    name: "LockOperationType", id: 0x0, type: "LockOperationTypeEnum", conformance: "M",
                    details: "The type of the lock operation that was performed.",
                    xref: { document: "cluster", section: "5.2.5.4.1" }
                }),
                Field({
                    name: "OperationSource", id: 0x1, type: "OperationSourceEnum", conformance: "M",
                    details: "The source of the lock operation that was performed.",
                    xref: { document: "cluster", section: "5.2.5.4.2" }
                }),
                Field({
                    name: "OperationError", id: 0x2, type: "OperationErrorEnum", conformance: "M",
                    details: "The lock operation error triggered when the operation was performed.",
                    xref: { document: "cluster", section: "5.2.5.4.3" }
                }),

                Field({
                    name: "UserIndex", id: 0x3, type: "uint16", conformance: "M", quality: "X",
                    details: "The lock UserIndex who performed the lock operation. This shall be null if there is no user id that " +
                        "can be determined for the given operation source.",
                    xref: { document: "cluster", section: "5.2.5.4.4" }
                }),

                Field({
                    name: "FabricIndex", id: 0x4, type: "fabric-idx", conformance: "M", quality: "X",
                    details: "The fabric index of the fabric that performed the lock operation. This shall be null if there is no " +
                        "fabric that can be determined for the given operation source. This shall NOT be null if the " +
                        "operation source is \"Remote\".",
                    xref: { document: "cluster", section: "5.2.5.4.5" }
                }),

                Field({
                    name: "SourceNode", id: 0x5, type: "node-id", conformance: "M", quality: "X",
                    details: "The Node ID of the node that performed the lock operation. This shall be null if there is no Node " +
                        "associated with the given operation source. This shall NOT be null if the operation source is" +
                        "\n" +
                        "\"Remote\".",
                    xref: { document: "cluster", section: "5.2.5.4.6" }
                }),

                Field({
                    name: "Credentials", id: 0x6, type: "list", conformance: "[USR]",
                    constraint: "1 to numberOfCredentialsSupportedPerUser", quality: "X",
                    details: "The list of credentials used in performing the lock operation. This shall be null if no credentials " +
                        "were involved.",
                    xref: { document: "cluster", section: "5.2.5.4.7" },
                    children: [Field({ name: "entry", type: "CredentialStruct" })]
                })
            ]
        }),

        Event({
            name: "LockUserChange", id: 0x4, access: "V", conformance: "USR", priority: "info",
            details: "The door lock server sends out a LockUserChange event when a lock user, schedule, or credential " +
                "change has occurred.",
            xref: { document: "cluster", section: "5.2.5.5" },

            children: [
                Field({
                    name: "LockDataType", id: 0x0, type: "LockDataTypeEnum", conformance: "M",
                    details: "The lock data type that was changed.",
                    xref: { document: "cluster", section: "5.2.5.5.1" }
                }),
                Field({
                    name: "DataOperationType", id: 0x1, type: "DataOperationTypeEnum", conformance: "M",
                    details: "The data operation performed on the lock data type changed.",
                    xref: { document: "cluster", section: "5.2.5.5.2" }
                }),

                Field({
                    name: "OperationSource", id: 0x2, type: "OperationSourceEnum", conformance: "M",
                    constraint: "unspecified, keypad, remote",
                    details: "The source of the user data change.",
                    xref: { document: "cluster", section: "5.2.5.5.3" }
                }),

                Field({
                    name: "UserIndex", id: 0x3, type: "uint16", conformance: "M", quality: "X",
                    details: "The lock UserIndex associated with the change (if any). This shall be null if there is no specific " +
                        "user associated with the data operation. This shall be 0xFFFE if all users are affected (e.g. Clear " +
                        "Users).",
                    xref: { document: "cluster", section: "5.2.5.5.4" }
                }),

                Field({
                    name: "FabricIndex", id: 0x4, type: "fabric-idx", conformance: "M", quality: "X",
                    details: "The fabric index of the fabric that performed the change (if any). This shall be null if there is " +
                        "no fabric that can be determined to have caused the change. This shall NOT be null if the operation " +
                        "source is \"Remote\".",
                    xref: { document: "cluster", section: "5.2.5.5.5" }
                }),

                Field({
                    name: "SourceNode", id: 0x5, type: "node-id", conformance: "M", quality: "X",
                    details: "The Node ID that that performed the change (if any). The Node ID of the node that performed the " +
                        "change. This shall be null if there was no Node involved in the change. This shall NOT be null if " +
                        "the operation source is \"Remote\".",
                    xref: { document: "cluster", section: "5.2.5.5.6" }
                }),

                Field({
                    name: "DataIndex", id: 0x6, type: "uint16", conformance: "M", quality: "X",
                    details: "This is the index of the specific item that was changed (e.g. schedule, PIN, RFID, etc.) in the " +
                        "list of items identified by LockDataType. This shall be null if the LockDataType does not " +
                        "correspond to a list that can be indexed into (e.g. ProgrammingUser). This shall be 0xFFFE if all " +
                        "indices are affected (e.g. Clear PIN Code, Clear RFID Code, Clear Week Day Schedule, Clear Year Day " +
                        "Schedule, etc.).",
                    xref: { document: "cluster", section: "5.2.5.5.7" }
                })
            ]
        }),

        Command({
            name: "LockDoor", id: 0x0, access: "O T", conformance: "M", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [Field({ name: "PinCode", type: "octstr", conformance: "O" })]
        }),

        Command({
            name: "UnlockDoor", id: 0x1, access: "O T", conformance: "M", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [Field({ name: "PinCode", type: "octstr", conformance: "O" })]
        }),

        Command({
            name: "Toggle", id: 0x2, access: "O T", conformance: "X", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        }),

        Command({
            name: "UnlockWithTimeout", id: 0x3, access: "O T", conformance: "O", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                Field({ name: "Timeout", type: "uint16", conformance: "M" }),
                Field({ name: "PinCode", type: "octstr", conformance: "O" })
            ]
        }),

        Command({
            name: "GetLogRecord", id: 0x4, access: "M", conformance: "LOG", direction: "request",
            response: "GetLogRecordResponse",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "GetLogRecordResponse", id: 0x4, conformance: "LOG", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "SetPinCode", id: 0x5, access: "A T", conformance: "!USR & PIN", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "GetPinCode", id: 0x6, access: "A", conformance: "!USR & PIN", direction: "request",
            response: "GetPinCodeResponse",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "GetPinCodeResponse", id: 0x6, conformance: "!USR & PIN", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "ClearPinCode", id: 0x7, access: "A T", conformance: "!USR & PIN", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "ClearAllPinCodes", id: 0x8, access: "A T", conformance: "!USR & PIN", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "SetUserStatus", id: 0x9, access: "A", conformance: "!USR & (PIN | RID | FGP)",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "GetUserStatus", id: 0xa, access: "A", conformance: "!USR & (PIN | RID | FGP)",
            direction: "request", response: "GetUserStatusResponse",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "GetUserStatusResponse", id: 0xa, conformance: "!USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        }),

        Command({
            name: "SetWeekDaySchedule", id: 0xb, access: "A", conformance: "WDSCH", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                Field({ name: "WeekDayIndex", type: "uint8", conformance: "M" }),
                Field({ name: "UserIndex", type: "uint16", conformance: "M" }),
                Field({ name: "DaysMask", type: "DaysMaskMap", conformance: "M" }),
                Field({ name: "StartHour", type: "uint8", conformance: "M" }),
                Field({ name: "StartMinute", type: "uint8", conformance: "M" }),
                Field({ name: "EndHour", type: "uint8", conformance: "M" }),
                Field({ name: "EndMinute", type: "uint8", conformance: "M" })
            ]
        }),

        Command({
            name: "GetWeekDaySchedule", id: 0xc, access: "A", conformance: "WDSCH", direction: "request",
            response: "GetWeekDayScheduleResponse",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                Field({ name: "WeekDayIndex", type: "uint8", conformance: "M" }),
                Field({ name: "UserIndex", type: "uint16", conformance: "M" })
            ]
        }),

        Command({
            name: "GetWeekDayScheduleResponse", id: 0xc, conformance: "WDSCH", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                Field({ name: "WeekDayIndex", type: "uint8", conformance: "M" }),
                Field({ name: "UserIndex", type: "uint16", conformance: "M" }),
                Field({ name: "Status", type: "DlStatus", conformance: "M" }),
                Field({ name: "DaysMask", type: "DaysMaskMap", conformance: "O" }),
                Field({ name: "StartHour", type: "uint8", conformance: "O" }),
                Field({ name: "StartMinute", type: "uint8", conformance: "O" }),
                Field({ name: "EndHour", type: "uint8", conformance: "O" }),
                Field({ name: "EndMinute", type: "uint8", conformance: "O" })
            ]
        }),

        Command({
            name: "ClearWeekDaySchedule", id: 0xd, access: "A", conformance: "WDSCH", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                Field({ name: "WeekDayIndex", type: "uint8", conformance: "M" }),
                Field({ name: "UserIndex", type: "uint16", conformance: "M" })
            ]
        }),

        Command({
            name: "SetYearDaySchedule", id: 0xe, access: "A", conformance: "YDSCH", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                Field({ name: "YearDayIndex", type: "uint8", conformance: "M" }),
                Field({ name: "UserIndex", type: "uint16", conformance: "M" }),
                Field({ name: "LocalStartTime", type: "epoch-s", conformance: "M" }),
                Field({ name: "LocalEndTime", type: "epoch-s", conformance: "M" })
            ]
        }),

        Command({
            name: "GetYearDaySchedule", id: 0xf, access: "A", conformance: "YDSCH", direction: "request",
            response: "GetYearDayScheduleResponse",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                Field({ name: "YearDayIndex", type: "uint8", conformance: "M" }),
                Field({ name: "UserIndex", type: "uint16", conformance: "M" })
            ]
        }),

        Command({
            name: "GetYearDayScheduleResponse", id: 0xf, conformance: "YDSCH", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                Field({ name: "YearDayIndex", type: "uint8", conformance: "M" }),
                Field({ name: "UserIndex", type: "uint16", conformance: "M" }),
                Field({ name: "Status", type: "DlStatus", conformance: "M" }),
                Field({ name: "LocalStartTime", type: "epoch-s", conformance: "O" }),
                Field({ name: "LocalEndTime", type: "epoch-s", conformance: "O" })
            ]
        }),

        Command({
            name: "ClearYearDaySchedule", id: 0x10, access: "A", conformance: "YDSCH", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                Field({ name: "YearDayIndex", type: "uint8", conformance: "M" }),
                Field({ name: "UserIndex", type: "uint16", conformance: "M" })
            ]
        }),

        Command({
            name: "SetHolidaySchedule", id: 0x11, access: "A", conformance: "HDSCH", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                Field({ name: "HolidayIndex", type: "uint8", conformance: "M" }),
                Field({ name: "LocalStartTime", type: "epoch-s", conformance: "M" }),
                Field({ name: "LocalEndTime", type: "epoch-s", conformance: "M" }),
                Field({ name: "OperatingMode", type: "OperatingModeEnum", conformance: "M" })
            ]
        }),

        Command({
            name: "GetHolidaySchedule", id: 0x12, access: "A", conformance: "HDSCH", direction: "request",
            response: "GetHolidayScheduleResponse",
            xref: { document: "cluster", section: "5.2.4" },
            children: [Field({ name: "HolidayIndex", type: "uint8", conformance: "M" })]
        }),

        Command({
            name: "GetHolidayScheduleResponse", id: 0x12, conformance: "HDSCH", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                Field({ name: "HolidayIndex", type: "uint8", conformance: "M" }),
                Field({ name: "Status", type: "DlStatus", conformance: "M" }),
                Field({ name: "LocalStartTime", type: "epoch-s", conformance: "O" }),
                Field({ name: "LocalEndTime", type: "epoch-s", conformance: "O" }),
                Field({ name: "OperatingMode", type: "OperatingModeEnum", conformance: "O" })
            ]
        }),

        Command({
            name: "ClearHolidaySchedule", id: 0x13, access: "A", conformance: "HDSCH", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [Field({ name: "HolidayIndex", type: "uint8", conformance: "M" })]
        }),

        Command({
            name: "SetUserType", id: 0x14, access: "A", conformance: "!USR & (PIN | RID | FGP)",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "GetUserType", id: 0x15, access: "A", conformance: "!USR & (PIN | RID | FGP)",
            direction: "request", response: "GetUserTypeResponse",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "GetUserTypeResponse", id: 0x15, conformance: "!USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "SetRfidCode", id: 0x16, access: "A T", conformance: "!USR & RID", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "GetRfidCode", id: 0x17, access: "A", conformance: "!USR & RID", direction: "request",
            response: "GetRfidCodeResponse",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "GetRfidCodeResponse", id: 0x17, conformance: "!USR & RID", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "ClearRfidCode", id: 0x18, access: "A T", conformance: "!USR & RID", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "ClearAllRfidCodes", id: 0x19, access: "A T", conformance: "!USR & RID", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        }),

        Command({
            name: "SetUser", id: 0x1a, access: "A T", conformance: "USR", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                Field({ name: "OperationType", type: "DataOperationTypeEnum", conformance: "M" }),
                Field({ name: "UserIndex", type: "uint16", conformance: "M" }),
                Field({ name: "UserName", type: "string", conformance: "M", quality: "X" }),
                Field({ name: "UserUniqueId", type: "uint32", conformance: "M", quality: "X" }),
                Field({ name: "UserStatus", type: "UserStatusEnum", conformance: "M", quality: "X" }),
                Field({ name: "UserType", type: "UserTypeEnum", conformance: "M", quality: "X" }),
                Field({ name: "CredentialRule", type: "CredentialRuleEnum", conformance: "M", quality: "X" })
            ]
        }),

        Command({
            name: "GetUser", id: 0x1b, access: "A", conformance: "USR", direction: "request",
            response: "GetUserResponse",
            xref: { document: "cluster", section: "5.2.4" },
            children: [Field({ name: "UserIndex", type: "uint16", conformance: "M" })]
        }),

        Command({
            name: "GetUserResponse", id: 0x1c, conformance: "USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                Field({ name: "UserIndex", type: "uint16", conformance: "M" }),
                Field({ name: "UserName", type: "string", conformance: "M", quality: "X" }),
                Field({ name: "UserUniqueId", type: "uint32", conformance: "M", quality: "X" }),
                Field({ name: "UserStatus", type: "UserStatusEnum", conformance: "M", quality: "X" }),
                Field({ name: "UserType", type: "UserTypeEnum", conformance: "M", quality: "X" }),
                Field({ name: "CredentialRule", type: "CredentialRuleEnum", conformance: "M", quality: "X" }),
                Field({
                    name: "Credentials", type: "list", conformance: "M", quality: "X",
                    children: [Field({ name: "entry", type: "CredentialStruct" })]
                }),
                Field({ name: "CreatorFabricIndex", type: "fabric-idx", conformance: "M", quality: "X" }),
                Field({ name: "LastModifiedFabricIndex", type: "fabric-idx", conformance: "M", quality: "X" }),
                Field({ name: "NextUserIndex", type: "uint16", conformance: "M", quality: "X" })
            ]
        }),

        Command({
            name: "ClearUser", id: 0x1d, access: "A T", conformance: "USR", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [Field({ name: "UserIndex", type: "uint16", conformance: "M" })]
        }),

        Command({
            name: "OperatingEventNotification", id: 0x20, conformance: "[NOT]", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        }),
        Command({
            name: "ProgrammingEventNotification", id: 0x21, conformance: "[NOT]", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        }),

        Command({
            name: "SetCredential", id: 0x22, access: "A T", conformance: "USR", direction: "request",
            response: "SetCredentialResponse",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                Field({ name: "OperationType", type: "DataOperationTypeEnum", conformance: "M" }),
                Field({ name: "Credential", type: "CredentialStruct", conformance: "M" }),
                Field({ name: "CredentialData", type: "octstr", conformance: "M" }),
                Field({ name: "UserIndex", type: "uint16", conformance: "M", quality: "X" }),
                Field({ name: "UserStatus", type: "UserStatusEnum", conformance: "M", quality: "X" }),
                Field({ name: "UserType", type: "UserTypeEnum", conformance: "M", quality: "X" })
            ]
        }),

        Command({
            name: "SetCredentialResponse", id: 0x23, conformance: "USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                Field({ name: "Status", type: "DlStatus", conformance: "M" }),
                Field({ name: "UserIndex", type: "uint16", conformance: "M", quality: "X" }),
                Field({ name: "NextCredentialIndex", type: "uint16", conformance: "M", quality: "X" })
            ]
        }),

        Command({
            name: "GetCredentialStatus", id: 0x24, access: "A", conformance: "USR", direction: "request",
            response: "GetCredentialStatusResponse",
            xref: { document: "cluster", section: "5.2.4" },
            children: [Field({ name: "Credential", type: "CredentialStruct", conformance: "M" })]
        }),

        Command({
            name: "GetCredentialStatusResponse", id: 0x25, conformance: "USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                Field({ name: "CredentialExists", type: "bool", conformance: "M" }),
                Field({ name: "UserIndex", type: "uint16", conformance: "M", quality: "X" }),
                Field({ name: "CreatorFabricIndex", type: "fabric-idx", conformance: "M", quality: "X" }),
                Field({ name: "LastModifiedFabricIndex", type: "fabric-idx", conformance: "M", quality: "X" }),
                Field({ name: "NextCredentialIndex", type: "uint16", conformance: "M", quality: "X" })
            ]
        }),

        Command({
            name: "ClearCredential", id: 0x26, access: "A T", conformance: "USR", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [Field({ name: "Credential", type: "CredentialStruct", conformance: "M", quality: "X" })]
        }),

        Datatype({
            name: "AlarmCodeEnum", type: "enum8", conformance: "M",
            details: "The Alarm Code enum shall indicate the alarm type.",
            xref: { document: "cluster", section: "5.2.6.1" },

            children: [
                Field({ name: "LockJammed", id: 0x0, conformance: "M", description: "Locking Mechanism Jammed" }),
                Field({
                    name: "LockFactoryReset", id: 0x1, conformance: "O", description: "Lock Reset to Factory Defaults"
                }),
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
            ]
        }),

        Datatype({
            name: "CredentialRuleEnum", type: "enum8", conformance: "M",
            details: "The CredentialRule enum used in various commands shall indicate the credential rule that can be " +
                "applied to a particular user.",
            xref: { document: "cluster", section: "5.2.6.2" },
            children: [
                Field({ name: "Single", id: 0x0, conformance: "USR" }),
                Field({ name: "Dual", id: 0x1, conformance: "[USR]" }),
                Field({ name: "Tri", id: 0x2, conformance: "[USR]" })
            ]
        }),

        Datatype({
            name: "CredentialStruct", type: "struct", conformance: "M",
            details: "The CredentialStruct is used in LockOperation event and Get User Record Response command and shall " +
                "indicate the credential types and their corresponding indices (if any) for the event or user record.",
            xref: { document: "cluster", section: "5.2.6.3" },

            children: [
                Field({
                    name: "CredentialType", id: 0x0, type: "CredentialTypeEnum", conformance: "M",
                    details: "The credential type used to authorize the lock operation.",
                    xref: { document: "cluster", section: "5.2.6.3.1" }
                }),

                Field({
                    name: "CredentialIndex", id: 0x1, type: "uint16", conformance: "M", default: 0,
                    details: "This is the index of the specific credential used to authorize the lock operation in the list of " +
                        "credentials identified by CredentialType (e.g. schedule, PIN, RFID, etc.). This shall be set to 0 " +
                        "if CredentialType is ProgrammingPIN or does not correspond to a list that can be indexed into.",
                    xref: { document: "cluster", section: "5.2.6.3.2" }
                })
            ]
        }),

        Datatype({
            name: "CredentialTypeEnum", type: "enum8", conformance: "M",
            details: "The Credential Type enum shall indicate the credential type.",
            xref: { document: "cluster", section: "5.2.6.4" },

            children: [
                Field({ name: "ProgrammingPin", id: 0x0, conformance: "O" }),
                Field({ name: "Pin", id: 0x1, conformance: "PIN" }),
                Field({ name: "Rfid", id: 0x2, conformance: "RID" }),
                Field({ name: "Fingerprint", id: 0x3, conformance: "FGP" }),
                Field({ name: "FingerVein", id: 0x4, conformance: "FGP" }),
                Field({ name: "Face", id: 0x5, conformance: "FACE" })
            ]
        }),

        Datatype({
            name: "DataOperationTypeEnum", type: "enum8", conformance: "M",
            details: "The DataOperationType enum shall indicate the data operation performed.",
            xref: { document: "cluster", section: "5.2.6.5" },
            children: [
                Field({ name: "Add", id: 0x0, conformance: "M", description: "Data is being added or was added" }),
                Field({ name: "Clear", id: 0x1, conformance: "M", description: "Data is being cleared or was cleared" }),
                Field({ name: "Modify", id: 0x2, conformance: "M", description: "Data is being modified or was modified" })
            ]
        }),

        Datatype({
            name: "DaysMaskMap", type: "map8", conformance: "M",
            details: "The DaysMask field used in various commands and shall indicate the days of the week the Week Day " +
                "schedule applies for.",
            xref: { document: "cluster", section: "5.2.6.6" },

            children: [
                Field({ name: "Sunday", constraint: "0" }),
                Field({ name: "Monday", constraint: "1" }),
                Field({ name: "Tuesday", constraint: "2" }),
                Field({ name: "Wednesday", constraint: "3" }),
                Field({ name: "Thursday", constraint: "4" }),
                Field({ name: "Friday", constraint: "5" }),
                Field({ name: "Saturday", constraint: "6" })
            ]
        }),

        Datatype({
            name: "DoorStateEnum", type: "enum8", conformance: "M",
            details: "The DoorState enumeration shall indicate the current door state. The data type of the DoorState" +
                "\n" +
                "enum field is derived from enum8.",
            xref: { document: "cluster", section: "5.2.6.7" },

            children: [
                Field({ name: "DoorOpen", id: 0x0, conformance: "DPS", description: "Door state is open" }),
                Field({ name: "DoorClosed", id: 0x1, conformance: "DPS", description: "Door state is closed" }),
                Field({ name: "DoorJammed", id: 0x2, conformance: "[DPS]", description: "Door state is jammed" }),
                Field({
                    name: "DoorForcedOpen", id: 0x3, conformance: "[DPS]",
                    description: "Door state is currently forced open"
                }),
                Field({
                    name: "DoorUnspecifiedError", id: 0x4, conformance: "[DPS]",
                    description: "Door state is invalid for unspecified reason"
                }),
                Field({ name: "DoorAjar", id: 0x5, conformance: "[DPS]", description: "Door state is ajar" })
            ]
        }),

        Datatype({
            name: "DoorLockStatus", type: "status",
            details: "The cluster-specific status codes for the Door Lock cluster are as follows:",
            xref: { document: "cluster", section: "5.2.6.8" }
        }),

        Datatype({
            name: "LockDataTypeEnum", type: "enum8", conformance: "M",
            details: "The LockDataType enum shall indicate the data type that is being or has changed.",
            xref: { document: "cluster", section: "5.2.6.9" },

            children: [
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
                })
            ]
        }),

        Datatype({
            name: "LockOperationTypeEnum", type: "enum8", conformance: "M",
            details: "The LockOperationType enumeration shall indicate the type of Lock operation performed.",
            xref: { document: "cluster", section: "5.2.6.10" },

            children: [
                Field({ name: "Lock", id: 0x0, conformance: "M" }),
                Field({ name: "Unlock", id: 0x1, conformance: "M" }),
                Field({ name: "NonAccessUserEvent", id: 0x2, conformance: "O" }),
                Field({ name: "ForcedUserEvent", id: 0x3, conformance: "O" })
            ]
        }),

        Datatype({
            name: "OperationErrorEnum", type: "enum8", conformance: "M",
            details: "The OperationError enumeration shall indicate the error cause of the Lock/Unlock operation " +
                "performed.",
            xref: { document: "cluster", section: "5.2.6.11" },

            children: [
                Field({ name: "Unspecified", id: 0x0, conformance: "O" }),
                Field({ name: "InvalidCredential", id: 0x1, conformance: "USR" }),
                Field({ name: "DisabledUserDenied", id: 0x2, conformance: "M" }),
                Field({ name: "Restricted", id: 0x3, conformance: "WDSCH | YDSCH" }),
                Field({ name: "InsufficientBattery", id: 0x4, conformance: "O" })
            ]
        }),

        Datatype({
            name: "OperatingModeEnum", type: "enum8", conformance: "M",

            details: "The OperatingMode enumeration shall indicate the lock operating mode." +
                "\n" +
                "The table below shows the operating mode and which interfaces are enabled, if supported, for each " +
                "mode." +
                "\n" +
                "Note: For modes that disable the remote interface, the door lock shall respond to Lock, Unlock, " +
                "Toggle, and Unlock with Timeout commands with a response status Failure and not take the action " +
                "requested by those commands. The door lock shall NOT disable the radio or otherwise unbind or leave " +
                "the network. It shall still respond to all other commands and requests.",

            xref: { document: "cluster", section: "5.2.6.12" },

            children: [
                Field({
                    name: "Normal", id: 0x0, conformance: "M",
                    details: "The lock operates normally. All interfaces are enabled.",
                    xref: { document: "cluster", section: "5.2.6.12.1" }
                }),
                Field({
                    name: "Vacation", id: 0x1, conformance: "O",
                    details: "Only remote interaction is enabled. The keypad shall only be operable by the master user.",
                    xref: { document: "cluster", section: "5.2.6.12.2" }
                }),

                Field({
                    name: "Privacy", id: 0x2, conformance: "O",
                    details: "This mode is only possible if the door is locked. Manual unlocking changes the mode to Normal " +
                        "operating mode. All external interaction with the door lock is disabled. This mode is intended to " +
                        "be used so that users, presumably inside the property, will have control over the entrance.",
                    xref: { document: "cluster", section: "5.2.6.12.3" }
                }),

                Field({
                    name: "NoRemoteLockUnlock", id: 0x3, conformance: "M",
                    details: "This mode only disables remote interaction with the lock. This does not apply to any remote " +
                        "proprietary means of communication. It specifically applies to the Lock, Unlock, Toggle, and Unlock " +
                        "with Timeout Commands.",
                    xref: { document: "cluster", section: "5.2.6.12.4" }
                }),

                Field({
                    name: "Passage", id: 0x4, conformance: "O",
                    details: "The lock is open or can be opened or closed at will without the use of a Keypad or other means of " +
                        "user validation (e.g. a lock for a business during work hours).",
                    xref: { document: "cluster", section: "5.2.6.12.5" }
                })
            ]
        }),

        Datatype({
            name: "OperationSourceEnum", type: "enum8", conformance: "M",

            details: "The OperationSource enumeration shall indicate the source of the Lock/Unlock operation performed." +
                "\n" +
                "5.2.6.14. PIN/RFID Code Format" +
                "\n" +
                "The PIN/RFID codes defined in this specification are all octet strings." +
                "\n" +
                "All value in the PIN/RFID code shall be ASCII encoded regardless if the PIN/RFID codes are number " +
                "or characters. For example, code of “1, 2, 3, 4” shall be represented as 0x31, 0x32, 0x33, 0x34.",

            xref: { document: "cluster", section: "5.2.6.13" },

            children: [
                Field({ name: "Unspecified", id: 0x0, conformance: "O" }),
                Field({ name: "Manual", id: 0x1, conformance: "O" }),
                Field({ name: "ProprietaryRemote", id: 0x2, conformance: "O" }),
                Field({ name: "Keypad", id: 0x3, conformance: "O" }),
                Field({ name: "Auto", id: 0x4, conformance: "O" }),
                Field({ name: "Button", id: 0x5, conformance: "O" }),
                Field({ name: "Schedule", id: 0x6, conformance: "HDSCH" }),
                Field({ name: "Remote", id: 0x7, conformance: "M" }),
                Field({ name: "Rfid", id: 0x8, conformance: "RID" }),
                Field({ name: "Biometric", id: 0x9, conformance: "[USR]" })
            ]
        }),

        Datatype({
            name: "UserStatusEnum", type: "enum8", conformance: "M",
            details: "The UserStatus enum used in various commands shall indicate what the status is for a specific user " +
                "ID.",
            xref: { document: "cluster", section: "5.2.6.15" },
            children: [
                Field({ name: "Available", id: 0x0, conformance: "M" }),
                Field({ name: "OccupiedEnabled", id: 0x1, conformance: "M" }),
                Field({ name: "OccupiedDisabled", id: 0x3, conformance: "O" })
            ]
        }),

        Datatype({
            name: "UserTypeEnum", type: "enum8", conformance: "M",
            details: "The UserType enum used in various commands shall indicate what the type is for a specific user ID.",
            xref: { document: "cluster", section: "5.2.6.16" },

            children: [
                Field({
                    name: "UnrestrictedUser", id: 0x0, conformance: "M",
                    details: "User has access 24/7 provided proper PIN or RFID is supplied (e.g., owner).",
                    xref: { document: "cluster", section: "5.2.6.16.1" }
                }),
                Field({
                    name: "YearDayScheduleUser", id: 0x1, conformance: "O",
                    details: "User has ability to open lock within a specific time period (e.g., guest).",
                    xref: { document: "cluster", section: "5.2.6.16.2" }
                }),

                Field({
                    name: "WeekDayScheduleUser", id: 0x2, conformance: "O",
                    details: "User has ability to open lock based on specific time period within a reoccurring weekly schedule " +
                        "(e.g., cleaning worker).",
                    xref: { document: "cluster", section: "5.2.6.16.3" }
                }),

                Field({
                    name: "ProgrammingUser", id: 0x3, conformance: "O",
                    details: "User has ability to both program and operate the door lock. This user can manage the users and user " +
                        "schedules. In all other respects this user matches the unrestricted (default) user. ProgrammingUser " +
                        "is the only user that can disable the user interface (keypad, remote, etc…).",
                    xref: { document: "cluster", section: "5.2.6.16.4" }
                }),

                Field({
                    name: "NonAccessUser", id: 0x4, conformance: "O",
                    details: "User is recognized by the lock but does not have the ability to open the lock. This user will only " +
                        "cause the lock to generate the appropriate event notification to any bound devices.",
                    xref: { document: "cluster", section: "5.2.6.16.5" }
                }),

                Field({
                    name: "ForcedUser", id: 0x5, conformance: "[USR]",
                    details: "User has ability to open lock but a ForcedUser LockOperationType and ForcedUser silent alarm will " +
                        "be emitted to allow a notified Node to alert emergency services or contacts on the user account " +
                        "when used.",
                    xref: { document: "cluster", section: "5.2.6.16.6" }
                }),

                Field({
                    name: "DisposableUser", id: 0x6, conformance: "[USR]",
                    details: "User has ability to open lock once after which the lock shall change the corresponding user record " +
                        "UserStatus value to OccupiedDisabled automatically.",
                    xref: { document: "cluster", section: "5.2.6.16.7" }
                }),

                Field({
                    name: "ExpiringUser", id: 0x7, conformance: "[USR]",
                    details: "User has ability to open lock for ExpiringUserTimeout attribute minutes after the first use of the " +
                        "PIN code, RFID code, Fingerprint, or other credential. After ExpiringUserTimeout minutes the " +
                        "corresponding user record UserStatus value shall be set to OccupiedDisabled automatically by the " +
                        "lock. The lock shall persist the timeout across reboots such that the ExpiringUserTimeout is " +
                        "honored.",
                    xref: { document: "cluster", section: "5.2.6.16.8" }
                }),

                Field({
                    name: "ScheduleRestrictedUser", id: 0x8, conformance: "WDSCH | YDSCH",
                    details: "User access is restricted by Week Day and/or Year Day schedule.",
                    xref: { document: "cluster", section: "5.2.6.16.9" }
                }),

                Field({
                    name: "RemoteOnlyUser", id: 0x9, conformance: "USR & COTA & PIN",
                    details: "User access and PIN code is restricted to remote lock/unlock commands only. This type of user might " +
                        "be useful for regular delivery services or voice assistant unlocking operations to prevent a PIN " +
                        "code credential created for them from being used at the keypad. The PIN code credential would only " +
                        "be provided over-the-air for the lock/unlock commands.",
                    xref: { document: "cluster", section: "5.2.6.16.10" }
                })
            ]
        }),

        Datatype({
            name: "DlStatus", type: "enum8", conformance: "M",

            children: [
                Field({ name: "Success", id: 0x0, conformance: "M" }),
                Field({ name: "Failure", id: 0x1, conformance: "M" }),
                Field({ name: "Duplicate", id: 0x2, conformance: "M" }),
                Field({ name: "Occupied", id: 0x3, conformance: "M" }),
                Field({ name: "InvalidField", id: 0x85, conformance: "M" }),
                Field({ name: "ResourceExhausted", id: 0x89, conformance: "M" }),
                Field({ name: "NotFound", id: 0x8b, conformance: "M" })
            ]
        })
    ]
}));
