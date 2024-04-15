[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Thermostat](../modules/cluster_export.Thermostat.md) / ControlSequenceOfOperation

# Enumeration: ControlSequenceOfOperation

[cluster/export](../modules/cluster_export.md).[Thermostat](../modules/cluster_export.Thermostat.md).ControlSequenceOfOperation

The value of the Thermostat controlSequenceOfOperation attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.23

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

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:207](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L207)

___

### CoolingAndHeatingWithReheat

• **CoolingAndHeatingWithReheat** = ``5``

All modes are possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L212)

___

### CoolingOnly

• **CoolingOnly** = ``0``

Heat and Emergency are not possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:187](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L187)

___

### CoolingWithReheat

• **CoolingWithReheat** = ``1``

Heat and Emergency are not possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L192)

___

### HeatingOnly

• **HeatingOnly** = ``2``

Cool and precooling (see Terms) are not possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L197)

___

### HeatingWithReheat

• **HeatingWithReheat** = ``3``

Cool and precooling are not possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L202)
