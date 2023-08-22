[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / SoftwareDiagnostics

# Namespace: SoftwareDiagnostics

[cluster/export](cluster_export.md).SoftwareDiagnostics

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.SoftwareDiagnostics.Feature.md)

### Type Aliases

- [Extension](cluster_export.SoftwareDiagnostics.md#extension)

### Variables

- [Base](cluster_export.SoftwareDiagnostics.md#base)
- [Cluster](cluster_export.SoftwareDiagnostics.md#cluster)
- [Complete](cluster_export.SoftwareDiagnostics.md#complete)
- [TlvSoftwareFaultEvent](cluster_export.SoftwareDiagnostics.md#tlvsoftwarefaultevent)
- [TlvThreadMetricsStruct](cluster_export.SoftwareDiagnostics.md#tlvthreadmetricsstruct)
- [WatermarksComponent](cluster_export.SoftwareDiagnostics.md#watermarkscomponent)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.SoftwareDiagnostics.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `watermarks`: ``true``  } ? typeof [`WatermarksComponent`](cluster_export.SoftwareDiagnostics.md#watermarkscomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:245](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L245)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `currentHeapFree`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>[], `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), { `softwareFault`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\>  }\>

These elements and properties are present in all SoftwareDiagnostics clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:120](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L120)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `currentHeapFree`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster_export.Commands.md), { `softwareFault`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\>  }, <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.SoftwareDiagnostics.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Software Diagnostics

The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may be used
by a Node to assist a user or Administrator in diagnosing potential problems. The Software Diagnostics Cluster
attempts to centralize all metrics that are relevant to the software that may be running on a Node.

SoftwareDiagnosticsCluster supports optional features that you can enable with the
SoftwareDiagnosticsCluster.with() factory method.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.12

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:226](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L226)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number` \| `bigint`, `any`\>\> ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `resetWatermarks`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>\>  }, { `softwareFault`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\>  }\>

This cluster supports all SoftwareDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:257](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L257)

___

### TlvSoftwareFaultEvent

• `Const` **TlvSoftwareFaultEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>

Body of the SoftwareDiagnostics softwareFault event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.12.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:89](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L89)

___

### TlvThreadMetricsStruct

• `Const` **TlvThreadMetricsStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.12.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L39)

___

### WatermarksComponent

• `Const` **WatermarksComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `currentHeapHighWatermark`: [`Attribute`](cluster_export.md#attribute)<`number` \| `bigint`, `any`\>  }, { `resetWatermarks`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A SoftwareDiagnosticsCluster supports these elements if it supports feature Watermarks.

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:178](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L178)
