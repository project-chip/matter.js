[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/ota-software-update-requestor/export](../../../README.md) / [OtaSoftwareUpdateRequestorInterface](../README.md) / Base

# Interface: Base

## Methods

### announceOtaProvider()

> **announceOtaProvider**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command may be invoked by Administrators to announce the presence of a particular OTA Provider.

This command shall be scoped to the accessing fabric.

If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 11.19.7.6.1

#### Source

[packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts#L35)
