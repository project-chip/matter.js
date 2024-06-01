[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / SetWeekDayScheduleRequest

# Interface: SetWeekDayScheduleRequest

Input to the DoorLock setWeekDaySchedule command

## See

MatterSpecification.v11.Cluster § 5.2.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSetWeekDayScheduleRequest`](../README.md#tlvsetweekdayschedulerequest)\>

## Properties

### daysMask

> **daysMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:626](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L626)

***

### endHour

> **endHour**: `number`

#### Inherited from

`TypeFromSchema.endHour`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:629](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L629)

***

### endMinute

> **endMinute**: `number`

#### Inherited from

`TypeFromSchema.endMinute`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:630](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L630)

***

### startHour

> **startHour**: `number`

#### Inherited from

`TypeFromSchema.startHour`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:627](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L627)

***

### startMinute

> **startMinute**: `number`

#### Inherited from

`TypeFromSchema.startMinute`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:628](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L628)

***

### userIndex

> **userIndex**: `number`

#### Inherited from

`TypeFromSchema.userIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:625](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L625)

***

### weekDayIndex

> **weekDayIndex**: `number`

#### Inherited from

`TypeFromSchema.weekDayIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:624](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L624)
