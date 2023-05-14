[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session](../modules/session.md) / PaseClient

# Class: PaseClient

[session](../modules/session.md).PaseClient

## Table of contents

### Constructors

- [constructor](session.PaseClient.md#constructor)

### Methods

- [pair](session.PaseClient.md#pair)

## Constructors

### constructor

• **new PaseClient**()

## Methods

### pair

▸ **pair**(`client`, `exchange`, `setupPin`): `Promise`<[`SecureSession`](session.SecureSession.md)<[`MatterController`](index.MatterController.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`MatterController`](index.MatterController.md) |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\> |
| `setupPin` | `number` |

#### Returns

`Promise`<[`SecureSession`](session.SecureSession.md)<[`MatterController`](index.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/session/pase/PaseClient.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseClient.ts#L20)
