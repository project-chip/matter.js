[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Thermostat](../README.md) / SetpointChangeSource

# Enumeration: SetpointChangeSource

The value of the Thermostat setpointChangeSource attribute

## See

MatterSpecification.v11.Cluster § 4.3.7.34

## Enumeration Members

### External

> **External**: `2`

Externally-initiated setpoint change (e.g., DRLC cluster command, attribute write)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:369

***

### Manual

> **Manual**: `0`

Manual, user-initiated setpoint change via the thermostat

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:361

***

### Schedule

> **Schedule**: `1`

Schedule/internal programming-initiated setpoint change

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:365
