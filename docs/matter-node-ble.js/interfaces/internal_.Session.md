[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Session

# Interface: Session<T\>

[<internal>](../modules/internal_.md).Session

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`SecureSession`](../classes/internal_.SecureSession.md)
- [`UnsecureSession`](../classes/internal_.UnsecureSession.md)

## Table of contents

### Properties

- [name](internal_.Session.md#name)

### Methods

- [decode](internal_.Session.md#decode)
- [destroy](internal_.Session.md#destroy)
- [encode](internal_.Session.md#encode)
- [end](internal_.Session.md#end)
- [getAssociatedFabric](internal_.Session.md#getassociatedfabric)
- [getContext](internal_.Session.md#getcontext)
- [getId](internal_.Session.md#getid)
- [getMrpParameters](internal_.Session.md#getmrpparameters)
- [getNodeId](internal_.Session.md#getnodeid)
- [getPeerNodeId](internal_.Session.md#getpeernodeid)
- [getPeerSessionId](internal_.Session.md#getpeersessionid)
- [isPeerActive](internal_.Session.md#ispeeractive)
- [isSecure](internal_.Session.md#issecure)
- [notifyActivity](internal_.Session.md#notifyactivity)

## Properties

### name

• **name**: `string`

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:24

## Methods

### decode

▸ **decode**(`packet`): [`Message`](internal_.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`Packet`](internal_.Packet.md) |

#### Returns

[`Message`](internal_.Message.md)

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:26

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:35

___

### encode

▸ **encode**(`message`): [`Packet`](internal_.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](internal_.Message.md) |

#### Returns

[`Packet`](internal_.Packet.md)

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:27

___

### end

▸ **end**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:34

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](../classes/internal_.Fabric.md)

#### Returns

[`Fabric`](../classes/internal_.Fabric.md)

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:38

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:29

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:30

___

### getMrpParameters

▸ **getMrpParameters**(): [`MrpParameters`](internal_.MrpParameters.md)

#### Returns

[`MrpParameters`](internal_.MrpParameters.md)

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:28

___

### getNodeId

▸ **getNodeId**(): `undefined` \| [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:32

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined` \| [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:33

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:31

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:37

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/cjs/session/Session.d.ts:25

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

matter.js/dist/cjs/session/Session.d.ts:36
