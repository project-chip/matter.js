[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / EnableActionWithDurationRequest

# Interface: EnableActionWithDurationRequest

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).EnableActionWithDurationRequest

Input to the Actions enableActionWithDuration command

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.10

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvEnableActionWithDurationRequest`](../modules/cluster_export.Actions.md#tlvenableactionwithdurationrequest)\>

  ↳ **`EnableActionWithDurationRequest`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.EnableActionWithDurationRequest.md#actionid)
- [duration](cluster_export.Actions.EnableActionWithDurationRequest.md#duration)
- [invokeId](cluster_export.Actions.EnableActionWithDurationRequest.md#invokeid)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:535](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L535)

___

### duration

• **duration**: `number`

#### Inherited from

TypeFromSchema.duration

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:537](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L537)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:536](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L536)
