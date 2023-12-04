[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ClusterFactory](../modules/cluster_export.ClusterFactory.md) / Component

# Interface: Component

[cluster/export](../modules/cluster_export.md).[ClusterFactory](../modules/cluster_export.ClusterFactory.md).Component

A cluster "component" is a set of elements intended to be added to a
cluster definition.

## Hierarchy

- [`ClusterElements`](cluster_export.ClusterFactory.ClusterElements.md)

  ↳ **`Component`**

## Table of contents

### Constructors

- [constructor](cluster_export.ClusterFactory.Component.md#constructor)

### Properties

- [attributes](cluster_export.ClusterFactory.Component.md#attributes)
- [commands](cluster_export.ClusterFactory.Component.md#commands)
- [events](cluster_export.ClusterFactory.Component.md#events)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

ClusterElements.constructor

## Properties

### attributes

• `Readonly` **attributes**: [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)<[`Attribute`](../modules/cluster_export.ClusterFactory.md#attribute)\>

#### Inherited from

[ClusterElements](cluster_export.ClusterFactory.ClusterElements.md).[attributes](cluster_export.ClusterFactory.ClusterElements.md#attributes)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:69](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L69)

___

### commands

• `Readonly` **commands**: [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)<[`Command`](../modules/cluster_export.ClusterFactory.md#command)\>

#### Inherited from

[ClusterElements](cluster_export.ClusterFactory.ClusterElements.md).[commands](cluster_export.ClusterFactory.ClusterElements.md#commands)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:70](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L70)

___

### events

• `Readonly` **events**: [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)<[`Event`](../modules/cluster_export.ClusterFactory.md#event)\>

#### Inherited from

[ClusterElements](cluster_export.ClusterFactory.ClusterElements.md).[events](cluster_export.ClusterFactory.ClusterElements.md#events)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:71](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L71)
