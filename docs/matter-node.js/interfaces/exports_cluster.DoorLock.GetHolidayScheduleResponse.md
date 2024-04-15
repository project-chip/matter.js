[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / GetHolidayScheduleResponse

# Interface: GetHolidayScheduleResponse

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).GetHolidayScheduleResponse

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvGetHolidayScheduleResponse`](../modules/exports_cluster.DoorLock.md#tlvgetholidayscheduleresponse)\>

  ↳ **`GetHolidayScheduleResponse`**

## Table of contents

### Properties

- [holidayIndex](exports_cluster.DoorLock.GetHolidayScheduleResponse.md#holidayindex)
- [localEndTime](exports_cluster.DoorLock.GetHolidayScheduleResponse.md#localendtime)
- [localStartTime](exports_cluster.DoorLock.GetHolidayScheduleResponse.md#localstarttime)
- [operatingMode](exports_cluster.DoorLock.GetHolidayScheduleResponse.md#operatingmode)
- [status](exports_cluster.DoorLock.GetHolidayScheduleResponse.md#status)

## Properties

### holidayIndex

• **holidayIndex**: `number`

#### Inherited from

TypeFromSchema.holidayIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:847

___

### localEndTime

• `Optional` **localEndTime**: `number`

#### Inherited from

TypeFromSchema.localEndTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:850

___

### localStartTime

• `Optional` **localStartTime**: `number`

#### Inherited from

TypeFromSchema.localStartTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:849

___

### operatingMode

• `Optional` **operatingMode**: [`OperatingMode`](../enums/exports_cluster.DoorLock.OperatingMode.md)

#### Inherited from

TypeFromSchema.operatingMode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:851

___

### status

• **status**: [`DlStatus`](../enums/exports_cluster.DoorLock.DlStatus.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:848
