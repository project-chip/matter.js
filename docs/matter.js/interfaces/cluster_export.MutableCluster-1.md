[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / MutableCluster

# Interface: MutableCluster\<T\>

[cluster/export](../modules/cluster_export.md).MutableCluster

A "mutable cluster" is a [ClusterType](../modules/cluster_export.md#clustertype) with builder methods that support a limited number of modifications as
defined by the Matter specification.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Options`](../modules/cluster_export.ClusterType.md#options) |

## Hierarchy

- [`Of`](cluster_export.ClusterType.Of.md)\<`T`\>

- [`Methods`](cluster_export.MutableCluster.Methods.md)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>\>

  ↳ **`MutableCluster`**

## Table of contents

### Constructors

- [constructor](cluster_export.MutableCluster-1.md#constructor)

### Properties

- [attributes](cluster_export.MutableCluster-1.md#attributes)
- [base](cluster_export.MutableCluster-1.md#base)
- [commands](cluster_export.MutableCluster-1.md#commands)
- [events](cluster_export.MutableCluster-1.md#events)
- [extensions](cluster_export.MutableCluster-1.md#extensions)
- [features](cluster_export.MutableCluster-1.md#features)
- [id](cluster_export.MutableCluster-1.md#id)
- [name](cluster_export.MutableCluster-1.md#name)
- [revision](cluster_export.MutableCluster-1.md#revision)
- [supportedFeatures](cluster_export.MutableCluster-1.md#supportedfeatures)
- [unknown](cluster_export.MutableCluster-1.md#unknown)

### Methods

- [alter](cluster_export.MutableCluster-1.md#alter)
- [enable](cluster_export.MutableCluster-1.md#enable)
- [set](cluster_export.MutableCluster-1.md#set)
- [with](cluster_export.MutableCluster-1.md#with)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

ClusterType.Of\<T\>.constructor

## Properties

### attributes

• **attributes**: `T`[``"attributes"``] extends `A` ? [`Merge`](../modules/util_export.md#merge)\<`A`, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<`T`[``"features"``] extends {} ? `any`[`any`] : {}\>\> : {}

#### Inherited from

[Of](cluster_export.ClusterType.Of.md).[attributes](cluster_export.ClusterType.Of.md#attributes)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `T`[``"base"``] extends {} ? `any`[`any`] : `undefined`

#### Inherited from

[Of](cluster_export.ClusterType.Of.md).[base](cluster_export.ClusterType.Of.md#base)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `T`[``"commands"``] extends {} ? `any`[`any`] : {}

#### Inherited from

[Of](cluster_export.ClusterType.Of.md).[commands](cluster_export.ClusterType.Of.md#commands)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `T`[``"events"``] extends {} ? `any`[`any`] : {}

#### Inherited from

[Of](cluster_export.ClusterType.Of.md).[events](cluster_export.ClusterType.Of.md#events)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: `T`[``"extensions"``] extends {} ? `any`[`any`] : `undefined`

#### Inherited from

[Of](cluster_export.ClusterType.Of.md).[extensions](cluster_export.ClusterType.Of.md#extensions)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `T`[``"features"``] extends {} ? `any`[`any`] : {}

#### Inherited from

[Of](cluster_export.ClusterType.Of.md).[features](cluster_export.ClusterType.Of.md#features)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<`T`[``"id"``], ``"ClusterId"``\>

#### Inherited from

[Of](cluster_export.ClusterType.Of.md).[id](cluster_export.ClusterType.Of.md#id)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: `T`[``"name"``]

#### Inherited from

[Of](cluster_export.ClusterType.Of.md).[name](cluster_export.ClusterType.Of.md#name)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: `T`[``"revision"``]

#### Inherited from

[Of](cluster_export.ClusterType.Of.md).[revision](cluster_export.ClusterType.Of.md#revision)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `T`[``"supportedFeatures"``] extends {} ? `any`[`any`] : {}

#### Inherited from

[Of](cluster_export.ClusterType.Of.md).[supportedFeatures](cluster_export.ClusterType.Of.md#supportedfeatures)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: `T`[``"unknown"``] extends `boolean` ? `any`[`any`] : ``false``

#### Inherited from

[Of](cluster_export.ClusterType.Of.md).[unknown](cluster_export.ClusterType.Of.md#unknown)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>, `AlterationsT`\>

#### Inherited from

[Methods](cluster_export.MutableCluster.Methods.md).[alter](cluster_export.MutableCluster.Methods.md#alter)

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>, `FlagsT`\>

#### Inherited from

[Methods](cluster_export.MutableCluster.Methods.md).[enable](cluster_export.MutableCluster.Methods.md#enable)

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `number` \| [`AttributeValues`](../modules/cluster_export.ClusterType.md#attributevalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>\> \| (...`args`: `any`[]) => `any` & `object` & \{ [K in string \| number \| symbol as [\{ -readonly [K in string \| number \| symbol as string extends K ? never : K extends keyof GlobalAttributes\<(...)\> ? never : K]: (T["attributes"] extends A ? Merge\<A, GlobalAttributes\<(...)\>\> : Object)[K] }[K]] extends [Object] ? never : K]: \{ -readonly [K in string \| number \| symbol as string extends K ? never : K extends keyof GlobalAttributes\<any\> ? never : K]: (T["attributes"] extends A ? Merge\<A, GlobalAttributes\<(...) extends (...) ? (...) : (...)\>\> : Object)[K] }[K] extends Object ? T : never } & \{ [K in string \| number \| symbol as [\{ -readonly [K in string \| number \| symbol as string extends K ? never : K extends keyof GlobalAttributes\<(...)\> ? never : K]: (T["attributes"] extends A ? Merge\<A, GlobalAttributes\<(...)\>\> : Object)[K] }[K]] extends [Object] ? K : never]?: \{ -readonly [K in string \| number \| symbol as string extends K ? never : K extends keyof GlobalAttributes\<(...)\> ? never : K]: (T["attributes"] extends A ? Merge\<A, GlobalAttributes\<(...)\>\> : Object)[K] }[K] extends Object ? T : never } \| \{ [K in string \| number \| symbol]: RelaxTypes\<AttributeValues\<Of\<T\>\>[K]\> } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>, `ValuesT`\>

#### Inherited from

[Methods](cluster_export.MutableCluster.Methods.md).[set](cluster_export.MutableCluster.Methods.md#set)

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](../modules/cluster_export.ClusterComposer.md#of)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](../modules/cluster_export.ClusterComposer.md#of)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>, `SelectionT`\>

#### Inherited from

[Methods](cluster_export.MutableCluster.Methods.md).[with](cluster_export.MutableCluster.Methods.md#with)

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
