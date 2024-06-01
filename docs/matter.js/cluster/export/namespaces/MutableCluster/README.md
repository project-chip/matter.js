[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / MutableCluster

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

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L123)

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

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L52)

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

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L109)

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

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L59)
