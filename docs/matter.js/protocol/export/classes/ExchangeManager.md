[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / ExchangeManager

# Class: ExchangeManager\<ContextT\>

## Type parameters

| Type parameter |
| :------ |
| `ContextT` |

## Constructors

### new ExchangeManager()

> **new ExchangeManager**\<`ContextT`\>(`sessionManager`, `channelManager`): [`ExchangeManager`](ExchangeManager.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sessionManager` | [`SessionManager`](../../../session/export/classes/SessionManager.md)\<`ContextT`\> |
| `channelManager` | [`ChannelManager`](ChannelManager.md) |

#### Returns

[`ExchangeManager`](ExchangeManager.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L77)

## Properties

### channelManager

> `private` `readonly` **channelManager**: [`ChannelManager`](ChannelManager.md)

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L79)

***

### closingSessions

> `private` `readonly` **closingSessions**: `Set`\<`number`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L75)

***

### exchangeCounter

> `private` `readonly` **exchangeCounter**: [`ExchangeCounter`](ExchangeCounter.md)

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L71)

***

### exchanges

> `private` `readonly` **exchanges**: `Map`\<`number`, [`MessageExchange`](MessageExchange.md)\<`ContextT`\>\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L72)

***

### protocols

> `private` `readonly` **protocols**: `Map`\<`number`, [`ProtocolHandler`](../interfaces/ProtocolHandler.md)\<`ContextT`\>\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L73)

***

### sessionManager

> `private` `readonly` **sessionManager**: [`SessionManager`](../../../session/export/classes/SessionManager.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L78)

***

### transportListeners

> `private` `readonly` **transportListeners**: [`Listener`](../../../common/export/interfaces/Listener.md)[]

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L74)

## Methods

### addProtocolHandler()

> **addProtocolHandler**(`protocol`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/ProtocolHandler.md)\<`ContextT`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L106)

***

### addTransportInterface()

> **addTransportInterface**(`netInterface`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `netInterface` | [`TransportInterface`](../../../common/export/interfaces/TransportInterface.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L82)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:131](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L131)

***

### closeSession()

> **closeSession**(`session`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../../session/export/classes/SecureSession.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:279](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L279)

***

### deleteExchange()

> **deleteExchange**(`exchangeIndex`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchangeIndex` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:259](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L259)

***

### getProtocolHandler()

> **getProtocolHandler**(`protocolId`): `undefined` \| [`ProtocolHandler`](../interfaces/ProtocolHandler.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`undefined` \| [`ProtocolHandler`](../interfaces/ProtocolHandler.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L102)

***

### hasProtocolHandler()

> **hasProtocolHandler**(`protocolId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L98)

***

### initiateExchange()

> **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L113)

***

### initiateExchangeWithChannel()

> **initiateExchangeWithChannel**(`channel`, `protocolId`): [`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](MessageChannel.md)\<`ContextT`\> |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L117)

***

### onMessage()

> `private` **onMessage**(`channel`, `messageBytes`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | [`Channel`](../../../common/export/interfaces/Channel.md)\<`Uint8Array`\> |
| `messageBytes` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L145)
