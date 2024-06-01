[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / UnitLocalization

# Namespace: UnitLocalization

## Index

### Enumerations

- [Feature](enumerations/Feature.md)
- [TempUnit](enumerations/TempUnit.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all UnitLocalization clusters.

#### Type declaration

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which UnitLocalizationCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.temperatureUnit

> `readonly` **temperatureUnit**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

TemperatureUnit

The Node can be configured to use different units of temperature when conveying values to a user.

##### id

> `readonly` **id**: `45` = `0x2d`

##### name

> `readonly` **name**: `"UnitLocalization"` = `"UnitLocalization"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L75)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L117)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which UnitLocalizationCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.temperatureUnit

> `readonly` **temperatureUnit**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

TemperatureUnit

The Node can be configured to use different units of temperature when conveying values to a user.

##### id

> `readonly` **id**: `45` = `0x2d`

##### name

> `readonly` **name**: `"UnitLocalization"` = `"UnitLocalization"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L99)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L145)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.temperatureUnit

> `readonly` **temperatureUnit**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| [`TempUnit`](enumerations/TempUnit.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.temperatureUnit

> `readonly` **temperatureUnit**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

TemperatureUnit

The Node can be configured to use different units of temperature when conveying values to a user.

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`45`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"UnitLocalization"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L125)

***

### TemperatureUnitComponent

> `const` **TemperatureUnitComponent**: `object`

A UnitLocalizationCluster supports these elements if it supports feature TemperatureUnit.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.temperatureUnit

> `readonly` **temperatureUnit**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| [`TempUnit`](enumerations/TempUnit.md), `any`\>

The TemperatureUnit attribute shall indicate the unit for the Node to use only when conveying
temperature in communication to the user. If provided, this value shall take priority over any unit
implied through the ActiveLocale Attribute.

###### See

MatterSpecification.v11.Core § 11.5.6.1

#### Source

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L41)
