[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / StartActionWithDurationRequest

# Interface: StartActionWithDurationRequest

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).StartActionWithDurationRequest

Input to the Actions startActionWithDuration command

**`See`**

MatterSpecification.v11.Core § 9.14.6.4

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

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:427](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L427)

___

### duration

• **duration**: `number`

This field shall indicate the requested duration in seconds.

**`See`**

MatterSpecification.v11.Core § 9.14.6.4.1

#### Inherited from

TypeFromSchema.duration

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:435](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L435)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:428](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L428)
