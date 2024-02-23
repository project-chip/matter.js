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

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:104](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L104)

___

### Cool

• **Cool** = ``3``

Demand is only generated for Cooling

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:109](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L109)

___

### Dry

• **Dry** = ``8``

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:127](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L127)

___

### EmergencyHeat

• **EmergencyHeat** = ``5``

2nd stage heating is in use to achieve desired temperature

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:119](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L119)

___

### FanOnly

• **FanOnly** = ``7``

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:126](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L126)

___

### Heat

• **Heat** = ``4``

Demand is only generated for Heating

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:114](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L114)

___

### Off

• **Off** = ``0``

The Thermostat does not generate demand for Cooling or Heating

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:99](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L99)

___

### Precooling

• **Precooling** = ``6``

(see Terms)

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:124](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L124)

___

### Sleep

• **Sleep** = ``9``

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:128](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L128)
