[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / Complete

# Interface: Complete

This cluster supports all DoorLock features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`CompleteInstance`](../README.md#completeinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../../datatype/export/README.md#commandid)[], `never`\>

List of client generated commands which are supported by this cluster server instance.

##### actuatorEnabled

> `readonly` **actuatorEnabled**: [`Attribute`](../../../interfaces/Attribute.md)\<`boolean`, `any`\>

The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to
(Disabled) process remote Lock, Unlock, or Unlock with Timeout commands.

###### See

MatterSpecification.v11.Cluster § 5.2.3.3

##### alarmMask

> `readonly` **alarmMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is used
to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the associated
alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be turned on or
off by setting or clearing the associated bit in the alarm mask.

This mask DOES NOT apply to the Events mechanism of this cluster.

###### See

MatterSpecification.v11.Cluster § 5.2.3.39

##### attributeList

> `readonly` **attributeList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`AttributeId`](../../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### autoRelockTime

> `readonly` **autoRelockTime**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. If
set, unlock operations from any source will be timed. For one time unlock with timeout use the specific
command.

###### See

MatterSpecification.v11.Cluster § 5.2.3.26

##### clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### credentialRulesSupport

> `readonly` **credentialRulesSupport**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### defaultConfigurationRegister

> `readonly` **defaultConfigurationRegister**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

##### doorClosedEvents

> `readonly` **doorClosedEvents**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### doorOpenEvents

> `readonly` **doorOpenEvents**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### doorState

> `readonly` **doorState**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`DoorState`](../enumerations/DoorState.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

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

##### enableLogging

> `readonly` **enableLogging**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

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

##### eventList

> `readonly` **eventList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EventId`](../../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### expiringUserTimeout

> `readonly` **expiringUserTimeout**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### featureMap

> `readonly` **featureMap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### keypadOperationEventMask

> `readonly` **keypadOperationEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### keypadProgrammingEventMask

> `readonly` **keypadProgrammingEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

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

> `readonly` **localProgrammingFeatures**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

##### manualOperationEventMask

> `readonly` **manualOperationEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### maxPinCodeLength

> `readonly` **maxPinCodeLength**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### maxRfidCodeLength

> `readonly` **maxRfidCodeLength**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### minPinCodeLength

> `readonly` **minPinCodeLength**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### minRfidCodeLength

> `readonly` **minRfidCodeLength**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### numberOfCredentialsSupportedPerUser

> `readonly` **numberOfCredentialsSupportedPerUser**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### numberOfHolidaySchedulesSupported

> `readonly` **numberOfHolidaySchedulesSupported**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### numberOfLogRecordsSupported

> `readonly` **numberOfLogRecordsSupported**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### numberOfPinUsersSupported

> `readonly` **numberOfPinUsersSupported**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### numberOfRfidUsersSupported

> `readonly` **numberOfRfidUsersSupported**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### numberOfTotalUsersSupported

> `readonly` **numberOfTotalUsersSupported**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### numberOfWeekDaySchedulesSupportedPerUser

> `readonly` **numberOfWeekDaySchedulesSupportedPerUser**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### numberOfYearDaySchedulesSupportedPerUser

> `readonly` **numberOfYearDaySchedulesSupportedPerUser**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### openPeriod

> `readonly` **openPeriod**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### operatingMode

> `readonly` **operatingMode**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`OperatingMode`](../enumerations/OperatingMode.md), `any`\>

The current operating mode of the lock (see OperatingModeEnum).

###### See

MatterSpecification.v11.Cluster § 5.2.3.23

##### remoteOperationEventMask

> `readonly` **remoteOperationEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### remoteProgrammingEventMask

> `readonly` **remoteProgrammingEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### requirePinForRemoteOperation

> `readonly` **requirePinForRemoteOperation**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### rfidOperationEventMask

> `readonly` **rfidOperationEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rfidProgrammingEventMask

> `readonly` **rfidProgrammingEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### sendPinOverTheAir

> `readonly` **sendPinOverTheAir**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### soundVolume

> `readonly` **soundVolume**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The sound volume on a door lock has four possible settings: silent, low, high and medium volumes

###### See

MatterSpecification.v11.Cluster § 5.2.3.27

##### supportedOperatingModes

> `readonly` **supportedOperatingModes**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All
operating modes NOT supported by a lock shall be set to one. The value of the OperatingMode enumeration
defines the related bit to be set, as

###### See

MatterSpecification.v11.Cluster § 5.2.3.24

##### userCodeTemporaryDisableTime

> `readonly` **userCodeTemporaryDisableTime**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### wrongCodeEntryLimit

> `readonly` **wrongCodeEntryLimit**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### Inherited from

`Identity.attributes`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L86)

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L92)

***

### commands

> **commands**: `object`

#### clearAllPinCodes

> `readonly` **clearAllPinCodes**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### clearAllRfidCodes

> `readonly` **clearAllRfidCodes**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### clearCredential

> `readonly` **clearCredential**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### clearHolidaySchedule

> `readonly` **clearHolidaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### clearPinCode

> `readonly` **clearPinCode**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### clearRfidCode

> `readonly` **clearRfidCode**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### clearUser

> `readonly` **clearUser**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### clearWeekDaySchedule

> `readonly` **clearWeekDaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### clearYearDaySchedule

> `readonly` **clearYearDaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### getCredentialStatus

> `readonly` **getCredentialStatus**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### getHolidaySchedule

> `readonly` **getHolidaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### getLogRecord

> `readonly` **getLogRecord**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### getPinCode

> `readonly` **getPinCode**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### getRfidCode

> `readonly` **getRfidCode**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### getUser

> `readonly` **getUser**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### getUserStatus

> `readonly` **getUserStatus**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

#### getUserType

> `readonly` **getUserType**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

#### getWeekDaySchedule

> `readonly` **getWeekDaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### getYearDaySchedule

> `readonly` **getYearDaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### lockDoor

> `readonly` **lockDoor**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 5.2.4

#### setCredential

> `readonly` **setCredential**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### setHolidaySchedule

> `readonly` **setHolidaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### setPinCode

> `readonly` **setPinCode**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### setRfidCode

> `readonly` **setRfidCode**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### setUser

> `readonly` **setUser**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### setUserStatus

> `readonly` **setUserStatus**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

#### setUserType

> `readonly` **setUserType**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

#### setWeekDaySchedule

> `readonly` **setWeekDaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### setYearDaySchedule

> `readonly` **setYearDaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### unlockDoor

> `readonly` **unlockDoor**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 5.2.4

#### unlockWithTimeout

> `readonly` **unlockWithTimeout**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 5.2.4

#### Inherited from

`Identity.commands`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L89)

***

### events

> **events**: `object`

#### doorLockAlarm

> `readonly` **doorLockAlarm**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock cluster provides several alarms which can be sent when there is a critical state on the
door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum section below.

##### See

MatterSpecification.v11.Cluster § 5.2.5.1

#### doorStateChange

> `readonly` **doorStateChange**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### lockOperation

> `readonly` **lockOperation**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a LockOperation event when the event is triggered by the various lock
operation sources.

##### See

MatterSpecification.v11.Cluster § 5.2.5.3

#### lockOperationError

> `readonly` **lockOperationError**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a LockOperationError event when a lock operation fails for various
reasons.

##### See

MatterSpecification.v11.Cluster § 5.2.5.4

#### lockUserChange

> `readonly` **lockUserChange**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### Inherited from

`Identity.events`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L90)

***

### extensions

> **extensions**: `undefined`

#### Inherited from

`Identity.extensions`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L93)

***

### features

> **features**: `object`

#### credentialOverTheAirAccess

> `readonly` **credentialOverTheAirAccess**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

CredentialOverTheAirAccess

PIN codes over- the-air supported for lock/unlock operations

#### doorPositionSensor

> `readonly` **doorPositionSensor**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

DoorPositionSensor

Lock supports a door position sensor that indicates door’s state

#### faceCredentials

> `readonly` **faceCredentials**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

FaceCredentials

Lock supports face related credentials (face, iris, retina)

#### fingerCredentials

> `readonly` **fingerCredentials**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

FingerCredentials

Lock supports finger related credentials (fingerprint, finger vein)

#### holidaySchedules

> `readonly` **holidaySchedules**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

HolidaySchedules

Lock supports holiday schedules

#### logging

> `readonly` **logging**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Logging

Lock supports local/on-lock logging when Events are not supported

#### notification

> `readonly` **notification**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Notification

Operation and Programming Notifications

#### pinCredential

> `readonly` **pinCredential**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

PinCredential

Lock supports PIN credentials (via keypad, or over- the-air)

#### rfidCredential

> `readonly` **rfidCredential**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

RfidCredential

Lock supports RFID credentials

#### user

> `readonly` **user**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

User

Lock supports the user commands and database

#### weekDayAccessSchedules

> `readonly` **weekDayAccessSchedules**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

WeekDayAccessSchedules

Lock supports week day user access schedules

#### yearDayAccessSchedules

> `readonly` **yearDayAccessSchedules**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

YearDayAccessSchedules

Lock supports year day user access schedules

#### Inherited from

`Identity.features`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L84)

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<[`Branded`](../../../../../util/export/README.md#brandedtb)\<`257`, `"ClusterId"`\>, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L81)

***

### name

> **name**: `"DoorLock"`

#### Inherited from

`Identity.name`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L82)

***

### revision

> **revision**: `6`

#### Inherited from

`Identity.revision`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L83)

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L85)

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L91)

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

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

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

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

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

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

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

[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../../datatype/export/README.md#commandid)[], `never`\>

List of client generated commands which are supported by this cluster server instance.

##### attributes.actuatorEnabled

> `readonly` **actuatorEnabled**: [`Attribute`](../../../interfaces/Attribute.md)\<`boolean`, `any`\>

The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to
(Disabled) process remote Lock, Unlock, or Unlock with Timeout commands.

###### See

MatterSpecification.v11.Cluster § 5.2.3.3

##### attributes.alarmMask

> `readonly` **alarmMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is used
to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the associated
alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be turned on or
off by setting or clearing the associated bit in the alarm mask.

This mask DOES NOT apply to the Events mechanism of this cluster.

###### See

MatterSpecification.v11.Cluster § 5.2.3.39

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`AttributeId`](../../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### attributes.autoRelockTime

> `readonly` **autoRelockTime**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. If
set, unlock operations from any source will be timed. For one time unlock with timeout use the specific
command.

###### See

MatterSpecification.v11.Cluster § 5.2.3.26

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.credentialRulesSupport

> `readonly` **credentialRulesSupport**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.defaultConfigurationRegister

> `readonly` **defaultConfigurationRegister**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

> `readonly` **doorClosedEvents**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.doorOpenEvents

> `readonly` **doorOpenEvents**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.doorState

> `readonly` **doorState**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`DoorState`](../enumerations/DoorState.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.enableInsideStatusLed

> `readonly` **enableInsideStatusLed**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable an inside LED that allows the user to see at a glance if the door is locked.

###### See

MatterSpecification.v11.Cluster § 5.2.3.31

##### attributes.enableLocalProgramming

> `readonly` **enableLocalProgramming**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures
attribute). If this value is set to TRUE then local programming is enabled on the door lock for all
features. If it is set to FALSE then local programming is disabled on the door lock for those features
whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming shall be enabled by
default.

###### See

MatterSpecification.v11.Cluster § 5.2.3.29

##### attributes.enableLogging

> `readonly` **enableLogging**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.enableOneTouchLocking

> `readonly` **enableOneTouchLocking**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable the ability to lock the door lock with a single touch on the door lock.

###### See

MatterSpecification.v11.Cluster § 5.2.3.30

##### attributes.enablePrivacyModeButton

> `readonly` **enablePrivacyModeButton**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

Enable/disable a button inside the door that is used to put the lock into privacy mode. When the lock is
in privacy mode it cannot be manipulated from the outside.

###### See

MatterSpecification.v11.Cluster § 5.2.3.32

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EventId`](../../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.expiringUserTimeout

> `readonly` **expiringUserTimeout**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.keypadOperationEventMask

> `readonly` **keypadOperationEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.keypadProgrammingEventMask

> `readonly` **keypadProgrammingEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.language

> `readonly` **language**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`string`, `any`\>

Modifies the language for the on-screen or audible user interface using a 2-byte language code from
ISO-639-1.

###### See

MatterSpecification.v11.Cluster § 5.2.3.22

##### attributes.ledSettings

> `readonly` **ledSettings**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The settings for the LED support three different modes

###### See

MatterSpecification.v11.Cluster § 5.2.3.25

##### attributes.localProgrammingFeatures

> `readonly` **localProgrammingFeatures**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The local programming features that will be disabled when EnableLocalProgramming attribute is set to
False. If a door lock doesn’t support disabling one aspect of local programming it shall return
CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming attribute is
set to True then all local programming features shall be enabled regardless of the bits set to 0 in this
attribute.

The features that can be disabled from local programming are defined in the following bitmap.

###### See

MatterSpecification.v11.Cluster § 5.2.3.33

##### attributes.lockState

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

##### attributes.lockType

> `readonly` **lockType**: [`Attribute`](../../../interfaces/Attribute.md)\<[`LockType`](../enumerations/LockType.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.3.2

##### attributes.manualOperationEventMask

> `readonly` **manualOperationEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxPinCodeLength

> `readonly` **maxPinCodeLength**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.maxRfidCodeLength

> `readonly` **maxRfidCodeLength**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.minPinCodeLength

> `readonly` **minPinCodeLength**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.minRfidCodeLength

> `readonly` **minRfidCodeLength**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfCredentialsSupportedPerUser

> `readonly` **numberOfCredentialsSupportedPerUser**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfHolidaySchedulesSupported

> `readonly` **numberOfHolidaySchedulesSupported**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfLogRecordsSupported

> `readonly` **numberOfLogRecordsSupported**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfPinUsersSupported

> `readonly` **numberOfPinUsersSupported**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfRfidUsersSupported

> `readonly` **numberOfRfidUsersSupported**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfTotalUsersSupported

> `readonly` **numberOfTotalUsersSupported**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfWeekDaySchedulesSupportedPerUser

> `readonly` **numberOfWeekDaySchedulesSupportedPerUser**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfYearDaySchedulesSupportedPerUser

> `readonly` **numberOfYearDaySchedulesSupportedPerUser**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.openPeriod

> `readonly` **openPeriod**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.operatingMode

> `readonly` **operatingMode**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`OperatingMode`](../enumerations/OperatingMode.md), `any`\>

The current operating mode of the lock (see OperatingModeEnum).

###### See

MatterSpecification.v11.Cluster § 5.2.3.23

##### attributes.remoteOperationEventMask

> `readonly` **remoteOperationEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.remoteProgrammingEventMask

> `readonly` **remoteProgrammingEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.requirePinForRemoteOperation

> `readonly` **requirePinForRemoteOperation**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.rfidOperationEventMask

> `readonly` **rfidOperationEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rfidProgrammingEventMask

> `readonly` **rfidProgrammingEventMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.sendPinOverTheAir

> `readonly` **sendPinOverTheAir**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.soundVolume

> `readonly` **soundVolume**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The sound volume on a door lock has four possible settings: silent, low, high and medium volumes

###### See

MatterSpecification.v11.Cluster § 5.2.3.27

##### attributes.supportedOperatingModes

> `readonly` **supportedOperatingModes**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All
operating modes NOT supported by a lock shall be set to one. The value of the OperatingMode enumeration
defines the related bit to be set, as

###### See

MatterSpecification.v11.Cluster § 5.2.3.24

##### attributes.userCodeTemporaryDisableTime

> `readonly` **userCodeTemporaryDisableTime**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.wrongCodeEntryLimit

> `readonly` **wrongCodeEntryLimit**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands

> `readonly` **commands**: `object`

##### commands.clearAllPinCodes

> `readonly` **clearAllPinCodes**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.clearAllRfidCodes

> `readonly` **clearAllRfidCodes**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.clearCredential

> `readonly` **clearCredential**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.clearHolidaySchedule

> `readonly` **clearHolidaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.clearPinCode

> `readonly` **clearPinCode**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.clearRfidCode

> `readonly` **clearRfidCode**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.clearUser

> `readonly` **clearUser**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.clearWeekDaySchedule

> `readonly` **clearWeekDaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.clearYearDaySchedule

> `readonly` **clearYearDaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.getCredentialStatus

> `readonly` **getCredentialStatus**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.getHolidaySchedule

> `readonly` **getHolidaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.getLogRecord

> `readonly` **getLogRecord**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.getPinCode

> `readonly` **getPinCode**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.getRfidCode

> `readonly` **getRfidCode**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.getUser

> `readonly` **getUser**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.getUserStatus

> `readonly` **getUserStatus**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.getUserType

> `readonly` **getUserType**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.getWeekDaySchedule

> `readonly` **getWeekDaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.getYearDaySchedule

> `readonly` **getYearDaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.lockDoor

> `readonly` **lockDoor**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.setCredential

> `readonly` **setCredential**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.setHolidaySchedule

> `readonly` **setHolidaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.setPinCode

> `readonly` **setPinCode**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.setRfidCode

> `readonly` **setRfidCode**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.setUser

> `readonly` **setUser**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.setUserStatus

> `readonly` **setUserStatus**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.setUserType

> `readonly` **setUserType**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.setWeekDaySchedule

> `readonly` **setWeekDaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.setYearDaySchedule

> `readonly` **setYearDaySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.unlockDoor

> `readonly` **unlockDoor**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### commands.unlockWithTimeout

> `readonly` **unlockWithTimeout**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 5.2.4

##### events

> `readonly` **events**: `object`

##### events.doorLockAlarm

> `readonly` **doorLockAlarm**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock cluster provides several alarms which can be sent when there is a critical state on the
door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum section below.

###### See

MatterSpecification.v11.Cluster § 5.2.5.1

##### events.doorStateChange

> `readonly` **doorStateChange**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### events.lockOperation

> `readonly` **lockOperation**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a LockOperation event when the event is triggered by the various lock
operation sources.

###### See

MatterSpecification.v11.Cluster § 5.2.5.3

##### events.lockOperationError

> `readonly` **lockOperationError**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The door lock server sends out a LockOperationError event when a lock operation fails for various
reasons.

###### See

MatterSpecification.v11.Cluster § 5.2.5.4

##### events.lockUserChange

> `readonly` **lockUserChange**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.credentialOverTheAirAccess

> `readonly` **credentialOverTheAirAccess**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

CredentialOverTheAirAccess

PIN codes over- the-air supported for lock/unlock operations

##### features.doorPositionSensor

> `readonly` **doorPositionSensor**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

DoorPositionSensor

Lock supports a door position sensor that indicates door’s state

##### features.faceCredentials

> `readonly` **faceCredentials**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

FaceCredentials

Lock supports face related credentials (face, iris, retina)

##### features.fingerCredentials

> `readonly` **fingerCredentials**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

FingerCredentials

Lock supports finger related credentials (fingerprint, finger vein)

##### features.holidaySchedules

> `readonly` **holidaySchedules**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

HolidaySchedules

Lock supports holiday schedules

##### features.logging

> `readonly` **logging**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Logging

Lock supports local/on-lock logging when Events are not supported

##### features.notification

> `readonly` **notification**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Notification

Operation and Programming Notifications

##### features.pinCredential

> `readonly` **pinCredential**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

PinCredential

Lock supports PIN credentials (via keypad, or over- the-air)

##### features.rfidCredential

> `readonly` **rfidCredential**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

RfidCredential

Lock supports RFID credentials

##### features.user

> `readonly` **user**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

User

Lock supports the user commands and database

##### features.weekDayAccessSchedules

> `readonly` **weekDayAccessSchedules**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

WeekDayAccessSchedules

Lock supports week day user access schedules

##### features.yearDayAccessSchedules

> `readonly` **yearDayAccessSchedules**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

YearDayAccessSchedules

Lock supports year day user access schedules

##### id

> `readonly` **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`257`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"DoorLock"` = `Cluster.name`

##### revision

> `readonly` **revision**: `6` = `Cluster.revision`

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
