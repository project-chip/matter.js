[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ColorControl

# Namespace: ColorControl

[cluster/export](cluster_export.md).ColorControl

## Table of contents

### Enumerations

- [Action](../enums/cluster_export.ColorControl.Action.md)
- [ColorControlDirection](../enums/cluster_export.ColorControl.ColorControlDirection.md)
- [ColorLoopSetDirection](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)
- [ColorMode](../enums/cluster_export.ColorControl.ColorMode.md)
- [DriftCompensation](../enums/cluster_export.ColorControl.DriftCompensation.md)
- [EnhancedColorMode](../enums/cluster_export.ColorControl.EnhancedColorMode.md)
- [Feature](../enums/cluster_export.ColorControl.Feature.md)
- [MoveMode](../enums/cluster_export.ColorControl.MoveMode.md)
- [StepMode](../enums/cluster_export.ColorControl.StepMode.md)

### Type Aliases

- [Extension](cluster_export.ColorControl.md#extension)

### Variables

- [Base](cluster_export.ColorControl.md#base)
- [Cluster](cluster_export.ColorControl.md#cluster)
- [ColorLoopComponent](cluster_export.ColorControl.md#colorloopcomponent)
- [ColorTemperatureComponent](cluster_export.ColorControl.md#colortemperaturecomponent)
- [Complete](cluster_export.ColorControl.md#complete)
- [EnhancedHueComponent](cluster_export.ColorControl.md#enhancedhuecomponent)
- [FeatureMap](cluster_export.ColorControl.md#featuremap)
- [HueSaturationComponent](cluster_export.ColorControl.md#huesaturationcomponent)
- [HueSaturationOrXyOrColorTemperatureComponent](cluster_export.ColorControl.md#huesaturationorxyorcolortemperaturecomponent)
- [Options](cluster_export.ColorControl.md#options)
- [TlvColorLoopSetRequest](cluster_export.ColorControl.md#tlvcolorloopsetrequest)
- [TlvEnhancedMoveHueRequest](cluster_export.ColorControl.md#tlvenhancedmovehuerequest)
- [TlvEnhancedMoveToHueAndSaturationRequest](cluster_export.ColorControl.md#tlvenhancedmovetohueandsaturationrequest)
- [TlvEnhancedMoveToHueRequest](cluster_export.ColorControl.md#tlvenhancedmovetohuerequest)
- [TlvEnhancedStepHueRequest](cluster_export.ColorControl.md#tlvenhancedstephuerequest)
- [TlvMoveColorRequest](cluster_export.ColorControl.md#tlvmovecolorrequest)
- [TlvMoveColorTemperatureRequest](cluster_export.ColorControl.md#tlvmovecolortemperaturerequest)
- [TlvMoveHueRequest](cluster_export.ColorControl.md#tlvmovehuerequest)
- [TlvMoveSaturationRequest](cluster_export.ColorControl.md#tlvmovesaturationrequest)
- [TlvMoveToColorRequest](cluster_export.ColorControl.md#tlvmovetocolorrequest)
- [TlvMoveToColorTemperatureRequest](cluster_export.ColorControl.md#tlvmovetocolortemperaturerequest)
- [TlvMoveToHueAndSaturationRequest](cluster_export.ColorControl.md#tlvmovetohueandsaturationrequest)
- [TlvMoveToHueRequest](cluster_export.ColorControl.md#tlvmovetohuerequest)
- [TlvMoveToSaturationRequest](cluster_export.ColorControl.md#tlvmovetosaturationrequest)
- [TlvStepColorRequest](cluster_export.ColorControl.md#tlvstepcolorrequest)
- [TlvStepColorTemperatureRequest](cluster_export.ColorControl.md#tlvstepcolortemperaturerequest)
- [TlvStepHueRequest](cluster_export.ColorControl.md#tlvstephuerequest)
- [TlvStepSaturationRequest](cluster_export.ColorControl.md#tlvstepsaturationrequest)
- [TlvStopMoveStepRequest](cluster_export.ColorControl.md#tlvstopmovesteprequest)
- [UpdateFlags](cluster_export.ColorControl.md#updateflags)
- [XyComponent](cluster_export.ColorControl.md#xycomponent)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.ColorControl.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `hueSaturation`: ``true``  } ? typeof [`HueSaturationComponent`](cluster_export.ColorControl.md#huesaturationcomponent) : {} & `SF` extends { `xy`: ``true``  } ? typeof [`XyComponent`](cluster_export.ColorControl.md#xycomponent) : {} & `SF` extends { `colorTemperature`: ``true``  } ? typeof [`ColorTemperatureComponent`](cluster_export.ColorControl.md#colortemperaturecomponent) : {} & `SF` extends { `enhancedHue`: ``true``  } ? typeof [`EnhancedHueComponent`](cluster_export.ColorControl.md#enhancedhuecomponent) : {} & `SF` extends { `colorLoop`: ``true``  } ? typeof [`ColorLoopComponent`](cluster_export.ColorControl.md#colorloopcomponent) : {} & `SF` extends { `hueSaturation`: ``true``  } \| { `xy`: ``true``  } \| { `colorTemperature`: ``true``  } ? typeof [`HueSaturationOrXyOrColorTemperatureComponent`](cluster_export.ColorControl.md#huesaturationorxyorcolortemperaturecomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1620](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1620)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `colorCapabilities`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `cl`: [`BitFlag`](schema_export.md#bitflag-1) ; `ct`: [`BitFlag`](schema_export.md#bitflag-1) ; `ehue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hs`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `colorMode`: [`Attribute`](cluster_export.md#attribute)<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](cluster_export.md#attribute)<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary4Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary4X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary4Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary5X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary6X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all ColorControl clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:817](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L817)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `colorCapabilities`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `cl`: [`BitFlag`](schema_export.md#bitflag-1) ; `ct`: [`BitFlag`](schema_export.md#bitflag-1) ; `ehue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hs`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `colorMode`: [`Attribute`](cluster_export.md#attribute)<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](cluster_export.md#attribute)<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary4Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary4X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary4Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary5X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary6X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.ColorControl.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Color Control

Attributes and commands for controlling the color properties of a color-capable light.

ColorControlCluster supports optional features that you can enable with the ColorControlCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1588](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1588)

___

### ColorLoopComponent

• `Const` **ColorLoopComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `colorLoopActive`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `colorLoopDirection`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  }, { `colorLoopSet`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Action`](../enums/cluster_export.ColorControl.Action.md)\> ; `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorLoopSetDirection`](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `startHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `time`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `updateFlags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `reserved`: [`BitField`](schema_export.md#bitfield-1) ; `updateAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateDirection`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateStartHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateTime`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A ColorControlCluster supports these elements if it supports feature ColorLoop.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1503](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1503)

___

### ColorTemperatureComponent

• `Const` **ColorTemperatureComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `colorTempPhysicalMaxMireds`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\>  }, { `moveColorTemperature`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `moveToColorTemperature`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorTemperatureMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `stepColorTemperature`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A ColorControlCluster supports these elements if it supports feature ColorTemperature.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1337](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1337)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `colorCapabilities`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `cl`: [`BitFlag`](schema_export.md#bitflag-1) ; `ct`: [`BitFlag`](schema_export.md#bitflag-1) ; `ehue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hs`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `colorLoopActive`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `colorLoopDirection`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `colorLoopStartEnhancedHue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `colorLoopStoredEnhancedHue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `colorLoopTime`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `colorMode`: [`Attribute`](cluster_export.md#attribute)<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorTempPhysicalMaxMireds`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `colorTempPhysicalMinMireds`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `colorTemperatureMireds`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `compensationText`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`string`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>\> ; `currentHue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `currentSaturation`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `currentX`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `currentY`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `driftCompensation`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](cluster_export.md#attribute)<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `enhancedCurrentHue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `numberOfPrimaries`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary4Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary4X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary4Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary5X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary6X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\>\> ; `whitePointX`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `colorLoopSet`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Action`](../enums/cluster_export.ColorControl.Action.md)\> ; `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorLoopSetDirection`](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `startHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `time`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `updateFlags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `reserved`: [`BitField`](schema_export.md#bitfield-1) ; `updateAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateDirection`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateStartHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateTime`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\>\> ; `enhancedMoveHue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `enhancedMoveToHue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `enhancedMoveToHueAndSaturation`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `enhancedStepHue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `moveColor`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rateX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `rateY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `moveColorTemperature`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `moveHue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `moveSaturation`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `moveToColor`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `moveToColorTemperature`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorTemperatureMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `moveToHue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `moveToHueAndSaturation`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `moveToSaturation`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `stepColor`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `stepColorTemperature`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `stepHue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `stepSaturation`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `stopMoveStep`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\>\>  }, {}\>

This cluster supports all ColorControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1642](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1642)

___

### EnhancedHueComponent

• `Const` **EnhancedHueComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `enhancedCurrentHue`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  }, { `enhancedMoveHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `enhancedStepHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A ColorControlCluster supports these elements if it supports feature EnhancedHue.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1442](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1442)

___

### FeatureMap

• `Const` **FeatureMap**: `Object`

The value of the ColorControl featureMap attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.5

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cl` | [`BitFlag`](schema_export.md#bitflag-1) | ColorLoop Color loop is supported. |
| `ct` | [`BitFlag`](schema_export.md#bitflag-1) | ColorTemperature Supports specification of color temperature. |
| `ehue` | [`BitFlag`](schema_export.md#bitflag-1) | EnhancedHue Enhanced hue is supported. |
| `hs` | [`BitFlag`](schema_export.md#bitflag-1) | HueSaturation Supports color specification via hue/saturation. |
| `xy` | [`BitFlag`](schema_export.md#bitflag-1) | Xy Supports color specification via XY. |

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L86)

___

### HueSaturationComponent

• `Const` **HueSaturationComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `currentHue`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `currentSaturation`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  }, { `moveHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `moveSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `moveToHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `moveToSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `stepHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `stepSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A ColorControlCluster supports these elements if it supports feature HueSaturation.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1208](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1208)

___

### HueSaturationOrXyOrColorTemperatureComponent

• `Const` **HueSaturationOrXyOrColorTemperatureComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `stopMoveStep`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A ColorControlCluster supports these elements if it supports features HueSaturation, Xy or ColorTemperature.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1564](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1564)

___

### Options

• `Const` **Options**: `Object`

The value of the ColorControl options attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.7.10

#### Type declaration

| Name | Type |
| :------ | :------ |
| `executeIfOff` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:67](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L67)

___

### TlvColorLoopSetRequest

• `Const` **TlvColorLoopSetRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Action`](../enums/cluster_export.ColorControl.Action.md)\> ; `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorLoopSetDirection`](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `startHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `time`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `updateFlags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `reserved`: [`BitField`](schema_export.md#bitfield-1) ; `updateAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateDirection`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateStartHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateTime`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>

Input to the ColorControl colorLoopSet command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.19

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:703](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L703)

___

### TlvEnhancedMoveHueRequest

• `Const` **TlvEnhancedMoveHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl enhancedMoveHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.16

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:571](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L571)

___

### TlvEnhancedMoveToHueAndSaturationRequest

• `Const` **TlvEnhancedMoveToHueAndSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl enhancedMoveToHueAndSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.18

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:636](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L636)

___

### TlvEnhancedMoveToHueRequest

• `Const` **TlvEnhancedMoveToHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl enhancedMoveToHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.15

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:538](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L538)

___

### TlvEnhancedStepHueRequest

• `Const` **TlvEnhancedStepHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl enhancedStepHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.17

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:599](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L599)

___

### TlvMoveColorRequest

• `Const` **TlvMoveColorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rateX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `rateY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveColor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.12

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:354](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L354)

___

### TlvMoveColorTemperatureRequest

• `Const` **TlvMoveColorTemperatureRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveColorTemperature command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.21

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:413](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L413)

___

### TlvMoveHueRequest

• `Const` **TlvMoveHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:179](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L179)

___

### TlvMoveSaturationRequest

• `Const` **TlvMoveSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:264](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L264)

___

### TlvMoveToColorRequest

• `Const` **TlvMoveToColorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `colorX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveToColor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.11

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:341](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L341)

___

### TlvMoveToColorTemperatureRequest

• `Const` **TlvMoveToColorTemperatureRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `colorTemperatureMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveToColorTemperature command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.14

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:401](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L401)

___

### TlvMoveToHueAndSaturationRequest

• `Const` **TlvMoveToHueAndSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveToHueAndSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.10

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:328](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L328)

___

### TlvMoveToHueRequest

• `Const` **TlvMoveToHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveToHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:138](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L138)

___

### TlvMoveToSaturationRequest

• `Const` **TlvMoveToSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveToSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.7

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:252](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L252)

___

### TlvStepColorRequest

• `Const` **TlvStepColorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl stepColor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.13

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:380](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L380)

___

### TlvStepColorTemperatureRequest

• `Const` **TlvStepColorTemperatureRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl stepColorTemperature command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.22

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:473](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L473)

___

### TlvStepHueRequest

• `Const` **TlvStepHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl stepHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:215](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L215)

___

### TlvStepSaturationRequest

• `Const` **TlvStepSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl stepSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.9

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:293](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L293)

___

### TlvStopMoveStepRequest

• `Const` **TlvStopMoveStepRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>

Input to the ColorControl stopMoveStep command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.20

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:767](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L767)

___

### UpdateFlags

• `Const` **UpdateFlags**: `Object`

The value of ColorControl.updateFlags

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.19.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reserved` | [`BitField`](schema_export.md#bitfield-1) |
| `updateAction` | [`BitFlag`](schema_export.md#bitflag-1) |
| `updateDirection` | [`BitFlag`](schema_export.md#bitflag-1) |
| `updateStartHue` | [`BitFlag`](schema_export.md#bitflag-1) |
| `updateTime` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:669](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L669)

___

### XyComponent

• `Const` **XyComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `currentX`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `currentY`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  }, { `moveColor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rateX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `rateY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `moveToColor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `stepColor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A ColorControlCluster supports these elements if it supports feature Xy.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1283](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1283)
