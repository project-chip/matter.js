[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [datatype](../modules/datatype.md) / FabricIndex

# Class: FabricIndex

[datatype](../modules/datatype.md).FabricIndex

Each fabric supported on a node is referenced by fabric-index that is unique on the node. This
fabric-index enables the look-up of the full fabric information from the fabric-index. A fabric-index
of 0 (zero) or null SHALL indicate that there is no fabric associated with the context in which the
fabric-index is being used. If fabric-index is used in a context that is exclusively associated with
a fabric, such as fabric-scoped data model elements, then the fabric-index values SHALL NOT include 0
(zero) or null.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 7.5.2

## Table of contents

### Constructors

- [constructor](datatype.FabricIndex.md#constructor)

### Properties

- [index](datatype.FabricIndex.md#index)
- [NO\_FABRIC](datatype.FabricIndex.md#no_fabric)

## Constructors

### constructor

• **new FabricIndex**(`index`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Defined in

[packages/matter.js/src/datatype/FabricIndex.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/FabricIndex.ts#L24)

## Properties

### index

• `Readonly` **index**: `number`

#### Defined in

[packages/matter.js/src/datatype/FabricIndex.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/FabricIndex.ts#L25)

___

### NO\_FABRIC

▪ `Static` **NO\_FABRIC**: [`FabricIndex`](datatype.FabricIndex.md)

#### Defined in

[packages/matter.js/src/datatype/FabricIndex.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/FabricIndex.ts#L22)
