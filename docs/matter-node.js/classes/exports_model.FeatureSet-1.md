[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / FeatureSet

# Class: FeatureSet

[exports/model](../modules/exports_model.md).FeatureSet

A "feature set" is a set of features for a cluster.  The names of features present appear in this set.

TODO - Feature metadata is a bit messy and needs a refactor to consolidate available/supported and names/codes

## Hierarchy

- `Set`\<[`Flag`](../modules/exports_model.FeatureSet.md#flag)\>

  ↳ **`FeatureSet`**

## Table of contents

### Constructors

- [constructor](exports_model.FeatureSet-1.md#constructor)

### Accessors

- [array](exports_model.FeatureSet-1.md#array)
- [record](exports_model.FeatureSet-1.md#record)

### Methods

- [is](exports_model.FeatureSet-1.md#is)
- [map](exports_model.FeatureSet-1.md#map)

## Constructors

### constructor

• **new FeatureSet**(`definition?`): [`FeatureSet`](exports_model.FeatureSet-1.md)

Create a new feature set from an iterable that returns active names or from an object of the form { [featureName:
string]: true }

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition?` | [`Definition`](../modules/exports_model.FeatureSet.md#definition) |

#### Returns

[`FeatureSet`](exports_model.FeatureSet-1.md)

#### Overrides

Set\&lt;FeatureSet.Flag\&gt;.constructor

#### Defined in

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:17

## Accessors

### array

• `get` **array**(): `string`[]

Access features as an array of feature names.

#### Returns

`string`[]

#### Defined in

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:21

___

### record

• `get` **record**(): `Object`

Access features as an object mapping feature name -> true.

#### Returns

`Object`

#### Defined in

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:25

## Methods

### is

▸ **is**(`other?`): `boolean`

Determine if I am identical to another set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other?` | [`FeatureSet`](exports_model.FeatureSet-1.md) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:31

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

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:32
