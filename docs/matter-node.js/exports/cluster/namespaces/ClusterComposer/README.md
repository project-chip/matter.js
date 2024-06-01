[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ClusterComposer

# Namespace: ClusterComposer

## Type Aliases

### BaseOf\<T\>

> **BaseOf**\<`T`\>: `T`\[`"base"`\] *extends* [`ClusterType`](../../interfaces/ClusterType.md) ? `T`\[`"base"`\] : `T`

The base of a cluster.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ClusterType`](../../interfaces/ClusterType.md) |

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:61

***

### Component

> **Component**: `Partial`\<[`Elements`](../ClusterType/interfaces/Elements.md)\>

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:43

***

### ElementType

> **ElementType**: `"attributes"` \| `"commands"` \| `"events"`

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:113

***

### FeatureFlags

> **FeatureFlags**: `Record`\<`string`, `boolean` \| `undefined`\>

A set of boolean values indicating whether a feature is enabled.

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:51

***

### FeatureSelection\<T\>

> **FeatureSelection**\<`T`\>: readonly `Capitalize`\<`string` & keyof `T`\[`"features"`\]\>[]

An array of names indicating features to be injected.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ClusterType`](../../interfaces/ClusterType.md) |

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:47

***

### FeaturesAsFlags\<ClusterT, FlagsT\>

> **FeaturesAsFlags**\<`ClusterT`, `FlagsT`\>: `{ [K in keyof ClusterT["features"]]: K extends Uncapitalize<FlagsT[number]> ? true : false }`

Convert a [FeatureSelection](README.md#featureselectiont) array into a [FeatureFlags](README.md#featureflags)
object.

#### Type parameters

| Type parameter |
| :------ |
| `ClusterT` *extends* [`ClusterType`](../../interfaces/ClusterType.md) |
| `FlagsT` *extends* [`FeatureSelection`](README.md#featureselectiont)\<`ClusterT`\> |

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:73

***

### Of\<ClusterT, FeaturesT\>

> **Of**\<`ClusterT`, `FeaturesT`\>: `ClusterT` *extends* `object` ? [`WithFeatures`](README.md#withfeaturesclustertfeaturest)\<`ClusterT`, `FeaturesT`\> : `ClusterT`

Describes the output of [ClusterComposer.compose](../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `ClusterT` *extends* [`ClusterType`](../../interfaces/ClusterType.md) |
| `FeaturesT` *extends* [`FeatureSelection`](README.md#featureselectiont)\<`ClusterT`\> |

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:55

***

### SelectedElements\<FlagsT, extensionsT\>

> **SelectedElements**\<`FlagsT`, `extensionsT`\>: `extensionsT` *extends* readonly [infer S, `...(infer R extends readonly Extension[])`] ? [`SelectorContribution`](README.md#selectorcontributionflagstselectort)\<`FlagsT`, `S`\> & [`SelectedElements`](README.md#selectedelementsflagstextensionst)\<`FlagsT`, `R`\> : `object`

Choose elements from applicable extensions.

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`FeatureFlags`](README.md#featureflags) |
| `extensionsT` *extends* readonly [`Extension`](../ClusterType/interfaces/Extension.md)[] |

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:79

***

### SelectorContribution\<FlagsT, SelectorT\>

> **SelectorContribution**\<`FlagsT`, `SelectorT`\>: `FlagsT` *extends* `SelectorT`\[`"flags"`\] ? `SelectorT`\[`"component"`\] *extends* `false` ? `never` : `SelectorT`\[`"component"`\] & `object` : `object`

Determine the type contributed to feature selection by a specific
selector.

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`FeatureFlags`](README.md#featureflags) |
| `SelectorT` *extends* [`Extension`](../ClusterType/interfaces/Extension.md) |

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:87

***

### WithFeatures\<ClusterT, FeaturesT\>

> **WithFeatures**\<`ClusterT`, `FeaturesT`\>: `Omit`\<[`BaseOf`](README.md#baseoft)\<`ClusterT`\>, `"supportedFeatures"` \| `"base"` \| [`ElementType`](README.md#elementtype)\> & `object` & [`WithSelected`](README.md#withselectedclustertselectedt)\<`ClusterT`, [`SelectedElements`](README.md#selectedelementsflagstextensionst)\<[`FeaturesAsFlags`](README.md#featuresasflagsclustertflagst)\<`ClusterT`, `FeaturesT`\>, `ClusterT`\[`"extensions"`\] *extends* `object` ? `ClusterT`\[`"extensions"`\] : []\>\>

The result of composition.

#### Type declaration

##### base

> **base**: [`BaseOf`](README.md#baseoft)\<`ClusterT`\>

##### supportedFeatures

> **supportedFeatures**: [`FeaturesAsFlags`](README.md#featuresasflagsclustertflagst)\<[`BaseOf`](README.md#baseoft)\<`ClusterT`\>, `FeaturesT`\>

#### Type parameters

| Type parameter |
| :------ |
| `ClusterT` *extends* [`ClusterType`](../../interfaces/ClusterType.md) |
| `FeaturesT` *extends* [`FeatureSelection`](README.md#featureselectiont)\<[`BaseOf`](README.md#baseoft)\<`ClusterT`\>\> |

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:65

***

### WithSelected\<ClusterT, SelectedT\>

> **WithSelected**\<`ClusterT`, `SelectedT`\>: [`SelectedT`] *extends* [`never`] ? `never` : \{ \[TypeT in ElementType\]: Pick\<ClusterT\[TypeT\], keyof ClusterT\[TypeT\] & (keyof BaseOf\<ClusterT\>\[TypeT\] \| keyof SelectedT\[TypeT\])\> & Omit\<SelectedT\[TypeT\], keyof ClusterT\[TypeT\]\> & Omit\<BaseOf\<ClusterT\>\[TypeT\], keyof ClusterT\[TypeT\] \| keyof SelectedT\[TypeT\]\> \}

Merge elements from the base, selected features and an original cluster
definition.

Note that we have to track the base separate from the originating
cluster.  If we are removing features, we want to maintain only
those features present in the base or selected components.

#### Type parameters

| Type parameter |
| :------ |
| `ClusterT` *extends* [`ClusterType`](../../interfaces/ClusterType.md) |
| `SelectedT` *extends* [`Component`](README.md#component) |

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:104

***

### WritableDefinition

> **WritableDefinition**: `{ -readonly [Key in keyof ClusterType]: ClusterType[Key] }`

A "WritableDefinition" is a Cluster with fields that may be modified.

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:110
