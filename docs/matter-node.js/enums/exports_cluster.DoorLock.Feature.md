[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / Feature

# Enumeration: Feature

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).Feature

These are optional features supported by DoorLockCluster.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.2

## Table of contents

### Enumeration Members

- [CredentialOverTheAirAccess](exports_cluster.DoorLock.Feature.md#credentialovertheairaccess)
- [DoorPositionSensor](exports_cluster.DoorLock.Feature.md#doorpositionsensor)
- [FaceCredentials](exports_cluster.DoorLock.Feature.md#facecredentials)
- [FingerCredentials](exports_cluster.DoorLock.Feature.md#fingercredentials)
- [HolidaySchedules](exports_cluster.DoorLock.Feature.md#holidayschedules)
- [Logging](exports_cluster.DoorLock.Feature.md#logging)
- [Notification](exports_cluster.DoorLock.Feature.md#notification)
- [PinCredential](exports_cluster.DoorLock.Feature.md#pincredential)
- [RfidCredential](exports_cluster.DoorLock.Feature.md#rfidcredential)
- [User](exports_cluster.DoorLock.Feature.md#user)
- [WeekDayAccessSchedules](exports_cluster.DoorLock.Feature.md#weekdayaccessschedules)
- [YearDayAccessSchedules](exports_cluster.DoorLock.Feature.md#yeardayaccessschedules)

## Enumeration Members

### CredentialOverTheAirAccess

• **CredentialOverTheAirAccess** = ``"CredentialOverTheAirAccess"``

CredentialOverTheAirAccess

PIN codes over- the-air supported for lock/unlock operations

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1217

___

### DoorPositionSensor

• **DoorPositionSensor** = ``"DoorPositionSensor"``

DoorPositionSensor

Lock supports a door position sensor that indicates door’s state

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1205

___

### FaceCredentials

• **FaceCredentials** = ``"FaceCredentials"``

FaceCredentials

Lock supports face related credentials (face, iris, retina)

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1211

___

### FingerCredentials

• **FingerCredentials** = ``"FingerCredentials"``

FingerCredentials

Lock supports finger related credentials (fingerprint, finger vein)

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1187

___

### HolidaySchedules

• **HolidaySchedules** = ``"HolidaySchedules"``

HolidaySchedules

Lock supports holiday schedules

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1241

___

### Logging

• **Logging** = ``"Logging"``

Logging

Lock supports local/on-lock logging when Events are not supported

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1193

___

### Notification

• **Notification** = ``"Notification"``

Notification

Operation and Programming Notifications

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1229

___

### PinCredential

• **PinCredential** = ``"PinCredential"``

PinCredential

Lock supports PIN credentials (via keypad, or over- the-air)

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1175

___

### RfidCredential

• **RfidCredential** = ``"RfidCredential"``

RfidCredential

Lock supports RFID credentials

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1181

___

### User

• **User** = ``"User"``

User

Lock supports the user commands and database

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1223

___

### WeekDayAccessSchedules

• **WeekDayAccessSchedules** = ``"WeekDayAccessSchedules"``

WeekDayAccessSchedules

Lock supports week day user access schedules

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1199

___

### YearDayAccessSchedules

• **YearDayAccessSchedules** = ``"YearDayAccessSchedules"``

YearDayAccessSchedules

Lock supports year day user access schedules

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:1235
