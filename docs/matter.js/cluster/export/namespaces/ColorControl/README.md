[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / ColorControl

# Namespace: ColorControl

## Index

### Enumerations

- [Action](enumerations/Action.md)
- [ColorControlDirection](enumerations/ColorControlDirection.md)
- [ColorLoopActive](enumerations/ColorLoopActive.md)
- [ColorLoopDirection](enumerations/ColorLoopDirection.md)
- [ColorLoopSetDirection](enumerations/ColorLoopSetDirection.md)
- [ColorMode](enumerations/ColorMode.md)
- [DriftCompensation](enumerations/DriftCompensation.md)
- [EnhancedColorMode](enumerations/EnhancedColorMode.md)
- [Feature](enumerations/Feature.md)
- [MoveMode](enumerations/MoveMode.md)
- [StepMode](enumerations/StepMode.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [ColorLoopSetRequest](interfaces/ColorLoopSetRequest.md)
- [Complete](interfaces/Complete.md)
- [EnhancedMoveHueRequest](interfaces/EnhancedMoveHueRequest.md)
- [EnhancedMoveToHueAndSaturationRequest](interfaces/EnhancedMoveToHueAndSaturationRequest.md)
- [EnhancedMoveToHueRequest](interfaces/EnhancedMoveToHueRequest.md)
- [EnhancedStepHueRequest](interfaces/EnhancedStepHueRequest.md)
- [MoveColorRequest](interfaces/MoveColorRequest.md)
- [MoveColorTemperatureRequest](interfaces/MoveColorTemperatureRequest.md)
- [MoveHueRequest](interfaces/MoveHueRequest.md)
- [MoveSaturationRequest](interfaces/MoveSaturationRequest.md)
- [MoveToColorRequest](interfaces/MoveToColorRequest.md)
- [MoveToColorTemperatureRequest](interfaces/MoveToColorTemperatureRequest.md)
- [MoveToHueAndSaturationRequest](interfaces/MoveToHueAndSaturationRequest.md)
- [MoveToHueRequest](interfaces/MoveToHueRequest.md)
- [MoveToSaturationRequest](interfaces/MoveToSaturationRequest.md)
- [StepColorRequest](interfaces/StepColorRequest.md)
- [StepColorTemperatureRequest](interfaces/StepColorTemperatureRequest.md)
- [StepHueRequest](interfaces/StepHueRequest.md)
- [StepSaturationRequest](interfaces/StepSaturationRequest.md)
- [StopMoveStepRequest](interfaces/StopMoveStepRequest.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all ColorControl clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.colorCapabilities

> `readonly` **colorCapabilities**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of the
FeatureMap attribute. All other bits in ColorCapabilities shall be 0.

###### See

MatterSpecification.v11.Cluster § 3.2.7.18

##### attributes.colorMode

> `readonly` **colorMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`ColorMode`](enumerations/ColorMode.md), `any`\>

The ColorMode attribute indicates which attributes are currently determining the color of the device.

The value of the ColorMode attribute cannot be written directly - it is set upon reception of any
command in section Commands to the appropriate mode for that command.

Table 39. Values of the ColorMode Attribute

###### See

MatterSpecification.v11.Cluster § 3.2.7.9

##### attributes.colorPointBIntensity

> `readonly` **colorPointBIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointBx

> `readonly` **colorPointBx**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointBy

> `readonly` **colorPointBy**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointGIntensity

> `readonly` **colorPointGIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointGx

> `readonly` **colorPointGx**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointGy

> `readonly` **colorPointGy**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointRIntensity

> `readonly` **colorPointRIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The ColorPointRIntensity attribute contains a representation of the relative intensity of the red color
point as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast
Configuration Cluster), normalized such that the color point with the highest relative intensity
contains the value 0xfe.

A value of null shall indicate an invalid value.

###### See

MatterSpecification.v11.Cluster § 3.2.10.5

##### attributes.colorPointRx

> `readonly` **colorPointRx**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The ColorPointRX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of x shall be related to the ColorPointRX attribute by the relationship x = ColorPointRX /
65536 (ColorPointRX in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.3

##### attributes.colorPointRy

> `readonly` **colorPointRy**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The ColorPointRY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of y shall be related to the ColorPointRY attribute by the relationship y = ColorPointRY /
65536 (ColorPointRY in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.4

##### attributes.compensationText

> `readonly` **compensationText**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`string`, `any`\>

The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to

compensate for color/intensity drift over time.

###### See

MatterSpecification.v11.Cluster § 3.2.7.7

##### attributes.driftCompensation

> `readonly` **driftCompensation**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`DriftCompensation`](enumerations/DriftCompensation.md), `any`\>

The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for
color/intensity drift over time. It shall be one of the non-reserved values in Values of the
DriftCompensation Attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.7.6

##### attributes.enhancedColorMode

> `readonly` **enhancedColorMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`EnhancedColorMode`](enumerations/EnhancedColorMode.md), `any`\>

The EnhancedColorMode attribute specifies which attributes are currently determining the color of the
device, as detailed in Values of the EnhancedColorMode Attribute.

To provide compatibility with standard ZCL, the original ColorMode attribute shall indicate ‘CurrentHue
and CurrentSaturation’ when the light uses the EnhancedCurrentHue attribute. If the ColorMode attribute
is changed, e.g., due to one of the standard Color Control cluster commands defined in the ZCL, its new
value shall be copied to the EnhancedColorMode attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.7.12

##### attributes.numberOfPrimaries

> `readonly` **numberOfPrimaries**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. A
value of null shall indicate that the number of primaries is unknown.

Where this attribute is implemented, the attributes below for indicating the “x” and “y” color values of
the primaries shall also be implemented for each of the primaries from 1 to NumberOfPrimaries, without
leaving gaps. Implementation of the Primary1Intensity attribute and subsequent intensity attributes is
optional.

###### See

MatterSpecification.v11.Cluster § 3.2.8.1

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

###### See

MatterSpecification.v11.Cluster § 3.2.7.10

##### attributes.primary1Intensity

> `readonly` **primary1Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

The Primary1intensity attribute contains a representation of the maximum intensity of this primary as
defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast Configuration
Cluster), normalized such that the primary with the highest maximum intensity contains the value 0xfe.

A value of null shall indicate that this primary is not available.

###### See

MatterSpecification.v11.Cluster § 3.2.8.4

##### attributes.primary1X

> `readonly` **primary1X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

The Primary1X attribute contains the normalized chromaticity value x for this primary, as defined in the
CIE xyY Color Space.

The value of x shall be related to the Primary1X attribute by the relationship x = Primary1X / 65536
(Primary1X in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.8.2

##### attributes.primary1Y

> `readonly` **primary1Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

The Primary1Y attribute contains the normalized chromaticity value y for this primary, as defined in the
CIE xyY Color Space.

The value of y shall be related to the Primary1Y attribute by the relationship y = Primary1Y / 65536
(Primary1Y in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.8.3

##### attributes.primary2Intensity

> `readonly` **primary2Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary2X

> `readonly` **primary2X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary2Y

> `readonly` **primary2Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary3Intensity

> `readonly` **primary3Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary3X

> `readonly` **primary3X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary3Y

> `readonly` **primary3Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary4Intensity

> `readonly` **primary4Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary4X

> `readonly` **primary4X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary4Y

> `readonly` **primary4Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary5Intensity

> `readonly` **primary5Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary5X

> `readonly` **primary5X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary5Y

> `readonly` **primary5Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary6Intensity

> `readonly` **primary6Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary6X

> `readonly` **primary6X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary6Y

> `readonly` **primary6Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.remainingTime

> `readonly` **remainingTime**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently active
command will be complete.

###### See

MatterSpecification.v11.Cluster § 3.2.7.3

##### attributes.whitePointX

> `readonly` **whitePointX**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The WhitePointX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of x shall be related to the WhitePointX attribute by the relationship x = WhitePointX / 65536
(WhitePointX in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.1

##### attributes.whitePointY

> `readonly` **whitePointY**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The WhitePointY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of y shall be related to the WhitePointY attribute by the relationship y = WhitePointY / 65536
(WhitePointY in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.2

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which ColorControlCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.colorLoop

> `readonly` **colorLoop**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ColorLoop

Color loop is supported.

##### features.colorTemperature

> `readonly` **colorTemperature**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ColorTemperature

Supports specification of color temperature.

##### features.enhancedHue

> `readonly` **enhancedHue**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

EnhancedHue

Enhanced hue is supported.

##### features.hueSaturation

> `readonly` **hueSaturation**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

HueSaturation

Supports color specification via hue/saturation.

##### features.xy

> `readonly` **xy**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Xy

Supports color specification via XY.

##### id

> `readonly` **id**: `768` = `0x300`

##### name

> `readonly` **name**: `"ColorControl"` = `"ColorControl"`

##### revision

> `readonly` **revision**: `5` = `5`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1311](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1311)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1729](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1729)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.colorCapabilities

> `readonly` **colorCapabilities**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of the
FeatureMap attribute. All other bits in ColorCapabilities shall be 0.

###### See

MatterSpecification.v11.Cluster § 3.2.7.18

##### attributes.colorMode

> `readonly` **colorMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`ColorMode`](enumerations/ColorMode.md), `any`\>

The ColorMode attribute indicates which attributes are currently determining the color of the device.

The value of the ColorMode attribute cannot be written directly - it is set upon reception of any
command in section Commands to the appropriate mode for that command.

Table 39. Values of the ColorMode Attribute

###### See

MatterSpecification.v11.Cluster § 3.2.7.9

##### attributes.colorPointBIntensity

> `readonly` **colorPointBIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointBx

> `readonly` **colorPointBx**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointBy

> `readonly` **colorPointBy**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointGIntensity

> `readonly` **colorPointGIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointGx

> `readonly` **colorPointGx**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointGy

> `readonly` **colorPointGy**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointRIntensity

> `readonly` **colorPointRIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The ColorPointRIntensity attribute contains a representation of the relative intensity of the red color
point as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast
Configuration Cluster), normalized such that the color point with the highest relative intensity
contains the value 0xfe.

A value of null shall indicate an invalid value.

###### See

MatterSpecification.v11.Cluster § 3.2.10.5

##### attributes.colorPointRx

> `readonly` **colorPointRx**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The ColorPointRX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of x shall be related to the ColorPointRX attribute by the relationship x = ColorPointRX /
65536 (ColorPointRX in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.3

##### attributes.colorPointRy

> `readonly` **colorPointRy**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The ColorPointRY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of y shall be related to the ColorPointRY attribute by the relationship y = ColorPointRY /
65536 (ColorPointRY in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.4

##### attributes.compensationText

> `readonly` **compensationText**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`string`, `any`\>

The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to

compensate for color/intensity drift over time.

###### See

MatterSpecification.v11.Cluster § 3.2.7.7

##### attributes.driftCompensation

> `readonly` **driftCompensation**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`DriftCompensation`](enumerations/DriftCompensation.md), `any`\>

The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for
color/intensity drift over time. It shall be one of the non-reserved values in Values of the
DriftCompensation Attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.7.6

##### attributes.enhancedColorMode

> `readonly` **enhancedColorMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`EnhancedColorMode`](enumerations/EnhancedColorMode.md), `any`\>

The EnhancedColorMode attribute specifies which attributes are currently determining the color of the
device, as detailed in Values of the EnhancedColorMode Attribute.

To provide compatibility with standard ZCL, the original ColorMode attribute shall indicate ‘CurrentHue
and CurrentSaturation’ when the light uses the EnhancedCurrentHue attribute. If the ColorMode attribute
is changed, e.g., due to one of the standard Color Control cluster commands defined in the ZCL, its new
value shall be copied to the EnhancedColorMode attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.7.12

##### attributes.numberOfPrimaries

> `readonly` **numberOfPrimaries**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. A
value of null shall indicate that the number of primaries is unknown.

Where this attribute is implemented, the attributes below for indicating the “x” and “y” color values of
the primaries shall also be implemented for each of the primaries from 1 to NumberOfPrimaries, without
leaving gaps. Implementation of the Primary1Intensity attribute and subsequent intensity attributes is
optional.

###### See

MatterSpecification.v11.Cluster § 3.2.8.1

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

###### See

MatterSpecification.v11.Cluster § 3.2.7.10

##### attributes.primary1Intensity

> `readonly` **primary1Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

The Primary1intensity attribute contains a representation of the maximum intensity of this primary as
defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast Configuration
Cluster), normalized such that the primary with the highest maximum intensity contains the value 0xfe.

A value of null shall indicate that this primary is not available.

###### See

MatterSpecification.v11.Cluster § 3.2.8.4

##### attributes.primary1X

> `readonly` **primary1X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

The Primary1X attribute contains the normalized chromaticity value x for this primary, as defined in the
CIE xyY Color Space.

The value of x shall be related to the Primary1X attribute by the relationship x = Primary1X / 65536
(Primary1X in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.8.2

##### attributes.primary1Y

> `readonly` **primary1Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

The Primary1Y attribute contains the normalized chromaticity value y for this primary, as defined in the
CIE xyY Color Space.

The value of y shall be related to the Primary1Y attribute by the relationship y = Primary1Y / 65536
(Primary1Y in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.8.3

##### attributes.primary2Intensity

> `readonly` **primary2Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary2X

> `readonly` **primary2X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary2Y

> `readonly` **primary2Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary3Intensity

> `readonly` **primary3Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary3X

> `readonly` **primary3X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary3Y

> `readonly` **primary3Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary4Intensity

> `readonly` **primary4Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary4X

> `readonly` **primary4X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary4Y

> `readonly` **primary4Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary5Intensity

> `readonly` **primary5Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary5X

> `readonly` **primary5X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary5Y

> `readonly` **primary5Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary6Intensity

> `readonly` **primary6Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary6X

> `readonly` **primary6X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary6Y

> `readonly` **primary6Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.remainingTime

> `readonly` **remainingTime**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently active
command will be complete.

###### See

MatterSpecification.v11.Cluster § 3.2.7.3

##### attributes.whitePointX

> `readonly` **whitePointX**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The WhitePointX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of x shall be related to the WhitePointX attribute by the relationship x = WhitePointX / 65536
(WhitePointX in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.1

##### attributes.whitePointY

> `readonly` **whitePointY**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The WhitePointY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of y shall be related to the WhitePointY attribute by the relationship y = WhitePointY / 65536
(WhitePointY in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.2

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which ColorControlCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.colorLoop

> `readonly` **colorLoop**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ColorLoop

Color loop is supported.

##### features.colorTemperature

> `readonly` **colorTemperature**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ColorTemperature

Supports specification of color temperature.

##### features.enhancedHue

> `readonly` **enhancedHue**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

EnhancedHue

Enhanced hue is supported.

##### features.hueSaturation

> `readonly` **hueSaturation**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

HueSaturation

Supports color specification via hue/saturation.

##### features.xy

> `readonly` **xy**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Xy

Supports color specification via XY.

##### id

> `readonly` **id**: `768` = `0x300`

##### name

> `readonly` **name**: `"ColorControl"` = `"ColorControl"`

##### revision

> `readonly` **revision**: `5` = `5`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1717](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1717)

***

### ColorCapabilities

> `const` **ColorCapabilities**: `object`

The value of the ColorControl colorCapabilities attribute

#### See

MatterSpecification.v11.Cluster § 3.2.7.18

#### Type declaration

##### colorLoop

> **colorLoop**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### colorTemperature

> **colorTemperature**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### enhancedHue

> **enhancedHue**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### hueSaturation

> **hueSaturation**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### xy

> **xy**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:881](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L881)

***

### ColorLoopComponent

> `const` **ColorLoopComponent**: `object`

A ColorControlCluster supports these elements if it supports feature ColorLoop.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.colorLoopActive

> `readonly` **colorLoopActive**: [`Attribute`](../../interfaces/Attribute.md)\<[`ColorLoopActive`](enumerations/ColorLoopActive.md), `any`\>

The ColorLoopActive attribute specifies the current active status of the color loop. If this attribute

has the value 0, the color loop shall not be active. If this attribute has the value 1, the color loop
shall be active. All other values (2 to 254) are reserved.

###### See

MatterSpecification.v11.Cluster § 3.2.7.13

##### attributes.colorLoopDirection

> `readonly` **colorLoopDirection**: [`Attribute`](../../interfaces/Attribute.md)\<[`ColorLoopDirection`](enumerations/ColorLoopDirection.md), `any`\>

The ColorLoopDirection attribute specifies the current direction of the color loop. If this attribute
has the value 0, the EnhancedCurrentHue attribute shall be decremented. If this attribute has the value
1, the EnhancedCurrentHue attribute shall be incremented. All other values (2 to 254) are reserved.

###### See

MatterSpecification.v11.Cluster § 3.2.7.14

##### attributes.colorLoopStartEnhancedHue

> `readonly` **colorLoopStartEnhancedHue**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The ColorLoopStartEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute from
which the color loop shall be started.

###### See

MatterSpecification.v11.Cluster § 3.2.7.16

##### attributes.colorLoopStoredEnhancedHue

> `readonly` **colorLoopStoredEnhancedHue**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The ColorLoopStoredEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute before
the color loop was started. Once the color loop is complete, the EnhancedCurrentHue attribute shall be
restored to this value.

###### See

MatterSpecification.v11.Cluster § 3.2.7.17

##### attributes.colorLoopTime

> `readonly` **colorLoopTime**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The ColorLoopTime attribute specifies the number of seconds it shall take to perform a full color loop,
i.e., to cycle all values of the EnhancedCurrentHue attribute (between 0 and 0xfffe).

###### See

MatterSpecification.v11.Cluster § 3.2.7.15

##### commands

> `readonly` **commands**: `object`

##### commands.colorLoopSet

> `readonly` **colorLoopSet**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The Color Loop Set command allows a color loop to be activated such that the color lamp cycles through
its range of hues.

###### See

MatterSpecification.v11.Cluster § 3.2.11.19

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1183)

***

### ColorTemperatureComponent

> `const` **ColorTemperatureComponent**: `object`

A ColorControlCluster supports these elements if it supports feature ColorTemperature.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.colorTempPhysicalMaxMireds

> `readonly` **colorTempPhysicalMaxMireds**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The ColorTempPhysicalMaxMireds attribute indicates the maximum mired value supported by the hardware.
ColorTempPhysicalMaxMireds corresponds to the minimum color temperature in kelvins supported by the
hardware. ColorTemperatureMireds ≤ ColorTempPhysicalMaxMireds.

###### See

MatterSpecification.v11.Cluster § 3.2.7.20

##### attributes.colorTempPhysicalMinMireds

> `readonly` **colorTempPhysicalMinMireds**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The ColorTempPhysicalMinMireds attribute indicates the minimum mired value supported by the hardware.
ColorTempPhysicalMinMireds corresponds to the maximum color temperature in kelvins supported by the
hardware. ColorTempPhysicalMinMireds ≤ ColorTemperatureMireds.

###### See

MatterSpecification.v11.Cluster § 3.2.7.19

##### attributes.colorTemperatureMireds

> `readonly` **colorTemperatureMireds**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The ColorTemperatureMireds attribute contains a scaled inverse of the current value of the color
temperature. The unit of ColorTemperatureMireds is the mired (micro reciprocal degree), AKA mirek (micro
reciprocal kelvin). It is updated as fast as practical during commands that change the color.

The color temperature value in kelvins shall be related to the ColorTemperatureMireds attribute in
mireds by the relationship

Color temperature in kelvins = 1,000,000 / ColorTemperatureMireds, where ColorTemperatureMireds is in
the range 1 to 65279 mireds inclusive, giving a color temperature range from 1,000,000 kelvins to 15.32
kelvins.

If this attribute is implemented then the ColorMode attribute shall also be implemented.

###### See

MatterSpecification.v11.Cluster § 3.2.7.8

##### attributes.coupleColorTempToLevelMinMireds

> `readonly` **coupleColorTempToLevelMinMireds**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

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

###### See

MatterSpecification.v11.Cluster § 3.2.7.21

##### attributes.startUpColorTemperatureMireds

> `readonly` **startUpColorTemperatureMireds**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The StartUpColorTemperatureMireds attribute shall define the desired startup color temperature value a
lamp shall use when it is supplied with power and this value shall be reflected in the
ColorTemperatureMireds attribute. In addition, the ColorMode and EnhancedColorMode attributes shall be
set to 0x02 (color temperature). The values of the StartUpColorTemperatureMireds attribute are listed in
the table below,

Table 42. Values of the StartUpColorTemperatureMireds attribute

###### See

MatterSpecification.v11.Cluster § 3.2.7.22

##### commands

> `readonly` **commands**: `object`

##### commands.moveColorTemperature

> `readonly` **moveColorTemperature**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified rate.

###### See

MatterSpecification.v11.Cluster § 3.2.11.21

##### commands.moveToColorTemperature

> `readonly` **moveToColorTemperature**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.14

##### commands.stepColorTemperature

> `readonly` **stepColorTemperature**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The StepColorTemperature command allows the color temperature of a lamp to be stepped with a specified
step size.

###### See

MatterSpecification.v11.Cluster § 3.2.11.22

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1021](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1021)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1870](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1870)

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

##### attributes.colorCapabilities

> `readonly` **colorCapabilities**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of the
FeatureMap attribute. All other bits in ColorCapabilities shall be 0.

###### See

MatterSpecification.v11.Cluster § 3.2.7.18

##### attributes.colorLoopActive

> `readonly` **colorLoopActive**: [`Attribute`](../../interfaces/Attribute.md)\<[`ColorLoopActive`](enumerations/ColorLoopActive.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.colorLoopDirection

> `readonly` **colorLoopDirection**: [`Attribute`](../../interfaces/Attribute.md)\<[`ColorLoopDirection`](enumerations/ColorLoopDirection.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.colorLoopStartEnhancedHue

> `readonly` **colorLoopStartEnhancedHue**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.colorLoopStoredEnhancedHue

> `readonly` **colorLoopStoredEnhancedHue**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.colorLoopTime

> `readonly` **colorLoopTime**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.colorMode

> `readonly` **colorMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`ColorMode`](enumerations/ColorMode.md), `any`\>

The ColorMode attribute indicates which attributes are currently determining the color of the device.

The value of the ColorMode attribute cannot be written directly - it is set upon reception of any
command in section Commands to the appropriate mode for that command.

Table 39. Values of the ColorMode Attribute

###### See

MatterSpecification.v11.Cluster § 3.2.7.9

##### attributes.colorPointBIntensity

> `readonly` **colorPointBIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointBx

> `readonly` **colorPointBx**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointBy

> `readonly` **colorPointBy**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointGIntensity

> `readonly` **colorPointGIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointGx

> `readonly` **colorPointGx**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointGy

> `readonly` **colorPointGy**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointRIntensity

> `readonly` **colorPointRIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The ColorPointRIntensity attribute contains a representation of the relative intensity of the red color
point as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast
Configuration Cluster), normalized such that the color point with the highest relative intensity
contains the value 0xfe.

A value of null shall indicate an invalid value.

###### See

MatterSpecification.v11.Cluster § 3.2.10.5

##### attributes.colorPointRx

> `readonly` **colorPointRx**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The ColorPointRX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of x shall be related to the ColorPointRX attribute by the relationship x = ColorPointRX /
65536 (ColorPointRX in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.3

##### attributes.colorPointRy

> `readonly` **colorPointRy**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The ColorPointRY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of y shall be related to the ColorPointRY attribute by the relationship y = ColorPointRY /
65536 (ColorPointRY in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.4

##### attributes.colorTempPhysicalMaxMireds

> `readonly` **colorTempPhysicalMaxMireds**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.colorTempPhysicalMinMireds

> `readonly` **colorTempPhysicalMinMireds**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.colorTemperatureMireds

> `readonly` **colorTemperatureMireds**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.compensationText

> `readonly` **compensationText**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`string`, `any`\>

The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to

compensate for color/intensity drift over time.

###### See

MatterSpecification.v11.Cluster § 3.2.7.7

##### attributes.coupleColorTempToLevelMinMireds

> `readonly` **coupleColorTempToLevelMinMireds**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.currentHue

> `readonly` **currentHue**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.currentSaturation

> `readonly` **currentSaturation**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.currentX

> `readonly` **currentX**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.currentY

> `readonly` **currentY**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.driftCompensation

> `readonly` **driftCompensation**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`DriftCompensation`](enumerations/DriftCompensation.md), `any`\>

The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for
color/intensity drift over time. It shall be one of the non-reserved values in Values of the
DriftCompensation Attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.7.6

##### attributes.enhancedColorMode

> `readonly` **enhancedColorMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`EnhancedColorMode`](enumerations/EnhancedColorMode.md), `any`\>

The EnhancedColorMode attribute specifies which attributes are currently determining the color of the
device, as detailed in Values of the EnhancedColorMode Attribute.

To provide compatibility with standard ZCL, the original ColorMode attribute shall indicate ‘CurrentHue
and CurrentSaturation’ when the light uses the EnhancedCurrentHue attribute. If the ColorMode attribute
is changed, e.g., due to one of the standard Color Control cluster commands defined in the ZCL, its new
value shall be copied to the EnhancedColorMode attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.7.12

##### attributes.enhancedCurrentHue

> `readonly` **enhancedCurrentHue**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.numberOfPrimaries

> `readonly` **numberOfPrimaries**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. A
value of null shall indicate that the number of primaries is unknown.

Where this attribute is implemented, the attributes below for indicating the “x” and “y” color values of
the primaries shall also be implemented for each of the primaries from 1 to NumberOfPrimaries, without
leaving gaps. Implementation of the Primary1Intensity attribute and subsequent intensity attributes is
optional.

###### See

MatterSpecification.v11.Cluster § 3.2.8.1

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

###### See

MatterSpecification.v11.Cluster § 3.2.7.10

##### attributes.primary1Intensity

> `readonly` **primary1Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

The Primary1intensity attribute contains a representation of the maximum intensity of this primary as
defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast Configuration
Cluster), normalized such that the primary with the highest maximum intensity contains the value 0xfe.

A value of null shall indicate that this primary is not available.

###### See

MatterSpecification.v11.Cluster § 3.2.8.4

##### attributes.primary1X

> `readonly` **primary1X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

The Primary1X attribute contains the normalized chromaticity value x for this primary, as defined in the
CIE xyY Color Space.

The value of x shall be related to the Primary1X attribute by the relationship x = Primary1X / 65536
(Primary1X in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.8.2

##### attributes.primary1Y

> `readonly` **primary1Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

The Primary1Y attribute contains the normalized chromaticity value y for this primary, as defined in the
CIE xyY Color Space.

The value of y shall be related to the Primary1Y attribute by the relationship y = Primary1Y / 65536
(Primary1Y in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.8.3

##### attributes.primary2Intensity

> `readonly` **primary2Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary2X

> `readonly` **primary2X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary2Y

> `readonly` **primary2Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary3Intensity

> `readonly` **primary3Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary3X

> `readonly` **primary3X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary3Y

> `readonly` **primary3Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary4Intensity

> `readonly` **primary4Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary4X

> `readonly` **primary4X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary4Y

> `readonly` **primary4Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary5Intensity

> `readonly` **primary5Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary5X

> `readonly` **primary5X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary5Y

> `readonly` **primary5Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary6Intensity

> `readonly` **primary6Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary6X

> `readonly` **primary6X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary6Y

> `readonly` **primary6Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.remainingTime

> `readonly` **remainingTime**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently active
command will be complete.

###### See

MatterSpecification.v11.Cluster § 3.2.7.3

##### attributes.startUpColorTemperatureMireds

> `readonly` **startUpColorTemperatureMireds**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.whitePointX

> `readonly` **whitePointX**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The WhitePointX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of x shall be related to the WhitePointX attribute by the relationship x = WhitePointX / 65536
(WhitePointX in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.1

##### attributes.whitePointY

> `readonly` **whitePointY**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The WhitePointY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of y shall be related to the WhitePointY attribute by the relationship y = WhitePointY / 65536
(WhitePointY in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.2

##### commands

> `readonly` **commands**: `object`

##### commands.colorLoopSet

> `readonly` **colorLoopSet**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.enhancedMoveHue

> `readonly` **enhancedMoveHue**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.enhancedMoveToHue

> `readonly` **enhancedMoveToHue**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.enhancedMoveToHueAndSaturation

> `readonly` **enhancedMoveToHueAndSaturation**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.enhancedStepHue

> `readonly` **enhancedStepHue**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.moveColor

> `readonly` **moveColor**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.moveColorTemperature

> `readonly` **moveColorTemperature**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.moveHue

> `readonly` **moveHue**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.moveSaturation

> `readonly` **moveSaturation**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.moveToColor

> `readonly` **moveToColor**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.moveToColorTemperature

> `readonly` **moveToColorTemperature**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.moveToHue

> `readonly` **moveToHue**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.moveToHueAndSaturation

> `readonly` **moveToHueAndSaturation**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.moveToSaturation

> `readonly` **moveToSaturation**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.stepColor

> `readonly` **stepColor**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.stepColorTemperature

> `readonly` **stepColorTemperature**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.stepHue

> `readonly` **stepHue**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.stepSaturation

> `readonly` **stepSaturation**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.stopMoveStep

> `readonly` **stopMoveStep**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`, `object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.colorLoop

> `readonly` **colorLoop**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ColorLoop

Color loop is supported.

##### features.colorTemperature

> `readonly` **colorTemperature**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ColorTemperature

Supports specification of color temperature.

##### features.enhancedHue

> `readonly` **enhancedHue**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

EnhancedHue

Enhanced hue is supported.

##### features.hueSaturation

> `readonly` **hueSaturation**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

HueSaturation

Supports color specification via hue/saturation.

##### features.xy

> `readonly` **xy**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Xy

Supports color specification via XY.

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`768`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"ColorControl"` = `Cluster.name`

##### revision

> `readonly` **revision**: `5` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1741](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1741)

***

### EnhancedHueComponent

> `const` **EnhancedHueComponent**: `object`

A ColorControlCluster supports these elements if it supports feature EnhancedHue.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.enhancedCurrentHue

> `readonly` **enhancedCurrentHue**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The EnhancedCurrentHue attribute represents non-equidistant steps along the CIE 1931 color triangle, and
it provides 16-bits precision.

The upper 8 bits of this attribute shall be used as an index in the implementation specific XY lookup
table to provide the non-equidistance steps. The lower 8 bits shall be used to interpolate between these
steps in a linear way in order to provide color zoom for the user.

To provide compatibility with standard ZCL, the CurrentHue attribute shall contain a hue value in the
range 0 to 254, calculated from the EnhancedCurrentHue attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.7.11

##### commands

> `readonly` **commands**: `object`

##### commands.enhancedMoveHue

> `readonly` **enhancedMoveHue**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their
current hue to a target hue.

###### See

MatterSpecification.v11.Cluster § 3.2.11.16

##### commands.enhancedMoveToHue

> `readonly` **enhancedMoveToHue**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their
current hue to a target hue.

###### See

MatterSpecification.v11.Cluster § 3.2.11.15

##### commands.enhancedMoveToHueAndSaturation

> `readonly` **enhancedMoveToHueAndSaturation**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous transition
from their current hue to a target hue and from their current saturation to a target saturation.

###### See

MatterSpecification.v11.Cluster § 3.2.11.18

##### commands.enhancedStepHue

> `readonly` **enhancedStepHue**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue to a
target hue, resulting in a linear transition through XY space.

###### See

MatterSpecification.v11.Cluster § 3.2.11.17

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1122)

***

### HueSaturationComponent

> `const` **HueSaturationComponent**: `object`

A ColorControlCluster supports these elements if it supports feature HueSaturation.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentHue

> `readonly` **currentHue**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The CurrentHue attribute contains the current hue value of the light. It is updated as fast as practical
during commands that change the hue.

The hue in degrees shall be related to the CurrentHue attribute by the relationship: Hue = CurrentHue x
360 / 254 (CurrentHue in the range 0 to 254 inclusive)

If this attribute is implemented then the CurrentSaturation and ColorMode attributes shall also be
implemented.

###### See

MatterSpecification.v11.Cluster § 3.2.7.1

##### attributes.currentSaturation

> `readonly` **currentSaturation**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The CurrentSaturation attribute holds the current saturation value of the light. It is updated as fast
as practical during commands that change the saturation.

The saturation shall be related to the CurrentSaturation attribute by the relationship: Saturation =
CurrentSaturation/254 (CurrentSaturation in the range 0 to 254 inclusive)

If this attribute is implemented then the CurrentHue and ColorMode attributes shall also be implemented.

###### See

MatterSpecification.v11.Cluster § 3.2.7.2

##### commands

> `readonly` **commands**: `object`

##### commands.moveHue

> `readonly` **moveHue**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.5

##### commands.moveSaturation

> `readonly` **moveSaturation**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.8

##### commands.moveToHue

> `readonly` **moveToHue**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.4

##### commands.moveToHueAndSaturation

> `readonly` **moveToHueAndSaturation**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.10

##### commands.moveToSaturation

> `readonly` **moveToSaturation**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.7

##### commands.stepHue

> `readonly` **stepHue**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.6

##### commands.stepSaturation

> `readonly` **stepSaturation**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.9

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:892](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L892)

***

### HueSaturationOrXyOrColorTemperatureComponent

> `const` **HueSaturationOrXyOrColorTemperatureComponent**: `object`

A ColorControlCluster supports these elements if it supports features HueSaturation, Xy or ColorTemperature.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.stopMoveStep

> `readonly` **stopMoveStep**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this
automatically provides symmetry to the Level Control cluster.)

Note: the StopMoveStep command has no effect on an active color loop.

###### See

MatterSpecification.v11.Cluster § 3.2.11.20

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1252](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1252)

***

### Options

> `const` **Options**: `object`

The value of the ColorControl options attribute

#### See

MatterSpecification.v11.Cluster § 3.2.7.10

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L46)

***

### TlvColorLoopSetRequest

> `const` **TlvColorLoopSetRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl colorLoopSet command

#### See

MatterSpecification.v11.Cluster § 3.2.11.19

#### Type declaration

##### action

> **action**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Action`](enumerations/Action.md)\>

The Action field specifies the action to take for the color loop if the UpdateAction sub-field of the
UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed in Values of
the Action Field of the ColorLoopSet Command.

###### See

MatterSpecification.v11.Cluster § 3.2.11.19.2

##### direction

> **direction**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ColorLoopSetDirection`](enumerations/ColorLoopSetDirection.md)\>

The Direction field specifies the direction for the color loop if the Update Direction field of the
UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed in Values of
the Direction Field of the ColorLoopSet Command.

###### See

MatterSpecification.v11.Cluster § 3.2.11.19.3

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### startHue

> **startHue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### time

> **time**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The Time field specifies the number of seconds over which to perform a full color loop if the UpdateTime
sub-field of the UpdateFlags field is set to 1.

###### See

MatterSpecification.v11.Cluster § 3.2.11.19.4

##### updateFlags

> **updateFlags**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

The UpdateFlags field specifies which color loop attributes to update before the color loop is started. This
field shall be formatted as illustrated in Format of the UpdateFlags Field of the ColorLoopSet Command.

The UpdateAction sub-field is 1 bit in length and specifies whether the device shall adhere to the action
field in order to process the command. If this sub-field is set to 1, the device shall adhere to the action
field. If this sub-field is set to 0, the device shall ignore the Action field.

The UpdateDirection sub-field is 1 bit in length and specifies whether the device shall update the
ColorLoopDirection attribute with the Direction field. If this sub-field is set to 1, the device shall
update the value of the ColorLoopDirection attribute with the value of the Direction field. If this
sub-field is set to 0, the device shall ignore the Direction field.

The UpdateTime sub-field is 1 bit in length and specifies whether the device shall update the ColorLoopTime
attribute with the Time field. If this sub-field is set to 1, the device shall update the value of the
ColorLoopTime attribute with the value of the Time field. If this sub-field is set to 0, the device shall
ignore the Time field.

The UpdateStartHue sub-field is 1 bit in length and specifies whether the device shall update the
ColorLoopStartEnhancedHue attribute with the StartHue field. If this sub-field is set to 1, the device shall
update the value of the ColorLoopStartEnhancedHue attribute with the value of the StartHue field. If this
sub-field is set to 0, the device shall ignore the StartHue field.

###### See

MatterSpecification.v11.Cluster § 3.2.11.19.1

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:757](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L757)

***

### TlvEnhancedMoveHueRequest

> `const` **TlvEnhancedMoveHueRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl enhancedMoveHue command

#### See

MatterSpecification.v11.Cluster § 3.2.11.16

#### Type declaration

##### moveMode

> **moveMode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`MoveMode`](enumerations/MoveMode.md)\>

This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster (see
sub-clause MoveHue Command). If the MoveMode field is equal to 0 (Stop), the Rate field shall be ignored.

###### See

MatterSpecification.v11.Cluster § 3.2.11.16.1

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### rate

> **rate**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The Rate field specifies the rate of movement in steps per second. A step is a change in the extended hue of
a device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of
zero, the command has no effect and a response command shall be sent in response, with the status code set
to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.

###### See

MatterSpecification.v11.Cluster § 3.2.11.16.2

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:584](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L584)

***

### TlvEnhancedMoveToHueAndSaturationRequest

> `const` **TlvEnhancedMoveToHueAndSaturationRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl enhancedMoveToHueAndSaturation command

#### See

MatterSpecification.v11.Cluster § 3.2.11.18

#### Type declaration

##### enhancedHue

> **enhancedHue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The EnhancedHue field specifies the target extended hue for the lamp.

###### See

MatterSpecification.v11.Cluster § 3.2.11.18.1

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### saturation

> **saturation**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field is identical to the Saturation field of the MoveToHueAndSaturation command of the Color Control
cluster (see sub-clause MoveToHueAndSaturation Command).

###### See

MatterSpecification.v11.Cluster § 3.2.11.18.2

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field is identical to the TransitionTime field of the MoveToHue command of the Color Control cluster
(see sub-clause MoveToHueAndSaturation Command).

###### See

MatterSpecification.v11.Cluster § 3.2.11.18.3

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:663](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L663)

***

### TlvEnhancedMoveToHueRequest

> `const` **TlvEnhancedMoveToHueRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl enhancedMoveToHue command

#### See

MatterSpecification.v11.Cluster § 3.2.11.15

#### Type declaration

##### direction

> **direction**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ColorControlDirection`](enumerations/ColorControlDirection.md)\>

This field is identical to the Direction field of the MoveToHue command of the Color Control cluster (see
sub-clause Use of the OptionsMask and OptionsOverride fields).

###### See

MatterSpecification.v11.Cluster § 3.2.11.15.2

##### enhancedHue

> **enhancedHue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The EnhancedHue field specifies the target extended hue for the lamp.

###### See

MatterSpecification.v11.Cluster § 3.2.11.15.1

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field is identical to the TransitionTime field of the MoveToHue command of the Color Control cluster
(see sub-clause Use of the OptionsMask and OptionsOverride fields).

###### See

MatterSpecification.v11.Cluster § 3.2.11.15.3

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:544](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L544)

***

### TlvEnhancedStepHueRequest

> `const` **TlvEnhancedStepHueRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl enhancedStepHue command

#### See

MatterSpecification.v11.Cluster § 3.2.11.17

#### Type declaration

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### stepMode

> **stepMode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StepMode`](enumerations/StepMode.md)\>

This field is identical to the StepMode field of the StepHue command of the Color Control cluster (see
sub-clause StepHue Command).

###### See

MatterSpecification.v11.Cluster § 3.2.11.17.1

##### stepSize

> **stepSize**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The StepSize field specifies the change to be added to (or subtracted from) the current value of the
device’s enhanced hue.

###### See

MatterSpecification.v11.Cluster § 3.2.11.17.2

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The TransitionTime field specifies, in units of 1/10ths of a second, the time that shall be taken to perform
the step. A step is a change to the device’s enhanced hue of a magnitude corresponding to the StepSize field.

Note: Here TransitionTime data field is of data type uint16, while the TransitionTime data field of the
StepHue command is of data type uint8.

###### See

MatterSpecification.v11.Cluster § 3.2.11.17.3

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:619](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L619)

***

### TlvMoveColorRequest

> `const` **TlvMoveColorRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl moveColor command

#### See

MatterSpecification.v11.Cluster § 3.2.11.12

#### Type declaration

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### rateX

> **rateX**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The RateX field specifies the rate of movement in steps per second. A step is a change in the device’s
CurrentX attribute of one unit.

###### See

MatterSpecification.v11.Cluster § 3.2.11.12.1

##### rateY

> **rateY**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The RateY field specifies the rate of movement in steps per second. A step is a change in the device’s
CurrentY attribute of one unit.

###### See

MatterSpecification.v11.Cluster § 3.2.11.12.2

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:325](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L325)

***

### TlvMoveColorTemperatureRequest

> `const` **TlvMoveColorTemperatureRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl moveColorTemperature command

#### See

MatterSpecification.v11.Cluster § 3.2.11.21

#### Type declaration

##### colorTemperatureMaximumMireds

> **colorTemperatureMaximumMireds**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The ColorTemperatureMaximumMireds field specifies an upper bound on the ColorTemperatureMireds attribute (≡
a lower bound on the color temperature in kelvins) for the current move operation

ColorTemperatureMireds ≤ ColorTemperatureMaximumMireds field ≤ ColorTempPhysicalMaxMireds

As such if the move operation takes the ColorTemperatureMireds attribute towards the value of the
ColorTemperatureMaximumMireds field it shall be clipped so that the above invariant is satisfied. If the
ColorTemperatureMaximumMireds field is set to 0, ColorTempPhysicalMaxMireds shall be used as the upper bound
for the ColorTemperatureMireds attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.11.21.4

##### colorTemperatureMinimumMireds

> **colorTemperatureMinimumMireds**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The ColorTemperatureMinimumMireds field specifies a lower bound on the ColorTemperatureMireds attribute (≡
an upper bound on the color temperature in kelvins) for the current move operation

ColorTempPhysicalMinMireds ≤ ColorTemperatureMinimumMireds field ≤ ColorTemperatureMireds

As such if the move operation takes the ColorTemperatureMireds attribute towards the value of the
ColorTemperatureMinimumMireds field it shall be clipped so that the above invariant is satisfied. If the
ColorTemperatureMinimumMireds field is set to 0, ColorTempPhysicalMinMireds shall be used as the lower bound
for the ColorTemperatureMireds attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.11.21.3

##### moveMode

> **moveMode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`MoveMode`](enumerations/MoveMode.md)\>

This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster

(see sub-clause MoveHue Command). If the MoveMode field is equal to 0 (Stop), the Rate field shall be
ignored.

###### See

MatterSpecification.v11.Cluster § 3.2.11.21.1

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### rate

> **rate**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The Rate field specifies the rate of movement in steps per second. A step is a change in the color
temperature of a device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field
has a value of zero, the command has no effect and a response command shall be sent in response, with the
status code set to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.

###### See

MatterSpecification.v11.Cluster § 3.2.11.21.2

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:405](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L405)

***

### TlvMoveHueRequest

> `const` **TlvMoveHueRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl moveHue command

#### See

MatterSpecification.v11.Cluster § 3.2.11.5

#### Type declaration

##### moveMode

> **moveMode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`MoveMode`](enumerations/MoveMode.md)\>

The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field. If the MoveMode
field is equal to 0 (Stop), the Rate field shall be ignored.

###### See

MatterSpecification.v11.Cluster § 3.2.11.5.1

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### rate

> **rate**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The Rate field specifies the rate of movement in steps per second. A step is a change in the device’s hue of
one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of zero, the
command has no effect and a response command shall be sent in response, with the status code set to
INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.

###### See

MatterSpecification.v11.Cluster § 3.2.11.5.2

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L101)

***

### TlvMoveSaturationRequest

> `const` **TlvMoveSaturationRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl moveSaturation command

#### See

MatterSpecification.v11.Cluster § 3.2.11.8

#### Type declaration

##### moveMode

> **moveMode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`MoveMode`](enumerations/MoveMode.md)\>

The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field. If the MoveMode
field is equal to 0 (Stop), the Rate field shall be ignored.

###### See

MatterSpecification.v11.Cluster § 3.2.11.8.1

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### rate

> **rate**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The Rate field specifies the rate of movement in steps per second. A step is a change in the device’s

saturation of one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of
zero, the command has no effect and a response command shall be sent in response, with the status code set
to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.

###### See

MatterSpecification.v11.Cluster § 3.2.11.8.2

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:207](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L207)

***

### TlvMoveToColorRequest

> `const` **TlvMoveToColorRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl moveToColor command

#### See

MatterSpecification.v11.Cluster § 3.2.11.11

#### Type declaration

##### colorX

> **colorX**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### colorY

> **colorY**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:305](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L305)

***

### TlvMoveToColorTemperatureRequest

> `const` **TlvMoveToColorTemperatureRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl moveToColorTemperature command

#### See

MatterSpecification.v11.Cluster § 3.2.11.14

#### Type declaration

##### colorTemperatureMireds

> **colorTemperatureMireds**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:386](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L386)

***

### TlvMoveToHueAndSaturationRequest

> `const` **TlvMoveToHueAndSaturationRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl moveToHueAndSaturation command

#### See

MatterSpecification.v11.Cluster § 3.2.11.10

#### Type declaration

##### hue

> **hue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### saturation

> **saturation**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:285](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L285)

***

### TlvMoveToHueRequest

> `const` **TlvMoveToHueRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl moveToHue command

#### See

MatterSpecification.v11.Cluster § 3.2.11.4

#### Type declaration

##### direction

> **direction**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ColorControlDirection`](enumerations/ColorControlDirection.md)\>

The Direction field shall be one of the non-reserved values in Values of the Direction Field.

###### See

MatterSpecification.v11.Cluster § 3.2.11.4.2

##### hue

> **hue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The Hue field specifies the hue to be moved to.

###### See

MatterSpecification.v11.Cluster § 3.2.11.4.1

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to move to the new
hue.

###### See

MatterSpecification.v11.Cluster § 3.2.11.4.3

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L53)

***

### TlvMoveToSaturationRequest

> `const` **TlvMoveToSaturationRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl moveToSaturation command

#### See

MatterSpecification.v11.Cluster § 3.2.11.7

#### Type declaration

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### saturation

> **saturation**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:188](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L188)

***

### TlvStepColorRequest

> `const` **TlvStepColorRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl stepColor command

#### See

MatterSpecification.v11.Cluster § 3.2.11.13

#### Type declaration

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### stepX

> **stepX**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### stepY

> **stepY**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform the
color change.

###### See

MatterSpecification.v11.Cluster § 3.2.11.13.2

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:358](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L358)

***

### TlvStepColorTemperatureRequest

> `const` **TlvStepColorTemperatureRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl stepColorTemperature command

#### See

MatterSpecification.v11.Cluster § 3.2.11.22

#### Type declaration

##### colorTemperatureMaximumMireds

> **colorTemperatureMaximumMireds**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The ColorTemperatureMaximumMireds field specifies an upper bound on the ColorTemperatureMireds attribute (≡
a lower bound on the color temperature in kelvins) for the current step operation

ColorTemperatureMireds ≤ ColorTemperatureMaximumMireds field ≤ ColorTempPhysicalMaxMireds

As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the
ColorTemperatureMaximumMireds field it shall be clipped so that the above invariant is satisfied. If the
ColorTemperatureMaximum Mireds field is set to 0, ColorTempPhysicalMaxMireds shall be used as the upper
bound for the ColorTemperatureMireds attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.11.22.5

##### colorTemperatureMinimumMireds

> **colorTemperatureMinimumMireds**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The ColorTemperatureMinimumMireds field specifies a lower bound on the ColorTemperatureMireds attribute (≡
an upper bound on the color temperature in kelvins) for the current step operation

ColorTempPhysicalMinMireds ≤ ColorTemperatureMinimumMireds field ≤ ColorTemperatureMireds

As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the Color
Temperature Minimum Mireds field it shall be clipped so that the above invariant is satisfied. If the
ColorTemperatureMinimumMireds field is set to 0, ColorTempPhysicalMinMireds shall be used as the lower bound
for the ColorTemperatureMireds attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.11.22.4

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### stepMode

> **stepMode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StepMode`](enumerations/StepMode.md)\>

This field is identical to the StepMode field of the StepHue command of the Color Control cluster (see
sub-clause StepHue Command).

###### See

MatterSpecification.v11.Cluster § 3.2.11.22.1

##### stepSize

> **stepSize**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The StepSize field specifies the change to be added to (or subtracted from) the current value of the
device’s color temperature.

###### See

MatterSpecification.v11.Cluster § 3.2.11.22.2

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The TransitionTime field specifies, in units of 1/10ths of a second, the time that shall be taken to perform
the step. A step is a change to the device’s color temperature of a magnitude corresponding to the StepSize
field.

###### See

MatterSpecification.v11.Cluster § 3.2.11.22.3

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:472](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L472)

***

### TlvStepHueRequest

> `const` **TlvStepHueRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl stepHue command

#### See

MatterSpecification.v11.Cluster § 3.2.11.6

#### Type declaration

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### stepMode

> **stepMode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StepMode`](enumerations/StepMode.md)\>

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

Table 50. Values of the StepMode Field

###### See

MatterSpecification.v11.Cluster § 3.2.11.6.1

##### stepSize

> **stepSize**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The change to be added to (or subtracted from) the current value of the device’s hue.

###### See

MatterSpecification.v11.Cluster § 3.2.11.6.2

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform the
step. A step is a change in the device’s hue of ‘Step size’ units.

Note: Here the TransitionTime data field is of data type uint8, where uint16 is more common for
TransitionTime data fields in other clusters / commands.

###### See

MatterSpecification.v11.Cluster § 3.2.11.6.3

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L144)

***

### TlvStepSaturationRequest

> `const` **TlvStepSaturationRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl stepSaturation command

#### See

MatterSpecification.v11.Cluster § 3.2.11.9

#### Type declaration

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### stepMode

> **stepMode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StepMode`](enumerations/StepMode.md)\>

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

###### See

MatterSpecification.v11.Cluster § 3.2.11.9.1

##### stepSize

> **stepSize**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The change to be added to (or subtracted from) the current value of the device’s saturation.

###### See

MatterSpecification.v11.Cluster § 3.2.11.9.2

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform the
step. A step is a change in the device’s saturation of ‘Step size’ units.

Note: Here the TransitionTime data field is of data type uint8, where uint16 is more common for
TransitionTime data fields in other clusters / commands.

###### See

MatterSpecification.v11.Cluster § 3.2.11.9.3

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:243](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L243)

***

### TlvStopMoveStepRequest

> `const` **TlvStopMoveStepRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ColorControl stopMoveStep command

#### See

MatterSpecification.v11.Cluster § 3.2.11.20

#### Type declaration

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:828](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L828)

***

### UpdateFlags

> `const` **UpdateFlags**: `object`

The value of ColorControl.updateFlags

#### See

MatterSpecification.v11.Cluster § 3.2.11.19.1

#### Type declaration

##### reserved

> **reserved**: [`BitField`](../../../../schema/export/README.md#bitfield)

##### updateAction

> **updateAction**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### updateDirection

> **updateDirection**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### updateStartHue

> **updateStartHue**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### updateTime

> **updateTime**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:723](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L723)

***

### XyComponent

> `const` **XyComponent**: `object`

A ColorControlCluster supports these elements if it supports feature Xy.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentX

> `readonly` **currentX**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The CurrentX attribute contains the current value of the normalized chromaticity value x, as defined in
the CIE xyY Color Space. It is updated as fast as practical during commands that change the color.

The value of x shall be related to the CurrentX attribute by the relationship x = CurrentX / 65536
(CurrentX in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.7.4

##### attributes.currentY

> `readonly` **currentY**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The CurrentY attribute contains the current value of the normalized chromaticity value y, as defined in
the CIE xyY Color Space. It is updated as fast as practical during commands that change the color.

The value of y shall be related to the CurrentY attribute by the relationship y = CurrentY / 65536
(CurrentY in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.7.5

##### commands

> `readonly` **commands**: `object`

##### commands.moveColor

> `readonly` **moveColor**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.12

##### commands.moveToColor

> `readonly` **moveToColor**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.11

##### commands.stepColor

> `readonly` **stepColor**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.13

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:967](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L967)
