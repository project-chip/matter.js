[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / SoftwareDiagnostics

# Namespace: SoftwareDiagnostics

[exports/cluster](exports_cluster.md).SoftwareDiagnostics

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.SoftwareDiagnostics.Feature.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.SoftwareDiagnostics.Cluster.md)
- [Complete](../interfaces/exports_cluster.SoftwareDiagnostics.Complete.md)
- [SoftwareFaultEvent](../interfaces/exports_cluster.SoftwareDiagnostics.SoftwareFaultEvent.md)
- [ThreadMetricsStruct](../interfaces/exports_cluster.SoftwareDiagnostics.ThreadMetricsStruct.md)

### Variables

- [Base](exports_cluster.SoftwareDiagnostics.md#base)
- [Cluster](exports_cluster.SoftwareDiagnostics.md#cluster)
- [ClusterInstance](exports_cluster.SoftwareDiagnostics.md#clusterinstance)
- [Complete](exports_cluster.SoftwareDiagnostics.md#complete)
- [CompleteInstance](exports_cluster.SoftwareDiagnostics.md#completeinstance)
- [TlvSoftwareFaultEvent](exports_cluster.SoftwareDiagnostics.md#tlvsoftwarefaultevent)
- [TlvThreadMetricsStruct](exports_cluster.SoftwareDiagnostics.md#tlvthreadmetricsstruct)
- [WatermarksComponent](exports_cluster.SoftwareDiagnostics.md#watermarkscomponent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all SoftwareDiagnostics clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentHeapFree`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } | - |
| `attributes.currentHeapFree` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> | The CurrentHeapFree attribute shall indicate the current amount of heap memory, in bytes, that are free for allocation. The effective amount may be smaller due to heap fragmentation or other reasons. **`See`** MatterSpecification.v11.Core § 11.12.6.2 |
| `attributes.currentHeapUsed` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> | The CurrentHeapUsed attribute shall indicate the current amount of heap memory, in bytes, that is being used. **`See`** MatterSpecification.v11.Core § 11.12.6.3 |
| `attributes.threadMetrics` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> | The ThreadMetrics attribute shall be a list of ThreadMetricsStruct structs. Each active thread on the Node shall be represented by a single entry within the ThreadMetrics attribute. **`See`** MatterSpecification.v11.Core § 11.12.6.1 |
| `events` | \{ `softwareFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } | - |
| `events.softwareFault` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The SoftwareFault Event shall be generated when a software fault takes place on the Node. The ID field shall be set to the ID of the software thread in which the last software fault occurred. The Name field shall be set to a manufacturer-specified name or prefix of the software thread in which the last software fault occurred. **`See`** MatterSpecification.v11.Core § 11.12.8.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }] | This metadata controls which SoftwareDiagnosticsCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.watermarks` | [`BitFlag`](exports_schema.md#bitflag) | Watermarks Node makes available the metrics for high watermark related to memory consumption. |
| `id` | ``52`` | - |
| `name` | ``"SoftwareDiagnostics"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:138

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.SoftwareDiagnostics.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:437

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:439

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }] ; `features`: \{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.SoftwareDiagnostics.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:283

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.SoftwareDiagnostics.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:561

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:563

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentHeapUsed`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `watermarks`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.SoftwareDiagnostics.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:443

___

### TlvSoftwareFaultEvent

• `Const` **TlvSoftwareFaultEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the SoftwareDiagnostics softwareFault event

**`See`**

MatterSpecification.v11.Core § 11.12.8.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:66

___

### TlvThreadMetricsStruct

• `Const` **TlvThreadMetricsStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Core § 11.12.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:16

___

### WatermarksComponent

• `Const` **WatermarksComponent**: `Object`

A SoftwareDiagnosticsCluster supports these elements if it supports feature Watermarks.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentHeapHighWatermark`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } |
| `attributes.currentHeapHighWatermark` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> |
| `commands` | \{ `resetWatermarks`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } |
| `commands.resetWatermarks` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:88
