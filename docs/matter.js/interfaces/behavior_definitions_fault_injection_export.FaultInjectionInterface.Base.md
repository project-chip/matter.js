[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/fault-injection/export](../modules/behavior_definitions_fault_injection_export.md) / [FaultInjectionInterface](../modules/behavior_definitions_fault_injection_export.FaultInjectionInterface.md) / Base

# Interface: Base

[behavior/definitions/fault-injection/export](../modules/behavior_definitions_fault_injection_export.md).[FaultInjectionInterface](../modules/behavior_definitions_fault_injection_export.FaultInjectionInterface.md).Base

## Table of contents

### Methods

- [failAtFault](behavior_definitions_fault_injection_export.FaultInjectionInterface.Base.md#failatfault)
- [failRandomlyAtFault](behavior_definitions_fault_injection_export.FaultInjectionInterface.Base.md#failrandomlyatfault)

## Methods

### failAtFault

▸ **failAtFault**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `numCallsToFail`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `numCallsToSkip`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `takeMutex`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts#L18)

___

### failRandomlyAtFault

▸ **failRandomlyAtFault**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `percentage`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts#L19)
