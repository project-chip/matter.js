[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Session

# Class: Session\<T\>

[\<internal\>](../modules/internal_.md).Session

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Session`**

  ↳ [`SecureSession`](internal_.SecureSession.md)

  ↳ [`UnsecureSession`](internal_.UnsecureSession.md)

## Table of contents

### Constructors

- [constructor](internal_.Session.md#constructor)

### Properties

- [activeIntervalMs](internal_.Session.md#activeintervalms)
- [activeThresholdMs](internal_.Session.md#activethresholdms)
- [activeTimestamp](internal_.Session.md#activetimestamp)
- [closeCallback](internal_.Session.md#closecallback)
- [idleIntervalMs](internal_.Session.md#idleintervalms)
- [messageCounter](internal_.Session.md#messagecounter)
- [messageReceptionState](internal_.Session.md#messagereceptionstate)
- [timestamp](internal_.Session.md#timestamp)

### Accessors

- [closingAfterExchangeFinished](internal_.Session.md#closingafterexchangefinished)
- [name](internal_.Session.md#name)

### Methods

- [decode](internal_.Session.md#decode)
- [destroy](internal_.Session.md#destroy)
- [encode](internal_.Session.md#encode)
- [end](internal_.Session.md#end)
- [getAssociatedFabric](internal_.Session.md#getassociatedfabric)
- [getContext](internal_.Session.md#getcontext)
- [getId](internal_.Session.md#getid)
- [getIncrementedMessageCounter](internal_.Session.md#getincrementedmessagecounter)
- [getNodeId](internal_.Session.md#getnodeid)
- [getPeerNodeId](internal_.Session.md#getpeernodeid)
- [getPeerSessionId](internal_.Session.md#getpeersessionid)
- [getSessionParameters](internal_.Session.md#getsessionparameters)
- [isPase](internal_.Session.md#ispase)
- [isPeerActive](internal_.Session.md#ispeeractive)
- [isSecure](internal_.Session.md#issecure)
- [notifyActivity](internal_.Session.md#notifyactivity)
- [updateMessageCounter](internal_.Session.md#updatemessagecounter)

## Constructors

### constructor

• **new Session**\<`T`\>(`args`): [`Session`](internal_.Session.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.messageCounter` | [`MessageCounter`](internal_.MessageCounter.md) |
| `args.messageReceptionState` | [`MessageReceptionState`](internal_.MessageReceptionState.md) |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/internal_.SessionParameters.md)\> |
| `args.setActiveTimestamp` | `boolean` |

#### Returns

[`Session`](internal_.Session.md)\<`T`\>

#### Defined in

matter.js/dist/esm/session/Session.d.ts:40

## Properties

### activeIntervalMs

• `Protected` `Readonly` **activeIntervalMs**: `number`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:35

___

### activeThresholdMs

• `Protected` `Readonly` **activeThresholdMs**: `number`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:36

___

### activeTimestamp

• **activeTimestamp**: `number`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:33

___

### closeCallback

• `Protected` `Readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/session/Session.d.ts:37

___

### idleIntervalMs

• `Protected` `Readonly` **idleIntervalMs**: `number`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:34

___

### messageCounter

• `Protected` `Readonly` **messageCounter**: [`MessageCounter`](internal_.MessageCounter.md)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:38

___

### messageReceptionState

• `Protected` `Readonly` **messageReceptionState**: [`MessageReceptionState`](internal_.MessageReceptionState.md)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:39

___

### timestamp

• **timestamp**: `number`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:32

## Accessors

### closingAfterExchangeFinished

• `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:31

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:30

## Methods

### decode

▸ **decode**(`packet`, `aad?`): [`DecodedMessage`](../interfaces/internal_.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](../interfaces/internal_.DecodedPacket.md) |
| `aad?` | `Uint8Array` |

#### Returns

[`DecodedMessage`](../interfaces/internal_.DecodedMessage.md)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:54

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

matter.js/dist/esm/session/Session.d.ts:62

___

### encode

▸ **encode**(`message`): [`Packet`](../interfaces/internal_.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

[`Packet`](../interfaces/internal_.Packet.md)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:55

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

matter.js/dist/esm/session/Session.d.ts:61

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](internal_.Fabric.md)

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:63

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:56

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:57

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:49

___

### getNodeId

▸ **getNodeId**(): `undefined` \| [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:59

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined` \| [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:60

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:58

___

### getSessionParameters

▸ **getSessionParameters**(): [`SessionParameters`](../interfaces/internal_.SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/internal_.SessionParameters.md)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:51

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:53

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:48

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/session/Session.d.ts:52

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

matter.js/dist/esm/session/Session.d.ts:47

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

#### Defined in

matter.js/dist/esm/session/Session.d.ts:50
