[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Thermostat](../modules/exports_cluster.Thermostat.md) / ControlSequenceOfOperation

# Enumeration: ControlSequenceOfOperation

[exports/cluster](../modules/exports_cluster.md).[Thermostat](../modules/exports_cluster.Thermostat.md).ControlSequenceOfOperation

The value of the Thermostat controlSequenceOfOperation attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.7.23

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

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:54

___

### CoolingAndHeatingWithReheat

• **CoolingAndHeatingWithReheat** = ``5``

All modes are possible

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:58

___

### CoolingOnly

• **CoolingOnly** = ``0``

Heat and Emergency are not possible

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:38

___

### CoolingWithReheat

• **CoolingWithReheat** = ``1``

Heat and Emergency are not possible

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:42

___

### HeatingOnly

• **HeatingOnly** = ``2``

Cool and precooling (see Terms) are not possible

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:46

___

### HeatingWithReheat

• **HeatingWithReheat** = ``3``

Cool and precooling are not possible

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:50
