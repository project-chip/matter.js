[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [TargetNavigator](../README.md) / TargetInfoStruct

# Interface: TargetInfoStruct

This indicates an object describing the navigable target.

## See

MatterSpecification.v11.Cluster § 6.11.5.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvTargetInfoStruct`](../README.md#tlvtargetinfostruct)\>

## Properties

### identifier

> **identifier**: `number`

An unique id within the TargetList.

#### See

MatterSpecification.v11.Cluster § 6.11.5.1.1

#### Inherited from

`TypeFromSchema.identifier`

#### Source

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L32)

***

### name

> **name**: `string`

A name string for the TargetInfoStruct.

#### See

MatterSpecification.v11.Cluster § 6.11.5.1.2

#### Inherited from

`TypeFromSchema.name`

#### Source

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L39)
