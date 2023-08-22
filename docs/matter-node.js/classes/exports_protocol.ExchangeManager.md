[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / ExchangeManager

# Class: ExchangeManager<ContextT\>

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
- [exchangeCounter](exports_protocol.ExchangeManager.md#exchangecounter)
- [exchanges](exports_protocol.ExchangeManager.md#exchanges)
- [messageCounter](exports_protocol.ExchangeManager.md#messagecounter)
- [onMessage](exports_protocol.ExchangeManager.md#onmessage)
- [protocols](exports_protocol.ExchangeManager.md#protocols)
- [sessionManager](exports_protocol.ExchangeManager.md#sessionmanager)
- [transportListeners](exports_protocol.ExchangeManager.md#transportlisteners)

### Methods

- [addProtocolHandler](exports_protocol.ExchangeManager.md#addprotocolhandler)
- [addTransportInterface](exports_protocol.ExchangeManager.md#addtransportinterface)
- [close](exports_protocol.ExchangeManager.md#close)
- [initiateExchange](exports_protocol.ExchangeManager.md#initiateexchange)
- [initiateExchangeWithChannel](exports_protocol.ExchangeManager.md#initiateexchangewithchannel)

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
| `sessionManager` | [`SessionManager`](exports_session.SessionManager.md)<`ContextT`\> |
| `channelManager` | [`ChannelManager`](exports_protocol.ChannelManager.md) |

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:34

## Properties

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:28

___

### exchangeCounter

• `Private` `Readonly` **exchangeCounter**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:29

___

### exchanges

• `Private` `Readonly` **exchanges**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:31

___

### messageCounter

• `Private` `Readonly` **messageCounter**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:30

___

### onMessage

• `Private` **onMessage**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:40

___

### protocols

• `Private` `Readonly` **protocols**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:32

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:27

___

### transportListeners

• `Private` `Readonly` **transportListeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:33

## Methods

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)<`ContextT`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:36

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

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:35

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:39

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](exports_protocol.MessageExchange.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)<`ContextT`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:37

___

### initiateExchangeWithChannel

▸ **initiateExchangeWithChannel**(`channel`, `protocolId`): [`MessageExchange`](exports_protocol.MessageExchange.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](exports_protocol.MessageChannel.md)<`ContextT`\> |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)<`ContextT`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:38
