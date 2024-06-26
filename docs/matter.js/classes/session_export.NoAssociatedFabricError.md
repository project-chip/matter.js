[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / NoAssociatedFabricError

# Class: NoAssociatedFabricError

[session/export](../modules/session_export.md).NoAssociatedFabricError

Error base Class for all errors related to the status response messages.

## Hierarchy

- [`StatusResponseError`](protocol_interaction_export.StatusResponseError.md)

  ↳ **`NoAssociatedFabricError`**

## Table of contents

### Constructors

- [constructor](session_export.NoAssociatedFabricError.md#constructor)

### Properties

- [clusterCode](session_export.NoAssociatedFabricError.md#clustercode)
- [code](session_export.NoAssociatedFabricError.md#code)

## Constructors

### constructor

• **new NoAssociatedFabricError**(`message`): [`NoAssociatedFabricError`](session_export.NoAssociatedFabricError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`NoAssociatedFabricError`](session_export.NoAssociatedFabricError.md)

#### Overrides

[StatusResponseError](protocol_interaction_export.StatusResponseError.md).[constructor](protocol_interaction_export.StatusResponseError.md#constructor)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:29](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/session/SecureSession.ts#L29)

## Properties

### clusterCode

• `Optional` `Readonly` **clusterCode**: `number`

#### Inherited from

[StatusResponseError](protocol_interaction_export.StatusResponseError.md).[clusterCode](protocol_interaction_export.StatusResponseError.md#clustercode)

#### Defined in

[packages/matter.js/src/protocol/interaction/StatusCode.ts:45](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/protocol/interaction/StatusCode.ts#L45)

___

### code

• `Readonly` **code**: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)

#### Inherited from

[StatusResponseError](protocol_interaction_export.StatusResponseError.md).[code](protocol_interaction_export.StatusResponseError.md#code)

#### Defined in

[packages/matter.js/src/protocol/interaction/StatusCode.ts:44](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/protocol/interaction/StatusCode.ts#L44)
