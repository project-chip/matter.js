[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / ActionFailedEvent

# Interface: ActionFailedEvent

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).ActionFailedEvent

Body of the Actions actionFailed event

**`See`**

MatterSpecification.v11.Core § 9.14.7.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvActionFailedEvent`](../modules/cluster_export.Actions.md#tlvactionfailedevent)\>

  ↳ **`ActionFailedEvent`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.ActionFailedEvent.md#actionid)
- [error](cluster_export.Actions.ActionFailedEvent.md#error)
- [invokeId](cluster_export.Actions.ActionFailedEvent.md#invokeid)
- [newState](cluster_export.Actions.ActionFailedEvent.md#newstate)

## Properties

### actionId

• **actionId**: `number`

This field shall be set to the ActionID of the action which encountered an error.

**`See`**

MatterSpecification.v11.Core § 9.14.7.2.1

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:664](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L664)

___

### error

• **error**: [`ActionError`](../enums/cluster_export.Actions.ActionError.md)

This field shall be set to indicate the reason for non-successful progress of the action.

**`See`**

MatterSpecification.v11.Core § 9.14.7.2.4

#### Inherited from

TypeFromSchema.error

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:686](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L686)

___

### invokeId

• **invokeId**: `number`

This field shall be set to the InvokeID which was provided to the most recent command referencing this
ActionID.

**`See`**

MatterSpecification.v11.Core § 9.14.7.2.2

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:672](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L672)

___

### newState

• **newState**: [`ActionState`](../enums/cluster_export.Actions.ActionState.md)

This field shall be set to state that the action is in at the time of generating the event.

**`See`**

MatterSpecification.v11.Core § 9.14.7.2.3

#### Inherited from

TypeFromSchema.newState

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:679](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L679)
