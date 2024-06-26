[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md) / [ColorControlServerLogic](../modules/behavior_definitions_color_control_export.ColorControlServerLogic.md) / State

# Class: State

[behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md).[ColorControlServerLogic](../modules/behavior_definitions_color_control_export.ColorControlServerLogic.md).State

## Hierarchy

- `State`

  ↳ **`State`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#constructor)

### Properties

- [colorCapabilities](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorcapabilities)
- [colorLoopActive](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorloopactive)
- [colorLoopDirection](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorloopdirection)
- [colorLoopStartEnhancedHue](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorloopstartenhancedhue)
- [colorLoopStoredEnhancedHue](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorloopstoredenhancedhue)
- [colorLoopTime](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorlooptime)
- [colorMode](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colormode)
- [colorPointBIntensity](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorpointbintensity)
- [colorPointBx](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorpointbx)
- [colorPointBy](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorpointby)
- [colorPointGIntensity](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorpointgintensity)
- [colorPointGx](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorpointgx)
- [colorPointGy](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorpointgy)
- [colorPointRIntensity](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorpointrintensity)
- [colorPointRx](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorpointrx)
- [colorPointRy](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colorpointry)
- [colorTempPhysicalMaxMireds](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colortempphysicalmaxmireds)
- [colorTempPhysicalMinMireds](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colortempphysicalminmireds)
- [colorTemperatureMireds](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#colortemperaturemireds)
- [compensationText](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#compensationtext)
- [coupleColorTempToLevelMinMireds](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#couplecolortemptolevelminmireds)
- [currentHue](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#currenthue)
- [currentSaturation](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#currentsaturation)
- [currentX](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#currentx)
- [currentY](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#currenty)
- [driftCompensation](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#driftcompensation)
- [enhancedColorMode](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#enhancedcolormode)
- [enhancedCurrentHue](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#enhancedcurrenthue)
- [managedTransitionTimeHandling](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#managedtransitiontimehandling)
- [numberOfPrimaries](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#numberofprimaries)
- [options](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#options)
- [primary1Intensity](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary1intensity)
- [primary1X](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary1x)
- [primary1Y](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary1y)
- [primary2Intensity](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary2intensity)
- [primary2X](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary2x)
- [primary2Y](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary2y)
- [primary3Intensity](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary3intensity)
- [primary3X](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary3x)
- [primary3Y](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary3y)
- [primary4Intensity](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary4intensity)
- [primary4X](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary4x)
- [primary4Y](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary4y)
- [primary5Intensity](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary5intensity)
- [primary5X](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary5x)
- [primary5Y](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary5y)
- [primary6Intensity](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary6intensity)
- [primary6X](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary6x)
- [primary6Y](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#primary6y)
- [remainingTime](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#remainingtime)
- [startUpColorTemperatureMireds](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#startupcolortemperaturemireds)
- [whitePointX](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#whitepointx)
- [whitePointY](behavior_definitions_color_control_export.ColorControlServerLogic.State.md#whitepointy)

## Constructors

### constructor

• **new State**(): [`State`](behavior_definitions_color_control_export.ColorControlServerLogic.State.md)

#### Returns

[`State`](behavior_definitions_color_control_export.ColorControlServerLogic.State.md)

#### Inherited from

ColorControlServerBase.State.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

## Properties

### colorCapabilities

• **colorCapabilities**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of the
FeatureMap attribute. All other bits in ColorCapabilities shall be 0.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.18

#### Inherited from

ColorControlServerBase.State.colorCapabilities

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1695](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1695)

___

### colorLoopActive

• **colorLoopActive**: [`ColorLoopActive`](../enums/cluster_export.ColorControl.ColorLoopActive.md)

The ColorLoopActive attribute specifies the current active status of the color loop. If this attribute

has the value 0, the color loop shall not be active. If this attribute has the value 1, the color loop
shall be active. All other values (2 to 254) are reserved.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.13

#### Inherited from

ColorControlServerBase.State.colorLoopActive

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1193](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1193)

___

### colorLoopDirection

• **colorLoopDirection**: [`ColorLoopDirection`](../enums/cluster_export.ColorControl.ColorLoopDirection.md)

The ColorLoopDirection attribute specifies the current direction of the color loop. If this attribute
has the value 0, the EnhancedCurrentHue attribute shall be decremented. If this attribute has the value
1, the EnhancedCurrentHue attribute shall be incremented. All other values (2 to 254) are reserved.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.14

#### Inherited from

ColorControlServerBase.State.colorLoopDirection

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1206](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1206)

___

### colorLoopStartEnhancedHue

• **colorLoopStartEnhancedHue**: `number`

The ColorLoopStartEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute from
which the color loop shall be started.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.16

#### Inherited from

ColorControlServerBase.State.colorLoopStartEnhancedHue

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1226](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1226)

___

### colorLoopStoredEnhancedHue

• **colorLoopStoredEnhancedHue**: `number`

The ColorLoopStoredEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute before
the color loop was started. Once the color loop is complete, the EnhancedCurrentHue attribute shall be
restored to this value.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.17

#### Inherited from

ColorControlServerBase.State.colorLoopStoredEnhancedHue

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1235](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1235)

___

### colorLoopTime

• **colorLoopTime**: `number`

The ColorLoopTime attribute specifies the number of seconds it shall take to perform a full color loop,
i.e., to cycle all values of the EnhancedCurrentHue attribute (between 0 and 0xfffe).

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.15

#### Inherited from

ColorControlServerBase.State.colorLoopTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1218](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1218)

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

ColorControlServerBase.State.colorMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1390](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1390)

___

### colorPointBIntensity

• `Optional` **colorPointBIntensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

ColorControlServerBase.State.colorPointBIntensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1666](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1666)

___

### colorPointBx

• `Optional` **colorPointBx**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

ColorControlServerBase.State.colorPointBx

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1648](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1648)

___

### colorPointBy

• `Optional` **colorPointBy**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

ColorControlServerBase.State.colorPointBy

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1657](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1657)

___

### colorPointGIntensity

• `Optional` **colorPointGIntensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

ColorControlServerBase.State.colorPointGIntensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1639](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1639)

___

### colorPointGx

• `Optional` **colorPointGx**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

ColorControlServerBase.State.colorPointGx

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1621](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1621)

___

### colorPointGy

• `Optional` **colorPointGy**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.10

#### Inherited from

ColorControlServerBase.State.colorPointGy

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1630](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1630)

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

ColorControlServerBase.State.colorPointRIntensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1612](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1612)

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

ColorControlServerBase.State.colorPointRx

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1581](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1581)

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

ColorControlServerBase.State.colorPointRy

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1596](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1596)

___

### colorTempPhysicalMaxMireds

• **colorTempPhysicalMaxMireds**: `number`

The ColorTempPhysicalMaxMireds attribute indicates the maximum mired value supported by the hardware.
ColorTempPhysicalMaxMireds corresponds to the minimum color temperature in kelvins supported by the
hardware. ColorTemperatureMireds ≤ ColorTempPhysicalMaxMireds.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.20

#### Inherited from

ColorControlServerBase.State.colorTempPhysicalMaxMireds

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1057](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1057)

___

### colorTempPhysicalMinMireds

• **colorTempPhysicalMinMireds**: `number`

The ColorTempPhysicalMinMireds attribute indicates the minimum mired value supported by the hardware.
ColorTempPhysicalMinMireds corresponds to the maximum color temperature in kelvins supported by the
hardware. ColorTempPhysicalMinMireds ≤ ColorTemperatureMireds.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.19

#### Inherited from

ColorControlServerBase.State.colorTempPhysicalMinMireds

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1048](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1048)

___

### colorTemperatureMireds

• **colorTemperatureMireds**: `number`

The ColorTemperatureMireds attribute contains a scaled inverse of the current value of the color
temperature. The unit of ColorTemperatureMireds is the mired (micro reciprocal degree), AKA mirek (micro
reciprocal kelvin). It is updated as fast as practical during commands that change the color.

The color temperature value in kelvins shall be related to the ColorTemperatureMireds attribute in
mireds by the relationship

Color temperature in kelvins = 1,000,000 / ColorTemperatureMireds, where ColorTemperatureMireds is in
the range 1 to 65279 mireds inclusive, giving a color temperature range from 1,000,000 kelvins to 15.32
kelvins.

If this attribute is implemented then the ColorMode attribute shall also be implemented.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.8

#### Inherited from

ColorControlServerBase.State.colorTemperatureMireds

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1039](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1039)

___

### compensationText

• `Optional` **compensationText**: `string`

The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to

compensate for color/intensity drift over time.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.7

#### Inherited from

ColorControlServerBase.State.compensationText

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1378](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1378)

___

### coupleColorTempToLevelMinMireds

• `Optional` **coupleColorTempToLevelMinMireds**: `number`

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

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.21

#### Inherited from

ColorControlServerBase.State.coupleColorTempToLevelMinMireds

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1076](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1076)

___

### currentHue

• **currentHue**: `number`

The CurrentHue attribute contains the current hue value of the light. It is updated as fast as practical
during commands that change the hue.

The hue in degrees shall be related to the CurrentHue attribute by the relationship: Hue = CurrentHue x
360 / 254 (CurrentHue in the range 0 to 254 inclusive)

If this attribute is implemented then the CurrentSaturation and ColorMode attributes shall also be
implemented.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.1

#### Inherited from

ColorControlServerBase.State.currentHue

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:906](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L906)

___

### currentSaturation

• **currentSaturation**: `number`

The CurrentSaturation attribute holds the current saturation value of the light. It is updated as fast
as practical during commands that change the saturation.

The saturation shall be related to the CurrentSaturation attribute by the relationship: Saturation =
CurrentSaturation/254 (CurrentSaturation in the range 0 to 254 inclusive)

If this attribute is implemented then the CurrentHue and ColorMode attributes shall also be implemented.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.2

#### Inherited from

ColorControlServerBase.State.currentSaturation

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:919](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L919)

___

### currentX

• **currentX**: `number`

The CurrentX attribute contains the current value of the normalized chromaticity value x, as defined in
the CIE xyY Color Space. It is updated as fast as practical during commands that change the color.

The value of x shall be related to the CurrentX attribute by the relationship x = CurrentX / 65536
(CurrentX in the range 0 to 65279 inclusive)

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.4

#### Inherited from

ColorControlServerBase.State.currentX

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:978](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L978)

___

### currentY

• **currentY**: `number`

The CurrentY attribute contains the current value of the normalized chromaticity value y, as defined in
the CIE xyY Color Space. It is updated as fast as practical during commands that change the color.

The value of y shall be related to the CurrentY attribute by the relationship y = CurrentY / 65536
(CurrentY in the range 0 to 65279 inclusive)

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.5

#### Inherited from

ColorControlServerBase.State.currentY

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:993](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L993)

___

### driftCompensation

• `Optional` **driftCompensation**: [`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md)

The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for
color/intensity drift over time. It shall be one of the non-reserved values in Values of the
DriftCompensation Attribute.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.6

#### Inherited from

ColorControlServerBase.State.driftCompensation

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1369](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1369)

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

ColorControlServerBase.State.enhancedColorMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1683](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1683)

___

### enhancedCurrentHue

• **enhancedCurrentHue**: `number`

The EnhancedCurrentHue attribute represents non-equidistant steps along the CIE 1931 color triangle, and
it provides 16-bits precision.

The upper 8 bits of this attribute shall be used as an index in the implementation specific XY lookup
table to provide the non-equidistance steps. The lower 8 bits shall be used to interpolate between these
steps in a linear way in order to provide color zoom for the user.

To provide compatibility with standard ZCL, the CurrentHue attribute shall contain a hue value in the
range 0 to 254, calculated from the EnhancedCurrentHue attribute.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.11

#### Inherited from

ColorControlServerBase.State.enhancedCurrentHue

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1137](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1137)

___

### managedTransitionTimeHandling

• **managedTransitionTimeHandling**: `boolean` = `false`

The default implementation always set the target level immediately and so ignores all transition times
requested or configured.
Set this to true to manage transition times by changing the level value step wise every second. This is in
most cases not the best way because hardware supporting levels usually have ways to specify the change rate
or target value and transition time.

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2178](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2178)

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

ColorControlServerBase.State.numberOfPrimaries

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1432](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1432)

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

ColorControlServerBase.State.options

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1419](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1419)

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

ColorControlServerBase.State.primary1Intensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1465](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1465)

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

ColorControlServerBase.State.primary1X

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1443](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1443)

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

ColorControlServerBase.State.primary1Y

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1454](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1454)

___

### primary2Intensity

• `Optional` **primary2Intensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

ColorControlServerBase.State.primary2Intensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1480](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1480)

___

### primary2X

• `Optional` **primary2X**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

ColorControlServerBase.State.primary2X

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1470](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1470)

___

### primary2Y

• `Optional` **primary2Y**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

ColorControlServerBase.State.primary2Y

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1475](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1475)

___

### primary3Intensity

• `Optional` **primary3Intensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

ColorControlServerBase.State.primary3Intensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1495](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1495)

___

### primary3X

• `Optional` **primary3X**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

ColorControlServerBase.State.primary3X

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1485](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1485)

___

### primary3Y

• `Optional` **primary3Y**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.8

#### Inherited from

ColorControlServerBase.State.primary3Y

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1490](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1490)

___

### primary4Intensity

• `Optional` **primary4Intensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

ColorControlServerBase.State.primary4Intensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1510](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1510)

___

### primary4X

• `Optional` **primary4X**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

ColorControlServerBase.State.primary4X

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1500](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1500)

___

### primary4Y

• `Optional` **primary4Y**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

ColorControlServerBase.State.primary4Y

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1505](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1505)

___

### primary5Intensity

• `Optional` **primary5Intensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

ColorControlServerBase.State.primary5Intensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1525](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1525)

___

### primary5X

• `Optional` **primary5X**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

ColorControlServerBase.State.primary5X

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1515](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1515)

___

### primary5Y

• `Optional` **primary5Y**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

ColorControlServerBase.State.primary5Y

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1520](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1520)

___

### primary6Intensity

• `Optional` **primary6Intensity**: ``null`` \| `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

ColorControlServerBase.State.primary6Intensity

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1540](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1540)

___

### primary6X

• `Optional` **primary6X**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

ColorControlServerBase.State.primary6X

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1530](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1530)

___

### primary6Y

• `Optional` **primary6Y**: `number`

**`See`**

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

ColorControlServerBase.State.primary6Y

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1535](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1535)

___

### remainingTime

• `Optional` **remainingTime**: `number`

The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently active
command will be complete.

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.3

#### Inherited from

ColorControlServerBase.State.remainingTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1360](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1360)

___

### startUpColorTemperatureMireds

• `Optional` **startUpColorTemperatureMireds**: ``null`` \| `number`

The StartUpColorTemperatureMireds attribute shall define the desired startup color temperature value a
lamp shall use when it is supplied with power and this value shall be reflected in the
ColorTemperatureMireds attribute. In addition, the ColorMode and EnhancedColorMode attributes shall be
set to 0x02 (color temperature). The values of the StartUpColorTemperatureMireds attribute are listed in
the table below,

Table 42. Values of the StartUpColorTemperatureMireds attribute

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.22

#### Inherited from

ColorControlServerBase.State.startUpColorTemperatureMireds

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1089](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1089)

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

ColorControlServerBase.State.whitePointX

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1551](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1551)

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

ColorControlServerBase.State.whitePointY

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1566](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1566)
