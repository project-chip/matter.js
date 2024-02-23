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

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.DoorLock.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `doorPositionSensor`: ``true``  } ? typeof [`DoorPositionSensorComponent`](exports_cluster.DoorLock.md#doorpositionsensorcomponent) : {} & `SF` extends \{ `logging`: ``true``  } ? typeof [`LoggingComponent`](exports_cluster.DoorLock.md#loggingcomponent) : {} & `SF` extends \{ `user`: ``true``  } ? typeof [`UserComponent`](exports_cluster.DoorLock.md#usercomponent) : {} & `SF` extends \{ `pinCredential`: ``true``  } ? typeof [`PinCredentialComponent`](exports_cluster.DoorLock.md#pincredentialcomponent) : {} & `SF` extends \{ `rfidCredential`: ``true``  } ? typeof [`RfidCredentialComponent`](exports_cluster.DoorLock.md#rfidcredentialcomponent) : {} & `SF` extends \{ `weekDayAccessSchedules`: ``true``  } ? typeof [`WeekDayAccessSchedulesComponent`](exports_cluster.DoorLock.md#weekdayaccessschedulescomponent) : {} & `SF` extends \{ `yearDayAccessSchedules`: ``true``  } ? typeof [`YearDayAccessSchedulesComponent`](exports_cluster.DoorLock.md#yeardayaccessschedulescomponent) : {} & `SF` extends \{ `holidaySchedules`: ``true``  } ? typeof [`HolidaySchedulesComponent`](exports_cluster.DoorLock.md#holidayschedulescomponent) : {} & `SF` extends \{ `pinCredential`: ``true``  } \| \{ `rfidCredential`: ``true``  } ? typeof [`PinCredentialOrRfidCredentialComponent`](exports_cluster.DoorLock.md#pincredentialorrfidcredentialcomponent) : {} & `SF` extends \{ `credentialOverTheAirAccess`: ``true`` ; `pinCredential`: ``true``  } ? typeof [`CredentialOverTheAirAccessAndPinCredentialComponent`](exports_cluster.DoorLock.md#credentialovertheairaccessandpincredentialcomponent) : {} & `SF` extends \{ `notification`: ``true`` ; `pinCredential`: ``true``  } ? typeof [`NotificationAndPinCredentialComponent`](exports_cluster.DoorLock.md#notificationandpincredentialcomponent) : {} & `SF` extends \{ `notification`: ``true``  } ? typeof [`NotificationComponent`](exports_cluster.DoorLock.md#notificationcomponent) : {} & `SF` extends \{ `notification`: ``true`` ; `rfidCredential`: ``true``  } ? typeof [`NotificationAndRfidCredentialComponent`](exports_cluster.DoorLock.md#notificationandrfidcredentialcomponent) : {} & `SF` extends \{ `pinCredential`: ``true`` ; `user`: ``false``  } ? typeof [`PinCredentialNotUserComponent`](exports_cluster.DoorLock.md#pincredentialnotusercomponent) : {} & `SF` extends \{ `fingerCredentials`: ``true`` ; `pinCredential`: ``true`` ; `rfidCredential`: ``true`` ; `user`: ``false``  } ? typeof [`PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent`](exports_cluster.DoorLock.md#pincredentialandrfidcredentialandfingercredentialsnotusercomponent) : {} & `SF` extends \{ `user`: ``false``  } ? typeof [`NotUserComponent`](exports_cluster.DoorLock.md#notusercomponent) : {} & `SF` extends \{ `rfidCredential`: ``true`` ; `user`: ``false``  } ? typeof [`RfidCredentialNotUserComponent`](exports_cluster.DoorLock.md#rfidcredentialnotusercomponent) : {} & `SF` extends \{ `faceCredentials`: ``false`` ; `fingerCredentials`: ``false`` ; `pinCredential`: ``false`` ; `rfidCredential`: ``false`` ; `user`: ``true``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

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
| `forcedDoorOpenUnderDoorLockedCondition` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockResetToFactoryDefaults` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockingMechanismJammed` | [`BitFlag`](exports_schema.md#bitflag) |
| `reserved` | [`BitFlag`](exports_schema.md#bitflag) |
| `rfModulePowerCycled` | [`BitFlag`](exports_schema.md#bitflag) |
| `tamperAlarmFrontEscutcheonRemovedFromMain` | [`BitFlag`](exports_schema.md#bitflag) |
| `tamperAlarmWrongCodeEntryLimit` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:171

___

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `actuatorEnabled`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `lockState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockState`](../enums/exports_cluster.DoorLock.LockState.md) \| ``null``, `any`\> ; `lockType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockType`](../enums/exports_cluster.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperatingMode`](../enums/exports_cluster.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `lockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `doorLockAlarm`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperation`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `logging`: [`BitFlag`](exports_schema.md#bitflag) ; `notification`: [`BitFlag`](exports_schema.md#bitflag) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `user`: [`BitFlag`](exports_schema.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``257`` ; `name`: ``"DoorLock"`` ; `revision`: ``6``  }\>

These elements and properties are present in all DoorLock clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1247

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `lockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `doorLockAlarm`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperation`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `logging`: [`BitFlag`](exports_schema.md#bitflag) ; `notification`: [`BitFlag`](exports_schema.md#bitflag) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `user`: [`BitFlag`](exports_schema.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"DoorLock"`` ; `revision`: ``6`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `actuatorEnabled`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `lockState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockState`](../enums/exports_cluster.DoorLock.LockState.md) \| ``null``, `any`\> ; `lockType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockType`](../enums/exports_cluster.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperatingMode`](../enums/exports_cluster.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `lockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `doorLockAlarm`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperation`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `logging`: [`BitFlag`](exports_schema.md#bitflag) ; `notification`: [`BitFlag`](exports_schema.md#bitflag) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `user`: [`BitFlag`](exports_schema.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``257`` ; `name`: ``"DoorLock"`` ; `revision`: ``6``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.DoorLock.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `logging`: [`BitFlag`](exports_schema.md#bitflag) ; `notification`: [`BitFlag`](exports_schema.md#bitflag) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `user`: [`BitFlag`](exports_schema.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

Door Lock

An interface to a generic way to secure a door

DoorLockCluster supports optional features that you can enable with the DoorLockCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2481

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `actuatorEnabled`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `credentialRulesSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `defaultConfigurationRegister`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `doorClosedEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `doorPositionSensor`: `boolean`  }]  } ; `doorOpenEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `doorPositionSensor`: `boolean`  }]  } ; `doorState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`DoorState`](../enums/exports_cluster.DoorLock.DoorState.md) \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `doorPositionSensor`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLogging`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `logging`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `user`: `boolean`  }]  } ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `logging`: [`BitFlag`](exports_schema.md#bitflag) ; `notification`: [`BitFlag`](exports_schema.md#bitflag) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `user`: [`BitFlag`](exports_schema.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `keypadOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean` ; `pinCredential`: `boolean`  }]  } ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean` ; `pinCredential`: `boolean`  }]  } ; `language`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `lockState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockState`](../enums/exports_cluster.DoorLock.LockState.md) \| ``null``, `any`\> ; `lockType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`LockType`](../enums/exports_cluster.DoorLock.LockType.md), `any`\> ; `manualOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean`  }]  } ; `maxPinCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `maxRfidCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `minPinCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `minRfidCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfLogRecordsSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `logging`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfPinUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfRfidUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfTotalUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `openPeriod`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `doorPositionSensor`: `boolean`  }]  } ; `operatingMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperatingMode`](../enums/exports_cluster.DoorLock.OperatingMode.md), `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean`  }]  } ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean`  }]  } ; `requirePinForRemoteOperation`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `credentialOverTheAirAccess`: `boolean` ; `pinCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `rfidOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean` ; `rfidCredential`: `boolean`  }]  } ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `notification`: `boolean` ; `rfidCredential`: `boolean`  }]  } ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `pinCredential`: `boolean`  }]  } ; `soundVolume`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean`  }, \{ `rfidCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean`  }, \{ `rfidCredential`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `clearAllPinCodes`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearAllRfidCodes`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearCredential`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clearYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getCredentialStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getLogRecord`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `logging`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getUserStatus`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` ; `pinCredential`: `boolean` ; `rfidCredential`: `boolean` ; `user`: `boolean`  }]  } ; `getUserType`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` ; `pinCredential`: `boolean` ; `rfidCredential`: `boolean` ; `user`: `boolean`  }]  } ; `getWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `lockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `setCredential`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` ; `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setUserStatus`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` ; `pinCredential`: `boolean` ; `rfidCredential`: `boolean` ; `user`: `boolean`  }]  } ; `setUserType`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` ; `pinCredential`: `boolean` ; `rfidCredential`: `boolean` ; `user`: `boolean`  }]  } ; `setWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unlockDoor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `doorLockAlarm`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `doorStateChange`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `doorPositionSensor`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `lockOperation`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `lockUserChange`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `user`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `logging`: [`BitFlag`](exports_schema.md#bitflag) ; `notification`: [`BitFlag`](exports_schema.md#bitflag) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag) ; `user`: [`BitFlag`](exports_schema.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``257`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"DoorLock"`` ; `revision`: ``6``  }\>

This cluster supports all DoorLock features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:3624

___

### CredentialOverTheAirAccessAndPinCredentialComponent

• `Const` **CredentialOverTheAirAccessAndPinCredentialComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `requirePinForRemoteOperation`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\>  }  }\>

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
| `dual` | [`BitFlag`](exports_schema.md#bitflag) |
| `single` | [`BitFlag`](exports_schema.md#bitflag) |
| `tri` | [`BitFlag`](exports_schema.md#bitflag) |

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
| `friday` | [`BitFlag`](exports_schema.md#bitflag) |
| `monday` | [`BitFlag`](exports_schema.md#bitflag) |
| `saturday` | [`BitFlag`](exports_schema.md#bitflag) |
| `sunday` | [`BitFlag`](exports_schema.md#bitflag) |
| `thursday` | [`BitFlag`](exports_schema.md#bitflag) |
| `tuesday` | [`BitFlag`](exports_schema.md#bitflag) |
| `wednesday` | [`BitFlag`](exports_schema.md#bitflag) |

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
| `autoRelockTimeSet` | [`BitFlag`](exports_schema.md#bitflag) |
| `enableLocalProgrammingEnabled` | [`BitFlag`](exports_schema.md#bitflag) |
| `keypadInterfaceDefaultAccessEnabled` | [`BitFlag`](exports_schema.md#bitflag) |
| `ledSettingsSet` | [`BitFlag`](exports_schema.md#bitflag) |
| `remoteInterfaceDefaultAccessIsEnabled` | [`BitFlag`](exports_schema.md#bitflag) |
| `soundEnabled` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:147

___

### DoorPositionSensorComponent

• `Const` **DoorPositionSensorComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `doorClosedEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorOpenEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`DoorState`](../enums/exports_cluster.DoorLock.DoorState.md) \| ``null``, `any`\> ; `openPeriod`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `doorStateChange`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature DoorPositionSensor.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1681

___

### HolidaySchedulesComponent

• `Const` **HolidaySchedulesComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setHolidaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

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
| `lockSourceKeypad` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockSourceKeypadErrorInvalidPin` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockSourceKeypadErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag) |
| `nonAccessUserOperationEventSourceKeypad` | [`BitFlag`](exports_schema.md#bitflag) |
| `unknownOrManufacturerSpecificKeypadOperationEvent` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceKeypad` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceKeypadErrorInvalidCode` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceKeypadErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag) |

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
| `pinAdded` | [`BitFlag`](exports_schema.md#bitflag) |
| `pinChanged` | [`BitFlag`](exports_schema.md#bitflag) |
| `pinCleared` | [`BitFlag`](exports_schema.md#bitflag) |
| `pinCodeChanged` | [`BitFlag`](exports_schema.md#bitflag) |
| `unknown` | [`BitFlag`](exports_schema.md#bitflag) |

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
| `addUsersCredentialsSchedulesLocally` | [`BitFlag`](exports_schema.md#bitflag) |
| `adjustLockSettingsLocally` | [`BitFlag`](exports_schema.md#bitflag) |
| `clearUsersCredentialsSchedulesLocally` | [`BitFlag`](exports_schema.md#bitflag) |
| `modifyUsersCredentialsSchedulesLocally` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:160

___

### LoggingComponent

• `Const` **LoggingComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `enableLogging`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> ; `numberOfLogRecordsSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `getLogRecord`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  }\>

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

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1115

___

### NotUserComponent

• `Const` **NotUserComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<{}\>

A DoorLockCluster supports these elements if doesn't support feature USR.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2447

___

### NotificationAndPinCredentialComponent

• `Const` **NotificationAndPinCredentialComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `keypadOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features Notification and PinCredential.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2258

___

### NotificationAndRfidCredentialComponent

• `Const` **NotificationAndRfidCredentialComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `rfidOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features Notification and RfidCredential.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2362

___

### NotificationComponent

• `Const` **NotificationComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `manualOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature Notification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2299

___

### PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent

• `Const` **PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `getUserStatus`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `getUserType`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserStatus`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserType`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features PinCredential, RfidCredential and
FingerCredentials and it doesn't support feature USR.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2424

___

### PinCredentialComponent

• `Const` **PinCredentialComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxPinCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `minPinCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfPinUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature PinCredential.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1992

___

### PinCredentialNotUserComponent

• `Const` **PinCredentialNotUserComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `clearAllPinCodes`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `clearPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `getPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `setPinCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature PinCredential and it doesn't support feature
USR.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2400

___

### PinCredentialOrRfidCredentialComponent

• `Const` **PinCredentialOrRfidCredentialComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  }  }\>

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
| `lockSourceRemote` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockSourceRemoteErrorInvalidCode` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockSourceRemoteErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag) |
| `unknownOrManufacturerSpecificRemoteOperationEvent` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceRemote` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceRemoteErrorInvalidCode` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceRemoteErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag) |

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
| `pinAdded` | [`BitFlag`](exports_schema.md#bitflag) |
| `pinChanged` | [`BitFlag`](exports_schema.md#bitflag) |
| `pinCleared` | [`BitFlag`](exports_schema.md#bitflag) |
| `rfidCodeAdded` | [`BitFlag`](exports_schema.md#bitflag) |
| `rfidCodeCleared` | [`BitFlag`](exports_schema.md#bitflag) |
| `unknown` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1133

___

### RfidCredentialComponent

• `Const` **RfidCredentialComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxRfidCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `minRfidCodeLength`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfRfidUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature RfidCredential.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2032

___

### RfidCredentialNotUserComponent

• `Const` **RfidCredentialNotUserComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `clearAllRfidCodes`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `clearRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `getRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `setRfidCode`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  }\>

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
| `lockSourceRfid` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockSourceRfidErrorInvalidRfidId` | [`BitFlag`](exports_schema.md#bitflag) |
| `lockSourceRfidErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag) |
| `unknownOrManufacturerSpecificKeypadOperationEvent` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceRfid` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceRfidErrorInvalidRfidId` | [`BitFlag`](exports_schema.md#bitflag) |
| `unlockSourceRfidErrorInvalidSchedule` | [`BitFlag`](exports_schema.md#bitflag) |

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
| `idAdded` | [`BitFlag`](exports_schema.md#bitflag) |
| `idCleared` | [`BitFlag`](exports_schema.md#bitflag) |
| `unknown` | [`BitFlag`](exports_schema.md#bitflag) |

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
| `noRemoteLockUnlock` | [`BitFlag`](exports_schema.md#bitflag) |
| `normal` | [`BitFlag`](exports_schema.md#bitflag) |
| `passage` | [`BitFlag`](exports_schema.md#bitflag) |
| `privacy` | [`BitFlag`](exports_schema.md#bitflag) |
| `vacation` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:135

___

### TlvClearCredentialRequest

• `Const` **TlvClearCredentialRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearCredential command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:792

___

### TlvClearHolidayScheduleRequest

• `Const` **TlvClearHolidayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearHolidaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1066

___

### TlvClearUserRequest

• `Const` **TlvClearUserRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearUser command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:706

___

### TlvClearWeekDayScheduleRequest

• `Const` **TlvClearWeekDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearWeekDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:989

___

### TlvClearYearDayScheduleRequest

• `Const` **TlvClearYearDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock clearYearDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1028

___

### TlvCredentialStruct

• `Const` **TlvCredentialStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
credential types and their corresponding indices (if any) for the event or user record.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:311

___

### TlvDoorLockAlarmEvent

• `Const` **TlvDoorLockAlarmEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock doorLockAlarm event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:249

___

### TlvDoorStateChangeEvent

• `Const` **TlvDoorStateChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock doorStateChange event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:512

___

### TlvGetCredentialStatusRequest

• `Const` **TlvGetCredentialStatusRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getCredentialStatus command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:759

___

### TlvGetCredentialStatusResponse

• `Const` **TlvGetCredentialStatusResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:780

___

### TlvGetHolidayScheduleRequest

• `Const` **TlvGetHolidayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getHolidaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1048

___

### TlvGetHolidayScheduleResponse

• `Const` **TlvGetHolidayScheduleResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1054

___

### TlvGetUserRequest

• `Const` **TlvGetUserRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getUser command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:668

___

### TlvGetUserResponse

• `Const` **TlvGetUserResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:674

___

### TlvGetWeekDayScheduleRequest

• `Const` **TlvGetWeekDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getWeekDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:959

___

### TlvGetWeekDayScheduleResponse

• `Const` **TlvGetWeekDayScheduleResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:966

___

### TlvGetYearDayScheduleRequest

• `Const` **TlvGetYearDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock getYearDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1009

___

### TlvGetYearDayScheduleResponse

• `Const` **TlvGetYearDayScheduleResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1016

___

### TlvLockDoorRequest

• `Const` **TlvLockDoorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock lockDoor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:185

___

### TlvLockOperationErrorEvent

• `Const` **TlvLockOperationErrorEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock lockOperationError event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:408

___

### TlvLockOperationEvent

• `Const` **TlvLockOperationEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock lockOperation event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:332

___

### TlvLockUserChangeEvent

• `Const` **TlvLockUserChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the DoorLock lockUserChange event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:866

___

### TlvSetCredentialRequest

• `Const` **TlvSetCredentialRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setCredential command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:714

___

### TlvSetCredentialResponse

• `Const` **TlvSetCredentialResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:749

___

### TlvSetHolidayScheduleRequest

• `Const` **TlvSetHolidayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setHolidaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1037

___

### TlvSetUserRequest

• `Const` **TlvSetUserRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setUser command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:654

___

### TlvSetWeekDayScheduleRequest

• `Const` **TlvSetWeekDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setWeekDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:937

___

### TlvSetYearDayScheduleRequest

• `Const` **TlvSetYearDayScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock setYearDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:998

___

### TlvUnlockDoorRequest

• `Const` **TlvUnlockDoorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock unlockDoor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:193

___

### TlvUnlockWithTimeoutRequest

• `Const` **TlvUnlockWithTimeoutRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DoorLock unlockWithTimeout command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:201

___

### UserComponent

• `Const` **UserComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `credentialRulesSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfTotalUsersSupported`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearCredential`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `clearUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getCredentialStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `getUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setCredential`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setUser`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `lockUserChange`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature User.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1758

___

### WeekDayAccessSchedulesComponent

• `Const` **WeekDayAccessSchedulesComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setWeekDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature WeekDayAccessSchedules.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2061

___

### YearDayAccessSchedulesComponent

• `Const` **YearDayAccessSchedulesComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setYearDaySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature YearDayAccessSchedules.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:2127
