[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / UninitializedDependencyError

# Class: UninitializedDependencyError

[exports/common](../modules/exports_common.md).UninitializedDependencyError

Thrown for actions that cannot be performed until further initialization occurs.

## Hierarchy

- [`DependencyLifecycleError`](exports_common.DependencyLifecycleError.md)

  ↳ **`UninitializedDependencyError`**

## Table of contents

### Constructors

- [constructor](exports_common.UninitializedDependencyError.md#constructor)

## Constructors

### constructor

• **new UninitializedDependencyError**(`what`, `why`): [`UninitializedDependencyError`](exports_common.UninitializedDependencyError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `what` | `string` |
| `why` | `string` |

#### Returns

[`UninitializedDependencyError`](exports_common.UninitializedDependencyError.md)

#### Inherited from

[DependencyLifecycleError](exports_common.DependencyLifecycleError.md).[constructor](exports_common.DependencyLifecycleError.md#constructor)

#### Defined in

packages/matter.js/dist/esm/common/Lifecycle.d.ts:34
