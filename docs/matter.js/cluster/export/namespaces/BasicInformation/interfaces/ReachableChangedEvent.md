[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [BasicInformation](../README.md) / ReachableChangedEvent

# Interface: ReachableChangedEvent

Body of the BasicInformation reachableChanged event

## See

MatterSpecification.v11.Core § 11.1.6.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvReachableChangedEvent`](../README.md#tlvreachablechangedevent)\>

## Properties

### reachableNewValue

> **reachableNewValue**: `boolean`

This field shall indicate the value of the Reachable attribute after it was changed.

#### See

MatterSpecification.v11.Core § 11.1.6.4.1

#### Inherited from

`TypeFromSchema.reachableNewValue`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:164](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L164)
