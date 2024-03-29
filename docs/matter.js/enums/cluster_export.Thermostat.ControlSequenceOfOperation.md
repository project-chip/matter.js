[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Thermostat](../modules/cluster_export.Thermostat.md) / ControlSequenceOfOperation

# Enumeration: ControlSequenceOfOperation

[cluster/export](../modules/cluster_export.md).[Thermostat](../modules/cluster_export.Thermostat.md).ControlSequenceOfOperation

The value of the Thermostat controlSequenceOfOperation attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.23

## Table of contents

### Enumeration Members

- [CoolingAndHeating](cluster_export.Thermostat.ControlSequenceOfOperation.md#coolingandheating)
- [CoolingAndHeatingWithReheat](cluster_export.Thermostat.ControlSequenceOfOperation.md#coolingandheatingwithreheat)
- [CoolingOnly](cluster_export.Thermostat.ControlSequenceOfOperation.md#coolingonly)
- [CoolingWithReheat](cluster_export.Thermostat.ControlSequenceOfOperation.md#coolingwithreheat)
- [HeatingOnly](cluster_export.Thermostat.ControlSequenceOfOperation.md#heatingonly)
- [HeatingWithReheat](cluster_export.Thermostat.ControlSequenceOfOperation.md#heatingwithreheat)

## Enumeration Members

### CoolingAndHeating

• **CoolingAndHeating** = ``4``

All modes are possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:208](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L208)

___

### CoolingAndHeatingWithReheat

• **CoolingAndHeatingWithReheat** = ``5``

All modes are possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:213](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L213)

___

### CoolingOnly

• **CoolingOnly** = ``0``

Heat and Emergency are not possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:188](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L188)

___

### CoolingWithReheat

• **CoolingWithReheat** = ``1``

Heat and Emergency are not possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:193](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L193)

___

### HeatingOnly

• **HeatingOnly** = ``2``

Cool and precooling (see Terms) are not possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:198](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L198)

___

### HeatingWithReheat

• **HeatingWithReheat** = ``3``

Cool and precooling are not possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:203](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L203)
