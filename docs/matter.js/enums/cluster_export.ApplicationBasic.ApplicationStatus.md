[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ApplicationBasic](../modules/cluster_export.ApplicationBasic.md) / ApplicationStatus

# Enumeration: ApplicationStatus

[cluster/export](../modules/cluster_export.md).[ApplicationBasic](../modules/cluster_export.ApplicationBasic.md).ApplicationStatus

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.3.4.2

## Table of contents

### Enumeration Members

- [ActiveHidden](cluster_export.ApplicationBasic.ApplicationStatus.md#activehidden)
- [ActiveVisibleFocus](cluster_export.ApplicationBasic.ApplicationStatus.md#activevisiblefocus)
- [ActiveVisibleNotFocus](cluster_export.ApplicationBasic.ApplicationStatus.md#activevisiblenotfocus)
- [Stopped](cluster_export.ApplicationBasic.ApplicationStatus.md#stopped)

## Enumeration Members

### ActiveHidden

• **ActiveHidden** = ``2``

Application is running but not visible to the user.

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:70](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L70)

___

### ActiveVisibleFocus

• **ActiveVisibleFocus** = ``1``

Application is running, is visible to the user, and is the active target for input.

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:65](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L65)

___

### ActiveVisibleNotFocus

• **ActiveVisibleNotFocus** = ``3``

Application is running and visible, but is not the active target for input.

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:75](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L75)

___

### Stopped

• **Stopped** = ``0``

Application is not running.

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:60](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L60)
