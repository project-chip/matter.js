[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [session/export](../README.md) / CaseClient

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
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\> |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `peerNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`Promise`\<[`SecureSession`](SecureSession.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>\>

#### Source

[packages/matter.js/src/session/case/CaseClient.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseClient.ts#L35)
