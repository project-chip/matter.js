[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / PressureMeasurement

# Namespace: PressureMeasurement

[exports/cluster](exports_cluster.md).PressureMeasurement

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.PressureMeasurement.Feature.md)

### Type Aliases

- [Extension](exports_cluster.PressureMeasurement.md#extension)

### Variables

- [Base](exports_cluster.PressureMeasurement.md#base)
- [Cluster](exports_cluster.PressureMeasurement.md#cluster)
- [Complete](exports_cluster.PressureMeasurement.md#complete)
- [ExtendedComponent](exports_cluster.PressureMeasurement.md#extendedcomponent)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](exports_cluster.PressureMeasurement.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `extended`: ``true``  } ? typeof [`ExtendedComponent`](exports_cluster.PressureMeasurement.md#extendedcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:265

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `maxMeasuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\>  } ; `features`: { `extended`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1027`` ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>

These elements and properties are present in all PressureMeasurement clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:27

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: {} ; `features`: { `extended`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `maxMeasuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\>  } ; `features`: { `extended`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1027`` ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>, ``"attributes"``\> & { `with`: <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.PressureMeasurement.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `extended`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Pressure Measurement

This cluster provides an interface to pressure measurement functionality, including configuration and provision
of notifications of pressure measurements.

PressureMeasurementCluster supports optional features that you can enable with the
PressureMeasurementCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 2.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:137

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.md#attribute)<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `extended`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `maxScaledValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `measuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `scale`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `scaledValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `tolerance`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\>  } ; `features`: { `extended`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1027`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>

This cluster supports all PressureMeasurement features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:276

___

### ExtendedComponent

• `Const` **ExtendedComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `maxScaledValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `scale`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `scaledValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\>  }  }\>

A PressureMeasurementCluster supports these elements if it supports feature Extended.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:81
