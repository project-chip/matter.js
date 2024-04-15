[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / SoftwareDiagnostics

# Namespace: SoftwareDiagnostics

[cluster/export](cluster_export.md).SoftwareDiagnostics

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.SoftwareDiagnostics.Feature.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.SoftwareDiagnostics.Cluster.md)
- [Complete](../interfaces/cluster_export.SoftwareDiagnostics.Complete.md)
- [SoftwareFaultEvent](../interfaces/cluster_export.SoftwareDiagnostics.SoftwareFaultEvent.md)
- [ThreadMetricsStruct](../interfaces/cluster_export.SoftwareDiagnostics.ThreadMetricsStruct.md)

### Variables

- [Base](cluster_export.SoftwareDiagnostics.md#base)
- [Cluster](cluster_export.SoftwareDiagnostics.md#cluster)
- [ClusterInstance](cluster_export.SoftwareDiagnostics.md#clusterinstance)
- [Complete](cluster_export.SoftwareDiagnostics.md#complete)
- [CompleteInstance](cluster_export.SoftwareDiagnostics.md#completeinstance)
- [TlvSoftwareFaultEvent](cluster_export.SoftwareDiagnostics.md#tlvsoftwarefaultevent)
- [TlvThreadMetricsStruct](cluster_export.SoftwareDiagnostics.md#tlvthreadmetricsstruct)
- [WatermarksComponent](cluster_export.SoftwareDiagnostics.md#watermarkscomponent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all SoftwareDiagnostics clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentHeapFree`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } | - |
| `attributes.currentHeapFree` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> | The CurrentHeapFree attribute shall indicate the current amount of heap memory, in bytes, that are free for allocation. The effective amount may be smaller due to heap fragmentation or other reasons. **`See`** MatterSpecification.v11.Core § 11.12.6.2 |
| `attributes.currentHeapUsed` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> | The CurrentHeapUsed attribute shall indicate the current amount of heap memory, in bytes, that is being used. **`See`** MatterSpecification.v11.Core § 11.12.6.3 |
| `attributes.threadMetrics` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\> | The ThreadMetrics attribute shall be a list of ThreadMetricsStruct structs. Each active thread on the Node shall be represented by a single entry within the ThreadMetrics attribute. **`See`** MatterSpecification.v11.Core § 11.12.6.1 |
| `events` | \{ `softwareFault`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } | - |
| `events.softwareFault` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> | The SoftwareFault Event shall be generated when a software fault takes place on the Node. The ID field shall be set to the ID of the software thread in which the last software fault occurred. The Name field shall be set to a manufacturer-specified name or prefix of the software thread in which the last software fault occurred. **`See`** MatterSpecification.v11.Core § 11.12.8.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = WatermarksComponent; `flags`: \{ `watermarks`: ``true`` = true }  }] | This metadata controls which SoftwareDiagnosticsCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `watermarks`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.watermarks` | [`BitFlag`](schema_export.md#bitflag) | Watermarks Node makes available the metrics for high watermark related to memory consumption. |
| `id` | ``52`` | - |
| `name` | ``"SoftwareDiagnostics"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:165](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L165)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.SoftwareDiagnostics.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:243](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L243)

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:245](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L245)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = WatermarksComponent; `flags`: \{ `watermarks`: ``true`` = true }  }] ; `features`: \{ `watermarks`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``52`` = 0x34; `name`: ``"SoftwareDiagnostics"`` = "SoftwareDiagnostics"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.SoftwareDiagnostics.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:229](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L229)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.SoftwareDiagnostics.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:281](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L281)

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:283](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L283)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `watermarks`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``52``, ``"ClusterId"``\> = Cluster.id; `name`: ``"SoftwareDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.SoftwareDiagnostics.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:251](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L251)

___

### TlvSoftwareFaultEvent

• `Const` **TlvSoftwareFaultEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>

Body of the SoftwareDiagnostics softwareFault event

**`See`**

MatterSpecification.v11.Core § 11.12.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L88)

___

### TlvThreadMetricsStruct

• `Const` **TlvThreadMetricsStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

**`See`**

MatterSpecification.v11.Core § 11.12.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L33)

___

### WatermarksComponent

• `Const` **WatermarksComponent**: `Object`

A SoftwareDiagnosticsCluster supports these elements if it supports feature Watermarks.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentHeapHighWatermark`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\>  } |
| `attributes.currentHeapHighWatermark` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> |
| `commands` | \{ `resetWatermarks`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } |
| `commands.resetWatermarks` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L112)
