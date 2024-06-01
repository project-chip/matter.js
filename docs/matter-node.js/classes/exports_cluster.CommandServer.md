[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / CommandServer

# Class: CommandServer\<RequestT, ResponseT\>

[exports/cluster](../modules/exports_cluster.md).CommandServer

## Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

## Table of contents

### Constructors

- [constructor](exports_cluster.CommandServer.md#constructor)

### Properties

- [#private](exports_cluster.CommandServer.md##private)
- [handler](exports_cluster.CommandServer.md#handler)
- [invokeId](exports_cluster.CommandServer.md#invokeid)
- [name](exports_cluster.CommandServer.md#name)
- [requestSchema](exports_cluster.CommandServer.md#requestschema)
- [requiresTimedInteraction](exports_cluster.CommandServer.md#requirestimedinteraction)
- [responseId](exports_cluster.CommandServer.md#responseid)
- [responseSchema](exports_cluster.CommandServer.md#responseschema)

### Accessors

- [invokeAcl](exports_cluster.CommandServer.md#invokeacl)

### Methods

- [debug](exports_cluster.CommandServer.md#debug)
- [invoke](exports_cluster.CommandServer.md#invoke)

## Constructors

### constructor

• **new CommandServer**\<`RequestT`, `ResponseT`\>(`invokeId`, `responseId`, `name`, `requestSchema`, `responseSchema`, `requiresTimedInteraction`, `invokeAcl`, `handler`): [`CommandServer`](exports_cluster.CommandServer.md)\<`RequestT`, `ResponseT`\>

#### Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `invokeId` | [`CommandId`](../modules/exports_datatype.md#commandid) |
| `responseId` | [`CommandId`](../modules/exports_datatype.md#commandid) |
| `name` | `string` |
| `requestSchema` | [`TlvSchema`](exports_tlv.TlvSchema.md)\<`RequestT`\> |
| `responseSchema` | [`TlvSchema`](exports_tlv.TlvSchema.md)\<`ResponseT`\> |
| `requiresTimedInteraction` | `boolean` |
| `invokeAcl` | [`AccessLevel`](../enums/exports_cluster.AccessLevel.md) |
| `handler` | (`request`: `RequestT`, `session`: [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>, `message`: [`Message`](../interfaces/exports_codec.Message.md), `endpoint`: [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md)) => `ResponseT` \| `Promise`\<`ResponseT`\> |

#### Returns

[`CommandServer`](exports_cluster.CommandServer.md)\<`RequestT`, `ResponseT`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:23

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:15

___

### handler

• `Protected` `Readonly` **handler**: (`request`: `RequestT`, `session`: [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>, `message`: [`Message`](../interfaces/exports_codec.Message.md), `endpoint`: [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md)) => `ResponseT` \| `Promise`\<`ResponseT`\>

#### Type declaration

▸ (`request`, `session`, `message`, `endpoint`): `ResponseT` \| `Promise`\<`ResponseT`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `RequestT` |
| `session` | [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |
| `endpoint` | [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md) |

##### Returns

`ResponseT` \| `Promise`\<`ResponseT`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:22

___

### invokeId

• `Readonly` **invokeId**: [`CommandId`](../modules/exports_datatype.md#commandid)

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:16

___

### name

• `Readonly` **name**: `string`

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:18

___

### requestSchema

• `Readonly` **requestSchema**: [`TlvSchema`](exports_tlv.TlvSchema.md)\<`RequestT`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:19

___

### requiresTimedInteraction

• `Readonly` **requiresTimedInteraction**: `boolean`

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:21

___

### responseId

• `Readonly` **responseId**: [`CommandId`](../modules/exports_datatype.md#commandid)

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:17

___

### responseSchema

• `Readonly` **responseSchema**: [`TlvSchema`](exports_tlv.TlvSchema.md)\<`ResponseT`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:20

## Accessors

### invokeAcl

• `get` **invokeAcl**(): [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Returns

[`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:35

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

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:34

___

### invoke

▸ **invoke**(`session`, `args`, `message`, `endpoint`): `Promise`\<\{ `clusterCode?`: `number` ; `code`: [`StatusCode`](../enums/exports_interaction.StatusCode.md) ; `response`: [`TlvStream`](../modules/exports_tlv.md#tlvstream) ; `responseId`: [`CommandId`](../modules/exports_datatype.md#commandid)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `args` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |
| `endpoint` | [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md) |

#### Returns

`Promise`\<\{ `clusterCode?`: `number` ; `code`: [`StatusCode`](../enums/exports_interaction.StatusCode.md) ; `response`: [`TlvStream`](../modules/exports_tlv.md#tlvstream) ; `responseId`: [`CommandId`](../modules/exports_datatype.md#commandid)  }\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommandServer.d.ts:24
