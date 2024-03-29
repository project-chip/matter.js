[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / CommandServer

# Class: CommandServer\<RequestT, ResponseT\>

[\<internal\>](../modules/internal_.md).CommandServer

## Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

## Table of contents

### Constructors

- [constructor](internal_.CommandServer.md#constructor)

### Properties

- [handler](internal_.CommandServer.md#handler)
- [invokeId](internal_.CommandServer.md#invokeid)
- [name](internal_.CommandServer.md#name)
- [requestSchema](internal_.CommandServer.md#requestschema)
- [requiresTimedInteraction](internal_.CommandServer.md#requirestimedinteraction)
- [responseId](internal_.CommandServer.md#responseid)
- [responseSchema](internal_.CommandServer.md#responseschema)

### Methods

- [debug](internal_.CommandServer.md#debug)
- [invoke](internal_.CommandServer.md#invoke)

## Constructors

### constructor

• **new CommandServer**\<`RequestT`, `ResponseT`\>(`invokeId`, `responseId`, `name`, `requestSchema`, `responseSchema`, `requiresTimedInteraction`, `handler`): [`CommandServer`](internal_.CommandServer.md)\<`RequestT`, `ResponseT`\>

#### Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `invokeId` | [`CommandId`](../modules/internal_.md#commandid) |
| `responseId` | [`CommandId`](../modules/internal_.md#commandid) |
| `name` | `string` |
| `requestSchema` | [`TlvSchema`](internal_.TlvSchema.md)\<`RequestT`\> |
| `responseSchema` | [`TlvSchema`](internal_.TlvSchema.md)\<`ResponseT`\> |
| `requiresTimedInteraction` | `boolean` |
| `handler` | (`request`: `RequestT`, `session`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>, `message`: [`Message`](../interfaces/internal_.Message.md), `endpoint`: [`EndpointInterface`](../interfaces/internal_.EndpointInterface.md)) => `ResponseT` \| `Promise`\<`ResponseT`\> |

#### Returns

[`CommandServer`](internal_.CommandServer.md)\<`RequestT`, `ResponseT`\>

#### Defined in

matter.js/dist/esm/cluster/server/CommandServer.d.ts:21

## Properties

### handler

• `Protected` `Readonly` **handler**: (`request`: `RequestT`, `session`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>, `message`: [`Message`](../interfaces/internal_.Message.md), `endpoint`: [`EndpointInterface`](../interfaces/internal_.EndpointInterface.md)) => `ResponseT` \| `Promise`\<`ResponseT`\>

#### Type declaration

▸ (`request`, `session`, `message`, `endpoint`): `ResponseT` \| `Promise`\<`ResponseT`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `RequestT` |
| `session` | [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `message` | [`Message`](../interfaces/internal_.Message.md) |
| `endpoint` | [`EndpointInterface`](../interfaces/internal_.EndpointInterface.md) |

##### Returns

`ResponseT` \| `Promise`\<`ResponseT`\>

#### Defined in

matter.js/dist/esm/cluster/server/CommandServer.d.ts:20

___

### invokeId

• `Readonly` **invokeId**: [`CommandId`](../modules/internal_.md#commandid)

#### Defined in

matter.js/dist/esm/cluster/server/CommandServer.d.ts:14

___

### name

• `Readonly` **name**: `string`

#### Defined in

matter.js/dist/esm/cluster/server/CommandServer.d.ts:16

___

### requestSchema

• `Readonly` **requestSchema**: [`TlvSchema`](internal_.TlvSchema.md)\<`RequestT`\>

#### Defined in

matter.js/dist/esm/cluster/server/CommandServer.d.ts:17

___

### requiresTimedInteraction

• `Readonly` **requiresTimedInteraction**: `boolean`

#### Defined in

matter.js/dist/esm/cluster/server/CommandServer.d.ts:19

___

### responseId

• `Readonly` **responseId**: [`CommandId`](../modules/internal_.md#commandid)

#### Defined in

matter.js/dist/esm/cluster/server/CommandServer.d.ts:15

___

### responseSchema

• `Readonly` **responseSchema**: [`TlvSchema`](internal_.TlvSchema.md)\<`ResponseT`\>

#### Defined in

matter.js/dist/esm/cluster/server/CommandServer.d.ts:18

## Methods

### debug

▸ **debug**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/cluster/server/CommandServer.d.ts:32

___

### invoke

▸ **invoke**(`session`, `args`, `message`, `endpoint`): `Promise`\<\{ `clusterCode?`: `number` ; `code`: [`StatusCode`](../enums/internal_.StatusCode.md) ; `response`: [`TlvStream`](../modules/internal_.md#tlvstream) ; `responseId`: [`CommandId`](../modules/internal_.md#commandid)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `args` | [`TlvStream`](../modules/internal_.md#tlvstream) |
| `message` | [`Message`](../interfaces/internal_.Message.md) |
| `endpoint` | [`EndpointInterface`](../interfaces/internal_.EndpointInterface.md) |

#### Returns

`Promise`\<\{ `clusterCode?`: `number` ; `code`: [`StatusCode`](../enums/internal_.StatusCode.md) ; `response`: [`TlvStream`](../modules/internal_.md#tlvstream) ; `responseId`: [`CommandId`](../modules/internal_.md#commandid)  }\>

#### Defined in

matter.js/dist/esm/cluster/server/CommandServer.d.ts:22
