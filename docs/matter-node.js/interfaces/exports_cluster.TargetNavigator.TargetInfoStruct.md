[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [TargetNavigator](../modules/exports_cluster.TargetNavigator.md) / TargetInfoStruct

# Interface: TargetInfoStruct

[exports/cluster](../modules/exports_cluster.md).[TargetNavigator](../modules/exports_cluster.TargetNavigator.md).TargetInfoStruct

This indicates an object describing the navigable target.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.11.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvTargetInfoStruct`](../modules/exports_cluster.TargetNavigator.md#tlvtargetinfostruct)\>

  ↳ **`TargetInfoStruct`**

## Table of contents

### Properties

- [identifier](exports_cluster.TargetNavigator.TargetInfoStruct.md#identifier)
- [name](exports_cluster.TargetNavigator.TargetInfoStruct.md#name)

## Properties

### identifier

• **identifier**: `number`

An unique id within the TargetList.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.11.5.1.1

#### Inherited from

TypeFromSchema.identifier

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:23

___

### name

• **name**: `string`

A name string for the TargetInfoStruct.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.11.5.1.2

#### Inherited from

TypeFromSchema.name

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:29
