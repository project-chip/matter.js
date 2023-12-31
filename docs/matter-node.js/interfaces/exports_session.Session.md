[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / Session

# Interface: Session\<T\>

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

- [closingAfterExchangeFinished](exports_session.Session.md#closingafterexchangefinished)
- [name](exports_session.Session.md#name)

### Methods

- [decode](exports_session.Session.md#decode)
- [destroy](exports_session.Session.md#destroy)
- [encode](exports_session.Session.md#encode)
- [end](exports_session.Session.md#end)
- [getAssociatedFabric](exports_session.Session.md#getassociatedfabric)
- [getContext](exports_session.Session.md#getcontext)
- [getId](exports_session.Session.md#getid)
- [getIncrementedMessageCounter](exports_session.Session.md#getincrementedmessagecounter)
- [getMrpParameters](exports_session.Session.md#getmrpparameters)
- [getNodeId](exports_session.Session.md#getnodeid)
- [getPeerNodeId](exports_session.Session.md#getpeernodeid)
- [getPeerSessionId](exports_session.Session.md#getpeersessionid)
- [isPase](exports_session.Session.md#ispase)
- [isPeerActive](exports_session.Session.md#ispeeractive)
- [isSecure](exports_session.Session.md#issecure)
- [notifyActivity](exports_session.Session.md#notifyactivity)
- [updateMessageCounter](exports_session.Session.md#updatemessagecounter)

## Properties

### closingAfterExchangeFinished

• **closingAfterExchangeFinished**: `boolean`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:26

___

### name

• **name**: `string`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:25

## Methods

### decode

▸ **decode**(`packet`, `aad?`): [`DecodedMessage`](exports_codec.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](exports_codec.DecodedPacket.md) |
| `aad?` | `Uint8Array` |

#### Returns

[`DecodedMessage`](exports_codec.DecodedMessage.md)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:29

___

### destroy

▸ **destroy**(`sendClose?`, `closeAfterExchangeFinished?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose?` | `boolean` |
| `closeAfterExchangeFinished?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:39

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

packages/matter.js/dist/esm/session/Session.d.ts:30

___

### end

▸ **end**(`sendClose`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:38

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](../classes/exports_fabric.Fabric.md)

#### Returns

[`Fabric`](../classes/exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:42

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:32

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:33

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:37

___

### getMrpParameters

▸ **getMrpParameters**(): [`MrpParameters`](export._internal_.MrpParameters.md)

#### Returns

[`MrpParameters`](export._internal_.MrpParameters.md)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:31

___

### getNodeId

▸ **getNodeId**(): `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:35

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:36

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:34

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:28

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:41

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:27

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

packages/matter.js/dist/esm/session/Session.d.ts:40

___

### updateMessageCounter

▸ **updateMessageCounter**(`messageCounter`, `sourceNodeId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter` | `number` |
| `sourceNodeId?` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:43
