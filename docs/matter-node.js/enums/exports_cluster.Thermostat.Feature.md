[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Thermostat](../modules/exports_cluster.Thermostat.md) / Feature

# Enumeration: Feature

[exports/cluster](../modules/exports_cluster.md).[Thermostat](../modules/exports_cluster.Thermostat.md).Feature

These are optional features supported by ThermostatCluster.

**`See`**

MatterSpecification.v11.Cluster § 4.3.3.1

## Table of contents

### Enumeration Members

- [AutoMode](exports_cluster.Thermostat.Feature.md#automode)
- [Cooling](exports_cluster.Thermostat.Feature.md#cooling)
- [Heating](exports_cluster.Thermostat.Feature.md#heating)
- [LocalTemperatureNotExposed](exports_cluster.Thermostat.Feature.md#localtemperaturenotexposed)
- [Occupancy](exports_cluster.Thermostat.Feature.md#occupancy)
- [ScheduleConfiguration](exports_cluster.Thermostat.Feature.md#scheduleconfiguration)
- [Setback](exports_cluster.Thermostat.Feature.md#setback)

## Enumeration Members

### AutoMode

• **AutoMode** = ``"AutoMode"``

AutoMode

Supports a System Mode of Auto

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1032

___

### Cooling

• **Cooling** = ``"Cooling"``

Cooling

Thermostat is capable of managing a cooling device

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1008

___

### Heating

• **Heating** = ``"Heating"``

Heating

Thermostat is capable of managing a heating device

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1002

___

### LocalTemperatureNotExposed

• **LocalTemperatureNotExposed** = ``"LocalTemperatureNotExposed"``

LocalTemperatureNotExposed

Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1038

___

### Occupancy

• **Occupancy** = ``"Occupancy"``

Occupancy

Supports Occupied and Unoccupied setpoints

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1014

___

### ScheduleConfiguration

• **ScheduleConfiguration** = ``"ScheduleConfiguration"``

ScheduleConfiguration

Supports remote configuration of a weekly schedule of setpoint transitions

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1020

___

### Setback

• **Setback** = ``"Setback"``

Setback

Supports configurable setback (or span)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1026
