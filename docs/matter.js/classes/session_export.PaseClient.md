[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / PaseClient

# Class: PaseClient

[session/export](../modules/session_export.md).PaseClient

## Table of contents

### Constructors

- [constructor](session_export.PaseClient.md#constructor)

### Methods

- [pair](session_export.PaseClient.md#pair)

## Constructors

### constructor

• **new PaseClient**()

## Methods

### pair

▸ **pair**(`client`, `exchange`, `setupPin`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`MatterController`](export._internal_.MatterController.md) |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\> |
| `setupPin` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseClient.ts:20](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseClient.ts#L20)
