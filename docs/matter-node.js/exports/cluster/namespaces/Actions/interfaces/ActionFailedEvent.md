[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Actions](../README.md) / ActionFailedEvent

# Interface: ActionFailedEvent

Body of the Actions actionFailed event

## See

MatterSpecification.v11.Core § 9.14.7.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvActionFailedEvent`](../README.md#tlvactionfailedevent)\>

## Properties

### actionId

> **actionId**: `number`

This field shall be set to the ActionID of the action which encountered an error.

#### See

MatterSpecification.v11.Core § 9.14.7.2.1

#### Inherited from

`TypeFromSchema.actionId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:639

***

### error

> **error**: [`ActionError`](../enumerations/ActionError.md)

This field shall be set to indicate the reason for non-successful progress of the action.

#### See

MatterSpecification.v11.Core § 9.14.7.2.4

#### Inherited from

`TypeFromSchema.error`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:658

***

### invokeId

> **invokeId**: `number`

This field shall be set to the InvokeID which was provided to the most recent command referencing this
ActionID.

#### See

MatterSpecification.v11.Core § 9.14.7.2.2

#### Inherited from

`TypeFromSchema.invokeId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:646

***

### newState

> **newState**: [`ActionState`](../enumerations/ActionState.md)

This field shall be set to state that the action is in at the time of generating the event.

#### See

MatterSpecification.v11.Core § 9.14.7.2.3

#### Inherited from

`TypeFromSchema.newState`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:652
