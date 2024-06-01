[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / TimeFormatLocalization

# Namespace: TimeFormatLocalization

## Index

### Enumerations

- [CalendarType](enumerations/CalendarType.md)
- [Feature](enumerations/Feature.md)
- [HourFormat](enumerations/HourFormat.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all TimeFormatLocalization clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.hourFormat

> `readonly` **hourFormat**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`HourFormat`](enumerations/HourFormat.md) \| `null`, `any`\>

The HourFormat attribute shall represent the format that the Node is currently configured to use when
conveying the hour unit of time. If provided, this value shall take priority over any unit

implied through the ActiveLocale Attribute.

###### See

MatterSpecification.v11.Core § 11.4.6.1

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which TimeFormatLocalizationCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.calendarFormat

> `readonly` **calendarFormat**: [`BitFlag`](../../../schema/README.md#bitflag)

CalendarFormat

The Node can be configured to use different calendar formats when conveying values to a user.

##### id

> `readonly` **id**: `44`

##### name

> `readonly` **name**: `"TimeFormatLocalization"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:118

***

### CalendarFormatComponent

> `const` **CalendarFormatComponent**: `object`

A TimeFormatLocalizationCluster supports these elements if it supports feature CalendarFormat.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.activeCalendarType

> `readonly` **activeCalendarType**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`CalendarType`](enumerations/CalendarType.md) \| `null`, `any`\>

The ActiveCalendarType attribute shall represent the calendar format that the Node is currently
configured to use when conveying dates. If provided, this value shall take priority over any unit
implied through the ActiveLocale Attribute.

###### See

MatterSpecification.v11.Core § 11.4.6.2

##### attributes.supportedCalendarTypes

> `readonly` **supportedCalendarTypes**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`CalendarType`](enumerations/CalendarType.md)[], `any`\>

The SupportedCalendarTypes attribute shall represent a list of CalendarTypeEnum values that are
supported by the Node. The list shall NOT contain any duplicate entries. The ordering of items within
the list SHOULD NOT express any meaning. The maximum length of the SupportedCalendarTypes list shall be
equivalent to the number of enumerations within CalendarTypeEnum.

###### See

MatterSpecification.v11.Core § 11.4.6.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:81

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:244

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.hourFormat

> `readonly` **hourFormat**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`HourFormat`](enumerations/HourFormat.md) \| `null`, `any`\>

The HourFormat attribute shall represent the format that the Node is currently configured to use when
conveying the hour unit of time. If provided, this value shall take priority over any unit

implied through the ActiveLocale Attribute.

###### See

MatterSpecification.v11.Core § 11.4.6.1

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which TimeFormatLocalizationCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.calendarFormat

> `readonly` **calendarFormat**: [`BitFlag`](../../../schema/README.md#bitflag)

CalendarFormat

The Node can be configured to use different calendar formats when conveying values to a user.

##### id

> `readonly` **id**: `44`

##### name

> `readonly` **name**: `"TimeFormatLocalization"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:175

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:301

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.activeCalendarType

> `readonly` **activeCalendarType**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`CalendarType`](enumerations/CalendarType.md) \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.attributeList

> `readonly` **attributeList**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.eventList

> `readonly` **eventList**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.featureMap

> `readonly` **featureMap**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.hourFormat

> `readonly` **hourFormat**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`HourFormat`](enumerations/HourFormat.md) \| `null`, `any`\>

##### attributes.supportedCalendarTypes

> `readonly` **supportedCalendarTypes**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`CalendarType`](enumerations/CalendarType.md)[], `any`\> & `object`

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

##### features.calendarFormat

> `readonly` **calendarFormat**: [`BitFlag`](../../../schema/README.md#bitflag)

CalendarFormat

The Node can be configured to use different calendar formats when conveying values to a user.

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"TimeFormatLocalization"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:250
