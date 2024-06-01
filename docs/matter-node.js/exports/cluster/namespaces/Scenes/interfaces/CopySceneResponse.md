[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Scenes](../README.md) / CopySceneResponse

# Interface: CopySceneResponse

The CopySceneResponse command allows a server to respond to a CopyScene command.

## See

MatterSpecification.v11.Cluster § 1.4.9.20

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvCopySceneResponse`](../README.md#tlvcopysceneresponse)\>

## Properties

### groupIdentifierFrom

> **groupIdentifierFrom**: [`GroupId`](../../../../datatype/README.md#groupid)

The GroupIdentifierFrom field specifies the identifier of the group from which the scene was copied, as
specified in the CopyScene command. Together with the SceneIdentifierFrom field, this field uniquely
identifies the scene that was copied from the Scene Table.

#### See

MatterSpecification.v11.Cluster § 1.4.9.20.2

#### Inherited from

`TypeFromSchema.groupIdentifierFrom`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:465

***

### sceneIdentifierFrom

> **sceneIdentifierFrom**: `number`

The SceneIdentifierFrom field is specifies the identifier of the scene from which the scene was copied, as
specified in the CopyScene command. Together with the GroupIdentifierFrom field, this field uniquely
identifies the scene that was copied from the Scene Table.

#### See

MatterSpecification.v11.Cluster § 1.4.9.20.3

#### Inherited from

`TypeFromSchema.sceneIdentifierFrom`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:473

***

### status

> **status**: [`StatusCode`](../../../../interaction/enumerations/StatusCode.md)

The Status field contains the status of the copy scene attempt. This field shall be set to one of the
non-reserved values listed in Values of the Status Field of the CopySceneResponse Command.

#### See

MatterSpecification.v11.Cluster § 1.4.9.20.1

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:457
