[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md) / [ColorControlBehavior](../modules/behavior_definitions_color_control_export.ColorControlBehavior.md) / State

# Interface: State

[behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md).[ColorControlBehavior](../modules/behavior_definitions_color_control_export.ColorControlBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_color_control_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [colorCapabilities](behavior_definitions_color_control_export.ColorControlBehavior.State.md#colorcapabilities)
- [colorMode](behavior_definitions_color_control_export.ColorControlBehavior.State.md#colormode)
- [colorPointBIntensity](behavior_definitions_color_control_export.ColorControlBehavior.State.md#colorpointbintensity)
- [colorPointBx](behavior_definitions_color_control_export.ColorControlBehavior.State.md#colorpointbx)
- [colorPointBy](behavior_definitions_color_control_export.ColorControlBehavior.State.md#colorpointby)
- [colorPointGIntensity](behavior_definitions_color_control_export.ColorControlBehavior.State.md#colorpointgintensity)
- [colorPointGx](behavior_definitions_color_control_export.ColorControlBehavior.State.md#colorpointgx)
- [colorPointGy](behavior_definitions_color_control_export.ColorControlBehavior.State.md#colorpointgy)
- [colorPointRIntensity](behavior_definitions_color_control_export.ColorControlBehavior.State.md#colorpointrintensity)
- [colorPointRx](behavior_definitions_color_control_export.ColorControlBehavior.State.md#colorpointrx)
- [colorPointRy](behavior_definitions_color_control_export.ColorControlBehavior.State.md#colorpointry)
- [compensationText](behavior_definitions_color_control_export.ColorControlBehavior.State.md#compensationtext)
- [driftCompensation](behavior_definitions_color_control_export.ColorControlBehavior.State.md#driftcompensation)
- [enhancedColorMode](behavior_definitions_color_control_export.ColorControlBehavior.State.md#enhancedcolormode)
- [numberOfPrimaries](behavior_definitions_color_control_export.ColorControlBehavior.State.md#numberofprimaries)
- [options](behavior_definitions_color_control_export.ColorControlBehavior.State.md#options)
- [primary1Intensity](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary1intensity)
- [primary1X](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary1x)
- [primary1Y](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary1y)
- [primary2Intensity](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary2intensity)
- [primary2X](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary2x)
- [primary2Y](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary2y)
- [primary3Intensity](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary3intensity)
- [primary3X](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary3x)
- [primary3Y](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary3y)
- [primary4Intensity](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary4intensity)
- [primary4X](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary4x)
- [primary4Y](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary4y)
- [primary5Intensity](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary5intensity)
- [primary5X](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary5x)
- [primary5Y](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary5y)
- [primary6Intensity](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary6intensity)
- [primary6X](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary6x)
- [primary6Y](behavior_definitions_color_control_export.ColorControlBehavior.State.md#primary6y)
- [remainingTime](behavior_definitions_color_control_export.ColorControlBehavior.State.md#remainingtime)
- [whitePointX](behavior_definitions_color_control_export.ColorControlBehavior.State.md#whitepointx)
- [whitePointY](behavior_definitions_color_control_export.ColorControlBehavior.State.md#whitepointy)

## Properties

### colorCapabilities

• **colorCapabilities**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `cl`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ct`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ehue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hs`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of the
FeatureMap attribute. All other bits in ColorCapabilities shall be 0.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.18

#### Inherited from

StateType.colorCapabilities

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1700](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1700)

___

### colorMode

• **colorMode**: [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md)

The ColorMode attribute indicates which attributes are currently determining the color of the device.

The value of the ColorMode attribute cannot be written directly - it is set upon reception of any
command in section Commands to the appropriate mode for that command.

Table 39. Values of the ColorMode Attribute

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.9

#### Inherited from

StateType.colorMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1395](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1395)

___

### colorPointBIntensity

• `Optional` **colorPointBIntensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

StateType.colorPointBIntensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1671](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1671)

___

### colorPointBx

• `Optional` **colorPointBx**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

StateType.colorPointBx

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1653](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1653)

___

### colorPointBy

• `Optional` **colorPointBy**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

StateType.colorPointBy

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1662](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1662)

___

### colorPointGIntensity

• `Optional` **colorPointGIntensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

StateType.colorPointGIntensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1644](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1644)

___

### colorPointGx

• `Optional` **colorPointGx**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

StateType.colorPointGx

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1626](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1626)

___

### colorPointGy

• `Optional` **colorPointGy**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

StateType.colorPointGy

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1635](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1635)

___

### colorPointRIntensity

• `Optional` **colorPointRIntensity**: ``null`` \| `number`

The ColorPointRIntensity attribute contains a representation of the relative intensity of the red color
point as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast
Configuration Cluster), normalized such that the color point with the highest relative intensity
contains the value 0xfe.

A value of null shall indicate an invalid value.

**`See`**

MatterSpecification.v11.Cluster § 3.2.10.5

#### Inherited from

StateType.colorPointRIntensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1617](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1617)

___

### colorPointRx

• `Optional` **colorPointRx**: `number`

The ColorPointRX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of x shall be related to the ColorPointRX attribute by the relationship x = ColorPointRX /
65536 (ColorPointRX in the range 0 to 65279 inclusive)

**`See`**

MatterSpecification.v11.Cluster § 3.2.10.3

#### Inherited from

StateType.colorPointRx

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1586](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1586)

___

### colorPointRy

• `Optional` **colorPointRy**: `number`

The ColorPointRY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of y shall be related to the ColorPointRY attribute by the relationship y = ColorPointRY /
65536 (ColorPointRY in the range 0 to 65279 inclusive)

**`See`**

MatterSpecification.v11.Cluster § 3.2.10.4

#### Inherited from

StateType.colorPointRy

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1601](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1601)

___

### compensationText

• `Optional` **compensationText**: `string`

The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to

compensate for color/intensity drift over time.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.7

#### Inherited from

StateType.compensationText

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1383](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1383)

___

### driftCompensation

• `Optional` **driftCompensation**: [`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md)

The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for
color/intensity drift over time. It shall be one of the non-reserved values in Values of the
DriftCompensation Attribute.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.6

#### Inherited from

StateType.driftCompensation

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1374](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1374)

___

### enhancedColorMode

• **enhancedColorMode**: [`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md)

The EnhancedColorMode attribute specifies which attributes are currently determining the color of the
device, as detailed in Values of the EnhancedColorMode Attribute.

To provide compatibility with standard ZCL, the original ColorMode attribute shall indicate ‘CurrentHue
and CurrentSaturation’ when the light uses the EnhancedCurrentHue attribute. If the ColorMode attribute
is changed, e.g., due to one of the standard Color Control cluster commands defined in the ZCL, its new
value shall be copied to the EnhancedColorMode attribute.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.12

#### Inherited from

StateType.enhancedColorMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1688](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1688)

___

### numberOfPrimaries

• **numberOfPrimaries**: ``null`` \| `number`

The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. A
value of null shall indicate that the number of primaries is unknown.

Where this attribute is implemented, the attributes below for indicating the “x” and “y” color values of
the primaries shall also be implemented for each of the primaries from 1 to NumberOfPrimaries, without
leaving gaps. Implementation of the Primary1Intensity attribute and subsequent intensity attributes is
optional.

**`See`**

MatterSpecification.v11.Cluster § 3.2.8.1

#### Inherited from

StateType.numberOfPrimaries

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1437](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1437)

___

### options

• **options**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

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

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.10

#### Inherited from

StateType.options

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1424](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1424)

___

### primary1Intensity

• `Optional` **primary1Intensity**: ``null`` \| `number`

The Primary1intensity attribute contains a representation of the maximum intensity of this primary as
defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast Configuration
Cluster), normalized such that the primary with the highest maximum intensity contains the value 0xfe.

A value of null shall indicate that this primary is not available.

**`See`**

MatterSpecification.v11.Cluster § 3.2.8.4

#### Inherited from

StateType.primary1Intensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1470](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1470)

___

### primary1X

• `Optional` **primary1X**: `number`

The Primary1X attribute contains the normalized chromaticity value x for this primary, as defined in the
CIE xyY Color Space.

The value of x shall be related to the Primary1X attribute by the relationship x = Primary1X / 65536
(Primary1X in the range 0 to 65279 inclusive)

**`See`**

MatterSpecification.v11.Cluster § 3.2.8.2

#### Inherited from

StateType.primary1X

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1448](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1448)

___

### primary1Y

• `Optional` **primary1Y**: `number`

The Primary1Y attribute contains the normalized chromaticity value y for this primary, as defined in the
CIE xyY Color Space.

The value of y shall be related to the Primary1Y attribute by the relationship y = Primary1Y / 65536
(Primary1Y in the range 0 to 65279 inclusive)

**`See`**

MatterSpecification.v11.Cluster § 3.2.8.3

#### Inherited from

StateType.primary1Y

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1459](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1459)

___

### primary2Intensity

• `Optional` **primary2Intensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

StateType.primary2Intensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1485](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1485)

___

### primary2X

• `Optional` **primary2X**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

StateType.primary2X

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1475](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1475)

___

### primary2Y

• `Optional` **primary2Y**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

StateType.primary2Y

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1480](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1480)

___

### primary3Intensity

• `Optional` **primary3Intensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

StateType.primary3Intensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1500](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1500)

___

### primary3X

• `Optional` **primary3X**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

StateType.primary3X

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1490](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1490)

___

### primary3Y

• `Optional` **primary3Y**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

StateType.primary3Y

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1495](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1495)

___

### primary4Intensity

• `Optional` **primary4Intensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

StateType.primary4Intensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1515](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1515)

___

### primary4X

• `Optional` **primary4X**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

StateType.primary4X

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1505](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1505)

___

### primary4Y

• `Optional` **primary4Y**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

StateType.primary4Y

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1510](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1510)

___

### primary5Intensity

• `Optional` **primary5Intensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

StateType.primary5Intensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1530](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1530)

___

### primary5X

• `Optional` **primary5X**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

StateType.primary5X

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1520](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1520)

___

### primary5Y

• `Optional` **primary5Y**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

StateType.primary5Y

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1525](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1525)

___

### primary6Intensity

• `Optional` **primary6Intensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

StateType.primary6Intensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1545](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1545)

___

### primary6X

• `Optional` **primary6X**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

StateType.primary6X

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1535](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1535)

___

### primary6Y

• `Optional` **primary6Y**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

StateType.primary6Y

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1540](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1540)

___

### remainingTime

• `Optional` **remainingTime**: `number`

The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently active
command will be complete.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.3

#### Inherited from

StateType.remainingTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1365](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1365)

___

### whitePointX

• `Optional` **whitePointX**: `number`

The WhitePointX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of x shall be related to the WhitePointX attribute by the relationship x = WhitePointX / 65536
(WhitePointX in the range 0 to 65279 inclusive)

**`See`**

MatterSpecification.v11.Cluster § 3.2.10.1

#### Inherited from

StateType.whitePointX

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1556](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1556)

___

### whitePointY

• `Optional` **whitePointY**: `number`

The WhitePointY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of y shall be related to the WhitePointY attribute by the relationship y = WhitePointY / 65536
(WhitePointY in the range 0 to 65279 inclusive)

**`See`**

MatterSpecification.v11.Cluster § 3.2.10.2

#### Inherited from

StateType.whitePointY

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1571](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1571)
