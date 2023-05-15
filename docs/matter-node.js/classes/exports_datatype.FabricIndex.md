[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/datatype](../modules/exports_datatype.md) / FabricIndex

# Class: FabricIndex

[exports/datatype](../modules/exports_datatype.md).FabricIndex

Each fabric supported on a node is referenced by fabric-index that is unique on the node. This
fabric-index enables the look-up of the full fabric information from the fabric-index. A fabric-index
of 0 (zero) or null SHALL indicate that there is no fabric associated with the context in which the
fabric-index is being used. If fabric-index is used in a context that is exclusively associated with
a fabric, such as fabric-scoped data model elements, then the fabric-index values SHALL NOT include 0
(zero) or null.

**`See`**

MatterCoreSpecificationV1_0 § 7.5.2

## Table of contents

### Constructors

- [constructor](exports_datatype.FabricIndex.md#constructor)

### Properties

- [index](exports_datatype.FabricIndex.md#index)
- [NO\_FABRIC](exports_datatype.FabricIndex.md#no_fabric)

## Constructors

### constructor

• **new FabricIndex**(`index`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Defined in

packages/matter.js/dist/cjs/datatype/FabricIndex.d.ts:20

## Properties

### index

• `Readonly` **index**: `number`

#### Defined in

packages/matter.js/dist/cjs/datatype/FabricIndex.d.ts:18

___

### NO\_FABRIC

▪ `Static` **NO\_FABRIC**: [`FabricIndex`](exports_datatype.FabricIndex.md)

#### Defined in

packages/matter.js/dist/cjs/datatype/FabricIndex.d.ts:19
