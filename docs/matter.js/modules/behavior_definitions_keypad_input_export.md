[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/keypad-input/export

# Module: behavior/definitions/keypad-input/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_keypad_input_export._internal_.md)

### Namespaces

- [KeypadInputBehavior](behavior_definitions_keypad_input_export.KeypadInputBehavior.md)
- [KeypadInputInterface](behavior_definitions_keypad_input_export.KeypadInputInterface.md)

### Classes

- [KeypadInputServer](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)

### Interfaces

- [KeypadInputBehavior](../interfaces/behavior_definitions_keypad_input_export.KeypadInputBehavior-1.md)

### Type Aliases

- [KeypadInputInterface](behavior_definitions_keypad_input_export.md#keypadinputinterface)
- [SendKeyRequest](behavior_definitions_keypad_input_export.md#sendkeyrequest)
- [SendKeyResponse](behavior_definitions_keypad_input_export.md#sendkeyresponse)

### Variables

- [KeypadInputBehavior](behavior_definitions_keypad_input_export.md#keypadinputbehavior)

## Type Aliases

### KeypadInputInterface

Ƭ **KeypadInputInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_keypad_input_export.KeypadInputInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts#L31)

[packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts#L46)

___

### SendKeyRequest

Ƭ **SendKeyRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSendKeyRequest`](cluster_export.KeypadInput.md#tlvsendkeyrequest)\>

Upon receipt, this shall process a keycode as input to the media device.

If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will consider
the first key press to be a press and hold. When such a repeat KeyCode value is not received within 200ms, then the
endpoint will consider the last key press to be a release.

**`See`**

MatterSpecification.v11.Cluster § 6.8.3.1

#### Defined in

[packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts#L22)

___

### SendKeyResponse

Ƭ **SendKeyResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSendKeyResponse`](cluster_export.KeypadInput.md#tlvsendkeyresponse)\>

This command shall be generated in response to a SendKey command.

**`See`**

MatterSpecification.v11.Cluster § 6.8.3.2

#### Defined in

[packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts#L29)

## Variables

### KeypadInputBehavior

• `Const` **KeypadInputBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.KeypadInput.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`KeypadInputInterface`](behavior_definitions_keypad_input_export.md#keypadinputinterface)\>, [`KeypadInputInterface`](behavior_definitions_keypad_input_export.md#keypadinputinterface)\>

KeypadInputBehavior is the base class for objects that support interaction with [KeypadInput.Cluster](cluster_export.KeypadInput.md#cluster).

#### Defined in

[packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputBehavior.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputBehavior.ts#L16)

[packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputBehavior.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputBehavior.ts#L21)

[packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputBehavior.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputBehavior.ts#L23)
