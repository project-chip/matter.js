[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol](../modules/protocol.md) / ExchangeProvider

# Class: ExchangeProvider

[protocol](../modules/protocol.md).ExchangeProvider

## Table of contents

### Constructors

- [constructor](protocol.ExchangeProvider.md#constructor)

### Properties

- [channel](protocol.ExchangeProvider.md#channel)
- [exchangeManager](protocol.ExchangeProvider.md#exchangemanager)
- [reconnectChannelFunc](protocol.ExchangeProvider.md#reconnectchannelfunc)

### Methods

- [addProtocolHandler](protocol.ExchangeProvider.md#addprotocolhandler)
- [initiateExchange](protocol.ExchangeProvider.md#initiateexchange)
- [reconnectChannel](protocol.ExchangeProvider.md#reconnectchannel)

## Constructors

### constructor

• **new ExchangeProvider**(`exchangeManager`, `channel`, `reconnectChannelFunc?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeManager` | [`ExchangeManager`](protocol.ExchangeManager.md)<[`MatterController`](index.MatterController.md)\> |
| `channel` | [`MessageChannel`](protocol.MessageChannel.md)<[`MatterController`](index.MatterController.md)\> |
| `reconnectChannelFunc?` | () => `Promise`<[`MessageChannel`](protocol.MessageChannel.md)<[`MatterController`](index.MatterController.md)\>\> |

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:135](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L135)

## Properties

### channel

• `Private` **channel**: [`MessageChannel`](protocol.MessageChannel.md)<[`MatterController`](index.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:137](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L137)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: [`ExchangeManager`](protocol.ExchangeManager.md)<[`MatterController`](index.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:136](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L136)

___

### reconnectChannelFunc

• `Private` `Optional` `Readonly` **reconnectChannelFunc**: () => `Promise`<[`MessageChannel`](protocol.MessageChannel.md)<[`MatterController`](index.MatterController.md)\>\>

#### Type declaration

▸ (): `Promise`<[`MessageChannel`](protocol.MessageChannel.md)<[`MatterController`](index.MatterController.md)\>\>

##### Returns

`Promise`<[`MessageChannel`](protocol.MessageChannel.md)<[`MatterController`](index.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:138](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L138)

## Methods

### addProtocolHandler

▸ **addProtocolHandler**(`handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`ProtocolHandler`](../interfaces/protocol.ProtocolHandler.md)<[`MatterController`](index.MatterController.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:142](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L142)

___

### initiateExchange

▸ **initiateExchange**(): [`MessageExchange`](protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\>

#### Returns

[`MessageExchange`](protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:146](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L146)

___

### reconnectChannel

▸ **reconnectChannel**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:150](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L150)
