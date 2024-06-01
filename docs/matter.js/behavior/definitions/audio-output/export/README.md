[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/audio-output/export

# behavior/definitions/audio-output/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [AudioOutputBehavior](namespaces/AudioOutputBehavior/README.md)
- [AudioOutputInterface](namespaces/AudioOutputInterface/README.md)

### Classes

- [AudioOutputServer](classes/AudioOutputServer.md)

### Interfaces

- [AudioOutputBehavior](interfaces/AudioOutputBehavior.md)

## Type Aliases

### AudioOutputInterface

> **AudioOutputInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts#L28)

***

### RenameOutputRequest

> **RenameOutputRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRenameOutputRequest`](../../../../cluster/export/namespaces/AudioOutput/README.md#tlvrenameoutputrequest)\>

Upon receipt, this shall rename the output at a specific index in the Output List.

Updates to the output name shall appear in the device’s settings menus. Name updates may automatically be sent to
the actual device to which the output connects.

#### See

MatterSpecification.v11.Cluster § 6.5.4.2

#### Source

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts#L26)

***

### SelectOutputRequest

> **SelectOutputRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSelectOutputRequest`](../../../../cluster/export/namespaces/AudioOutput/README.md#tlvselectoutputrequest)\>

#### See

MatterSpecification.v11.Cluster § 6.5.4

#### Source

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts#L16)

## Variables

### AudioOutputBehavior

> `const` **AudioOutputBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/AudioOutput/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`AudioOutputInterface`](README.md#audiooutputinterface)\>, [`AudioOutputInterface`](README.md#audiooutputinterface)\>

AudioOutputBehavior is the base class for objects that support interaction with [AudioOutput.Cluster](../../../../cluster/export/namespaces/AudioOutput/README.md#cluster).

This class does not have optional features of AudioOutput.Cluster enabled. You can enable additional features using
AudioOutputBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputBehavior.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputBehavior.ts#L19)
