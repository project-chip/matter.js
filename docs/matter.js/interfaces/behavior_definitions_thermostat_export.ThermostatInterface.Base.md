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

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L43)

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

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L38)
