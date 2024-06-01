[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / BallastConfiguration

# Namespace: BallastConfiguration

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### BallastStatus

> `const` **BallastStatus**: `object`

The value of the BallastConfiguration ballastStatus attribute

#### See

MatterSpecification.v11.Cluster § 3.3.6.3

#### Type declaration

##### ballastNonOperational

> **ballastNonOperational**: [`BitFlag`](../../../schema/README.md#bitflag)

##### lampFailure

> **lampFailure**: [`BitFlag`](../../../schema/README.md#bitflag)

#### Source

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:17

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:190

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.ballastFactorAdjustment

> `readonly` **ballastFactorAdjustment**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

The BallastFactorAdjustment attribute specifies the multiplication factor, as a percentage, to be
applied to the configured light output of the lamps. A typical usage of this mechanism is to compensate
for reduction in efficiency over the lifetime of a lamp.

The light output is given by

actual light output = configured light output x BallastFactorAdjustment / 100%

The range for this attribute is manufacturer dependent. If an attempt is made to set this attribute to a
level that cannot be supported, a response shall be returned with status code set to CONSTRAINT_ERROR,
and the level shall not be set. The value of null indicates that ballast factor scaling is not in use.

###### See

MatterSpecification.v11.Cluster § 3.3.7.4

##### attributes.ballastStatus

> `readonly` **ballastStatus**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

The BallastStatus attribute specifies the activity status of the ballast functions. The usage of the
bits is specified in Bit Usage of the BallastStatus Attribute. Where a function is active, the
corresponding bit shall be set to 1. Where a function is not active, the corresponding bit shall be set
to 0.

###### See

MatterSpecification.v11.Cluster § 3.3.6.3

##### attributes.intrinsicBallastFactor

> `readonly` **intrinsicBallastFactor**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

The IntrinsicBallastFactor attribute specifies as a percentage the ballast factor of the ballast/lamp
combination, prior to any adjustment.

A value of null indicates in invalid value.

###### See

MatterSpecification.v11.Cluster § 3.3.7.3

##### attributes.lampAlarmMode

> `readonly` **lampAlarmMode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

The LampAlarmMode attribute specifies which attributes may cause an alarm notification to be generated,
as listed in Values of the LampAlarmMode Attribute. A ‘1’ in each bit position causes its associated
attribute to be able to generate an alarm. (Note: All alarms are also logged in the alarm table – see
Alarms cluster).

###### See

MatterSpecification.v11.Cluster § 3.3.9.5

##### attributes.lampBurnHours

> `readonly` **lampBurnHours**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

The LampBurnHours attribute specifies the length of time, in hours, the currently connected lamps have
been operated, cumulative since the last re-lamping. Burn hours shall not be accumulated if the lamps
are off.

This attribute SHOULD be reset to zero (e.g., remotely) when the lamp(s) are changed. If partially used
lamps are connected, LampBurnHours SHOULD be updated to reflect the burn hours of the lamps.

A value of null indicates an invalid or unknown time.

###### See

MatterSpecification.v11.Cluster § 3.3.9.4

##### attributes.lampBurnHoursTripPoint

> `readonly` **lampBurnHoursTripPoint**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

The LampBurnHoursTripPoint attribute specifies the number of hours the LampBurnHours attribute may reach
before an alarm is generated.

If the Alarms cluster is not present on the same device this attribute is not used and thus may be
omitted (see Dependencies).

The Alarm Code field included in the generated alarm shall be 0x01.

If this attribute takes the value of null, then this alarm shall not be generated.

###### See

MatterSpecification.v11.Cluster § 3.3.9.6

##### attributes.lampManufacturer

> `readonly` **lampManufacturer**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`string`, `any`\>

The LampManufacturer attribute specifies the name of the manufacturer of the currently connected lamps.

###### See

MatterSpecification.v11.Cluster § 3.3.9.2

##### attributes.lampQuantity

> `readonly` **lampQuantity**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The LampQuantity attribute and specifies the number of lamps connected to this ballast.

this number does not take into account whether lamps are actually in their sockets or not).

###### See

MatterSpecification.v11.Cluster § 3.3.8.1

##### attributes.lampRatedHours

> `readonly` **lampRatedHours**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

The LampRatedHours attribute specifies the number of hours of use the lamps are rated for by the
manufacturer.

A value of null indicates an invalid or unknown time.

###### See

MatterSpecification.v11.Cluster § 3.3.9.3

##### attributes.lampType

> `readonly` **lampType**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`string`, `any`\>

The LampType attribute specifies the type of lamps (including their wattage) connected to the ballast.

###### See

MatterSpecification.v11.Cluster § 3.3.9.1

##### attributes.maxLevel

> `readonly` **maxLevel**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

The MaxLevel attribute specifies the light output of the ballast according to the dimming light curve
(see The Dimming Light Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 254 (and
the On/Off Cluster’s OnOff attribute equals to TRUE).

The value of this attribute shall be both less than or equal to PhysicalMaxLevel and greater than or
equal to MinLevel. If an attempt is made to set this attribute to a level where these conditions are not
met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level shall not be
set.

###### See

MatterSpecification.v11.Cluster § 3.3.7.2

##### attributes.minLevel

> `readonly` **minLevel**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

The MinLevel attribute specifies the light output of the ballast according to the dimming light curve
(see The Dimming Light Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 1 (and
the On/Off Cluster’s OnOff attribute equals to TRUE).

The value of this attribute shall be both greater than or equal to PhysicalMinLevel and less than or
equal to MaxLevel. If an attempt is made to set this attribute to a level where these conditions are not
met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level shall not be
set.

###### See

MatterSpecification.v11.Cluster § 3.3.7.1

##### attributes.physicalMaxLevel

> `readonly` **physicalMaxLevel**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The PhysicalMaxLevel attribute specifies the maximum light output the ballast can achieve according to
the dimming light curve (see The Dimming Light Curve).

###### See

MatterSpecification.v11.Cluster § 3.3.6.2

##### attributes.physicalMinLevel

> `readonly` **physicalMinLevel**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The PhysicalMinLevel attribute specifies the minimum light output the ballast can achieve according to
the dimming light curve (see The Dimming Light Curve).

###### See

MatterSpecification.v11.Cluster § 3.3.6.1

##### id

> `readonly` **id**: `769`

##### name

> `readonly` **name**: `"BallastConfiguration"`

##### revision

> `readonly` **revision**: `4`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:32

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:193

***

### LampAlarmMode

> `const` **LampAlarmMode**: `object`

The value of the BallastConfiguration lampAlarmMode attribute

#### See

MatterSpecification.v11.Cluster § 3.3.9.5

#### Type declaration

##### lampBurnHours

> **lampBurnHours**: [`BitFlag`](../../../schema/README.md#bitflag)

#### Source

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:26
