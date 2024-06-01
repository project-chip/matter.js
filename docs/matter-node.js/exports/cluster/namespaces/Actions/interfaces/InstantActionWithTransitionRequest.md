[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Actions](../README.md) / InstantActionWithTransitionRequest

# Interface: InstantActionWithTransitionRequest

Input to the Actions instantActionWithTransition command

## See

MatterSpecification.v11.Core § 9.14.6.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvInstantActionWithTransitionRequest`](../README.md#tlvinstantactionwithtransitionrequest)\>

## Properties

### actionId

> **actionId**: `number`

#### Inherited from

`TypeFromSchema.actionId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:382

***

### invokeId?

> `optional` **invokeId**: `number`

#### Inherited from

`TypeFromSchema.invokeId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:383

***

### transitionTime

> **transitionTime**: `number`

This field shall indicate the transition time in 1/10th of seconds.

#### See

MatterSpecification.v11.Core § 9.14.6.2.1

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:389
