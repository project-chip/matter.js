[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Thermostat](../modules/cluster_export.Thermostat.md) / ThermostatScheduleTransition

# Interface: ThermostatScheduleTransition

[cluster/export](../modules/cluster_export.md).[Thermostat](../modules/cluster_export.Thermostat.md).ThermostatScheduleTransition

This represents a single transition in a Thermostat schedule

**`See`**

MatterSpecification.v11.Cluster § 4.3.9.5

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

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L95)

___

### heatSetpoint

• **heatSetpoint**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.heatSetpoint

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L94)

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

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L92)
