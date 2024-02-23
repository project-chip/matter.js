[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / UnsecureSession

# Class: UnsecureSession\<T\>

[exports/session](../modules/exports_session.md).UnsecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Session`](exports_session.Session.md)\<`T`\>

  ↳ **`UnsecureSession`**

## Table of contents

### Constructors

- [constructor](exports_session.UnsecureSession.md#constructor)

### Properties

- [activeIntervalMs](exports_session.UnsecureSession.md#activeintervalms)
- [activeThresholdMs](exports_session.UnsecureSession.md#activethresholdms)
- [activeTimestamp](exports_session.UnsecureSession.md#activetimestamp)
- [closeCallback](exports_session.UnsecureSession.md#closecallback)
- [closingAfterExchangeFinished](exports_session.UnsecureSession.md#closingafterexchangefinished)
- [context](exports_session.UnsecureSession.md#context)
- [idleIntervalMs](exports_session.UnsecureSession.md#idleintervalms)
- [initiatorNodeId](exports_session.UnsecureSession.md#initiatornodeid)
- [messageCounter](exports_session.UnsecureSession.md#messagecounter)
- [messageReceptionState](exports_session.UnsecureSession.md#messagereceptionstate)
- [timestamp](exports_session.UnsecureSession.md#timestamp)

### Accessors

- [name](exports_session.UnsecureSession.md#name)

### Methods

- [decode](exports_session.UnsecureSession.md#decode)
- [destroy](exports_session.UnsecureSession.md#destroy)
- [encode](exports_session.UnsecureSession.md#encode)
- [end](exports_session.UnsecureSession.md#end)
- [getAssociatedFabric](exports_session.UnsecureSession.md#getassociatedfabric)
- [getAttestationChallengeKey](exports_session.UnsecureSession.md#getattestationchallengekey)
- [getContext](exports_session.UnsecureSession.md#getcontext)
- [getId](exports_session.UnsecureSession.md#getid)
- [getIncrementedMessageCounter](exports_session.UnsecureSession.md#getincrementedmessagecounter)
- [getNodeId](exports_session.UnsecureSession.md#getnodeid)
- [getPeerNodeId](exports_session.UnsecureSession.md#getpeernodeid)
- [getPeerSessionId](exports_session.UnsecureSession.md#getpeersessionid)
- [getSessionParameters](exports_session.UnsecureSession.md#getsessionparameters)
- [isPase](exports_session.UnsecureSession.md#ispase)
- [isPeerActive](exports_session.UnsecureSession.md#ispeeractive)
- [isSecure](exports_session.UnsecureSession.md#issecure)
- [notifyActivity](exports_session.UnsecureSession.md#notifyactivity)
- [setFabric](exports_session.UnsecureSession.md#setfabric)
- [updateMessageCounter](exports_session.UnsecureSession.md#updatemessagecounter)

## Constructors

### constructor

• **new UnsecureSession**\<`T`\>(`args`): [`UnsecureSession`](exports_session.UnsecureSession.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.context` | `T` |
| `args.initiatorNodeId?` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `args.isInitiator?` | `boolean` |
| `args.messageCounter` | [`MessageCounter`](exports_protocol.MessageCounter.md) |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/exports_session.SessionParameters.md)\> |

#### Returns

[`UnsecureSession`](exports_session.UnsecureSession.md)\<`T`\>

#### Overrides

[Session](exports_session.Session.md).[constructor](exports_session.Session.md#constructor)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:16

## Properties

### activeIntervalMs

• `Protected` `Readonly` **activeIntervalMs**: `number`

#### Inherited from

[Session](exports_session.Session.md).[activeIntervalMs](exports_session.Session.md#activeintervalms)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:35

___

### activeThresholdMs

• `Protected` `Readonly` **activeThresholdMs**: `number`

#### Inherited from

[Session](exports_session.Session.md).[activeThresholdMs](exports_session.Session.md#activethresholdms)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:36

___

### activeTimestamp

• **activeTimestamp**: `number`

#### Inherited from

[Session](exports_session.Session.md).[activeTimestamp](exports_session.Session.md#activetimestamp)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:33

___

### closeCallback

• `Protected` `Readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Inherited from

[Session](exports_session.Session.md).[closeCallback](exports_session.Session.md#closecallback)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:37

___

### closingAfterExchangeFinished

• `Readonly` **closingAfterExchangeFinished**: ``false``

#### Overrides

[Session](exports_session.Session.md).[closingAfterExchangeFinished](exports_session.Session.md#closingafterexchangefinished)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:14

___

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:15

___

### idleIntervalMs

• `Protected` `Readonly` **idleIntervalMs**: `number`

#### Inherited from

[Session](exports_session.Session.md).[idleIntervalMs](exports_session.Session.md#idleintervalms)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:34

___

### initiatorNodeId

• `Private` `Readonly` **initiatorNodeId**: `any`

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:13

___

### messageCounter

• `Protected` `Readonly` **messageCounter**: [`MessageCounter`](exports_protocol.MessageCounter.md)

#### Inherited from

[Session](exports_session.Session.md).[messageCounter](exports_session.Session.md#messagecounter)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:38

___

### messageReceptionState

• `Protected` `Readonly` **messageReceptionState**: [`MessageReceptionState`](exports_protocol.MessageReceptionState.md)

#### Inherited from

[Session](exports_session.Session.md).[messageReceptionState](exports_session.Session.md#messagereceptionstate)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:39

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[Session](exports_session.Session.md).[timestamp](exports_session.Session.md#timestamp)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:32

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Session.name

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:30

## Methods

### decode

▸ **decode**(`packet`): [`DecodedMessage`](../interfaces/exports_codec.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](../interfaces/exports_codec.DecodedPacket.md) |

#### Returns

[`DecodedMessage`](../interfaces/exports_codec.DecodedMessage.md)

#### Overrides

[Session](exports_session.Session.md).[decode](exports_session.Session.md#decode)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:26

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](exports_session.Session.md).[destroy](exports_session.Session.md#destroy)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:36

___

### encode

▸ **encode**(`message`): [`Packet`](../interfaces/exports_codec.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

[`Packet`](../interfaces/exports_codec.Packet.md)

#### Overrides

[Session](exports_session.Session.md).[encode](exports_session.Session.md#encode)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:27

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](exports_session.Session.md).[end](exports_session.Session.md#end)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:37

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](exports_fabric.Fabric.md)

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Overrides

[Session](exports_session.Session.md).[getAssociatedFabric](exports_session.Session.md#getassociatedfabric)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:38

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:28

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Overrides

[Session](exports_session.Session.md).[getContext](exports_session.Session.md#getcontext)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:31

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Overrides

[Session](exports_session.Session.md).[getId](exports_session.Session.md#getid)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:32

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `number`

#### Returns

`number`

#### Inherited from

[Session](exports_session.Session.md).[getIncrementedMessageCounter](exports_session.Session.md#getincrementedmessagecounter)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:49

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Overrides

[Session](exports_session.Session.md).[getNodeId](exports_session.Session.md#getnodeid)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:34

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined`

#### Returns

`undefined`

#### Overrides

[Session](exports_session.Session.md).[getPeerNodeId](exports_session.Session.md#getpeernodeid)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:35

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Overrides

[Session](exports_session.Session.md).[getPeerSessionId](exports_session.Session.md#getpeersessionid)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:33

___

### getSessionParameters

▸ **getSessionParameters**(): [`SessionParameters`](../interfaces/exports_session.SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/exports_session.SessionParameters.md)

#### Inherited from

[Session](exports_session.Session.md).[getSessionParameters](exports_session.Session.md#getsessionparameters)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:51

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Session](exports_session.Session.md).[isPase](exports_session.Session.md#ispase)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:25

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Session](exports_session.Session.md).[isPeerActive](exports_session.Session.md#ispeeractive)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:48

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Session](exports_session.Session.md).[isSecure](exports_session.Session.md#issecure)

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:24

___

### notifyActivity

▸ **notifyActivity**(`messageReceived`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageReceived` | `boolean` |

#### Returns

`void`

#### Inherited from

[Session](exports_session.Session.md).[notifyActivity](exports_session.Session.md#notifyactivity)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:47

___

### setFabric

▸ **setFabric**(`_fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/session/UnsecureSession.d.ts:29

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

#### Inherited from

[Session](exports_session.Session.md).[updateMessageCounter](exports_session.Session.md#updatemessagecounter)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:50
