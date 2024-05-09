[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / StateChangedEvent

# Interface: StateChangedEvent

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).StateChangedEvent

Body of the Actions stateChanged event

**`See`**

MatterSpecification.v11.Core § 9.14.7.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStateChangedEvent`](../modules/cluster_export.Actions.md#tlvstatechangedevent)\>

  ↳ **`StateChangedEvent`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.StateChangedEvent.md#actionid)
- [invokeId](cluster_export.Actions.StateChangedEvent.md#invokeid)
- [newState](cluster_export.Actions.StateChangedEvent.md#newstate)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:587](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L587)

___

### invokeId

• **invokeId**: `number`

This field shall be set to the InvokeID which was provided to the most recent command referencing this
ActionID.

**`See`**

MatterSpecification.v11.Core § 9.14.7.1.1

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:595](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L595)

___

### newState

• **newState**: [`ActionState`](../enums/cluster_export.Actions.ActionState.md)

This field shall be set to state that the action has changed to.

**`See`**

MatterSpecification.v11.Core § 9.14.7.1.2

#### Inherited from

TypeFromSchema.newState

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:602](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L602)
