[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Actions](../README.md) / PauseActionWithDurationRequest

# Interface: PauseActionWithDurationRequest

Input to the Actions pauseActionWithDuration command

## See

MatterSpecification.v11.Core § 9.14.6.7

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvPauseActionWithDurationRequest`](../README.md#tlvpauseactionwithdurationrequest)\>

## Properties

### actionId

> **actionId**: `number`

#### Inherited from

`TypeFromSchema.actionId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:474

***

### duration

> **duration**: `number`

This field shall indicate the requested duration in seconds.

#### See

MatterSpecification.v11.Core § 9.14.6.7.1

#### Inherited from

`TypeFromSchema.duration`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:481

***

### invokeId?

> `optional` **invokeId**: `number`

#### Inherited from

`TypeFromSchema.invokeId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:475
