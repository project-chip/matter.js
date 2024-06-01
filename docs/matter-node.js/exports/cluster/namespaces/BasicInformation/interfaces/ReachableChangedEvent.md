[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [BasicInformation](../README.md) / ReachableChangedEvent

# Interface: ReachableChangedEvent

Body of the BasicInformation reachableChanged event

## See

MatterSpecification.v11.Core § 11.1.6.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvReachableChangedEvent`](../README.md#tlvreachablechangedevent)\>

## Properties

### reachableNewValue

> **reachableNewValue**: `boolean`

This field shall indicate the value of the Reachable attribute after it was changed.

#### See

MatterSpecification.v11.Core § 11.1.6.4.1

#### Inherited from

`TypeFromSchema.reachableNewValue`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:136
