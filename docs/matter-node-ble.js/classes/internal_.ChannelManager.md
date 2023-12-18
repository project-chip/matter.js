[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ChannelManager

# Class: ChannelManager

[\<internal\>](../modules/internal_.md).ChannelManager

## Table of contents

### Constructors

- [constructor](internal_.ChannelManager.md#constructor)

### Properties

- [channels](internal_.ChannelManager.md#channels)
- [getChannelKey](internal_.ChannelManager.md#getchannelkey)
- [getOrCreateAsPaseChannel](internal_.ChannelManager.md#getorcreateaspasechannel)
- [paseChannels](internal_.ChannelManager.md#pasechannels)

### Methods

- [close](internal_.ChannelManager.md#close)
- [getChannel](internal_.ChannelManager.md#getchannel)
- [getChannelForSession](internal_.ChannelManager.md#getchannelforsession)
- [getOrCreateChannel](internal_.ChannelManager.md#getorcreatechannel)
- [removeChannel](internal_.ChannelManager.md#removechannel)
- [setChannel](internal_.ChannelManager.md#setchannel)

## Constructors

### constructor

• **new ChannelManager**(): [`ChannelManager`](internal_.ChannelManager.md)

#### Returns

[`ChannelManager`](internal_.ChannelManager.md)

## Properties

### channels

• `Private` `Readonly` **channels**: `any`

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:16

___

### getChannelKey

• `Private` **getChannelKey**: `any`

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:18

___

### getOrCreateAsPaseChannel

• `Private` **getOrCreateAsPaseChannel**: `any`

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:23

___

### paseChannels

• `Private` `Readonly` **paseChannels**: `any`

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:17

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:25

___

### getChannel

▸ **getChannel**(`fabric`, `nodeId`): [`MessageChannel`](internal_.MessageChannel.md)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

[`MessageChannel`](internal_.MessageChannel.md)\<`any`\>

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:20

___

### getChannelForSession

▸ **getChannelForSession**(`session`): `undefined` \| [`MessageChannel`](internal_.MessageChannel.md)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/internal_.Session.md)\<`any`\> |

#### Returns

`undefined` \| [`MessageChannel`](internal_.MessageChannel.md)\<`any`\>

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:21

___

### getOrCreateChannel

▸ **getOrCreateChannel**(`byteArrayChannel`, `session`): `Promise`\<[`MessageChannel`](internal_.MessageChannel.md)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteArrayChannel` | [`Channel`](../interfaces/internal_.Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](../interfaces/internal_.Session.md)\<`any`\> |

#### Returns

`Promise`\<[`MessageChannel`](internal_.MessageChannel.md)\<`any`\>\>

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:24

___

### removeChannel

▸ **removeChannel**(`fabric`, `nodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/ChannelManager.d.ts:22

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

matter.js/dist/esm/protocol/ChannelManager.d.ts:19
