[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Actions](../README.md) / DisableActionWithDurationRequest

# Interface: DisableActionWithDurationRequest

Input to the Actions disableActionWithDuration command

## See

MatterSpecification.v11.Core § 9.14.6.12

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvDisableActionWithDurationRequest`](../README.md#tlvdisableactionwithdurationrequest)\>

## Properties

### actionId

> **actionId**: `number`

#### Inherited from

`TypeFromSchema.actionId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:566

***

### duration

> **duration**: `number`

This field shall indicate the requested duration in seconds.

#### See

MatterSpecification.v11.Core § 9.14.6.12.1

#### Inherited from

`TypeFromSchema.duration`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:573

***

### invokeId?

> `optional` **invokeId**: `number`

#### Inherited from

`TypeFromSchema.invokeId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:567
