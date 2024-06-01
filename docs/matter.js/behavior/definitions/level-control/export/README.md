[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/level-control/export

# behavior/definitions/level-control/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [LevelControlBehavior](namespaces/LevelControlBehavior/README.md)
- [LevelControlInterface](namespaces/LevelControlInterface/README.md)
- [LevelControlServerLogic](namespaces/LevelControlServerLogic/README.md)

### Classes

- [LevelControlServer](classes/LevelControlServer.md)
- [LevelControlServerLogic](classes/LevelControlServerLogic.md)

### Interfaces

- [LevelControlBehavior](interfaces/LevelControlBehavior.md)

## Type Aliases

### LevelControlInterface

> **LevelControlInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L66)

***

### MoveRequest

> **MoveRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveRequest`](../../../../cluster/export/namespaces/LevelControl/README.md#tlvmoverequest)\>

#### See

MatterSpecification.v11.Cluster § 1.6.6.2

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L21)

***

### MoveToClosestFrequencyRequest

> **MoveToClosestFrequencyRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToClosestFrequencyRequest`](../../../../cluster/export/namespaces/LevelControl/README.md#tlvmovetoclosestfrequencyrequest)\>

#### See

MatterSpecification.v11.Cluster § 1.6.6.5

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L64)

***

### MoveToLevelRequest

> **MoveToLevelRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToLevelRequest`](../../../../cluster/export/namespaces/LevelControl/README.md#tlvmovetolevelrequest)\>

#### See

MatterSpecification.v11.Cluster § 1.6.6.1

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L16)

***

### MoveToLevelWithOnOffRequest

> **MoveToLevelWithOnOffRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToLevelWithOnOffRequest`](../../../../cluster/export/namespaces/LevelControl/README.md#tlvmovetolevelwithonoffrequest)\>

#### See

MatterSpecification.v11.Cluster § 1.6.6

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L44)

***

### MoveWithOnOffRequest

> **MoveWithOnOffRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveWithOnOffRequest`](../../../../cluster/export/namespaces/LevelControl/README.md#tlvmovewithonoffrequest)\>

#### See

MatterSpecification.v11.Cluster § 1.6.6

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L49)

***

### StepRequest

> **StepRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStepRequest`](../../../../cluster/export/namespaces/LevelControl/README.md#tlvsteprequest)\>

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a second. A step
is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to this as the device is
able. If the TransitionTime field is equal to null, the device SHOULD move as fast as it is able.

If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.

#### See

MatterSpecification.v11.Cluster § 1.6.6.3

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L34)

***

### StepWithOnOffRequest

> **StepWithOnOffRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStepWithOnOffRequest`](../../../../cluster/export/namespaces/LevelControl/README.md#tlvstepwithonoffrequest)\>

#### See

MatterSpecification.v11.Cluster § 1.6.6

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L54)

***

### StopRequest

> **StopRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStopRequest`](../../../../cluster/export/namespaces/LevelControl/README.md#tlvstoprequest)\>

#### See

MatterSpecification.v11.Cluster § 1.6.6.4

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L39)

***

### StopWithOnOffRequest

> **StopWithOnOffRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStopWithOnOffRequest`](../../../../cluster/export/namespaces/LevelControl/README.md#tlvstopwithonoffrequest)\>

#### See

MatterSpecification.v11.Cluster § 1.6.6

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L59)

## Variables

### LevelControlBehavior

> `const` **LevelControlBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`LevelControlInterface`](README.md#levelcontrolinterface)\>, [`LevelControlInterface`](README.md#levelcontrolinterface)\>

LevelControlBehavior is the base class for objects that support interaction with [LevelControl.Cluster](../../../../cluster/export/namespaces/LevelControl/README.md#cluster).

This class does not have optional features of LevelControl.Cluster enabled. You can enable additional features using
LevelControlBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlBehavior.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlBehavior.ts#L19)
