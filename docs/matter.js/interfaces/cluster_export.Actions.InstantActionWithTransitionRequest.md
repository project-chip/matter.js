[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / InstantActionWithTransitionRequest

# Interface: InstantActionWithTransitionRequest

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).InstantActionWithTransitionRequest

Input to the Actions instantActionWithTransition command

**`See`**

MatterSpecification.v11.Core § 9.14.6.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvInstantActionWithTransitionRequest`](../modules/cluster_export.Actions.md#tlvinstantactionwithtransitionrequest)\>

  ↳ **`InstantActionWithTransitionRequest`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.InstantActionWithTransitionRequest.md#actionid)
- [invokeId](cluster_export.Actions.InstantActionWithTransitionRequest.md#invokeid)
- [transitionTime](cluster_export.Actions.InstantActionWithTransitionRequest.md#transitiontime)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:386](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L386)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:387](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L387)

___

### transitionTime

• **transitionTime**: `number`

This field shall indicate the transition time in 1/10th of seconds.

**`See`**

MatterSpecification.v11.Core § 9.14.6.2.1

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:394](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L394)
