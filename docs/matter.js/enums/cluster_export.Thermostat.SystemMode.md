[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Thermostat](../modules/cluster_export.Thermostat.md) / SystemMode

# Enumeration: SystemMode

[cluster/export](../modules/cluster_export.md).[Thermostat](../modules/cluster_export.Thermostat.md).SystemMode

The value of the Thermostat systemMode attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.24

## Table of contents

### Enumeration Members

- [Auto](cluster_export.Thermostat.SystemMode.md#auto)
- [Cool](cluster_export.Thermostat.SystemMode.md#cool)
- [Dry](cluster_export.Thermostat.SystemMode.md#dry)
- [EmergencyHeat](cluster_export.Thermostat.SystemMode.md#emergencyheat)
- [FanOnly](cluster_export.Thermostat.SystemMode.md#fanonly)
- [Heat](cluster_export.Thermostat.SystemMode.md#heat)
- [Off](cluster_export.Thermostat.SystemMode.md#off)
- [Precooling](cluster_export.Thermostat.SystemMode.md#precooling)
- [Sleep](cluster_export.Thermostat.SystemMode.md#sleep)

## Enumeration Members

### Auto

• **Auto** = ``1``

Demand is generated for either Cooling or Heating, as required

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:230](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L230)

___

### Cool

• **Cool** = ``3``

Demand is only generated for Cooling

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:235](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L235)

___

### Dry

• **Dry** = ``8``

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:253](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L253)

___

### EmergencyHeat

• **EmergencyHeat** = ``5``

2nd stage heating is in use to achieve desired temperature

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:245](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L245)

___

### FanOnly

• **FanOnly** = ``7``

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:252](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L252)

___

### Heat

• **Heat** = ``4``

Demand is only generated for Heating

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:240](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L240)

___

### Off

• **Off** = ``0``

The Thermostat does not generate demand for Cooling or Heating

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:225](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L225)

___

### Precooling

• **Precooling** = ``6``

(see Terms)

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:250](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L250)

___

### Sleep

• **Sleep** = ``9``

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:254](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L254)
