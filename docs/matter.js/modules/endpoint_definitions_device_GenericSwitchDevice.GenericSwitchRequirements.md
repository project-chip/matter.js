[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/GenericSwitchDevice](endpoint_definitions_device_GenericSwitchDevice.md) / GenericSwitchRequirements

# Namespace: GenericSwitchRequirements

[endpoint/definitions/device/GenericSwitchDevice](endpoint_definitions_device_GenericSwitchDevice.md).GenericSwitchRequirements

## Table of contents

### Variables

- [FixedLabelServer](endpoint_definitions_device_GenericSwitchDevice.GenericSwitchRequirements.md#fixedlabelserver)
- [IdentifyServer](endpoint_definitions_device_GenericSwitchDevice.GenericSwitchRequirements.md#identifyserver)
- [SwitchServer](endpoint_definitions_device_GenericSwitchDevice.GenericSwitchRequirements.md#switchserver)
- [server](endpoint_definitions_device_GenericSwitchDevice.GenericSwitchRequirements.md#server)

## Variables

### FixedLabelServer

• `Const` **FixedLabelServer**: typeof [`FixedLabelServer`](../classes/behavior_definitions_fixed_label_export.FixedLabelServer.md) = `BaseFixedLabelServer`

The FixedLabel cluster is optional per the Matter specification

We provide this alias to the default implementation [FixedLabelServer](endpoint_definitions_device_GenericSwitchDevice.GenericSwitchRequirements.md#fixedlabelserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts#L46)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_GenericSwitchDevice.GenericSwitchRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts#L32)

___

### SwitchServer

• `Const` **SwitchServer**: typeof [`SwitchServer`](../classes/behavior_definitions_switch_export.SwitchServer.md) = `BaseSwitchServer`

The Switch cluster is required by the Matter specification

We provide this alias to the default implementation [SwitchServer](endpoint_definitions_device_GenericSwitchDevice.GenericSwitchRequirements.md#switchserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts#L39)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer; `Switch`: typeof [`SwitchServer`](../classes/behavior_definitions_switch_export.SwitchServer.md) = SwitchServer } |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |
| `mandatory.Switch` | typeof [`SwitchServer`](../classes/behavior_definitions_switch_export.SwitchServer.md) |
| `optional` | \{ `FixedLabel`: typeof [`FixedLabelServer`](../classes/behavior_definitions_fixed_label_export.FixedLabelServer.md) = FixedLabelServer } |
| `optional.FixedLabel` | typeof [`FixedLabelServer`](../classes/behavior_definitions_fixed_label_export.FixedLabelServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/GenericSwitchDevice.ts#L51)
