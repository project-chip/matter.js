[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / MediaInput

# Namespace: MediaInput

[exports/cluster](exports_cluster.md).MediaInput

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.MediaInput.Feature.md)
- [InputType](../enums/exports_cluster.MediaInput.InputType.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.MediaInput.Cluster.md)
- [Complete](../interfaces/exports_cluster.MediaInput.Complete.md)
- [InputInfoStruct](../interfaces/exports_cluster.MediaInput.InputInfoStruct.md)
- [RenameInputRequest](../interfaces/exports_cluster.MediaInput.RenameInputRequest.md)
- [SelectInputRequest](../interfaces/exports_cluster.MediaInput.SelectInputRequest.md)

### Variables

- [Base](exports_cluster.MediaInput.md#base)
- [Cluster](exports_cluster.MediaInput.md#cluster)
- [ClusterInstance](exports_cluster.MediaInput.md#clusterinstance)
- [Complete](exports_cluster.MediaInput.md#complete)
- [CompleteInstance](exports_cluster.MediaInput.md#completeinstance)
- [NameUpdatesComponent](exports_cluster.MediaInput.md#nameupdatescomponent)
- [TlvInputInfoStruct](exports_cluster.MediaInput.md#tlvinputinfostruct)
- [TlvRenameInputRequest](exports_cluster.MediaInput.md#tlvrenameinputrequest)
- [TlvSelectInputRequest](exports_cluster.MediaInput.md#tlvselectinputrequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all MediaInput clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentInput`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } | - |
| `attributes.currentInput` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> | This field contains the value of the index field of the currently selected InputInfoStruct. **`See`** MatterSpecification.v11.Cluster § 6.9.3.2 |
| `attributes.inputList` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> | This list provides the media inputs supported by the device. **`See`** MatterSpecification.v11.Cluster § 6.9.3.1 |
| `commands` | \{ `hideInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } | - |
| `commands.hideInputStatus` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | Upon receipt, this shall hide the input list from the screen. **`See`** MatterSpecification.v11.Cluster § 6.9.4.3 |
| `commands.selectInput` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | Upon receipt, this shall change the media input on the device to the input at a specific index in the Input List. **`See`** MatterSpecification.v11.Cluster § 6.9.4.1 |
| `commands.showInputStatus` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | Upon receipt, this shall display the active status of the input list on screen. **`See`** MatterSpecification.v11.Cluster § 6.9.4.2 |
| `extensions` | readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] | This metadata controls which MediaInputCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.nameUpdates` | [`BitFlag`](exports_schema.md#bitflag) | NameUpdates Supports updates to the input names |
| `id` | ``1287`` | - |
| `name` | ``"MediaInput"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:145

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.MediaInput.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:370

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:372

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.MediaInput.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:254

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.MediaInput.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:487

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:489

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `hideInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `selectInput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.MediaInput.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:376

___

### NameUpdatesComponent

• `Const` **NameUpdatesComponent**: `Object`

A MediaInputCluster supports these elements if it supports feature NameUpdates.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `renameInput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.renameInput` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:115

___

### TlvInputInfoStruct

• `Const` **TlvInputInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This contains information about an input.

**`See`**

MatterSpecification.v11.Cluster § 6.9.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:56

___

### TlvRenameInputRequest

• `Const` **TlvRenameInputRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the MediaInput renameInput command

**`See`**

MatterSpecification.v11.Cluster § 6.9.4.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:18

___

### TlvSelectInputRequest

• `Const` **TlvSelectInputRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the MediaInput selectInput command

**`See`**

MatterSpecification.v11.Cluster § 6.9.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:96
