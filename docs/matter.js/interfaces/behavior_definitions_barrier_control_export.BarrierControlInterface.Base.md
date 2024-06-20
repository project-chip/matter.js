[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/barrier-control/export](../modules/behavior_definitions_barrier_control_export.md) / [BarrierControlInterface](../modules/behavior_definitions_barrier_control_export.BarrierControlInterface.md) / Base

# Interface: Base

[behavior/definitions/barrier-control/export](../modules/behavior_definitions_barrier_control_export.md).[BarrierControlInterface](../modules/behavior_definitions_barrier_control_export.BarrierControlInterface.md).Base

## Table of contents

### Methods

- [barrierControlGoToPercent](behavior_definitions_barrier_control_export.BarrierControlInterface.Base.md#barriercontrolgotopercent)
- [barrierControlStop](behavior_definitions_barrier_control_export.BarrierControlInterface.Base.md#barriercontrolstop)

## Methods

### barrierControlGoToPercent

▸ **barrierControlGoToPercent**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `percentOpen`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts:17](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts#L17)

___

### barrierControlStop

▸ **barrierControlStop**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts:18](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts#L18)
