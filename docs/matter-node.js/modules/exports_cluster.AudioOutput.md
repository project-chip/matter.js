[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / AudioOutput

# Namespace: AudioOutput

[exports/cluster](exports_cluster.md).AudioOutput

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.AudioOutput.Feature.md)
- [OutputType](../enums/exports_cluster.AudioOutput.OutputType.md)

### Type Aliases

- [Extension](exports_cluster.AudioOutput.md#extension)

### Variables

- [Base](exports_cluster.AudioOutput.md#base)
- [Cluster](exports_cluster.AudioOutput.md#cluster)
- [Complete](exports_cluster.AudioOutput.md#complete)
- [NameUpdatesComponent](exports_cluster.AudioOutput.md#nameupdatescomponent)
- [TlvOutputInfoStruct](exports_cluster.AudioOutput.md#tlvoutputinfostruct)
- [TlvRenameOutputRequest](exports_cluster.AudioOutput.md#tlvrenameoutputrequest)
- [TlvSelectOutputRequest](exports_cluster.AudioOutput.md#tlvselectoutputrequest)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.AudioOutput.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `nameUpdates`: ``true``  } ? typeof [`NameUpdatesComponent`](exports_cluster.AudioOutput.md#nameupdatescomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:305

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](exports_cluster.md#attribute)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>

These elements and properties are present in all AudioOutput clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:86

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: {} ; `features`: \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"AudioOutput"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](exports_cluster.md#attribute)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.AudioOutput.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Audio Output

This cluster provides an interface for controlling the Output on a Video Player device such as a TV.

AudioOutputCluster supports optional features that you can enable with the AudioOutputCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:170

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `renameOutput`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `selectOutput`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1291`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>

This cluster supports all AudioOutput features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:316

___

### NameUpdatesComponent

• `Const` **NameUpdatesComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `renameOutput`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A AudioOutputCluster supports these elements if it supports feature NameUpdates.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:144

___

### TlvOutputInfoStruct

• `Const` **TlvOutputInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This contains information about an output.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.5.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:32

___

### TlvRenameOutputRequest

• `Const` **TlvRenameOutputRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the AudioOutput renameOutput command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.5.4.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:66

___

### TlvSelectOutputRequest

• `Const` **TlvSelectOutputRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the AudioOutput selectOutput command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.5.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:58
