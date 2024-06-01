[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/WindowCoveringDevice](../../README.md) / WindowCoveringRequirements

# Namespace: WindowCoveringRequirements

## Variables

### GroupsServer

> `const` **GroupsServer**: *typeof* [`GroupsServer`](../../../../../../behavior/definitions/groups/export/classes/GroupsServer.md) = `BaseGroupsServer`

The Groups cluster is optional per the Matter specification

We provide this alias to the default implementation [GroupsServer](README.md#groupsserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts#L49)

***

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts#L35)

***

### ScenesServer

> `const` **ScenesServer**: *typeof* [`ScenesServer`](../../../../../../behavior/definitions/scenes/export/classes/ScenesServer.md) = `BaseScenesServer`

The Scenes cluster is optional per the Matter specification

We provide this alias to the default implementation [ScenesServer](README.md#scenesserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts#L56)

***

### WindowCoveringServer

> `const` **WindowCoveringServer**: *typeof* [`WindowCoveringServer`](../../../../../../behavior/definitions/window-covering/export/classes/WindowCoveringServer.md) = `BaseWindowCoveringServer`

The WindowCovering cluster is required by the Matter specification

We provide this alias to the default implementation [WindowCoveringServer](README.md#windowcoveringserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts#L42)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.Identify

> **Identify**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `IdentifyServer`

##### mandatory.WindowCovering

> **WindowCovering**: *typeof* [`WindowCoveringServer`](../../../../../../behavior/definitions/window-covering/export/classes/WindowCoveringServer.md) = `WindowCoveringServer`

##### optional

> **optional**: `object`

##### optional.Groups

> **Groups**: *typeof* [`GroupsServer`](../../../../../../behavior/definitions/groups/export/classes/GroupsServer.md) = `GroupsServer`

##### optional.Scenes

> **Scenes**: *typeof* [`ScenesServer`](../../../../../../behavior/definitions/scenes/export/classes/ScenesServer.md) = `ScenesServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts#L61)
