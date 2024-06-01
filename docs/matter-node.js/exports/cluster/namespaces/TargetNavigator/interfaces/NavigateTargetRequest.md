[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [TargetNavigator](../README.md) / NavigateTargetRequest

# Interface: NavigateTargetRequest

Input to the TargetNavigator navigateTarget command

## See

MatterSpecification.v11.Cluster § 6.11.4.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvNavigateTargetRequest`](../README.md#tlvnavigatetargetrequest)\>

## Properties

### data?

> `optional` **data**: `string`

This shall indicate Optional app-specific data.

#### See

MatterSpecification.v11.Cluster § 6.11.4.1.2

#### Inherited from

`TypeFromSchema.data`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:56

***

### target

> **target**: `number`

This shall indicate the Identifier for the target for UX navigation. The Target shall be an Identifier value
contained within one of the TargetInfoStruct objects in the TargetList attribute list.

#### See

MatterSpecification.v11.Cluster § 6.11.4.1.1

#### Inherited from

`TypeFromSchema.target`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:50
