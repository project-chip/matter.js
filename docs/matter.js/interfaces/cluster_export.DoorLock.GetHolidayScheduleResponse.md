[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / GetHolidayScheduleResponse

# Interface: GetHolidayScheduleResponse

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).GetHolidayScheduleResponse

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGetHolidayScheduleResponse`](../modules/cluster_export.DoorLock.md#tlvgetholidayscheduleresponse)\>

  ↳ **`GetHolidayScheduleResponse`**

## Table of contents

### Properties

- [holidayIndex](cluster_export.DoorLock.GetHolidayScheduleResponse.md#holidayindex)
- [localEndTime](cluster_export.DoorLock.GetHolidayScheduleResponse.md#localendtime)
- [localStartTime](cluster_export.DoorLock.GetHolidayScheduleResponse.md#localstarttime)
- [operatingMode](cluster_export.DoorLock.GetHolidayScheduleResponse.md#operatingmode)
- [status](cluster_export.DoorLock.GetHolidayScheduleResponse.md#status)

## Properties

### holidayIndex

• **holidayIndex**: `number`

#### Inherited from

TypeFromSchema.holidayIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:853](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L853)

___

### localEndTime

• `Optional` **localEndTime**: `number`

#### Inherited from

TypeFromSchema.localEndTime

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:856](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L856)

___

### localStartTime

• `Optional` **localStartTime**: `number`

#### Inherited from

TypeFromSchema.localStartTime

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:855](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L855)

___

### operatingMode

• `Optional` **operatingMode**: [`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)

#### Inherited from

TypeFromSchema.operatingMode

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:857](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L857)

___

### status

• **status**: [`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:854](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L854)
