[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / [ClusterType](../modules/internal_.ClusterType.md) / Of

# Interface: Of\<T\>

[\<internal\>](../modules/internal_.md).[ClusterType](../modules/internal_.ClusterType.md).Of

A fully typed [ClusterType](../modules/internal_.md#clustertype) for an [Options](../modules/internal_.ClusterType.md#options) type.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Options`](../modules/internal_.ClusterType.md#options) |

## Table of contents

### Properties

- [attributes](internal_.ClusterType.Of.md#attributes)
- [base](internal_.ClusterType.Of.md#base)
- [commands](internal_.ClusterType.Of.md#commands)
- [events](internal_.ClusterType.Of.md#events)
- [extensions](internal_.ClusterType.Of.md#extensions)
- [features](internal_.ClusterType.Of.md#features)
- [id](internal_.ClusterType.Of.md#id)
- [name](internal_.ClusterType.Of.md#name)
- [revision](internal_.ClusterType.Of.md#revision)
- [supportedFeatures](internal_.ClusterType.Of.md#supportedfeatures)
- [unknown](internal_.ClusterType.Of.md#unknown)

## Properties

### attributes

• **attributes**: `T`[``"attributes"``] extends `A` ? [`Merge`](../modules/internal_.md#merge)\<`A`, [`GlobalAttributes`](../modules/internal_.md#globalattributes)\<`T`[``"features"``] extends {} ? `any`[`any`] : {}\>\> : {}

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `T`[``"base"``] extends {} ? `any`[`any`] : `undefined`

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `T`[``"commands"``] extends {} ? `any`[`any`] : {}

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `T`[``"events"``] extends {} ? `any`[`any`] : {}

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: `T`[``"extensions"``] extends {} ? `any`[`any`] : `undefined`

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `T`[``"features"``] extends {} ? `any`[`any`] : {}

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/internal_.md#branded)\<`T`[``"id"``], ``"ClusterId"``\>

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: `T`[``"name"``]

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: `T`[``"revision"``]

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `T`[``"supportedFeatures"``] extends {} ? `any`[`any`] : {}

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: `T`[``"unknown"``] extends `boolean` ? `any`[`any`] : ``false``

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:47
