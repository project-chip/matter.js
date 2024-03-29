[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / DoorLock

# Namespace: DoorLock

[cluster/export](cluster_export.md).DoorLock

## Table of contents

### Enumerations

- [AlarmCode](../enums/cluster_export.DoorLock.AlarmCode.md)
- [CredentialRule](../enums/cluster_export.DoorLock.CredentialRule.md)
- [CredentialType](../enums/cluster_export.DoorLock.CredentialType.md)
- [DataOperationType](../enums/cluster_export.DoorLock.DataOperationType.md)
- [DlStatus](../enums/cluster_export.DoorLock.DlStatus.md)
- [DoorState](../enums/cluster_export.DoorLock.DoorState.md)
- [Feature](../enums/cluster_export.DoorLock.Feature.md)
- [LockDataType](../enums/cluster_export.DoorLock.LockDataType.md)
- [LockOperationType](../enums/cluster_export.DoorLock.LockOperationType.md)
- [LockState](../enums/cluster_export.DoorLock.LockState.md)
- [LockType](../enums/cluster_export.DoorLock.LockType.md)
- [OperatingMode](../enums/cluster_export.DoorLock.OperatingMode.md)
- [OperationError](../enums/cluster_export.DoorLock.OperationError.md)
- [OperationSource](../enums/cluster_export.DoorLock.OperationSource.md)
- [UserStatus](../enums/cluster_export.DoorLock.UserStatus.md)
- [UserType](../enums/cluster_export.DoorLock.UserType.md)

### Interfaces

- [ClearCredentialRequest](../interfaces/cluster_export.DoorLock.ClearCredentialRequest.md)
- [ClearHolidayScheduleRequest](../interfaces/cluster_export.DoorLock.ClearHolidayScheduleRequest.md)
- [ClearUserRequest](../interfaces/cluster_export.DoorLock.ClearUserRequest.md)
- [ClearWeekDayScheduleRequest](../interfaces/cluster_export.DoorLock.ClearWeekDayScheduleRequest.md)
- [ClearYearDayScheduleRequest](../interfaces/cluster_export.DoorLock.ClearYearDayScheduleRequest.md)
- [Cluster](../interfaces/cluster_export.DoorLock.Cluster.md)
- [Complete](../interfaces/cluster_export.DoorLock.Complete.md)
- [CredentialStruct](../interfaces/cluster_export.DoorLock.CredentialStruct.md)
- [DoorLockAlarmEvent](../interfaces/cluster_export.DoorLock.DoorLockAlarmEvent.md)
- [DoorStateChangeEvent](../interfaces/cluster_export.DoorLock.DoorStateChangeEvent.md)
- [GetCredentialStatusRequest](../interfaces/cluster_export.DoorLock.GetCredentialStatusRequest.md)
- [GetCredentialStatusResponse](../interfaces/cluster_export.DoorLock.GetCredentialStatusResponse.md)
- [GetHolidayScheduleRequest](../interfaces/cluster_export.DoorLock.GetHolidayScheduleRequest.md)
- [GetHolidayScheduleResponse](../interfaces/cluster_export.DoorLock.GetHolidayScheduleResponse.md)
- [GetUserRequest](../interfaces/cluster_export.DoorLock.GetUserRequest.md)
- [GetUserResponse](../interfaces/cluster_export.DoorLock.GetUserResponse.md)
- [GetWeekDayScheduleRequest](../interfaces/cluster_export.DoorLock.GetWeekDayScheduleRequest.md)
- [GetWeekDayScheduleResponse](../interfaces/cluster_export.DoorLock.GetWeekDayScheduleResponse.md)
- [GetYearDayScheduleRequest](../interfaces/cluster_export.DoorLock.GetYearDayScheduleRequest.md)
- [GetYearDayScheduleResponse](../interfaces/cluster_export.DoorLock.GetYearDayScheduleResponse.md)
- [LockDoorRequest](../interfaces/cluster_export.DoorLock.LockDoorRequest.md)
- [LockOperationErrorEvent](../interfaces/cluster_export.DoorLock.LockOperationErrorEvent.md)
- [LockOperationEvent](../interfaces/cluster_export.DoorLock.LockOperationEvent.md)
- [LockUserChangeEvent](../interfaces/cluster_export.DoorLock.LockUserChangeEvent.md)
- [SetCredentialRequest](../interfaces/cluster_export.DoorLock.SetCredentialRequest.md)
- [SetCredentialResponse](../interfaces/cluster_export.DoorLock.SetCredentialResponse.md)
- [SetHolidayScheduleRequest](../interfaces/cluster_export.DoorLock.SetHolidayScheduleRequest.md)
- [SetUserRequest](../interfaces/cluster_export.DoorLock.SetUserRequest.md)
- [SetWeekDayScheduleRequest](../interfaces/cluster_export.DoorLock.SetWeekDayScheduleRequest.md)
- [SetYearDayScheduleRequest](../interfaces/cluster_export.DoorLock.SetYearDayScheduleRequest.md)
- [UnlockDoorRequest](../interfaces/cluster_export.DoorLock.UnlockDoorRequest.md)
- [UnlockWithTimeoutRequest](../interfaces/cluster_export.DoorLock.UnlockWithTimeoutRequest.md)

### Variables

- [AlarmMask](cluster_export.DoorLock.md#alarmmask)
- [Base](cluster_export.DoorLock.md#base)
- [Cluster](cluster_export.DoorLock.md#cluster)
- [ClusterInstance](cluster_export.DoorLock.md#clusterinstance)
- [Complete](cluster_export.DoorLock.md#complete)
- [CompleteInstance](cluster_export.DoorLock.md#completeinstance)
- [CredentialOverTheAirAccessAndPinCredentialComponent](cluster_export.DoorLock.md#credentialovertheairaccessandpincredentialcomponent)
- [CredentialRulesSupport](cluster_export.DoorLock.md#credentialrulessupport)
- [DaysMaskMap](cluster_export.DoorLock.md#daysmaskmap)
- [DefaultConfigurationRegister](cluster_export.DoorLock.md#defaultconfigurationregister)
- [DoorPositionSensorComponent](cluster_export.DoorLock.md#doorpositionsensorcomponent)
- [HolidaySchedulesComponent](cluster_export.DoorLock.md#holidayschedulescomponent)
- [KeypadOperationEventMask](cluster_export.DoorLock.md#keypadoperationeventmask)
- [KeypadProgrammingEventMask](cluster_export.DoorLock.md#keypadprogrammingeventmask)
- [LocalProgrammingFeatures](cluster_export.DoorLock.md#localprogrammingfeatures)
- [LoggingComponent](cluster_export.DoorLock.md#loggingcomponent)
- [ManualOperationEventMask](cluster_export.DoorLock.md#manualoperationeventmask)
- [NotUserComponent](cluster_export.DoorLock.md#notusercomponent)
- [NotificationAndPinCredentialComponent](cluster_export.DoorLock.md#notificationandpincredentialcomponent)
- [NotificationAndRfidCredentialComponent](cluster_export.DoorLock.md#notificationandrfidcredentialcomponent)
- [NotificationComponent](cluster_export.DoorLock.md#notificationcomponent)
- [PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent](cluster_export.DoorLock.md#pincredentialandrfidcredentialandfingercredentialsnotusercomponent)
- [PinCredentialComponent](cluster_export.DoorLock.md#pincredentialcomponent)
- [PinCredentialNotUserComponent](cluster_export.DoorLock.md#pincredentialnotusercomponent)
- [PinCredentialOrRfidCredentialComponent](cluster_export.DoorLock.md#pincredentialorrfidcredentialcomponent)
- [RemoteOperationEventMask](cluster_export.DoorLock.md#remoteoperationeventmask)
- [RemoteProgrammingEventMask](cluster_export.DoorLock.md#remoteprogrammingeventmask)
- [RfidCredentialComponent](cluster_export.DoorLock.md#rfidcredentialcomponent)
- [RfidCredentialNotUserComponent](cluster_export.DoorLock.md#rfidcredentialnotusercomponent)
- [RfidOperationEventMask](cluster_export.DoorLock.md#rfidoperationeventmask)
- [RfidProgrammingEventMask](cluster_export.DoorLock.md#rfidprogrammingeventmask)
- [SupportedOperatingModes](cluster_export.DoorLock.md#supportedoperatingmodes)
- [TlvClearCredentialRequest](cluster_export.DoorLock.md#tlvclearcredentialrequest)
- [TlvClearHolidayScheduleRequest](cluster_export.DoorLock.md#tlvclearholidayschedulerequest)
- [TlvClearUserRequest](cluster_export.DoorLock.md#tlvclearuserrequest)
- [TlvClearWeekDayScheduleRequest](cluster_export.DoorLock.md#tlvclearweekdayschedulerequest)
- [TlvClearYearDayScheduleRequest](cluster_export.DoorLock.md#tlvclearyeardayschedulerequest)
- [TlvCredentialStruct](cluster_export.DoorLock.md#tlvcredentialstruct)
- [TlvDoorLockAlarmEvent](cluster_export.DoorLock.md#tlvdoorlockalarmevent)
- [TlvDoorStateChangeEvent](cluster_export.DoorLock.md#tlvdoorstatechangeevent)
- [TlvGetCredentialStatusRequest](cluster_export.DoorLock.md#tlvgetcredentialstatusrequest)
- [TlvGetCredentialStatusResponse](cluster_export.DoorLock.md#tlvgetcredentialstatusresponse)
- [TlvGetHolidayScheduleRequest](cluster_export.DoorLock.md#tlvgetholidayschedulerequest)
- [TlvGetHolidayScheduleResponse](cluster_export.DoorLock.md#tlvgetholidayscheduleresponse)
- [TlvGetUserRequest](cluster_export.DoorLock.md#tlvgetuserrequest)
- [TlvGetUserResponse](cluster_export.DoorLock.md#tlvgetuserresponse)
- [TlvGetWeekDayScheduleRequest](cluster_export.DoorLock.md#tlvgetweekdayschedulerequest)
- [TlvGetWeekDayScheduleResponse](cluster_export.DoorLock.md#tlvgetweekdayscheduleresponse)
- [TlvGetYearDayScheduleRequest](cluster_export.DoorLock.md#tlvgetyeardayschedulerequest)
- [TlvGetYearDayScheduleResponse](cluster_export.DoorLock.md#tlvgetyeardayscheduleresponse)
- [TlvLockDoorRequest](cluster_export.DoorLock.md#tlvlockdoorrequest)
- [TlvLockOperationErrorEvent](cluster_export.DoorLock.md#tlvlockoperationerrorevent)
- [TlvLockOperationEvent](cluster_export.DoorLock.md#tlvlockoperationevent)
- [TlvLockUserChangeEvent](cluster_export.DoorLock.md#tlvlockuserchangeevent)
- [TlvSetCredentialRequest](cluster_export.DoorLock.md#tlvsetcredentialrequest)
- [TlvSetCredentialResponse](cluster_export.DoorLock.md#tlvsetcredentialresponse)
- [TlvSetHolidayScheduleRequest](cluster_export.DoorLock.md#tlvsetholidayschedulerequest)
- [TlvSetUserRequest](cluster_export.DoorLock.md#tlvsetuserrequest)
- [TlvSetWeekDayScheduleRequest](cluster_export.DoorLock.md#tlvsetweekdayschedulerequest)
- [TlvSetYearDayScheduleRequest](cluster_export.DoorLock.md#tlvsetyeardayschedulerequest)
- [TlvUnlockDoorRequest](cluster_export.DoorLock.md#tlvunlockdoorrequest)
- [TlvUnlockWithTimeoutRequest](cluster_export.DoorLock.md#tlvunlockwithtimeoutrequest)
- [UserComponent](cluster_export.DoorLock.md#usercomponent)
- [WeekDayAccessSchedulesComponent](cluster_export.DoorLock.md#weekdayaccessschedulescomponent)
- [YearDayAccessSchedulesComponent](cluster_export.DoorLock.md#yeardayaccessschedulescomponent)

## Variables

### AlarmMask

• `Const` **AlarmMask**: `Object`

The value of the DoorLock alarmMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.39

#### Type declaration

| Name | Type |
| :------ | :------ |
| `forcedDoorOpenUnderDoorLockedCondition` | [`BitFlag`](schema_export.md#bitflag) |
| `lockResetToFactoryDefaults` | [`BitFlag`](schema_export.md#bitflag) |
| `lockingMechanismJammed` | [`BitFlag`](schema_export.md#bitflag) |
| `reserved` | [`BitFlag`](schema_export.md#bitflag) |
| `rfModulePowerCycled` | [`BitFlag`](schema_export.md#bitflag) |
| `tamperAlarmFrontEscutcheonRemovedFromMain` | [`BitFlag`](schema_export.md#bitflag) |
| `tamperAlarmWrongCodeEntryLimit` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1107](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1107)

___

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all DoorLock clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `actuatorEnabled`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitFlag`](schema_export.md#bitflag) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `lockState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `normal`: [`BitFlag`](schema_export.md#bitflag) ; `passage`: [`BitFlag`](schema_export.md#bitflag) ; `privacy`: [`BitFlag`](schema_export.md#bitflag) ; `vacation`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } | - |
| `attributes.actuatorEnabled` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> | The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to (Disabled) process remote Lock, Unlock, or Unlock with Timeout commands. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.3 |
| `attributes.alarmMask` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitFlag`](schema_export.md#bitflag) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is used to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the associated alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be turned on or off by setting or clearing the associated bit in the alarm mask. This mask DOES NOT apply to the Events mechanism of this cluster. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.39 |
| `attributes.autoRelockTime` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> | The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. If set, unlock operations from any source will be timed. For one time unlock with timeout use the specific command. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.26 |
| `attributes.defaultConfigurationRegister` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | This attribute represents the default configurations as they are physically set on the device (example: hardware dip switch setting, etc…) and represents the default setting for some of the attributes within this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode attributes). This is a read-only attribute and is intended to allow clients to determine what changes may need to be made without having to query all the included attributes. It may be beneficial for the clients to know what the device’s original settings were in the event that the device needs to be restored to factory default settings. If the Client device would like to query and modify the door lock server’s operating settings, it SHOULD send read and write attribute requests to the specific attributes. For example, the Sound Volume attribute default value is Silent Mode. However, it is possible that the current Sound Volume is High Volume. Therefore, if the client wants to query/modify the current Sound Volume setting on the server, the client SHOULD read/write to the Sound Volume attribute. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.28 |
| `attributes.enableInsideStatusLed` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> | Enable/disable an inside LED that allows the user to see at a glance if the door is locked. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.31 |
| `attributes.enableLocalProgramming` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> | Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures attribute). If this value is set to TRUE then local programming is enabled on the door lock for all features. If it is set to FALSE then local programming is disabled on the door lock for those features whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming shall be enabled by default. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.29 |
| `attributes.enableOneTouchLocking` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> | Enable/disable the ability to lock the door lock with a single touch on the door lock. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.30 |
| `attributes.enablePrivacyModeButton` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> | Enable/disable a button inside the door that is used to put the lock into privacy mode. When the lock is in privacy mode it cannot be manipulated from the outside. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.32 |
| `attributes.language` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> | Modifies the language for the on-screen or audible user interface using a 2-byte language code from ISO-639-1. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.22 |
| `attributes.ledSettings` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> | The settings for the LED support three different modes **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.25 |
| `attributes.localProgrammingFeatures` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | The local programming features that will be disabled when EnableLocalProgramming attribute is set to False. If a door lock doesn’t support disabling one aspect of local programming it shall return CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming attribute is set to True then all local programming features shall be enabled regardless of the bits set to 0 in this attribute. The features that can be disabled from local programming are defined in the following bitmap. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.33 |
| `attributes.lockState` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> | The LockState Attribute may be NULL if the lock hardware does not currently know the status of the locking mechanism. For example, a lock may not know the LockState status after a power cycle until the first lock actuation is completed. The Not Fully Locked value is used by a lock to indicate that the state of the lock is somewhere between Locked and Unlocked so it is only partially secured. For example, a deadbolt could be partially extended and not in a dead latched state. If the Scenes server cluster is implemented on the same endpoint, the following extension field shall be added to the Scene Table: • LockState When the LockState attribute is part of a Scene table, the attribute is treated as a writable command; that is, setting the LockState to lock will command the lock to lock, and setting the LockState to unlock will command the lock to unlock. Setting the LockState attribute to “not fully locked” is not supported. The Transition Time field in the Scene table will be treated as a delay before setting the LockState attribute; that is, it is possible to activate a scene with the lock actuation some seconds later. Locks that do not have an actuation mechanism SHOULD not support the Scene table extension. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.1 |
| `attributes.lockType` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> | **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.2 |
| `attributes.operatingMode` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> | The current operating mode of the lock (see OperatingModeEnum). **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.23 |
| `attributes.soundVolume` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> | The sound volume on a door lock has four possible settings: silent, low, high and medium volumes **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.27 |
| `attributes.supportedOperatingModes` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `normal`: [`BitFlag`](schema_export.md#bitflag) ; `passage`: [`BitFlag`](schema_export.md#bitflag) ; `privacy`: [`BitFlag`](schema_export.md#bitflag) ; `vacation`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All operating modes NOT supported by a lock shall be set to one. The value of the OperatingMode enumeration defines the related bit to be set, as **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.24 |
| `commands` | \{ `lockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } | - |
| `commands.lockDoor` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> | **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4 |
| `commands.unlockDoor` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> | **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4 |
| `commands.unlockWithTimeout` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4 |
| `events` | \{ `doorLockAlarm`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `lockOperation`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\>  } | - |
| `events.doorLockAlarm` | [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> | The door lock cluster provides several alarms which can be sent when there is a critical state on the door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum section below. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.1 |
| `events.lockOperation` | [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> | The door lock server sends out a LockOperation event when the event is triggered by the various lock operation sources. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.3 |
| `events.lockOperationError` | [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> | The door lock server sends out a LockOperationError event when a lock operation fails for various reasons. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.4 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `doorClosedEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorOpenEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`DoorState`](../enums/cluster_export.DoorLock.DoorState.md), `any`\> ; `openPeriod`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `doorStateChange`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>, `any`\>  }  } = DoorPositionSensorComponent; `flags`: \{ `doorPositionSensor`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `enableLogging`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `numberOfLogRecordsSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `getLogRecord`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = LoggingComponent; `flags`: \{ `logging`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `credentialRulesSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `dual`: [`BitFlag`](schema_export.md#bitflag) ; `single`: [`BitFlag`](schema_export.md#bitflag) ; `tri`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfTotalUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearCredential`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\>  }\>, `void`, `any`\> ; `clearUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getCredentialStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: ... ; `credentialType`: ...  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `getUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| ...[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `setCredential`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: ... ; `credentialType`: ...  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `setUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\>  } ; `events`: \{ `lockUserChange`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\>  }  } = UserComponent; `flags`: \{ `user`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxPinCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `minPinCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfPinUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\>  }  } = PinCredentialComponent; `flags`: \{ `pinCredential`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxRfidCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `minRfidCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfRfidUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  }  } = RfidCredentialComponent; `flags`: \{ `rfidCredential`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `friday`: ... ; `monday`: ... ; `saturday`: ... ; `sunday`: ... ; `thursday`: ... ; `tuesday`: ... ; `wednesday`: ...  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `setWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `friday`: ... ; `monday`: ... ; `saturday`: ... ; `sunday`: ... ; `thursday`: ... ; `tuesday`: ... ; `wednesday`: ...  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = WeekDayAccessSchedulesComponent; `flags`: \{ `weekDayAccessSchedules`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `setYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = YearDayAccessSchedulesComponent; `flags`: \{ `yearDayAccessSchedules`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>, `any`\> ; `setHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>, `void`, `any`\>  }  } = HolidaySchedulesComponent; `flags`: \{ `holidaySchedules`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = PinCredentialOrRfidCredentialComponent; `flags`: \{ `pinCredential`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = PinCredentialOrRfidCredentialComponent; `flags`: \{ `rfidCredential`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `requirePinForRemoteOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\>  }  } = CredentialOverTheAirAccessAndPinCredentialComponent; `flags`: \{ `credentialOverTheAirAccess`: ``true`` = true; `pinCredential`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `keypadOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidPin`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `nonAccessUserOperationEventSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `pinCodeChanged`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  } = NotificationAndPinCredentialComponent; `flags`: \{ `notification`: ``true`` = true; `pinCredential`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `manualOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `manualLock`: [`BitFlag`](schema_export.md#bitflag) ; `manualUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `oneTouchLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnLock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificManualOperationEvent`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificRemoteOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeAdded`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  } = NotificationComponent; `flags`: \{ `notification`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rfidOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `idAdded`: [`BitFlag`](schema_export.md#bitflag) ; `idCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  } = NotificationAndRfidCredentialComponent; `flags`: \{ `notification`: ``true`` = true; `rfidCredential`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `clearAllPinCodes`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `clearPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `setPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = PinCredentialNotUserComponent; `flags`: \{ `pinCredential`: ``true`` = true; `user`: ``false`` = false }  }, \{ `component`: \{ `commands`: \{ `getUserStatus`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `getUserType`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserStatus`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserType`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\>  }  } = PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent; `flags`: \{ `fingerCredentials`: ``true`` = true; `pinCredential`: ``true`` = true; `rfidCredential`: ``true`` = true; `user`: ``false`` = false }  }, \{ `component`: {} = NotUserComponent; `flags`: \{ `user`: ``false`` = false }  }, \{ `component`: \{ `commands`: \{ `clearAllRfidCodes`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `clearRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `setRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = RfidCredentialNotUserComponent; `flags`: \{ `rfidCredential`: ``true`` = true; `user`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `faceCredentials`: ``false`` = false; `fingerCredentials`: ``false`` = false; `pinCredential`: ``false`` = false; `rfidCredential`: ``false`` = false; `user`: ``true`` = true }  }] | This metadata controls which DoorLockCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag) ; `logging`: [`BitFlag`](schema_export.md#bitflag) ; `notification`: [`BitFlag`](schema_export.md#bitflag) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag) ; `user`: [`BitFlag`](schema_export.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.credentialOverTheAirAccess` | [`BitFlag`](schema_export.md#bitflag) | CredentialOverTheAirAccess PIN codes over- the-air supported for lock/unlock operations |
| `features.doorPositionSensor` | [`BitFlag`](schema_export.md#bitflag) | DoorPositionSensor Lock supports a door position sensor that indicates door’s state |
| `features.faceCredentials` | [`BitFlag`](schema_export.md#bitflag) | FaceCredentials Lock supports face related credentials (face, iris, retina) |
| `features.fingerCredentials` | [`BitFlag`](schema_export.md#bitflag) | FingerCredentials Lock supports finger related credentials (fingerprint, finger vein) |
| `features.holidaySchedules` | [`BitFlag`](schema_export.md#bitflag) | HolidaySchedules Lock supports holiday schedules |
| `features.logging` | [`BitFlag`](schema_export.md#bitflag) | Logging Lock supports local/on-lock logging when Events are not supported |
| `features.notification` | [`BitFlag`](schema_export.md#bitflag) | Notification Operation and Programming Notifications |
| `features.pinCredential` | [`BitFlag`](schema_export.md#bitflag) | PinCredential Lock supports PIN credentials (via keypad, or over- the-air) |
| `features.rfidCredential` | [`BitFlag`](schema_export.md#bitflag) | RfidCredential Lock supports RFID credentials |
| `features.user` | [`BitFlag`](schema_export.md#bitflag) | User Lock supports the user commands and database |
| `features.weekDayAccessSchedules` | [`BitFlag`](schema_export.md#bitflag) | WeekDayAccessSchedules Lock supports week day user access schedules |
| `features.yearDayAccessSchedules` | [`BitFlag`](schema_export.md#bitflag) | YearDayAccessSchedules Lock supports year day user access schedules |
| `id` | ``257`` | - |
| `name` | ``"DoorLock"`` | - |
| `revision` | ``6`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2263](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2263)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.DoorLock.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2669](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2669)

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2671](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2671)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `actuatorEnabled`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitFlag`](schema_export.md#bitflag) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `lockState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `normal`: [`BitFlag`](schema_export.md#bitflag) ; `passage`: [`BitFlag`](schema_export.md#bitflag) ; `privacy`: [`BitFlag`](schema_export.md#bitflag) ; `vacation`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `lockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `events`: \{ `doorLockAlarm`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `lockOperation`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: ... ; `credentialType`: ...  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: ... ; `credentialType`: ...  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `doorClosedEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorOpenEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`DoorState`](../enums/cluster_export.DoorLock.DoorState.md), `any`\> ; `openPeriod`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `doorStateChange`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>, `any`\>  }  } = DoorPositionSensorComponent; `flags`: \{ `doorPositionSensor`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `enableLogging`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `numberOfLogRecordsSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `getLogRecord`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = LoggingComponent; `flags`: \{ `logging`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `credentialRulesSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `dual`: [`BitFlag`](schema_export.md#bitflag) ; `single`: [`BitFlag`](schema_export.md#bitflag) ; `tri`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfTotalUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearCredential`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `void`, `any`\> ; `clearUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getCredentialStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `any`\> ; `getUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `any`\> ; `setCredential`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `any`\> ; `setUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `void`, `any`\>  } ; `events`: \{ `lockUserChange`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `any`\>  }  } = UserComponent; `flags`: \{ `user`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxPinCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `minPinCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfPinUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\>  }  } = PinCredentialComponent; `flags`: \{ `pinCredential`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxRfidCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `minRfidCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfRfidUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  }  } = RfidCredentialComponent; `flags`: \{ `rfidCredential`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<...\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `setWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<...\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = WeekDayAccessSchedulesComponent; `flags`: \{ `weekDayAccessSchedules`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `setYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = YearDayAccessSchedulesComponent; `flags`: \{ `yearDayAccessSchedules`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>, `any`\> ; `setHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>, `void`, `any`\>  }  } = HolidaySchedulesComponent; `flags`: \{ `holidaySchedules`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = PinCredentialOrRfidCredentialComponent; `flags`: \{ `pinCredential`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = PinCredentialOrRfidCredentialComponent; `flags`: \{ `rfidCredential`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `requirePinForRemoteOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\>  }  } = CredentialOverTheAirAccessAndPinCredentialComponent; `flags`: \{ `credentialOverTheAirAccess`: ``true`` = true; `pinCredential`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `keypadOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidPin`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `nonAccessUserOperationEventSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `pinCodeChanged`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  } = NotificationAndPinCredentialComponent; `flags`: \{ `notification`: ``true`` = true; `pinCredential`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `manualOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `manualLock`: [`BitFlag`](schema_export.md#bitflag) ; `manualUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `oneTouchLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnLock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificManualOperationEvent`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificRemoteOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeAdded`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  } = NotificationComponent; `flags`: \{ `notification`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rfidOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `idAdded`: [`BitFlag`](schema_export.md#bitflag) ; `idCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  } = NotificationAndRfidCredentialComponent; `flags`: \{ `notification`: ``true`` = true; `rfidCredential`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `clearAllPinCodes`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `clearPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `setPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = PinCredentialNotUserComponent; `flags`: \{ `pinCredential`: ``true`` = true; `user`: ``false`` = false }  }, \{ `component`: \{ `commands`: \{ `getUserStatus`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `getUserType`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserStatus`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserType`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\>  }  } = PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent; `flags`: \{ `fingerCredentials`: ``true`` = true; `pinCredential`: ``true`` = true; `rfidCredential`: ``true`` = true; `user`: ``false`` = false }  }, \{ `component`: {} = NotUserComponent; `flags`: \{ `user`: ``false`` = false }  }, \{ `component`: \{ `commands`: \{ `clearAllRfidCodes`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `clearRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `setRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = RfidCredentialNotUserComponent; `flags`: \{ `rfidCredential`: ``true`` = true; `user`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `faceCredentials`: ``false`` = false; `fingerCredentials`: ``false`` = false; `pinCredential`: ``false`` = false; `rfidCredential`: ``false`` = false; `user`: ``true`` = true }  }] ; `features`: \{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag) ; `logging`: [`BitFlag`](schema_export.md#bitflag) ; `notification`: [`BitFlag`](schema_export.md#bitflag) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag) ; `user`: [`BitFlag`](schema_export.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``257`` = 0x101; `name`: ``"DoorLock"`` = "DoorLock"; `revision`: ``6`` = 6 }\>

**`See`**

[Cluster](cluster_export.DoorLock.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2658](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2658)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.DoorLock.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2938](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2938)

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2940](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2940)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `actuatorEnabled`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitFlag`](schema_export.md#bitflag) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `credentialRulesSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `dual`: [`BitFlag`](schema_export.md#bitflag) ; `single`: [`BitFlag`](schema_export.md#bitflag) ; `tri`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `defaultConfigurationRegister`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `doorClosedEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `doorPositionSensor`: `boolean` = true }]  } ; `doorOpenEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `doorPositionSensor`: `boolean` = true }]  } ; `doorState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`DoorState`](../enums/cluster_export.DoorLock.DoorState.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `doorPositionSensor`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLogging`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `logging`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `user`: `boolean` = true }]  } ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag) ; `logging`: [`BitFlag`](schema_export.md#bitflag) ; `notification`: [`BitFlag`](schema_export.md#bitflag) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag) ; `user`: [`BitFlag`](schema_export.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `keypadOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidPin`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `nonAccessUserOperationEventSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true; `pinCredential`: `boolean` = true }]  } ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `pinCodeChanged`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true; `pinCredential`: `boolean` = true }]  } ; `language`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `lockState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `manualOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `manualLock`: [`BitFlag`](schema_export.md#bitflag) ; `manualUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `oneTouchLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnLock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificManualOperationEvent`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true }]  } ; `maxPinCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `maxRfidCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `minPinCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `minRfidCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfLogRecordsSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `logging`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfPinUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfRfidUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfTotalUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `openPeriod`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `doorPositionSensor`: `boolean` = true }]  } ; `operatingMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificRemoteOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true }]  } ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeAdded`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true }]  } ; `requirePinForRemoteOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `credentialOverTheAirAccess`: `boolean` = true; `pinCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `rfidOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true; `rfidCredential`: `boolean` = true }]  } ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `idAdded`: [`BitFlag`](schema_export.md#bitflag) ; `idCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true; `rfidCredential`: `boolean` = true }]  } ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `pinCredential`: `boolean` = true }]  } ; `soundVolume`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `normal`: [`BitFlag`](schema_export.md#bitflag) ; `passage`: [`BitFlag`](schema_export.md#bitflag) ; `privacy`: [`BitFlag`](schema_export.md#bitflag) ; `vacation`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true }, \{ `rfidCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true }, \{ `rfidCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `clearAllPinCodes`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearAllRfidCodes`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearCredential`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: ... ; `credentialType`: ...  }\>\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getCredentialStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getLogRecord`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `logging`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<...\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getUserStatus`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` = true; `pinCredential`: `boolean` = true; `rfidCredential`: `boolean` = true; `user`: `boolean` = false }]  } ; `getUserType`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` = true; `pinCredential`: `boolean` = true; `rfidCredential`: `boolean` = true; `user`: `boolean` = false }]  } ; `getWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `lockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `setCredential`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setUserStatus`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` = true; `pinCredential`: `boolean` = true; `rfidCredential`: `boolean` = true; `user`: `boolean` = false }]  } ; `setUserType`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` = true; `pinCredential`: `boolean` = true; `rfidCredential`: `boolean` = true; `user`: `boolean` = false }]  } ; `setWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unlockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `events`: \{ `doorLockAlarm`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `doorStateChange`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `doorPositionSensor`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `lockOperation`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: ... ; `credentialType`: ...  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: ... ; `credentialType`: ...  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `lockUserChange`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag) ; `logging`: [`BitFlag`](schema_export.md#bitflag) ; `notification`: [`BitFlag`](schema_export.md#bitflag) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag) ; `user`: [`BitFlag`](schema_export.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``257``, ``"ClusterId"``\> = Cluster.id; `name`: ``"DoorLock"`` = Cluster.name; `revision`: ``6`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.DoorLock.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2691](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2691)

___

### CredentialOverTheAirAccessAndPinCredentialComponent

• `Const` **CredentialOverTheAirAccessAndPinCredentialComponent**: `Object`

A DoorLockCluster supports these elements if it supports features CredentialOverTheAirAccess and PinCredential.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `requirePinForRemoteOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\>  } |
| `attributes.requirePinForRemoteOperation` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1861](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1861)

___

### CredentialRulesSupport

• `Const` **CredentialRulesSupport**: `Object`

The value of the DoorLock credentialRulesSupport attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.19

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dual` | [`BitFlag`](schema_export.md#bitflag) |
| `single` | [`BitFlag`](schema_export.md#bitflag) |
| `tri` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:104](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L104)

___

### DaysMaskMap

• `Const` **DaysMaskMap**: `Object`

The DaysMask field used in various commands and shall indicate the days of the week the Week Day schedule
applies for.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.6

#### Type declaration

| Name | Type |
| :------ | :------ |
| `friday` | [`BitFlag`](schema_export.md#bitflag) |
| `monday` | [`BitFlag`](schema_export.md#bitflag) |
| `saturday` | [`BitFlag`](schema_export.md#bitflag) |
| `sunday` | [`BitFlag`](schema_export.md#bitflag) |
| `thursday` | [`BitFlag`](schema_export.md#bitflag) |
| `tuesday` | [`BitFlag`](schema_export.md#bitflag) |
| `wednesday` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:609](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L609)

___

### DefaultConfigurationRegister

• `Const` **DefaultConfigurationRegister**: `Object`

The value of the DoorLock defaultConfigurationRegister attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.28

#### Type declaration

| Name | Type |
| :------ | :------ |
| `autoRelockTimeSet` | [`BitFlag`](schema_export.md#bitflag) |
| `enableLocalProgrammingEnabled` | [`BitFlag`](schema_export.md#bitflag) |
| `keypadInterfaceDefaultAccessEnabled` | [`BitFlag`](schema_export.md#bitflag) |
| `ledSettingsSet` | [`BitFlag`](schema_export.md#bitflag) |
| `remoteInterfaceDefaultAccessIsEnabled` | [`BitFlag`](schema_export.md#bitflag) |
| `soundEnabled` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1081](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1081)

___

### DoorPositionSensorComponent

• `Const` **DoorPositionSensorComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature DoorPositionSensor.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `doorClosedEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorOpenEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`DoorState`](../enums/cluster_export.DoorLock.DoorState.md), `any`\> ; `openPeriod`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } |
| `attributes.doorClosedEvents` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.doorOpenEvents` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.doorState` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`DoorState`](../enums/cluster_export.DoorLock.DoorState.md), `any`\> |
| `attributes.openPeriod` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `events` | \{ `doorStateChange`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>, `any`\>  } |
| `events.doorStateChange` | [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1390](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1390)

___

### HolidaySchedulesComponent

• `Const` **HolidaySchedulesComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature HolidaySchedules.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.numberOfHolidaySchedulesSupported` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `clearHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>, `any`\> ; `setHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>, `void`, `any`\>  } |
| `commands.clearHolidaySchedule` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |
| `commands.getHolidaySchedule` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>, `any`\> |
| `commands.setHolidaySchedule` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1771](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1771)

___

### KeypadOperationEventMask

• `Const` **KeypadOperationEventMask**: `Object`

The value of the DoorLock keypadOperationEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.40

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lockSourceKeypad` | [`BitFlag`](schema_export.md#bitflag) |
| `lockSourceKeypadErrorInvalidPin` | [`BitFlag`](schema_export.md#bitflag) |
| `lockSourceKeypadErrorInvalidSchedule` | [`BitFlag`](schema_export.md#bitflag) |
| `nonAccessUserOperationEventSourceKeypad` | [`BitFlag`](schema_export.md#bitflag) |
| `unknownOrManufacturerSpecificKeypadOperationEvent` | [`BitFlag`](schema_export.md#bitflag) |
| `unlockSourceKeypad` | [`BitFlag`](schema_export.md#bitflag) |
| `unlockSourceKeypadErrorInvalidCode` | [`BitFlag`](schema_export.md#bitflag) |
| `unlockSourceKeypadErrorInvalidSchedule` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:885](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L885)

___

### KeypadProgrammingEventMask

• `Const` **KeypadProgrammingEventMask**: `Object`

The value of the DoorLock keypadProgrammingEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.44

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pinAdded` | [`BitFlag`](schema_export.md#bitflag) |
| `pinChanged` | [`BitFlag`](schema_export.md#bitflag) |
| `pinCleared` | [`BitFlag`](schema_export.md#bitflag) |
| `pinCodeChanged` | [`BitFlag`](schema_export.md#bitflag) |
| `unknown` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:901](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L901)

___

### LocalProgrammingFeatures

• `Const` **LocalProgrammingFeatures**: `Object`

The value of the DoorLock localProgrammingFeatures attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.33

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addUsersCredentialsSchedulesLocally` | [`BitFlag`](schema_export.md#bitflag) |
| `adjustLockSettingsLocally` | [`BitFlag`](schema_export.md#bitflag) |
| `clearUsersCredentialsSchedulesLocally` | [`BitFlag`](schema_export.md#bitflag) |
| `modifyUsersCredentialsSchedulesLocally` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1095](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1095)

___

### LoggingComponent

• `Const` **LoggingComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature Logging.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `enableLogging`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `numberOfLogRecordsSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.enableLogging` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> |
| `attributes.numberOfLogRecordsSupported` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `getLogRecord`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } |
| `commands.getLogRecord` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1437](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1437)

___

### ManualOperationEventMask

• `Const` **ManualOperationEventMask**: `Object`

The value of the DoorLock manualOperationEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.42

#### Type declaration

| Name | Type |
| :------ | :------ |
| `autoLock` | [`BitFlag`](schema_export.md#bitflag) |
| `keyLock` | [`BitFlag`](schema_export.md#bitflag) |
| `keyUnlock` | [`BitFlag`](schema_export.md#bitflag) |
| `manualLock` | [`BitFlag`](schema_export.md#bitflag) |
| `manualUnlock` | [`BitFlag`](schema_export.md#bitflag) |
| `oneTouchLock` | [`BitFlag`](schema_export.md#bitflag) |
| `scheduleLock` | [`BitFlag`](schema_export.md#bitflag) |
| `scheduleUnlock` | [`BitFlag`](schema_export.md#bitflag) |
| `thumbturnLock` | [`BitFlag`](schema_export.md#bitflag) |
| `thumbturnUnlock` | [`BitFlag`](schema_export.md#bitflag) |
| `unknownOrManufacturerSpecificManualOperationEvent` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:929](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L929)

___

### NotUserComponent

• `Const` **NotUserComponent**: `Object`

A DoorLockCluster supports these elements if doesn't support feature USR.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2121](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2121)

___

### NotificationAndPinCredentialComponent

• `Const` **NotificationAndPinCredentialComponent**: `Object`

A DoorLockCluster supports these elements if it supports features Notification and PinCredential.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `keypadOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidPin`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `nonAccessUserOperationEventSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `pinCodeChanged`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } |
| `attributes.keypadOperationEventMask` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidPin`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `nonAccessUserOperationEventSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |
| `attributes.keypadProgrammingEventMask` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `pinCodeChanged`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1880](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1880)

___

### NotificationAndRfidCredentialComponent

• `Const` **NotificationAndRfidCredentialComponent**: `Object`

A DoorLockCluster supports these elements if it supports features Notification and RfidCredential.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `rfidOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `idAdded`: [`BitFlag`](schema_export.md#bitflag) ; `idCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } |
| `attributes.rfidOperationEventMask` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |
| `attributes.rfidProgrammingEventMask` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `idAdded`: [`BitFlag`](schema_export.md#bitflag) ; `idCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1982](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1982)

___

### NotificationComponent

• `Const` **NotificationComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature Notification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `manualOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `manualLock`: [`BitFlag`](schema_export.md#bitflag) ; `manualUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `oneTouchLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnLock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificManualOperationEvent`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificRemoteOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeAdded`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } |
| `attributes.manualOperationEventMask` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `manualLock`: [`BitFlag`](schema_export.md#bitflag) ; `manualUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `oneTouchLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnLock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificManualOperationEvent`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |
| `attributes.remoteOperationEventMask` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificRemoteOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |
| `attributes.remoteProgrammingEventMask` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeAdded`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1922](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1922)

___

### PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent

• `Const` **PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent**: `Object`

A DoorLockCluster supports these elements if it supports features PinCredential, RfidCredential and
FingerCredentials and it doesn't support feature USR.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `getUserStatus`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `getUserType`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserStatus`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserType`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\>  } |
| `commands.getUserStatus` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> |
| `commands.getUserType` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> |
| `commands.setUserStatus` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> |
| `commands.setUserType` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2070](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2070)

___

### PinCredentialComponent

• `Const` **PinCredentialComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature PinCredential.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxPinCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `minPinCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfPinUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\>  } |
| `attributes.maxPinCodeLength` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.minPinCodeLength` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.numberOfPinUsersSupported` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.sendPinOverTheAir` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1593](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1593)

___

### PinCredentialNotUserComponent

• `Const` **PinCredentialNotUserComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature PinCredential and it doesn't support feature
USR.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `clearAllPinCodes`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `clearPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `setPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } |
| `commands.clearAllPinCodes` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |
| `commands.clearPinCode` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |
| `commands.getPinCode` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |
| `commands.setPinCode` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2024](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2024)

___

### PinCredentialOrRfidCredentialComponent

• `Const` **PinCredentialOrRfidCredentialComponent**: `Object`

A DoorLockCluster supports these elements if it supports features PinCredential or RfidCredential.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  } |
| `attributes.userCodeTemporaryDisableTime` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> |
| `attributes.wrongCodeEntryLimit` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1820](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1820)

___

### RemoteOperationEventMask

• `Const` **RemoteOperationEventMask**: `Object`

The value of the DoorLock remoteOperationEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.41

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lockSourceRemote` | [`BitFlag`](schema_export.md#bitflag) |
| `lockSourceRemoteErrorInvalidCode` | [`BitFlag`](schema_export.md#bitflag) |
| `lockSourceRemoteErrorInvalidSchedule` | [`BitFlag`](schema_export.md#bitflag) |
| `unknownOrManufacturerSpecificRemoteOperationEvent` | [`BitFlag`](schema_export.md#bitflag) |
| `unlockSourceRemote` | [`BitFlag`](schema_export.md#bitflag) |
| `unlockSourceRemoteErrorInvalidCode` | [`BitFlag`](schema_export.md#bitflag) |
| `unlockSourceRemoteErrorInvalidSchedule` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:914](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L914)

___

### RemoteProgrammingEventMask

• `Const` **RemoteProgrammingEventMask**: `Object`

The value of the DoorLock remoteProgrammingEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.45

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pinAdded` | [`BitFlag`](schema_export.md#bitflag) |
| `pinChanged` | [`BitFlag`](schema_export.md#bitflag) |
| `pinCleared` | [`BitFlag`](schema_export.md#bitflag) |
| `rfidCodeAdded` | [`BitFlag`](schema_export.md#bitflag) |
| `rfidCodeCleared` | [`BitFlag`](schema_export.md#bitflag) |
| `unknown` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:948](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L948)

___

### RfidCredentialComponent

• `Const` **RfidCredentialComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature RfidCredential.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxRfidCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `minRfidCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfRfidUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.maxRfidCodeLength` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.minRfidCodeLength` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.numberOfRfidUsersSupported` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1641](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1641)

___

### RfidCredentialNotUserComponent

• `Const` **RfidCredentialNotUserComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature RfidCredential and it doesn't support feature
USR.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `clearAllRfidCodes`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `clearRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `setRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } |
| `commands.clearAllRfidCodes` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |
| `commands.clearRfidCode` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |
| `commands.getRfidCode` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |
| `commands.setRfidCode` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2127](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2127)

___

### RfidOperationEventMask

• `Const` **RfidOperationEventMask**: `Object`

The value of the DoorLock rfidOperationEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.43

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lockSourceRfid` | [`BitFlag`](schema_export.md#bitflag) |
| `lockSourceRfidErrorInvalidRfidId` | [`BitFlag`](schema_export.md#bitflag) |
| `lockSourceRfidErrorInvalidSchedule` | [`BitFlag`](schema_export.md#bitflag) |
| `unknownOrManufacturerSpecificKeypadOperationEvent` | [`BitFlag`](schema_export.md#bitflag) |
| `unlockSourceRfid` | [`BitFlag`](schema_export.md#bitflag) |
| `unlockSourceRfidErrorInvalidRfidId` | [`BitFlag`](schema_export.md#bitflag) |
| `unlockSourceRfidErrorInvalidSchedule` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:962](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L962)

___

### RfidProgrammingEventMask

• `Const` **RfidProgrammingEventMask**: `Object`

The value of the DoorLock rfidProgrammingEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.46

#### Type declaration

| Name | Type |
| :------ | :------ |
| `idAdded` | [`BitFlag`](schema_export.md#bitflag) |
| `idCleared` | [`BitFlag`](schema_export.md#bitflag) |
| `unknown` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:977](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L977)

___

### SupportedOperatingModes

• `Const` **SupportedOperatingModes**: `Object`

The value of the DoorLock supportedOperatingModes attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.24

#### Type declaration

| Name | Type |
| :------ | :------ |
| `noRemoteLockUnlock` | [`BitFlag`](schema_export.md#bitflag) |
| `normal` | [`BitFlag`](schema_export.md#bitflag) |
| `passage` | [`BitFlag`](schema_export.md#bitflag) |
| `privacy` | [`BitFlag`](schema_export.md#bitflag) |
| `vacation` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1068](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1068)

___

### TlvClearCredentialRequest

• `Const` **TlvClearCredentialRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>

Input to the DoorLock clearCredential command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:437](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L437)

___

### TlvClearHolidayScheduleRequest

• `Const` **TlvClearHolidayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock clearHolidaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:871](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L871)

___

### TlvClearUserRequest

• `Const` **TlvClearUserRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock clearUser command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:348](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L348)

___

### TlvClearWeekDayScheduleRequest

• `Const` **TlvClearWeekDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock clearWeekDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:682](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L682)

___

### TlvClearYearDayScheduleRequest

• `Const` **TlvClearYearDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock clearYearDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:751](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L751)

___

### TlvCredentialStruct

• `Const` **TlvCredentialStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>

The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
credential types and their corresponding indices (if any) for the event or user record.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:296](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L296)

___

### TlvDoorLockAlarmEvent

• `Const` **TlvDoorLockAlarmEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>

Body of the DoorLock doorLockAlarm event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1214](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1214)

___

### TlvDoorStateChangeEvent

• `Const` **TlvDoorStateChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>

Body of the DoorLock doorStateChange event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:83](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L83)

___

### TlvGetCredentialStatusRequest

• `Const` **TlvGetCredentialStatusRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>

Input to the DoorLock getCredentialStatus command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:407](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L407)

___

### TlvGetCredentialStatusResponse

• `Const` **TlvGetCredentialStatusResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:419](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L419)

___

### TlvGetHolidayScheduleRequest

• `Const` **TlvGetHolidayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock getHolidaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:841](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L841)

___

### TlvGetHolidayScheduleResponse

• `Const` **TlvGetHolidayScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:853](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L853)

___

### TlvGetUserRequest

• `Const` **TlvGetUserRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock getUser command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:267](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L267)

___

### TlvGetUserResponse

• `Const` **TlvGetUserResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:325](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L325)

___

### TlvGetWeekDayScheduleRequest

• `Const` **TlvGetWeekDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock getWeekDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:646](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L646)

___

### TlvGetWeekDayScheduleResponse

• `Const` **TlvGetWeekDayScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:661](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L661)

___

### TlvGetYearDayScheduleRequest

• `Const` **TlvGetYearDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock getYearDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:718](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L718)

___

### TlvGetYearDayScheduleResponse

• `Const` **TlvGetYearDayScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:733](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L733)

___

### TlvLockDoorRequest

• `Const` **TlvLockDoorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>

Input to the DoorLock lockDoor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1122](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1122)

___

### TlvLockOperationErrorEvent

• `Const` **TlvLockOperationErrorEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Body of the DoorLock lockOperationError event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1322](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1322)

___

### TlvLockOperationEvent

• `Const` **TlvLockOperationEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Body of the DoorLock lockOperation event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1247](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1247)

___

### TlvLockUserChangeEvent

• `Const` **TlvLockUserChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Body of the DoorLock lockUserChange event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.5

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:538](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L538)

___

### TlvSetCredentialRequest

• `Const` **TlvSetCredentialRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>

Input to the DoorLock setCredential command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:362](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L362)

___

### TlvSetCredentialResponse

• `Const` **TlvSetCredentialResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:391](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L391)

___

### TlvSetHolidayScheduleRequest

• `Const` **TlvSetHolidayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>

Input to the DoorLock setHolidaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:822](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L822)

___

### TlvSetUserRequest

• `Const` **TlvSetUserRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Input to the DoorLock setUser command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:245](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L245)

___

### TlvSetWeekDayScheduleRequest

• `Const` **TlvSetWeekDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock setWeekDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:624](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L624)

___

### TlvSetYearDayScheduleRequest

• `Const` **TlvSetYearDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock setYearDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:699](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L699)

___

### TlvUnlockDoorRequest

• `Const` **TlvUnlockDoorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>

Input to the DoorLock unlockDoor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1136](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1136)

___

### TlvUnlockWithTimeoutRequest

• `Const` **TlvUnlockWithTimeoutRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock unlockWithTimeout command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1150](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1150)

___

### UserComponent

• `Const` **UserComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature User.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `credentialRulesSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `dual`: [`BitFlag`](schema_export.md#bitflag) ; `single`: [`BitFlag`](schema_export.md#bitflag) ; `tri`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfTotalUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.credentialRulesSupport` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `dual`: [`BitFlag`](schema_export.md#bitflag) ; `single`: [`BitFlag`](schema_export.md#bitflag) ; `tri`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |
| `attributes.expiringUserTimeout` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.numberOfCredentialsSupportedPerUser` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.numberOfTotalUsersSupported` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `clearCredential`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, `void`, `any`\> ; `clearUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getCredentialStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `getUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `setCredential`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `setUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\>  } |
| `commands.clearCredential` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, `void`, `any`\> |
| `commands.clearUser` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |
| `commands.getCredentialStatus` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> |
| `commands.getUser` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> |
| `commands.setCredential` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> |
| `commands.setUser` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> |
| `events` | \{ `lockUserChange`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\>  } |
| `events.lockUserChange` | [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1468](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1468)

___

### WeekDayAccessSchedulesComponent

• `Const` **WeekDayAccessSchedulesComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature WeekDayAccessSchedules.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.numberOfWeekDaySchedulesSupportedPerUser` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `clearWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `setWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } |
| `commands.clearWeekDaySchedule` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |
| `commands.getWeekDaySchedule` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> |
| `commands.setWeekDaySchedule` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1673](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1673)

___

### YearDayAccessSchedulesComponent

• `Const` **YearDayAccessSchedulesComponent**: `Object`

A DoorLockCluster supports these elements if it supports feature YearDayAccessSchedules.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.numberOfYearDaySchedulesSupportedPerUser` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `clearYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `setYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } |
| `commands.clearYearDaySchedule` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |
| `commands.getYearDaySchedule` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> |
| `commands.setYearDaySchedule` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1722](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1722)
