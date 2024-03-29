[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / MatterFlowError

# Class: MatterFlowError

[exports/common](../modules/exports_common.md).MatterFlowError

Error thrown when an unexpected case in the matter flow is encountered. Please report such errors.

## Hierarchy

- [`MatterError`](exports_common.MatterError.md)

  ↳ **`MatterFlowError`**

  ↳↳ [`MatterFabricConflictError`](exports_common.MatterFabricConflictError.md)

  ↳↳ [`MaximumPasePairingErrorsReachedError`](exports_session.MaximumPasePairingErrorsReachedError.md)

## Table of contents

### Constructors

- [constructor](exports_common.MatterFlowError.md#constructor)

## Constructors

### constructor

• **new MatterFlowError**(`message?`): [`MatterFlowError`](exports_common.MatterFlowError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`MatterFlowError`](exports_common.MatterFlowError.md)

#### Inherited from

[MatterError](exports_common.MatterError.md).[constructor](exports_common.MatterError.md#constructor)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1082
