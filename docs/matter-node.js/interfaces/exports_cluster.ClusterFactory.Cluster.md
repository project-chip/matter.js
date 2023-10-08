[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ClusterFactory](../modules/exports_cluster.ClusterFactory.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[ClusterFactory](../modules/exports_cluster.ClusterFactory.md).Cluster

A Cluster represents a fully formed cluster with features selected.

## Hierarchy

- [`Identity`](exports_cluster.ClusterFactory.Identity.md)

- [`Features`](exports_cluster.ClusterFactory.Features.md)<[`BitSchema`](../modules/exports_schema.md#bitschema)\>

- [`ClusterElements`](exports_cluster.ClusterFactory.ClusterElements.md)

  ↳ **`Cluster`**

  ↳↳ [`Extensible`](exports_cluster.ClusterFactory.Extensible.md)

## Table of contents

### Properties

- [attributes](exports_cluster.ClusterFactory.Cluster.md#attributes)
- [commands](exports_cluster.ClusterFactory.Cluster.md#commands)
- [events](exports_cluster.ClusterFactory.Cluster.md#events)
- [features](exports_cluster.ClusterFactory.Cluster.md#features)
- [id](exports_cluster.ClusterFactory.Cluster.md#id)
- [name](exports_cluster.ClusterFactory.Cluster.md#name)
- [revision](exports_cluster.ClusterFactory.Cluster.md#revision)
- [supportedFeatures](exports_cluster.ClusterFactory.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.ClusterFactory.Cluster.md#unknown)

## Properties

### attributes

• `Readonly` **attributes**: [`ElementSet`](../modules/exports_cluster.ClusterFactory.md#elementset)<[`Attribute`](../modules/exports_cluster.ClusterFactory.md#attribute)\>

#### Inherited from

[ClusterElements](exports_cluster.ClusterFactory.ClusterElements.md).[attributes](exports_cluster.ClusterFactory.ClusterElements.md#attributes)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:55

___

### commands

• `Readonly` **commands**: [`ElementSet`](../modules/exports_cluster.ClusterFactory.md#elementset)<[`Command`](../modules/exports_cluster.ClusterFactory.md#command)\>

#### Inherited from

[ClusterElements](exports_cluster.ClusterFactory.ClusterElements.md).[commands](exports_cluster.ClusterFactory.ClusterElements.md#commands)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:56

___

### events

• `Readonly` **events**: [`ElementSet`](../modules/exports_cluster.ClusterFactory.md#elementset)<[`Event`](../modules/exports_cluster.ClusterFactory.md#event)\>

#### Inherited from

[ClusterElements](exports_cluster.ClusterFactory.ClusterElements.md).[events](exports_cluster.ClusterFactory.ClusterElements.md#events)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:57

___

### features

• `Readonly` **features**: [`BitSchema`](../modules/exports_schema.md#bitschema)

#### Inherited from

[Features](exports_cluster.ClusterFactory.Features.md).[features](exports_cluster.ClusterFactory.Features.md#features)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:77

___

### id

• `Readonly` **id**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Inherited from

[Identity](exports_cluster.ClusterFactory.Identity.md).[id](exports_cluster.ClusterFactory.Identity.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:46

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[Identity](exports_cluster.ClusterFactory.Identity.md).[name](exports_cluster.ClusterFactory.Identity.md#name)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:47

___

### revision

• `Readonly` **revision**: `number`

#### Inherited from

[Identity](exports_cluster.ClusterFactory.Identity.md).[revision](exports_cluster.ClusterFactory.Identity.md#revision)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:48

___

### supportedFeatures

• `Readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<[`BitSchema`](../modules/exports_schema.md#bitschema)\>

#### Inherited from

[Features](exports_cluster.ClusterFactory.Features.md).[supportedFeatures](exports_cluster.ClusterFactory.Features.md#supportedfeatures)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:78

___

### unknown

• `Optional` `Readonly` **unknown**: `boolean`

#### Inherited from

[Features](exports_cluster.ClusterFactory.Features.md).[unknown](exports_cluster.ClusterFactory.Features.md#unknown)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:79
