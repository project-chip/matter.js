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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.DoorLock.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `doorPositionSensor`: ``true``  } ? typeof [`DoorPositionSensorComponent`](cluster_export.DoorLock.md#doorpositionsensorcomponent) : {} & `SF` extends { `logging`: ``true``  } ? typeof [`LoggingComponent`](cluster_export.DoorLock.md#loggingcomponent) : {} & `SF` extends { `user`: ``true``  } ? typeof [`UserComponent`](cluster_export.DoorLock.md#usercomponent) : {} & `SF` extends { `pinCredential`: ``true``  } ? typeof [`PinCredentialComponent`](cluster_export.DoorLock.md#pincredentialcomponent) : {} & `SF` extends { `rfidCredential`: ``true``  } ? typeof [`RfidCredentialComponent`](cluster_export.DoorLock.md#rfidcredentialcomponent) : {} & `SF` extends { `weekDayAccessSchedules`: ``true``  } ? typeof [`WeekDayAccessSchedulesComponent`](cluster_export.DoorLock.md#weekdayaccessschedulescomponent) : {} & `SF` extends { `yearDayAccessSchedules`: ``true``  } ? typeof [`YearDayAccessSchedulesComponent`](cluster_export.DoorLock.md#yeardayaccessschedulescomponent) : {} & `SF` extends { `holidaySchedules`: ``true``  } ? typeof [`HolidaySchedulesComponent`](cluster_export.DoorLock.md#holidayschedulescomponent) : {} & `SF` extends { `pinCredential`: ``true``  } \| { `rfidCredential`: ``true``  } ? typeof [`PinCredentialOrRfidCredentialComponent`](cluster_export.DoorLock.md#pincredentialorrfidcredentialcomponent) : {} & `SF` extends { `credentialOverTheAirAccess`: ``true`` ; `pinCredential`: ``true``  } ? typeof [`CredentialOverTheAirAccessAndPinCredentialComponent`](cluster_export.DoorLock.md#credentialovertheairaccessandpincredentialcomponent) : {} & `SF` extends { `notification`: ``true`` ; `pinCredential`: ``true``  } ? typeof [`NotificationAndPinCredentialComponent`](cluster_export.DoorLock.md#notificationandpincredentialcomponent) : {} & `SF` extends { `notification`: ``true``  } ? typeof [`NotificationComponent`](cluster_export.DoorLock.md#notificationcomponent) : {} & `SF` extends { `notification`: ``true`` ; `rfidCredential`: ``true``  } ? typeof [`NotificationAndRfidCredentialComponent`](cluster_export.DoorLock.md#notificationandrfidcredentialcomponent) : {} & `SF` extends { `pinCredential`: ``true`` ; `user`: ``false``  } ? typeof [`PinCredentialNotUserComponent`](cluster_export.DoorLock.md#pincredentialnotusercomponent) : {} & `SF` extends { `fingerCredentials`: ``true`` ; `pinCredential`: ``true`` ; `rfidCredential`: ``true`` ; `user`: ``false``  } ? typeof [`PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent`](cluster_export.DoorLock.md#pincredentialandrfidcredentialandfingercredentialsnotusercomponent) : {} & `SF` extends { `user`: ``false``  } ? typeof [`NotUserComponent`](cluster_export.DoorLock.md#notusercomponent) : {} & `SF` extends { `rfidCredential`: ``true`` ; `user`: ``false``  } ? typeof [`RfidCredentialNotUserComponent`](cluster_export.DoorLock.md#rfidcredentialnotusercomponent) : {} & `SF` extends { `faceCredentials`: ``false`` ; `fingerCredentials`: ``false`` ; `pinCredential`: ``false`` ; `rfidCredential`: ``false`` ; `user`: ``true``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2494

## Variables

### AlarmMask

• `Const` **AlarmMask**: `Object`

The value of the DoorLock alarmMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.39

#### Type declaration

| Name | Type |
| :------ | :------ |
| `forcedDoorOpenUnderDoorLockedCondition` | [`BitFlag`](schema_export.md#bitflag-1) |
| `lockResetToFactoryDefaults` | [`BitFlag`](schema_export.md#bitflag-1) |
| `lockingMechanismJammed` | [`BitFlag`](schema_export.md#bitflag-1) |
| `reserved` | [`BitFlag`](schema_export.md#bitflag-1) |
| `rfModulePowerCycled` | [`BitFlag`](schema_export.md#bitflag-1) |
| `tamperAlarmFrontEscutcheonRemovedFromMain` | [`BitFlag`](schema_export.md#bitflag-1) |
| `tamperAlarmWrongCodeEntryLimit` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:218

___

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `actuatorEnabled`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `lockState`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](cluster_export.md#attribute)<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `normal`: [`BitFlag`](schema_export.md#bitflag-1) ; `passage`: [`BitFlag`](schema_export.md#bitflag-1) ; `privacy`: [`BitFlag`](schema_export.md#bitflag-1) ; `vacation`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  } ; `commands`: { `lockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  } ; `events`: { `doorLockAlarm`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `lockOperation`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\>  } ; `features`: { `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``257`` = 0x101; `name`: ``"DoorLock"`` = "DoorLock"; `revision`: ``6`` = 6 }\>

These elements and properties are present in all DoorLock clusters.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1279

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `actuatorEnabled`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `lockState`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](cluster_export.md#attribute)<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `normal`: [`BitFlag`](schema_export.md#bitflag-1) ; `passage`: [`BitFlag`](schema_export.md#bitflag-1) ; `privacy`: [`BitFlag`](schema_export.md#bitflag-1) ; `vacation`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: { `lockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  } ; `events`: { `doorLockAlarm`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `lockOperation`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\>  } ; `features`: { `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``257`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"DoorLock"`` ; `revision`: ``6`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `actuatorEnabled`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `lockState`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](cluster_export.md#attribute)<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `normal`: [`BitFlag`](schema_export.md#bitflag-1) ; `passage`: [`BitFlag`](schema_export.md#bitflag-1) ; `privacy`: [`BitFlag`](schema_export.md#bitflag-1) ; `vacation`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  } ; `commands`: { `lockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  } ; `events`: { `doorLockAlarm`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `lockOperation`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\>  } ; `features`: { `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``257`` = 0x101; `name`: ``"DoorLock"`` = "DoorLock"; `revision`: ``6`` = 6 }\>, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.DoorLock.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Door Lock

An interface to a generic way to secure a door

DoorLockCluster supports optional features that you can enable with the DoorLockCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2420

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `actuatorEnabled`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `credentialRulesSupport`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `dual`: [`BitFlag`](schema_export.md#bitflag-1) ; `single`: [`BitFlag`](schema_export.md#bitflag-1) ; `tri`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `defaultConfigurationRegister`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `doorClosedEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `doorOpenEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `doorState`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`DoorState`](../enums/cluster_export.DoorLock.DoorState.md), `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLogging`: [`WritableAttribute`](cluster_export.md#writableattribute)<`boolean`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `keypadOperationEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `lockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceKeypadErrorInvalidPin`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1) ; `nonAccessUserOperationEventSourceKeypad`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceKeypadErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCodeChanged`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `language`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `lockState`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](cluster_export.md#attribute)<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `manualOperationEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `autoLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `keyLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `keyUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `manualLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `manualUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `oneTouchLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `thumbturnLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `thumbturnUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificManualOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `maxPinCodeLength`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `maxRfidCodeLength`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `minPinCodeLength`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `minRfidCodeLength`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfLogRecordsSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfPinUsersSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfRfidUsersSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfTotalUsersSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `openPeriod`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `operatingMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `lockSourceRemote`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificRemoteOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRemote`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCodeAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCodeCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `requirePinForRemoteOperation`: [`WritableAttribute`](cluster_export.md#writableattribute)<`boolean`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `rfidOperationEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `lockSourceRfid`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRfid`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `idAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `idCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `soundVolume`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `normal`: [`BitFlag`](schema_export.md#bitflag-1) ; `passage`: [`BitFlag`](schema_export.md#bitflag-1) ; `privacy`: [`BitFlag`](schema_export.md#bitflag-1) ; `vacation`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `userCodeTemporaryDisableTime`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `wrongCodeEntryLimit`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: { `clearAllPinCodes`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearAllRfidCodes`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearCredential`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearHolidaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearPinCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearRfidCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearUser`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearWeekDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clearYearDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getCredentialStatus`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getHolidaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getLogRecord`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getPinCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getRfidCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getUser`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getUserStatus`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getUserType`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getWeekDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getYearDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `lockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `setCredential`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setHolidaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setPinCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setRfidCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setUser`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setUserStatus`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setUserType`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setWeekDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setYearDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unlockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  } ; `events`: { `doorLockAlarm`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `doorStateChange`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `lockOperation`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `lockUserChange`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: { `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``257`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"DoorLock"`` = Cluster.name; `revision`: ``6`` = Cluster.revision }\>

This cluster supports all DoorLock features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2538

___

### CredentialOverTheAirAccessAndPinCredentialComponent

• `Const` **CredentialOverTheAirAccessAndPinCredentialComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `requirePinForRemoteOperation`: [`WritableAttribute`](cluster_export.md#writableattribute)<`boolean`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features CredentialOverTheAirAccess and PinCredential.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2103

___

### CredentialRulesSupport

• `Const` **CredentialRulesSupport**: `Object`

The value of the DoorLock credentialRulesSupport attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.19

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dual` | [`BitFlag`](schema_export.md#bitflag-1) |
| `single` | [`BitFlag`](schema_export.md#bitflag-1) |
| `tri` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:577

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
| `friday` | [`BitFlag`](schema_export.md#bitflag-1) |
| `monday` | [`BitFlag`](schema_export.md#bitflag-1) |
| `saturday` | [`BitFlag`](schema_export.md#bitflag-1) |
| `sunday` | [`BitFlag`](schema_export.md#bitflag-1) |
| `thursday` | [`BitFlag`](schema_export.md#bitflag-1) |
| `tuesday` | [`BitFlag`](schema_export.md#bitflag-1) |
| `wednesday` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:947

___

### DefaultConfigurationRegister

• `Const` **DefaultConfigurationRegister**: `Object`

The value of the DoorLock defaultConfigurationRegister attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.28

#### Type declaration

| Name | Type |
| :------ | :------ |
| `autoRelockTimeSet` | [`BitFlag`](schema_export.md#bitflag-1) |
| `enableLocalProgrammingEnabled` | [`BitFlag`](schema_export.md#bitflag-1) |
| `keypadInterfaceDefaultAccessEnabled` | [`BitFlag`](schema_export.md#bitflag-1) |
| `ledSettingsSet` | [`BitFlag`](schema_export.md#bitflag-1) |
| `remoteInterfaceDefaultAccessIsEnabled` | [`BitFlag`](schema_export.md#bitflag-1) |
| `soundEnabled` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:192

___

### DoorPositionSensorComponent

• `Const` **DoorPositionSensorComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `doorClosedEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `doorOpenEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `doorState`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`DoorState`](../enums/cluster_export.DoorLock.DoorState.md), `any`\> ; `openPeriod`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>  } ; `events`: { `doorStateChange`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature DoorPositionSensor.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1632

___

### HolidaySchedulesComponent

• `Const` **HolidaySchedulesComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  } ; `commands`: { `clearHolidaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `getHolidaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>, `any`\> ; `setHolidaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature HolidaySchedules.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2013

___

### KeypadOperationEventMask

• `Const` **KeypadOperationEventMask**: `Object`

The value of the DoorLock keypadOperationEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.40

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lockSourceKeypad` | [`BitFlag`](schema_export.md#bitflag-1) |
| `lockSourceKeypadErrorInvalidPin` | [`BitFlag`](schema_export.md#bitflag-1) |
| `lockSourceKeypadErrorInvalidSchedule` | [`BitFlag`](schema_export.md#bitflag-1) |
| `nonAccessUserOperationEventSourceKeypad` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unknownOrManufacturerSpecificKeypadOperationEvent` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unlockSourceKeypad` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unlockSourceKeypadErrorInvalidCode` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unlockSourceKeypadErrorInvalidSchedule` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1091

___

### KeypadProgrammingEventMask

• `Const` **KeypadProgrammingEventMask**: `Object`

The value of the DoorLock keypadProgrammingEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.44

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pinAdded` | [`BitFlag`](schema_export.md#bitflag-1) |
| `pinChanged` | [`BitFlag`](schema_export.md#bitflag-1) |
| `pinCleared` | [`BitFlag`](schema_export.md#bitflag-1) |
| `pinCodeChanged` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unknown` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1107

___

### LocalProgrammingFeatures

• `Const` **LocalProgrammingFeatures**: `Object`

The value of the DoorLock localProgrammingFeatures attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.33

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addUsersCredentialsSchedulesLocally` | [`BitFlag`](schema_export.md#bitflag-1) |
| `adjustLockSettingsLocally` | [`BitFlag`](schema_export.md#bitflag-1) |
| `clearUsersCredentialsSchedulesLocally` | [`BitFlag`](schema_export.md#bitflag-1) |
| `modifyUsersCredentialsSchedulesLocally` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:206

___

### LoggingComponent

• `Const` **LoggingComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `enableLogging`: [`WritableAttribute`](cluster_export.md#writableattribute)<`boolean`, `any`\> ; `numberOfLogRecordsSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  } ; `commands`: { `getLogRecord`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature Logging.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1679

___

### ManualOperationEventMask

• `Const` **ManualOperationEventMask**: `Object`

The value of the DoorLock manualOperationEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.42

#### Type declaration

| Name | Type |
| :------ | :------ |
| `autoLock` | [`BitFlag`](schema_export.md#bitflag-1) |
| `keyLock` | [`BitFlag`](schema_export.md#bitflag-1) |
| `keyUnlock` | [`BitFlag`](schema_export.md#bitflag-1) |
| `manualLock` | [`BitFlag`](schema_export.md#bitflag-1) |
| `manualUnlock` | [`BitFlag`](schema_export.md#bitflag-1) |
| `oneTouchLock` | [`BitFlag`](schema_export.md#bitflag-1) |
| `scheduleLock` | [`BitFlag`](schema_export.md#bitflag-1) |
| `scheduleUnlock` | [`BitFlag`](schema_export.md#bitflag-1) |
| `thumbturnLock` | [`BitFlag`](schema_export.md#bitflag-1) |
| `thumbturnUnlock` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unknownOrManufacturerSpecificManualOperationEvent` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1135

___

### NotUserComponent

• `Const` **NotUserComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{}\>

A DoorLockCluster supports these elements if doesn't support feature USR.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2363

___

### NotificationAndPinCredentialComponent

• `Const` **NotificationAndPinCredentialComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `keypadOperationEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `lockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceKeypadErrorInvalidPin`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1) ; `nonAccessUserOperationEventSourceKeypad`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceKeypadErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCodeChanged`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features Notification and PinCredential.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2122

___

### NotificationAndRfidCredentialComponent

• `Const` **NotificationAndRfidCredentialComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `rfidOperationEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `lockSourceRfid`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRfid`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `idAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `idCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features Notification and RfidCredential.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2224

___

### NotificationComponent

• `Const` **NotificationComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `manualOperationEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `autoLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `keyLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `keyUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `manualLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `manualUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `oneTouchLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `thumbturnLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `thumbturnUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificManualOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `lockSourceRemote`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificRemoteOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRemote`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCodeAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCodeCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature Notification.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2164

___

### PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent

• `Const` **PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `commands`: { `getUserStatus`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\> ; `getUserType`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\> ; `setUserStatus`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\> ; `setUserType`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features PinCredential, RfidCredential and
FingerCredentials and it doesn't support feature USR.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2312

___

### PinCredentialComponent

• `Const` **PinCredentialComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `maxPinCodeLength`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `minPinCodeLength`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `numberOfPinUsersSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature PinCredential.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1835

___

### PinCredentialNotUserComponent

• `Const` **PinCredentialNotUserComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `commands`: { `clearAllPinCodes`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `clearPinCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `getPinCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `setPinCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature PinCredential and it doesn't support feature
USR.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2266

___

### PinCredentialOrRfidCredentialComponent

• `Const` **PinCredentialOrRfidCredentialComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `userCodeTemporaryDisableTime`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports features PinCredential or RfidCredential.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2062

___

### RemoteOperationEventMask

• `Const` **RemoteOperationEventMask**: `Object`

The value of the DoorLock remoteOperationEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.41

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lockSourceRemote` | [`BitFlag`](schema_export.md#bitflag-1) |
| `lockSourceRemoteErrorInvalidCode` | [`BitFlag`](schema_export.md#bitflag-1) |
| `lockSourceRemoteErrorInvalidSchedule` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unknownOrManufacturerSpecificRemoteOperationEvent` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unlockSourceRemote` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unlockSourceRemoteErrorInvalidCode` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unlockSourceRemoteErrorInvalidSchedule` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1120

___

### RemoteProgrammingEventMask

• `Const` **RemoteProgrammingEventMask**: `Object`

The value of the DoorLock remoteProgrammingEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.45

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pinAdded` | [`BitFlag`](schema_export.md#bitflag-1) |
| `pinChanged` | [`BitFlag`](schema_export.md#bitflag-1) |
| `pinCleared` | [`BitFlag`](schema_export.md#bitflag-1) |
| `rfidCodeAdded` | [`BitFlag`](schema_export.md#bitflag-1) |
| `rfidCodeCleared` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unknown` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1154

___

### RfidCredentialComponent

• `Const` **RfidCredentialComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `maxRfidCodeLength`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `minRfidCodeLength`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `numberOfRfidUsersSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature RfidCredential.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1883

___

### RfidCredentialNotUserComponent

• `Const` **RfidCredentialNotUserComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `commands`: { `clearAllRfidCodes`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `clearRfidCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `getRfidCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `setRfidCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature RfidCredential and it doesn't support feature
USR.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2369

___

### RfidOperationEventMask

• `Const` **RfidOperationEventMask**: `Object`

The value of the DoorLock rfidOperationEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.43

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lockSourceRfid` | [`BitFlag`](schema_export.md#bitflag-1) |
| `lockSourceRfidErrorInvalidRfidId` | [`BitFlag`](schema_export.md#bitflag-1) |
| `lockSourceRfidErrorInvalidSchedule` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unknownOrManufacturerSpecificKeypadOperationEvent` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unlockSourceRfid` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unlockSourceRfidErrorInvalidRfidId` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unlockSourceRfidErrorInvalidSchedule` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1168

___

### RfidProgrammingEventMask

• `Const` **RfidProgrammingEventMask**: `Object`

The value of the DoorLock rfidProgrammingEventMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.46

#### Type declaration

| Name | Type |
| :------ | :------ |
| `idAdded` | [`BitFlag`](schema_export.md#bitflag-1) |
| `idCleared` | [`BitFlag`](schema_export.md#bitflag-1) |
| `unknown` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1183

___

### SupportedOperatingModes

• `Const` **SupportedOperatingModes**: `Object`

The value of the DoorLock supportedOperatingModes attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.3.24

#### Type declaration

| Name | Type |
| :------ | :------ |
| `noRemoteLockUnlock` | [`BitFlag`](schema_export.md#bitflag-1) |
| `normal` | [`BitFlag`](schema_export.md#bitflag-1) |
| `passage` | [`BitFlag`](schema_export.md#bitflag-1) |
| `privacy` | [`BitFlag`](schema_export.md#bitflag-1) |
| `vacation` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:179

___

### TlvClearCredentialRequest

• `Const` **TlvClearCredentialRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>

Input to the DoorLock clearCredential command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:814

___

### TlvClearHolidayScheduleRequest

• `Const` **TlvClearHolidayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock clearHolidaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1084

___

### TlvClearUserRequest

• `Const` **TlvClearUserRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock clearUser command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:756

___

### TlvClearWeekDayScheduleRequest

• `Const` **TlvClearWeekDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock clearWeekDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1001

___

### TlvClearYearDayScheduleRequest

• `Const` **TlvClearYearDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock clearYearDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1044

___

### TlvCredentialStruct

• `Const` **TlvCredentialStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>

The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
credential types and their corresponding indices (if any) for the event or user record.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.3

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:370

___

### TlvDoorLockAlarmEvent

• `Const` **TlvDoorLockAlarmEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>

Body of the DoorLock doorLockAlarm event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.1

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:304

___

### TlvDoorStateChangeEvent

• `Const` **TlvDoorStateChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>

Body of the DoorLock doorStateChange event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.2

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:563

___

### TlvGetCredentialStatusRequest

• `Const` **TlvGetCredentialStatusRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>

Input to the DoorLock getCredentialStatus command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:796

___

### TlvGetCredentialStatusResponse

• `Const` **TlvGetCredentialStatusResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:801

___

### TlvGetHolidayScheduleRequest

• `Const` **TlvGetHolidayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock getHolidaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1066

___

### TlvGetHolidayScheduleResponse

• `Const` **TlvGetHolidayScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1071

___

### TlvGetUserRequest

• `Const` **TlvGetUserRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock getUser command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:733

___

### TlvGetUserResponse

• `Const` **TlvGetUserResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:738

___

### TlvGetWeekDayScheduleRequest

• `Const` **TlvGetWeekDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock getWeekDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:977

___

### TlvGetWeekDayScheduleResponse

• `Const` **TlvGetWeekDayScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:985

___

### TlvGetYearDayScheduleRequest

• `Const` **TlvGetYearDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock getYearDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1023

___

### TlvGetYearDayScheduleResponse

• `Const` **TlvGetYearDayScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1031

___

### TlvLockDoorRequest

• `Const` **TlvLockDoorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>

Input to the DoorLock lockDoor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:233

___

### TlvLockOperationErrorEvent

• `Const` **TlvLockOperationErrorEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Body of the DoorLock lockOperationError event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:461

___

### TlvLockOperationEvent

• `Const` **TlvLockOperationEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Body of the DoorLock lockOperation event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.3

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:393

___

### TlvLockUserChangeEvent

• `Const` **TlvLockUserChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Body of the DoorLock lockUserChange event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.5

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:883

___

### TlvSetCredentialRequest

• `Const` **TlvSetCredentialRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>

Input to the DoorLock setCredential command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:763

___

### TlvSetCredentialResponse

• `Const` **TlvSetCredentialResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:785

___

### TlvSetHolidayScheduleRequest

• `Const` **TlvSetHolidayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>

Input to the DoorLock setHolidaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1054

___

### TlvSetUserRequest

• `Const` **TlvSetUserRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the DoorLock setUser command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:718

___

### TlvSetWeekDayScheduleRequest

• `Const` **TlvSetWeekDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock setWeekDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:962

___

### TlvSetYearDayScheduleRequest

• `Const` **TlvSetYearDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock setYearDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1011

___

### TlvUnlockDoorRequest

• `Const` **TlvUnlockDoorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>

Input to the DoorLock unlockDoor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:240

___

### TlvUnlockWithTimeoutRequest

• `Const` **TlvUnlockWithTimeoutRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock unlockWithTimeout command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:247

___

### UserComponent

• `Const` **UserComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `credentialRulesSupport`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `dual`: [`BitFlag`](schema_export.md#bitflag-1) ; `single`: [`BitFlag`](schema_export.md#bitflag-1) ; `tri`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `numberOfTotalUsersSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  } ; `commands`: { `clearCredential`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, `void`, `any`\> ; `clearUser`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `getCredentialStatus`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `getUser`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `setCredential`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `setUser`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\>  } ; `events`: { `lockUserChange`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature User.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1710

___

### WeekDayAccessSchedulesComponent

• `Const` **WeekDayAccessSchedulesComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  } ; `commands`: { `clearWeekDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `getWeekDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `setWeekDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature WeekDayAccessSchedules.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1915

___

### YearDayAccessSchedulesComponent

• `Const` **YearDayAccessSchedulesComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  } ; `commands`: { `clearYearDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `getYearDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `setYearDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }  }\>

A DoorLockCluster supports these elements if it supports feature YearDayAccessSchedules.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1964
