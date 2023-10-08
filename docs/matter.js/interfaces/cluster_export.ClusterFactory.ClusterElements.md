[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ClusterFactory](../modules/cluster_export.ClusterFactory.md) / ClusterElements

# Interface: ClusterElements

[cluster/export](../modules/cluster_export.md).[ClusterFactory](../modules/cluster_export.ClusterFactory.md).ClusterElements

Cluster "elements" are attributes, commands and events that may comprise
a cluster.

## Hierarchy

- **`ClusterElements`**

  ↳ [`Component`](cluster_export.ClusterFactory.Component.md)

  ↳ [`Cluster`](cluster_export.ClusterFactory.Cluster.md)

## Table of contents

### Properties

- [attributes](cluster_export.ClusterFactory.ClusterElements.md#attributes)
- [commands](cluster_export.ClusterFactory.ClusterElements.md#commands)
- [events](cluster_export.ClusterFactory.ClusterElements.md#events)

## Properties

### attributes

• `Readonly` **attributes**: [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)<[`Attribute`](../modules/cluster_export.ClusterFactory.md#attribute)\>

#### Defined in

packages/matter.js/src/cluster/ClusterFactory.ts:69

___

### commands

• `Readonly` **commands**: [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)<[`Command`](../modules/cluster_export.ClusterFactory.md#command)\>

#### Defined in

packages/matter.js/src/cluster/ClusterFactory.ts:70

___

### events

• `Readonly` **events**: [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)<[`Event`](../modules/cluster_export.ClusterFactory.md#event)\>

#### Defined in

packages/matter.js/src/cluster/ClusterFactory.ts:71
