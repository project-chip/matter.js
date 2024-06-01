[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [TargetNavigator](../README.md) / NavigateTargetResponse

# Interface: NavigateTargetResponse

This command shall be generated in response to NavigateTarget command.

## See

MatterSpecification.v11.Cluster § 6.11.4.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvNavigateTargetResponse`](../README.md#tlvnavigatetargetresponse)\>

## Properties

### data?

> `optional` **data**: `string`

This shall indicate Optional app-specific data.

#### See

MatterSpecification.v11.Cluster § 6.11.4.2.2

#### Inherited from

`TypeFromSchema.data`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:99

***

### status

> **status**: [`Status`](../enumerations/Status.md)

This shall indicate the of the command.

#### See

MatterSpecification.v11.Cluster § 6.11.4.2.1

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:93
