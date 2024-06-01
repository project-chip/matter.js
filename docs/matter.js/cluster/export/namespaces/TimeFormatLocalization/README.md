[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / TimeFormatLocalization

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

> `readonly` **hourFormat**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| [`HourFormat`](enumerations/HourFormat.md), `any`\>

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

> `readonly` **calendarFormat**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

CalendarFormat

The Node can be configured to use different calendar formats when conveying values to a user.

##### id

> `readonly` **id**: `44` = `0x2c`

##### name

> `readonly` **name**: `"TimeFormatLocalization"` = `"TimeFormatLocalization"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L146)

***

### CalendarFormatComponent

> `const` **CalendarFormatComponent**: `object`

A TimeFormatLocalizationCluster supports these elements if it supports feature CalendarFormat.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.activeCalendarType

> `readonly` **activeCalendarType**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| [`CalendarType`](enumerations/CalendarType.md), `any`\>

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

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L102)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L203)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.hourFormat

> `readonly` **hourFormat**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| [`HourFormat`](enumerations/HourFormat.md), `any`\>

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

> `readonly` **calendarFormat**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

CalendarFormat

The Node can be configured to use different calendar formats when conveying values to a user.

##### id

> `readonly` **id**: `44` = `0x2c`

##### name

> `readonly` **name**: `"TimeFormatLocalization"` = `"TimeFormatLocalization"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:186](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L186)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:236](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L236)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of client generated commands which are supported by this cluster server instance.

##### attributes.activeCalendarType

> `readonly` **activeCalendarType**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| [`CalendarType`](enumerations/CalendarType.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.hourFormat

> `readonly` **hourFormat**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| [`HourFormat`](enumerations/HourFormat.md), `any`\>

The HourFormat attribute shall represent the format that the Node is currently configured to use when
conveying the hour unit of time. If provided, this value shall take priority over any unit

implied through the ActiveLocale Attribute.

###### See

MatterSpecification.v11.Core § 11.4.6.1

##### attributes.supportedCalendarTypes

> `readonly` **supportedCalendarTypes**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`CalendarType`](enumerations/CalendarType.md)[], `any`\> & `object`

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

##### features.calendarFormat

> `readonly` **calendarFormat**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

CalendarFormat

The Node can be configured to use different calendar formats when conveying values to a user.

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`44`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"TimeFormatLocalization"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:211](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L211)
