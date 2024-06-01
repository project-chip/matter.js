[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / ChannelManager

# Class: ChannelManager

[exports/protocol](../modules/exports_protocol.md).ChannelManager

## Table of contents

### Constructors

- [constructor](exports_protocol.ChannelManager.md#constructor)

### Properties

- [#private](exports_protocol.ChannelManager.md##private)
- [getOrCreateAsPaseChannel](exports_protocol.ChannelManager.md#getorcreateaspasechannel)

### Methods

- [close](exports_protocol.ChannelManager.md#close)
- [getChannel](exports_protocol.ChannelManager.md#getchannel)
- [getChannelForSession](exports_protocol.ChannelManager.md#getchannelforsession)
- [getOrCreateChannel](exports_protocol.ChannelManager.md#getorcreatechannel)
- [removeAllNodeChannels](exports_protocol.ChannelManager.md#removeallnodechannels)
- [removeChannel](exports_protocol.ChannelManager.md#removechannel)
- [setChannel](exports_protocol.ChannelManager.md#setchannel)

## Constructors

### constructor

• **new ChannelManager**(`caseSessionsPerFabricAndNode?`): [`ChannelManager`](exports_protocol.ChannelManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `caseSessionsPerFabricAndNode?` | `number` |

#### Returns

[`ChannelManager`](exports_protocol.ChannelManager.md)

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:17

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:16

___

### getOrCreateAsPaseChannel

• `Private` **getOrCreateAsPaseChannel**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:26

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:28

___

### getChannel

▸ **getChannel**(`fabric`, `nodeId`, `session?`): [`MessageChannel`](exports_protocol.MessageChannel.md)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `session?` | [`Session`](exports_session.Session.md)\<`any`\> |

#### Returns

[`MessageChannel`](exports_protocol.MessageChannel.md)\<`any`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:19

___

### getChannelForSession

▸ **getChannelForSession**(`session`): `undefined` \| [`MessageChannel`](exports_protocol.MessageChannel.md)\<`any`\>

Returns the last established session for a Fabric and Node

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](exports_session.Session.md)\<`any`\> |

#### Returns

`undefined` \| [`MessageChannel`](exports_protocol.MessageChannel.md)\<`any`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:23

___

### getOrCreateChannel

▸ **getOrCreateChannel**(`byteArrayChannel`, `session`): `Promise`\<[`MessageChannel`](exports_protocol.MessageChannel.md)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteArrayChannel` | [`Channel`](../interfaces/exports_common.Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](exports_session.Session.md)\<`any`\> |

#### Returns

`Promise`\<[`MessageChannel`](exports_protocol.MessageChannel.md)\<`any`\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:27

___

### removeAllNodeChannels

▸ **removeAllNodeChannels**(`fabric`, `nodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:24

___

### removeChannel

▸ **removeChannel**(`fabric`, `nodeId`, `session`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `session` | [`Session`](exports_session.Session.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:25

___

### setChannel

▸ **setChannel**(`fabric`, `nodeId`, `channel`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `channel` | [`MessageChannel`](exports_protocol.MessageChannel.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:18
