[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / PaseClient

# Class: PaseClient

[exports/session](../modules/exports_session.md).PaseClient

## Table of contents

### Constructors

- [constructor](exports_session.PaseClient.md#constructor)

### Methods

- [pair](exports_session.PaseClient.md#pair)

## Constructors

### constructor

• **new PaseClient**()

## Methods

### pair

▸ **pair**(`client`, `exchange`, `setupPin`): `Promise`<[`SecureSession`](exports_session.SecureSession.md)<[`MatterController`](index.MatterController.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`MatterController`](index.MatterController.md) |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\> |
| `setupPin` | `number` |

#### Returns

`Promise`<[`SecureSession`](exports_session.SecureSession.md)<[`MatterController`](index.MatterController.md)\>\>

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseClient.d.ts:10
