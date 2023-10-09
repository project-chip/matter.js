[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / ExchangeManager

# Class: ExchangeManager<ContextT\>

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
- [exchangeCounter](protocol_export.ExchangeManager.md#exchangecounter)
- [exchanges](protocol_export.ExchangeManager.md#exchanges)
- [messageCounter](protocol_export.ExchangeManager.md#messagecounter)
- [protocols](protocol_export.ExchangeManager.md#protocols)
- [sessionManager](protocol_export.ExchangeManager.md#sessionmanager)
- [transportListeners](protocol_export.ExchangeManager.md#transportlisteners)

### Methods

- [addProtocolHandler](protocol_export.ExchangeManager.md#addprotocolhandler)
- [addTransportInterface](protocol_export.ExchangeManager.md#addtransportinterface)
- [close](protocol_export.ExchangeManager.md#close)
- [initiateExchange](protocol_export.ExchangeManager.md#initiateexchange)
- [initiateExchangeWithChannel](protocol_export.ExchangeManager.md#initiateexchangewithchannel)
- [onMessage](protocol_export.ExchangeManager.md#onmessage)

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
| `sessionManager` | [`SessionManager`](session_export.SessionManager.md)<`ContextT`\> |
| `channelManager` | [`ChannelManager`](protocol_export.ChannelManager.md) |

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:57

## Properties

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol_export.ChannelManager.md)

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:59

___

### exchangeCounter

• `Private` `Readonly` **exchangeCounter**: [`ExchangeCounter`](protocol_export.ExchangeCounter.md)

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:51

___

### exchanges

• `Private` `Readonly` **exchanges**: `Map`<`number`, [`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\>\>

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:53

___

### messageCounter

• `Private` `Readonly` **messageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:52

___

### protocols

• `Private` `Readonly` **protocols**: `Map`<`number`, [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)<`ContextT`\>\>

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:54

___

### sessionManager

• `Private` `Readonly` **sessionManager**: [`SessionManager`](session_export.SessionManager.md)<`ContextT`\>

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:58

___

### transportListeners

• `Private` `Readonly` **transportListeners**: [`Listener`](../interfaces/common_export.Listener.md)[]

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:55

## Methods

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)<`ContextT`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:70

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

packages/matter.js/src/protocol/ExchangeManager.ts:62

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:89

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\>

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:74

___

### initiateExchangeWithChannel

▸ **initiateExchangeWithChannel**(`channel`, `protocolId`): [`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](protocol_export.MessageChannel.md)<`ContextT`\> |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\>

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:78

___

### onMessage

▸ `Private` **onMessage**(`channel`, `messageBytes`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`Channel`](../interfaces/common_export.Channel.md)<`Uint8Array`\> |
| `messageBytes` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/protocol/ExchangeManager.ts:100
