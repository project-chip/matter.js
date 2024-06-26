[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / InstantActionRequest

# Interface: InstantActionRequest

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).InstantActionRequest

Input to the Actions instantAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvInstantActionRequest`](../modules/cluster_export.Actions.md#tlvinstantactionrequest)\>

  ↳ **`InstantActionRequest`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.InstantActionRequest.md#actionid)
- [invokeId](cluster_export.Actions.InstantActionRequest.md#invokeid)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:369](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L369)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:370](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L370)
