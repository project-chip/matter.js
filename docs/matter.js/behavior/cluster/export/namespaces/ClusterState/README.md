[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / ClusterState

# Namespace: ClusterState

## Type Aliases

### PropertiesOf\<C\>

> **PropertiesOf**\<`C`\>: [`PropertiesOfAttributes`](README.md#propertiesofattributesa)\<[`AttributesOf`](../../../../../cluster/export/namespaces/ClusterType/README.md#attributesofc)\<`C`\>\>

Properties a cluster contributes state.

#### Type parameters

| Type parameter |
| :------ |
| `C` |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterState.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterState.ts#L30)

***

### PropertiesOfAttributes\<A\>

> **PropertiesOfAttributes**\<`A`\>: `{ -readonly [N in keyof A as A[N] extends Object ? never : A[N] extends Object ? never : N]: TypeFromSchema<A[N]["schema"]> }` & `{ -readonly [N in keyof A as A[N] extends Object ? never : A[N] extends Object ? N : never]?: TypeFromSchema<A[N]["schema"]> }` & `{ -readonly [N in keyof A as A[N] extends Object ? A[N] extends Object ? never : N : never]: TypeFromSchema<A[N]["schema"]> }` & `{ -readonly [N in keyof A as A[N] extends Object ? A[N] extends Object ? N : never : never]?: TypeFromSchema<A[N]["schema"]> }`

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* `Record`\<`string`, [`Attribute`](../../../../../cluster/export/namespaces/ClusterType/README.md#attribute)\> |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterState.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterState.ts#L32)

***

### Type\<C, B\>

> **Type**\<`C`, `B`\>: `Omit`\<`InstanceType`\<`B`\[`"State"`\]\>, keyof [`PropertiesOf`](README.md#propertiesofc)\<[`ClusterOf`](../../README.md#clusterofb)\<`B`\>\>\> & [`PropertiesOf`](README.md#propertiesofc)\<`C`\>

Instance type for ClusterBehavior state.

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md) |
| `B` *extends* [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterState.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterState.ts#L21)
