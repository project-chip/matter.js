[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ExchangeManager

# Class: ExchangeManager<ContextT\>

[<internal>](../modules/internal_.md).ExchangeManager

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](internal_.ExchangeManager.md#constructor)

### Properties

- [channelManager](internal_.ExchangeManager.md#channelmanager)
- [exchangeCounter](internal_.ExchangeManager.md#exchangecounter)
- [exchanges](internal_.ExchangeManager.md#exchanges)
- [messageCounter](internal_.ExchangeManager.md#messagecounter)
- [onMessage](internal_.ExchangeManager.md#onmessage)
- [protocols](internal_.ExchangeManager.md#protocols)
- [sessionManager](internal_.ExchangeManager.md#sessionmanager)
- [transportListeners](internal_.ExchangeManager.md#transportlisteners)

### Methods

- [addProtocolHandler](internal_.ExchangeManager.md#addprotocolhandler)
- [addTransportInterface](internal_.ExchangeManager.md#addtransportinterface)
- [close](internal_.ExchangeManager.md#close)
- [initiateExchange](internal_.ExchangeManager.md#initiateexchange)
- [initiateExchangeWithChannel](internal_.ExchangeManager.md#initiateexchangewithchannel)

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
| `sessionManager` | [`SessionManager`](internal_.SessionManager.md)<`ContextT`\> |
| `channelManager` | [`ChannelManager`](internal_.ChannelManager.md) |

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:34

## Properties

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:28

___

### exchangeCounter

• `Private` `Readonly` **exchangeCounter**: `any`

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:29

___

### exchanges

• `Private` `Readonly` **exchanges**: `any`

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:31

___

### messageCounter

• `Private` `Readonly` **messageCounter**: `any`

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:30

___

### onMessage

• `Private` **onMessage**: `any`

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:40

___

### protocols

• `Private` `Readonly` **protocols**: `any`

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:32

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:27

___

### transportListeners

• `Private` `Readonly` **transportListeners**: `any`

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:33

## Methods

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/internal_.ProtocolHandler.md)<`ContextT`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:36

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

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:35

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:39

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](internal_.MessageExchange.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](internal_.MessageExchange.md)<`ContextT`\>

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:37

___

### initiateExchangeWithChannel

▸ **initiateExchangeWithChannel**(`channel`, `protocolId`): [`MessageExchange`](internal_.MessageExchange.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](internal_.MessageChannel.md)<`ContextT`\> |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](internal_.MessageExchange.md)<`ContextT`\>

#### Defined in

matter.js/dist/cjs/protocol/ExchangeManager.d.ts:38
