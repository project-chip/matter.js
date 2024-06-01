[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ApplicationBasic](../README.md) / ApplicationStatus

# Enumeration: ApplicationStatus

## See

MatterSpecification.v11.Cluster § 6.3.4.2

## Enumeration Members

### ActiveHidden

> **ActiveHidden**: `2`

Application is running but not visible to the user.

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L74)

***

### ActiveVisibleFocus

> **ActiveVisibleFocus**: `1`

Application is running, is visible to the user, and is the active target for input.

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L69)

***

### ActiveVisibleNotFocus

> **ActiveVisibleNotFocus**: `3`

Application is running and visible, but is not the active target for input.

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L79)

***

### Stopped

> **Stopped**: `0`

Application is not running.

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L64)
