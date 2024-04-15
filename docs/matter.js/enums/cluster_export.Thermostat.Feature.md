[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Thermostat](../modules/cluster_export.Thermostat.md) / Feature

# Enumeration: Feature

[cluster/export](../modules/cluster_export.md).[Thermostat](../modules/cluster_export.Thermostat.md).Feature

These are optional features supported by ThermostatCluster.

**`See`**

MatterSpecification.v11.Cluster § 4.3.3.1

## Table of contents

### Enumeration Members

- [AutoMode](cluster_export.Thermostat.Feature.md#automode)
- [Cooling](cluster_export.Thermostat.Feature.md#cooling)
- [Heating](cluster_export.Thermostat.Feature.md#heating)
- [LocalTemperatureNotExposed](cluster_export.Thermostat.Feature.md#localtemperaturenotexposed)
- [Occupancy](cluster_export.Thermostat.Feature.md#occupancy)
- [ScheduleConfiguration](cluster_export.Thermostat.Feature.md#scheduleconfiguration)
- [Setback](cluster_export.Thermostat.Feature.md#setback)

## Enumeration Members

### AutoMode

• **AutoMode** = ``"AutoMode"``

AutoMode

Supports a System Mode of Auto

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1081](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1081)

___

### Cooling

• **Cooling** = ``"Cooling"``

Cooling

Thermostat is capable of managing a cooling device

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1053](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1053)

___

### Heating

• **Heating** = ``"Heating"``

Heating

Thermostat is capable of managing a heating device

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1046](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1046)

___

### LocalTemperatureNotExposed

• **LocalTemperatureNotExposed** = ``"LocalTemperatureNotExposed"``

LocalTemperatureNotExposed

Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1088](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1088)

___

### Occupancy

• **Occupancy** = ``"Occupancy"``

Occupancy

Supports Occupied and Unoccupied setpoints

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1060](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1060)

___

### ScheduleConfiguration

• **ScheduleConfiguration** = ``"ScheduleConfiguration"``

ScheduleConfiguration

Supports remote configuration of a weekly schedule of setpoint transitions

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1067](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1067)

___

### Setback

• **Setback** = ``"Setback"``

Setback

Supports configurable setback (or span)

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1074](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1074)
