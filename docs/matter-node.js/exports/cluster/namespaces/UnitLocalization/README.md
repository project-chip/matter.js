[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / UnitLocalization

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

> `readonly` **temperatureUnit**: [`BitFlag`](../../../schema/README.md#bitflag)

TemperatureUnit

The Node can be configured to use different units of temperature when conveying values to a user.

##### id

> `readonly` **id**: `45`

##### name

> `readonly` **name**: `"UnitLocalization"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:60

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:147

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

> `readonly` **temperatureUnit**: [`BitFlag`](../../../schema/README.md#bitflag)

TemperatureUnit

The Node can be configured to use different units of temperature when conveying values to a user.

##### id

> `readonly` **id**: `45`

##### name

> `readonly` **name**: `"UnitLocalization"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:97

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:187

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.temperatureUnit

> `readonly` **temperatureUnit**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TempUnit`](enumerations/TempUnit.md) \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### features

> `readonly` **features**: `object`

##### features.temperatureUnit

> `readonly` **temperatureUnit**: [`BitFlag`](../../../schema/README.md#bitflag)

TemperatureUnit

The Node can be configured to use different units of temperature when conveying values to a user.

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"UnitLocalization"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:153

***

### TemperatureUnitComponent

> `const` **TemperatureUnitComponent**: `object`

A UnitLocalizationCluster supports these elements if it supports feature TemperatureUnit.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.temperatureUnit

> `readonly` **temperatureUnit**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TempUnit`](enumerations/TempUnit.md) \| `null`, `any`\>

The TemperatureUnit attribute shall indicate the unit for the Node to use only when conveying
temperature in communication to the user. If provided, this value shall take priority over any unit
implied through the ActiveLocale Attribute.

###### See

MatterSpecification.v11.Core § 11.5.6.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:32
