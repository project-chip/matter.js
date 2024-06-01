[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / NoAssociatedFabricError

# Class: NoAssociatedFabricError

[exports/session](../modules/exports_session.md).NoAssociatedFabricError

Error base Class for all errors related to the status response messages.

## Hierarchy

- [`StatusResponseError`](exports_interaction.StatusResponseError.md)

  ↳ **`NoAssociatedFabricError`**

## Table of contents

### Constructors

- [constructor](exports_session.NoAssociatedFabricError.md#constructor)

### Properties

- [clusterCode](exports_session.NoAssociatedFabricError.md#clustercode)
- [code](exports_session.NoAssociatedFabricError.md#code)

## Constructors

### constructor

• **new NoAssociatedFabricError**(`message`): [`NoAssociatedFabricError`](exports_session.NoAssociatedFabricError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`NoAssociatedFabricError`](exports_session.NoAssociatedFabricError.md)

#### Overrides

[StatusResponseError](exports_interaction.StatusResponseError.md).[constructor](exports_interaction.StatusResponseError.md#constructor)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:15

## Properties

### clusterCode

• `Optional` `Readonly` **clusterCode**: `number`

#### Inherited from

[StatusResponseError](exports_interaction.StatusResponseError.md).[clusterCode](exports_interaction.StatusResponseError.md#clustercode)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/StatusCode.d.ts:40

___

### code

• `Readonly` **code**: [`StatusCode`](../enums/exports_interaction.StatusCode.md)

#### Inherited from

[StatusResponseError](exports_interaction.StatusResponseError.md).[code](exports_interaction.StatusResponseError.md#code)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/StatusCode.d.ts:39
