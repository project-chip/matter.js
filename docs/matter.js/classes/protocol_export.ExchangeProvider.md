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

[packages/matter.js/src/protocol/ExchangeManager.ts:156](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L156)

## Properties

### channel

• `Private` **channel**: [`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:158](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L158)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: [`ExchangeManager`](protocol_export.ExchangeManager.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:157](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L157)

___

### reconnectChannelFunc

• `Private` `Optional` `Readonly` **reconnectChannelFunc**: () => `Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Type declaration

▸ (): `Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

##### Returns

`Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:159](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L159)

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/session_export.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/session_export.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:176](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L176)

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

[packages/matter.js/src/protocol/ExchangeManager.ts:162](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L162)

___

### initiateExchange

▸ **initiateExchange**(): [`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:166](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L166)

___

### reconnectChannel

▸ **reconnectChannel**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:170](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L170)
