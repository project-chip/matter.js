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

- [closingAfterExchangeFinished](session_export.Session.md#closingafterexchangefinished)
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
- [isPase](session_export.Session.md#ispase)
- [isPeerActive](session_export.Session.md#ispeeractive)
- [isSecure](session_export.Session.md#issecure)
- [notifyActivity](session_export.Session.md#notifyactivity)

## Properties

### closingAfterExchangeFinished

• **closingAfterExchangeFinished**: `boolean`

#### Defined in

[packages/matter.js/src/session/Session.ts:33](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L33)

___

### name

• **name**: `string`

#### Defined in

[packages/matter.js/src/session/Session.ts:32](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L32)

## Methods

### decode

▸ **decode**(`packet`, `aad?`): [`DecodedMessage`](codec_export.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](codec_export.DecodedPacket.md) |
| `aad?` | `Uint8Array` |

#### Returns

[`DecodedMessage`](codec_export.DecodedMessage.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:37](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L37)

___

### destroy

▸ **destroy**(`sendClose`, `closeAfterExchangeFinished?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose` | `boolean` |
| `closeAfterExchangeFinished?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/session/Session.ts:46](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L46)

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

[packages/matter.js/src/session/Session.ts:38](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L38)

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

[packages/matter.js/src/session/Session.ts:45](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L45)

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](../classes/fabric_export.Fabric.md)

#### Returns

[`Fabric`](../classes/fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:49](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L49)

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Defined in

[packages/matter.js/src/session/Session.ts:40](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L40)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/Session.ts:41](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L41)

___

### getMrpParameters

▸ **getMrpParameters**(): [`MrpParameters`](export._internal_.MrpParameters.md)

#### Returns

[`MrpParameters`](export._internal_.MrpParameters.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:39](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L39)

___

### getNodeId

▸ **getNodeId**(): `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/Session.ts:43](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L43)

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/Session.ts:44](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L44)

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/Session.ts:42](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L42)

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/session/Session.ts:36](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L36)

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/session/Session.ts:48](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L48)

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/session/Session.ts:35](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L35)

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

[packages/matter.js/src/session/Session.ts:47](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/Session.ts#L47)
