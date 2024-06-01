[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ColorControl](../README.md) / Cluster

# Interface: Cluster

Color Control

Attributes and commands for controlling the color properties of a color-capable light.

ColorControlCluster supports optional features that you can enable with the ColorControlCluster.with() factory
method.

## See

MatterSpecification.v11.Cluster § 3.2

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### colorCapabilities

> `readonly` **colorCapabilities**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of the
FeatureMap attribute. All other bits in ColorCapabilities shall be 0.

###### See

MatterSpecification.v11.Cluster § 3.2.7.18

##### colorMode

> `readonly` **colorMode**: [`Attribute`](../../../interfaces/Attribute.md)\<[`ColorMode`](../enumerations/ColorMode.md), `any`\>

The ColorMode attribute indicates which attributes are currently determining the color of the device.

The value of the ColorMode attribute cannot be written directly - it is set upon reception of any
command in section Commands to the appropriate mode for that command.

Table 39. Values of the ColorMode Attribute

###### See

MatterSpecification.v11.Cluster § 3.2.7.9

##### colorPointBIntensity

> `readonly` **colorPointBIntensity**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### colorPointBx

> `readonly` **colorPointBx**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### colorPointBy

> `readonly` **colorPointBy**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### colorPointGIntensity

> `readonly` **colorPointGIntensity**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### colorPointGx

> `readonly` **colorPointGx**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### colorPointGy

> `readonly` **colorPointGy**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### colorPointRIntensity

> `readonly` **colorPointRIntensity**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The ColorPointRIntensity attribute contains a representation of the relative intensity of the red color
point as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast
Configuration Cluster), normalized such that the color point with the highest relative intensity
contains the value 0xfe.

A value of null shall indicate an invalid value.

###### See

MatterSpecification.v11.Cluster § 3.2.10.5

##### colorPointRx

> `readonly` **colorPointRx**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The ColorPointRX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of x shall be related to the ColorPointRX attribute by the relationship x = ColorPointRX /
65536 (ColorPointRX in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.3

##### colorPointRy

> `readonly` **colorPointRy**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The ColorPointRY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of y shall be related to the ColorPointRY attribute by the relationship y = ColorPointRY /
65536 (ColorPointRY in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.4

##### compensationText

> `readonly` **compensationText**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`string`, `any`\>

The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to

compensate for color/intensity drift over time.

###### See

MatterSpecification.v11.Cluster § 3.2.7.7

##### driftCompensation

> `readonly` **driftCompensation**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`DriftCompensation`](../enumerations/DriftCompensation.md), `any`\>

The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for
color/intensity drift over time. It shall be one of the non-reserved values in Values of the
DriftCompensation Attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.7.6

##### enhancedColorMode

> `readonly` **enhancedColorMode**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EnhancedColorMode`](../enumerations/EnhancedColorMode.md), `any`\>

The EnhancedColorMode attribute specifies which attributes are currently determining the color of the
device, as detailed in Values of the EnhancedColorMode Attribute.

To provide compatibility with standard ZCL, the original ColorMode attribute shall indicate ‘CurrentHue
and CurrentSaturation’ when the light uses the EnhancedCurrentHue attribute. If the ColorMode attribute
is changed, e.g., due to one of the standard Color Control cluster commands defined in the ZCL, its new
value shall be copied to the EnhancedColorMode attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.7.12

##### numberOfPrimaries

> `readonly` **numberOfPrimaries**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. A
value of null shall indicate that the number of primaries is unknown.

Where this attribute is implemented, the attributes below for indicating the “x” and “y” color values of
the primaries shall also be implemented for each of the primaries from 1 to NumberOfPrimaries, without
leaving gaps. Implementation of the Primary1Intensity attribute and subsequent intensity attributes is
optional.

###### See

MatterSpecification.v11.Cluster § 3.2.8.1

##### options

> `readonly` **options**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

##### primary1Intensity

> `readonly` **primary1Intensity**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

The Primary1intensity attribute contains a representation of the maximum intensity of this primary as
defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast Configuration
Cluster), normalized such that the primary with the highest maximum intensity contains the value 0xfe.

A value of null shall indicate that this primary is not available.

###### See

MatterSpecification.v11.Cluster § 3.2.8.4

##### primary1X

> `readonly` **primary1X**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

The Primary1X attribute contains the normalized chromaticity value x for this primary, as defined in the
CIE xyY Color Space.

The value of x shall be related to the Primary1X attribute by the relationship x = Primary1X / 65536
(Primary1X in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.8.2

##### primary1Y

> `readonly` **primary1Y**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

The Primary1Y attribute contains the normalized chromaticity value y for this primary, as defined in the
CIE xyY Color Space.

The value of y shall be related to the Primary1Y attribute by the relationship y = Primary1Y / 65536
(Primary1Y in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.8.3

##### primary2Intensity

> `readonly` **primary2Intensity**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### primary2X

> `readonly` **primary2X**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### primary2Y

> `readonly` **primary2Y**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### primary3Intensity

> `readonly` **primary3Intensity**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### primary3X

> `readonly` **primary3X**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### primary3Y

> `readonly` **primary3Y**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### primary4Intensity

> `readonly` **primary4Intensity**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary4X

> `readonly` **primary4X**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary4Y

> `readonly` **primary4Y**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary5Intensity

> `readonly` **primary5Intensity**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary5X

> `readonly` **primary5X**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary5Y

> `readonly` **primary5Y**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary6Intensity

> `readonly` **primary6Intensity**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary6X

> `readonly` **primary6X**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary6Y

> `readonly` **primary6Y**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### remainingTime

> `readonly` **remainingTime**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently active
command will be complete.

###### See

MatterSpecification.v11.Cluster § 3.2.7.3

##### whitePointX

> `readonly` **whitePointX**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The WhitePointX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of x shall be related to the WhitePointX attribute by the relationship x = WhitePointX / 65536
(WhitePointX in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.1

##### whitePointY

> `readonly` **whitePointY**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The WhitePointY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of y shall be related to the WhitePointY attribute by the relationship y = WhitePointY / 65536
(WhitePointY in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.2

#### Inherited from

`Identity.attributes`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L86)

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L92)

***

### commands

> **commands**: `object`

#### Inherited from

`Identity.commands`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L89)

***

### events

> **events**: `object`

#### Inherited from

`Identity.events`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L90)

***

### extensions

> **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

#### Inherited from

`Identity.extensions`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L93)

***

### features

> **features**: `object`

#### colorLoop

> `readonly` **colorLoop**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

ColorLoop

Color loop is supported.

#### colorTemperature

> `readonly` **colorTemperature**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

ColorTemperature

Supports specification of color temperature.

#### enhancedHue

> `readonly` **enhancedHue**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

EnhancedHue

Enhanced hue is supported.

#### hueSaturation

> `readonly` **hueSaturation**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

HueSaturation

Supports color specification via hue/saturation.

#### xy

> `readonly` **xy**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Xy

Supports color specification via XY.

#### Inherited from

`Identity.features`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L84)

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`768`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L81)

***

### name

> **name**: `"ColorControl"`

#### Inherited from

`Identity.name`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L82)

***

### revision

> **revision**: `5`

#### Inherited from

`Identity.revision`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L83)

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L85)

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
