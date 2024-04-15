[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / ModelVariantTraversal

# Class: ModelVariantTraversal\<S\>

[model](../modules/model.md).ModelVariantTraversal

Visits multiple model hierarchies simultaneously and builds state.

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `void` |

## Table of contents

### Constructors

- [constructor](model.ModelVariantTraversal.md#constructor)

### Properties

- [clusterState](model.ModelVariantTraversal.md#clusterstate)
- [modelTraversal](model.ModelVariantTraversal.md#modeltraversal)
- [sourceNames](model.ModelVariantTraversal.md#sourcenames)
- [visiting](model.ModelVariantTraversal.md#visiting)

### Methods

- [createVariantDetail](model.ModelVariantTraversal.md#createvariantdetail)
- [enterCluster](model.ModelVariantTraversal.md#entercluster)
- [getCanonicalName](model.ModelVariantTraversal.md#getcanonicalname)
- [mapChildren](model.ModelVariantTraversal.md#mapchildren)
- [traverse](model.ModelVariantTraversal.md#traverse)
- [visit](model.ModelVariantTraversal.md#visit)
- [visitVariants](model.ModelVariantTraversal.md#visitvariants)

## Constructors

### constructor

• **new ModelVariantTraversal**\<`S`\>(`sourceNames`): [`ModelVariantTraversal`](model.ModelVariantTraversal.md)\<`S`\>

Create a new visitor.  Must list the valid names of sources.  The order of this list implies the priority used
for choosing a name when multiple model variants have different names.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceNames` | `string`[] |

#### Returns

[`ModelVariantTraversal`](model.ModelVariantTraversal.md)\<`S`\>

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L64)

## Properties

### clusterState

• `Protected` **clusterState**: `undefined` \| [`ClusterState`](../modules/model._internal_.md#clusterstate)

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L56)

___

### modelTraversal

• `Private` **modelTraversal**: [`ModelTraversal`](model._internal_.ModelTraversal.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L58)

___

### sourceNames

• `Private` **sourceNames**: `string`[]

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L64)

___

### visiting

• `Private` **visiting**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L57)

## Methods

### createVariantDetail

▸ **createVariantDetail**(`map`): [`VariantDetail`](../interfaces/model.VariantDetail.md)

Create a VariantDetail from a VariantMap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`VariantMap`](../modules/model.md#variantmap) |

#### Returns

[`VariantDetail`](../interfaces/model.VariantDetail.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:267](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L267)

___

### enterCluster

▸ **enterCluster**(`variants`): `boolean`

Determine if we are entering a cluster and install cluster state if so.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/model.VariantDetail.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L123)

___

### getCanonicalName

▸ **getCanonicalName**(`model`): `string`

Get the canonical name for a model.  Within cluster scope alternate names may be selected, otherwise the name of
the model is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](model.Model-1.md) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L110)

___

### mapChildren

▸ **mapChildren**(`variants`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/model.VariantDetail.md) |

#### Returns

`Object`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L192)

___

### traverse

▸ **traverse**(`variants`): `S`

Initiate traversal.  The class is stateful so this call should not be invoked while traversal is ongoing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variants` | [`TraverseMap`](../modules/model.md#traversemap) |

#### Returns

`S`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L69)

___

### visit

▸ **visit**(`variants`, `recurse`): `S`

This is the primary callback.  It is invoked for every set of variants during traversal.  It may optionally
return state that is returned from traverse().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/model.VariantDetail.md) | the set of equivalent models |
| `recurse` | () => `S`[] | call this function to recurse into variant children |

#### Returns

`S`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L104)

___

### visitVariants

▸ **visitVariants**(`variants`): `S`

This is the function that actually recurses during the visit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/model.VariantDetail.md) |

#### Returns

`S`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L136)
