[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/GenericSwitchDevice](../../README.md) / GenericSwitchRequirements

# Namespace: GenericSwitchRequirements

## Variables

### FixedLabelServer

> `const` **FixedLabelServer**: *typeof* [`FixedLabelServer`](../../../../../../behavior/definitions/fixed-label/export/classes/FixedLabelServer.md) = `BaseFixedLabelServer`

The FixedLabel cluster is optional per the Matter specification

We provide this alias to the default implementation [FixedLabelServer](README.md#fixedlabelserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts#L46)

***

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts#L32)

***

### SwitchServer

> `const` **SwitchServer**: *typeof* [`SwitchServer`](../../../../../../behavior/definitions/switch/export/classes/SwitchServer.md) = `BaseSwitchServer`

The Switch cluster is required by the Matter specification

We provide this alias to the default implementation [SwitchServer](README.md#switchserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts#L39)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.Identify

> **Identify**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `IdentifyServer`

##### mandatory.Switch

> **Switch**: *typeof* [`SwitchServer`](../../../../../../behavior/definitions/switch/export/classes/SwitchServer.md) = `SwitchServer`

##### optional

> **optional**: `object`

##### optional.FixedLabel

> **FixedLabel**: *typeof* [`FixedLabelServer`](../../../../../../behavior/definitions/fixed-label/export/classes/FixedLabelServer.md) = `FixedLabelServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts#L51)
