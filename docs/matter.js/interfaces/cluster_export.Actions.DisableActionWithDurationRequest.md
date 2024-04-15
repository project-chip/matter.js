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

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:569](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L569)

___

### duration

• **duration**: `number`

#### Inherited from

TypeFromSchema.duration

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:571](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L571)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:570](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L570)
