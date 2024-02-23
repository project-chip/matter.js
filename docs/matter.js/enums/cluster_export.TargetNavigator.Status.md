[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TargetNavigator](../modules/cluster_export.TargetNavigator.md) / Status

# Enumeration: Status

[cluster/export](../modules/cluster_export.md).[TargetNavigator](../modules/cluster_export.TargetNavigator.md).Status

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.11.5.2

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

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:79](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L79)

___

### Success

• **Success** = ``0``

Command succeeded

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:69](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L69)

___

### TargetNotFound

• **TargetNotFound** = ``1``

Requested target was not found in the TargetList

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:74](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L74)
