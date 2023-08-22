[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / scenesTableEntry

# Interface: scenesTableEntry

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).scenesTableEntry

## Table of contents

### Properties

- [extensionFieldSets](export._internal_.scenesTableEntry.md#extensionfieldsets)
- [sceneId](export._internal_.scenesTableEntry.md#sceneid)
- [sceneName](export._internal_.scenesTableEntry.md#scenename)
- [sceneTransitionTime](export._internal_.scenesTableEntry.md#scenetransitiontime)
- [scenesGroupId](export._internal_.scenesTableEntry.md#scenesgroupid)
- [transitionTime100ms](export._internal_.scenesTableEntry.md#transitiontime100ms)

## Properties

### extensionFieldSets

• **extensionFieldSets**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `attributeValue`: [`FieldType`](exports_tlv.FieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](exports_tlv.FieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\>  }\>[]

See the Scene Table Extensions subsections of individual clusters. A Scene Table Extension SHALL only use attributes
marked with "S" in the Quality column of the cluster definition. Each extension field set holds a set of values of
these attributes for a cluster implemented on the same endpoint. The sum of all such sets defines a scene.

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:25

___

### sceneId

• **sceneId**: `number`

The identifier, unique within this group, which is used to identify this scene.

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:15

___

### sceneName

• `Optional` **sceneName**: `string`

The name of the scene (optional)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:17

___

### sceneTransitionTime

• **sceneTransitionTime**: `number`

The amount of time, in seconds, it will take for a cluster to change from its current state to the requested state.

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:19

___

### scenesGroupId

• **scenesGroupId**: `number`

The group identifier for which this scene applies, or 0 if the scene is not associated with a group.

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:13

___

### transitionTime100ms

• **transitionTime100ms**: `number`

Together with the SceneTransitionTime field, this field allows the transition time to be specified in tenths of a second.

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:27
