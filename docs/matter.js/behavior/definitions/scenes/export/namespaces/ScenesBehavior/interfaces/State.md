[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/scenes/export](../../../README.md) / [ScenesBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### currentGroup

> **currentGroup**: [`GroupId`](../../../../../../../datatype/export/README.md#groupid)

The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene last
invoked is not associated with a group.

#### See

MatterSpecification.v11.Cluster § 1.4.7.3

#### Inherited from

`StateType.currentGroup`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:508](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L508)

***

### currentScene

> **currentScene**: `number`

The CurrentScene attribute holds the scene identifier of the scene last invoked.

#### See

MatterSpecification.v11.Cluster § 1.4.7.2

#### Inherited from

`StateType.currentScene`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:500](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L500)

***

### lastConfiguredBy?

> `optional` **lastConfiguredBy**: `null` \| [`NodeId`](../../../../../../../datatype/export/README.md#nodeid)

The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node that
last configured the Scene Table.

The null value indicates that the server has not been configured, or that the identifier of the node
that last configured the Scenes cluster is not known.

#### See

MatterSpecification.v11.Cluster § 1.4.7.6

#### Inherited from

`StateType.lastConfiguredBy`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:541](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L541)

***

### nameSupport

> **nameSupport**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This attribute provides legacy, read-only access to whether the Scene Names feature is supported. The
most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall
be 0.

#### See

MatterSpecification.v11.Cluster § 1.4.7.5

#### Type declaration

##### nameSupport

> **nameSupport**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

The ability to store a name for a scene.

#### Inherited from

`StateType.nameSupport`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:530](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L530)

***

### sceneCount

> **sceneCount**: `number`

The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table.

#### See

MatterSpecification.v11.Cluster § 1.4.7.1

#### Inherited from

`StateType.sceneCount`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:493](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L493)

***

### sceneValid

> **sceneValid**: `boolean`

The SceneValid attribute indicates whether the state of the server corresponds to that associated with
the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, FALSE
indicates that they are not valid.

Before a scene has been stored or recalled, this attribute is set to FALSE. After a successful
StoreScene or RecallScene command it is set to TRUE. If, after a scene is stored or recalled, the state
of the server is modified, this attribute is set to FALSE.

#### See

MatterSpecification.v11.Cluster § 1.4.7.4

#### Inherited from

`StateType.sceneValid`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:521](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L521)
