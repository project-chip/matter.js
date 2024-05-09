[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Actions](../modules/exports_cluster.Actions.md) / StateChangedEvent

# Interface: StateChangedEvent

[exports/cluster](../modules/exports_cluster.md).[Actions](../modules/exports_cluster.Actions.md).StateChangedEvent

Body of the Actions stateChanged event

**`See`**

MatterSpecification.v11.Core § 9.14.7.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvStateChangedEvent`](../modules/exports_cluster.Actions.md#tlvstatechangedevent)\>

  ↳ **`StateChangedEvent`**

## Table of contents

### Properties

- [actionId](exports_cluster.Actions.StateChangedEvent.md#actionid)
- [invokeId](exports_cluster.Actions.StateChangedEvent.md#invokeid)
- [newState](exports_cluster.Actions.StateChangedEvent.md#newstate)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:572

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

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:579

___

### newState

• **newState**: [`ActionState`](../enums/exports_cluster.Actions.ActionState.md)

This field shall be set to state that the action has changed to.

**`See`**

MatterSpecification.v11.Core § 9.14.7.1.2

#### Inherited from

TypeFromSchema.newState

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:585
