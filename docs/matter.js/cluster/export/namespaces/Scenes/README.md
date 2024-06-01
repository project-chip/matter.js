[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / Scenes

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

> `readonly` **currentGroup**: [`Attribute`](../../interfaces/Attribute.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid), `any`\>

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

> `readonly` **lastConfiguredBy**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| [`NodeId`](../../../../datatype/export/README.md#nodeid), `any`\>

The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node that
last configured the Scene Table.

The null value indicates that the server has not been configured, or that the identifier of the node
that last configured the Scenes cluster is not known.

###### See

MatterSpecification.v11.Cluster § 1.4.7.6

##### attributes.nameSupport

> `readonly` **nameSupport**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

> `readonly` **addScene**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

It is not mandatory for an extension field set to be included in the command for every cluster on that
endpoint that has a defined extension field set. Extension field sets may be omitted, including the case
of no extension field sets at all.

###### See

MatterSpecification.v11.Cluster § 1.4.9.2

##### commands.copyScene

> `readonly` **copyScene**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to
another group/scene identifier pair.

###### See

MatterSpecification.v11.Cluster § 1.4.9.11

##### commands.enhancedAddScene

> `readonly` **enhancedAddScene**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the
AddScene command.

This command shall have the same data fields as the AddScene command, with the following difference:

The TransitionTime data field shall be measured in tenths of a second rather than in seconds.

###### See

MatterSpecification.v11.Cluster § 1.4.9.9

##### commands.enhancedViewScene

> `readonly` **enhancedViewScene**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time than
the ViewScene command.

This command shall have the same data fields as the ViewScene command.

###### See

MatterSpecification.v11.Cluster § 1.4.9.10

##### commands.getSceneMembership

> `readonly` **getSceneMembership**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The GetSceneMembership command can be used to find an unused scene identifier within a certain group
when no commissioning tool is in the network, or for a commissioning tool to get the used scene
identifiers within a certain group, for the endpoint that implements this cluster.

###### See

MatterSpecification.v11.Cluster § 1.4.9.8

##### commands.recallScene

> `readonly` **recallScene**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.7

##### commands.removeAllScenes

> `readonly` **removeAllScenes**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.5

##### commands.removeScene

> `readonly` **removeScene**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.4

##### commands.storeScene

> `readonly` **storeScene**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.6

##### commands.viewScene

> `readonly` **viewScene**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.3

##### extensions

> `readonly` **extensions**: readonly []

This metadata controls which ScenesCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.sceneNames

> `readonly` **sceneNames**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

SceneNames

The ability to store a name for a scene.

##### id

> `readonly` **id**: `5` = `0x5`

##### name

> `readonly` **name**: `"Scenes"` = `"Scenes"`

##### revision

> `readonly` **revision**: `4` = `4`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:473](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L473)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:681](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L681)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentGroup

> `readonly` **currentGroup**: [`Attribute`](../../interfaces/Attribute.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid), `any`\>

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

> `readonly` **lastConfiguredBy**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| [`NodeId`](../../../../datatype/export/README.md#nodeid), `any`\>

The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node that
last configured the Scene Table.

The null value indicates that the server has not been configured, or that the identifier of the node
that last configured the Scenes cluster is not known.

###### See

MatterSpecification.v11.Cluster § 1.4.7.6

##### attributes.nameSupport

> `readonly` **nameSupport**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

> `readonly` **addScene**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

It is not mandatory for an extension field set to be included in the command for every cluster on that
endpoint that has a defined extension field set. Extension field sets may be omitted, including the case
of no extension field sets at all.

###### See

MatterSpecification.v11.Cluster § 1.4.9.2

##### commands.copyScene

> `readonly` **copyScene**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to
another group/scene identifier pair.

###### See

MatterSpecification.v11.Cluster § 1.4.9.11

##### commands.enhancedAddScene

> `readonly` **enhancedAddScene**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the
AddScene command.

This command shall have the same data fields as the AddScene command, with the following difference:

The TransitionTime data field shall be measured in tenths of a second rather than in seconds.

###### See

MatterSpecification.v11.Cluster § 1.4.9.9

##### commands.enhancedViewScene

> `readonly` **enhancedViewScene**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time than
the ViewScene command.

This command shall have the same data fields as the ViewScene command.

###### See

MatterSpecification.v11.Cluster § 1.4.9.10

##### commands.getSceneMembership

> `readonly` **getSceneMembership**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The GetSceneMembership command can be used to find an unused scene identifier within a certain group
when no commissioning tool is in the network, or for a commissioning tool to get the used scene
identifiers within a certain group, for the endpoint that implements this cluster.

###### See

MatterSpecification.v11.Cluster § 1.4.9.8

##### commands.recallScene

> `readonly` **recallScene**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.7

##### commands.removeAllScenes

> `readonly` **removeAllScenes**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.5

##### commands.removeScene

> `readonly` **removeScene**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.4

##### commands.storeScene

> `readonly` **storeScene**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.6

##### commands.viewScene

> `readonly` **viewScene**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.4.9.3

##### extensions

> `readonly` **extensions**: readonly []

This metadata controls which ScenesCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.sceneNames

> `readonly` **sceneNames**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

SceneNames

The ability to store a name for a scene.

##### id

> `readonly` **id**: `5` = `0x5`

##### name

> `readonly` **name**: `"Scenes"` = `"Scenes"`

##### revision

> `readonly` **revision**: `4` = `4`

##### supportedFeatures

> `readonly` **supportedFeatures**: `object`

##### supportedFeatures.sceneNames

> `readonly` **sceneNames**: `true` = `true`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:658](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L658)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:684](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L684)

***

### Mode

> `const` **Mode**: `object`

The value of Scenes.mode

#### See

MatterSpecification.v11.Cluster § 1.4.9.11.1

#### Type declaration

##### copyAllScenes

> **copyAllScenes**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### reserved

> **reserved**: [`BitField`](../../../../schema/export/README.md#bitfield)

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:352](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L352)

***

### NameSupport

> `const` **NameSupport**: `object`

The value of the Scenes nameSupport attribute

#### See

MatterSpecification.v11.Cluster § 1.4.7.5

#### Type declaration

##### nameSupport

> **nameSupport**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

The ability to store a name for a scene.

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L41)

***

### TlvAddSceneRequest

> `const` **TlvAddSceneRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Scenes addScene command

#### See

MatterSpecification.v11.Cluster § 1.4.9.2

#### Type declaration

##### extensionFieldSets

> **extensionFieldSets**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### sceneId

> **sceneId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### sceneName

> **sceneName**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L106)

***

### TlvAddSceneResponse

> `const` **TlvAddSceneResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.12

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### sceneId

> **sceneId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StatusCode`](../../../../protocol/interaction/export/enumerations/StatusCode.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L124)

***

### TlvAttributeValuePair

> `const` **TlvAttributeValuePair**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This data type indicates a combination of an identifier and the value of an attribute.

#### See

MatterSpecification.v11.Cluster § 1.4.6.1

#### Type declaration

##### attributeId

> **attributeId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`AttributeId`](../../../../datatype/export/README.md#attributeid)\>

This field shall be present or not present, for all instances in the Scenes cluster. If this field is not
present, then the data type of AttributeValue shall be determined by the order and data type defined in the
cluster specification. Otherwise the data type of AttributeValue shall be the data type of the attribute
indicated by AttributeID.

###### See

MatterSpecification.v11.Cluster § 1.4.6.1.1

##### attributeValue

> **attributeValue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TlvStream`](../../../../tlv/export/README.md#tlvstream)\>

This is the attribute value as part of an extension field set. See AttributeID to determine the data type
for this field.

###### See

MatterSpecification.v11.Cluster § 1.4.6.1.2

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L53)

***

### TlvCopySceneRequest

> `const` **TlvCopySceneRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Scenes copyScene command

#### See

MatterSpecification.v11.Cluster § 1.4.9.11

#### Type declaration

##### groupIdentifierFrom

> **groupIdentifierFrom**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

The GroupIdentifierFrom field specifies the identifier of the group from which the scene is to be copied.
Together with the SceneIdentifierFrom field, this field uniquely identifies the scene to copy from the Scene
Table.

###### See

MatterSpecification.v11.Cluster § 1.4.9.11.2

##### groupIdentifierTo

> **groupIdentifierTo**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

The GroupIdentifierTo field specifies the identifier of the group to which the scene is to be copied.
Together with the SceneIdentifierTo field, this field uniquely identifies the scene to copy to the Scene
Table.

###### See

MatterSpecification.v11.Cluster § 1.4.9.11.4

##### mode

> **mode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

The Mode field contains information of how the scene copy is to proceed. This field shall be formatted as
illustrated in Format of the Mode Field of the CopyScene Command.

The CopyAllScenes subfield is 1-bit in length and indicates whether all scenes are to be copied. If this
value is set to 1, all scenes are to be copied and the SceneIdentifierFrom and SceneIdentifierTo fields
shall be ignored. Otherwise this field is set to 0.

###### See

MatterSpecification.v11.Cluster § 1.4.9.11.1

##### sceneIdentifierFrom

> **sceneIdentifierFrom**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The SceneIdentifierFrom field specifies the identifier of the scene from which the scene is to be copied.
Together with the GroupIdentifierFrom field, this field uniquely identifies the scene to copy from the Scene
Table.

###### See

MatterSpecification.v11.Cluster § 1.4.9.11.3

##### sceneIdentifierTo

> **sceneIdentifierTo**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The SceneIdentifierTo field specifies the identifier of the scene to which the scene is to be copied.
Together with the GroupIdentifierTo field, this field uniquely identifies the scene to copy to the Scene
Table.

###### See

MatterSpecification.v11.Cluster § 1.4.9.11.5

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:359](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L359)

***

### TlvCopySceneResponse

> `const` **TlvCopySceneResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

The CopySceneResponse command allows a server to respond to a CopyScene command.

#### See

MatterSpecification.v11.Cluster § 1.4.9.20

#### Type declaration

##### groupIdentifierFrom

> **groupIdentifierFrom**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

The GroupIdentifierFrom field specifies the identifier of the group from which the scene was copied, as
specified in the CopyScene command. Together with the SceneIdentifierFrom field, this field uniquely
identifies the scene that was copied from the Scene Table.

###### See

MatterSpecification.v11.Cluster § 1.4.9.20.2

##### sceneIdentifierFrom

> **sceneIdentifierFrom**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The SceneIdentifierFrom field is specifies the identifier of the scene from which the scene was copied, as
specified in the CopyScene command. Together with the GroupIdentifierFrom field, this field uniquely
identifies the scene that was copied from the Scene Table.

###### See

MatterSpecification.v11.Cluster § 1.4.9.20.3

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StatusCode`](../../../../protocol/interaction/export/enumerations/StatusCode.md)\>

The Status field contains the status of the copy scene attempt. This field shall be set to one of the
non-reserved values listed in Values of the Status Field of the CopySceneResponse Command.

###### See

MatterSpecification.v11.Cluster § 1.4.9.20.1

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:421](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L421)

***

### TlvExtensionFieldSet

> `const` **TlvExtensionFieldSet**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This data type indicates for a given cluster a set of attributes and their values. Only attributes which have
the "S" designation in the Quality column of the cluster specification shall be used in the AttributeValueList
field.

#### See

MatterSpecification.v11.Cluster § 1.4.6.2

#### Type declaration

##### attributeValueList

> **attributeValueList**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### clusterId

> **clusterId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ClusterId`](../../../../datatype/export/README.md#clusterid)\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L87)

***

### TlvGetSceneMembershipRequest

> `const` **TlvGetSceneMembershipRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Scenes getSceneMembership command

#### See

MatterSpecification.v11.Cluster § 1.4.9.8

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:275](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L275)

***

### TlvGetSceneMembershipResponse

> `const` **TlvGetSceneMembershipResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

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

#### Type declaration

##### capacity

> **capacity**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### sceneList

> **sceneList**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`[]\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StatusCode`](../../../../protocol/interaction/export/enumerations/StatusCode.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:311](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L311)

***

### TlvRecallSceneRequest

> `const` **TlvRecallSceneRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Scenes recallScene command

#### See

MatterSpecification.v11.Cluster § 1.4.9.7

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### sceneId

> **sceneId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### transitionTime

> **transitionTime**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`null` \| `number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:257](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L257)

***

### TlvRemoveAllScenesRequest

> `const` **TlvRemoveAllScenesRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Scenes removeAllScenes command

#### See

MatterSpecification.v11.Cluster § 1.4.9.5

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L202)

***

### TlvRemoveAllScenesResponse

> `const` **TlvRemoveAllScenesResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.15

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StatusCode`](../../../../protocol/interaction/export/enumerations/StatusCode.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L214)

***

### TlvRemoveSceneRequest

> `const` **TlvRemoveSceneRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Scenes removeScene command

#### See

MatterSpecification.v11.Cluster § 1.4.9.4

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### sceneId

> **sceneId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L171)

***

### TlvRemoveSceneResponse

> `const` **TlvRemoveSceneResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.14

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### sceneId

> **sceneId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StatusCode`](../../../../protocol/interaction/export/enumerations/StatusCode.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:186](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L186)

***

### TlvStoreSceneRequest

> `const` **TlvStoreSceneRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Scenes storeScene command

#### See

MatterSpecification.v11.Cluster § 1.4.9.6

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### sceneId

> **sceneId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:229](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L229)

***

### TlvStoreSceneResponse

> `const` **TlvStoreSceneResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.16

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### sceneId

> **sceneId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StatusCode`](../../../../protocol/interaction/export/enumerations/StatusCode.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:241](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L241)

***

### TlvViewSceneRequest

> `const` **TlvViewSceneRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Scenes viewScene command

#### See

MatterSpecification.v11.Cluster § 1.4.9.3

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### sceneId

> **sceneId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L140)

***

### TlvViewSceneResponse

> `const` **TlvViewSceneResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.13

#### Type declaration

##### extensionFieldSets

> **extensionFieldSets**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### sceneId

> **sceneId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### sceneName

> **sceneName**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StatusCode`](../../../../protocol/interaction/export/enumerations/StatusCode.md)\>

##### transitionTime

> **transitionTime**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L152)
