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

[packages/matter.js/src/protocol/ExchangeManager.ts:333](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/ExchangeManager.ts#L333)

## Properties

### channel

• `Private` **channel**: [`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:335](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/ExchangeManager.ts#L335)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: [`ExchangeManager`](protocol_export.ExchangeManager.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:334](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/ExchangeManager.ts#L334)

___

### reconnectChannelFunc

• `Private` `Optional` `Readonly` **reconnectChannelFunc**: () => `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Type declaration

▸ (): `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

##### Returns

`Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:336](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/ExchangeManager.ts#L336)

## Accessors

### session

• `get` **session**(): [`Session`](session_export.Session.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`Session`](session_export.Session.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:361](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/ExchangeManager.ts#L361)

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

[packages/matter.js/src/protocol/ExchangeManager.ts:347](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/ExchangeManager.ts#L347)

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

[packages/matter.js/src/protocol/ExchangeManager.ts:343](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/ExchangeManager.ts#L343)

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

[packages/matter.js/src/protocol/ExchangeManager.ts:339](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/ExchangeManager.ts#L339)

___

### initiateExchange

▸ **initiateExchange**(): [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:351](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/ExchangeManager.ts#L351)

___

### reconnectChannel

▸ **reconnectChannel**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:355](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/ExchangeManager.ts#L355)
