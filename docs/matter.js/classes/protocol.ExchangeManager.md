[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol](../modules/protocol.md) / ExchangeManager

# Class: ExchangeManager<ContextT\>

[protocol](../modules/protocol.md).ExchangeManager

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](protocol.ExchangeManager.md#constructor)

### Properties

- [channelManager](protocol.ExchangeManager.md#channelmanager)
- [exchangeCounter](protocol.ExchangeManager.md#exchangecounter)
- [exchanges](protocol.ExchangeManager.md#exchanges)
- [messageCounter](protocol.ExchangeManager.md#messagecounter)
- [netListeners](protocol.ExchangeManager.md#netlisteners)
- [protocols](protocol.ExchangeManager.md#protocols)
- [sessionManager](protocol.ExchangeManager.md#sessionmanager)

### Methods

- [addNetInterface](protocol.ExchangeManager.md#addnetinterface)
- [addProtocolHandler](protocol.ExchangeManager.md#addprotocolhandler)
- [close](protocol.ExchangeManager.md#close)
- [initiateExchange](protocol.ExchangeManager.md#initiateexchange)
- [initiateExchangeWithChannel](protocol.ExchangeManager.md#initiateexchangewithchannel)
- [onMessage](protocol.ExchangeManager.md#onmessage)

## Constructors

### constructor

• **new ExchangeManager**<`ContextT`\>(`sessionManager`, `channelManager`)

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionManager` | [`SessionManager`](session.SessionManager.md)<`ContextT`\> |
| `channelManager` | [`ChannelManager`](protocol.ChannelManager.md) |

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L50)

## Properties

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol.ChannelManager.md)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:52](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L52)

___

### exchangeCounter

• `Private` `Readonly` **exchangeCounter**: [`ExchangeCounter`](protocol.ExchangeCounter.md)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L44)

___

### exchanges

• `Private` `Readonly` **exchanges**: `Map`<`number`, [`MessageExchange`](protocol.MessageExchange.md)<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:46](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L46)

___

### messageCounter

• `Private` `Readonly` **messageCounter**: [`MessageCounter`](protocol.MessageCounter.md)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L45)

___

### netListeners

• `Private` `Readonly` **netListeners**: [`NetListener`](../interfaces/net.NetListener.md)[]

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L48)

___

### protocols

• `Private` `Readonly` **protocols**: `Map`<`number`, [`ProtocolHandler`](../interfaces/protocol.ProtocolHandler.md)<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L47)

___

### sessionManager

• `Private` `Readonly` **sessionManager**: [`SessionManager`](session.SessionManager.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L51)

## Methods

### addNetInterface

▸ **addNetInterface**(`netInterface`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`NetInterface`](../interfaces/net.NetInterface.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L55)

___

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/protocol.ProtocolHandler.md)<`ContextT`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:62](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L62)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:79](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L79)

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](protocol.MessageExchange.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](protocol.MessageExchange.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:66](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L66)

___

### initiateExchangeWithChannel

▸ **initiateExchangeWithChannel**(`channel`, `protocolId`): [`MessageExchange`](protocol.MessageExchange.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](protocol.MessageChannel.md)<`ContextT`\> |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](protocol.MessageExchange.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L70)

___

### onMessage

▸ `Private` **onMessage**(`channel`, `messageBytes`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`Channel`](../interfaces/net.Channel.md)<`Uint8Array`\> |
| `messageBytes` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:86](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L86)
