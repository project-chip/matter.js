[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ClusterFactory](../modules/cluster_export.ClusterFactory.md) / Extensible

# Interface: Extensible

[cluster/export](../modules/cluster_export.md).[ClusterFactory](../modules/cluster_export.ClusterFactory.md).Extensible

An "extensible" cluster is a base cluster with support for enabling
features.

## Hierarchy

- [`Cluster`](cluster_export.ClusterFactory.Cluster.md)

  ↳ **`Extensible`**

## Table of contents

### Constructors

- [constructor](cluster_export.ClusterFactory.Extensible.md#constructor)

### Properties

- [attributes](cluster_export.ClusterFactory.Extensible.md#attributes)
- [commands](cluster_export.ClusterFactory.Extensible.md#commands)
- [events](cluster_export.ClusterFactory.Extensible.md#events)
- [features](cluster_export.ClusterFactory.Extensible.md#features)
- [id](cluster_export.ClusterFactory.Extensible.md#id)
- [name](cluster_export.ClusterFactory.Extensible.md#name)
- [revision](cluster_export.ClusterFactory.Extensible.md#revision)
- [supportedFeatures](cluster_export.ClusterFactory.Extensible.md#supportedfeatures)
- [unknown](cluster_export.ClusterFactory.Extensible.md#unknown)
- [with](cluster_export.ClusterFactory.Extensible.md#with)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

Cluster.constructor

## Properties

### attributes

• `Readonly` **attributes**: [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)<[`Attribute`](../modules/cluster_export.ClusterFactory.md#attribute)\>

#### Inherited from

[Cluster](cluster_export.ClusterFactory.Cluster.md).[attributes](cluster_export.ClusterFactory.Cluster.md#attributes)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:69](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/ClusterFactory.ts#L69)

___

### commands

• `Readonly` **commands**: [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)<[`Command`](../modules/cluster_export.ClusterFactory.md#command)\>

#### Inherited from

[Cluster](cluster_export.ClusterFactory.Cluster.md).[commands](cluster_export.ClusterFactory.Cluster.md#commands)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:70](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/ClusterFactory.ts#L70)

___

### events

• `Readonly` **events**: [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)<[`Event`](../modules/cluster_export.ClusterFactory.md#event)\>

#### Inherited from

[Cluster](cluster_export.ClusterFactory.Cluster.md).[events](cluster_export.ClusterFactory.Cluster.md#events)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:71](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/ClusterFactory.ts#L71)

___

### features

• `Readonly` **features**: [`BitSchema`](../modules/schema_export.md#bitschema)

#### Inherited from

[Cluster](cluster_export.ClusterFactory.Cluster.md).[features](cluster_export.ClusterFactory.Cluster.md#features)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:93](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/ClusterFactory.ts#L93)

___

### id

• `Readonly` **id**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

[Cluster](cluster_export.ClusterFactory.Cluster.md).[id](cluster_export.ClusterFactory.Cluster.md#id)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:59](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/ClusterFactory.ts#L59)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[Cluster](cluster_export.ClusterFactory.Cluster.md).[name](cluster_export.ClusterFactory.Cluster.md#name)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:60](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/ClusterFactory.ts#L60)

___

### revision

• `Readonly` **revision**: `number`

#### Inherited from

[Cluster](cluster_export.ClusterFactory.Cluster.md).[revision](cluster_export.ClusterFactory.Cluster.md#revision)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:61](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/ClusterFactory.ts#L61)

___

### supportedFeatures

• `Readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<[`BitSchema`](../modules/schema_export.md#bitschema)\>

#### Inherited from

[Cluster](cluster_export.ClusterFactory.Cluster.md).[supportedFeatures](cluster_export.ClusterFactory.Cluster.md#supportedfeatures)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:94](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/ClusterFactory.ts#L94)

___

### unknown

• `Optional` `Readonly` **unknown**: `boolean`

#### Inherited from

[Cluster](cluster_export.ClusterFactory.Cluster.md).[unknown](cluster_export.ClusterFactory.Cluster.md#unknown)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:95](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/ClusterFactory.ts#L95)

___

### with

• **with**: [`Extender`](../modules/cluster_export.ClusterFactory.md#extender)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:149](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/ClusterFactory.ts#L149)
