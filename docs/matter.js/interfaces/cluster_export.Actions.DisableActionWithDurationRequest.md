[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / DisableActionWithDurationRequest

# Interface: DisableActionWithDurationRequest

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).DisableActionWithDurationRequest

Input to the Actions disableActionWithDuration command

**`See`**

MatterSpecification.v11.Core § 9.14.6.12

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvDisableActionWithDurationRequest`](../modules/cluster_export.Actions.md#tlvdisableactionwithdurationrequest)\>

  ↳ **`DisableActionWithDurationRequest`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.DisableActionWithDurationRequest.md#actionid)
- [duration](cluster_export.Actions.DisableActionWithDurationRequest.md#duration)
- [invokeId](cluster_export.Actions.DisableActionWithDurationRequest.md#invokeid)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:584](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L584)

___

### duration

• **duration**: `number`

This field shall indicate the requested duration in seconds.

**`See`**

MatterSpecification.v11.Core § 9.14.6.12.1

#### Inherited from

TypeFromSchema.duration

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:592](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L592)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:585](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L585)
