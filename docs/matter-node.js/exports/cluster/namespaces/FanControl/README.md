[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / FanControl

# Namespace: FanControl

## Index

### Enumerations

- [FanMode](enumerations/FanMode.md)
- [FanModeSequence](enumerations/FanModeSequence.md)
- [Feature](enumerations/Feature.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all FanControl clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.fanMode

> `readonly` **fanMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`FanMode`](enumerations/FanMode.md), `any`\>

This attribute shall indicate the current speed mode of the fan. This attribute may be written by the
client to indicate a new speed mode of the fan. This attribute shall be set to one of the values in the
table below.

###### See

MatterSpecification.v11.Cluster § 4.4.6.1

##### attributes.fanModeSequence

> `readonly` **fanModeSequence**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`FanModeSequence`](enumerations/FanModeSequence.md), `any`\>

This indicates the fan speed ranges that shall be supported.

###### See

MatterSpecification.v11.Cluster § 4.4.6.2

##### attributes.percentCurrent

> `readonly` **percentCurrent**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute shall indicate the actual currently operating fan speed, or zero to indicate that the fan
is off. See Section 4.4.6.3.1 for more details.

###### See

MatterSpecification.v11.Cluster § 4.4.6.4

##### attributes.percentSetting

> `readonly` **percentSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\>

This attribute shall indicate the speed setting for the fan. This attribute may be written by the client
to indicate a new fan speed. If the client writes null to this attribute, the attribute value shall NOT
change. If this is set to 0, the server shall set the FanMode attribute value to Off.

###### See

MatterSpecification.v11.Cluster § 4.4.6.3

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`]

This metadata controls which FanControlCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.auto

> `readonly` **auto**: [`BitFlag`](../../../schema/README.md#bitflag)

Auto

Automatic mode supported for fan speed

##### features.multiSpeed

> `readonly` **multiSpeed**: [`BitFlag`](../../../schema/README.md#bitflag)

MultiSpeed

1-100 speeds

##### features.rocking

> `readonly` **rocking**: [`BitFlag`](../../../schema/README.md#bitflag)

Rocking

Rocking movement supported

##### features.wind

> `readonly` **wind**: [`BitFlag`](../../../schema/README.md#bitflag)

Wind

Wind emulation supported

##### id

> `readonly` **id**: `514`

##### name

> `readonly` **name**: `"FanControl"`

##### revision

> `readonly` **revision**: `2`

#### Source

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:271

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:636

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.fanMode

> `readonly` **fanMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`FanMode`](enumerations/FanMode.md), `any`\>

This attribute shall indicate the current speed mode of the fan. This attribute may be written by the
client to indicate a new speed mode of the fan. This attribute shall be set to one of the values in the
table below.

###### See

MatterSpecification.v11.Cluster § 4.4.6.1

##### attributes.fanModeSequence

> `readonly` **fanModeSequence**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`FanModeSequence`](enumerations/FanModeSequence.md), `any`\>

This indicates the fan speed ranges that shall be supported.

###### See

MatterSpecification.v11.Cluster § 4.4.6.2

##### attributes.percentCurrent

> `readonly` **percentCurrent**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute shall indicate the actual currently operating fan speed, or zero to indicate that the fan
is off. See Section 4.4.6.3.1 for more details.

###### See

MatterSpecification.v11.Cluster § 4.4.6.4

##### attributes.percentSetting

> `readonly` **percentSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\>

This attribute shall indicate the speed setting for the fan. This attribute may be written by the client
to indicate a new fan speed. If the client writes null to this attribute, the attribute value shall NOT
change. If this is set to 0, the server shall set the FanMode attribute value to Off.

###### See

MatterSpecification.v11.Cluster § 4.4.6.3

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`]

This metadata controls which FanControlCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.auto

> `readonly` **auto**: [`BitFlag`](../../../schema/README.md#bitflag)

Auto

Automatic mode supported for fan speed

##### features.multiSpeed

> `readonly` **multiSpeed**: [`BitFlag`](../../../schema/README.md#bitflag)

MultiSpeed

1-100 speeds

##### features.rocking

> `readonly` **rocking**: [`BitFlag`](../../../schema/README.md#bitflag)

Rocking

Rocking movement supported

##### features.wind

> `readonly` **wind**: [`BitFlag`](../../../schema/README.md#bitflag)

Wind

Wind emulation supported

##### id

> `readonly` **id**: `514`

##### name

> `readonly` **name**: `"FanControl"`

##### revision

> `readonly` **revision**: `2`

#### Source

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:450

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:786

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_AttributeId/README.md)[], `never`\>

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)[], `never`\>

##### attributes.fanMode

> `readonly` **fanMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`FanMode`](enumerations/FanMode.md), `any`\>

##### attributes.fanModeSequence

> `readonly` **fanModeSequence**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`FanModeSequence`](enumerations/FanModeSequence.md), `any`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.percentCurrent

> `readonly` **percentCurrent**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

##### attributes.percentSetting

> `readonly` **percentSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.rockSetting

> `readonly` **rockSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.rockSupport

> `readonly` **rockSupport**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.speedCurrent

> `readonly` **speedCurrent**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.speedMax

> `readonly` **speedMax**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.speedSetting

> `readonly` **speedSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.windSetting

> `readonly` **windSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.windSupport

> `readonly` **windSupport**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\> & `object`

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

##### features.auto

> `readonly` **auto**: [`BitFlag`](../../../schema/README.md#bitflag)

Auto

Automatic mode supported for fan speed

##### features.multiSpeed

> `readonly` **multiSpeed**: [`BitFlag`](../../../schema/README.md#bitflag)

MultiSpeed

1-100 speeds

##### features.rocking

> `readonly` **rocking**: [`BitFlag`](../../../schema/README.md#bitflag)

Rocking

Rocking movement supported

##### features.wind

> `readonly` **wind**: [`BitFlag`](../../../schema/README.md#bitflag)

Wind

Wind emulation supported

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"FanControl"`

##### revision

> `readonly` **revision**: `2`

#### Source

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:642

***

### MultiSpeedComponent

> `const` **MultiSpeedComponent**: `object`

A FanControlCluster supports these elements if it supports feature MultiSpeed.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.speedCurrent

> `readonly` **speedCurrent**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute shall indicate the actual currently operating fan speed, or zero to indicate that the fan
is off.

###### See

MatterSpecification.v11.Cluster § 4.4.6.7

##### attributes.speedMax

> `readonly` **speedMax**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate that the fan has one speed (value of 1) or the maximum speed, if the fan
is capable of multiple speeds.

###### See

MatterSpecification.v11.Cluster § 4.4.6.5

##### attributes.speedSetting

> `readonly` **speedSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\>

This attribute shall indicate the speed setting for the fan. This attribute may be written by the client
to indicate a new fan speed. If the client writes null to this attribute, the attribute value shall NOT
change. If this is set to 0, the server shall set the FanMode attribute value to Off. Please see the
Section 4.4.6.6.1 for details on other values.

###### See

MatterSpecification.v11.Cluster § 4.4.6.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:134

***

### RockSetting

> `const` **RockSetting**: `object`

The value of the FanControl rockSetting attribute

#### See

MatterSpecification.v11.Cluster § 4.4.6.9

#### Type declaration

##### rockLeftRight

> **rockLeftRight**: [`BitFlag`](../../../schema/README.md#bitflag)

##### rockRound

> **rockRound**: [`BitFlag`](../../../schema/README.md#bitflag)

##### rockUpDown

> **rockUpDown**: [`BitFlag`](../../../schema/README.md#bitflag)

#### Source

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:27

***

### RockSupport

> `const` **RockSupport**: `object`

The value of the FanControl rockSupport attribute

#### See

MatterSpecification.v11.Cluster § 4.4.6.8

#### Type declaration

##### rockLeftRight

> **rockLeftRight**: [`BitFlag`](../../../schema/README.md#bitflag)

##### rockRound

> **rockRound**: [`BitFlag`](../../../schema/README.md#bitflag)

##### rockUpDown

> **rockUpDown**: [`BitFlag`](../../../schema/README.md#bitflag)

#### Source

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:17

***

### RockingComponent

> `const` **RockingComponent**: `object`

A FanControlCluster supports these elements if it supports feature Rocking.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.rockSetting

> `readonly` **rockSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

This attribute is a bitmap that indicates the current active fan rocking motion settings. Each bit shall
only be set to 1, if the corresponding bit in the RockSupport attribute is set to 1, otherwise a status
code of CONSTRAINT_ERROR shall be returned.

If a combination of supported bits is set by the client, and the server does not support the
combination, the lowest supported single bit in the combination shall be set and active, and all other
bits shall indicate zero.

For example: If RockUpDown and RockRound are both set, but this combination is not possible, then only
RockUpDown becomes active.

The bitmap is shown in the table below.

###### See

MatterSpecification.v11.Cluster § 4.4.6.9

##### attributes.rockSupport

> `readonly` **rockSupport**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

This attribute is a bitmap that indicates what rocking motions the server supports. The bitmap is shown
in the table below.

###### See

MatterSpecification.v11.Cluster § 4.4.6.8

#### Source

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:164

***

### WindComponent

> `const` **WindComponent**: `object`

A FanControlCluster supports these elements if it supports feature Wind.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.windSetting

> `readonly` **windSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

This attribute is a bitmap that indicates the current active fan wind feature settings. Each bit shall
only be set to 1, if the corresponding bit in the WindSupport attribute is set to 1, otherwise a status
code of CONSTRAINT_ERROR shall be returned.

If a combination of supported bits is set by the client, and the server does not support the
combination, the lowest supported single bit in the combination shall be set and active, and all other
bits shall indicate zero.

For example: If Sleep Wind and Natural Wind are set, but this combination is not possible, then only
Sleep Wind becomes active.

The bitmap is shown in the table below.

###### See

MatterSpecification.v11.Cluster § 4.4.6.11

##### attributes.windSupport

> `readonly` **windSupport**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

This attribute is a bitmap that indicates what wind modes the server supports. At least one wind mode
bit shall be set. The bitmap is shown in the table below.

###### See

MatterSpecification.v11.Cluster § 4.4.6.10

#### Source

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:203

***

### WindSetting

> `const` **WindSetting**: `object`

The value of the FanControl windSetting attribute

#### See

MatterSpecification.v11.Cluster § 4.4.6.11

#### Type declaration

##### naturalWind

> **naturalWind**: [`BitFlag`](../../../schema/README.md#bitflag)

##### sleepWind

> **sleepWind**: [`BitFlag`](../../../schema/README.md#bitflag)

#### Source

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:46

***

### WindSupport

> `const` **WindSupport**: `object`

The value of the FanControl windSupport attribute

#### See

MatterSpecification.v11.Cluster § 4.4.6.10

#### Type declaration

##### naturalWind

> **naturalWind**: [`BitFlag`](../../../schema/README.md#bitflag)

##### sleepWind

> **sleepWind**: [`BitFlag`](../../../schema/README.md#bitflag)

#### Source

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:37
