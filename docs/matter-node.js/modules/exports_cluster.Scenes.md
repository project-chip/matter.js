[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Scenes

# Namespace: Scenes

[exports/cluster](exports_cluster.md).Scenes

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.Scenes.Feature.md)

### Type Aliases

- [Extension](exports_cluster.Scenes.md#extension)

### Variables

- [Base](exports_cluster.Scenes.md#base)
- [Cluster](exports_cluster.Scenes.md#cluster)
- [Mode](exports_cluster.Scenes.md#mode)
- [NameSupport](exports_cluster.Scenes.md#namesupport)
- [TlvAddSceneRequest](exports_cluster.Scenes.md#tlvaddscenerequest)
- [TlvAddSceneResponse](exports_cluster.Scenes.md#tlvaddsceneresponse)
- [TlvAttributeValuePair](exports_cluster.Scenes.md#tlvattributevaluepair)
- [TlvCopySceneRequest](exports_cluster.Scenes.md#tlvcopyscenerequest)
- [TlvCopySceneResponse](exports_cluster.Scenes.md#tlvcopysceneresponse)
- [TlvExtensionFieldSet](exports_cluster.Scenes.md#tlvextensionfieldset)
- [TlvGetSceneMembershipRequest](exports_cluster.Scenes.md#tlvgetscenemembershiprequest)
- [TlvGetSceneMembershipResponse](exports_cluster.Scenes.md#tlvgetscenemembershipresponse)
- [TlvRecallSceneRequest](exports_cluster.Scenes.md#tlvrecallscenerequest)
- [TlvRemoveAllScenesRequest](exports_cluster.Scenes.md#tlvremoveallscenesrequest)
- [TlvRemoveAllScenesResponse](exports_cluster.Scenes.md#tlvremoveallscenesresponse)
- [TlvRemoveSceneRequest](exports_cluster.Scenes.md#tlvremovescenerequest)
- [TlvRemoveSceneResponse](exports_cluster.Scenes.md#tlvremovesceneresponse)
- [TlvStoreSceneRequest](exports_cluster.Scenes.md#tlvstorescenerequest)
- [TlvStoreSceneResponse](exports_cluster.Scenes.md#tlvstoresceneresponse)
- [TlvViewSceneRequest](exports_cluster.Scenes.md#tlvviewscenerequest)
- [TlvViewSceneResponse](exports_cluster.Scenes.md#tlvviewsceneresponse)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.Scenes.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:1488

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentGroup`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`GroupId`](exports_datatype.md#groupid), `any`\> ; `currentScene`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `lastConfiguredBy`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_NodeId_.md) \| ``null``, `any`\> ; `nameSupport`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `sceneCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `sceneValid`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `addScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `copyScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `enhancedAddScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `enhancedViewScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `getSceneMembership`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `recallScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `removeAllScenes`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `storeScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `viewScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``5`` ; `name`: ``"Scenes"`` ; `revision`: ``4``  }\>

These elements and properties are present in all Scenes clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:363

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `addScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `copyScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `enhancedAddScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `enhancedViewScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `getSceneMembership`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `recallScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `removeAllScenes`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `storeScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `viewScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `events`: {} ; `features`: \{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Scenes"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `sceneNames`: ``true``  } ; `unknown`: ``false``  } & `Omit`\<\{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `addScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `copyScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `enhancedAddScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `enhancedViewScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `getSceneMembership`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `recallScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `removeAllScenes`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `storeScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `viewScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `events`: {} ; `features`: \{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``5`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Scenes"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `sceneNames`: ``true``  } ; `unknown`: ``false``  }, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.Scenes.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

Scenes

The Scenes cluster provides attributes and commands for setting up and recalling scenes. Each scene corresponds
to a set of stored values of specified attributes for one or more clusters on the same end point as the Scenes
cluster.

In most cases scenes are associated with a particular group identifier. Scenes may also exist without a group,
in which case the value 0 replaces the group identifier. Note that extra care is required in these cases to
avoid a scene identifier collision, and that commands related to scenes without a group may only be unicast,
i.e., they may not be multicast or broadcast.

In a network supporting fabrics, scenes are scoped to the accessing fabric. When storing scene information,
implementations need to take care of this.

NOTE Support for Scenes cluster is provisional.

ScenesCluster supports optional features that you can enable with the ScenesCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:739

___

### Mode

• `Const` **Mode**: `Object`

The value of Scenes.mode

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.11.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `copyAllScenes` | [`BitFlag`](exports_schema.md#bitflag) |
| `reserved` | [`BitField`](exports_schema.md#bitfield) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:260

___

### NameSupport

• `Const` **NameSupport**: `Object`

The value of the Scenes nameSupport attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.7.5

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameSupport` | [`BitFlag`](exports_schema.md#bitflag) | The ability to store a name for a scene. |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:18

___

### TlvAddSceneRequest

• `Const` **TlvAddSceneRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes addScene command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:80

___

### TlvAddSceneResponse

• `Const` **TlvAddSceneResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.12

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:110

___

### TlvAttributeValuePair

• `Const` **TlvAttributeValuePair**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This data type indicates a combination of an identifier and the value of an attribute.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:29

___

### TlvCopySceneRequest

• `Const` **TlvCopySceneRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes copyScene command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:269

___

### TlvCopySceneResponse

• `Const` **TlvCopySceneResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The CopySceneResponse command allows a server to respond to a CopyScene command.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.20

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:322

___

### TlvExtensionFieldSet

• `Const` **TlvExtensionFieldSet**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This data type indicates for a given cluster a set of attributes and their values. Only attributes which have
the "S" designation in the Quality column of the cluster specification shall be used in the AttributeValueList
field.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.6.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:54

___

### TlvGetSceneMembershipRequest

• `Const` **TlvGetSceneMembershipRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes getSceneMembership command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:219

___

### TlvGetSceneMembershipResponse

• `Const` **TlvGetSceneMembershipResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The fields of the get scene membership response command have the following semantics:

The Capacity field shall contain the remaining capacity of the Scene Table of the server (for all groups). The
following values apply:

  • 0 - No further scenes may be added.

  • 0 < Capacity < 0xfe - Capacity holds the number of scenes that may be added.

  • 0xfe - At least 1 further scene may be added (exact number is unknown).

  • null - It is unknown if any further scenes may be added.

The Status field shall contain SUCCESS or ILLEGAL_COMMAND (the endpoint is not a member of the group) as
appropriate.

The GroupID field shall be set to the corresponding field of the received GetSceneMembership command.

If the status is not SUCCESS then the SceneList field shall be omitted, else the SceneList field shall contain
the identifiers of all the scenes in the Scene Table with the corresponding Group ID.

Zigbee: If the total number of scenes associated with this Group ID will cause the maximum payload length of a
frame to be exceeded, then the SceneList field shall contain only as many scenes as will fit.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.17

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:249

___

### TlvRecallSceneRequest

• `Const` **TlvRecallSceneRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes recallScene command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:209

___

### TlvRemoveAllScenesRequest

• `Const` **TlvRemoveAllScenesRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes removeAllScenes command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:177

___

### TlvRemoveAllScenesResponse

• `Const` **TlvRemoveAllScenesResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.15

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:183

___

### TlvRemoveSceneRequest

• `Const` **TlvRemoveSceneRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes removeScene command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:160

___

### TlvRemoveSceneResponse

• `Const` **TlvRemoveSceneResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.14

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:167

___

### TlvStoreSceneRequest

• `Const` **TlvStoreSceneRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes storeScene command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:192

___

### TlvStoreSceneResponse

• `Const` **TlvStoreSceneResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.16

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:199

___

### TlvViewSceneRequest

• `Const` **TlvViewSceneRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes viewScene command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:120

___

### TlvViewSceneResponse

• `Const` **TlvViewSceneResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.13

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:127
