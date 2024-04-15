[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Thermostat](../modules/exports_cluster.Thermostat.md) / ControlSequenceOfOperation

# Enumeration: ControlSequenceOfOperation

[exports/cluster](../modules/exports_cluster.md).[Thermostat](../modules/exports_cluster.Thermostat.md).ControlSequenceOfOperation

The value of the Thermostat controlSequenceOfOperation attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.23

## Table of contents

### Enumeration Members

- [CoolingAndHeating](exports_cluster.Thermostat.ControlSequenceOfOperation.md#coolingandheating)
- [CoolingAndHeatingWithReheat](exports_cluster.Thermostat.ControlSequenceOfOperation.md#coolingandheatingwithreheat)
- [CoolingOnly](exports_cluster.Thermostat.ControlSequenceOfOperation.md#coolingonly)
- [CoolingWithReheat](exports_cluster.Thermostat.ControlSequenceOfOperation.md#coolingwithreheat)
- [HeatingOnly](exports_cluster.Thermostat.ControlSequenceOfOperation.md#heatingonly)
- [HeatingWithReheat](exports_cluster.Thermostat.ControlSequenceOfOperation.md#heatingwithreheat)

## Enumeration Members

### CoolingAndHeating

• **CoolingAndHeating** = ``4``

All modes are possible

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:233

___

### CoolingAndHeatingWithReheat

• **CoolingAndHeatingWithReheat** = ``5``

All modes are possible

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:237

___

### CoolingOnly

• **CoolingOnly** = ``0``

Heat and Emergency are not possible

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:217

___

### CoolingWithReheat

• **CoolingWithReheat** = ``1``

Heat and Emergency are not possible

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:221

___

### HeatingOnly

• **HeatingOnly** = ``2``

Cool and precooling (see Terms) are not possible

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:225

___

### HeatingWithReheat

• **HeatingWithReheat** = ``3``

Cool and precooling are not possible

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:229
