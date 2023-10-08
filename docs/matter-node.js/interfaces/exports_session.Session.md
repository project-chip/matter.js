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

### Properties

- [name](exports_session.Session.md#name)

### Methods

- [decode](exports_session.Session.md#decode)
- [destroy](exports_session.Session.md#destroy)
- [encode](exports_session.Session.md#encode)
- [end](exports_session.Session.md#end)
- [getAssociatedFabric](exports_session.Session.md#getassociatedfabric)
- [getContext](exports_session.Session.md#getcontext)
- [getId](exports_session.Session.md#getid)
- [getMrpParameters](exports_session.Session.md#getmrpparameters)
- [getNodeId](exports_session.Session.md#getnodeid)
- [getPeerNodeId](exports_session.Session.md#getpeernodeid)
- [getPeerSessionId](exports_session.Session.md#getpeersessionid)
- [isPase](exports_session.Session.md#ispase)
- [isPeerActive](exports_session.Session.md#ispeeractive)
- [isSecure](exports_session.Session.md#issecure)
- [notifyActivity](exports_session.Session.md#notifyactivity)

## Properties

### name

• **name**: `string`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:24

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

packages/matter.js/dist/esm/session/Session.d.ts:27

___

### destroy

▸ **destroy**(`sendClose`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:36

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

packages/matter.js/dist/esm/session/Session.d.ts:28

___

### end

▸ **end**(`sendClose`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:35

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](../classes/exports_fabric.Fabric.md)

#### Returns

[`Fabric`](../classes/exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:39

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:30

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:31

___

### getMrpParameters

▸ **getMrpParameters**(): [`MrpParameters`](export._internal_.MrpParameters.md)

#### Returns

[`MrpParameters`](export._internal_.MrpParameters.md)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:29

___

### getNodeId

▸ **getNodeId**(): `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:33

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:34

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:32

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:26

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:38

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:25

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

packages/matter.js/dist/esm/session/Session.d.ts:37
