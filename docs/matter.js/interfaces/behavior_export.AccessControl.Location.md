[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](../modules/behavior_export.md) / [AccessControl](../modules/behavior_export.AccessControl.md) / Location

# Interface: Location

[behavior/export](../modules/behavior_export.md).[AccessControl](../modules/behavior_export.AccessControl.md).Location

Metadata that varies with position in the data model.

## Table of contents

### Properties

- [cluster](behavior_export.AccessControl.Location.md#cluster)
- [owningFabric](behavior_export.AccessControl.Location.md#owningfabric)
- [path](behavior_export.AccessControl.Location.md#path)

## Properties

### cluster

• `Optional` **cluster**: [`ClusterId`](../modules/datatype_export.md#clusterid)

The owning behavior.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L116)

___

### owningFabric

• `Optional` **owningFabric**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

The fabric that owns the data subtree.  Undefined or [FabricIndex.NO_FABRIC](../modules/datatype_export.FabricIndex.md#no_fabric) disables fabric
enforcement.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L122)

___

### path

• **path**: [`DataModelPath`](behavior_cluster_export._internal_.DataModelPath.md)

The diagnostic path to the location.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L111)
