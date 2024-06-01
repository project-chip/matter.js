[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/SpeakerDevice](../../README.md) / SpeakerRequirements

# Namespace: SpeakerRequirements

## Variables

### LevelControlServer

> `const` **LevelControlServer**: *typeof* [`LevelControlServer`](../../../../../../behavior/definitions/level-control/export/classes/LevelControlServer.md) = `BaseLevelControlServer`

The LevelControl cluster is required by the Matter specification

We provide this alias to the default implementation [LevelControlServer](README.md#levelcontrolserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts#L48)

***

### OnOffServer

> `const` **OnOffServer**: *typeof* [`OnOffServer`](../../../../../../behavior/definitions/on-off/export/namespaces/OnOffServer/README.md) = `BaseOnOffServer`

The OnOff cluster is required by the Matter specification

We provide this alias to the default implementation [OnOffServer](README.md#onoffserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts#L41)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.LevelControl

> **LevelControl**: *typeof* [`LevelControlServer`](../../../../../../behavior/definitions/level-control/export/classes/LevelControlServer.md) = `LevelControlServer`

##### mandatory.OnOff

> **OnOff**: *typeof* [`OnOffServer`](../../../../../../behavior/definitions/on-off/export/namespaces/OnOffServer/README.md) = `OnOffServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts#L53)
