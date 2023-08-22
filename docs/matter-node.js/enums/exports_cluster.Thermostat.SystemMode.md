[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Thermostat](../modules/exports_cluster.Thermostat.md) / SystemMode

# Enumeration: SystemMode

[exports/cluster](../modules/exports_cluster.md).[Thermostat](../modules/exports_cluster.Thermostat.md).SystemMode

The value of the Thermostat systemMode attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.7.24

## Table of contents

### Enumeration Members

- [Auto](exports_cluster.Thermostat.SystemMode.md#auto)
- [Cool](exports_cluster.Thermostat.SystemMode.md#cool)
- [Dry](exports_cluster.Thermostat.SystemMode.md#dry)
- [EmergencyHeat](exports_cluster.Thermostat.SystemMode.md#emergencyheat)
- [FanOnly](exports_cluster.Thermostat.SystemMode.md#fanonly)
- [Heat](exports_cluster.Thermostat.SystemMode.md#heat)
- [Off](exports_cluster.Thermostat.SystemMode.md#off)
- [Precooling](exports_cluster.Thermostat.SystemMode.md#precooling)
- [Sleep](exports_cluster.Thermostat.SystemMode.md#sleep)

## Enumeration Members

### Auto

• **Auto** = ``1``

Demand is generated for either Cooling or Heating, as required

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:73

___

### Cool

• **Cool** = ``3``

Demand is only generated for Cooling

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:77

___

### Dry

• **Dry** = ``8``

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:91

___

### EmergencyHeat

• **EmergencyHeat** = ``5``

2nd stage heating is in use to achieve desired temperature

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:85

___

### FanOnly

• **FanOnly** = ``7``

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:90

___

### Heat

• **Heat** = ``4``

Demand is only generated for Heating

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:81

___

### Off

• **Off** = ``0``

The Thermostat does not generate demand for Cooling or Heating

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:69

___

### Precooling

• **Precooling** = ``6``

(see Terms)

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:89

___

### Sleep

• **Sleep** = ``9``

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:92
