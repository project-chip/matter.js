[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ClusterComposer

# Namespace: ClusterComposer

[exports/cluster](exports_cluster.md).ClusterComposer

## Table of contents

### Type Aliases

- [BaseOf](exports_cluster.ClusterComposer.md#baseof)
- [Component](exports_cluster.ClusterComposer.md#component)
- [ElementType](exports_cluster.ClusterComposer.md#elementtype)
- [FeatureFlags](exports_cluster.ClusterComposer.md#featureflags)
- [FeatureSelection](exports_cluster.ClusterComposer.md#featureselection)
- [FeaturesAsFlags](exports_cluster.ClusterComposer.md#featuresasflags)
- [Of](exports_cluster.ClusterComposer.md#of)
- [SelectedElements](exports_cluster.ClusterComposer.md#selectedelements)
- [SelectorContribution](exports_cluster.ClusterComposer.md#selectorcontribution)
- [WithFeatures](exports_cluster.ClusterComposer.md#withfeatures)
- [WithSelected](exports_cluster.ClusterComposer.md#withselected)
- [WritableDefinition](exports_cluster.ClusterComposer.md#writabledefinition)

## Type Aliases

### BaseOf

Ƭ **BaseOf**\<`T`\>: `T`[``"base"``] extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) ? `T`[``"base"``] : `T`

The base of a cluster.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:61

___

### Component

Ƭ **Component**: `Partial`\<[`Elements`](../interfaces/exports_cluster.ClusterType.Elements.md)\>

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:43

___

### ElementType

Ƭ **ElementType**: ``"attributes"`` \| ``"commands"`` \| ``"events"``

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:113

___

### FeatureFlags

Ƭ **FeatureFlags**: `Record`\<`string`, `boolean` \| `undefined`\>

A set of boolean values indicating whether a feature is enabled.

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:51

___

### FeatureSelection

Ƭ **FeatureSelection**\<`T`\>: readonly `Capitalize`\<`string` & keyof `T`[``"features"``]\>[]

An array of names indicating features to be injected.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:47

___

### FeaturesAsFlags

Ƭ **FeaturesAsFlags**\<`ClusterT`, `FlagsT`\>: \{ [K in keyof ClusterT["features"]]: K extends Uncapitalize\<FlagsT[number]\> ? true : false }

Convert a [FeatureSelection](exports_cluster.ClusterComposer.md#featureselection) array into a [FeatureFlags](exports_cluster.ClusterComposer.md#featureflags)
object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |
| `FlagsT` | extends [`FeatureSelection`](exports_cluster.ClusterComposer.md#featureselection)\<`ClusterT`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:73

___

### Of

Ƭ **Of**\<`ClusterT`, `FeaturesT`\>: `ClusterT` extends \{ `extensions`: {}  } ? [`WithFeatures`](exports_cluster.ClusterComposer.md#withfeatures)\<`ClusterT`, `FeaturesT`\> : `ClusterT`

Describes the output of [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |
| `FeaturesT` | extends [`FeatureSelection`](exports_cluster.ClusterComposer.md#featureselection)\<`ClusterT`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:55

___

### SelectedElements

Ƭ **SelectedElements**\<`FlagsT`, `extensionsT`\>: `extensionsT` extends readonly [infer S, ...(infer R extends readonly Extension[])] ? [`SelectorContribution`](exports_cluster.ClusterComposer.md#selectorcontribution)\<`FlagsT`, `S`\> & [`SelectedElements`](exports_cluster.ClusterComposer.md#selectedelements)\<`FlagsT`, `R`\> : {}

Choose elements from applicable extensions.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`FeatureFlags`](exports_cluster.ClusterComposer.md#featureflags) |
| `extensionsT` | extends readonly [`Extension`](../interfaces/exports_cluster.ClusterType.Extension.md)[] |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:79

___

### SelectorContribution

Ƭ **SelectorContribution**\<`FlagsT`, `SelectorT`\>: `FlagsT` extends `SelectorT`[``"flags"``] ? `SelectorT`[``"component"``] extends ``false`` ? `never` : `SelectorT`[``"component"``] & \{ `attributes`: {} ; `commands`: {} ; `events`: {}  } : \{ `attributes`: {} ; `commands`: {} ; `events`: {}  }

Determine the type contributed to feature selection by a specific
selector.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`FeatureFlags`](exports_cluster.ClusterComposer.md#featureflags) |
| `SelectorT` | extends [`Extension`](../interfaces/exports_cluster.ClusterType.Extension.md) |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:87

___

### WithFeatures

Ƭ **WithFeatures**\<`ClusterT`, `FeaturesT`\>: `Omit`\<[`BaseOf`](exports_cluster.ClusterComposer.md#baseof)\<`ClusterT`\>, ``"supportedFeatures"`` \| ``"base"`` \| [`ElementType`](exports_cluster.ClusterComposer.md#elementtype)\> & \{ `base`: [`BaseOf`](exports_cluster.ClusterComposer.md#baseof)\<`ClusterT`\> ; `supportedFeatures`: [`FeaturesAsFlags`](exports_cluster.ClusterComposer.md#featuresasflags)\<[`BaseOf`](exports_cluster.ClusterComposer.md#baseof)\<`ClusterT`\>, `FeaturesT`\>  } & [`WithSelected`](exports_cluster.ClusterComposer.md#withselected)\<`ClusterT`, [`SelectedElements`](exports_cluster.ClusterComposer.md#selectedelements)\<[`FeaturesAsFlags`](exports_cluster.ClusterComposer.md#featuresasflags)\<`ClusterT`, `FeaturesT`\>, `ClusterT`[``"extensions"``] extends `object` ? `ClusterT`[``"extensions"``] : []\>\>

The result of composition.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |
| `FeaturesT` | extends [`FeatureSelection`](exports_cluster.ClusterComposer.md#featureselection)\<[`BaseOf`](exports_cluster.ClusterComposer.md#baseof)\<`ClusterT`\>\> |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:65

___

### WithSelected

Ƭ **WithSelected**\<`ClusterT`, `SelectedT`\>: [`SelectedT`] extends [`never`] ? `never` : \{ [TypeT in ElementType]: Pick\<ClusterT[TypeT], keyof ClusterT[TypeT] & (keyof BaseOf\<ClusterT\>[TypeT] \| keyof SelectedT[TypeT])\> & Omit\<SelectedT[TypeT], keyof ClusterT[TypeT]\> & Omit\<BaseOf\<ClusterT\>[TypeT], keyof ClusterT[TypeT] \| keyof SelectedT[TypeT]\> }

Merge elements from the base, selected features and an original cluster
definition.

Note that we have to track the base separate from the originating
cluster.  If we are removing features, we want to maintain only
those features present in the base or selected components.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |
| `SelectedT` | extends [`Component`](exports_cluster.ClusterComposer.md#component) |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:104

___

### WritableDefinition

Ƭ **WritableDefinition**: \{ -readonly [Key in keyof ClusterType]: ClusterType[Key] }

A "WritableDefinition" is a Cluster with fields that may be modified.

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:110
