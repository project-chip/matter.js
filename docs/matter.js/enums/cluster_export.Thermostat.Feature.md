[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Thermostat](../modules/cluster_export.Thermostat.md) / Feature

# Enumeration: Feature

[cluster/export](../modules/cluster_export.md).[Thermostat](../modules/cluster_export.Thermostat.md).Feature

These are optional features supported by ThermostatCluster.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.3.1

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

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:576](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L576)

___

### Cooling

• **Cooling** = ``"Cooling"``

Cooling

Thermostat is capable of managing a cooling device

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:548](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L548)

___

### Heating

• **Heating** = ``"Heating"``

Heating

Thermostat is capable of managing a heating device

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:541](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L541)

___

### LocalTemperatureNotExposed

• **LocalTemperatureNotExposed** = ``"LocalTemperatureNotExposed"``

LocalTemperatureNotExposed

Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:583](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L583)

___

### Occupancy

• **Occupancy** = ``"Occupancy"``

Occupancy

Supports Occupied and Unoccupied setpoints

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:555](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L555)

___

### ScheduleConfiguration

• **ScheduleConfiguration** = ``"ScheduleConfiguration"``

ScheduleConfiguration

Supports remote configuration of a weekly schedule of setpoint transitions

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:562](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L562)

___

### Setback

• **Setback** = ``"Setback"``

Setback

Supports configurable setback (or span)

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:569](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L569)
