[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [TargetNavigator](../modules/exports_cluster.TargetNavigator.md) / NavigateTargetRequest

# Interface: NavigateTargetRequest

[exports/cluster](../modules/exports_cluster.md).[TargetNavigator](../modules/exports_cluster.TargetNavigator.md).NavigateTargetRequest

Input to the TargetNavigator navigateTarget command

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvNavigateTargetRequest`](../modules/exports_cluster.TargetNavigator.md#tlvnavigatetargetrequest)\>

  ↳ **`NavigateTargetRequest`**

## Table of contents

### Properties

- [data](exports_cluster.TargetNavigator.NavigateTargetRequest.md#data)
- [target](exports_cluster.TargetNavigator.NavigateTargetRequest.md#target)

## Properties

### data

• `Optional` **data**: `string`

This shall indicate Optional app-specific data.

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.1.2

#### Inherited from

TypeFromSchema.data

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:56

___

### target

• **target**: `number`

This shall indicate the Identifier for the target for UX navigation. The Target shall be an Identifier value
contained within one of the TargetInfoStruct objects in the TargetList attribute list.

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.1.1

#### Inherited from

TypeFromSchema.target

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:50
