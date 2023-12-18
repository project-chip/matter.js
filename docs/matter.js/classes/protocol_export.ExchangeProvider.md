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

• **new ExchangeProvider**(`exchangeManager`, `channel`, `reconnectChannelFunc?`): [`ExchangeProvider`](protocol_export.ExchangeProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeManager` | [`ExchangeManager`](protocol_export.ExchangeManager.md)\<[`MatterController`](export._internal_.MatterController.md)\> |
| `channel` | [`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\> |
| `reconnectChannelFunc?` | () => `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\> |

#### Returns

[`ExchangeProvider`](protocol_export.ExchangeProvider.md)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:268](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L268)

## Properties

### channel

• `Private` **channel**: [`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:270](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L270)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: [`ExchangeManager`](protocol_export.ExchangeManager.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:269](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L269)

___

### reconnectChannelFunc

• `Private` `Optional` `Readonly` **reconnectChannelFunc**: () => `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Type declaration

▸ (): `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

##### Returns

`Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:271](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L271)

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/session_export.Session.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/session_export.Session.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:296](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L296)

## Methods

### addProtocolHandler

▸ **addProtocolHandler**(`handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<[`MatterController`](export._internal_.MatterController.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:282](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L282)

___

### getProtocolHandler

▸ **getProtocolHandler**(`protocolId`): `undefined` \| [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`undefined` \| [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:278](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L278)

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

[packages/matter.js/src/protocol/ExchangeManager.ts:274](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L274)

___

### initiateExchange

▸ **initiateExchange**(): [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:286](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L286)

___

### reconnectChannel

▸ **reconnectChannel**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:290](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L290)
