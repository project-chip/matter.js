[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / ModelVariantTraversal

# Class: ModelVariantTraversal<S\>

[exports/model](../modules/exports_model.md).ModelVariantTraversal

Visits multiple model hierarchies simultaneously and builds state.

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `void` |

## Table of contents

### Constructors

- [constructor](exports_model.ModelVariantTraversal.md#constructor)

### Properties

- [clusterState](exports_model.ModelVariantTraversal.md#clusterstate)
- [createVariantDetail](exports_model.ModelVariantTraversal.md#createvariantdetail)
- [mapChildren](exports_model.ModelVariantTraversal.md#mapchildren)
- [modelTraversal](exports_model.ModelVariantTraversal.md#modeltraversal)
- [sourceNames](exports_model.ModelVariantTraversal.md#sourcenames)
- [visitVariants](exports_model.ModelVariantTraversal.md#visitvariants)
- [visiting](exports_model.ModelVariantTraversal.md#visiting)

### Methods

- [enterCluster](exports_model.ModelVariantTraversal.md#entercluster)
- [getCanonicalName](exports_model.ModelVariantTraversal.md#getcanonicalname)
- [traverse](exports_model.ModelVariantTraversal.md#traverse)
- [visit](exports_model.ModelVariantTraversal.md#visit)

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

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:58

## Properties

### clusterState

• `Protected` **clusterState**: `undefined` \| [`ClusterState`](../modules/export._internal_.md#clusterstate)

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:50

___

### createVariantDetail

• `Private` **createVariantDetail**: `any`

Create a VariantDetail from a VariantMap.

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:90

___

### mapChildren

• `Private` **mapChildren**: `any`

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:86

___

### modelTraversal

• `Private` **modelTraversal**: `any`

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:52

___

### sourceNames

• `Private` **sourceNames**: `any`

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:49

___

### visitVariants

• `Private` **visitVariants**: `any`

This is the function that actually recurses during the visit.

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:85

___

### visiting

• `Private` **visiting**: `any`

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:51

## Methods

### enterCluster

▸ `Protected` **enterCluster**(`variants`): `boolean`

Determine if we are entering a cluster and install cluster state if so.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/exports_model.VariantDetail.md) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:81

___

### getCanonicalName

▸ `Protected` **getCanonicalName**(`model`): `string`

Get the canonical name for a model.  Within cluster scope alternate
names may be selected, otherwise the name of the model is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](exports_model.Model-1.md) |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:77

___

### traverse

▸ **traverse**(`variants`): `S`

Initiate traversal.  The class is stateful so this call should not be
invoked while traversal is ongoing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variants` | [`TraverseMap`](../modules/exports_model.md#traversemap) |

#### Returns

`S`

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:63

___

### visit

▸ `Protected` `Abstract` **visit**(`variants`, `recurse`): `S`

This is the primary callback.  It is invoked for every set of variants
during traversal.  It may optionally return state that is returned
from traverse().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variants` | [`VariantDetail`](../interfaces/exports_model.VariantDetail.md) | the set of equivalent models |
| `recurse` | () => `S`[] | call this function to recurse into variant children |

#### Returns

`S`

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:72
