[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/mode-select/export](../modules/behavior_definitions_mode_select_export.md) / [ModeSelectBehavior](../modules/behavior_definitions_mode_select_export.ModeSelectBehavior.md) / State

# Interface: State

[behavior/definitions/mode-select/export](../modules/behavior_definitions_mode_select_export.md).[ModeSelectBehavior](../modules/behavior_definitions_mode_select_export.ModeSelectBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_mode_select_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [currentMode](behavior_definitions_mode_select_export.ModeSelectBehavior.State.md#currentmode)
- [description](behavior_definitions_mode_select_export.ModeSelectBehavior.State.md#description)
- [standardNamespace](behavior_definitions_mode_select_export.ModeSelectBehavior.State.md#standardnamespace)
- [startUpMode](behavior_definitions_mode_select_export.ModeSelectBehavior.State.md#startupmode)
- [supportedModes](behavior_definitions_mode_select_export.ModeSelectBehavior.State.md#supportedmodes)

## Properties

### currentMode

• **currentMode**: `number`

This attribute represents the current mode of the server.

The value of this field must match the Mode field of one of the entries in the SupportedModes

attribute.

**`See`**

MatterSpecification.v11.Cluster § 1.8.5.4

#### Inherited from

StateType.currentMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L217)

___

### description

• **description**: `string`

This attribute describes the purpose of the server, in readable text.

For example, a coffee machine may have a Mode Select cluster for the amount of milk to add, and another
Mode Select cluster for the amount of sugar to add. In this case, the first instance can have the
description Milk and the second instance can have the description Sugar. This allows the user to tell
the purpose of each of the instances.

**`See`**

MatterSpecification.v11.Cluster § 1.8.5.1

#### Inherited from

StateType.description

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:186](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L186)

___

### standardNamespace

• **standardNamespace**: ``null`` \| `number`

This attribute, when not null, shall indicate a single standard namespace for any standard semantic tag
value supported in this or any other cluster instance with the same value of this attribute. A null
value indicates no standard namespace, and therefore, no standard semantic tags are provided in this
cluster instance. Each standard namespace and corresponding values and value meanings shall be defined
in another document.

**`See`**

MatterSpecification.v11.Cluster § 1.8.5.2

#### Inherited from

StateType.standardNamespace

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L197)

___

### startUpMode

• `Optional` **startUpMode**: ``null`` \| `number`

The StartUpMode attribute value indicates the desired startup mode for the server when it is supplied
with power.

If this attribute is not null, the CurrentMode attribute shall be set to the StartUpMode value, when the
server is powered up, except in the case when the OnMode attribute overrides the StartUpMode attribute.

This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentMode
attribute shall return to its value prior to the restart.

The value of this field shall match the Mode field of one of the entries in the SupportedModes

attribute.

If this attribute is not implemented, or is set to the null value, it shall have no effect.

**`See`**

MatterSpecification.v11.Cluster § 1.8.5.5

#### Inherited from

StateType.startUpMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:237](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L237)

___

### supportedModes

• **supportedModes**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid)\> ; `value`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>[]

This attribute is the list of supported modes that may be selected for the CurrentMode attribute. Each
item in this list represents a unique mode as indicated by the Mode field of the ModeOptionStruct. Each
entry in this list shall have a unique value for the Mode field.

**`See`**

MatterSpecification.v11.Cluster § 1.8.5.3

#### Inherited from

StateType.supportedModes

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:206](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L206)
