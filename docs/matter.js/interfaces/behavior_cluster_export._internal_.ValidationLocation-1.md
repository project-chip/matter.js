[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / ValidationLocation

# Interface: ValidationLocation

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).ValidationLocation

Contextual information tracked during validation.

## Table of contents

### Properties

- [choices](behavior_cluster_export._internal_.ValidationLocation-1.md#choices)
- [location](behavior_cluster_export._internal_.ValidationLocation-1.md#location)
- [path](behavior_cluster_export._internal_.ValidationLocation-1.md#path)
- [siblings](behavior_cluster_export._internal_.ValidationLocation-1.md#siblings)

## Properties

### choices

• `Optional` **choices**: `Record`\<`string`, [`Choice`](behavior_cluster_export._internal_.ValidationLocation.Choice.md)\>

Choice conformance requires context from the parent object.  This
context is passed here.

#### Defined in

[packages/matter.js/src/behavior/state/validation/location.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/validation/location.ts#L29)

___

### location

• `Optional` **location**: `string`[]

Path used to create fully-qualified name for diagnostic messages.

#### Defined in

[packages/matter.js/src/behavior/state/validation/location.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/validation/location.ts#L34)

___

### path

• **path**: [`DataModelPath`](behavior_cluster_export._internal_.DataModelPath.md)

The path to scrutinize, used for diagnostic messages.

#### Defined in

[packages/matter.js/src/behavior/state/validation/location.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/validation/location.ts#L17)

___

### siblings

• `Optional` **siblings**: [`Struct`](../modules/behavior_cluster_export._internal_.md#struct)

To validate conformance and constraints we require access to sibling
values.  They are passed here when validating a record.

#### Defined in

[packages/matter.js/src/behavior/state/validation/location.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/validation/location.ts#L23)
