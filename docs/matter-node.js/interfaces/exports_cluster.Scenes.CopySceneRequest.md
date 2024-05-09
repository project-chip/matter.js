[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Scenes](../modules/exports_cluster.Scenes.md) / CopySceneRequest

# Interface: CopySceneRequest

[exports/cluster](../modules/exports_cluster.md).[Scenes](../modules/exports_cluster.Scenes.md).CopySceneRequest

Input to the Scenes copyScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.11

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvCopySceneRequest`](../modules/exports_cluster.Scenes.md#tlvcopyscenerequest)\>

  ↳ **`CopySceneRequest`**

## Table of contents

### Properties

- [groupIdentifierFrom](exports_cluster.Scenes.CopySceneRequest.md#groupidentifierfrom)
- [groupIdentifierTo](exports_cluster.Scenes.CopySceneRequest.md#groupidentifierto)
- [mode](exports_cluster.Scenes.CopySceneRequest.md#mode)
- [sceneIdentifierFrom](exports_cluster.Scenes.CopySceneRequest.md#sceneidentifierfrom)
- [sceneIdentifierTo](exports_cluster.Scenes.CopySceneRequest.md#sceneidentifierto)

## Properties

### groupIdentifierFrom

• **groupIdentifierFrom**: [`GroupId`](../modules/exports_datatype.md#groupid)

The GroupIdentifierFrom field specifies the identifier of the group from which the scene is to be copied.
Together with the SceneIdentifierFrom field, this field uniquely identifies the scene to copy from the Scene
Table.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.11.2

#### Inherited from

TypeFromSchema.groupIdentifierFrom

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:412

___

### groupIdentifierTo

• **groupIdentifierTo**: [`GroupId`](../modules/exports_datatype.md#groupid)

The GroupIdentifierTo field specifies the identifier of the group to which the scene is to be copied.
Together with the SceneIdentifierTo field, this field uniquely identifies the scene to copy to the Scene
Table.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.11.4

#### Inherited from

TypeFromSchema.groupIdentifierTo

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:428

___

### mode

• **mode**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `copyAllScenes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `reserved`: [`BitField`](../modules/exports_schema.md#bitfield)  }\>

The Mode field contains information of how the scene copy is to proceed. This field shall be formatted as
illustrated in Format of the Mode Field of the CopyScene Command.

The CopyAllScenes subfield is 1-bit in length and indicates whether all scenes are to be copied. If this
value is set to 1, all scenes are to be copied and the SceneIdentifierFrom and SceneIdentifierTo fields
shall be ignored. Otherwise this field is set to 0.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.11.1

#### Inherited from

TypeFromSchema.mode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:401

___

### sceneIdentifierFrom

• **sceneIdentifierFrom**: `number`

The SceneIdentifierFrom field specifies the identifier of the scene from which the scene is to be copied.
Together with the GroupIdentifierFrom field, this field uniquely identifies the scene to copy from the Scene
Table.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.11.3

#### Inherited from

TypeFromSchema.sceneIdentifierFrom

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:420

___

### sceneIdentifierTo

• **sceneIdentifierTo**: `number`

The SceneIdentifierTo field specifies the identifier of the scene to which the scene is to be copied.
Together with the GroupIdentifierTo field, this field uniquely identifies the scene to copy to the Scene
Table.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.11.5

#### Inherited from

TypeFromSchema.sceneIdentifierTo

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:436
