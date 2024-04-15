[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / DisableActionRequest

# Interface: DisableActionRequest

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).DisableActionRequest

Input to the Actions disableAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.11

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvDisableActionRequest`](../modules/cluster_export.Actions.md#tlvdisableactionrequest)\>

  ↳ **`DisableActionRequest`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.DisableActionRequest.md#actionid)
- [invokeId](cluster_export.Actions.DisableActionRequest.md#invokeid)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:552](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L552)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:553](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L553)
