[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / MutableCluster

# Namespace: MutableCluster

## Index

### Interfaces

- [ExtensibleOnly](interfaces/ExtensibleOnly.md)
- [Methods](interfaces/Methods.md)

## Functions

### AsConditional()

> **AsConditional**\<`ClusterT`, `E`, `OI`, `MI`\>(`element`, `__namedParameters`): `E` & `object`

Create a conditional version of an unconditional element definition.

#### Type parameters

| Type parameter |
| :------ |
| `ClusterT` *extends* [`ClusterType`](../../interfaces/ClusterType.md) |
| `E` *extends* [`Attribute`](../ClusterType/README.md#attribute) \| [`Command`](../ClusterType/README.md#command) \| [`Event`](../ClusterType/README.md#event) |
| `OI` *extends* [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`ClusterT`\[`"features"`\]\> |
| `MI` *extends* [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`ClusterT`\[`"features"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `element` | `E` |
| `__namedParameters` | `object` |
| `__namedParameters.mandatoryIf`? | `MI` |
| `__namedParameters.optionalIf`? | `OI` |

#### Returns

`E` & `object`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:66

***

### Component()

> **Component**\<`T`\>(`elements`): `T`

Define a "component" -- a set of elements that may be added to a cluster.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `Partial`\<[`Options`](../ClusterType/README.md#optionsf)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `elements` | `T` |

#### Returns

`T`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:25

***

### ExtensibleOnly()

> **ExtensibleOnly**\<`T`\>(`options`): [`ExtensibleOnly`](interfaces/ExtensibleOnly.md)\<`T`\>

Create a factory for clusters that require extension.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Options`](../ClusterType/README.md#optionsf)\<`object`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `T` |

#### Returns

[`ExtensibleOnly`](interfaces/ExtensibleOnly.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:62

***

### Extensions()

> **Extensions**\<`T`\>(...`extensions`): `T`

Define a cluster's extension set.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* readonly [`Extension`](../ClusterType/interfaces/Extension.md)\<`object`\>[] |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`extensions` | `T` |

#### Returns

`T`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:29
