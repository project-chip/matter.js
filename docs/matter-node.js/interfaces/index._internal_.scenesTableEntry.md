[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / scenesTableEntry

# Interface: scenesTableEntry

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).scenesTableEntry

## Table of contents

### Properties

- [extensionFieldSets](index._internal_.scenesTableEntry.md#extensionfieldsets)
- [sceneId](index._internal_.scenesTableEntry.md#sceneid)
- [sceneName](index._internal_.scenesTableEntry.md#scenename)
- [sceneTransitionTime](index._internal_.scenesTableEntry.md#scenetransitiontime)
- [scenesGroupId](index._internal_.scenesTableEntry.md#scenesgroupid)
- [transitionTime100ms](index._internal_.scenesTableEntry.md#transitiontime100ms)

## Properties

### extensionFieldSets

• **extensionFieldSets**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](exports_tlv.FieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]

See the Scene Table Extensions subsections of individual clusters. A Scene Table Extension SHALL only use attributes
marked with "S" in the Quality column of the cluster definition. Each extension field set holds a set of values of
these attributes for a cluster implemented on the same endpoint. The sum of all such sets defines a scene.

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:27

___

### sceneId

• **sceneId**: `number`

The identifier, unique within this group, which is used to identify this scene.

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:17

___

### sceneName

• `Optional` **sceneName**: `string`

The name of the scene (optional)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:19

___

### sceneTransitionTime

• **sceneTransitionTime**: `number`

The amount of time, in seconds, it will take for a cluster to change from its current state to the requested state.

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:21

___

### scenesGroupId

• **scenesGroupId**: `number`

The group identifier for which this scene applies, or 0 if the scene is not associated with a group.

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:15

___

### transitionTime100ms

• **transitionTime100ms**: `number`

Together with the SceneTransitionTime field, this field allows the transition time to be specified in tenths of a second.

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:29
