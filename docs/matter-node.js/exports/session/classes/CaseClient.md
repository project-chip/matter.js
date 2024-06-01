[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/session](../README.md) / CaseClient

# Class: CaseClient

## Constructors

### new CaseClient()

> **new CaseClient**(): [`CaseClient`](CaseClient.md)

#### Returns

[`CaseClient`](CaseClient.md)

## Methods

### pair()

> **pair**(`client`, `exchange`, `fabric`, `peerNodeId`): `Promise`\<[`SecureSession`](SecureSession.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`MatterController`](../../../export/-internal-/classes/MatterController.md) |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\> |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `peerNodeId` | [`NodeId`](../../datatype/README.md#nodeid) |

#### Returns

`Promise`\<[`SecureSession`](SecureSession.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>\>

#### Source

packages/matter.js/dist/esm/session/case/CaseClient.d.ts:11
