[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / Session

# Class: Session\<T\>

[exports/session](../modules/exports_session.md).Session

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Session`**

  ↳ [`InsecureSession`](exports_session.InsecureSession.md)

  ↳ [`SecureSession`](exports_session.SecureSession.md)

## Table of contents

### Constructors

- [constructor](exports_session.Session.md#constructor)

### Properties

- [activeIntervalMs](exports_session.Session.md#activeintervalms)
- [activeThresholdMs](exports_session.Session.md#activethresholdms)
- [activeTimestamp](exports_session.Session.md#activetimestamp)
- [associatedFabric](exports_session.Session.md#associatedfabric)
- [closeCallback](exports_session.Session.md#closecallback)
- [context](exports_session.Session.md#context)
- [id](exports_session.Session.md#id)
- [idleIntervalMs](exports_session.Session.md#idleintervalms)
- [isPase](exports_session.Session.md#ispase)
- [isSecure](exports_session.Session.md#issecure)
- [messageCounter](exports_session.Session.md#messagecounter)
- [messageReceptionState](exports_session.Session.md#messagereceptionstate)
- [nodeId](exports_session.Session.md#nodeid)
- [peerNodeId](exports_session.Session.md#peernodeid)
- [peerSessionId](exports_session.Session.md#peersessionid)
- [timestamp](exports_session.Session.md#timestamp)

### Accessors

- [closingAfterExchangeFinished](exports_session.Session.md#closingafterexchangefinished)
- [name](exports_session.Session.md#name)

### Methods

- [decode](exports_session.Session.md#decode)
- [destroy](exports_session.Session.md#destroy)
- [encode](exports_session.Session.md#encode)
- [end](exports_session.Session.md#end)
- [getIncrementedMessageCounter](exports_session.Session.md#getincrementedmessagecounter)
- [getSessionParameters](exports_session.Session.md#getsessionparameters)
- [isPeerActive](exports_session.Session.md#ispeeractive)
- [notifyActivity](exports_session.Session.md#notifyactivity)
- [updateMessageCounter](exports_session.Session.md#updatemessagecounter)

## Constructors

### constructor

• **new Session**\<`T`\>(`args`): [`Session`](exports_session.Session.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.messageCounter` | [`MessageCounter`](exports_protocol.MessageCounter.md) |
| `args.messageReceptionState` | [`MessageReceptionState`](exports_protocol.MessageReceptionState.md) |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/exports_session.SessionParameters.md)\> |
| `args.setActiveTimestamp` | `boolean` |

#### Returns

[`Session`](exports_session.Session.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:40

## Properties

### activeIntervalMs

• `Protected` `Readonly` **activeIntervalMs**: `number`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:35

___

### activeThresholdMs

• `Protected` `Readonly` **activeThresholdMs**: `number`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:36

___

### activeTimestamp

• **activeTimestamp**: `number`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:33

___

### associatedFabric

• `Abstract` **associatedFabric**: [`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:59

___

### closeCallback

• `Protected` `Readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:37

___

### context

• `Abstract` **context**: `T`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:54

___

### id

• `Abstract` **id**: `number`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:55

___

### idleIntervalMs

• `Protected` `Readonly` **idleIntervalMs**: `number`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:34

___

### isPase

• `Abstract` **isPase**: `boolean`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:53

___

### isSecure

• `Abstract` **isSecure**: `boolean`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:52

___

### messageCounter

• `Protected` `Readonly` **messageCounter**: [`MessageCounter`](exports_protocol.MessageCounter.md)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:38

___

### messageReceptionState

• `Protected` `Readonly` **messageReceptionState**: [`MessageReceptionState`](exports_protocol.MessageReceptionState.md)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:39

___

### nodeId

• `Abstract` **nodeId**: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:57

___

### peerNodeId

• `Abstract` **peerNodeId**: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:58

___

### peerSessionId

• `Abstract` **peerSessionId**: `number`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:56

___

### timestamp

• **timestamp**: `number`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:32

## Accessors

### closingAfterExchangeFinished

• `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:31

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:30

## Methods

### decode

▸ **decode**(`packet`, `aad?`): [`DecodedMessage`](../interfaces/exports_codec.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](../interfaces/exports_codec.DecodedPacket.md) |
| `aad?` | `Uint8Array` |

#### Returns

[`DecodedMessage`](../interfaces/exports_codec.DecodedMessage.md)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:60

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

packages/matter.js/dist/esm/session/Session.d.ts:63

___

### encode

▸ **encode**(`message`): [`Packet`](../interfaces/exports_codec.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

[`Packet`](../interfaces/exports_codec.Packet.md)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:61

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

packages/matter.js/dist/esm/session/Session.d.ts:62

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:49

___

### getSessionParameters

▸ **getSessionParameters**(): [`SessionParameters`](../interfaces/exports_session.SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/exports_session.SessionParameters.md)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:51

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:48

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

packages/matter.js/dist/esm/session/Session.d.ts:47

___

### updateMessageCounter

▸ **updateMessageCounter**(`messageCounter`, `_sourceNodeId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter` | `number` |
| `_sourceNodeId?` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:50
