[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / SetWeekDayScheduleRequest

# Interface: SetWeekDayScheduleRequest

Input to the DoorLock setWeekDaySchedule command

## See

MatterSpecification.v11.Cluster § 5.2.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvSetWeekDayScheduleRequest`](../README.md#tlvsetweekdayschedulerequest)\>

## Properties

### daysMask

> **daysMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### friday

> **friday**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### monday

> **monday**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### saturday

> **saturday**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### sunday

> **sunday**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### thursday

> **thursday**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### tuesday

> **tuesday**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### wednesday

> **wednesday**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.daysMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:617

***

### endHour

> **endHour**: `number`

#### Inherited from

`TypeFromSchema.endHour`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:628

***

### endMinute

> **endMinute**: `number`

#### Inherited from

`TypeFromSchema.endMinute`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:629

***

### startHour

> **startHour**: `number`

#### Inherited from

`TypeFromSchema.startHour`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:626

***

### startMinute

> **startMinute**: `number`

#### Inherited from

`TypeFromSchema.startMinute`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:627

***

### userIndex

> **userIndex**: `number`

#### Inherited from

`TypeFromSchema.userIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:616

***

### weekDayIndex

> **weekDayIndex**: `number`

#### Inherited from

`TypeFromSchema.weekDayIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:615
