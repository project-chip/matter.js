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

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:82](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L82)

___

### CoolingAndHeatingWithReheat

• **CoolingAndHeatingWithReheat** = ``5``

All modes are possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:87](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L87)

___

### CoolingOnly

• **CoolingOnly** = ``0``

Heat and Emergency are not possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:62](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L62)

___

### CoolingWithReheat

• **CoolingWithReheat** = ``1``

Heat and Emergency are not possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:67](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L67)

___

### HeatingOnly

• **HeatingOnly** = ``2``

Cool and precooling (see Terms) are not possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:72](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L72)

___

### HeatingWithReheat

• **HeatingWithReheat** = ``3``

Cool and precooling are not possible

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:77](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L77)
