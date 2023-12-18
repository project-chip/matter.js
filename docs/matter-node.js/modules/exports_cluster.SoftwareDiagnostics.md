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

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.SoftwareDiagnostics.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `watermarks`: ``true``  } ? typeof [`WatermarksComponent`](exports_cluster.SoftwareDiagnostics.md#watermarkscomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:462

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>

These elements and properties are present in all SoftwareDiagnostics clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:87

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.SoftwareDiagnostics.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Software Diagnostics

The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may be used
by a Node to assist a user or Administrator in diagnosing potential problems. The Software Diagnostics Cluster
attempts to centralize all metrics that are relevant to the software that may be running on a Node.

SoftwareDiagnosticsCluster supports optional features that you can enable with the
SoftwareDiagnosticsCluster.with() factory method.

**`See`**

MatterCoreSpecificationV1_1 § 11.12

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:235

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.md#attribute)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.md#attribute)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.md#command)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``52`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>

This cluster supports all SoftwareDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:473

___

### TlvSoftwareFaultEvent

• `Const` **TlvSoftwareFaultEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the SoftwareDiagnostics softwareFault event

**`See`**

MatterCoreSpecificationV1_1 § 11.12.8.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:59

___

### TlvThreadMetricsStruct

• `Const` **TlvThreadMetricsStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.12.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:14

___

### WatermarksComponent

• `Const` **WatermarksComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.md#command)\<`void`, `void`, `any`\>  }  }\>

A SoftwareDiagnosticsCluster supports these elements if it supports feature Watermarks.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:189
