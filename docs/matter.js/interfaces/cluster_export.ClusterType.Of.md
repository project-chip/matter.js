[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ClusterType](../modules/cluster_export.ClusterType.md) / Of

# Interface: Of\<T\>

[cluster/export](../modules/cluster_export.md).[ClusterType](../modules/cluster_export.ClusterType.md).Of

A fully typed [ClusterType](../modules/cluster_export.md#clustertype) for an [Options](../modules/cluster_export.ClusterType.md#options) type.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Options`](../modules/cluster_export.ClusterType.md#options) |

## Hierarchy

- **`Of`**

  ↳ [`MutableCluster`](cluster_export.MutableCluster-1.md)

## Table of contents

### Properties

- [attributes](cluster_export.ClusterType.Of.md#attributes)
- [base](cluster_export.ClusterType.Of.md#base)
- [commands](cluster_export.ClusterType.Of.md#commands)
- [events](cluster_export.ClusterType.Of.md#events)
- [extensions](cluster_export.ClusterType.Of.md#extensions)
- [features](cluster_export.ClusterType.Of.md#features)
- [id](cluster_export.ClusterType.Of.md#id)
- [name](cluster_export.ClusterType.Of.md#name)
- [revision](cluster_export.ClusterType.Of.md#revision)
- [supportedFeatures](cluster_export.ClusterType.Of.md#supportedfeatures)
- [unknown](cluster_export.ClusterType.Of.md#unknown)

## Properties

### attributes

• **attributes**: `T`[``"attributes"``] extends `A` ? [`Merge`](../modules/util_export.md#merge)\<`A`, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<`T`[``"features"``] extends {} ? `any`[`any`] : {}\>\> : {}

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `T`[``"base"``] extends {} ? `any`[`any`] : `undefined`

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `T`[``"commands"``] extends {} ? `any`[`any`] : {}

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `T`[``"events"``] extends {} ? `any`[`any`] : {}

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: `T`[``"extensions"``] extends {} ? `any`[`any`] : `undefined`

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `T`[``"features"``] extends {} ? `any`[`any`] : {}

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<`T`[``"id"``], ``"ClusterId"``\>

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: `T`[``"name"``]

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: `T`[``"revision"``]

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `T`[``"supportedFeatures"``] extends {} ? `any`[`any`] : {}

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: `T`[``"unknown"``] extends `boolean` ? `any`[`any`] : ``false``

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)
