[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TargetNavigator](../modules/cluster_export.TargetNavigator.md) / NavigateTargetResponse

# Interface: NavigateTargetResponse

[cluster/export](../modules/cluster_export.md).[TargetNavigator](../modules/cluster_export.TargetNavigator.md).NavigateTargetResponse

This command shall be generated in response to NavigateTarget command.

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvNavigateTargetResponse`](../modules/cluster_export.TargetNavigator.md#tlvnavigatetargetresponse)\>

  ↳ **`NavigateTargetResponse`**

## Table of contents

### Properties

- [data](cluster_export.TargetNavigator.NavigateTargetResponse.md#data)
- [status](cluster_export.TargetNavigator.NavigateTargetResponse.md#status)

## Properties

### data

• `Optional` **data**: `string`

This shall indicate Optional app-specific data.

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.2.2

#### Inherited from

TypeFromSchema.data

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:116](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L116)

___

### status

• **status**: [`Status`](../enums/cluster_export.TargetNavigator.Status.md)

This shall indicate the of the command.

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.2.1

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:109](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L109)
