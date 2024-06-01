[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [model](../README.md) / FeatureSet

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

[packages/matter.js/src/model/definitions/FeatureSet.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FeatureSet.ts#L20)

## Accessors

### array

> `get` **array**(): `string`[]

Access features as an array of feature names.

#### Returns

`string`[]

#### Source

[packages/matter.js/src/model/definitions/FeatureSet.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FeatureSet.ts#L32)

***

### record

> `get` **record**(): `object`

Access features as an object mapping feature name -> true.

#### Returns

`object`

#### Source

[packages/matter.js/src/model/definitions/FeatureSet.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FeatureSet.ts#L39)

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

[packages/matter.js/src/model/definitions/FeatureSet.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FeatureSet.ts#L46)

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

[packages/matter.js/src/model/definitions/FeatureSet.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FeatureSet.ts#L50)
