[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/color-control/export](../../../README.md) / [ColorControlBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

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

`StateType.colorCapabilities`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1695](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1695)

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

`StateType.colorMode`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1390](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1390)

***

### colorPointBIntensity?

> `optional` **colorPointBIntensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

`StateType.colorPointBIntensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1666](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1666)

***

### colorPointBx?

> `optional` **colorPointBx**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

`StateType.colorPointBx`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1648](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1648)

***

### colorPointBy?

> `optional` **colorPointBy**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

`StateType.colorPointBy`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1657](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1657)

***

### colorPointGIntensity?

> `optional` **colorPointGIntensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

`StateType.colorPointGIntensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1639](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1639)

***

### colorPointGx?

> `optional` **colorPointGx**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

`StateType.colorPointGx`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1621](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1621)

***

### colorPointGy?

> `optional` **colorPointGy**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

`StateType.colorPointGy`

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

`StateType.colorPointRIntensity`

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

`StateType.colorPointRx`

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

`StateType.colorPointRy`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1596](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1596)

***

### compensationText?

> `optional` **compensationText**: `string`

The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to

compensate for color/intensity drift over time.

#### See

MatterSpecification.v11.Cluster § 3.2.7.7

#### Inherited from

`StateType.compensationText`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1378](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1378)

***

### driftCompensation?

> `optional` **driftCompensation**: [`DriftCompensation`](../../../../../../../cluster/export/namespaces/ColorControl/enumerations/DriftCompensation.md)

The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for
color/intensity drift over time. It shall be one of the non-reserved values in Values of the
DriftCompensation Attribute.

#### See

MatterSpecification.v11.Cluster § 3.2.7.6

#### Inherited from

`StateType.driftCompensation`

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

`StateType.enhancedColorMode`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1683](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1683)

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

`StateType.numberOfPrimaries`

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

`StateType.options`

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

`StateType.primary1Intensity`

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

`StateType.primary1X`

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

`StateType.primary1Y`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1454](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1454)

***

### primary2Intensity?

> `optional` **primary2Intensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

`StateType.primary2Intensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1480](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1480)

***

### primary2X?

> `optional` **primary2X**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

`StateType.primary2X`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1470](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1470)

***

### primary2Y?

> `optional` **primary2Y**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

`StateType.primary2Y`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1475](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1475)

***

### primary3Intensity?

> `optional` **primary3Intensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

`StateType.primary3Intensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1495](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1495)

***

### primary3X?

> `optional` **primary3X**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

`StateType.primary3X`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1485](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1485)

***

### primary3Y?

> `optional` **primary3Y**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

`StateType.primary3Y`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1490](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1490)

***

### primary4Intensity?

> `optional` **primary4Intensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`StateType.primary4Intensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1510](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1510)

***

### primary4X?

> `optional` **primary4X**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`StateType.primary4X`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1500](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1500)

***

### primary4Y?

> `optional` **primary4Y**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`StateType.primary4Y`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1505](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1505)

***

### primary5Intensity?

> `optional` **primary5Intensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`StateType.primary5Intensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1525](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1525)

***

### primary5X?

> `optional` **primary5X**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`StateType.primary5X`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1515](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1515)

***

### primary5Y?

> `optional` **primary5Y**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`StateType.primary5Y`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1520](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1520)

***

### primary6Intensity?

> `optional` **primary6Intensity**: `null` \| `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`StateType.primary6Intensity`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1540](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1540)

***

### primary6X?

> `optional` **primary6X**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`StateType.primary6X`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1530](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1530)

***

### primary6Y?

> `optional` **primary6Y**: `number`

#### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`StateType.primary6Y`

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

`StateType.remainingTime`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1360](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1360)

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

`StateType.whitePointX`

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

`StateType.whitePointY`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1566](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1566)
