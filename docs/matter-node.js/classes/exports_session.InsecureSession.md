[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / InsecureSession

# Class: InsecureSession\<T\>

[exports/session](../modules/exports_session.md).InsecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Session`](exports_session.Session.md)\<`T`\>

  ↳ **`InsecureSession`**

## Table of contents

### Constructors

- [constructor](exports_session.InsecureSession.md#constructor)

### Properties

- [#private](exports_session.InsecureSession.md##private)
- [activeIntervalMs](exports_session.InsecureSession.md#activeintervalms)
- [activeThresholdMs](exports_session.InsecureSession.md#activethresholdms)
- [activeTimestamp](exports_session.InsecureSession.md#activetimestamp)
- [closeCallback](exports_session.InsecureSession.md#closecallback)
- [closingAfterExchangeFinished](exports_session.InsecureSession.md#closingafterexchangefinished)
- [idleIntervalMs](exports_session.InsecureSession.md#idleintervalms)
- [messageCounter](exports_session.InsecureSession.md#messagecounter)
- [messageReceptionState](exports_session.InsecureSession.md#messagereceptionstate)
- [timestamp](exports_session.InsecureSession.md#timestamp)

### Accessors

- [associatedFabric](exports_session.InsecureSession.md#associatedfabric)
- [context](exports_session.InsecureSession.md#context)
- [id](exports_session.InsecureSession.md#id)
- [isPase](exports_session.InsecureSession.md#ispase)
- [isSecure](exports_session.InsecureSession.md#issecure)
- [name](exports_session.InsecureSession.md#name)
- [nodeId](exports_session.InsecureSession.md#nodeid)
- [peerNodeId](exports_session.InsecureSession.md#peernodeid)
- [peerSessionId](exports_session.InsecureSession.md#peersessionid)

### Methods

- [decode](exports_session.InsecureSession.md#decode)
- [destroy](exports_session.InsecureSession.md#destroy)
- [encode](exports_session.InsecureSession.md#encode)
- [end](exports_session.InsecureSession.md#end)
- [getAttestationChallengeKey](exports_session.InsecureSession.md#getattestationchallengekey)
- [getIncrementedMessageCounter](exports_session.InsecureSession.md#getincrementedmessagecounter)
- [getSessionParameters](exports_session.InsecureSession.md#getsessionparameters)
- [isPeerActive](exports_session.InsecureSession.md#ispeeractive)
- [notifyActivity](exports_session.InsecureSession.md#notifyactivity)
- [setFabric](exports_session.InsecureSession.md#setfabric)
- [updateMessageCounter](exports_session.InsecureSession.md#updatemessagecounter)

## Constructors

### constructor

• **new InsecureSession**\<`T`\>(`args`): [`InsecureSession`](exports_session.InsecureSession.md)\<`T`\>

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

[`InsecureSession`](exports_session.InsecureSession.md)\<`T`\>

#### Overrides

[Session](exports_session.Session.md).[constructor](exports_session.Session.md#constructor)

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:15

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:13

___

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

packages/matter.js/dist/esm/session/InsecureSession.d.ts:14

___

### idleIntervalMs

• `Protected` `Readonly` **idleIntervalMs**: `number`

#### Inherited from

[Session](exports_session.Session.md).[idleIntervalMs](exports_session.Session.md#idleintervalms)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:34

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

### associatedFabric

• `get` **associatedFabric**(): [`Fabric`](exports_fabric.Fabric.md)

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Overrides

Session.associatedFabric

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:35

___

### context

• `get` **context**(): `T`

#### Returns

`T`

#### Overrides

Session.context

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:30

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Overrides

Session.id

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:31

___

### isPase

• `get` **isPase**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.isPase

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:24

___

### isSecure

• `get` **isSecure**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.isSecure

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:23

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Session.name

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:29

___

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Overrides

Session.nodeId

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:33

___

### peerNodeId

• `get` **peerNodeId**(): `undefined`

#### Returns

`undefined`

#### Overrides

Session.peerNodeId

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:34

___

### peerSessionId

• `get` **peerSessionId**(): `number`

#### Returns

`number`

#### Overrides

Session.peerSessionId

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:32

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

packages/matter.js/dist/esm/session/InsecureSession.d.ts:25

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](exports_session.Session.md).[destroy](exports_session.Session.md#destroy)

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:36

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

packages/matter.js/dist/esm/session/InsecureSession.d.ts:26

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](exports_session.Session.md).[end](exports_session.Session.md#end)

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:37

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/InsecureSession.d.ts:27

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

[Session](exports_session.Session.md).[getIncrementedMessageCounter](exports_session.Session.md#getincrementedmessagecounter)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:49

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

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Session](exports_session.Session.md).[isPeerActive](exports_session.Session.md#ispeeractive)

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

packages/matter.js/dist/esm/session/InsecureSession.d.ts:28

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
