[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/media-input/export

# Module: behavior/definitions/media-input/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_media_input_export._internal_.md)

### Namespaces

- [MediaInputBehavior](behavior_definitions_media_input_export.MediaInputBehavior.md)
- [MediaInputInterface](behavior_definitions_media_input_export.MediaInputInterface.md)

### Classes

- [MediaInputServer](../classes/behavior_definitions_media_input_export.MediaInputServer.md)

### Interfaces

- [MediaInputBehavior](../interfaces/behavior_definitions_media_input_export.MediaInputBehavior-1.md)

### Type Aliases

- [MediaInputInterface](behavior_definitions_media_input_export.md#mediainputinterface)
- [RenameInputRequest](behavior_definitions_media_input_export.md#renameinputrequest)
- [SelectInputRequest](behavior_definitions_media_input_export.md#selectinputrequest)

### Variables

- [MediaInputBehavior](behavior_definitions_media_input_export.md#mediainputbehavior)

## Type Aliases

### MediaInputInterface

Ƭ **MediaInputInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_media_input_export.MediaInputInterface.Base.md)  }, \{ `flags`: \{ `nameUpdates`: ``true``  } ; `methods`: [`NameUpdates`](../interfaces/behavior_definitions_media_input_export.MediaInputInterface.NameUpdates.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L28)

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L64)

___

### RenameInputRequest

Ƭ **RenameInputRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRenameInputRequest`](cluster_export.MediaInput.md#tlvrenameinputrequest)\>

Upon receipt, this shall rename the input at a specific index in the Input List. Updates to the input name shall
appear in the device’s settings menus.

**`See`**

MatterSpecification.v11.Cluster § 6.9.4.4

#### Defined in

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L26)

___

### SelectInputRequest

Ƭ **SelectInputRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSelectInputRequest`](cluster_export.MediaInput.md#tlvselectinputrequest)\>

Upon receipt, this shall change the media input on the device to the input at a specific index in the Input List.

**`See`**

MatterSpecification.v11.Cluster § 6.9.4.1

#### Defined in

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L18)

## Variables

### MediaInputBehavior

• `Const` **MediaInputBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.MediaInput.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`MediaInputInterface`](behavior_definitions_media_input_export.md#mediainputinterface)\>, [`MediaInputInterface`](behavior_definitions_media_input_export.md#mediainputinterface)\>

MediaInputBehavior is the base class for objects that support interaction with [MediaInput.Cluster](cluster_export.MediaInput.md#cluster).

This class does not have optional features of MediaInput.Cluster enabled. You can enable additional features using
MediaInputBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/media-input/MediaInputBehavior.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-input/MediaInputBehavior.ts#L19)

[packages/matter.js/src/behavior/definitions/media-input/MediaInputBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-input/MediaInputBehavior.ts#L24)

[packages/matter.js/src/behavior/definitions/media-input/MediaInputBehavior.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-input/MediaInputBehavior.ts#L26)
