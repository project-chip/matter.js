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

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.SoftwareDiagnostics.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `watermarks`: ``true``  } ? typeof [`WatermarksComponent`](cluster_export.SoftwareDiagnostics.md#watermarkscomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:240](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L240)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.md#optionalevent)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `features`: \{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``52`` = 0x34; `name`: ``"SoftwareDiagnostics"`` = "SoftwareDiagnostics"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all SoftwareDiagnostics clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:112](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L112)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `currentHeapFree`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: {} ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.md#optionalevent)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `features`: \{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)\<``52`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.md#optionalevent)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `features`: \{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``52`` = 0x34; `name`: ``"SoftwareDiagnostics"`` = "SoftwareDiagnostics"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.SoftwareDiagnostics.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Software Diagnostics

The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may be used
by a Node to assist a user or Administrator in diagnosing potential problems. The Software Diagnostics Cluster
attempts to centralize all metrics that are relevant to the software that may be running on a Node.

SoftwareDiagnosticsCluster supports optional features that you can enable with the
SoftwareDiagnosticsCluster.with() factory method.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.12

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:218](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L218)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](cluster_export.md#attribute)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](cluster_export.md#command)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.md#optionalevent)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `watermarks`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``52`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"SoftwareDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all SoftwareDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:252](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L252)

___

### TlvSoftwareFaultEvent

• `Const` **TlvSoftwareFaultEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `faultRecording`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>

Body of the SoftwareDiagnostics softwareFault event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.12.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:81](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L81)

___

### TlvThreadMetricsStruct

• `Const` **TlvThreadMetricsStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.12.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:31](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L31)

___

### WatermarksComponent

• `Const` **WatermarksComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](cluster_export.md#attribute)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](cluster_export.md#command)\<`void`, `void`, `any`\>  }  }\>

A SoftwareDiagnosticsCluster supports these elements if it supports feature Watermarks.

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:170](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L170)
