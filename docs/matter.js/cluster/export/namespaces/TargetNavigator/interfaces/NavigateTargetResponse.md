[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [TargetNavigator](../README.md) / NavigateTargetResponse

# Interface: NavigateTargetResponse

This command shall be generated in response to NavigateTarget command.

## See

MatterSpecification.v11.Cluster § 6.11.4.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvNavigateTargetResponse`](../README.md#tlvnavigatetargetresponse)\>

## Properties

### data?

> `optional` **data**: `string`

This shall indicate Optional app-specific data.

#### See

MatterSpecification.v11.Cluster § 6.11.4.2.2

#### Inherited from

`TypeFromSchema.data`

#### Source

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L116)

***

### status

> **status**: [`Status`](../enumerations/Status.md)

This shall indicate the of the command.

#### See

MatterSpecification.v11.Cluster § 6.11.4.2.1

#### Inherited from

`TypeFromSchema.status`

#### Source

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L109)
