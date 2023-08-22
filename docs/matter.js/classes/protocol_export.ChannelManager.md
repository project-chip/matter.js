[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / ChannelManager

# Class: ChannelManager

[protocol/export](../modules/protocol_export.md).ChannelManager

## Table of contents

### Constructors

- [constructor](protocol_export.ChannelManager.md#constructor)

### Properties

- [channels](protocol_export.ChannelManager.md#channels)

### Methods

- [close](protocol_export.ChannelManager.md#close)
- [getChannel](protocol_export.ChannelManager.md#getchannel)
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

[packages/matter.js/src/protocol/ChannelManager.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ChannelManager.ts#L19)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:54](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ChannelManager.ts#L54)

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

[packages/matter.js/src/protocol/ChannelManager.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ChannelManager.ts#L29)

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

[packages/matter.js/src/protocol/ChannelManager.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ChannelManager.ts#L21)

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

[packages/matter.js/src/protocol/ChannelManager.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ChannelManager.ts#L39)

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

[packages/matter.js/src/protocol/ChannelManager.ts:35](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ChannelManager.ts#L35)

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

[packages/matter.js/src/protocol/ChannelManager.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ChannelManager.ts#L25)
