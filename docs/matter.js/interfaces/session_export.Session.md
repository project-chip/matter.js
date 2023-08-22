[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / Session

# Interface: Session<T\>

[session/export](../modules/session_export.md).Session

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`SecureSession`](../classes/session_export.SecureSession.md)
- [`UnsecureSession`](../classes/session_export.UnsecureSession.md)

## Table of contents

### Properties

- [name](session_export.Session.md#name)

### Methods

- [decode](session_export.Session.md#decode)
- [destroy](session_export.Session.md#destroy)
- [encode](session_export.Session.md#encode)
- [end](session_export.Session.md#end)
- [getAssociatedFabric](session_export.Session.md#getassociatedfabric)
- [getContext](session_export.Session.md#getcontext)
- [getId](session_export.Session.md#getid)
- [getMrpParameters](session_export.Session.md#getmrpparameters)
- [getNodeId](session_export.Session.md#getnodeid)
- [getPeerNodeId](session_export.Session.md#getpeernodeid)
- [getPeerSessionId](session_export.Session.md#getpeersessionid)
- [isPeerActive](session_export.Session.md#ispeeractive)
- [isSecure](session_export.Session.md#issecure)
- [notifyActivity](session_export.Session.md#notifyactivity)

## Properties

### name

• **name**: `string`

#### Defined in

[packages/matter.js/src/session/Session.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L31)

## Methods

### decode

▸ **decode**(`packet`): [`Message`](codec_export.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`Packet`](codec_export.Packet.md) |

#### Returns

[`Message`](codec_export.Message.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L34)

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/session/Session.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L43)

___

### encode

▸ **encode**(`message`): [`Packet`](codec_export.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](codec_export.Message.md) |

#### Returns

[`Packet`](codec_export.Packet.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:35](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L35)

___

### end

▸ **end**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/session/Session.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L42)

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](../classes/fabric_export.Fabric.md)

#### Returns

[`Fabric`](../classes/fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:46](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L46)

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Defined in

[packages/matter.js/src/session/Session.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L37)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/Session.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L38)

___

### getMrpParameters

▸ **getMrpParameters**(): [`MrpParameters`](export._internal_.MrpParameters.md)

#### Returns

[`MrpParameters`](export._internal_.MrpParameters.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:36](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L36)

___

### getNodeId

▸ **getNodeId**(): `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/Session.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L40)

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/Session.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L41)

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/Session.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L39)

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/session/Session.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L45)

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/session/Session.ts:33](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L33)

___

### notifyActivity

▸ **notifyActivity**(`messageReceived`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageReceived` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/Session.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L44)
