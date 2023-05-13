[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol](../modules/protocol.md) / ChannelManager

# Class: ChannelManager

[protocol](../modules/protocol.md).ChannelManager

## Table of contents

### Constructors

- [constructor](protocol.ChannelManager.md#constructor)

### Properties

- [channels](protocol.ChannelManager.md#channels)

### Methods

- [getChannel](protocol.ChannelManager.md#getchannel)
- [getChannelKey](protocol.ChannelManager.md#getchannelkey)
- [getOrCreateChannel](protocol.ChannelManager.md#getorcreatechannel)
- [removeChannel](protocol.ChannelManager.md#removechannel)
- [setChannel](protocol.ChannelManager.md#setchannel)

## Constructors

### constructor

• **new ChannelManager**()

## Properties

### channels

• `Private` `Readonly` **channels**: `Map`<`string`, [`MessageChannel`](protocol.MessageChannel.md)<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ChannelManager.ts#L19)

## Methods

### getChannel

▸ **getChannel**(`fabric`, `nodeId`): [`MessageChannel`](protocol.MessageChannel.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |

#### Returns

[`MessageChannel`](protocol.MessageChannel.md)<`any`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ChannelManager.ts#L29)

___

### getChannelKey

▸ `Private` **getChannelKey**(`fabric`, `nodeId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ChannelManager.ts#L21)

___

### getOrCreateChannel

▸ **getOrCreateChannel**(`byteArrayChannel`, `session`): [`MessageChannel`](protocol.MessageChannel.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteArrayChannel` | [`Channel`](../interfaces/net.Channel.md)<`Uint8Array`\> |
| `session` | [`Session`](../interfaces/session.Session.md)<`any`\> |

#### Returns

[`MessageChannel`](protocol.MessageChannel.md)<`any`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ChannelManager.ts#L39)

___

### removeChannel

▸ **removeChannel**(`fabric`, `nodeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ChannelManager.ts#L35)

___

### setChannel

▸ **setChannel**(`fabric`, `nodeId`, `channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |
| `channel` | [`MessageChannel`](protocol.MessageChannel.md)<`any`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ChannelManager.ts#L25)
