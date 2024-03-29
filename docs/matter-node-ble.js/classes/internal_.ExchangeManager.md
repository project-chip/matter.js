[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ExchangeManager

# Class: ExchangeManager\<ContextT\>

[\<internal\>](../modules/internal_.md).ExchangeManager

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](internal_.ExchangeManager.md#constructor)

### Properties

- [channelManager](internal_.ExchangeManager.md#channelmanager)
- [closingSessions](internal_.ExchangeManager.md#closingsessions)
- [exchangeCounter](internal_.ExchangeManager.md#exchangecounter)
- [exchanges](internal_.ExchangeManager.md#exchanges)
- [onMessage](internal_.ExchangeManager.md#onmessage)
- [protocols](internal_.ExchangeManager.md#protocols)
- [sessionManager](internal_.ExchangeManager.md#sessionmanager)
- [transportListeners](internal_.ExchangeManager.md#transportlisteners)

### Methods

- [addProtocolHandler](internal_.ExchangeManager.md#addprotocolhandler)
- [addTransportInterface](internal_.ExchangeManager.md#addtransportinterface)
- [close](internal_.ExchangeManager.md#close)
- [closeSession](internal_.ExchangeManager.md#closesession)
- [deleteExchange](internal_.ExchangeManager.md#deleteexchange)
- [getProtocolHandler](internal_.ExchangeManager.md#getprotocolhandler)
- [hasProtocolHandler](internal_.ExchangeManager.md#hasprotocolhandler)
- [initiateExchange](internal_.ExchangeManager.md#initiateexchange)
- [initiateExchangeWithChannel](internal_.ExchangeManager.md#initiateexchangewithchannel)

## Constructors

### constructor

• **new ExchangeManager**\<`ContextT`\>(`sessionManager`, `channelManager`): [`ExchangeManager`](internal_.ExchangeManager.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionManager` | [`SessionManager`](internal_.SessionManager.md)\<`ContextT`\> |
| `channelManager` | [`ChannelManager`](internal_.ChannelManager.md) |

#### Returns

[`ExchangeManager`](internal_.ExchangeManager.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:40

## Properties

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:34

___

### closingSessions

• `Private` `Readonly` **closingSessions**: `any`

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:39

___

### exchangeCounter

• `Private` `Readonly` **exchangeCounter**: `any`

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:35

___

### exchanges

• `Private` `Readonly` **exchanges**: `any`

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:36

___

### onMessage

• `Private` **onMessage**: `any`

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:48

___

### protocols

• `Private` `Readonly` **protocols**: `any`

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:37

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:33

___

### transportListeners

• `Private` `Readonly` **transportListeners**: `any`

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:38

## Methods

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/internal_.ProtocolHandler.md)\<`ContextT`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:44

___

### addTransportInterface

▸ **addTransportInterface**(`netInterface`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`TransportInterface`](../interfaces/internal_.TransportInterface.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:41

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:47

___

### closeSession

▸ **closeSession**(`session`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](internal_.SecureSession.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:50

___

### deleteExchange

▸ **deleteExchange**(`exchangeIndex`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeIndex` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:49

___

### getProtocolHandler

▸ **getProtocolHandler**(`protocolId`): `undefined` \| [`ProtocolHandler`](../interfaces/internal_.ProtocolHandler.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`undefined` \| [`ProtocolHandler`](../interfaces/internal_.ProtocolHandler.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:43

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

matter.js/dist/esm/protocol/ExchangeManager.d.ts:42

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:45

___

### initiateExchangeWithChannel

▸ **initiateExchangeWithChannel**(`channel`, `protocolId`): [`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](internal_.MessageChannel.md)\<`ContextT`\> |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:46
