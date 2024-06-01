[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / ChannelManager

# Class: ChannelManager

## Constructors

### new ChannelManager()

> **new ChannelManager**(`caseSessionsPerFabricAndNode`): [`ChannelManager`](ChannelManager.md)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `caseSessionsPerFabricAndNode` | `number` | `3` |

#### Returns

[`ChannelManager`](ChannelManager.md)

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L28)

## Properties

### #caseSessionsPerFabricAndNode

> `private` `readonly` **#caseSessionsPerFabricAndNode**: `number`

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L25)

***

### #channels

> `private` `readonly` **#channels**: `Map`\<`string`, [`MessageChannel`](MessageChannel.md)\<`any`\>[]\>

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L23)

***

### #paseChannels

> `private` `readonly` **#paseChannels**: `Map`\<[`Session`](../../../session/export/classes/Session.md)\<`any`\>, [`MessageChannel`](MessageChannel.md)\<`any`\>\>

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L24)

## Methods

### #findLeastActiveChannel()

> `private` **#findLeastActiveChannel**(`channels`): [`MessageChannel`](MessageChannel.md)\<`any`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channels` | [`MessageChannel`](MessageChannel.md)\<`any`\>[] |

#### Returns

[`MessageChannel`](MessageChannel.md)\<`any`\>

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L36)

***

### #getChannelKey()

> `private` **#getChannelKey**(`fabric`, `nodeId`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L32)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L145)

***

### getChannel()

> **getChannel**(`fabric`, `nodeId`, `session`?): [`MessageChannel`](MessageChannel.md)\<`any`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `session`? | [`Session`](../../../session/export/classes/Session.md)\<`any`\> |

#### Returns

[`MessageChannel`](MessageChannel.md)\<`any`\>

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L71)

***

### getChannelForSession()

> **getChannelForSession**(`session`): `undefined` \| [`MessageChannel`](MessageChannel.md)\<`any`\>

Returns the last established session for a Fabric and Node

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](../../../session/export/classes/Session.md)\<`any`\> |

#### Returns

`undefined` \| [`MessageChannel`](MessageChannel.md)\<`any`\>

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L83)

***

### getOrCreateAsPaseChannel()

> `private` **getOrCreateAsPaseChannel**(`byteArrayChannel`, `session`): [`MessageChannel`](MessageChannel.md)\<`any`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `byteArrayChannel` | [`Channel`](../../../common/export/interfaces/Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](../../../session/export/classes/Session.md)\<`any`\> |

#### Returns

[`MessageChannel`](MessageChannel.md)\<`any`\>

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L111)

***

### getOrCreateChannel()

> **getOrCreateChannel**(`byteArrayChannel`, `session`): `Promise`\<[`MessageChannel`](MessageChannel.md)\<`any`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `byteArrayChannel` | [`Channel`](../../../common/export/interfaces/Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](../../../session/export/classes/Session.md)\<`any`\> |

#### Returns

`Promise`\<[`MessageChannel`](MessageChannel.md)\<`any`\>\>

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L121)

***

### removeAllNodeChannels()

> **removeAllNodeChannels**(`fabric`, `nodeId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L96)

***

### removeChannel()

> **removeChannel**(`fabric`, `nodeId`, `session`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `session` | [`Session`](../../../session/export/classes/Session.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L104)

***

### setChannel()

> **setChannel**(`fabric`, `nodeId`, `channel`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `channel` | [`MessageChannel`](MessageChannel.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/ChannelManager.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ChannelManager.ts#L46)
