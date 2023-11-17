[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / ChannelManager

# Class: ChannelManager

[exports/protocol](../modules/exports_protocol.md).ChannelManager

## Table of contents

### Constructors

- [constructor](exports_protocol.ChannelManager.md#constructor)

### Properties

- [channels](exports_protocol.ChannelManager.md#channels)
- [getChannelKey](exports_protocol.ChannelManager.md#getchannelkey)
- [getOrCreateAsPaseChannel](exports_protocol.ChannelManager.md#getorcreateaspasechannel)
- [paseChannels](exports_protocol.ChannelManager.md#pasechannels)

### Methods

- [close](exports_protocol.ChannelManager.md#close)
- [getChannel](exports_protocol.ChannelManager.md#getchannel)
- [getChannelForSession](exports_protocol.ChannelManager.md#getchannelforsession)
- [getOrCreateChannel](exports_protocol.ChannelManager.md#getorcreatechannel)
- [removeChannel](exports_protocol.ChannelManager.md#removechannel)
- [setChannel](exports_protocol.ChannelManager.md#setchannel)

## Constructors

### constructor

• **new ChannelManager**()

## Properties

### channels

• `Private` `Readonly` **channels**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:16

___

### getChannelKey

• `Private` **getChannelKey**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:18

___

### getOrCreateAsPaseChannel

• `Private` **getOrCreateAsPaseChannel**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:23

___

### paseChannels

• `Private` `Readonly` **paseChannels**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:17

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:25

___

### getChannel

▸ **getChannel**(`fabric`, `nodeId`): [`MessageChannel`](exports_protocol.MessageChannel.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

[`MessageChannel`](exports_protocol.MessageChannel.md)<`any`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:20

___

### getChannelForSession

▸ **getChannelForSession**(`session`): `undefined` \| [`MessageChannel`](exports_protocol.MessageChannel.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/exports_session.Session.md)<`any`\> |

#### Returns

`undefined` \| [`MessageChannel`](exports_protocol.MessageChannel.md)<`any`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:21

___

### getOrCreateChannel

▸ **getOrCreateChannel**(`byteArrayChannel`, `session`): `Promise`<[`MessageChannel`](exports_protocol.MessageChannel.md)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteArrayChannel` | [`Channel`](../interfaces/exports_common.Channel.md)<`Uint8Array`\> |
| `session` | [`Session`](../interfaces/exports_session.Session.md)<`any`\> |

#### Returns

`Promise`<[`MessageChannel`](exports_protocol.MessageChannel.md)<`any`\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:24

___

### removeChannel

▸ **removeChannel**(`fabric`, `nodeId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:22

___

### setChannel

▸ **setChannel**(`fabric`, `nodeId`, `channel`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `channel` | [`MessageChannel`](exports_protocol.MessageChannel.md)<`any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ChannelManager.d.ts:19
