[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ApplicationBasic](../modules/exports_cluster.ApplicationBasic.md) / ApplicationStatus

# Enumeration: ApplicationStatus

[exports/cluster](../modules/exports_cluster.md).[ApplicationBasic](../modules/exports_cluster.ApplicationBasic.md).ApplicationStatus

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.3.4.2

## Table of contents

### Enumeration Members

- [ActiveHidden](exports_cluster.ApplicationBasic.ApplicationStatus.md#activehidden)
- [ActiveVisibleFocus](exports_cluster.ApplicationBasic.ApplicationStatus.md#activevisiblefocus)
- [ActiveVisibleNotFocus](exports_cluster.ApplicationBasic.ApplicationStatus.md#activevisiblenotfocus)
- [Stopped](exports_cluster.ApplicationBasic.ApplicationStatus.md#stopped)

## Enumeration Members

### ActiveHidden

• **ActiveHidden** = ``2``

Application is running but not visible to the user.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationBasicCluster.d.ts:52

___

### ActiveVisibleFocus

• **ActiveVisibleFocus** = ``1``

Application is running, is visible to the user, and is the active target for input.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationBasicCluster.d.ts:48

___

### ActiveVisibleNotFocus

• **ActiveVisibleNotFocus** = ``3``

Application is running and visible, but is not the active target for input.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationBasicCluster.d.ts:56

___

### Stopped

• **Stopped** = ``0``

Application is not running.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationBasicCluster.d.ts:44
