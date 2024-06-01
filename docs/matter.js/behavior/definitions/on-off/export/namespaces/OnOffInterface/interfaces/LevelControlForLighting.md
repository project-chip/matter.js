[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/on-off/export](../../../README.md) / [OnOffInterface](../README.md) / LevelControlForLighting

# Interface: LevelControlForLighting

## Methods

### offWithEffect()

> **offWithEffect**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The OffWithEffect command allows devices to be turned off using enhanced ways of fading.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.5.7.4

#### Source

[packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts#L61)

***

### onWithRecallGlobalScene()

> **onWithRecallGlobalScene**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The OnWithRecallGlobalScene command allows the recall of the settings when the device was turned off.

The OnWithRecallGlobalScene command shall have no parameters.

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.5.7.5

#### Source

[packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts#L70)

***

### onWithTimedOff()

> **onWithTimedOff**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The OnWithTimedOff command allows devices to be turned on for a specific duration with a guarded off
duration so that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, received
during this time, are prevented from turning the devices back on. Further

OnWithTimedOff commands received while the server is turned on, will update the period that the device is
turned on.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.5.7.6

#### Source

[packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts#L82)
