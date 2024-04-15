[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/pulse-width-modulation/export

# Module: behavior/definitions/pulse-width-modulation/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_pulse_width_modulation_export._internal_.md)

### Namespaces

- [PulseWidthModulationBehavior](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior.md)
- [PulseWidthModulationInterface](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.md)

### Classes

- [PulseWidthModulationServer](../classes/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationServer.md)

### Interfaces

- [PulseWidthModulationBehavior](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationBehavior-1.md)

### Type Aliases

- [MoveRequest](behavior_definitions_pulse_width_modulation_export.md#moverequest)
- [MoveToClosestFrequencyRequest](behavior_definitions_pulse_width_modulation_export.md#movetoclosestfrequencyrequest)
- [MoveToLevelRequest](behavior_definitions_pulse_width_modulation_export.md#movetolevelrequest)
- [PulseWidthModulationInterface](behavior_definitions_pulse_width_modulation_export.md#pulsewidthmodulationinterface)
- [StepRequest](behavior_definitions_pulse_width_modulation_export.md#steprequest)
- [StopRequest](behavior_definitions_pulse_width_modulation_export.md#stoprequest)

### Variables

- [PulseWidthModulationBehavior](behavior_definitions_pulse_width_modulation_export.md#pulsewidthmodulationbehavior)

## Type Aliases

### MoveRequest

Ƭ **MoveRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveRequest`](cluster_export.PulseWidthModulation.md#tlvmoverequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.2

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L21)

___

### MoveToClosestFrequencyRequest

Ƭ **MoveToClosestFrequencyRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveToClosestFrequencyRequest`](cluster_export.PulseWidthModulation.md#tlvmovetoclosestfrequencyrequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.5

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L44)

___

### MoveToLevelRequest

Ƭ **MoveToLevelRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveToLevelRequest`](cluster_export.PulseWidthModulation.md#tlvmovetolevelrequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.1

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L16)

___

### PulseWidthModulationInterface

Ƭ **PulseWidthModulationInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.Base.md)  }, \{ `flags`: \{ `frequency`: ``true``  } ; `methods`: [`Frequency`](../interfaces/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.Frequency.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L46)

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L106)

___

### StepRequest

Ƭ **StepRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStepRequest`](cluster_export.PulseWidthModulation.md#tlvsteprequest)\>

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a second. A step
is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to this as the device is
able. If the TransitionTime field is equal to null, the device SHOULD move as fast as it is able.

If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.3

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L34)

___

### StopRequest

Ƭ **StopRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStopRequest`](cluster_export.PulseWidthModulation.md#tlvstoprequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.4

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L39)

## Variables

### PulseWidthModulationBehavior

• `Const` **PulseWidthModulationBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.PulseWidthModulation.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`PulseWidthModulationInterface`](behavior_definitions_pulse_width_modulation_export.md#pulsewidthmodulationinterface)\>, [`PulseWidthModulationInterface`](behavior_definitions_pulse_width_modulation_export.md#pulsewidthmodulationinterface)\>

PulseWidthModulationBehavior is the base class for objects that support interaction with PulseWidthModulation.Cluster.

This class does not have optional features of PulseWidthModulation.Cluster enabled. You can enable additional
features using PulseWidthModulationBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationBehavior.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationBehavior.ts#L20)

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationBehavior.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationBehavior.ts#L25)

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationBehavior.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationBehavior.ts#L27)
