[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/audio-output/export](../../../README.md) / [AudioOutputBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### currentOutput

> **currentOutput**: `number`

This field contains the value of the index field of the currently selected OutputInfoStruct.

#### See

MatterSpecification.v11.Cluster § 6.5.3.2

#### Inherited from

`StateType.currentOutput`

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:164](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L164)

***

### outputList

> **outputList**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

This list provides the outputs supported by the device.

#### See

MatterSpecification.v11.Cluster § 6.5.3.1

#### Inherited from

`StateType.outputList`

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L157)
