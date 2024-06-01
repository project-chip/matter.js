[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [MutableCluster](../README.md) / Methods

# Interface: Methods\<T\>

## Extended by

- [`MutableCluster`](../../../interfaces/MutableCluster.md)

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ClusterType`](../../../interfaces/ClusterType.md) |

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<`T`, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<`T`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<`T`, `AlterationsT`\>

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<`T`, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<`T`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<`T`, `FlagsT`\>

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<`T`, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `number` \| `bigint` \| [`AttributeValues`](../../ClusterType/README.md#attributevaluest)\<`T`\> \| (...`args`) => `any` & `object` & \{ \[K in string \| number \| symbol as \[AttributesOf\<T\>\[K\]\] extends \[Object\] ? never : K\]: AttributesOf\<T\>\[K\] extends Object ? T : never \} & \{ \[K in string \| number \| symbol as \[AttributesOf\<T\>\[K\]\] extends \[Object\] ? K : never\]?: AttributesOf\<T\>\[K\] extends Object ? T : never \} \| \{ \[K in string \| number \| symbol\]: RelaxTypes\<AttributeValues\<T\>\[K\]\> \} |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<`T`, `ValuesT`\>

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`Of`](../../ClusterComposer/README.md#ofclustertfeaturest)\<`T`, `SelectionT`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<`T`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`Of`](../../ClusterComposer/README.md#ofclustertfeaturest)\<`T`, `SelectionT`\>

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
