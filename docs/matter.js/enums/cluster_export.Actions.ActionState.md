[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / ActionState

# Enumeration: ActionState

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).ActionState

Note that some of these states are applicable only for certain actions, as determined by their SupportedCommands.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.3

## Table of contents

### Enumeration Members

- [Active](cluster_export.Actions.ActionState.md#active)
- [Disabled](cluster_export.Actions.ActionState.md#disabled)
- [Inactive](cluster_export.Actions.ActionState.md#inactive)
- [Paused](cluster_export.Actions.ActionState.md#paused)

## Enumeration Members

### Active

• **Active** = ``1``

The action is active

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:192](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L192)

___

### Disabled

• **Disabled** = ``3``

The action has been disabled

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:202](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L202)

___

### Inactive

• **Inactive** = ``0``

The action is not active

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:187](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L187)

___

### Paused

• **Paused** = ``2``

The action has been paused

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:197](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L197)
