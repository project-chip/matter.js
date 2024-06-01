[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Scenes](../README.md) / CopySceneRequest

# Interface: CopySceneRequest

Input to the Scenes copyScene command

## See

MatterSpecification.v11.Cluster § 1.4.9.11

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvCopySceneRequest`](../README.md#tlvcopyscenerequest)\>

## Properties

### groupIdentifierFrom

> **groupIdentifierFrom**: [`GroupId`](../../../../datatype/README.md#groupid)

The GroupIdentifierFrom field specifies the identifier of the group from which the scene is to be copied.
Together with the SceneIdentifierFrom field, this field uniquely identifies the scene to copy from the Scene
Table.

#### See

MatterSpecification.v11.Cluster § 1.4.9.11.2

#### Inherited from

`TypeFromSchema.groupIdentifierFrom`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:412

***

### groupIdentifierTo

> **groupIdentifierTo**: [`GroupId`](../../../../datatype/README.md#groupid)

The GroupIdentifierTo field specifies the identifier of the group to which the scene is to be copied.
Together with the SceneIdentifierTo field, this field uniquely identifies the scene to copy to the Scene
Table.

#### See

MatterSpecification.v11.Cluster § 1.4.9.11.4

#### Inherited from

`TypeFromSchema.groupIdentifierTo`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:428

***

### mode

> **mode**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

The Mode field contains information of how the scene copy is to proceed. This field shall be formatted as
illustrated in Format of the Mode Field of the CopyScene Command.

The CopyAllScenes subfield is 1-bit in length and indicates whether all scenes are to be copied. If this
value is set to 1, all scenes are to be copied and the SceneIdentifierFrom and SceneIdentifierTo fields
shall be ignored. Otherwise this field is set to 0.

#### See

MatterSpecification.v11.Cluster § 1.4.9.11.1

#### Type declaration

##### copyAllScenes

> **copyAllScenes**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### reserved

> **reserved**: [`BitField`](../../../../schema/README.md#bitfield)

#### Inherited from

`TypeFromSchema.mode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:401

***

### sceneIdentifierFrom

> **sceneIdentifierFrom**: `number`

The SceneIdentifierFrom field specifies the identifier of the scene from which the scene is to be copied.
Together with the GroupIdentifierFrom field, this field uniquely identifies the scene to copy from the Scene
Table.

#### See

MatterSpecification.v11.Cluster § 1.4.9.11.3

#### Inherited from

`TypeFromSchema.sceneIdentifierFrom`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:420

***

### sceneIdentifierTo

> **sceneIdentifierTo**: `number`

The SceneIdentifierTo field specifies the identifier of the scene to which the scene is to be copied.
Together with the GroupIdentifierTo field, this field uniquely identifies the scene to copy to the Scene
Table.

#### See

MatterSpecification.v11.Cluster § 1.4.9.11.5

#### Inherited from

`TypeFromSchema.sceneIdentifierTo`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:436
