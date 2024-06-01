[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / ClusterInterface

# Namespace: ClusterInterface

## Index

### Interfaces

- [Component](interfaces/Component.md)
- [Empty](interfaces/Empty.md)

## Type Aliases

### ApplicableComponents\<CA, S\>

> **ApplicableComponents**\<`CA`, `S`\>: `CA` *extends* [infer C, `...(infer R extends Component[])`] ? `S` *extends* `C`\[`"flags"`\] ? [`C`, `...ApplicableComponents<R, S>`] : [`ApplicableComponents`](README.md#applicablecomponentscas)\<`R`, `S`\> : []

#### Type parameters

| Type parameter |
| :------ |
| `CA` *extends* [`Component`](interfaces/Component.md)[] |
| `S` *extends* [`FeatureFlags`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#featureflags) |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterInterface.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterInterface.ts#L78)

***

### AppliedMethodsOf\<CA\>

> **AppliedMethodsOf**\<`CA`\>: `CA` *extends* [infer C, `...(infer R extends Component[])`] ? `C`\[`"methods"`\] & [`AppliedMethodsOf`](README.md#appliedmethodsofca)\<`R`\> : `object`

#### Type parameters

| Type parameter |
| :------ |
| `CA` *extends* [`Component`](interfaces/Component.md)[] |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterInterface.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterInterface.ts#L71)

***

### InterfaceMethodsOf\<I, S\>

> **InterfaceMethodsOf**\<`I`, `S`\>: [`ClusterInterface`](../../README.md#clusterinterfacef) *extends* `I` ? `object` : [`AppliedMethodsOf`](README.md#appliedmethodsofca)\<[`ApplicableComponents`](README.md#applicablecomponentscas)\<`I`\[`"components"`\], `S`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `I` *extends* [`ClusterInterface`](../../README.md#clusterinterfacef) |
| `S` *extends* [`FeatureFlags`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#featureflags) |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterInterface.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterInterface.ts#L66)

***

### InterfaceOf\<B\>

> **InterfaceOf**\<`B`\>: `B` *extends* `object` ? `I` : [`ClusterInterface`](../../README.md#clusterinterfacef)

#### Type parameters

| Type parameter |
| :------ |
| `B` |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterInterface.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterInterface.ts#L58)

***

### MappedMethodsOf\<C\>

> **MappedMethodsOf**\<`C`\>: `string` *extends* keyof `C` ? `object` : `{ readonly [K in keyof C as C[K] extends Object ? never : K]: MethodForCommand<C[K]> }` & `{ readonly [K in keyof C as C[K] extends Object ? K : never]?: MethodForCommand<C[K]> }`

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* `Record`\<`string`, [`Command`](../../../../../cluster/export/namespaces/ClusterType/README.md#command)\> |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterInterface.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterInterface.ts#L91)

***

### MethodForCommand()\<C\>

> **MethodForCommand**\<`C`\>: (`request`) => [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<[`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<`C`\[`"responseSchema"`\]\>\>

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Command`](../../../../../cluster/export/namespaces/ClusterType/README.md#command) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<`C`\[`"requestSchema"`\]\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<[`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<`C`\[`"responseSchema"`\]\>\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterInterface.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterInterface.ts#L87)

***

### MethodsOf\<I, C\>

> **MethodsOf**\<`I`, `C`\>: [`InterfaceMethodsOf`](README.md#interfacemethodsofis)\<`I`, `C`\[`"supportedFeatures"`\]\> & `Omit`\<[`MappedMethodsOf`](README.md#mappedmethodsofc)\<`C`\[`"commands"`\]\>, keyof [`InterfaceMethodsOf`](README.md#interfacemethodsofis)\<`I`, `C`\[`"supportedFeatures"`\]\>\>

#### Type parameters

| Type parameter |
| :------ |
| `I` *extends* [`ClusterInterface`](../../README.md#clusterinterfacef) |
| `C` *extends* [`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md) |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterInterface.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterInterface.ts#L60)

## Variables

### Empty

> `const` **Empty**: `object`

#### Type declaration

##### components

> **components**: `never`[] = `[]`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterInterface.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterInterface.ts#L48)
