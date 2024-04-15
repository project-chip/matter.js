[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TargetNavigator](../modules/cluster_export.TargetNavigator.md) / Status

# Enumeration: Status

[cluster/export](../modules/cluster_export.md).[TargetNavigator](../modules/cluster_export.TargetNavigator.md).Status

**`See`**

MatterSpecification.v11.Cluster § 6.11.5.2

## Table of contents

### Enumeration Members

- [NotAllowed](cluster_export.TargetNavigator.Status.md#notallowed)
- [Success](cluster_export.TargetNavigator.Status.md#success)
- [TargetNotFound](cluster_export.TargetNavigator.Status.md#targetnotfound)

## Enumeration Members

### NotAllowed

• **NotAllowed** = ``2``

Target request is not allowed in current state.

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L95)

___

### Success

• **Success** = ``0``

Command succeeded

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L85)

___

### TargetNotFound

• **TargetNotFound** = ``1``

Requested target was not found in the TargetList

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L90)
