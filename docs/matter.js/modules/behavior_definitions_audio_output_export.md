[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/audio-output/export

# Module: behavior/definitions/audio-output/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_audio_output_export._internal_.md)

### Namespaces

- [AudioOutputBehavior](behavior_definitions_audio_output_export.AudioOutputBehavior.md)
- [AudioOutputInterface](behavior_definitions_audio_output_export.AudioOutputInterface.md)

### Classes

- [AudioOutputServer](../classes/behavior_definitions_audio_output_export.AudioOutputServer.md)

### Interfaces

- [AudioOutputBehavior](../interfaces/behavior_definitions_audio_output_export.AudioOutputBehavior-1.md)

### Type Aliases

- [AudioOutputInterface](behavior_definitions_audio_output_export.md#audiooutputinterface)
- [RenameOutputRequest](behavior_definitions_audio_output_export.md#renameoutputrequest)
- [SelectOutputRequest](behavior_definitions_audio_output_export.md#selectoutputrequest)

### Variables

- [AudioOutputBehavior](behavior_definitions_audio_output_export.md#audiooutputbehavior)

## Type Aliases

### AudioOutputInterface

Ƭ **AudioOutputInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_audio_output_export.AudioOutputInterface.Base.md)  }, \{ `flags`: \{ `nameUpdates`: ``true``  } ; `methods`: [`NameUpdates`](../interfaces/behavior_definitions_audio_output_export.AudioOutputInterface.NameUpdates.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts:29](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts#L29)

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts:50](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts#L50)

___

### RenameOutputRequest

Ƭ **RenameOutputRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRenameOutputRequest`](cluster_export.AudioOutput.md#tlvrenameoutputrequest)\>

Upon receipt, this shall rename the output at a specific index in the Output List.

Updates to the output name shall appear in the device’s settings menus. Name updates may automatically be sent to
the actual device to which the output connects.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.4.2

#### Defined in

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts:27](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts#L27)

___

### SelectOutputRequest

Ƭ **SelectOutputRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSelectOutputRequest`](cluster_export.AudioOutput.md#tlvselectoutputrequest)\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.4

#### Defined in

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts:17](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts#L17)

## Variables

### AudioOutputBehavior

• `Const` **AudioOutputBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.AudioOutput.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`AudioOutputInterface`](behavior_definitions_audio_output_export.md#audiooutputinterface)\>, [`AudioOutputInterface`](behavior_definitions_audio_output_export.md#audiooutputinterface)\>

AudioOutputBehavior is the base class for objects that support interaction with [AudioOutput.Cluster](cluster_export.AudioOutput.md#cluster).

This class does not have optional features of AudioOutput.Cluster enabled. You can enable additional features using
AudioOutputBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputBehavior.ts:19](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputBehavior.ts#L19)

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputBehavior.ts:24](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputBehavior.ts#L24)

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputBehavior.ts:26](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputBehavior.ts#L26)
