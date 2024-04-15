[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/level-control/export](../modules/behavior_definitions_level_control_export.md) / [LevelControlBehavior](../modules/behavior_definitions_level_control_export.LevelControlBehavior.md) / State

# Interface: State

[behavior/definitions/level-control/export](../modules/behavior_definitions_level_control_export.md).[LevelControlBehavior](../modules/behavior_definitions_level_control_export.LevelControlBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_level_control_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [currentLevel](behavior_definitions_level_control_export.LevelControlBehavior.State.md#currentlevel)
- [defaultMoveRate](behavior_definitions_level_control_export.LevelControlBehavior.State.md#defaultmoverate)
- [maxLevel](behavior_definitions_level_control_export.LevelControlBehavior.State.md#maxlevel)
- [minLevel](behavior_definitions_level_control_export.LevelControlBehavior.State.md#minlevel)
- [offTransitionTime](behavior_definitions_level_control_export.LevelControlBehavior.State.md#offtransitiontime)
- [onLevel](behavior_definitions_level_control_export.LevelControlBehavior.State.md#onlevel)
- [onOffTransitionTime](behavior_definitions_level_control_export.LevelControlBehavior.State.md#onofftransitiontime)
- [onTransitionTime](behavior_definitions_level_control_export.LevelControlBehavior.State.md#ontransitiontime)
- [options](behavior_definitions_level_control_export.LevelControlBehavior.State.md#options)

## Properties

### currentLevel

• **currentLevel**: ``null`` \| `number`

The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device
dependent.

**`See`**

MatterSpecification.v11.Cluster § 1.6.5.1

#### Inherited from

StateType.currentLevel

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:365](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L365)

___

### defaultMoveRate

• `Optional` **defaultMoveRate**: ``null`` \| `number`

The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move command is
received with a null value Rate parameter.

**`See`**

MatterSpecification.v11.Cluster § 1.6.5.13

#### Inherited from

StateType.defaultMoveRate

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:446](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L446)

___

### maxLevel

• `Optional` **maxLevel**: `number`

The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned.

**`See`**

MatterSpecification.v11.Cluster § 1.6.5.4

#### Inherited from

StateType.maxLevel

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:379](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L379)

___

### minLevel

• `Optional` **minLevel**: `number`

The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned.

**`See`**

MatterSpecification.v11.Cluster § 1.6.5.3

#### Inherited from

StateType.minLevel

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:372](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L372)

___

### offTransitionTime

• `Optional` **offTransitionTime**: ``null`` \| `number`

The OffTransitionTime attribute represents the time taken to move the current level from the maximum
level to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

**`See`**

MatterSpecification.v11.Cluster § 1.6.5.12

#### Inherited from

StateType.offTransitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:438](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L438)

___

### onLevel

• **onLevel**: ``null`` \| `number`

The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff
attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/Off
cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it has no
effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute.

**`See`**

MatterSpecification.v11.Cluster § 1.6.5.10

#### Inherited from

StateType.onLevel

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:418](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L418)

___

### onOffTransitionTime

• `Optional` **onOffTransitionTime**: `number`

The OnOffTransitionTime attribute represents the time taken to move to or from the target level when On
or Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a
second.

The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note that
if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD NOT be
implemented.

**`See`**

MatterSpecification.v11.Cluster § 1.6.5.9

#### Inherited from

StateType.onOffTransitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:408](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L408)

___

### onTransitionTime

• `Optional` **onTransitionTime**: ``null`` \| `number`

The OnTransitionTime attribute represents the time taken to move the current level from the minimum
level to the maximum level when an On command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

**`See`**

MatterSpecification.v11.Cluster § 1.6.5.11

#### Inherited from

StateType.onTransitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:428](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L428)

___

### options

• **options**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

The Options attribute is meant to be changed only during commissioning. The Options attribute is a
bitmap that determines the default behavior of some cluster commands. Each command that is dependent on
the Options attribute shall first construct a temporary Options bitmap that is in effect during the
command processing. The temporary Options bitmap has the same format and meaning as the Options
attribute, but includes any bits that may be overridden by command fields.

Below is the format and description of the Options attribute and temporary Options bitmap and the effect
on dependent commands.

Table 19. Options Attribute

**`See`**

MatterSpecification.v11.Cluster § 1.6.5.8

#### Inherited from

StateType.options

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:395](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L395)
