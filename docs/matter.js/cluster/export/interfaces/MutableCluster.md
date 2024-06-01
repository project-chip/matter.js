[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / MutableCluster

# Interface: MutableCluster\<T\>

A "mutable cluster" is a [ClusterType](../README.md#clustertype) with builder methods that support a limited number of modifications as
defined by the Matter specification.

## Extends

- [`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>.[`Methods`](../namespaces/MutableCluster/interfaces/Methods.md)\<[`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Options`](../namespaces/ClusterType/README.md#optionsf) |

## Constructors

## Properties

### attributes

> **attributes**: `T`\[`"attributes"`\] *extends* `A` ? [`Merge`](../../../util/export/README.md#mergeab)\<`A`, [`GlobalAttributes`](../README.md#globalattributesf)\<`T`\[`"features"`\] *extends* `object` ? `any`\[`any`\] : `object`\>\> : `object`

#### Inherited from

[`Of`](../namespaces/ClusterType/interfaces/Of.md).[`attributes`](../namespaces/ClusterType/interfaces/Of.md#attributes)

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L86)

***

### base

> **base**: `T`\[`"base"`\] *extends* `object` ? `any`\[`any`\] : `undefined`

#### Inherited from

[`Of`](../namespaces/ClusterType/interfaces/Of.md).[`base`](../namespaces/ClusterType/interfaces/Of.md#base)

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L92)

***

### commands

> **commands**: `T`\[`"commands"`\] *extends* `object` ? `any`\[`any`\] : `object`

#### Inherited from

[`Of`](../namespaces/ClusterType/interfaces/Of.md).[`commands`](../namespaces/ClusterType/interfaces/Of.md#commands)

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L89)

***

### events

> **events**: `T`\[`"events"`\] *extends* `object` ? `any`\[`any`\] : `object`

#### Inherited from

[`Of`](../namespaces/ClusterType/interfaces/Of.md).[`events`](../namespaces/ClusterType/interfaces/Of.md#events)

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L90)

***

### extensions

> **extensions**: `T`\[`"extensions"`\] *extends* `object` ? `any`\[`any`\] : `undefined`

#### Inherited from

[`Of`](../namespaces/ClusterType/interfaces/Of.md).[`extensions`](../namespaces/ClusterType/interfaces/Of.md#extensions)

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L93)

***

### features

> **features**: `T`\[`"features"`\] *extends* `object` ? `any`\[`any`\] : `object`

#### Inherited from

[`Of`](../namespaces/ClusterType/interfaces/Of.md).[`features`](../namespaces/ClusterType/interfaces/Of.md#features)

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L84)

***

### id

> **id**: [`Branded`](../../../util/export/README.md#brandedtb)\<`T`\[`"id"`\], `"ClusterId"`\>

#### Inherited from

[`Of`](../namespaces/ClusterType/interfaces/Of.md).[`id`](../namespaces/ClusterType/interfaces/Of.md#id)

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L81)

***

### name

> **name**: `T`\[`"name"`\]

#### Inherited from

[`Of`](../namespaces/ClusterType/interfaces/Of.md).[`name`](../namespaces/ClusterType/interfaces/Of.md#name)

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L82)

***

### revision

> **revision**: `T`\[`"revision"`\]

#### Inherited from

[`Of`](../namespaces/ClusterType/interfaces/Of.md).[`revision`](../namespaces/ClusterType/interfaces/Of.md#revision)

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L83)

***

### supportedFeatures

> **supportedFeatures**: `T`\[`"supportedFeatures"`\] *extends* `object` ? `any`\[`any`\] : `object`

#### Inherited from

[`Of`](../namespaces/ClusterType/interfaces/Of.md).[`supportedFeatures`](../namespaces/ClusterType/interfaces/Of.md#supportedfeatures)

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L85)

***

### unknown

> **unknown**: `T`\[`"unknown"`\] *extends* `boolean` ? `any`\[`any`\] : `false`

#### Inherited from

[`Of`](../namespaces/ClusterType/interfaces/Of.md).[`unknown`](../namespaces/ClusterType/interfaces/Of.md#unknown)

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../namespaces/ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>, `AlterationsT`\>

#### Inherited from

[`Methods`](../namespaces/MutableCluster/interfaces/Methods.md).[`alter`](../namespaces/MutableCluster/interfaces/Methods.md#alter)

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../namespaces/ElementModifier/README.md#withflagstflagst)\<[`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../namespaces/ElementModifier/README.md#elementflagsclustert)\<[`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../namespaces/ElementModifier/README.md#withflagstflagst)\<[`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>, `FlagsT`\>

#### Inherited from

[`Methods`](../namespaces/MutableCluster/interfaces/Methods.md).[`enable`](../namespaces/MutableCluster/interfaces/Methods.md#enable)

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../namespaces/ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `number` \| `bigint` \| [`AttributeValues`](../namespaces/ClusterType/README.md#attributevaluest)\<[`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>\> \| (...`args`) => `any` & `object` & \{ \[K in string \| number \| symbol as \[\{ -readonly \[K in string \| number \| symbol as string extends K ? never : K extends keyof GlobalAttributes\<(...)\> ? never : K\]: (T\["attributes"\] extends A ? Merge\<A, GlobalAttributes\<(...)\>\> : Object)\[K\] \}\[K\]\] extends \[Object\] ? never : K\]: \{ -readonly \[K in string \| number \| symbol as string extends K ? never : K extends keyof GlobalAttributes\<any\> ? never : K\]: (T\["attributes"\] extends A ? Merge\<A, GlobalAttributes\<(...) extends (...) ? (...) : (...)\>\> : Object)\[K\] \}\[K\] extends Object ? T : never \} & \{ \[K in string \| number \| symbol as \[\{ -readonly \[K in string \| number \| symbol as string extends K ? never : K extends keyof GlobalAttributes\<(...)\> ? never : K\]: (T\["attributes"\] extends A ? Merge\<A, GlobalAttributes\<(...)\>\> : Object)\[K\] \}\[K\]\] extends \[Object\] ? K : never\]?: \{ -readonly \[K in string \| number \| symbol as string extends K ? never : K extends keyof GlobalAttributes\<(...)\> ? never : K\]: (T\["attributes"\] extends A ? Merge\<A, GlobalAttributes\<(...)\>\> : Object)\[K\] \}\[K\] extends Object ? T : never \} \| \{ \[K in string \| number \| symbol\]: RelaxTypes\<AttributeValues\<Of\<T\>\>\[K\]\> \} |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../namespaces/ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>, `ValuesT`\>

#### Inherited from

[`Methods`](../namespaces/MutableCluster/interfaces/Methods.md).[`set`](../namespaces/MutableCluster/interfaces/Methods.md#set)

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`Of`](../namespaces/ClusterComposer/README.md#ofclustertfeaturest)\<[`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../namespaces/ClusterComposer/README.md#featureselectiont)\<[`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`Of`](../namespaces/ClusterComposer/README.md#ofclustertfeaturest)\<[`Of`](../namespaces/ClusterType/interfaces/Of.md)\<`T`\>, `SelectionT`\>

#### Inherited from

[`Methods`](../namespaces/MutableCluster/interfaces/Methods.md).[`with`](../namespaces/MutableCluster/interfaces/Methods.md#with)

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
