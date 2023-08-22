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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.PressureMeasurement.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `extended`: ``true``  } ? typeof [`ExtendedComponent`](exports_cluster.PressureMeasurement.md#extendedcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PressureMeasurementCluster.d.ts:194

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `extended`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `maxMeasuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all PressureMeasurement clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PressureMeasurementCluster.d.ts:26

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `extended`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `extended`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.PressureMeasurement.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `extended`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Pressure Measurement

This cluster provides an interface to pressure measurement functionality, including configuration and provision
of notifications of pressure measurements.

PressureMeasurementCluster supports optional features that you can enable with the
PressureMeasurementCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PressureMeasurementCluster.d.ts:128

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `extended`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `extended`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, {}\>

This cluster supports all PressureMeasurement features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PressureMeasurementCluster.d.ts:205

___

### ExtendedComponent

• `Const` **ExtendedComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `maxScaledValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `scale`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `scaledValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A PressureMeasurementCluster supports these elements if it supports feature Extended.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PressureMeasurementCluster.d.ts:74
