[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/ballast-configuration/export](../modules/behavior_definitions_ballast_configuration_export.md) / [BallastConfigurationBehavior](../modules/behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.md) / State

# Interface: State

[behavior/definitions/ballast-configuration/export](../modules/behavior_definitions_ballast_configuration_export.md).[BallastConfigurationBehavior](../modules/behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_ballast_configuration_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [ballastFactorAdjustment](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#ballastfactoradjustment)
- [ballastStatus](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#ballaststatus)
- [intrinsicBallastFactor](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#intrinsicballastfactor)
- [lampAlarmMode](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#lampalarmmode)
- [lampBurnHours](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#lampburnhours)
- [lampBurnHoursTripPoint](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#lampburnhourstrippoint)
- [lampManufacturer](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#lampmanufacturer)
- [lampQuantity](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#lampquantity)
- [lampRatedHours](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#lampratedhours)
- [lampType](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#lamptype)
- [maxLevel](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#maxlevel)
- [minLevel](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#minlevel)
- [physicalMaxLevel](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#physicalmaxlevel)
- [physicalMinLevel](behavior_definitions_ballast_configuration_export.BallastConfigurationBehavior.State.md#physicalminlevel)

## Properties

### ballastFactorAdjustment

• `Optional` **ballastFactorAdjustment**: ``null`` \| `number`

The BallastFactorAdjustment attribute specifies the multiplication factor, as a percentage, to be
applied to the configured light output of the lamps. A typical usage of this mechanism is to compensate
for reduction in efficiency over the lifetime of a lamp.

The light output is given by

actual light output = configured light output x BallastFactorAdjustment / 100%

The range for this attribute is manufacturer dependent. If an attempt is made to set this attribute to a
level that cannot be supported, a response shall be returned with status code set to CONSTRAINT_ERROR,
and the level shall not be set. The value of null indicates that ballast factor scaling is not in use.

**`See`**

MatterSpecification.v11.Cluster § 3.3.7.4

#### Inherited from

StateType.ballastFactorAdjustment

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L131)

___

### ballastStatus

• `Optional` **ballastStatus**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lampFailure`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

The BallastStatus attribute specifies the activity status of the ballast functions. The usage of the
bits is specified in Bit Usage of the BallastStatus Attribute. Where a function is active, the
corresponding bit shall be set to 1. Where a function is not active, the corresponding bit shall be set
to 0.

**`See`**

MatterSpecification.v11.Cluster § 3.3.6.3

#### Inherited from

StateType.ballastStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L72)

___

### intrinsicBallastFactor

• `Optional` **intrinsicBallastFactor**: ``null`` \| `number`

The IntrinsicBallastFactor attribute specifies as a percentage the ballast factor of the ballast/lamp
combination, prior to any adjustment.

A value of null indicates in invalid value.

**`See`**

MatterSpecification.v11.Cluster § 3.3.7.3

#### Inherited from

StateType.intrinsicBallastFactor

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L110)

___

### lampAlarmMode

• `Optional` **lampAlarmMode**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

The LampAlarmMode attribute specifies which attributes may cause an alarm notification to be generated,
as listed in Values of the LampAlarmMode Attribute. A ‘1’ in each bit position causes its associated
attribute to be able to generate an alarm. (Note: All alarms are also logged in the alarm table – see
Alarms cluster).

**`See`**

MatterSpecification.v11.Cluster § 3.3.9.5

#### Inherited from

StateType.lampAlarmMode

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:208](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L208)

___

### lampBurnHours

• `Optional` **lampBurnHours**: ``null`` \| `number`

The LampBurnHours attribute specifies the length of time, in hours, the currently connected lamps have
been operated, cumulative since the last re-lamping. Burn hours shall not be accumulated if the lamps
are off.

This attribute SHOULD be reset to zero (e.g., remotely) when the lamp(s) are changed. If partially used
lamps are connected, LampBurnHours SHOULD be updated to reflect the burn hours of the lamps.

A value of null indicates an invalid or unknown time.

**`See`**

MatterSpecification.v11.Cluster § 3.3.9.4

#### Inherited from

StateType.lampBurnHours

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:194](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L194)

___

### lampBurnHoursTripPoint

• `Optional` **lampBurnHoursTripPoint**: ``null`` \| `number`

The LampBurnHoursTripPoint attribute specifies the number of hours the LampBurnHours attribute may reach
before an alarm is generated.

If the Alarms cluster is not present on the same device this attribute is not used and thus may be
omitted (see Dependencies).

The Alarm Code field included in the generated alarm shall be 0x01.

If this attribute takes the value of null, then this alarm shall not be generated.

**`See`**

MatterSpecification.v11.Cluster § 3.3.9.6

#### Inherited from

StateType.lampBurnHoursTripPoint

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L227)

___

### lampManufacturer

• `Optional` **lampManufacturer**: `string`

The LampManufacturer attribute specifies the name of the manufacturer of the currently connected lamps.

**`See`**

MatterSpecification.v11.Cluster § 3.3.9.2

#### Inherited from

StateType.lampManufacturer

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:162](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L162)

___

### lampQuantity

• **lampQuantity**: `number`

The LampQuantity attribute and specifies the number of lamps connected to this ballast.

this number does not take into account whether lamps are actually in their sockets or not).

**`See`**

MatterSpecification.v11.Cluster § 3.3.8.1

#### Inherited from

StateType.lampQuantity

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L144)

___

### lampRatedHours

• `Optional` **lampRatedHours**: ``null`` \| `number`

The LampRatedHours attribute specifies the number of hours of use the lamps are rated for by the
manufacturer.

A value of null indicates an invalid or unknown time.

**`See`**

MatterSpecification.v11.Cluster § 3.3.9.3

#### Inherited from

StateType.lampRatedHours

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:176](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L176)

___

### lampType

• `Optional` **lampType**: `string`

The LampType attribute specifies the type of lamps (including their wattage) connected to the ballast.

**`See`**

MatterSpecification.v11.Cluster § 3.3.9.1

#### Inherited from

StateType.lampType

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:151](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L151)

___

### maxLevel

• **maxLevel**: `number`

The MaxLevel attribute specifies the light output of the ballast according to the dimming light curve
(see The Dimming Light Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 254 (and
the On/Off Cluster’s OnOff attribute equals to TRUE).

The value of this attribute shall be both less than or equal to PhysicalMaxLevel and greater than or
equal to MinLevel. If an attempt is made to set this attribute to a level where these conditions are not
met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level shall not be
set.

**`See`**

MatterSpecification.v11.Cluster § 3.3.7.2

#### Inherited from

StateType.maxLevel

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L100)

___

### minLevel

• **minLevel**: `number`

The MinLevel attribute specifies the light output of the ballast according to the dimming light curve
(see The Dimming Light Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 1 (and
the On/Off Cluster’s OnOff attribute equals to TRUE).

The value of this attribute shall be both greater than or equal to PhysicalMinLevel and less than or
equal to MaxLevel. If an attempt is made to set this attribute to a level where these conditions are not
met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level shall not be
set.

**`See`**

MatterSpecification.v11.Cluster § 3.3.7.1

#### Inherited from

StateType.minLevel

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L86)

___

### physicalMaxLevel

• **physicalMaxLevel**: `number`

The PhysicalMaxLevel attribute specifies the maximum light output the ballast can achieve according to
the dimming light curve (see The Dimming Light Curve).

**`See`**

MatterSpecification.v11.Cluster § 3.3.6.2

#### Inherited from

StateType.physicalMaxLevel

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L62)

___

### physicalMinLevel

• **physicalMinLevel**: `number`

The PhysicalMinLevel attribute specifies the minimum light output the ballast can achieve according to
the dimming light curve (see The Dimming Light Curve).

**`See`**

MatterSpecification.v11.Cluster § 3.3.6.1

#### Inherited from

StateType.physicalMinLevel

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L54)
