[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Scenes](../README.md) / Cluster

# Interface: Cluster

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

## See

MatterSpecification.v11.Cluster § 1.4

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### currentGroup

> `readonly` **currentGroup**: [`Attribute`](../../../interfaces/Attribute.md)\<[`GroupId`](../../../../datatype/README.md#groupid), `any`\>

The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene last
invoked is not associated with a group.

###### See

MatterSpecification.v11.Cluster § 1.4.7.3

##### currentScene

> `readonly` **currentScene**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\>

The CurrentScene attribute holds the scene identifier of the scene last invoked.

###### See

MatterSpecification.v11.Cluster § 1.4.7.2

##### lastConfiguredBy

> `readonly` **lastConfiguredBy**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| [`NodeId`](../../../../datatype/README.md#nodeid), `any`\>

The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node that
last configured the Scene Table.

The null value indicates that the server has not been configured, or that the identifier of the node
that last configured the Scenes cluster is not known.

###### See

MatterSpecification.v11.Cluster § 1.4.7.6

##### nameSupport

> `readonly` **nameSupport**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute provides legacy, read-only access to whether the Scene Names feature is supported. The
most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall
be 0.

###### See

MatterSpecification.v11.Cluster § 1.4.7.5

##### sceneCount

> `readonly` **sceneCount**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\>

The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table.

###### See

MatterSpecification.v11.Cluster § 1.4.7.1

##### sceneValid

> `readonly` **sceneValid**: [`Attribute`](../../../interfaces/Attribute.md)\<`boolean`, `any`\>

The SceneValid attribute indicates whether the state of the server corresponds to that associated with
the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, FALSE
indicates that they are not valid.

Before a scene has been stored or recalled, this attribute is set to FALSE. After a successful
StoreScene or RecallScene command it is set to TRUE. If, after a scene is stored or recalled, the state
of the server is modified, this attribute is set to FALSE.

###### See

MatterSpecification.v11.Cluster § 1.4.7.4

#### Inherited from

`Identity.attributes`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

***

### commands

> **commands**: `object`

#### addScene

> `readonly` **addScene**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

It is not mandatory for an extension field set to be included in the command for every cluster on that
endpoint that has a defined extension field set. Extension field sets may be omitted, including the case
of no extension field sets at all.

##### See

MatterSpecification.v11.Cluster § 1.4.9.2

#### copyScene

> `readonly` **copyScene**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to
another group/scene identifier pair.

##### See

MatterSpecification.v11.Cluster § 1.4.9.11

#### enhancedAddScene

> `readonly` **enhancedAddScene**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the
AddScene command.

This command shall have the same data fields as the AddScene command, with the following difference:

The TransitionTime data field shall be measured in tenths of a second rather than in seconds.

##### See

MatterSpecification.v11.Cluster § 1.4.9.9

#### enhancedViewScene

> `readonly` **enhancedViewScene**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time than
the ViewScene command.

This command shall have the same data fields as the ViewScene command.

##### See

MatterSpecification.v11.Cluster § 1.4.9.10

#### getSceneMembership

> `readonly` **getSceneMembership**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The GetSceneMembership command can be used to find an unused scene identifier within a certain group
when no commissioning tool is in the network, or for a commissioning tool to get the used scene
identifiers within a certain group, for the endpoint that implements this cluster.

##### See

MatterSpecification.v11.Cluster § 1.4.9.8

#### recallScene

> `readonly` **recallScene**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 1.4.9.7

#### removeAllScenes

> `readonly` **removeAllScenes**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### See

MatterSpecification.v11.Cluster § 1.4.9.5

#### removeScene

> `readonly` **removeScene**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### See

MatterSpecification.v11.Cluster § 1.4.9.4

#### storeScene

> `readonly` **storeScene**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### See

MatterSpecification.v11.Cluster § 1.4.9.6

#### viewScene

> `readonly` **viewScene**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### See

MatterSpecification.v11.Cluster § 1.4.9.3

#### Inherited from

`Identity.commands`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

***

### events

> **events**: `object`

#### Inherited from

`Identity.events`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

***

### extensions

> **extensions**: readonly []

#### Inherited from

`Identity.extensions`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

***

### features

> **features**: `object`

#### sceneNames

> `readonly` **sceneNames**: [`BitFlag`](../../../../schema/README.md#bitflag)

SceneNames

The ability to store a name for a scene.

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`5`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"Scenes"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `4`

#### Inherited from

`Identity.revision`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

***

### supportedFeatures

> **supportedFeatures**: `object`

#### sceneNames

> `readonly` **sceneNames**: `true`

#### Inherited from

`Identity.supportedFeatures`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
