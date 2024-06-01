[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / Scenes

# Namespace: Scenes

## Index

### Enumerations

- [Feature](enumerations/Feature.md)

### Interfaces

- [AddSceneRequest](interfaces/AddSceneRequest.md)
- [AddSceneResponse](interfaces/AddSceneResponse.md)
- [AttributeValuePair](interfaces/AttributeValuePair.md)
- [Cluster](interfaces/Cluster.md)
- [CopySceneRequest](interfaces/CopySceneRequest.md)
- [CopySceneResponse](interfaces/CopySceneResponse.md)
- [ExtensionFieldSet](interfaces/ExtensionFieldSet.md)
- [GetSceneMembershipRequest](interfaces/GetSceneMembershipRequest.md)
- [GetSceneMembershipResponse](interfaces/GetSceneMembershipResponse.md)
- [RecallSceneRequest](interfaces/RecallSceneRequest.md)
- [RemoveAllScenesRequest](interfaces/RemoveAllScenesRequest.md)
- [RemoveAllScenesResponse](interfaces/RemoveAllScenesResponse.md)
- [RemoveSceneRequest](interfaces/RemoveSceneRequest.md)
- [RemoveSceneResponse](interfaces/RemoveSceneResponse.md)
- [StoreSceneRequest](interfaces/StoreSceneRequest.md)
- [StoreSceneResponse](interfaces/StoreSceneResponse.md)
- [ViewSceneRequest](interfaces/ViewSceneRequest.md)
- [ViewSceneResponse](interfaces/ViewSceneResponse.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all Scenes clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentGroup

> `readonly` **currentGroup**: [`Attribute`](../../interfaces/Attribute.md)\<[`GroupId`](../../../datatype/README.md#groupid), `any`\>

The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene last
invoked is not associated with a group.

###### See

MatterSpecification.v11.Cluster § 1.4.7.3

##### attributes.currentScene

> `readonly` **currentScene**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The CurrentScene attribute holds the scene identifier of the scene last invoked.

###### See

MatterSpecification.v11.Cluster § 1.4.7.2

##### attributes.lastConfiguredBy

> `readonly` **lastConfiguredBy**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_NodeId/README.md) \| `null`, `any`\>

The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node that
last configured the Scene Table.

The null value indicates that the server has not been configured, or that the identifier of the node
that last configured the Scenes cluster is not known.

###### See

MatterSpecification.v11.Cluster § 1.4.7.6

##### attributes.nameSupport

> `readonly` **nameSupport**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

This attribute provides legacy, read-only access to whether the Scene Names feature is supported. The
most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall
be 0.

###### See

MatterSpecification.v11.Cluster § 1.4.7.5

##### attributes.sceneCount

> `readonly` **sceneCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table.

###### See

MatterSpecification.v11.Cluster § 1.4.7.1

##### attributes.sceneValid

> `readonly` **sceneValid**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

The SceneValid attribute indicates whether the state of the server corresponds to that associated with
the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, FALSE
indicates that they are not valid.

Before a scene has been stored or recalled, this attribute is set to FALSE. After a successful
StoreScene or RecallScene command it is set to TRUE. If, after a scene is stored or recalled, the state
of the server is modified, this attribute is set to FALSE.

###### See

MatterSpecification.v11.Cluster § 1.4.7.4

##### commands

> `readonly` **commands**: `object`

##### commands.addScene

> `readonly` **addScene**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

It is not mandatory for an extension field set to be included in the command for every cluster on that
endpoint that has a defined extension field set. Extension field sets may be omitted, including the case
of no extension field sets at all.

###### See

MatterSpecification.v11.Cluster § 1.4.9.2

##### commands.copyScene

> `readonly` **copyScene**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to
another group/scene identifier pair.

###### See

MatterSpecification.v11.Cluster § 1.4.9.11

##### commands.enhancedAddScene

> `readonly` **enhancedAddScene**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the
AddScene command.

This command shall have the same data fields as the AddScene command, with the following difference:

The TransitionTime data field shall be measured in tenths of a second rather than in seconds.

###### See

MatterSpecification.v11.Cluster § 1.4.9.9

##### commands.enhancedViewScene

> `readonly` **enhancedViewScene**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time than
the ViewScene command.

This command shall have the same data fields as the ViewScene command.

###### See

MatterSpecification.v11.Cluster § 1.4.9.10

##### commands.getSceneMembership

> `readonly` **getSceneMembership**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The GetSceneMembership command can be used to find an unused scene identifier within a certain group
when no commissioning tool is in the network, or for a commissioning tool to get the used scene
identifiers within a certain group, for the endpoint that implements this cluster.

###### See

MatterSpecification.v11.Cluster § 1.4.9.8

##### commands.recallScene

> `readonly` **recallScene**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.7

##### commands.removeAllScenes

> `readonly` **removeAllScenes**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.5

##### commands.removeScene

> `readonly` **removeScene**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.4

##### commands.storeScene

> `readonly` **storeScene**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.6

##### commands.viewScene

> `readonly` **viewScene**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.3

##### extensions

> `readonly` **extensions**: readonly []

This metadata controls which ScenesCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.sceneNames

> `readonly` **sceneNames**: [`BitFlag`](../../../schema/README.md#bitflag)

SceneNames

The ability to store a name for a scene.

##### id

> `readonly` **id**: `5`

##### name

> `readonly` **name**: `"Scenes"`

##### revision

> `readonly` **revision**: `4`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:498

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:1243

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentGroup

> `readonly` **currentGroup**: [`Attribute`](../../interfaces/Attribute.md)\<[`GroupId`](../../../datatype/README.md#groupid), `any`\>

The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene last
invoked is not associated with a group.

###### See

MatterSpecification.v11.Cluster § 1.4.7.3

##### attributes.currentScene

> `readonly` **currentScene**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The CurrentScene attribute holds the scene identifier of the scene last invoked.

###### See

MatterSpecification.v11.Cluster § 1.4.7.2

##### attributes.lastConfiguredBy

> `readonly` **lastConfiguredBy**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_NodeId/README.md) \| `null`, `any`\>

The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node that
last configured the Scene Table.

The null value indicates that the server has not been configured, or that the identifier of the node
that last configured the Scenes cluster is not known.

###### See

MatterSpecification.v11.Cluster § 1.4.7.6

##### attributes.nameSupport

> `readonly` **nameSupport**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

This attribute provides legacy, read-only access to whether the Scene Names feature is supported. The
most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall
be 0.

###### See

MatterSpecification.v11.Cluster § 1.4.7.5

##### attributes.sceneCount

> `readonly` **sceneCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table.

###### See

MatterSpecification.v11.Cluster § 1.4.7.1

##### attributes.sceneValid

> `readonly` **sceneValid**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

The SceneValid attribute indicates whether the state of the server corresponds to that associated with
the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, FALSE
indicates that they are not valid.

Before a scene has been stored or recalled, this attribute is set to FALSE. After a successful
StoreScene or RecallScene command it is set to TRUE. If, after a scene is stored or recalled, the state
of the server is modified, this attribute is set to FALSE.

###### See

MatterSpecification.v11.Cluster § 1.4.7.4

##### commands

> `readonly` **commands**: `object`

##### commands.addScene

> `readonly` **addScene**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

It is not mandatory for an extension field set to be included in the command for every cluster on that
endpoint that has a defined extension field set. Extension field sets may be omitted, including the case
of no extension field sets at all.

###### See

MatterSpecification.v11.Cluster § 1.4.9.2

##### commands.copyScene

> `readonly` **copyScene**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to
another group/scene identifier pair.

###### See

MatterSpecification.v11.Cluster § 1.4.9.11

##### commands.enhancedAddScene

> `readonly` **enhancedAddScene**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the
AddScene command.

This command shall have the same data fields as the AddScene command, with the following difference:

The TransitionTime data field shall be measured in tenths of a second rather than in seconds.

###### See

MatterSpecification.v11.Cluster § 1.4.9.9

##### commands.enhancedViewScene

> `readonly` **enhancedViewScene**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time than
the ViewScene command.

This command shall have the same data fields as the ViewScene command.

###### See

MatterSpecification.v11.Cluster § 1.4.9.10

##### commands.getSceneMembership

> `readonly` **getSceneMembership**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The GetSceneMembership command can be used to find an unused scene identifier within a certain group
when no commissioning tool is in the network, or for a commissioning tool to get the used scene
identifiers within a certain group, for the endpoint that implements this cluster.

###### See

MatterSpecification.v11.Cluster § 1.4.9.8

##### commands.recallScene

> `readonly` **recallScene**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.7

##### commands.removeAllScenes

> `readonly` **removeAllScenes**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.5

##### commands.removeScene

> `readonly` **removeScene**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.4

##### commands.storeScene

> `readonly` **storeScene**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.6

##### commands.viewScene

> `readonly` **viewScene**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.3

##### extensions

> `readonly` **extensions**: readonly []

This metadata controls which ScenesCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.sceneNames

> `readonly` **sceneNames**: [`BitFlag`](../../../schema/README.md#bitflag)

SceneNames

The ability to store a name for a scene.

##### id

> `readonly` **id**: `5`

##### name

> `readonly` **name**: `"Scenes"`

##### revision

> `readonly` **revision**: `4`

##### supportedFeatures

> `readonly` **supportedFeatures**: `object`

##### supportedFeatures.sceneNames

> `readonly` **sceneNames**: `true`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:860

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:1246

***

### Mode

> `const` **Mode**: `object`

The value of Scenes.mode

#### See

MatterSpecification.v11.Cluster § 1.4.9.11.1

#### Type declaration

##### copyAllScenes

> **copyAllScenes**: [`BitFlag`](../../../schema/README.md#bitflag)

##### reserved

> **reserved**: [`BitField`](../../../schema/README.md#bitfield)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:381

***

### NameSupport

> `const` **NameSupport**: `object`

The value of the Scenes nameSupport attribute

#### See

MatterSpecification.v11.Cluster § 1.4.7.5

#### Type declaration

##### nameSupport

> **nameSupport**: [`BitFlag`](../../../schema/README.md#bitflag)

The ability to store a name for a scene.

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:20

***

### TlvAddSceneRequest

> `const` **TlvAddSceneRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Scenes addScene command

#### See

MatterSpecification.v11.Cluster § 1.4.9.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:98

***

### TlvAddSceneResponse

> `const` **TlvAddSceneResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Cluster § 1.4.9.12

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:135

***

### TlvAttributeValuePair

> `const` **TlvAttributeValuePair**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This data type indicates a combination of an identifier and the value of an attribute.

#### See

MatterSpecification.v11.Cluster § 1.4.6.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:31

***

### TlvCopySceneRequest

> `const` **TlvCopySceneRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Scenes copyScene command

#### See

MatterSpecification.v11.Cluster § 1.4.9.11

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:390

***

### TlvCopySceneResponse

> `const` **TlvCopySceneResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

The CopySceneResponse command allows a server to respond to a CopyScene command.

#### See

MatterSpecification.v11.Cluster § 1.4.9.20

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:450

***

### TlvExtensionFieldSet

> `const` **TlvExtensionFieldSet**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This data type indicates for a given cluster a set of attributes and their values. Only attributes which have
the "S" designation in the Quality column of the cluster specification shall be used in the AttributeValueList
field.

#### See

MatterSpecification.v11.Cluster § 1.4.6.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:63

***

### TlvGetSceneMembershipRequest

> `const` **TlvGetSceneMembershipRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Scenes getSceneMembership command

#### See

MatterSpecification.v11.Cluster § 1.4.9.8

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:304

***

### TlvGetSceneMembershipResponse

> `const` **TlvGetSceneMembershipResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

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

#### See

MatterSpecification.v11.Cluster § 1.4.9.17

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:341

***

### TlvRecallSceneRequest

> `const` **TlvRecallSceneRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Scenes recallScene command

#### See

MatterSpecification.v11.Cluster § 1.4.9.7

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:287

***

### TlvRemoveAllScenesRequest

> `const` **TlvRemoveAllScenesRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Scenes removeAllScenes command

#### See

MatterSpecification.v11.Cluster § 1.4.9.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:231

***

### TlvRemoveAllScenesResponse

> `const` **TlvRemoveAllScenesResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Cluster § 1.4.9.15

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:244

***

### TlvRemoveSceneRequest

> `const` **TlvRemoveSceneRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Scenes removeScene command

#### See

MatterSpecification.v11.Cluster § 1.4.9.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:202

***

### TlvRemoveSceneResponse

> `const` **TlvRemoveSceneResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Cluster § 1.4.9.14

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:216

***

### TlvStoreSceneRequest

> `const` **TlvStoreSceneRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Scenes storeScene command

#### See

MatterSpecification.v11.Cluster § 1.4.9.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:258

***

### TlvStoreSceneResponse

> `const` **TlvStoreSceneResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Cluster § 1.4.9.16

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:272

***

### TlvViewSceneRequest

> `const` **TlvViewSceneRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Scenes viewScene command

#### See

MatterSpecification.v11.Cluster § 1.4.9.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:150

***

### TlvViewSceneResponse

> `const` **TlvViewSceneResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Cluster § 1.4.9.13

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:164
