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

This field shall be set to the ActionID of the action which has changed state.

**`See`**

MatterSpecification.v11.Core § 9.14.7.1.1

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:613](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L613)

___

### invokeId

• **invokeId**: `number`

This field shall be set to the InvokeID which was provided to the most recent command referencing this
ActionID.

**`See`**

MatterSpecification.v11.Core § 9.14.7.1.2

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:621](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L621)

___

### newState

• **newState**: [`ActionState`](../enums/cluster_export.Actions.ActionState.md)

This field shall be set to state that the action has changed to.

**`See`**

MatterSpecification.v11.Core § 9.14.7.1.3

#### Inherited from

TypeFromSchema.newState

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:628](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L628)
