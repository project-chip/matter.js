[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / ExchangeProvider

# Class: ExchangeProvider

[protocol/export](../modules/protocol_export.md).ExchangeProvider

## Table of contents

### Constructors

- [constructor](protocol_export.ExchangeProvider.md#constructor)

### Properties

- [channel](protocol_export.ExchangeProvider.md#channel)
- [exchangeManager](protocol_export.ExchangeProvider.md#exchangemanager)
- [reconnectChannelFunc](protocol_export.ExchangeProvider.md#reconnectchannelfunc)

### Accessors

- [session](protocol_export.ExchangeProvider.md#session)

### Methods

- [addProtocolHandler](protocol_export.ExchangeProvider.md#addprotocolhandler)
- [initiateExchange](protocol_export.ExchangeProvider.md#initiateexchange)
- [reconnectChannel](protocol_export.ExchangeProvider.md#reconnectchannel)

## Constructors

### constructor

• **new ExchangeProvider**(`exchangeManager`, `channel`, `reconnectChannelFunc?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeManager` | [`ExchangeManager`](protocol_export.ExchangeManager.md)<[`MatterController`](export._internal_.MatterController.md)\> |
| `channel` | [`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\> |
| `reconnectChannelFunc?` | () => `Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>\> |

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:158

## Properties

### channel

• `Private` **channel**: [`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:160

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: [`ExchangeManager`](protocol_export.ExchangeManager.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:159

___

### reconnectChannelFunc

• `Private` `Optional` `Readonly` **reconnectChannelFunc**: () => `Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Type declaration

▸ (): `Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

##### Returns

`Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:161

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/session_export.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/session_export.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:178

## Methods

### addProtocolHandler

▸ **addProtocolHandler**(`handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)<[`MatterController`](export._internal_.MatterController.md)\> |

#### Returns

`void`

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:164

___

### initiateExchange

▸ **initiateExchange**(): [`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:168

___

### reconnectChannel

▸ **reconnectChannel**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:172
