[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / ModelVariantTraversal

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

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:55

## Properties

### clusterState

> `protected` **clusterState**: `undefined` \| [`ClusterState`](../-internal-/README.md#clusterstate)

#### Source

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:48

***

### createVariantDetail

> `private` **createVariantDetail**: `any`

Create a VariantDetail from a VariantMap.

#### Source

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:85

***

### mapChildren

> `private` **mapChildren**: `any`

#### Source

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:81

***

### modelTraversal

> `private` **modelTraversal**: `any`

#### Source

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:50

***

### sourceNames

> `private` **sourceNames**: `any`

#### Source

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:47

***

### visitVariants

> `private` **visitVariants**: `any`

This is the function that actually recurses during the visit.

#### Source

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:80

***

### visiting

> `private` **visiting**: `any`

#### Source

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:49

## Methods

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

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:76

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

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:72

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

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:59

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

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:67
