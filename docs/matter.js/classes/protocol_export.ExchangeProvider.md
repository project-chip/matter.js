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
- [getProtocolHandler](protocol_export.ExchangeProvider.md#getprotocolhandler)
- [hasProtocolHandler](protocol_export.ExchangeProvider.md#hasprotocolhandler)
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

[packages/matter.js/src/protocol/ExchangeManager.ts:252](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/protocol/ExchangeManager.ts#L252)

## Properties

### channel

• `Private` **channel**: [`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:254](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/protocol/ExchangeManager.ts#L254)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: [`ExchangeManager`](protocol_export.ExchangeManager.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:253](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/protocol/ExchangeManager.ts#L253)

___

### reconnectChannelFunc

• `Private` `Optional` `Readonly` **reconnectChannelFunc**: () => `Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Type declaration

▸ (): `Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

##### Returns

`Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:255](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/protocol/ExchangeManager.ts#L255)

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/session_export.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/session_export.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:280](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/protocol/ExchangeManager.ts#L280)

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

[packages/matter.js/src/protocol/ExchangeManager.ts:266](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/protocol/ExchangeManager.ts#L266)

___

### getProtocolHandler

▸ **getProtocolHandler**(`protocolId`): `undefined` \| [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`undefined` \| [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:262](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/protocol/ExchangeManager.ts#L262)

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

[packages/matter.js/src/protocol/ExchangeManager.ts:258](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/protocol/ExchangeManager.ts#L258)

___

### initiateExchange

▸ **initiateExchange**(): [`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:270](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/protocol/ExchangeManager.ts#L270)

___

### reconnectChannel

▸ **reconnectChannel**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:274](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/protocol/ExchangeManager.ts#L274)
