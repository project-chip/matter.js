[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / CommandServer

# Class: CommandServer<RequestT, ResponseT\>

[cluster](../modules/cluster.md).CommandServer

## Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

## Table of contents

### Constructors

- [constructor](cluster.CommandServer.md#constructor)

### Properties

- [handler](cluster.CommandServer.md#handler)
- [invokeId](cluster.CommandServer.md#invokeid)
- [name](cluster.CommandServer.md#name)
- [requestSchema](cluster.CommandServer.md#requestschema)
- [responseId](cluster.CommandServer.md#responseid)
- [responseSchema](cluster.CommandServer.md#responseschema)

### Methods

- [invoke](cluster.CommandServer.md#invoke)

## Constructors

### constructor

• **new CommandServer**<`RequestT`, `ResponseT`\>(`invokeId`, `responseId`, `name`, `requestSchema`, `responseSchema`, `handler`)

#### Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `invokeId` | `number` |
| `responseId` | `number` |
| `name` | `string` |
| `requestSchema` | [`TlvSchema`](tlv.TlvSchema.md)<`RequestT`\> |
| `responseSchema` | [`TlvSchema`](tlv.TlvSchema.md)<`ResponseT`\> |
| `handler` | (`request`: `RequestT`, `session`: [`Session`](../interfaces/session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\>, `message`: [`Message`](../interfaces/codec.Message.md), `endpoint`: [`Endpoint`](device.Endpoint.md)) => `ResponseT` \| `Promise`<`ResponseT`\> |

#### Defined in

[packages/matter.js/src/cluster/server/CommandServer.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/CommandServer.ts#L18)

## Properties

### handler

• `Protected` `Readonly` **handler**: (`request`: `RequestT`, `session`: [`Session`](../interfaces/session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\>, `message`: [`Message`](../interfaces/codec.Message.md), `endpoint`: [`Endpoint`](device.Endpoint.md)) => `ResponseT` \| `Promise`<`ResponseT`\>

#### Type declaration

▸ (`request`, `session`, `message`, `endpoint`): `ResponseT` \| `Promise`<`ResponseT`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `RequestT` |
| `session` | [`Session`](../interfaces/session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `message` | [`Message`](../interfaces/codec.Message.md) |
| `endpoint` | [`Endpoint`](device.Endpoint.md) |

##### Returns

`ResponseT` \| `Promise`<`ResponseT`\>

#### Defined in

[packages/matter.js/src/cluster/server/CommandServer.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/CommandServer.ts#L24)

___

### invokeId

• `Readonly` **invokeId**: `number`

#### Defined in

[packages/matter.js/src/cluster/server/CommandServer.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/CommandServer.ts#L19)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/cluster/server/CommandServer.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/CommandServer.ts#L21)

___

### requestSchema

• `Readonly` **requestSchema**: [`TlvSchema`](tlv.TlvSchema.md)<`RequestT`\>

#### Defined in

[packages/matter.js/src/cluster/server/CommandServer.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/CommandServer.ts#L22)

___

### responseId

• `Readonly` **responseId**: `number`

#### Defined in

[packages/matter.js/src/cluster/server/CommandServer.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/CommandServer.ts#L20)

___

### responseSchema

• `Readonly` **responseSchema**: [`TlvSchema`](tlv.TlvSchema.md)<`ResponseT`\>

#### Defined in

[packages/matter.js/src/cluster/server/CommandServer.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/CommandServer.ts#L23)

## Methods

### invoke

▸ **invoke**(`session`, `args`, `message`, `endpoint`): `Promise`<{ `code`: [`StatusCode`](../enums/protocol_interaction.StatusCode.md) ; `response`: [`TlvStream`](../modules/tlv.md#tlvstream) ; `responseId`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `args` | [`TlvStream`](../modules/tlv.md#tlvstream) |
| `message` | [`Message`](../interfaces/codec.Message.md) |
| `endpoint` | [`Endpoint`](device.Endpoint.md) |

#### Returns

`Promise`<{ `code`: [`StatusCode`](../enums/protocol_interaction.StatusCode.md) ; `response`: [`TlvStream`](../modules/tlv.md#tlvstream) ; `responseId`: `number`  }\>

#### Defined in

[packages/matter.js/src/cluster/server/CommandServer.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/CommandServer.ts#L27)
