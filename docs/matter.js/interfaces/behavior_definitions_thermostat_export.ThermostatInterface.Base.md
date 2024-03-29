[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/thermostat/export](../modules/behavior_definitions_thermostat_export.md) / [ThermostatInterface](../modules/behavior_definitions_thermostat_export.ThermostatInterface.md) / Base

# Interface: Base

[behavior/definitions/thermostat/export](../modules/behavior_definitions_thermostat_export.md).[ThermostatInterface](../modules/behavior_definitions_thermostat_export.ThermostatInterface.md).Base

## Table of contents

### Methods

- [getRelayStatusLog](behavior_definitions_thermostat_export.ThermostatInterface.Base.md#getrelaystatuslog)
- [setpointRaiseLower](behavior_definitions_thermostat_export.ThermostatInterface.Base.md#setpointraiselower)

## Methods

### getRelayStatusLog

▸ **getRelayStatusLog**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.8

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:44](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L44)

___

### setpointRaiseLower

▸ **setpointRaiseLower**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.8

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:39](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L39)
