[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/color-control/export](../../../README.md) / [ColorControlServerLogic](../README.md) / State

# Class: State

## Extends

- `State`

## Constructors

### new State()

> **new State**(): [`State`](State.md)

#### Returns

[`State`](State.md)

#### Inherited from

`ColorControlServerBase.State.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

## Properties

### colorCapabilities

> **colorCapabilities**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of the
FeatureMap attribute. All other bits in ColorCapabilities shall be 0.

#### See

MatterSpecification.v11.Cluster § 3.2.7.18

#### Type declaration

##### colorLoop

> **colorLoop**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### colorTemperature

> **colorTemperature**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### enhancedHue

> **enhancedHue**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### hueSaturation

> **hueSaturation**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### xy

> **xy**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

#### Inherited from

`ColorControlServerBase.State.colorCapabilities`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1695](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1695)

***

### colorLoopActive

> **colorLoopActive**: [`ColorLoopActive`](../../../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorLoopActive.md)

The ColorLoopActive attribute specifies the current active status of the color loop. If this attribute

has the value 0, the color loop shall not be active. If this attribute has the value 1, the color loop
shall be active. All other values (2 to 254) are reserved.

#### See

MatterSpecification.v11.Cluster § 3.2.7.13

#### Inherited from

`ColorControlServerBase.State.colorLoopActive`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1193](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1193)

***

### colorLoopDirection

> **colorLoopDirection**: [`ColorLoopDirection`](../../../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorLoopDirection.md)

The ColorLoopDirection attribute specifies the current direction of the color loop. If this attribute
has the value 0, the EnhancedCurrentHue attribute shall be decremented. If this attribute has the value
1, the EnhancedCurrentHue attribute shall be incremented. All other values (2 to 254) are reserved.

#### See

MatterSpecification.v11.Cluster § 3.2.7.14

#### Inherited from

`ColorControlServerBase.State.colorLoopDirection`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1206)

***

### colorLoopStartEnhancedHue

> **colorLoopStartEnhancedHue**: `number`

The ColorLoopStartEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute from
which the color loop shall be started.

#### See

MatterSpecification.v11.Cluster § 3.2.7.16

#### Inherited from

`ColorControlServerBase.State.colorLoopStartEnhancedHue`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1226)

***

### colorLoopStoredEnhancedHue

> **colorLoopStoredEnhancedHue**: `number`

The ColorLoopStoredEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute before
the color loop was started. Once the color loop is complete, the EnhancedCurrentHue attribute shall be
restored to this value.

#### See

MatterSpecification.v11.Cluster § 3.2.7.17

#### Inherited from

`ColorControlServerBase.State.colorLoopStoredEnhancedHue`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1235](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1235)

***

### colorLoopTime

> **colorLoopTime**: `number`

The ColorLoopTime attribute specifies the number of seconds it shall take to perform a full color loop,
i.e., to cycle all values of the EnhancedCurrentHue attribute (between 0 and 0xfffe).

#### See

MatterSpecification.v11.Cluster § 3.2.7.15

#### Inherited from

`ColorControlServerBase.State.colorLoopTime`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1218)

***

### colorMode

> **colorMode**: [`ColorMode`](../../../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md)

The ColorMode attribute indicates which attributes are currently determining the color of the device.

The value of the ColorMode attribute cannot be written directly - it is set upon reception of any
command in section Commands to the appropriate mode for that command.

Table 39. Values of the ColorMode Attribute

#### See

MatterSpecification.v11.Cluster § 3.2.7.9

#### Inherited from

`ColorControlServerBase.State.colorMode`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1390](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1390)

***

### colorPointBIntensity?

> `optional` **colorPointBIntensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

`ColorControlServerBase.State.colorPointBIntensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1666](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1666)

***

### colorPointBx?

> `optional` **colorPointBx**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

`ColorControlServerBase.State.colorPointBx`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1648](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1648)

***

### colorPointBy?

> `optional` **colorPointBy**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

`ColorControlServerBase.State.colorPointBy`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1657](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1657)

***

### colorPointGIntensity?

> `optional` **colorPointGIntensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

`ColorControlServerBase.State.colorPointGIntensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1639](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1639)

***

### colorPointGx?

> `optional` **colorPointGx**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

`ColorControlServerBase.State.colorPointGx`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1621](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1621)

***

### colorPointGy?

> `optional` **colorPointGy**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

`ColorControlServerBase.State.colorPointGy`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1630](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1630)

***

### colorPointRIntensity?

> `optional` **colorPointRIntensity**: `null` \| `number`

The ColorPointRIntensity attribute contains a representation of the relative intensity of the red color
point as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast
Configuration Cluster), normalized such that the color point with the highest relative intensity
contains the value 0xfe.

A value of null shall indicate an invalid value.

#### See

MatterSpecification.v11.Cluster § 3.2.10.5

#### Inherited from

`ColorControlServerBase.State.colorPointRIntensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1612](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1612)

***

### colorPointRx?

> `optional` **colorPointRx**: `number`

The ColorPointRX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of x shall be related to the ColorPointRX attribute by the relationship x = ColorPointRX /
65536 (ColorPointRX in the range 0 to 65279 inclusive)

#### See

MatterSpecification.v11.Cluster § 3.2.10.3

#### Inherited from

`ColorControlServerBase.State.colorPointRx`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1581](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1581)

***

### colorPointRy?

> `optional` **colorPointRy**: `number`

The ColorPointRY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of y shall be related to the ColorPointRY attribute by the relationship y = ColorPointRY /
65536 (ColorPointRY in the range 0 to 65279 inclusive)

#### See

MatterSpecification.v11.Cluster § 3.2.10.4

#### Inherited from

`ColorControlServerBase.State.colorPointRy`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1596](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1596)

***

### colorTempPhysicalMaxMireds

> **colorTempPhysicalMaxMireds**: `number`

The ColorTempPhysicalMaxMireds attribute indicates the maximum mired value supported by the hardware.
ColorTempPhysicalMaxMireds corresponds to the minimum color temperature in kelvins supported by the
hardware. ColorTemperatureMireds ≤ ColorTempPhysicalMaxMireds.

#### See

MatterSpecification.v11.Cluster § 3.2.7.20

#### Inherited from

`ColorControlServerBase.State.colorTempPhysicalMaxMireds`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1057](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1057)

***

### colorTempPhysicalMinMireds

> **colorTempPhysicalMinMireds**: `number`

The ColorTempPhysicalMinMireds attribute indicates the minimum mired value supported by the hardware.
ColorTempPhysicalMinMireds corresponds to the maximum color temperature in kelvins supported by the
hardware. ColorTempPhysicalMinMireds ≤ ColorTemperatureMireds.

#### See

MatterSpecification.v11.Cluster § 3.2.7.19

#### Inherited from

`ColorControlServerBase.State.colorTempPhysicalMinMireds`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1048](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1048)

***

### colorTemperatureMireds

> **colorTemperatureMireds**: `number`

The ColorTemperatureMireds attribute contains a scaled inverse of the current value of the color
temperature. The unit of ColorTemperatureMireds is the mired (micro reciprocal degree), AKA mirek (micro
reciprocal kelvin). It is updated as fast as practical during commands that change the color.

The color temperature value in kelvins shall be related to the ColorTemperatureMireds attribute in
mireds by the relationship

Color temperature in kelvins = 1,000,000 / ColorTemperatureMireds, where ColorTemperatureMireds is in
the range 1 to 65279 mireds inclusive, giving a color temperature range from 1,000,000 kelvins to 15.32
kelvins.

If this attribute is implemented then the ColorMode attribute shall also be implemented.

#### See

MatterSpecification.v11.Cluster § 3.2.7.8

#### Inherited from

`ColorControlServerBase.State.colorTemperatureMireds`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1039](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1039)

***

### compensationText?

> `optional` **compensationText**: `string`

The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to

compensate for color/intensity drift over time.

#### See

MatterSpecification.v11.Cluster § 3.2.7.7

#### Inherited from

`ColorControlServerBase.State.compensationText`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1378](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1378)

***

### coupleColorTempToLevelMinMireds?

> `optional` **coupleColorTempToLevelMinMireds**: `number`

The CoupleColorTempToLevelMinMireds attribute specifies a lower bound on the value of the
ColorTemperatureMireds attribute for the purposes of coupling the ColorTemperatureMireds attribute to
the CurrentLevel attribute when the CoupleColorTempToLevel bit of the Options attribute of the Level
Control cluster is equal to 1. When coupling the ColorTemperatureMireds attribute to the CurrentLevel
attribute, this value shall correspond to a CurrentLevel value of 0xfe (100%).

This attribute shall be set such that the following relationship exists: ColorTempPhysicalMinMireds ≤
CoupleColorTempToLevelMinMireds ≤ ColorTemperatureMireds

Note that since this attribute is stored as a micro reciprocal degree (mired) value (i.e. color
temperature in kelvins = 1,000,000 / CoupleColorTempToLevelMinMireds), the
CoupleColorTempToLevelMinMireds attribute corresponds to an upper bound on the value of the color
temperature in kelvins supported by the device.

#### See

MatterSpecification.v11.Cluster § 3.2.7.21

#### Inherited from

`ColorControlServerBase.State.coupleColorTempToLevelMinMireds`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1076](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1076)

***

### currentHue

> **currentHue**: `number`

The CurrentHue attribute contains the current hue value of the light. It is updated as fast as practical
during commands that change the hue.

The hue in degrees shall be related to the CurrentHue attribute by the relationship: Hue = CurrentHue x
360 / 254 (CurrentHue in the range 0 to 254 inclusive)

If this attribute is implemented then the CurrentSaturation and ColorMode attributes shall also be
implemented.

#### See

MatterSpecification.v11.Cluster § 3.2.7.1

#### Inherited from

`ColorControlServerBase.State.currentHue`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:906](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L906)

***

### currentSaturation

> **currentSaturation**: `number`

The CurrentSaturation attribute holds the current saturation value of the light. It is updated as fast
as practical during commands that change the saturation.

The saturation shall be related to the CurrentSaturation attribute by the relationship: Saturation =
CurrentSaturation/254 (CurrentSaturation in the range 0 to 254 inclusive)

If this attribute is implemented then the CurrentHue and ColorMode attributes shall also be implemented.

#### See

MatterSpecification.v11.Cluster § 3.2.7.2

#### Inherited from

`ColorControlServerBase.State.currentSaturation`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:919](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L919)

***

### currentX

> **currentX**: `number`

The CurrentX attribute contains the current value of the normalized chromaticity value x, as defined in
the CIE xyY Color Space. It is updated as fast as practical during commands that change the color.

The value of x shall be related to the CurrentX attribute by the relationship x = CurrentX / 65536
(CurrentX in the range 0 to 65279 inclusive)

#### See

MatterSpecification.v11.Cluster § 3.2.7.4

#### Inherited from

`ColorControlServerBase.State.currentX`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:978](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L978)

***

### currentY

> **currentY**: `number`

The CurrentY attribute contains the current value of the normalized chromaticity value y, as defined in
the CIE xyY Color Space. It is updated as fast as practical during commands that change the color.

The value of y shall be related to the CurrentY attribute by the relationship y = CurrentY / 65536
(CurrentY in the range 0 to 65279 inclusive)

#### See

MatterSpecification.v11.Cluster § 3.2.7.5

#### Inherited from

`ColorControlServerBase.State.currentY`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:993](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L993)

***

### driftCompensation?

> `optional` **driftCompensation**: [`DriftCompensation`](../../../../../../../cluster/export/namespaces/ColorControl/enumerations/DriftCompensation.md)

The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for
color/intensity drift over time. It shall be one of the non-reserved values in Values of the
DriftCompensation Attribute.

#### See

MatterSpecification.v11.Cluster § 3.2.7.6

#### Inherited from

`ColorControlServerBase.State.driftCompensation`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1369](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1369)

***

### enhancedColorMode

> **enhancedColorMode**: [`EnhancedColorMode`](../../../../../../../cluster/export/namespaces/ColorControl/enumerations/EnhancedColorMode.md)

The EnhancedColorMode attribute specifies which attributes are currently determining the color of the
device, as detailed in Values of the EnhancedColorMode Attribute.

To provide compatibility with standard ZCL, the original ColorMode attribute shall indicate ‘CurrentHue
and CurrentSaturation’ when the light uses the EnhancedCurrentHue attribute. If the ColorMode attribute
is changed, e.g., due to one of the standard Color Control cluster commands defined in the ZCL, its new
value shall be copied to the EnhancedColorMode attribute.

#### See

MatterSpecification.v11.Cluster § 3.2.7.12

#### Inherited from

`ColorControlServerBase.State.enhancedColorMode`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1683](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1683)

***

### enhancedCurrentHue

> **enhancedCurrentHue**: `number`

The EnhancedCurrentHue attribute represents non-equidistant steps along the CIE 1931 color triangle, and
it provides 16-bits precision.

The upper 8 bits of this attribute shall be used as an index in the implementation specific XY lookup
table to provide the non-equidistance steps. The lower 8 bits shall be used to interpolate between these
steps in a linear way in order to provide color zoom for the user.

To provide compatibility with standard ZCL, the CurrentHue attribute shall contain a hue value in the
range 0 to 254, calculated from the EnhancedCurrentHue attribute.

#### See

MatterSpecification.v11.Cluster § 3.2.7.11

#### Inherited from

`ColorControlServerBase.State.enhancedCurrentHue`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1137)

***

### managedTransitionTimeHandling

> **managedTransitionTimeHandling**: `boolean` = `false`

The default implementation always set the target level immediately and so ignores all transition times
requested or configured.
Set this to true to manage transition times by changing the level value step wise every second. This is in
most cases not the best way because hardware supporting levels usually have ways to specify the change rate
or target value and transition time.

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2178)

***

### numberOfPrimaries

> **numberOfPrimaries**: `null` \| `number`

The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. A
value of null shall indicate that the number of primaries is unknown.

Where this attribute is implemented, the attributes below for indicating the “x” and “y” color values of
the primaries shall also be implemented for each of the primaries from 1 to NumberOfPrimaries, without
leaving gaps. Implementation of the Primary1Intensity attribute and subsequent intensity attributes is
optional.

#### See

MatterSpecification.v11.Cluster § 3.2.8.1

#### Inherited from

`ColorControlServerBase.State.numberOfPrimaries`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1432](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1432)

***

### options

> **options**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The Options attribute is meant to be changed only during commissioning. The Options attribute is a
bitmap that determines the default behavior of some cluster commands. Each command that is dependent on
the Options attribute shall first construct a temporary Options bitmap that is in effect during the
command processing. The temporary Options bitmap has the same format and meaning as the Options
attribute, but includes any bits that may be overridden by command fields.

Below is the format and description of the Options attribute and temporary Options bitmap and the effect
on dependent commands.

Table 40. Options Attribute

ExecuteIfOff Options bit: Command execution shall NOT continue beyond the Options processing if all of
these criteria are true:

  • The On/Off cluster exists on the same endpoint as this cluster.

  • The OnOff attribute of the On/Off cluster, on this endpoint, is FALSE.

  • The value of the ExecuteIfOff bit is 0.

#### See

MatterSpecification.v11.Cluster § 3.2.7.10

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

#### Inherited from

`ColorControlServerBase.State.options`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1419](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1419)

***

### primary1Intensity?

> `optional` **primary1Intensity**: `null` \| `number`

The Primary1intensity attribute contains a representation of the maximum intensity of this primary as
defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast Configuration
Cluster), normalized such that the primary with the highest maximum intensity contains the value 0xfe.

A value of null shall indicate that this primary is not available.

#### See

MatterSpecification.v11.Cluster § 3.2.8.4

#### Inherited from

`ColorControlServerBase.State.primary1Intensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1465](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1465)

***

### primary1X?

> `optional` **primary1X**: `number`

The Primary1X attribute contains the normalized chromaticity value x for this primary, as defined in the
CIE xyY Color Space.

The value of x shall be related to the Primary1X attribute by the relationship x = Primary1X / 65536
(Primary1X in the range 0 to 65279 inclusive)

#### See

MatterSpecification.v11.Cluster § 3.2.8.2

#### Inherited from

`ColorControlServerBase.State.primary1X`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1443](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1443)

***

### primary1Y?

> `optional` **primary1Y**: `number`

The Primary1Y attribute contains the normalized chromaticity value y for this primary, as defined in the
CIE xyY Color Space.

The value of y shall be related to the Primary1Y attribute by the relationship y = Primary1Y / 65536
(Primary1Y in the range 0 to 65279 inclusive)

#### See

MatterSpecification.v11.Cluster § 3.2.8.3

#### Inherited from

`ColorControlServerBase.State.primary1Y`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1454](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1454)

***

### primary2Intensity?

> `optional` **primary2Intensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

`ColorControlServerBase.State.primary2Intensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1480](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1480)

***

### primary2X?

> `optional` **primary2X**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

`ColorControlServerBase.State.primary2X`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1470](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1470)

***

### primary2Y?

> `optional` **primary2Y**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

`ColorControlServerBase.State.primary2Y`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1475](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1475)

***

### primary3Intensity?

> `optional` **primary3Intensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

`ColorControlServerBase.State.primary3Intensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1495](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1495)

***

### primary3X?

> `optional` **primary3X**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

`ColorControlServerBase.State.primary3X`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1485](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1485)

***

### primary3Y?

> `optional` **primary3Y**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

`ColorControlServerBase.State.primary3Y`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1490](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1490)

***

### primary4Intensity?

> `optional` **primary4Intensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`ColorControlServerBase.State.primary4Intensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1510](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1510)

***

### primary4X?

> `optional` **primary4X**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`ColorControlServerBase.State.primary4X`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1500](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1500)

***

### primary4Y?

> `optional` **primary4Y**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`ColorControlServerBase.State.primary4Y`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1505](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1505)

***

### primary5Intensity?

> `optional` **primary5Intensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`ColorControlServerBase.State.primary5Intensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1525](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1525)

***

### primary5X?

> `optional` **primary5X**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`ColorControlServerBase.State.primary5X`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1515](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1515)

***

### primary5Y?

> `optional` **primary5Y**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`ColorControlServerBase.State.primary5Y`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1520](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1520)

***

### primary6Intensity?

> `optional` **primary6Intensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`ColorControlServerBase.State.primary6Intensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1540](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1540)

***

### primary6X?

> `optional` **primary6X**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`ColorControlServerBase.State.primary6X`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1530](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1530)

***

### primary6Y?

> `optional` **primary6Y**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`ColorControlServerBase.State.primary6Y`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1535](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1535)

***

### remainingTime?

> `optional` **remainingTime**: `number`

The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently active
command will be complete.

#### See

MatterSpecification.v11.Cluster § 3.2.7.3

#### Inherited from

`ColorControlServerBase.State.remainingTime`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1360](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1360)

***

### startUpColorTemperatureMireds?

> `optional` **startUpColorTemperatureMireds**: `null` \| `number`

The StartUpColorTemperatureMireds attribute shall define the desired startup color temperature value a
lamp shall use when it is supplied with power and this value shall be reflected in the
ColorTemperatureMireds attribute. In addition, the ColorMode and EnhancedColorMode attributes shall be
set to 0x02 (color temperature). The values of the StartUpColorTemperatureMireds attribute are listed in
the table below,

Table 42. Values of the StartUpColorTemperatureMireds attribute

#### See

MatterSpecification.v11.Cluster § 3.2.7.22

#### Inherited from

`ColorControlServerBase.State.startUpColorTemperatureMireds`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1089](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1089)

***

### whitePointX?

> `optional` **whitePointX**: `number`

The WhitePointX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of x shall be related to the WhitePointX attribute by the relationship x = WhitePointX / 65536
(WhitePointX in the range 0 to 65279 inclusive)

#### See

MatterSpecification.v11.Cluster § 3.2.10.1

#### Inherited from

`ColorControlServerBase.State.whitePointX`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1551](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1551)

***

### whitePointY?

> `optional` **whitePointY**: `number`

The WhitePointY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of y shall be related to the WhitePointY attribute by the relationship y = WhitePointY / 65536
(WhitePointY in the range 0 to 65279 inclusive)

#### See

MatterSpecification.v11.Cluster § 3.2.10.2

#### Inherited from

`ColorControlServerBase.State.whitePointY`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1566](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1566)
