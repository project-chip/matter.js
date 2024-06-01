[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/general-diagnostics/export](../../../README.md) / [GeneralDiagnosticsInterface](../README.md) / Base

# Interface: Base

## Methods

### testEventTrigger()

> **testEventTrigger**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command shall be supported to provide a means for certification tests to trigger some test-
plan-specific events, necessary to assist in automation of device interactions for some certification test
cases. This command shall NOT cause any changes to the state of the device that persist after the last
fabric is removed.

The fields for the TestEventTrigger command are as follows:

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 11.11.7.1

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts#L36)
