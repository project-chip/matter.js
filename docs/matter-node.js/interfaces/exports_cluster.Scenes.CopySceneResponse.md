[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Scenes](../modules/exports_cluster.Scenes.md) / CopySceneResponse

# Interface: CopySceneResponse

[exports/cluster](../modules/exports_cluster.md).[Scenes](../modules/exports_cluster.Scenes.md).CopySceneResponse

The CopySceneResponse command allows a server to respond to a CopyScene command.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.20

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvCopySceneResponse`](../modules/exports_cluster.Scenes.md#tlvcopysceneresponse)\>

  ↳ **`CopySceneResponse`**

## Table of contents

### Properties

- [groupIdentifierFrom](exports_cluster.Scenes.CopySceneResponse.md#groupidentifierfrom)
- [sceneIdentifierFrom](exports_cluster.Scenes.CopySceneResponse.md#sceneidentifierfrom)
- [status](exports_cluster.Scenes.CopySceneResponse.md#status)

## Properties

### groupIdentifierFrom

• **groupIdentifierFrom**: [`GroupId`](../modules/exports_datatype.md#groupid)

The GroupIdentifierFrom field specifies the identifier of the group from which the scene was copied, as
specified in the CopyScene command. Together with the SceneIdentifierFrom field, this field uniquely
identifies the scene that was copied from the Scene Table.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.20.2

#### Inherited from

TypeFromSchema.groupIdentifierFrom

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:465

___

### sceneIdentifierFrom

• **sceneIdentifierFrom**: `number`

The SceneIdentifierFrom field is specifies the identifier of the scene from which the scene was copied, as
specified in the CopyScene command. Together with the GroupIdentifierFrom field, this field uniquely
identifies the scene that was copied from the Scene Table.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.20.3

#### Inherited from

TypeFromSchema.sceneIdentifierFrom

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:473

___

### status

• **status**: [`StatusCode`](../enums/exports_interaction.StatusCode.md)

The Status field contains the status of the copy scene attempt. This field shall be set to one of the
non-reserved values listed in Values of the Status Field of the CopySceneResponse Command.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.20.1

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:457
