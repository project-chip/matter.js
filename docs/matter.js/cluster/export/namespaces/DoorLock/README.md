[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / DoorLock

# Namespace: DoorLock

## Index

### Enumerations

- [AlarmCode](enumerations/AlarmCode.md)
- [CredentialRule](enumerations/CredentialRule.md)
- [CredentialType](enumerations/CredentialType.md)
- [DataOperationType](enumerations/DataOperationType.md)
- [DlStatus](enumerations/DlStatus.md)
- [DoorState](enumerations/DoorState.md)
- [Feature](enumerations/Feature.md)
- [LockDataType](enumerations/LockDataType.md)
- [LockOperationType](enumerations/LockOperationType.md)
- [LockState](enumerations/LockState.md)
- [LockType](enumerations/LockType.md)
- [OperatingMode](enumerations/OperatingMode.md)
- [OperationError](enumerations/OperationError.md)
- [OperationSource](enumerations/OperationSource.md)
- [UserStatus](enumerations/UserStatus.md)
- [UserType](enumerations/UserType.md)

### Interfaces

- [ClearCredentialRequest](interfaces/ClearCredentialRequest.md)
- [ClearHolidayScheduleRequest](interfaces/ClearHolidayScheduleRequest.md)
- [ClearUserRequest](interfaces/ClearUserRequest.md)
- [ClearWeekDayScheduleRequest](interfaces/ClearWeekDayScheduleRequest.md)
- [ClearYearDayScheduleRequest](interfaces/ClearYearDayScheduleRequest.md)
- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [CredentialStruct](interfaces/CredentialStruct.md)
- [DoorLockAlarmEvent](interfaces/DoorLockAlarmEvent.md)
- [DoorStateChangeEvent](interfaces/DoorStateChangeEvent.md)
- [GetCredentialStatusRequest](interfaces/GetCredentialStatusRequest.md)
- [GetCredentialStatusResponse](interfaces/GetCredentialStatusResponse.md)
- [GetHolidayScheduleRequest](interfaces/GetHolidayScheduleRequest.md)
- [GetHolidayScheduleResponse](interfaces/GetHolidayScheduleResponse.md)
- [GetUserRequest](interfaces/GetUserRequest.md)
- [GetUserResponse](interfaces/GetUserResponse.md)
- [GetWeekDayScheduleRequest](interfaces/GetWeekDayScheduleRequest.md)
- [GetWeekDayScheduleResponse](interfaces/GetWeekDayScheduleResponse.md)
- [GetYearDayScheduleRequest](interfaces/GetYearDayScheduleRequest.md)
- [GetYearDayScheduleResponse](interfaces/GetYearDayScheduleResponse.md)
- [LockDoorRequest](interfaces/LockDoorRequest.md)
- [LockOperationErrorEvent](interfaces/LockOperationErrorEvent.md)
- [LockOperationEvent](interfaces/LockOperationEvent.md)
- [LockUserChangeEvent](interfaces/LockUserChangeEvent.md)
- [SetCredentialRequest](interfaces/SetCredentialRequest.md)
- [SetCredentialResponse](interfaces/SetCredentialResponse.md)
- [SetHolidayScheduleRequest](interfaces/SetHolidayScheduleRequest.md)
- [SetUserRequest](interfaces/SetUserRequest.md)
- [SetWeekDayScheduleRequest](interfaces/SetWeekDayScheduleRequest.md)
- [SetYearDayScheduleRequest](interfaces/SetYearDayScheduleRequest.md)
- [UnlockDoorRequest](interfaces/UnlockDoorRequest.md)
- [UnlockWithTimeoutRequest](interfaces/UnlockWithTimeoutRequest.md)

## Variables

### AlarmMask

> `const` **AlarmMask**: `object`

The value of the DoorLock alarmMask attribute

#### See

MatterSpecification.v11.Cluster § 5.2.3.39

#### Type declaration

##### forcedDoorOpenUnderDoorLockedCondition

> **forcedDoorOpenUnderDoorLockedCondition**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### lockResetToFactoryDefaults

> **lockResetToFactoryDefaults**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### lockingMechanismJammed

> **lockingMechanismJammed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### reserved

> **reserved**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### rfModulePowerCycled

> **rfModulePowerCycled**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### tamperAlarmFrontEscutcheonRemovedFromMain

> **tamperAlarmFrontEscutcheonRemovedFromMain**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### tamperAlarmWrongCodeEntryLimit

> **tamperAlarmWrongCodeEntryLimit**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1106)

***

### Base

> `const` **Base**: `object`

These elements and properties are present in all DoorLock clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.actuatorEnabled

> `readonly` **actuatorEnabled**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to
(Disabled) process remote Lock, Unlock, or Unlock with Timeout commands.

###### See

MatterSpecification.v11.Cluster § 5.2.3.3

##### attributes.alarmMask

> `readonly` **alarmMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is used
to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the associated
alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be turned on or
off by setting or clearing the associated bit in the alarm mask.

This mask DOES NOT apply to the Events mechanism of this cluster.

###### See

MatterSpecification.v11.Cluster § 5.2.3.39

##### attributes.autoRelockTime

> `readonly` **autoRelockTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. If
set, unlock operations from any source will be timed. For one time unlock with timeout use the specific
command.

###### See

MatterSpecification.v11.Cluster § 5.2.3.26

##### attributes.defaultConfigurationRegister

> `readonly` **defaultConfigurationRegister**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute represents the default configurations as they are physically set on the device (example:
hardware dip switch setting, etc…) and represents the default setting for some of the attributes within
this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode attributes).

This is a read-only attribute and is intended to allow clients to determine what changes may need to be
made without having to query all the included attributes. It may be beneficial for the clients to know
what the device’s original settings were in the event that the device needs to be restored to factory
default settings.

If the Client device would like to query and modify the door lock server’s operating settings, it SHOULD
send read and write attribute requests to the specific attributes.

For example, the Sound Volume attribute default value is Silent Mode. However, it is possible that the
current Sound Volume is High Volume. Therefore, if the client wants to query/modify the current Sound
Volume setting on the server, the client SHOULD read/write to the Sound Volume attribute.

###### See

MatterSpecification.v11.Cluster § 5.2.3.28

##### attributes.enableInsideStatusLed

> `readonly` **enableInsideStatusLed**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable an inside LED that allows the user to see at a glance if the door is locked.

###### See

MatterSpecification.v11.Cluster § 5.2.3.31

##### attributes.enableLocalProgramming

> `readonly` **enableLocalProgramming**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures
attribute). If this value is set to TRUE then local programming is enabled on the door lock for all
features. If it is set to FALSE then local programming is disabled on the door lock for those features
whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming shall be enabled by
default.

###### See

MatterSpecification.v11.Cluster § 5.2.3.29

##### attributes.enableOneTouchLocking

> `readonly` **enableOneTouchLocking**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable the ability to lock the door lock with a single touch on the door lock.

###### See

MatterSpecification.v11.Cluster § 5.2.3.30

##### attributes.enablePrivacyModeButton

> `readonly` **enablePrivacyModeButton**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable a button inside the door that is used to put the lock into privacy mode. When the lock is
in privacy mode it cannot be manipulated from the outside.

###### See

MatterSpecification.v11.Cluster § 5.2.3.32

##### attributes.language

> `readonly` **language**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`string`, `any`\>

Modifies the language for the on-screen or audible user interface using a 2-byte language code from
ISO-639-1.

###### See

MatterSpecification.v11.Cluster § 5.2.3.22

##### attributes.ledSettings

> `readonly` **ledSettings**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The settings for the LED support three different modes

###### See

MatterSpecification.v11.Cluster § 5.2.3.25

##### attributes.localProgrammingFeatures

> `readonly` **localProgrammingFeatures**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The local programming features that will be disabled when EnableLocalProgramming attribute is set to
False. If a door lock doesn’t support disabling one aspect of local programming it shall return
CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming attribute is
set to True then all local programming features shall be enabled regardless of the bits set to 0 in this
attribute.

The features that can be disabled from local programming are defined in the following bitmap.

###### See

MatterSpecification.v11.Cluster § 5.2.3.33

##### attributes.lockState

> `readonly` **lockState**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`LockState`](enumerations/LockState.md), `any`\>

The LockState Attribute may be NULL if the lock hardware does not currently know the status of the
locking mechanism. For example, a lock may not know the LockState status after a power cycle until the
first lock actuation is completed.

The Not Fully Locked value is used by a lock to indicate that the state of the lock is somewhere between
Locked and Unlocked so it is only partially secured. For example, a deadbolt could be partially extended
and not in a dead latched state.

If the Scenes server cluster is implemented on the same endpoint, the following extension field shall be
added to the Scene Table:

  • LockState

When the LockState attribute is part of a Scene table, the attribute is treated as a writable command;
that is, setting the LockState to lock will command the lock to lock, and setting the LockState to
unlock will command the lock to unlock. Setting the LockState attribute to “not fully locked” is not
supported. The Transition Time field in the Scene table will be treated as a delay before setting the
LockState attribute; that is, it is possible to activate a scene with the lock actuation some seconds
later.

Locks that do not have an actuation mechanism SHOULD not support the Scene table extension.

###### See

MatterSpecification.v11.Cluster § 5.2.3.1

##### attributes.lockType

> `readonly` **lockType**: [`Attribute`](../../interfaces/Attribute.md)\<[`LockType`](enumerations/LockType.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.3.2

##### attributes.operatingMode

> `readonly` **operatingMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`OperatingMode`](enumerations/OperatingMode.md), `any`\>

The current operating mode of the lock (see OperatingModeEnum).

###### See

MatterSpecification.v11.Cluster § 5.2.3.23

##### attributes.soundVolume

> `readonly` **soundVolume**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The sound volume on a door lock has four possible settings: silent, low, high and medium volumes

###### See

MatterSpecification.v11.Cluster § 5.2.3.27

##### attributes.supportedOperatingModes

> `readonly` **supportedOperatingModes**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All
operating modes NOT supported by a lock shall be set to one. The value of the OperatingMode enumeration
defines the related bit to be set, as

###### See

MatterSpecification.v11.Cluster § 5.2.3.24

##### commands

> `readonly` **commands**: `object`

##### commands.lockDoor

> `readonly` **lockDoor**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.unlockDoor

> `readonly` **unlockDoor**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.unlockWithTimeout

> `readonly` **unlockWithTimeout**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### events

> `readonly` **events**: `object`

##### events.doorLockAlarm

> `readonly` **doorLockAlarm**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock cluster provides several alarms which can be sent when there is a critical state on the
door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum section below.

###### See

MatterSpecification.v11.Cluster § 5.2.5.1

##### events.lockOperation

> `readonly` **lockOperation**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a LockOperation event when the event is triggered by the various lock
operation sources.

###### See

MatterSpecification.v11.Cluster § 5.2.5.3

##### events.lockOperationError

> `readonly` **lockOperationError**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a LockOperationError event when a lock operation fails for various
reasons.

###### See

MatterSpecification.v11.Cluster § 5.2.5.4

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which DoorLockCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.credentialOverTheAirAccess

> `readonly` **credentialOverTheAirAccess**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

CredentialOverTheAirAccess

PIN codes over- the-air supported for lock/unlock operations

##### features.doorPositionSensor

> `readonly` **doorPositionSensor**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

DoorPositionSensor

Lock supports a door position sensor that indicates door’s state

##### features.faceCredentials

> `readonly` **faceCredentials**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

FaceCredentials

Lock supports face related credentials (face, iris, retina)

##### features.fingerCredentials

> `readonly` **fingerCredentials**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

FingerCredentials

Lock supports finger related credentials (fingerprint, finger vein)

##### features.holidaySchedules

> `readonly` **holidaySchedules**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

HolidaySchedules

Lock supports holiday schedules

##### features.logging

> `readonly` **logging**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Logging

Lock supports local/on-lock logging when Events are not supported

##### features.notification

> `readonly` **notification**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Notification

Operation and Programming Notifications

##### features.pinCredential

> `readonly` **pinCredential**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PinCredential

Lock supports PIN credentials (via keypad, or over- the-air)

##### features.rfidCredential

> `readonly` **rfidCredential**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

RfidCredential

Lock supports RFID credentials

##### features.user

> `readonly` **user**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

User

Lock supports the user commands and database

##### features.weekDayAccessSchedules

> `readonly` **weekDayAccessSchedules**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

WeekDayAccessSchedules

Lock supports week day user access schedules

##### features.yearDayAccessSchedules

> `readonly` **yearDayAccessSchedules**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

YearDayAccessSchedules

Lock supports year day user access schedules

##### id

> `readonly` **id**: `257` = `0x101`

##### name

> `readonly` **name**: `"DoorLock"` = `"DoorLock"`

##### revision

> `readonly` **revision**: `6` = `6`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2262)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2668](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2668)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.actuatorEnabled

> `readonly` **actuatorEnabled**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to
(Disabled) process remote Lock, Unlock, or Unlock with Timeout commands.

###### See

MatterSpecification.v11.Cluster § 5.2.3.3

##### attributes.alarmMask

> `readonly` **alarmMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is used
to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the associated
alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be turned on or
off by setting or clearing the associated bit in the alarm mask.

This mask DOES NOT apply to the Events mechanism of this cluster.

###### See

MatterSpecification.v11.Cluster § 5.2.3.39

##### attributes.autoRelockTime

> `readonly` **autoRelockTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. If
set, unlock operations from any source will be timed. For one time unlock with timeout use the specific
command.

###### See

MatterSpecification.v11.Cluster § 5.2.3.26

##### attributes.defaultConfigurationRegister

> `readonly` **defaultConfigurationRegister**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute represents the default configurations as they are physically set on the device (example:
hardware dip switch setting, etc…) and represents the default setting for some of the attributes within
this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode attributes).

This is a read-only attribute and is intended to allow clients to determine what changes may need to be
made without having to query all the included attributes. It may be beneficial for the clients to know
what the device’s original settings were in the event that the device needs to be restored to factory
default settings.

If the Client device would like to query and modify the door lock server’s operating settings, it SHOULD
send read and write attribute requests to the specific attributes.

For example, the Sound Volume attribute default value is Silent Mode. However, it is possible that the
current Sound Volume is High Volume. Therefore, if the client wants to query/modify the current Sound
Volume setting on the server, the client SHOULD read/write to the Sound Volume attribute.

###### See

MatterSpecification.v11.Cluster § 5.2.3.28

##### attributes.enableInsideStatusLed

> `readonly` **enableInsideStatusLed**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable an inside LED that allows the user to see at a glance if the door is locked.

###### See

MatterSpecification.v11.Cluster § 5.2.3.31

##### attributes.enableLocalProgramming

> `readonly` **enableLocalProgramming**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures
attribute). If this value is set to TRUE then local programming is enabled on the door lock for all
features. If it is set to FALSE then local programming is disabled on the door lock for those features
whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming shall be enabled by
default.

###### See

MatterSpecification.v11.Cluster § 5.2.3.29

##### attributes.enableOneTouchLocking

> `readonly` **enableOneTouchLocking**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable the ability to lock the door lock with a single touch on the door lock.

###### See

MatterSpecification.v11.Cluster § 5.2.3.30

##### attributes.enablePrivacyModeButton

> `readonly` **enablePrivacyModeButton**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable a button inside the door that is used to put the lock into privacy mode. When the lock is
in privacy mode it cannot be manipulated from the outside.

###### See

MatterSpecification.v11.Cluster § 5.2.3.32

##### attributes.language

> `readonly` **language**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`string`, `any`\>

Modifies the language for the on-screen or audible user interface using a 2-byte language code from
ISO-639-1.

###### See

MatterSpecification.v11.Cluster § 5.2.3.22

##### attributes.ledSettings

> `readonly` **ledSettings**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The settings for the LED support three different modes

###### See

MatterSpecification.v11.Cluster § 5.2.3.25

##### attributes.localProgrammingFeatures

> `readonly` **localProgrammingFeatures**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The local programming features that will be disabled when EnableLocalProgramming attribute is set to
False. If a door lock doesn’t support disabling one aspect of local programming it shall return
CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming attribute is
set to True then all local programming features shall be enabled regardless of the bits set to 0 in this
attribute.

The features that can be disabled from local programming are defined in the following bitmap.

###### See

MatterSpecification.v11.Cluster § 5.2.3.33

##### attributes.lockState

> `readonly` **lockState**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`LockState`](enumerations/LockState.md), `any`\>

The LockState Attribute may be NULL if the lock hardware does not currently know the status of the
locking mechanism. For example, a lock may not know the LockState status after a power cycle until the
first lock actuation is completed.

The Not Fully Locked value is used by a lock to indicate that the state of the lock is somewhere between
Locked and Unlocked so it is only partially secured. For example, a deadbolt could be partially extended
and not in a dead latched state.

If the Scenes server cluster is implemented on the same endpoint, the following extension field shall be
added to the Scene Table:

  • LockState

When the LockState attribute is part of a Scene table, the attribute is treated as a writable command;
that is, setting the LockState to lock will command the lock to lock, and setting the LockState to
unlock will command the lock to unlock. Setting the LockState attribute to “not fully locked” is not
supported. The Transition Time field in the Scene table will be treated as a delay before setting the
LockState attribute; that is, it is possible to activate a scene with the lock actuation some seconds
later.

Locks that do not have an actuation mechanism SHOULD not support the Scene table extension.

###### See

MatterSpecification.v11.Cluster § 5.2.3.1

##### attributes.lockType

> `readonly` **lockType**: [`Attribute`](../../interfaces/Attribute.md)\<[`LockType`](enumerations/LockType.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.3.2

##### attributes.operatingMode

> `readonly` **operatingMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`OperatingMode`](enumerations/OperatingMode.md), `any`\>

The current operating mode of the lock (see OperatingModeEnum).

###### See

MatterSpecification.v11.Cluster § 5.2.3.23

##### attributes.soundVolume

> `readonly` **soundVolume**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The sound volume on a door lock has four possible settings: silent, low, high and medium volumes

###### See

MatterSpecification.v11.Cluster § 5.2.3.27

##### attributes.supportedOperatingModes

> `readonly` **supportedOperatingModes**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All
operating modes NOT supported by a lock shall be set to one. The value of the OperatingMode enumeration
defines the related bit to be set, as

###### See

MatterSpecification.v11.Cluster § 5.2.3.24

##### commands

> `readonly` **commands**: `object`

##### commands.lockDoor

> `readonly` **lockDoor**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.unlockDoor

> `readonly` **unlockDoor**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.unlockWithTimeout

> `readonly` **unlockWithTimeout**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### events

> `readonly` **events**: `object`

##### events.doorLockAlarm

> `readonly` **doorLockAlarm**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock cluster provides several alarms which can be sent when there is a critical state on the
door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum section below.

###### See

MatterSpecification.v11.Cluster § 5.2.5.1

##### events.lockOperation

> `readonly` **lockOperation**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a LockOperation event when the event is triggered by the various lock
operation sources.

###### See

MatterSpecification.v11.Cluster § 5.2.5.3

##### events.lockOperationError

> `readonly` **lockOperationError**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a LockOperationError event when a lock operation fails for various
reasons.

###### See

MatterSpecification.v11.Cluster § 5.2.5.4

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which DoorLockCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.credentialOverTheAirAccess

> `readonly` **credentialOverTheAirAccess**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

CredentialOverTheAirAccess

PIN codes over- the-air supported for lock/unlock operations

##### features.doorPositionSensor

> `readonly` **doorPositionSensor**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

DoorPositionSensor

Lock supports a door position sensor that indicates door’s state

##### features.faceCredentials

> `readonly` **faceCredentials**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

FaceCredentials

Lock supports face related credentials (face, iris, retina)

##### features.fingerCredentials

> `readonly` **fingerCredentials**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

FingerCredentials

Lock supports finger related credentials (fingerprint, finger vein)

##### features.holidaySchedules

> `readonly` **holidaySchedules**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

HolidaySchedules

Lock supports holiday schedules

##### features.logging

> `readonly` **logging**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Logging

Lock supports local/on-lock logging when Events are not supported

##### features.notification

> `readonly` **notification**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Notification

Operation and Programming Notifications

##### features.pinCredential

> `readonly` **pinCredential**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PinCredential

Lock supports PIN credentials (via keypad, or over- the-air)

##### features.rfidCredential

> `readonly` **rfidCredential**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

RfidCredential

Lock supports RFID credentials

##### features.user

> `readonly` **user**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

User

Lock supports the user commands and database

##### features.weekDayAccessSchedules

> `readonly` **weekDayAccessSchedules**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

WeekDayAccessSchedules

Lock supports week day user access schedules

##### features.yearDayAccessSchedules

> `readonly` **yearDayAccessSchedules**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

YearDayAccessSchedules

Lock supports year day user access schedules

##### id

> `readonly` **id**: `257` = `0x101`

##### name

> `readonly` **name**: `"DoorLock"` = `"DoorLock"`

##### revision

> `readonly` **revision**: `6` = `6`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2657](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2657)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2937](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2937)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of client generated commands which are supported by this cluster server instance.

##### attributes.actuatorEnabled

> `readonly` **actuatorEnabled**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to
(Disabled) process remote Lock, Unlock, or Unlock with Timeout commands.

###### See

MatterSpecification.v11.Cluster § 5.2.3.3

##### attributes.alarmMask

> `readonly` **alarmMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is used
to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the associated
alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be turned on or
off by setting or clearing the associated bit in the alarm mask.

This mask DOES NOT apply to the Events mechanism of this cluster.

###### See

MatterSpecification.v11.Cluster § 5.2.3.39

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### attributes.autoRelockTime

> `readonly` **autoRelockTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. If
set, unlock operations from any source will be timed. For one time unlock with timeout use the specific
command.

###### See

MatterSpecification.v11.Cluster § 5.2.3.26

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.credentialRulesSupport

> `readonly` **credentialRulesSupport**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.defaultConfigurationRegister

> `readonly` **defaultConfigurationRegister**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute represents the default configurations as they are physically set on the device (example:
hardware dip switch setting, etc…) and represents the default setting for some of the attributes within
this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode attributes).

This is a read-only attribute and is intended to allow clients to determine what changes may need to be
made without having to query all the included attributes. It may be beneficial for the clients to know
what the device’s original settings were in the event that the device needs to be restored to factory
default settings.

If the Client device would like to query and modify the door lock server’s operating settings, it SHOULD
send read and write attribute requests to the specific attributes.

For example, the Sound Volume attribute default value is Silent Mode. However, it is possible that the
current Sound Volume is High Volume. Therefore, if the client wants to query/modify the current Sound
Volume setting on the server, the client SHOULD read/write to the Sound Volume attribute.

###### See

MatterSpecification.v11.Cluster § 5.2.3.28

##### attributes.doorClosedEvents

> `readonly` **doorClosedEvents**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.doorOpenEvents

> `readonly` **doorOpenEvents**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.doorState

> `readonly` **doorState**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`DoorState`](enumerations/DoorState.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.enableInsideStatusLed

> `readonly` **enableInsideStatusLed**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable an inside LED that allows the user to see at a glance if the door is locked.

###### See

MatterSpecification.v11.Cluster § 5.2.3.31

##### attributes.enableLocalProgramming

> `readonly` **enableLocalProgramming**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures
attribute). If this value is set to TRUE then local programming is enabled on the door lock for all
features. If it is set to FALSE then local programming is disabled on the door lock for those features
whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming shall be enabled by
default.

###### See

MatterSpecification.v11.Cluster § 5.2.3.29

##### attributes.enableLogging

> `readonly` **enableLogging**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.enableOneTouchLocking

> `readonly` **enableOneTouchLocking**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable the ability to lock the door lock with a single touch on the door lock.

###### See

MatterSpecification.v11.Cluster § 5.2.3.30

##### attributes.enablePrivacyModeButton

> `readonly` **enablePrivacyModeButton**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable a button inside the door that is used to put the lock into privacy mode. When the lock is
in privacy mode it cannot be manipulated from the outside.

###### See

MatterSpecification.v11.Cluster § 5.2.3.32

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.expiringUserTimeout

> `readonly` **expiringUserTimeout**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.keypadOperationEventMask

> `readonly` **keypadOperationEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.keypadProgrammingEventMask

> `readonly` **keypadProgrammingEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.language

> `readonly` **language**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`string`, `any`\>

Modifies the language for the on-screen or audible user interface using a 2-byte language code from
ISO-639-1.

###### See

MatterSpecification.v11.Cluster § 5.2.3.22

##### attributes.ledSettings

> `readonly` **ledSettings**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The settings for the LED support three different modes

###### See

MatterSpecification.v11.Cluster § 5.2.3.25

##### attributes.localProgrammingFeatures

> `readonly` **localProgrammingFeatures**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The local programming features that will be disabled when EnableLocalProgramming attribute is set to
False. If a door lock doesn’t support disabling one aspect of local programming it shall return
CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming attribute is
set to True then all local programming features shall be enabled regardless of the bits set to 0 in this
attribute.

The features that can be disabled from local programming are defined in the following bitmap.

###### See

MatterSpecification.v11.Cluster § 5.2.3.33

##### attributes.lockState

> `readonly` **lockState**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`LockState`](enumerations/LockState.md), `any`\>

The LockState Attribute may be NULL if the lock hardware does not currently know the status of the
locking mechanism. For example, a lock may not know the LockState status after a power cycle until the
first lock actuation is completed.

The Not Fully Locked value is used by a lock to indicate that the state of the lock is somewhere between
Locked and Unlocked so it is only partially secured. For example, a deadbolt could be partially extended
and not in a dead latched state.

If the Scenes server cluster is implemented on the same endpoint, the following extension field shall be
added to the Scene Table:

  • LockState

When the LockState attribute is part of a Scene table, the attribute is treated as a writable command;
that is, setting the LockState to lock will command the lock to lock, and setting the LockState to
unlock will command the lock to unlock. Setting the LockState attribute to “not fully locked” is not
supported. The Transition Time field in the Scene table will be treated as a delay before setting the
LockState attribute; that is, it is possible to activate a scene with the lock actuation some seconds
later.

Locks that do not have an actuation mechanism SHOULD not support the Scene table extension.

###### See

MatterSpecification.v11.Cluster § 5.2.3.1

##### attributes.lockType

> `readonly` **lockType**: [`Attribute`](../../interfaces/Attribute.md)\<[`LockType`](enumerations/LockType.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.3.2

##### attributes.manualOperationEventMask

> `readonly` **manualOperationEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxPinCodeLength

> `readonly` **maxPinCodeLength**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.maxRfidCodeLength

> `readonly` **maxRfidCodeLength**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.minPinCodeLength

> `readonly` **minPinCodeLength**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.minRfidCodeLength

> `readonly` **minRfidCodeLength**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfCredentialsSupportedPerUser

> `readonly` **numberOfCredentialsSupportedPerUser**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfHolidaySchedulesSupported

> `readonly` **numberOfHolidaySchedulesSupported**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfLogRecordsSupported

> `readonly` **numberOfLogRecordsSupported**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfPinUsersSupported

> `readonly` **numberOfPinUsersSupported**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfRfidUsersSupported

> `readonly` **numberOfRfidUsersSupported**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfTotalUsersSupported

> `readonly` **numberOfTotalUsersSupported**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfWeekDaySchedulesSupportedPerUser

> `readonly` **numberOfWeekDaySchedulesSupportedPerUser**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfYearDaySchedulesSupportedPerUser

> `readonly` **numberOfYearDaySchedulesSupportedPerUser**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.openPeriod

> `readonly` **openPeriod**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.operatingMode

> `readonly` **operatingMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`OperatingMode`](enumerations/OperatingMode.md), `any`\>

The current operating mode of the lock (see OperatingModeEnum).

###### See

MatterSpecification.v11.Cluster § 5.2.3.23

##### attributes.remoteOperationEventMask

> `readonly` **remoteOperationEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.remoteProgrammingEventMask

> `readonly` **remoteProgrammingEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.requirePinForRemoteOperation

> `readonly` **requirePinForRemoteOperation**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.rfidOperationEventMask

> `readonly` **rfidOperationEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rfidProgrammingEventMask

> `readonly` **rfidProgrammingEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.sendPinOverTheAir

> `readonly` **sendPinOverTheAir**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.soundVolume

> `readonly` **soundVolume**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The sound volume on a door lock has four possible settings: silent, low, high and medium volumes

###### See

MatterSpecification.v11.Cluster § 5.2.3.27

##### attributes.supportedOperatingModes

> `readonly` **supportedOperatingModes**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All
operating modes NOT supported by a lock shall be set to one. The value of the OperatingMode enumeration
defines the related bit to be set, as

###### See

MatterSpecification.v11.Cluster § 5.2.3.24

##### attributes.userCodeTemporaryDisableTime

> `readonly` **userCodeTemporaryDisableTime**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.wrongCodeEntryLimit

> `readonly` **wrongCodeEntryLimit**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands

> `readonly` **commands**: `object`

##### commands.clearAllPinCodes

> `readonly` **clearAllPinCodes**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.clearAllRfidCodes

> `readonly` **clearAllRfidCodes**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.clearCredential

> `readonly` **clearCredential**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.clearHolidaySchedule

> `readonly` **clearHolidaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.clearPinCode

> `readonly` **clearPinCode**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.clearRfidCode

> `readonly` **clearRfidCode**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.clearUser

> `readonly` **clearUser**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.clearWeekDaySchedule

> `readonly` **clearWeekDaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.clearYearDaySchedule

> `readonly` **clearYearDaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.getCredentialStatus

> `readonly` **getCredentialStatus**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.getHolidaySchedule

> `readonly` **getHolidaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.getLogRecord

> `readonly` **getLogRecord**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.getPinCode

> `readonly` **getPinCode**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.getRfidCode

> `readonly` **getRfidCode**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.getUser

> `readonly` **getUser**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.getUserStatus

> `readonly` **getUserStatus**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.getUserType

> `readonly` **getUserType**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.getWeekDaySchedule

> `readonly` **getWeekDaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.getYearDaySchedule

> `readonly` **getYearDaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.lockDoor

> `readonly` **lockDoor**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.setCredential

> `readonly` **setCredential**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.setHolidaySchedule

> `readonly` **setHolidaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.setPinCode

> `readonly` **setPinCode**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.setRfidCode

> `readonly` **setRfidCode**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.setUser

> `readonly` **setUser**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.setUserStatus

> `readonly` **setUserStatus**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.setUserType

> `readonly` **setUserType**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.setWeekDaySchedule

> `readonly` **setWeekDaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.setYearDaySchedule

> `readonly` **setYearDaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.unlockDoor

> `readonly` **unlockDoor**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.unlockWithTimeout

> `readonly` **unlockWithTimeout**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### events

> `readonly` **events**: `object`

##### events.doorLockAlarm

> `readonly` **doorLockAlarm**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock cluster provides several alarms which can be sent when there is a critical state on the
door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum section below.

###### See

MatterSpecification.v11.Cluster § 5.2.5.1

##### events.doorStateChange

> `readonly` **doorStateChange**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### events.lockOperation

> `readonly` **lockOperation**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a LockOperation event when the event is triggered by the various lock
operation sources.

###### See

MatterSpecification.v11.Cluster § 5.2.5.3

##### events.lockOperationError

> `readonly` **lockOperationError**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a LockOperationError event when a lock operation fails for various
reasons.

###### See

MatterSpecification.v11.Cluster § 5.2.5.4

##### events.lockUserChange

> `readonly` **lockUserChange**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.credentialOverTheAirAccess

> `readonly` **credentialOverTheAirAccess**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

CredentialOverTheAirAccess

PIN codes over- the-air supported for lock/unlock operations

##### features.doorPositionSensor

> `readonly` **doorPositionSensor**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

DoorPositionSensor

Lock supports a door position sensor that indicates door’s state

##### features.faceCredentials

> `readonly` **faceCredentials**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

FaceCredentials

Lock supports face related credentials (face, iris, retina)

##### features.fingerCredentials

> `readonly` **fingerCredentials**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

FingerCredentials

Lock supports finger related credentials (fingerprint, finger vein)

##### features.holidaySchedules

> `readonly` **holidaySchedules**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

HolidaySchedules

Lock supports holiday schedules

##### features.logging

> `readonly` **logging**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Logging

Lock supports local/on-lock logging when Events are not supported

##### features.notification

> `readonly` **notification**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Notification

Operation and Programming Notifications

##### features.pinCredential

> `readonly` **pinCredential**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PinCredential

Lock supports PIN credentials (via keypad, or over- the-air)

##### features.rfidCredential

> `readonly` **rfidCredential**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

RfidCredential

Lock supports RFID credentials

##### features.user

> `readonly` **user**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

User

Lock supports the user commands and database

##### features.weekDayAccessSchedules

> `readonly` **weekDayAccessSchedules**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

WeekDayAccessSchedules

Lock supports week day user access schedules

##### features.yearDayAccessSchedules

> `readonly` **yearDayAccessSchedules**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

YearDayAccessSchedules

Lock supports year day user access schedules

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`257`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"DoorLock"` = `Cluster.name`

##### revision

> `readonly` **revision**: `6` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2690](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2690)

***

### CredentialOverTheAirAccessAndPinCredentialComponent

> `const` **CredentialOverTheAirAccessAndPinCredentialComponent**: `object`

A DoorLockCluster supports these elements if it supports features CredentialOverTheAirAccess and PinCredential.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.requirePinForRemoteOperation

> `readonly` **requirePinForRemoteOperation**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`boolean`, `any`\>

Boolean set to True if the door lock server requires that an optional PINs be included in the payload of
remote lock operation events like Lock, Unlock, Unlock with Timeout and Toggle in order to function.

###### See

MatterSpecification.v11.Cluster § 5.2.3.37

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1860](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1860)

***

### CredentialRulesSupport

> `const` **CredentialRulesSupport**: `object`

The value of the DoorLock credentialRulesSupport attribute

#### See

MatterSpecification.v11.Cluster § 5.2.3.19

#### Type declaration

##### dual

> **dual**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### single

> **single**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### tri

> **tri**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L103)

***

### DaysMaskMap

> `const` **DaysMaskMap**: `object`

The DaysMask field used in various commands and shall indicate the days of the week the Week Day schedule
applies for.

#### See

MatterSpecification.v11.Cluster § 5.2.6.6

#### Type declaration

##### friday

> **friday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### monday

> **monday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### saturday

> **saturday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### sunday

> **sunday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### thursday

> **thursday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### tuesday

> **tuesday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### wednesday

> **wednesday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:608](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L608)

***

### DefaultConfigurationRegister

> `const` **DefaultConfigurationRegister**: `object`

The value of the DoorLock defaultConfigurationRegister attribute

#### See

MatterSpecification.v11.Cluster § 5.2.3.28

#### Type declaration

##### autoRelockTimeSet

> **autoRelockTimeSet**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### enableLocalProgrammingEnabled

> **enableLocalProgrammingEnabled**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### keypadInterfaceDefaultAccessEnabled

> **keypadInterfaceDefaultAccessEnabled**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### ledSettingsSet

> **ledSettingsSet**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### remoteInterfaceDefaultAccessIsEnabled

> **remoteInterfaceDefaultAccessIsEnabled**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### soundEnabled

> **soundEnabled**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1080](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1080)

***

### DoorPositionSensorComponent

> `const` **DoorPositionSensorComponent**: `object`

A DoorLockCluster supports these elements if it supports feature DoorPositionSensor.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.doorClosedEvents

> `readonly` **doorClosedEvents**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute holds the number of door closed events that have occurred since it was last zeroed.

###### See

MatterSpecification.v11.Cluster § 5.2.3.6

##### attributes.doorOpenEvents

> `readonly` **doorOpenEvents**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute holds the number of door open events that have occurred since it was last zeroed.

###### See

MatterSpecification.v11.Cluster § 5.2.3.5

##### attributes.doorState

> `readonly` **doorState**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`DoorState`](enumerations/DoorState.md), `any`\>

The current door state as defined in DoorStateEnum.

This attribute shall be null only if an internal error prevents the retrieval of the current door state.

###### See

MatterSpecification.v11.Cluster § 5.2.3.4

##### attributes.openPeriod

> `readonly` **openPeriod**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute holds the number of minutes the door has been open since the last time it transitioned
from closed to open.

###### See

MatterSpecification.v11.Cluster § 5.2.3.7

##### events

> `readonly` **events**: `object`

##### events.doorStateChange

> `readonly` **doorStateChange**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a DoorStateChange event when the door lock door state changes.

###### See

MatterSpecification.v11.Cluster § 5.2.5.2

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1389](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1389)

***

### HolidaySchedulesComponent

> `const` **HolidaySchedulesComponent**: `object`

A DoorLockCluster supports these elements if it supports feature HolidaySchedules.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.numberOfHolidaySchedulesSupported

> `readonly` **numberOfHolidaySchedulesSupported**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

The number of holiday schedules supported for the entire door lock device.

###### See

MatterSpecification.v11.Cluster § 5.2.3.14

##### commands

> `readonly` **commands**: `object`

##### commands.clearHolidaySchedule

> `readonly` **clearHolidaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.getHolidaySchedule

> `readonly` **getHolidaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.setHolidaySchedule

> `readonly` **setHolidaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1770](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1770)

***

### KeypadOperationEventMask

> `const` **KeypadOperationEventMask**: `object`

The value of the DoorLock keypadOperationEventMask attribute

#### See

MatterSpecification.v11.Cluster § 5.2.3.40

#### Type declaration

##### lockSourceKeypad

> **lockSourceKeypad**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### lockSourceKeypadErrorInvalidPin

> **lockSourceKeypadErrorInvalidPin**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### lockSourceKeypadErrorInvalidSchedule

> **lockSourceKeypadErrorInvalidSchedule**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### nonAccessUserOperationEventSourceKeypad

> **nonAccessUserOperationEventSourceKeypad**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unknownOrManufacturerSpecificKeypadOperationEvent

> **unknownOrManufacturerSpecificKeypadOperationEvent**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unlockSourceKeypad

> **unlockSourceKeypad**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unlockSourceKeypadErrorInvalidCode

> **unlockSourceKeypadErrorInvalidCode**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unlockSourceKeypadErrorInvalidSchedule

> **unlockSourceKeypadErrorInvalidSchedule**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:884](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L884)

***

### KeypadProgrammingEventMask

> `const` **KeypadProgrammingEventMask**: `object`

The value of the DoorLock keypadProgrammingEventMask attribute

#### See

MatterSpecification.v11.Cluster § 5.2.3.44

#### Type declaration

##### pinAdded

> **pinAdded**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### pinChanged

> **pinChanged**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### pinCleared

> **pinCleared**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### pinCodeChanged

> **pinCodeChanged**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unknown

> **unknown**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:900](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L900)

***

### LocalProgrammingFeatures

> `const` **LocalProgrammingFeatures**: `object`

The value of the DoorLock localProgrammingFeatures attribute

#### See

MatterSpecification.v11.Cluster § 5.2.3.33

#### Type declaration

##### addUsersCredentialsSchedulesLocally

> **addUsersCredentialsSchedulesLocally**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### adjustLockSettingsLocally

> **adjustLockSettingsLocally**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### clearUsersCredentialsSchedulesLocally

> **clearUsersCredentialsSchedulesLocally**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### modifyUsersCredentialsSchedulesLocally

> **modifyUsersCredentialsSchedulesLocally**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1094](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1094)

***

### LoggingComponent

> `const` **LoggingComponent**: `object`

A DoorLockCluster supports these elements if it supports feature Logging.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.enableLogging

> `readonly` **enableLogging**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`boolean`, `any`\>

Enable/disable event logging. When event logging is enabled, all event messages are stored on the lock
for retrieval. Logging events can be but not limited to Tamper Alarm, Lock, Unlock, AutoRelock, User
Code Added, User Code Cleared, Schedule Added, and Schedule Cleared. For a full detail of all the
possible alarms and events, please refer to the full list in the Alarm and Event Masks Attribute Set.

###### See

MatterSpecification.v11.Cluster § 5.2.3.21

##### attributes.numberOfLogRecordsSupported

> `readonly` **numberOfLogRecordsSupported**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

The number of available log records.

###### See

MatterSpecification.v11.Cluster § 5.2.3.8

##### commands

> `readonly` **commands**: `object`

##### commands.getLogRecord

> `readonly` **getLogRecord**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1436](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1436)

***

### ManualOperationEventMask

> `const` **ManualOperationEventMask**: `object`

The value of the DoorLock manualOperationEventMask attribute

#### See

MatterSpecification.v11.Cluster § 5.2.3.42

#### Type declaration

##### autoLock

> **autoLock**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### keyLock

> **keyLock**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### keyUnlock

> **keyUnlock**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### manualLock

> **manualLock**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### manualUnlock

> **manualUnlock**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### oneTouchLock

> **oneTouchLock**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### scheduleLock

> **scheduleLock**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### scheduleUnlock

> **scheduleUnlock**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### thumbturnLock

> **thumbturnLock**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### thumbturnUnlock

> **thumbturnUnlock**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unknownOrManufacturerSpecificManualOperationEvent

> **unknownOrManufacturerSpecificManualOperationEvent**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:928](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L928)

***

### NotUserComponent

> `const` **NotUserComponent**: `object`

A DoorLockCluster supports these elements if doesn't support feature USR.

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2120)

***

### NotificationAndPinCredentialComponent

> `const` **NotificationAndPinCredentialComponent**: `object`

A DoorLockCluster supports these elements if it supports features Notification and PinCredential.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.keypadOperationEventMask

> `readonly` **keypadOperationEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

Event mask used to turn on and off the transmission of keypad operation events. This mask DOES NOT apply
to the storing of events in the event log. This mask only applies to the Operation Event Notification
Command.

This mask DOES NOT apply to the Events mechanism of this cluster.

###### See

MatterSpecification.v11.Cluster § 5.2.3.40

##### attributes.keypadProgrammingEventMask

> `readonly` **keypadProgrammingEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

Event mask used to turn on and off keypad programming events. This mask DOES NOT apply to the storing of
events in the event log. This mask only applies to the Programming Event Notification Command.

This mask DOES NOT apply to the Events mechanism of this cluster.

###### See

MatterSpecification.v11.Cluster § 5.2.3.44

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1879](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1879)

***

### NotificationAndRfidCredentialComponent

> `const` **NotificationAndRfidCredentialComponent**: `object`

A DoorLockCluster supports these elements if it supports features Notification and RfidCredential.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.rfidOperationEventMask

> `readonly` **rfidOperationEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

Event mask used to turn on and off RFID operation events. This mask DOES NOT apply to the storing of
events in the event log. This mask only applies to the Operation Event Notification Command.

This mask DOES NOT apply to the Events mechanism of this cluster.

###### See

MatterSpecification.v11.Cluster § 5.2.3.43

##### attributes.rfidProgrammingEventMask

> `readonly` **rfidProgrammingEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

Event mask used to turn on and off RFID programming events. This mask DOES NOT apply to the storing of
events in the event log. This mask only applies to the Programming Event Notification Command.

This mask DOES NOT apply to the Events mechanism of this cluster.

###### See

MatterSpecification.v11.Cluster § 5.2.3.46

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1981](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1981)

***

### NotificationComponent

> `const` **NotificationComponent**: `object`

A DoorLockCluster supports these elements if it supports feature Notification.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.manualOperationEventMask

> `readonly` **manualOperationEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

Event mask used to turn on and off manual operation events. This mask DOES NOT apply to the storing of
events in the event log. This mask only applies to the Operation Event Notification Command.

This mask DOES NOT apply to the Events mechanism of this cluster.

###### See

MatterSpecification.v11.Cluster § 5.2.3.42

##### attributes.remoteOperationEventMask

> `readonly` **remoteOperationEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

Event mask used to turn on and off the transmission of remote operation events. This mask DOES NOT apply
to the storing of events in the event log. This mask only applies to the Operation Event

Notification Command.

This mask DOES NOT apply to the Events mechanism of this cluster.

###### See

MatterSpecification.v11.Cluster § 5.2.3.41

##### attributes.remoteProgrammingEventMask

> `readonly` **remoteProgrammingEventMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

Event mask used to turn on and off remote programming events. This mask DOES NOT apply to the storing of
events in the event log. This mask only applies to the Programming Event Notification Command.

This mask DOES NOT apply to the Events mechanism of this cluster.

###### See

MatterSpecification.v11.Cluster § 5.2.3.45

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1921](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1921)

***

### PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent

> `const` **PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent**: `object`

A DoorLockCluster supports these elements if it supports features PinCredential, RfidCredential and
FingerCredentials and it doesn't support feature USR.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.getUserStatus

> `readonly` **getUserStatus**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.getUserType

> `readonly` **getUserType**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.setUserStatus

> `readonly` **setUserStatus**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.setUserType

> `readonly` **setUserType**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2069](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2069)

***

### PinCredentialComponent

> `const` **PinCredentialComponent**: `object`

A DoorLockCluster supports these elements if it supports feature PinCredential.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxPinCodeLength

> `readonly` **maxPinCodeLength**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

An 8 bit value indicates the maximum length in bytes of a PIN Code on this device.

###### See

MatterSpecification.v11.Cluster § 5.2.3.15

##### attributes.minPinCodeLength

> `readonly` **minPinCodeLength**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

An 8 bit value indicates the minimum length in bytes of a PIN Code on this device.

###### See

MatterSpecification.v11.Cluster § 5.2.3.16

##### attributes.numberOfPinUsersSupported

> `readonly` **numberOfPinUsersSupported**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

The number of PIN users supported.

###### See

MatterSpecification.v11.Cluster § 5.2.3.10

##### attributes.sendPinOverTheAir

> `readonly` **sendPinOverTheAir**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Boolean set to True if it is ok for the door lock server to send PINs over the air. This attribute
determines the behavior of the server’s TX operation. If it is false, then it is not ok for the device
to send PIN in any messages over the air.

The PIN field within any door lock cluster message shall keep the first octet unchanged and masks the
actual code by replacing with 0xFF. For example (PIN "1234" ): If the attribute value is True, 0x04 0x31
0x32 0x33 0x34 shall be used in the PIN field in any door lock cluster message payload. If the attribute
value is False, 0x04 0xFF 0xFF 0xFF 0xFF shall be used.

If the USR feature is supported by the device then this attribute shall NOT be supported.

###### See

MatterSpecification.v11.Cluster § 5.2.3.36

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1592](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1592)

***

### PinCredentialNotUserComponent

> `const` **PinCredentialNotUserComponent**: `object`

A DoorLockCluster supports these elements if it supports feature PinCredential and it doesn't support feature
USR.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.clearAllPinCodes

> `readonly` **clearAllPinCodes**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.clearPinCode

> `readonly` **clearPinCode**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.getPinCode

> `readonly` **getPinCode**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.setPinCode

> `readonly` **setPinCode**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2023](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2023)

***

### PinCredentialOrRfidCredentialComponent

> `const` **PinCredentialOrRfidCredentialComponent**: `object`

A DoorLockCluster supports these elements if it supports features PinCredential or RfidCredential.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.userCodeTemporaryDisableTime

> `readonly` **userCodeTemporaryDisableTime**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

The number of seconds that the lock shuts down following wrong code entry. Valid range is 1-255 seconds.
Device can shut down to lock user out for specified amount of time. (Makes it difficult to try and guess
a PIN for the device.) If the attribute accepts writes and an attempt to write the attribute to 0 is
made, the device shall respond with CONSTRAINT_ERROR.

###### See

MatterSpecification.v11.Cluster § 5.2.3.35

##### attributes.wrongCodeEntryLimit

> `readonly` **wrongCodeEntryLimit**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

The number of incorrect Pin codes or RFID presentment attempts a user is allowed to enter before the
lock will enter a lockout state. The value of this attribute is compared to all failing forms of
credential presentation, including Pin codes used in an Unlock Command when RequirePINforRemoteOperation
is set to true. Valid range is 1-255 incorrect attempts. The lockout state will be for the duration of
UserCodeTemporaryDisableTime. If the attribute accepts writes and an attempt to write the value 0 is
made, the device shall respond with CONSTRAINT_ERROR.

The lock may reset the counter used to track incorrect credential presentations as required by internal
logic, environmental events, or other reasons. The lock shall reset the counter if a valid credential is
presented.

###### See

MatterSpecification.v11.Cluster § 5.2.3.34

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1819](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1819)

***

### RemoteOperationEventMask

> `const` **RemoteOperationEventMask**: `object`

The value of the DoorLock remoteOperationEventMask attribute

#### See

MatterSpecification.v11.Cluster § 5.2.3.41

#### Type declaration

##### lockSourceRemote

> **lockSourceRemote**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### lockSourceRemoteErrorInvalidCode

> **lockSourceRemoteErrorInvalidCode**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### lockSourceRemoteErrorInvalidSchedule

> **lockSourceRemoteErrorInvalidSchedule**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unknownOrManufacturerSpecificRemoteOperationEvent

> **unknownOrManufacturerSpecificRemoteOperationEvent**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unlockSourceRemote

> **unlockSourceRemote**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unlockSourceRemoteErrorInvalidCode

> **unlockSourceRemoteErrorInvalidCode**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unlockSourceRemoteErrorInvalidSchedule

> **unlockSourceRemoteErrorInvalidSchedule**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:913](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L913)

***

### RemoteProgrammingEventMask

> `const` **RemoteProgrammingEventMask**: `object`

The value of the DoorLock remoteProgrammingEventMask attribute

#### See

MatterSpecification.v11.Cluster § 5.2.3.45

#### Type declaration

##### pinAdded

> **pinAdded**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### pinChanged

> **pinChanged**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### pinCleared

> **pinCleared**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### rfidCodeAdded

> **rfidCodeAdded**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### rfidCodeCleared

> **rfidCodeCleared**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unknown

> **unknown**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:947](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L947)

***

### RfidCredentialComponent

> `const` **RfidCredentialComponent**: `object`

A DoorLockCluster supports these elements if it supports feature RfidCredential.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxRfidCodeLength

> `readonly` **maxRfidCodeLength**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

An 8 bit value indicates the maximum length in bytes of a RFID Code on this device. The value depends on
the RFID code range specified by the manufacturer, if media anti-collision identifiers (UID) are used as
RFID code, a value of 20 (equals 10 Byte ISO 14443A UID) is recommended.

###### See

MatterSpecification.v11.Cluster § 5.2.3.17

##### attributes.minRfidCodeLength

> `readonly` **minRfidCodeLength**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

An 8 bit value indicates the minimum length in bytes of a RFID Code on this device. The value depends on
the RFID code range specified by the manufacturer, if media anti-collision identifiers (UID) are used as
RFID code, a value of 8 (equals 4 Byte ISO 14443A UID) is recommended.

###### See

MatterSpecification.v11.Cluster § 5.2.3.18

##### attributes.numberOfRfidUsersSupported

> `readonly` **numberOfRfidUsersSupported**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

The number of RFID users supported.

###### See

MatterSpecification.v11.Cluster § 5.2.3.11

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1640](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1640)

***

### RfidCredentialNotUserComponent

> `const` **RfidCredentialNotUserComponent**: `object`

A DoorLockCluster supports these elements if it supports feature RfidCredential and it doesn't support feature
USR.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.clearAllRfidCodes

> `readonly` **clearAllRfidCodes**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.clearRfidCode

> `readonly` **clearRfidCode**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.getRfidCode

> `readonly` **getRfidCode**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.setRfidCode

> `readonly` **setRfidCode**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2126)

***

### RfidOperationEventMask

> `const` **RfidOperationEventMask**: `object`

The value of the DoorLock rfidOperationEventMask attribute

#### See

MatterSpecification.v11.Cluster § 5.2.3.43

#### Type declaration

##### lockSourceRfid

> **lockSourceRfid**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### lockSourceRfidErrorInvalidRfidId

> **lockSourceRfidErrorInvalidRfidId**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### lockSourceRfidErrorInvalidSchedule

> **lockSourceRfidErrorInvalidSchedule**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unknownOrManufacturerSpecificKeypadOperationEvent

> **unknownOrManufacturerSpecificKeypadOperationEvent**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unlockSourceRfid

> **unlockSourceRfid**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unlockSourceRfidErrorInvalidRfidId

> **unlockSourceRfidErrorInvalidRfidId**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unlockSourceRfidErrorInvalidSchedule

> **unlockSourceRfidErrorInvalidSchedule**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:961](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L961)

***

### RfidProgrammingEventMask

> `const` **RfidProgrammingEventMask**: `object`

The value of the DoorLock rfidProgrammingEventMask attribute

#### See

MatterSpecification.v11.Cluster § 5.2.3.46

#### Type declaration

##### idAdded

> **idAdded**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### idCleared

> **idCleared**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### unknown

> **unknown**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:976](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L976)

***

### SupportedOperatingModes

> `const` **SupportedOperatingModes**: `object`

The value of the DoorLock supportedOperatingModes attribute

#### See

MatterSpecification.v11.Cluster § 5.2.3.24

#### Type declaration

##### noRemoteLockUnlock

> **noRemoteLockUnlock**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### normal

> **normal**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### passage

> **passage**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### privacy

> **privacy**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### vacation

> **vacation**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1067](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1067)

***

### TlvClearCredentialRequest

> `const` **TlvClearCredentialRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock clearCredential command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### credential

> **credential**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:436](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L436)

***

### TlvClearHolidayScheduleRequest

> `const` **TlvClearHolidayScheduleRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock clearHolidaySchedule command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### holidayIndex

> **holidayIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:870](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L870)

***

### TlvClearUserRequest

> `const` **TlvClearUserRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock clearUser command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:347](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L347)

***

### TlvClearWeekDayScheduleRequest

> `const` **TlvClearWeekDayScheduleRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock clearWeekDaySchedule command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### weekDayIndex

> **weekDayIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:681](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L681)

***

### TlvClearYearDayScheduleRequest

> `const` **TlvClearYearDayScheduleRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock clearYearDaySchedule command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### yearDayIndex

> **yearDayIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:750](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L750)

***

### TlvCredentialStruct

> `const` **TlvCredentialStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
credential types and their corresponding indices (if any) for the event or user record.

#### See

MatterSpecification.v11.Cluster § 5.2.6.3

#### Type declaration

##### credentialIndex

> **credentialIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This is the index of the specific credential used to authorize the lock operation in the list of credentials
identified by CredentialType (e.g. schedule, PIN, RFID, etc.). This shall be set to 0 if CredentialType is
ProgrammingPIN or does not correspond to a list that can be indexed into.

###### See

MatterSpecification.v11.Cluster § 5.2.6.3.2

##### credentialType

> **credentialType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`CredentialType`](enumerations/CredentialType.md)\>

The credential type used to authorize the lock operation.

###### See

MatterSpecification.v11.Cluster § 5.2.6.3.1

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:295](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L295)

***

### TlvDoorLockAlarmEvent

> `const` **TlvDoorLockAlarmEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the DoorLock doorLockAlarm event

#### See

MatterSpecification.v11.Cluster § 5.2.5.1

#### Type declaration

##### alarmCode

> **alarmCode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`AlarmCode`](enumerations/AlarmCode.md)\>

The alarm code of the event that has happened.

###### See

MatterSpecification.v11.Cluster § 5.2.5.1.1

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1213)

***

### TlvDoorStateChangeEvent

> `const` **TlvDoorStateChangeEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the DoorLock doorStateChange event

#### See

MatterSpecification.v11.Cluster § 5.2.5.2

#### Type declaration

##### doorState

> **doorState**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`DoorState`](enumerations/DoorState.md)\>

The new door state for this door event.

###### See

MatterSpecification.v11.Cluster § 5.2.5.2.1

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L82)

***

### TlvGetCredentialStatusRequest

> `const` **TlvGetCredentialStatusRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock getCredentialStatus command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### credential

> **credential**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:406](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L406)

***

### TlvGetCredentialStatusResponse

> `const` **TlvGetCredentialStatusResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### creatorFabricIndex

> **creatorFabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### credentialExists

> **credentialExists**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

##### lastModifiedFabricIndex

> **lastModifiedFabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### nextCredentialIndex

> **nextCredentialIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:418](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L418)

***

### TlvGetHolidayScheduleRequest

> `const` **TlvGetHolidayScheduleRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock getHolidaySchedule command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### holidayIndex

> **holidayIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:840](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L840)

***

### TlvGetHolidayScheduleResponse

> `const` **TlvGetHolidayScheduleResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### holidayIndex

> **holidayIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### localEndTime

> **localEndTime**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### localStartTime

> **localStartTime**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### operatingMode

> **operatingMode**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`OperatingMode`](enumerations/OperatingMode.md)\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`DlStatus`](enumerations/DlStatus.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:852](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L852)

***

### TlvGetUserRequest

> `const` **TlvGetUserRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock getUser command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:266](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L266)

***

### TlvGetUserResponse

> `const` **TlvGetUserResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### creatorFabricIndex

> **creatorFabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### credentialRule

> **credentialRule**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`CredentialRule`](enumerations/CredentialRule.md)\>

##### credentials

> **credentials**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### lastModifiedFabricIndex

> **lastModifiedFabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### nextUserIndex

> **nextUserIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### userName

> **userName**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `string`\>

##### userStatus

> **userStatus**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`UserStatus`](enumerations/UserStatus.md)\>

##### userType

> **userType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`UserType`](enumerations/UserType.md)\>

##### userUniqueId

> **userUniqueId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:324](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L324)

***

### TlvGetWeekDayScheduleRequest

> `const` **TlvGetWeekDayScheduleRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock getWeekDaySchedule command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### weekDayIndex

> **weekDayIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:645](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L645)

***

### TlvGetWeekDayScheduleResponse

> `const` **TlvGetWeekDayScheduleResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### daysMask

> **daysMask**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### endHour

> **endHour**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### endMinute

> **endMinute**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### startHour

> **startHour**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### startMinute

> **startMinute**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`DlStatus`](enumerations/DlStatus.md)\>

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### weekDayIndex

> **weekDayIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:660](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L660)

***

### TlvGetYearDayScheduleRequest

> `const` **TlvGetYearDayScheduleRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock getYearDaySchedule command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### yearDayIndex

> **yearDayIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:717](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L717)

***

### TlvGetYearDayScheduleResponse

> `const` **TlvGetYearDayScheduleResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### localEndTime

> **localEndTime**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### localStartTime

> **localStartTime**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`DlStatus`](enumerations/DlStatus.md)\>

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### yearDayIndex

> **yearDayIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:732](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L732)

***

### TlvLockDoorRequest

> `const` **TlvLockDoorRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock lockDoor command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### pinCode

> **pinCode**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1121)

***

### TlvLockOperationErrorEvent

> `const` **TlvLockOperationErrorEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the DoorLock lockOperationError event

#### See

MatterSpecification.v11.Cluster § 5.2.5.4

#### Type declaration

##### credentials

> **credentials**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

The list of credentials used in performing the lock operation. This shall be null if no credentials were
involved.

###### See

MatterSpecification.v11.Cluster § 5.2.5.4.7

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

The fabric index of the fabric that performed the lock operation. This shall be null if there is no fabric
that can be determined for the given operation source. This shall NOT be null if the operation source is
"Remote".

###### See

MatterSpecification.v11.Cluster § 5.2.5.4.5

##### lockOperationType

> **lockOperationType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`LockOperationType`](enumerations/LockOperationType.md)\>

The type of the lock operation that was performed.

###### See

MatterSpecification.v11.Cluster § 5.2.5.4.1

##### operationError

> **operationError**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`OperationError`](enumerations/OperationError.md)\>

The lock operation error triggered when the operation was performed.

###### See

MatterSpecification.v11.Cluster § 5.2.5.4.3

##### operationSource

> **operationSource**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`OperationSource`](enumerations/OperationSource.md)\>

The source of the lock operation that was performed.

###### See

MatterSpecification.v11.Cluster § 5.2.5.4.2

##### sourceNode

> **sourceNode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`NodeId`](../../../../datatype/export/README.md#nodeid)\>

The Node ID of the node that performed the lock operation. This shall be null if there is no Node associated
with the given operation source. This shall NOT be null if the operation source is

"Remote".

###### See

MatterSpecification.v11.Cluster § 5.2.5.4.6

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

The lock UserIndex who performed the lock operation. This shall be null if there is no user id that can be
determined for the given operation source.

###### See

MatterSpecification.v11.Cluster § 5.2.5.4.4

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1321](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1321)

***

### TlvLockOperationEvent

> `const` **TlvLockOperationEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the DoorLock lockOperation event

#### See

MatterSpecification.v11.Cluster § 5.2.5.3

#### Type declaration

##### credentials

> **credentials**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

The list of credentials used in performing the lock operation. This shall be null if no credentials were
involved.

###### See

MatterSpecification.v11.Cluster § 5.2.5.3.6

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

The fabric index of the fabric that performed the lock operation. This shall be null if there is no fabric
that can be determined for the given operation source. This shall NOT be null if the operation source is
"Remote".

###### See

MatterSpecification.v11.Cluster § 5.2.5.3.4

##### lockOperationType

> **lockOperationType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`LockOperationType`](enumerations/LockOperationType.md)\>

The type of the lock operation that was performed.

###### See

MatterSpecification.v11.Cluster § 5.2.5.3.1

##### operationSource

> **operationSource**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`OperationSource`](enumerations/OperationSource.md)\>

The source of the lock operation that was performed.

###### See

MatterSpecification.v11.Cluster § 5.2.5.3.2

##### sourceNode

> **sourceNode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`NodeId`](../../../../datatype/export/README.md#nodeid)\>

The Node ID of the node that performed the lock operation. This shall be null if there is no Node associated
with the given operation source. This shall NOT be null if the operation source is "Remote".

###### See

MatterSpecification.v11.Cluster § 5.2.5.3.5

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

The lock UserIndex who performed the lock operation. This shall be null if there is no user index that can
be determined for the given operation source. This shall NOT be null if a user index can be determined. In
particular, this shall NOT be null if the operation was associated with a valid credential.

###### See

MatterSpecification.v11.Cluster § 5.2.5.3.3

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1246)

***

### TlvLockUserChangeEvent

> `const` **TlvLockUserChangeEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the DoorLock lockUserChange event

#### See

MatterSpecification.v11.Cluster § 5.2.5.5

#### Type declaration

##### dataIndex

> **dataIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

This is the index of the specific item that was changed (e.g. schedule, PIN, RFID, etc.) in the list of
items identified by LockDataType. This shall be null if the LockDataType does not correspond to a list that
can be indexed into (e.g. ProgrammingUser). This shall be 0xFFFE if all indices are affected (e.g. Clear PIN
Code, Clear RFID Code, Clear Week Day Schedule, Clear Year Day Schedule, etc.).

###### See

MatterSpecification.v11.Cluster § 5.2.5.5.7

##### dataOperationType

> **dataOperationType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`DataOperationType`](enumerations/DataOperationType.md)\>

The data operation performed on the lock data type changed.

###### See

MatterSpecification.v11.Cluster § 5.2.5.5.2

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

The fabric index of the fabric that performed the change (if any). This shall be null if there is no fabric
that can be determined to have caused the change. This shall NOT be null if the operation source is "Remote".

###### See

MatterSpecification.v11.Cluster § 5.2.5.5.5

##### lockDataType

> **lockDataType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`LockDataType`](enumerations/LockDataType.md)\>

The lock data type that was changed.

###### See

MatterSpecification.v11.Cluster § 5.2.5.5.1

##### operationSource

> **operationSource**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`OperationSource`](enumerations/OperationSource.md)\>

The source of the user data change.

###### See

MatterSpecification.v11.Cluster § 5.2.5.5.3

##### sourceNode

> **sourceNode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`NodeId`](../../../../datatype/export/README.md#nodeid)\>

The Node ID that that performed the change (if any). The Node ID of the node that performed the change. This
shall be null if there was no Node involved in the change. This shall NOT be null if the operation source is
"Remote".

###### See

MatterSpecification.v11.Cluster § 5.2.5.5.6

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

The lock UserIndex associated with the change (if any). This shall be null if there is no specific user
associated with the data operation. This shall be 0xFFFE if all users are affected (e.g. Clear Users).

###### See

MatterSpecification.v11.Cluster § 5.2.5.5.4

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:537](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L537)

***

### TlvSetCredentialRequest

> `const` **TlvSetCredentialRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock setCredential command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### credential

> **credential**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### credentialData

> **credentialData**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### operationType

> **operationType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`DataOperationType`](enumerations/DataOperationType.md)\>

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

##### userStatus

> **userStatus**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`UserStatus`](enumerations/UserStatus.md)\>

##### userType

> **userType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`UserType`](enumerations/UserType.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:361](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L361)

***

### TlvSetCredentialResponse

> `const` **TlvSetCredentialResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### nextCredentialIndex

> **nextCredentialIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`DlStatus`](enumerations/DlStatus.md)\>

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:390](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L390)

***

### TlvSetHolidayScheduleRequest

> `const` **TlvSetHolidayScheduleRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock setHolidaySchedule command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### holidayIndex

> **holidayIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### localEndTime

> **localEndTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### localStartTime

> **localStartTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### operatingMode

> **operatingMode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`OperatingMode`](enumerations/OperatingMode.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:821](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L821)

***

### TlvSetUserRequest

> `const` **TlvSetUserRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock setUser command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### credentialRule

> **credentialRule**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`CredentialRule`](enumerations/CredentialRule.md)\>

##### operationType

> **operationType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`DataOperationType`](enumerations/DataOperationType.md)\>

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### userName

> **userName**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `string`\>

##### userStatus

> **userStatus**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`UserStatus`](enumerations/UserStatus.md)\>

##### userType

> **userType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`UserType`](enumerations/UserType.md)\>

##### userUniqueId

> **userUniqueId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:244](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L244)

***

### TlvSetWeekDayScheduleRequest

> `const` **TlvSetWeekDayScheduleRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock setWeekDaySchedule command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### daysMask

> **daysMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### endHour

> **endHour**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### endMinute

> **endMinute**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### startHour

> **startHour**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### startMinute

> **startMinute**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### weekDayIndex

> **weekDayIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:623](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L623)

***

### TlvSetYearDayScheduleRequest

> `const` **TlvSetYearDayScheduleRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock setYearDaySchedule command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### localEndTime

> **localEndTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### localStartTime

> **localStartTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### userIndex

> **userIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### yearDayIndex

> **yearDayIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:698](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L698)

***

### TlvUnlockDoorRequest

> `const` **TlvUnlockDoorRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock unlockDoor command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### pinCode

> **pinCode**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1135](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1135)

***

### TlvUnlockWithTimeoutRequest

> `const` **TlvUnlockWithTimeoutRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DoorLock unlockWithTimeout command

#### See

MatterSpecification.v11.Cluster § 5.2.4

#### Type declaration

##### pinCode

> **pinCode**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

##### timeout

> **timeout**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1149](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1149)

***

### UserComponent

> `const` **UserComponent**: `object`

A DoorLockCluster supports these elements if it supports feature User.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.credentialRulesSupport

> `readonly` **credentialRulesSupport**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This bitmap contains a bit for every value of CredentialRuleEnum supported on this device.

###### See

MatterSpecification.v11.Cluster § 5.2.3.19

##### attributes.expiringUserTimeout

> `readonly` **expiringUserTimeout**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

Number of minutes a PIN, RFID, Fingerprint, or other credential associated with a user of type
ExpiringUser shall remain valid after its first use before expiring. When the credential expires the
UserStatus for the corresponding user record shall be set to OccupiedDisabled.

###### See

MatterSpecification.v11.Cluster § 5.2.3.38

##### attributes.numberOfCredentialsSupportedPerUser

> `readonly` **numberOfCredentialsSupportedPerUser**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

The number of credentials that could be assigned for each user.

Depending on the value of NumberOfRFIDUsersSupported and NumberOfPINUsersSupported it may not be
possible to assign that number of credentials for a user.

For example, if the device supports only PIN and RFID credential types,
NumberOfCredentialsSupportedPerUser is set to 10, NumberOfPINUsersSupported is set to 5 and
NumberOfRFIDUsersSupported is set to 3, it will not be possible to actually assign 10 credentials for a
user because maximum number of credentials in the database is 8.

###### See

MatterSpecification.v11.Cluster § 5.2.3.20

##### attributes.numberOfTotalUsersSupported

> `readonly` **numberOfTotalUsersSupported**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

Number of total users supported by the lock.

###### See

MatterSpecification.v11.Cluster § 5.2.3.9

##### commands

> `readonly` **commands**: `object`

##### commands.clearCredential

> `readonly` **clearCredential**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.clearUser

> `readonly` **clearUser**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.getCredentialStatus

> `readonly` **getCredentialStatus**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.getUser

> `readonly` **getUser**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.setCredential

> `readonly` **setCredential**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.setUser

> `readonly` **setUser**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### events

> `readonly` **events**: `object`

##### events.lockUserChange

> `readonly` **lockUserChange**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a LockUserChange event when a lock user, schedule, or credential change
has occurred.

###### See

MatterSpecification.v11.Cluster § 5.2.5.5

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1467](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1467)

***

### WeekDayAccessSchedulesComponent

> `const` **WeekDayAccessSchedulesComponent**: `object`

A DoorLockCluster supports these elements if it supports feature WeekDayAccessSchedules.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.numberOfWeekDaySchedulesSupportedPerUser

> `readonly` **numberOfWeekDaySchedulesSupportedPerUser**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

The number of configurable week day schedule supported per user.

###### See

MatterSpecification.v11.Cluster § 5.2.3.12

##### commands

> `readonly` **commands**: `object`

##### commands.clearWeekDaySchedule

> `readonly` **clearWeekDaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.getWeekDaySchedule

> `readonly` **getWeekDaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.setWeekDaySchedule

> `readonly` **setWeekDaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1672](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1672)

***

### YearDayAccessSchedulesComponent

> `const` **YearDayAccessSchedulesComponent**: `object`

A DoorLockCluster supports these elements if it supports feature YearDayAccessSchedules.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.numberOfYearDaySchedulesSupportedPerUser

> `readonly` **numberOfYearDaySchedulesSupportedPerUser**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

The number of configurable year day schedule supported per user.

###### See

MatterSpecification.v11.Cluster § 5.2.3.13

##### commands

> `readonly` **commands**: `object`

##### commands.clearYearDaySchedule

> `readonly` **clearYearDaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.getYearDaySchedule

> `readonly` **getYearDaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.setYearDaySchedule

> `readonly` **setYearDaySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1721](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1721)
