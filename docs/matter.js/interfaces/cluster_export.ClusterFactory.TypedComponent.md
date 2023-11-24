[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ClusterFactory](../modules/cluster_export.ClusterFactory.md) / TypedComponent

# Interface: TypedComponent<T\>

[cluster/export](../modules/cluster_export.md).[ClusterFactory](../modules/cluster_export.ClusterFactory.md).TypedComponent

A "typed component" is a component with detailed type information.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Partial`<[`Component`](../modules/cluster_export.ClusterFactory.md#component)\> |

## Table of contents

### Properties

- [attributes](cluster_export.ClusterFactory.TypedComponent.md#attributes)
- [commands](cluster_export.ClusterFactory.TypedComponent.md#commands)
- [events](cluster_export.ClusterFactory.TypedComponent.md#events)

## Properties

### attributes

• **attributes**: `T`[``"attributes"``] extends [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)<[`Attribute`](../modules/cluster_export.ClusterFactory.md#attribute)\> ? `any`[`any`] : {}

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:84](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/ClusterFactory.ts#L84)

___

### commands

• **commands**: `T`[``"commands"``] extends [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)<[`Command`](../modules/cluster_export.ClusterFactory.md#command)\> ? `any`[`any`] : {}

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:85](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/ClusterFactory.ts#L85)

___

### events

• **events**: `T`[``"events"``] extends [`ElementSet`](../modules/cluster_export.ClusterFactory.md#elementset)<[`Event`](../modules/cluster_export.ClusterFactory.md#event)\> ? `any`[`any`] : {}

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:86](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/ClusterFactory.ts#L86)
