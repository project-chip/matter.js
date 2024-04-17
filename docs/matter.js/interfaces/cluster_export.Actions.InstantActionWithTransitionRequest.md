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

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:383](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L383)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:384](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L384)

___

### transitionTime

• **transitionTime**: `number`

This field shall indicate the transition time in 1/10th of seconds.

**`See`**

MatterSpecification.v11.Core § 9.14.6.2.1

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:391](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L391)
