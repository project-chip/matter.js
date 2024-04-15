[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [SoftwareDiagnostics](../modules/exports_cluster.SoftwareDiagnostics.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[SoftwareDiagnostics](../modules/exports_cluster.SoftwareDiagnostics.md).Cluster

Software Diagnostics

The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may be used
by a Node to assist a user or Administrator in diagnosing potential problems. The Software Diagnostics Cluster
attempts to centralize all metrics that are relevant to the software that may be running on a Node.

SoftwareDiagnosticsCluster supports optional features that you can enable with the
SoftwareDiagnosticsCluster.with() factory method.

**`See`**

MatterSpecification.v11.Core § 11.12

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.SoftwareDiagnostics.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.SoftwareDiagnostics.Cluster.md#attributes)
- [base](exports_cluster.SoftwareDiagnostics.Cluster.md#base)
- [commands](exports_cluster.SoftwareDiagnostics.Cluster.md#commands)
- [events](exports_cluster.SoftwareDiagnostics.Cluster.md#events)
- [extensions](exports_cluster.SoftwareDiagnostics.Cluster.md#extensions)
- [features](exports_cluster.SoftwareDiagnostics.Cluster.md#features)
- [id](exports_cluster.SoftwareDiagnostics.Cluster.md#id)
- [name](exports_cluster.SoftwareDiagnostics.Cluster.md#name)
- [revision](exports_cluster.SoftwareDiagnostics.Cluster.md#revision)
- [supportedFeatures](exports_cluster.SoftwareDiagnostics.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.SoftwareDiagnostics.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.SoftwareDiagnostics.Cluster.md#alter)
- [enable](exports_cluster.SoftwareDiagnostics.Cluster.md#enable)
- [set](exports_cluster.SoftwareDiagnostics.Cluster.md#set)
- [with](exports_cluster.SoftwareDiagnostics.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `watermarks`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `softwareFault` | [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\> | The SoftwareFault Event shall be generated when a software fault takes place on the Node. The ID field shall be set to the ID of the software thread in which the last software fault occurred. The Name field shall be set to a manufacturer-specified name or prefix of the software thread in which the last software fault occurred. **`See`** MatterSpecification.v11.Core § 11.12.8.1 |

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }]

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `watermarks` | [`BitFlag`](../modules/exports_schema.md#bitflag) | Watermarks Node makes available the metrics for high watermark related to memory consumption. |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``52``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"SoftwareDiagnostics"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }] ; `features`: \{ `watermarks`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }] ; `features`: \{ `watermarks`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }] ; `features`: \{ `watermarks`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }] ; `features`: \{ `watermarks`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }] ; `features`: \{ `watermarks`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }] ; `features`: \{ `watermarks`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }] ; `features`: \{ `watermarks`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }] ; `features`: \{ `watermarks`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }] ; `features`: \{ `watermarks`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }] ; `features`: \{ `watermarks`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentHeapFree`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapUsed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `threadMetrics`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHeapHighWatermark`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `watermarks`: ``true``  }  }] ; `features`: \{ `watermarks`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``52`` ; `name`: ``"SoftwareDiagnostics"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
