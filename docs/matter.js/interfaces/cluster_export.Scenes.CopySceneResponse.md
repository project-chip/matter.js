[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Scenes](../modules/cluster_export.Scenes.md) / CopySceneResponse

# Interface: CopySceneResponse

[cluster/export](../modules/cluster_export.md).[Scenes](../modules/cluster_export.Scenes.md).CopySceneResponse

The CopySceneResponse command allows a server to respond to a CopyScene command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.20

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvCopySceneResponse`](../modules/cluster_export.Scenes.md#tlvcopysceneresponse)\>

  ↳ **`CopySceneResponse`**

## Table of contents

### Properties

- [groupIdentifierFrom](cluster_export.Scenes.CopySceneResponse.md#groupidentifierfrom)
- [sceneIdentifierFrom](cluster_export.Scenes.CopySceneResponse.md#sceneidentifierfrom)
- [status](cluster_export.Scenes.CopySceneResponse.md#status)

## Properties

### groupIdentifierFrom

• **groupIdentifierFrom**: [`GroupId`](../modules/datatype_export.md#groupid)

The GroupIdentifierFrom field specifies the identifier of the group from which the scene was copied, as
specified in the CopyScene command. Together with the SceneIdentifierFrom field, this field uniquely
identifies the scene that was copied from the Scene Table.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.20.2

#### Inherited from

TypeFromSchema.groupIdentifierFrom

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:438](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L438)

___

### sceneIdentifierFrom

• **sceneIdentifierFrom**: `number`

The SceneIdentifierFrom field is specifies the identifier of the scene from which the scene was copied, as
specified in the CopyScene command. Together with the GroupIdentifierFrom field, this field uniquely
identifies the scene that was copied from the Scene Table.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.20.3

#### Inherited from

TypeFromSchema.sceneIdentifierFrom

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:447](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L447)

___

### status

• **status**: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)

The Status field contains the status of the copy scene attempt. This field shall be set to one of the
non-reserved values listed in Values of the Status Field of the CopySceneResponse Command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.20.1

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:429](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L429)
