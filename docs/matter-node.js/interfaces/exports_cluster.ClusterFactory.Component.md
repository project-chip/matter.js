[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ClusterFactory](../modules/exports_cluster.ClusterFactory.md) / Component

# Interface: Component

[exports/cluster](../modules/exports_cluster.md).[ClusterFactory](../modules/exports_cluster.ClusterFactory.md).Component

A cluster "component" is a set of elements intended to be added to a
cluster definition.

## Hierarchy

- [`ClusterElements`](exports_cluster.ClusterFactory.ClusterElements.md)

  ↳ **`Component`**

## Table of contents

### Constructors

- [constructor](exports_cluster.ClusterFactory.Component.md#constructor)

### Properties

- [attributes](exports_cluster.ClusterFactory.Component.md#attributes)
- [commands](exports_cluster.ClusterFactory.Component.md#commands)
- [events](exports_cluster.ClusterFactory.Component.md#events)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

ClusterElements.constructor

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
