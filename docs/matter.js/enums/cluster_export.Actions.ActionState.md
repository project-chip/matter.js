[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / ActionState

# Enumeration: ActionState

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).ActionState

Note that some of these states are applicable only for certain actions, as determined by their SupportedCommands.

**`See`**

MatterSpecification.v11.Core § 9.14.4.3

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

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:194](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L194)

___

### Disabled

• **Disabled** = ``3``

The action has been disabled

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L204)

___

### Inactive

• **Inactive** = ``0``

The action is not active

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:189](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L189)

___

### Paused

• **Paused** = ``2``

The action has been paused

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L199)
