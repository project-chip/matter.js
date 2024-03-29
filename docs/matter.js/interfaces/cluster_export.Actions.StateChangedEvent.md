[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / StateChangedEvent

# Interface: StateChangedEvent

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).StateChangedEvent

Body of the Actions stateChanged event

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.14.7.1

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

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:588](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L588)

___

### invokeId

• **invokeId**: `number`

This field shall be set to the InvokeID which was provided to the most recent command referencing this
ActionID.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.14.7.1.1

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:596](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L596)

___

### newState

• **newState**: [`ActionState`](../enums/cluster_export.Actions.ActionState.md)

This field shall be set to state that the action has changed to.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.14.7.1.2

#### Inherited from

TypeFromSchema.newState

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:603](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L603)
