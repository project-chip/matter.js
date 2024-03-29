[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Thermostat](../modules/cluster_export.Thermostat.md) / ThermostatScheduleTransition

# Interface: ThermostatScheduleTransition

[cluster/export](../modules/cluster_export.md).[Thermostat](../modules/cluster_export.Thermostat.md).ThermostatScheduleTransition

This represents a single transition in a Thermostat schedule

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.9.5

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvThermostatScheduleTransition`](../modules/cluster_export.Thermostat.md#tlvthermostatscheduletransition)\>

  ↳ **`ThermostatScheduleTransition`**

## Table of contents

### Properties

- [coolSetpoint](cluster_export.Thermostat.ThermostatScheduleTransition.md#coolsetpoint)
- [heatSetpoint](cluster_export.Thermostat.ThermostatScheduleTransition.md#heatsetpoint)
- [transitionTime](cluster_export.Thermostat.ThermostatScheduleTransition.md#transitiontime)

## Properties

### coolSetpoint

• **coolSetpoint**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.coolSetpoint

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:96](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L96)

___

### heatSetpoint

• **heatSetpoint**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.heatSetpoint

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:95](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L95)

___

### transitionTime

• **transitionTime**: `number`

This field represents the start time of the schedule transition during the associated day. The time will be
represented by a 16 bits unsigned integer to designate the minutes since midnight. For example, 6am will be
represented by 360 minutes since midnight and 11:30pm will be represented by 1410 minutes since midnight.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.9.5.1

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L93)
