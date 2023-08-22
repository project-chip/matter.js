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

### Type Aliases

- [Extension](exports_cluster.ColorControl.md#extension)

### Variables

- [Base](exports_cluster.ColorControl.md#base)
- [Cluster](exports_cluster.ColorControl.md#cluster)
- [ColorLoopComponent](exports_cluster.ColorControl.md#colorloopcomponent)
- [ColorTemperatureComponent](exports_cluster.ColorControl.md#colortemperaturecomponent)
- [Complete](exports_cluster.ColorControl.md#complete)
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

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.ColorControl.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `hueSaturation`: ``true``  } ? typeof [`HueSaturationComponent`](exports_cluster.ColorControl.md#huesaturationcomponent) : {} & `SF` extends { `xy`: ``true``  } ? typeof [`XyComponent`](exports_cluster.ColorControl.md#xycomponent) : {} & `SF` extends { `colorTemperature`: ``true``  } ? typeof [`ColorTemperatureComponent`](exports_cluster.ColorControl.md#colortemperaturecomponent) : {} & `SF` extends { `enhancedHue`: ``true``  } ? typeof [`EnhancedHueComponent`](exports_cluster.ColorControl.md#enhancedhuecomponent) : {} & `SF` extends { `colorLoop`: ``true``  } ? typeof [`ColorLoopComponent`](exports_cluster.ColorControl.md#colorloopcomponent) : {} & `SF` extends { `hueSaturation`: ``true``  } \| { `xy`: ``true``  } \| { `colorTemperature`: ``true``  } ? typeof [`HueSaturationOrXyOrColorTemperatureComponent`](exports_cluster.ColorControl.md#huesaturationorxyorcolortemperaturecomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:2329

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag-1) ; `xy`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `colorCapabilities`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `cl`: [`BitFlag`](exports_schema.md#bitflag-1) ; `ct`: [`BitFlag`](exports_schema.md#bitflag-1) ; `ehue`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hs`: [`BitFlag`](exports_schema.md#bitflag-1) ; `xy`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `colorMode`: [`Attribute`](exports_cluster.md#attribute)<[`ColorMode`](../enums/exports_cluster.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`DriftCompensation`](../enums/exports_cluster.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](exports_cluster.md#attribute)<[`EnhancedColorMode`](../enums/exports_cluster.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary4Intensity`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `primary4X`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary4Y`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary5Intensity`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `primary5X`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary5Y`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary6Intensity`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `primary6X`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary6Y`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all ColorControl clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:793

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag-1) ; `xy`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag-1) ; `xy`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.ColorControl.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag-1) ; `xy`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Color Control

Attributes and commands for controlling the color properties of a color-capable light.

ColorControlCluster supports optional features that you can enable with the ColorControlCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:1916

___

### ColorLoopComponent

• `Const` **ColorLoopComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `colorLoopActive`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `colorLoopDirection`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\>  }, { `colorLoopSet`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ColorControlCluster supports these elements if it supports feature ColorLoop.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:1773

___

### ColorTemperatureComponent

• `Const` **ColorTemperatureComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `colorTempPhysicalMaxMireds`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\>  }, { `moveColorTemperature`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToColorTemperature`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stepColorTemperature`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ColorControlCluster supports these elements if it supports feature ColorTemperature.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:1412

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag-1) ; `xy`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag-1) ; `xy`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `colorLoopSet`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `enhancedMoveHue`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `enhancedMoveToHue`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `enhancedMoveToHueAndSaturation`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `enhancedStepHue`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `moveColor`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `moveColorTemperature`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `moveHue`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `moveSaturation`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `moveToColor`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `moveToColorTemperature`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `moveToHue`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `moveToHueAndSaturation`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `moveToSaturation`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `stepColor`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `stepColorTemperature`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `stepHue`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `stepSaturation`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `stopMoveStep`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\>  }, {}\>

This cluster supports all ColorControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:2354

___

### EnhancedHueComponent

• `Const` **EnhancedHueComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `enhancedCurrentHue`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\>  }, { `enhancedMoveHue`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedStepHue`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ColorControlCluster supports these elements if it supports feature EnhancedHue.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:1617

___

### FeatureMap

• `Const` **FeatureMap**: `Object`

The value of the ColorControl featureMap attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.5

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cl` | [`BitFlag`](exports_schema.md#bitflag-1) | ColorLoop Color loop is supported. |
| `ct` | [`BitFlag`](exports_schema.md#bitflag-1) | ColorTemperature Supports specification of color temperature. |
| `ehue` | [`BitFlag`](exports_schema.md#bitflag-1) | EnhancedHue Enhanced hue is supported. |
| `hs` | [`BitFlag`](exports_schema.md#bitflag-1) | HueSaturation Supports color specification via hue/saturation. |
| `xy` | [`BitFlag`](exports_schema.md#bitflag-1) | Xy Supports color specification via XY. |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:56

___

### HueSaturationComponent

• `Const` **HueSaturationComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `currentHue`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `currentSaturation`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\>  }, { `moveHue`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveSaturation`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToHue`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToSaturation`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stepHue`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stepSaturation`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ColorControlCluster supports these elements if it supports feature HueSaturation.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:1116

___

### HueSaturationOrXyOrColorTemperatureComponent

• `Const` **HueSaturationOrXyOrColorTemperatureComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `stopMoveStep`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ColorControlCluster supports these elements if it supports features HueSaturation, Xy or ColorTemperature.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:1888

___

### Options

• `Const` **Options**: `Object`

The value of the ColorControl options attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.7.10

#### Type declaration

| Name | Type |
| :------ | :------ |
| `executeIfOff` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:37

___

### TlvColorLoopSetRequest

• `Const` **TlvColorLoopSetRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl colorLoopSet command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.19

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:676

___

### TlvEnhancedMoveHueRequest

• `Const` **TlvEnhancedMoveHueRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl enhancedMoveHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.16

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:546

___

### TlvEnhancedMoveToHueAndSaturationRequest

• `Const` **TlvEnhancedMoveToHueAndSaturationRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl enhancedMoveToHueAndSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.18

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:612

___

### TlvEnhancedMoveToHueRequest

• `Const` **TlvEnhancedMoveToHueRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl enhancedMoveToHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.15

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:513

___

### TlvEnhancedStepHueRequest

• `Const` **TlvEnhancedStepHueRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl enhancedStepHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.17

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:575

___

### TlvMoveColorRequest

• `Const` **TlvMoveColorRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl moveColor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.12

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:327

___

### TlvMoveColorTemperatureRequest

• `Const` **TlvMoveColorTemperatureRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl moveColorTemperature command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.21

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:391

___

### TlvMoveHueRequest

• `Const` **TlvMoveHueRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl moveHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:142

___

### TlvMoveSaturationRequest

• `Const` **TlvMoveSaturationRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl moveSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:230

___

### TlvMoveToColorRequest

• `Const` **TlvMoveToColorRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl moveToColor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.11

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:311

___

### TlvMoveToColorTemperatureRequest

• `Const` **TlvMoveToColorTemperatureRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl moveToColorTemperature command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.14

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:376

___

### TlvMoveToHueAndSaturationRequest

• `Const` **TlvMoveToHueAndSaturationRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl moveToHueAndSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.10

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:295

___

### TlvMoveToHueRequest

• `Const` **TlvMoveToHueRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl moveToHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:102

___

### TlvMoveToSaturationRequest

• `Const` **TlvMoveToSaturationRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl moveToSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.7

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:215

___

### TlvStepColorRequest

• `Const` **TlvStepColorRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl stepColor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.13

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:354

___

### TlvStepColorTemperatureRequest

• `Const` **TlvStepColorTemperatureRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl stepColorTemperature command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.22

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:450

___

### TlvStepHueRequest

• `Const` **TlvStepHueRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl stepHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:178

___

### TlvStepSaturationRequest

• `Const` **TlvStepSaturationRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl stepSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.9

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:260

___

### TlvStopMoveStepRequest

• `Const` **TlvStopMoveStepRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ColorControl stopMoveStep command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.20

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:745

___

### UpdateFlags

• `Const` **UpdateFlags**: `Object`

The value of ColorControl.updateFlags

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.19.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reserved` | [`BitField`](exports_schema.md#bitfield-1) |
| `updateAction` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `updateDirection` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `updateStartHue` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `updateTime` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:645

___

### XyComponent

• `Const` **XyComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `currentX`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `currentY`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\>  }, { `moveColor`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToColor`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stepColor`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ColorControlCluster supports these elements if it supports feature Xy.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ColorControlCluster.d.ts:1327
