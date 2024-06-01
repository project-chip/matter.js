[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ChannelManager

# Class: ChannelManager

[\<internal\>](../modules/internal_.md).ChannelManager

## Table of contents

### Constructors

- [constructor](internal_.ChannelManager.md#constructor)

### Properties

- [#private](internal_.ChannelManager.md##private)
- [getOrCreateAsPaseChannel](internal_.ChannelManager.md#getorcreateaspasechannel)

### Methods

- [close](internal_.ChannelManager.md#close)
- [getChannel](internal_.ChannelManager.md#getchannel)
- [getChannelForSession](internal_.ChannelManager.md#getchannelforsession)
- [getOrCreateChannel](internal_.ChannelManager.md#getorcreatechannel)
- [removeAllNodeChannels](internal_.ChannelManager.md#removeallnodechannels)
- [removeChannel](internal_.ChannelManager.md#removechannel)
- [setChannel](internal_.ChannelManager.md#setchannel)

## Constructors

### constructor

• **new ChannelManager**(`caseSessionsPerFabricAndNode?`): [`ChannelManager`](internal_.ChannelManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `caseSessionsPerFabricAndNode?` | `number` |

#### Returns

[`ChannelManager`](internal_.ChannelManager.md)

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:17

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:16

___

### getOrCreateAsPaseChannel

• `Private` **getOrCreateAsPaseChannel**: `any`

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:26

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:28

___

### getChannel

▸ **getChannel**(`fabric`, `nodeId`, `session?`): [`MessageChannel`](internal_.MessageChannel.md)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `session?` | [`Session`](internal_.Session.md)\<`any`\> |

#### Returns

[`MessageChannel`](internal_.MessageChannel.md)\<`any`\>

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:19

___

### getChannelForSession

▸ **getChannelForSession**(`session`): `undefined` \| [`MessageChannel`](internal_.MessageChannel.md)\<`any`\>

Returns the last established session for a Fabric and Node

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](internal_.Session.md)\<`any`\> |

#### Returns

`undefined` \| [`MessageChannel`](internal_.MessageChannel.md)\<`any`\>

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:23

___

### getOrCreateChannel

▸ **getOrCreateChannel**(`byteArrayChannel`, `session`): `Promise`\<[`MessageChannel`](internal_.MessageChannel.md)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteArrayChannel` | [`Channel`](../interfaces/internal_.Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](internal_.Session.md)\<`any`\> |

#### Returns

`Promise`\<[`MessageChannel`](internal_.MessageChannel.md)\<`any`\>\>

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:27

___

### removeAllNodeChannels

▸ **removeAllNodeChannels**(`fabric`, `nodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:24

___

### removeChannel

▸ **removeChannel**(`fabric`, `nodeId`, `session`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `session` | [`Session`](internal_.Session.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:25

___

### setChannel

▸ **setChannel**(`fabric`, `nodeId`, `channel`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `channel` | [`MessageChannel`](internal_.MessageChannel.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:18
