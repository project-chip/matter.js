[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / FeatureSet

# Class: FeatureSet

[model](../modules/model.md).FeatureSet

A "feature set" is a set of features for a cluster.  The names of features
present appear in this set.

## Hierarchy

- `Set`<[`Flag`](../modules/model.FeatureSet.md#flag)\>

  ↳ **`FeatureSet`**

## Table of contents

### Constructors

- [constructor](model.FeatureSet-1.md#constructor)

### Accessors

- [array](model.FeatureSet-1.md#array)
- [record](model.FeatureSet-1.md#record)

### Methods

- [map](model.FeatureSet-1.md#map)

## Constructors

### constructor

• **new FeatureSet**(`definition?`)

Create a new feature set from an iterable that returns active names or
from an object of the form { [featureName: string]: true }

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition?` | [`Definition`](../modules/model.FeatureSet.md#definition) |

#### Overrides

Set&lt;FeatureSet.Flag\&gt;.constructor

#### Defined in

[packages/matter.js/src/model/definitions/FeatureSet.ts:16](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/definitions/FeatureSet.ts#L16)

## Accessors

### array

• `get` **array**(): `string`[]

Access features as an array of feature names.

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/model/definitions/FeatureSet.ts:28](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/definitions/FeatureSet.ts#L28)

___

### record

• `get` **record**(): `Object`

Access features as an object mapping feature name -> true.

#### Returns

`Object`

#### Defined in

[packages/matter.js/src/model/definitions/FeatureSet.ts:35](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/definitions/FeatureSet.ts#L35)

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

[packages/matter.js/src/model/definitions/FeatureSet.ts:39](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/definitions/FeatureSet.ts#L39)
