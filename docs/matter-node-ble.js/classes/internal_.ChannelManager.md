[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ChannelManager

# Class: ChannelManager

[<internal>](../modules/internal_.md).ChannelManager

## Table of contents

### Constructors

- [constructor](internal_.ChannelManager.md#constructor)

### Properties

- [channels](internal_.ChannelManager.md#channels)
- [getChannelKey](internal_.ChannelManager.md#getchannelkey)

### Methods

- [close](internal_.ChannelManager.md#close)
- [getChannel](internal_.ChannelManager.md#getchannel)
- [getOrCreateChannel](internal_.ChannelManager.md#getorcreatechannel)
- [removeChannel](internal_.ChannelManager.md#removechannel)
- [setChannel](internal_.ChannelManager.md#setchannel)

## Constructors

### constructor

• **new ChannelManager**()

## Properties

### channels

• `Private` `Readonly` **channels**: `any`

#### Defined in

matter.js/dist/cjs/protocol/ChannelManager.d.ts:16

___

### getChannelKey

• `Private` **getChannelKey**: `any`

#### Defined in

matter.js/dist/cjs/protocol/ChannelManager.d.ts:17

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/ChannelManager.d.ts:22

___

### getChannel

▸ **getChannel**(`fabric`, `nodeId`): [`MessageChannel`](internal_.MessageChannel.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

[`MessageChannel`](internal_.MessageChannel.md)<`any`\>

#### Defined in

matter.js/dist/cjs/protocol/ChannelManager.d.ts:19

___

### getOrCreateChannel

▸ **getOrCreateChannel**(`byteArrayChannel`, `session`): [`MessageChannel`](internal_.MessageChannel.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteArrayChannel` | [`Channel`](../interfaces/internal_.Channel.md)<`Uint8Array`\> |
| `session` | [`Session`](../interfaces/internal_.Session.md)<`any`\> |

#### Returns

[`MessageChannel`](internal_.MessageChannel.md)<`any`\>

#### Defined in

matter.js/dist/cjs/protocol/ChannelManager.d.ts:21

___

### removeChannel

▸ **removeChannel**(`fabric`, `nodeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/protocol/ChannelManager.d.ts:20

___

### setChannel

▸ **setChannel**(`fabric`, `nodeId`, `channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `channel` | [`MessageChannel`](internal_.MessageChannel.md)<`any`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/protocol/ChannelManager.d.ts:18
