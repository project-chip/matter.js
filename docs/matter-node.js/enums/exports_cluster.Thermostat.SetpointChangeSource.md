[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Thermostat](../modules/exports_cluster.Thermostat.md) / SetpointChangeSource

# Enumeration: SetpointChangeSource

[exports/cluster](../modules/exports_cluster.md).[Thermostat](../modules/exports_cluster.Thermostat.md).SetpointChangeSource

The value of the Thermostat setpointChangeSource attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.7.34

## Table of contents

### Enumeration Members

- [External](exports_cluster.Thermostat.SetpointChangeSource.md#external)
- [Manual](exports_cluster.Thermostat.SetpointChangeSource.md#manual)
- [Schedule](exports_cluster.Thermostat.SetpointChangeSource.md#schedule)

## Enumeration Members

### External

• **External** = ``2``

Externally-initiated setpoint change (e.g., DRLC cluster command, attribute write)

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:190

___

### Manual

• **Manual** = ``0``

Manual, user-initiated setpoint change via the thermostat

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:182

___

### Schedule

• **Schedule** = ``1``

Schedule/internal programming-initiated setpoint change

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:186
