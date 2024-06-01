[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Actions](../README.md) / StateChangedEvent

# Interface: StateChangedEvent

Body of the Actions stateChanged event

## See

MatterSpecification.v11.Core § 9.14.7.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvStateChangedEvent`](../README.md#tlvstatechangedevent)\>

## Properties

### actionId

> **actionId**: `number`

This field shall be set to the ActionID of the action which has changed state.

#### See

MatterSpecification.v11.Core § 9.14.7.1.1

#### Inherited from

`TypeFromSchema.actionId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:593

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

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:600

***

### newState

> **newState**: [`ActionState`](../enumerations/ActionState.md)

This field shall be set to state that the action has changed to.

#### See

MatterSpecification.v11.Core § 9.14.7.1.3

#### Inherited from

`TypeFromSchema.newState`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:606
