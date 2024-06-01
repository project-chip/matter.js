[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/media-input/export](../../../README.md) / [MediaInputBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### currentInput

> **currentInput**: `number`

This field contains the value of the index field of the currently selected InputInfoStruct.

#### See

MatterSpecification.v11.Cluster § 6.9.3.2

#### Inherited from

`StateType.currentInput`

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:185](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L185)

***

### inputList

> **inputList**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

This list provides the media inputs supported by the device.

#### See

MatterSpecification.v11.Cluster § 6.9.3.1

#### Inherited from

`StateType.inputList`

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L178)
