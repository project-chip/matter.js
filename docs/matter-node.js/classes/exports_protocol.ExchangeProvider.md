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
| `exchangeManager` | [`ExchangeManager`](exports_protocol.ExchangeManager.md)<[`MatterController`](index.MatterController.md)\> |
| `channel` | [`MessageChannel`](exports_protocol.MessageChannel.md)<[`MatterController`](index.MatterController.md)\> |
| `reconnectChannelFunc?` | () => `Promise`<[`MessageChannel`](exports_protocol.MessageChannel.md)<[`MatterController`](index.MatterController.md)\>\> |

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:53

## Properties

### channel

• `Private` **channel**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:51

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:50

___

### reconnectChannelFunc

• `Private` `Optional` `Readonly` **reconnectChannelFunc**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:52

## Methods

### addProtocolHandler

▸ **addProtocolHandler**(`handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)<[`MatterController`](index.MatterController.md)\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:54

___

### initiateExchange

▸ **initiateExchange**(): [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\>

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:55

___

### reconnectChannel

▸ **reconnectChannel**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:56
