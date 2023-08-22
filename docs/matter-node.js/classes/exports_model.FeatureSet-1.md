[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / FeatureSet

# Class: FeatureSet

[exports/model](../modules/exports_model.md).FeatureSet

A "feature set" is a set of features for a cluster.  The names of features
present appear in this set.

## Hierarchy

- `Set`<[`Flag`](../modules/exports_model.FeatureSet.md#flag)\>

  ↳ **`FeatureSet`**

## Table of contents

### Constructors

- [constructor](exports_model.FeatureSet-1.md#constructor)

### Accessors

- [array](exports_model.FeatureSet-1.md#array)
- [record](exports_model.FeatureSet-1.md#record)

### Methods

- [map](exports_model.FeatureSet-1.md#map)

## Constructors

### constructor

• **new FeatureSet**(`definition?`)

Create a new feature set from an iterable that returns active names or
from an object of the form { [featureName: string]: true }

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition?` | [`Definition`](../modules/exports_model.FeatureSet.md#definition) |

#### Overrides

Set&lt;FeatureSet.Flag\&gt;.constructor

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FeatureSet.d.ts:15

## Accessors

### array

• `get` **array**(): `string`[]

Access features as an array of feature names.

#### Returns

`string`[]

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FeatureSet.d.ts:19

___

### record

• `get` **record**(): `Object`

Access features as an object mapping feature name -> true.

#### Returns

`Object`

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FeatureSet.d.ts:23

## Methods

### map

▸ **map**<`T`\>(`fn`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`name`: `string`) => `T` |

#### Returns

`T`[]

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FeatureSet.d.ts:26
