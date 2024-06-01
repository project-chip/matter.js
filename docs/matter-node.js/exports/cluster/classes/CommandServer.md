[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / CommandServer

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
| `invokeId` | [`CommandId`](../../datatype/README.md#commandid) |
| `responseId` | [`CommandId`](../../datatype/README.md#commandid) |
| `name` | `string` |
| `requestSchema` | [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`RequestT`\> |
| `responseSchema` | [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`ResponseT`\> |
| `requiresTimedInteraction` | `boolean` |
| `invokeAcl` | [`AccessLevel`](../enumerations/AccessLevel.md) |
| `handler` | (`request`, `session`, `message`, `endpoint`) => `ResponseT` \| `Promise`\<`ResponseT`\> |

#### Returns

[`CommandServer`](CommandServer.md)\<`RequestT`, `ResponseT`\>

#### Source

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:23

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:15

***

### handler()

> `protected` `readonly` **handler**: (`request`, `session`, `message`, `endpoint`) => `ResponseT` \| `Promise`\<`ResponseT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | `RequestT` |
| `session` | [`Session`](../../session/classes/Session.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |
| `endpoint` | [`EndpointInterface`](../-internal-/interfaces/EndpointInterface.md) |

#### Returns

`ResponseT` \| `Promise`\<`ResponseT`\>

#### Source

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:22

***

### invokeId

> `readonly` **invokeId**: [`CommandId`](../../datatype/README.md#commandid)

#### Source

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:16

***

### name

> `readonly` **name**: `string`

#### Source

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:18

***

### requestSchema

> `readonly` **requestSchema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`RequestT`\>

#### Source

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:19

***

### requiresTimedInteraction

> `readonly` **requiresTimedInteraction**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:21

***

### responseId

> `readonly` **responseId**: [`CommandId`](../../datatype/README.md#commandid)

#### Source

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:17

***

### responseSchema

> `readonly` **responseSchema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`ResponseT`\>

#### Source

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:20

## Accessors

### invokeAcl

> `get` **invokeAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:35

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

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:34

***

### invoke()

> **invoke**(`session`, `args`, `message`, `endpoint`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](../../session/classes/Session.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |
| `args` | [`TlvStream`](../../tlv/README.md#tlvstream) |
| `message` | [`Message`](../../codec/interfaces/Message.md) |
| `endpoint` | [`EndpointInterface`](../-internal-/interfaces/EndpointInterface.md) |

#### Returns

`Promise`\<`object`\>

##### clusterCode?

> `optional` **clusterCode**: `number`

Cluster specific StatusCode of the invoke request if required

##### code

> **code**: [`StatusCode`](../../interaction/enumerations/StatusCode.md)

Primary StatusCode of the invoke request  as defined by Interaction proptocol.

##### response

> **response**: [`TlvStream`](../../tlv/README.md#tlvstream)

Response data

##### responseId

> **responseId**: [`CommandId`](../../datatype/README.md#commandid)

ID of the response

#### Source

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:24
