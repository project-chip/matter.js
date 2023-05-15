[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / scenesTableEntry

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

• **extensionFieldSets**: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](tlv.FieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]

See the Scene Table Extensions subsections of individual clusters. A Scene Table Extension SHALL only use attributes
marked with "S" in the Quality column of the cluster definition. Each extension field set holds a set of values of
these attributes for a cluster implemented on the same endpoint. The sum of all such sets defines a scene.

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L39)

___

### sceneId

• **sceneId**: `number`

The identifier, unique within this group, which is used to identify this scene.

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L26)

___

### sceneName

• `Optional` **sceneName**: `string`

The name of the scene (optional)

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L29)

___

### sceneTransitionTime

• **sceneTransitionTime**: `number`

The amount of time, in seconds, it will take for a cluster to change from its current state to the requested state.

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L32)

___

### scenesGroupId

• **scenesGroupId**: `number`

The group identifier for which this scene applies, or 0 if the scene is not associated with a group.

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L23)

___

### transitionTime100ms

• **transitionTime100ms**: `number`

Together with the SceneTransitionTime field, this field allows the transition time to be specified in tenths of a second.

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L42)
