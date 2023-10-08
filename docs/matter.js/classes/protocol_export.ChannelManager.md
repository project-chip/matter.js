[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / ChannelManager

# Class: ChannelManager

[protocol/export](../modules/protocol_export.md).ChannelManager

## Table of contents

### Constructors

- [constructor](protocol_export.ChannelManager.md#constructor)

### Properties

- [channels](protocol_export.ChannelManager.md#channels)
- [paseChannels](protocol_export.ChannelManager.md#pasechannels)

### Methods

- [close](protocol_export.ChannelManager.md#close)
- [getChannel](protocol_export.ChannelManager.md#getchannel)
- [getChannelForSession](protocol_export.ChannelManager.md#getchannelforsession)
- [getChannelKey](protocol_export.ChannelManager.md#getchannelkey)
- [getOrCreateChannel](protocol_export.ChannelManager.md#getorcreatechannel)
- [removeChannel](protocol_export.ChannelManager.md#removechannel)
- [setChannel](protocol_export.ChannelManager.md#setchannel)

## Constructors

### constructor

• **new ChannelManager**()

## Properties

### channels

• `Private` `Readonly` **channels**: `Map`<`string`, [`MessageChannel`](protocol_export.MessageChannel.md)<`any`\>\>

#### Defined in

packages/matter.js/src/protocol/ChannelManager.ts:19

___

### paseChannels

• `Private` `Readonly` **paseChannels**: `Map`<[`Session`](../interfaces/session_export.Session.md)<`any`\>, [`MessageChannel`](protocol_export.MessageChannel.md)<`any`\>\>

#### Defined in

packages/matter.js/src/protocol/ChannelManager.ts:20

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/protocol/ChannelManager.ts:76

___

### getChannel

▸ **getChannel**(`fabric`, `nodeId`): [`MessageChannel`](protocol_export.MessageChannel.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

[`MessageChannel`](protocol_export.MessageChannel.md)<`any`\>

#### Defined in

packages/matter.js/src/protocol/ChannelManager.ts:30

___

### getChannelForSession

▸ **getChannelForSession**(`session`): `undefined` \| [`MessageChannel`](protocol_export.MessageChannel.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/session_export.Session.md)<`any`\> |

#### Returns

`undefined` \| [`MessageChannel`](protocol_export.MessageChannel.md)<`any`\>

#### Defined in

packages/matter.js/src/protocol/ChannelManager.ts:36

___

### getChannelKey

▸ `Private` **getChannelKey**(`fabric`, `nodeId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`string`

#### Defined in

packages/matter.js/src/protocol/ChannelManager.ts:22

___

### getOrCreateChannel

▸ **getOrCreateChannel**(`byteArrayChannel`, `session`): [`MessageChannel`](protocol_export.MessageChannel.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteArrayChannel` | [`Channel`](../interfaces/common_export.Channel.md)<`Uint8Array`\> |
| `session` | [`Session`](../interfaces/session_export.Session.md)<`any`\> |

#### Returns

[`MessageChannel`](protocol_export.MessageChannel.md)<`any`\>

#### Defined in

packages/matter.js/src/protocol/ChannelManager.ts:53

___

### removeChannel

▸ **removeChannel**(`fabric`, `nodeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`void`

#### Defined in

packages/matter.js/src/protocol/ChannelManager.ts:49

___

### setChannel

▸ **setChannel**(`fabric`, `nodeId`, `channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `channel` | [`MessageChannel`](protocol_export.MessageChannel.md)<`any`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/src/protocol/ChannelManager.ts:26
