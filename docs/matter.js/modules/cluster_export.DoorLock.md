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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.DoorLock.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `doorPositionSensor`: ``true``  } ? typeof [`DoorPositionSensorComponent`](cluster_export.DoorLock.md#doorpositionsensorcomponent) : {} & `SF` extends { `logging`: ``true``  } ? typeof [`LoggingComponent`](cluster_export.DoorLock.md#loggingcomponent) : {} & `SF` extends { `user`: ``true``  } ? typeof [`UserComponent`](cluster_export.DoorLock.md#usercomponent) : {} & `SF` extends { `pinCredential`: ``true``  } ? typeof [`PinCredentialComponent`](cluster_export.DoorLock.md#pincredentialcomponent) : {} & `SF` extends { `rfidCredential`: ``true``  } ? typeof [`RfidCredentialComponent`](cluster_export.DoorLock.md#rfidcredentialcomponent) : {} & `SF` extends { `weekDayAccessSchedules`: ``true``  } ? typeof [`WeekDayAccessSchedulesComponent`](cluster_export.DoorLock.md#weekdayaccessschedulescomponent) : {} & `SF` extends { `yearDayAccessSchedules`: ``true``  } ? typeof [`YearDayAccessSchedulesComponent`](cluster_export.DoorLock.md#yeardayaccessschedulescomponent) : {} & `SF` extends { `holidaySchedules`: ``true``  } ? typeof [`HolidaySchedulesComponent`](cluster_export.DoorLock.md#holidayschedulescomponent) : {} & `SF` extends { `pinCredential`: ``true``  } \| { `rfidCredential`: ``true``  } ? typeof [`PinCredentialOrRfidCredentialComponent`](cluster_export.DoorLock.md#pincredentialorrfidcredentialcomponent) : {} & `SF` extends { `credentialOverTheAirAccess`: ``true`` ; `pinCredential`: ``true``  } ? typeof [`CredentialOverTheAirAccessAndPinCredentialComponent`](cluster_export.DoorLock.md#credentialovertheairaccessandpincredentialcomponent) : {} & `SF` extends { `notification`: ``true`` ; `pinCredential`: ``true``  } ? typeof [`NotificationAndPinCredentialComponent`](cluster_export.DoorLock.md#notificationandpincredentialcomponent) : {} & `SF` extends { `notification`: ``true``  } ? typeof [`NotificationComponent`](cluster_export.DoorLock.md#notificationcomponent) : {} & `SF` extends { `notification`: ``true`` ; `rfidCredential`: ``true``  } ? typeof [`NotificationAndRfidCredentialComponent`](cluster_export.DoorLock.md#notificationandrfidcredentialcomponent) : {} & `SF` extends { `pinCredential`: ``true`` ; `user`: ``false``  } ? typeof [`PinCredentialNotUserComponent`](cluster_export.DoorLock.md#pincredentialnotusercomponent) : {} & `SF` extends { `fingerCredentials`: ``true`` ; `pinCredential`: ``true`` ; `rfidCredential`: ``true`` ; `user`: ``false``  } ? typeof [`PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent`](cluster_export.DoorLock.md#pincredentialandrfidcredentialandfingercredentialsnotusercomponent) : {} & `SF` extends { `user`: ``false``  } ? typeof [`NotUserComponent`](cluster_export.DoorLock.md#notusercomponent) : {} & `SF` extends { `rfidCredential`: ``true`` ; `user`: ``false``  } ? typeof [`RfidCredentialNotUserComponent`](cluster_export.DoorLock.md#rfidcredentialnotusercomponent) : {} & `SF` extends { `faceCredentials`: ``false`` ; `fingerCredentials`: ``false`` ; `pinCredential`: ``false`` ; `rfidCredential`: ``false`` ; `user`: ``true``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2353](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2353)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:228](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L228)

___

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `actuatorEnabled`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `lockState`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](cluster_export.md#attribute)<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `normal`: [`BitFlag`](schema_export.md#bitflag-1) ; `passage`: [`BitFlag`](schema_export.md#bitflag-1) ; `privacy`: [`BitFlag`](schema_export.md#bitflag-1) ; `vacation`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, { `lockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, { `doorLockAlarm`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `lockOperation`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\>  }\>

These elements and properties are present in all DoorLock clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1289](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1289)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `actuatorEnabled`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `lockState`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](cluster_export.md#attribute)<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `normal`: [`BitFlag`](schema_export.md#bitflag-1) ; `passage`: [`BitFlag`](schema_export.md#bitflag-1) ; `privacy`: [`BitFlag`](schema_export.md#bitflag-1) ; `vacation`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `lockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, { `doorLockAlarm`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `lockOperation`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\>  }, <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.DoorLock.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Door Lock

An interface to a generic way to secure a door

DoorLockCluster supports optional features that you can enable with the DoorLockCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2286](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2286)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `actuatorEnabled`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockResetToFactoryDefaults`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockingMechanismJammed`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfModulePowerCycled`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `credentialRulesSupport`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `dual`: [`BitFlag`](schema_export.md#bitflag-1) ; `single`: [`BitFlag`](schema_export.md#bitflag-1) ; `tri`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `autoRelockTimeSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `enableLocalProgrammingEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `ledSettingsSet`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](schema_export.md#bitflag-1) ; `soundEnabled`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `doorClosedEvents`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>\> ; `doorOpenEvents`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>\> ; `doorState`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| [`DoorState`](../enums/cluster_export.DoorLock.DoorState.md), `any`\>\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLogging`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<`boolean`, `any`\>\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `expiringUserTimeout`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `keypadOperationEventMask`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `lockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceKeypadErrorInvalidPin`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1) ; `nonAccessUserOperationEventSourceKeypad`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceKeypadErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>\> ; `keypadProgrammingEventMask`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCodeChanged`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>\> ; `language`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `adjustLockSettingsLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `lockState`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`LockState`](../enums/cluster_export.DoorLock.LockState.md), `any`\> ; `lockType`: [`Attribute`](cluster_export.md#attribute)<[`LockType`](../enums/cluster_export.DoorLock.LockType.md), `any`\> ; `manualOperationEventMask`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `autoLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `keyLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `keyUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `manualLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `manualUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `oneTouchLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `thumbturnLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `thumbturnUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificManualOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>\> ; `maxPinCodeLength`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `maxRfidCodeLength`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `minPinCodeLength`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `minRfidCodeLength`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `numberOfCredentialsSupportedPerUser`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `numberOfHolidaySchedulesSupported`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `numberOfLogRecordsSupported`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `numberOfPinUsersSupported`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `numberOfRfidUsersSupported`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `numberOfTotalUsersSupported`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `numberOfWeekDaySchedulesSupportedPerUser`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `numberOfYearDaySchedulesSupportedPerUser`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `openPeriod`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>\> ; `operatingMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md), `any`\> ; `remoteOperationEventMask`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `lockSourceRemote`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificRemoteOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRemote`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>\> ; `remoteProgrammingEventMask`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCodeAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCodeCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>\> ; `requirePinForRemoteOperation`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<`boolean`, `any`\>\> ; `rfidOperationEventMask`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `lockSourceRfid`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRfid`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>\> ; `rfidProgrammingEventMask`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `idAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `idCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>\> ; `sendPinOverTheAir`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\>\> ; `soundVolume`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `noRemoteLockUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `normal`: [`BitFlag`](schema_export.md#bitflag-1) ; `passage`: [`BitFlag`](schema_export.md#bitflag-1) ; `privacy`: [`BitFlag`](schema_export.md#bitflag-1) ; `vacation`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `userCodeTemporaryDisableTime`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\>\> ; `wrongCodeEntryLimit`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\>\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `credentialOverTheAirAccess`: [`BitFlag`](schema_export.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](schema_export.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](schema_export.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `logging`: [`BitFlag`](schema_export.md#bitflag-1) ; `notification`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](schema_export.md#bitflag-1) ; `user`: [`BitFlag`](schema_export.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `clearAllPinCodes`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>\> ; `clearAllRfidCodes`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>\> ; `clearCredential`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, `void`, `any`\>\> ; `clearHolidaySchedule`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `clearPinCode`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>\> ; `clearRfidCode`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>\> ; `clearUser`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `clearWeekDaySchedule`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `clearYearDaySchedule`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `getCredentialStatus`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\>\> ; `getHolidaySchedule`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>, `any`\>\> ; `getLogRecord`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>\> ; `getPinCode`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>\> ; `getRfidCode`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>\> ; `getUser`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\>\> ; `getUserStatus`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\>\> ; `getUserType`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\>\> ; `getWeekDaySchedule`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>\> ; `getYearDaySchedule`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>\> ; `lockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `setCredential`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\>\> ; `setHolidaySchedule`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>, `void`, `any`\>\> ; `setPinCode`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>\> ; `setRfidCode`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>\> ; `setUser`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\>\> ; `setUserStatus`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\>\> ; `setUserType`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\>\> ; `setWeekDaySchedule`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `setYearDaySchedule`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `unlockDoor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, { `doorLockAlarm`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>, `any`\> ; `doorStateChange`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>, `any`\>\> ; `lockOperation`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `lockOperationError`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `lockUserChange`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\>\>  }\>

This cluster supports all DoorLock features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2397](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2397)

___

### CredentialOverTheAirAccessAndPinCredentialComponent

• `Const` **CredentialOverTheAirAccessAndPinCredentialComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `requirePinForRemoteOperation`: [`WritableAttribute`](cluster_export.md#writableattribute)<`boolean`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports features CredentialOverTheAirAccess and PinCredential.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2029](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2029)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:587](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L587)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:957](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L957)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:202](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L202)

___

### DoorPositionSensorComponent

• `Const` **DoorPositionSensorComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `doorClosedEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `doorOpenEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `doorState`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`DoorState`](../enums/cluster_export.DoorLock.DoorState.md), `any`\> ; `openPeriod`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), { `doorStateChange`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>, `any`\>  }\>

A DoorLockCluster supports these elements if it supports feature DoorPositionSensor.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1642](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1642)

___

### HolidaySchedulesComponent

• `Const` **HolidaySchedulesComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }, { `clearHolidaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `getHolidaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>, `any`\> ; `setHolidaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports feature HolidaySchedules.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1957](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1957)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1101](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1101)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1117](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1117)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:216](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L216)

___

### LoggingComponent

• `Const` **LoggingComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `enableLogging`: [`WritableAttribute`](cluster_export.md#writableattribute)<`boolean`, `any`\> ; `numberOfLogRecordsSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }, { `getLogRecord`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports feature Logging.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1689](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1689)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1145](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1145)

___

### NotUserComponent

• `Const` **NotUserComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if doesn't support feature USR.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2247](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2247)

___

### NotificationAndPinCredentialComponent

• `Const` **NotificationAndPinCredentialComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `keypadOperationEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `lockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceKeypadErrorInvalidPin`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1) ; `nonAccessUserOperationEventSourceKeypad`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceKeypad`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceKeypadErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCodeChanged`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports features Notification and PinCredential.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2048](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2048)

___

### NotificationAndRfidCredentialComponent

• `Const` **NotificationAndRfidCredentialComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `rfidOperationEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `lockSourceRfid`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRfid`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRfidErrorInvalidRfidId`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRfidErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `idAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `idCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports features Notification and RfidCredential.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2150](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2150)

___

### NotificationComponent

• `Const` **NotificationComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `manualOperationEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `autoLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `keyLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `keyUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `manualLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `manualUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `oneTouchLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `thumbturnLock`: [`BitFlag`](schema_export.md#bitflag-1) ; `thumbturnUnlock`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificManualOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `lockSourceRemote`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag-1) ; `lockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknownOrManufacturerSpecificRemoteOperationEvent`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRemote`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRemoteErrorInvalidCode`: [`BitFlag`](schema_export.md#bitflag-1) ; `unlockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `pinAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinChanged`: [`BitFlag`](schema_export.md#bitflag-1) ; `pinCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCodeAdded`: [`BitFlag`](schema_export.md#bitflag-1) ; `rfidCodeCleared`: [`BitFlag`](schema_export.md#bitflag-1) ; `unknown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports feature Notification.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2090](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2090)

___

### PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent

• `Const` **PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `getUserStatus`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\> ; `getUserType`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\> ; `setUserStatus`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\> ; `setUserType`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports features PinCredential, RfidCredential and
FingerCredentials and it doesn't support feature USR.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2220](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2220)

___

### PinCredentialComponent

• `Const` **PinCredentialComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `maxPinCodeLength`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `minPinCodeLength`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `numberOfPinUsersSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports feature PinCredential.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1815](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1815)

___

### PinCredentialNotUserComponent

• `Const` **PinCredentialNotUserComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `clearAllPinCodes`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `clearPinCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `getPinCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `setPinCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports feature PinCredential and it doesn't support feature
USR.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2192](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2192)

___

### PinCredentialOrRfidCredentialComponent

• `Const` **PinCredentialOrRfidCredentialComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports features PinCredential or RfidCredential.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1988](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1988)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1130](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1130)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1164](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1164)

___

### RfidCredentialComponent

• `Const` **RfidCredentialComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `maxRfidCodeLength`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `minRfidCodeLength`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `numberOfRfidUsersSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports feature RfidCredential.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1863](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1863)

___

### RfidCredentialNotUserComponent

• `Const` **RfidCredentialNotUserComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `clearAllRfidCodes`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `clearRfidCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `getRfidCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `setRfidCode`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports feature RfidCredential and it doesn't support feature
USR.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2253](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2253)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1178](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1178)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1193](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1193)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:189](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L189)

___

### TlvClearCredentialRequest

• `Const` **TlvClearCredentialRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>

Input to the DoorLock clearCredential command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:824](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L824)

___

### TlvClearHolidayScheduleRequest

• `Const` **TlvClearHolidayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock clearHolidaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1094](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1094)

___

### TlvClearUserRequest

• `Const` **TlvClearUserRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock clearUser command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:766](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L766)

___

### TlvClearWeekDayScheduleRequest

• `Const` **TlvClearWeekDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock clearWeekDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1011](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1011)

___

### TlvClearYearDayScheduleRequest

• `Const` **TlvClearYearDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock clearYearDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1054](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1054)

___

### TlvCredentialStruct

• `Const` **TlvCredentialStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>

The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
credential types and their corresponding indices (if any) for the event or user record.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:380](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L380)

___

### TlvDoorLockAlarmEvent

• `Const` **TlvDoorLockAlarmEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `alarmCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)\>  }\>

Body of the DoorLock doorLockAlarm event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:314](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L314)

___

### TlvDoorStateChangeEvent

• `Const` **TlvDoorStateChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `doorState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DoorState`](../enums/cluster_export.DoorLock.DoorState.md)\>  }\>

Body of the DoorLock doorStateChange event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:573](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L573)

___

### TlvGetCredentialStatusRequest

• `Const` **TlvGetCredentialStatusRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>

Input to the DoorLock getCredentialStatus command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:806](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L806)

___

### TlvGetCredentialStatusResponse

• `Const` **TlvGetCredentialStatusResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:811](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L811)

___

### TlvGetHolidayScheduleRequest

• `Const` **TlvGetHolidayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock getHolidaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1076](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1076)

___

### TlvGetHolidayScheduleResponse

• `Const` **TlvGetHolidayScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `operatingMode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1081](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1081)

___

### TlvGetUserRequest

• `Const` **TlvGetUserRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock getUser command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:743](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L743)

___

### TlvGetUserResponse

• `Const` **TlvGetUserResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:748](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L748)

___

### TlvGetWeekDayScheduleRequest

• `Const` **TlvGetWeekDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock getWeekDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:987](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L987)

___

### TlvGetWeekDayScheduleResponse

• `Const` **TlvGetWeekDayScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:995](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L995)

___

### TlvGetYearDayScheduleRequest

• `Const` **TlvGetYearDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock getYearDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1033](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1033)

___

### TlvGetYearDayScheduleResponse

• `Const` **TlvGetYearDayScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1041](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1041)

___

### TlvLockDoorRequest

• `Const` **TlvLockDoorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>

Input to the DoorLock lockDoor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:243](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L243)

___

### TlvLockOperationErrorEvent

• `Const` **TlvLockOperationErrorEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationError`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Body of the DoorLock lockOperationError event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:471](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L471)

___

### TlvLockOperationEvent

• `Const` **TlvLockOperationEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credentials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Body of the DoorLock lockOperation event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:403](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L403)

___

### TlvLockUserChangeEvent

• `Const` **TlvLockUserChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Body of the DoorLock lockUserChange event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.5.5

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:893](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L893)

___

### TlvSetCredentialRequest

• `Const` **TlvSetCredentialRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>

Input to the DoorLock setCredential command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:773](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L773)

___

### TlvSetCredentialResponse

• `Const` **TlvSetCredentialResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:795](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L795)

___

### TlvSetHolidayScheduleRequest

• `Const` **TlvSetHolidayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `holidayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `operatingMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\>

Input to the DoorLock setHolidaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1064](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1064)

___

### TlvSetUserRequest

• `Const` **TlvSetUserRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the DoorLock setUser command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:728](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L728)

___

### TlvSetWeekDayScheduleRequest

• `Const` **TlvSetWeekDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock setWeekDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:972](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L972)

___

### TlvSetYearDayScheduleRequest

• `Const` **TlvSetYearDayScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock setYearDaySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1021](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1021)

___

### TlvUnlockDoorRequest

• `Const` **TlvUnlockDoorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>

Input to the DoorLock unlockDoor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:250](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L250)

___

### TlvUnlockWithTimeoutRequest

• `Const` **TlvUnlockWithTimeoutRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `pinCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the DoorLock unlockWithTimeout command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:257](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L257)

___

### UserComponent

• `Const` **UserComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `credentialRulesSupport`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `dual`: [`BitFlag`](schema_export.md#bitflag-1) ; `single`: [`BitFlag`](schema_export.md#bitflag-1) ; `tri`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `numberOfTotalUsersSupported`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }, { `clearCredential`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, `void`, `any`\> ; `clearUser`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `getCredentialStatus`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `getUser`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `creatorFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `setCredential`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credential`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `credentialType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\> ; `credentialData`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `nextCredentialIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `setUser`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `credentialRule`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `string`\> ; `userStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\>  }, { `lockUserChange`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `dataIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `dataOperationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex)\> ; `lockDataType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)\> ; `operationSource`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)\> ; `sourceNode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\>  }\>

A DoorLockCluster supports these elements if it supports feature User.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1720](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1720)

___

### WeekDayAccessSchedulesComponent

• `Const` **WeekDayAccessSchedulesComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }, { `clearWeekDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `getWeekDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `daysMask`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `endHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `endMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `startHour`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `startMinute`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `setWeekDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `daysMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `endHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `endMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `startHour`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `startMinute`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `weekDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports feature WeekDayAccessSchedules.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1895](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1895)

___

### YearDayAccessSchedulesComponent

• `Const` **YearDayAccessSchedulesComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }, { `clearYearDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `getYearDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `localEndTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `localStartTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `setYearDaySchedule`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `localEndTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `localStartTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `userIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `yearDayIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A DoorLockCluster supports these elements if it supports feature YearDayAccessSchedules.

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1926](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1926)
