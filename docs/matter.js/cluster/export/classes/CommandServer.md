[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / CommandServer

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
| `invokeId` | [`CommandId`](../../../datatype/export/README.md#commandid) |
| `responseId` | [`CommandId`](../../../datatype/export/README.md#commandid) |
| `name` | `string` |
| `requestSchema` | [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`RequestT`\> |
| `responseSchema` | [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`ResponseT`\> |
| `requiresTimedInteraction` | `boolean` |
| `invokeAcl` | [`AccessLevel`](../enumerations/AccessLevel.md) |
| `handler` | (`request`, `session`, `message`, `endpoint`) => `ResponseT` \| `Promise`\<`ResponseT`\> |

#### Returns

[`CommandServer`](CommandServer.md)\<`RequestT`, `ResponseT`\>

#### Source

[packages/matter.js/src/cluster/server/CommandServer.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommandServer.ts#L24)

## Properties

### #invokeAcl

> `private` `readonly` **#invokeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/cluster/server/CommandServer.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommandServer.ts#L22)

***

### handler()

> `protected` `readonly` **handler**: (`request`, `session`, `message`, `endpoint`) => `ResponseT` \| `Promise`\<`ResponseT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | `RequestT` |
| `session` | [`Session`](../../../session/export/classes/Session.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |
| `endpoint` | [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`ResponseT` \| `Promise`\<`ResponseT`\>

#### Source

[packages/matter.js/src/cluster/server/CommandServer.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommandServer.ts#L32)

***

### invokeId

> `readonly` **invokeId**: [`CommandId`](../../../datatype/export/README.md#commandid)

#### Source

[packages/matter.js/src/cluster/server/CommandServer.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommandServer.ts#L25)

***

### name

> `readonly` **name**: `string`

#### Source

[packages/matter.js/src/cluster/server/CommandServer.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommandServer.ts#L27)

***

### requestSchema

> `readonly` **requestSchema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`RequestT`\>

#### Source

[packages/matter.js/src/cluster/server/CommandServer.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommandServer.ts#L28)

***

### requiresTimedInteraction

> `readonly` **requiresTimedInteraction**: `boolean`

#### Source

[packages/matter.js/src/cluster/server/CommandServer.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommandServer.ts#L30)

***

### responseId

> `readonly` **responseId**: [`CommandId`](../../../datatype/export/README.md#commandid)

#### Source

[packages/matter.js/src/cluster/server/CommandServer.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommandServer.ts#L26)

***

### responseSchema

> `readonly` **responseSchema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`ResponseT`\>

#### Source

[packages/matter.js/src/cluster/server/CommandServer.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommandServer.ts#L29)

## Accessors

### invokeAcl

> `get` **invokeAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/cluster/server/CommandServer.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommandServer.ts#L90)

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

[packages/matter.js/src/cluster/server/CommandServer.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommandServer.ts#L86)

***

### invoke()

> **invoke**(`session`, `args`, `message`, `endpoint`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](../../../session/export/classes/Session.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `args` | [`TlvStream`](../../../tlv/export/README.md#tlvstream) |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |
| `endpoint` | [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`Promise`\<`object`\>

##### clusterCode?

> `optional` **clusterCode**: `number`

Cluster specific StatusCode of the invoke request if required

##### code

> **code**: [`StatusCode`](../../../protocol/interaction/export/enumerations/StatusCode.md)

Primary StatusCode of the invoke request  as defined by Interaction proptocol.

##### response

> **response**: [`TlvStream`](../../../tlv/export/README.md#tlvstream)

Response data

##### responseId

> **responseId**: [`CommandId`](../../../datatype/export/README.md#commandid)

ID of the response

#### Source

[packages/matter.js/src/cluster/server/CommandServer.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommandServer.ts#L42)
