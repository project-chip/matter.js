[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / ModelVariantTraversal

# Class: ModelVariantTraversal<S\>

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

• **new ModelVariantTraversal**<`S`\>(`sourceNames`)

Create a new visitor.  Must list the valid names of sources.  The order
of this list implies the priority used for choosing a name when multiple
model variants have different names.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceNames` | `string`[] |

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:67](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L67)

## Properties

### clusterState

• `Protected` **clusterState**: `undefined` \| [`ClusterState`](../modules/export._internal_.md#clusterstate)

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:58](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L58)

___

### modelTraversal

• `Private` **modelTraversal**: [`ModelTraversal`](export._internal_.ModelTraversal-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:60](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L60)

___

### sourceNames

• `Private` **sourceNames**: `string`[]

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:67](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L67)

___

### visiting

• `Private` **visiting**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:59](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L59)

## Methods

### createVariantDetail

▸ `Private` **createVariantDetail**(`map`): [`VariantDetail`](../interfaces/model.VariantDetail.md)

Create a VariantDetail from a VariantMap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`VariantMap`](../modules/model.md#variantmap) |

#### Returns

[`VariantDetail`](../interfaces/model.VariantDetail.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:268](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L268)

___

### enterCluster

▸ `Protected` **enterCluster**(`variants`): `boolean`

Determine if we are entering a cluster and install cluster state if so.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/model.VariantDetail.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:128](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L128)

___

### getCanonicalName

▸ `Protected` **getCanonicalName**(`model`): `string`

Get the canonical name for a model.  Within cluster scope alternate
names may be selected, otherwise the name of the model is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](model.Model-1.md) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:115](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L115)

___

### mapChildren

▸ `Private` **mapChildren**(`variants`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/model.VariantDetail.md) |

#### Returns

`Object`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:197](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L197)

___

### traverse

▸ **traverse**(`variants`): `S`

Initiate traversal.  The class is stateful so this call should not be
invoked while traversal is ongoing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variants` | [`TraverseMap`](../modules/model.md#traversemap) |

#### Returns

`S`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:73](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L73)

___

### visit

▸ `Protected` `Abstract` **visit**(`variants`, `recurse`): `S`

This is the primary callback.  It is invoked for every set of variants
during traversal.  It may optionally return state that is returned
from traverse().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/model.VariantDetail.md) | the set of equivalent models |
| `recurse` | () => `S`[] | call this function to recurse into variant children |

#### Returns

`S`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:109](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L109)

___

### visitVariants

▸ `Private` **visitVariants**(`variants`): `S`

This is the function that actually recurses during the visit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/model.VariantDetail.md) |

#### Returns

`S`

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:141](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L141)
