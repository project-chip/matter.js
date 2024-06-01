[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/media-input/export

# behavior/definitions/media-input/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [MediaInputBehavior](namespaces/MediaInputBehavior/README.md)
- [MediaInputInterface](namespaces/MediaInputInterface/README.md)

### Classes

- [MediaInputServer](classes/MediaInputServer.md)

### Interfaces

- [MediaInputBehavior](interfaces/MediaInputBehavior.md)

## Type Aliases

### MediaInputInterface

> **MediaInputInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L28)

***

### RenameInputRequest

> **RenameInputRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRenameInputRequest`](../../../../cluster/export/namespaces/MediaInput/README.md#tlvrenameinputrequest)\>

Upon receipt, this shall rename the input at a specific index in the Input List. Updates to the input name shall
appear in the device’s settings menus.

#### See

MatterSpecification.v11.Cluster § 6.9.4.4

#### Source

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L26)

***

### SelectInputRequest

> **SelectInputRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSelectInputRequest`](../../../../cluster/export/namespaces/MediaInput/README.md#tlvselectinputrequest)\>

Upon receipt, this shall change the media input on the device to the input at a specific index in the Input List.

#### See

MatterSpecification.v11.Cluster § 6.9.4.1

#### Source

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L18)

## Variables

### MediaInputBehavior

> `const` **MediaInputBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/MediaInput/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`MediaInputInterface`](README.md#mediainputinterface)\>, [`MediaInputInterface`](README.md#mediainputinterface)\>

MediaInputBehavior is the base class for objects that support interaction with [MediaInput.Cluster](../../../../cluster/export/namespaces/MediaInput/README.md#cluster).

This class does not have optional features of MediaInput.Cluster enabled. You can enable additional features using
MediaInputBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/media-input/MediaInputBehavior.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-input/MediaInputBehavior.ts#L19)
