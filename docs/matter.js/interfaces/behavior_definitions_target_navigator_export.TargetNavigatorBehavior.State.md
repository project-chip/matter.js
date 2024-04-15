[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/target-navigator/export](../modules/behavior_definitions_target_navigator_export.md) / [TargetNavigatorBehavior](../modules/behavior_definitions_target_navigator_export.TargetNavigatorBehavior.md) / State

# Interface: State

[behavior/definitions/target-navigator/export](../modules/behavior_definitions_target_navigator_export.md).[TargetNavigatorBehavior](../modules/behavior_definitions_target_navigator_export.TargetNavigatorBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_target_navigator_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [currentTarget](behavior_definitions_target_navigator_export.TargetNavigatorBehavior.State.md#currenttarget)
- [targetList](behavior_definitions_target_navigator_export.TargetNavigatorBehavior.State.md#targetlist)

## Properties

### currentTarget

• `Optional` **currentTarget**: ``null`` \| `number`

The CurrentTarget attribute shall represent the Identifier for the target which is currently in
foreground on the corresponding Endpoint (Video Player or Content App), or null to indicate that no
target is in the foreground.

When not null, the CurrentTarget shall be an Identifier value contained within one of the
TargetInfoStruct objects in the TargetList attribute list.

**`See`**

MatterSpecification.v11.Cluster § 6.11.3.2

#### Inherited from

StateType.currentTarget

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L154)

___

### targetList

• **targetList**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifier`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[]

The TargetList attribute shall represent a list of targets that can be navigated to within the
experience presented to the user by the Endpoint (Video Player or Content App). The list shall not
contain any entries with the same Identifier in the TargetInfoStruct object.

**`See`**

MatterSpecification.v11.Cluster § 6.11.3.1

#### Inherited from

StateType.targetList

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L142)
