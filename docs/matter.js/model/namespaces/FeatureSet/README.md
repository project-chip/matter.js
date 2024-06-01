[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / FeatureSet

# Namespace: FeatureSet

## Type Aliases

### Definition

> **Definition**: [`Flags`](README.md#flags) \| `object`

#### Source

[packages/matter.js/src/model/definitions/FeatureSet.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FeatureSet.ts#L58)

***

### Flag

> **Flag**: `string`

#### Source

[packages/matter.js/src/model/definitions/FeatureSet.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FeatureSet.ts#L56)

***

### Flags

> **Flags**: `Iterable`\<[`Flag`](README.md#flag)\>

#### Source

[packages/matter.js/src/model/definitions/FeatureSet.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FeatureSet.ts#L57)

## Functions

### normalize()

> **normalize**(`featureMap`, `supportedFeatures`?): `object`

Normalize the feature map and list of supported feature names into sets of "all" and "supported" features by
abbreviation.

The input feature set may reference features by short name ("LT") or long name ("levelControlForLighting").  Name
match is case insensitive.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `featureMap` | [`ValueModel`](../../classes/ValueModel.md) |
| `supportedFeatures`? | [`FeatureSet`](../../classes/FeatureSet.md) |

#### Returns

`object`

##### featuresAvailable

> **featuresAvailable**: [`FeatureSet`](../../classes/FeatureSet.md)

##### featuresSupported

> **featuresSupported**: [`FeatureSet`](../../classes/FeatureSet.md)

#### Source

[packages/matter.js/src/model/definitions/FeatureSet.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FeatureSet.ts#L67)
