[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / ExchangeManager

# Class: ExchangeManager\<ContextT\>

[exports/protocol](../modules/exports_protocol.md).ExchangeManager

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](exports_protocol.ExchangeManager.md#constructor)

### Properties

- [channelManager](exports_protocol.ExchangeManager.md#channelmanager)
- [closingSessions](exports_protocol.ExchangeManager.md#closingsessions)
- [exchangeCounter](exports_protocol.ExchangeManager.md#exchangecounter)
- [exchanges](exports_protocol.ExchangeManager.md#exchanges)
- [onMessage](exports_protocol.ExchangeManager.md#onmessage)
- [protocols](exports_protocol.ExchangeManager.md#protocols)
- [sessionManager](exports_protocol.ExchangeManager.md#sessionmanager)
- [transportListeners](exports_protocol.ExchangeManager.md#transportlisteners)

### Methods

- [addProtocolHandler](exports_protocol.ExchangeManager.md#addprotocolhandler)
- [addTransportInterface](exports_protocol.ExchangeManager.md#addtransportinterface)
- [close](exports_protocol.ExchangeManager.md#close)
- [closeSession](exports_protocol.ExchangeManager.md#closesession)
- [deleteExchange](exports_protocol.ExchangeManager.md#deleteexchange)
- [getProtocolHandler](exports_protocol.ExchangeManager.md#getprotocolhandler)
- [hasProtocolHandler](exports_protocol.ExchangeManager.md#hasprotocolhandler)
- [initiateExchange](exports_protocol.ExchangeManager.md#initiateexchange)
- [initiateExchangeWithChannel](exports_protocol.ExchangeManager.md#initiateexchangewithchannel)

## Constructors

### constructor

• **new ExchangeManager**\<`ContextT`\>(`sessionManager`, `channelManager`): [`ExchangeManager`](exports_protocol.ExchangeManager.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionManager` | [`SessionManager`](exports_session.SessionManager.md)\<`ContextT`\> |
| `channelManager` | [`ChannelManager`](exports_protocol.ChannelManager.md) |

#### Returns

[`ExchangeManager`](exports_protocol.ExchangeManager.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:40

## Properties

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:34

___

### closingSessions

• `Private` `Readonly` **closingSessions**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:39

___

### exchangeCounter

• `Private` `Readonly` **exchangeCounter**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:35

___

### exchanges

• `Private` `Readonly` **exchanges**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:36

___

### onMessage

• `Private` **onMessage**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:48

___

### protocols

• `Private` `Readonly` **protocols**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:37

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:33

___

### transportListeners

• `Private` `Readonly` **transportListeners**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:38

## Methods

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)\<`ContextT`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:44

___

### addTransportInterface

▸ **addTransportInterface**(`netInterface`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`TransportInterface`](../interfaces/exports_common.TransportInterface.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:41

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:47

___

### closeSession

▸ **closeSession**(`session`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](exports_session.SecureSession.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:50

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

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:49

___

### getProtocolHandler

▸ **getProtocolHandler**(`protocolId`): `undefined` \| [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`undefined` \| [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:43

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

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:42

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](exports_protocol.MessageExchange.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:45

___

### initiateExchangeWithChannel

▸ **initiateExchangeWithChannel**(`channel`, `protocolId`): [`MessageExchange`](exports_protocol.MessageExchange.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](exports_protocol.MessageChannel.md)\<`ContextT`\> |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:46
