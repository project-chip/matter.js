[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Thermostat](../README.md) / SetpointChangeSource

# Enumeration: SetpointChangeSource

The value of the Thermostat setpointChangeSource attribute

## See

MatterSpecification.v11.Cluster § 4.3.7.34

## Enumeration Members

### External

> **External**: `2`

Externally-initiated setpoint change (e.g., DRLC cluster command, attribute write)

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:367](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L367)

***

### Manual

> **Manual**: `0`

Manual, user-initiated setpoint change via the thermostat

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:357](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L357)

***

### Schedule

> **Schedule**: `1`

Schedule/internal programming-initiated setpoint change

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:362](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L362)
