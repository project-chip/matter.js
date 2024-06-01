[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/common](../README.md) / UninitializedDependencyError

# Class: UninitializedDependencyError

Thrown for actions that cannot be performed until further initialization occurs.

## Extends

- [`DependencyLifecycleError`](DependencyLifecycleError.md)

## Constructors

### new UninitializedDependencyError()

> **new UninitializedDependencyError**(`what`, `why`): [`UninitializedDependencyError`](UninitializedDependencyError.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `what` | `string` |
| `why` | `string` |

#### Returns

[`UninitializedDependencyError`](UninitializedDependencyError.md)

#### Inherited from

[`DependencyLifecycleError`](DependencyLifecycleError.md).[`constructor`](DependencyLifecycleError.md#constructors)

#### Source

packages/matter.js/dist/esm/common/Lifecycle.d.ts:34
