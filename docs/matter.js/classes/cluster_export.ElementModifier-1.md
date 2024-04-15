[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ElementModifier

# Class: ElementModifier\<T\>

[cluster/export](../modules/cluster_export.md).ElementModifier

An "element modifier" mutates cluster elements based on a predefined set of
alterations described in the Matter device library.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

## Table of contents

### Constructors

- [constructor](cluster_export.ElementModifier-1.md#constructor)

### Properties

- [cluster](cluster_export.ElementModifier-1.md#cluster)

### Methods

- [alter](cluster_export.ElementModifier-1.md#alter)
- [enable](cluster_export.ElementModifier-1.md#enable)
- [set](cluster_export.ElementModifier-1.md#set)

## Constructors

### constructor

• **new ElementModifier**\<`T`\>(`cluster`): [`ElementModifier`](cluster_export.ElementModifier-1.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | `T` |

#### Returns

[`ElementModifier`](cluster_export.ElementModifier-1.md)\<`T`\>

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L14)

## Properties

### cluster

• **cluster**: `T`

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L14)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`T`, `AlterationsT`\>

Create a new cluster with modified elements.

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

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L19)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`T`, [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>

Create a new cluster with additional features marked "mandatory".

This informs matter.js that an application supports these elements.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`T`, [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L44)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<`T`, `ValuesT`\>

Create a new cluster with different attribute defaults.

This "sets" the values of attributes when the cluster is created
for the first time with no persistent state.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Partial`\<[`RelaxTypes`](../modules/cluster_export.ClusterType.md#relaxtypes)\<[`AttributeValues`](../modules/cluster_export.ClusterType.md#attributevalues)\<`T`\>\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<`T`, `ValuesT`\>

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L33)
