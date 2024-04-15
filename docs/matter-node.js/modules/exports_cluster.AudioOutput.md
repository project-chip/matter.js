[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / AudioOutput

# Namespace: AudioOutput

[exports/cluster](exports_cluster.md).AudioOutput

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.AudioOutput.Feature.md)
- [OutputType](../enums/exports_cluster.AudioOutput.OutputType.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.AudioOutput.Cluster.md)
- [Complete](../interfaces/exports_cluster.AudioOutput.Complete.md)
- [OutputInfoStruct](../interfaces/exports_cluster.AudioOutput.OutputInfoStruct.md)
- [RenameOutputRequest](../interfaces/exports_cluster.AudioOutput.RenameOutputRequest.md)
- [SelectOutputRequest](../interfaces/exports_cluster.AudioOutput.SelectOutputRequest.md)

### Variables

- [Base](exports_cluster.AudioOutput.md#base)
- [Cluster](exports_cluster.AudioOutput.md#cluster)
- [ClusterInstance](exports_cluster.AudioOutput.md#clusterinstance)
- [Complete](exports_cluster.AudioOutput.md#complete)
- [CompleteInstance](exports_cluster.AudioOutput.md#completeinstance)
- [NameUpdatesComponent](exports_cluster.AudioOutput.md#nameupdatescomponent)
- [TlvOutputInfoStruct](exports_cluster.AudioOutput.md#tlvoutputinfostruct)
- [TlvRenameOutputRequest](exports_cluster.AudioOutput.md#tlvrenameoutputrequest)
- [TlvSelectOutputRequest](exports_cluster.AudioOutput.md#tlvselectoutputrequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all AudioOutput clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentOutput`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } | - |
| `attributes.currentOutput` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> | This field contains the value of the index field of the currently selected OutputInfoStruct. **`See`** MatterSpecification.v11.Cluster § 6.5.3.2 |
| `attributes.outputList` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> | This list provides the outputs supported by the device. **`See`** MatterSpecification.v11.Cluster § 6.5.3.1 |
| `commands` | \{ `selectOutput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } | - |
| `commands.selectOutput` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 6.5.4 |
| `extensions` | readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] | This metadata controls which AudioOutputCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.nameUpdates` | [`BitFlag`](exports_schema.md#bitflag) | NameUpdates Supports updates to output names |
| `id` | ``1291`` | - |
| `name` | ``"AudioOutput"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:128

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.AudioOutput.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:301

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:303

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.AudioOutput.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:211

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.AudioOutput.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:390

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:392

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `renameOutput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `selectOutput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.AudioOutput.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:307

___

### NameUpdatesComponent

• `Const` **NameUpdatesComponent**: `Object`

A AudioOutputCluster supports these elements if it supports feature NameUpdates.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `renameOutput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.renameOutput` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:96

___

### TlvOutputInfoStruct

• `Const` **TlvOutputInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This contains information about an output.

**`See`**

MatterSpecification.v11.Cluster § 6.5.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:50

___

### TlvRenameOutputRequest

• `Const` **TlvRenameOutputRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the AudioOutput renameOutput command

**`See`**

MatterSpecification.v11.Cluster § 6.5.4.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:18

___

### TlvSelectOutputRequest

• `Const` **TlvSelectOutputRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the AudioOutput selectOutput command

**`See`**

MatterSpecification.v11.Cluster § 6.5.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:83
