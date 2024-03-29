[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / PauseActionWithDurationRequest

# Interface: PauseActionWithDurationRequest

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).PauseActionWithDurationRequest

Input to the Actions pauseActionWithDuration command

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.7

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvPauseActionWithDurationRequest`](../modules/cluster_export.Actions.md#tlvpauseactionwithdurationrequest)\>

  ↳ **`PauseActionWithDurationRequest`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.PauseActionWithDurationRequest.md#actionid)
- [duration](cluster_export.Actions.PauseActionWithDurationRequest.md#duration)
- [invokeId](cluster_export.Actions.PauseActionWithDurationRequest.md#invokeid)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:483](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L483)

___

### duration

• **duration**: `number`

#### Inherited from

TypeFromSchema.duration

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:485](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L485)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:484](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L484)
