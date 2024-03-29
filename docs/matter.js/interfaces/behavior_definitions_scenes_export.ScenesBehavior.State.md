[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/scenes/export](../modules/behavior_definitions_scenes_export.md) / [ScenesBehavior](../modules/behavior_definitions_scenes_export.ScenesBehavior.md) / State

# Interface: State

[behavior/definitions/scenes/export](../modules/behavior_definitions_scenes_export.md).[ScenesBehavior](../modules/behavior_definitions_scenes_export.ScenesBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_scenes_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [currentGroup](behavior_definitions_scenes_export.ScenesBehavior.State.md#currentgroup)
- [currentScene](behavior_definitions_scenes_export.ScenesBehavior.State.md#currentscene)
- [lastConfiguredBy](behavior_definitions_scenes_export.ScenesBehavior.State.md#lastconfiguredby)
- [nameSupport](behavior_definitions_scenes_export.ScenesBehavior.State.md#namesupport)
- [sceneCount](behavior_definitions_scenes_export.ScenesBehavior.State.md#scenecount)
- [sceneValid](behavior_definitions_scenes_export.ScenesBehavior.State.md#scenevalid)

## Properties

### currentGroup

• **currentGroup**: [`GroupId`](../modules/datatype_export.md#groupid)

The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene last
invoked is not associated with a group.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.7.3

#### Inherited from

StateType.currentGroup

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:509](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L509)

___

### currentScene

• **currentScene**: `number`

The CurrentScene attribute holds the scene identifier of the scene last invoked.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.7.2

#### Inherited from

StateType.currentScene

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:501](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L501)

___

### lastConfiguredBy

• `Optional` **lastConfiguredBy**: ``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)

The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node that
last configured the Scene Table.

The null value indicates that the server has not been configured, or that the identifier of the node
that last configured the Scenes cluster is not known.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.7.6

#### Inherited from

StateType.lastConfiguredBy

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:542](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L542)

___

### nameSupport

• **nameSupport**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

This attribute provides legacy, read-only access to whether the Scene Names feature is supported. The
most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall
be 0.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.7.5

#### Inherited from

StateType.nameSupport

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:531](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L531)

___

### sceneCount

• **sceneCount**: `number`

The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.7.1

#### Inherited from

StateType.sceneCount

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:494](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L494)

___

### sceneValid

• **sceneValid**: `boolean`

The SceneValid attribute indicates whether the state of the server corresponds to that associated with
the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, FALSE
indicates that they are not valid.

Before a scene has been stored or recalled, this attribute is set to FALSE. After a successful
StoreScene or RecallScene command it is set to TRUE. If, after a scene is stored or recalled, the state
of the server is modified, this attribute is set to FALSE.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.7.4

#### Inherited from

StateType.sceneValid

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:522](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L522)
