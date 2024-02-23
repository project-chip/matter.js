[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ClusterFactory](../modules/exports_cluster.ClusterFactory.md) / TypedComponent

# Interface: TypedComponent\<T\>

[exports/cluster](../modules/exports_cluster.md).[ClusterFactory](../modules/exports_cluster.ClusterFactory.md).TypedComponent

A "typed component" is a component with detailed type information.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Partial`\<[`Component`](exports_cluster.ClusterFactory.Component.md)\> |

## Table of contents

### Properties

- [attributes](exports_cluster.ClusterFactory.TypedComponent.md#attributes)
- [commands](exports_cluster.ClusterFactory.TypedComponent.md#commands)
- [events](exports_cluster.ClusterFactory.TypedComponent.md#events)

## Properties

### attributes

• **attributes**: `T`[``"attributes"``] extends [`ElementSet`](../modules/exports_cluster.ClusterFactory.md#elementset)\<[`Attribute`](../modules/exports_cluster.ClusterFactory.md#attribute)\> ? `any`[`any`] : {}

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:69

___

### commands

• **commands**: `T`[``"commands"``] extends [`ElementSet`](../modules/exports_cluster.ClusterFactory.md#elementset)\<[`Command`](../modules/exports_cluster.ClusterFactory.md#command)\> ? `any`[`any`] : {}

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:70

___

### events

• **events**: `T`[``"events"``] extends [`ElementSet`](../modules/exports_cluster.ClusterFactory.md#elementset)\<[`Event`](../modules/exports_cluster.ClusterFactory.md#event)\> ? `any`[`any`] : {}

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:71
