[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ApplicationBasic](../modules/cluster_export.ApplicationBasic.md) / ApplicationStatus

# Enumeration: ApplicationStatus

[cluster/export](../modules/cluster_export.md).[ApplicationBasic](../modules/cluster_export.ApplicationBasic.md).ApplicationStatus

**`See`**

MatterSpecification.v11.Cluster § 6.3.4.2

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

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L74)

___

### ActiveVisibleFocus

• **ActiveVisibleFocus** = ``1``

Application is running, is visible to the user, and is the active target for input.

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L69)

___

### ActiveVisibleNotFocus

• **ActiveVisibleNotFocus** = ``3``

Application is running and visible, but is not the active target for input.

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L79)

___

### Stopped

• **Stopped** = ``0``

Application is not running.

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L64)
