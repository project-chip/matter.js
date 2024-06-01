[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Actions](../README.md) / StateChangedEvent

# Interface: StateChangedEvent

Body of the Actions stateChanged event

## See

MatterSpecification.v11.Core § 9.14.7.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStateChangedEvent`](../README.md#tlvstatechangedevent)\>

## Properties

### actionId

> **actionId**: `number`

This field shall be set to the ActionID of the action which has changed state.

#### See

MatterSpecification.v11.Core § 9.14.7.1.1

#### Inherited from

`TypeFromSchema.actionId`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:613](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L613)

***

### invokeId

> **invokeId**: `number`

This field shall be set to the InvokeID which was provided to the most recent command referencing this
ActionID.

#### See

MatterSpecification.v11.Core § 9.14.7.1.2

#### Inherited from

`TypeFromSchema.invokeId`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:621](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L621)

***

### newState

> **newState**: [`ActionState`](../enumerations/ActionState.md)

This field shall be set to state that the action has changed to.

#### See

MatterSpecification.v11.Core § 9.14.7.1.3

#### Inherited from

`TypeFromSchema.newState`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:628](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L628)
