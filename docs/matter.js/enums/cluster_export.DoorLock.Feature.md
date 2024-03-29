[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / Feature

# Enumeration: Feature

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).Feature

These are optional features supported by DoorLockCluster.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.2

## Table of contents

### Enumeration Members

- [CredentialOverTheAirAccess](cluster_export.DoorLock.Feature.md#credentialovertheairaccess)
- [DoorPositionSensor](cluster_export.DoorLock.Feature.md#doorpositionsensor)
- [FaceCredentials](cluster_export.DoorLock.Feature.md#facecredentials)
- [FingerCredentials](cluster_export.DoorLock.Feature.md#fingercredentials)
- [HolidaySchedules](cluster_export.DoorLock.Feature.md#holidayschedules)
- [Logging](cluster_export.DoorLock.Feature.md#logging)
- [Notification](cluster_export.DoorLock.Feature.md#notification)
- [PinCredential](cluster_export.DoorLock.Feature.md#pincredential)
- [RfidCredential](cluster_export.DoorLock.Feature.md#rfidcredential)
- [User](cluster_export.DoorLock.Feature.md#user)
- [WeekDayAccessSchedules](cluster_export.DoorLock.Feature.md#weekdayaccessschedules)
- [YearDayAccessSchedules](cluster_export.DoorLock.Feature.md#yeardayaccessschedules)

## Enumeration Members

### CredentialOverTheAirAccess

• **CredentialOverTheAirAccess** = ``"CredentialOverTheAirAccess"``

CredentialOverTheAirAccess

PIN codes over- the-air supported for lock/unlock operations

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2229](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2229)

___

### DoorPositionSensor

• **DoorPositionSensor** = ``"DoorPositionSensor"``

DoorPositionSensor

Lock supports a door position sensor that indicates door’s state

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2215](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2215)

___

### FaceCredentials

• **FaceCredentials** = ``"FaceCredentials"``

FaceCredentials

Lock supports face related credentials (face, iris, retina)

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2222](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2222)

___

### FingerCredentials

• **FingerCredentials** = ``"FingerCredentials"``

FingerCredentials

Lock supports finger related credentials (fingerprint, finger vein)

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2194](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2194)

___

### HolidaySchedules

• **HolidaySchedules** = ``"HolidaySchedules"``

HolidaySchedules

Lock supports holiday schedules

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2257](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2257)

___

### Logging

• **Logging** = ``"Logging"``

Logging

Lock supports local/on-lock logging when Events are not supported

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2201](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2201)

___

### Notification

• **Notification** = ``"Notification"``

Notification

Operation and Programming Notifications

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2243](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2243)

___

### PinCredential

• **PinCredential** = ``"PinCredential"``

PinCredential

Lock supports PIN credentials (via keypad, or over- the-air)

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2180](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2180)

___

### RfidCredential

• **RfidCredential** = ``"RfidCredential"``

RfidCredential

Lock supports RFID credentials

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2187](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2187)

___

### User

• **User** = ``"User"``

User

Lock supports the user commands and database

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2236](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2236)

___

### WeekDayAccessSchedules

• **WeekDayAccessSchedules** = ``"WeekDayAccessSchedules"``

WeekDayAccessSchedules

Lock supports week day user access schedules

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2208](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2208)

___

### YearDayAccessSchedules

• **YearDayAccessSchedules** = ``"YearDayAccessSchedules"``

YearDayAccessSchedules

Lock supports year day user access schedules

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:2250](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L2250)
