[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Actions](../modules/exports_cluster.Actions.md) / ActionFailedEvent

# Interface: ActionFailedEvent

[exports/cluster](../modules/exports_cluster.md).[Actions](../modules/exports_cluster.Actions.md).ActionFailedEvent

Body of the Actions actionFailed event

**`See`**

MatterSpecification.v11.Core § 9.14.7.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvActionFailedEvent`](../modules/exports_cluster.Actions.md#tlvactionfailedevent)\>

  ↳ **`ActionFailedEvent`**

## Table of contents

### Properties

- [actionId](exports_cluster.Actions.ActionFailedEvent.md#actionid)
- [error](exports_cluster.Actions.ActionFailedEvent.md#error)
- [invokeId](exports_cluster.Actions.ActionFailedEvent.md#invokeid)
- [newState](exports_cluster.Actions.ActionFailedEvent.md#newstate)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:613

___

### error

• **error**: [`ActionError`](../enums/exports_cluster.Actions.ActionError.md)

This field shall be set to indicate the reason for non-successful progress of the action.

**`See`**

MatterSpecification.v11.Core § 9.14.7.2.1

#### Inherited from

TypeFromSchema.error

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:621

___

### invokeId

• **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:614

___

### newState

• **newState**: [`ActionState`](../enums/exports_cluster.Actions.ActionState.md)

#### Inherited from

TypeFromSchema.newState

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:615
