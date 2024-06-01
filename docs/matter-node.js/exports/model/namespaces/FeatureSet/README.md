[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/model](../../README.md) / FeatureSet

# Namespace: FeatureSet

## Type Aliases

### Definition

> **Definition**: [`Flags`](README.md#flags) \| `object`

#### Source

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:37

***

### Flag

> **Flag**: `string`

#### Source

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:35

***

### Flags

> **Flags**: `Iterable`\<[`Flag`](README.md#flag)\>

#### Source

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:36

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

packages/matter.js/dist/esm/model/definitions/FeatureSet.d.ts:47
