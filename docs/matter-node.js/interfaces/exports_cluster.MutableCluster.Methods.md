[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [MutableCluster](../modules/exports_cluster.MutableCluster.md) / Methods

# Interface: Methods\<T\>

[exports/cluster](../modules/exports_cluster.md).[MutableCluster](../modules/exports_cluster.MutableCluster.md).Methods

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](exports_cluster.ClusterType-1.md) |

## Hierarchy

- **`Methods`**

  ↳ [`MutableCluster`](exports_cluster.MutableCluster-1.md)

## Table of contents

### Methods

- [alter](exports_cluster.MutableCluster.Methods.md#alter)
- [enable](exports_cluster.MutableCluster.Methods.md#enable)
- [set](exports_cluster.MutableCluster.Methods.md#set)
- [with](exports_cluster.MutableCluster.Methods.md#with)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<`T`, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<`T`, `AlterationsT`\>

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<`T`, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<`T`, `FlagsT`\>

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<`T`, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `number` \| [`AttributeValues`](../modules/exports_cluster.ClusterType.md#attributevalues)\<`T`\> \| (...`args`: `any`[]) => `any` & `object` & \{ [K in string \| number \| symbol as [AttributesOf\<T\>[K]] extends [Object] ? never : K]: AttributesOf\<T\>[K] extends Object ? T : never } & \{ [K in string \| number \| symbol as [AttributesOf\<T\>[K]] extends [Object] ? K : never]?: AttributesOf\<T\>[K] extends Object ? T : never } \| \{ [K in string \| number \| symbol]: RelaxTypes\<AttributeValues\<T\>[K]\> } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<`T`, `ValuesT`\>

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](../modules/exports_cluster.ClusterComposer.md#of)\<`T`, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](../modules/exports_cluster.ClusterComposer.md#of)\<`T`, `SelectionT`\>

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
