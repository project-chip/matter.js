[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Actions](../modules/exports_cluster.Actions.md) / StartActionWithDurationRequest

# Interface: StartActionWithDurationRequest

[exports/cluster](../modules/exports_cluster.md).[Actions](../modules/exports_cluster.Actions.md).StartActionWithDurationRequest

Input to the Actions startActionWithDuration command

**`See`**

MatterSpecification.v11.Core § 9.14.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvStartActionWithDurationRequest`](../modules/exports_cluster.Actions.md#tlvstartactionwithdurationrequest)\>

  ↳ **`StartActionWithDurationRequest`**

## Table of contents

### Properties

- [actionId](exports_cluster.Actions.StartActionWithDurationRequest.md#actionid)
- [duration](exports_cluster.Actions.StartActionWithDurationRequest.md#duration)
- [invokeId](exports_cluster.Actions.StartActionWithDurationRequest.md#invokeid)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:419

___

### duration

• **duration**: `number`

This field shall indicate the requested duration in seconds.

**`See`**

MatterSpecification.v11.Core § 9.14.6.4.1

#### Inherited from

TypeFromSchema.duration

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:426

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:420
