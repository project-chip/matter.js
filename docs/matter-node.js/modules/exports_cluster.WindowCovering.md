[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / WindowCovering

# Namespace: WindowCovering

[exports/cluster](exports_cluster.md).WindowCovering

## Table of contents

### Enumerations

- [EndProductType](../enums/exports_cluster.WindowCovering.EndProductType.md)
- [Feature](../enums/exports_cluster.WindowCovering.Feature.md)
- [MovementStatus](../enums/exports_cluster.WindowCovering.MovementStatus.md)
- [WindowCoveringType](../enums/exports_cluster.WindowCovering.WindowCoveringType.md)

### Type Aliases

- [Extension](exports_cluster.WindowCovering.md#extension)

### Variables

- [Base](exports_cluster.WindowCovering.md#base)
- [Cluster](exports_cluster.WindowCovering.md#cluster)
- [Complete](exports_cluster.WindowCovering.md#complete)
- [ConfigStatus](exports_cluster.WindowCovering.md#configstatus)
- [LiftAndAbsolutePositionComponent](exports_cluster.WindowCovering.md#liftandabsolutepositioncomponent)
- [LiftAndPositionAwareLiftAndAbsolutePositionComponent](exports_cluster.WindowCovering.md#liftandpositionawareliftandabsolutepositioncomponent)
- [LiftAndPositionAwareLiftComponent](exports_cluster.WindowCovering.md#liftandpositionawareliftcomponent)
- [LiftComponent](exports_cluster.WindowCovering.md#liftcomponent)
- [Mode](exports_cluster.WindowCovering.md#mode)
- [OperationalStatus](exports_cluster.WindowCovering.md#operationalstatus)
- [SafetyStatus](exports_cluster.WindowCovering.md#safetystatus)
- [TiltAndAbsolutePositionComponent](exports_cluster.WindowCovering.md#tiltandabsolutepositioncomponent)
- [TiltAndPositionAwareTiltAndAbsolutePositionComponent](exports_cluster.WindowCovering.md#tiltandpositionawaretiltandabsolutepositioncomponent)
- [TiltAndPositionAwareTiltComponent](exports_cluster.WindowCovering.md#tiltandpositionawaretiltcomponent)
- [TiltComponent](exports_cluster.WindowCovering.md#tiltcomponent)
- [TlvGoToLiftPercentageRequest](exports_cluster.WindowCovering.md#tlvgotoliftpercentagerequest)
- [TlvGoToLiftValueRequest](exports_cluster.WindowCovering.md#tlvgotoliftvaluerequest)
- [TlvGoToTiltPercentageRequest](exports_cluster.WindowCovering.md#tlvgototiltpercentagerequest)
- [TlvGoToTiltValueRequest](exports_cluster.WindowCovering.md#tlvgototiltvaluerequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](exports_cluster.WindowCovering.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `absolutePosition`: ``true`` ; `lift`: ``true`` ; `positionAwareLift`: ``true``  } ? typeof [`LiftAndPositionAwareLiftAndAbsolutePositionComponent`](exports_cluster.WindowCovering.md#liftandpositionawareliftandabsolutepositioncomponent) : {} & `SF` extends { `absolutePosition`: ``true`` ; `positionAwareTilt`: ``true`` ; `tilt`: ``true``  } ? typeof [`TiltAndPositionAwareTiltAndAbsolutePositionComponent`](exports_cluster.WindowCovering.md#tiltandpositionawaretiltandabsolutepositioncomponent) : {} & `SF` extends { `lift`: ``true``  } ? typeof [`LiftComponent`](exports_cluster.WindowCovering.md#liftcomponent) : {} & `SF` extends { `tilt`: ``true``  } ? typeof [`TiltComponent`](exports_cluster.WindowCovering.md#tiltcomponent) : {} & `SF` extends { `lift`: ``true`` ; `positionAwareLift`: ``true``  } ? typeof [`LiftAndPositionAwareLiftComponent`](exports_cluster.WindowCovering.md#liftandpositionawareliftcomponent) : {} & `SF` extends { `positionAwareTilt`: ``true`` ; `tilt`: ``true``  } ? typeof [`TiltAndPositionAwareTiltComponent`](exports_cluster.WindowCovering.md#tiltandpositionawaretiltcomponent) : {} & `SF` extends { `absolutePosition`: ``true`` ; `lift`: ``true``  } ? typeof [`LiftAndAbsolutePositionComponent`](exports_cluster.WindowCovering.md#liftandabsolutepositioncomponent) : {} & `SF` extends { `absolutePosition`: ``true`` ; `tilt`: ``true``  } ? typeof [`TiltAndAbsolutePositionComponent`](exports_cluster.WindowCovering.md#tiltandabsolutepositioncomponent) : {} & `SF` extends { `lift`: ``false`` ; `positionAwareLift`: ``true``  } ? `never` : {} & `SF` extends { `positionAwareTilt`: ``true`` ; `tilt`: ``false``  } ? `never` : {} & `SF` extends { `lift`: ``false`` ; `tilt`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:1599

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `configStatus`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `endProductType`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`EndProductType`](../enums/exports_cluster.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `operationalStatus`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `safetyStatus`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `type`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`WindowCoveringType`](../enums/exports_cluster.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: { `downOrClose`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  } ; `features`: { `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``258`` ; `name`: ``"WindowCovering"`` ; `revision`: ``5``  }\>

These elements and properties are present in all WindowCovering clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:305

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: { `downOrClose`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  } ; `events`: {} ; `features`: { `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"WindowCovering"`` ; `revision`: ``5`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `configStatus`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `endProductType`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`EndProductType`](../enums/exports_cluster.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `operationalStatus`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `safetyStatus`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `type`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`WindowCoveringType`](../enums/exports_cluster.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: { `downOrClose`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  } ; `features`: { `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``258`` ; `name`: ``"WindowCovering"`` ; `revision`: ``5``  }\>, ``"attributes"``\> & { `with`: <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.WindowCovering.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Window Covering

The window covering cluster provides an interface for controlling and adjusting automatic window coverings such
as drapery motors, automatic shades, curtains and blinds.

WindowCoveringCluster supports optional features that you can enable with the WindowCoveringCluster.with()
factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:910

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.md#attribute)<`number`, `never`\> ; `configStatus`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `currentPositionLift`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentPositionLiftPercent100ths`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentPositionLiftPercentage`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentPositionTilt`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentPositionTiltPercent100ths`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentPositionTiltPercentage`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `endProductType`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`EndProductType`](../enums/exports_cluster.WindowCovering.EndProductType.md), `any`\> ; `eventList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `installedClosedLimitLift`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `installedClosedLimitTilt`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `installedOpenLimitLift`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `installedOpenLimitTilt`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `mode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `numberOfActuationsLift`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfActuationsTilt`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `operationalStatus`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `safetyStatus`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `targetPositionTiltPercent100ths`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `type`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`WindowCoveringType`](../enums/exports_cluster.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: { `downOrClose`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `goToLiftPercentage`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `goToLiftValue`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `goToTiltPercentage`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `goToTiltValue`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `stopMotion`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  } ; `features`: { `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``258`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"WindowCovering"`` ; `revision`: ``5``  }\>

This cluster supports all WindowCovering features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:1641

___

### ConfigStatus

• `Const` **ConfigStatus**: `Object`

The value of the WindowCovering configStatus attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.5.8

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `liftEncoderControlled` | [`BitFlag`](exports_schema.md#bitflag-1) | Encoder - Lift: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for positioning the height of the window covering. |
| `liftMovementReversed` | [`BitFlag`](exports_schema.md#bitflag-1) | Reversal: This status bit identifies if the directions of the lift/slide movements have been reversed in order for commands (e.g: Open, Close, GoTos) to match the physical installation conditionsThis bit can be adjusted by setting the appropriate reversal bit value in the Mode attribute |
| `liftPositionAware` | [`BitFlag`](exports_schema.md#bitflag-1) | Control - Lift: This status bit identifies if the window covering supports the Position Aware Lift Control |
| `onlineReserved` | [`BitFlag`](exports_schema.md#bitflag-1) | deprecated |
| `operational` | [`BitFlag`](exports_schema.md#bitflag-1) | Operational: This status bit defines if the Window Covering is operational.The SafetyStatus & Mode attributes might affect this bit |
| `tiltEncoderControlled` | [`BitFlag`](exports_schema.md#bitflag-1) | Encoder - Tilt: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for tilting the window covering. |
| `tiltPositionAware` | [`BitFlag`](exports_schema.md#bitflag-1) | Control - Tilt: This status bit identifies if the window covering supports the Position Aware Tilt Control |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:34

___

### LiftAndAbsolutePositionComponent

• `Const` **LiftAndAbsolutePositionComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `commands`: { `goToLiftValue`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A WindowCoveringCluster supports these elements if it supports features Lift and AbsolutePosition.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:864

___

### LiftAndPositionAwareLiftAndAbsolutePositionComponent

• `Const` **LiftAndPositionAwareLiftAndAbsolutePositionComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `currentPositionLift`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `installedClosedLimitLift`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\>  }  }\>

A WindowCoveringCluster supports these elements if it supports features Lift, PositionAwareLift and
AbsolutePosition.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:605

___

### LiftAndPositionAwareLiftComponent

• `Const` **LiftAndPositionAwareLiftComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `currentPositionLiftPercent100ths`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\>  } ; `commands`: { `goToLiftPercentage`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A WindowCoveringCluster supports these elements if it supports features Lift and PositionAwareLift.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:755

___

### LiftComponent

• `Const` **LiftComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `numberOfActuationsLift`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\>  } ; `commands`: { `goToLiftPercentage`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A WindowCoveringCluster supports these elements if it supports feature Lift.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:676

___

### Mode

• `Const` **Mode**: `Object`

The value of the WindowCovering mode attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.5.21

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `calibrationMode` | [`BitFlag`](exports_schema.md#bitflag-1) | Disabled (0) or Enabled (1) placing the Window Covering into calibration Mode where limits are either setup using tools or learned by the Window Covering by doing self-calibration.If in calibration mode, all commands (e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, could be accepted and result in a self-calibration being initiated before the command is executed. In case the Window Covering does not have the ability or is not able to perform a self-calibration, the command SHOULD be ignored and a FAILURE status SHOULD be returned.In a write interaction, setting this bit to 0, while the device is in calibration mode, is not allowed and SHALL generate a FAILURE error status. In order to leave calibration mode, the device must perform its calibration routine, either as a self- calibration or assisted by external tool(s), depending on the device/manufacturer implementation.A manufacturer might choose to set the operational bit to its not operational value, if applicable during calibration mode |
| `ledFeedback` | [`BitFlag`](exports_schema.md#bitflag-1) | Disables (0) or Enables (1) the display of any feedback LEDs resident especially on the packaging of an endpoint where they may cause distraction to the occupant. |
| `maintenanceMode` | [`BitFlag`](exports_schema.md#bitflag-1) | Disables (0) or Enables (1) placing the Window Covering into Maintenance Mode where it cannot be moved over the network or by a switch connected to a Local Switch Input.While in maintenance mode, all commands (e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, must be ignored and respond with a BUSY status. Additionally, the operational bit of the ConfigStatus attribute should be set to its not operational value. |
| `motorDirectionReversed` | [`BitFlag`](exports_schema.md#bitflag-1) | Disables (0) or Enables (1) Lift reversal |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:142

___

### OperationalStatus

• `Const` **OperationalStatus**: `Object`

The value of the WindowCovering operationalStatus attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.5.15

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `global` | [`BitFieldEnum`](exports_schema.md#bitfieldenum-1)<[`MovementStatus`](../enums/exports_cluster.WindowCovering.MovementStatus.md)\> | Movement status of the cover |
| `lift` | [`BitFieldEnum`](exports_schema.md#bitfieldenum-1)<[`MovementStatus`](../enums/exports_cluster.WindowCovering.MovementStatus.md)\> | Movement status of the cover's lift function |
| `tilt` | [`BitFieldEnum`](exports_schema.md#bitfieldenum-1)<[`MovementStatus`](../enums/exports_cluster.WindowCovering.MovementStatus.md)\> | Movement status of the cover's tilt function |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:74

___

### SafetyStatus

• `Const` **SafetyStatus**: `Object`

The value of the WindowCovering safetyStatus attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.5.22

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `failedCommunication` | [`BitFlag`](exports_schema.md#bitflag-1) | Communication failure to sensors or other safety equipment. |
| `hardwareFailure` | [`BitFlag`](exports_schema.md#bitflag-1) | PCB, fuse and other electrics problems. |
| `manualOperation` | [`BitFlag`](exports_schema.md#bitflag-1) | Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled). |
| `motorJammed` | [`BitFlag`](exports_schema.md#bitflag-1) | Mechanical problem related to the motor(s) detected. |
| `obstacleDetected` | [`BitFlag`](exports_schema.md#bitflag-1) | An obstacle is preventing actuator movement. |
| `positionFailure` | [`BitFlag`](exports_schema.md#bitflag-1) | Device has failed to reach the desired position. e.g. with Position Aware device, time expired before TargetPosition is reached. |
| `power` | [`BitFlag`](exports_schema.md#bitflag-1) | Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power might not be fully available at the moment. |
| `protection` | [`BitFlag`](exports_schema.md#bitflag-1) | Protection is activated. |
| `remoteLockout` | [`BitFlag`](exports_schema.md#bitflag-1) | Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range. |
| `stopInput` | [`BitFlag`](exports_schema.md#bitflag-1) | Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335). |
| `tamperDetection` | [`BitFlag`](exports_schema.md#bitflag-1) | Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without its actuator(s). |
| `thermalProtection` | [`BitFlag`](exports_schema.md#bitflag-1) | Motor(s) and/or electric circuit thermal protection activated. |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:178

___

### TiltAndAbsolutePositionComponent

• `Const` **TiltAndAbsolutePositionComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `commands`: { `goToTiltValue`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A WindowCoveringCluster supports these elements if it supports features Tilt and AbsolutePosition.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:883

___

### TiltAndPositionAwareTiltAndAbsolutePositionComponent

• `Const` **TiltAndPositionAwareTiltAndAbsolutePositionComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `currentPositionTilt`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\>  }  }\>

A WindowCoveringCluster supports these elements if it supports features Tilt, PositionAwareTilt and
AbsolutePosition.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:641

___

### TiltAndPositionAwareTiltComponent

• `Const` **TiltAndPositionAwareTiltComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `currentPositionTiltPercent100ths`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\>  } ; `commands`: { `goToTiltPercentage`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A WindowCoveringCluster supports these elements if it supports features Tilt and PositionAwareTilt.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:809

___

### TiltComponent

• `Const` **TiltComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `numberOfActuationsTilt`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\>  } ; `commands`: { `goToTiltPercentage`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A WindowCoveringCluster supports these elements if it supports feature Tilt.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:715

___

### TlvGoToLiftPercentageRequest

• `Const` **TlvGoToLiftPercentageRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the WindowCovering goToLiftPercentage command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.6.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:236

___

### TlvGoToLiftValueRequest

• `Const` **TlvGoToLiftValueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the WindowCovering goToLiftValue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:254

___

### TlvGoToTiltPercentageRequest

• `Const` **TlvGoToTiltPercentageRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the WindowCovering goToTiltPercentage command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.6.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:245

___

### TlvGoToTiltValueRequest

• `Const` **TlvGoToTiltValueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the WindowCovering goToTiltValue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.6.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:262
