[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / FeatureSet

# Namespace: FeatureSet

[exports/model](exports_model.md).FeatureSet

## Table of contents

### Type Aliases

- [Definition](exports_model.FeatureSet.md#definition)
- [Flag](exports_model.FeatureSet.md#flag)
- [Flags](exports_model.FeatureSet.md#flags)

### Functions

- [normalize](exports_model.FeatureSet.md#normalize)

## Type Aliases

### Definition

Ƭ **Definition**: [`Flags`](exports_model.FeatureSet.md#flags) \| \{ `[name: string]`: `boolean` \| `undefined`;  }

#### Defined in

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:37

___

### Flag

Ƭ **Flag**: `string`

#### Defined in

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:35

___

### Flags

Ƭ **Flags**: `Iterable`\<[`Flag`](exports_model.FeatureSet.md#flag)\>

#### Defined in

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:36

## Functions

### normalize

▸ **normalize**(`featureMap`, `supportedFeatures?`): `Object`

Normalize the feature map and list of supported feature names into sets of "all" and "supported" features by
abbreviation.

The input feature set may reference features by short name ("LT") or long name ("levelControlForLighting").  Name
match is case insensitive.

#### Parameters

| Name | Type |
| :------ | :------ |
| `featureMap` | [`ValueModel`](../classes/exports_model.ValueModel.md) |
| `supportedFeatures?` | [`FeatureSet`](../classes/exports_model.FeatureSet-1.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `featuresAvailable` | [`FeatureSet`](../classes/exports_model.FeatureSet-1.md) |
| `featuresSupported` | [`FeatureSet`](../classes/exports_model.FeatureSet-1.md) |

#### Defined in

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:47
