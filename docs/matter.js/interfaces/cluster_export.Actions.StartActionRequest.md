[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / StartActionRequest

# Interface: StartActionRequest

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).StartActionRequest

Input to the Actions startAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStartActionRequest`](../modules/cluster_export.Actions.md#tlvstartactionrequest)\>

  ↳ **`StartActionRequest`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.StartActionRequest.md#actionid)
- [invokeId](cluster_export.Actions.StartActionRequest.md#invokeid)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:407](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L407)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:408](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L408)
