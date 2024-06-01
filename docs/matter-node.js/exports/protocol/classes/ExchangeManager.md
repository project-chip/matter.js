[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / ExchangeManager

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
| `sessionManager` | [`SessionManager`](../../session/classes/SessionManager.md)\<`ContextT`\> |
| `channelManager` | [`ChannelManager`](ChannelManager.md) |

#### Returns

[`ExchangeManager`](ExchangeManager.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:40

## Properties

### channelManager

> `private` `readonly` **channelManager**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:34

***

### closingSessions

> `private` `readonly` **closingSessions**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:39

***

### exchangeCounter

> `private` `readonly` **exchangeCounter**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:35

***

### exchanges

> `private` `readonly` **exchanges**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:36

***

### onMessage

> `private` **onMessage**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:48

***

### protocols

> `private` `readonly` **protocols**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:37

***

### sessionManager

> `private` `readonly` **sessionManager**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:33

***

### transportListeners

> `private` `readonly` **transportListeners**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:38

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

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:44

***

### addTransportInterface()

> **addTransportInterface**(`netInterface`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `netInterface` | [`TransportInterface`](../../common/interfaces/TransportInterface.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:41

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:47

***

### closeSession()

> **closeSession**(`session`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../session/classes/SecureSession.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:50

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

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:49

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

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:43

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

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:42

***

### initiateExchange()

> **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:45

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

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:46
