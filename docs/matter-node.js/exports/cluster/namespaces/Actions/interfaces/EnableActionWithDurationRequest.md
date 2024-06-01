[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Actions](../README.md) / EnableActionWithDurationRequest

# Interface: EnableActionWithDurationRequest

Input to the Actions enableActionWithDuration command

## See

MatterSpecification.v11.Core § 9.14.6.10

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvEnableActionWithDurationRequest`](../README.md#tlvenableactionwithdurationrequest)\>

## Properties

### actionId

> **actionId**: `number`

#### Inherited from

`TypeFromSchema.actionId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:528

***

### duration

> **duration**: `number`

This field shall indicate the requested duration in seconds.

#### See

MatterSpecification.v11.Core § 9.14.6.10.1

#### Inherited from

`TypeFromSchema.duration`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:535

***

### invokeId?

> `optional` **invokeId**: `number`

#### Inherited from

`TypeFromSchema.invokeId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:529
