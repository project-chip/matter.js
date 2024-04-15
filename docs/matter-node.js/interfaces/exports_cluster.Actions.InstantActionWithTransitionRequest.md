[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Actions](../modules/exports_cluster.Actions.md) / InstantActionWithTransitionRequest

# Interface: InstantActionWithTransitionRequest

[exports/cluster](../modules/exports_cluster.md).[Actions](../modules/exports_cluster.Actions.md).InstantActionWithTransitionRequest

Input to the Actions instantActionWithTransition command

**`See`**

MatterSpecification.v11.Core § 9.14.6.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvInstantActionWithTransitionRequest`](../modules/exports_cluster.Actions.md#tlvinstantactionwithtransitionrequest)\>

  ↳ **`InstantActionWithTransitionRequest`**

## Table of contents

### Properties

- [actionId](exports_cluster.Actions.InstantActionWithTransitionRequest.md#actionid)
- [invokeId](exports_cluster.Actions.InstantActionWithTransitionRequest.md#invokeid)
- [transitionTime](exports_cluster.Actions.InstantActionWithTransitionRequest.md#transitiontime)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:381

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:382

___

### transitionTime

• **transitionTime**: `number`

This field shall indicate the transition time in 1/10th of seconds.

**`See`**

MatterSpecification.v11.Core § 9.14.6.2.1

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:388
