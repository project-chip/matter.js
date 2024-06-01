[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / CommandServer

# Class: CommandServer\<RequestT, ResponseT\>

## Type parameters

| Type parameter |
| :------ |
| `RequestT` |
| `ResponseT` |

## Constructors

### new CommandServer()

> **new CommandServer**\<`RequestT`, `ResponseT`\>(`invokeId`, `responseId`, `name`, `requestSchema`, `responseSchema`, `requiresTimedInteraction`, `invokeAcl`, `handler`): [`CommandServer`](CommandServer.md)\<`RequestT`, `ResponseT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `invokeId` | [`CommandId`](../README.md#commandid) |
| `responseId` | [`CommandId`](../README.md#commandid) |
| `name` | `string` |
| `requestSchema` | [`TlvSchema`](TlvSchema.md)\<`RequestT`\> |
| `responseSchema` | [`TlvSchema`](TlvSchema.md)\<`ResponseT`\> |
| `requiresTimedInteraction` | `boolean` |
| `invokeAcl` | [`AccessLevel`](../enumerations/AccessLevel.md) |
| `handler` | (`request`, `session`, `message`, `endpoint`) => `ResponseT` \| `Promise`\<`ResponseT`\> |

#### Returns

[`CommandServer`](CommandServer.md)\<`RequestT`, `ResponseT`\>

#### Source

matter.js/dist/esm/cluster/server/CommandServer.d.ts:23

## Properties

### #private

> `private` **#private**: `any`

#### Source

matter.js/dist/esm/cluster/server/CommandServer.d.ts:15

***

### handler()

> `protected` `readonly` **handler**: (`request`, `session`, `message`, `endpoint`) => `ResponseT` \| `Promise`\<`ResponseT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | `RequestT` |
| `session` | [`Session`](Session.md)\<[`MatterDevice`](MatterDevice.md)\> |
| `message` | [`Message`](../interfaces/Message.md) |
| `endpoint` | [`EndpointInterface`](../interfaces/EndpointInterface.md) |

#### Returns

`ResponseT` \| `Promise`\<`ResponseT`\>

#### Source

matter.js/dist/esm/cluster/server/CommandServer.d.ts:22

***

### invokeId

> `readonly` **invokeId**: [`CommandId`](../README.md#commandid)

#### Source

matter.js/dist/esm/cluster/server/CommandServer.d.ts:16

***

### name

> `readonly` **name**: `string`

#### Source

matter.js/dist/esm/cluster/server/CommandServer.d.ts:18

***

### requestSchema

> `readonly` **requestSchema**: [`TlvSchema`](TlvSchema.md)\<`RequestT`\>

#### Source

matter.js/dist/esm/cluster/server/CommandServer.d.ts:19

***

### requiresTimedInteraction

> `readonly` **requiresTimedInteraction**: `boolean`

#### Source

matter.js/dist/esm/cluster/server/CommandServer.d.ts:21

***

### responseId

> `readonly` **responseId**: [`CommandId`](../README.md#commandid)

#### Source

matter.js/dist/esm/cluster/server/CommandServer.d.ts:17

***

### responseSchema

> `readonly` **responseSchema**: [`TlvSchema`](TlvSchema.md)\<`ResponseT`\>

#### Source

matter.js/dist/esm/cluster/server/CommandServer.d.ts:20

## Accessors

### invokeAcl

> `get` **invokeAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

matter.js/dist/esm/cluster/server/CommandServer.d.ts:35

## Methods

### debug()

> **debug**(`message`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Source

matter.js/dist/esm/cluster/server/CommandServer.d.ts:34

***

### invoke()

> **invoke**(`session`, `args`, `message`, `endpoint`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](Session.md)\<[`MatterDevice`](MatterDevice.md)\> |
| `args` | [`TlvStream`](../README.md#tlvstream) |
| `message` | [`Message`](../interfaces/Message.md) |
| `endpoint` | [`EndpointInterface`](../interfaces/EndpointInterface.md) |

#### Returns

`Promise`\<`object`\>

##### clusterCode?

> `optional` **clusterCode**: `number`

Cluster specific StatusCode of the invoke request if required

##### code

> **code**: [`StatusCode`](../enumerations/StatusCode.md)

Primary StatusCode of the invoke request  as defined by Interaction proptocol.

##### response

> **response**: [`TlvStream`](../README.md#tlvstream)

Response data

##### responseId

> **responseId**: [`CommandId`](../README.md#commandid)

ID of the response

#### Source

matter.js/dist/esm/cluster/server/CommandServer.d.ts:24
