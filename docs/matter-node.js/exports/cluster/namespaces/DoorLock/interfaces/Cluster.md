[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / Cluster

# Interface: Cluster

Door Lock

An interface to a generic way to secure a door

DoorLockCluster supports optional features that you can enable with the DoorLockCluster.with() factory method.

## See

MatterSpecification.v11.Cluster § 5.2

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### actuatorEnabled

> `readonly` **actuatorEnabled**: [`Attribute`](../../../interfaces/Attribute.md)\<`boolean`, `any`\>

The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to
(Disabled) process remote Lock, Unlock, or Unlock with Timeout commands.

###### See

MatterSpecification.v11.Cluster § 5.2.3.3

##### alarmMask

> `readonly` **alarmMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is used
to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the associated
alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be turned on or
off by setting or clearing the associated bit in the alarm mask.

This mask DOES NOT apply to the Events mechanism of this cluster.

###### See

MatterSpecification.v11.Cluster § 5.2.3.39

##### autoRelockTime

> `readonly` **autoRelockTime**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. If
set, unlock operations from any source will be timed. For one time unlock with timeout use the specific
command.

###### See

MatterSpecification.v11.Cluster § 5.2.3.26

##### defaultConfigurationRegister

> `readonly` **defaultConfigurationRegister**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

##### enableInsideStatusLed

> `readonly` **enableInsideStatusLed**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable an inside LED that allows the user to see at a glance if the door is locked.

###### See

MatterSpecification.v11.Cluster § 5.2.3.31

##### enableLocalProgramming

> `readonly` **enableLocalProgramming**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures
attribute). If this value is set to TRUE then local programming is enabled on the door lock for all
features. If it is set to FALSE then local programming is disabled on the door lock for those features
whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming shall be enabled by
default.

###### See

MatterSpecification.v11.Cluster § 5.2.3.29

##### enableOneTouchLocking

> `readonly` **enableOneTouchLocking**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable the ability to lock the door lock with a single touch on the door lock.

###### See

MatterSpecification.v11.Cluster § 5.2.3.30

##### enablePrivacyModeButton

> `readonly` **enablePrivacyModeButton**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable a button inside the door that is used to put the lock into privacy mode. When the lock is
in privacy mode it cannot be manipulated from the outside.

###### See

MatterSpecification.v11.Cluster § 5.2.3.32

##### language

> `readonly` **language**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`string`, `any`\>

Modifies the language for the on-screen or audible user interface using a 2-byte language code from
ISO-639-1.

###### See

MatterSpecification.v11.Cluster § 5.2.3.22

##### ledSettings

> `readonly` **ledSettings**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The settings for the LED support three different modes

###### See

MatterSpecification.v11.Cluster § 5.2.3.25

##### localProgrammingFeatures

> `readonly` **localProgrammingFeatures**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The local programming features that will be disabled when EnableLocalProgramming attribute is set to
False. If a door lock doesn’t support disabling one aspect of local programming it shall return
CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming attribute is
set to True then all local programming features shall be enabled regardless of the bits set to 0 in this
attribute.

The features that can be disabled from local programming are defined in the following bitmap.

###### See

MatterSpecification.v11.Cluster § 5.2.3.33

##### lockState

> `readonly` **lockState**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`LockState`](../enumerations/LockState.md), `any`\>

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

##### lockType

> `readonly` **lockType**: [`Attribute`](../../../interfaces/Attribute.md)\<[`LockType`](../enumerations/LockType.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.3.2

##### operatingMode

> `readonly` **operatingMode**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`OperatingMode`](../enumerations/OperatingMode.md), `any`\>

The current operating mode of the lock (see OperatingModeEnum).

###### See

MatterSpecification.v11.Cluster § 5.2.3.23

##### soundVolume

> `readonly` **soundVolume**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The sound volume on a door lock has four possible settings: silent, low, high and medium volumes

###### See

MatterSpecification.v11.Cluster § 5.2.3.27

##### supportedOperatingModes

> `readonly` **supportedOperatingModes**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All
operating modes NOT supported by a lock shall be set to one. The value of the OperatingMode enumeration
defines the related bit to be set, as

###### See

MatterSpecification.v11.Cluster § 5.2.3.24

#### Inherited from

`Identity.attributes`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

***

### commands

> **commands**: `object`

#### lockDoor

> `readonly` **lockDoor**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 5.2.4

#### unlockDoor

> `readonly` **unlockDoor**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 5.2.4

#### unlockWithTimeout

> `readonly` **unlockWithTimeout**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 5.2.4

#### Inherited from

`Identity.commands`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

***

### events

> **events**: `object`

#### doorLockAlarm

> `readonly` **doorLockAlarm**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock cluster provides several alarms which can be sent when there is a critical state on the
door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum section below.

##### See

MatterSpecification.v11.Cluster § 5.2.5.1

#### lockOperation

> `readonly` **lockOperation**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a LockOperation event when the event is triggered by the various lock
operation sources.

##### See

MatterSpecification.v11.Cluster § 5.2.5.3

#### lockOperationError

> `readonly` **lockOperationError**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a LockOperationError event when a lock operation fails for various
reasons.

##### See

MatterSpecification.v11.Cluster § 5.2.5.4

#### Inherited from

`Identity.events`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

***

### extensions

> **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

#### Inherited from

`Identity.extensions`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

***

### features

> **features**: `object`

#### credentialOverTheAirAccess

> `readonly` **credentialOverTheAirAccess**: [`BitFlag`](../../../../schema/README.md#bitflag)

CredentialOverTheAirAccess

PIN codes over- the-air supported for lock/unlock operations

#### doorPositionSensor

> `readonly` **doorPositionSensor**: [`BitFlag`](../../../../schema/README.md#bitflag)

DoorPositionSensor

Lock supports a door position sensor that indicates door’s state

#### faceCredentials

> `readonly` **faceCredentials**: [`BitFlag`](../../../../schema/README.md#bitflag)

FaceCredentials

Lock supports face related credentials (face, iris, retina)

#### fingerCredentials

> `readonly` **fingerCredentials**: [`BitFlag`](../../../../schema/README.md#bitflag)

FingerCredentials

Lock supports finger related credentials (fingerprint, finger vein)

#### holidaySchedules

> `readonly` **holidaySchedules**: [`BitFlag`](../../../../schema/README.md#bitflag)

HolidaySchedules

Lock supports holiday schedules

#### logging

> `readonly` **logging**: [`BitFlag`](../../../../schema/README.md#bitflag)

Logging

Lock supports local/on-lock logging when Events are not supported

#### notification

> `readonly` **notification**: [`BitFlag`](../../../../schema/README.md#bitflag)

Notification

Operation and Programming Notifications

#### pinCredential

> `readonly` **pinCredential**: [`BitFlag`](../../../../schema/README.md#bitflag)

PinCredential

Lock supports PIN credentials (via keypad, or over- the-air)

#### rfidCredential

> `readonly` **rfidCredential**: [`BitFlag`](../../../../schema/README.md#bitflag)

RfidCredential

Lock supports RFID credentials

#### user

> `readonly` **user**: [`BitFlag`](../../../../schema/README.md#bitflag)

User

Lock supports the user commands and database

#### weekDayAccessSchedules

> `readonly` **weekDayAccessSchedules**: [`BitFlag`](../../../../schema/README.md#bitflag)

WeekDayAccessSchedules

Lock supports week day user access schedules

#### yearDayAccessSchedules

> `readonly` **yearDayAccessSchedules**: [`BitFlag`](../../../../schema/README.md#bitflag)

YearDayAccessSchedules

Lock supports year day user access schedules

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`257`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"DoorLock"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `6`

#### Inherited from

`Identity.revision`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
