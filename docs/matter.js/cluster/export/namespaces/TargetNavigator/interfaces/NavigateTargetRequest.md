[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [TargetNavigator](../README.md) / NavigateTargetRequest

# Interface: NavigateTargetRequest

Input to the TargetNavigator navigateTarget command

## See

MatterSpecification.v11.Cluster § 6.11.4.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvNavigateTargetRequest`](../README.md#tlvnavigatetargetrequest)\>

## Properties

### data?

> `optional` **data**: `string`

This shall indicate Optional app-specific data.

#### See

MatterSpecification.v11.Cluster § 6.11.4.1.2

#### Inherited from

`TypeFromSchema.data`

#### Source

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L68)

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

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L61)
