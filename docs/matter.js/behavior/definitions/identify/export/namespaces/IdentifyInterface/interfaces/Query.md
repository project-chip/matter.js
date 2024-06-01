[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/identify/export](../../../README.md) / [IdentifyInterface](../README.md) / Query

# Interface: Query

## Methods

### identifyQuery()

> **identifyQuery**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This command allows the sending device to request the target or targets to respond if they are currently
identifying themselves.

This command has no data fields.

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 1.2.6.2

#### Source

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L69)
