[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / EnableActionRequest

# Interface: EnableActionRequest

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).EnableActionRequest

Input to the Actions enableAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.9

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvEnableActionRequest`](../modules/cluster_export.Actions.md#tlvenableactionrequest)\>

  ↳ **`EnableActionRequest`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.EnableActionRequest.md#actionid)
- [invokeId](cluster_export.Actions.EnableActionRequest.md#invokeid)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:526](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L526)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:527](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L527)
