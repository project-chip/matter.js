[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Thermostat](../README.md) / ControlSequenceOfOperation

# Enumeration: ControlSequenceOfOperation

The value of the Thermostat controlSequenceOfOperation attribute

## See

MatterSpecification.v11.Cluster § 4.3.7.23

## Enumeration Members

### CoolingAndHeating

> **CoolingAndHeating**: `4`

All modes are possible

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:207](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L207)

***

### CoolingAndHeatingWithReheat

> **CoolingAndHeatingWithReheat**: `5`

All modes are possible

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L212)

***

### CoolingOnly

> **CoolingOnly**: `0`

Heat and Emergency are not possible

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:187](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L187)

***

### CoolingWithReheat

> **CoolingWithReheat**: `1`

Heat and Emergency are not possible

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L192)

***

### HeatingOnly

> **HeatingOnly**: `2`

Cool and precooling (see Terms) are not possible

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:197](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L197)

***

### HeatingWithReheat

> **HeatingWithReheat**: `3`

Cool and precooling are not possible

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L202)
