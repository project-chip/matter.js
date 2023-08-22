[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ExchangeProvider

# Class: ExchangeProvider

[<internal>](../modules/internal_.md).ExchangeProvider

## Table of contents

### Constructors

- [constructor](internal_.ExchangeProvider.md#constructor)

### Properties

- [channel](internal_.ExchangeProvider.md#channel)
- [exchangeManager](internal_.ExchangeProvider.md#exchangemanager)
- [reconnectChannelFunc](internal_.ExchangeProvider.md#reconnectchannelfunc)

### Accessors

- [session](internal_.ExchangeProvider.md#session)

### Methods

- [addProtocolHandler](internal_.ExchangeProvider.md#addprotocolhandler)
- [initiateExchange](internal_.ExchangeProvider.md#initiateexchange)
- [reconnectChannel](internal_.ExchangeProvider.md#reconnectchannel)

## Constructors

### constructor

• **new ExchangeProvider**(`exchangeManager`, `channel`, `reconnectChannelFunc?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeManager` | [`ExchangeManager`](internal_.ExchangeManager.md)<[`MatterController`](internal_.MatterController.md)\> |
| `channel` | [`MessageChannel`](internal_.MessageChannel.md)<[`MatterController`](internal_.MatterController.md)\> |
| `reconnectChannelFunc?` | () => `Promise`<[`MessageChannel`](internal_.MessageChannel.md)<[`MatterController`](internal_.MatterController.md)\>\> |

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:54

## Properties

### channel

• `Private` **channel**: `any`

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:52

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:51

___

### reconnectChannelFunc

• `Private` `Optional` `Readonly` **reconnectChannelFunc**: `any`

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:53

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/internal_.Session.md)<[`MatterController`](internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/internal_.Session.md)<[`MatterController`](internal_.MatterController.md)\>

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:58

## Methods

### addProtocolHandler

▸ **addProtocolHandler**(`handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`ProtocolHandler`](../interfaces/internal_.ProtocolHandler.md)<[`MatterController`](internal_.MatterController.md)\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:55

___

### initiateExchange

▸ **initiateExchange**(): [`MessageExchange`](internal_.MessageExchange.md)<[`MatterController`](internal_.MatterController.md)\>

#### Returns

[`MessageExchange`](internal_.MessageExchange.md)<[`MatterController`](internal_.MatterController.md)\>

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:56

___

### reconnectChannel

▸ **reconnectChannel**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:57
