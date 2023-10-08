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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](exports_cluster.ColorControl.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `hueSaturation`: ``true``  } ? typeof [`HueSaturationComponent`](exports_cluster.ColorControl.md#huesaturationcomponent) : {} & `SF` extends { `xy`: ``true``  } ? typeof [`XyComponent`](exports_cluster.ColorControl.md#xycomponent) : {} & `SF` extends { `colorTemperature`: ``true``  } ? typeof [`ColorTemperatureComponent`](exports_cluster.ColorControl.md#colortemperaturecomponent) : {} & `SF` extends { `enhancedHue`: ``true``  } ? typeof [`EnhancedHueComponent`](exports_cluster.ColorControl.md#enhancedhuecomponent) : {} & `SF` extends { `colorLoop`: ``true``  } ? typeof [`ColorLoopComponent`](exports_cluster.ColorControl.md#colorloopcomponent) : {} & `SF` extends { `hueSaturation`: ``true``  } \| { `xy`: ``true``  } \| { `colorTemperature`: ``true``  } ? typeof [`HueSaturationOrXyOrColorTemperatureComponent`](exports_cluster.ColorControl.md#huesaturationorxyorcolortemperaturecomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:2690

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `colorCapabilities`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `colorMode`: [`Attribute`](exports_cluster.md#attribute)<[`ColorMode`](../enums/exports_cluster.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`DriftCompensation`](../enums/exports_cluster.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](exports_cluster.md#attribute)<[`EnhancedColorMode`](../enums/exports_cluster.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary4Intensity`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `primary4X`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary4Y`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary5Intensity`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `primary5X`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary5Y`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary6Intensity`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `primary6X`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary6Y`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\>  } ; `features`: { `colorLoop`: [`BitFlag`](exports_schema.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag-1) ; `xy`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``768`` ; `name`: ``"ColorControl"`` ; `revision`: ``5``  }\>

These elements and properties are present in all ColorControl clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:794

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: {} ; `features`: { `colorLoop`: [`BitFlag`](exports_schema.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag-1) ; `xy`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"ColorControl"`` ; `revision`: ``5`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `colorCapabilities`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `colorMode`: [`Attribute`](exports_cluster.md#attribute)<[`ColorMode`](../enums/exports_cluster.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`DriftCompensation`](../enums/exports_cluster.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](exports_cluster.md#attribute)<[`EnhancedColorMode`](../enums/exports_cluster.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary4Intensity`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `primary4X`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary4Y`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary5Intensity`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `primary5X`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary5Y`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary6Intensity`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `primary6X`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary6Y`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\>  } ; `features`: { `colorLoop`: [`BitFlag`](exports_schema.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag-1) ; `xy`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``768`` ; `name`: ``"ColorControl"`` ; `revision`: ``5``  }\>, ``"attributes"``\> & { `with`: <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.ColorControl.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag-1) ; `xy`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Color Control

Attributes and commands for controlling the color properties of a color-capable light.

ColorControlCluster supports optional features that you can enable with the ColorControlCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1940

___

### ColorLoopComponent

• `Const` **ColorLoopComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `colorLoopActive`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `colorLoopDirection`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\>  } ; `commands`: { `colorLoopSet`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature ColorLoop.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1792

___

### ColorTemperatureComponent

• `Const` **ColorTemperatureComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `colorTempPhysicalMaxMireds`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\>  } ; `commands`: { `moveColorTemperature`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToColorTemperature`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepColorTemperature`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature ColorTemperature.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1425

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.md#attribute)<`number`, `never`\> ; `colorCapabilities`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `colorLoopActive`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorLoopDirection`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorLoopStartEnhancedHue`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorLoopStoredEnhancedHue`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorLoopTime`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorMode`: [`Attribute`](exports_cluster.md#attribute)<[`ColorMode`](../enums/exports_cluster.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `colorTempPhysicalMaxMireds`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorTempPhysicalMinMireds`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorTemperatureMireds`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `compensationText`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`string`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentHue`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentSaturation`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentX`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentY`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `driftCompensation`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`DriftCompensation`](../enums/exports_cluster.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](exports_cluster.md#attribute)<[`EnhancedColorMode`](../enums/exports_cluster.ColorControl.EnhancedColorMode.md), `any`\> ; `enhancedCurrentHue`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `eventList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag-1) ; `xy`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `numberOfPrimaries`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `primary4Intensity`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `primary4X`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary4Y`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary5Intensity`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `primary5X`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary5Y`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary6Intensity`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `primary6X`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `primary6Y`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `whitePointX`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\>  } ; `commands`: { `colorLoopSet`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enhancedMoveHue`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enhancedMoveToHue`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enhancedMoveToHueAndSaturation`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enhancedStepHue`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveColor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveColorTemperature`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveHue`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveSaturation`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToColor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToColorTemperature`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToHue`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToHueAndSaturation`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToSaturation`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stepColor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stepColorTemperature`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stepHue`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stepSaturation`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stopMoveStep`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: { `colorLoop`: [`BitFlag`](exports_schema.md#bitflag-1) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag-1) ; `xy`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``768`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"ColorControl"`` ; `revision`: ``5``  }\>

This cluster supports all ColorControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:2715

___

### EnhancedHueComponent

• `Const` **EnhancedHueComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `enhancedCurrentHue`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\>  } ; `commands`: { `enhancedMoveHue`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedStepHue`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature EnhancedHue.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1633

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:57

___

### HueSaturationComponent

• `Const` **HueSaturationComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `currentHue`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `currentSaturation`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\>  } ; `commands`: { `moveHue`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveSaturation`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToHue`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToSaturation`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepHue`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepSaturation`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature HueSaturation.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1123

___

### HueSaturationOrXyOrColorTemperatureComponent

• `Const` **HueSaturationOrXyOrColorTemperatureComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `commands`: { `stopMoveStep`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports features HueSaturation, Xy or ColorTemperature.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1910

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:38

___

### TlvColorLoopSetRequest

• `Const` **TlvColorLoopSetRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl colorLoopSet command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.19

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:677

___

### TlvEnhancedMoveHueRequest

• `Const` **TlvEnhancedMoveHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl enhancedMoveHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.16

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:547

___

### TlvEnhancedMoveToHueAndSaturationRequest

• `Const` **TlvEnhancedMoveToHueAndSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl enhancedMoveToHueAndSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.18

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:613

___

### TlvEnhancedMoveToHueRequest

• `Const` **TlvEnhancedMoveToHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl enhancedMoveToHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.15

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:514

___

### TlvEnhancedStepHueRequest

• `Const` **TlvEnhancedStepHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl enhancedStepHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.17

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:576

___

### TlvMoveColorRequest

• `Const` **TlvMoveColorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveColor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.12

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:328

___

### TlvMoveColorTemperatureRequest

• `Const` **TlvMoveColorTemperatureRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveColorTemperature command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.21

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:392

___

### TlvMoveHueRequest

• `Const` **TlvMoveHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:143

___

### TlvMoveSaturationRequest

• `Const` **TlvMoveSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:231

___

### TlvMoveToColorRequest

• `Const` **TlvMoveToColorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToColor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:312

___

### TlvMoveToColorTemperatureRequest

• `Const` **TlvMoveToColorTemperatureRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToColorTemperature command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.14

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:377

___

### TlvMoveToHueAndSaturationRequest

• `Const` **TlvMoveToHueAndSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToHueAndSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:296

___

### TlvMoveToHueRequest

• `Const` **TlvMoveToHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:103

___

### TlvMoveToSaturationRequest

• `Const` **TlvMoveToSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:216

___

### TlvStepColorRequest

• `Const` **TlvStepColorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stepColor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.13

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:355

___

### TlvStepColorTemperatureRequest

• `Const` **TlvStepColorTemperatureRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stepColorTemperature command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.22

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:451

___

### TlvStepHueRequest

• `Const` **TlvStepHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stepHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:179

___

### TlvStepSaturationRequest

• `Const` **TlvStepSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stepSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:261

___

### TlvStopMoveStepRequest

• `Const` **TlvStopMoveStepRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stopMoveStep command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.20

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:746

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:646

___

### XyComponent

• `Const` **XyComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `currentX`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `currentY`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\>  } ; `commands`: { `moveColor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToColor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepColor`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature Xy.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1337
