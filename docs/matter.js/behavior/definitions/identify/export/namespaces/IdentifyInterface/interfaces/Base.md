[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/identify/export](../../../README.md) / [IdentifyInterface](../README.md) / Base

# Interface: Base

## Methods

### identify()

> **identify**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command starts or stops the receiving device identifying itself.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.2.6.1

#### Source

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L46)

***

### triggerEffect()

> **triggerEffect**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command allows the support of feedback to the user, such as a certain light effect. It is used to allow
an implementation to provide visual feedback to the user under certain circumstances such as a color light
turning green when it has successfully connected to a network. The use of this command and the effects
themselves are entirely up to the implementer to use whenever a visual feedback is useful but it is not the
same as and does not replace the identify mechanism used during commissioning.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.2.6.3

#### Source

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L57)
