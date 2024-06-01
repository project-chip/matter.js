[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / ElementModifier

# Class: ElementModifier\<T\>

An "element modifier" mutates cluster elements based on a predefined set of
alterations described in the Matter device library.

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ClusterType`](../interfaces/ClusterType.md) |

## Constructors

### new ElementModifier()

> **new ElementModifier**\<`T`\>(`cluster`): [`ElementModifier`](ElementModifier.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | `T` |

#### Returns

[`ElementModifier`](ElementModifier.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:13

## Properties

### cluster

> **cluster**: `T`

#### Source

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:12

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../namespaces/ElementModifier/README.md#withalterationstalterationst)\<`T`, `AlterationsT`\>

Create a new cluster with modified elements.

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../namespaces/ElementModifier/README.md#alterationsoriginalt)\<`T`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../namespaces/ElementModifier/README.md#withalterationstalterationst)\<`T`, `AlterationsT`\>

#### Source

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:17

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithAlterations`](../namespaces/ElementModifier/README.md#withalterationstalterationst)\<`T`, [`ElementFlagAlterations`](../namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>

Create a new cluster with additional features marked "mandatory".

This informs matter.js that an application supports these elements.

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../namespaces/ElementModifier/README.md#elementflagsclustert)\<`T`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithAlterations`](../namespaces/ElementModifier/README.md#withalterationstalterationst)\<`T`, [`ElementFlagAlterations`](../namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>

#### Source

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:30

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../namespaces/ElementModifier/README.md#withvaluestvaluest)\<`T`, `ValuesT`\>

Create a new cluster with different attribute defaults.

This "sets" the values of attributes when the cluster is created
for the first time with no persistent state.

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `Partial`\<[`RelaxTypes`](../namespaces/ClusterType/README.md#relaxtypesv)\<[`AttributeValues`](../namespaces/ClusterType/README.md#attributevaluest)\<`T`\>\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../namespaces/ElementModifier/README.md#withvaluestvaluest)\<`T`, `ValuesT`\>

#### Source

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:24
