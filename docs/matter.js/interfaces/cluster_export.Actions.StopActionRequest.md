[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / StopActionRequest

# Interface: StopActionRequest

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).StopActionRequest

Input to the Actions stopAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.5

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStopActionRequest`](../modules/cluster_export.Actions.md#tlvstopactionrequest)\>

  ↳ **`StopActionRequest`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.StopActionRequest.md#actionid)
- [invokeId](cluster_export.Actions.StopActionRequest.md#invokeid)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:448](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L448)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:449](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L449)
