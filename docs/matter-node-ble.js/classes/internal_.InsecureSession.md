[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / InsecureSession

# Class: InsecureSession\<T\>

[\<internal\>](../modules/internal_.md).InsecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Session`](internal_.Session.md)\<`T`\>

  ↳ **`InsecureSession`**

## Table of contents

### Constructors

- [constructor](internal_.InsecureSession.md#constructor)

### Properties

- [#private](internal_.InsecureSession.md##private)
- [activeIntervalMs](internal_.InsecureSession.md#activeintervalms)
- [activeThresholdMs](internal_.InsecureSession.md#activethresholdms)
- [activeTimestamp](internal_.InsecureSession.md#activetimestamp)
- [closeCallback](internal_.InsecureSession.md#closecallback)
- [closingAfterExchangeFinished](internal_.InsecureSession.md#closingafterexchangefinished)
- [idleIntervalMs](internal_.InsecureSession.md#idleintervalms)
- [messageCounter](internal_.InsecureSession.md#messagecounter)
- [messageReceptionState](internal_.InsecureSession.md#messagereceptionstate)
- [timestamp](internal_.InsecureSession.md#timestamp)

### Accessors

- [associatedFabric](internal_.InsecureSession.md#associatedfabric)
- [context](internal_.InsecureSession.md#context)
- [id](internal_.InsecureSession.md#id)
- [isPase](internal_.InsecureSession.md#ispase)
- [isSecure](internal_.InsecureSession.md#issecure)
- [name](internal_.InsecureSession.md#name)
- [nodeId](internal_.InsecureSession.md#nodeid)
- [peerNodeId](internal_.InsecureSession.md#peernodeid)
- [peerSessionId](internal_.InsecureSession.md#peersessionid)

### Methods

- [decode](internal_.InsecureSession.md#decode)
- [destroy](internal_.InsecureSession.md#destroy)
- [encode](internal_.InsecureSession.md#encode)
- [end](internal_.InsecureSession.md#end)
- [getAttestationChallengeKey](internal_.InsecureSession.md#getattestationchallengekey)
- [getIncrementedMessageCounter](internal_.InsecureSession.md#getincrementedmessagecounter)
- [getSessionParameters](internal_.InsecureSession.md#getsessionparameters)
- [isPeerActive](internal_.InsecureSession.md#ispeeractive)
- [notifyActivity](internal_.InsecureSession.md#notifyactivity)
- [setFabric](internal_.InsecureSession.md#setfabric)
- [updateMessageCounter](internal_.InsecureSession.md#updatemessagecounter)

## Constructors

### constructor

• **new InsecureSession**\<`T`\>(`args`): [`InsecureSession`](internal_.InsecureSession.md)\<`T`\>

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
| `args.initiatorNodeId?` | [`NodeId`](../modules/internal_.md#nodeid) |
| `args.isInitiator?` | `boolean` |
| `args.messageCounter` | [`MessageCounter`](internal_.MessageCounter.md) |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/internal_.SessionParameters.md)\> |

#### Returns

[`InsecureSession`](internal_.InsecureSession.md)\<`T`\>

#### Overrides

[Session](internal_.Session.md).[constructor](internal_.Session.md#constructor)

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:15

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:13

___

### activeIntervalMs

• `Protected` `Readonly` **activeIntervalMs**: `number`

#### Inherited from

[Session](internal_.Session.md).[activeIntervalMs](internal_.Session.md#activeintervalms)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:35

___

### activeThresholdMs

• `Protected` `Readonly` **activeThresholdMs**: `number`

#### Inherited from

[Session](internal_.Session.md).[activeThresholdMs](internal_.Session.md#activethresholdms)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:36

___

### activeTimestamp

• **activeTimestamp**: `number`

#### Inherited from

[Session](internal_.Session.md).[activeTimestamp](internal_.Session.md#activetimestamp)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:33

___

### closeCallback

• `Protected` `Readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Inherited from

[Session](internal_.Session.md).[closeCallback](internal_.Session.md#closecallback)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:37

___

### closingAfterExchangeFinished

• `Readonly` **closingAfterExchangeFinished**: ``false``

#### Overrides

[Session](internal_.Session.md).[closingAfterExchangeFinished](internal_.Session.md#closingafterexchangefinished)

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:14

___

### idleIntervalMs

• `Protected` `Readonly` **idleIntervalMs**: `number`

#### Inherited from

[Session](internal_.Session.md).[idleIntervalMs](internal_.Session.md#idleintervalms)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:34

___

### messageCounter

• `Protected` `Readonly` **messageCounter**: [`MessageCounter`](internal_.MessageCounter.md)

#### Inherited from

[Session](internal_.Session.md).[messageCounter](internal_.Session.md#messagecounter)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:38

___

### messageReceptionState

• `Protected` `Readonly` **messageReceptionState**: [`MessageReceptionState`](internal_.MessageReceptionState.md)

#### Inherited from

[Session](internal_.Session.md).[messageReceptionState](internal_.Session.md#messagereceptionstate)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:39

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[Session](internal_.Session.md).[timestamp](internal_.Session.md#timestamp)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:32

## Accessors

### associatedFabric

• `get` **associatedFabric**(): [`Fabric`](internal_.Fabric.md)

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Overrides

Session.associatedFabric

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:35

___

### context

• `get` **context**(): `T`

#### Returns

`T`

#### Overrides

Session.context

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:30

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Overrides

Session.id

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:31

___

### isPase

• `get` **isPase**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.isPase

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:24

___

### isSecure

• `get` **isSecure**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.isSecure

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:23

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Session.name

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:29

___

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Overrides

Session.nodeId

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:33

___

### peerNodeId

• `get` **peerNodeId**(): `undefined`

#### Returns

`undefined`

#### Overrides

Session.peerNodeId

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:34

___

### peerSessionId

• `get` **peerSessionId**(): `number`

#### Returns

`number`

#### Overrides

Session.peerSessionId

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:32

## Methods

### decode

▸ **decode**(`packet`): [`DecodedMessage`](../interfaces/internal_.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](../interfaces/internal_.DecodedPacket.md) |

#### Returns

[`DecodedMessage`](../interfaces/internal_.DecodedMessage.md)

#### Overrides

[Session](internal_.Session.md).[decode](internal_.Session.md#decode)

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:25

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](internal_.Session.md).[destroy](internal_.Session.md#destroy)

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:36

___

### encode

▸ **encode**(`message`): [`Packet`](../interfaces/internal_.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

[`Packet`](../interfaces/internal_.Packet.md)

#### Overrides

[Session](internal_.Session.md).[encode](internal_.Session.md#encode)

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:26

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](internal_.Session.md).[end](internal_.Session.md#end)

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:37

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:27

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

[Session](internal_.Session.md).[getIncrementedMessageCounter](internal_.Session.md#getincrementedmessagecounter)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:49

___

### getSessionParameters

▸ **getSessionParameters**(): [`SessionParameters`](../interfaces/internal_.SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/internal_.SessionParameters.md)

#### Inherited from

[Session](internal_.Session.md).[getSessionParameters](internal_.Session.md#getsessionparameters)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:51

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Session](internal_.Session.md).[isPeerActive](internal_.Session.md#ispeeractive)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:48

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

[Session](internal_.Session.md).[notifyActivity](internal_.Session.md#notifyactivity)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:47

___

### setFabric

▸ **setFabric**(`_fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/session/InsecureSession.d.ts:28

___

### updateMessageCounter

▸ **updateMessageCounter**(`messageCounter`, `_sourceNodeId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter` | `number` |
| `_sourceNodeId?` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`void`

#### Inherited from

[Session](internal_.Session.md).[updateMessageCounter](internal_.Session.md#updatemessagecounter)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:50
