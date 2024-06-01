[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / [\<internal\>](../README.md) / scenesTableEntry

# Interface: scenesTableEntry

## Properties

### extensionFieldSets

> **extensionFieldSets**: [`TypeFromFields`](../../../tlv/README.md#typefromfieldsf)\<`object`\>[]

See the Scene Table Extensions subsections of individual clusters. A Scene Table Extension SHALL only use attributes
marked with "S" in the Quality column of the cluster definition. Each extension field set holds a set of values of
these attributes for a cluster implemented on the same endpoint. The sum of all such sets defines a scene.

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:25

***

### sceneId

> **sceneId**: `number`

The identifier, unique within this group, which is used to identify this scene.

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:15

***

### sceneName?

> `optional` **sceneName**: `string`

The name of the scene (optional)

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:17

***

### sceneTransitionTime

> **sceneTransitionTime**: `number`

The amount of time, in seconds, it will take for a cluster to change from its current state to the requested state.

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:19

***

### scenesGroupId

> **scenesGroupId**: `number`

The group identifier for which this scene applies, or 0 if the scene is not associated with a group.

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:13

***

### transitionTime100ms

> **transitionTime100ms**: `number`

Together with the SceneTransitionTime field, this field allows the transition time to be specified in tenths of a second.

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:27
