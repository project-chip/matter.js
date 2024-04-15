[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ColorControl

# Namespace: ColorControl

[exports/cluster](exports_cluster.md).ColorControl

## Table of contents

### Enumerations

- [Action](../enums/exports_cluster.ColorControl.Action.md)
- [ColorControlDirection](../enums/exports_cluster.ColorControl.ColorControlDirection.md)
- [ColorLoopSetDirection](../enums/exports_cluster.ColorControl.ColorLoopSetDirection.md)
- [ColorMode](../enums/exports_cluster.ColorControl.ColorMode.md)
- [DriftCompensation](../enums/exports_cluster.ColorControl.DriftCompensation.md)
- [EnhancedColorMode](../enums/exports_cluster.ColorControl.EnhancedColorMode.md)
- [Feature](../enums/exports_cluster.ColorControl.Feature.md)
- [MoveMode](../enums/exports_cluster.ColorControl.MoveMode.md)
- [StepMode](../enums/exports_cluster.ColorControl.StepMode.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.ColorControl.Cluster.md)
- [ColorLoopSetRequest](../interfaces/exports_cluster.ColorControl.ColorLoopSetRequest.md)
- [Complete](../interfaces/exports_cluster.ColorControl.Complete.md)
- [EnhancedMoveHueRequest](../interfaces/exports_cluster.ColorControl.EnhancedMoveHueRequest.md)
- [EnhancedMoveToHueAndSaturationRequest](../interfaces/exports_cluster.ColorControl.EnhancedMoveToHueAndSaturationRequest.md)
- [EnhancedMoveToHueRequest](../interfaces/exports_cluster.ColorControl.EnhancedMoveToHueRequest.md)
- [EnhancedStepHueRequest](../interfaces/exports_cluster.ColorControl.EnhancedStepHueRequest.md)
- [MoveColorRequest](../interfaces/exports_cluster.ColorControl.MoveColorRequest.md)
- [MoveColorTemperatureRequest](../interfaces/exports_cluster.ColorControl.MoveColorTemperatureRequest.md)
- [MoveHueRequest](../interfaces/exports_cluster.ColorControl.MoveHueRequest.md)
- [MoveSaturationRequest](../interfaces/exports_cluster.ColorControl.MoveSaturationRequest.md)
- [MoveToColorRequest](../interfaces/exports_cluster.ColorControl.MoveToColorRequest.md)
- [MoveToColorTemperatureRequest](../interfaces/exports_cluster.ColorControl.MoveToColorTemperatureRequest.md)
- [MoveToHueAndSaturationRequest](../interfaces/exports_cluster.ColorControl.MoveToHueAndSaturationRequest.md)
- [MoveToHueRequest](../interfaces/exports_cluster.ColorControl.MoveToHueRequest.md)
- [MoveToSaturationRequest](../interfaces/exports_cluster.ColorControl.MoveToSaturationRequest.md)
- [StepColorRequest](../interfaces/exports_cluster.ColorControl.StepColorRequest.md)
- [StepColorTemperatureRequest](../interfaces/exports_cluster.ColorControl.StepColorTemperatureRequest.md)
- [StepHueRequest](../interfaces/exports_cluster.ColorControl.StepHueRequest.md)
- [StepSaturationRequest](../interfaces/exports_cluster.ColorControl.StepSaturationRequest.md)
- [StopMoveStepRequest](../interfaces/exports_cluster.ColorControl.StopMoveStepRequest.md)

### Variables

- [Base](exports_cluster.ColorControl.md#base)
- [Cluster](exports_cluster.ColorControl.md#cluster)
- [ClusterInstance](exports_cluster.ColorControl.md#clusterinstance)
- [ColorLoopComponent](exports_cluster.ColorControl.md#colorloopcomponent)
- [ColorTemperatureComponent](exports_cluster.ColorControl.md#colortemperaturecomponent)
- [Complete](exports_cluster.ColorControl.md#complete)
- [CompleteInstance](exports_cluster.ColorControl.md#completeinstance)
- [EnhancedHueComponent](exports_cluster.ColorControl.md#enhancedhuecomponent)
- [FeatureMap](exports_cluster.ColorControl.md#featuremap)
- [HueSaturationComponent](exports_cluster.ColorControl.md#huesaturationcomponent)
- [HueSaturationOrXyOrColorTemperatureComponent](exports_cluster.ColorControl.md#huesaturationorxyorcolortemperaturecomponent)
- [Options](exports_cluster.ColorControl.md#options)
- [TlvColorLoopSetRequest](exports_cluster.ColorControl.md#tlvcolorloopsetrequest)
- [TlvEnhancedMoveHueRequest](exports_cluster.ColorControl.md#tlvenhancedmovehuerequest)
- [TlvEnhancedMoveToHueAndSaturationRequest](exports_cluster.ColorControl.md#tlvenhancedmovetohueandsaturationrequest)
- [TlvEnhancedMoveToHueRequest](exports_cluster.ColorControl.md#tlvenhancedmovetohuerequest)
- [TlvEnhancedStepHueRequest](exports_cluster.ColorControl.md#tlvenhancedstephuerequest)
- [TlvMoveColorRequest](exports_cluster.ColorControl.md#tlvmovecolorrequest)
- [TlvMoveColorTemperatureRequest](exports_cluster.ColorControl.md#tlvmovecolortemperaturerequest)
- [TlvMoveHueRequest](exports_cluster.ColorControl.md#tlvmovehuerequest)
- [TlvMoveSaturationRequest](exports_cluster.ColorControl.md#tlvmovesaturationrequest)
- [TlvMoveToColorRequest](exports_cluster.ColorControl.md#tlvmovetocolorrequest)
- [TlvMoveToColorTemperatureRequest](exports_cluster.ColorControl.md#tlvmovetocolortemperaturerequest)
- [TlvMoveToHueAndSaturationRequest](exports_cluster.ColorControl.md#tlvmovetohueandsaturationrequest)
- [TlvMoveToHueRequest](exports_cluster.ColorControl.md#tlvmovetohuerequest)
- [TlvMoveToSaturationRequest](exports_cluster.ColorControl.md#tlvmovetosaturationrequest)
- [TlvStepColorRequest](exports_cluster.ColorControl.md#tlvstepcolorrequest)
- [TlvStepColorTemperatureRequest](exports_cluster.ColorControl.md#tlvstepcolortemperaturerequest)
- [TlvStepHueRequest](exports_cluster.ColorControl.md#tlvstephuerequest)
- [TlvStepSaturationRequest](exports_cluster.ColorControl.md#tlvstepsaturationrequest)
- [TlvStopMoveStepRequest](exports_cluster.ColorControl.md#tlvstopmovesteprequest)
- [UpdateFlags](exports_cluster.ColorControl.md#updateflags)
- [XyComponent](exports_cluster.ColorControl.md#xycomponent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all ColorControl clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `colorCapabilities`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `colorMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ColorMode`](../enums/exports_cluster.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`DriftCompensation`](../enums/exports_cluster.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`EnhancedColorMode`](../enums/exports_cluster.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } | - |
| `attributes.colorCapabilities` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of the FeatureMap attribute. All other bits in ColorCapabilities shall be 0. **`See`** MatterSpecification.v11.Cluster § 3.2.7.18 |
| `attributes.colorMode` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ColorMode`](../enums/exports_cluster.ColorControl.ColorMode.md), `any`\> | The ColorMode attribute indicates which attributes are currently determining the color of the device. The value of the ColorMode attribute cannot be written directly - it is set upon reception of any command in section Commands to the appropriate mode for that command. Table 39. Values of the ColorMode Attribute **`See`** MatterSpecification.v11.Cluster § 3.2.7.9 |
| `attributes.colorPointBIntensity` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.10 |
| `attributes.colorPointBx` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.10 |
| `attributes.colorPointBy` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.10 |
| `attributes.colorPointGIntensity` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.10 |
| `attributes.colorPointGx` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.10 |
| `attributes.colorPointGy` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.10 |
| `attributes.colorPointRIntensity` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> | The ColorPointRIntensity attribute contains a representation of the relative intensity of the red color point as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast Configuration Cluster), normalized such that the color point with the highest relative intensity contains the value 0xfe. A value of null shall indicate an invalid value. **`See`** MatterSpecification.v11.Cluster § 3.2.10.5 |
| `attributes.colorPointRx` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | The ColorPointRX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color Space, of the red color point of the device. The value of x shall be related to the ColorPointRX attribute by the relationship x = ColorPointRX / 65536 (ColorPointRX in the range 0 to 65279 inclusive) **`See`** MatterSpecification.v11.Cluster § 3.2.10.3 |
| `attributes.colorPointRy` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | The ColorPointRY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color Space, of the red color point of the device. The value of y shall be related to the ColorPointRY attribute by the relationship y = ColorPointRY / 65536 (ColorPointRY in the range 0 to 65279 inclusive) **`See`** MatterSpecification.v11.Cluster § 3.2.10.4 |
| `attributes.compensationText` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`string`, `any`\> | The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to compensate for color/intensity drift over time. **`See`** MatterSpecification.v11.Cluster § 3.2.7.7 |
| `attributes.driftCompensation` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`DriftCompensation`](../enums/exports_cluster.ColorControl.DriftCompensation.md), `any`\> | The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for color/intensity drift over time. It shall be one of the non-reserved values in Values of the DriftCompensation Attribute. **`See`** MatterSpecification.v11.Cluster § 3.2.7.6 |
| `attributes.enhancedColorMode` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`EnhancedColorMode`](../enums/exports_cluster.ColorControl.EnhancedColorMode.md), `any`\> | The EnhancedColorMode attribute specifies which attributes are currently determining the color of the device, as detailed in Values of the EnhancedColorMode Attribute. To provide compatibility with standard ZCL, the original ColorMode attribute shall indicate ‘CurrentHue and CurrentSaturation’ when the light uses the EnhancedCurrentHue attribute. If the ColorMode attribute is changed, e.g., due to one of the standard Color Control cluster commands defined in the ZCL, its new value shall be copied to the EnhancedColorMode attribute. **`See`** MatterSpecification.v11.Cluster § 3.2.7.12 |
| `attributes.numberOfPrimaries` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> | The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. A value of null shall indicate that the number of primaries is unknown. Where this attribute is implemented, the attributes below for indicating the “x” and “y” color values of the primaries shall also be implemented for each of the primaries from 1 to NumberOfPrimaries, without leaving gaps. Implementation of the Primary1Intensity attribute and subsequent intensity attributes is optional. **`See`** MatterSpecification.v11.Cluster § 3.2.8.1 |
| `attributes.options` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | The Options attribute is meant to be changed only during commissioning. The Options attribute is a bitmap that determines the default behavior of some cluster commands. Each command that is dependent on the Options attribute shall first construct a temporary Options bitmap that is in effect during the command processing. The temporary Options bitmap has the same format and meaning as the Options attribute, but includes any bits that may be overridden by command fields. Below is the format and description of the Options attribute and temporary Options bitmap and the effect on dependent commands. Table 40. Options Attribute ExecuteIfOff Options bit: Command execution shall NOT continue beyond the Options processing if all of these criteria are true: • The On/Off cluster exists on the same endpoint as this cluster. • The OnOff attribute of the On/Off cluster, on this endpoint, is FALSE. • The value of the ExecuteIfOff bit is 0. **`See`** MatterSpecification.v11.Cluster § 3.2.7.10 |
| `attributes.primary1Intensity` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> | The Primary1intensity attribute contains a representation of the maximum intensity of this primary as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast Configuration Cluster), normalized such that the primary with the highest maximum intensity contains the value 0xfe. A value of null shall indicate that this primary is not available. **`See`** MatterSpecification.v11.Cluster § 3.2.8.4 |
| `attributes.primary1X` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> | The Primary1X attribute contains the normalized chromaticity value x for this primary, as defined in the CIE xyY Color Space. The value of x shall be related to the Primary1X attribute by the relationship x = Primary1X / 65536 (Primary1X in the range 0 to 65279 inclusive) **`See`** MatterSpecification.v11.Cluster § 3.2.8.2 |
| `attributes.primary1Y` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> | The Primary1Y attribute contains the normalized chromaticity value y for this primary, as defined in the CIE xyY Color Space. The value of y shall be related to the Primary1Y attribute by the relationship y = Primary1Y / 65536 (Primary1Y in the range 0 to 65279 inclusive) **`See`** MatterSpecification.v11.Cluster § 3.2.8.3 |
| `attributes.primary2Intensity` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.8 |
| `attributes.primary2X` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.8 |
| `attributes.primary2Y` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.8 |
| `attributes.primary3Intensity` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.8 |
| `attributes.primary3X` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.8 |
| `attributes.primary3Y` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.8 |
| `attributes.primary4Intensity` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.9 |
| `attributes.primary4X` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.9 |
| `attributes.primary4Y` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.9 |
| `attributes.primary5Intensity` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.9 |
| `attributes.primary5X` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.9 |
| `attributes.primary5Y` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.9 |
| `attributes.primary6Intensity` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.9 |
| `attributes.primary6X` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.9 |
| `attributes.primary6Y` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 3.2.9 |
| `attributes.remainingTime` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> | The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently active command will be complete. **`See`** MatterSpecification.v11.Cluster § 3.2.7.3 |
| `attributes.whitePointX` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | The WhitePointX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color Space, of the current white point of the device. The value of x shall be related to the WhitePointX attribute by the relationship x = WhitePointX / 65536 (WhitePointX in the range 0 to 65279 inclusive) **`See`** MatterSpecification.v11.Cluster § 3.2.10.1 |
| `attributes.whitePointY` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | The WhitePointY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color Space, of the current white point of the device. The value of y shall be related to the WhitePointY attribute by the relationship y = WhitePointY / 65536 (WhitePointY in the range 0 to 65279 inclusive) **`See`** MatterSpecification.v11.Cluster § 3.2.10.2 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `currentHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `currentSaturation`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `hueSaturation`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `currentX`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `currentY`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `xy`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\>  } ; `commands`: \{ `moveColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `colorTemperature`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `enhancedMoveHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedStepHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `enhancedHue`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `colorLoopActive`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopDirection`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `colorLoop`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `hueSaturation`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `xy`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `colorTemperature`: ``true``  }  }] | This metadata controls which ColorControlCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag) ; `xy`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.colorLoop` | [`BitFlag`](exports_schema.md#bitflag) | ColorLoop Color loop is supported. |
| `features.colorTemperature` | [`BitFlag`](exports_schema.md#bitflag) | ColorTemperature Supports specification of color temperature. |
| `features.enhancedHue` | [`BitFlag`](exports_schema.md#bitflag) | EnhancedHue Enhanced hue is supported. |
| `features.hueSaturation` | [`BitFlag`](exports_schema.md#bitflag) | HueSaturation Supports color specification via hue/saturation. |
| `features.xy` | [`BitFlag`](exports_schema.md#bitflag) | Xy Supports color specification via XY. |
| `id` | ``768`` | - |
| `name` | ``"ColorControl"`` | - |
| `revision` | ``5`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1739

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.ColorControl.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:4142

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:4144

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `colorCapabilities`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `colorMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ColorMode`](../enums/exports_cluster.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`DriftCompensation`](../enums/exports_cluster.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`EnhancedColorMode`](../enums/exports_cluster.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `currentSaturation`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `hueSaturation`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `currentX`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `currentY`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `xy`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\>  } ; `commands`: \{ `moveColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `colorTemperature`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `enhancedMoveHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedStepHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `enhancedHue`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `colorLoopActive`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopDirection`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `colorLoop`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `hueSaturation`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `xy`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `colorTemperature`: ``true``  }  }] ; `features`: \{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag) ; `xy`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``768`` ; `name`: ``"ColorControl"`` ; `revision`: ``5``  }\>

**`See`**

[Cluster](exports_cluster.ColorControl.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:2937

___

### ColorLoopComponent

• `Const` **ColorLoopComponent**: `Object`

A ColorControlCluster supports these elements if it supports feature ColorLoop.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `colorLoopActive`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopDirection`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } |
| `attributes.colorLoopActive` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.colorLoopDirection` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.colorLoopStartEnhancedHue` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.colorLoopStoredEnhancedHue` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.colorLoopTime` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `commands` | \{ `colorLoopSet`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.colorLoopSet` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1561

___

### ColorTemperatureComponent

• `Const` **ColorTemperatureComponent**: `Object`

A ColorControlCluster supports these elements if it supports feature ColorTemperature.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.colorTempPhysicalMaxMireds` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.colorTempPhysicalMinMireds` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.colorTemperatureMireds` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.coupleColorTempToLevelMinMireds` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> |
| `attributes.startUpColorTemperatureMireds` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> |
| `commands` | \{ `moveColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.moveColorTemperature` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.moveToColorTemperature` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.stepColorTemperature` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1194

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.ColorControl.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:5074

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:5076

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `colorCapabilities`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `colorLoopActive`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorLoopDirection`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorLoopTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ColorMode`](../enums/exports_cluster.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorTemperatureMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `compensationText`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`string`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `colorTemperature`: `boolean`  }]  } ; `currentHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentSaturation`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentX`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `xy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentY`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `xy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `driftCompensation`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`DriftCompensation`](../enums/exports_cluster.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`EnhancedColorMode`](../enums/exports_cluster.ColorControl.EnhancedColorMode.md), `any`\> ; `enhancedCurrentHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `colorTemperature`: `boolean`  }]  } ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enhancedMoveHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enhancedMoveToHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enhancedStepHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `xy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `xy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToHueAndSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stepColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `xy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stepColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stepHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stepSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stopMoveStep`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }, \{ `xy`: `boolean`  }, \{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag) ; `xy`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"ColorControl"`` ; `revision`: ``5``  }\>

**`See`**

[Complete](exports_cluster.ColorControl.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:4148

___

### EnhancedHueComponent

• `Const` **EnhancedHueComponent**: `Object`

A ColorControlCluster supports these elements if it supports feature EnhancedHue.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } |
| `attributes.enhancedCurrentHue` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `commands` | \{ `enhancedMoveHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedStepHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.enhancedMoveHue` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.enhancedMoveToHue` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.enhancedMoveToHueAndSaturation` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.enhancedStepHue` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1402

___

### FeatureMap

• `Const` **FeatureMap**: `Object`

The value of the ColorControl featureMap attribute

**`See`**

MatterSpecification.v11.Cluster § 3.2.5

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cl` | [`BitFlag`](exports_schema.md#bitflag) | ColorLoop Color loop is supported. |
| `ct` | [`BitFlag`](exports_schema.md#bitflag) | ColorTemperature Supports specification of color temperature. |
| `ehue` | [`BitFlag`](exports_schema.md#bitflag) | EnhancedHue Enhanced hue is supported. |
| `hs` | [`BitFlag`](exports_schema.md#bitflag) | HueSaturation Supports color specification via hue/saturation. |
| `xy` | [`BitFlag`](exports_schema.md#bitflag) | Xy Supports color specification via XY. |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:857

___

### HueSaturationComponent

• `Const` **HueSaturationComponent**: `Object`

A ColorControlCluster supports these elements if it supports feature HueSaturation.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `currentSaturation`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } |
| `attributes.currentHue` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.currentSaturation` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `commands` | \{ `moveHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.moveHue` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.moveSaturation` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.moveToHue` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.moveToHueAndSaturation` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.moveToSaturation` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.stepHue` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.stepSaturation` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:892

___

### HueSaturationOrXyOrColorTemperatureComponent

• `Const` **HueSaturationOrXyOrColorTemperatureComponent**: `Object`

A ColorControlCluster supports these elements if it supports features HueSaturation, Xy or ColorTemperature.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `stopMoveStep`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.stopMoveStep` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1679

___

### Options

• `Const` **Options**: `Object`

The value of the ColorControl options attribute

**`See`**

MatterSpecification.v11.Cluster § 3.2.7.10

#### Type declaration

| Name | Type |
| :------ | :------ |
| `executeIfOff` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:27

___

### TlvColorLoopSetRequest

• `Const` **TlvColorLoopSetRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl colorLoopSet command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.19

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:728

___

### TlvEnhancedMoveHueRequest

• `Const` **TlvEnhancedMoveHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl enhancedMoveHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.16

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:577

___

### TlvEnhancedMoveToHueAndSaturationRequest

• `Const` **TlvEnhancedMoveToHueAndSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl enhancedMoveToHueAndSaturation command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.18

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:657

___

### TlvEnhancedMoveToHueRequest

• `Const` **TlvEnhancedMoveToHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl enhancedMoveToHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.15

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:537

___

### TlvEnhancedStepHueRequest

• `Const` **TlvEnhancedStepHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl enhancedStepHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.17

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:613

___

### TlvMoveColorRequest

• `Const` **TlvMoveColorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveColor command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.12

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:316

___

### TlvMoveColorTemperatureRequest

• `Const` **TlvMoveColorTemperatureRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveColorTemperature command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.21

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:401

___

### TlvMoveHueRequest

• `Const` **TlvMoveHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:82

___

### TlvMoveSaturationRequest

• `Const` **TlvMoveSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveSaturation command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:191

___

### TlvMoveToColorRequest

• `Const` **TlvMoveToColorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToColor command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:293

___

### TlvMoveToColorTemperatureRequest

• `Const` **TlvMoveToColorTemperatureRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToColorTemperature command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.14

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:379

___

### TlvMoveToHueAndSaturationRequest

• `Const` **TlvMoveToHueAndSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToHueAndSaturation command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:270

___

### TlvMoveToHueRequest

• `Const` **TlvMoveToHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:35

___

### TlvMoveToSaturationRequest

• `Const` **TlvMoveToSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToSaturation command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:169

___

### TlvStepColorRequest

• `Const` **TlvStepColorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stepColor command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.13

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:350

___

### TlvStepColorTemperatureRequest

• `Const` **TlvStepColorTemperatureRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stepColorTemperature command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.22

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:467

___

### TlvStepHueRequest

• `Const` **TlvStepHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stepHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:125

___

### TlvStepSaturationRequest

• `Const` **TlvStepSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stepSaturation command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:228

___

### TlvStopMoveStepRequest

• `Const` **TlvStopMoveStepRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stopMoveStep command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.20

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:804

___

### UpdateFlags

• `Const` **UpdateFlags**: `Object`

The value of ColorControl.updateFlags

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.19.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reserved` | [`BitField`](exports_schema.md#bitfield) |
| `updateAction` | [`BitFlag`](exports_schema.md#bitflag) |
| `updateDirection` | [`BitFlag`](exports_schema.md#bitflag) |
| `updateStartHue` | [`BitFlag`](exports_schema.md#bitflag) |
| `updateTime` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:697

___

### XyComponent

• `Const` **XyComponent**: `Object`

A ColorControlCluster supports these elements if it supports feature Xy.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentX`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `currentY`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } |
| `attributes.currentX` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.currentY` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `commands` | \{ `moveColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.moveColor` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.moveToColor` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.stepColor` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1106
