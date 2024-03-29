[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ClusterType](../modules/exports_cluster.ClusterType.md) / Of

# Interface: Of\<T\>

[exports/cluster](../modules/exports_cluster.md).[ClusterType](../modules/exports_cluster.ClusterType.md).Of

A fully typed [ClusterType](../modules/exports_cluster.md#clustertype) for an [Options](../modules/exports_cluster.ClusterType.md#options) type.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Options`](../modules/exports_cluster.ClusterType.md#options) |

## Hierarchy

- **`Of`**

  ↳ [`MutableCluster`](exports_cluster.MutableCluster-1.md)

## Table of contents

### Properties

- [attributes](exports_cluster.ClusterType.Of.md#attributes)
- [base](exports_cluster.ClusterType.Of.md#base)
- [commands](exports_cluster.ClusterType.Of.md#commands)
- [events](exports_cluster.ClusterType.Of.md#events)
- [extensions](exports_cluster.ClusterType.Of.md#extensions)
- [features](exports_cluster.ClusterType.Of.md#features)
- [id](exports_cluster.ClusterType.Of.md#id)
- [name](exports_cluster.ClusterType.Of.md#name)
- [revision](exports_cluster.ClusterType.Of.md#revision)
- [supportedFeatures](exports_cluster.ClusterType.Of.md#supportedfeatures)
- [unknown](exports_cluster.ClusterType.Of.md#unknown)

## Properties

### attributes

• **attributes**: `T`[``"attributes"``] extends `A` ? [`Merge`](../modules/util_export.md#merge)\<`A`, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<`T`[``"features"``] extends {} ? `any`[`any`] : {}\>\> : {}

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `T`[``"base"``] extends {} ? `any`[`any`] : `undefined`

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `T`[``"commands"``] extends {} ? `any`[`any`] : {}

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `T`[``"events"``] extends {} ? `any`[`any`] : {}

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: `T`[``"extensions"``] extends {} ? `any`[`any`] : `undefined`

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `T`[``"features"``] extends {} ? `any`[`any`] : {}

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<`T`[``"id"``], ``"ClusterId"``\>

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: `T`[``"name"``]

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: `T`[``"revision"``]

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `T`[``"supportedFeatures"``] extends {} ? `any`[`any`] : {}

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: `T`[``"unknown"``] extends `boolean` ? `any`[`any`] : ``false``

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47
