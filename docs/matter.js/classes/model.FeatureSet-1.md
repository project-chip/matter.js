[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / FeatureSet

# Class: FeatureSet

[model](../modules/model.md).FeatureSet

A "feature set" is a set of features for a cluster.  The names of features present appear in this set.

TODO - Feature metadata is a bit messy and needs a refactor to consolidate available/supported and names/codes

## Hierarchy

- `Set`\<[`Flag`](../modules/model.FeatureSet.md#flag)\>

  ↳ **`FeatureSet`**

## Table of contents

### Constructors

- [constructor](model.FeatureSet-1.md#constructor)

### Accessors

- [array](model.FeatureSet-1.md#array)
- [record](model.FeatureSet-1.md#record)

### Methods

- [is](model.FeatureSet-1.md#is)
- [map](model.FeatureSet-1.md#map)

## Constructors

### constructor

• **new FeatureSet**(`definition?`): [`FeatureSet`](model.FeatureSet-1.md)

Create a new feature set from an iterable that returns active names or from an object of the form { [featureName:
string]: true }

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition?` | [`Definition`](../modules/model.FeatureSet.md#definition) |

#### Returns

[`FeatureSet`](model.FeatureSet-1.md)

#### Overrides

Set\&lt;FeatureSet.Flag\&gt;.constructor

#### Defined in

[packages/matter.js/src/model/definitions/FeatureSet.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FeatureSet.ts#L20)

## Accessors

### array

• `get` **array**(): `string`[]

Access features as an array of feature names.

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/model/definitions/FeatureSet.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FeatureSet.ts#L32)

___

### record

• `get` **record**(): `Object`

Access features as an object mapping feature name -> true.

#### Returns

`Object`

#### Defined in

[packages/matter.js/src/model/definitions/FeatureSet.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FeatureSet.ts#L39)

## Methods

### is

▸ **is**(`other?`): `boolean`

Determine if I am identical to another set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other?` | [`FeatureSet`](model.FeatureSet-1.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/definitions/FeatureSet.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FeatureSet.ts#L46)

___

### map

▸ **map**\<`T`\>(`fn`): `T`[]

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

[packages/matter.js/src/model/definitions/FeatureSet.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FeatureSet.ts#L50)
