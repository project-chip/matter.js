[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ClusterFactory](../modules/exports_cluster.ClusterFactory.md) / Extensible

# Interface: Extensible

[exports/cluster](../modules/exports_cluster.md).[ClusterFactory](../modules/exports_cluster.ClusterFactory.md).Extensible

An "extensible" cluster is a base cluster with support for enabling
features.

## Hierarchy

- [`Cluster`](exports_cluster.ClusterFactory.Cluster.md)

  ↳ **`Extensible`**

## Table of contents

### Constructors

- [constructor](exports_cluster.ClusterFactory.Extensible.md#constructor)

### Properties

- [attributes](exports_cluster.ClusterFactory.Extensible.md#attributes)
- [commands](exports_cluster.ClusterFactory.Extensible.md#commands)
- [events](exports_cluster.ClusterFactory.Extensible.md#events)
- [features](exports_cluster.ClusterFactory.Extensible.md#features)
- [id](exports_cluster.ClusterFactory.Extensible.md#id)
- [name](exports_cluster.ClusterFactory.Extensible.md#name)
- [revision](exports_cluster.ClusterFactory.Extensible.md#revision)
- [supportedFeatures](exports_cluster.ClusterFactory.Extensible.md#supportedfeatures)
- [unknown](exports_cluster.ClusterFactory.Extensible.md#unknown)
- [with](exports_cluster.ClusterFactory.Extensible.md#with)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

Cluster.constructor

## Properties

### attributes

• `Readonly` **attributes**: [`ElementSet`](../modules/exports_cluster.ClusterFactory.md#elementset)\<[`Attribute`](../modules/exports_cluster.ClusterFactory.md#attribute)\>

#### Inherited from

[Cluster](exports_cluster.ClusterFactory.Cluster.md).[attributes](exports_cluster.ClusterFactory.Cluster.md#attributes)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:55

___

### commands

• `Readonly` **commands**: [`ElementSet`](../modules/exports_cluster.ClusterFactory.md#elementset)\<[`Command`](../modules/exports_cluster.ClusterFactory.md#command)\>

#### Inherited from

[Cluster](exports_cluster.ClusterFactory.Cluster.md).[commands](exports_cluster.ClusterFactory.Cluster.md#commands)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:56

___

### events

• `Readonly` **events**: [`ElementSet`](../modules/exports_cluster.ClusterFactory.md#elementset)\<[`Event`](../modules/exports_cluster.ClusterFactory.md#event)\>

#### Inherited from

[Cluster](exports_cluster.ClusterFactory.Cluster.md).[events](exports_cluster.ClusterFactory.Cluster.md#events)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:57

___

### features

• `Readonly` **features**: [`BitSchema`](../modules/exports_schema.md#bitschema)

#### Inherited from

[Cluster](exports_cluster.ClusterFactory.Cluster.md).[features](exports_cluster.ClusterFactory.Cluster.md#features)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:77

___

### id

• `Readonly` **id**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Inherited from

[Cluster](exports_cluster.ClusterFactory.Cluster.md).[id](exports_cluster.ClusterFactory.Cluster.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:46

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[Cluster](exports_cluster.ClusterFactory.Cluster.md).[name](exports_cluster.ClusterFactory.Cluster.md#name)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:47

___

### revision

• `Readonly` **revision**: `number`

#### Inherited from

[Cluster](exports_cluster.ClusterFactory.Cluster.md).[revision](exports_cluster.ClusterFactory.Cluster.md#revision)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:48

___

### supportedFeatures

• `Readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>

#### Inherited from

[Cluster](exports_cluster.ClusterFactory.Cluster.md).[supportedFeatures](exports_cluster.ClusterFactory.Cluster.md#supportedfeatures)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:78

___

### unknown

• `Optional` `Readonly` **unknown**: `boolean`

#### Inherited from

[Cluster](exports_cluster.ClusterFactory.Cluster.md).[unknown](exports_cluster.ClusterFactory.Cluster.md#unknown)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:79

___

### with

• **with**: [`Extender`](../modules/exports_cluster.ClusterFactory.md#extender)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:127
