[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / ExchangeManager

# Class: ExchangeManager\<ContextT\>

[protocol/export](../modules/protocol_export.md).ExchangeManager

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](protocol_export.ExchangeManager.md#constructor)

### Properties

- [channelManager](protocol_export.ExchangeManager.md#channelmanager)
- [closingSessions](protocol_export.ExchangeManager.md#closingsessions)
- [exchangeCounter](protocol_export.ExchangeManager.md#exchangecounter)
- [exchanges](protocol_export.ExchangeManager.md#exchanges)
- [protocols](protocol_export.ExchangeManager.md#protocols)
- [sessionManager](protocol_export.ExchangeManager.md#sessionmanager)
- [transportListeners](protocol_export.ExchangeManager.md#transportlisteners)

### Methods

- [addProtocolHandler](protocol_export.ExchangeManager.md#addprotocolhandler)
- [addTransportInterface](protocol_export.ExchangeManager.md#addtransportinterface)
- [close](protocol_export.ExchangeManager.md#close)
- [closeSession](protocol_export.ExchangeManager.md#closesession)
- [deleteExchange](protocol_export.ExchangeManager.md#deleteexchange)
- [getProtocolHandler](protocol_export.ExchangeManager.md#getprotocolhandler)
- [hasProtocolHandler](protocol_export.ExchangeManager.md#hasprotocolhandler)
- [initiateExchange](protocol_export.ExchangeManager.md#initiateexchange)
- [initiateExchangeWithChannel](protocol_export.ExchangeManager.md#initiateexchangewithchannel)
- [onMessage](protocol_export.ExchangeManager.md#onmessage)

## Constructors

### constructor

• **new ExchangeManager**\<`ContextT`\>(`sessionManager`, `channelManager`): [`ExchangeManager`](protocol_export.ExchangeManager.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionManager` | [`SessionManager`](session_export.SessionManager.md)\<`ContextT`\> |
| `channelManager` | [`ChannelManager`](protocol_export.ChannelManager.md) |

#### Returns

[`ExchangeManager`](protocol_export.ExchangeManager.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L77)

## Properties

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol_export.ChannelManager.md)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L79)

___

### closingSessions

• `Private` `Readonly` **closingSessions**: `Set`\<`number`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L75)

___

### exchangeCounter

• `Private` `Readonly` **exchangeCounter**: [`ExchangeCounter`](protocol_export.ExchangeCounter.md)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L71)

___

### exchanges

• `Private` `Readonly` **exchanges**: `Map`\<`number`, [`MessageExchange`](protocol_export.MessageExchange.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L72)

___

### protocols

• `Private` `Readonly` **protocols**: `Map`\<`number`, [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L73)

___

### sessionManager

• `Private` `Readonly` **sessionManager**: [`SessionManager`](session_export.SessionManager.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L78)

___

### transportListeners

• `Private` `Readonly` **transportListeners**: [`Listener`](../interfaces/common_export.Listener.md)[]

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L74)

## Methods

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<`ContextT`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L106)

___

### addTransportInterface

▸ **addTransportInterface**(`netInterface`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`TransportInterface`](../interfaces/common_export.TransportInterface.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L82)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L131)

___

### closeSession

▸ **closeSession**(`session`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:279](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L279)

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

[packages/matter.js/src/protocol/ExchangeManager.ts:259](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L259)

___

### getProtocolHandler

▸ **getProtocolHandler**(`protocolId`): `undefined` \| [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`undefined` \| [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L102)

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

[packages/matter.js/src/protocol/ExchangeManager.ts:98](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L98)

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](protocol_export.MessageExchange.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L113)

___

### initiateExchangeWithChannel

▸ **initiateExchangeWithChannel**(`channel`, `protocolId`): [`MessageExchange`](protocol_export.MessageExchange.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](protocol_export.MessageChannel.md)\<`ContextT`\> |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L117)

___

### onMessage

▸ **onMessage**(`channel`, `messageBytes`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`Channel`](../interfaces/common_export.Channel.md)\<`Uint8Array`\> |
| `messageBytes` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L145)
