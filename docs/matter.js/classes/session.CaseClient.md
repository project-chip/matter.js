[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session](../modules/session.md) / CaseClient

# Class: CaseClient

[session](../modules/session.md).CaseClient

## Table of contents

### Constructors

- [constructor](session.CaseClient.md#constructor)

### Methods

- [pair](session.CaseClient.md#pair)

## Constructors

### constructor

• **new CaseClient**()

## Methods

### pair

▸ **pair**(`client`, `exchange`, `fabric`, `peerNodeId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`MatterController`](index.MatterController.md) |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\> |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](datatype.NodeId.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/matter.js/src/session/case/CaseClient.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseClient.ts#L24)
