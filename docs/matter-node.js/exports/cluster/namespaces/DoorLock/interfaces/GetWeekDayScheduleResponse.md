[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / GetWeekDayScheduleResponse

# Interface: GetWeekDayScheduleResponse

## See

MatterSpecification.v11.Cluster § 5.2.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvGetWeekDayScheduleResponse`](../README.md#tlvgetweekdayscheduleresponse)\>

## Properties

### daysMask?

> `optional` **daysMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

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

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:661

***

### endHour?

> `optional` **endHour**: `number`

#### Inherited from

`TypeFromSchema.endHour`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:672

***

### endMinute?

> `optional` **endMinute**: `number`

#### Inherited from

`TypeFromSchema.endMinute`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:673

***

### startHour?

> `optional` **startHour**: `number`

#### Inherited from

`TypeFromSchema.startHour`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:670

***

### startMinute?

> `optional` **startMinute**: `number`

#### Inherited from

`TypeFromSchema.startMinute`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:671

***

### status

> **status**: [`DlStatus`](../enumerations/DlStatus.md)

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:660

***

### userIndex

> **userIndex**: `number`

#### Inherited from

`TypeFromSchema.userIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:659

***

### weekDayIndex

> **weekDayIndex**: `number`

#### Inherited from

`TypeFromSchema.weekDayIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:658
