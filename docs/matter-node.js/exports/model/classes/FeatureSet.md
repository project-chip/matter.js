[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / FeatureSet

# Class: FeatureSet

A "feature set" is a set of features for a cluster.  The names of features present appear in this set.

TODO - Feature metadata is a bit messy and needs a refactor to consolidate available/supported and names/codes

## Extends

- `Set`\<[`Flag`](../namespaces/FeatureSet/README.md#flag)\>

## Constructors

### new FeatureSet()

> **new FeatureSet**(`definition`?): [`FeatureSet`](FeatureSet.md)

Create a new feature set from an iterable that returns active names or from an object of the form { [featureName:
string]: true }

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition`? | [`Definition`](../namespaces/FeatureSet/README.md#definition) |

#### Returns

[`FeatureSet`](FeatureSet.md)

#### Overrides

`Set<FeatureSet.Flag>.constructor`

#### Source

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:17

## Accessors

### array

> `get` **array**(): `string`[]

Access features as an array of feature names.

#### Returns

`string`[]

#### Source

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:21

***

### record

> `get` **record**(): `object`

Access features as an object mapping feature name -> true.

#### Returns

`object`

#### Source

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:25

## Methods

### is()

> **is**(`other`?): `boolean`

Determine if I am identical to another set.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other`? | [`FeatureSet`](FeatureSet.md) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:31

***

### map()

> **map**\<`T`\>(`fn`): `T`[]

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fn` | (`name`) => `T` |

#### Returns

`T`[]

#### Source

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:32
