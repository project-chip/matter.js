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

### Type Aliases

- [Extension](cluster_export.DoorLock.md#extension)

### Variables

- [AlarmMask](cluster_export.DoorLock.md#alarmmask)
- [Base](cluster_export.DoorLock.md#base)
- [Cluster](cluster_export.DoorLock.md#cluster)
- [Complete](cluster_export.DoorLock.md#complete)
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

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.DoorLock.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `doorPositionSensor`: ``true``  } ? typeof [`DoorPositionSensorComponent`](cluster_export.DoorLock.md#doorpositionsensorcomponent) : {} & `SF` extends \{ `logging`: ``true``  } ? typeof [`LoggingComponent`](cluster_export.DoorLock.md#loggingcomponent) : {} & `SF` extends \{ `user`: ``true``  } ? typeof [`UserComponent`](cluster_export.DoorLock.md#usercomponent) : {} & `SF` extends \{ `pinCredential`: ``true``  } ? typeof [`PinCredentialComponent`](cluster_export.DoorLock.md#pincredentialcomponent) : {} & `SF` extends \{ `rfidCredential`: ``true``  } ? typeof [`RfidCredentialComponent`](cluster_export.DoorLock.md#rfidcredentialcomponent) : {} & `SF` extends \{ `weekDayAccessSchedules`: ``true``  } ? typeof [`WeekDayAccessSchedulesComponent`](cluster_export.DoorLock.md#weekdayaccessschedulescomponent) : {} & `SF` extends \{ `yearDayAccessSchedules`: ``true``  } ? typeof [`YearDayAccessSchedulesComponent`](cluster_export.DoorLock.md#yeardayaccessschedulescomponent) : {} & `SF` extends \{ `holidaySchedules`: ``true``  } ? typeof [`HolidaySchedulesComponent`](cluster_export.DoorLock.md#holidayschedulescomponent) : {} & `SF` extends \{ `pinCredential`: ``true``  } \| \{ `rfidCredential`: ``true``  } ? typeof [`PinCredentialOrRfidCredentialComponent`](cluster_export.DoorLock.md#pincredentialorrfidcredentialcomponent) : {} & `SF` extends \{ `credentialOverTheAirAccess`: ``true`` ; `pinCredential`: ``true``  } ? typeof [`CredentialOverTheAirAccessAndPinCredentialComponent`](cluster_export.DoorLock.md#credentialovertheairaccessandpincredentialcomponent) : {} & `SF` extends \{ `notification`: ``true`` ; `pinCredential`: ``true``  } ? typeof [`NotificationAndPinCredentialComponent`](cluster_export.DoorLock.md#notificationandpincredentialcomponent) : {} & `SF` extends \{ `notification`: ``true``  } ? typeof [`NotificationComponent`](cluster_export.DoorLock.md#notificationcomponent) : {} & `SF` extends \{ `notification`: ``true`` ; `rfidCredential`: ``true``  } ? typeof [`NotificationAndRfidCredentialComponent`](cluster_export.DoorLock.md#notificationandrfidcredentialcomponent) : {} & `SF` extends \{ `pinCredential`: ``true`` ; `user`: ``false``  } ? typeof [`PinCredentialNotUserComponent`](cluster_export.DoorLock.md#pincredentialnotusercomponent) : {} & `SF` extends \{ `fingerCredentials`: ``true`` ; `pinCredential`: ``true`` ; `rfidCredential`: ``true`` ; `user`: ``false``  } ? typeof [`PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent`](cluster_export.DoorLock.md#pincredentialandrfidcredentialandfingercredentialsnotusercomponent) : {} & `SF` extends \{ `user`: ``false``  } ? typeof [`NotUserComponent`](cluster_export.DoorLock.md#notusercomponent) : {} & `SF` extends \{ `rfidCredential`: ``true`` ; `user`: ``false``  } ? typeof [`RfidCredentialNotUserComponent`](cluster_export.DoorLock.md#rfidcredentialnotusercomponent) : {} & `SF` extends \{ `faceCredentials`: ``false`` ; `fingerCredentials`: ``false`` ; `pinCredential`: ``false`` ; `rfidCredential`: ``false`` ; `user`: ``true``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2494](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2494)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:218](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L218)

___

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `actuatorEnabled`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitFlag`](schema_export.md#bitflag) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `lockState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `normal`: [`BitFlag`](schema_export.md#bitflag) ; `passage`: [`BitFlag`](schema_export.md#bitflag) ; `privacy`: [`BitFlag`](schema_export.md#bitflag) ; `vacation`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `lockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `events`: \{ `doorLockAlarm`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `lockOperation`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\>  } ; `features`: \{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag) ; `logging`: [`BitFlag`](schema_export.md#bitflag) ; `notification`: [`BitFlag`](schema_export.md#bitflag) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag) ; `user`: [`BitFlag`](schema_export.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``257`` = 0x101; `name`: ``"DoorLock"`` = "DoorLock"; `revision`: ``6`` = 6 }\>

These elements and properties are present in all DoorLock clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1279](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1279)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `actuatorEnabled`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitFlag`](schema_export.md#bitflag) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `lockState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `normal`: [`BitFlag`](schema_export.md#bitflag) ; `passage`: [`BitFlag`](schema_export.md#bitflag) ; `privacy`: [`BitFlag`](schema_export.md#bitflag) ; `vacation`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag) ; `logging`: [`BitFlag`](schema_export.md#bitflag) ; `notification`: [`BitFlag`](schema_export.md#bitflag) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag) ; `user`: [`BitFlag`](schema_export.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag) ; `logging`: [`BitFlag`](schema_export.md#bitflag) ; `notification`: [`BitFlag`](schema_export.md#bitflag) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag) ; `user`: [`BitFlag`](schema_export.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `commands`: \{ `lockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `events`: \{ `doorLockAlarm`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `lockOperation`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\>  } ; `features`: \{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag) ; `logging`: [`BitFlag`](schema_export.md#bitflag) ; `notification`: [`BitFlag`](schema_export.md#bitflag) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag) ; `user`: [`BitFlag`](schema_export.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: [`Branded`](util_export.md#branded)\<``257`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"DoorLock"`` ; `revision`: ``6`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `actuatorEnabled`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitFlag`](schema_export.md#bitflag) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `lockState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `normal`: [`BitFlag`](schema_export.md#bitflag) ; `passage`: [`BitFlag`](schema_export.md#bitflag) ; `privacy`: [`BitFlag`](schema_export.md#bitflag) ; `vacation`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `lockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `events`: \{ `doorLockAlarm`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `lockOperation`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\>  } ; `features`: \{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag) ; `logging`: [`BitFlag`](schema_export.md#bitflag) ; `notification`: [`BitFlag`](schema_export.md#bitflag) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag) ; `user`: [`BitFlag`](schema_export.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``257`` = 0x101; `name`: ``"DoorLock"`` = "DoorLock"; `revision`: ``6`` = 6 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.DoorLock.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag) ; `logging`: [`BitFlag`](schema_export.md#bitflag) ; `notification`: [`BitFlag`](schema_export.md#bitflag) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag) ; `user`: [`BitFlag`](schema_export.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag)  }, `T`\>\> = extender }

Door Lock

An interface to a generic way to secure a door

DoorLockCluster supports optional features that you can enable with the DoorLockCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2420](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2420)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `actuatorEnabled`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitFlag`](schema_export.md#bitflag) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `credentialRulesSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `dual`: [`BitFlag`](schema_export.md#bitflag) ; `single`: [`BitFlag`](schema_export.md#bitflag) ; `tri`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `defaultConfigurationRegister`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `doorClosedEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `doorPositionSensor`: `boolean` = true }]  } ; `doorOpenEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `doorPositionSensor`: `boolean` = true }]  } ; `doorState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`DoorState`](../enums/cluster_export.DoorLock.DoorState.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `doorPositionSensor`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enableLogging`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `logging`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `user`: `boolean` = true }]  } ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag) ; `logging`: [`BitFlag`](schema_export.md#bitflag) ; `notification`: [`BitFlag`](schema_export.md#bitflag) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag) ; `user`: [`BitFlag`](schema_export.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `keypadOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `lockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidPin`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `nonAccessUserOperationEventSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true; `pinCredential`: `boolean` = true }]  } ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `pinCodeChanged`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true; `pinCredential`: `boolean` = true }]  } ; `language`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `lockState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `manualOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `manualLock`: [`BitFlag`](schema_export.md#bitflag) ; `manualUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `oneTouchLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnLock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificManualOperationEvent`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true }]  } ; `maxPinCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `maxRfidCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `minPinCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `minRfidCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfLogRecordsSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `logging`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfPinUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfRfidUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfTotalUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `openPeriod`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `doorPositionSensor`: `boolean` = true }]  } ; `operatingMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `lockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificRemoteOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true }]  } ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeAdded`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true }]  } ; `requirePinForRemoteOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `credentialOverTheAirAccess`: `boolean` = true; `pinCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `rfidOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `lockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true; `rfidCredential`: `boolean` = true }]  } ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `idAdded`: [`BitFlag`](schema_export.md#bitflag) ; `idCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `notification`: `boolean` = true; `rfidCredential`: `boolean` = true }]  } ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `pinCredential`: `boolean` = true }]  } ; `soundVolume`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `normal`: [`BitFlag`](schema_export.md#bitflag) ; `passage`: [`BitFlag`](schema_export.md#bitflag) ; `privacy`: [`BitFlag`](schema_export.md#bitflag) ; `vacation`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true }, \{ `rfidCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true }, \{ `rfidCredential`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `clearAllPinCodes`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearAllRfidCodes`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearCredential`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getCredentialStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getLogRecord`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `logging`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getUserStatus`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` = true; `pinCredential`: `boolean` = true; `rfidCredential`: `boolean` = true; `user`: `boolean` = false }]  } ; `getUserType`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` = true; `pinCredential`: `boolean` = true; `rfidCredential`: `boolean` = true; `user`: `boolean` = false }]  } ; `getWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `lockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `setCredential`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `holidaySchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `pinCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rfidCredential`: `boolean` = true; `user`: `boolean` = false }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setUserStatus`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` = true; `pinCredential`: `boolean` = true; `rfidCredential`: `boolean` = true; `user`: `boolean` = false }]  } ; `setUserType`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `fingerCredentials`: `boolean` = true; `pinCredential`: `boolean` = true; `rfidCredential`: `boolean` = true; `user`: `boolean` = false }]  } ; `setWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `weekDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `yearDayAccessSchedules`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unlockDoor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `events`: \{ `doorLockAlarm`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `doorStateChange`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `doorPositionSensor`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `lockOperation`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `lockUserChange`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `user`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag) ; `logging`: [`BitFlag`](schema_export.md#bitflag) ; `notification`: [`BitFlag`](schema_export.md#bitflag) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag) ; `user`: [`BitFlag`](schema_export.md#bitflag) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: ``257`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"DoorLock"`` = Cluster.name; `revision`: ``6`` = Cluster.revision }\>

This cluster supports all DoorLock features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2538](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2538)

___

### CredentialOverTheAirAccessAndPinCredentialComponent

• `Const` **CredentialOverTheAirAccessAndPinCredentialComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `requirePinForRemoteOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features CredentialOverTheAirAccess and PinCredential.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2103](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2103)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:577](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L577)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:947](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L947)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:192](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L192)

___

### DoorPositionSensorComponent

• `Const` **DoorPositionSensorComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `doorClosedEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorOpenEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `doorState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`DoorState`](../enums/cluster_export.DoorLock.DoorState.md), `any`\> ; `openPeriod`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `doorStateChange`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature DoorPositionSensor.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1632](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1632)

___

### HolidaySchedulesComponent

• `Const` **HolidaySchedulesComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>, `any`\> ; `setHolidaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature HolidaySchedules.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2013](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2013)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1091](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1091)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1107](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1107)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:206](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L206)

___

### LoggingComponent

• `Const` **LoggingComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `enableLogging`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `numberOfLogRecordsSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `getLogRecord`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature Logging.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1679](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1679)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1135](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1135)

___

### NotUserComponent

• `Const` **NotUserComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<{}\>

A DoorLockCluster supports these elements if doesn't support feature USR.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2363](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2363)

___

### NotificationAndPinCredentialComponent

• `Const` **NotificationAndPinCredentialComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `keypadOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `lockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidPin`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `nonAccessUserOperationEventSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `pinCodeChanged`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features Notification and PinCredential.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2122](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2122)

___

### NotificationAndRfidCredentialComponent

• `Const` **NotificationAndRfidCredentialComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `rfidOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `lockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfid`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `idAdded`: [`BitFlag`](schema_export.md#bitflag) ; `idCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features Notification and RfidCredential.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2224](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2224)

___

### NotificationComponent

• `Const` **NotificationComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `manualOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyLock`: [`BitFlag`](schema_export.md#bitflag) ; `keyUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `manualLock`: [`BitFlag`](schema_export.md#bitflag) ; `manualUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `oneTouchLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleLock`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnLock`: [`BitFlag`](schema_export.md#bitflag) ; `thumbturnUnlock`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificManualOperationEvent`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `lockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `lockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag) ; `unknownOrManufacturerSpecificRemoteOperationEvent`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemote`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag) ; `unlockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeAdded`: [`BitFlag`](schema_export.md#bitflag) ; `rfidCodeCleared`: [`BitFlag`](schema_export.md#bitflag) ; `unknown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature Notification.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2164](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2164)

___

### PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent

• `Const` **PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `getUserStatus`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `getUserType`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserStatus`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setUserType`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features PinCredential, RfidCredential and
FingerCredentials and it doesn't support feature USR.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2312](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2312)

___

### PinCredentialComponent

• `Const` **PinCredentialComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxPinCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `minPinCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfPinUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature PinCredential.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1835](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1835)

___

### PinCredentialNotUserComponent

• `Const` **PinCredentialNotUserComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `clearAllPinCodes`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `clearPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `setPinCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature PinCredential and it doesn't support feature
USR.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2266](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2266)

___

### PinCredentialOrRfidCredentialComponent

• `Const` **PinCredentialOrRfidCredentialComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features PinCredential or RfidCredential.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2062](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2062)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1120](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1120)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1154](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1154)

___

### RfidCredentialComponent

• `Const` **RfidCredentialComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxRfidCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `minRfidCodeLength`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfRfidUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature RfidCredential.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1883](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1883)

___

### RfidCredentialNotUserComponent

• `Const` **RfidCredentialNotUserComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `clearAllRfidCodes`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `clearRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `setRfidCode`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature RfidCredential and it doesn't support feature
USR.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2369](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2369)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1168](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1168)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1183](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1183)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:179](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L179)

___

### TlvClearCredentialRequest

• `Const` **TlvClearCredentialRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>

Input to the DoorLock clearCredential command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:814](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L814)

___

### TlvClearHolidayScheduleRequest

• `Const` **TlvClearHolidayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock clearHolidaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1084](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1084)

___

### TlvClearUserRequest

• `Const` **TlvClearUserRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock clearUser command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:756](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L756)

___

### TlvClearWeekDayScheduleRequest

• `Const` **TlvClearWeekDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock clearWeekDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1001](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1001)

___

### TlvClearYearDayScheduleRequest

• `Const` **TlvClearYearDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock clearYearDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1044](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1044)

___

### TlvCredentialStruct

• `Const` **TlvCredentialStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>

The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
credential types and their corresponding indices (if any) for the event or user record.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:370](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L370)

___

### TlvDoorLockAlarmEvent

• `Const` **TlvDoorLockAlarmEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>

Body of the DoorLock doorLockAlarm event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:304](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L304)

___

### TlvDoorStateChangeEvent

• `Const` **TlvDoorStateChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>

Body of the DoorLock doorStateChange event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:563](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L563)

___

### TlvGetCredentialStatusRequest

• `Const` **TlvGetCredentialStatusRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>

Input to the DoorLock getCredentialStatus command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:796](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L796)

___

### TlvGetCredentialStatusResponse

• `Const` **TlvGetCredentialStatusResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:801](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L801)

___

### TlvGetHolidayScheduleRequest

• `Const` **TlvGetHolidayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock getHolidaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1066](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1066)

___

### TlvGetHolidayScheduleResponse

• `Const` **TlvGetHolidayScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1071](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1071)

___

### TlvGetUserRequest

• `Const` **TlvGetUserRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock getUser command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:733](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L733)

___

### TlvGetUserResponse

• `Const` **TlvGetUserResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:738](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L738)

___

### TlvGetWeekDayScheduleRequest

• `Const` **TlvGetWeekDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock getWeekDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:977](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L977)

___

### TlvGetWeekDayScheduleResponse

• `Const` **TlvGetWeekDayScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:985](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L985)

___

### TlvGetYearDayScheduleRequest

• `Const` **TlvGetYearDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock getYearDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1023](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1023)

___

### TlvGetYearDayScheduleResponse

• `Const` **TlvGetYearDayScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1031](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1031)

___

### TlvLockDoorRequest

• `Const` **TlvLockDoorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>

Input to the DoorLock lockDoor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:233](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L233)

___

### TlvLockOperationErrorEvent

• `Const` **TlvLockOperationErrorEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Body of the DoorLock lockOperationError event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:461](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L461)

___

### TlvLockOperationEvent

• `Const` **TlvLockOperationEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Body of the DoorLock lockOperation event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:393](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L393)

___

### TlvLockUserChangeEvent

• `Const` **TlvLockUserChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Body of the DoorLock lockUserChange event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.5

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:883](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L883)

___

### TlvSetCredentialRequest

• `Const` **TlvSetCredentialRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>

Input to the DoorLock setCredential command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:763](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L763)

___

### TlvSetCredentialResponse

• `Const` **TlvSetCredentialResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:785](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L785)

___

### TlvSetHolidayScheduleRequest

• `Const` **TlvSetHolidayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>

Input to the DoorLock setHolidaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1054](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1054)

___

### TlvSetUserRequest

• `Const` **TlvSetUserRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Input to the DoorLock setUser command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:718](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L718)

___

### TlvSetWeekDayScheduleRequest

• `Const` **TlvSetWeekDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock setWeekDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:962](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L962)

___

### TlvSetYearDayScheduleRequest

• `Const` **TlvSetYearDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock setYearDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1011](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1011)

___

### TlvUnlockDoorRequest

• `Const` **TlvUnlockDoorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>

Input to the DoorLock unlockDoor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:240](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L240)

___

### TlvUnlockWithTimeoutRequest

• `Const` **TlvUnlockWithTimeoutRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the DoorLock unlockWithTimeout command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:247](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L247)

___

### UserComponent

• `Const` **UserComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `credentialRulesSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `dual`: [`BitFlag`](schema_export.md#bitflag) ; `single`: [`BitFlag`](schema_export.md#bitflag) ; `tri`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfTotalUsersSupported`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearCredential`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, `void`, `any`\> ; `clearUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getCredentialStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `getUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `setCredential`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `setUser`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\>  } ; `events`: \{ `lockUserChange`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature User.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1710](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1710)

___

### WeekDayAccessSchedulesComponent

• `Const` **WeekDayAccessSchedulesComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `setWeekDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature WeekDayAccessSchedules.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1915](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1915)

___

### YearDayAccessSchedulesComponent

• `Const` **YearDayAccessSchedulesComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `clearYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `getYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `setYearDaySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature YearDayAccessSchedules.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1964](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1964)
