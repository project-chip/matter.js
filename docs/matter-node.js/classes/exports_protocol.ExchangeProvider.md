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
- [getProtocolHandler](exports_protocol.ExchangeProvider.md#getprotocolhandler)
- [hasProtocolHandler](exports_protocol.ExchangeProvider.md#hasprotocolhandler)
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

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:62

## Properties

### channel

• `Private` **channel**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:60

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:59

___

### reconnectChannelFunc

• `Private` `Optional` `Readonly` **reconnectChannelFunc**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:61

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/exports_session.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/exports_session.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:68

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

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:65

___

### getProtocolHandler

▸ **getProtocolHandler**(`protocolId`): `undefined` \| [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`undefined` \| [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:64

___

### hasProtocolHandler

▸ **hasProtocolHandler**(`protocolId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:63

___

### initiateExchange

▸ **initiateExchange**(): [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:66

___

### reconnectChannel

▸ **reconnectChannel**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:67
