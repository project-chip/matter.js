[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / MutableCluster

# Interface: MutableCluster\<T\>

[exports/cluster](../modules/exports_cluster.md).MutableCluster

A "mutable cluster" is a [ClusterType](../modules/exports_cluster.md#clustertype) with builder methods that support a limited number of modifications as
defined by the Matter specification.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Options`](../modules/exports_cluster.ClusterType.md#options) |

## Hierarchy

- [`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>

- [`Methods`](exports_cluster.MutableCluster.Methods.md)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>\>

  ↳ **`MutableCluster`**

## Table of contents

### Constructors

- [constructor](exports_cluster.MutableCluster-1.md#constructor)

### Properties

- [attributes](exports_cluster.MutableCluster-1.md#attributes)
- [base](exports_cluster.MutableCluster-1.md#base)
- [commands](exports_cluster.MutableCluster-1.md#commands)
- [events](exports_cluster.MutableCluster-1.md#events)
- [extensions](exports_cluster.MutableCluster-1.md#extensions)
- [features](exports_cluster.MutableCluster-1.md#features)
- [id](exports_cluster.MutableCluster-1.md#id)
- [name](exports_cluster.MutableCluster-1.md#name)
- [revision](exports_cluster.MutableCluster-1.md#revision)
- [supportedFeatures](exports_cluster.MutableCluster-1.md#supportedfeatures)
- [unknown](exports_cluster.MutableCluster-1.md#unknown)

### Methods

- [alter](exports_cluster.MutableCluster-1.md#alter)
- [enable](exports_cluster.MutableCluster-1.md#enable)
- [set](exports_cluster.MutableCluster-1.md#set)
- [with](exports_cluster.MutableCluster-1.md#with)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

ClusterType.Of\<T\>.constructor

## Properties

### attributes

• **attributes**: `T`[``"attributes"``] extends `A` ? [`Merge`](../modules/util_export.md#merge)\<`A`, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<`T`[``"features"``] extends {} ? `any`[`any`] : {}\>\> : {}

#### Inherited from

[Of](exports_cluster.ClusterType.Of.md).[attributes](exports_cluster.ClusterType.Of.md#attributes)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `T`[``"base"``] extends {} ? `any`[`any`] : `undefined`

#### Inherited from

[Of](exports_cluster.ClusterType.Of.md).[base](exports_cluster.ClusterType.Of.md#base)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `T`[``"commands"``] extends {} ? `any`[`any`] : {}

#### Inherited from

[Of](exports_cluster.ClusterType.Of.md).[commands](exports_cluster.ClusterType.Of.md#commands)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `T`[``"events"``] extends {} ? `any`[`any`] : {}

#### Inherited from

[Of](exports_cluster.ClusterType.Of.md).[events](exports_cluster.ClusterType.Of.md#events)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: `T`[``"extensions"``] extends {} ? `any`[`any`] : `undefined`

#### Inherited from

[Of](exports_cluster.ClusterType.Of.md).[extensions](exports_cluster.ClusterType.Of.md#extensions)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `T`[``"features"``] extends {} ? `any`[`any`] : {}

#### Inherited from

[Of](exports_cluster.ClusterType.Of.md).[features](exports_cluster.ClusterType.Of.md#features)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<`T`[``"id"``], ``"ClusterId"``\>

#### Inherited from

[Of](exports_cluster.ClusterType.Of.md).[id](exports_cluster.ClusterType.Of.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: `T`[``"name"``]

#### Inherited from

[Of](exports_cluster.ClusterType.Of.md).[name](exports_cluster.ClusterType.Of.md#name)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: `T`[``"revision"``]

#### Inherited from

[Of](exports_cluster.ClusterType.Of.md).[revision](exports_cluster.ClusterType.Of.md#revision)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `T`[``"supportedFeatures"``] extends {} ? `any`[`any`] : {}

#### Inherited from

[Of](exports_cluster.ClusterType.Of.md).[supportedFeatures](exports_cluster.ClusterType.Of.md#supportedfeatures)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: `T`[``"unknown"``] extends `boolean` ? `any`[`any`] : ``false``

#### Inherited from

[Of](exports_cluster.ClusterType.Of.md).[unknown](exports_cluster.ClusterType.Of.md#unknown)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>, `AlterationsT`\>

#### Inherited from

[Methods](exports_cluster.MutableCluster.Methods.md).[alter](exports_cluster.MutableCluster.Methods.md#alter)

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>, `FlagsT`\>

#### Inherited from

[Methods](exports_cluster.MutableCluster.Methods.md).[enable](exports_cluster.MutableCluster.Methods.md#enable)

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `number` \| [`AttributeValues`](../modules/exports_cluster.ClusterType.md#attributevalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>\> \| (...`args`: `any`[]) => `any` & `object` & \{ [K in string \| number \| symbol as [\{ -readonly [K in string \| number \| symbol as string extends K ? never : K extends keyof GlobalAttributes\<(...)\> ? never : K]: (T["attributes"] extends A ? Merge\<A, GlobalAttributes\<(...)\>\> : Object)[K] }[K]] extends [Object] ? never : K]: \{ -readonly [K in string \| number \| symbol as string extends K ? never : K extends keyof GlobalAttributes\<any\> ? never : K]: (T["attributes"] extends A ? Merge\<A, GlobalAttributes\<(...) extends (...) ? (...) : (...)\>\> : Object)[K] }[K] extends Object ? T : never } & \{ [K in string \| number \| symbol as [\{ -readonly [K in string \| number \| symbol as string extends K ? never : K extends keyof GlobalAttributes\<(...)\> ? never : K]: (T["attributes"] extends A ? Merge\<A, GlobalAttributes\<(...)\>\> : Object)[K] }[K]] extends [Object] ? K : never]?: \{ -readonly [K in string \| number \| symbol as string extends K ? never : K extends keyof GlobalAttributes\<(...)\> ? never : K]: (T["attributes"] extends A ? Merge\<A, GlobalAttributes\<(...)\>\> : Object)[K] }[K] extends Object ? T : never } \| \{ [K in string \| number \| symbol]: RelaxTypes\<AttributeValues\<Of\<T\>\>[K]\> } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>, `ValuesT`\>

#### Inherited from

[Methods](exports_cluster.MutableCluster.Methods.md).[set](exports_cluster.MutableCluster.Methods.md#set)

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](../modules/exports_cluster.ClusterComposer.md#of)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](../modules/exports_cluster.ClusterComposer.md#of)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>, `SelectionT`\>

#### Inherited from

[Methods](exports_cluster.MutableCluster.Methods.md).[with](exports_cluster.MutableCluster.Methods.md#with)

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
