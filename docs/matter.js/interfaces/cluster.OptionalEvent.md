[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / OptionalEvent

# Interface: OptionalEvent<T\>

[cluster](../modules/cluster.md).OptionalEvent

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Event`](../modules/cluster.md#event)<`T`\>

  ↳ **`OptionalEvent`**

## Table of contents

### Properties

- [id](cluster.OptionalEvent.md#id)
- [optional](cluster.OptionalEvent.md#optional)
- [priority](cluster.OptionalEvent.md#priority)
- [schema](cluster.OptionalEvent.md#schema)

## Properties

### id

• **id**: `number`

#### Inherited from

Event.id

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L55)

___

### optional

• **optional**: ``true``

#### Overrides

Event.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:56](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L56)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster.EventPriority.md)

#### Inherited from

Event.priority

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L55)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\>

#### Inherited from

Event.schema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L55)
