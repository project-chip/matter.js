[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / OptionalEvent

# Interface: OptionalEvent<T\>

[exports/cluster](../modules/exports_cluster.md).OptionalEvent

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Event`](../modules/exports_cluster.md#event)<`T`\>

  ↳ **`OptionalEvent`**

## Table of contents

### Properties

- [id](exports_cluster.OptionalEvent.md#id)
- [optional](exports_cluster.OptionalEvent.md#optional)
- [priority](exports_cluster.OptionalEvent.md#priority)
- [schema](exports_cluster.OptionalEvent.md#schema)

## Properties

### id

• **id**: `number`

#### Inherited from

Event.id

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:78

___

### optional

• **optional**: ``true``

#### Overrides

Event.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:84

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Inherited from

Event.priority

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:80

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

Event.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:79
