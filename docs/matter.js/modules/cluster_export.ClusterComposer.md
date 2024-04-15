[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ClusterComposer

# Namespace: ClusterComposer

[cluster/export](cluster_export.md).ClusterComposer

## Table of contents

### Type Aliases

- [BaseOf](cluster_export.ClusterComposer.md#baseof)
- [Component](cluster_export.ClusterComposer.md#component)
- [ElementType](cluster_export.ClusterComposer.md#elementtype)
- [FeatureFlags](cluster_export.ClusterComposer.md#featureflags)
- [FeatureSelection](cluster_export.ClusterComposer.md#featureselection)
- [FeaturesAsFlags](cluster_export.ClusterComposer.md#featuresasflags)
- [Of](cluster_export.ClusterComposer.md#of)
- [SelectedElements](cluster_export.ClusterComposer.md#selectedelements)
- [SelectorContribution](cluster_export.ClusterComposer.md#selectorcontribution)
- [WithFeatures](cluster_export.ClusterComposer.md#withfeatures)
- [WithSelected](cluster_export.ClusterComposer.md#withselected)
- [WritableDefinition](cluster_export.ClusterComposer.md#writabledefinition)

## Type Aliases

### BaseOf

Ƭ **BaseOf**\<`T`\>: `T`[``"base"``] extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) ? `T`[``"base"``] : `T`

The base of a cluster.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L178)

___

### Component

Ƭ **Component**: `Partial`\<[`Elements`](../interfaces/cluster_export.ClusterType.Elements.md)\>

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L154)

___

### ElementType

Ƭ **ElementType**: ``"attributes"`` \| ``"commands"`` \| ``"events"``

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:261](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L261)

___

### FeatureFlags

Ƭ **FeatureFlags**: `Record`\<`string`, `boolean` \| `undefined`\>

A set of boolean values indicating whether a feature is enabled.

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:164](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L164)

___

### FeatureSelection

Ƭ **FeatureSelection**\<`T`\>: readonly `Capitalize`\<`string` & keyof `T`[``"features"``]\>[]

An array of names indicating features to be injected.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:159](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L159)

___

### FeaturesAsFlags

Ƭ **FeaturesAsFlags**\<`ClusterT`, `FlagsT`\>: \{ [K in keyof ClusterT["features"]]: K extends Uncapitalize\<FlagsT[number]\> ? true : false }

Convert a [FeatureSelection](cluster_export.ClusterComposer.md#featureselection) array into a [FeatureFlags](cluster_export.ClusterComposer.md#featureflags)
object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |
| `FlagsT` | extends [`FeatureSelection`](cluster_export.ClusterComposer.md#featureselection)\<`ClusterT`\> |

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L201)

___

### Of

Ƭ **Of**\<`ClusterT`, `FeaturesT`\>: `ClusterT` extends \{ `extensions`: {}  } ? [`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<`ClusterT`, `FeaturesT`\> : `ClusterT`

Describes the output of [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |
| `FeaturesT` | extends [`FeatureSelection`](cluster_export.ClusterComposer.md#featureselection)\<`ClusterT`\> |

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:169](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L169)

___

### SelectedElements

Ƭ **SelectedElements**\<`FlagsT`, `extensionsT`\>: `extensionsT` extends readonly [infer S, ...(infer R extends readonly Extension[])] ? [`SelectorContribution`](cluster_export.ClusterComposer.md#selectorcontribution)\<`FlagsT`, `S`\> & [`SelectedElements`](cluster_export.ClusterComposer.md#selectedelements)\<`FlagsT`, `R`\> : {}

Choose elements from applicable extensions.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`FeatureFlags`](cluster_export.ClusterComposer.md#featureflags) |
| `extensionsT` | extends readonly [`Extension`](../interfaces/cluster_export.ClusterType.Extension.md)[] |

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:208](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L208)

___

### SelectorContribution

Ƭ **SelectorContribution**\<`FlagsT`, `SelectorT`\>: `FlagsT` extends `SelectorT`[``"flags"``] ? `SelectorT`[``"component"``] extends ``false`` ? `never` : `SelectorT`[``"component"``] & \{ `attributes`: {} ; `commands`: {} ; `events`: {}  } : \{ `attributes`: {} ; `commands`: {} ; `events`: {}  }

Determine the type contributed to feature selection by a specific
selector.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`FeatureFlags`](cluster_export.ClusterComposer.md#featureflags) |
| `SelectorT` | extends [`Extension`](../interfaces/cluster_export.ClusterType.Extension.md) |

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:222](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L222)

___

### WithFeatures

Ƭ **WithFeatures**\<`ClusterT`, `FeaturesT`\>: `Omit`\<[`BaseOf`](cluster_export.ClusterComposer.md#baseof)\<`ClusterT`\>, ``"supportedFeatures"`` \| ``"base"`` \| [`ElementType`](cluster_export.ClusterComposer.md#elementtype)\> & \{ `base`: [`BaseOf`](cluster_export.ClusterComposer.md#baseof)\<`ClusterT`\> ; `supportedFeatures`: [`FeaturesAsFlags`](cluster_export.ClusterComposer.md#featuresasflags)\<[`BaseOf`](cluster_export.ClusterComposer.md#baseof)\<`ClusterT`\>, `FeaturesT`\>  } & [`WithSelected`](cluster_export.ClusterComposer.md#withselected)\<`ClusterT`, [`SelectedElements`](cluster_export.ClusterComposer.md#selectedelements)\<[`FeaturesAsFlags`](cluster_export.ClusterComposer.md#featuresasflags)\<`ClusterT`, `FeaturesT`\>, `ClusterT`[``"extensions"``] extends `object` ? `ClusterT`[``"extensions"``] : []\>\>

The result of composition.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |
| `FeaturesT` | extends [`FeatureSelection`](cluster_export.ClusterComposer.md#featureselection)\<[`BaseOf`](cluster_export.ClusterComposer.md#baseof)\<`ClusterT`\>\> |

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L183)

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
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |
| `SelectedT` | extends [`Component`](cluster_export.ClusterComposer.md#component) |

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:239](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L239)

___

### WritableDefinition

Ƭ **WritableDefinition**: \{ -readonly [Key in keyof ClusterType]: ClusterType[Key] }

A "WritableDefinition" is a Cluster with fields that may be modified.

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:257](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L257)
