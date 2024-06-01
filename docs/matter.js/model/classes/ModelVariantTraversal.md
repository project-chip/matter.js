[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [model](../README.md) / ModelVariantTraversal

# Class: `abstract` ModelVariantTraversal\<S\>

Visits multiple model hierarchies simultaneously and builds state.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `S` | `void` |

## Constructors

### new ModelVariantTraversal()

> **new ModelVariantTraversal**\<`S`\>(`sourceNames`): [`ModelVariantTraversal`](ModelVariantTraversal.md)\<`S`\>

Create a new visitor.  Must list the valid names of sources.  The order of this list implies the priority used
for choosing a name when multiple model variants have different names.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sourceNames` | `string`[] |

#### Returns

[`ModelVariantTraversal`](ModelVariantTraversal.md)\<`S`\>

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L64)

## Properties

### clusterState

> `protected` **clusterState**: `undefined` \| [`ClusterState`](../-internal-/README.md#clusterstate)

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L56)

***

### modelTraversal

> `private` **modelTraversal**: [`ModelTraversal`](../-internal-/classes/ModelTraversal.md)

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L58)

***

### sourceNames

> `private` **sourceNames**: `string`[]

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L64)

***

### visiting

> `private` **visiting**: `boolean` = `false`

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L57)

## Methods

### createVariantDetail()

> `private` **createVariantDetail**(`map`): [`VariantDetail`](../interfaces/VariantDetail.md)

Create a VariantDetail from a VariantMap.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `map` | [`VariantMap`](../README.md#variantmap) |

#### Returns

[`VariantDetail`](../interfaces/VariantDetail.md)

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:267](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L267)

***

### enterCluster()

> `protected` **enterCluster**(`variants`): `boolean`

Determine if we are entering a cluster and install cluster state if so.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/VariantDetail.md) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L123)

***

### getCanonicalName()

> `protected` **getCanonicalName**(`model`): `string`

Get the canonical name for a model.  Within cluster scope alternate names may be selected, otherwise the name of
the model is returned.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`Model`](Model.md) |

#### Returns

`string`

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L110)

***

### mapChildren()

> `private` **mapChildren**(`variants`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/VariantDetail.md) |

#### Returns

`object`

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L192)

***

### traverse()

> **traverse**(`variants`): `S`

Initiate traversal.  The class is stateful so this call should not be invoked while traversal is ongoing.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `variants` | [`TraverseMap`](../README.md#traversemap) |

#### Returns

`S`

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L69)

***

### visit()

> `protected` `abstract` **visit**(`variants`, `recurse`): `S`

This is the primary callback.  It is invoked for every set of variants during traversal.  It may optionally
return state that is returned from traverse().

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/VariantDetail.md) | the set of equivalent models |
| `recurse` | () => `S`[] | call this function to recurse into variant children |

#### Returns

`S`

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L104)

***

### visitVariants()

> `private` **visitVariants**(`variants`): `S`

This is the function that actually recurses during the visit.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/VariantDetail.md) |

#### Returns

`S`

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L136)
