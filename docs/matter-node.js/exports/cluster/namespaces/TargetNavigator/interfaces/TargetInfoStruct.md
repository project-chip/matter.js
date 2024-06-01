[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [TargetNavigator](../README.md) / TargetInfoStruct

# Interface: TargetInfoStruct

This indicates an object describing the navigable target.

## See

MatterSpecification.v11.Cluster § 6.11.5.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvTargetInfoStruct`](../README.md#tlvtargetinfostruct)\>

## Properties

### identifier

> **identifier**: `number`

An unique id within the TargetList.

#### See

MatterSpecification.v11.Cluster § 6.11.5.1.1

#### Inherited from

`TypeFromSchema.identifier`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:23

***

### name

> **name**: `string`

A name string for the TargetInfoStruct.

#### See

MatterSpecification.v11.Cluster § 6.11.5.1.2

#### Inherited from

`TypeFromSchema.name`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:29
