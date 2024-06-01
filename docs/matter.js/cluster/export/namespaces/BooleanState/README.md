[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / BooleanState

# Namespace: BooleanState

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [StateChangeEvent](interfaces/StateChangeEvent.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts#L68)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.stateValue

> `readonly` **stateValue**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

This represents a Boolean state.

###### See

MatterSpecification.v11.Cluster § 1.7.4.1

##### events

> `readonly` **events**: `object`

##### events.stateChange

> `readonly` **stateChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated when the StateValue attribute changes.

The StateValue field shall indicate the new value of the StateValue attribute.

###### See

MatterSpecification.v11.Cluster § 1.7.5.1

##### id

> `readonly` **id**: `69` = `0x45`

##### name

> `readonly` **name**: `"BooleanState"` = `"BooleanState"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts#L35)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts#L71)

***

### TlvStateChangeEvent

> `const` **TlvStateChangeEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the BooleanState stateChange event

#### See

MatterSpecification.v11.Cluster § 1.7.5.1

#### Type declaration

##### stateValue

> **stateValue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

#### Source

[packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts#L23)
