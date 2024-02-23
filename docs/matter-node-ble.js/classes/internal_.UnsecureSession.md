[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / UnsecureSession

# Class: UnsecureSession\<T\>

[\<internal\>](../modules/internal_.md).UnsecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Session`](internal_.Session.md)\<`T`\>

  ↳ **`UnsecureSession`**

## Table of contents

### Constructors

- [constructor](internal_.UnsecureSession.md#constructor)

### Properties

- [activeIntervalMs](internal_.UnsecureSession.md#activeintervalms)
- [activeThresholdMs](internal_.UnsecureSession.md#activethresholdms)
- [activeTimestamp](internal_.UnsecureSession.md#activetimestamp)
- [closeCallback](internal_.UnsecureSession.md#closecallback)
- [closingAfterExchangeFinished](internal_.UnsecureSession.md#closingafterexchangefinished)
- [context](internal_.UnsecureSession.md#context)
- [idleIntervalMs](internal_.UnsecureSession.md#idleintervalms)
- [initiatorNodeId](internal_.UnsecureSession.md#initiatornodeid)
- [messageCounter](internal_.UnsecureSession.md#messagecounter)
- [messageReceptionState](internal_.UnsecureSession.md#messagereceptionstate)
- [timestamp](internal_.UnsecureSession.md#timestamp)

### Accessors

- [name](internal_.UnsecureSession.md#name)

### Methods

- [decode](internal_.UnsecureSession.md#decode)
- [destroy](internal_.UnsecureSession.md#destroy)
- [encode](internal_.UnsecureSession.md#encode)
- [end](internal_.UnsecureSession.md#end)
- [getAssociatedFabric](internal_.UnsecureSession.md#getassociatedfabric)
- [getAttestationChallengeKey](internal_.UnsecureSession.md#getattestationchallengekey)
- [getContext](internal_.UnsecureSession.md#getcontext)
- [getId](internal_.UnsecureSession.md#getid)
- [getIncrementedMessageCounter](internal_.UnsecureSession.md#getincrementedmessagecounter)
- [getNodeId](internal_.UnsecureSession.md#getnodeid)
- [getPeerNodeId](internal_.UnsecureSession.md#getpeernodeid)
- [getPeerSessionId](internal_.UnsecureSession.md#getpeersessionid)
- [getSessionParameters](internal_.UnsecureSession.md#getsessionparameters)
- [isPase](internal_.UnsecureSession.md#ispase)
- [isPeerActive](internal_.UnsecureSession.md#ispeeractive)
- [isSecure](internal_.UnsecureSession.md#issecure)
- [notifyActivity](internal_.UnsecureSession.md#notifyactivity)
- [setFabric](internal_.UnsecureSession.md#setfabric)
- [updateMessageCounter](internal_.UnsecureSession.md#updatemessagecounter)

## Constructors

### constructor

• **new UnsecureSession**\<`T`\>(`args`): [`UnsecureSession`](internal_.UnsecureSession.md)\<`T`\>

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

[`UnsecureSession`](internal_.UnsecureSession.md)\<`T`\>

#### Overrides

[Session](internal_.Session.md).[constructor](internal_.Session.md#constructor)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:16

## Properties

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

matter.js/dist/esm/session/UnsecureSession.d.ts:14

___

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:15

___

### idleIntervalMs

• `Protected` `Readonly` **idleIntervalMs**: `number`

#### Inherited from

[Session](internal_.Session.md).[idleIntervalMs](internal_.Session.md#idleintervalms)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:34

___

### initiatorNodeId

• `Private` `Readonly` **initiatorNodeId**: `any`

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:13

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

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Session.name

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:30

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

matter.js/dist/esm/session/UnsecureSession.d.ts:26

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](internal_.Session.md).[destroy](internal_.Session.md#destroy)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:36

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

matter.js/dist/esm/session/UnsecureSession.d.ts:27

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](internal_.Session.md).[end](internal_.Session.md#end)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:37

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](internal_.Fabric.md)

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Overrides

[Session](internal_.Session.md).[getAssociatedFabric](internal_.Session.md#getassociatedfabric)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:38

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:28

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Overrides

[Session](internal_.Session.md).[getContext](internal_.Session.md#getcontext)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:31

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Overrides

[Session](internal_.Session.md).[getId](internal_.Session.md#getid)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:32

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `number`

#### Returns

`number`

#### Inherited from

[Session](internal_.Session.md).[getIncrementedMessageCounter](internal_.Session.md#getincrementedmessagecounter)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:49

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Overrides

[Session](internal_.Session.md).[getNodeId](internal_.Session.md#getnodeid)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:34

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined`

#### Returns

`undefined`

#### Overrides

[Session](internal_.Session.md).[getPeerNodeId](internal_.Session.md#getpeernodeid)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:35

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Overrides

[Session](internal_.Session.md).[getPeerSessionId](internal_.Session.md#getpeersessionid)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:33

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

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Session](internal_.Session.md).[isPase](internal_.Session.md#ispase)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:25

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

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Session](internal_.Session.md).[isSecure](internal_.Session.md#issecure)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:24

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

matter.js/dist/esm/session/UnsecureSession.d.ts:29

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
