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
- [netListeners](exports_protocol.ExchangeManager.md#netlisteners)
- [onMessage](exports_protocol.ExchangeManager.md#onmessage)
- [protocols](exports_protocol.ExchangeManager.md#protocols)
- [sessionManager](exports_protocol.ExchangeManager.md#sessionmanager)

### Methods

- [addNetInterface](exports_protocol.ExchangeManager.md#addnetinterface)
- [addProtocolHandler](exports_protocol.ExchangeManager.md#addprotocolhandler)
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

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:33

## Properties

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:27

___

### exchangeCounter

• `Private` `Readonly` **exchangeCounter**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:28

___

### exchanges

• `Private` `Readonly` **exchanges**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:30

___

### messageCounter

• `Private` `Readonly` **messageCounter**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:29

___

### netListeners

• `Private` `Readonly` **netListeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:32

___

### onMessage

• `Private` **onMessage**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:39

___

### protocols

• `Private` `Readonly` **protocols**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:31

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:26

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

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:34

___

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)<`ContextT`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:35

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:38

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](exports_protocol.MessageExchange.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](exports_datatype.NodeId.md) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)<`ContextT`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:36

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

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:37
