[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / ChannelManager

# Class: ChannelManager

[protocol/export](../modules/protocol_export.md).ChannelManager

## Table of contents

### Constructors

- [constructor](protocol_export.ChannelManager.md#constructor)

### Properties

- [#caseSessionsPerFabricAndNode](protocol_export.ChannelManager.md##casesessionsperfabricandnode)
- [#channels](protocol_export.ChannelManager.md##channels)
- [#paseChannels](protocol_export.ChannelManager.md##pasechannels)

### Methods

- [#findLeastActiveChannel](protocol_export.ChannelManager.md##findleastactivechannel)
- [#getChannelKey](protocol_export.ChannelManager.md##getchannelkey)
- [close](protocol_export.ChannelManager.md#close)
- [getChannel](protocol_export.ChannelManager.md#getchannel)
- [getChannelForSession](protocol_export.ChannelManager.md#getchannelforsession)
- [getOrCreateAsPaseChannel](protocol_export.ChannelManager.md#getorcreateaspasechannel)
- [getOrCreateChannel](protocol_export.ChannelManager.md#getorcreatechannel)
- [removeAllNodeChannels](protocol_export.ChannelManager.md#removeallnodechannels)
- [removeChannel](protocol_export.ChannelManager.md#removechannel)
- [setChannel](protocol_export.ChannelManager.md#setchannel)

## Constructors

### constructor

• **new ChannelManager**(`caseSessionsPerFabricAndNode?`): [`ChannelManager`](protocol_export.ChannelManager.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `caseSessionsPerFabricAndNode` | `number` | `3` |

#### Returns

[`ChannelManager`](protocol_export.ChannelManager.md)

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:28](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L28)

## Properties

### #caseSessionsPerFabricAndNode

• `Private` `Readonly` **#caseSessionsPerFabricAndNode**: `number`

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:25](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L25)

___

### #channels

• `Private` `Readonly` **#channels**: `Map`\<`string`, [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>[]\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:23](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L23)

___

### #paseChannels

• `Private` `Readonly` **#paseChannels**: `Map`\<[`Session`](session_export.Session.md)\<`any`\>, [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:24](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L24)

## Methods

### #findLeastActiveChannel

▸ **#findLeastActiveChannel**(`channels`): [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channels` | [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>[] |

#### Returns

[`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:36](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L36)

___

### #getChannelKey

▸ **#getChannelKey**(`fabric`, `nodeId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:32](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L32)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:145](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L145)

___

### getChannel

▸ **getChannel**(`fabric`, `nodeId`, `session?`): [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `session?` | [`Session`](session_export.Session.md)\<`any`\> |

#### Returns

[`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:71](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L71)

___

### getChannelForSession

▸ **getChannelForSession**(`session`): `undefined` \| [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>

Returns the last established session for a Fabric and Node

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](session_export.Session.md)\<`any`\> |

#### Returns

`undefined` \| [`MessageChannel`](protocol_export.MessageChannel.md)\<`any`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:83](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L83)

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

[packages/matter.js/src/protocol/ChannelManager.ts:111](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L111)

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

[packages/matter.js/src/protocol/ChannelManager.ts:121](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L121)

___

### removeAllNodeChannels

▸ **removeAllNodeChannels**(`fabric`, `nodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:96](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L96)

___

### removeChannel

▸ **removeChannel**(`fabric`, `nodeId`, `session`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `session` | [`Session`](session_export.Session.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ChannelManager.ts:104](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L104)

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

[packages/matter.js/src/protocol/ChannelManager.ts:46](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/ChannelManager.ts#L46)
