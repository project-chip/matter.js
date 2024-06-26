[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / ResumeActionRequest

# Interface: ResumeActionRequest

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).ResumeActionRequest

Input to the Actions resumeAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.8

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvResumeActionRequest`](../modules/cluster_export.Actions.md#tlvresumeactionrequest)\>

  ↳ **`ResumeActionRequest`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.ResumeActionRequest.md#actionid)
- [invokeId](cluster_export.Actions.ResumeActionRequest.md#invokeid)

## Properties

### actionId

• **actionId**: `number`

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:509](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L509)

___

### invokeId

• `Optional` **invokeId**: `number`

#### Inherited from

TypeFromSchema.invokeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:510](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L510)
