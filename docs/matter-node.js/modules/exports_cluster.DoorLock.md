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

### Type Aliases

- [Extension](exports_cluster.DoorLock.md#extension)

### Variables

- [AlarmMask](exports_cluster.DoorLock.md#alarmmask)
- [Base](exports_cluster.DoorLock.md#base)
- [Cluster](exports_cluster.DoorLock.md#cluster)
- [Complete](exports_cluster.DoorLock.md#complete)
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

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](exports_cluster.DoorLock.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `doorPositionSensor`: ``true``  } ? typeof [`DoorPositionSensorComponent`](exports_cluster.DoorLock.md#doorpositionsensorcomponent) : {} & `SF` extends { `logging`: ``true``  } ? typeof [`LoggingComponent`](exports_cluster.DoorLock.md#loggingcomponent) : {} & `SF` extends { `user`: ``true``  } ? typeof [`UserComponent`](exports_cluster.DoorLock.md#usercomponent) : {} & `SF` extends { `pinCredential`: ``true``  } ? typeof [`PinCredentialComponent`](exports_cluster.DoorLock.md#pincredentialcomponent) : {} & `SF` extends { `rfidCredential`: ``true``  } ? typeof [`RfidCredentialComponent`](exports_cluster.DoorLock.md#rfidcredentialcomponent) : {} & `SF` extends { `weekDayAccessSchedules`: ``true``  } ? typeof [`WeekDayAccessSchedulesComponent`](exports_cluster.DoorLock.md#weekdayaccessschedulescomponent) : {} & `SF` extends { `yearDayAccessSchedules`: ``true``  } ? typeof [`YearDayAccessSchedulesComponent`](exports_cluster.DoorLock.md#yeardayaccessschedulescomponent) : {} & `SF` extends { `holidaySchedules`: ``true``  } ? typeof [`HolidaySchedulesComponent`](exports_cluster.DoorLock.md#holidayschedulescomponent) : {} & `SF` extends { `pinCredential`: ``true``  } \| { `rfidCredential`: ``true``  } ? typeof [`PinCredentialOrRfidCredentialComponent`](exports_cluster.DoorLock.md#pincredentialorrfidcredentialcomponent) : {} & `SF` extends { `credentialOverTheAirAccess`: ``true`` ; `pinCredential`: ``true``  } ? typeof [`CredentialOverTheAirAccessAndPinCredentialComponent`](exports_cluster.DoorLock.md#credentialovertheairaccessandpincredentialcomponent) : {} & `SF` extends { `notification`: ``true`` ; `pinCredential`: ``true``  } ? typeof [`NotificationAndPinCredentialComponent`](exports_cluster.DoorLock.md#notificationandpincredentialcomponent) : {} & `SF` extends { `notification`: ``true``  } ? typeof [`NotificationComponent`](exports_cluster.DoorLock.md#notificationcomponent) : {} & `SF` extends { `notification`: ``true`` ; `rfidCredential`: ``true``  } ? typeof [`NotificationAndRfidCredentialComponent`](exports_cluster.DoorLock.md#notificationandrfidcredentialcomponent) : {} & `SF` extends { `pinCredential`: ``true`` ; `user`: ``false``  } ? typeof [`PinCredentialNotUserComponent`](exports_cluster.DoorLock.md#pincredentialnotusercomponent) : {} & `SF` extends { `fingerCredentials`: ``true`` ; `pinCredential`: ``true`` ; `rfidCredential`: ``true`` ; `user`: ``false``  } ? typeof [`PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent`](exports_cluster.DoorLock.md#pincredentialandrfidcredentialandfingercredentialsnotusercomponent) : {} & `SF` extends { `user`: ``false``  } ? typeof [`NotUserComponent`](exports_cluster.DoorLock.md#notusercomponent) : {} & `SF` extends { `rfidCredential`: ``true`` ; `user`: ``false``  } ? typeof [`RfidCredentialNotUserComponent`](exports_cluster.DoorLock.md#rfidcredentialnotusercomponent) : {} & `SF` extends { `faceCredentials`: ``false`` ; `fingerCredentials`: ``false`` ; `pinCredential`: ``false`` ; `rfidCredential`: ``false`` ; `user`: ``true``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:3565

## Variables

### AlarmMask

• `Const` **AlarmMask**: `Object`

The value of the DoorLock alarmMask attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.3.39

#### Type declaration

| Name | Type |
| :------ | :------ |
| `forcedDoorOpenUnderDoorLockedCondition` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `lockResetToFactoryDefaults` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `lockingMechanismJammed` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `reserved` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `rfModulePowerCycled` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `tamperAlarmFrontEscutcheonRemovedFromMain` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `tamperAlarmWrongCodeEntryLimit` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:171

___

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `actuatorEnabled`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `lockState`: [`Attribute`](exports_cluster.md#attribute)<[`LockState`](../enums/exports_cluster.DoorLock.LockState.md) \| ``null``, `any`\> ; `lockType`: [`Attribute`](exports_cluster.md#attribute)<[`LockType`](../enums/exports_cluster.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`OperatingMode`](../enums/exports_cluster.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: { `lockDoor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockDoor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: { `doorLockAlarm`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperation`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: { `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `logging`: [`BitFlag`](exports_schema.md#bitflag-1) ; `notification`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `user`: [`BitFlag`](exports_schema.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``257`` ; `name`: ``"DoorLock"`` ; `revision`: ``6``  }\>

These elements and properties are present in all DoorLock clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1247

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: { `lockDoor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockDoor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: { `doorLockAlarm`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperation`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: { `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `logging`: [`BitFlag`](exports_schema.md#bitflag-1) ; `notification`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `user`: [`BitFlag`](exports_schema.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"DoorLock"`` ; `revision`: ``6`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `actuatorEnabled`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `lockState`: [`Attribute`](exports_cluster.md#attribute)<[`LockState`](../enums/exports_cluster.DoorLock.LockState.md) \| ``null``, `any`\> ; `lockType`: [`Attribute`](exports_cluster.md#attribute)<[`LockType`](../enums/exports_cluster.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`OperatingMode`](../enums/exports_cluster.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: { `lockDoor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockDoor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: { `doorLockAlarm`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperation`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: { `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `logging`: [`BitFlag`](exports_schema.md#bitflag-1) ; `notification`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `user`: [`BitFlag`](exports_schema.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``257`` ; `name`: ``"DoorLock"`` ; `revision`: ``6``  }\>, ``"attributes"``\> & { `with`: <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.DoorLock.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `logging`: [`BitFlag`](exports_schema.md#bitflag-1) ; `notification`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `user`: [`BitFlag`](exports_schema.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Door Lock

An interface to a generic way to secure a door

DoorLockCluster supports optional features that you can enable with the DoorLockCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2481

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `actuatorEnabled`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `attributeList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.md#attribute)<`number`, `never`\> ; `credentialRulesSupport`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `defaultConfigurationRegister`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `doorClosedEvents`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `doorOpenEvents`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `doorState`: [`Attribute`](exports_cluster.md#attribute)<[`DoorState`](../enums/exports_cluster.DoorLock.DoorState.md) \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLogging`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`boolean`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `eventList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `featureMap`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `logging`: [`BitFlag`](exports_schema.md#bitflag-1) ; `notification`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `user`: [`BitFlag`](exports_schema.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `keypadOperationEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `language`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `lockState`: [`Attribute`](exports_cluster.md#attribute)<[`LockState`](../enums/exports_cluster.DoorLock.LockState.md) \| ``null``, `any`\> ; `lockType`: [`Attribute`](exports_cluster.md#attribute)<[`LockType`](../enums/exports_cluster.DoorLock.LockType.md), `any`\> ; `manualOperationEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `maxPinCodeLength`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `maxRfidCodeLength`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `minPinCodeLength`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `minRfidCodeLength`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfLogRecordsSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfPinUsersSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfRfidUsersSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfTotalUsersSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `openPeriod`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `operatingMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`OperatingMode`](../enums/exports_cluster.DoorLock.OperatingMode.md), `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `requirePinForRemoteOperation`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`boolean`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `rfidOperationEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `soundVolume`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `userCodeTemporaryDisableTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `wrongCodeEntryLimit`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: { `clearAllPinCodes`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearAllRfidCodes`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearCredential`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearHolidaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearPinCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearRfidCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearUser`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearWeekDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearYearDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getCredentialStatus`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getHolidaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getLogRecord`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getPinCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getRfidCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getUser`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getUserStatus`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getUserType`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getWeekDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getYearDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `lockDoor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `setCredential`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setHolidaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setPinCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setRfidCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setUser`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setUserStatus`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setUserType`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setWeekDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setYearDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unlockDoor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: { `doorLockAlarm`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `doorStateChange`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `lockOperation`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockUserChange`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: { `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `logging`: [`BitFlag`](exports_schema.md#bitflag-1) ; `notification`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `user`: [`BitFlag`](exports_schema.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``257`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"DoorLock"`` ; `revision`: ``6``  }\>

This cluster supports all DoorLock features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:3624

___

### CredentialOverTheAirAccessAndPinCredentialComponent

• `Const` **CredentialOverTheAirAccessAndPinCredentialComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `requirePinForRemoteOperation`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`boolean`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features CredentialOverTheAirAccess and PinCredential.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2244

___

### CredentialRulesSupport

• `Const` **CredentialRulesSupport**: `Object`

The value of the DoorLock credentialRulesSupport attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.3.19

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dual` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `single` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `tri` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:525

___

### DaysMaskMap

• `Const` **DaysMaskMap**: `Object`

The DaysMask field used in various commands and shall indicate the days of the week the Week Day schedule
applies for.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.6

#### Type declaration

| Name | Type |
| :------ | :------ |
| `friday` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `monday` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `saturday` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `sunday` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `thursday` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `tuesday` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `wednesday` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:923

___

### DefaultConfigurationRegister

• `Const` **DefaultConfigurationRegister**: `Object`

The value of the DoorLock defaultConfigurationRegister attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.3.28

#### Type declaration

| Name | Type |
| :------ | :------ |
| `autoRelockTimeSet` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `enableLocalProgrammingEnabled` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `keypadInterfaceDefaultAccessEnabled` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `ledSettingsSet` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `remoteInterfaceDefaultAccessIsEnabled` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `soundEnabled` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:147

___

### DoorPositionSensorComponent

• `Const` **DoorPositionSensorComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `doorClosedEvents`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `doorOpenEvents`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `doorState`: [`Attribute`](exports_cluster.md#attribute)<[`DoorState`](../enums/exports_cluster.DoorLock.DoorState.md) \| ``null``, `any`\> ; `openPeriod`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\>  } ; `events`: { `doorStateChange`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature DoorPositionSensor.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1681

___

### HolidaySchedulesComponent

• `Const` **HolidaySchedulesComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  } ; `commands`: { `clearHolidaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getHolidaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setHolidaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature HolidaySchedules.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2171

___

### KeypadOperationEventMask

• `Const` **KeypadOperationEventMask**: `Object`

The value of the DoorLock keypadOperationEventMask attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.3.40

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lockSourceKeypad` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `lockSourceKeypadErrorInvalidPin` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `lockSourceKeypadErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `nonAccessUserOperationEventSourceKeypad` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unknownOrManufacturerSpecificKeypadOperationEvent` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unlockSourceKeypad` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unlockSourceKeypadErrorInvalidCode` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unlockSourceKeypadErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1074

___

### KeypadProgrammingEventMask

• `Const` **KeypadProgrammingEventMask**: `Object`

The value of the DoorLock keypadProgrammingEventMask attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.3.44

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pinAdded` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `pinChanged` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `pinCleared` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `pinCodeChanged` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unknown` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1089

___

### LocalProgrammingFeatures

• `Const` **LocalProgrammingFeatures**: `Object`

The value of the DoorLock localProgrammingFeatures attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.3.33

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addUsersCredentialsSchedulesLocally` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `adjustLockSettingsLocally` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `clearUsersCredentialsSchedulesLocally` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `modifyUsersCredentialsSchedulesLocally` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:160

___

### LoggingComponent

• `Const` **LoggingComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `enableLogging`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`boolean`, `any`\> ; `numberOfLogRecordsSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  } ; `commands`: { `getLogRecord`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature Logging.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1730

___

### ManualOperationEventMask

• `Const` **ManualOperationEventMask**: `Object`

The value of the DoorLock manualOperationEventMask attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.3.42

#### Type declaration

| Name | Type |
| :------ | :------ |
| `autoLock` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `keyLock` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `keyUnlock` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `manualLock` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `manualUnlock` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `oneTouchLock` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `scheduleLock` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `scheduleUnlock` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `thumbturnLock` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `thumbturnUnlock` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unknownOrManufacturerSpecificManualOperationEvent` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1115

___

### NotUserComponent

• `Const` **NotUserComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{}\>

A DoorLockCluster supports these elements if doesn't support feature USR.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2447

___

### NotificationAndPinCredentialComponent

• `Const` **NotificationAndPinCredentialComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `keypadOperationEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features Notification and PinCredential.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2258

___

### NotificationAndRfidCredentialComponent

• `Const` **NotificationAndRfidCredentialComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `rfidOperationEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features Notification and RfidCredential.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2362

___

### NotificationComponent

• `Const` **NotificationComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `manualOperationEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature Notification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2299

___

### PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent

• `Const` **PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `commands`: { `getUserStatus`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> ; `getUserType`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> ; `setUserStatus`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> ; `setUserType`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features PinCredential, RfidCredential and
FingerCredentials and it doesn't support feature USR.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2424

___

### PinCredentialComponent

• `Const` **PinCredentialComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `maxPinCodeLength`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `minPinCodeLength`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `numberOfPinUsersSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature PinCredential.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1992

___

### PinCredentialNotUserComponent

• `Const` **PinCredentialNotUserComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `commands`: { `clearAllPinCodes`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `clearPinCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `getPinCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `setPinCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature PinCredential and it doesn't support feature
USR.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2400

___

### PinCredentialOrRfidCredentialComponent

• `Const` **PinCredentialOrRfidCredentialComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `userCodeTemporaryDisableTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features PinCredential or RfidCredential.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2213

___

### RemoteOperationEventMask

• `Const` **RemoteOperationEventMask**: `Object`

The value of the DoorLock remoteOperationEventMask attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.3.41

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lockSourceRemote` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `lockSourceRemoteErrorInvalidCode` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `lockSourceRemoteErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unknownOrManufacturerSpecificRemoteOperationEvent` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unlockSourceRemote` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unlockSourceRemoteErrorInvalidCode` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unlockSourceRemoteErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1101

___

### RemoteProgrammingEventMask

• `Const` **RemoteProgrammingEventMask**: `Object`

The value of the DoorLock remoteProgrammingEventMask attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.3.45

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pinAdded` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `pinChanged` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `pinCleared` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `rfidCodeAdded` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `rfidCodeCleared` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unknown` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1133

___

### RfidCredentialComponent

• `Const` **RfidCredentialComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `maxRfidCodeLength`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `minRfidCodeLength`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `numberOfRfidUsersSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature RfidCredential.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2032

___

### RfidCredentialNotUserComponent

• `Const` **RfidCredentialNotUserComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `commands`: { `clearAllRfidCodes`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `clearRfidCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `getRfidCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `setRfidCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature RfidCredential and it doesn't support feature
USR.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2452

___

### RfidOperationEventMask

• `Const` **RfidOperationEventMask**: `Object`

The value of the DoorLock rfidOperationEventMask attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.3.43

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lockSourceRfid` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `lockSourceRfidErrorInvalidRfidId` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `lockSourceRfidErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unknownOrManufacturerSpecificKeypadOperationEvent` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unlockSourceRfid` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unlockSourceRfidErrorInvalidRfidId` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unlockSourceRfidErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1146

___

### RfidProgrammingEventMask

• `Const` **RfidProgrammingEventMask**: `Object`

The value of the DoorLock rfidProgrammingEventMask attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.3.46

#### Type declaration

| Name | Type |
| :------ | :------ |
| `idAdded` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `idCleared` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `unknown` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1160

___

### SupportedOperatingModes

• `Const` **SupportedOperatingModes**: `Object`

The value of the DoorLock supportedOperatingModes attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.3.24

#### Type declaration

| Name | Type |
| :------ | :------ |
| `noRemoteLockUnlock` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `normal` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `passage` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `privacy` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `vacation` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:135

___

### TlvClearCredentialRequest

• `Const` **TlvClearCredentialRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearCredential command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:792

___

### TlvClearHolidayScheduleRequest

• `Const` **TlvClearHolidayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearHolidaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1066

___

### TlvClearUserRequest

• `Const` **TlvClearUserRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearUser command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:706

___

### TlvClearWeekDayScheduleRequest

• `Const` **TlvClearWeekDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearWeekDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:989

___

### TlvClearYearDayScheduleRequest

• `Const` **TlvClearYearDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearYearDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1028

___

### TlvCredentialStruct

• `Const` **TlvCredentialStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
credential types and their corresponding indices (if any) for the event or user record.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:311

___

### TlvDoorLockAlarmEvent

• `Const` **TlvDoorLockAlarmEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock doorLockAlarm event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:249

___

### TlvDoorStateChangeEvent

• `Const` **TlvDoorStateChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock doorStateChange event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:512

___

### TlvGetCredentialStatusRequest

• `Const` **TlvGetCredentialStatusRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getCredentialStatus command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:759

___

### TlvGetCredentialStatusResponse

• `Const` **TlvGetCredentialStatusResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:780

___

### TlvGetHolidayScheduleRequest

• `Const` **TlvGetHolidayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getHolidaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1048

___

### TlvGetHolidayScheduleResponse

• `Const` **TlvGetHolidayScheduleResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1054

___

### TlvGetUserRequest

• `Const` **TlvGetUserRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getUser command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:668

___

### TlvGetUserResponse

• `Const` **TlvGetUserResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:674

___

### TlvGetWeekDayScheduleRequest

• `Const` **TlvGetWeekDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getWeekDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:959

___

### TlvGetWeekDayScheduleResponse

• `Const` **TlvGetWeekDayScheduleResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:966

___

### TlvGetYearDayScheduleRequest

• `Const` **TlvGetYearDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getYearDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1009

___

### TlvGetYearDayScheduleResponse

• `Const` **TlvGetYearDayScheduleResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1016

___

### TlvLockDoorRequest

• `Const` **TlvLockDoorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock lockDoor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:185

___

### TlvLockOperationErrorEvent

• `Const` **TlvLockOperationErrorEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock lockOperationError event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:408

___

### TlvLockOperationEvent

• `Const` **TlvLockOperationEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock lockOperation event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:332

___

### TlvLockUserChangeEvent

• `Const` **TlvLockUserChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock lockUserChange event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:866

___

### TlvSetCredentialRequest

• `Const` **TlvSetCredentialRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setCredential command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:714

___

### TlvSetCredentialResponse

• `Const` **TlvSetCredentialResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:749

___

### TlvSetHolidayScheduleRequest

• `Const` **TlvSetHolidayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setHolidaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1037

___

### TlvSetUserRequest

• `Const` **TlvSetUserRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setUser command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:654

___

### TlvSetWeekDayScheduleRequest

• `Const` **TlvSetWeekDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setWeekDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:937

___

### TlvSetYearDayScheduleRequest

• `Const` **TlvSetYearDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setYearDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:998

___

### TlvUnlockDoorRequest

• `Const` **TlvUnlockDoorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock unlockDoor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:193

___

### TlvUnlockWithTimeoutRequest

• `Const` **TlvUnlockWithTimeoutRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock unlockWithTimeout command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:201

___

### UserComponent

• `Const` **UserComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `credentialRulesSupport`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `numberOfTotalUsersSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  } ; `commands`: { `clearCredential`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `clearUser`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getCredentialStatus`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `getUser`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setCredential`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setUser`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: { `lockUserChange`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature User.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1758

___

### WeekDayAccessSchedulesComponent

• `Const` **WeekDayAccessSchedulesComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  } ; `commands`: { `clearWeekDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getWeekDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setWeekDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature WeekDayAccessSchedules.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2061

___

### YearDayAccessSchedulesComponent

• `Const` **YearDayAccessSchedulesComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  } ; `commands`: { `clearYearDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getYearDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setYearDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature YearDayAccessSchedules.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2127
