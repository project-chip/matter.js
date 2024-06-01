[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / GetWeekDayScheduleResponse

# Interface: GetWeekDayScheduleResponse

## See

MatterSpecification.v11.Cluster § 5.2.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetWeekDayScheduleResponse`](../README.md#tlvgetweekdayscheduleresponse)\>

## Properties

### daysMask?

> `optional` **daysMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### friday

> **friday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### monday

> **monday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### saturday

> **saturday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### sunday

> **sunday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### thursday

> **thursday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### tuesday

> **tuesday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### wednesday

> **wednesday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.daysMask`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:664](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L664)

***

### endHour?

> `optional` **endHour**: `number`

#### Inherited from

`TypeFromSchema.endHour`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:667](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L667)

***

### endMinute?

> `optional` **endMinute**: `number`

#### Inherited from

`TypeFromSchema.endMinute`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:668](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L668)

***

### startHour?

> `optional` **startHour**: `number`

#### Inherited from

`TypeFromSchema.startHour`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:665](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L665)

***

### startMinute?

> `optional` **startMinute**: `number`

#### Inherited from

`TypeFromSchema.startMinute`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:666](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L666)

***

### status

> **status**: [`DlStatus`](../enumerations/DlStatus.md)

#### Inherited from

`TypeFromSchema.status`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:663](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L663)

***

### userIndex

> **userIndex**: `number`

#### Inherited from

`TypeFromSchema.userIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:662](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L662)

***

### weekDayIndex

> **weekDayIndex**: `number`

#### Inherited from

`TypeFromSchema.weekDayIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:661](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L661)
