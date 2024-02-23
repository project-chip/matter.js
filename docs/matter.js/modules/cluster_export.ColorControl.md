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

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.ColorControl.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `hueSaturation`: ``true``  } ? typeof [`HueSaturationComponent`](cluster_export.ColorControl.md#huesaturationcomponent) : {} & `SF` extends \{ `xy`: ``true``  } ? typeof [`XyComponent`](cluster_export.ColorControl.md#xycomponent) : {} & `SF` extends \{ `colorTemperature`: ``true``  } ? typeof [`ColorTemperatureComponent`](cluster_export.ColorControl.md#colortemperaturecomponent) : {} & `SF` extends \{ `enhancedHue`: ``true``  } ? typeof [`EnhancedHueComponent`](cluster_export.ColorControl.md#enhancedhuecomponent) : {} & `SF` extends \{ `colorLoop`: ``true``  } ? typeof [`ColorLoopComponent`](cluster_export.ColorControl.md#colorloopcomponent) : {} & `SF` extends \{ `hueSaturation`: ``true``  } \| \{ `xy`: ``true``  } \| \{ `colorTemperature`: ``true``  } ? typeof [`HueSaturationOrXyOrColorTemperatureComponent`](cluster_export.ColorControl.md#huesaturationorxyorcolortemperaturecomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1614](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1614)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `colorCapabilities`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `cl`: [`BitFlag`](schema_export.md#bitflag) ; `ct`: [`BitFlag`](schema_export.md#bitflag) ; `ehue`: [`BitFlag`](schema_export.md#bitflag) ; `hs`: [`BitFlag`](schema_export.md#bitflag) ; `xy`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `colorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag) ; `xy`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``768`` = 0x300; `name`: ``"ColorControl"`` = "ColorControl"; `revision`: ``5`` = 5 }\>

These elements and properties are present in all ColorControl clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:808](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L808)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `colorCapabilities`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `cl`: [`BitFlag`](schema_export.md#bitflag) ; `ct`: [`BitFlag`](schema_export.md#bitflag) ; `ehue`: [`BitFlag`](schema_export.md#bitflag) ; `hs`: [`BitFlag`](schema_export.md#bitflag) ; `xy`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `colorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag) ; `xy`: [`BitFlag`](schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag) ; `xy`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `commands`: {} ; `events`: {} ; `features`: \{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag) ; `xy`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: [`Branded`](util_export.md#branded)\<``768`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"ColorControl"`` ; `revision`: ``5`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `colorCapabilities`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `cl`: [`BitFlag`](schema_export.md#bitflag) ; `ct`: [`BitFlag`](schema_export.md#bitflag) ; `ehue`: [`BitFlag`](schema_export.md#bitflag) ; `hs`: [`BitFlag`](schema_export.md#bitflag) ; `xy`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `colorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag) ; `xy`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``768`` = 0x300; `name`: ``"ColorControl"`` = "ColorControl"; `revision`: ``5`` = 5 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.ColorControl.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag) ; `xy`: [`BitFlag`](schema_export.md#bitflag)  }, `T`\>\> = extender }

Color Control

Attributes and commands for controlling the color properties of a color-capable light.

ColorControlCluster supports optional features that you can enable with the ColorControlCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1579](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1579)

___

### ColorLoopComponent

• `Const` **ColorLoopComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `colorLoopActive`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopDirection`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Action`](../enums/cluster_export.ColorControl.Action.md)\> ; `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorLoopSetDirection`](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `startHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `time`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `updateFlags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `reserved`: [`BitField`](schema_export.md#bitfield) ; `updateAction`: [`BitFlag`](schema_export.md#bitflag) ; `updateDirection`: [`BitFlag`](schema_export.md#bitflag) ; `updateStartHue`: [`BitFlag`](schema_export.md#bitflag) ; `updateTime`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>, `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature ColorLoop.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1494](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1494)

___

### ColorTemperatureComponent

• `Const` **ColorTemperatureComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `moveColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `moveToColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `colorTemperatureMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `stepColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature ColorTemperature.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1328](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1328)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `colorCapabilities`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `cl`: [`BitFlag`](schema_export.md#bitflag) ; `ct`: [`BitFlag`](schema_export.md#bitflag) ; `ehue`: [`BitFlag`](schema_export.md#bitflag) ; `hs`: [`BitFlag`](schema_export.md#bitflag) ; `xy`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `colorLoopActive`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorLoopDirection`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorLoopTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `colorTemperatureMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `compensationText`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `colorTemperature`: `boolean` = true }]  } ; `currentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentSaturation`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentX`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `xy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentY`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `xy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `driftCompensation`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `enhancedCurrentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag) ; `xy`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `colorTemperature`: `boolean` = true }]  } ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Action`](../enums/cluster_export.ColorControl.Action.md)\> ; `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorLoopSetDirection`](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `startHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `time`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `updateFlags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `reserved`: [`BitField`](schema_export.md#bitfield) ; `updateAction`: [`BitFlag`](schema_export.md#bitflag) ; `updateDirection`: [`BitFlag`](schema_export.md#bitflag) ; `updateStartHue`: [`BitFlag`](schema_export.md#bitflag) ; `updateTime`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enhancedMoveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enhancedMoveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `enhancedStepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rateX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `rateY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `xy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveToColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `colorX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `xy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveToColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `colorTemperatureMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveToSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `stepColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `xy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `stepColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `stepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `stepSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean` = true }, \{ `xy`: `boolean` = true }, \{ `colorTemperature`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `colorLoop`: [`BitFlag`](schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](schema_export.md#bitflag) ; `xy`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: ``768`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"ColorControl"`` = Cluster.name; `revision`: ``5`` = Cluster.revision }\>

This cluster supports all ColorControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1636](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1636)

___

### EnhancedHueComponent

• `Const` **EnhancedHueComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `enhancedMoveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `enhancedStepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature EnhancedHue.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1433](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1433)

___

### FeatureMap

• `Const` **FeatureMap**: `Object`

The value of the ColorControl featureMap attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.5

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cl` | [`BitFlag`](schema_export.md#bitflag) | ColorLoop Color loop is supported. |
| `ct` | [`BitFlag`](schema_export.md#bitflag) | ColorTemperature Supports specification of color temperature. |
| `ehue` | [`BitFlag`](schema_export.md#bitflag) | EnhancedHue Enhanced hue is supported. |
| `hs` | [`BitFlag`](schema_export.md#bitflag) | HueSaturation Supports color specification via hue/saturation. |
| `xy` | [`BitFlag`](schema_export.md#bitflag) | Xy Supports color specification via XY. |

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:77](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L77)

___

### HueSaturationComponent

• `Const` **HueSaturationComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `currentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentSaturation`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `moveSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `moveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `moveToSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `stepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `stepSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature HueSaturation.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1199](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1199)

___

### HueSaturationOrXyOrColorTemperatureComponent

• `Const` **HueSaturationOrXyOrColorTemperatureComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>, `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports features HueSaturation, Xy or ColorTemperature.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1555](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1555)

___

### Options

• `Const` **Options**: `Object`

The value of the ColorControl options attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.7.10

#### Type declaration

| Name | Type |
| :------ | :------ |
| `executeIfOff` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:58](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L58)

___

### TlvColorLoopSetRequest

• `Const` **TlvColorLoopSetRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Action`](../enums/cluster_export.ColorControl.Action.md)\> ; `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorLoopSetDirection`](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `startHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `time`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `updateFlags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `reserved`: [`BitField`](schema_export.md#bitfield) ; `updateAction`: [`BitFlag`](schema_export.md#bitflag) ; `updateDirection`: [`BitFlag`](schema_export.md#bitflag) ; `updateStartHue`: [`BitFlag`](schema_export.md#bitflag) ; `updateTime`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>

Input to the ColorControl colorLoopSet command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.19

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:694](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L694)

___

### TlvEnhancedMoveHueRequest

• `Const` **TlvEnhancedMoveHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl enhancedMoveHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.16

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:562](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L562)

___

### TlvEnhancedMoveToHueAndSaturationRequest

• `Const` **TlvEnhancedMoveToHueAndSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl enhancedMoveToHueAndSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.18

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:627](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L627)

___

### TlvEnhancedMoveToHueRequest

• `Const` **TlvEnhancedMoveToHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl enhancedMoveToHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.15

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:529](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L529)

___

### TlvEnhancedStepHueRequest

• `Const` **TlvEnhancedStepHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl enhancedStepHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.17

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:590](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L590)

___

### TlvMoveColorRequest

• `Const` **TlvMoveColorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rateX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `rateY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl moveColor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.12

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:345](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L345)

___

### TlvMoveColorTemperatureRequest

• `Const` **TlvMoveColorTemperatureRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl moveColorTemperature command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.21

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:404](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L404)

___

### TlvMoveHueRequest

• `Const` **TlvMoveHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl moveHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:170](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L170)

___

### TlvMoveSaturationRequest

• `Const` **TlvMoveSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl moveSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:255](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L255)

___

### TlvMoveToColorRequest

• `Const` **TlvMoveToColorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `colorX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl moveToColor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.11

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:332](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L332)

___

### TlvMoveToColorTemperatureRequest

• `Const` **TlvMoveToColorTemperatureRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `colorTemperatureMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl moveToColorTemperature command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.14

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:392](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L392)

___

### TlvMoveToHueAndSaturationRequest

• `Const` **TlvMoveToHueAndSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl moveToHueAndSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.10

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:319](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L319)

___

### TlvMoveToHueRequest

• `Const` **TlvMoveToHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl moveToHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:129](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L129)

___

### TlvMoveToSaturationRequest

• `Const` **TlvMoveToSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl moveToSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.7

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:243](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L243)

___

### TlvStepColorRequest

• `Const` **TlvStepColorRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl stepColor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.13

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:371](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L371)

___

### TlvStepColorTemperatureRequest

• `Const` **TlvStepColorTemperatureRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl stepColorTemperature command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.22

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:464](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L464)

___

### TlvStepHueRequest

• `Const` **TlvStepHueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl stepHue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:206](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L206)

___

### TlvStepSaturationRequest

• `Const` **TlvStepSaturationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ColorControl stepSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.9

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:284](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L284)

___

### TlvStopMoveStepRequest

• `Const` **TlvStopMoveStepRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>

Input to the ColorControl stopMoveStep command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.20

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:758](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L758)

___

### UpdateFlags

• `Const` **UpdateFlags**: `Object`

The value of ColorControl.updateFlags

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.19.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reserved` | [`BitField`](schema_export.md#bitfield) |
| `updateAction` | [`BitFlag`](schema_export.md#bitflag) |
| `updateDirection` | [`BitFlag`](schema_export.md#bitflag) |
| `updateStartHue` | [`BitFlag`](schema_export.md#bitflag) |
| `updateTime` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:660](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L660)

___

### XyComponent

• `Const` **XyComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `currentX`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentY`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rateX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `rateY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `moveToColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `colorX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `stepColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature Xy.

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:1274](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L1274)
