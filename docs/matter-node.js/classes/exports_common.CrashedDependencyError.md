[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / CrashedDependencyError

# Class: CrashedDependencyError

[exports/common](../modules/exports_common.md).CrashedDependencyError

Thrown for actions that cannot be performed because dependency crashed.

## Hierarchy

- [`DependencyLifecycleError`](exports_common.DependencyLifecycleError.md)

  ↳ **`CrashedDependencyError`**

## Table of contents

### Constructors

- [constructor](exports_common.CrashedDependencyError.md#constructor)

## Constructors

### constructor

• **new CrashedDependencyError**(`what`, `why`): [`CrashedDependencyError`](exports_common.CrashedDependencyError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `what` | `string` |
| `why` | `string` |

#### Returns

[`CrashedDependencyError`](exports_common.CrashedDependencyError.md)

#### Inherited from

[DependencyLifecycleError](exports_common.DependencyLifecycleError.md).[constructor](exports_common.DependencyLifecycleError.md#constructor)

#### Defined in

packages/matter.js/dist/esm/common/Lifecycle.d.ts:34
