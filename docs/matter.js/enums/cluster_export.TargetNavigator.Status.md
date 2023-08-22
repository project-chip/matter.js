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

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:78](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L78)

___

### Success

• **Success** = ``0``

Command succeeded

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:68](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L68)

___

### TargetNotFound

• **TargetNotFound** = ``1``

Requested target was not found in the TargetList

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:73](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L73)
