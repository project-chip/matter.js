[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session](../modules/session.md) / CaseServer

# Class: CaseServer

[session](../modules/session.md).CaseServer

## Implements

- [`ProtocolHandler`](../interfaces/protocol.ProtocolHandler.md)<[`MatterDevice`](index.MatterDevice.md)\>

## Table of contents

### Constructors

- [constructor](session.CaseServer.md#constructor)

### Methods

- [getId](session.CaseServer.md#getid)
- [handleSigma1](session.CaseServer.md#handlesigma1)
- [onNewExchange](session.CaseServer.md#onnewexchange)

## Constructors

### constructor

• **new CaseServer**()

## Methods

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol.ProtocolHandler.md).[getId](../interfaces/protocol.ProtocolHandler.md#getid)

#### Defined in

[packages/matter.js/src/session/case/CaseServer.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseServer.ts#L31)

___

### handleSigma1

▸ `Private` **handleSigma1**(`server`, `messenger`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`MatterDevice`](index.MatterDevice.md) |
| `messenger` | [`CaseServerMessenger`](session.CaseServerMessenger.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/session/case/CaseServer.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseServer.ts#L35)

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterDevice`](index.MatterDevice.md)\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol.ProtocolHandler.md).[onNewExchange](../interfaces/protocol.ProtocolHandler.md#onnewexchange)

#### Defined in

[packages/matter.js/src/session/case/CaseServer.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseServer.ts#L21)
