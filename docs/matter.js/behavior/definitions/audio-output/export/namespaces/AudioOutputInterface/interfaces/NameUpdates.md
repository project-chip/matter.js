[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/audio-output/export](../../../README.md) / [AudioOutputInterface](../README.md) / NameUpdates

# Interface: NameUpdates

## Methods

### renameOutput()

> **renameOutput**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Upon receipt, this shall rename the output at a specific index in the Output List.

Updates to the output name shall appear in the device’s settings menus. Name updates may automatically be
sent to the actual device to which the output connects.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 6.5.4.2

#### Source

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts#L45)
