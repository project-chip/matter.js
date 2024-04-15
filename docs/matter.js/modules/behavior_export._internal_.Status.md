[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](behavior_export.md) / [\<internal\>](behavior_export._internal_.md) / Status

# Namespace: Status

[behavior/export](behavior_export.md).[\<internal\>](behavior_export._internal_.md).Status

## Table of contents

### Functions

- [assert](behavior_export._internal_.Status.md#assert)
- [formatStatus](behavior_export._internal_.Status.md#formatstatus)

## Functions

### assert

▸ **assert**(`transaction`, `acceptable`, `target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Transaction`](../interfaces/behavior_export._internal_.Transaction-1.md) |
| `acceptable` | [`Status`](../enums/behavior_export._internal_.Status-1.md)[] |
| `target` | [`Status`](../enums/behavior_export._internal_.Status-1.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Status.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Status.ts#L57)

___

### formatStatus

▸ **formatStatus**(`status`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`Status`](../enums/behavior_export._internal_.Status-1.md) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Status.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Status.ts#L65)
