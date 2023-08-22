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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.DoorLock.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `doorPositionSensor`: ``true``  } ? typeof [`DoorPositionSensorComponent`](exports_cluster.DoorLock.md#doorpositionsensorcomponent) : {} & `SF` extends { `logging`: ``true``  } ? typeof [`LoggingComponent`](exports_cluster.DoorLock.md#loggingcomponent) : {} & `SF` extends { `user`: ``true``  } ? typeof [`UserComponent`](exports_cluster.DoorLock.md#usercomponent) : {} & `SF` extends { `pinCredential`: ``true``  } ? typeof [`PinCredentialComponent`](exports_cluster.DoorLock.md#pincredentialcomponent) : {} & `SF` extends { `rfidCredential`: ``true``  } ? typeof [`RfidCredentialComponent`](exports_cluster.DoorLock.md#rfidcredentialcomponent) : {} & `SF` extends { `weekDayAccessSchedules`: ``true``  } ? typeof [`WeekDayAccessSchedulesComponent`](exports_cluster.DoorLock.md#weekdayaccessschedulescomponent) : {} & `SF` extends { `yearDayAccessSchedules`: ``true``  } ? typeof [`YearDayAccessSchedulesComponent`](exports_cluster.DoorLock.md#yeardayaccessschedulescomponent) : {} & `SF` extends { `holidaySchedules`: ``true``  } ? typeof [`HolidaySchedulesComponent`](exports_cluster.DoorLock.md#holidayschedulescomponent) : {} & `SF` extends { `pinCredential`: ``true``  } \| { `rfidCredential`: ``true``  } ? typeof [`PinCredentialOrRfidCredentialComponent`](exports_cluster.DoorLock.md#pincredentialorrfidcredentialcomponent) : {} & `SF` extends { `credentialOverTheAirAccess`: ``true`` ; `pinCredential`: ``true``  } ? typeof [`CredentialOverTheAirAccessAndPinCredentialComponent`](exports_cluster.DoorLock.md#credentialovertheairaccessandpincredentialcomponent) : {} & `SF` extends { `notification`: ``true`` ; `pinCredential`: ``true``  } ? typeof [`NotificationAndPinCredentialComponent`](exports_cluster.DoorLock.md#notificationandpincredentialcomponent) : {} & `SF` extends { `notification`: ``true``  } ? typeof [`NotificationComponent`](exports_cluster.DoorLock.md#notificationcomponent) : {} & `SF` extends { `notification`: ``true`` ; `rfidCredential`: ``true``  } ? typeof [`NotificationAndRfidCredentialComponent`](exports_cluster.DoorLock.md#notificationandrfidcredentialcomponent) : {} & `SF` extends { `pinCredential`: ``true`` ; `user`: ``false``  } ? typeof [`PinCredentialNotUserComponent`](exports_cluster.DoorLock.md#pincredentialnotusercomponent) : {} & `SF` extends { `fingerCredentials`: ``true`` ; `pinCredential`: ``true`` ; `rfidCredential`: ``true`` ; `user`: ``false``  } ? typeof [`PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent`](exports_cluster.DoorLock.md#pincredentialandrfidcredentialandfingercredentialsnotusercomponent) : {} & `SF` extends { `user`: ``false``  } ? typeof [`NotUserComponent`](exports_cluster.DoorLock.md#notusercomponent) : {} & `SF` extends { `rfidCredential`: ``true`` ; `user`: ``false``  } ? typeof [`RfidCredentialNotUserComponent`](exports_cluster.DoorLock.md#rfidcredentialnotusercomponent) : {} & `SF` extends { `faceCredentials`: ``false`` ; `fingerCredentials`: ``false`` ; `pinCredential`: ``false`` ; `rfidCredential`: ``false`` ; `user`: ``true``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:3075

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

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:170

___

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `logging`: [`BitFlag`](exports_schema.md#bitflag-1) ; `notification`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `user`: [`BitFlag`](exports_schema.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `actuatorEnabled`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\> ; `alarmMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `forcedDoorOpenUnderDoorLockedCondition`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lockResetToFactoryDefaults`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lockingMechanismJammed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `reserved`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfModulePowerCycled`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tamperAlarmFrontEscutcheonRemovedFromMain`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tamperAlarmWrongCodeEntryLimit`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `autoRelockTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `defaultConfigurationRegister`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `autoRelockTimeSet`: [`BitFlag`](exports_schema.md#bitflag-1) ; `enableLocalProgrammingEnabled`: [`BitFlag`](exports_schema.md#bitflag-1) ; `keypadInterfaceDefaultAccessEnabled`: [`BitFlag`](exports_schema.md#bitflag-1) ; `ledSettingsSet`: [`BitFlag`](exports_schema.md#bitflag-1) ; `remoteInterfaceDefaultAccessIsEnabled`: [`BitFlag`](exports_schema.md#bitflag-1) ; `soundEnabled`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `enableInsideStatusLed`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableLocalProgramming`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `enableOneTouchLocking`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `enablePrivacyModeButton`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `language`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`string`, `any`\> ; `ledSettings`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `localProgrammingFeatures`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `addUsersCredentialsSchedulesLocally`: [`BitFlag`](exports_schema.md#bitflag-1) ; `adjustLockSettingsLocally`: [`BitFlag`](exports_schema.md#bitflag-1) ; `clearUsersCredentialsSchedulesLocally`: [`BitFlag`](exports_schema.md#bitflag-1) ; `modifyUsersCredentialsSchedulesLocally`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `lockState`: [`Attribute`](exports_cluster.md#attribute)<[`LockState`](../enums/exports_cluster.DoorLock.LockState.md) \| ``null``, `any`\> ; `lockType`: [`Attribute`](exports_cluster.md#attribute)<[`LockType`](../enums/exports_cluster.DoorLock.LockType.md), `any`\> ; `operatingMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`OperatingMode`](../enums/exports_cluster.DoorLock.OperatingMode.md), `any`\> ; `soundVolume`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `supportedOperatingModes`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `noRemoteLockUnlock`: [`BitFlag`](exports_schema.md#bitflag-1) ; `normal`: [`BitFlag`](exports_schema.md#bitflag-1) ; `passage`: [`BitFlag`](exports_schema.md#bitflag-1) ; `privacy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `vacation`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\>  }, { `lockDoor`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `unlockDoor`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, { `doorLockAlarm`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `lockOperation`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

These elements and properties are present in all DoorLock clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1246

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `logging`: [`BitFlag`](exports_schema.md#bitflag-1) ; `notification`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `user`: [`BitFlag`](exports_schema.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `logging`: [`BitFlag`](exports_schema.md#bitflag-1) ; `notification`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `user`: [`BitFlag`](exports_schema.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `lockDoor`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `unlockDoor`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, { `doorLockAlarm`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `lockOperation`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.DoorLock.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `logging`: [`BitFlag`](exports_schema.md#bitflag-1) ; `notification`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `user`: [`BitFlag`](exports_schema.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Door Lock

An interface to a generic way to secure a door

DoorLockCluster supports optional features that you can enable with the DoorLockCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2433

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `logging`: [`BitFlag`](exports_schema.md#bitflag-1) ; `notification`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `user`: [`BitFlag`](exports_schema.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `credentialOverTheAirAccess`: [`BitFlag`](exports_schema.md#bitflag-1) ; `doorPositionSensor`: [`BitFlag`](exports_schema.md#bitflag-1) ; `faceCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fingerCredentials`: [`BitFlag`](exports_schema.md#bitflag-1) ; `holidaySchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `logging`: [`BitFlag`](exports_schema.md#bitflag-1) ; `notification`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCredential`: [`BitFlag`](exports_schema.md#bitflag-1) ; `user`: [`BitFlag`](exports_schema.md#bitflag-1) ; `weekDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1) ; `yearDayAccessSchedules`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `clearAllPinCodes`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\> ; `clearAllRfidCodes`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\> ; `clearCredential`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `clearHolidaySchedule`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `clearPinCode`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\> ; `clearRfidCode`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\> ; `clearUser`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `clearWeekDaySchedule`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `clearYearDaySchedule`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `getCredentialStatus`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `getHolidaySchedule`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `getLogRecord`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\> ; `getPinCode`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\> ; `getRfidCode`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\> ; `getUser`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `getUserStatus`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\>\> ; `getUserType`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\>\> ; `getWeekDaySchedule`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `getYearDaySchedule`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `lockDoor`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `setCredential`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `setHolidaySchedule`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `setPinCode`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\> ; `setRfidCode`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\> ; `setUser`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `setUserStatus`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\>\> ; `setUserType`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\>\> ; `setWeekDaySchedule`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `setYearDaySchedule`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `unlockDoor`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `unlockWithTimeout`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, { `doorLockAlarm`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `doorStateChange`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `lockOperation`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `lockOperationError`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `lockUserChange`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\>  }\>

This cluster supports all DoorLock features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:3134

___

### CredentialOverTheAirAccessAndPinCredentialComponent

• `Const` **CredentialOverTheAirAccessAndPinCredentialComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `requirePinForRemoteOperation`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`boolean`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports features CredentialOverTheAirAccess and PinCredential.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2210

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

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:524

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

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:922

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

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:146

___

### DoorPositionSensorComponent

• `Const` **DoorPositionSensorComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `doorClosedEvents`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `doorOpenEvents`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `doorState`: [`Attribute`](exports_cluster.md#attribute)<[`DoorState`](../enums/exports_cluster.DoorLock.DoorState.md) \| ``null``, `any`\> ; `openPeriod`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `doorStateChange`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

A DoorLockCluster supports these elements if it supports feature DoorPositionSensor.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1672

___

### HolidaySchedulesComponent

• `Const` **HolidaySchedulesComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `numberOfHolidaySchedulesSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  }, { `clearHolidaySchedule`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `getHolidaySchedule`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `setHolidaySchedule`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports feature HolidaySchedules.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2142

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

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1073

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

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1088

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

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:159

___

### LoggingComponent

• `Const` **LoggingComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `enableLogging`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`boolean`, `any`\> ; `numberOfLogRecordsSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  }, { `getLogRecord`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports feature Logging.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1718

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

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1114

___

### NotUserComponent

• `Const` **NotUserComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if doesn't support feature USR.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2401

___

### NotificationAndPinCredentialComponent

• `Const` **NotificationAndPinCredentialComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `keypadOperationEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `lockSourceKeypad`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lockSourceKeypadErrorInvalidPin`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](exports_schema.md#bitflag-1) ; `nonAccessUserOperationEventSourceKeypad`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unlockSourceKeypad`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unlockSourceKeypadErrorInvalidCode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unlockSourceKeypadErrorInvalidSchedule`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `keypadProgrammingEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `pinAdded`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinChanged`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCleared`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCodeChanged`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unknown`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports features Notification and PinCredential.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2222

___

### NotificationAndRfidCredentialComponent

• `Const` **NotificationAndRfidCredentialComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `rfidOperationEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `lockSourceRfid`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lockSourceRfidErrorInvalidRfidId`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lockSourceRfidErrorInvalidSchedule`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unknownOrManufacturerSpecificKeypadOperationEvent`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unlockSourceRfid`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unlockSourceRfidErrorInvalidRfidId`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unlockSourceRfidErrorInvalidSchedule`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `rfidProgrammingEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `idAdded`: [`BitFlag`](exports_schema.md#bitflag-1) ; `idCleared`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unknown`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports features Notification and RfidCredential.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2322

___

### NotificationComponent

• `Const` **NotificationComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `manualOperationEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `autoLock`: [`BitFlag`](exports_schema.md#bitflag-1) ; `keyLock`: [`BitFlag`](exports_schema.md#bitflag-1) ; `keyUnlock`: [`BitFlag`](exports_schema.md#bitflag-1) ; `manualLock`: [`BitFlag`](exports_schema.md#bitflag-1) ; `manualUnlock`: [`BitFlag`](exports_schema.md#bitflag-1) ; `oneTouchLock`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleLock`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleUnlock`: [`BitFlag`](exports_schema.md#bitflag-1) ; `thumbturnLock`: [`BitFlag`](exports_schema.md#bitflag-1) ; `thumbturnUnlock`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unknownOrManufacturerSpecificManualOperationEvent`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `remoteOperationEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `lockSourceRemote`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lockSourceRemoteErrorInvalidCode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unknownOrManufacturerSpecificRemoteOperationEvent`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unlockSourceRemote`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unlockSourceRemoteErrorInvalidCode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unlockSourceRemoteErrorInvalidSchedule`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `remoteProgrammingEventMask`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `pinAdded`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinChanged`: [`BitFlag`](exports_schema.md#bitflag-1) ; `pinCleared`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCodeAdded`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rfidCodeCleared`: [`BitFlag`](exports_schema.md#bitflag-1) ; `unknown`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports feature Notification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2261

___

### PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent

• `Const` **PinCredentialAndRfidCredentialAndFingerCredentialsNotUserComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `getUserStatus`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> ; `getUserType`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> ; `setUserStatus`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> ; `setUserType`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports features PinCredential, RfidCredential and
FingerCredentials and it doesn't support feature USR.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2380

___

### PinCredentialComponent

• `Const` **PinCredentialComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `maxPinCodeLength`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `minPinCodeLength`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `numberOfPinUsersSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `sendPinOverTheAir`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports feature PinCredential.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1973

___

### PinCredentialNotUserComponent

• `Const` **PinCredentialNotUserComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `clearAllPinCodes`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `clearPinCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `getPinCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `setPinCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports feature PinCredential and it doesn't support feature
USR.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2358

___

### PinCredentialOrRfidCredentialComponent

• `Const` **PinCredentialOrRfidCredentialComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `userCodeTemporaryDisableTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\> ; `wrongCodeEntryLimit`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports features PinCredential or RfidCredential.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2181

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

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1100

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

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1132

___

### RfidCredentialComponent

• `Const` **RfidCredentialComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `maxRfidCodeLength`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `minRfidCodeLength`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `numberOfRfidUsersSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports feature RfidCredential.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2011

___

### RfidCredentialNotUserComponent

• `Const` **RfidCredentialNotUserComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `clearAllRfidCodes`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `clearRfidCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `getRfidCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `setRfidCode`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports feature RfidCredential and it doesn't support feature
USR.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2406

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

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1145

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

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1159

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

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:134

___

### TlvClearCredentialRequest

• `Const` **TlvClearCredentialRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock clearCredential command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:791

___

### TlvClearHolidayScheduleRequest

• `Const` **TlvClearHolidayScheduleRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock clearHolidaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1065

___

### TlvClearUserRequest

• `Const` **TlvClearUserRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock clearUser command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:705

___

### TlvClearWeekDayScheduleRequest

• `Const` **TlvClearWeekDayScheduleRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock clearWeekDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:988

___

### TlvClearYearDayScheduleRequest

• `Const` **TlvClearYearDayScheduleRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock clearYearDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1027

___

### TlvCredentialStruct

• `Const` **TlvCredentialStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
credential types and their corresponding indices (if any) for the event or user record.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:310

___

### TlvDoorLockAlarmEvent

• `Const` **TlvDoorLockAlarmEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the DoorLock doorLockAlarm event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:248

___

### TlvDoorStateChangeEvent

• `Const` **TlvDoorStateChangeEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the DoorLock doorStateChange event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:511

___

### TlvGetCredentialStatusRequest

• `Const` **TlvGetCredentialStatusRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock getCredentialStatus command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:758

___

### TlvGetCredentialStatusResponse

• `Const` **TlvGetCredentialStatusResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:779

___

### TlvGetHolidayScheduleRequest

• `Const` **TlvGetHolidayScheduleRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock getHolidaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1047

___

### TlvGetHolidayScheduleResponse

• `Const` **TlvGetHolidayScheduleResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1053

___

### TlvGetUserRequest

• `Const` **TlvGetUserRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock getUser command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:667

___

### TlvGetUserResponse

• `Const` **TlvGetUserResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:673

___

### TlvGetWeekDayScheduleRequest

• `Const` **TlvGetWeekDayScheduleRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock getWeekDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:958

___

### TlvGetWeekDayScheduleResponse

• `Const` **TlvGetWeekDayScheduleResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:965

___

### TlvGetYearDayScheduleRequest

• `Const` **TlvGetYearDayScheduleRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock getYearDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1008

___

### TlvGetYearDayScheduleResponse

• `Const` **TlvGetYearDayScheduleResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1015

___

### TlvLockDoorRequest

• `Const` **TlvLockDoorRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock lockDoor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:184

___

### TlvLockOperationErrorEvent

• `Const` **TlvLockOperationErrorEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the DoorLock lockOperationError event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:407

___

### TlvLockOperationEvent

• `Const` **TlvLockOperationEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the DoorLock lockOperation event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:331

___

### TlvLockUserChangeEvent

• `Const` **TlvLockUserChangeEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the DoorLock lockUserChange event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.5.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:865

___

### TlvSetCredentialRequest

• `Const` **TlvSetCredentialRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock setCredential command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:713

___

### TlvSetCredentialResponse

• `Const` **TlvSetCredentialResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:748

___

### TlvSetHolidayScheduleRequest

• `Const` **TlvSetHolidayScheduleRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock setHolidaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1036

___

### TlvSetUserRequest

• `Const` **TlvSetUserRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock setUser command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:653

___

### TlvSetWeekDayScheduleRequest

• `Const` **TlvSetWeekDayScheduleRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock setWeekDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:936

___

### TlvSetYearDayScheduleRequest

• `Const` **TlvSetYearDayScheduleRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock setYearDaySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:997

___

### TlvUnlockDoorRequest

• `Const` **TlvUnlockDoorRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock unlockDoor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:192

___

### TlvUnlockWithTimeoutRequest

• `Const` **TlvUnlockWithTimeoutRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DoorLock unlockWithTimeout command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:200

___

### UserComponent

• `Const` **UserComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `credentialRulesSupport`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `dual`: [`BitFlag`](exports_schema.md#bitflag-1) ; `single`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tri`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `expiringUserTimeout`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `numberOfCredentialsSupportedPerUser`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `numberOfTotalUsersSupported`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  }, { `clearCredential`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `clearUser`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `getCredentialStatus`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `getUser`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `setCredential`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `setUser`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, { `lockUserChange`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

A DoorLockCluster supports these elements if it supports feature User.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1743

___

### WeekDayAccessSchedulesComponent

• `Const` **WeekDayAccessSchedulesComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `numberOfWeekDaySchedulesSupportedPerUser`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  }, { `clearWeekDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `getWeekDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `setWeekDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports feature WeekDayAccessSchedules.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2038

___

### YearDayAccessSchedulesComponent

• `Const` **YearDayAccessSchedulesComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `numberOfYearDaySchedulesSupportedPerUser`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  }, { `clearYearDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `getYearDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `setYearDaySchedule`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A DoorLockCluster supports these elements if it supports feature YearDayAccessSchedules.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:2101
