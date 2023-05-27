[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session](../modules/session.md) / Session

# Interface: Session<T\>

[session](../modules/session.md).Session

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`SecureSession`](../classes/session.SecureSession.md)
- [`UnsecureSession`](../classes/session.UnsecureSession.md)

## Table of contents

### Methods

- [decode](session.Session.md#decode)
- [destroy](session.Session.md#destroy)
- [encode](session.Session.md#encode)
- [getContext](session.Session.md#getcontext)
- [getId](session.Session.md#getid)
- [getMrpParameters](session.Session.md#getmrpparameters)
- [getName](session.Session.md#getname)
- [getNodeId](session.Session.md#getnodeid)
- [getPeerNodeId](session.Session.md#getpeernodeid)
- [getPeerSessionId](session.Session.md#getpeersessionid)
- [isPeerActive](session.Session.md#ispeeractive)
- [isSecure](session.Session.md#issecure)
- [notifyActivity](session.Session.md#notifyactivity)

## Methods

### decode

▸ **decode**(`packet`): [`Message`](codec.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`Packet`](codec.Packet.md) |

#### Returns

[`Message`](codec.Message.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L32)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/Session.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L40)

___

### encode

▸ **encode**(`message`): [`Packet`](codec.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](codec.Message.md) |

#### Returns

[`Packet`](codec.Packet.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:33](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L33)

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Defined in

[packages/matter.js/src/session/Session.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L35)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/Session.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L36)

___

### getMrpParameters

▸ **getMrpParameters**(): [`MrpParameters`](index._internal_.MrpParameters.md)

#### Returns

[`MrpParameters`](index._internal_.MrpParameters.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L34)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/session/Session.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L31)

___

### getNodeId

▸ **getNodeId**(): `undefined` \| [`NodeId`](../classes/datatype.NodeId.md)

#### Returns

`undefined` \| [`NodeId`](../classes/datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L38)

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined` \| [`NodeId`](../classes/datatype.NodeId.md)

#### Returns

`undefined` \| [`NodeId`](../classes/datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L39)

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/Session.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L37)

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/session/Session.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L42)

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/session/Session.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L30)

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

[packages/matter.js/src/session/Session.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L41)
