[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / CaseServer

# Class: CaseServer

[session/export](../modules/session_export.md).CaseServer

## Implements

- [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

## Table of contents

### Constructors

- [constructor](session_export.CaseServer.md#constructor)

### Methods

- [getId](session_export.CaseServer.md#getid)
- [handleSigma1](session_export.CaseServer.md#handlesigma1)
- [onNewExchange](session_export.CaseServer.md#onnewexchange)

## Constructors

### constructor

• **new CaseServer**()

## Methods

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[getId](../interfaces/protocol_export.ProtocolHandler.md#getid)

#### Defined in

[packages/matter.js/src/session/case/CaseServer.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseServer.ts#L45)

___

### handleSigma1

▸ `Private` **handleSigma1**(`server`, `messenger`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`MatterDevice`](export._internal_.MatterDevice.md) |
| `messenger` | [`CaseServerMessenger`](session_export.CaseServerMessenger.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/session/case/CaseServer.ts:49](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseServer.ts#L49)

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[onNewExchange](../interfaces/protocol_export.ProtocolHandler.md#onnewexchange)

#### Defined in

[packages/matter.js/src/session/case/CaseServer.ts:35](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseServer.ts#L35)
