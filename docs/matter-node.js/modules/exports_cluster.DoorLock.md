[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / DoorLock

# Namespace: DoorLock

[exports/cluster](exports_cluster.md).DoorLock

## Table of contents

### Enumerations

- [AlarmCode](../enums/exports_cluster.DoorLock.AlarmCode.md)
- [CredentialRule](../enums/exports_cluster.DoorLock.CredentialRule.md)
- [CredentialType](../enums/exports_cluster.DoorLock.CredentialType.md)
- [DataOperationType](../enums/exports_cluster.DoorLock.DataOperationType.md)
- [DlStatus](../enums/exports_cluster.DoorLock.DlStatus.md)
- [DoorState](../enums/exports_cluster.DoorLock.DoorState.md)
- [Feature](../enums/exports_cluster.DoorLock.Feature.md)
- [LockDataType](../enums/exports_cluster.DoorLock.LockDataType.md)
- [LockOperationType](../enums/exports_cluster.DoorLock.LockOperationType.md)
- [LockState](../enums/exports_cluster.DoorLock.LockState.md)
- [LockType](../enums/exports_cluster.DoorLock.LockType.md)
- [OperatingMode](../enums/exports_cluster.DoorLock.OperatingMode.md)
- [OperationError](../enums/exports_cluster.DoorLock.OperationError.md)
- [OperationSource](../enums/exports_cluster.DoorLock.OperationSource.md)
- [UserStatus](../enums/exports_cluster.DoorLock.UserStatus.md)
- [UserType](../enums/exports_cluster.DoorLock.UserType.md)

### Interfaces

- [ClearCredentialRequest](../interfaces/exports_cluster.DoorLock.ClearCredentialRequest.md)
- [ClearHolidayScheduleRequest](../interfaces/exports_cluster.DoorLock.ClearHolidayScheduleRequest.md)
- [ClearUserRequest](../interfaces/exports_cluster.DoorLock.ClearUserRequest.md)
- [ClearWeekDayScheduleRequest](../interfaces/exports_cluster.DoorLock.ClearWeekDayScheduleRequest.md)
- [ClearYearDayScheduleRequest](../interfaces/exports_cluster.DoorLock.ClearYearDayScheduleRequest.md)
- [Cluster](../interfaces/exports_cluster.DoorLock.Cluster.md)
- [Complete](../interfaces/exports_cluster.DoorLock.Complete.md)
- [CredentialStruct](../interfaces/exports_cluster.DoorLock.CredentialStruct.md)
- [DoorLockAlarmEvent](../interfaces/exports_cluster.DoorLock.DoorLockAlarmEvent.md)
- [DoorStateChangeEvent](../interfaces/exports_cluster.DoorLock.DoorStateChangeEvent.md)
- [GetCredentialStatusRequest](../interfaces/exports_cluster.DoorLock.GetCredentialStatusRequest.md)
- [GetCredentialStatusResponse](../interfaces/exports_cluster.DoorLock.GetCredentialStatusResponse.md)
- [GetHolidayScheduleRequest](../interfaces/exports_cluster.DoorLock.GetHolidayScheduleRequest.md)
- [GetHolidayScheduleResponse](../interfaces/exports_cluster.DoorLock.GetHolidayScheduleResponse.md)
- [GetUserRequest](../interfaces/exports_cluster.DoorLock.GetUserRequest.md)
- [GetUserResponse](../interfaces/exports_cluster.DoorLock.GetUserResponse.md)
- [GetWeekDayScheduleRequest](../interfaces/exports_cluster.DoorLock.GetWeekDayScheduleRequest.md)
- [GetWeekDayScheduleResponse](../interfaces/exports_cluster.DoorLock.GetWeekDayScheduleResponse.md)
- [GetYearDayScheduleRequest](../interfaces/exports_cluster.DoorLock.GetYearDayScheduleRequest.md)
- [GetYearDayScheduleResponse](../interfaces/exports_cluster.DoorLock.GetYearDayScheduleResponse.md)
- [LockDoorRequest](../interfaces/exports_cluster.DoorLock.LockDoorRequest.md)
- [LockOperationErrorEvent](../interfaces/exports_cluster.DoorLock.LockOperationErrorEvent.md)
- [LockOperationEvent](../interfaces/exports_cluster.DoorLock.LockOperationEvent.md)
- [LockUserChangeEvent](../interfaces/exports_cluster.DoorLock.LockUserChangeEvent.md)
- [SetCredentialRequest](../interfaces/exports_cluster.DoorLock.SetCredentialRequest.md)
- [SetCredentialResponse](../interfaces/exports_cluster.DoorLock.SetCredentialResponse.md)
- [SetHolidayScheduleRequest](../interfaces/exports_cluster.DoorLock.SetHolidayScheduleRequest.md)
- [SetUserRequest](../interfaces/exports_cluster.DoorLock.SetUserRequest.md)
- [SetWeekDayScheduleRequest](../interfaces/exports_cluster.DoorLock.SetWeekDayScheduleRequest.md)
- [SetYearDayScheduleRequest](../interfaces/exports_cluster.DoorLock.SetYearDayScheduleRequest.md)
- [UnlockDoorRequest](../interfaces/exports_cluster.DoorLock.UnlockDoorRequest.md)
- [UnlockWithTimeoutRequest](../interfaces/exports_cluster.DoorLock.UnlockWithTimeoutRequest.md)

### Variables

- [AlarmMask](exports_cluster.DoorLock.md#alarmmask)
- [Base](exports_cluster.DoorLock.md#base)
- [Cluster](exports_cluster.DoorLock.md#cluster)
- [ClusterInstance](exports_cluster.DoorLock.md#clusterinstance)
- [Complete](exports_cluster.DoorLock.md#complete)
- [CompleteInstance](exports_cluster.DoorLock.md#completeinstance)
- [CredentialOverTheAirAccessAndPinCredentialComponent](exports_cluster.DoorLock.md#credentialovertheairaccessandpincredentialcomponent)
- [CredentialRulesSupport](exports_cluster.DoorLock.md#credentialrulessupport)
- [DaysMaskMap](exports_cluster.DoorLock.md#daysmaskmap)
- [DefaultConfigurationRegister](exports_cluster.DoorLock.md#defaultconfigurationregister)
- [DoorPositionSensorComponent](exports_cluster.DoorLock.md#doorpositionsensorcomponent)
- [HolidaySchedulesComponent](exports_cluster.DoorLock.md#holidayschedulescomponent)
- [KeypadOperationEventMask](exports_cluster.DoorLock.md#keypadoperationeventmask)
- [KeypadProgrammingEventMask](exports_cluster.DoorLock.md#keypadprogrammingeventmask)
- [LocalProgrammingFeatures](exports_cluster.DoorLock.md#localprogrammingfeatures)
- [LoggingComponent](exports_cluster.DoorLock.md#loggingcomponent)
- [ManualOperationEventMask](exports_cluster.DoorLock.md#manualoperationeventmask)
- [NotUserComponent](exports_cluster.DoorLock.md#notusercomponent)
- [NotificationAndPinCredentialComponent](exports_cluster.DoorLock.md#notificationandpincredentialcomponent)
- [NotificationAndRfidCredentialComponent](exports_cluster.DoorLock.md#notificationandrfidcredentialcomponent)
- [NotificationComponent](exports_cluster.DoorLock.md#notificationcomponent)
- [PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent](exports_cluster.DoorLock.md#pincredentialandrfidcredentialandfingercredentialsnotusercomponent)
- [PinCredentialComponent](exports_cluster.DoorLock.md#pincredentialcomponent)
- [PinCredentialNotUserComponent](exports_cluster.DoorLock.md#pincredentialnotusercomponent)
- [PinCredentialOrRfidCredentialComponent](exports_cluster.DoorLock.md#pincredentialorrfidcredentialcomponent)
- [RemoteOperationEventMask](exports_cluster.DoorLock.md#remoteoperationeventmask)
- [RemoteProgrammingEventMask](exports_cluster.DoorLock.md#remoteprogrammingeventmask)
- [RfidCredentialComponent](exports_cluster.DoorLock.md#rfidcredentialcomponent)
- [RfidCredentialNotUserComponent](exports_cluster.DoorLock.md#rfidcredentialnotusercomponent)
- [RfidOperationEventMask](exports_cluster.DoorLock.md#rfidoperationeventmask)
- [RfidProgrammingEventMask](exports_cluster.DoorLock.md#rfidprogrammingeventmask)
- [SupportedOperatingModes](exports_cluster.DoorLock.md#supportedoperatingmodes)
- [TlvClearCredentialRequest](exports_cluster.DoorLock.md#tlvclearcredentialrequest)
- [TlvClearHolidayScheduleRequest](exports_cluster.DoorLock.md#tlvclearholidayschedulerequest)
- [TlvClearUserRequest](exports_cluster.DoorLock.md#tlvclearuserrequest)
- [TlvClearWeekDayScheduleRequest](exports_cluster.DoorLock.md#tlvclearweekdayschedulerequest)
- [TlvClearYearDayScheduleRequest](exports_cluster.DoorLock.md#tlvclearyeardayschedulerequest)
- [TlvCredentialStruct](exports_cluster.DoorLock.md#tlvcredentialstruct)
- [TlvDoorLockAlarmEvent](exports_cluster.DoorLock.md#tlvdoorlockalarmevent)
- [TlvDoorStateChangeEvent](exports_cluster.DoorLock.md#tlvdoorstatechangeevent)
- [TlvGetCredentialStatusRequest](exports_cluster.DoorLock.md#tlvgetcredentialstatusrequest)
- [TlvGetCredentialStatusResponse](exports_cluster.DoorLock.md#tlvgetcredentialstatusresponse)
- [TlvGetHolidayScheduleRequest](exports_cluster.DoorLock.md#tlvgetholidayschedulerequest)
- [TlvGetHolidayScheduleResponse](exports_cluster.DoorLock.md#tlvgetholidayscheduleresponse)
- [TlvGetUserRequest](exports_cluster.DoorLock.md#tlvgetuserrequest)
- [TlvGetUserResponse](exports_cluster.DoorLock.md#tlvgetuserresponse)
- [TlvGetWeekDayScheduleRequest](exports_cluster.DoorLock.md#tlvgetweekdayschedulerequest)
- [TlvGetWeekDayScheduleResponse](exports_cluster.DoorLock.md#tlvgetweekdayscheduleresponse)
- [TlvGetYearDayScheduleRequest](exports_cluster.DoorLock.md#tlvgetyeardayschedulerequest)
- [TlvGetYearDayScheduleResponse](exports_cluster.DoorLock.md#tlvgetyeardayscheduleresponse)
- [TlvLockDoorRequest](exports_cluster.DoorLock.md#tlvlockdoorrequest)
- [TlvLockOperationErrorEvent](exports_cluster.DoorLock.md#tlvlockoperationerrorevent)
- [TlvLockOperationEvent](exports_cluster.DoorLock.md#tlvlockoperationevent)
- [TlvLockUserChangeEvent](exports_cluster.DoorLock.md#tlvlockuserchangeevent)
- [TlvSetCredentialRequest](exports_cluster.DoorLock.md#tlvsetcredentialrequest)
- [TlvSetCredentialResponse](exports_cluster.DoorLock.md#tlvsetcredentialresponse)
- [TlvSetHolidayScheduleRequest](exports_cluster.DoorLock.md#tlvsetholidayschedulerequest)
- [TlvSetUserRequest](exports_cluster.DoorLock.md#tlvsetuserrequest)
- [TlvSetWeekDayScheduleRequest](exports_cluster.DoorLock.md#tlvsetweekdayschedulerequest)
- [TlvSetYearDayScheduleRequest](exports_cluster.DoorLock.md#tlvsetyeardayschedulerequest)
- [TlvUnlockDoorRequest](exports_cluster.DoorLock.md#tlvunlockdoorrequest)
- [TlvUnlockWithTimeoutRequest](exports_cluster.DoorLock.md#tlvunlockwithtimeoutrequest)
- [UserComponent](exports_cluster.DoorLock.md#usercomponent)
- [WeekDayAccessSchedulesComponent](exports_cluster.DoorLock.md#weekdayaccessschedulescomponent)
- [YearDayAccessSchedulesComponent](exports_cluster.DoorLock.md#yeardayaccessschedulescomponent)

## Variables

### AlarmMask

• `Const` **AlarmMask**: `Object`

The value of the DoorLock alarmMask attribute

**`See`**

MatterSpecification.v11.Cluster § 5.2.3.39

#### Type declaration

| Name | Type |
| :------ | :------ |
| `forcedDoorOpenUnderDoorLockedCondition` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockResetToFactoryDefaults` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockingMechanismJammed` | [`BitFlag`](exports_schema.md#bitflag) |
| `reserved` | [`BitFlag`](exports_schema.md#bitflag) |
| `rfModulePowerCycled` | [`BitFlag`](exports_schema.md#bitflag) |
| `tamperAlarmFrontEscutcheonRemovedFromMain` | [`BitFlag`](exports_schema.md#bitflag) |
| `tamperAlarmWrongCodeEntryLimit` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1080

___

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all DoorLock clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `actuatorEnabled`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `lockState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockState`](../enums/exports_cluster.DoorLock.LockState.md) \| ``null``, `any`\> ; `lockType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockType`](../enums/exports_cluster.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperatingMode`](../enums/exports_cluster.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } | - |
| `attributes.actuatorEnabled` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> | The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to (Disabled) process remote Lock, Unlock, or Unlock with Timeout commands. **`See`** MatterSpecification.v11.Cluster § 5.2.3.3 |
| `attributes.alarmMask` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is used to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the associated alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be turned on or off by setting or clearing the associated bit in the alarm mask. This mask DOES NOT apply to the Events mechanism of this cluster. **`See`** MatterSpecification.v11.Cluster § 5.2.3.39 |
| `attributes.autoRelockTime` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. If set, unlock operations from any source will be timed. For one time unlock with timeout use the specific command. **`See`** MatterSpecification.v11.Cluster § 5.2.3.26 |
| `attributes.defaultConfigurationRegister` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | This attribute represents the default configurations as they are physically set on the device (example: hardware dip switch setting, etc…) and represents the default setting for some of the attributes within this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode attributes). This is a read-only attribute and is intended to allow clients to determine what changes may need to be made without having to query all the included attributes. It may be beneficial for the clients to know what the device’s original settings were in the event that the device needs to be restored to factory default settings. If the Client device would like to query and modify the door lock server’s operating settings, it SHOULD send read and write attribute requests to the specific attributes. For example, the Sound Volume attribute default value is Silent Mode. However, it is possible that the current Sound Volume is High Volume. Therefore, if the client wants to query/modify the current Sound Volume setting on the server, the client SHOULD read/write to the Sound Volume attribute. **`See`** MatterSpecification.v11.Cluster § 5.2.3.28 |
| `attributes.enableInsideStatusLed` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> | Enable/disable an inside LED that allows the user to see at a glance if the door is locked. **`See`** MatterSpecification.v11.Cluster § 5.2.3.31 |
| `attributes.enableLocalProgramming` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> | Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures attribute). If this value is set to TRUE then local programming is enabled on the door lock for all features. If it is set to FALSE then local programming is disabled on the door lock for those features whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming shall be enabled by default. **`See`** MatterSpecification.v11.Cluster § 5.2.3.29 |
| `attributes.enableOneTouchLocking` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> | Enable/disable the ability to lock the door lock with a single touch on the door lock. **`See`** MatterSpecification.v11.Cluster § 5.2.3.30 |
| `attributes.enablePrivacyModeButton` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> | Enable/disable a button inside the door that is used to put the lock into privacy mode. When the lock is in privacy mode it cannot be manipulated from the outside. **`See`** MatterSpecification.v11.Cluster § 5.2.3.32 |
| `attributes.language` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> | Modifies the language for the on-screen or audible user interface using a 2-byte language code from ISO-639-1. **`See`** MatterSpecification.v11.Cluster § 5.2.3.22 |
| `attributes.ledSettings` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | The settings for the LED support three different modes **`See`** MatterSpecification.v11.Cluster § 5.2.3.25 |
| `attributes.localProgrammingFeatures` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | The local programming features that will be disabled when EnableLocalProgramming attribute is set to False. If a door lock doesn’t support disabling one aspect of local programming it shall return CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming attribute is set to True then all local programming features shall be enabled regardless of the bits set to 0 in this attribute. The features that can be disabled from local programming are defined in the following bitmap. **`See`** MatterSpecification.v11.Cluster § 5.2.3.33 |
| `attributes.lockState` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockState`](../enums/exports_cluster.DoorLock.LockState.md) \| ``null``, `any`\> | The LockState Attribute may be NULL if the lock hardware does not currently know the status of the locking mechanism. For example, a lock may not know the LockState status after a power cycle until the first lock actuation is completed. The Not Fully Locked value is used by a lock to indicate that the state of the lock is somewhere between Locked and Unlocked so it is only partially secured. For example, a deadbolt could be partially extended and not in a dead latched state. If the Scenes server cluster is implemented on the same endpoint, the following extension field shall be added to the Scene Table: • LockState When the LockState attribute is part of a Scene table, the attribute is treated as a writable command; that is, setting the LockState to lock will command the lock to lock, and setting the LockState to unlock will command the lock to unlock. Setting the LockState attribute to “not fully locked” is not supported. The Transition Time field in the Scene table will be treated as a delay before setting the LockState attribute; that is, it is possible to activate a scene with the lock actuation some seconds later. Locks that do not have an actuation mechanism SHOULD not support the Scene table extension. **`See`** MatterSpecification.v11.Cluster § 5.2.3.1 |
| `attributes.lockType` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockType`](../enums/exports_cluster.DoorLock.LockType.md), `any`\> | **`See`** MatterSpecification.v11.Cluster § 5.2.3.2 |
| `attributes.operatingMode` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperatingMode`](../enums/exports_cluster.DoorLock.OperatingMode.md), `any`\> | The current operating mode of the lock (see OperatingModeEnum). **`See`** MatterSpecification.v11.Cluster § 5.2.3.23 |
| `attributes.soundVolume` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | The sound volume on a door lock has four possible settings: silent, low, high and medium volumes **`See`** MatterSpecification.v11.Cluster § 5.2.3.27 |
| `attributes.supportedOperatingModes` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All operating modes NOT supported by a lock shall be set to one. The value of the OperatingMode enumeration defines the related bit to be set, as **`See`** MatterSpecification.v11.Cluster § 5.2.3.24 |
| `commands` | \{ `lockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } | - |
| `commands.lockDoor` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 5.2.4 |
| `commands.unlockDoor` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 5.2.4 |
| `commands.unlockWithTimeout` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 5.2.4 |
| `events` | \{ `doorLockAlarm`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperation`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } | - |
| `events.doorLockAlarm` | [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The door lock cluster provides several alarms which can be sent when there is a critical state on the door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum section below. **`See`** MatterSpecification.v11.Cluster § 5.2.5.1 |
| `events.lockOperation` | [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The door lock server sends out a LockOperation event when the event is triggered by the various lock operation sources. **`See`** MatterSpecification.v11.Cluster § 5.2.5.3 |
| `events.lockOperationError` | [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The door lock server sends out a LockOperationError event when a lock operation fails for various reasons. **`See`** MatterSpecification.v11.Cluster § 5.2.5.4 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `doorClosedEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorOpenEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`DoorState`](../enums/exports_cluster.DoorLock.DoorState.md) \| ``null``, `any`\> ; `openPeriod`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `doorStateChange`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `doorPositionSensor`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `enableLogging`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> ; `numberOfLogRecordsSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `getLogRecord`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `logging`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `credentialRulesSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfTotalUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearCredential`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `clearUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getCredentialStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `getUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setCredential`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `lockUserChange`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `user`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxPinCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `minPinCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfPinUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\>  }  } ; `flags`: \{ `pinCredential`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxRfidCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `minRfidCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfRfidUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `rfidCredential`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `weekDayAccessSchedules`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `yearDayAccessSchedules`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `holidaySchedules`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `pinCredential`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `rfidCredential`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `requirePinForRemoteOperation`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\>  }  } ; `flags`: \{ `credentialOverTheAirAccess`: ``true`` ; `pinCredential`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `keypadOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  } ; `flags`: \{ `notification`: ``true`` ; `pinCredential`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `manualOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  } ; `flags`: \{ `notification`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rfidOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  } ; `flags`: \{ `notification`: ``true`` ; `rfidCredential`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `clearAllPinCodes`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `clearPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `getPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `setPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `pinCredential`: ``true`` ; `user`: ``false``  }  }, \{ `component`: \{ `commands`: \{ `getUserStatus`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `getUserType`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserStatus`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserType`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `fingerCredentials`: ``true`` ; `pinCredential`: ``true`` ; `rfidCredential`: ``true`` ; `user`: ``false``  }  }, \{ `component`: {} ; `flags`: \{ `user`: ``false``  }  }, \{ `component`: \{ `commands`: \{ `clearAllRfidCodes`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `clearRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `getRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `setRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `rfidCredential`: ``true`` ; `user`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `faceCredentials`: ``false`` ; `fingerCredentials`: ``false`` ; `pinCredential`: ``false`` ; `rfidCredential`: ``false`` ; `user`: ``true``  }  }] | This metadata controls which DoorLockCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `logging`: [`BitFlag`](exports_schema.md#bitflag) ; `notification`: [`BitFlag`](exports_schema.md#bitflag) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `user`: [`BitFlag`](exports_schema.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.credentialOverTheAirAccess` | [`BitFlag`](exports_schema.md#bitflag) | CredentialOverTheAirAccess PIN codes over- the-air supported for lock/unlock operations |
| `features.doorPositionSensor` | [`BitFlag`](exports_schema.md#bitflag) | DoorPositionSensor Lock supports a door position sensor that indicates door’s state |
| `features.faceCredentials` | [`BitFlag`](exports_schema.md#bitflag) | FaceCredentials Lock supports face related credentials (face, iris, retina) |
| `features.fingerCredentials` | [`BitFlag`](exports_schema.md#bitflag) | FingerCredentials Lock supports finger related credentials (fingerprint, finger vein) |
| `features.holidaySchedules` | [`BitFlag`](exports_schema.md#bitflag) | HolidaySchedules Lock supports holiday schedules |
| `features.logging` | [`BitFlag`](exports_schema.md#bitflag) | Logging Lock supports local/on-lock logging when Events are not supported |
| `features.notification` | [`BitFlag`](exports_schema.md#bitflag) | Notification Operation and Programming Notifications |
| `features.pinCredential` | [`BitFlag`](exports_schema.md#bitflag) | PinCredential Lock supports PIN credentials (via keypad, or over- the-air) |
| `features.rfidCredential` | [`BitFlag`](exports_schema.md#bitflag) | RfidCredential Lock supports RFID credentials |
| `features.user` | [`BitFlag`](exports_schema.md#bitflag) | User Lock supports the user commands and database |
| `features.weekDayAccessSchedules` | [`BitFlag`](exports_schema.md#bitflag) | WeekDayAccessSchedules Lock supports week day user access schedules |
| `features.yearDayAccessSchedules` | [`BitFlag`](exports_schema.md#bitflag) | YearDayAccessSchedules Lock supports year day user access schedules |
| `id` | ``257`` | - |
| `name` | ``"DoorLock"`` | - |
| `revision` | ``6`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2242

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.DoorLock.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:4838

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:4840

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `actuatorEnabled`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `lockState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockState`](../enums/exports_cluster.DoorLock.LockState.md) \| ``null``, `any`\> ; `lockType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockType`](../enums/exports_cluster.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperatingMode`](../enums/exports_cluster.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `lockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `doorLockAlarm`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperation`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `doorClosedEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorOpenEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`DoorState`](../enums/exports_cluster.DoorLock.DoorState.md) \| ``null``, `any`\> ; `openPeriod`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `doorStateChange`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `doorPositionSensor`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `enableLogging`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> ; `numberOfLogRecordsSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `getLogRecord`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `logging`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `credentialRulesSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfTotalUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearCredential`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `clearUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getCredentialStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `getUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setCredential`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `lockUserChange`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `user`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxPinCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `minPinCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfPinUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\>  }  } ; `flags`: \{ `pinCredential`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxRfidCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `minRfidCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfRfidUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `rfidCredential`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `weekDayAccessSchedules`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `yearDayAccessSchedules`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `holidaySchedules`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `pinCredential`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `rfidCredential`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `requirePinForRemoteOperation`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\>  }  } ; `flags`: \{ `credentialOverTheAirAccess`: ``true`` ; `pinCredential`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `keypadOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  } ; `flags`: \{ `notification`: ``true`` ; `pinCredential`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `manualOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  } ; `flags`: \{ `notification`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rfidOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  } ; `flags`: \{ `notification`: ``true`` ; `rfidCredential`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `clearAllPinCodes`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `clearPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `getPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `setPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `pinCredential`: ``true`` ; `user`: ``false``  }  }, \{ `component`: \{ `commands`: \{ `getUserStatus`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `getUserType`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserStatus`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserType`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `fingerCredentials`: ``true`` ; `pinCredential`: ``true`` ; `rfidCredential`: ``true`` ; `user`: ``false``  }  }, \{ `component`: {} ; `flags`: \{ `user`: ``false``  }  }, \{ `component`: \{ `commands`: \{ `clearAllRfidCodes`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `clearRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `getRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `setRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `rfidCredential`: ``true`` ; `user`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `faceCredentials`: ``false`` ; `fingerCredentials`: ``false`` ; `pinCredential`: ``false`` ; `rfidCredential`: ``false`` ; `user`: ``true``  }  }] ; `features`: \{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `logging`: [`BitFlag`](exports_schema.md#bitflag) ; `notification`: [`BitFlag`](exports_schema.md#bitflag) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `user`: [`BitFlag`](exports_schema.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``257`` ; `name`: ``"DoorLock"`` ; `revision`: ``6``  }\>

**`See`**

[Cluster](exports_cluster.DoorLock.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:3537

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.DoorLock.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:6025

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:6027

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `actuatorEnabled`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `credentialRulesSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `defaultConfigurationRegister`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `doorClosedEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `doorPositionSensor`: `boolean`  }]  } ; `doorOpenEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `doorPositionSensor`: `boolean`  }]  } ; `doorState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`DoorState`](../enums/exports_cluster.DoorLock.DoorState.md) \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `doorPositionSensor`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLogging`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `logging`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `user`: `boolean`  }]  } ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `keypadOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean` ; `pinCredential`: `boolean`  }]  } ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean` ; `pinCredential`: `boolean`  }]  } ; `language`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `lockState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockState`](../enums/exports_cluster.DoorLock.LockState.md) \| ``null``, `any`\> ; `lockType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockType`](../enums/exports_cluster.DoorLock.LockType.md), `any`\> ; `manualOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean`  }]  } ; `maxPinCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `maxRfidCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `minPinCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `minRfidCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfLogRecordsSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `logging`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfPinUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfRfidUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfTotalUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `openPeriod`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `doorPositionSensor`: `boolean`  }]  } ; `operatingMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperatingMode`](../enums/exports_cluster.DoorLock.OperatingMode.md), `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean`  }]  } ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean`  }]  } ; `requirePinForRemoteOperation`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `credentialOverTheAirAccess`: `boolean` ; `pinCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `rfidOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean` ; `rfidCredential`: `boolean`  }]  } ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean` ; `rfidCredential`: `boolean`  }]  } ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `pinCredential`: `boolean`  }]  } ; `soundVolume`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean`  }, \{ `rfidCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean`  }, \{ `rfidCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `clearAllPinCodes`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearAllRfidCodes`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearCredential`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getCredentialStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getLogRecord`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `logging`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getUserStatus`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` ; `pinCredential`: `boolean` ; `rfidCredential`: `boolean` ; `user`: `boolean`  }]  } ; `getUserType`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` ; `pinCredential`: `boolean` ; `rfidCredential`: `boolean` ; `user`: `boolean`  }]  } ; `getWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `lockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `setCredential`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setUserStatus`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` ; `pinCredential`: `boolean` ; `rfidCredential`: `boolean` ; `user`: `boolean`  }]  } ; `setUserType`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` ; `pinCredential`: `boolean` ; `rfidCredential`: `boolean` ; `user`: `boolean`  }]  } ; `setWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unlockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `doorLockAlarm`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `doorStateChange`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `doorPositionSensor`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `lockOperation`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockUserChange`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `logging`: [`BitFlag`](exports_schema.md#bitflag) ; `notification`: [`BitFlag`](exports_schema.md#bitflag) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `user`: [`BitFlag`](exports_schema.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"DoorLock"`` ; `revision`: ``6``  }\>

**`See`**

[Complete](exports_cluster.DoorLock.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:4844

___

### CredentialOverTheAirAccessAndPinCredentialComponent

• `Const` **CredentialOverTheAirAccessAndPinCredentialComponent**: `Object`

A DoorLockCluster supports these elements if it supports features CredentialOverTheAirAccess and PinCredential.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `requirePinForRemoteOperation`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\>  } |
| `attributes.requirePinForRemoteOperation` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1932

___

### CredentialRulesSupport

• `Const` **CredentialRulesSupport**: `Object`

The value of the DoorLock credentialRulesSupport attribute

**`See`**

MatterSpecification.v11.Cluster § 5.2.3.19

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dual` | [`BitFlag`](exports_schema.md#bitflag) |
| `single` | [`BitFlag`](exports_schema.md#bitflag) |
| `tri` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:71

___

### DaysMaskMap

• `Const` **DaysMaskMap**: `Object`

The DaysMask field used in various commands and shall indicate the days of the week the Week Day schedule
applies for.

**`See`**

MatterSpecification.v11.Cluster § 5.2.6.6

#### Type declaration

| Name | Type |
| :------ | :------ |
| `friday` | [`BitFlag`](exports_schema.md#bitflag) |
| `monday` | [`BitFlag`](exports_schema.md#bitflag) |
| `saturday` | [`BitFlag`](exports_schema.md#bitflag) |
| `sunday` | [`BitFlag`](exports_schema.md#bitflag) |
| `thursday` | [`BitFlag`](exports_schema.md#bitflag) |
| `tuesday` | [`BitFlag`](exports_schema.md#bitflag) |
| `wednesday` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:600

___

### DefaultConfigurationRegister

• `Const` **DefaultConfigurationRegister**: `Object`

The value of the DoorLock defaultConfigurationRegister attribute

**`See`**

MatterSpecification.v11.Cluster § 5.2.3.28

#### Type declaration

| Name | Type |
| :------ | :------ |
| `autoRelockTimeSet` | [`BitFlag`](exports_schema.md#bitflag) |
| `enableLocalProgrammingEnabled` | [`BitFlag`](exports_schema.md#bitflag) |
| `keypadInterfaceDefaultAccessEnabled` | [`BitFlag`](exports_schema.md#bitflag) |
| `ledSettingsSet` | [`BitFlag`](exports_schema.md#bitflag) |
| `remoteInterfaceDefaultAccessIsEnabled` | [`BitFlag`](exports_schema.md#bitflag) |
| `soundEnabled` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1056

___

### DoorPositionSensorComponent

• `Const` **DoorPositionSensorComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature DoorPositionSensor.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `doorClosedEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorOpenEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`DoorState`](../enums/exports_cluster.DoorLock.DoorState.md) \| ``null``, `any`\> ; `openPeriod`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } |
| `attributes.doorClosedEvents` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.doorOpenEvents` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.doorState` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`DoorState`](../enums/exports_cluster.DoorLock.DoorState.md) \| ``null``, `any`\> |
| `attributes.openPeriod` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `events` | \{ `doorStateChange`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `events.doorStateChange` | [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1369

___

### HolidaySchedulesComponent

• `Const` **HolidaySchedulesComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature HolidaySchedules.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.numberOfHolidaySchedulesSupported` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `clearHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.clearHolidaySchedule` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.getHolidaySchedule` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |
| `commands.setHolidaySchedule` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1859

___

### KeypadOperationEventMask

• `Const` **KeypadOperationEventMask**: `Object`

The value of the DoorLock keypadOperationEventMask attribute

**`See`**

MatterSpecification.v11.Cluster § 5.2.3.40

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lockSourceKeypad` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockSourceKeypadErrorInvalidPin` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockSourceKeypadErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag) |
| `nonAccessUserOperationEventSourceKeypad` | [`BitFlag`](exports_schema.md#bitflag) |
| `unknownOrManufacturerSpecificKeypadOperationEvent` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceKeypad` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceKeypadErrorInvalidCode` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceKeypadErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:878

___

### KeypadProgrammingEventMask

• `Const` **KeypadProgrammingEventMask**: `Object`

The value of the DoorLock keypadProgrammingEventMask attribute

**`See`**

MatterSpecification.v11.Cluster § 5.2.3.44

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pinAdded` | [`BitFlag`](exports_schema.md#bitflag) |
| `pinChanged` | [`BitFlag`](exports_schema.md#bitflag) |
| `pinCleared` | [`BitFlag`](exports_schema.md#bitflag) |
| `pinCodeChanged` | [`BitFlag`](exports_schema.md#bitflag) |
| `unknown` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:893

___

### LocalProgrammingFeatures

• `Const` **LocalProgrammingFeatures**: `Object`

The value of the DoorLock localProgrammingFeatures attribute

**`See`**

MatterSpecification.v11.Cluster § 5.2.3.33

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addUsersCredentialsSchedulesLocally` | [`BitFlag`](exports_schema.md#bitflag) |
| `adjustLockSettingsLocally` | [`BitFlag`](exports_schema.md#bitflag) |
| `clearUsersCredentialsSchedulesLocally` | [`BitFlag`](exports_schema.md#bitflag) |
| `modifyUsersCredentialsSchedulesLocally` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1069

___

### LoggingComponent

• `Const` **LoggingComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature Logging.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `enableLogging`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> ; `numberOfLogRecordsSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.enableLogging` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> |
| `attributes.numberOfLogRecordsSupported` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `getLogRecord`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } |
| `commands.getLogRecord` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1418

___

### ManualOperationEventMask

• `Const` **ManualOperationEventMask**: `Object`

The value of the DoorLock manualOperationEventMask attribute

**`See`**

MatterSpecification.v11.Cluster § 5.2.3.42

#### Type declaration

| Name | Type |
| :------ | :------ |
| `autoLock` | [`BitFlag`](exports_schema.md#bitflag) |
| `keyLock` | [`BitFlag`](exports_schema.md#bitflag) |
| `keyUnlock` | [`BitFlag`](exports_schema.md#bitflag) |
| `manualLock` | [`BitFlag`](exports_schema.md#bitflag) |
| `manualUnlock` | [`BitFlag`](exports_schema.md#bitflag) |
| `oneTouchLock` | [`BitFlag`](exports_schema.md#bitflag) |
| `scheduleLock` | [`BitFlag`](exports_schema.md#bitflag) |
| `scheduleUnlock` | [`BitFlag`](exports_schema.md#bitflag) |
| `thumbturnLock` | [`BitFlag`](exports_schema.md#bitflag) |
| `thumbturnUnlock` | [`BitFlag`](exports_schema.md#bitflag) |
| `unknownOrManufacturerSpecificManualOperationEvent` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:919

___

### NotUserComponent

• `Const` **NotUserComponent**: `Object`

A DoorLockCluster supports these elements if doesn't support feature USR.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2135

___

### NotificationAndPinCredentialComponent

• `Const` **NotificationAndPinCredentialComponent**: `Object`

A DoorLockCluster supports these elements if it supports features Notification and PinCredential.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `keypadOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } |
| `attributes.keypadOperationEventMask` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |
| `attributes.keypadProgrammingEventMask` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1946

___

### NotificationAndRfidCredentialComponent

• `Const` **NotificationAndRfidCredentialComponent**: `Object`

A DoorLockCluster supports these elements if it supports features Notification and RfidCredential.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `rfidOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } |
| `attributes.rfidOperationEventMask` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |
| `attributes.rfidProgrammingEventMask` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2050

___

### NotificationComponent

• `Const` **NotificationComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature Notification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `manualOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } |
| `attributes.manualOperationEventMask` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |
| `attributes.remoteOperationEventMask` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |
| `attributes.remoteProgrammingEventMask` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1987

___

### PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent

• `Const` **PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent**: `Object`

A DoorLockCluster supports these elements if it supports features PinCredential, RfidCredential and
FingerCredentials and it doesn't support feature USR.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `getUserStatus`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `getUserType`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserStatus`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserType`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\>  } |
| `commands.getUserStatus` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> |
| `commands.getUserType` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> |
| `commands.setUserStatus` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> |
| `commands.setUserType` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2112

___

### PinCredentialComponent

• `Const` **PinCredentialComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature PinCredential.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxPinCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `minPinCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfPinUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\>  } |
| `attributes.maxPinCodeLength` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.minPinCodeLength` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.numberOfPinUsersSupported` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.sendPinOverTheAir` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1680

___

### PinCredentialNotUserComponent

• `Const` **PinCredentialNotUserComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature PinCredential and it doesn't support feature
USR.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `clearAllPinCodes`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `clearPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `getPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `setPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } |
| `commands.clearAllPinCodes` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |
| `commands.clearPinCode` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |
| `commands.getPinCode` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |
| `commands.setPinCode` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2088

___

### PinCredentialOrRfidCredentialComponent

• `Const` **PinCredentialOrRfidCredentialComponent**: `Object`

A DoorLockCluster supports these elements if it supports features PinCredential or RfidCredential.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } |
| `attributes.userCodeTemporaryDisableTime` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> |
| `attributes.wrongCodeEntryLimit` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1901

___

### RemoteOperationEventMask

• `Const` **RemoteOperationEventMask**: `Object`

The value of the DoorLock remoteOperationEventMask attribute

**`See`**

MatterSpecification.v11.Cluster § 5.2.3.41

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lockSourceRemote` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockSourceRemoteErrorInvalidCode` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockSourceRemoteErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag) |
| `unknownOrManufacturerSpecificRemoteOperationEvent` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceRemote` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceRemoteErrorInvalidCode` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceRemoteErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:905

___

### RemoteProgrammingEventMask

• `Const` **RemoteProgrammingEventMask**: `Object`

The value of the DoorLock remoteProgrammingEventMask attribute

**`See`**

MatterSpecification.v11.Cluster § 5.2.3.45

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pinAdded` | [`BitFlag`](exports_schema.md#bitflag) |
| `pinChanged` | [`BitFlag`](exports_schema.md#bitflag) |
| `pinCleared` | [`BitFlag`](exports_schema.md#bitflag) |
| `rfidCodeAdded` | [`BitFlag`](exports_schema.md#bitflag) |
| `rfidCodeCleared` | [`BitFlag`](exports_schema.md#bitflag) |
| `unknown` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:937

___

### RfidCredentialComponent

• `Const` **RfidCredentialComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature RfidCredential.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxRfidCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `minRfidCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfRfidUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.maxRfidCodeLength` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.minRfidCodeLength` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.numberOfRfidUsersSupported` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1720

___

### RfidCredentialNotUserComponent

• `Const` **RfidCredentialNotUserComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature RfidCredential and it doesn't support feature
USR.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `clearAllRfidCodes`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `clearRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `getRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `setRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } |
| `commands.clearAllRfidCodes` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |
| `commands.clearRfidCode` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |
| `commands.getRfidCode` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |
| `commands.setRfidCode` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2140

___

### RfidOperationEventMask

• `Const` **RfidOperationEventMask**: `Object`

The value of the DoorLock rfidOperationEventMask attribute

**`See`**

MatterSpecification.v11.Cluster § 5.2.3.43

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lockSourceRfid` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockSourceRfidErrorInvalidRfidId` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockSourceRfidErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag) |
| `unknownOrManufacturerSpecificKeypadOperationEvent` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceRfid` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceRfidErrorInvalidRfidId` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceRfidErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:950

___

### RfidProgrammingEventMask

• `Const` **RfidProgrammingEventMask**: `Object`

The value of the DoorLock rfidProgrammingEventMask attribute

**`See`**

MatterSpecification.v11.Cluster § 5.2.3.46

#### Type declaration

| Name | Type |
| :------ | :------ |
| `idAdded` | [`BitFlag`](exports_schema.md#bitflag) |
| `idCleared` | [`BitFlag`](exports_schema.md#bitflag) |
| `unknown` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:964

___

### SupportedOperatingModes

• `Const` **SupportedOperatingModes**: `Object`

The value of the DoorLock supportedOperatingModes attribute

**`See`**

MatterSpecification.v11.Cluster § 5.2.3.24

#### Type declaration

| Name | Type |
| :------ | :------ |
| `noRemoteLockUnlock` | [`BitFlag`](exports_schema.md#bitflag) |
| `normal` | [`BitFlag`](exports_schema.md#bitflag) |
| `passage` | [`BitFlag`](exports_schema.md#bitflag) |
| `privacy` | [`BitFlag`](exports_schema.md#bitflag) |
| `vacation` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1044

___

### TlvClearCredentialRequest

• `Const` **TlvClearCredentialRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearCredential command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:431

___

### TlvClearHolidayScheduleRequest

• `Const` **TlvClearHolidayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearHolidaySchedule command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:863

___

### TlvClearUserRequest

• `Const` **TlvClearUserRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearUser command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:314

___

### TlvClearWeekDayScheduleRequest

• `Const` **TlvClearWeekDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearWeekDaySchedule command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:685

___

### TlvClearYearDayScheduleRequest

• `Const` **TlvClearYearDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearYearDaySchedule command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:750

___

### TlvCredentialStruct

• `Const` **TlvCredentialStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
credential types and their corresponding indices (if any) for the event or user record.

**`See`**

MatterSpecification.v11.Cluster § 5.2.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:250

___

### TlvDoorLockAlarmEvent

• `Const` **TlvDoorLockAlarmEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock doorLockAlarm event

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1179

___

### TlvDoorStateChangeEvent

• `Const` **TlvDoorStateChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock doorStateChange event

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:51

___

### TlvGetCredentialStatusRequest

• `Const` **TlvGetCredentialStatusRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getCredentialStatus command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:386

___

### TlvGetCredentialStatusResponse

• `Const` **TlvGetCredentialStatusResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:414

___

### TlvGetHolidayScheduleRequest

• `Const` **TlvGetHolidayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getHolidaySchedule command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:833

___

### TlvGetHolidayScheduleResponse

• `Const` **TlvGetHolidayScheduleResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:846

___

### TlvGetUserRequest

• `Const` **TlvGetUserRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getUser command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:221

___

### TlvGetUserResponse

• `Const` **TlvGetUserResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:277

___

### TlvGetWeekDayScheduleRequest

• `Const` **TlvGetWeekDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getWeekDaySchedule command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:643

___

### TlvGetWeekDayScheduleResponse

• `Const` **TlvGetWeekDayScheduleResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:657

___

### TlvGetYearDayScheduleRequest

• `Const` **TlvGetYearDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getYearDaySchedule command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:719

___

### TlvGetYearDayScheduleResponse

• `Const` **TlvGetYearDayScheduleResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:733

___

### TlvLockDoorRequest

• `Const` **TlvLockDoorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock lockDoor command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1094

___

### TlvLockOperationErrorEvent

• `Const` **TlvLockOperationErrorEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock lockOperationError event

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1293

___

### TlvLockOperationEvent

• `Const` **TlvLockOperationEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock lockOperation event

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1210

___

### TlvLockUserChangeEvent

• `Const` **TlvLockUserChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock lockUserChange event

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:536

___

### TlvSetCredentialRequest

• `Const` **TlvSetCredentialRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setCredential command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:329

___

### TlvSetCredentialResponse

• `Const` **TlvSetCredentialResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:371

___

### TlvSetHolidayScheduleRequest

• `Const` **TlvSetHolidayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setHolidaySchedule command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:815

___

### TlvSetUserRequest

• `Const` **TlvSetUserRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setUser command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:200

___

### TlvSetWeekDayScheduleRequest

• `Const` **TlvSetWeekDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setWeekDaySchedule command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:614

___

### TlvSetYearDayScheduleRequest

• `Const` **TlvSetYearDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setYearDaySchedule command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:701

___

### TlvUnlockDoorRequest

• `Const` **TlvUnlockDoorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock unlockDoor command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1109

___

### TlvUnlockWithTimeoutRequest

• `Const` **TlvUnlockWithTimeoutRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock unlockWithTimeout command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1124

___

### UserComponent

• `Const` **UserComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature User.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `credentialRulesSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfTotalUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.credentialRulesSupport` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |
| `attributes.expiringUserTimeout` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.numberOfCredentialsSupportedPerUser` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.numberOfTotalUsersSupported` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `clearCredential`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `clearUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getCredentialStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `getUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setCredential`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.clearCredential` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.clearUser` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.getCredentialStatus` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |
| `commands.getUser` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |
| `commands.setCredential` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |
| `commands.setUser` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `events` | \{ `lockUserChange`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `events.lockUserChange` | [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1446

___

### WeekDayAccessSchedulesComponent

• `Const` **WeekDayAccessSchedulesComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature WeekDayAccessSchedules.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.numberOfWeekDaySchedulesSupportedPerUser` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `clearWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.clearWeekDaySchedule` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.getWeekDaySchedule` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |
| `commands.setWeekDaySchedule` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1749

___

### YearDayAccessSchedulesComponent

• `Const` **YearDayAccessSchedulesComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature YearDayAccessSchedules.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.numberOfYearDaySchedulesSupportedPerUser` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `clearYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.clearYearDaySchedule` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.getYearDaySchedule` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |
| `commands.setYearDaySchedule` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1815
