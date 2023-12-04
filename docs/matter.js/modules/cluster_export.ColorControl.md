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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.ColorControl.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `hueSaturation`: ``true``  } ? typeof [`HueSaturationComponent`](cluster_export.ColorControl.md#huesaturationcomponent) : {} & `SF` extends { `xy`: ``true``  } ? typeof [`XyComponent`](cluster_export.ColorControl.md#xycomponent) : {} & `SF` extends { `colorTemperature`: ``true``  } ? typeof [`ColorTemperatureComponent`](cluster_export.ColorControl.md#colortemperaturecomponent) : {} & `SF` extends { `enhancedHue`: ``true``  } ? typeof [`EnhancedHueComponent`](cluster_export.ColorControl.md#enhancedhuecomponent) : {} & `SF` extends { `colorLoop`: ``true``  } ? typeof [`ColorLoopComponent`](cluster_export.ColorControl.md#colorloopcomponent) : {} & `SF` extends { `hueSaturation`: ``true``  } \| { `xy`: ``true``  } \| { `colorTemperature`: ``true``  } ? typeof [`HueSaturationOrXyOrColorTemperatureComponent`](cluster_export.ColorControl.md#huesaturationorxyorcolortemperaturecomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1614](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1614)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `colorCapabilities`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `cl`: [`BitFlag`](schema_export.md#bitflag-1) ; `ct`: [`BitFlag`](schema_export.md#bitflag-1) ; `ehue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hs`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `colorMode`: [`Attribute`](cluster_export.md#attribute)<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](cluster_export.md#attribute)<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary4Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary4X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary4Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary5X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary6X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>  } ; `features`: { `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``768`` = 0x300; `name`: ``"ColorControl"`` = "ColorControl"; `revision`: ``5`` = 5 }\>

These elements and properties are present in all ColorControl clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:808](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L808)

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `colorCapabilities`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `cl`: [`BitFlag`](schema_export.md#bitflag-1) ; `ct`: [`BitFlag`](schema_export.md#bitflag-1) ; `ehue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hs`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `colorMode`: [`Attribute`](cluster_export.md#attribute)<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](cluster_export.md#attribute)<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary4Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary4X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary4Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary5X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary6X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: {} ; `events`: {} ; `features`: { `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``768`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"ColorControl"`` ; `revision`: ``5`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `colorCapabilities`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `cl`: [`BitFlag`](schema_export.md#bitflag-1) ; `ct`: [`BitFlag`](schema_export.md#bitflag-1) ; `ehue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hs`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `colorMode`: [`Attribute`](cluster_export.md#attribute)<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](cluster_export.md#attribute)<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary4Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary4X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary4Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary5X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary6X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>  } ; `features`: { `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``768`` = 0x300; `name`: ``"ColorControl"`` = "ColorControl"; `revision`: ``5`` = 5 }\>, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.ColorControl.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Color Control

Attributes and commands for controlling the color properties of a color-capable light.

ColorControlCluster supports optional features that you can enable with the ColorControlCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1579](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1579)

___

### ColorLoopComponent

• `Const` **ColorLoopComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `colorLoopActive`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `colorLoopDirection`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  } ; `commands`: { `colorLoopSet`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Action`](../enums/cluster_export.ColorControl.Action.md)\> ; `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorLoopSetDirection`](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `startHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `time`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `updateFlags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `reserved`: [`BitField`](schema_export.md#bitfield-1) ; `updateAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateDirection`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateStartHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateTime`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature ColorLoop.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1494](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1494)

___

### ColorTemperatureComponent

• `Const` **ColorTemperatureComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `colorTempPhysicalMaxMireds`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\>  } ; `commands`: { `moveColorTemperature`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `moveToColorTemperature`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorTemperatureMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `stepColorTemperature`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature ColorTemperature.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1328](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1328)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `colorCapabilities`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `cl`: [`BitFlag`](schema_export.md#bitflag-1) ; `ct`: [`BitFlag`](schema_export.md#bitflag-1) ; `ehue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hs`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `colorLoopActive`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorLoopDirection`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorLoopStartEnhancedHue`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorLoopStoredEnhancedHue`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorLoopTime`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorMode`: [`Attribute`](cluster_export.md#attribute)<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `colorTempPhysicalMaxMireds`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorTempPhysicalMinMireds`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorTemperatureMireds`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `compensationText`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`string`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentHue`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentSaturation`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentX`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentY`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `driftCompensation`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](cluster_export.md#attribute)<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `enhancedCurrentHue`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `numberOfPrimaries`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `primary4Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary4X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary4Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary5X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary5Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Intensity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<``null`` \| `number`, `any`\> ; `primary6X`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `primary6Y`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `whitePointX`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>  } ; `commands`: { `colorLoopSet`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Action`](../enums/cluster_export.ColorControl.Action.md)\> ; `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorLoopSetDirection`](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `startHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `time`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `updateFlags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `reserved`: [`BitField`](schema_export.md#bitfield-1) ; `updateAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateDirection`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateStartHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateTime`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enhancedMoveHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enhancedMoveToHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enhancedMoveToHueAndSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enhancedStepHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveColor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rateX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `rateY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveColorTemperature`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveToColor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveToColorTemperature`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorTemperatureMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveToHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveToHueAndSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveToSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `stepColor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `stepColorTemperature`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `stepHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `stepSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `stopMoveStep`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: { `colorLoop`: [`BitFlag`](schema_export.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag-1) ; `xy`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``768`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"ColorControl"`` = Cluster.name; `revision`: ``5`` = Cluster.revision }\>

This cluster supports all ColorControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1636](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1636)

___

### EnhancedHueComponent

• `Const` **EnhancedHueComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `enhancedCurrentHue`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  } ; `commands`: { `enhancedMoveHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `enhancedStepHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature EnhancedHue.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1433](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1433)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:77](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L77)

___

### HueSaturationComponent

• `Const` **HueSaturationComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `currentHue`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `currentSaturation`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  } ; `commands`: { `moveHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `moveSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `moveToHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `moveToSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `stepHue`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `stepSaturation`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature HueSaturation.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1199](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1199)

___

### HueSaturationOrXyOrColorTemperatureComponent

• `Const` **HueSaturationOrXyOrColorTemperatureComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `commands`: { `stopMoveStep`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports features HueSaturation, Xy or ColorTemperature.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1555](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1555)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:58](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L58)

___

### TlvColorLoopSetRequest

• `Const` **TlvColorLoopSetRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Action`](../enums/cluster_export.ColorControl.Action.md)\> ; `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorLoopSetDirection`](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `startHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `time`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `updateFlags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `reserved`: [`BitField`](schema_export.md#bitfield-1) ; `updateAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateDirection`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateStartHue`: [`BitFlag`](schema_export.md#bitflag-1) ; `updateTime`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>

Input to the ColorControl colorLoopSet command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.19

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:694](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L694)

___

### TlvEnhancedMoveHueRequest

• `Const` **TlvEnhancedMoveHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl enhancedMoveHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.16

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:562](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L562)

___

### TlvEnhancedMoveToHueAndSaturationRequest

• `Const` **TlvEnhancedMoveToHueAndSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl enhancedMoveToHueAndSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.18

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:627](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L627)

___

### TlvEnhancedMoveToHueRequest

• `Const` **TlvEnhancedMoveToHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl enhancedMoveToHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.15

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:529](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L529)

___

### TlvEnhancedStepHueRequest

• `Const` **TlvEnhancedStepHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl enhancedStepHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.17

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:590](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L590)

___

### TlvMoveColorRequest

• `Const` **TlvMoveColorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rateX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `rateY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveColor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.12

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:345](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L345)

___

### TlvMoveColorTemperatureRequest

• `Const` **TlvMoveColorTemperatureRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveColorTemperature command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.21

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:404](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L404)

___

### TlvMoveHueRequest

• `Const` **TlvMoveHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:170](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L170)

___

### TlvMoveSaturationRequest

• `Const` **TlvMoveSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:255](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L255)

___

### TlvMoveToColorRequest

• `Const` **TlvMoveToColorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `colorX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveToColor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.11

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:332](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L332)

___

### TlvMoveToColorTemperatureRequest

• `Const` **TlvMoveToColorTemperatureRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `colorTemperatureMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveToColorTemperature command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.14

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:392](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L392)

___

### TlvMoveToHueAndSaturationRequest

• `Const` **TlvMoveToHueAndSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveToHueAndSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.10

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:319](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L319)

___

### TlvMoveToHueRequest

• `Const` **TlvMoveToHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveToHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:129](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L129)

___

### TlvMoveToSaturationRequest

• `Const` **TlvMoveToSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl moveToSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.7

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:243](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L243)

___

### TlvStepColorRequest

• `Const` **TlvStepColorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl stepColor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.13

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:371](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L371)

___

### TlvStepColorTemperatureRequest

• `Const` **TlvStepColorTemperatureRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl stepColorTemperature command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.22

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:464](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L464)

___

### TlvStepHueRequest

• `Const` **TlvStepHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl stepHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:206](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L206)

___

### TlvStepSaturationRequest

• `Const` **TlvStepSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the ColorControl stepSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.9

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:284](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L284)

___

### TlvStopMoveStepRequest

• `Const` **TlvStopMoveStepRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>

Input to the ColorControl stopMoveStep command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.20

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:758](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L758)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:660](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L660)

___

### XyComponent

• `Const` **XyComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `currentX`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `currentY`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  } ; `commands`: { `moveColor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rateX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `rateY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `moveToColor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `colorX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `colorY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `stepColor`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature Xy.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1274](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1274)
