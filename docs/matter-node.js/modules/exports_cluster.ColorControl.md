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

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.ColorControl.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `hueSaturation`: ``true``  } ? typeof [`HueSaturationComponent`](exports_cluster.ColorControl.md#huesaturationcomponent) : {} & `SF` extends \{ `xy`: ``true``  } ? typeof [`XyComponent`](exports_cluster.ColorControl.md#xycomponent) : {} & `SF` extends \{ `colorTemperature`: ``true``  } ? typeof [`ColorTemperatureComponent`](exports_cluster.ColorControl.md#colortemperaturecomponent) : {} & `SF` extends \{ `enhancedHue`: ``true``  } ? typeof [`EnhancedHueComponent`](exports_cluster.ColorControl.md#enhancedhuecomponent) : {} & `SF` extends \{ `colorLoop`: ``true``  } ? typeof [`ColorLoopComponent`](exports_cluster.ColorControl.md#colorloopcomponent) : {} & `SF` extends \{ `hueSaturation`: ``true``  } \| \{ `xy`: ``true``  } \| \{ `colorTemperature`: ``true``  } ? typeof [`HueSaturationOrXyOrColorTemperatureComponent`](exports_cluster.ColorControl.md#huesaturationorxyorcolortemperaturecomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:2690

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `colorCapabilities`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `colorMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ColorMode`](../enums/exports_cluster.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`DriftCompensation`](../enums/exports_cluster.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`EnhancedColorMode`](../enums/exports_cluster.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag) ; `xy`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``768`` ; `name`: ``"ColorControl"`` ; `revision`: ``5``  }\>

These elements and properties are present in all ColorControl clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:794

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: {} ; `features`: \{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag) ; `xy`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"ColorControl"`` ; `revision`: ``5`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `colorCapabilities`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `colorMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ColorMode`](../enums/exports_cluster.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`DriftCompensation`](../enums/exports_cluster.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`EnhancedColorMode`](../enums/exports_cluster.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag) ; `xy`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``768`` ; `name`: ``"ColorControl"`` ; `revision`: ``5``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.ColorControl.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag) ; `xy`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

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

• `Const` **ColorLoopComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `colorLoopActive`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopDirection`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature ColorLoop.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1792

___

### ColorTemperatureComponent

• `Const` **ColorTemperatureComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\>  } ; `commands`: \{ `moveColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature ColorTemperature.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1425

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `colorCapabilities`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `colorLoopActive`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorLoopDirection`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorLoopTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ColorMode`](../enums/exports_cluster.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `colorTemperatureMireds`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `compensationText`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`string`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `colorTemperature`: `boolean`  }]  } ; `currentHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentSaturation`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentX`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `xy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentY`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `xy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `driftCompensation`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`DriftCompensation`](../enums/exports_cluster.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`EnhancedColorMode`](../enums/exports_cluster.ColorControl.EnhancedColorMode.md), `any`\> ; `enhancedCurrentHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag) ; `xy`: [`BitFlag`](exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `colorTemperature`: `boolean`  }]  } ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorLoop`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enhancedMoveHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enhancedMoveToHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `enhancedStepHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `enhancedHue`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `xy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `xy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToHueAndSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stepColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `xy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stepColorTemperature`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stepHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stepSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stopMoveStep`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `hueSaturation`: `boolean`  }, \{ `xy`: `boolean`  }, \{ `colorTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `colorLoop`: [`BitFlag`](exports_schema.md#bitflag) ; `colorTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `enhancedHue`: [`BitFlag`](exports_schema.md#bitflag) ; `hueSaturation`: [`BitFlag`](exports_schema.md#bitflag) ; `xy`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``768`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"ColorControl"`` ; `revision`: ``5``  }\>

This cluster supports all ColorControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:2715

___

### EnhancedHueComponent

• `Const` **EnhancedHueComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `enhancedMoveHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enhancedStepHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

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
| `cl` | [`BitFlag`](exports_schema.md#bitflag) | ColorLoop Color loop is supported. |
| `ct` | [`BitFlag`](exports_schema.md#bitflag) | ColorTemperature Supports specification of color temperature. |
| `ehue` | [`BitFlag`](exports_schema.md#bitflag) | EnhancedHue Enhanced hue is supported. |
| `hs` | [`BitFlag`](exports_schema.md#bitflag) | HueSaturation Supports color specification via hue/saturation. |
| `xy` | [`BitFlag`](exports_schema.md#bitflag) | Xy Supports color specification via XY. |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:57

___

### HueSaturationComponent

• `Const` **HueSaturationComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `currentHue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `currentSaturation`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepHue`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepSaturation`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature HueSaturation.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1123

___

### HueSaturationOrXyOrColorTemperatureComponent

• `Const` **HueSaturationOrXyOrColorTemperatureComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

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
| `executeIfOff` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:38

___

### TlvColorLoopSetRequest

• `Const` **TlvColorLoopSetRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl colorLoopSet command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.19

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:677

___

### TlvEnhancedMoveHueRequest

• `Const` **TlvEnhancedMoveHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl enhancedMoveHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.16

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:547

___

### TlvEnhancedMoveToHueAndSaturationRequest

• `Const` **TlvEnhancedMoveToHueAndSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl enhancedMoveToHueAndSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.18

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:613

___

### TlvEnhancedMoveToHueRequest

• `Const` **TlvEnhancedMoveToHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl enhancedMoveToHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.15

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:514

___

### TlvEnhancedStepHueRequest

• `Const` **TlvEnhancedStepHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl enhancedStepHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.17

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:576

___

### TlvMoveColorRequest

• `Const` **TlvMoveColorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveColor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.12

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:328

___

### TlvMoveColorTemperatureRequest

• `Const` **TlvMoveColorTemperatureRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveColorTemperature command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.21

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:392

___

### TlvMoveHueRequest

• `Const` **TlvMoveHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:143

___

### TlvMoveSaturationRequest

• `Const` **TlvMoveSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:231

___

### TlvMoveToColorRequest

• `Const` **TlvMoveToColorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToColor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:312

___

### TlvMoveToColorTemperatureRequest

• `Const` **TlvMoveToColorTemperatureRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToColorTemperature command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.14

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:377

___

### TlvMoveToHueAndSaturationRequest

• `Const` **TlvMoveToHueAndSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToHueAndSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:296

___

### TlvMoveToHueRequest

• `Const` **TlvMoveToHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:103

___

### TlvMoveToSaturationRequest

• `Const` **TlvMoveToSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl moveToSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:216

___

### TlvStepColorRequest

• `Const` **TlvStepColorRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stepColor command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.13

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:355

___

### TlvStepColorTemperatureRequest

• `Const` **TlvStepColorTemperatureRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stepColorTemperature command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.22

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:451

___

### TlvStepHueRequest

• `Const` **TlvStepHueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stepHue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:179

___

### TlvStepSaturationRequest

• `Const` **TlvStepSaturationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ColorControl stepSaturation command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.2.11.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:261

___

### TlvStopMoveStepRequest

• `Const` **TlvStopMoveStepRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

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
| `reserved` | [`BitField`](exports_schema.md#bitfield) |
| `updateAction` | [`BitFlag`](exports_schema.md#bitflag) |
| `updateDirection` | [`BitFlag`](exports_schema.md#bitflag) |
| `updateStartHue` | [`BitFlag`](exports_schema.md#bitflag) |
| `updateTime` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:646

___

### XyComponent

• `Const` **XyComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `currentX`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `currentY`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepColor`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A ColorControlCluster supports these elements if it supports feature Xy.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:1337
