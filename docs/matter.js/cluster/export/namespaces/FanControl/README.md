[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / FanControl

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

> `readonly` **percentSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

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

> `readonly` **auto**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Auto

Automatic mode supported for fan speed

##### features.multiSpeed

> `readonly` **multiSpeed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MultiSpeed

1-100 speeds

##### features.rocking

> `readonly` **rocking**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Rocking

Rocking movement supported

##### features.wind

> `readonly` **wind**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Wind

Wind emulation supported

##### id

> `readonly` **id**: `514` = `0x202`

##### name

> `readonly` **name**: `"FanControl"` = `"FanControl"`

##### revision

> `readonly` **revision**: `2` = `2`

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:269](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L269)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:369](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L369)

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

> `readonly` **percentSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

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

> `readonly` **auto**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Auto

Automatic mode supported for fan speed

##### features.multiSpeed

> `readonly` **multiSpeed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MultiSpeed

1-100 speeds

##### features.rocking

> `readonly` **rocking**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Rocking

Rocking movement supported

##### features.wind

> `readonly` **wind**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Wind

Wind emulation supported

##### id

> `readonly` **id**: `514` = `0x202`

##### name

> `readonly` **name**: `"FanControl"` = `"FanControl"`

##### revision

> `readonly` **revision**: `2` = `2`

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:357](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L357)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:409](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L409)

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

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

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

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.percentCurrent

> `readonly` **percentCurrent**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute shall indicate the actual currently operating fan speed, or zero to indicate that the fan
is off. See Section 4.4.6.3.1 for more details.

###### See

MatterSpecification.v11.Cluster § 4.4.6.4

##### attributes.percentSetting

> `readonly` **percentSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute shall indicate the speed setting for the fan. This attribute may be written by the client
to indicate a new fan speed. If the client writes null to this attribute, the attribute value shall NOT
change. If this is set to 0, the server shall set the FanMode attribute value to Off.

###### See

MatterSpecification.v11.Cluster § 4.4.6.3

##### attributes.rockSetting

> `readonly` **rockSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.rockSupport

> `readonly` **rockSupport**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.speedCurrent

> `readonly` **speedCurrent**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.speedMax

> `readonly` **speedMax**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.speedSetting

> `readonly` **speedSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.windSetting

> `readonly` **windSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.windSupport

> `readonly` **windSupport**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

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

##### features.auto

> `readonly` **auto**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Auto

Automatic mode supported for fan speed

##### features.multiSpeed

> `readonly` **multiSpeed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MultiSpeed

1-100 speeds

##### features.rocking

> `readonly` **rocking**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Rocking

Rocking movement supported

##### features.wind

> `readonly` **wind**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Wind

Wind emulation supported

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`514`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"FanControl"` = `Cluster.name`

##### revision

> `readonly` **revision**: `2` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:379](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L379)

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

> `readonly` **speedSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute shall indicate the speed setting for the fan. This attribute may be written by the client
to indicate a new fan speed. If the client writes null to this attribute, the attribute value shall NOT
change. If this is set to 0, the server shall set the FanMode attribute value to Off. Please see the
Section 4.4.6.6.1 for details on other values.

###### See

MatterSpecification.v11.Cluster § 4.4.6.6

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:135](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L135)

***

### RockSetting

> `const` **RockSetting**: `object`

The value of the FanControl rockSetting attribute

#### See

MatterSpecification.v11.Cluster § 4.4.6.9

#### Type declaration

##### rockLeftRight

> **rockLeftRight**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### rockRound

> **rockRound**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### rockUpDown

> **rockUpDown**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L30)

***

### RockSupport

> `const` **RockSupport**: `object`

The value of the FanControl rockSupport attribute

#### See

MatterSpecification.v11.Cluster § 4.4.6.8

#### Type declaration

##### rockLeftRight

> **rockLeftRight**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### rockRound

> **rockRound**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### rockUpDown

> **rockUpDown**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L23)

***

### RockingComponent

> `const` **RockingComponent**: `object`

A FanControlCluster supports these elements if it supports feature Rocking.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.rockSetting

> `readonly` **rockSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

> `readonly` **rockSupport**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute is a bitmap that indicates what rocking motions the server supports. The bitmap is shown
in the table below.

###### See

MatterSpecification.v11.Cluster § 4.4.6.8

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:168](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L168)

***

### WindComponent

> `const` **WindComponent**: `object`

A FanControlCluster supports these elements if it supports feature Wind.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.windSetting

> `readonly` **windSetting**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

> `readonly` **windSupport**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute is a bitmap that indicates what wind modes the server supports. At least one wind mode
bit shall be set. The bitmap is shown in the table below.

###### See

MatterSpecification.v11.Cluster § 4.4.6.10

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L201)

***

### WindSetting

> `const` **WindSetting**: `object`

The value of the FanControl windSetting attribute

#### See

MatterSpecification.v11.Cluster § 4.4.6.11

#### Type declaration

##### naturalWind

> **naturalWind**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### sleepWind

> **sleepWind**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L44)

***

### WindSupport

> `const` **WindSupport**: `object`

The value of the FanControl windSupport attribute

#### See

MatterSpecification.v11.Cluster § 4.4.6.10

#### Type declaration

##### naturalWind

> **naturalWind**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### sleepWind

> **sleepWind**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L37)
