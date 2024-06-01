[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/keypad-input/export

# behavior/definitions/keypad-input/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [KeypadInputBehavior](namespaces/KeypadInputBehavior/README.md)
- [KeypadInputInterface](namespaces/KeypadInputInterface/README.md)

### Classes

- [KeypadInputServer](classes/KeypadInputServer.md)

### Interfaces

- [KeypadInputBehavior](interfaces/KeypadInputBehavior.md)

## Type Aliases

### KeypadInputInterface

> **KeypadInputInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts#L31)

***

### SendKeyRequest

> **SendKeyRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSendKeyRequest`](../../../../cluster/export/namespaces/KeypadInput/README.md#tlvsendkeyrequest)\>

Upon receipt, this shall process a keycode as input to the media device.

If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will consider
the first key press to be a press and hold. When such a repeat KeyCode value is not received within 200ms, then the
endpoint will consider the last key press to be a release.

#### See

MatterSpecification.v11.Cluster § 6.8.3.1

#### Source

[packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts#L22)

***

### SendKeyResponse

> **SendKeyResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSendKeyResponse`](../../../../cluster/export/namespaces/KeypadInput/README.md#tlvsendkeyresponse)\>

This command shall be generated in response to a SendKey command.

#### See

MatterSpecification.v11.Cluster § 6.8.3.2

#### Source

[packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts#L29)

## Variables

### KeypadInputBehavior

> `const` **KeypadInputBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/KeypadInput/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`KeypadInputInterface`](README.md#keypadinputinterface)\>, [`KeypadInputInterface`](README.md#keypadinputinterface)\>

KeypadInputBehavior is the base class for objects that support interaction with [KeypadInput.Cluster](../../../../cluster/export/namespaces/KeypadInput/README.md#cluster).

#### Source

[packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputBehavior.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputBehavior.ts#L16)
