[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/export](../../../README.md) / [AccessControl](../README.md) / Location

# Interface: Location

Metadata that varies with position in the data model.

## Properties

### accessLevels?

> `optional` **accessLevels**: [`AccessLevel`](../../../../../cluster/export/enumerations/AccessLevel.md)[]

The access levels already retrieved for this location. With this subtree elements can access the same
access levels without re-evaluating.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L128)

***

### cluster?

> `optional` **cluster**: [`ClusterId`](../../../../../datatype/export/README.md#clusterid)

The owning behavior.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L116)

***

### owningFabric?

> `optional` **owningFabric**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

The fabric that owns the data subtree.  Undefined or [FabricIndex.NO_FABRIC](../../../../../datatype/export/namespaces/FabricIndex/README.md#no_fabric) disables fabric
enforcement.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L122)

***

### path

> **path**: [`DataModelPath`](../../../../cluster/export/-internal-/interfaces/DataModelPath.md)

The diagnostic path to the location.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L111)
