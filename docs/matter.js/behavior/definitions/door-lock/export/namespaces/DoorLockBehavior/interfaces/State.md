[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/door-lock/export](../../../README.md) / [DoorLockBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### actuatorEnabled

> **actuatorEnabled**: `boolean`

The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to
(Disabled) process remote Lock, Unlock, or Unlock with Timeout commands.

#### See

MatterSpecification.v11.Cluster § 5.2.3.3

#### Inherited from

`StateType.actuatorEnabled`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2392](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2392)

***

### alarmMask?

> `optional` **alarmMask**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is used
to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the associated
alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be turned on or
off by setting or clearing the associated bit in the alarm mask.

This mask DOES NOT apply to the Events mechanism of this cluster.

#### See

MatterSpecification.v11.Cluster § 5.2.3.39

#### Type declaration

##### forcedDoorOpenUnderDoorLockedCondition

> **forcedDoorOpenUnderDoorLockedCondition**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### lockResetToFactoryDefaults

> **lockResetToFactoryDefaults**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### lockingMechanismJammed

> **lockingMechanismJammed**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### reserved

> **reserved**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### rfModulePowerCycled

> **rfModulePowerCycled**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### tamperAlarmFrontEscutcheonRemovedFromMain

> **tamperAlarmFrontEscutcheonRemovedFromMain**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### tamperAlarmWrongCodeEntryLimit

> **tamperAlarmWrongCodeEntryLimit**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

#### Inherited from

`StateType.alarmMask`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2558](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2558)

***

### autoRelockTime?

> `optional` **autoRelockTime**: `number`

The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. If
set, unlock operations from any source will be timed. For one time unlock with timeout use the specific
command.

#### See

MatterSpecification.v11.Cluster § 5.2.3.26

#### Inherited from

`StateType.autoRelockTime`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2424](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2424)

***

### defaultConfigurationRegister?

> `optional` **defaultConfigurationRegister**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

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

#### See

MatterSpecification.v11.Cluster § 5.2.3.28

#### Type declaration

##### autoRelockTimeSet

> **autoRelockTimeSet**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### enableLocalProgrammingEnabled

> **enableLocalProgrammingEnabled**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### keypadInterfaceDefaultAccessEnabled

> **keypadInterfaceDefaultAccessEnabled**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### ledSettingsSet

> **ledSettingsSet**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### remoteInterfaceDefaultAccessIsEnabled

> **remoteInterfaceDefaultAccessIsEnabled**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### soundEnabled

> **soundEnabled**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

#### Inherited from

`StateType.defaultConfigurationRegister`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2480](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2480)

***

### enableInsideStatusLed?

> `optional` **enableInsideStatusLed**: `boolean`

Enable/disable an inside LED that allows the user to see at a glance if the door is locked.

#### See

MatterSpecification.v11.Cluster § 5.2.3.31

#### Inherited from

`StateType.enableInsideStatusLed`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2513](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2513)

***

### enableLocalProgramming?

> `optional` **enableLocalProgramming**: `boolean`

Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures
attribute). If this value is set to TRUE then local programming is enabled on the door lock for all
features. If it is set to FALSE then local programming is disabled on the door lock for those features
whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming shall be enabled by
default.

#### See

MatterSpecification.v11.Cluster § 5.2.3.29

#### Inherited from

`StateType.enableLocalProgramming`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2491](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2491)

***

### enableOneTouchLocking?

> `optional` **enableOneTouchLocking**: `boolean`

Enable/disable the ability to lock the door lock with a single touch on the door lock.

#### See

MatterSpecification.v11.Cluster § 5.2.3.30

#### Inherited from

`StateType.enableOneTouchLocking`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2502](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2502)

***

### enablePrivacyModeButton?

> `optional` **enablePrivacyModeButton**: `boolean`

Enable/disable a button inside the door that is used to put the lock into privacy mode. When the lock is
in privacy mode it cannot be manipulated from the outside.

#### See

MatterSpecification.v11.Cluster § 5.2.3.32

#### Inherited from

`StateType.enablePrivacyModeButton`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2525](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2525)

***

### language?

> `optional` **language**: `string`

Modifies the language for the on-screen or audible user interface using a 2-byte language code from
ISO-639-1.

#### See

MatterSpecification.v11.Cluster § 5.2.3.22

#### Inherited from

`StateType.language`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2400](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2400)

***

### ledSettings?

> `optional` **ledSettings**: `number`

The settings for the LED support three different modes

#### See

MatterSpecification.v11.Cluster § 5.2.3.25

#### Inherited from

`StateType.ledSettings`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2411](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2411)

***

### localProgrammingFeatures?

> `optional` **localProgrammingFeatures**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The local programming features that will be disabled when EnableLocalProgramming attribute is set to
False. If a door lock doesn’t support disabling one aspect of local programming it shall return
CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming attribute is
set to True then all local programming features shall be enabled regardless of the bits set to 0 in this
attribute.

The features that can be disabled from local programming are defined in the following bitmap.

#### See

MatterSpecification.v11.Cluster § 5.2.3.33

#### Type declaration

##### addUsersCredentialsSchedulesLocally

> **addUsersCredentialsSchedulesLocally**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### adjustLockSettingsLocally

> **adjustLockSettingsLocally**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### clearUsersCredentialsSchedulesLocally

> **clearUsersCredentialsSchedulesLocally**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### modifyUsersCredentialsSchedulesLocally

> **modifyUsersCredentialsSchedulesLocally**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

#### Inherited from

`StateType.localProgrammingFeatures`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2542](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2542)

***

### lockState

> **lockState**: `null` \| [`LockState`](../../../../../../../cluster/export/namespaces/DoorLock/enumerations/LockState.md)

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

#### See

MatterSpecification.v11.Cluster § 5.2.3.1

#### Inherited from

`StateType.lockState`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2379](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2379)

***

### lockType

> **lockType**: [`LockType`](../../../../../../../cluster/export/namespaces/DoorLock/enumerations/LockType.md)

#### See

MatterSpecification.v11.Cluster § 5.2.3.2

#### Inherited from

`StateType.lockType`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2384](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2384)

***

### operatingMode

> **operatingMode**: [`OperatingMode`](../../../../../../../cluster/export/namespaces/DoorLock/enumerations/OperatingMode.md)

The current operating mode of the lock (see OperatingModeEnum).

#### See

MatterSpecification.v11.Cluster § 5.2.3.23

#### Inherited from

`StateType.operatingMode`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2442](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2442)

***

### soundVolume?

> `optional` **soundVolume**: `number`

The sound volume on a door lock has four possible settings: silent, low, high and medium volumes

#### See

MatterSpecification.v11.Cluster § 5.2.3.27

#### Inherited from

`StateType.soundVolume`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2431](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2431)

***

### supportedOperatingModes

> **supportedOperatingModes**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All
operating modes NOT supported by a lock shall be set to one. The value of the OperatingMode enumeration
defines the related bit to be set, as

#### See

MatterSpecification.v11.Cluster § 5.2.3.24

#### Type declaration

##### noRemoteLockUnlock

> **noRemoteLockUnlock**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### normal

> **normal**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### passage

> **passage**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### privacy

> **privacy**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### vacation

> **vacation**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

#### Inherited from

`StateType.supportedOperatingModes`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2455](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2455)
