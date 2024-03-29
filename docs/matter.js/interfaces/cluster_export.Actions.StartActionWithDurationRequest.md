[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / StartActionWithDurationRequest

# Interface: StartActionWithDurationRequest

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).StartActionWithDurationRequest

Input to the Actions startActionWithDuration command

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStartActionWithDurationRequest`](../modules/cluster_export.Actions.md#tlvstartactionwithdurationrequest)\>

  ↳ **`StartActionWithDurationRequest`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.StartActionWithDurationRequest.md#actionid)
- [duration](cluster_export.Actions.StartActionWithDurationRequest.md#duration)
- [invokeId](cluster_export.Actions.StartActionWithDurationRequest.md#invokeid)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:425](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L425)

___

### duration

• **duration**: `number`

This field shall indicate the requested duration in seconds.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.4.1

#### Inherited from

TypeFromSchema.duration

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:433](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L433)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:426](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L426)
