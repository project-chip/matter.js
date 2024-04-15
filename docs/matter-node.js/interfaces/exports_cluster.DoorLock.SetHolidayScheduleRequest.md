[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / SetHolidayScheduleRequest

# Interface: SetHolidayScheduleRequest

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).SetHolidayScheduleRequest

Input to the DoorLock setHolidaySchedule command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSetHolidayScheduleRequest`](../modules/exports_cluster.DoorLock.md#tlvsetholidayschedulerequest)\>

  ↳ **`SetHolidayScheduleRequest`**

## Table of contents

### Properties

- [holidayIndex](exports_cluster.DoorLock.SetHolidayScheduleRequest.md#holidayindex)
- [localEndTime](exports_cluster.DoorLock.SetHolidayScheduleRequest.md#localendtime)
- [localStartTime](exports_cluster.DoorLock.SetHolidayScheduleRequest.md#localstarttime)
- [operatingMode](exports_cluster.DoorLock.SetHolidayScheduleRequest.md#operatingmode)

## Properties

### holidayIndex

• **holidayIndex**: `number`

#### Inherited from

TypeFromSchema.holidayIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:816

___

### localEndTime

• **localEndTime**: `number`

#### Inherited from

TypeFromSchema.localEndTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:818

___

### localStartTime

• **localStartTime**: `number`

#### Inherited from

TypeFromSchema.localStartTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:817

___

### operatingMode

• **operatingMode**: [`OperatingMode`](../enums/exports_cluster.DoorLock.OperatingMode.md)

#### Inherited from

TypeFromSchema.operatingMode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:819
