[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / PauseActionRequest

# Interface: PauseActionRequest

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).PauseActionRequest

Input to the Actions pauseAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvPauseActionRequest`](../modules/cluster_export.Actions.md#tlvpauseactionrequest)\>

  ↳ **`PauseActionRequest`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.PauseActionRequest.md#actionid)
- [invokeId](cluster_export.Actions.PauseActionRequest.md#invokeid)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:468](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L468)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:469](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L469)
