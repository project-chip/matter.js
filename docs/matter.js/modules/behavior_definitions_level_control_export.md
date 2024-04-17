[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/level-control/export

# Module: behavior/definitions/level-control/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_level_control_export._internal_.md)

### Namespaces

- [LevelControlBehavior](behavior_definitions_level_control_export.LevelControlBehavior.md)
- [LevelControlInterface](behavior_definitions_level_control_export.LevelControlInterface.md)

### Classes

- [LevelControlServer](../classes/behavior_definitions_level_control_export.LevelControlServer.md)

### Interfaces

- [LevelControlBehavior](../interfaces/behavior_definitions_level_control_export.LevelControlBehavior-1.md)

### Type Aliases

- [LevelControlInterface](behavior_definitions_level_control_export.md#levelcontrolinterface)
- [MoveRequest](behavior_definitions_level_control_export.md#moverequest)
- [MoveToClosestFrequencyRequest](behavior_definitions_level_control_export.md#movetoclosestfrequencyrequest)
- [MoveToLevelRequest](behavior_definitions_level_control_export.md#movetolevelrequest)
- [MoveToLevelWithOnOffRequest](behavior_definitions_level_control_export.md#movetolevelwithonoffrequest)
- [MoveWithOnOffRequest](behavior_definitions_level_control_export.md#movewithonoffrequest)
- [StepRequest](behavior_definitions_level_control_export.md#steprequest)
- [StepWithOnOffRequest](behavior_definitions_level_control_export.md#stepwithonoffrequest)
- [StopRequest](behavior_definitions_level_control_export.md#stoprequest)
- [StopWithOnOffRequest](behavior_definitions_level_control_export.md#stopwithonoffrequest)

### Variables

- [LevelControlBehavior](behavior_definitions_level_control_export.md#levelcontrolbehavior)

## Type Aliases

### LevelControlInterface

Ƭ **LevelControlInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_level_control_export.LevelControlInterface.Base.md)  }, \{ `flags`: \{ `frequency`: ``true``  } ; `methods`: [`Frequency`](../interfaces/behavior_definitions_level_control_export.LevelControlInterface.Frequency.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L66)

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L126)

___

### MoveRequest

Ƭ **MoveRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveRequest`](cluster_export.LevelControl.md#tlvmoverequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.2

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L21)

___

### MoveToClosestFrequencyRequest

Ƭ **MoveToClosestFrequencyRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveToClosestFrequencyRequest`](cluster_export.LevelControl.md#tlvmovetoclosestfrequencyrequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.5

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L64)

___

### MoveToLevelRequest

Ƭ **MoveToLevelRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveToLevelRequest`](cluster_export.LevelControl.md#tlvmovetolevelrequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.1

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L16)

___

### MoveToLevelWithOnOffRequest

Ƭ **MoveToLevelWithOnOffRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveToLevelWithOnOffRequest`](cluster_export.LevelControl.md#tlvmovetolevelwithonoffrequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L44)

___

### MoveWithOnOffRequest

Ƭ **MoveWithOnOffRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveWithOnOffRequest`](cluster_export.LevelControl.md#tlvmovewithonoffrequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L49)

___

### StepRequest

Ƭ **StepRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStepRequest`](cluster_export.LevelControl.md#tlvsteprequest)\>

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a second. A step
is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to this as the device is
able. If the TransitionTime field is equal to null, the device SHOULD move as fast as it is able.

If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.3

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L34)

___

### StepWithOnOffRequest

Ƭ **StepWithOnOffRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStepWithOnOffRequest`](cluster_export.LevelControl.md#tlvstepwithonoffrequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L54)

___

### StopRequest

Ƭ **StopRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStopRequest`](cluster_export.LevelControl.md#tlvstoprequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.4

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L39)

___

### StopWithOnOffRequest

Ƭ **StopWithOnOffRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStopWithOnOffRequest`](cluster_export.LevelControl.md#tlvstopwithonoffrequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L59)

## Variables

### LevelControlBehavior

• `Const` **LevelControlBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>

LevelControlBehavior is the base class for objects that support interaction with [LevelControl.Cluster](cluster_export.LevelControl.md#cluster).

This class does not have optional features of LevelControl.Cluster enabled. You can enable additional features using
LevelControlBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlBehavior.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlBehavior.ts#L19)

[packages/matter.js/src/behavior/definitions/level-control/LevelControlBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlBehavior.ts#L24)

[packages/matter.js/src/behavior/definitions/level-control/LevelControlBehavior.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/level-control/LevelControlBehavior.ts#L26)
