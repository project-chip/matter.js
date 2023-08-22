[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Actions](../modules/exports_cluster.Actions.md) / ActionState

# Enumeration: ActionState

[exports/cluster](../modules/exports_cluster.md).[Actions](../modules/exports_cluster.Actions.md).ActionState

Note that some of these states are applicable only for certain actions, as determined by their SupportedCommands.

**`See`**

MatterCoreSpecificationV1_1 § 9.14.4.3

## Table of contents

### Enumeration Members

- [Active](exports_cluster.Actions.ActionState.md#active)
- [Disabled](exports_cluster.Actions.ActionState.md#disabled)
- [Inactive](exports_cluster.Actions.ActionState.md#inactive)
- [Paused](exports_cluster.Actions.ActionState.md#paused)

## Enumeration Members

### Active

• **Active** = ``1``

The action is active

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ActionsCluster.d.ts:155

___

### Disabled

• **Disabled** = ``3``

The action has been disabled

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ActionsCluster.d.ts:163

___

### Inactive

• **Inactive** = ``0``

The action is not active

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ActionsCluster.d.ts:151

___

### Paused

• **Paused** = ``2``

The action has been paused

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ActionsCluster.d.ts:159
