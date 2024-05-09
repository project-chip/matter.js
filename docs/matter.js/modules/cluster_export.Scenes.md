[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Scenes

# Namespace: Scenes

[cluster/export](cluster_export.md).Scenes

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.Scenes.Feature.md)

### Interfaces

- [AddSceneRequest](../interfaces/cluster_export.Scenes.AddSceneRequest.md)
- [AddSceneResponse](../interfaces/cluster_export.Scenes.AddSceneResponse.md)
- [AttributeValuePair](../interfaces/cluster_export.Scenes.AttributeValuePair.md)
- [Cluster](../interfaces/cluster_export.Scenes.Cluster.md)
- [CopySceneRequest](../interfaces/cluster_export.Scenes.CopySceneRequest.md)
- [CopySceneResponse](../interfaces/cluster_export.Scenes.CopySceneResponse.md)
- [ExtensionFieldSet](../interfaces/cluster_export.Scenes.ExtensionFieldSet.md)
- [GetSceneMembershipRequest](../interfaces/cluster_export.Scenes.GetSceneMembershipRequest.md)
- [GetSceneMembershipResponse](../interfaces/cluster_export.Scenes.GetSceneMembershipResponse.md)
- [RecallSceneRequest](../interfaces/cluster_export.Scenes.RecallSceneRequest.md)
- [RemoveAllScenesRequest](../interfaces/cluster_export.Scenes.RemoveAllScenesRequest.md)
- [RemoveAllScenesResponse](../interfaces/cluster_export.Scenes.RemoveAllScenesResponse.md)
- [RemoveSceneRequest](../interfaces/cluster_export.Scenes.RemoveSceneRequest.md)
- [RemoveSceneResponse](../interfaces/cluster_export.Scenes.RemoveSceneResponse.md)
- [StoreSceneRequest](../interfaces/cluster_export.Scenes.StoreSceneRequest.md)
- [StoreSceneResponse](../interfaces/cluster_export.Scenes.StoreSceneResponse.md)
- [ViewSceneRequest](../interfaces/cluster_export.Scenes.ViewSceneRequest.md)
- [ViewSceneResponse](../interfaces/cluster_export.Scenes.ViewSceneResponse.md)

### Variables

- [Base](cluster_export.Scenes.md#base)
- [Cluster](cluster_export.Scenes.md#cluster)
- [ClusterInstance](cluster_export.Scenes.md#clusterinstance)
- [Complete](cluster_export.Scenes.md#complete)
- [Mode](cluster_export.Scenes.md#mode)
- [NameSupport](cluster_export.Scenes.md#namesupport)
- [TlvAddSceneRequest](cluster_export.Scenes.md#tlvaddscenerequest)
- [TlvAddSceneResponse](cluster_export.Scenes.md#tlvaddsceneresponse)
- [TlvAttributeValuePair](cluster_export.Scenes.md#tlvattributevaluepair)
- [TlvCopySceneRequest](cluster_export.Scenes.md#tlvcopyscenerequest)
- [TlvCopySceneResponse](cluster_export.Scenes.md#tlvcopysceneresponse)
- [TlvExtensionFieldSet](cluster_export.Scenes.md#tlvextensionfieldset)
- [TlvGetSceneMembershipRequest](cluster_export.Scenes.md#tlvgetscenemembershiprequest)
- [TlvGetSceneMembershipResponse](cluster_export.Scenes.md#tlvgetscenemembershipresponse)
- [TlvRecallSceneRequest](cluster_export.Scenes.md#tlvrecallscenerequest)
- [TlvRemoveAllScenesRequest](cluster_export.Scenes.md#tlvremoveallscenesrequest)
- [TlvRemoveAllScenesResponse](cluster_export.Scenes.md#tlvremoveallscenesresponse)
- [TlvRemoveSceneRequest](cluster_export.Scenes.md#tlvremovescenerequest)
- [TlvRemoveSceneResponse](cluster_export.Scenes.md#tlvremovesceneresponse)
- [TlvStoreSceneRequest](cluster_export.Scenes.md#tlvstorescenerequest)
- [TlvStoreSceneResponse](cluster_export.Scenes.md#tlvstoresceneresponse)
- [TlvViewSceneRequest](cluster_export.Scenes.md#tlvviewscenerequest)
- [TlvViewSceneResponse](cluster_export.Scenes.md#tlvviewsceneresponse)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all Scenes clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentGroup`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`GroupId`](datatype_export.md#groupid), `any`\> ; `currentScene`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `lastConfiguredBy`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `nameSupport`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `sceneCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `sceneValid`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>  } | - |
| `attributes.currentGroup` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`GroupId`](datatype_export.md#groupid), `any`\> | The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene last invoked is not associated with a group. **`See`** MatterSpecification.v11.Cluster § 1.4.7.3 |
| `attributes.currentScene` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> | The CurrentScene attribute holds the scene identifier of the scene last invoked. **`See`** MatterSpecification.v11.Cluster § 1.4.7.2 |
| `attributes.lastConfiguredBy` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> | The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node that last configured the Scene Table. The null value indicates that the server has not been configured, or that the identifier of the node that last configured the Scenes cluster is not known. **`See`** MatterSpecification.v11.Cluster § 1.4.7.6 |
| `attributes.nameSupport` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | This attribute provides legacy, read-only access to whether the Scene Names feature is supported. The most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall be 0. **`See`** MatterSpecification.v11.Cluster § 1.4.7.5 |
| `attributes.sceneCount` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> | The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table. **`See`** MatterSpecification.v11.Cluster § 1.4.7.1 |
| `attributes.sceneValid` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> | The SceneValid attribute indicates whether the state of the server corresponds to that associated with the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, FALSE indicates that they are not valid. Before a scene has been stored or recalled, this attribute is set to FALSE. After a successful StoreScene or RecallScene command it is set to TRUE. If, after a scene is stored or recalled, the state of the server is modified, this attribute is set to FALSE. **`See`** MatterSpecification.v11.Cluster § 1.4.7.4 |
| `commands` | \{ `addScene`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `copyScene`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `copyAllScenes`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitField`](schema_export.md#bitfield)  }\>\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `enhancedAddScene`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `enhancedViewScene`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `any`\> ; `getSceneMembership`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `recallScene`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `removeAllScenes`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `removeScene`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `storeScene`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewScene`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `any`\>  } | - |
| `commands.addScene` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> | It is not mandatory for an extension field set to be included in the command for every cluster on that endpoint that has a defined extension field set. Extension field sets may be omitted, including the case of no extension field sets at all. **`See`** MatterSpecification.v11.Cluster § 1.4.9.2 |
| `commands.copyScene` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `copyAllScenes`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitField`](schema_export.md#bitfield)  }\>\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> | The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to another group/scene identifier pair. **`See`** MatterSpecification.v11.Cluster § 1.4.9.11 |
| `commands.enhancedAddScene` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> | The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the AddScene command. This command shall have the same data fields as the AddScene command, with the following difference: The TransitionTime data field shall be measured in tenths of a second rather than in seconds. **`See`** MatterSpecification.v11.Cluster § 1.4.9.9 |
| `commands.enhancedViewScene` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `any`\> | The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time than the ViewScene command. This command shall have the same data fields as the ViewScene command. **`See`** MatterSpecification.v11.Cluster § 1.4.9.10 |
| `commands.getSceneMembership` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> | The GetSceneMembership command can be used to find an unused scene identifier within a certain group when no commissioning tool is in the network, or for a commissioning tool to get the used scene identifiers within a certain group, for the endpoint that implements this cluster. **`See`** MatterSpecification.v11.Cluster § 1.4.9.8 |
| `commands.recallScene` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.4.9.7 |
| `commands.removeAllScenes` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.4.9.5 |
| `commands.removeScene` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.4.9.4 |
| `commands.storeScene` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.4.9.6 |
| `commands.viewScene` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.4.9.3 |
| `extensions` | readonly [] | This metadata controls which ScenesCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `sceneNames`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.sceneNames` | [`BitFlag`](schema_export.md#bitflag) | SceneNames The ability to store a name for a scene. |
| `id` | ``5`` | - |
| `name` | ``"Scenes"`` | - |
| `revision` | ``4`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:473](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L473)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:681](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L681)

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:683](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L683)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `currentGroup`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`GroupId`](datatype_export.md#groupid), `any`\> ; `currentScene`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `lastConfiguredBy`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `nameSupport`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `sceneCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `sceneValid`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `addScene`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `copyScene`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `copyAllScenes`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitField`](schema_export.md#bitfield)  }\>\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `enhancedAddScene`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `enhancedViewScene`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `any`\> ; `getSceneMembership`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `recallScene`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `removeAllScenes`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `removeScene`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `storeScene`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewScene`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `sceneNames`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``5`` = 0x5; `name`: ``"Scenes"`` = "Scenes"; `revision`: ``4`` = 4; `supportedFeatures`: \{ `sceneNames`: ``true`` = true }  }\>

**`See`**

[Cluster](cluster_export.Scenes.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:658](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L658)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:684](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L684)

___

### Mode

• `Const` **Mode**: `Object`

The value of Scenes.mode

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.11.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `copyAllScenes` | [`BitFlag`](schema_export.md#bitflag) |
| `reserved` | [`BitField`](schema_export.md#bitfield) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:352](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L352)

___

### NameSupport

• `Const` **NameSupport**: `Object`

The value of the Scenes nameSupport attribute

**`See`**

MatterSpecification.v11.Cluster § 1.4.7.5

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameSupport` | [`BitFlag`](schema_export.md#bitflag) | The ability to store a name for a scene. |

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L41)

___

### TlvAddSceneRequest

• `Const` **TlvAddSceneRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Scenes addScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L106)

___

### TlvAddSceneResponse

• `Const` **TlvAddSceneResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.12

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L124)

___

### TlvAttributeValuePair

• `Const` **TlvAttributeValuePair**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>

This data type indicates a combination of an identifier and the value of an attribute.

**`See`**

MatterSpecification.v11.Cluster § 1.4.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L53)

___

### TlvCopySceneRequest

• `Const` **TlvCopySceneRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `copyAllScenes`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitField`](schema_export.md#bitfield)  }\>\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneIdentifierTo`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Scenes copyScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.11

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:359](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L359)

___

### TlvCopySceneResponse

• `Const` **TlvCopySceneResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneIdentifierFrom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

The CopySceneResponse command allows a server to respond to a CopyScene command.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.20

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:421](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L421)

___

### TlvExtensionFieldSet

• `Const` **TlvExtensionFieldSet**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\>  }\>

This data type indicates for a given cluster a set of attributes and their values. Only attributes which have
the "S" designation in the Quality column of the cluster specification shall be used in the AttributeValueList
field.

**`See`**

MatterSpecification.v11.Cluster § 1.4.6.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L87)

___

### TlvGetSceneMembershipRequest

• `Const` **TlvGetSceneMembershipRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>

Input to the Scenes getSceneMembership command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:275](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L275)

___

### TlvGetSceneMembershipResponse

• `Const` **TlvGetSceneMembershipResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

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

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:311](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L311)

___

### TlvRecallSceneRequest

• `Const` **TlvRecallSceneRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\>  }\>

Input to the Scenes recallScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.7

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:257](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L257)

___

### TlvRemoveAllScenesRequest

• `Const` **TlvRemoveAllScenesRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>

Input to the Scenes removeAllScenes command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L202)

___

### TlvRemoveAllScenesResponse

• `Const` **TlvRemoveAllScenesResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.15

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:214](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L214)

___

### TlvRemoveSceneRequest

• `Const` **TlvRemoveSceneRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Scenes removeScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:171](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L171)

___

### TlvRemoveSceneResponse

• `Const` **TlvRemoveSceneResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.14

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:186](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L186)

___

### TlvStoreSceneRequest

• `Const` **TlvStoreSceneRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Scenes storeScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:229](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L229)

___

### TlvStoreSceneResponse

• `Const` **TlvStoreSceneResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.16

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:241](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L241)

___

### TlvViewSceneRequest

• `Const` **TlvViewSceneRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Scenes viewScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L140)

___

### TlvViewSceneResponse

• `Const` **TlvViewSceneResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `attributeValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.13

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L152)
