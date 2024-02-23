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

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>

These elements and properties are present in all SoftwareDiagnostics clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:87

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: \{ `softwareFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.SoftwareDiagnostics.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

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

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentHeapUsed`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``52`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>

This cluster supports all SoftwareDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:473

___

### TlvSoftwareFaultEvent

• `Const` **TlvSoftwareFaultEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the SoftwareDiagnostics softwareFault event

**`See`**

MatterCoreSpecificationV1_1 § 11.12.8.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:59

___

### TlvThreadMetricsStruct

• `Const` **TlvThreadMetricsStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.12.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:14

___

### WatermarksComponent

• `Const` **WatermarksComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  }\>

A SoftwareDiagnosticsCluster supports these elements if it supports feature Watermarks.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:189
