[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / MediaInput

# Namespace: MediaInput

[exports/cluster](exports_cluster.md).MediaInput

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.MediaInput.Feature.md)
- [InputType](../enums/exports_cluster.MediaInput.InputType.md)

### Type Aliases

- [Extension](exports_cluster.MediaInput.md#extension)

### Variables

- [Base](exports_cluster.MediaInput.md#base)
- [Cluster](exports_cluster.MediaInput.md#cluster)
- [Complete](exports_cluster.MediaInput.md#complete)
- [NameUpdatesComponent](exports_cluster.MediaInput.md#nameupdatescomponent)
- [TlvInputInfoStruct](exports_cluster.MediaInput.md#tlvinputinfostruct)
- [TlvRenameInputRequest](exports_cluster.MediaInput.md#tlvrenameinputrequest)
- [TlvSelectInputRequest](exports_cluster.MediaInput.md#tlvselectinputrequest)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.MediaInput.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `nameUpdates`: ``true``  } ? typeof [`NameUpdatesComponent`](exports_cluster.MediaInput.md#nameupdatescomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:406

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>

These elements and properties are present in all MediaInput clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:105

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `hideInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `events`: {} ; `features`: \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"MediaInput"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.MediaInput.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

Media Input

This cluster provides an interface for controlling the Input Selector on a media device such as a Video Player.

MediaInputCluster supports optional features that you can enable with the MediaInputCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:215

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `hideInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `selectInput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``1287`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>

This cluster supports all MediaInput features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:417

___

### NameUpdatesComponent

• `Const` **NameUpdatesComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `renameInput`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A MediaInputCluster supports these elements if it supports feature NameUpdates.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:191

___

### TlvInputInfoStruct

• `Const` **TlvInputInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This contains information about an input.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.9.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:38

___

### TlvRenameInputRequest

• `Const` **TlvRenameInputRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the MediaInput renameInput command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.9.4.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:85

___

### TlvSelectInputRequest

• `Const` **TlvSelectInputRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the MediaInput selectInput command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.9.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:71
