[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Thermostat](../modules/cluster_export.Thermostat.md) / SetpointChangeSource

# Enumeration: SetpointChangeSource

[cluster/export](../modules/cluster_export.md).[Thermostat](../modules/cluster_export.Thermostat.md).SetpointChangeSource

The value of the Thermostat setpointChangeSource attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.34

## Table of contents

### Enumeration Members

- [External](cluster_export.Thermostat.SetpointChangeSource.md#external)
- [Manual](cluster_export.Thermostat.SetpointChangeSource.md#manual)
- [Schedule](cluster_export.Thermostat.SetpointChangeSource.md#schedule)

## Enumeration Members

### External

• **External** = ``2``

Externally-initiated setpoint change (e.g., DRLC cluster command, attribute write)

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:367](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L367)

___

### Manual

• **Manual** = ``0``

Manual, user-initiated setpoint change via the thermostat

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:357](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L357)

___

### Schedule

• **Schedule** = ``1``

Schedule/internal programming-initiated setpoint change

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:362](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L362)
