[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/pulse-width-modulation/export

# behavior/definitions/pulse-width-modulation/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [PulseWidthModulationBehavior](namespaces/PulseWidthModulationBehavior/README.md)
- [PulseWidthModulationInterface](namespaces/PulseWidthModulationInterface/README.md)

### Classes

- [PulseWidthModulationServer](classes/PulseWidthModulationServer.md)

### Interfaces

- [PulseWidthModulationBehavior](interfaces/PulseWidthModulationBehavior.md)

## Type Aliases

### MoveRequest

> **MoveRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveRequest`](../../../../cluster/export/namespaces/PulseWidthModulation/README.md#tlvmoverequest)\>

#### See

MatterSpecification.v11.Cluster § 1.6.6.2

#### Source

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L21)

***

### MoveToClosestFrequencyRequest

> **MoveToClosestFrequencyRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToClosestFrequencyRequest`](../../../../cluster/export/namespaces/PulseWidthModulation/README.md#tlvmovetoclosestfrequencyrequest)\>

#### See

MatterSpecification.v11.Cluster § 1.6.6.5

#### Source

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L44)

***

### MoveToLevelRequest

> **MoveToLevelRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToLevelRequest`](../../../../cluster/export/namespaces/PulseWidthModulation/README.md#tlvmovetolevelrequest)\>

#### See

MatterSpecification.v11.Cluster § 1.6.6.1

#### Source

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L16)

***

### PulseWidthModulationInterface

> **PulseWidthModulationInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L46)

***

### StepRequest

> **StepRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStepRequest`](../../../../cluster/export/namespaces/PulseWidthModulation/README.md#tlvsteprequest)\>

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a second. A step
is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to this as the device is
able. If the TransitionTime field is equal to null, the device SHOULD move as fast as it is able.

If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.

#### See

MatterSpecification.v11.Cluster § 1.6.6.3

#### Source

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L34)

***

### StopRequest

> **StopRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStopRequest`](../../../../cluster/export/namespaces/PulseWidthModulation/README.md#tlvstoprequest)\>

#### See

MatterSpecification.v11.Cluster § 1.6.6.4

#### Source

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L39)

## Variables

### PulseWidthModulationBehavior

> `const` **PulseWidthModulationBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/PulseWidthModulation/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`PulseWidthModulationInterface`](README.md#pulsewidthmodulationinterface)\>, [`PulseWidthModulationInterface`](README.md#pulsewidthmodulationinterface)\>

PulseWidthModulationBehavior is the base class for objects that support interaction with PulseWidthModulation.Cluster.

This class does not have optional features of PulseWidthModulation.Cluster enabled. You can enable additional
features using PulseWidthModulationBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationBehavior.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationBehavior.ts#L20)
