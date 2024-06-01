[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ColorControl

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

> `readonly` **colorCapabilities**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

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

> `readonly` **colorPointBIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **colorPointGIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **colorPointRIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **numberOfPrimaries**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number` \| `null`, `any`\>

The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. A
value of null shall indicate that the number of primaries is unknown.

Where this attribute is implemented, the attributes below for indicating the “x” and “y” color values of
the primaries shall also be implemented for each of the primaries from 1 to NumberOfPrimaries, without
leaving gaps. Implementation of the Primary1Intensity attribute and subsequent intensity attributes is
optional.

###### See

MatterSpecification.v11.Cluster § 3.2.8.1

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

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

> `readonly` **primary1Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **primary2Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **primary3Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **primary4Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **primary5Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **primary6Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **colorLoop**: [`BitFlag`](../../../schema/README.md#bitflag)

ColorLoop

Color loop is supported.

##### features.colorTemperature

> `readonly` **colorTemperature**: [`BitFlag`](../../../schema/README.md#bitflag)

ColorTemperature

Supports specification of color temperature.

##### features.enhancedHue

> `readonly` **enhancedHue**: [`BitFlag`](../../../schema/README.md#bitflag)

EnhancedHue

Enhanced hue is supported.

##### features.hueSaturation

> `readonly` **hueSaturation**: [`BitFlag`](../../../schema/README.md#bitflag)

HueSaturation

Supports color specification via hue/saturation.

##### features.xy

> `readonly` **xy**: [`BitFlag`](../../../schema/README.md#bitflag)

Xy

Supports color specification via XY.

##### id

> `readonly` **id**: `768`

##### name

> `readonly` **name**: `"ColorControl"`

##### revision

> `readonly` **revision**: `5`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1732

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:4085

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.colorCapabilities

> `readonly` **colorCapabilities**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

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

> `readonly` **colorPointBIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **colorPointGIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **colorPointRIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **numberOfPrimaries**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number` \| `null`, `any`\>

The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. A
value of null shall indicate that the number of primaries is unknown.

Where this attribute is implemented, the attributes below for indicating the “x” and “y” color values of
the primaries shall also be implemented for each of the primaries from 1 to NumberOfPrimaries, without
leaving gaps. Implementation of the Primary1Intensity attribute and subsequent intensity attributes is
optional.

###### See

MatterSpecification.v11.Cluster § 3.2.8.1

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

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

> `readonly` **primary1Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **primary2Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **primary3Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **primary4Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **primary5Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **primary6Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **colorLoop**: [`BitFlag`](../../../schema/README.md#bitflag)

ColorLoop

Color loop is supported.

##### features.colorTemperature

> `readonly` **colorTemperature**: [`BitFlag`](../../../schema/README.md#bitflag)

ColorTemperature

Supports specification of color temperature.

##### features.enhancedHue

> `readonly` **enhancedHue**: [`BitFlag`](../../../schema/README.md#bitflag)

EnhancedHue

Enhanced hue is supported.

##### features.hueSaturation

> `readonly` **hueSaturation**: [`BitFlag`](../../../schema/README.md#bitflag)

HueSaturation

Supports color specification via hue/saturation.

##### features.xy

> `readonly` **xy**: [`BitFlag`](../../../schema/README.md#bitflag)

Xy

Supports color specification via XY.

##### id

> `readonly` **id**: `768`

##### name

> `readonly` **name**: `"ColorControl"`

##### revision

> `readonly` **revision**: `5`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:2905

***

### ColorCapabilities

> `const` **ColorCapabilities**: `object`

The value of the ColorControl colorCapabilities attribute

#### See

MatterSpecification.v11.Cluster § 3.2.7.18

#### Type declaration

##### colorLoop

> **colorLoop**: [`BitFlag`](../../../schema/README.md#bitflag)

##### colorTemperature

> **colorTemperature**: [`BitFlag`](../../../schema/README.md#bitflag)

##### enhancedHue

> **enhancedHue**: [`BitFlag`](../../../schema/README.md#bitflag)

##### hueSaturation

> **hueSaturation**: [`BitFlag`](../../../schema/README.md#bitflag)

##### xy

> **xy**: [`BitFlag`](../../../schema/README.md#bitflag)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:875

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

> `readonly` **colorLoopSet**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

The Color Loop Set command allows a color loop to be activated such that the color lamp cycles through
its range of hues.

###### See

MatterSpecification.v11.Cluster § 3.2.11.19

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1554

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

> `readonly` **startUpColorTemperatureMireds**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **moveColorTemperature**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified rate.

###### See

MatterSpecification.v11.Cluster § 3.2.11.21

##### commands.moveToColorTemperature

> `readonly` **moveToColorTemperature**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.14

##### commands.stepColorTemperature

> `readonly` **stepColorTemperature**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

The StepColorTemperature command allows the color temperature of a lamp to be stepped with a specified
step size.

###### See

MatterSpecification.v11.Cluster § 3.2.11.22

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1187

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:4992

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

##### attributes.colorCapabilities

> `readonly` **colorCapabilities**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

##### attributes.colorLoopActive

> `readonly` **colorLoopActive**: [`Attribute`](../../interfaces/Attribute.md)\<[`ColorLoopActive`](enumerations/ColorLoopActive.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.colorLoopDirection

> `readonly` **colorLoopDirection**: [`Attribute`](../../interfaces/Attribute.md)\<[`ColorLoopDirection`](enumerations/ColorLoopDirection.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.colorLoopStartEnhancedHue

> `readonly` **colorLoopStartEnhancedHue**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.colorLoopStoredEnhancedHue

> `readonly` **colorLoopStoredEnhancedHue**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.colorLoopTime

> `readonly` **colorLoopTime**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.colorMode

> `readonly` **colorMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`ColorMode`](enumerations/ColorMode.md), `any`\>

##### attributes.colorPointBIntensity

> `readonly` **colorPointBIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.colorPointBx

> `readonly` **colorPointBx**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.colorPointBy

> `readonly` **colorPointBy**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.colorPointGIntensity

> `readonly` **colorPointGIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.colorPointGx

> `readonly` **colorPointGx**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.colorPointGy

> `readonly` **colorPointGy**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.colorPointRIntensity

> `readonly` **colorPointRIntensity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.colorPointRx

> `readonly` **colorPointRx**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.colorPointRy

> `readonly` **colorPointRy**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.colorTempPhysicalMaxMireds

> `readonly` **colorTempPhysicalMaxMireds**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.colorTempPhysicalMinMireds

> `readonly` **colorTempPhysicalMinMireds**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.colorTemperatureMireds

> `readonly` **colorTemperatureMireds**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.compensationText

> `readonly` **compensationText**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`string`, `any`\>

##### attributes.coupleColorTempToLevelMinMireds

> `readonly` **coupleColorTempToLevelMinMireds**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.currentHue

> `readonly` **currentHue**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.currentSaturation

> `readonly` **currentSaturation**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.currentX

> `readonly` **currentX**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.currentY

> `readonly` **currentY**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.driftCompensation

> `readonly` **driftCompensation**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`DriftCompensation`](enumerations/DriftCompensation.md), `any`\>

##### attributes.enhancedColorMode

> `readonly` **enhancedColorMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`EnhancedColorMode`](enumerations/EnhancedColorMode.md), `any`\>

##### attributes.enhancedCurrentHue

> `readonly` **enhancedCurrentHue**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)[], `never`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.numberOfPrimaries

> `readonly` **numberOfPrimaries**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

##### attributes.primary1Intensity

> `readonly` **primary1Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.primary1X

> `readonly` **primary1X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

##### attributes.primary1Y

> `readonly` **primary1Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

##### attributes.primary2Intensity

> `readonly` **primary2Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.primary2X

> `readonly` **primary2X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

##### attributes.primary2Y

> `readonly` **primary2Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

##### attributes.primary3Intensity

> `readonly` **primary3Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.primary3X

> `readonly` **primary3X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

##### attributes.primary3Y

> `readonly` **primary3Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

##### attributes.primary4Intensity

> `readonly` **primary4Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.primary4X

> `readonly` **primary4X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

##### attributes.primary4Y

> `readonly` **primary4Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

##### attributes.primary5Intensity

> `readonly` **primary5Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.primary5X

> `readonly` **primary5X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

##### attributes.primary5Y

> `readonly` **primary5Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

##### attributes.primary6Intensity

> `readonly` **primary6Intensity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.primary6X

> `readonly` **primary6X**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

##### attributes.primary6Y

> `readonly` **primary6Y**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

##### attributes.remainingTime

> `readonly` **remainingTime**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

##### attributes.startUpColorTemperatureMireds

> `readonly` **startUpColorTemperatureMireds**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.whitePointX

> `readonly` **whitePointX**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.whitePointY

> `readonly` **whitePointY**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### commands

> `readonly` **commands**: `object`

##### commands.colorLoopSet

> `readonly` **colorLoopSet**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.enhancedMoveHue

> `readonly` **enhancedMoveHue**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.enhancedMoveToHue

> `readonly` **enhancedMoveToHue**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.enhancedMoveToHueAndSaturation

> `readonly` **enhancedMoveToHueAndSaturation**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.enhancedStepHue

> `readonly` **enhancedStepHue**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.moveColor

> `readonly` **moveColor**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.moveColorTemperature

> `readonly` **moveColorTemperature**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.moveHue

> `readonly` **moveHue**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.moveSaturation

> `readonly` **moveSaturation**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.moveToColor

> `readonly` **moveToColor**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.moveToColorTemperature

> `readonly` **moveToColorTemperature**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.moveToHue

> `readonly` **moveToHue**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.moveToHueAndSaturation

> `readonly` **moveToHueAndSaturation**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.moveToSaturation

> `readonly` **moveToSaturation**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.stepColor

> `readonly` **stepColor**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.stepColorTemperature

> `readonly` **stepColorTemperature**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.stepHue

> `readonly` **stepHue**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.stepSaturation

> `readonly` **stepSaturation**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.stopMoveStep

> `readonly` **stopMoveStep**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### features

> `readonly` **features**: `object`

##### features.colorLoop

> `readonly` **colorLoop**: [`BitFlag`](../../../schema/README.md#bitflag)

ColorLoop

Color loop is supported.

##### features.colorTemperature

> `readonly` **colorTemperature**: [`BitFlag`](../../../schema/README.md#bitflag)

ColorTemperature

Supports specification of color temperature.

##### features.enhancedHue

> `readonly` **enhancedHue**: [`BitFlag`](../../../schema/README.md#bitflag)

EnhancedHue

Enhanced hue is supported.

##### features.hueSaturation

> `readonly` **hueSaturation**: [`BitFlag`](../../../schema/README.md#bitflag)

HueSaturation

Supports color specification via hue/saturation.

##### features.xy

> `readonly` **xy**: [`BitFlag`](../../../schema/README.md#bitflag)

Xy

Supports color specification via XY.

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"ColorControl"`

##### revision

> `readonly` **revision**: `5`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:4091

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

> `readonly` **enhancedMoveHue**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their
current hue to a target hue.

###### See

MatterSpecification.v11.Cluster § 3.2.11.16

##### commands.enhancedMoveToHue

> `readonly` **enhancedMoveToHue**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their
current hue to a target hue.

###### See

MatterSpecification.v11.Cluster § 3.2.11.15

##### commands.enhancedMoveToHueAndSaturation

> `readonly` **enhancedMoveToHueAndSaturation**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous transition
from their current hue to a target hue and from their current saturation to a target saturation.

###### See

MatterSpecification.v11.Cluster § 3.2.11.18

##### commands.enhancedStepHue

> `readonly` **enhancedStepHue**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue to a
target hue, resulting in a linear transition through XY space.

###### See

MatterSpecification.v11.Cluster § 3.2.11.17

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1395

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

> `readonly` **moveHue**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.5

##### commands.moveSaturation

> `readonly` **moveSaturation**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.8

##### commands.moveToHue

> `readonly` **moveToHue**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.4

##### commands.moveToHueAndSaturation

> `readonly` **moveToHueAndSaturation**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.10

##### commands.moveToSaturation

> `readonly` **moveToSaturation**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.7

##### commands.stepHue

> `readonly` **stepHue**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.6

##### commands.stepSaturation

> `readonly` **stepSaturation**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.9

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:885

***

### HueSaturationOrXyOrColorTemperatureComponent

> `const` **HueSaturationOrXyOrColorTemperatureComponent**: `object`

A ColorControlCluster supports these elements if it supports features HueSaturation, Xy or ColorTemperature.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.stopMoveStep

> `readonly` **stopMoveStep**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this
automatically provides symmetry to the Level Control cluster.)

Note: the StopMoveStep command has no effect on an active color loop.

###### See

MatterSpecification.v11.Cluster § 3.2.11.20

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1672

***

### Options

> `const` **Options**: `object`

The value of the ColorControl options attribute

#### See

MatterSpecification.v11.Cluster § 3.2.7.10

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../schema/README.md#bitflag)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:27

***

### TlvColorLoopSetRequest

> `const` **TlvColorLoopSetRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl colorLoopSet command

#### See

MatterSpecification.v11.Cluster § 3.2.11.19

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:746

***

### TlvEnhancedMoveHueRequest

> `const` **TlvEnhancedMoveHueRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl enhancedMoveHue command

#### See

MatterSpecification.v11.Cluster § 3.2.11.16

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:577

***

### TlvEnhancedMoveToHueAndSaturationRequest

> `const` **TlvEnhancedMoveToHueAndSaturationRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl enhancedMoveToHueAndSaturation command

#### See

MatterSpecification.v11.Cluster § 3.2.11.18

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:657

***

### TlvEnhancedMoveToHueRequest

> `const` **TlvEnhancedMoveToHueRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl enhancedMoveToHue command

#### See

MatterSpecification.v11.Cluster § 3.2.11.15

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:537

***

### TlvEnhancedStepHueRequest

> `const` **TlvEnhancedStepHueRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl enhancedStepHue command

#### See

MatterSpecification.v11.Cluster § 3.2.11.17

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:613

***

### TlvMoveColorRequest

> `const` **TlvMoveColorRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl moveColor command

#### See

MatterSpecification.v11.Cluster § 3.2.11.12

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:316

***

### TlvMoveColorTemperatureRequest

> `const` **TlvMoveColorTemperatureRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl moveColorTemperature command

#### See

MatterSpecification.v11.Cluster § 3.2.11.21

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:401

***

### TlvMoveHueRequest

> `const` **TlvMoveHueRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl moveHue command

#### See

MatterSpecification.v11.Cluster § 3.2.11.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:82

***

### TlvMoveSaturationRequest

> `const` **TlvMoveSaturationRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl moveSaturation command

#### See

MatterSpecification.v11.Cluster § 3.2.11.8

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:191

***

### TlvMoveToColorRequest

> `const` **TlvMoveToColorRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl moveToColor command

#### See

MatterSpecification.v11.Cluster § 3.2.11.11

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:293

***

### TlvMoveToColorTemperatureRequest

> `const` **TlvMoveToColorTemperatureRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl moveToColorTemperature command

#### See

MatterSpecification.v11.Cluster § 3.2.11.14

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:379

***

### TlvMoveToHueAndSaturationRequest

> `const` **TlvMoveToHueAndSaturationRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl moveToHueAndSaturation command

#### See

MatterSpecification.v11.Cluster § 3.2.11.10

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:270

***

### TlvMoveToHueRequest

> `const` **TlvMoveToHueRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl moveToHue command

#### See

MatterSpecification.v11.Cluster § 3.2.11.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:35

***

### TlvMoveToSaturationRequest

> `const` **TlvMoveToSaturationRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl moveToSaturation command

#### See

MatterSpecification.v11.Cluster § 3.2.11.7

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:169

***

### TlvStepColorRequest

> `const` **TlvStepColorRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl stepColor command

#### See

MatterSpecification.v11.Cluster § 3.2.11.13

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:350

***

### TlvStepColorTemperatureRequest

> `const` **TlvStepColorTemperatureRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl stepColorTemperature command

#### See

MatterSpecification.v11.Cluster § 3.2.11.22

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:467

***

### TlvStepHueRequest

> `const` **TlvStepHueRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl stepHue command

#### See

MatterSpecification.v11.Cluster § 3.2.11.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:125

***

### TlvStepSaturationRequest

> `const` **TlvStepSaturationRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl stepSaturation command

#### See

MatterSpecification.v11.Cluster § 3.2.11.9

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:228

***

### TlvStopMoveStepRequest

> `const` **TlvStopMoveStepRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ColorControl stopMoveStep command

#### See

MatterSpecification.v11.Cluster § 3.2.11.20

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:822

***

### UpdateFlags

> `const` **UpdateFlags**: `object`

The value of ColorControl.updateFlags

#### See

MatterSpecification.v11.Cluster § 3.2.11.19.1

#### Type declaration

##### reserved

> **reserved**: [`BitField`](../../../schema/README.md#bitfield)

##### updateAction

> **updateAction**: [`BitFlag`](../../../schema/README.md#bitflag)

##### updateDirection

> **updateDirection**: [`BitFlag`](../../../schema/README.md#bitflag)

##### updateStartHue

> **updateStartHue**: [`BitFlag`](../../../schema/README.md#bitflag)

##### updateTime

> **updateTime**: [`BitFlag`](../../../schema/README.md#bitflag)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:715

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

> `readonly` **moveColor**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.12

##### commands.moveToColor

> `readonly` **moveToColor**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.11

##### commands.stepColor

> `readonly` **stepColor**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.11.13

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1099
