[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Actions](../README.md) / ActionFailedEvent

# Interface: ActionFailedEvent

Body of the Actions actionFailed event

## See

MatterSpecification.v11.Core § 9.14.7.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvActionFailedEvent`](../README.md#tlvactionfailedevent)\>

## Properties

### actionId

> **actionId**: `number`

This field shall be set to the ActionID of the action which encountered an error.

#### See

MatterSpecification.v11.Core § 9.14.7.2.1

#### Inherited from

`TypeFromSchema.actionId`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:664](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L664)

***

### error

> **error**: [`ActionError`](../enumerations/ActionError.md)

This field shall be set to indicate the reason for non-successful progress of the action.

#### See

MatterSpecification.v11.Core § 9.14.7.2.4

#### Inherited from

`TypeFromSchema.error`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:686](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L686)

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

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:672](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L672)

***

### newState

> **newState**: [`ActionState`](../enumerations/ActionState.md)

This field shall be set to state that the action is in at the time of generating the event.

#### See

MatterSpecification.v11.Core § 9.14.7.2.3

#### Inherited from

`TypeFromSchema.newState`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:679](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L679)
