[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MutableCluster](../modules/cluster_export.MutableCluster.md) / Methods

# Interface: Methods\<T\>

[cluster/export](../modules/cluster_export.md).[MutableCluster](../modules/cluster_export.MutableCluster.md).Methods

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](cluster_export.ClusterType-1.md) |

## Hierarchy

- **`Methods`**

  ↳ [`MutableCluster`](cluster_export.MutableCluster-1.md)

## Table of contents

### Methods

- [alter](cluster_export.MutableCluster.Methods.md#alter)
- [enable](cluster_export.MutableCluster.Methods.md#enable)
- [set](cluster_export.MutableCluster.Methods.md#set)
- [with](cluster_export.MutableCluster.Methods.md#with)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`T`, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`T`, `AlterationsT`\>

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<`T`, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<`T`, `FlagsT`\>

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<`T`, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `number` \| [`AttributeValues`](../modules/cluster_export.ClusterType.md#attributevalues)\<`T`\> \| (...`args`: `any`[]) => `any` & `object` & \{ [K in string \| number \| symbol as [AttributesOf\<T\>[K]] extends [Object] ? never : K]: AttributesOf\<T\>[K] extends Object ? T : never } & \{ [K in string \| number \| symbol as [AttributesOf\<T\>[K]] extends [Object] ? K : never]?: AttributesOf\<T\>[K] extends Object ? T : never } \| \{ [K in string \| number \| symbol]: RelaxTypes\<AttributeValues\<T\>[K]\> } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<`T`, `ValuesT`\>

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](../modules/cluster_export.ClusterComposer.md#of)\<`T`, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](../modules/cluster_export.ClusterComposer.md#of)\<`T`, `SelectionT`\>

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
