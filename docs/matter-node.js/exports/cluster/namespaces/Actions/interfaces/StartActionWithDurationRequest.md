[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Actions](../README.md) / StartActionWithDurationRequest

# Interface: StartActionWithDurationRequest

Input to the Actions startActionWithDuration command

## See

MatterSpecification.v11.Core § 9.14.6.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvStartActionWithDurationRequest`](../README.md#tlvstartactionwithdurationrequest)\>

## Properties

### actionId

> **actionId**: `number`

#### Inherited from

`TypeFromSchema.actionId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:420

***

### duration

> **duration**: `number`

This field shall indicate the requested duration in seconds.

#### See

MatterSpecification.v11.Core § 9.14.6.4.1

#### Inherited from

`TypeFromSchema.duration`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:427

***

### invokeId?

> `optional` **invokeId**: `number`

#### Inherited from

`TypeFromSchema.invokeId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:421
