[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / FeatureSet

# Namespace: FeatureSet

[model](model.md).FeatureSet

## Table of contents

### Type Aliases

- [Definition](model.FeatureSet.md#definition)
- [Flag](model.FeatureSet.md#flag)
- [Flags](model.FeatureSet.md#flags)

### Functions

- [normalize](model.FeatureSet.md#normalize)

## Type Aliases

### Definition

Ƭ **Definition**: [`Flags`](model.FeatureSet.md#flags) \| \{ `[name: string]`: `boolean` \| `undefined`;  }

#### Defined in

[packages/matter.js/src/model/definitions/FeatureSet.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FeatureSet.ts#L58)

___

### Flag

Ƭ **Flag**: `string`

#### Defined in

[packages/matter.js/src/model/definitions/FeatureSet.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FeatureSet.ts#L56)

___

### Flags

Ƭ **Flags**: `Iterable`\<[`Flag`](model.FeatureSet.md#flag)\>

#### Defined in

[packages/matter.js/src/model/definitions/FeatureSet.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FeatureSet.ts#L57)

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
| `featureMap` | [`ValueModel`](../classes/model.ValueModel.md) |
| `supportedFeatures?` | [`FeatureSet`](../classes/model.FeatureSet-1.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `featuresAvailable` | [`FeatureSet`](../classes/model.FeatureSet-1.md) |
| `featuresSupported` | [`FeatureSet`](../classes/model.FeatureSet-1.md) |

#### Defined in

[packages/matter.js/src/model/definitions/FeatureSet.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FeatureSet.ts#L67)
