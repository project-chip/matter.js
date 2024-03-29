[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Scenes](../modules/cluster_export.Scenes.md) / CopySceneRequest

# Interface: CopySceneRequest

[cluster/export](../modules/cluster_export.md).[Scenes](../modules/cluster_export.Scenes.md).CopySceneRequest

Input to the Scenes copyScene command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.11

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvCopySceneRequest`](../modules/cluster_export.Scenes.md#tlvcopyscenerequest)\>

  ↳ **`CopySceneRequest`**

## Table of contents

### Properties

- [groupIdentifierFrom](cluster_export.Scenes.CopySceneRequest.md#groupidentifierfrom)
- [groupIdentifierTo](cluster_export.Scenes.CopySceneRequest.md#groupidentifierto)
- [mode](cluster_export.Scenes.CopySceneRequest.md#mode)
- [sceneIdentifierFrom](cluster_export.Scenes.CopySceneRequest.md#sceneidentifierfrom)
- [sceneIdentifierTo](cluster_export.Scenes.CopySceneRequest.md#sceneidentifierto)

## Properties

### groupIdentifierFrom

• **groupIdentifierFrom**: [`GroupId`](../modules/datatype_export.md#groupid)

The GroupIdentifierFrom field specifies the identifier of the group from which the scene is to be copied.
Together with the SceneIdentifierFrom field, this field uniquely identifies the scene to copy from the Scene
Table.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.11.2

#### Inherited from

TypeFromSchema.groupIdentifierFrom

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:380](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L380)

___

### groupIdentifierTo

• **groupIdentifierTo**: [`GroupId`](../modules/datatype_export.md#groupid)

The GroupIdentifierTo field specifies the identifier of the group to which the scene is to be copied.
Together with the SceneIdentifierTo field, this field uniquely identifies the scene to copy to the Scene
Table.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.11.4

#### Inherited from

TypeFromSchema.groupIdentifierTo

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:398](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L398)

___

### mode

• **mode**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `copyAllScenes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `reserved`: [`BitField`](../modules/schema_export.md#bitfield)  }\>

The Mode field contains information of how the scene copy is to proceed. This field shall be formatted as
illustrated in Format of the Mode Field of the CopyScene Command.

The CopyAllScenes subfield is 1-bit in length and indicates whether all scenes are to be copied. If this
value is set to 1, all scenes are to be copied and the SceneIdentifierFrom and SceneIdentifierTo fields
shall be ignored. Otherwise this field is set to 0.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.11.1

#### Inherited from

TypeFromSchema.mode

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:371](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L371)

___

### sceneIdentifierFrom

• **sceneIdentifierFrom**: `number`

The SceneIdentifierFrom field specifies the identifier of the scene from which the scene is to be copied.
Together with the GroupIdentifierFrom field, this field uniquely identifies the scene to copy from the Scene
Table.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.11.3

#### Inherited from

TypeFromSchema.sceneIdentifierFrom

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:389](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L389)

___

### sceneIdentifierTo

• **sceneIdentifierTo**: `number`

The SceneIdentifierTo field specifies the identifier of the scene to which the scene is to be copied.
Together with the GroupIdentifierTo field, this field uniquely identifies the scene to copy to the Scene
Table.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.11.5

#### Inherited from

TypeFromSchema.sceneIdentifierTo

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:407](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L407)
