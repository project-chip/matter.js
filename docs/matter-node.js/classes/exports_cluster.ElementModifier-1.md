[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ElementModifier

# Class: ElementModifier\<T\>

[exports/cluster](../modules/exports_cluster.md).ElementModifier

An "element modifier" mutates cluster elements based on a predefined set of
alterations described in the Matter device library.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |

## Table of contents

### Constructors

- [constructor](exports_cluster.ElementModifier-1.md#constructor)

### Properties

- [cluster](exports_cluster.ElementModifier-1.md#cluster)

### Methods

- [alter](exports_cluster.ElementModifier-1.md#alter)
- [enable](exports_cluster.ElementModifier-1.md#enable)
- [set](exports_cluster.ElementModifier-1.md#set)

## Constructors

### constructor

• **new ElementModifier**\<`T`\>(`cluster`): [`ElementModifier`](exports_cluster.ElementModifier-1.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | `T` |

#### Returns

[`ElementModifier`](exports_cluster.ElementModifier-1.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:13

## Properties

### cluster

• **cluster**: `T`

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:12

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<`T`, `AlterationsT`\>

Create a new cluster with modified elements.

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

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:17

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<`T`, [`ElementFlagAlterations`](../modules/exports_cluster.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>

Create a new cluster with additional features marked "mandatory".

This informs matter.js that an application supports these elements.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<`T`, [`ElementFlagAlterations`](../modules/exports_cluster.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:30

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<`T`, `ValuesT`\>

Create a new cluster with different attribute defaults.

This "sets" the values of attributes when the cluster is created
for the first time with no persistent state.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Partial`\<[`RelaxTypes`](../modules/exports_cluster.ClusterType.md#relaxtypes)\<[`AttributeValues`](../modules/exports_cluster.ClusterType.md#attributevalues)\<`T`\>\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<`T`, `ValuesT`\>

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:24
