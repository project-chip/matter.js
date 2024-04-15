[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TargetNavigator](../modules/cluster_export.TargetNavigator.md) / NavigateTargetRequest

# Interface: NavigateTargetRequest

[cluster/export](../modules/cluster_export.md).[TargetNavigator](../modules/cluster_export.TargetNavigator.md).NavigateTargetRequest

Input to the TargetNavigator navigateTarget command

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvNavigateTargetRequest`](../modules/cluster_export.TargetNavigator.md#tlvnavigatetargetrequest)\>

  ↳ **`NavigateTargetRequest`**

## Table of contents

### Properties

- [data](cluster_export.TargetNavigator.NavigateTargetRequest.md#data)
- [target](cluster_export.TargetNavigator.NavigateTargetRequest.md#target)

## Properties

### data

• `Optional` **data**: `string`

This shall indicate Optional app-specific data.

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.1.2

#### Inherited from

TypeFromSchema.data

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L68)

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

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L61)
