[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / Session

# Interface: Session<T\>

[exports/session](../modules/exports_session.md).Session

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`SecureSession`](../classes/exports_session.SecureSession.md)
- [`UnsecureSession`](../classes/exports_session.UnsecureSession.md)

## Table of contents

### Methods

- [decode](exports_session.Session.md#decode)
- [destroy](exports_session.Session.md#destroy)
- [encode](exports_session.Session.md#encode)
- [getContext](exports_session.Session.md#getcontext)
- [getId](exports_session.Session.md#getid)
- [getMrpParameters](exports_session.Session.md#getmrpparameters)
- [getName](exports_session.Session.md#getname)
- [getNodeId](exports_session.Session.md#getnodeid)
- [getPeerNodeId](exports_session.Session.md#getpeernodeid)
- [getPeerSessionId](exports_session.Session.md#getpeersessionid)
- [isPeerActive](exports_session.Session.md#ispeeractive)
- [isSecure](exports_session.Session.md#issecure)
- [notifyActivity](exports_session.Session.md#notifyactivity)

## Methods

### decode

▸ **decode**(`packet`): [`Message`](exports_codec.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`Packet`](exports_codec.Packet.md) |

#### Returns

[`Message`](exports_codec.Message.md)

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:25

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:33

___

### encode

▸ **encode**(`message`): [`Packet`](exports_codec.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](exports_codec.Message.md) |

#### Returns

[`Packet`](exports_codec.Packet.md)

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:26

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:28

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:29

___

### getMrpParameters

▸ **getMrpParameters**(): [`MrpParameters`](index._internal_.MrpParameters.md)

#### Returns

[`MrpParameters`](index._internal_.MrpParameters.md)

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:27

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:24

___

### getNodeId

▸ **getNodeId**(): `undefined` \| [`NodeId`](../classes/exports_datatype.NodeId.md)

#### Returns

`undefined` \| [`NodeId`](../classes/exports_datatype.NodeId.md)

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:31

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined` \| [`NodeId`](../classes/exports_datatype.NodeId.md)

#### Returns

`undefined` \| [`NodeId`](../classes/exports_datatype.NodeId.md)

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:32

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:30

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:35

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:23

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

packages/matter.js/dist/cjs/session/Session.d.ts:34
