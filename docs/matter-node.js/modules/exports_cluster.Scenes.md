[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Scenes

# Namespace: Scenes

[exports/cluster](exports_cluster.md).Scenes

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.Scenes.Feature.md)

### Interfaces

- [AddSceneRequest](../interfaces/exports_cluster.Scenes.AddSceneRequest.md)
- [AddSceneResponse](../interfaces/exports_cluster.Scenes.AddSceneResponse.md)
- [AttributeValuePair](../interfaces/exports_cluster.Scenes.AttributeValuePair.md)
- [Cluster](../interfaces/exports_cluster.Scenes.Cluster.md)
- [CopySceneRequest](../interfaces/exports_cluster.Scenes.CopySceneRequest.md)
- [CopySceneResponse](../interfaces/exports_cluster.Scenes.CopySceneResponse.md)
- [ExtensionFieldSet](../interfaces/exports_cluster.Scenes.ExtensionFieldSet.md)
- [GetSceneMembershipRequest](../interfaces/exports_cluster.Scenes.GetSceneMembershipRequest.md)
- [GetSceneMembershipResponse](../interfaces/exports_cluster.Scenes.GetSceneMembershipResponse.md)
- [RecallSceneRequest](../interfaces/exports_cluster.Scenes.RecallSceneRequest.md)
- [RemoveAllScenesRequest](../interfaces/exports_cluster.Scenes.RemoveAllScenesRequest.md)
- [RemoveAllScenesResponse](../interfaces/exports_cluster.Scenes.RemoveAllScenesResponse.md)
- [RemoveSceneRequest](../interfaces/exports_cluster.Scenes.RemoveSceneRequest.md)
- [RemoveSceneResponse](../interfaces/exports_cluster.Scenes.RemoveSceneResponse.md)
- [StoreSceneRequest](../interfaces/exports_cluster.Scenes.StoreSceneRequest.md)
- [StoreSceneResponse](../interfaces/exports_cluster.Scenes.StoreSceneResponse.md)
- [ViewSceneRequest](../interfaces/exports_cluster.Scenes.ViewSceneRequest.md)
- [ViewSceneResponse](../interfaces/exports_cluster.Scenes.ViewSceneResponse.md)

### Variables

- [Base](exports_cluster.Scenes.md#base)
- [Cluster](exports_cluster.Scenes.md#cluster)
- [ClusterInstance](exports_cluster.Scenes.md#clusterinstance)
- [Complete](exports_cluster.Scenes.md#complete)
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

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all Scenes clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentGroup`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`GroupId`](exports_datatype.md#groupid), `any`\> ; `currentScene`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `lastConfiguredBy`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_NodeId_.md) \| ``null``, `any`\> ; `nameSupport`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `sceneCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `sceneValid`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\>  } | - |
| `attributes.currentGroup` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`GroupId`](exports_datatype.md#groupid), `any`\> | The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene last invoked is not associated with a group. **`See`** MatterSpecification.v11.Cluster § 1.4.7.3 |
| `attributes.currentScene` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> | The CurrentScene attribute holds the scene identifier of the scene last invoked. **`See`** MatterSpecification.v11.Cluster § 1.4.7.2 |
| `attributes.lastConfiguredBy` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_NodeId_.md) \| ``null``, `any`\> | The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node that last configured the Scene Table. The null value indicates that the server has not been configured, or that the identifier of the node that last configured the Scenes cluster is not known. **`See`** MatterSpecification.v11.Cluster § 1.4.7.6 |
| `attributes.nameSupport` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | This attribute provides legacy, read-only access to whether the Scene Names feature is supported. The most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall be 0. **`See`** MatterSpecification.v11.Cluster § 1.4.7.5 |
| `attributes.sceneCount` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> | The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table. **`See`** MatterSpecification.v11.Cluster § 1.4.7.1 |
| `attributes.sceneValid` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> | The SceneValid attribute indicates whether the state of the server corresponds to that associated with the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, FALSE indicates that they are not valid. Before a scene has been stored or recalled, this attribute is set to FALSE. After a successful StoreScene or RecallScene command it is set to TRUE. If, after a scene is stored or recalled, the state of the server is modified, this attribute is set to FALSE. **`See`** MatterSpecification.v11.Cluster § 1.4.7.4 |
| `commands` | \{ `addScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `copyScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `enhancedAddScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `enhancedViewScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `getSceneMembership`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `recallScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `removeAllScenes`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `storeScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `viewScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } | - |
| `commands.addScene` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | It is not mandatory for an extension field set to be included in the command for every cluster on that endpoint that has a defined extension field set. Extension field sets may be omitted, including the case of no extension field sets at all. **`See`** MatterSpecification.v11.Cluster § 1.4.9.2 |
| `commands.copyScene` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to another group/scene identifier pair. **`See`** MatterSpecification.v11.Cluster § 1.4.9.11 |
| `commands.enhancedAddScene` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the AddScene command. This command shall have the same data fields as the AddScene command, with the following difference: The TransitionTime data field shall be measured in tenths of a second rather than in seconds. **`See`** MatterSpecification.v11.Cluster § 1.4.9.9 |
| `commands.enhancedViewScene` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time than the ViewScene command. This command shall have the same data fields as the ViewScene command. **`See`** MatterSpecification.v11.Cluster § 1.4.9.10 |
| `commands.getSceneMembership` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The GetSceneMembership command can be used to find an unused scene identifier within a certain group when no commissioning tool is in the network, or for a commissioning tool to get the used scene identifiers within a certain group, for the endpoint that implements this cluster. **`See`** MatterSpecification.v11.Cluster § 1.4.9.8 |
| `commands.recallScene` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.4.9.7 |
| `commands.removeAllScenes` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.4.9.5 |
| `commands.removeScene` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.4.9.4 |
| `commands.storeScene` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.4.9.6 |
| `commands.viewScene` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.4.9.3 |
| `extensions` | readonly [] | This metadata controls which ScenesCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.sceneNames` | [`BitFlag`](exports_schema.md#bitflag) | SceneNames The ability to store a name for a scene. |
| `id` | ``5`` | - |
| `name` | ``"Scenes"`` | - |
| `revision` | ``4`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:498

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.Scenes.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:1243

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:1245

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `currentGroup`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`GroupId`](exports_datatype.md#groupid), `any`\> ; `currentScene`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `lastConfiguredBy`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_NodeId_.md) \| ``null``, `any`\> ; `nameSupport`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `sceneCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `sceneValid`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `addScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `copyScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `enhancedAddScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `enhancedViewScene`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `getSceneMembership`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `recallScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `removeAllScenes`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `storeScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `viewScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``5`` ; `name`: ``"Scenes"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `sceneNames`: ``true``  }  }\>

**`See`**

[Cluster](exports_cluster.Scenes.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:860

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.Scenes.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:1246

___

### Mode

• `Const` **Mode**: `Object`

The value of Scenes.mode

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.11.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `copyAllScenes` | [`BitFlag`](exports_schema.md#bitflag) |
| `reserved` | [`BitField`](exports_schema.md#bitfield) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:381

___

### NameSupport

• `Const` **NameSupport**: `Object`

The value of the Scenes nameSupport attribute

**`See`**

MatterSpecification.v11.Cluster § 1.4.7.5

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameSupport` | [`BitFlag`](exports_schema.md#bitflag) | The ability to store a name for a scene. |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:20

___

### TlvAddSceneRequest

• `Const` **TlvAddSceneRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes addScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:98

___

### TlvAddSceneResponse

• `Const` **TlvAddSceneResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.12

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:135

___

### TlvAttributeValuePair

• `Const` **TlvAttributeValuePair**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This data type indicates a combination of an identifier and the value of an attribute.

**`See`**

MatterSpecification.v11.Cluster § 1.4.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:31

___

### TlvCopySceneRequest

• `Const` **TlvCopySceneRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes copyScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:390

___

### TlvCopySceneResponse

• `Const` **TlvCopySceneResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The CopySceneResponse command allows a server to respond to a CopyScene command.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.20

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:450

___

### TlvExtensionFieldSet

• `Const` **TlvExtensionFieldSet**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This data type indicates for a given cluster a set of attributes and their values. Only attributes which have
the "S" designation in the Quality column of the cluster specification shall be used in the AttributeValueList
field.

**`See`**

MatterSpecification.v11.Cluster § 1.4.6.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:63

___

### TlvGetSceneMembershipRequest

• `Const` **TlvGetSceneMembershipRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes getSceneMembership command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:304

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

MatterSpecification.v11.Cluster § 1.4.9.17

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:341

___

### TlvRecallSceneRequest

• `Const` **TlvRecallSceneRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes recallScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:287

___

### TlvRemoveAllScenesRequest

• `Const` **TlvRemoveAllScenesRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes removeAllScenes command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:231

___

### TlvRemoveAllScenesResponse

• `Const` **TlvRemoveAllScenesResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.15

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:244

___

### TlvRemoveSceneRequest

• `Const` **TlvRemoveSceneRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes removeScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:202

___

### TlvRemoveSceneResponse

• `Const` **TlvRemoveSceneResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.14

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:216

___

### TlvStoreSceneRequest

• `Const` **TlvStoreSceneRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes storeScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:258

___

### TlvStoreSceneResponse

• `Const` **TlvStoreSceneResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.16

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:272

___

### TlvViewSceneRequest

• `Const` **TlvViewSceneRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Scenes viewScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:150

___

### TlvViewSceneResponse

• `Const` **TlvViewSceneResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.13

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:164
