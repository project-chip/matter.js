[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](../modules/behavior_export.md) / [AccessControl](../modules/behavior_export.AccessControl.md) / Location

# Interface: Location

[behavior/export](../modules/behavior_export.md).[AccessControl](../modules/behavior_export.AccessControl.md).Location

Metadata that varies with position in the data model.

## Table of contents

### Properties

- [accessLevels](behavior_export.AccessControl.Location.md#accesslevels)
- [cluster](behavior_export.AccessControl.Location.md#cluster)
- [owningFabric](behavior_export.AccessControl.Location.md#owningfabric)
- [path](behavior_export.AccessControl.Location.md#path)

## Properties

### accessLevels

• `Optional` **accessLevels**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)[]

The access levels already retrieved for this location. With this subtree elements can access the same
access levels without re-evaluating.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:128](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/AccessControl.ts#L128)

___

### cluster

• `Optional` **cluster**: [`ClusterId`](../modules/datatype_export.md#clusterid)

The owning behavior.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:116](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/AccessControl.ts#L116)

___

### owningFabric

• `Optional` **owningFabric**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

The fabric that owns the data subtree.  Undefined or [FabricIndex.NO_FABRIC](../modules/datatype_export.FabricIndex.md#no_fabric) disables fabric
enforcement.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:122](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/AccessControl.ts#L122)

___

### path

• **path**: [`DataModelPath`](behavior_cluster_export._internal_.DataModelPath.md)

The diagnostic path to the location.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:111](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/AccessControl.ts#L111)
