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
- [getOrCreateAsPaseChannel](protocol_export.ChannelManager.md#getorcreateaspasechannel)
- [getOrCreateChannel](protocol_export.ChannelManager.md#getorcreatechannel)
- [removeChannel](protocol_export.ChannelManager.md#removechannel)
- [setChannel](protocol_export.ChannelManager.md#setchannel)

## Constructors

### constructor

• **new ChannelManager**(): [`ChannelManager`](protocol_export.ChannelManager.md)

#### Returns

[`ChannelManager`](protocol_export.ChannelManager.md)

## Properties

### channels

• `Private` `Readonly` **channels**: `Map`\<`string`, [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ChannelManager.ts#L22)

___

### paseChannels

• `Private` `Readonly` **paseChannels**: `Map`\<[`Session`](session_export.Session.md)\<`any`\>, [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ChannelManager.ts#L23)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ChannelManager.ts#L110)

___

### getChannel

▸ **getChannel**(`fabric`, `nodeId`): [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

[`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ChannelManager.ts#L45)

___

### getChannelForSession

▸ **getChannelForSession**(`session`): `undefined` \| [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](session_export.Session.md)\<`any`\> |

#### Returns

`undefined` \| [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ChannelManager.ts#L51)

___

### getChannelKey

▸ **getChannelKey**(`fabric`, `nodeId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ChannelManager.ts#L25)

___

### getOrCreateAsPaseChannel

▸ **getOrCreateAsPaseChannel**(`byteArrayChannel`, `session`): [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteArrayChannel` | [`Channel`](../interfaces/common_export.Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](session_export.Session.md)\<`any`\> |

#### Returns

[`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ChannelManager.ts#L77)

___

### getOrCreateChannel

▸ **getOrCreateChannel**(`byteArrayChannel`, `session`): `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteArrayChannel` | [`Channel`](../interfaces/common_export.Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](session_export.Session.md)\<`any`\> |

#### Returns

`Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ChannelManager.ts#L87)

___

### removeChannel

▸ **removeChannel**(`fabric`, `nodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ChannelManager.ts#L68)

___

### setChannel

▸ **setChannel**(`fabric`, `nodeId`, `channel`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `channel` | [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ChannelManager.ts#L29)
