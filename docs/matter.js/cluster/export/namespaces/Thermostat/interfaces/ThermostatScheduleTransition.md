[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Thermostat](../README.md) / ThermostatScheduleTransition

# Interface: ThermostatScheduleTransition

This represents a single transition in a Thermostat schedule

## See

MatterSpecification.v11.Cluster § 4.3.9.5

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvThermostatScheduleTransition`](../README.md#tlvthermostatscheduletransition)\>

## Properties

### coolSetpoint

> **coolSetpoint**: `null` \| `number`

#### Inherited from

`TypeFromSchema.coolSetpoint`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L95)

***

### heatSetpoint

> **heatSetpoint**: `null` \| `number`

#### Inherited from

`TypeFromSchema.heatSetpoint`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L94)

***

### transitionTime

> **transitionTime**: `number`

This field represents the start time of the schedule transition during the associated day. The time will be
represented by a 16 bits unsigned integer to designate the minutes since midnight. For example, 6am will be
represented by 360 minutes since midnight and 11:30pm will be represented by 1410 minutes since midnight.

#### See

MatterSpecification.v11.Cluster § 4.3.9.5.1

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L92)
