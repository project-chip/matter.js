[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / [\<internal\>](../README.md) / scenesTableEntry

# Interface: scenesTableEntry

## Properties

### extensionFieldSets

> **extensionFieldSets**: [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

See the Scene Table Extensions subsections of individual clusters. A Scene Table Extension SHALL only use attributes
marked with "S" in the Quality column of the cluster definition. Each extension field set holds a set of values of
these attributes for a cluster implemented on the same endpoint. The sum of all such sets defines a scene.

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L36)

***

### sceneId

> **sceneId**: `number`

The identifier, unique within this group, which is used to identify this scene.

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L23)

***

### sceneName?

> `optional` **sceneName**: `string`

The name of the scene (optional)

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L26)

***

### sceneTransitionTime

> **sceneTransitionTime**: `number`

The amount of time, in seconds, it will take for a cluster to change from its current state to the requested state.

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L29)

***

### scenesGroupId

> **scenesGroupId**: `number`

The group identifier for which this scene applies, or 0 if the scene is not associated with a group.

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L20)

***

### transitionTime100ms

> **transitionTime100ms**: `number`

Together with the SceneTransitionTime field, this field allows the transition time to be specified in tenths of a second.

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L39)
