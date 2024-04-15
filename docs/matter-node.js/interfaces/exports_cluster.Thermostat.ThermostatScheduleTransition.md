[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Thermostat](../modules/exports_cluster.Thermostat.md) / ThermostatScheduleTransition

# Interface: ThermostatScheduleTransition

[exports/cluster](../modules/exports_cluster.md).[Thermostat](../modules/exports_cluster.Thermostat.md).ThermostatScheduleTransition

This represents a single transition in a Thermostat schedule

**`See`**

MatterSpecification.v11.Cluster § 4.3.9.5

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvThermostatScheduleTransition`](../modules/exports_cluster.Thermostat.md#tlvthermostatscheduletransition)\>

  ↳ **`ThermostatScheduleTransition`**

## Table of contents

### Properties

- [coolSetpoint](exports_cluster.Thermostat.ThermostatScheduleTransition.md#coolsetpoint)
- [heatSetpoint](exports_cluster.Thermostat.ThermostatScheduleTransition.md#heatsetpoint)
- [transitionTime](exports_cluster.Thermostat.ThermostatScheduleTransition.md#transitiontime)

## Properties

### coolSetpoint

• **coolSetpoint**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.coolSetpoint

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:74

___

### heatSetpoint

• **heatSetpoint**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.heatSetpoint

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:73

___

### transitionTime

• **transitionTime**: `number`

This field represents the start time of the schedule transition during the associated day. The time will be
represented by a 16 bits unsigned integer to designate the minutes since midnight. For example, 6am will be
represented by 360 minutes since midnight and 11:30pm will be represented by 1410 minutes since midnight.

**`See`**

MatterSpecification.v11.Cluster § 4.3.9.5.1

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:72
