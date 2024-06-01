[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / ChannelManager

# Class: ChannelManager

## Constructors

### new ChannelManager()

> **new ChannelManager**(`caseSessionsPerFabricAndNode`?): [`ChannelManager`](ChannelManager.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `caseSessionsPerFabricAndNode`? | `number` |

#### Returns

[`ChannelManager`](ChannelManager.md)

#### Source

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:17

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:16

***

### getOrCreateAsPaseChannel

> `private` **getOrCreateAsPaseChannel**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:26

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:28

***

### getChannel()

> **getChannel**(`fabric`, `nodeId`, `session`?): [`MessageChannel`](MessageChannel.md)\<`any`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `session`? | [`Session`](../../session/classes/Session.md)\<`any`\> |

#### Returns

[`MessageChannel`](MessageChannel.md)\<`any`\>

#### Source

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:19

***

### getChannelForSession()

> **getChannelForSession**(`session`): `undefined` \| [`MessageChannel`](MessageChannel.md)\<`any`\>

Returns the last established session for a Fabric and Node

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](../../session/classes/Session.md)\<`any`\> |

#### Returns

`undefined` \| [`MessageChannel`](MessageChannel.md)\<`any`\>

#### Source

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:23

***

### getOrCreateChannel()

> **getOrCreateChannel**(`byteArrayChannel`, `session`): `Promise`\<[`MessageChannel`](MessageChannel.md)\<`any`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `byteArrayChannel` | [`Channel`](../../common/interfaces/Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](../../session/classes/Session.md)\<`any`\> |

#### Returns

`Promise`\<[`MessageChannel`](MessageChannel.md)\<`any`\>\>

#### Source

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:27

***

### removeAllNodeChannels()

> **removeAllNodeChannels**(`fabric`, `nodeId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../datatype/README.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:24

***

### removeChannel()

> **removeChannel**(`fabric`, `nodeId`, `session`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `session` | [`Session`](../../session/classes/Session.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:25

***

### setChannel()

> **setChannel**(`fabric`, `nodeId`, `channel`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `channel` | [`MessageChannel`](MessageChannel.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:18
