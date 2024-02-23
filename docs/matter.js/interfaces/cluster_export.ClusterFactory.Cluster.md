[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ClusterFactory](../modules/cluster_export.ClusterFactory.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[ClusterFactory](../modules/cluster_export.ClusterFactory.md).Cluster

A Cluster represents a fully formed cluster with features selected.

## Hierarchy

- [`Identity`](cluster_export.ClusterFactory.Identity.md)

- [`Features`](cluster_export.ClusterFactory.Features.md)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>

- [`ClusterElements`](cluster_export.ClusterFactory.ClusterElements.md)

  ↳ **`Cluster`**

  ↳↳ [`Extensible`](cluster_export.ClusterFactory.Extensible.md)

## Table of contents

### Properties

- [attributes](cluster_export.ClusterFactory.Cluster.md#attributes)
- [commands](cluster_export.ClusterFactory.Cluster.md#commands)
- [events](cluster_export.ClusterFactory.Cluster.md#events)
- [features](cluster_export.ClusterFactory.Cluster.md#features)
- [id](cluster_export.ClusterFactory.Cluster.md#id)
- [name](cluster_export.ClusterFactory.Cluster.md#name)
- [revision](cluster_export.ClusterFactory.Cluster.md#revision)
- [supportedFeatures](cluster_export.ClusterFactory.Cluster.md#supportedfeatures)
- [unknown](cluster_export.ClusterFactory.Cluster.md#unknown)

## Properties

### attributes

• `Readonly` **attributes**: [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)\<[`Attribute`](../modules/cluster_export.ClusterFactory.md#attribute)\>

#### Inherited from

[ClusterElements](cluster_export.ClusterFactory.ClusterElements.md).[attributes](cluster_export.ClusterFactory.ClusterElements.md#attributes)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:69](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/ClusterFactory.ts#L69)

___

### commands

• `Readonly` **commands**: [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)\<[`Command`](../modules/cluster_export.ClusterFactory.md#command)\>

#### Inherited from

[ClusterElements](cluster_export.ClusterFactory.ClusterElements.md).[commands](cluster_export.ClusterFactory.ClusterElements.md#commands)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:70](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/ClusterFactory.ts#L70)

___

### events

• `Readonly` **events**: [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)\<[`Event`](../modules/cluster_export.ClusterFactory.md#event)\>

#### Inherited from

[ClusterElements](cluster_export.ClusterFactory.ClusterElements.md).[events](cluster_export.ClusterFactory.ClusterElements.md#events)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:71](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/ClusterFactory.ts#L71)

___

### features

• `Readonly` **features**: [`BitSchema`](../modules/schema_export.md#bitschema)

#### Inherited from

[Features](cluster_export.ClusterFactory.Features.md).[features](cluster_export.ClusterFactory.Features.md#features)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:93](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/ClusterFactory.ts#L93)

___

### id

• `Readonly` **id**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

[Identity](cluster_export.ClusterFactory.Identity.md).[id](cluster_export.ClusterFactory.Identity.md#id)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:59](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/ClusterFactory.ts#L59)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[Identity](cluster_export.ClusterFactory.Identity.md).[name](cluster_export.ClusterFactory.Identity.md#name)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:60](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/ClusterFactory.ts#L60)

___

### revision

• `Readonly` **revision**: `number`

#### Inherited from

[Identity](cluster_export.ClusterFactory.Identity.md).[revision](cluster_export.ClusterFactory.Identity.md#revision)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:61](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/ClusterFactory.ts#L61)

___

### supportedFeatures

• `Readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>

#### Inherited from

[Features](cluster_export.ClusterFactory.Features.md).[supportedFeatures](cluster_export.ClusterFactory.Features.md#supportedfeatures)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:94](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/ClusterFactory.ts#L94)

___

### unknown

• `Optional` `Readonly` **unknown**: `boolean`

#### Inherited from

[Features](cluster_export.ClusterFactory.Features.md).[unknown](cluster_export.ClusterFactory.Features.md#unknown)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:95](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/ClusterFactory.ts#L95)
