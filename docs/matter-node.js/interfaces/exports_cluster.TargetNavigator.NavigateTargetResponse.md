[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [TargetNavigator](../modules/exports_cluster.TargetNavigator.md) / NavigateTargetResponse

# Interface: NavigateTargetResponse

[exports/cluster](../modules/exports_cluster.md).[TargetNavigator](../modules/exports_cluster.TargetNavigator.md).NavigateTargetResponse

This command shall be generated in response to NavigateTarget command.

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvNavigateTargetResponse`](../modules/exports_cluster.TargetNavigator.md#tlvnavigatetargetresponse)\>

  ↳ **`NavigateTargetResponse`**

## Table of contents

### Properties

- [data](exports_cluster.TargetNavigator.NavigateTargetResponse.md#data)
- [status](exports_cluster.TargetNavigator.NavigateTargetResponse.md#status)

## Properties

### data

• `Optional` **data**: `string`

This shall indicate Optional app-specific data.

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.2.2

#### Inherited from

TypeFromSchema.data

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:99

___

### status

• **status**: [`Status`](../enums/exports_cluster.TargetNavigator.Status.md)

This shall indicate the of the command.

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.2.1

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:93
