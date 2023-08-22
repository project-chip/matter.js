[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / ExchangeProvider

# Class: ExchangeProvider

[exports/protocol](../modules/exports_protocol.md).ExchangeProvider

## Table of contents

### Constructors

- [constructor](exports_protocol.ExchangeProvider.md#constructor)

### Properties

- [channel](exports_protocol.ExchangeProvider.md#channel)
- [exchangeManager](exports_protocol.ExchangeProvider.md#exchangemanager)
- [reconnectChannelFunc](exports_protocol.ExchangeProvider.md#reconnectchannelfunc)

### Accessors

- [session](exports_protocol.ExchangeProvider.md#session)

### Methods

- [addProtocolHandler](exports_protocol.ExchangeProvider.md#addprotocolhandler)
- [initiateExchange](exports_protocol.ExchangeProvider.md#initiateexchange)
- [reconnectChannel](exports_protocol.ExchangeProvider.md#reconnectchannel)

## Constructors

### constructor

• **new ExchangeProvider**(`exchangeManager`, `channel`, `reconnectChannelFunc?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeManager` | [`ExchangeManager`](exports_protocol.ExchangeManager.md)<[`MatterController`](export._internal_.MatterController.md)\> |
| `channel` | [`MessageChannel`](exports_protocol.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\> |
| `reconnectChannelFunc?` | () => `Promise`<[`MessageChannel`](exports_protocol.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>\> |

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:54

## Properties

### channel

• `Private` **channel**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:52

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:51

___

### reconnectChannelFunc

• `Private` `Optional` `Readonly` **reconnectChannelFunc**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:53

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/exports_session.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/exports_session.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:58

## Methods

### addProtocolHandler

▸ **addProtocolHandler**(`handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)<[`MatterController`](export._internal_.MatterController.md)\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:55

___

### initiateExchange

▸ **initiateExchange**(): [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:56

___

### reconnectChannel

▸ **reconnectChannel**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:57
