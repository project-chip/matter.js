[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / scenesTableEntry

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

• **extensionFieldSets**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeValueList`: [`FieldType`](tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](tlv_export.FieldType.md)<[`TlvStream`](../modules/tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](tlv_export.FieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\>  }\>[]

See the Scene Table Extensions subsections of individual clusters. A Scene Table Extension SHALL only use attributes
marked with "S" in the Quality column of the cluster definition. Each extension field set holds a set of values of
these attributes for a cluster implemented on the same endpoint. The sum of all such sets defines a scene.

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/ScenesServer.ts#L38)

___

### sceneId

• **sceneId**: `number`

The identifier, unique within this group, which is used to identify this scene.

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/ScenesServer.ts#L25)

___

### sceneName

• `Optional` **sceneName**: `string`

The name of the scene (optional)

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/ScenesServer.ts#L28)

___

### sceneTransitionTime

• **sceneTransitionTime**: `number`

The amount of time, in seconds, it will take for a cluster to change from its current state to the requested state.

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/ScenesServer.ts#L31)

___

### scenesGroupId

• **scenesGroupId**: `number`

The group identifier for which this scene applies, or 0 if the scene is not associated with a group.

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/ScenesServer.ts#L22)

___

### transitionTime100ms

• **transitionTime100ms**: `number`

Together with the SceneTransitionTime field, this field allows the transition time to be specified in tenths of a second.

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/ScenesServer.ts#L41)
