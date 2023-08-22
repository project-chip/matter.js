[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / SoftwareDiagnostics

# Namespace: SoftwareDiagnostics

[exports/cluster](exports_cluster.md).SoftwareDiagnostics

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.SoftwareDiagnostics.Feature.md)

### Type Aliases

- [Extension](exports_cluster.SoftwareDiagnostics.md#extension)

### Variables

- [Base](exports_cluster.SoftwareDiagnostics.md#base)
- [Cluster](exports_cluster.SoftwareDiagnostics.md#cluster)
- [Complete](exports_cluster.SoftwareDiagnostics.md#complete)
- [TlvSoftwareFaultEvent](exports_cluster.SoftwareDiagnostics.md#tlvsoftwarefaultevent)
- [TlvThreadMetricsStruct](exports_cluster.SoftwareDiagnostics.md#tlvthreadmetricsstruct)
- [WatermarksComponent](exports_cluster.SoftwareDiagnostics.md#watermarkscomponent)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.SoftwareDiagnostics.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `watermarks`: ``true``  } ? typeof [`WatermarksComponent`](exports_cluster.SoftwareDiagnostics.md#watermarkscomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:337

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `currentHeapFree`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)[], `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `softwareFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

These elements and properties are present in all SoftwareDiagnostics clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:86

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `softwareFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.SoftwareDiagnostics.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Software Diagnostics

The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may be used
by a Node to assist a user or Administrator in diagnosing potential problems. The Software Diagnostics Cluster
attempts to centralize all metrics that are relevant to the software that may be running on a Node.

SoftwareDiagnosticsCluster supports optional features that you can enable with the
SoftwareDiagnosticsCluster.with() factory method.

**`See`**

MatterCoreSpecificationV1_1 § 11.12

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:224

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `resetWatermarks`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\>  }, { `softwareFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

This cluster supports all SoftwareDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:348

___

### TlvSoftwareFaultEvent

• `Const` **TlvSoftwareFaultEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the SoftwareDiagnostics softwareFault event

**`See`**

MatterCoreSpecificationV1_1 § 11.12.8.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:58

___

### TlvThreadMetricsStruct

• `Const` **TlvThreadMetricsStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.12.5.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:13

___

### WatermarksComponent

• `Const` **WatermarksComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint`, `any`\>  }, { `resetWatermarks`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A SoftwareDiagnosticsCluster supports these elements if it supports feature Watermarks.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:181
