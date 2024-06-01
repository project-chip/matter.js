[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / BarrierControl

# Namespace: BarrierControl

## Index

### Interfaces

- [BarrierControlGoToPercentRequest](interfaces/BarrierControlGoToPercentRequest.md)
- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L61)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.barrierCapabilities

> `readonly` **barrierCapabilities**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierCloseEvents

> `readonly` **barrierCloseEvents**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierClosePeriod

> `readonly` **barrierClosePeriod**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierCommandCloseEvents

> `readonly` **barrierCommandCloseEvents**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierCommandOpenEvents

> `readonly` **barrierCommandOpenEvents**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierMovingState

> `readonly` **barrierMovingState**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierOpenEvents

> `readonly` **barrierOpenEvents**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierOpenPeriod

> `readonly` **barrierOpenPeriod**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierPosition

> `readonly` **barrierPosition**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierSafetyStatus

> `readonly` **barrierSafetyStatus**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

##### commands

> `readonly` **commands**: `object`

##### commands.barrierControlGoToPercent

> `readonly` **barrierControlGoToPercent**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### commands.barrierControlStop

> `readonly` **barrierControlStop**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

##### id

> `readonly` **id**: `259` = `0x103`

##### name

> `readonly` **name**: `"BarrierControl"` = `"BarrierControl"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L32)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L64)

***

### TlvBarrierControlGoToPercentRequest

> `const` **TlvBarrierControlGoToPercentRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the BarrierControl barrierControlGoToPercent command

#### Type declaration

##### percentOpen

> **percentOpen**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L22)
